interface Print{
    printData();
}
class Document1 implements Print{
    printData() {
        console.log("printing")
    }
}
const doc=new Document1()
doc.printData()