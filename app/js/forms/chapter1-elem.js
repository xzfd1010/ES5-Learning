// 获取属性
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
    }
}
// {
//     var form = document.getElementById("form1")
//     for(var key in form){
//         // console.log(key,form[key])
//     }
//
//     console.log(form === document.forms["form1"])
//
//     var input = form.querySelector("input")
//     EventUtil.addHandler(form,"submit",function(event){
//         var event = EventUtil.getEvent(event)
//         if(!input.value){
//             console.log("表单不能为空")
//             return EventUtil.preventDefault(event)
//         }
//     })
// }


// {
//     var form = document.getElementById("myForm")
//     var colorFields = form.elements["color"]
//     console.log(colorFields.length)
//
//     var firstColorField = colorFields[0]
//     var firstFormField = form.elements[0]
//     console.log(firstColorField === firstFormField)
// }

{
    var form = document.getElementById("form1")
    var input = form.elements[0]
    var btn = form.elements[1]
    EventUtil.addHandler(form, "submit", function (event) {
        var event = EventUtil.getEvent(event)
        if (!input.value) {
            console.log("表单不能为空")
            btn.disabled = true
            return EventUtil.preventDefault(event)
        }
        // btn.disabled = true
    })
}

// focus
{
    EventUtil.addHandler(window, "load", function () {
        var input = document.forms[0].elements[0]
        if (!input.autofocus) {
            input.focus()
            // console.log("JS focus")
        }
    })
}

// focus/blur/change事件
{
    var textbox = document.forms[0].elements[0]

    EventUtil.addHandler(textbox, "focus", function (event) {
        event = EventUtil.getEvent(event)
        var target = EventUtil.getTarget(event)

        if (target.style.backgroundColor != "red") {
            target.style.backgroundColor = "yellow"
        }
    })

    EventUtil.addHandler(textbox, "blur", function (event) {
        event = EventUtil.getEvent(event)
        var target = EventUtil.getTarget(event)

        if(/[^\d]/.test(target.value)){
            target.style.backgroundColor = "red"
        }else{
            target.style.backgroundColor = ""
        }
    })

    EventUtil.addHandler(textbox,"keypress",function(event){
        event = EventUtil.getEvent(event)
        var target = EventUtil.getTarget(event)

        if(/[^\d]/.test(target.value)){
            target.style.backgroundColor = "red"
        }else{
            target.style.backgroundColor = ""
        }
    })
}