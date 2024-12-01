export function partOneCode(input) {
  /**
   * space for the code
   */
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    if (stack.includes(input[i])) {
      let a = stack.indexOf(input[i]);
      stack = stack.splice(a + 1);
      stack.push(input[i]);
      console.log(stack);
    } else {
      stack.push(input[i]);
      console.log(stack);
      if (stack.length === 4) {
        return i + 1;
      }
    }
  }
  //return "Part1 answer.";
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    if (stack.includes(input[i])) {
      let a = stack.indexOf(input[i]);
      stack = stack.splice(a + 1);
      stack.push(input[i]);
      console.log(stack);
    } else {
      stack.push(input[i]);
      console.log(stack);
      if (stack.length === 14) {
        return i + 1;
      }
    }
  }
  //return "Part2 answer.";
}

export function inputParse(originalInput) {
  const currentInput = originalInput;
  let parsedInput = currentInput;
  /**
   * Add input logic here
   */

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
