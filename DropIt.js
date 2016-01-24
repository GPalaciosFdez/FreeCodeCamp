function drop(arr, func) {
  // Drop them elements.
  var filt = arr.filter(func);
  if(filt.length > 0){
    var i = arr.indexOf(filt[0]);
    var result = [];
    for(var j = i; j<arr.length; j++){
      result.push(arr[j]);
    }
    return result;
  }
  return [];
}

drop([1, 2, 3], function(n) {return n < 3; });
