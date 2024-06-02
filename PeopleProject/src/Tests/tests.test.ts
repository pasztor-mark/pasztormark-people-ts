import { getAverageAge, getNumberOfStudents, getPersonWithHighestScore, getAverageScoreOfStudents, getOldestStudent, isAnyoneFailing } from "../PersonStatistics";
import { Person } from "../Person";
import { describe, it, expect } from 'vitest'

const TestGroup: Person[] = [
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

const TestGroupWithOnePerson: Person[] = [
    {
        id: 1,
        name: "John Doe",
        age: 19,
        isStudent: false,
        score: 86
    }
]
const TestGroupWithMultiplePeople: Person[] = [
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
        isStudent: true,
        score: 12
    },
    {
        id: 3,
        name: "Hosszanti János",
        age: 29,
        isStudent: true,
        score: 92
    },
    {
        id: 4,
        name: "Gipsz Jakab",
        age: 18,
        isStudent: false,
        score: 12
    },
    {
        id: 5,
        name: "Példa János",
        age: 43,
        isStudent: false,
        score: 32
    },
    {
        id: 6,
        name: "Plavi Barnus",
        age: 58,
        isStudent: true,
        score: 12
    }
    //avg age: 
]

describe("#getAvgAge", () => {
    //empty array
    it("should return NaN with empty arguments due to division by zero", () => {
        expect(getAverageAge({} as Person[])).toBe(NaN)
    });
    //test group of 2
    it("should return 24 with test batch", () => {
        expect(getAverageAge(TestGroup)).toBe(24)
    });
    //test group of 1
    it("should return 19 with 1 person test batch", () => {
        expect(getAverageAge(TestGroupWithOnePerson)).toBe(19)
    });
    //test group of 6
    it("should return ~32.67 with the extended test group", () => {
        expect(getAverageAge(TestGroupWithMultiplePeople)).toBeCloseTo(32.66, 1) //0.05 margin of error tört miatt
    })
})
describe("#getNumberOfStudents", () => {
    //empty array
    it("should return 0 with empty arguments", () => {
        expect(getNumberOfStudents({} as Person[])).toBe(0)
    })
    //test group of 2
    it("should return 2 with test batch", () => {
        expect(getNumberOfStudents(TestGroup)).toBe(1)
    })
    //test group of 1
    it("should return 0 with 1 person test batch", () => {
        expect(getNumberOfStudents(TestGroupWithOnePerson)).toBe(0)
    });
    //test group of 6
    it("should return 4 with the extended test group", () => {
        expect(getNumberOfStudents(TestGroupWithMultiplePeople)).toBe(4)
    })
})

describe("#getPersonWithHighestScore", () => {
    //empty array
    it("should return no person with empty arguments", () => {
        expect(getPersonWithHighestScore({} as Person[])).toBe(undefined)
    })
    //test group of 2
    it("should return first with test batch", () => {
        expect(getPersonWithHighestScore(TestGroup)).toBe(TestGroup[0])
    })
    //test group of 1
    it("should return the only student with 1 person test batch", () => {
        expect(getPersonWithHighestScore(TestGroupWithOnePerson)).toBe(TestGroupWithOnePerson[0]) //egyetlen ember
    });
    //test group of 6
    it("should return 3rd student with the extended test group", () => {
        expect(getPersonWithHighestScore(TestGroupWithMultiplePeople)).toBe(TestGroupWithMultiplePeople[2]) //Hosszanti János
    })
})

describe("#getAverageScoreOfStudents", () => {
    //empty array
    it("should return NaN with empty arguments due to division by zero", () => {
        expect(getAverageScoreOfStudents({} as Person[])).toBe(NaN)
    })
    //test group of 2
    it("should return first with test batch", () => {
        expect(getAverageScoreOfStudents(TestGroup)).toBe(32)
    })
    //test group of 1
    it("should return 0 with 1 person test batch", () => {
        expect(getAverageScoreOfStudents(TestGroupWithOnePerson)).toBe(NaN) //nincs tanuló
    });
    //test group of 6
    it("should return 4 with the extended test group", () => {
        expect(getPersonWithHighestScore(TestGroupWithMultiplePeople)).toBe(TestGroupWithMultiplePeople[2]) //Hosszanti János
    })
})
describe("#getOldestStudent", () => {
    //empty array
    it("should return no person with empty arguments", () => {
        expect(getOldestStudent({} as Person[])).toBe(undefined)
    })
    //test group of 2
    it("should return first instance with test batch", () => {
        expect(getOldestStudent(TestGroup)).toBe(TestGroup[0])
    })
    //test group of 1
    it("should return undefined with 1 person test batch", () => {
        expect(getOldestStudent(TestGroupWithOnePerson)).toBe(undefined) //nincs tanuló
    });
    //test group of 6
    it("should return last with the extended test group", () => {
        expect(getOldestStudent(TestGroupWithMultiplePeople)).toBe(TestGroupWithMultiplePeople[5]) //Plavi Barnus
    })
})
describe("#isAnyoneFailing", () => {
    //empty array
    it("should return false with empty arguments", () => {
        expect(isAnyoneFailing({} as Person[])).toBe(false)
    })
    //test group of 2
    it("should return true with test batch", () => {
        expect(isAnyoneFailing(TestGroup)).toBe(true)
    })
    //test group of 1
    it("should return false with 1 person test batch", () => {
        expect(isAnyoneFailing(TestGroupWithOnePerson)).toBe(false) //nincs tanuló
    });
    //test group of 6
    it("should return true with the extended test group", () => {
        expect(isAnyoneFailing(TestGroupWithMultiplePeople)).toBe(true)
    })
})

//a feladat ts-nél nem kér osztályt