//array
let num1:number[]=[1,2,3,4]
for(let i of num1){
    console.log(i)
}

//tupple
let mtupple:[number,string,boolean]=[22,"sushant",true]
for(let i of mtupple){
    console.log(i)
}

//object
let stu:{id:number,name:string}={
    id:101,
    name:"sushant"
}
console.log(stu.id+" "+stu.name)