function avoidObstacles(obstacles) {
    //  write code here.
    for (jumpLength = 1; jumpLength < lastObstacleCoord; jumpLength++) {
        const jumps = ?makeJumps(jumpLength, ?lastObstacleCoord);
        const isObstacle = obstacles.includes;
        if (jumps.every(!isObstacle)) {
            return jumpLength;
        }
    }
    return lastObstacleCoord + 1;
}
