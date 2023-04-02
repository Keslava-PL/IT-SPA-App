export function checkPasswordRepeat(input1, input2) {
  let answer;

  if (input1 === input2) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
