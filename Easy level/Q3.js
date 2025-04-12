//List of Tasks (Array)
// You are working on a to-do list app, where tasks are stored in an array.
// Each task has a name and status (either "done" or "pending"). 
// Write a function to count how many tasks are pending.

let tasks = [
    {name : "Wake up", status : "done"},
    {name : "shower", status : "pending"},
    {name : "break fast", status : "done"},
    {name : "study", status : "pending"}
]

const pendingCount = ()=>{
    let pendingTask = 0
    for(let key of tasks){
        if(key.status == "pending"){
            pendingTask++;
        }
    }
    return pendingTask;
}

let value = pendingCount();
console.log(value);
