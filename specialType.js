var data = 10;
data = "sushant";
data = 1.22;
data = true;
//unknown is safer than any
var data2 = "amol";
data2 = 22;
data2 = 44.33;
data2 = true;
//unction add(a:unknown,b:unknown){
//    return a+b;
//}
function add(a, b) {
    if (typeof (a) == 'number' && typeof (b) == 'number') {
        return a + b;
    }
}
console.log(add(2, 5));
