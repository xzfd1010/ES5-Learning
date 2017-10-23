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

{
    function serialize(form) {
        var parts = []
        var field = null
        var i, len, j, optLen, option, optValue

        for (i = 0, len = form.elements.length; i < len; i++) {
            field = form.elements[i]

            switch (field.type) {
                case "select-one":
                case "select-multiple":
                    if (field.name.length) {
                        for (j = 0, optLen = field.options.length; j < optLen; j++) {
                            option = field.options[j]
                            if (option.selected) {
                                optValue = ""  // 选中option的value/text
                                if (option.hasAttribute) {
                                    optValue = (option.hasAttribute("value")) ? option.value : option.text
                                } else {
                                    optValue = (option.attributes["value"].specified) ? option.value : option.text
                                }
                                parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue))
                            }

                        }
                    }
                    break
                case undefined: // fieldset的type是undefined
                case "file":    // 文件类型
                case "submit":  // 提交那妞
                case "reset":   // 重置按钮
                case "button":  // 普通按钮
                    break
                case "radio":
                case "checkbox":
                    if(!field.checked){
                        break
                    }
                default:
                    // 不包含没有名字的表单字段
                    if(field.name.length){
                        parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value))
                    }
            }
        }
        return parts.join("&")  // 用 & 将各字段连接
    }

    var form = document.getElementById("myForm")
    EventUtil.addHandler(form,"submit",function(e){
        var result = serialize(form)
        console.log(result)
        e.preventDefault()
    })

}

