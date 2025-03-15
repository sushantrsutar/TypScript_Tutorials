class Vehicle{
    run(){
        console.log("vehicle running")
    }
}
class Bike extends Vehicle{
    start(){
        console.log("Starting")
    }
}

const bike=new Bike();
bike.start()
bike.run()