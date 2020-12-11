

function avoidObstacles(obstacles) {
    //  write code here.
    const lastObstacleCoord = Math.max(...obstacles)
    for (let jumpLength = 1; jumpLength < lastObstacleCoord; jumpLength++) {
        function makeJumps(jumpLength, lastObstacleCoord) {
            const arr = []
            for (let i=0; i < lastObstacleCoord; i++) {
                arr.push(jumpLength + jumpLength*i)
            }
            return arr
        };
        const jumps = makeJumps(jumpLength, lastObstacleCoord)
        
        const isNotObstacle = function (x) { return !obstacles.includes(x);}
        if (jumps.every(isNotObstacle)) {
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