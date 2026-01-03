/////////////////////////MITASK-C ///////////////////////////////////
// Shunday class tuzing tuzing nomi Shop, va uni constructoriga
//  3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, 
//  biri qoldiq, biri sotish va biri qabul. Har bir method ishga 
//  tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return 
// hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
// return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!



///bu classda 3xil method bilan orqali 3 xil
//  mahsulot ni qabul qilinganlar soni 
// qoldiq soni va sotilgan mahsulotlar sonini  
//aniqlash mumkin 
class Shop{
    static getTime(){
        const now = new Date()
        return now.toLocaleTimeString("en-GB");
    }
    constructor(non, cola, lagmon){
        this.non = non;
        this.cola = cola;
        this.lagmon = lagmon;
    }
      qabul(item1, item2, item3){
        console.log(`Soat ${Shop.getTime()} da`)
        this.non += item1;
        this.cola += item2;
        this.lagmon += item3;
       
        console.log(`qabul qilindi, non ${item1}, cola ${item2}, lagmon ${item3}`)
    }
  
      sotish(item1, item2, item3){
        console.log(`Soat ${Shop.getTime()} da`)
        if(this.non < item1 )
            {
                console.log(`sizda yetarli non yoq ${item1-this.non}ta yetamayapti`)
       return
        } 
        if(this.cola < item2 )
            {
                console.log(`sizda yetarli non yoq ${item2-this.cola}ta yetamayapti`)
       return
        } 
        if(this.lagmon < item3 )
            {
                console.log(`sizda yetarli non yoq ${item3-this.lagmon}ta yetamayapti`)
       return
        } 

            this.non -= item1;
            this.cola -= item2;
            this.lagmon -= item3
        console.log(`sotildi non ${item1}ta, cola ${item2}ta, lagmon ${item3}ta`)
        }
      qoldiq(){
        console.log(`Soat ${Shop.getTime()} da`)
        console.log(`Sizda ${this.non}non, ${this.cola}cola va ${this.lagmon}lagmon mavjud`)
    }
        
    }
  


const myShop = new Shop(10,20,20);
myShop.qoldiq()
myShop.qabul(4,6,8)
myShop.sotish(5,7,29)
myShop.qoldiq()








/////////// TASK B//////////
//funksiya loop bilan har bir elementni tekshiradi
// isNan va "" (bo'sh string) bo'lmaslik holati yani ikkala shart ham 
//bir vaqtda qanaoatlantirilsa shundagina characterni raqam sifatida oladi 
//va count qilib xisoblab to string qiymatning oxirgi characteriagcha shunday tekshirib chiqadi
// function countDigit ( data){
//     let count = 0 ;
//     for (let char  of data){
//         if (!isNaN(char) && char !== ""){
//             count++
//         }
//     }
//     return count
// }
// console.log(countDigit("sdev9077dv67676d7"));


///////////////////////////////////////////////////////////////////////////////////

//console.log("JAck Ma maslahatlari");
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
//         setInterval(function(){
//             callback(null, list[5]);
//         }, 1000);    
//     }
// }

// console.log("passed here 0")
// maslahatBering(70, (err, data) =>{  //bu yerda parametr sifatida function ishga tushadi
//     if(err) console.log("ERROR", err);// data esa yuqoridagi callback to'g'ri ishlagandagi qaytariladigan arraydir
//     else{
//         console.log('javob:', data)
//     }
// });
// console.log("passed here 1")
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