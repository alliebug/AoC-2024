export function partOneCode(input) {
  /**
   * space for the code
   */
  let score = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i][1] === "X") {
      score++;
      if (input[i][0] === "A") score += 3;
      if (input[i][0] === "C") score += 6;
    }
    if (input[i][1] === "Y") {
      score += 2;
      if (input[i][0] === "B") score += 3;
      if (input[i][0] === "A") score += 6;
    }
    if (input[i][1] === "Z") {
      score += 3;
      if (input[i][0] === "C") score += 3;
      if (input[i][0] === "B") score += 6;
    }
  }
  return "Part1 answer." + score;
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  let score = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i][1] === "X") {
      //lose

      if (input[i][0] === "A") score += 3; //opp chose rock, you choose scissor
      if (input[i][0] === "B") score += 1; //opp chose paper, you choose rock
      if (input[i][0] === "C") score += 2; //opp chose scissor, you choose paper
    }
    if (input[i][1] === "Y") {
      //draw
      score += 3;
      if (input[i][0] === "A") score += 1; // opp: rock, you: rock
      if (input[i][0] === "B") score += 2;
      if (input[i][0] === "C") score += 3;
    }
    if (input[i][1] === "Z") {
      //win
      score += 6;

      if (input[i][0] === "A") score += 2; // opp: rock, you: paper
      if (input[i][0] === "B") score += 3; //opp: paper, you: scissor
      if (input[i][0] === "C") score += 1; //opp:scissor, you: rock
    }
  }
  return "Part2 answer." + score;
}

export function inputParse(originalInput) {
  const currentInput = originalInput.toString();
  let parsedInput = currentInput;
  /**
   * Add input logic here
   */
  parsedInput = currentInput.split("\n").filter((t) => t !== "");
  parsedInput = parsedInput.map((data) => data.split(" "));

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
