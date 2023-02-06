function mindGame(inputNumber) {
  if (typeof inputNumber !== "number" || inputNumber < 0) {
    return "Invalid input. Please enter a positive number.";
  }

  let number = (inputNumber * 3 + 10) / 2 - 5;
  return number;
}

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

function isLGSeven(number) {
  if (typeof number !== "number") {
    return "Invalid input. Please enter a  number.";
  }

  if (number < 7) {
    return number - 7;
  } else {
    return number * 2;
  }
}

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
