function checkObj(obj, checkProp) {
    let result = "";
    if (obj.hasOwnProperty(checkProp)) {
      result = result + obj[checkProp];
      return result;
    } else {return "Not Found"
    }
  }