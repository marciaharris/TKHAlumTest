/**
@param {number} num
@returns {number}
*/
module.exports = function(num){
  //Solution goes here
   // 49
   return Number(
    num
      .toString()                 // Convert the number to a string
      .split('')                  // Split the string into an array of digits
      .map(digit => digit * digit) // Square each digit
      .join('')                   // Join the results back into a single string
  );

}

