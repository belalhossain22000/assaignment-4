// তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে।

// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

// Input: ‘Phero’

// Output: odd

// Input: ‘Batch7’

// Output: even

// Input: ‘chatgpt’

// Output: odd
// if(typeof strings !== 'string'){
//     return 'invalid string. please enter a string';
// }

// function evenOdd(strings){
// if (typeof strings !== "string") {
//   return "invalid string .please enter a string";
// }

//  const strLen = strings.length;
//     if(strLen%2==0){
//         return 'even'
//     }
//     else{
//         return 'odd'
//     }

// }

// const result = evenOdd(955789);

// console.log(result);
//-------------------------------------
//------------------------------------------

function evenOdd(string) {
  if (typeof string !== "string") {
       return "invalid string .please enter a string";
     }
  
  if (string.length % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOdd(-97));
