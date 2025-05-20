// singleNumber.ts

function singleNumber(nums: number[]): number {
    let result = 0;
    for (let num of nums) {
        result = result ^ num;
    }
    return result;
}

const single = singleNumber([4, 1, 2, 1, 2]);
console.log(single);

