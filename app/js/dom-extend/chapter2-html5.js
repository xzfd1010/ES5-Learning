// classList
{
    var div = document.getElementById("myList")

    console.log(div.classList)

    div.classList.remove("disabled") // 无返回值

    console.log(div.classList)

    div.classList.add("current")

    div.classList.toggle("user")

    // 确定元素中是否包含既定的类名
    if (div.classList.contains("bd") && !div.classList.contains("disabled")) {
        // 执行操作
    }

    // 迭代类名
    for (var i = 0, len = div.classList.length; i < len; i++) {
        // doSomething(div.classList[i])
    }
}

// 焦点管理
{
    var button = document.getElementById("myBtn")
    button.focus()
    console.log(document.activeElement === button)

    console.log(document.hasFocus())
}

// HTMLDocument
{
    if (document.readyState === "complete") {
        // console.log("completed")
    }

    console.log(document.readyState)
}

// readyState
{
    function test() {
        if (document.readyState === "loading") {// The document is still loading.
            console.log("loading")
        } else if (document.readyState === "interactive") {// The document has finished loading.
            // We can now access the DOM elements.
            console.log("interactive")
            span.textContent = "A <span> element."
            document.body.appendChild(span)
        } else if (document.readyState === "complete") {// The page is fully loaded.

            console.log("The first CSS rule is: test")
        }
    }

    var myDiv = document.getElementById("myDiv")
    myDiv.onclick = test
}

// compatMode
{
    if (document.compatMode == "CSS1Compat") {
        console.log("Standards mode")
    } else {
        console.log("Quirks mode")
    }
}

// head
{
    var head = document.head || document.getElementsByTagName("head")[0]

    console.log(head)
}

// charset
{
    console.log(document.charset)
    console.log(document.defaultCharset) // undefined
    if (document.charset != document.defaultCharset) {
        console.log("xxx")
    }
}
// 自定义属性
{
    var list = document.getElementById("myList")

    console.log(list.dataset)
    console.log(list.dataset.appid)
    console.log(list.dataset.myname)
}
// 插入标记
{
    var table = document.getElementById("table")
    table.innerHTML = "aaa"

    // outerHTML
    table.outerHTML = "<div>replace Table</div>"

    // insertAdjacentHTML
    var ul = document.getElementById("myList")
    ul.insertAdjacentHTML("beforebegin","<p>hello before list!</p>")
    ul.insertAdjacentHTML("afterbegin","<li>hello afterbegin sublist!</li>")
    ul.insertAdjacentHTML("beforeend","<li>hello beforeend sublist!</li>")
    ul.insertAdjacentHTML("afterend","<p>hello list!</p>")

}

// scrollIntoView
{
    var ul = document.getElementsByClassName("testView")[0]

    // ul.scrollIntoView(false)

    setTimeout(function(){
        // ul.scrollIntoViewIfNeeded(true)
    },1000)

    var input = document.getElementById("myInput")

    // setTimeout(function(){
        input.scrollIntoViewIfNeeded(true)
    // },2000)

}
