const path = require('path');

//指定开发环境
// process.env.Node_ENV = 'development';

module.exports = {
    //基本路径
    publicPath: process.env.Node_ENV === "production" ? "" : "/",
    //输出文件目录
    outputDir: process.env.Node_ENV === "production" ? "dist" : "dev_dist",
    //  放置静态资源的目录
    assetsDir: "./src/assets",
    //文件名哈希
    filenameHashing: true,
    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`true` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,
    //是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,
}