// /* eslint-disable no-redeclare, no-console ,no-unused-vars*/

// 识别呈现引擎
{
    var client = function () {
        var engine = {
            // 呈现引擎
            ie: 0, // 数值代表引擎的版本号
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,

            // 具体的版本号
            ver: null  // 引擎的完整版本（字符串）
        }

        // 在此检测呈现引擎、平台和设备
        var ua = navigator.userAgent

        // 先检测opera，Opera7.6及以上，有window.opera对象，并且opera.version()返回版本字符串
        if (window.opera) {
            engine.ver = window.opera.version()
            engin.opera = parseFloat(engine.ver)
        }
        // 检测Webkit，其中的AppleWebkit这个独一无二的字符串
        else if (/AppleWebKit\/(\S+)/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.webkit = parseFloat(engine.ver)
        }

        // KHTML
        else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.khtml = parseFloat(engine.ver)
        }

        // Gecko，分组匹配，获得版本号，Gecko/8个数字是一种标识
        else if (/rv:([^)]+)\) Gecko\/\d{8}/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.gecko = parseFloat(engine.ver)
        }

        // 检查IE，IE11中连MSIE都没了。。。
        else if (/MSIE ([^;]+)/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.ie = parseFloat(engine.ver)
        }

        return {
            engine: engine
        }
    }()

    if (client.engine.ie) {
        // 针对IE的代码
    } else if (client.engine.gecko > 1.5) {
        if (client.engine.ver == "1.8.1") {
            var a = 0
        }
    }

}

// 识别浏览器
{
    var client = function () {
        var engine = {
            // 呈现引擎
            ie: 0, // 数值代表引擎的版本号
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,

            // 具体的版本号
            ver: null  // 引擎的完整版本（字符串）
        }

        var browser = {
            // 浏览器
            ie: 0,
            firefox: 0,
            safari: 0,
            konq: 0,
            opera: 0,
            chrome: 0,

            // 具体的版本
            ver: null
        }

        // 在此检测呈现引擎、平台和设备
        var ua = navigator.userAgent

        // 先检测opera，Opera7.6及以上，有window.opera对象，并且opera.version()返回版本字符串
        if (window.opera) {
            engine.ver = browser.ver = window.opera.version()
            engin.opera = browser.opera = parseFloat(engine.ver)
        }
        // 检测Webkit，其中的AppleWebkit这个独一无二的字符串
        else if (/AppleWebKit\/(\S+)/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.webkit = parseFloat(engine.ver)

            // 确定是Chrome还是Safari
            if (/Chrome\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.chrome = parseFloat(browser.ver)
            } else if (/Version\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.safari = parseFloat(browser.ver)
            } else {
                //近似地确定版本号，Safari3之前的版本映射
                var safariVersion = 1
                if (engine.webkit < 100) {
                    safariVersion = 1
                } else if (engine.webkit < 312) {
                    safariVersion = 1.2
                } else if (engin.webkit < 412) {
                    safariVersion = 1.3
                } else {
                    safariVersion = 2
                }

                browser.safari = browser.ver = safariVersion
            }
        }

        // KHTML
        else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.khtml = browser.konq = parseFloat(engine.ver)
        }

        // Gecko，分组匹配，获得版本号，Gecko/8个数字是一种标识
        else if (/rv:([^)]+)\) Gecko\/\d{8}/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.gecko = parseFloat(engine.ver)

            // 确定是不是Firefox
            if (/Firefox\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.firefox = parseFloat(browser.ver)
            }
        }

        // 检查IE，IE11中连MSIE都没了。。。
        else if (/MSIE ([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.ie = browser.i = parseFloat(engine.ver)
        }

        return {
            engine: engine,
            browser: browser
        }
    }()

    if (client.engine.webkit) {
        if (client.browser.chrome) {
            // chrome代码
        } else if (client.browser.safari) {
            // safari代码
        }
    } else if (client.engine.gecko) {
        if (client.browser.firefox) {
            // firefox代码
        } else {
            // 其他Gecko 浏览器代码
        }
    }

    // console.log(client)
}

