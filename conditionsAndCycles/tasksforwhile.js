/* Напишите цикл for, который печатает степени тройки, не превышающие
10 000 (программа должна выводить 3, 9, 27 и т. д.)
Перепишите это задание, вместо for использовав цикл while */
for(i=3; i<10000; i=i*3){
console.log(i);
}
var counter=3;
while(counter<10000){
    console.log("Рахуєм через while "+ counter);
    counter=counter*3;

}