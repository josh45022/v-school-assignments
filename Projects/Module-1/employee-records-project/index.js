var employees = []


function Employee (name, job, title, salary) {
    this.name = name;
    this.job = job;
    this.title = title;
    this.salary = salary;
    this.status = "Full-Time"
    this.printEmployeeForm = function() {
        console.log("Name: " + name + " Job: "+ job + " Title: " + title + " Salary: " + salary + " Status: " + status)
    }
}

var coolGuy = new Employee("Patick", "Krusty Krab", "Krabby Patty Flipper", "$2 billion per hour")

var coolGuy2 = new Employee("Patty", "Burger King", "Bossman", "$ 7 trillion per hour")

var coolGuy3 = new Employee("Gunther", "Microsoft Inc", "CEO", "$0.004 per hour")
 
coolGuy.status = "Part-Time";

console.log(coolGuy)

employees.push(coolGuy)
employees.push(coolGuy2)
employees.push(coolGuy3)

console.log(employees)

