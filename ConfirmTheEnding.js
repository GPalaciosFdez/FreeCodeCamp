function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  len=target.length;
  if(str.substring(str.length-len)===target){
    return true;
  }
  else{
    return false;
  }
}

end('Bastian', 'n');