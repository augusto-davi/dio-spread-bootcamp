function numbers(x, y) {
  const output = firstSentence(x, y) + secondSentence(x, y);

  return output;
}

function firstSentence(x, y) {
  const checkValues =
    x === y
      ? `Os números ${x} e ${y} são iguais. `
      : `Os números ${x} e ${y} não são iguais. `;

  return checkValues;
}

function secondSentence(x, y) {
  const sum = x + y;
  const sumString = `Sua soma é igual a ${sum}, `;
  let compareSum;

  if (sum > 10 && sum < 20) compareSum = `que é maior que 10 e menor que 20.`;
  else if (sum < 10) compareSum = `que é menor que 10 e menor que 20.`;
  else if (sum > 20) compareSum = `que é maior que 10 e maior que 20.`;
  else compareSum = "Não pude comparar o valor da soma com 10 e 20.";

  const defineCompareSum = sumString + compareSum;

  return defineCompareSum;
}

console.log(numbers(1, 18));
