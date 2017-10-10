// 查询字符串参数
{
    function getQueryStringArgs() {
        // 取得查询字符串并去掉开头的问号
        var qs = (location.search.length > 0 ? location.search.substring(1) : "")

        // 保存数据的对象
        var args = {}

        // 取得每一项
        var items = qs.length ? qs.split("&") : []
        var item = null
        var name = null
        var value = null

        // 在for循环中使用
        var i = 0
        var len = items.length

        // 逐个添加到args对象中
        for (i = 0; i < len; i++) {
            item = items[i].split("=")
            name = decodeURIComponent(item[0]) // 键
            value = decodeURIComponent(item[1]) // 值

            if (name.length) { // 以name判断存在
                args[name] = value
            }
        }

        return args
    }


    // location.search= "?q=javascript&num=10"
    // var args = getQueryStringArgs()

    // console.log(args["q"])
    // console.log(args["num"])

}

{
    // location.assign("http://wrox.com")
    // window.location = "http://wrox.com"
    // location.href= "http://wrox.com"

    // location.hash = "#section1"
}