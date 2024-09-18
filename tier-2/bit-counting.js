/**
@param {number} num
@returns {number}
*/

module.exports = function(num){
  //Solution goes here
  let count = 0
  let bit = (num >>> 0).toString(2);
  for(let i=0; i < bit.length; i++){
    if(bit[i]==="1"){
      count++
    }
  }
  return count;
}