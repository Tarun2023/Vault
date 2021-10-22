const os = require('os')
const user = os.userInfo()

console.log(user)

let
 up=os.uptime()
up=up/60
console.log(up);
up=up/60
console.log(up);
up=up/24
console.log(up);

console.log(`the system uptime is ${os.uptime}`);

const currentos = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentos);