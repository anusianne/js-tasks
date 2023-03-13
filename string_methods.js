let msg = 'Leave me alone';
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
let msg_space = '    Leave me alone   ';
console.log(msg_space.trim());
console.log('haha weel soon'.indexOf('s'));
let str = 'Welcome and happy new year';
str.slice(2, 5);
str.replace('Welcome', 'Merry Christmas');
'Happy birthday to you '.repeat(2);

function repeatStr(n, s) {
  return s.repeat(n);
}
function bmi(weight, height) {
  let result = weight / Math.pow(height, 2);
  if (result <= 18.5) {
    return 'Underweight';
  } else if (result <= 25) {
    return 'Normal';
  } else if (result <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
function numberToString(num) {
  return num.toString();
}

//delete spaces between string
function noSpace(x) {
  return x.split(' ').join('');
}
//delete a first and last character in string
function removeChar(str) {
  return str.slice(1, -1);
}
//make a negative number
function makeNegative(num) {
  return -Math.abs(num);
}
//find the fird angle of a triangle
function otherAngle(a, b) {
  while (a>0 && b>0)
  return 180-(a+b);
}
// Sum Numbers
function sum (numbers) {
  return numbers.reduce((a,b) => a+b, 0);
};
