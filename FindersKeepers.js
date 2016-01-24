function find(arr, func) {
  var filt = arr.filter(func);
  return filt[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
