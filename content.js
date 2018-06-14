document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('checkPage').onclick = function(tabs) {
      chrome.tabs.update({url: "http://www.google.com"});
    }
  })
