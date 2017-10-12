var CookieUtil = {
    get: function (name) {
        var cookieName = encodeURIComponent(name) + "="
        var cookieStart = document.cookie.indexOf(cookieName)
        var cookieValue = null

        // cookie中存在值
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart)
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
        }

        return cookieValue
    },
    // expires是以毫秒来计算
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value)

        // 设置失效时间
        if (expires) {
            var date = new Date()
            var milliseconds = date.getTime() + expires
            date.setTime(milliseconds)
            cookieText += ";expires=" + date.toGMTString()
        }

        if (path) {
            cookieText += ";path=" + path
        }

        if (domain) {
            cookieText += ";domain=" + domain
        }

        if (secure) {
            cookieText += ";secure"
        }

        document.cookie = cookieText
    },

    unset: function (name, path, domain, secure) {
        this.set(name, "", 0, path, domain, secure)
    }
}


// 模拟调用
// var token = "abc"
// var expires = 5*1000
// CookieUtil.set("token",token,expires)
//
// console.log(CookieUtil.get("token"))
//
// setTimeout(function(){
//     console.log(CookieUtil.get("token"))
// },5000)