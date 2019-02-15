
function uint8ArrayToInt(uint8Array) {
    return Buffer.from(uint8Array).readUIntBE(0, uint8Array.length);
}

function uint8ArrayToInt2(uint8Array) {
    let num = 0;
    uint8Array.forEach(function (value, index) {
        num = (num*256)+ value;
    });
    return num
}

const uint8Array = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(uint8ArrayToInt(uint8Array));
console.log(uint8ArrayToInt2(uint8Array));


function intToUint8Array(param){
    const num = param.content;
    const bytes = param.bytes;
    const buf = Buffer.allocUnsafe(bytes);
    console.log(buf)
    buf.writeUIntBE(num, 0, bytes);
    // return Uint8Array.from(buf);
}

function intToUint8Array2(param, arr=null){
    let num = param.content;
    let bytes = param.bytes;
    arr = arr || [];
    const integer = parseInt(num/256);
    const remainder = num%256;
    arr.unshift(remainder);
    if (integer>=256) intToUint8Array2({content: integer, bytes: bytes}, arr);
    else if(integer>0) arr.unshift(integer);

    if (bytes){
        for (let i=0, j = bytes-arr.length; i<j; i++){
            arr.unshift(0);
        }
    }
    return new Uint8Array(arr)
}

const param = {content: 66051, bytes: 8};
console.log(intToUint8Array(param));
console.log(intToUint8Array2(param));

