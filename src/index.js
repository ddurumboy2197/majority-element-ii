function majorityElement(nums) {
    let count1 = 0, count2 = 0, candidate1 = 0, candidate2 = 1;
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    let count = 0;
    for (let num of nums) {
        if (num === candidate1) {
            count++;
        }
    }
    if (count > nums.length / 3) {
        return candidate1;
    }
    count = 0;
    for (let num of nums) {
        if (num === candidate2) {
            count++;
        }
    }
    if (count > nums.length / 3) {
        return candidate2;
    }
    return null;
}