// 识别平台
{
    var client = function () {
        var engine = {
            // 呈现引擎
            ie: 0, // 数值代表引擎的版本号
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,

            // 具体的版本号
            ver: null  // 引擎的完整版本（字符串）
        }

        var browser = {
            // 浏览器
            ie: 0,
            firefox: 0,
            safari: 0,
            konq: 0,
            opera: 0,
            chrome: 0,

            // 具体的版本
            ver: null
        }

        var system = {
            win: false,
            mac: false,
            x11: false  // 代表Unix
        }

        // 在此检测呈现引擎、平台和设备
        var ua = navigator.userAgent

        // 先检测opera，Opera7.6及以上，有window.opera对象，并且opera.version()返回版本字符串
        if (window.opera) {
            engine.ver = browser.ver = window.opera.version()
            engin.opera = browser.opera = parseFloat(engine.ver)
        }
        // 检测Webkit，其中的AppleWebkit这个独一无二的字符串
        else if (/AppleWebKit\/(\S+)/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.webkit = parseFloat(engine.ver)

            // 确定是Chrome还是Safari
            if (/Chrome\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.chrome = parseFloat(browser.ver)
            } else if (/Version\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.safari = parseFloat(browser.ver)
            } else {
                //近似地确定版本号，Safari3之前的版本映射
                var safariVersion = 1
                if (engine.webkit < 100) {
                    safariVersion = 1
                } else if (engine.webkit < 312) {
                    safariVersion = 1.2
                } else if (engin.webkit < 412) {
                    safariVersion = 1.3
                } else {
                    safariVersion = 2
                }

                browser.safari = browser.ver = safariVersion
            }
        }

        // KHTML
        else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.khtml = browser.konq = parseFloat(engine.ver)
        }

        // Gecko，分组匹配，获得版本号，Gecko/8个数字是一种标识
        else if (/rv:([^)]+)\) Gecko\/\d{8}/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.gecko = parseFloat(engine.ver)

            // 确定是不是Firefox
            if (/Firefox\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.firefox = parseFloat(browser.ver)
            }
        }

        // 检查IE，IE11中连MSIE都没了。。。
        else if (/MSIE ([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.ie = browser.i = parseFloat(engine.ver)
        }

        // 检测平台
        var p = navigator.platform
        system.win = p.indexOf("Win") == 0
        system.mac = p.indexOf("Mac") == 0
        system.x11 = (p.indexOf("X11") == 0) || (p.indexOf("Linux") == 0)

        return {
            engine: engine,
            browser: browser,
            system: system
        }
    }()

    if (client.engine.webkit) {
        if (client.browser.chrome) {
            // chrome代码
        } else if (client.browser.safari) {
            // safari代码
        }
    } else if (client.engine.gecko) {
        if (client.browser.firefox) {
            // firefox代码
        } else {
            // 其他Gecko 浏览器代码
        }
    }

    // console.log(client)
}

