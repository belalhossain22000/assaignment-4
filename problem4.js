// Problem 4: Finding Bad data

// তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।



// Sample Input & Output:-



// Input: [ 1,2,5 ]

// Output: 0



// Input: [ 2, -5, -7, -13 ]

// Output: 3



// Input: [ -4, -9, -5, -33, -55 ]

// Output: 5



function findingBadData(array){
    if ( !Array.isArray(array)) {
        return " Invalid input. Please enter an array.";
      }
    let BadData = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i]
        if(element < 0){
            BadData.push(element)
        }
    }
    return BadData.length;
}
const input = '[   -4, -9, -5, -33, -55 ]';
const aa= findingBadData(input);
console.log(aa);

//-------------------------------------------
//-----------------------------------------------

// function findingBadData(array) {
//     function checkBadData(number) {
//       return number < 0;
//     }
//     let badDataAmount = array.filter(checkBadData);
//     return badDataAmount.length;
//   }
  
//   console.log(findingBadData([ -4, -9, -5, -33, -55]));