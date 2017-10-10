// window
// frames
{
    // frameset已废弃
    var html = `<iframe src="index.html" name="topFrame"></iframe>
                <iframe src="anotherframe.html" name="leftFrame"></iframe>
                <iframe src="yetanotherframe.html" name="rightFrame"></iframe>`
    document.write(html)

    console.log(window.frames["topFrame"])
    console.log(window === top)
    console.log(window.frames.length)
}

// 窗口位置
{
    var leftPos = (typeof window.screenLeft === "number" ) ? window.screenLeft : window.screenX
    var topPos = (typeof window.screenTop === "number") ? window.screenTop : window.screenY
    console.log(leftPos, topPos)

    // var newWindow = window.open("http://www.google.com/", "newWindow", "height=400,width=400,top=10,left=10,resizable=yes")

    // newWindow.moveBy(100, 100)
}

// 窗口大小
{
    console.log("innerWidth,innerHeight")
    console.log(window.innerWidth, window.innerHeight)

    console.log("outerWidth,outerHeight")
    console.log(window.outerWidth, window.outerHeight)

    console.log("clientWidth,clientHeight")
    console.log(document.documentElement.clientWidth, document.documentElement.clientHeight)
    console.log(document.body.clientWidth, document.body.clientHeight)
    console.log(document.body.offsetWidth, document.body.offsetHeight)
    console.log(document.body.scrollWidth, document.body.scrollHeight)

    var pageWidth = window.innerWidth
    var pageHeight = window.innerHeight

    if (typeof pageWidth !== "number") {
        if (document.compatMode == "CSS1Compat") {
            pageWidth = document.documentElement.clientWidth
            pageHeight = document.documentElement.clientHeight
        } else {
            pageWidth = document.body.clientWidth
            pageHeight = document.body.clientHeight
        }
    }
}

{
    // var newWindow = window.open("http://www.google.com/", "newWindow", "height=400,width=400,top=10,left=10,resizable=yes,location=no,scrollbars=no")
    // newWindow.resizeBy(400, 400)
    // newWindow.close()
    // console.log(newWindow.opener)
}

// 检测弹出窗口是否被屏蔽
{
    // var blocked = false
    // try{
    //     var newWindow = window.open("http://www.google.com/","_block")
    //     if(newWindow === null){
    //         blocked = true
    //     }
    // }catch(ex){
    //     blocked = true
    // }
    //
    // if(blocked){
    //     console.log("The popup was blocked")
    // }
}

// 超时调用
{
    var timeoutId = setTimeout(function () {
        console.log("Hello World")
    }, 1000)

    console.log(timeoutId) // 1
    clearTimeout(timeoutId)
}

// 超时模拟间歇
{
    var num = 0
    var max = 10

    function incrementNumber() {
        num++

        //如果执行次数未达到max设定的值，则设置另一次超时调用
        if (num < max) {
            console.log(num)
            setTimeout(incrementNumber, 500)
        } else {
            console.log("Done")
        }
    }

    setTimeout(incrementNumber, 500)
}

// 对话框
{
    // alert("Hello Window")

    // if(confirm("Are you sure?")){
    //     console.log("yes")
    // }else{
    //     console.log("no")
    // }

    // prompt
    // var result = prompt("What's your name?","Nick")
    // if(result !== null){
    //     console.log("Welcome,",result)
    // }

    //window.print()

    window.find()

}