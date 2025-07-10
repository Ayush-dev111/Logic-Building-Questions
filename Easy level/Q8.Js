//  Guest List (Array)
//  You are organizing an event, and you have an array of guest names.
//  Write a function to check if a particular guest has RSVP’d (is in the array).

let guestNames = ["zoe", "john", "kane", "Me"];

const checkGuest = (name) =>{
    for(let key of guestNames){
        if(key === name){
            return true;
        }
    }
    return false;
}

let value = checkGuest("zoe");
console.log(value);
