var moveZeroes = function (nums) {
    let insertPosition = 0; // position to place the next non-zero number

    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            [nums[current], nums[insertPosition]] = [nums[insertPosition], nums[current]];
            insertPosition++;
        }
    }
};
