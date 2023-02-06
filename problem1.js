// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

// Sample Input & Output

// Input: 5

// Output: 7.5

// Input: 50

// Output: 75

// Input: 33

// Output: 49.5

// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
// if (typeof inputNumber !== 'number' || Math.sign(inputNumber) === -1) {
//     return 'Invalid input. Please enter a positive number.';
// }

// function mindGame(inputNumber){
//     if (typeof inputNumber !== 'number' || inputNumber < 0) {
//         return 'Invalid input. Please enter a positive number.';
//     }
//     const multiplication = inputNumber*3;
//     const addition = multiplication + 10;
//     const divaidation = addition/2;
//     const substraction = divaidation - 5;
//     return substraction;

// }
// const result = mindGame(5);
// console.log(result);
//---------------------------------------------------//
//---------------------------------------------------------
function mindGame(inputNumber) {
  if (typeof inputNumber !== "number" || inputNumber < 0) {
    return "Invalid input. Please enter a positive number.";
  }

  let number = (inputNumber * 3 + 10) / 2 - 5;
  return number;
}

console.log(mindGame(-2));
