function avoidObstacles(obstacles) {
    //  write code here.
    lastObstacleCoord = Math.max(...obstacles)
    for (let jumpLength = 1; jumpLength < lastObstacleCoord; jumpLength++) {
        function makeJumps(jumpLength, lastObstacleCoord) {
            let arr = []
            for (let i=0; i < lastObstacleCoord; i++) {
                arr.push(jumpLength + jumpLength*i)
            }
            return arr
        };
        const jumps = makeJumps(jumpLength, lastObstacleCoord)
        console.log(jumps)
        
        let isObstacle = obstacles.includes(jumps[jumpLength-1]);
        console.log(isObstacle)
        if (jumps.every(!isObstacle)) {
            return jumpLength;
        }
    }
    return jumpLength;
}