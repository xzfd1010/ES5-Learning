// 偏移量
{

    var div = document.getElementById("myDiv")

    function getElementLeft(element) {
        var actualLeft = element.offsetLeft  // 当前元素的左偏移量
        var current = element.offsetParent   // 获取父元素

        while (current !== null) {
            actualLeft += current.offsetLeft
            current = current.offsetParent
        }

        return actualLeft
    }


    var left = getElementLeft(div)
    console.log(left)
}

// 客户区
{
    var div = document.getElementById("myDiv")
    console.log(div.clientHeight)
    console.log(div.clientWidth)
    console.log(div.clientLeft)
    console.log(div.clientTop)

    function getViewport() {
        if (document.compatMode == "BackCompat") {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        } else {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
    }

    var view = getViewport()
    console.log(view)
}

// 元素大小
{
    function getBoundingClientRect(element) {
        if (typeof arguments.callee.offset != "number") {
            var scrollTop = document.documentElement.scrollTop
            var temp = document.createElement("div")
            temp.style.cssText = "position:absolute;left:0;top:0;"
            document.body.appendChild(temp)
            arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop
            document.body.removeChild(temp)
            temp = null
        }

        var rect = element.getBoundingClientRect()
        var offset = arguments.callee.offset
        return {
            left: rect.left + offset,
            right: rect.right + offset,
            top: rect.top + offset,
            bottom: rect.bottom + offset,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        }
    }

    var div = document.getElementById("myDiv")
    console.log(getBoundingClientRect(div))
}
// 兼容写法
{

    function getElementLeft(element) {
        var actualLeft = element.offsetLeft  // 当前元素的左偏移量
        var current = element.offsetParent   // 获取父元素

        while (current !== null) {
            actualLeft += current.offsetLeft
            current = current.offsetParent
        }

        return actualLeft
    }

    function getElementTop(element) {
        var actualTop = element.offsetTop  // 当前元素的左偏移量
        var current = element.offsetParent   // 获取父元素

        while (current !== null) {
            actualTop += current.offsetTop
            current = current.offsetParent
        }

        return actualTop
    }

    function getBoundingClientRect(element) {
        var scrollTop = document.documentElement.scrollTop
        var scrollLeft = document.documentElement.scrollLeft

        if (element.getBoundingClientRect) {
            if (typeof arguments.callee.offset != "number") {
                var scrollTop = document.documentElement.scrollTop
                var temp = document.createElement("div")
                temp.style.cssText = "position:absolute;left:0;top:0;"
                document.body.appendChild(temp)
                arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop
                document.body.removeChild(temp)
                temp = null
            }

            var rect = element.getBoundingClientRect()
            var offset = arguments.callee.offset

            return {
                left: rect.left + offset,
                right: rect.right + offset,
                top: rect.top + offset,
                bottom: rect.bottom + offset,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
            }
        } else {
            var actualLeft = getElementLeft(element)  // 获取相对于页面的左偏移量
            var actualTop = getElementTop(element) // 获取相对于页面的上偏移量

            return {
                left: actualLeft - scrollLeft,
                right: actualLeft + element.offsetWidth - scrollLeft,
                top: actualTop - scrollTop,
                bottom: actualTop + element.offsetHeight - scrollTop,
                width:element.offsetWidth,
                height:element.offsetHeight
            }
        }

    }

    var div = document.getElementById("myDiv")
    console.log(getBoundingClientRect(div))
}