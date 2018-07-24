
function hitungHuruf(kata) {

 var Katabaru = kata.split(' ');
 var hasil=[];
 
 for(var x=0; x<Katabaru.length; x++){
   var Katabaru2= (Katabaru[x].split('').sort());
  
   for(var i=0; i<Katabaru2.length; i++){
     
     if(Katabaru2[i]===Katabaru2[i+1]){
       hasil.push(Katabaru[x]);
     }
    }
  }
      
    return hasil[0]; 
}
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau