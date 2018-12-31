
/*
function produceDrivingRange(block){
  return function(){
    if (block <= 10){
      return "true"
    }
  }
}

*/

/*
function produceDrivingRange(blocks){
  function z(a,b){
let c = Math.abs(a-b)
      if (c>blocks){
        return `${c} blocks out of range`
      }
      else {return `within range by ${c}`}

      }

  return z
}
*/


function produceDrivingRange(blocks){
  function z(a,b){
    let c = parseInt(a.replace("th", "")) - parseInt(b.replace("th", ""));
     c = Math.abs(c)
      if (c>blocks){
        return `${c} blocks out of range`
      }
      else {return `within range by ${c}`}
      }
  return z
}