// 识别windows操作系统
{
    var client = function () {
        var engine = {
            // 呈现引擎
            ie: 0, // 数值代表引擎的版本号
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,

            // 具体的版本号
            ver: null  // 引擎的完整版本（字符串）
        }

        var browser = {
            // 浏览器
            ie: 0,
            firefox: 0,
            safari: 0,
            konq: 0,
            opera: 0,
            chrome: 0,

            // 具体的版本
            ver: null
        }

        var system = {
            win: false,
            mac: false,
            x11: false  // 代表Unix
        }

        // 在此检测呈现引擎、平台和设备
        var ua = navigator.userAgent

        // 先检测opera，Opera7.6及以上，有window.opera对象，并且opera.version()返回版本字符串
        if (window.opera) {
            engine.ver = browser.ver = window.opera.version()
            engin.opera = browser.opera = parseFloat(engine.ver)
        }
        // 检测Webkit，其中的AppleWebkit这个独一无二的字符串
        else if (/AppleWebKit\/(\S+)/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.webkit = parseFloat(engine.ver)

            // 确定是Chrome还是Safari
            if (/Chrome\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.chrome = parseFloat(browser.ver)
            } else if (/Version\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.safari = parseFloat(browser.ver)
            } else {
                //近似地确定版本号，Safari3之前的版本映射
                var safariVersion = 1
                if (engine.webkit < 100) {
                    safariVersion = 1
                } else if (engine.webkit < 312) {
                    safariVersion = 1.2
                } else if (engin.webkit < 412) {
                    safariVersion = 1.3
                } else {
                    safariVersion = 2
                }

                browser.safari = browser.ver = safariVersion
            }
        }

        // KHTML
        else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.khtml = browser.konq = parseFloat(engine.ver)
        }

        // Gecko，分组匹配，获得版本号，Gecko/8个数字是一种标识
        else if (/rv:([^)]+)\) Gecko\/\d{8}/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.gecko = parseFloat(engine.ver)

            // 确定是不是Firefox
            if (/Firefox\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.firefox = parseFloat(browser.ver)
            }
        }

        // 检查IE，IE11中连MSIE都没了。。。
        else if (/MSIE ([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.ie = browser.i = parseFloat(engine.ver)
        }

        // 检测平台
        var p = navigator.platform
        system.win = p.indexOf("Win") == 0
        system.mac = p.indexOf("Mac") == 0
        system.x11 = (p.indexOf("X11") == 0) || (p.indexOf("Linux") == 0)

        // 确定windows的版本
        if (system.win) {
            if (/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
                if (RegExp["$1"] == "NT") {
                    switch (RegExp["$2"]) {
                        case "5.0":
                            system.win = "2000"
                            break
                        case "5.1":
                            system.win = "XP"
                            break
                        case "6.0":
                            system.win = "Vista"
                            break
                        case "6.1":
                            system.win = "7"
                            break
                        default:
                            system.win = "NT"
                            break
                    }
                } else if (RegExp["$1"] == "9x") {
                    system.win = "ME"
                } else {
                    system.win = RegExp["$1"]
                }
            }
        }


        return {
            engine: engine,
            browser: browser,
            system: system
        }
    }()

    if (client.engine.webkit) {
        if (client.browser.chrome) {
            // chrome代码
        } else if (client.browser.safari) {
            // safari代码
        }
    } else if (client.engine.gecko) {
        if (client.browser.firefox) {
            // firefox代码
        } else {
            // 其他Gecko 浏览器代码
        }
    }

    if (client.system.win) {
        if (client.system.win == "XP") {
            // XP
        } else if (client.system.win == "Vista") {
            // Vista
        }
    }

    // console.log(client)
}

