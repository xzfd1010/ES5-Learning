// Range
{
    var range1 = document.createRange()
    var range2 = document.createRange()
    var div1 = document.getElementById("div1")
    range1.selectNode(div1)
    range2.selectNodeContents(div1)
    console.log(range1)
    console.log(range2)
}

// selectNode模拟
{
    var range1 = document.createRange()
    var range2 = document.createRange()
    var div1 = document.getElementById("div1")
    var p1Index = -1
    var i
    var len

    for (i = 0, len = div1.parentNode.childNodes.length; i < len; i++) {
        if (div1.parentNode.childNodes[i] === div1) {
            p1Index = i  // 获取div1在父元素中的索引
            break
        }
    }

    range1.setStart(div1.parentNode, p1Index)
    range1.setEnd(div1.parentNode, p1Index + 1)
    range2.setStart(div1, 0)  // startContainer,startOffset
    range2.setEnd(div1, div1.childNodes.length) // endContainer,endOffset

    console.log(range1)
    console.log(range2)

}

// 操作节点
{
    var p1 = document.getElementById("p1")
    var helloNode = p1.firstChild.firstChild
    var worldNode = p1.lastChild

    var range = document.createRange()
    //
    // range.setStart(helloNode,2)
    // range.setEnd(worldNode,3)
    //
    // var fragments = range.extractContents()
    // p1.parentNode.appendChild(fragments)

    range.selectNode(helloNode)
    var span = document.createElement("span")
    span.style.backgroundColor = "#0ff"
    range.surroundContents(span)
    
    range.collapse(true)
    console.log(range.collapsed)
}

// 折叠DOM
{
    var div1 = document.getElementById("div1")
    var div2 = document.getElementById("div2")
    var range = document.createRange()
    range.setStartAfter(div1)
    range.setStartBefore(div2)
    console.log(range.collapsed)
}

// 比较DOM范围
{
    var range1 = document.createRange()
    var range2 = document.createRange()
    var p1 = document.getElementById("p1")

    range1.selectNodeContents(p1)
    range2.selectNodeContents(p1)
    range2.setEndBefore(p1.lastChild) // range2的终点不同了

    console.log(range1.compareBoundaryPoints(Range.START_TO_START,range2))
    console.log(range1.compareBoundaryPoints(Range.END_TO_END,range2))

}
