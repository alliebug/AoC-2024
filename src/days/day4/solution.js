export function partOneCode(input) {
  /**
   * space for the code
   */
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let a = input[i][0].split("-").map(Number);
    let b = input[i][1].split("-").map(Number);
    // console.log("a      ", a);
    // console.log("b      ", b);
    if ((a[0] <= b[0] && a[1] >= b[1]) || (a[0] >= b[0] && a[1] <= b[1])) {
      count++;
      // console.log(`i: ${i} .  a: ${a},  b: ${b}    -------- true`);
    }
    // else {
    //   console.log(`i: ${i} .  a: ${a},  b: ${b}    -------- not true`);
    // }
  }
  return count;
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let a = input[i][0].split("-").map(Number);
    let b = input[i][1].split("-").map(Number);
    // console.log("a      ", a);
    // console.log("b      ", b);
    if (!(a[1] < b[0] || a[0] > b[1])) {
      count++;
      // console.log(`i: ${i} .  a: ${a},  b: ${b}    -------- true`);
    }
    // else {
    //   console.log(`i: ${i} .  a: ${a},  b: ${b}    -------- not true`);
    // }
  }
  return count;
}

export function inputParse(originalInput) {
  const currentInput = originalInput.toString();
  let parsedInput = currentInput;
  /**
   * Add input logic here
   */
  // parsedInput = currentInput.split("\n").filter((t) => t !== "");
  // parsedInput = parsedInput.map((data) => data.split(","));

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
