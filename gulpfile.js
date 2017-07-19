const gulp = require('gulp')
const webserver = require('gulp-webserver')
const plumber = require('gulp-plumber')
const del = require('del')
// const concat = require('gulp-concat')
const runSequence = require('run-sequence')
const sourcemaps = require('gulp-sourcemaps')

const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const postcssnested = require('postcss-nested')
const postcssscss = require('postcss-scss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const babel = require('gulp-babel')
const standard = require('gulp-standard')
const uglify = require('gulp-uglify')

const src = {
  script: 'src/scripts/**/*.js',
  style: 'src/styles/**/*.scss',
  base: 'src/views/*.html',
  blog: 'src/views/blog/*.html',
  lab: 'src/views/lab/**/*.html'
}
const dest = {
  script: 'dist/scripts',
  style: 'dist/styles',
  base: '/',
  blog: '/blog',
  lab: '/lab'
}

gulp.task('build-css', () => {
  const processors = [
    postcssnested,
    autoprefixer/* ,
    cssnano() */
  ]

  return gulp.src(src.style)
    .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(processors, {syntax: postcssscss}))
      .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest.style))
})

gulp.task('build-js', () => {
  return gulp.src(src.script)
    .pipe(plumber())
      .pipe(standard())
      .pipe(standard.reporter('default', {
        breakOnWarning: false,
        breakOnError: false,
        quiet: true,
        showRuleNames: true,
        showFilePath: true
      }))
      .pipe(sourcemaps.init())
      .pipe(babel())
      // .pipe(uglify())
      .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest.script))
})

gulp.task('build-base', () => {
  return gulp.src(src.base)
})

gulp.task('build-blog', () => {
  return gulp.src(src.blog)
})

gulp.task('build-lab', () => {
  return gulp.src(src.lab)
})

gulp.task('clean-css', () => {
  return del(
    [dest.style + '/*'],
    { dryRun: false }
  ).then(paths => {
    console.log('Deleted CSS files under:\n', paths.join('\n'))
  })
})

gulp.task('clean-js', () => {
  return del(
    [`${dest.script}/*`],
    { dryRun: false }
  )
  .then(paths => {
    console.log('Deleted JS files under:\n', paths.join('\n'))
  })
})

gulp.task('clean-base', () => {
  return del(
    [dest.base + '/*.html'],
    { dryRun: false }
  ).then(paths => {
    console.log('Deleted HTML files under:\n', paths.join('\n'))
  })
})

gulp.task('clean-blog', () => {
  return del(
    [dest.blog + '/*.html'],
    { dryRun: false }
  ).then(paths => {
    console.log('Deleted HTML files under:\n', paths.join('\n'))
  })
})

gulp.task('clean-lab', () => {
  return del(
    [dest.lab + '/*.html'],
    { dryRun: false }
  ).then(paths => {
    console.log('Deleted HTML files under:\n', paths.join('\n'))
  })
})

gulp.task('clean', () => {
  runSequence('clean-css', 'clean-js', 'clean-base', 'clean-blog', 'clean-lab')
})

gulp.task('watch', () => {
  gulp.watch(src.script, ['build-js'])
  gulp.watch(src.style, ['build-css'])
  gulp.watch(src.base, ['build-base'])
  gulp.watch(src.blog, ['build-blog'])
  gulp.watch(src.lab, ['build-lab'])
})

gulp.task('webserver', () => {
  gulp.src('./')
  .pipe(webserver({
    livereload: true,
    open: true,
    host: '0.0.0.0',
    port: 8000
  }))
})

gulp.task('build', () => {
  runSequence('build-css', 'build-js', 'build-base', 'build-blog', 'build-lab')
})

gulp.task('dev', () => {
  runSequence('build', 'watch', 'webserver')
})

gulp.task('default', () => {
  runSequence('dev')
})
