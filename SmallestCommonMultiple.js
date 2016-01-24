function smallestCommons(arr) {
  var small, large;
  if (arr[0]<arr[1]){
    small = arr[0];
    large = arr[1];
  }
  else{
    small = arr[1];
    large = arr[0];
  }
  
  var max = function(s,l){
    var result = 1;
    for(var i = s; i<=l; i++){
      result*=i;
    }
    return result;
  };
  
  for (var i = large; i<=max(small,large); i+=large){
    var count = 0;
    for(var j = small; j<=large; j++){
      if(i%j===0){
        count++;
        if(count === large){
          return i;
        }
      }
    }
  }
}


smallestCommons([1,13]);
