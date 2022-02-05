function sequentialSizes(val) {
    let answer = "";
    switch (val) {
      case 1:
      case 2:
      case 3:
      answer = answer + "Low";
      break;
      case 4:
      case 5:
      case 6:
      answer = answer + "Mid";
      break;
      case 7:
      case 8:
      case 9:
      answer = answer + "High";
      break;
    }
    return answer;
  }
  
  sequentialSizes(1);