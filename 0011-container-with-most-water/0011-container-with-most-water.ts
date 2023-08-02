function maxArea(height: number[]): number {
    // Height of length n, there are n vertical lines so that two end points
    // are (i, 0) and (i, height[i])

    // Choose two seperate lines that also have the biggest area
    // Come in from left and right and compare 

    let maximum: number = -Infinity;

    let left: number = 0;
    let right: number = height.length - 1;

    while(left < right) {
        let sumArea = Math.min(height[left], height[right]) * (right - left);

        maximum = Math.max(maximum, sumArea);

        // Minimum height should iterate forward to find a bigger height
        if(height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return maximum;
};