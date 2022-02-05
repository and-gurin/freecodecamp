function switchOfStuff(val) {
    let answer = "";
  switch (val) {
    case "a":
    answer = answer + "apple";
    break;
    case "b":
    answer = answer + "bird";
    break;
    case "c":
    answer = answer + "cat";
    break;
    default:
    answer = answer + "stuff";
    break;
  }
    return answer;
  }
  
  switchOfStuff(1);