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
  