// 测试浏览器
{
    var supportDOM2CSS = document.implementation.hasFeature("CSS", "2.0")
    var supportDOM2CSS2 = document.implementation.hasFeature("CSS2", "2.0")

    console.log("supportDOM2CSS", supportDOM2CSS)
    console.log("supportDOM2CSS2", supportDOM2CSS2)
}

//style
{
    var div = document.getElementById("myDiv")
    div.style.cssText = "width:80px;height:30px;background-color:deepskyblue;border:2px solid #ccc;"
    console.log(div)

    for (var i = 0, len = div.style.length; i < len; i++) {
        var prop = div.style[i]
        var value = div.style.getPropertyValue(prop)
        console.log(prop + ":" + value)
    }

    var declaration = div.style
    var rule = declaration.parentRule
    console.log(declaration.parentRule)

    // for (var i = 0, len = div.style.length; i < len; i++) {
    //     var prop = div.style[i]
    //     var value = div.style.getPropertyCSSValue(prop)
    //     console.log(prop + ":" + value)
    // }
}

// getComputedStyle(ele,null/:after)
{
    var div = document.getElementById("myDiv")
    var computedStyle = document.defaultView.getComputedStyle(div,null)

    console.log(computedStyle.backgroundColor)
    console.log(computedStyle.border)
}