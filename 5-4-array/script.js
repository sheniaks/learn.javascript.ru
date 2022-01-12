let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[~~((styles.length - 1) / 2)] = "Классика";
// console.log(styles.shift(), styles);
styles.unshift("Рэп", "Регги");
// console.log(styles);

const sumInput = function () {
  let arr = [];
  while (true) {
    let value = prompt("Введите число", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    arr.push(+value);
  }
  let result = arr.reduce((acc, val) => acc + val, 0);
  return result;
};
// alert(sumInput());

function getMaxSubSum(arr) {
    let maxSum = 0; // если элементов не будет - возвращаем 0
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
    return maxSum;
  }

  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
    return maxSum;
  }  