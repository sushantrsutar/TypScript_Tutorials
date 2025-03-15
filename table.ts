class Table{
      
      table(num:number):void{
        for(let i=1;i<=10;i++){
            console.log(num+" * "+i+" = "+i*num)
        }
      }
}
let t=new Table()
t.table(5)