//The Set object lets you store unique values of any type, whether primitive values or object references.
//In ES6, it already provides "Set" constructor. e.g. var mySet = new Set();

function Set() {
  //Use object type to let all the keys to be unique
  var items = {}
  var length = 0

  this.add = (value)=>{
    if(!this.has(value)) {
      items[value] = value
      length++
      return true
    }
    return false
  }

  this.remove = (value)=>{
    if(this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  //check if the value is in this set, return true or false
  this.has = (value)=>{
    //way1: return value in items

    //way2:
    return items.hasOwnProperty(value)
  }
  this.clear = ()=>{
    items = {}
  }
  this.size = ()=>{
    // way1: return length

    // way2: iterate the Objects
    // let count = 0
    // for(let prop in items) {
    //   // check if the prop is the key of items
    //   if(items.hasOwnProperty(prop)) {
    //     ++count
    //   }
    //   return count
    // }

    // way3:
    return Objects.keys(items).length
  }

  //return all the values in items
  this.values = ()=>{
    //way1: return Objecy.keys(items)

    //way2: the higher compatibility for borwsers
    let keys = []
    for (let key in items) {
      keys.push(key)
    }
    return keys
  }


  //The union of two sets A and B is the set of elements which are in A, in B, or in both A and B
  this.union = (otherSet)=>{
    let unionSet = new Set()
    let values = this.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for (var j = 0; j < values.length; j++) {
      unionSet.add(values[j])
    }
    return unionSet
  }

  //the intersection A ∩ B of two sets A and B is the set that contains all elements of A that also belong to B
  this.intersection = (otherSet)=>{
    let intersectionSet = new Set()
    let value = this.values()
    for (var i = 0; i < values.length; i++) {
      if(otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }

  //The relative complement of A with respect to a set B, also termed the difference of sets A and B, is the set of elements in B but not in A
  this.difference = (otherSet)=>{
    let differenceSet = new Set()
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }

  //a set A is a subset of a set B, or equivalently B is a superset of A, if A is "contained" inside B, that is, all elements of A are also elements of B.
  this.subset = (otherSet)=>{
    if(this.size() > otherSet.size()) {
      return false
    } else {
      let values = this.values()
      for (var i = 0; i < values.length; i++) {
        if(!otherSet.has(values[i])) {
          return false
        }
        return true
      }
    }
  }
}

//demo1
const set = new Set()
set.add(12)  //true {12:12}
console.log(set.values())  //[12]
console.log(set.has(12))  //true
console.log(set.suze())  //1
set.add(12) //false {12:12}
set.add(7)  //true {12:12, 7:7}
set.remove(12)  //true {7:7}
set.add(1)  //true {7:7, 1:1}
console.log(set.has(12))  //false
console.log(set.values()) //[7,1]
console.log(set.size()) //2

//demo2
let setA = new set()
setA.add(1)  //true {1:1}
setA.add(4)  //true {1:1, 4:4}
setA.add(2)  //true {1:1, 4:4, 2:2}
let setB = new Set()
setB.add(1)  //true {1:1}
setB.add(4)  //true {1:1, 4:4}
setB.add(2)  //true {1:1, 4:4, 2:2}
setB.add(7)  //true {1:1, 4:4, 2:2, 7:7}

//union
let unionSet = setA.union(setB)
console.log(unionSet)  //{1:1, 4:4, 2:2, 7:7}

//intersection
let intersectionSet = setA.intersection(setB)
console.log(intersectionSet)  //{1:1, 4:4, 2:2}

//difference
let differenceSet = setB.difference(setA)
console.log(differenceSet)  //{7:7}


//subset
console.log(setA.subSet(setB))  //true
