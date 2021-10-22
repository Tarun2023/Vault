//Globals - no window
 
//__dirname  - path to current directory
//__filename - file name
// require   - function to use modules(commonjs)
//module     - info about current module(file)
//process    - info about enviornment where program 
                //being executed
const names = require('./names')  
const object = require('./modules') 

console.log(names)

object.sayhi(names.john)
object.sayhi(names.peter)
            
setInterval(() => {
    console.log('hello world')},1000)  
