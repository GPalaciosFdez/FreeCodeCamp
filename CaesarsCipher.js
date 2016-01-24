function rot13(str) { // LBH QVQ VG!
  for (var i = 0; i<str.length; i++){
    if(/[A-Z]/.test(str.charAt(i))){
      var code = str.charCodeAt(i);
      if(code<=77){
        str = str.substring(0,i) + String.fromCharCode(code+13) + str.substring(i+1);
      }
      else{
        str = str.substring(0,i) + String.fromCharCode(code-13) + str.substring(i+1);
      }
    }
  }
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
