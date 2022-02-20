// Clock that ticks every 3 secs.

const TICK_RATE = 3000;

function tick() {
    console.log('tick', Date.now());
}

function init() {
    console.log('starting game');

    // When 3 sec from now
    let nextTimeToTick = Date.now();

    // Closure to keep track of our time.
    function nextAnimationFrame() {
        const now = Date.now();

        if (nextTimeToTick <= now) {
            //Hey, is it time to tick yet? Not yet, cool just do nothing and schedule me again (requestAnimationFrame(nextAnimationFrame);)
            tick();

            //reset
            nextTimeToTick = now + TICK_RATE;
        }
        // I am calling myself back, just call me the next time you have an idle second.
        requestAnimationFrame(nextAnimationFrame);
    }
    // To schedule it once
    nextAnimationFrame();
}

init();
