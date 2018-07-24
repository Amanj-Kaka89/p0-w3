function tukarBesarKecil(kalimat) {
  var kalimatbaru="";
  for(i=0; i<kalimat.length;i++){
    kalimatbaru+=kalimat[i] !== kalimat[i].toLowerCase()
     ? kalimat[i].toLowerCase()
     : kalimat[i].toUpperCase();

    }
      return kalimatbaru;

}
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); //