var arr = [1, 2, 3, 4, 5, 9, 8];
function findMax(num) {
    var max = num[0];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}
var maxNum = findMax(arr);
console.log(maxNum);
