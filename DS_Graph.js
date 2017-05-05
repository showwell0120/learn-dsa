//A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.
//These pairs are known as edges, arcs, or lines for an undirected graph and as arrows, directed edges, directed arcs, or directed lines for a directed graph.
//The vertices may be part of the graph structure, or may be external entities represented by integer indices or references.
//A graph data structure may also associate to each edge some edge value, such as a symbolic label or a numeric attribute (cost, capacity, length, etc.)

//Represent graphs - Adjacency Lists : For each vertex i, store an array of the vertices adjacent to it. We typically have an array of |V| adjacency lists, one adjacency list per vertex.
//example :
// [ [1, 6, 8],
//   [0, 4, 6, 9],
//   [4, 6],
//   [4, 5, 8],
//   [1, 2, 3, 5, 9],
//   [3, 4],
//   [0, 1, 2],
//   [8, 9],
//   [0, 3, 7],
//   [1, 4, 7] ]

//Reference:
//https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs
//http://www.csie.ntnu.edu.tw/~u91029/Graph.html#1

'use strict'

function Graph() {
  //store all the names of vertices
  let vertices = []
  //store an array of the vertices adjacent to each vertex
  const adjList = new Dictionary()

  //when create an vertex, push it into vertices, and its corresponding adjacency lists.
  this.addVertex = function(v) {
    vertices.push(v)
    adjList.set(v, [])
  }

  //We are going to build undirected graph, so v and x have to put counterpart into thier adjacency lists
  this.addEdge = function(v, w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  this.toString = function() {
    let s = ''
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + '->'
      let neighbors = adjList.get(vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }

  const initializeColor = function() {
    let color = []
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white'
    }
    return color
  }

  //Breadth-First Search(BFS): use queue to store the vertices, and follow the FIFO rule traverse the vertex
  this.bfs = function(v, callback) {
    let color = initializeColor()
    let queue = new Queue()
    queue.enqueue(v)
    while (!queue.isEmpty()) {
      let u = queue.dequeue()
      let neighbors = adjList.get(u)
      color[u] = 'grey'
      if(neighbors && neighbors.length) {
        for (let i = 0; i < neighbors.length; i++) {
          let w = neighbors[i]
          if(color[w] === 'white') {
            color[w] = 'grey'
            queue.enqueue(w)
          }
        }
      }
      color[u] = 'black'
      if(callback) {
        callback(u)
      }
    }
  }

  //Depth-First Search(DFS): use stack to store the vertices. If there's a new vertex pushed, then traverse it.
  this.dfs = function(callback) {
    let color = initializeColor()
    for (var i = 0; i < vertices.length; i++) {
      if(color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback)
      }
    }
  }

  const dfsVisit = function(u, color, callback) {
    color[u] = 'grey'
    if(callback) {
      callback(u)
    }
    let neighbors = adjList.get(u)
    if(neighbors && neighbors.length) {
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i]
        if(color[w] === 'white') {
          dfsVisit(color[w], color, callback)
        }
      }
    }
    color[u] = 'black'
  }

  let time = 0

  this.DFS = function() {
    let color = initializeColor()
    let d = []
    let f = []
    let p = []
    let time = 0

    for (let i = 0; i < vertices.length; i++) {
      if(color[vertices[i]] === 'white') {
        DFSVisit(vertices, color, d, f, p)
      }
    }

    return {
      discovery: d,
      finished: f,
      predecessors: p
    }
  }

  const DFSVisit = function(u, color, d, f, p) {
    color[u] = 'grey'
    d[u] = ++time
    let neighbors = adjList.get(u)
    if(neighbors && neighbors.length) {
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i]
        if(color[w] === 'white') {
          p[w] = u
          DFSVisit(w, color, d, f, p)
        }
      }
    }
    color[u] = 'black'
    f[u] = ++time
  }
}

function Dictionary() {
  let items = {}
  let length = 0

  this.set = function(key, value) {
    items[key] = value
    length++
  }
  this.remove = function(key) {
    if(this.has(key)) {
      delete items[key]
      length--
      return true
    }
    return false
  }
  this.has = function(key) {
    return key in items
  }
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined
  }
  this.clear = function() {
    items = {}
    length = 0
  }
  this.keys = function() {
    return Object.keys(items)
  }
  this.values = function() {
    let values = {}
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k])
      }
      return values
    }
  }
  this.size = function() {
    return Object.keys(items).length
  }
  this.getItems= function() {
    return items
  }
}

function Queue() {
  let items = []
  this.enqueue = (element)=>{
    items.push(element)
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
  this.size = ()=>{
    return items.length
  }
  this.print = ()=>{
    console.log(items.toString())
  }
}

function Stack() {
  let items = []
  this.push = (element)=>{
    items.push(element)
  }
  this.pop = ()=>{
    return items.pop()
  }
  this.peek = ()=>{
    let last = items.length - 1
    return items[last]
  }
  this.isEmpty = ()=>{
    let count = items.length
    return count === 0
  }
  this.clear = ()=>{
    items.length = 0
  }
  this.size = ()=>{
    return items.length
  }
  this.print = ()=>{
    console.log(items.toString())
  }
}

//demo1
const graph = new Graph()
let vertices = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i])
}
graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(1, 4)
graph.addEdge(3, 4)
graph.addEdge(3, 7)
graph.addEdge(4, 7)
console.log(graph.toString())
// 1->2 3 4
// 2->1
// 3->1 4 7
// 4->1 3 7
// 5->
// 6->
// 7->3 4
// 8->

//demo2
const graph1 = new Graph()
let vertices1 = ['A', 'B', 'C', 'D', 'E', 'F']
for(let i = 0; i < vertices1.length; i++) {
	graph1.addVertex(vertices1[i])
}
graph1.addEdge('A', 'C')
graph1.addEdge('A', 'D')
graph1.addEdge('B', 'D')
graph1.addEdge('B', 'E')
graph1.addEdge('C', 'F')
graph1.addEdge('F', 'E')
graph1.bfs('A', function(r) {
  console.log(r)  //A C D F B E
})
graph1.dfs(function(r) {
  console.log(r)
})
// A
// white
// white
// B
// white
// white
// C
// white
// D
// E
// white
// F
console.log(graph1.DFS())
//{ discovery: [ 'A,B,C,D,E,F': 11 ],
//  finished: [ 'A,B,C,D,E,F': 12 ],
//  predecessors: [] }
