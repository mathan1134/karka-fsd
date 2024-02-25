
// //  basic function
// function delayedFunction() {
//     console.log("basic delay function.");
//   }
//   setTimeout(delayedFunction, 1000);



//   //  anonymous function 
// setTimeout(function() {
//     console.log("anonymns function.");
//   }, 2000);
  


// // passing arguments
//   function greet(name) {
//     console.log(`Hello, ${name}!`)
//  }
//   setTimeout(greet, 3000, 'John');
  


// //   cancel timeout
//   function delayedAlert() {
//     console.log("This alert was delayed by 4000 milliseconds ");
//   }
//     const timeoutId = setTimeout(delayedAlert, 4000);
//   //   clearTimeout(timeoutId);
  
  


  
//  arrow function 
setTimeout(() => {
    console.log("This code is executed after 1000 milliseconds .");
  }, 1000);
  

                                //  setInterval

   
                    //  1  (basic)

// let count = 0;

// function intervalFunction() {
// console.log(`This function is called every 1000 milliseconds. Count: ${count}`);
// count++;

// if (count === 5) {
//     // Stop the interval after the count reaches 5
//     clearInterval(intervalId);
//     console.log("Interval stopped after 5 calls.");
// }
// }

// // Set an interval of 1000 milliseconds (1 second)
// const intervalId = setInterval(intervalFunction, 1000);


//   2


// //  anonymous function 
// let counter = 0;

// const intervalId = setInterval(function() {
//   console.log(`This code is executed every 1500 milliseconds. Counter: ${counter}`);
//   counter++;

//   if (counter === 4) {
//     // Stop the interval after the counter reaches 4
//     clearInterval(intervalId);
//     console.log("Interval stopped after 4 calls.");
//   }
// }, 1500);


// 3

//    html
// let counter = 0;
// const counterElement = document.getElementById('counter');

// const intervalId = setInterval(function() {
//   counterElement.textContent = `Count: ${counter}`;
//   counter++;

//   if (counter === 6) {
//     // Stop the interval after the counter reaches 6
//     clearInterval(intervalId);
//     console.log("Interval stopped after 6 calls.");
//   }
// }, 1000)