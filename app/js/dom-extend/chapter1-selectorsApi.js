{
    var myDiv = document.querySelector("#myDiv")
    console.log(myDiv)

    var divs = document.querySelectorAll("div")
    var divsByTag = document.getElementsByTagName("div")
    console.log(divs)
    console.log(divsByTag)

    var div = document.createElement("div")
    div.id = "newDiv"
    document.body.appendChild(div)
    console.log(divs)
    console.log(divsByTag) // 会动态查询

}
// matchesSelector
{
    var div = document.querySelector("#myDiv")
    if(div.webkitMatchesSelector("#myDiv")){
        console.log("matches")
    }

    function matchesSelector(element,selector){
        if(element.matchesSelector){
            return element.matchesSelector(selector)
        }else if(element.msMatchesSelector){
            return element.msMatchesSelector(selector)
        }else if(element.mozMatchesSelector){
            return element.mozMatchesSelector(selector)
        }else if(element.webkitMatchesSelector){
            return element.webkitMatchesSelector(selector)
        }else{
            throw new Error("Not supported")
        }
    }

    if(matchesSelector(div,"#myDiv")){
        console.log("matches")
    }
}