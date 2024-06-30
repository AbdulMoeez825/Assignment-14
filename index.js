//1.Write a js program to read and print elements of array.
let array = [0, 1, 2, 3, 4, 5, 6]
for(let i=0; i < array.length; i++){
	console.log("Element " + i + ": " + array[i])
}

//2.Write a js program to print all negative elements in an array.


let Array = [3, -1, -4, 5, -2, 8, -6];

for (let i = 0; i < Array.length; i++) {
  if (Array[i] < 0) {
    console.log("Negative element: " + Array[i]);
  }
}

//3.Write a js program to find sum of all array elements.

let sumOfArray = [100, 200, 300, 400]
let sum = 0
for(let i=0; i< sumOfArray.length; i++){
	sum += sumOfArray[i];
}
console.log("Sum of all array elements" + sum)

//4. Write a js program to find maximum and minimum element in an array.



let arrayElement = [3, 1, 10, 1, 5, 9, 2, 6, 5, 3, 5];
let max = arrayElement[0];
let min = arrayElement[0];

for (let i = 1; i < arrayElement.length; i++) {
  if (arrayElement[i] > max) {
    max = arrayElement[i];
  }
  if (arrayElement[i] < min) {
    min = arrayElement[i];
  }
}
console.log("Maximum element: " + max);
console.log("Minimum element: " + min);

//5. Write a js program to find second largest element in an array.
let newArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] > largest) {
    secondLargest = largest;
    largest = newArray[i];
  } else if (newArray[i] > secondLargest && newArray[i] < largest) {
    secondLargest = newArray[i];
  }
}
console.log("Second largest element: " + secondLargest);

//6. Write a js program to count total number of even and odd elements in an array.

let arrayOfElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let evenCount=0;
let oddCount=0;
for( let i = 0; i< arrayOfElements.length; i++){
	if(arrayOfElements[i] % 2 === 0 ){
		evenCount++;
	}
	else{
		oddCount++;
	}
}
console.log("Total numbers of even elements:" + evenCount)
console.log("Total number of odd elements:" + oddCount )

// 7. Write a js program to count total number of negative elements in an array.
let simpleArray = [3, 4, 5, -5, -6, -20, 7, -3]
let negativeCount = 0;
for( let i= 0; i< simpleArray.length; i++){
	if(simpleArray[i]<0){
		negativeCount++;
	}
}
console.log("Total number of negative elements:" + negativeCount)

//9. Write a js program to insert an element in an array.
let anotherArray = [1, 2, 3, 4, 5, 6, 7, 8]
anotherArray.splice(3, 0 , 3.5)
console.log("Updated Array elements", anotherArray)