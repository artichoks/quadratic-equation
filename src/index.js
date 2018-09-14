module.exports = function solveEquation(equation) {
  const array = equation.split(' ');
  const a = Number(array[0]),
    b = (array[3] === '-') ? -Number(array[4]) : Number(array[4]),
    c = (array[7] === '-') ? -Number(array[8]) : Number(array[8]);
  const D = Math.pow(b, 2) - 4 * a * c;
  const answer = [];
  answer.push(Math.round((-b + Math.sqrt(D)) / (2 * a)));
  answer.push(Math.round((-b - Math.sqrt(D)) / (2 * a)));
  return answer.sort((a, b) => a - b);
}
