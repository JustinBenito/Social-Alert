BOT_API_KEY="6013654267:AAFXkCr9k4V_vg69ISYi0hZddLuz0w0q1VE";
MY_CHANNEL_ID="-942368642";
MY_MESSAGE_TEXT="Your Son is avoiding work and has entered Social Media now";

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

  
  

  