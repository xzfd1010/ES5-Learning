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

// select方法
{
    // var form = document.forms["textForm"]
    // var input = form.elements[0]
    // var textarea = form.elements[1]
    //
    // textarea.value = "初始值"
    //
    // EventUtil.addHandler(textarea,"focus",function(event){
    //     event = EventUtil.getEvent(event)
    //     var target = EventUtil.getTarget(event)
    //
    //     target.select()
    // })
}

// select事件
{

    // var form = document.forms["textForm"]
    // var input = form.elements[0]
    // var textarea = form.elements[1]
    //
    // EventUtil.addHandler(textarea,"select",function(event){
    //     console.log(textarea.value)
    // })
}

{

    // var form = document.forms["textForm"]
    // var input = form.elements[0]
    // var textarea = form.elements[1]
    //
    // EventUtil.addHandler(textarea, "select", function (event) {
    //     var text = getSelectedText(textarea)
    //     console.log(text)
    // })
    //
    // function getSelectedText(textbox) {
    //     if (typeof textbox.selectionStart == "number") {
    //         return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd)
    //     } else if (document.selection) {
    //         return document.selection.createRange().text
    //     }
    // }
}
// 选择部分文本
{
    EventUtil.addHandler(window, "load", function () {
        var form = document.forms["textForm"]
        var textbox = form.elements[1]

        // selectText(textbox,0,textbox.value.length)

        // selectText(textbox,0,3)
        selectText(textbox, 4, 7)
    })

    function selectText(textbox, startIndex, stopIndex) {
        if (textbox.setSelectionRange) {
            textbox.setSelectionRange(startIndex, stopIndex)
        } else if (textbox.createTextRange) {
            var range = textbox.createTextRange()
            range.collapse(true)
            range.moveStart("character", startIndex)
            range.moveEnd("character", stopIndex - startIndex)
            range.select()
        }
        textbox.focus()
    }
}

// 微博效果
{
    var oButton = document.getElementById("button"),
        oTextarea = document.getElementById("textarea")
    var TOPIC = "插入话题"

    var funGetSelected = function (element) {
        if (!window.getSelection) {
            //IE浏览器
            return document.selection.createRange().text
        } else {
            return element.value.substr(element.selectionStart, element.selectionEnd - element.selectionStart)
        }
    }, funInsertTopic = function (textObj) {
        var topic = "#" + TOPIC + "#", value = textObj.value, index = value.indexOf(topic)
        if (index === -1) {
            //匹配
            funTextAsTopic(textObj, topic)
        }
        value = textObj.value
        index = value.indexOf(topic)
        if (textObj.createTextRange) {
            var range = textObj.createTextRange()
            range.moveEnd("character", -1 * value.length)
            range.moveEnd("character", index + 5)
            range.moveStart("character", index + 1)
            range.select()
        } else {
            textObj.setSelectionRange(index + 1, index + 5)
            textObj.focus()
        }
    }, funTextAsTopic = function (textObj, textFeildValue) {
        textObj.focus()
        if (textObj.createTextRange) {
            var caretPos = document.selection.createRange().duplicate()
            document.selection.empty()
            caretPos.text = textFeildValue
        } else if (textObj.setSelectionRange) {
            var rangeStart = textObj.selectionStart
            var rangeEnd = textObj.selectionEnd
            var tempStr1 = textObj.value.substring(0, rangeStart)
            var tempStr2 = textObj.value.substring(rangeEnd)
            textObj.value = tempStr1 + textFeildValue + tempStr2
            textObj.blur()
        }
    }
    oButton.onclick = function () {
        var textSelection = funGetSelected(oTextarea)
        if (!textSelection || textSelection === TOPIC) {
            //没有文字选中，光标处插入
            funInsertTopic(oTextarea)
        } else {
            funTextAsTopic(oTextarea, "#" + textSelection + "#")
        }
    }
}

// 过滤输入
{
    var num = document.getElementById("num")
    EventUtil.addHandler(num, "keypress", function (event) {
        event = EventUtil.getEvent(event)
        var target = EventUtil.getTarget(event)
        var charCode = EventUtil.getCharCode(event)
        console.log(event)
        if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey) {
            EventUtil.preventDefault(event)
        }
    })
}

//操作剪贴板
{
    // var textbox = document.getElementById("textbox")
    // EventUtil.addHandler(textbox, "paste", function (event) {
    //     var event = EventUtil.getEvent(event)
    //     var text = EventUtil.getClipboardText(event)
    //
    //     if(!/^\d*$/.test(text)){
    //         EventUtil.preventDefault(event)
    //     }
    // })
    //
    // EventUtil.addHandler(document, "copy", function (event) {
    //     var event = EventUtil.getEvent(event)
    //     var data = document.getSelection()
    //     data += "来自知乎..."
    //     EventUtil.setClipboardText(event, data)
    //     EventUtil.preventDefault(event)
    // })
}

{
    (function () {
        function tabForward(event) {
            event = EventUtil.getEvent(event)
            var target = EventUtil.getTarget(event)

            if (target.value.length == target.maxLength) {
                var form = target.form
                for (var i = 0, len = form.elements.length; i < len; i++) {
                    if (form.elements[i] == target) {
                        if (form.elements[i + 1]) {
                            form.elements[i + 1].focus()
                        }
                    }
                }
            }
        }

        var textbox1 = document.getElementById("txtTel1")
        var textbox2 = document.getElementById("txtTel2")
        var textbox3 = document.getElementById("txtTel3")

        EventUtil.addHandler(textbox1,"keyup",tabForward)
        EventUtil.addHandler(textbox2,"keyup",tabForward)
        EventUtil.addHandler(textbox3,"keyup",tabForward)
    }())
}