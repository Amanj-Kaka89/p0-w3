
function digitPerkalianMinimum(angka) {
  var result = [];
  for(var i = 1; i <= angka; i ++){
    for(var j = 1; j <= angka; j++){
      if(i * j === angka){
        var join = i.toString() + j.toString();
        result.push(join);
      }
    }
  }
  var perkalianmin = result[0].length;
  for(var x = 0; x < result.length; x++){
    if(result[x].length < perkalianmin){
      perkalianmin = result[x].length;
    }
  }
  return perkalianmin;

}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
