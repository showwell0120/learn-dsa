//Circular queue is a one-dimension array that follows Q[0: N-1], while Q[0] is the next element of Q[N-1]. In a basic queue, it would encounter that there are some vacancies at the front-end. But when pushing some elements, it would be found that the queue is full. So, circular queue is the solution for this situation.

//reference code: http://stackoverflow.com/questions/1583123/circular-buffer-in-javascript
//reference: http://epaper.gotop.com.tw/pdf/AEE032400.pdf

function CircularQueue(n) {
  this._items = new Array(n)
  this.length = 0
}

CircularQueue.prototype.toString = function() {
    return '[object CircularQueue(' + this._items.length + ') length ' + this.length + ']'
}

CircularQueue.prototype.get = function(i) {
    if(i < 0 || i < this.length - this._items.length) {
      return undefined
    }
    return this._items[i % this._items.length]
}

CircularQueue.prototype.set = function(i, v) {
    if(i < 0 || i < this.length - this._items.length)
        throw CircularQueue.IndexError
    while (i > this.length) {
      this._items[this.length % this._items.length] = undefined
      this.length++
    }
    this._items[i % this._items.length] = v
    if(i == this.length) {
      this.length++
    }
}

CircularQueue.prototype.push = function(v) {
  this._items[this.length % this._items.length] = v
  this.length++
}

CircularQueue.IndexError = {}


//demo
var cq = new CircularQueue(5)
cq.set(3,'volleyball') //{_items: [undefined, undefined, undefined, volleyball], length: 4}
cq.push('basketball') //{_items: [undefined, undefined, undefined, volleyball, basketball], length: 5}
cq.set(2, "baseball")
cq.set(1, "football")
cq.set(1, "soccer") //{_items: [soccer, football, baseball, volleyball, basketball], length: 5}
cq.get(5) //'soccer'
cq.get(8) //'volleyball'
cq.push('badminton') //{_items: [badminton, football, baseball, volleyball, basketball], length: 6}
cq.get(5) //'badminton'
