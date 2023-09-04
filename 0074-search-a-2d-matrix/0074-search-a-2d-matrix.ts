function searchMatrix(matrix: number[][], target: number): boolean {

//     Find if element exists, needs to be in log time
    
    let width = matrix[matrix.length - 1].length;
    
    let left: number = 0, right = matrix.length * width - 1;
    
    while(left <= right) {
        let midPoint = Math.floor((right + left) / 2);
        
        let x = midPoint % width;
        // How many are divisible by
        let y = Math.floor((midPoint) / width);
        
        let element = matrix[y][x];
        
        if(element === target) return true;
        else if (element > target) {
            // Take "left"
            right = midPoint - 1;
        } else {
            left = midPoint + 1;
        }
        
    }
    
    return false;
};