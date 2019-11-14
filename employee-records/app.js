const employees = []

function Employees(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printStuff = function(){
        console.log(`${this.name}`)
    }

}

const emplpyeeOne = new Employee("Clint", "Coder", "20,000", "Contract")
const employeeTwo = new Employee("Jordan", "Basketball Player", "30 Billion", "Full-Time")
const employeeThree = new Employee("Tiger", "Golfer", "10 Million", "Full-Time")





// function Car(make, model, year, honkSound){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honkSound = honkSound
//     this.honk = function(){
//     console.log(this.honkSound)
//     }
// }

// var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
// var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")


// Car.prototype.honk = function(){
//      console.log(this.honkSound)
// }
 
// jeep.honk()
// mazda.honk()
