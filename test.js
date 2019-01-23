const Buffer = require('buffer').Buffer
const uint8array = new Uint8Array([1, 2, 3]);
const buf = Buffer.from(uint8array);
const y = buf.readUIntBE(0, 3);
console.log(y)
