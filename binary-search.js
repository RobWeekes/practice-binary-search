function linearSearch (arr, target) {
    return arr.indexOf(target);   // filter also works
    // return arr.findIndex(ele => ele === target);
};

let arr = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
  53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
  82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100]

let target = 89 ;

// console.log(linearSearch(arr, target));


function binarySearch(arr, target) {
    // console.log(target);
    // Set integers pointing to the high and low range of possible indices
    let low = 0;    // low index
    // console.log(low);
    let high = arr.length - 1;    // high index
    // console.log(high);

    // While high and low indices do not overlap...
    while(low <= high) {
      // Find the midpoint between high and low indices
      let mid = Math.floor((low + high) / 2);
      // console.log(mid);

      // Compare the target value to the midpoint value

      // If the target equals the midpoint...
      // Return the midpoint index
      if(arr[mid] === target) return mid;

      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      if(target < arr[mid]) high = mid - 1;
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1

      if(target > arr[mid]) low = mid + 1;

      // console.log(low);
      // console.log(high);
    }

    // Return -1 if the loop exits with overlapping pointers
      return -1;
}

// console.log(binarySearch(arr, target));


// local testing

// arr = [];

//     for (let i = 0 ; i < 1000000 ; i++) {
//       arr.push(i);
//     }

// const timeout = 1000;
//     let startTime = Date.now();
//     let i = 1;
//     let binarySearches = 0;

//     while (i < arr.length) {
//       // console.log(binarySearch(arr, i)) // i
//       // console.log(binarySearch(arr, -i)) // -1

//       binarySearches += 2;

//       if (Date.now() - startTime > timeout || binarySearches > 100000) {
//         break;
//       }
//     }

//     console.log(binarySearches); // 100000
//     console.log(Date.now() - startTime);


module.exports = [linearSearch, binarySearch];
