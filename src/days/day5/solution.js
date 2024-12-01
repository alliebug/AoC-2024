export function partOneCode(input) {
  /**
   * space for the code
   */
  // for (let i = 0; i < input[2].length; i++) {
  //   // for (let j = 0; j < parsedInput[2][i].length; j++) {
  //   input[2][i].pop();
  //   // }
  // }
  // let ret = [];
  // for (let i = 0; i < input[1].length; i++) {
  //   let a = Number(input[1][i][1]);
  //   let b = Number(input[1][i][3]);
  //   let c = Number(input[1][i][5]);
  //   console.log(a, b, c);
  //   let crates = input[2];
  //   console.log(crates);
  //   for (let k = 0; k < a; k++) {
  //     let moveFrom = crates[b - 1];
  //     //console.log("moveFrom ", moveFrom);
  //     let moveTo = crates[c - 1];
  //     //console.log("moveTo ", moveTo);
  //     // console.log("hi");
  //     moveTo = moveTo.splice(0, 0, moveFrom[0]);
  //     moveFrom = moveFrom.splice(0, 1);
  //     // console.log(temp);
  //   }
  //   console.log(crates);
  //   ret = crates;
  // }
  // let str = "";
  // for (let i = 0; i < ret.length; i++) {
  //   str += ret[i][0];
  // }
  // return "Part1 answer." + str;
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  for (let i = 0; i < input[2].length; i++) {
    // for (let j = 0; j < parsedInput[2][i].length; j++) {
    input[2][i].pop();
    // }
  }
  let ret = [];
  for (let i = 0; i < input[1].length; i++) {
    let a = Number(input[1][i][1]);
    let b = Number(input[1][i][3]);
    let c = Number(input[1][i][5]);
    console.log(a, b, c);
    let crates = input[2];
    console.log(crates);

    let moveTo = crates[c - 1];
    //console.log("moveTo ", moveTo);
    let temp = [];
    for (let k = 0; k < a; k++) {
      let moveFrom = crates[b - 1];
      //console.log("moveFrom ", moveFrom);
      temp.push(moveFrom[0]);
      moveFrom = moveFrom.splice(0, 1);
    }
    console.log("moving ", temp);

    moveTo = moveTo.splice(0, 0, ...temp);

    // console.log(temp);
    console.log(crates);
    ret = crates;
  }
  let str = "";
  for (let i = 0; i < ret.length; i++) {
    str += ret[i][0];
  }
  return "Part2 answer." + str;
}
function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
    return a.map(function (r) {
      return r[c].slice(1, 2);
    });
  });
}
export function inputParse(originalInput) {
  const currentInput = originalInput.toString();
  let parsedInput = currentInput;
  /**
   * Add input logic here
   */
  // parsedInput = currentInput.split("\n\n").filter((t) => t !== "");

  // parsedInput[0] = parsedInput[0].split("\n");
  // parsedInput[1] = parsedInput[1].split("\n");
  // parsedInput[2] = [];
  // for (let i = 0; i < parsedInput[0].length; i++) {
  //   // parsedInput[0][i] = parsedInput[0][i].split(" ");
  //   const arr = [];

  //   for (let index = 0; index < parsedInput[0][i].length; index += 4) {
  //     arr.push(parsedInput[0][i].slice(index, index + 4));
  //   }
  //   parsedInput[2].push(arr);
  // }

  // parsedInput[2] = transpose(parsedInput[2]);
  // for (let i = 0; i < parsedInput[2].length; i++) {
  //   parsedInput[2][i] = parsedInput[2][i].filter((t) => t !== " ");
  // }

  // for (let i = 0; i < parsedInput[1].length; i++) {
  //   parsedInput[1][i] = parsedInput[1][i].split(" ");
  // }
  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
