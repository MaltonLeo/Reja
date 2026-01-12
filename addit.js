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

// const getHighestIndex = (par) =>{
//     if(!Array.isArray(par) || par.length ===0){
//         return undefined
//     }
//     let eng = par[0];
//     for(const num of par) {
//         if(num> eng){
//             eng = num;
//         }
//     } return eng
// };
// console.log(getHighestIndex( [4,56,2,78,21]))
///// while loop
// const getHighestIndex = (par) => {
//     if(!Array.isArray(par) || par.length === 0){
//         return undefined
//     }
//         let eng = par[0]
//         let i= 1
//         while( i < par.length){
//             if(par[i]> eng){
//                 eng = par[i]
//             } i++
//         } return eng 
// }
// console.log(getHighestIndex( [4,56,2,79,21]))

/////do while
const getHighestIndex = (par) => {
  if(!Array.isArray(par) || par.length ===0){
    return undefined
  }
  let eng = par[0];
  let i = 0;
  if(par.length>1) {
    do{
      if(par[i]> eng){
        eng = par[i]
      }
      i++
    } while(i< par.length)
  }
  return eng 
}
console.log(getHighestIndex( [4,56,2,99,21]))

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
// function taskC(a, b) {
//   if (a.length !== b.length) return false;

//   return a.split("").sort().join("") ===
//          b.split("").sort().join("");
// }
 
// console.log(taskC("as ", "s a"))
/////////

// checkBalance(a, b) degan function yoz.
// a va b — string
// Har bir string ichidagi harflar sonini hisobla
// Agar:
// a da nechta harf bo‘lsa
// b da ham shuncha harf bo‘lsa → true
// Aks holda → false
// Tartib muhim emas
// Raqamlar hisobga olinmaydi
// Bitta ham undefined chiqmasligi shart

// function checkBalance(a, b){
//   if(typeof a!== "string" || typeof b!=="string") return false
//   return a.replace(/[0-9]/g,'').length===
//   b.replace(/[0-9]/g,'').length
// }
// console.log(checkBalance("aasa54","8zdxa"))

//////// 2-usul
// function countLetters(str) {
//   let count = 0;
//   for(let i=0; i<=str.length; i++){
//     const ch = str[i];
//     if(
//       (ch>="a" && ch<='z') ||
//       (ch>="A" && ch<="Z")
//     ) {
//       count ++
//     }
//   }
//   return count;
// }

// function checkBalance(a,b) {
//   return  countLetters(a) === countLetters(b)
// }
// console.log(checkBalance('alam', 'olam'))
//////3-usul
// function countLetters(str){
//   return str
//   .split("")
//   .filter(ch =>
//   (ch>='a'&& ch<='z') ||
//   (ch>='A' && ch<="Z")
//   ).length
// }

// function checkBalance(a,b) {
//   return countLetters(a) === countLetters(b)
// }

// console.log(checkBalance("saca","dwed12"))
////////////////////////////////////////////////////
// function checkHarmony(a, b) {
//   if(a.length===0 || b.length===0)return false
  
//     if(a.length < 2 || b.length < 2) return false

//     let hasLetterA = false;
//     let hasDigitA = false;
//     for(let ch of a ){
//       if(ch >="a" && ch<="z" || ch>="A" && ch<="Z"){
//         hasLetterA = true
//       }
//     }
//      for(let ch of a){
//       if(ch>="0" && ch<="9"){
//         hasDigitA = true
//       }
//     }

//     let hasLetterB = false;
//     let hasDigitB = false;
//        for(let ch of b ){
//       if(ch >="a" && ch<="z" || ch>="A" && ch<="Z"){
//         hasLetterB = true
//       }
//     }
//      for(let ch of b){
//       if(ch>="0" && ch<="9"){
//         hasDigitB = true
//       }
//     }return hasLetterA && hasDigitA && hasLetterB && hasDigitB;
// }
// console.log(checkHarmony("as1", "a2d"))

///////////////////////////////////////////////////////////////////////////

// function checkHarmony(a,b) {
//   if(a.length === 0 || b.length === 0 ) return false

//   let aHasLetter = false;
//   let aHasDigit = false;

//   for(let ch of a) {
//     if(ch>="a" && ch<="z" || ch>='A' && ch<="Z") aHasLetter=true
//       if(ch>="0" && ch<="9") aHasDigit= true
//   }

//   let bHasLetter = false;
//   let bHasDigit = false;

//   for(let ch of b) {
//     if(ch>="a" && ch<="z" || ch>="A" && ch<="Z") bHasLetter= true
//     if(ch>="0" && ch<="9") bHasDigit=true
//   }
//   return aHasLetter && aHasDigit && bHasLetter && bHasDigit ;

// }
// console.log(checkHarmony("as","01"))
///////////////////////////////////////////////////////////////////////////////

function hasLetterAndDigit(str) {
  let hasLetter = false;
  let hasDigit = false;

  for( let ch of str) {
    if((ch>="a" && ch<="z") || (ch>='A' && ch<="Z"))
      hasLetter = true;

    if(ch>="0" && ch<="9")
      hasDigit = true;
  }
  return hasDigit&& hasLetter 
}
function checkHarmony(a,b){
  if( a.length <2 || b.length <2) return false
  return hasLetterAndDigit(a) && hasLetterAndDigit(b)
}
console.log(checkHarmony("2s", "0s"))

// function countDigit(a){
//     let count = 0;
//     for(let char of a){
//         if(char >= '0' && char <= '9'){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countDigit("ad2a54y79wet0sfgb9"));

// //////////////////////////////

// function countNumbers(string) {
//   let numbers = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] >= "0" && string[i] <= "9") {
//       numbers++;
//     }
//   }
//   return numbers;
// }
// console.log(countDigit("ssdv55dsv2e32515ef5"))

////////////////
// checkNumbers(a, b, c) function yoz:
// agar bittasi manfiy bo‘lsa → "Xato son bor"
// lekin hamma sonni tekshir
// natijani bitta console.log da chiqar
// 👉 return qayerda bo‘lishi mumkin, qayerda yo‘q?
// checkNumbers(a, b,c) {
  
// }

