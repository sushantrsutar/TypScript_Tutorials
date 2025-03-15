const arr: number[] = [1, 2, 3, 4, 5, 9, 8];

function findMax(num: number[]): number {
    let max = num[0]; 
    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i]; 
        }
    }
    return max; 
}

let maxNum = findMax(arr);
console.log(maxNum);
