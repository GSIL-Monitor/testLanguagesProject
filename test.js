const interval = 7

const x = new Date()
y = x.getMinutes()

console.log(x);
console.log(y);
console.log(y%interval);
const newMinutes = y-y%interval;
console.log(newMinutes);
x.setMinutes(newMinutes);
console.log(x.valueOf());


