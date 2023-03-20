BOT_API_KEY="Your BOT API ";
MY_CHANNEL_ID="YOUR GROUP CHAT";
MY_MESSAGE_TEXT="Your MESSAGE";

setInterval(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      var url = tab.url;
      if (url.includes("web.whatsapp.com") || url.includes("https://www.instagram.com") || url.includes("https://www.linkedin.com")) {
        fetch(`https://api.telegram.org/bot${BOT_API_KEY}/sendMessage?chat_id=${MY_CHANNEL_ID}&text=${MY_MESSAGE_TEXT}`)
        chrome.browserAction.setBadgeText({ text: 'Why'});
    }
    });
  }, 1000);

  
  

  
