class bytesQueue {
    constructor (){
        this.list = [];
        this.byteOffset = 0;
        this.length = 0;
    }

    put (unit8Array){
        this.list.push(unit8Array);
        this.length += unit8Array.length;
    }

    get (len){
        if(len > 0){
            let readArr = new Uint8Array(len);
            let readIndex = 0;
            while(readIndex < len){
                if(this.list.length>0){
                    let tmpArr = this.list.shift();
                    let tmpLen = tmpArr.length;
                    let remainderLen = len-readIndex;
                    if(tmpLen >= remainderLen){
                        //足夠了
                        let tmpArrPart = tmpArr.subarray(0, remainderLen);
                        readArr.set(tmpArrPart,readIndex);
                        readIndex += tmpArrPart.length;
                        if(remainderLen < tmpLen){
                            let newUint8Array = tmpArr.subarray(remainderLen, tmpLen);
                            this.list.unshift(newUint8Array);
                        }
                        break;
                    }else{
                        readArr.set(tmpArr,readIndex);
                        readIndex += tmpLen;
                    }
                }else{
                    readArr = readArr.subarray(0, readIndex);
                    break;
                }
            }
            this.length -= readArr.length;
            return readArr;
        }
        return null;
    }
}