// 识别移动设备
{
    var client = function () {
        var engine = {
            // 呈现引擎
            ie: 0, // 数值代表引擎的版本号
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,

            // 具体的版本号
            ver: null  // 引擎的完整版本（字符串）
        }

        var browser = {
            // 浏览器
            ie: 0,
            firefox: 0,
            safari: 0,
            konq: 0,
            opera: 0,
            chrome: 0,

            // 具体的版本
            ver: null
        }

        var system = {
            win: false,
            mac: false,
            x11: false,  // 代表Unix

            // 移动设备
            iphone: false,
            ipod: false,
            ipad: false,
            ios: false,
            android: false,
            nokiaN: false,
            winMobile: false
        }

        // 在此检测呈现引擎、平台和设备
        var ua = navigator.userAgent

        // 先检测opera，Opera7.6及以上，有window.opera对象，并且opera.version()返回版本字符串
        if (window.opera) {
            engine.ver = browser.ver = window.opera.version()
            engin.opera = browser.opera = parseFloat(engine.ver)
        }
        // 检测Webkit，其中的AppleWebkit这个独一无二的字符串
        else if (/AppleWebKit\/(\S+)/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.webkit = parseFloat(engine.ver)

            // 确定是Chrome还是Safari
            if (/Chrome\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.chrome = parseFloat(browser.ver)
            } else if (/Version\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.safari = parseFloat(browser.ver)
            } else {
                //近似地确定版本号，Safari3之前的版本映射
                var safariVersion = 1
                if (engine.webkit < 100) {
                    safariVersion = 1
                } else if (engine.webkit < 312) {
                    safariVersion = 1.2
                } else if (engin.webkit < 412) {
                    safariVersion = 1.3
                } else {
                    safariVersion = 2
                }

                browser.safari = browser.ver = safariVersion
            }
        }

        // KHTML
        else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.khtml = browser.konq = parseFloat(engine.ver)
        }

        // Gecko，分组匹配，获得版本号，Gecko/8个数字是一种标识
        else if (/rv:([^)]+)\) Gecko\/\d{8}/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.gecko = parseFloat(engine.ver)

            // 确定是不是Firefox
            if (/Firefox\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.firefox = parseFloat(browser.ver)
            }
        }

        // 检查IE，IE11中连MSIE都没了。。。
        else if (/MSIE ([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.ie = browser.i = parseFloat(engine.ver)
        }

        // 检测平台
        var p = navigator.platform
        system.win = p.indexOf("Win") == 0
        system.mac = p.indexOf("Mac") == 0
        system.x11 = (p.indexOf("X11") == 0) || (p.indexOf("Linux") == 0)

        // 确定windows的版本
        if (system.win) {
            if (/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
                if (RegExp["$1"] == "NT") {
                    switch (RegExp["$2"]) {
                        case "5.0":
                            system.win = "2000"
                            break
                        case "5.1":
                            system.win = "XP"
                            break
                        case "6.0":
                            system.win = "Vista"
                            break
                        case "6.1":
                            system.win = "7"
                            break
                        default:
                            system.win = "NT"
                            break
                    }
                } else if (RegExp["$1"] == "9x") {
                    system.win = "ME"
                } else {
                    system.win = RegExp["$1"]
                }
            }
        }


        // 移动设备
        system.iphone = ua.indexOf("iPhone") > -1
        system.ipod = ua.indexOf("iPod") > -1
        system.ipad = ua.indexOf("iPad") > -1

        // 检测iOS的版本号
        if (system.mac && ua.indexOf("Mobile") > -1) {
            if (/CPU(?:iPhone)?OS(\d+_\d+)/.test(ua)) {
                system.ios = parseFloat(RegExp.$1.replace("_", "."))
            } else {
                system.ios = 2 // iOS3之前的版本
            }
        }

        // 检测Android系统
        if (/Android (\d+\.\d+)/.test(ua)) {
            system.android = parseFloat(RegExp.$1)
        }

        // nokiaN系统
        system.nokiaN = ua.indexOf("NokiaN") > -1

        // winMobile
        system.winMobile = (system.win == "CE")
        if(system.win == "CE"){
            system.winMobile = system.win
        }else if(system.win == "Ph"){
            if(/Window Phone OS (\d+.\d+)/.test(ua)){
                system.win = "Phone"
                system.winMobile = parseFloat(RegExp["$1"])
            }
        }


        return {
            engine: engine,
            browser: browser,
            system: system
        }
    }()

    if (client.engine.webkit) {
        if (client.system.ios) {
            // iOS手机
        }else if(client.system.android){
            // Android手机
        }else if(client.system.nokiaN){
            // nokiaN系列
        }
    }

    // console.log(client)
}

