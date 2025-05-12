// rotate.ts

function rotate(nums: number[], k: number): void {
    k = k % nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
};

function reverse(nums: number[], left: number, right: number) {
    while (left < right) {
        const temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++;
        right--;
    }
};


const nums = [-1]
rotate(nums, 2);
console.log(nums)
