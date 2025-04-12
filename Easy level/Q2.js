//  User Profile (Object)
//  You’re building a profile system. Each user’s profile is stored as an object with name,
//  email, and age properties. Write a function to update a user’s email address when given their name.

const userProfiles = {
    1:{name: "Neeraj", email: "neeraj@mail.com" , age: 24},
    2:{name: "Negi", email: "negi@mail.com" , age: 20},
    3:{name: "Rawat", email: "rawat@mail.com" , age: 23},
    4:{name: "Vicky", email: "vicky@mail.com" , age: 25},
}


const updateMail = (name, newEmail)=>{
    for(let key in userProfiles){
        if(userProfiles[key].name === name){
            userProfiles[key].email = newEmail
        }
    }
}

updateMail("Negi", "negiji@mail.com");

console.log(userProfiles[2].email); 