// 识别游戏系统
{
    var client = function () {
        var engine = {
            // 呈现引擎
            ie: 0, // 数值代表引擎的版本号
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,

            // 具体的版本号
            ver: null  // 引擎的完整版本（字符串）
        }

        var browser = {
            // 浏览器
            ie: 0,
            firefox: 0,
            safari: 0,
            konq: 0,
            opera: 0,
            chrome: 0,

            // 具体的版本
            ver: null
        }

        var system = {
            win: false,
            mac: false,
            x11: false,  // 代表Unix

            // 移动设备
            iphone: false,
            ipod: false,
            ipad: false,
            ios: false,
            android: false,
            nokiaN: false,
            winMobile: false,

            // 游戏系统
            wii:false,
            ps:false
        }

        // 在此检测呈现引擎、平台和设备
        var ua = navigator.userAgent

        // 先检测opera，Opera7.6及以上，有window.opera对象，并且opera.version()返回版本字符串
        if (window.opera) {
            engine.ver = browser.ver = window.opera.version()
            engin.opera = browser.opera = parseFloat(engine.ver)
        }
        // 检测Webkit，其中的AppleWebkit这个独一无二的字符串
        else if (/AppleWebKit\/(\S+)/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.webkit = parseFloat(engine.ver)

            // 确定是Chrome还是Safari
            if (/Chrome\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.chrome = parseFloat(browser.ver)
            } else if (/Version\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.safari = parseFloat(browser.ver)
            } else {
                //近似地确定版本号，Safari3之前的版本映射
                var safariVersion = 1
                if (engine.webkit < 100) {
                    safariVersion = 1
                } else if (engine.webkit < 312) {
                    safariVersion = 1.2
                } else if (engin.webkit < 412) {
                    safariVersion = 1.3
                } else {
                    safariVersion = 2
                }

                browser.safari = browser.ver = safariVersion
            }
        }

        // KHTML
        else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.khtml = browser.konq = parseFloat(engine.ver)
        }

        // Gecko，分组匹配，获得版本号，Gecko/8个数字是一种标识
        else if (/rv:([^)]+)\) Gecko\/\d{8}/.test(ua)) {
            engine.ver = RegExp["$1"]
            engine.gecko = parseFloat(engine.ver)

            // 确定是不是Firefox
            if (/Firefox\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"]
                browser.firefox = parseFloat(browser.ver)
            }
        }

        // 检查IE，IE11中连MSIE都没了。。。
        else if (/MSIE ([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"]
            engine.ie = browser.i = parseFloat(engine.ver)
        }

        // 检测平台
        var p = navigator.platform
        system.win = p.indexOf("Win") == 0
        system.mac = p.indexOf("Mac") == 0
        system.x11 = (p.indexOf("X11") == 0) || (p.indexOf("Linux") == 0)

        // 确定windows的版本
        if (system.win) {
            if (/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
                if (RegExp["$1"] == "NT") {
                    switch (RegExp["$2"]) {
                        case "5.0":
                            system.win = "2000"
                            break
                        case "5.1":
                            system.win = "XP"
                            break
                        case "6.0":
                            system.win = "Vista"
                            break
                        case "6.1":
                            system.win = "7"
                            break
                        default:
                            system.win = "NT"
                            break
                    }
                } else if (RegExp["$1"] == "9x") {
                    system.win = "ME"
                } else {
                    system.win = RegExp["$1"]
                }
            }
        }


        // 移动设备
        system.iphone = ua.indexOf("iPhone") > -1
        system.ipod = ua.indexOf("iPod") > -1
        system.ipad = ua.indexOf("iPad") > -1

        // 检测iOS的版本号
        if (system.mac && ua.indexOf("Mobile") > -1) {
            if (/CPU(?:iPhone)?OS(\d+_\d+)/.test(ua)) {
                system.ios = parseFloat(RegExp.$1.replace("_", "."))
            } else {
                system.ios = 2 // iOS3之前的版本
            }
        }

        // 检测Android系统
        if (/Android (\d+\.\d+)/.test(ua)) {
            system.android = parseFloat(RegExp.$1)
        }

        // nokiaN系统
        system.nokiaN = ua.indexOf("NokiaN") > -1

        // winMobile
        system.winMobile = (system.win == "CE")
        if(system.win == "CE"){
            system.winMobile = system.win
        }else if(system.win == "Ph"){
            if(/Window Phone OS (\d+.\d+)/.test(ua)){
                system.win = "Phone"
                system.winMobile = parseFloat(RegExp["$1"])
            }
        }

        // 游戏系统
        system.wii = ua.indexOf("Wii") > -1
        system.ps = /playstation/i.test(ua)


        return {
            engine: engine,
            browser: browser,
            system: system
        }
    }()

    if (client.engine.webkit) {
        if (client.system.ios) {
            // iOS手机
        }else if(client.system.android){
            // Android手机
        }else if(client.system.nokiaN){
            // nokiaN系列
        }
    }

    // console.log(client)
}