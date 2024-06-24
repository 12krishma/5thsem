//using js selecters to take the value of two inputs and show the sum of that value using a function call on button click
//change the background color after div on button click using js


// function add(){
//     const num1=document.getElementById('num1').value
//     const num2=document.getElementById('num2').value
//     const sum = Number(num1)+ Number(num2)
//     const output = document.getElementById('sum').innerHTML = "the sum is "+ sum;
// }

function add() {
    // Get the values from the input fields
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
  
    // Convert the input values from string to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    // Calculate the sum
    var sum = num1 + num2;
  
    // Display the result
    document.getElementById('output').textContent = 'The sum is: ' + sum;
  }