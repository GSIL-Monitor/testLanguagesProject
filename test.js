function intToUint8Array(param, arr){
    let num = param.content;
    let bytes = param.bytes;
    arr = arr || [];
    const integer = parseInt(num/256);
    const remainder = num%256;
    console.log('inte', integer, remainder);

    arr.unshift(remainder);
    if (integer>=256) intToUint8Array({content: integer, bytes: bytes}, arr);
    else if(integer>0) arr.unshift(integer);

    if (bytes){
        for (let i=0, j = bytes-arr.length; i<j; i++){
            arr.unshift(0);
        }
    }
    return new Uint8Array(arr)
}
function uint8ArrayToInt(uint8Array) {
    let num = 0;
    uint8Array.forEach(function (value, index) {
        num = (num*256)+ value;
    });
    return num
}

x = intToUint8Array({content:1547974380000, bytes:8})
console.log(x)
console.log(uint8ArrayToInt(x))

