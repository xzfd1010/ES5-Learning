// addHandler 使用DOM0级方法、DOM2级方法或IE来添加事件
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
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault()
        }else{
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
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation()
        }else{
            event.cancelBubble = true
        }
    }
}
var div = document.getElementById("someElement")
var handler = function (e) {
    // console.log("click")
    // console.log(e.defaultPrevented)
    // console.log(e.detail)
    console.log("currentTarget", e.currentTarget)
    console.log("target", e.target)
    console.log("this", this)
}
EventUtil.addHandler(div, "click", handler)

var btn = document.getElementById("myBtn")
// {
//     var handler = function(event){
//         switch (event.type){
//             case "click":
//                 console.log("clicked")
//                 break
//             case "mouseover":
//                 event.target.style.backgroundColor = "deepskyblue"
//                 break
//             case "mouseout":
//                 console.log(event.type)
//                 event.target.style.backgroundColor = ""
//                 break
//         }
//     }
//     btn.onclick = handler
//     btn.onmouseover = handler
//     btn.onmouseout = handler
// }

// eventPhase
{
    btn.onclick = function (event) {
        console.log("btn.onclick", event.eventPhase) // 2 处于目标阶段
    }
    document.body.addEventListener("click", function (event) {
        console.log("body.listener", event.eventPhase) // 1 表示捕获阶段
    }, true)
    document.body.onclick = function (event) {
        console.log("body.onclick", event.eventPhase)
    }

}
