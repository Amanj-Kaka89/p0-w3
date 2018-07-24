
function cariModus(arr) {
  var modus=-1;
  var count=0

  for(var i=0;i <arr.length;i++){
    for(var j=0;j < i;j++){
      if(arr[j]===arr[i]){
        modus = arr[j];
        count++;
      } 
    }
  }
  var check = true
  for (var k = 0; k < arr.length; k++) {
    for (var l = 0; l< arr.length; l++) {
      if (arr[k] !== arr[l]) {
        check = false
      }
    }
  }
  if (check === true) {
    return -1
  } else {
    return modus;
  }
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
  