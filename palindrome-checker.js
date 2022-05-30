function palindrome(str) {
  const newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if(newStr.split('').reverse().join('') === newStr)
  return true; 
  else return false
}