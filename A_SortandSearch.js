'use strict'

function ArrayList() {
  let array = []

  this.insert = function(item) {
    array.push(item)
  }

  this.toString = function() {
    return array.join()
  }

  const swap = function(index1, index2) {
    let tmp = array[index1]
    array[index1] = array[index2]
    array[index2] = tmp
  }

  //Bubble Sort
  //1. Compare each pair of adjacent elements from the beginning of an array and, if they are in reversed order, swap them.
  //2. If at least one swap has been done, repeat step 1.
  this.bubbleSort = function() {
    let length = array.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if(array[j] > array[j + 1]) {
          swap(j, j + 1)
        }
      }
    }
  }

  this.improvedBubbleSort = function() {
    var flag = true
    for(let i = 0; i < array.length - 1 && flag; i++){
        flag = false
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[j + 1] < array[j]){
                swap(j, j + 1)
                flag = true
            }
        }
    }
  }

  //Selection sort
  //we start by assuming that the first number in the array is the minimum. We then find out the smallest number in the array and if there is any number smaller than the first number, we exchange the numbers after one pass through the array. After this, the number in first position is smallest and array is sorted till position 1.
  //Next, we assume that the number at second position is the smallest in the remainder of the array. We pass through the array comparing each number with this number. After the pass is complete, we exchange this number with the smallest number in the remainder of the array. At the end of this, we will have first and second number in the array in sorted order. We repeat this step for rest of the numbers until all the numbers are sorted.
  //Reference: http://codingmiles.com/sorting-algorithms-selection-sort-using-javascript/
  this.selectionSort = function() {
    var length = array.length;
    for (var i = 0; i < length - 1; i++) {
        //Number of passes
        var min = i;
        //min holds the current minimum number position for each pass; i holds the Initial min number
        for (var j = i + 1; j < length; j++) {
          //Note that j = i + 1 as we only need to go through unsorted array
            if (array[j] < array[min]) {
              //Compare the numbers
                min = j;
                //Change the current min number position if a smaller num is found
            }
        }
        if (min != i) {
            //After each pass, if the current min num != initial min num, exchange the position.
            //Swap the numbers
            swap(min, i)
        }
    }
  }

  //Insertion Sort: we divide the initial unsorted array into two parts; sorted part and unsorted part. Initially the sorted part just has one element (Array of only 1 element is a sorted array). We then pick up element one by one from unsorted part; insert into the sorted part at the correct position and expand sorted part one element at a time.
  this.insertionSort = function() {
    var len = array.length;
    for (var i = 1; i < len; i++) {
        var tmp = array[i];
        //Copy of the current element.
        /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
        for (var j = i - 1; j >= 0 && (array[j] > tmp); j--) {
            //Shift the number
            array[j + 1] = array[j];
        }
        //Insert the copied number at the correct position
        //in sorted part.
        array[j + 1] = tmp;
    }
  }

  //Merge Sort:
  //Firefox and Safari use merge sort for their implementation of Array.prototype.sort()
  //If the list is of length 0 or 1, then it is already sorted. Otherwise:
  //1. Divide the unsorted list into two sublists of about half the size.
  //2. Sort each sublist recursively by re-applying merge sort.
  //3. Merge the two sublists back into one sorted list.
  //Reference: http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
  const merge = function(left, right) {
    var result = []

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length)
        result.push(left.shift())

    while (right.length)
        result.push(right.shift())

    return result
  }

  const mergeSortRec = function(array) {
    const length = array.length
    if (length === 1) {
      return array
    }
    const mid = Math.floor(length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid, length)
    return merge(mergeSortRec(left), mergeSortRec(right))
  }

  this.mergeSort = function() {
    array = mergeSortRec(array)
  }

  //Quick Sort
  // Find a “pivot” item in the array. This item is the basis for comparison for a single round.
  // Start a pointer (the left pointer) at the first item in the array.
  // Start a pointer (the right pointer) at the last item in the array.
  // While the value at the left pointer in the array is less than the pivot value, move the left pointer to the right (add 1). Continue until the value at the left pointer is greater than or equal to the pivot value.
  // While the value at the right pointer in the array is greater than the pivot value, move the right pointer to the left (subtract 1). Continue until the value at the right pointer is less than or equal to the pivot value.
  // If the left pointer is less than or equal to the right pointer, then swap the values at these locations in the array.
  // Move the left pointer to the right by one and the right pointer to the left by one.
  // If the left pointer and right pointer don’t meet, go to step 1.
  this.quickSort = function() {
  	quick(array, 0, array.length - 1)
  };

  const quick = function(array, left, right) {
  	let index;
  	if(array.length > 1) {
  		index = partition(array, left, right)
  	}
  }

  const partition = function(array, left, right) {
  	const pivot = array[Math.floor((right + left) / 2)]
  	var i = left
  	var j = right
  	while(i <= j) {
  		while(array[i] < pivot) {
  			i++
  		}
  		while(array[j] > pivot) {
  			j++
  		}
  		if(i <= j) {
  			swapQuickSort(array, i, j)
  			i++
  			j--
  		}
  	}
  	return i
  }

  const swapQuickSort = function(array, index1, index2) {
  	const tmp = array[index1]
  	array[index1] = array[index2]
  	array[index2] = tmp
  }

  //Sequential Search
  this.sequentialSearch = function(item) {
    for (let i = 0; i < array.length; i++) {
      if(item === array[i]) {
        return i
      }
    }
    return -1
  }

  //Binary Search
  //Binary search works on sorted arrays. Binary search begins by comparing the middle element of the array with the target value. If the target value matches the middle element, its position in the array is returned.
  // If the target value is less than or greater than the middle element, the search continues in the lower or upper half of the array, respectively, eliminating the other half from consideration.
  this.binarySearch = function() {
    this.quickSort()
    let low = 0
    let high = array.length
    let mid
    let element
    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      element = array[mid]
      if(element < item) {
        low = mid + 1
      } else if(element > item) {
        high = mid - 1
      } else {
        return mid
      }
    }
    return -1
  }
}


function createNonSortedArray(size) {
  let array = new ArrayList()
  for (let i = size; i > 0; i--) {
    array.insert(i)
  }
  return array
}

//bubble sort test
let array1 = createNonSortedArray(5)
console.log(array1.toString())
array1.bubbleSort()
console.log(array1.toString())
let array2 = createNonSortedArray(5)
console.log(array2.toString())
array2.improvedBubbleSort()
console.log(array2.toString())

//selection sort test
let array3 = createNonSortedArray(5)
console.log(array3.toString())
array3.selectionSort()
console.log(array3.toString())

//insertion sort test
let array4 = createNonSortedArray(5)
console.log(array4.toString())
array4.insertionSort()
console.log(array4.toString())

//merge sort test
let array5 = createNonSortedArray(5)
console.log(array5.toString())
array5.mergeSort()
console.log(array5.toString())

//quick sort test
let array6 = createNonSortedArray(5)
console.log(array6.toString())
array6.quickSort()
console.log(array6.toString())

//sequential search test
let array7 = createNonSortedArray(10)
console.log(array7.sequentialSearch(3))
console.log(array7.sequentialSearch(11))

//binary search test
let array8 = createNonSortedArray(10)
console.log(array7.sequentialSearch(3))
console.log(array7.sequentialSearch(11))
