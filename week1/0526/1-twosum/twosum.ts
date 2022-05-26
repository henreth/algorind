function twoSum(nums: number[], target: number): number[] {
    let targetMinusNum = {}
     for (let num of nums) {
         if (target - num in targetMinusNum) { // if target - num is in the obj, that means there is an element in nums that adds with the current num to our target
             if (nums.indexOf(target - num) === nums.indexOf(num)) { // account for if the value of the two elements are the same
                 return [nums.indexOf(target - num), nums.indexOf(num, nums.indexOf(num) + 1)]
                  // nums.indexOf(num,nums.indexOf(num) + 1 ) -> will find the index of the value (num) after the position of nums.indexOf(num) + 1
                 // if target-num === num; nums.indexOf(target - num) === nums.indexOf(num) 
             } else {
                 return [nums.indexOf(target - num), nums.indexOf(num)]
             }
             // write the above if else statement as a one line ternary
            //  return nums.indexOf(target - num) === nums.indexOf(num) ? [nums.indexOf(target - num), nums.indexOf(num, nums.indexOf(num) + 1)] : [nums.indexOf(target - num), nums.indexOf(num)]
         } else {
             targetMinusNum[num] = true
         }
     }
     return []
};