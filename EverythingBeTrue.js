function every(collection, pre) {
  // Is everyone being true?
  var count = 0;
  while(collection[count][pre]){
    if(count === collection.length-1){
      return true;
    }
    count++;
  }
  return false;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
