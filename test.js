class drawEcgWithInterval {
    constructor (){
        this.timer = null;
        this.x = 0;
    }

    startInterval (){
        console.log('start', this.timer);
        this.timer = setInterval(()=> {
            this.x += 1;
            console.log('x', this.x);
        }, 500)
        console.log('start', this.timer);
    }

    stopInterval (){
        console.log('stop', this.timer);
        this.timer && clearInterval(this.timer);
        this.timer = null;
        console.log('stop', this.timer);
    }
}


// drawEcgWithInterval.startInterval()
// drawEcgWithInterval.stopInterval()
// setTimeout(drawEcgWithInterval.stopInterval, 2000);

let drawEcg;
function start() {
    drawEcg = new drawEcgWithInterval();
    drawEcg.startInterval();
}

function stop() {
    drawEcg.stopInterval();
}
