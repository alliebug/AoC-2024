export function partOneCode(input) {
  /**
   * space for the code
   */
  let dir = new Map();
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("$ cd") && !input[i].includes("..")) {
      let dirName = input[i].slice(5);
      //console.log(dirName);
      dir.set(i, dirName);
    }
  }

  console.log(dir);

  const iterator1 = dir.keys();
  //console.log(iterator1);
  let lines = [];
  for (const element of iterator1) {
    lines.push(element);
  }

  lines.push(input.length);

  console.log(lines);
  let map = new Map();
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i]; j < lines[i + 1]; j++) {
      let folder = dir.get(lines[i]);
      if (!input[j].includes("$")) {
        if (!input[j].includes("dir")) {
          let temp = input[j].split(" ");
          temp = Number(temp[0]);
          if (map.has(folder)) map.set(folder, [map.get(folder)[0] + temp]);
          else map.set(folder, [temp]);
        }
        //console.log(folder, input[j]);
      }
    }
  }

  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i]; j < lines[i + 1]; j++) {
      let folder = dir.get(lines[i]);
      if (!input[j].includes("$")) {
        if (input[j].includes("dir")) {
          let temp = input[j].split(" ");
          // input[j] = temp[1];
          if (map.has(folder)) map.set(folder, [...map.get(folder), temp[1]]);
          else map.set(folder, [temp[1]]);
        }
      }
    }
  }

  console.log(map);

  const iterator2 = map.keys();
  let sum = 0;
  for (const element of iterator2) {
    let a = getSize(map, element);
    if (a < 100000) sum += a;
  }

  function getSize(map, element) {
    let a = map.get(element);
    let ret = 0;
    if (!isNaN(a[0])) {
      ret += a[0];
    }
    for (let i = 0; i < a.length; i++) {
      if (isNaN(a[i])) {
        ret += getSize(map, a[i]);
      }
    }
    return ret;
  }

  return "Part1 answer.  " + sum;
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
  parsedInput = currentInput.split("\n").filter((t) => t !== "");
  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
