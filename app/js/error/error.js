var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler)
        } else {
            // 0级事件代替
            element["on" + type] = handler
        }
    },
    getEvent: function (event) {
        return event ? event : window.event
    },
    getTarget: function (event) {
        return event.target || event.srcElement
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault()
        } else {
            evnet.returnValue = false
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false)
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler)
        } else {
            element["on" + type] = null
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget
        } else if (event.toElement) {
            return event.toElement
        } else if (event.fromElement) {
            return event.fromElement
        } else {
            return null
        }
    },
    getButton: function (event) {
        if (document.implementation.hasFeature("Mouseevents", "2.0")) {
            return event.button
        } else {
            switch (event.button) {
                // 把IE的某些事件简单看作DOM的事件
                case 0:
                    return
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0
                case 2:
                case 6:
                    return 2
                case 4:
                    return 1
            }
        }
    },
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return event.wheelDelta
        } else {
            return -event.detail * 120
        }
    },
    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode
        } else {
            return event.keyCode
        }
    },
    getClipboardText: function (event) {
        var clipboardData = event.clipboardData || window.clipboardData
        return clipboardData.getData("text")
    },
    setClipboardText: function (event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value)
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", value)
        }
    }
}

// 自定义错误
{
    // function CustomError(message) {
    //
    //     this.name = "CustomError"
    //     this.message = message
    // }
    //
    // CustomError.prototype = new Error()
    //
    // throw new CustomError("My message")
}

window.onerror = function (message, url, line) {
    console.log(message, url, line)
    return false
}

// 抛出错误的时机
{
    function process(values) {
        if (!(values instanceof Array)) {
            throw new Error("process():Argument must be an Array")
        }
        values.sort()

        for (var i = 0, len = values.length; i < len; i++) {
            if (values[i] > 100) {
                return values[i]
            }
        }

        return -1
    }

    // process(1)
}

// 图像的error事件
{
    var image = new Image()
    EventUtil.addHandler(image, "load", function (event) {
        console.log("Image loaded")
    })

    EventUtil.addHandler(image, "error", function (event) {
        console.log("Image not loaded")
    })

    image.src = "smilex.gif"
}

{
    function addQueryStringArg(url, name, value) {
        if (url.indexOf("?") == -1) {
            url += "?"
        } else {
            url += "&"
        }

        url += encodeURIComponent(name) + "=" + encodeURIComponent(value)

        return url
    }
}

{
    function logError(sev,msg){
        var img = new Image()
        img.src = "log.php?sev="+encodeURIComponent(sev)+"&msg="+encodeURIComponent(msg)
     }

     try{
        // xxx
     }catch(error){
        logError("nonfatal","xxx" + error.message)
     }
}