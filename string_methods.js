let msg = 'Leave me alone';
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
let msg_space = '    Leave me alone   ';
console.log(msg_space.trim());
console.log("haha weel soon".indexOf("s"));
let str = 'Welcome and happy new year';
str.slice(2,5);
str.replace('Welcome', 'Merry Christmas');
'Happy birthday to you '.repeat(2);

function repeatStr (n, s) {
  return s.repeat(n);
}
function bmi(weight, height) {
  let result = (weight/(Math.pow(height,2)));
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <=30) {
    return "Overweight";
      } else {
        return "Obese";
      }
    }