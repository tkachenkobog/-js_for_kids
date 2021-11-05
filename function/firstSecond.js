/*Создайте две функции, add и multiply; пусть каждая принимает
по два аргумента. Функция add должна складывать аргументы
и возвращать результат, а функция multiply — перемножать
аргументы.
С помощью только этих двух функций вычислите следующее
несложное выражение:
36325 * 9824 + 777
 */
var mult = function (number1,number2) {
     return number1*number2;
    };

var plus = function(arg1,arg2){
    return arg1+arg2;

}
console.log(plus(777,mult(36325,9824)));

/* #2. Совпадают ли массивы?
Напишите функцию areArraysSame, которая принимает два
массива с числами в качестве аргументов. Она должна возвращать true, если эти массивы одинаковые (то есть содержат одни
и те же числа в одном и том же порядке), или false, если массивы различаются. Убедитесь, что ваша функция работает правильно, запустив такой код:
areArraysSame([1, 2, 3], [4, 5, 6]);
false
areArraysSame([1, 2, 3], [1, 2, 3]);
true
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
false   */


function areArraysSame(odne,vtore){
  if(odne.length != vtore.length){
 return false;} 
for(i = 0; i < odne.length; i++){
if(odne[i] != vtore[i])
return false;}
    return true;
}
console.log(areArraysSame([1, 2, 3], [4,5,6]));
