// Removing Users from List (Array)
//  You have a list of registered users in an array. Each user is represented by their name.
//  Write a function to remove a user from the list when given their name.



const removeUsers = (registeredUsers, name)=>{
    
    registeredUsers.forEach((user, index) => {
        if (user === name) {
            registeredUsers.splice(index, 1);
        }
    });
    console.log(registeredUsers);
    
}



let registeredUsers = ["Gaurav", "Neeraj", "Ayush", "Priyanshu", "Faizal"];

removeUsers(registeredUsers, "Ayush");
