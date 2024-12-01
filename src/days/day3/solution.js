var anum = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};
export function partOneCode(input) {
  /**
   * space for the code
   */
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    const mid = input[i].length / 2;
    const s1 = input[i].slice(0, mid);
    const s2 = input[i].slice(mid);
    for (let j = 0; j < s1.length; j++) {
      if (s2.includes(s1[j])) {
        //console.log(s1[j]);
        arr.push(s1[j]);
        break;
      }
    }
  }

  //console.log(arr);
  arr = arr.map((element) => anum[element]);
  //console.log(arr);
  const sum = arr.reduce((a, b) => a + b);
  return "Part1 answer." + sum;
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  let retArr = [];
  for (let i = 0; i < input.length; i += 3) {
    let temp = [input[i], input[i + 1], input[i + 2]];
    temp.sort((a, b) => a.length - b.length);
    console.log(temp);
    const elf1 = temp[0];
    const elf2 = temp[1];
    const elf3 = temp[2];

    let temp2 = [];

    for (let i = 0; i < elf1.length; i++) {
      if (elf2.includes(elf1[i])) {
        temp2.push(elf1[i]);
      }
    }
    for (let i = 0; i < elf3.length; i++) {
      if (temp2.includes(elf3[i])) {
        // console.log(elf3[i]);
        retArr.push(elf3[i]);
        break;
      }
    }
  }
  retArr = retArr.map((element) => anum[element]);
  console.log(retArr);
  const sum = retArr.reduce((a, b) => a + b);

  return "Part2 answer." + sum;
}

export function inputParse(originalInput) {
  const currentInput = originalInput.toString();
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
