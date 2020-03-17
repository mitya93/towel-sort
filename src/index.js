module.exports = function towelSort (matrix) {
  let massSort = [];
  if (matrix === undefined){
    return massSort;
  } else {
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0){
      massSort = massSort.concat(matrix[i].reverse());
    }
    else {
      massSort = massSort.concat(matrix[i]);
    }
  }
    return massSort;
  }
}
