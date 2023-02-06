// Problem 3: Is Less or Greater than seven


// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  



// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

// Input : 6

// Output: -1

// Input: -15

// Output: -22

// Input: 15

// Output: 30


// function isLGSeven(number){
//     if (typeof number !== "number") {
//         return "Invalid input. Please enter a  number.";
//       }
//     const substractions = number - 7;
//     if(substractions <= 7){
//         return substractions;
//     }
//     else{
//         const multiplications = number*2;
//         return multiplications
//     }

// }

// const result = isLGSeven(6)
// console.log(result)

//-------------------------------------

function isLGSeven(number) {
    if (typeof number !== "number") {
        return "Invalid input. Please enter a  number.";
      }

    if (number < 7 ){
      return number - 7;
    }
    else{
      return number * 2;
    }
  }
  
  console.log(isLGSeven('15'));