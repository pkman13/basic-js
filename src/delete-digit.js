const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const dig = n.toString().split('');
  let max = 0; 
  for (let i = 0; i < dig.length; i++) {
    // Создаем новый массив, содержащий все цифры, кроме той, что находится на i-ой позиции.
    const filterDig = dig.filter((_, index) => index !== i); 
    // Объединяем оставшиеся цифры в строку.
    const numString = filterDig.join(''); 
    // Преобразуем строку в число.
    const numWithoutDigit = parseInt(numString); 
    if (numWithoutDigit > max) {
      max = numWithoutDigit
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
//console.log(deleteDigit(43494))