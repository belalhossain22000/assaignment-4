
// when you need multiplication 3 and addition 10 divaidation 2 and subtraction 5     //with any number then you will use this function 

function mindGame(inputNumber) {
  if (typeof inputNumber !== "number" || inputNumber < 0) {
    return "Invalid input. Please enter a positive number.";
  }

  let number = (inputNumber * 3 + 10) / 2 - 5;
  return number;
}


//when u need to chake an even or odd then you will use this function

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


// You need to find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction. Otherwise you must return double of the input. then you will use this function



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

// when you need to chake how many nagative number have your list then you use this function

function findingBadData(array) {
  if (!Array.isArray(array)) {
    return " Invalid input. Please enter an array.";
  }
  let BadData = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < 0) {
      BadData.push(element);
    }
  }
  return BadData.length;
}
// You have to figure out how many diamonds you will get in total by combining the gems of all friends. If the number of total diamond is over 1000, then you will get as many diamonds as are left by subtracting 2000 from the total diamond.When you need to chake this you will use this function



function gemsToDiamond(numOne, numTwo, numThree) {
  if (
    typeof numOne !== "number" ||
    typeof numTwo !== "number" ||
    typeof numThree !== "number"
  ) {
    return "Invalid input. Please enter a positive number.";
  }

  let totalDiamonds = numOne * 21 + numTwo * 32 + numThree * 43;
  if (totalDiamonds >= 1000 * 2) {
    let newDiamondsAmount = totalDiamonds - 2000;
    return newDiamondsAmount;
  } else {
    return totalDiamonds;
  }
}
