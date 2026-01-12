// ///////////////TASK G: ///////////////////////////////////

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer 
// ma'lumot turlariga ega bo'lgan bir arrayni 
// qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi 
// birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta 
// son hisobladi va bizga uning indeksi 1 qaytadi.

const getHighestIndex = (par) =>{
    if(!Array.isArray(par) || par.length ===0){ ///paramaetrni arrayligi va bo'sh emasligini tekshiradi
        return undefined
    }
    let eng = par[0];///eng qiymatni nolinchiindexdagi son bilan solishtiradi
    let i =1; // keyingi qadamni 1 chi indeksdan davom ettiradi
  while(i< par.length){ /// arrayni barcha elementlarini tekshirguncha loop bilan tekshiradi
    if(par[i] > eng){// eng katta qiymatni topish uchun birma bir element bilan solishtiradi
        eng = par[i]/// eng katta qiymatni topsa shuni eng qiymatga tenglaydi
    }  i++/// cheksiz loop bo'lib qolmasligi uchun i++ yozildi
    } 
       return par.indexOf(eng)// eng katta deb topilgan qiymatni return qiladi
    } 
        

console.log(getHighestIndex( [104,56,100,79,81]))



/////////TASK-F///////////////////// 
//Yagona string argumentga ega 
// findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir 
// xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija
//  true qaytadi. Sababi ikki marotaba takrorlangan
//   'll' harfi mavjud!

// function findDoublers (str) {

//   return new Set(str).size !== str.length;
// }

// console.log(findDoublers("hello"));
//bu yerda Set bir marta ishlatilgan 
//qiymatlarni saqlaydi ya'ni bir marta 
//ishlatilgan harfni oladi/
//agar ikki marotaba ishlatilgan harf bo'lsa /
//Set(str).size ning qiymati so'zning haqiqiy uzunligidan 
//kichkina bo'ladi 


// TASK E: 
// Shunday function tuzing, u bitta string 
// argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// const getReverse = (a) =>  {
 
//     const b = a.split('').reverse().join('');
//     console.log(b)
//     return b
// }
// getReverse("slash")

///////////////////////MITTASK-D//////////////////////
// Shunday function tuzing, u 2ta string parametrga
//  ega bolsin, hamda agar har ikkala string bir 
//  hil harflardan iborat bolsa true aks holda false qaytarsin

// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function taskC(par1, par2) {
//     if( par1.length !== par2.length)
//         return false
        
//      return par1.split("").sort().join("") ===
//             par2.split("").sort().join("")

    
        
  
// }
// console.log(taskC("sadio", 'adios'))




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
// class Shop{
//     static getTime(){
//         const now = new Date()
//         return now.toLocaleTimeString("en-GB");
//     }
//     constructor(non, cola, lagmon){
//         this.non = non;
//         this.cola = cola;
//         this.lagmon = lagmon;
//     }
//       qabul(item1, item2, item3){
//         console.log(`Soat ${Shop.getTime()} da`)
//         this.non += item1;
//         this.cola += item2;
//         this.lagmon += item3;
       
//         console.log(`qabul qilindi, non ${item1}, cola ${item2}, lagmon ${item3}`)
//     }
  
//       sotish(item1, item2, item3){
//         console.log(`Soat ${Shop.getTime()} da`)
//         let msg = ""
//         if(this.non > item1 )
//             {
//                 this.non -= item1;
//                 msg += `non ${item1}ta sotildi`
       
//         } else{
//             msg+= ` sizda yetarli non yoq ${item1-this.non}ta yetamayapti`
//            // this.non=0;
//         }


//         if(this.cola > item2 )
//             {
//                 this.cola -= item2;
//                 msg +=`cola ${item2}ta sotildi`
       
//         } else{
//             msg += ` sizda yetarli cola yoq ${item2-this.cola}ta yetamayapti`
//             //this.cola=0
//         }


//         if(this.lagmon > item3 )
//             {
//                 this.lagmon -= item3;
//                 msg += `lagmon ${item3}ta sotildi`
       
//         } else{
//             msg +=` sizda yetarli lagmon yoq ${item3-this.lagmon}ta yetamayapti`
//            // this.lagmon= 0;
//         }
//         console.log(msg)
//         }
//       qoldiq(){
//         console.log(`Soat ${Shop.getTime()} da`)
//         console.log(`Sizda ${this.non}non, ${this.cola}cola va ${this.lagmon}lagmon mavjud`)
//     }
        
//     }
  


// const myShop = new Shop(10,20,20);
// myShop.qoldiq()
// myShop.qabul(4,6,8)
// myShop.qoldiq()
// console.log("=================================")
// myShop.sotish(5,7,29)
// myShop.qoldiq()



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