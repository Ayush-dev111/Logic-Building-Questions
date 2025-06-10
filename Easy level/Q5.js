// Student Scores (Array)
//You have an array of student scores, and you need to calculate the average
// score. Write a function to return the average score from the array.

const marks = [75,76,89,43,36,92,33];

const avgMarks = ()=>{
    let sum = 0;
    let avg = 0;
    for(let i = 0; i<marks.length; i++){
        sum += marks[i];
    }
    avg = sum / marks.length;
    return avg;
}

let value = avgMarks();
console.log(value);

