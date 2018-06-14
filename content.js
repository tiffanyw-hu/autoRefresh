document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('checkpage').onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {url: "www.google.com"});
    })
  }
})
