// Problem 5: Convert your gems into diamond

// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে।

// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// Sample Input & Output:-

// Input: 1, 1, 1

// Output: 96

// Input: 20, 200, 50

// Output: 6970

// Input: 100, 5, 1

// Output: 303

// function gemsToDiamond(fOneG,fTwoG,fThreeG){
//     const fOneGP = 21*fOneG;
//     const fTwoGP = 32*fTwoG;
//     const fThreeGP = 43*fThreeG;
//     const totalDiamond = fOneGP + fTwoGP + fThreeGP;
//     if(totalDiamond>=1000*2){
//         return totalDiamond-2000;
//     }
//     else{
//         return totalDiamond;
//     }

// }
// const result = gemsToDiamond( 1, 1, 1);
// console.log(result);

//-------------------------------------------------------------------
//-------------------------------------------------------------------

function gemsToDiamond(numOne, numTwo, numThree) {
  if (
    typeof numOne !== "number" ||
    typeof numTwo !== "number" ||
    typeof numThree !== "number"
  ) {
    return "Invalid input. Please enter a positive number.";
  }

  let totalDiamonds = numOne * 21 + numTwo * 32 + numThree * 43;
  if (totalDiamonds > 1000 * 2) {
    let newDiamondsAmount = totalDiamonds - 2000;
    return newDiamondsAmount;
  } else {
    return totalDiamonds;
  }
}

console.log(gemsToDiamond(100, 5, 1));
