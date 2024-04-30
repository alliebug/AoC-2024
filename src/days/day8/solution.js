export function partOneCode(input) {
  /**
   * space for the code
   */
  let count = input.length * 2 + (input.length - 2) * 2;
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input.length - 1; j++) {}
  }
  return "Part1 answer.";
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
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
