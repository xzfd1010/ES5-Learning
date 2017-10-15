{
    var div = document.getElementsByTagName("div")[0]

    if (div.nodeType === 1) {
        console.log(div.nodeName)
        console.log(div.nodeValue)
    }

    console.log(div.previousSibling.previousSibling.nodeValue)
    console.log(div.hasChildNodes())
    console.log(div.childNodes)
    console.log(div.ownerDocument)
    console.log(div.childNodes[1].attributes[0].ownerElement)
}
// 将NodeList对象转为数组

{
    function convertToArray(nodes) {
        var array = null
        try {
            array = Array.prototype.slice.call(nodes, 0) // ie8之前
        } catch (ex) {
            array = new Array()
            for (var i = 0, len = nodes.length; i < len; i++) {
                array.push(nodes[i])
            }
        }

        return array
    }

    var nodes = document.getElementsByTagName("div")
    var nodesArr = convertToArray(nodes)
    console.log(nodes instanceof Array)
    console.log(nodesArr instanceof Array)

}

// replaceNode
{
    // var p = document.getElementsByTagName("p")[0]
    // var div = document.getElementsByTagName("div")[0]
    // var newNode = document.createElement("span")
    //
    // // console.log(p)
    // // console.log(div.childNodes)
    // var returnNode = div.replaceChild(newNode, p)
    // console.log(returnNode)
}

// normalize
{
    var wrapper = document.createElement("div")

    wrapper.appendChild(document.createTextNode("Part 1 "))
    wrapper.appendChild(document.createTextNode("Part 2 "))

// 这时(规范化之前),
    console.log(wrapper.childNodes[0])
    console.log(wrapper.childNodes[1])
    console.log(wrapper.childNodes.length === 2)
    console.log(wrapper.childNodes[0].textContent === "Part 1 ")
    console.log(wrapper.childNodes[1].textContent === "Part 2 ")

    wrapper.normalize()
// 现在(规范化之后),
    console.log(wrapper.childNodes.length === 1)
    console.log(wrapper.childNodes[0].textContent === "Part 1 Part 2")

    console.log(wrapper.childNodes)
}

// title,url,domain,referrer
{
    console.log(document.title)
    console.log(document.URL)
    console.log(document.domain)
    console.log(document.referrer)
}

// 查找元素
{
    var div = document.getElementsByTagName("div")[0]
    // console.log(div.childNodes)
    var p = div.getElementsByTagName("p")

    var images = document.getElementsByTagName("img")

    var myImage = images.namedItem("myImage")
    console.log(myImage)
}

// DOM一致性检测
{
    var hasXmlDom = document.implementation.hasFeature("XML", "1.0")
    console.log(hasXmlDom)
}

{
    var div = document.getElementById("someElement")
    console.log(div.tagName)
    console.log(div.nodeName)
}

// 属性和特性
{
    var div = document.getElementById("myDiv")
    console.log(div.id)
    console.log(div.className)
    console.log(div.title)
    console.log(div.lang)
    console.log(div.dir)

    var attr = div.getAttribute("data_my")
    console.log(attr)
    var attr2 = div.data_my
    console.log(attr2)

    div.mycolor = "blue"
    console.log(div.getAttribute("blue"))
}

//attributes
{
    var div = document.getElementById("myDiv")
    var id = div.attributes.getNamedItem("id").nodeValue
    console.log(id)

    function outputAttributes(element) {
        var pairs = new Array()
        var attrName, attrValue, i, len

        for (i = 0, len = element.attributes.length; i < len; i++) {
            attrName = element.attributes[i].nodeName
            attrValue = element.attributes[i].nodeValue
            if (element.attributes[i].specified) { //ie兼容
                pairs.push(attrName + "=\"" + attrValue + "\"")
            }
        }
        return pairs.join(" ")
    }

    var arr = outputAttributes(div)
    console.log(arr)

}

// 子节点
{
    // for (var i = 0, len = element.childNodes.length; i < len; i++) {
    //     if(element.childNodes[i].nodeType == 1){
    //         // 执行某些操作
    //     }
    // }
}

// 文本节点
{
    var div = document.getElementById("someElement")
    var textNode = div.firstChild
    // div.firstChild.nodeValue = "Some <strong>other</strong> message"
    div.firstChild.appendData("append Some text")
    console.log(textNode)

    // 插入元素
    var element = document.createElement("div")
    element.className = "message"

    var textNode = document.createTextNode("Hello world")
    element.appendChild(textNode)

    document.body.appendChild(element)

    var wrapper = document.createElement("div")

    wrapper.appendChild(document.createTextNode("Part 1 "))
    wrapper.appendChild(document.createTextNode("Part 2 "))

    console.log(wrapper.childNodes.length)

    wrapper.normalize()

    console.log(wrapper.childNodes.length)

}
// 文本节点
// 插入元素
{
    var element = document.createElement("div")
    element.className = "message"

    var textNode = document.createTextNode("Hello world")
    element.appendChild(textNode)

    document.body.appendChild(element)

    var newNode = element.firstChild.splitText(5)
    console.log(element.firstChild.nodeValue)
    console.log(newNode.nodeValue)
    console.log(element.childNodes.length)
}

// Comment类型
{
    var div = document.getElementById("commentParent")
    console.log(div)
    var comment = div.firstChild
    console.log(comment.data)
}

// DocumentFragment类型
{
    var fragment = document.createDocumentFragment()
    var ul = document.getElementById("myList")
    var li = null
    for (var i = 0; i < 3; i++) {
        li = document.createElement("li")
        if (i === 0) {
            li.id = "first"
        }

        li.appendChild(document.createTextNode("Item " + (i + 1)))
        // console.log(fragment.getElementById("first"))
        fragment.appendChild(li)
    }
    ul.appendChild(fragment)

    var attr = document.createAttribute("align")
    attr.value = "left"
    ul.setAttributeNode(attr)
    console.log(ul.attributes["align"].value)
    console.log(ul.getAttributeNode("align").value)
    console.log(ul.getAttribute("align"))

}