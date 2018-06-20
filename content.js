document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('checkPage').onclick = function(tabs) {
    chrome.tabs.reload()
    }
  })

  // chrome.tabs.update(tabs.id, {url: "http://www.google.com"});
