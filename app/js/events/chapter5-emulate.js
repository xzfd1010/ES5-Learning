// 模拟事件

var elem = document.getElementById("someElement")
// Create the event.
var event = document.createEvent("Event")

// Create a click event that bubbles up and
// cannot be canceled 
event.initEvent("click", true, false)

// Listen for the event.
elem.addEventListener("click", function (e) {
    // e.target matches elem
    console.log("triggered")
}, false)

elem.dispatchEvent(event) //直接触发事件，通过DOM2级添加的事件的触发方式
