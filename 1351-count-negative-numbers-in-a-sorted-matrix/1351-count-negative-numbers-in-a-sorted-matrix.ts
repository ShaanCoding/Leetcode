function countNegatives(grid: number[][]): number {
    /*
        [[4,3,2,-1],
        [3,2,1,-1],
        [1,1,-1,-2],
        [-1,-1,-2,-3]
        ]
    */
    // From largest -> smallest

    let numberOfNegatives = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] < 0) numberOfNegatives++;
        }
    }

    return numberOfNegatives;
};