chrome.action.onClicked.addListener((tab) => {
    var newURL = "https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key&AUTHMETHOD=UserPassword";
    chrome.tabs.create({ url: newURL });
});