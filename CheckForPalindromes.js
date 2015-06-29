function palindrome(str) {
  // Good luck!

  str=str.replace(/\W/ig,"").toLowerCase();
  str_reversed=str.split("").reverse().join("");
  
  if(str_reversed===str){
    return true;
  }

  else{
    return false;
  }
}

palindrome("eye");