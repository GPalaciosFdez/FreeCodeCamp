function findLongestWord(str) {
  str=str.split(" ");
  var longest=0;
  for(var i=0; i<str.length; i++){
    if(str[i].length>longest){
      longest=str[i].length;
    }
  }
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');