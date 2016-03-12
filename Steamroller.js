function flatten(arr, result){
  if(!Array.isArray(arr)){
    result.push(arr);
  }
  else{
    for(var i= 0; i<arr.length; i++){
      flatten(arr[i], result);
    }
  }
  return result;
}

function steamroller(arr) {
  // I'm a steamroller, baby
  return flatten(arr,[]);
  
}



steamroller([1, [2], [3, [[4]]]]);
