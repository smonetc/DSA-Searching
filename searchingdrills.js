const BinarySearchTree = require('./BST')

//How many searches?

function binarySearch(arr, value, start = 0, end = arr.length - 1) {

   if (start > end) {
       return -1;
   }

   let index = Math.floor((start + end) / 2);
   let item = arr[index];

   console.log(`start and end: `, start, end);
   if (item === value) {
       return index;
   }

   else if (item < value) {

       return binarySearch(arr, value, index + 1, end);
   }
   //item greatter than value
   else if (item > value) {

       return binarySearch(arr, value, start, index - 1);
   }
}

// Find a book

const books = [
   { dewy: '003.445', title: 'a' },
   { dewy: '003.447', title: 'b' },
   { dewy: '003.449', title: 'c' },
   { dewy: '003.449', title: 'd' },
   { dewy: '003.450', title: 'e' },

]; //create the book array with key,value pairs

//

function findBook(array, dewey, title) {
   //object.keys at beginning index
   const keys = Object.keys(array[0]); //identify the object keys

   //go through each element in the array
   array.forEach(book => {
       if (book[keys[0]] === dewey && book[keys[1]] === title) { 
           return book; // if key and value match return the book
       }
   });
}

