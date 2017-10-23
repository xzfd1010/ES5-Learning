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

{
    function getSelectedOptions(selectbox){
        var result = new Array()
        var option = null
        
        for(var i = 0,len = selectbox.options.length;i<len;i++){
            option = selectbox.options[i]
            if(option.selected){
                result.push(option)
            }
        }
        
        return result
    }
    
    var selectbox = document.getElementById("mySelect")

    var selectedOptions = getSelectedOptions(selectbox)
    var message = ""

    for(var i = 0,len = selectedOptions.length;i<len;i++){
        message += "Selected index:" + selectedOptions[i].index +
            "\nSelected text: " + selectedOptions[i].text +
            "\nSelected value: " + selectedOptions[i].value + "\n\n"
    }

    console.log(message)
}

// change事件
{
    var selectbox = document.getElementById("mySelect")
    var i = 0
    EventUtil.addHandler(selectbox,"change",function(event){
        i++
        console.log("changed " + i + " times")
    })

}