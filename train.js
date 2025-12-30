
function countLetter(letter, word) {
    let count = 0;
    for( let i = 0; i < word.length; i++) {
        letter = letter.toLowerCase();
        word = word.toLowerCase();
        if(word[i] === letter) {
            count ++;
        }
    }
    return count;
}
console.log(countLetter('A', 'animation'))
//bunda i berilgan so'zning har birini toki so'z
//tugaguncha olib tekshiruvchi o'zgaruvchi 
//so'zning hsr bir harfini oladi va biz parametr sifatida
//kiritgan letter bilan solishtirib ko'radi bunda uning
//turi va qiymatini ham solishtiradi agar i va letter
//teng bo'lsa uni hisobga oladi va keyingi harfga o'tadi toki 
//word parametrining oxirgi harfigacha
//Katta harflarni ham adashmasdan hisoblashi uchun ularni
// lowerCase ga o'girib solishtiradigan qilib mantiq yozamiz