
const myArr = [1, 2, 3, 4, 5, true, "Yuvraj"]
console.log(myArr);


// Array methods
myArr.push("Rajiv") // adds values in last
myArr.pop() // removes value from last 

myArr.unshift("go") // adds value in first position
myArr.shift() // removes value from first postion


const newArr = myArr.join() // converts array to string
const CnewArr = myArr.join('') // to remove commas
console.log(CnewArr);


console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)

