const fs = require("fs");
const testCase = fs.readFileSync("./testCase.txt", "utf-8").split('\n')
const numberOfTestCase = parseInt(testCase[0])
const reA = /[a-z]/;
const reN = /[0-9]/;

function chunkMaxLength(arr, chunkSize, maxLength) {
    return Array.from({length: maxLength}, () => arr.splice(1,chunkSize));
}

const newTestCaseData = testCase.map((data) => {
    if (reN.test(data)){
        const newData = parseInt(data)
        return newData
    } else {
        return data;
    }
})

const onlyWord = testCase.filter((data) => {
    if (reA.test(data)) {
        const newList =  data;
        return newList;
    }
})


const numberList = newTestCaseData.filter((data) => {
    return reN.test(data)
})

const wordListNumber = chunkMaxLength(numberList, 2, numberOfTestCase)
wordListNumber.map((data) => console.log(chunkMaxLength(onlyWord, data[0], numberOfTestCase)))


for (let i = 0; i < numberOfTestCase; i++) {

}





function main() {

}


function wordAppear() {

}