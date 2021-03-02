exports.min = function min(array) {
  if (array == null || array.length == 0) {
      return 0;
  }else return Math.min(...array);
};

exports.max = function max(array) {
  if (array == null || array.length == 0) {
      return 0;
  } else return Math.max(...array);
};

exports.avg = function avg(array) {
  if (array == null || array.length == 0) {
      return 0; 
  }

  let arrSum = 0;
  array.forEach((elem) => {
      arrSum += elem;
  }); 
  return arrSum / array.length;
};