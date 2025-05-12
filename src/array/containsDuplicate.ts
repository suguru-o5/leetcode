// containsDuplicate.ts

function containsDuplicate(nums: number[]): boolean {
    nums = nums.sort()
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            return true;
        }
    }
    return false;
};

function _containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>()
    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

const result = containsDuplicate([1, 2, 3, 1]);
const _result = _containsDuplicate([1, 2, 3, 1]);
console.log(result);
console.log(_result);
