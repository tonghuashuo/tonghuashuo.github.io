import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './friend.scss'
import lucode from '../images/friend/lucode.jpg'
import infiniteScript from '../images/friend/infinite-script.jpg'
import everain from '../images/friend/everain.jpg'
import silvermac from '../images/friend/silvermac.jpg'
import { GatsbyDataProps } from '../utils/interface'

const friends = [
  {
    url: 'http://www.lucode.net',
    cover: lucode,
    name: 'LuCode',
    desc: [
      'CodeSun，中科大研究生',
      '主攻编译技术、形式化验证',
      '服务器资深玩家'
    ]
  },
  {
    url: 'https://infinitescript.com/',
    cover: infiniteScript,
    name: 'InfiniteScript',
    desc: [
      'Dr.Xie，哈工大博士',
      '主攻计算机视觉、机器,学习',
      'Github 老司机'
    ]
  },
  {
    url: 'https://everain.me/',
    cover: everain,
    name: 'Everain',
    desc: [
      'Everain，网易前端开发',
      '主攻 JavaScript 大前端,生态',
      '猪厂大前端接班人'
    ]
  },
  {
    url: 'https://silvermac.io/',
    cover: silvermac,
    name: 'Silvermac',
    desc: [
      'Sam，Autodesk 研发大佬',
      '主攻各种我听不懂的黑科技,',
      '各大厂抢着要的香饽饽'
    ]
  }
]

export default (props: GatsbyDataProps) => {
  const { data } = props

  return (
    <Layout>
      <SEO
        title='朋友'
        keywords={data.site.siteMetadata.keywords}
      />
      <div className='mf-content' id='friends'>
        <h1 className='title'>未来，就在这里</h1>

        <div className='friends'>
          { friends.map(friend => (
            <a
              key={friend.name}
              className='friend'
              id={`friend__${friend.name.toLowerCase()}`}
              target='_blank'
              href={friend.url}
              rel='noopener noreferrer'
            >
              <div className='cover fix-ratio ratio-16-9'>
                <img src={friend.cover} alt='' />
              </div>
              <div className='intro'>
                <h2>{friend.name}</h2>
                <ul>
                  { friend.desc.map(item => <li key='item'>{item}</li>) }
                </ul>
              </div>
            </a>
          ))}
        </div>

      </div>
    </Layout>
  )
}
export const query = graphql`
query {
  site {
    siteMetadata {
      title,
      keywords
    }
  }
}`
