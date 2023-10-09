class Solution {
    searchInsert(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= target) {
                return i;
            }
        }
        return nums.length;
    }
}

const solution = new Solution();
const result = solution.searchInsert([1,2,4], 3);
console.log(result);  // Output: 2



class Solution {
    searchInsert(nums, target) {
        let left = 0, right = nums.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }
}

// const solution = new Solution();
// const result = solution.searchInsert([1,2,4], 3);
// console.log(result);  // Output: 2
