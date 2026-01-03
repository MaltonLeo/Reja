function countDigit(a){
    let count = 0;
    for(let char of a){
        if(char >= '0' && char <= '9'){
            count ++;
        }
    }
    return count;
}
console.log(countDigit("ad2a54y79wet0sfgb9"));

//////////////////////////////

function countNumbers(string) {
  let numbers = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "0" && string[i] <= "9") {
      numbers++;
    }
  }
  return numbers;
}
console.log(countDigit("ssdv55dsv2e32515ef5"))

////////////////
