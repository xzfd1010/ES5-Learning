var gulp = require("gulp")
var del = require("del")
var args = require("./util/args")

// 清空部分文件
gulp.task("clean", function () {
    return del(["server/public", "server/views"])
})