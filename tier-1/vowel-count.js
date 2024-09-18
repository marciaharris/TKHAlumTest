/**
@param {string} str
@returns {number}
*/
module.exports = function(str){
  //Solution goes here
  let num = 0;
  // loop through the string starting at the index of 0
  for(let i=0; i< str.length; i++){
    // create the condition of the letter being a vowel
    if(str[i]==="a".toLowerCase()|| str[i]==="o".toLowerCase()|| str[i]==="e".toLowerCase() || str[i]==="i".toLowerCase()|| str[i]==="u".toLowerCase()){
     // increment the number for each vowel
      num++
    }
  }
  // return the total when the loop finishes
  return(
    num
  )
}