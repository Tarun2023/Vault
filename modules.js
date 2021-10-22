//modules

const sayhi = (name) => {
    console.log(`Hello ${name}`)
}
module.exports = {sayhi}

sayhi('tarun')
sayhi('me')
//every file in node is a module(by default)
