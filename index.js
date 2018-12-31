
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
     let t = Math.abs(c-blocks)
      if (c>blocks){
        return `${t} blocks out of range`
      }
      else {return `within range by ${t}`}
      }
  return z
}
