const employees = []

function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}

const clint = new Employee("Clint", "Coder", "$8/hr", "Contract")
const jordan = new Employee("Jordan", "Basketball Player", "30 Billion", "Full-Time")
const tiger = new Employee("Tiger", "Golfer", "10 Million", "Full-Time")

employees.push(clint, jordan, tiger)

console.log(employees)


// Employees.prototype.record = function() {
//         console.log("This employees name is " + this.firstName + " and their postion is " + this.jobTitle);
// }




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
