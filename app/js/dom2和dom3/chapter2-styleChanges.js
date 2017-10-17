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
    var computedStyle = document.defaultView.getComputedStyle(div, null)

    console.log(computedStyle.backgroundColor)
    console.log(computedStyle.border)
}

// 样式表
{
    // 获取的方式1.
    var sheet = null
    for (var i = 0, len = document.styleSheets.length; i < len; i++) {
        sheet = document.styleSheets[i]
        console.log(sheet)
    }

    // 2.
    function getStyleSheet(element) {
        return element.sheet || element.stylesheet
    }

    var link = document.getElementsByTagName("link")[0]
    var sheet = getStyleSheet(link)
    console.log(sheet)
}

// CSS规则
{
    var sheet = document.styleSheets[0]
    var rules = sheet.cssRules || sheet.rules
    var rule = rules[1]
    console.log(rule.selectorText) // 选择器
    console.log(rule.style.cssText) // css文本
    console.log(rule.style.backgroundColor) // 应用到而规则
    console.log(rule.style.fontSize)

    rule.style.backgroundColor = "#fff" // 应用于所有样式

}

// 插入规则
{
    var sheet = document.styleSheets[0]
    sheet.insertRule("body{background-color:silver}", 0)

    function insertRule(sheet, selectorText, cssText, position) {
        if (sheet.insertRule) {
            sheet.insertRule(selectorText + "{" + cssText + "}", position)
        } else if (sheet.addRule) {
            sheet.addRule(selectorText, cssText, position)
        }
    }

    // insertRule(sheet, "body", "background-color:blue;", 1)
}

// 删除规则
{
    var sheet = document.styleSheets[0]

    function deleteRule(sheet, index) {
        if (sheet.deleteRule) {
            sheet.deleteRule(index)
        } else if (sheet.removeRule) {
            sheet.removeRule(index)
        }
    }

    deleteRule(sheet,0)
}
