//  Employee Directory (Object)
//  You have an object where the keys are employee names and the values are their job titles.
//  Write a function to check if a specific employee exists in the directory.


const employees = {
    "Gaurav" : "Front-end developer",
    "Faizal" : "Product manager",
    "Ayush" : "Back-end developer",
    "Neeraj" : "Full-stack developer",
}

function checkEmployee(employeeName){
    if(employeeName in employees){
        return true;
    }else{
        return false;
    }
}

let isEmployee = checkEmployee("Raja");
console.log(isEmployee);
