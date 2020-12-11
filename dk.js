// @flow

/*::
type Coord = number;
*/
const makeJumps/*: (number, Coord) => Array< Coord > */ = (jumpLength, lastObstacleCoord) => {
    const arr = [];
    for (let i = 0; i < lastObstacleCoord; i += jumpLength) {
        arr.push(i);
    }
    return arr;
}

function avoidObstacles(obstacles) {
    //  write code here.
    const lastObstacleCoord = Math.max(...obstacles)
    for (let jumpLength = 1; jumpLength < lastObstacleCoord; jumpLength++) {
        const jumps = makeJumps(jumpLength, lastObstacleCoord);

        // every :: Array< a > => (a -> boolean) => boolean
        if (jumps.every(x => !obstacles.includes(x))) {
            return jumpLength;
        }
    }
    return lastObstacleCoord + 1;
}

console.log(
    avoidObstacles(
        [2, 5, 6, 7, 8, 10, 11, 12, 13, 6, 9]
    )
)