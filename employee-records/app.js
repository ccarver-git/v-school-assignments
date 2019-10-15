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