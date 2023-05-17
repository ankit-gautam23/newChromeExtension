document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('checkButton');
    checkButton.addEventListener('click', function() {
      var searchInput = document.getElementById('searchInput').value;
      chrome.runtime.sendMessage({ word: searchInput });
    });
  });
  