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
//     var div = document.getElementById("myDiv")
//     var someElement = document.getElementById("someElement")
//     var i = 0
//     EventUtil.addHandler(div, "touchstart", function () {
//         someElement.innerHTML = i++
//     })
// }

{
    // function handleTouchEvent(event) {
    //     // 只跟踪一次触摸
    //     if (event.touches.length == 1) {
    //         var output = document.getElementById("myDiv")
    //         switch (event.type) {
    //             case "touchstart":
    //                 output.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")"
    //                 break
    //             case "touchend":
    //                 output.innerHTML += "<br>Touch ended (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")"
    //                 break
    //             case "touchmove":
    //                 event.preventDefault()
    //                 output.innerHTML += "<br>Touch moved (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")"
    //                 break
    //         }
    //     }
    // }
    //
    // EventUtil.addHandler(document, "touchstart", handleTouchEvent)
    // EventUtil.addHandler(document, "touchend", handleTouchEvent)
    // EventUtil.addHandler(document, "touchmove", handleTouchEvent)
}

// gesture事件
{
    function handleGestureEvent(event){
        var output = document.getElementById("myDiv")
        switch(event.type){
            case "gesturestart":
                output.innerHTML = "Gesture started (rotation=" + event.rotation + ",scale=" + event.scale + ")"
                break
            case "gestureend":
                output.innerHTML += "<br>Gesture ended (rotation=" + event.rotation + ",scale=" + event.scale + ")"
                break
            case "gesturechange":
                output.innerHTML += "<br>Gesture changed (rotation=" + event.rotation + ",scale=" + event.scale + ")"
                break
        }
    }

    document.addEventListener("gesturestart",handleGestureEvent,false)
    document.addEventListener("gestureend",handleGestureEvent,false)
    document.addEventListener("gesturehchange",handleGestureEvent,false)
}