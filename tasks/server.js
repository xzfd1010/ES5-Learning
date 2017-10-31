var gulp = require("gulp")
var gulpif = require("gulp-if")
var liveserver = require("gulp-live-server")
var args = require("./util/args")

gulp.task("server", function (cb) {
    if (!args.watch) return cb()

    var server = liveserver.new(["--harmony", "server/bin/www"]) //创建服务器
    server.start()

    // 实现自动刷新，需要监听的路径
    gulp.watch(["server/public/**/*.js", "server/views/**/*.ejs","server/views/**/*.css"], function (file) {
        server.notify.apply(server, [file])// 通知服务器进行相应处理
    })

    // 需要重启服务的文件，路由、入口等
    gulp.watch(["server/routes/**/*.js", "server/app.js"], function () {
        server.start.bind(server)()
    })
})
