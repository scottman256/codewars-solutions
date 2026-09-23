const getTurkishNumber = (num) => {
const ones = ['','bir','iki', 'üç', 'dört','beş', 'altı','yedi','sekiz','dokuz'];
const tens = ['on','yirmi','otuz', 'kırk', 'elli','altmış', 'yetmiş','seksen','doksan'];
if (num == 0) return 'sıfır';
onesUnit = num % 10;
tensUnit = parseInt(num / 10) - 1;
let solution = (tensUnit >= 0 ? tens[tensUnit]: "")  + " " + ones[onesUnit];
return solution.trim();
}