
  function ubahHuruf(kata) {
  var katabaru="";
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  for(i=0;i<kata.length;i++){
    for(j=0;j<alphabet.length;j++){
      if(kata[i]===alphabet[j]){
      katabaru+=alphabet[j+1];
      }
    }
  }
    return katabaru
  
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu