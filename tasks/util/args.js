var yargs = require('yargs');

var args = yargs
    .option('production', {
        boolean: true,  // 类型
        default: false, // 默认值
        describe: 'min all scripts' //描述
    })
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })
    // 处理映射
    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })
    .option('port', {
        string: true,
        default: 3000,
        describe: 'server port'
    })
    .argv; // 以字符串解析

module.exports = args;