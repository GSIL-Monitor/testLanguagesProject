const drawEcgWithInterval = {
    timer: 3,
    x: 0,

    startInterval (){
        console.log('start', this.timer);
        this.timer = setInterval(()=> {
            this.x += 1;
            console.log('x', this.x);
        }, 500)
        console.log('start', this.timer);
    },

    stopInterval (){
        console.log('stop', this.timer);
        this.timer && clearInterval(this.timer);
        console.log('stop', this.timer);
    }
}


// drawEcgWithInterval.startInterval()
// drawEcgWithInterval.stopInterval()
// setTimeout(drawEcgWithInterval.stopInterval, 2000);

function start() {
    drawEcgWithInterval.startInterval();
}

function stop() {
    drawEcgWithInterval.stopInterval();
}
