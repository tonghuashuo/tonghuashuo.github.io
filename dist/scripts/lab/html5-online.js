// Online
var statusDOM = document.getElementById('status');

function updateOnlineStatus(e) {
  var condition = navigator.onLine ? 'online' : 'offline';
  statusDOM.className = condition;
  statusDOM.innerHTML = condition;
}

updateOnlineStatus();
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
//# sourceMappingURL=html5-online.js.map
