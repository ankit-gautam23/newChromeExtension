chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
      var isSearched = url.includes(request.word);
  
      // Log the result to the console
      console.log('Word:', request.word);
      console.log('Is Searched:', isSearched);
  
      // You can send the result back to the popup if needed
      sendResponse({ isSearched: isSearched });
    });
  
    // Required for asynchronous message handling
    return true;
  });
  
  function checkKeywords(keywords, url) {
    const query = url.toLowerCase();
  
    for (const keyword of keywords) {
      // Your keyword checking logic goes here
      // For example, you can use a regular expression to check if the keyword is present in the search query
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
  
      if (regex.test(query)) {
        // The keyword was found in the search query
        // sendEmail(keyword);
        // sendTeamsMessage(keyword);
        console.log(keyword);
      }
    }
  }
  
//   // Event listener callback for omnibox input entered
// function onInputEntered(sentence) {
//   const keywordList = ['example1', 'example2', 'example3'];
//   checkKeywords(keywordList, sentence);
// }

// // Event listener for omnibox input entered
// chrome.omnibox.onInputEntered.addListener(onInputEntered);

  // Event listener for tab updates
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
      const keywordList = ['job', 'open to work', 'remote jobs'];
      checkKeywords(keywordList, changeInfo.url);
    }
  });