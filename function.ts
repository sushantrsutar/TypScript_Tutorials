function addition(a:number,b:number):number{
    return a+b
}
console.log(addition(2,8))

function addition1(a:number,b:number,c?:number){
    return a+b+(c||0)
}
console.log(addition1(1,3,0))
console.log(addition1(1,3,5))

//default parameter
function power(num:number,pow:number=3){
    return num**pow
}
console.log(power(2,4))
console.log(power(5))

//rest parameter
function sum(...a:number[]){
    let sum=0
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    console.log(sum)
}
sum(2,3,4,5)