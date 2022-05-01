let checkEqualityValues, sum, sumString, compareSum, output;

function numbers(x, y) {
  checkEqualityValues =
    x === y
      ? `Os números ${x} e ${y} são iguais. `
      : `Os números ${x} e ${y} não são iguais. `;

  sum = x + y;
  sumString = `Sua soma é igual a ${sum}, `;

  if (sum > 10 && sum < 20) compareSum = `que é maior que 10 e menor que 20.`;
  else if (sum < 10) compareSum = `que é menor que 10 e menor que 20.`;
  else if (sum > 20) compareSum = `que é maior que 10 e maior que 20.`;
  else compareSum = "Não pude comparar o valor da soma com 10 e 20.";

  output = checkEqualityValues + sumString + compareSum;

  return output;
}

console.log(numbers(1, 1));
