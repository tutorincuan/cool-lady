function isFacebookBrowser(userAgent) {
    return /FBAN|FBAV|facebook/i.test(userAgent);
}

function isBytedanceBrowser(userAgent) {
    return false
    // return /Bytedance|TTNetVersion/i.test(userAgent);
}

var appRandNum = Math.floor(Math.random() * 10) + 1

function getShareUrl(uid, type) {
    var hostArr = location.host.split(".");
    var c = "";
    if(type !== null){
        c = "\u002526t\u00253D" + type;
    }
    if (hostArr.length > 0 && hostArr[0] !== "") {
        c = "\u002526c\u00253D";
        if (isFacebookBrowser(navigator.userAgent)) {
            c = c + "fb_"
        }
        var fromSite = hostArr[0];
        if(parseInt(fromSite) > 0){
            if (hostArr.length >= 1 && hostArr[1] !== "") {
                fromSite = hostArr[1]
            }
        }
        c =  c + "v1_" + fromSite;
    }
    var u = "https://play.google.com/store/apps/details?id=com.coollady.android&referrer=ldid%3D"
    u = u + uid + c;

    return u;
}
