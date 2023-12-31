import {Stack} from '../pilha/stack.js'


export function decimalToBinary(decNumber) {
  const stack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';
  while( number > 0) {
    rem = Math.floor(number % 2);
    stack.push(rem);
    number = Math.floor(number / 2)
  }
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }
  return binaryString
}

