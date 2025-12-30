
function countLetter(letter, word) {
    let count = 0;
    for( let i = 0; i < word.length; i++) {
        if(word[i] === letter) {
            count ++;
        }
    }
    return count;
}
console.log(countLetter('a', 'animation'))
//bunda i berilgan so'zning har birini toki so'z
//tugaguncha olib tekshiruvchi o'zgaruvchi 
//so'zning hsr bir harfini oladi va biz parametr sifatida
//kiritgan letter bilan solishtirib ko'radi bunda uning
//turi va qiymatini ham solishtiradi agar i va letter
//teng bo'lsa uni hisobga oladi va keyingi harfga o'tadi toki 
//word parametrining oxirgi harfigacha