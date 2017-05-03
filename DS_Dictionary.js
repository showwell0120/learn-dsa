//Dictionary: An abstract data type storing items, or values. A value is accessed by an associated key.
//In ES6, it provides "Map" constructor. e.g. var myMap = new Map();

function Dictionary() {
  let items = {}
  let length = 0

  //create a key-value pair
  this.set = (key, value)=>{
    items[key] = value
    length++
  }

  this.remove = (key)=>{
    if(this.has(key)) {
      //The delete operator removes a property from an object.
      delete items[key]
      length--
      return true
    }
    return false
  }

  //It's important to check if the key is exists
  this.has = (key)=>{
    //way1: return items.hasOwnProperty(key)
    //way2:
    return key in items
  }

  this.get = (key)=>{
    //First, check if the key is exists
    return this.has(key) ? items[key] : undefined
  }

  this.clear = ()=>{
    items = {}
    length = 0
  }

  this.keys = ()=>{
    return Object.keys(items)
  }

  //return all the values in items
  this.values = ()=>{
    let values = {}
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k])
      }
      return values
    }
  }

  this.size = ()=>{
    //way1: return length

    //way2: iterate items
    // let count = 0
    // for (let prop in items) {
    //   if (items.hasOwnProperty(prop)) {
    //     ++count
    //   }
    // }
    // return count

    // way3:
    return Object.keys(items).length
  }

  this.getItems= ()=>{
    return items
  }
}

//demo
const dictionary = new Dictionary()
dictionary.set('Mark', 'mark@gmail.com')
dictionary.set('Ivy', 'ivy@gmail.com')
dictionary.set('Mary', 'mary@gmail.com')
console.log(dictionary.keys())  //['Mark', 'Ivy', 'Mary']
console.log(dictionary.values())  //['mark@gmail.com', 'ivy@gmail.com', 'mary@gmail.com']
console.log(dictionary.get('Mark')  //'mark@gmail.com'
dictionary.remove('Mark')  //true
console.log(dictionary.keys()  //['Ivy', 'Mary']
