

from typing import List
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        for i in range(len(nums)):
            if nums[i] >= target:
                return i
        return len(nums)
    
solution = Solution()
result = solution.searchInsert([1,2,4],3)
print(result)