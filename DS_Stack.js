//"Stack" is an orderly collection that follows the rule of "Last in First Out(LIFO)"
//Insert&remove element at the last

//Build instructor
function Stack() {
  //use array to store elements
  let items = []

  //insert an element to the top of the stack
  this.push = (element)=>{
    items.push(element)
  }

  //remove the top element and return it
  this.pop = ()=>{
    return items.pop()
  }

  //only return the top element
  this.peek = ()=>{
    let last = items.length - 1
    return items[last]
  }

  //check if the stack is empty or not. If empty, return true, otherwise, return false
  this.isEmpty = ()=>{
    let count = items.length
    return count === 0
  }

  //clear all elements in the stack
  this.clear = ()=>{
    items.length = 0
    //items = []
  }

  //return the amount of the stack, similar to Array.prototype.length
  this.size = ()=>{
    return items.length
  }

  //print the stack
  this.print = ()=>{
    console.log(items.toString())
  }
}

//Demo
var poem = new Stack()
poem.push('千早振る')
poem.push('神世も聞かず')
poem.push('龍田川韓紅に')
poem.push('水絞るとは')

poem.print() //'千早振る,神世も聞かず,龍田川韓紅に,水絞るとは'
var a = poem.pop() //'水絞るとは'
var b = poem.size() //3
var c = poem.peek() //'龍田川韓紅に'
poem.clear() //[]
var d = poem.isEmpty() //true
