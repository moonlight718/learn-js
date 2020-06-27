function validateStackSequences(pushed, popped) {
  const stack = [];
  let j = 0;
  for (let i = 0, len = pushed.length; i < len; i++) {
    stack.push(pushed[i]);
    
    while(stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }

  return !stack.length;
}

console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]));
