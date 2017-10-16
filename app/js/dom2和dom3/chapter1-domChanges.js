{
    // 检测
    var supportsDOM2Core = document.implementation.hasFeature("Core", "2.0")
    console.log(supportsDOM2Core)

    console.log(document.doctype.publicId)
}

{
    console.log(document.defaultView || document.parentWindow)
}

{
    var htmldoc = document.implementation.createHTMLDocument("New Doc")
    console.log(htmldoc.title)
    console.log(typeof htmldoc.body)

    console.log(document.title)
}

{
    // console.log(document.body.isSupported("HTML", "2.0"))
}

{
    var div1 = document.createElement("div")
    div1.setAttribute("class", "box")

    var div2 = document.createElement("div")
    div2.setAttribute("class", "box")

    console.log("div1.isSameNode(div1)", div1.isSameNode(div1))
    console.log("div1.isEqualNode(div1)", div1.isEqualNode(div1))
    console.log("div1.isSameNode(div2)", div1.isSameNode(div2))
}

{
    // document.body.setUserData("name","Nick",function(){})
}

{
    var iframe = document.getElementById("myFrame")
    console.log(iframe.contentDocument)
    console.log(iframe.contentWindow.document)

}