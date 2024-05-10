let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp = [...array]; //array-n içində olan dəyərləri kopyalıb temp eyni dəyərləri mənimsətmək üçün
let c;
for (c = 0; c < array.length; c++) {
  if (array[c] % 2 !== 0) {
    array[c]++;
    console.log(`${array[c]}`);
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (c = 0; c < numbers.length; c++) {
  if (numbers[c] % 2 == 0) {
    const result = (numbers[c] *= numbers[0]);
    console.log(`${result}`);
  }
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (c = 0; c < array1.length; c++) {
  if (array1[c] % 2 !== 0) {
    const result1 = (array1[c] *= array1[8]);
    console.log(`${result1}`);
  }
}

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let min = array2[0];
let max = array2[0];

for (c = 0; c < array2.length; c++) {
  if (array2[c] > max) {
    max = array2[c];
  } else if (array2[c] < min) {
    min = array2[c];
  }
}
const res = max + min;
console.log(`Deyerlerin toplamı: ${res}`);
