// 检测非IE插件
{
    function hasPlugin(name) {
        name = name.toLowerCase()
        for (var i = 0; i < navigator.plugins.length; i++) {
            if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
                return true
            }
        }

        return false
    }

    console.log(hasPlugin("Native Client"))
    console.log(hasPlugin("Flash"))
    console.log(navigator.plugins)
}

// 检测IE插件
{
    function hasIEPlugin(name){
        try{
            new ActiveXobject(name)
            return true
        }catch(ex) {
            return false
        }
    }
    
    console.log(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"))
}

// registerContentHandler
{
    // navigator.registerContentHandler("application/rss+xml","http://www.somereader.com?feed=%s","Some Reader")
}

// registerProtocolHandler
{
    navigator.registerProtocolHandler("mailto","http://wwww.somemailclient.com?cmd=%s","Some Mail Client")
}