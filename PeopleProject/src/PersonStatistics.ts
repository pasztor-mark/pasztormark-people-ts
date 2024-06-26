import { Person } from "./Person";


export function getAverageAge(People: Person[]) {
    let sum = 0
    let count = 0;
    for (let i = 0; i < People.length; i++) {
        count++
        sum += People[i].age
    }
    return (sum/count)
}
export function getNumberOfStudents(People: Person[]) {
    let students = 0;
    for (let i = 0; i < People.length; i++) {
        if (People[i].isStudent == true) {
            students++
        }
    }
    return students
}
export function getPersonWithHighestScore(People: Person[]) {
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
export function getAverageScoreOfStudents(People: Person[]) {
    let students = getNumberOfStudents(People);
    let studentScore = 0;
    for (let i = 0; i < People.length; i++) {
        if (People[i].isStudent == true) {
            studentScore += People[i].score
        }
    }
    return studentScore/students
}
export function getOldestStudent(People: Person[]) {
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
export function isAnyoneFailing(People: Person[]) {
    let failing = false;
    for (let i = 0; i < People.length; i++) {
        if (People[i].score < 40) {
            failing = true
        }
    }
    return failing
}