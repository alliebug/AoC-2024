export function partOneCode(input) {
  /**
   * space for the codeß
   */
  //console.log("hi", input);

  let sumsArr = input.map((elf) => elf.reduce((a, b) => a + b));
  let max = Math.max(...sumsArr);

  return max;
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  let sumsArr = input.map((elf) => elf.reduce((a, b) => a + b));
  sumsArr.sort((a, b) => a - b).reverse();
  let ret = sumsArr[0] + sumsArr[1] + sumsArr[2];

  return ret;
}

export function inputParse(originalInput) {
  const currentInput = originalInput.toString();
  let parsedInput = currentInput;
  /**
   * Add input logic here
   */
  parsedInput = currentInput.split("\n\n");
  parsedInput = parsedInput.map((data) =>
    data
      .split("\n")
      .filter((t) => t !== "")
      .map(Number)
  );

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
