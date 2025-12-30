// console.log("JAck Ma maslahatlari");
// const list = [
//     "yahshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang ko'proq xato qiling", //30-40
//     "o'zingizga ishlashni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling",//50-60
//     "endi dam oling, foydasi yo'q ", //60
// ]
// function maslahatBering(a, callback) {
//     if(typeof a !=="number") callback("insert a number",null);
//     else if(a <= 20) callback(null, list[0]);// callback ni birinchi qismi errorga 2 chi qismi dataga tegishli
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function(){
//             callback(null, list[5]);
//         }, 5000);    
//     }
// }

// console.log("passed here 0")
// maslahatBering(40, (err, data) =>{  //bu yerda parametr sifatida function ishga tushadi
//     if(err) console.log("ERROR", err);// data esa yuqoridagi callback to'g'ri ishlagandagi qaytariladigan arraydir
//     else{
//         console.log('javob:', data)
//     }
// });
// console.log("passed here 1")
//bu yerdagi kiritilgan 10 raqam bo'lmasa bizga error qaytaradi
//qolgan hollarda callback function ishlaydi va tegishli 
//oraliq bo'yicha result qayataradi


///////////////////////////////////////////////////////////////////////////////////
///Asynchronous functions

// console.log("JAck Ma maslahatlari");
// const list = [
//     "yahshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang ko'proq xato qiling", //30-40
//     "o'zingizga ishlashni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling",//50-60
//     "endi dam oling, foydasi yo'q ", //60
// ]
// async function maslahatBering(a) {
//     if(typeof a !=="number") throw new Error("insert a number",null);
//     else if(a <= 20) return(null, list[0]);// callback ni birinchi qismi errorga 2 chi qismi dataga tegishli
//     else if (a > 20 && a <= 30) return(null, list[1]);
//     else if (a > 30 && a <= 40) return(null, list[2]);
//     else if (a > 40 && a <= 50) return(null, list[3]);
//     else if (a > 50 && a <= 60) return(null, list[4]);
//     else {
//         return new Promise((resolve, reject) => { ///promise function bilan foydalanamiz
//             // setTimeout(() => {
//             //     resolve(list[5]);
//             // }, 5000)
//               setInterval(() => {
//                 resolve(list[5]);
//             }, 1000)
//         })
//     // else { return list[5]; // bu functionda setTimeout function ishlamaydi
//         // setTimeout(function(){
//         //     callback(null, list[5]);
//         // }, 5000);    
//     }
// }

//call via then/catch
//then catch bu holda qolgan qiymatlarni so'raganimizda callback hell yuzaga keladi
// console.log("passed here 0")
// maslahatBering(25)
//  .then((data) => {  
//   console.log("javob:", data);
// })
//  .catch((err) => {
//     console.log("ERROR", err)
// });
// console.log("passed here 1")

//call async/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(71);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// async function run() {
//     let javob = await maslahatBering(60);
//     console.log(javob);
// }
// run();
//async function holatida callback hell ni oldini oladi va 
// ketma ketlik saqlanadi va birinchi qism to javob bermaguncha kutadi
//odatda async function ishlatganda try catch ishlatish maslahat beriladi

///////////////////////////////////////////////////////////////////

//Callback bilan qayta setInterval 
console.log("JAck Ma maslahatlari");
const list = [
    "yahshi talaba bo'ling", //0-20
    "to'g'ri boshliq tanlang ko'proq xato qiling", //30-40
    "o'zingizga ishlashni boshlang", //30-40
    "siz kuchli bo'lgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling",//50-60
    "endi dam oling, foydasi yo'q ", //60
]
function maslahatBering(a, callback) {
    if(typeof a !=="number") callback("insert a number",null);
    else if(a <= 20) callback(null, list[0]);// callback ni birinchi qismi errorga 2 chi qismi dataga tegishli
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function(){
            callback(null, list[5]);
        }, 1000);    
    }
}

console.log("passed here 0")
maslahatBering(70, (err, data) =>{  //bu yerda parametr sifatida function ishga tushadi
    if(err) console.log("ERROR", err);// data esa yuqoridagi callback to'g'ri ishlagandagi qaytariladigan arraydir
    else{
        console.log('javob:', data)
    }
});
console.log("passed here 1")
/// interval bilan berganimizda endi ko'rsatilgan interval 
//bo'yicha biz kiritgan parametrga mos qiymat qaytarib turadi






////MIT Task A
// function countLetter(letter, word) {
//     let count = 0;
//     for( let i = 0; i < word.length; i++) {
//         letter = letter.toLowerCase();
//         word = word.toLowerCase();
//         if(word[i] === letter) {
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countLetter('A', 'animation'))
//bunda i berilgan so'zning har birini toki so'z
//tugaguncha olib tekshiruvchi o'zgaruvchi 
//so'zning hsr bir harfini oladi va biz parametr sifatida
//kiritgan letter bilan solishtirib ko'radi bunda uning
//turi va qiymatini ham solishtiradi agar i va letter
//teng bo'lsa uni hisobga oladi va keyingi harfga o'tadi toki 
//word parametrining oxirgi harfigacha
//Katta harflarni ham adashmasdan hisoblashi uchun ularni
// lowerCase ga o'girib solishtiradigan qilib mantiq yozamiz