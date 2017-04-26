//initialize an array
let students = ['Mark', 'Zuck', 'Pony', 'Elon']

//push: insert an element to the last of the array
students.push('Mary') //['Mark', 'Zuck', 'Pony', 'Elon', 'Mary']

//pop: remove the last element of the array
students.pop() //['Mark', 'Zuck', 'Pony', 'Elon']

//unshift: insert an element to the first position of the array
students.unshift('Mary') //['Mary', 'Mark', 'Zuck', 'Pony', 'Elon']

//shift: remove the first element of the array
students.shift() //['Mark', 'Zuck', 'Pony', 'Elon']

//splice: assign the specific index to insert or remove elements
//syntax: splice(start, deleteCount, item1, item2, ...)
students.splice(0, 2) //['Pony', 'Elon']
students.splice(1, 0, 'John', 'Cath') //['Pony', 'John', 'Cath', 'Elon']

//Using NESTED to make two-dimensions array
let students = []
students[0] = [79, 74, 86]
students[1] = [97, 54, 46]

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].length; j++) {
    console.log( students[i][j])
  }
}

//concat: combine multiple arrays and return a new array
var hege  = ["Cecilie", "Leo"]
var stale = ["Emil", "May", "Linus"]
var children = hege.concat(stale) //["Cecilie", "Leo", "Emil", "May", "Linus"]

//slice: slice the array and return a new array
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Raspberry']
var citrus = fruits.slice(1, 3) //['Orange', 'Lemon', 'Apple']

//join: use separator(default is comma(,)) to join all elements to a string
var citrus = fruits.join() //"Banana,Orange,Lemon,Apple,Raspberry"

//every: whether all elements in the array pass the test implemented by the provided function.If all results are true, then return true, otherwise, return false
var ages = [32, 33, 16, 40]
function checkAdult(age) {
  return (age >= 18) ? true : false
}
ages.every(checkAdult) //false

//some: similar to every(), the difference is just one result is true, then return true, otherwise, return false
ages.some(checkAdult) //true

//map: iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase)
var numbers = [4, 9, 16, 25]
numbers.map(function(index, elem) {
  console.log(index, elem)
})

//reducere/duceRight: applies a function against an accumulator and each element in the array (from left to right/from right to left) to reduce it to a single value.
numbers.reduce((accumulator, currentValue, currentIndex, array)=>{
  return accumulator + currentValue //10+4+9+16+25=64
}, 10)

//filter: according to the filter function to return the eligible elements
function checkAdult(age) {
    return age >= 18
}
ages.filter(checkAdult) //[32, 33, 40]

//forEach: iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database)
numbers.forEach(function(value, index) {
  console.log(value, index)
})

//indexOf: return the index value of specific element. If not found, return -1
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var a = fruits.indexOf("Orange") //1

//laseIndexOf: similar to indexOf, but it returns the last occurrence of specific element
var fruits = ["Banana", "Orange", "Apple", "Mango", "Orange"]
var a = fruits.indexOf("Orange") //4

//reverse: reverse the elements
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.reverse() //["Mango", "Apple", "Orange", "Banana"]

//sort: sort by value, if there is a text, then sort by ASCII Code
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.sort() //["Apple", "Banana", "Mango", "Orange"]

//toString: export an array to a string
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.toString() // Banana,Orange,Apple,Mango

//valueOf: export the value of an array
//reference: http://blog.miniasp.com/post/2013/07/11/Front-end-Research-JavaScript-valueOf-method.aspx
var v = fruits.valueOf() //["Banana", "Orange", "Apple", "Mango"]
