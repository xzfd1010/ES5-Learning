// var script = document.createElement("script")
// script.type = "text/javascript"
// script.src = "js/index.js"
// document.body.appendChild(script)

// 封装
{
    function loadScript(url) {
        var script = document.createElement("script")
        script.type = "text/javascript"
        script.src = url
        document.appendChild(script)
    }
}

// 文本形式
{
    function loadScriptString(code) {
        var script = document.createElement("script")
        script.type = "text/javascript"
        try {
            script.appendChild(document.createTextNode(code))
        } catch (ex) {
            script.text = code
        }
        document.body.appendChild(script)
    }

    loadScriptString("function sayHi(){console.log('hi');}sayHi();")

}

// 动态样式
{
    function loadStyles(url) {
        var link = document.createElement("link")
        link.rel = "stylesheet"
        link.type = url
        var head = document.getElementsByTagName("head")[0]
        head.appendChild(link)
    }

    // loadStyles("xxx")
}

// 另一种方式
{
    function loadStyleString(css) {
        var style = document.createElement("style")
        style.type = "text/css"
        try {
            style.appendChild(document.createTextNode(css))
        } catch (ex) {
            style.stylesheet.cssText = css
        }
        var head = document.getElementsByTagName("head")[0]
        head.appendChild(style)
    }

    loadStyleString("body{background-color:deepskyblue}")
}

// 操作表格
{
    var table = document.createElement("table")
    table.border = 1
    table.width = "100%"

    var tbody = document.createElement("tbody")
    table.appendChild(tbody)

    // 创建第一行
    tbody.insertRow(0)
    tbody.rows[0].insertCell(0)
    tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"))
    tbody.rows[0].insertCell(1)
    tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1"))

    // 创建第二行
    tbody.insertRow(1)
    tbody.rows[1].insertCell(0)
    tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1,2"))
    tbody.rows[1].insertCell(1)
    tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"))

    document.body.appendChild(table)
}

// nodeList
{
    var divs = document.getElementsByTagName("div")
    var i = 0
    var div

    for (i = 0; i < divs.length; i++) {
        div = document.createElement("div")
        div.innerText = i
        document.body.appendChild(div)
        if(i>10){
            break
        }
    }
}