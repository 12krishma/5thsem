let xyz=["Banana", "Orange", "Apple", "Mango"]

// length of the string
console.log("The length of the string is : ", xyz.length);

//Converts an array to string
console.log("convert the string into number: ",xyz.toString());

//introduced the array method at()
console.log(xyz.at(2));

//Join array elements
console.log("Joining the array elements: ",xyz.join("*"));

//pop(), removes the last element from an array
console.log("The removed element is",xyz.pop());

//push() ,add new element at the end
xyz.push("Kiwi")
console.log("The added element is",xyz );

//shift() , removes the first array element
console.log("The removed first element is" ,xyz.shift());

//unshift ,adds new element at first
xyz.unshift("strawberry")
console.log("The added element is ",xyz);

//delete element
delete xyz[0];
console.log( xyz[0]);





