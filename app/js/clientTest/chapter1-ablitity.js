// 能力检测

// 基本模式
{
    // if(object.propertyInQuestion){
    //     // 使用object.propertyInQuestion
    // }

    function isSortable(object) {
        return typeof object.sort == "function"
    }

    console.log(isSortable(new Array()))
    console.log(isSortable(new Object()))
}

// 常用模式
{
    function isHostMethod(object, property) {
        var t = typeof object[property]
        return t == "function" || (!!(t == "object" && object[property])) || t == "unknown" || t == "string"
    }

    var xhr = new XMLHttpRequest()

    console.log(isHostMethod(xhr, "open"))
    console.log(isHostMethod(xhr, "foo"))

    var elem = document.createElement("div")

    console.log(typeof elem.style.webkitAlignContent)
    console.log(isHostMethod(elem.style, "transform"))
}


