
const {resolve} = require("path")
module.exports = {
    mode:"development",
    entry:"./src/index.js",

    output: {
        path:resolve(__dirname,'build'),
        filename:'built.js'
    }
}