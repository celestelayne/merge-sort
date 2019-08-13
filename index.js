console.log('this works');

arr = [1, 5, 6, 11, 3, 4, 8, 13];

const mergeSort = (arr) => {
    // end function when array consists of one element
    if (arr.length === 1){
        return arr
    }
//     console.log(arr)
    const middle = Math.floor(arr.length / 2);
    console.log(middle)
    const left = arr.slice(0, middle);
//     console.log(left)
    const right = arr.slice(middle, arr.length);
//     console.log(right)

    return merge(left, right
    )
}


const merge = (left, right) => {
    console.log(left, right)
    let result = [];
    let idxLeft = 0
    let idxRight = 0

// iterate over the left and right arrays as long as the index is less than the length of the array

    while (idxLeft < left.length && idxRight < right.length) {
     console.log(idxLeft, idxRight)
     // compare the elements in each array starting from index 0
     // if the number on the left is less than the number on the right
     if (left[idxLeft] <= right[idxRight]) {
     // push the left element into the result array
         result.push(left[idxLeft]);
     // increment the index
         idxLeft++
     } else {
     // otherwise, push the right element into the result array
         result.push(right[idxRight]);
     // increment the index (0 becomes 1, 1 becomes 2 ... )
         idxRight++
     }
     // in the result
        let mergedArr = result.concat(left.slice(idxLeft).concat(right.slice(idxRight)))
        fourLargest(mergedArr, 4)
    }
}

const fourLargest = (arr, n) => {
    let sliced = arr.slice(-n);
    console.log(sliced)
}

mergeSort(arr)
