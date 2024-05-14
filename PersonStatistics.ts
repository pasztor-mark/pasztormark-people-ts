import Person from "./Person";

let People = [] as Person[]


export function getAverageAge() {
    let sum = 0
    let count = 0;
    for (let i = 0; i < People.length; i++) {
        count++
        sum += People[i].age
    }
    return (sum/count)
}
export function getNumberOfStudents() {
    let students = 0;
    for (let i = 0; i < People.length; i++) {
        if (People[i].isStudent == true) {
            students++
        }
    }
    return students
}
export function getPersonWithHighestScore() {
    let max = 0;
    let highest;
    for (let i = 0; i < People.length; i++) {
        if (People[i].score > max) {
            max = People[i].score
            highest = People[i];
        }
    }
    return highest
}
export function getAverageScoreOfStudents() {
    let students = getNumberOfStudents();
    let studentScore = 0;
    for (let i = 0; i < People.length; i++) {
        if (People[i].isStudent == true) {
            studentScore += People[i].score
        }
    }
    return studentScore/students
}
export function getOldestStudent() {
    let max = 0;
    let oldest;
    for (let i = 0; i < People.length; i++) {
        if (People[i].isStudent == true) {
            if (People[i].age > max) {
                max = People[i].age
                oldest = People[i]
            }
        }
    }
    return oldest
}
export function isAnyoneFailing() {
    let failing = false;
    for (let i = 0; i < People.length; i++) {
        if (People[i].score < 40) {
            failing = true
        }
    }
}