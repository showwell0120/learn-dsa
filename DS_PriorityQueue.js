//Priority Queue is based on Queue, but doesn't need to allow FIFO
//Every element has been defined the level of priority, the higher level, the more prioritized it would be served. If the same level, then check the order.

function PriorityQueue() {
  let item = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  this.enqueue = (element, priority)=>{
    const queueElement = new QueueElement(element, priority)
    if(this.isEmpty) {
      items.push(queueElement)
    } else {
      let added = false
      //iterate the items, if the priority of queueElement is lower than items[i], then insert queueElement to the front of items[i]
      for (let i = 0; i < items.length; i++) {
        if(queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if(!added) {
        items.push(queueElement)
      }
    }
  }

  this.dequeue = ()=>{
    return items.shift()
  }

  this.front = ()=>{
    return items[0]
  }

  this.isEmpty = ()=>{
    return items.length === 0
  }

  this.clear = ()=>{
    items = []
  }

  this.size = ()=>{
    return items.length
  }

  this.print = ()=>{
    //because every element in items is an object, so it has to use JSON.stringify() to print items
    console.log(JSON.stringify(items))
  }
}

//demo
const priorityQueue = new priorityQueue()
var a = priorityQueue.isEmpty() //true
priorityQueue.enqueue('白金會員', 2)
priorityQueue.enqueue('黃金會員', 1)
priorityQueue.enqueue('非會員', 4)
priorityQueue.enqueue('短期會員', 3)
var b = priorityQueue.front() //'{element: "黃金會員", priority: 1}'
var c = priorityQueue.size() //4
priorityQueue.print() //[{"element":"黃金會員","priority":1},{"element":"白金會員","priority":2},{"element":"短期會員","priority":3},{"element":"非會員","priority":4}]
var d = priorityQueue.dequeue() //'{element: "黃金會員", priority: 1}'
var e = priorityQueue.front()  //'{element: "白金會員", priority: 2}'
var f = priorityQueue.size() //3
priorityQueue.print() //[{"element":"白金會員","priority":2},{"element":"短期會員","priority":3},{"element":"非會員","priority":4}]
