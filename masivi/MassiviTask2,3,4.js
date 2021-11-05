/*#2. Изощренные дразнилки Усовершенствуйте генератор дразнилок, чтобы он создавал дразнилки такого типа: 
«У тебя [часть тела] еще более [прилагательное], чем [часть тела животного] у [животное]».
#3. Оператор + или join?
Сделайте две версии своего генератора дразнилок: одна пусть
использует для составления дразнилки оператор +, а другая создает массив со словами и соединяет их через пробел с помощью
join. Какой вариант вам больше нравится и почему?
*/
var RandomBodyParts = ["череп","ніготь","вухо","зуб","волосся","пупок","око"];
var RandomBodyPart = RandomBodyParts[Math.floor(Math.random()*RandomBodyParts.length)];
var RandomAdjs = ["тупий","нудний","старий","гнилий","слабкий","сліпий","глухий"];
var RandomAdj = RandomAdjs[Math.floor(Math.random()*RandomAdjs.length)];
var RandomAnimalsParts = ["копито","хвіст","шкіра","ніс","яйця"];
var RandomAnimalsPart = RandomAnimalsParts[Math.floor(Math.random()*RandomAnimalsParts.length)];
var RandomAnimals=["свині","гуся","насті","курки","кролика"]
var RandomAnimal=RandomAnimals[Math.floor(Math.random()*RandomAnimals.length)];
var Posil="Твій" +" "+ RandomBodyPart +" ще більш "+RandomAdj+" ніж " +RandomAnimalsPart + " у "+ RandomAnimal;
console.log(Posil);

//через join
var Posil2= ["Твій",RandomBodyPart,"ще більш",RandomAdj,"ніж",RandomAnimalsPart,"у",RandomAnimal].join(" ");
console.log(Posil2);

//#4. Соединение чисел. Как с помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1
var numbers =[3,2,1].join(" більш,ніж ");
console.log(numbers);
