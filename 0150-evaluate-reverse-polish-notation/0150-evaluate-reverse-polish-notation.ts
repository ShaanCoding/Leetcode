/*
+ - * /

Find the left most operator, apply it to two numbers before it
// replace all 3 tokens, the operator and the 2 numbers with the result
3 4 + = 7

4 13 5 / + = 13 / 5 = 4 2 + = 6
*/

function evalRPN(tokens: string[]): number {
  let operatorSet: Set<string> = new Set<string>(["+", "-", "*", "/"]);

  let stack: string[] = [];

  for (let character of tokens) {
    if (operatorSet.has(character)) {
      let numberTwo = stack.pop();
      let numberOne = stack.pop();

      let result: number = operator(
        character,
        parseInt(numberOne),
        parseInt(numberTwo)
      );
      stack.push(result.toString());
    } else {
      stack.push(character);
    }
  }

  return parseInt(stack.pop());
}

const operator = (
  token: string,
  numberOne: number,
  numberTwo: number
): number => {
  switch (token) {
    case "*":
      return numberOne * numberTwo;
    case "/":
      return numberOne / numberTwo;
    case "-":
      return numberOne - numberTwo;
    case "+":
      return numberOne + numberTwo;
  }
};
