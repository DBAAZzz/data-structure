// 最简单的二分查找
function binarySearch(nums, target) {
  if (target.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(nums[mid] == target) {
      return mid;
    }else if(nums[id] < target) {
      left = mid + 1;
    }else if(nums[id] > target) {
      right = mid - 1;
    }
  }
  return -1
}