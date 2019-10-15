//constructive function

// function User(name, isAdmin = false){
//     this.name = name 
//     this.isAdmin = isAdmin
//     this.greet = function(){
//         console.log("hellp, my name is " + this.name)
//     }
// }

// const addedUser = new User("Clint")
// addedUser.greet()
// addedUser.name = "Clinton"

// console.log(addedUser)

//"this" - is the new object we are passing in.

// what does "new" do? makes a new instance of a user object or making an object.


//employee records exercise
// var employees = employees()

function Employees(Name, JobTitle, Salary, Status = 'fullTime'){
    this.Name = Name; 
    this.JobTitle = JobTitle;
    this.Salary = Salary;
    this.Status = Status;
}

const printEmployeeForm = new Employees("Bob", "V School Instructor", "$3000/hr");

const printEmployeeFormTwo  = new Employees("Jenni", "teacher", "$25/hr", "Part Time");
const printEmployeeFormThree  = new Employees("Frank", "CEO", "$65,000/yr");
const printEmployeeFormFour  = new Employees("Clint", "mail person", "$8.50/hr");

console.log(printEmployeeFormTwo, printEmployeeFormThree, printEmployeeFormFour)

