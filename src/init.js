import game from './gameState';

// Clock that ticks every 3 secs.
const TICK_RATE = 3000;

// function tick() {
//     console.log('tick', Date.now());
// }

function init() {
    console.log('starting game');

    // When 3 sec from nowX
    let nextTimeToTick = Date.now();

    // Closure to keep track of our time.
    function nextAnimationFrame() {
        const now = Date.now();

        if (nextTimeToTick <= now) {
            game.tick();

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
