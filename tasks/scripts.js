var gulp =require( "gulp");
var gulpif =require( "gulp-if");  // gulp中的if判断
var concat =require( "gulp-concat");  // gulp中的文件拼接
var webpack =require( "webpack");  // 打包过程
var gulpWebpack =require( "webpack-stream");  // webpack stream
var named =require( "vinyl-named");  // 文件重命名
var livereload =require( "gulp-livereload");
var plumber =require( "gulp-plumber");  // 处理文件信息流
var rename =require( "gulp-rename"); // 重命名
var uglify =require( "gulp-uglify"); // 压缩js
var log =require("gulp-util").log; // 输入输出
var colors = require("gulp-util").colors;
var args =require( "./util/args");

gulp.task("scripts", function(){
    return gulp.src(["app/js/index.js"])
        .pipe(plumber({
            // 处理错误，改变默认处理错误的机制
            errorHandle: function () {

            }
        }))
        .pipe(named())  // 文件重命名
        .pipe(gulpWebpack({  // 用babel重新编译js
            module: {
                // 代表用babel处理js
                loaders: [{
                    test: /\.js$/, // 这里只转义index的import
                    loader: "babel-loader",
                    // query:{
                    //     strict:false,
                    //     plugins: [__dirname + "/babel-plugins/custom-plugin"]
                    // }
                }]
            }
        }), null, function(err, stats){
            // 此处用colors处理错误
            log("Finished"+colors.cyan("scripts"), stats.toString({
                chunks: false
            }))
        })
        // 文件保存
        .pipe(gulp.dest("server/public/js"))
        // 文件重命名，开始处理压缩的部分
        .pipe(rename({
            basename: "cp",
            extname: ".min.js"
        }))
        // uglify压缩js文件
        .pipe(uglify({
            compress: {properties: false},
            output: {"quote_keys": true}
        }))
        // 保存
        .pipe(gulp.dest("server/public/js"))
        // args是命令行参数，刷新
        .pipe(gulpif(args.watch, livereload()));
});

