// 最简单的二分查找
function binarySearch(nums, target) {
  if (target.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[id] < target) {
      left = mid + 1;
    } else if (nums[id] > target) {
      right = mid - 1;
    }
  }
  return -1
}

// 寻找左侧边界的二分查找
function left_bound(nums, target) {
  if (nums.length === 0) return;
  let left = 0;
  let right = nums.length;
  while (left < right) {
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid
    }
  }
  if (left === nums.length) return -1;
  return nums[left] === target ? left : -1;
}

// 寻找右侧边界的二分查找
function right_bound(nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length;
  while (left < right) {
    if(nums[mid] === target) {
      left = mid + 1;
    }else if(nums[mid] < target) {
      left = mid + 1;
    }else if(nums[mid] > target) {
      right = mid;
    }
  }
  if(left == 0) return -1;
  return nums[left - 1] === target ? left - 1 : -1
}