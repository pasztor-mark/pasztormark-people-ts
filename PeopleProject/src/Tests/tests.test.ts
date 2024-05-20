import { getAverageAge, getNumberOfStudents, getPersonWithHighestScore, getAverageScoreOfStudents, getOldestStudent, isAnyoneFailing } from "../PersonStatistics";
import { Person } from "../Person";
import {describe, it, expect} from 'vitest'

let TestGroup: Person[] = [
    {
        id: 1,
        name: "John Doe",
        age: 20,
        isStudent: true,
        score: 32
    },
    {
        id: 2,
        name: "Jane Doe",
        age: 28,
        isStudent: false,
        score: 12
    }
]
console.log(getAverageAge(TestGroup))

describe("#getAvgAge", () => {
    it("should return NaN with empty arguments due to division by zero", () =>{
        expect(getAverageAge({} as Person[])).toBe(NaN)
    });
    it("should return 24 with test batch", () =>{
        expect(getAverageAge(TestGroup)).toBe(24)
    });
})
describe("#getNumberOfStudents", () => {
    it("should return 0 with empty arguments", () =>{
        expect(getNumberOfStudents({} as Person[])).toBe(0)
    })
    it("should return 2 with test batch", () =>{
        expect(getNumberOfStudents(TestGroup)).toBe(1)
    })
})

describe("#getPersonWithHighestScore", () => {
    it("should return no person with empty arguments", () =>{
        expect(getPersonWithHighestScore({} as Person[])).toBe(undefined)
    })
    it("should return first with test batch", () =>{
        expect(getPersonWithHighestScore(TestGroup)).toBe(TestGroup[0])
    })
})

describe("#getAverageScoreOfStudents", () => {
    it("should return NaN with empty arguments due to division by zero", () =>{
        expect(getAverageScoreOfStudents({} as Person[])).toBe(NaN)
    })
    it("should return first with test batch", () =>{
        expect(getAverageScoreOfStudents(TestGroup)).toBe(32)
    })
})
describe("#getOldestStudent", () => {
    it("should return no person with empty arguments", () =>{
        expect(getOldestStudent({} as Person[])).toBe(undefined) 
    })
    it("should return first instance with test batch", () =>{
        expect(getOldestStudent(TestGroup)).toBe(TestGroup[0])
    })
})
describe("#isAnyoneFailing", () => {
    it("should return false with empty arguments", () =>{
        expect(isAnyoneFailing({} as Person[])).toBe(false) 
    })
    it("should return true with test batch", () =>{
        expect(isAnyoneFailing(TestGroup)).toBe(true)
    })
})

