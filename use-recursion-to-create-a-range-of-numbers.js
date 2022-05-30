function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum < 0) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum ,endNum - 1);
    countArray.push(endNum);
    
    return countArray;
  }
};