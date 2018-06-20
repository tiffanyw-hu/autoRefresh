
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('checkPage').onclick = function(tabs) {
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    if (!minutes) { minutes = 1 }
    if (!seconds) { seconds = 1 }
    let interval = minutes * 1000 * 60 + seconds * 1000
    chrome.tabs.reload()
    }
  })

  //check the input of the minute and seconds
  //setInterval(or the equivalent of whatever it is in tabs) is calculated
  //if none, then assume it is 1 minute


//TDD: have it reload once
//TDD: have it setInterval reload
//TDD: have it setInterval reload after audio is done playing
//TDD: have it setInterval reload after audio is done playing and checking if it's ibighit
//extra: have it only reload BTS

  // chrome.tabs.update(tabs.id, {url: "http://www.google.com"});
//class="yt-simple-endpoint style-scope yt-formatted-string" what even is this
//!!Array.prototype.find.call(document.querySelectorAll('audio,video'),function(elem){return elem.duration > 0 && !elem.paused})
