chrome.contextMenus.create({
    title: "Insert Lenny Face ( ͡° ͜ʖ ͡°)", 
    contexts:["editable"], 
    onclick: function(info, tab) 
        {
            chrome.tabs.sendRequest(
                tab.id, 
                {
                    "insertLennyFace": true
                }, 
                function(response){ }
            )
        }
  });

  function searchRedditForUrl(url) {
    const searchQuery = 'url:' + url;
    const redditSearchUrl = 'https://www.reddit.com/search?q=' + encodeURIComponent(searchQuery);
    console.log("Opening Reddit search URL: " + redditSearchUrl);
    chrome.tabs.create({ url: redditSearchUrl });
}

function handleContextMenuClick(info, tab) {
    const linkUrl = info["linkUrl"];
    console.log("User used context menu on link with URL: " + linkUrl);
    searchRedditForUrl(linkUrl);
}