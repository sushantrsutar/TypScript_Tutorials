interface Calculator{
    add(num1:number,num2:number):number
    sub(num1:number,num2:number):number
    mult(num1:number,num2:number):number
    div(num1:number,num2:number):number
}
class NormalCalculator implements Calculator{
    add(num1: number, num2: number) {
        return  num1+num2
    }
    sub(num1: number, num2: number) {
        return num1-num2
    }
    mult(num1: number, num2: number) {
        return num1*num2
    }
    div(num1: number, num2: number) {
        return num1/num2
    }
}
class DigitalCalculator implements Calculator{
    add(num1: number, num2: number) {
        return  num1+num2
    }
    sub(num1: number, num2: number) {
        return num1-num2
    }
    mult(num1: number, num2: number) {
        return num1*num2
    }
    div(num1: number, num2: number) {
        return num1/num2
    }
    mod(num1:number,num2:number){
        return num1%num2
    }
}

let normalCalculator=new NormalCalculator();
let sum=normalCalculator.add(2,4)
console.log("sum : "+sum)

let digitalCalculator=new DigitalCalculator();
let multificaton=digitalCalculator.mult(20,30)
console.log("multification : "+multificaton)

let mod=digitalCalculator.mod(10,3)
console.log("mod : "+mod)
