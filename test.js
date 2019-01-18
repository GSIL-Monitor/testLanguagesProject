const moment = require('moment');
const sendingInterval = 5

console.log(new Date())
const now = moment();
const oldSecond = now.second();
console.log(oldSecond)
const newSecond = oldSecond-oldSecond%sendingInterval
console.log(newSecond)
now.second(newSecond);
console.log(now.unix())



x = moment().milliseconds(0)
console.log(x.unix());
