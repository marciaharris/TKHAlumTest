/**
@param {number} row
@returns {Array<Array<number>>}
*/

module.exports = function(row){
  //Solution goes here
  if (row === 0) return [];
    
    const triangle = [[1]];
    
    for (let i = 1; i < row; i++) {
        const prevRow = triangle[i - 1];
        //every row in Pascal's Triangle starts and ends with 1
        const newRow = [1];
        // start at index 1 (because index 0 is always 1)
        for (let j = 1; j < i; j++) {
          // sum up the two adjacent values from the previous row
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        //every row ends with 1
        newRow.push(1);
        //add the newRow to the triangle array
        triangle.push(newRow);
    }
    
    return triangle;
}