//#1. Новые дразнилки. Сделайте генератор случайных дразнилок со своим набором слов.
var RandomBodyParts = ["череп","ніготь","вухо","зуб","волосся","пупок","око"];
var RandomBodyPart = RandomBodyParts[Math.floor(Math.random()*RandomBodyParts.length)];
var RandomAdjs = ["тупий","нудний","старий","гнилий","слабкий","сліпий","глухий"];
var RandomAdj = RandomAdjs[Math.floor(Math.random()*RandomAdjs.length)];
var RandomInss=["жадіна","ябіда","боягуз","жир-пром-комбінат","вредний гусь","коровчик","піздабол"];
var RandomIns=RandomInss[Math.floor(Math.random()*RandomInss.length)];
var Posil="В тебе" +" "+ RandomBodyPart +" " + RandomAdj + " " + RandomIns + " ти бляцький)" + " ги!";
console.log(Posil);