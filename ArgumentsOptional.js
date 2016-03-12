function add(a,b) {
  
  if(a && b){
    if((typeof a === "number") && (typeof b === "number")){
      return a+b;
    }
    else{
      return undefined;
    }
  }
  
  if(a && !b){
    if(typeof a === "number"){
      return function(c){
        if(typeof c === "number"){
          return a + c;
        }
        else{
          return undefined;
        }
      };
    }
    else{
      return undefined;
    }
  }
}

add(2,3);
