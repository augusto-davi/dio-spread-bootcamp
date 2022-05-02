function replaceEvenNumsToZero(array) {
  const newArray = changeByZero(array);
  return newArray;
}

function changeByZero(array) {
  const change = array.map((number) => {
    return number % 2 === 0 && number !== 0 ? 0 : number;
  });
  return change;
}

let values = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(replaceEvenNumsToZero(values));
