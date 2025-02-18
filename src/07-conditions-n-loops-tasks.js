/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 5 === 0) return 'Buzz';
  if (num % 3 === 0) return 'Fizz';
  return num;
  // throw new Error('Not implemented');
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) return 1;
  return n * getFactorial(n - 1);
  // throw new Error('Not implemented');
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  if (n1 === n2) return n1;
  return n1 + getSumBetweenNumbers(n1 + 1, n2);
  // throw new Error('Not implemented');
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a >= b + c) return false;
  if (b >= a + c) return false;
  if (c >= b + a) return false;
  return true;
  // throw new Error('Not implemented');
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  if (rect1.top >= rect2.top && rect1.top < rect2.top + rect2.height) {
    if (rect1.left >= rect2.left && rect1.left < rect2.left + rect2.width) {
      return true;
    }
  }
  if (rect2.top > rect1.top && rect2.top < rect1.top + rect1.height) {
    if (rect2.left > rect1.left && rect2.left < rect1.left + rect1.width) {
      return true;
    }
  }

  return false;
  // throw new Error('Not implemented');
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const dist = (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2;
  if (dist < circle.radius ** 2) return true;
  return false;
  // throw new Error('Not implemented');
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const element = str[i];
    if (str.indexOf(element) === str.lastIndexOf(element)) return element;
  }
  return null;
  // throw new Error('Not implemented');
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let res = '';
  if (a < b) {
    res = `${a}, ${b}`;
  } else {
    res = `${b}, ${a}`;
  }
  if (isStartIncluded) {
    res = `[${res}`;
  } else {
    res = `(${res}`;
  }
  if (isEndIncluded) {
    res = `${res}]`;
  } else {
    res = `${res})`;
  }
  return res;
  // throw new Error('Not implemented');
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  let res = '';
  for (let i = 0; i < str.length; i += 1) {
    const element = str[i];
    res = `${element}${res}`;
  }
  return res;
  // throw new Error('Not implemented');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +reverseString(num.toString());
  // throw new Error('Not implemented');
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const array = ccn.toString().split('');
  let res = 0;
  for (let i = array.length - 2; i >= 0; i -= 2) {
    const element = 2 * (+array[i]);
    if (element > 9) {
      res += element - 9;
    } else {
      res += element;
    }
  }
  for (let i = array.length - 1; i >= 0; i -= 2) {
    const element = +array[i];
    res += element;
  }
  return !(res % 10);
  // throw new Error('Not implemented');
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let root = num;
  while (root > 10) {
    root = root.toString().split('').reduce((acc, val) => acc + (+val), 0);
  }
  return root;
  // throw new Error('Not implemented');
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  let act = str;
  let prev = '';
  const brackets = ['[]', '{}', '()', '<>'];
  while (act !== prev) {
    prev = act;
    for (let i = 0; i < brackets.length; i += 1) {
      const element = brackets[i];
      act = act.replace(element, '');
    }
  }
  return act === '';
  // throw new Error('Not implemented');
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  if (num === 0) return '0';
  let res = '';
  let counter = num;
  while (counter >= n) {
    const el = counter % n;
    res = `${el}${res}`;
    counter = (counter - el) / n;
  }
  res = `${counter}${res}`;
  return res;
  // throw new Error('Not implemented');
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const variants = pathes.reduce((acc, val) => [...acc, val.split('/')], []);
  let common = variants[0];
  for (let i = 0; i < variants.length; i += 1) {
    let array = variants[i];
    if (common.length > array.length) {
      common = common.slice(0, array.length);
    } else {
      array = array.slice(0, common.length);
    }
    let len = array.length;
    for (let j = 0; j < array.length; j += 1) {
      const element = array[j];
      if (element !== common[j]) {
        len = j;
        break;
      }
    }
    common = common.slice(0, len);
  }
  let res = '';
  for (let i = 0; i < common.length; i += 1) {
    const element = common[i];
    res = `${res}${element}/`;
  }
  return res;
  // throw new Error('Not implemented');
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const res = [];
  for (let i = 0; i < m1.length; i += 1) {
    const row = [];
    for (let j = 0; j < m2[0].length; j += 1) {
      let element = 0;
      for (let z = 0; z < m1[0].length; z += 1) {
        const el1 = m1[i][z];
        const el2 = m2[z][j];
        element += el1 * el2;
      }
      row.push(element);
    }
    res.push(row);
  }
  return res;
  // throw new Error('Not implemented');
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  if (position[0][0] && (position[0][0] === position[0][1])
  && (position[0][0] === position[0][2])) {
    return position[0][0];
  }
  if (position[1][0] && (position[1][0] === position[1][1])
  && (position[1][0] === position[1][2])) {
    return position[1][0];
  }
  if (position[2][0] && (position[2][0] === position[2][1])
  && (position[2][0] === position[2][2])) {
    return position[2][0];
  }
  if (position[0][0] && (position[0][0] === position[1][0])
  && (position[0][0] === position[2][0])) {
    return position[0][0];
  }
  if (position[0][1] && (position[0][1] === position[1][1])
  && (position[0][1] === position[2][1])) {
    return position[0][1];
  }
  if (position[0][2] && (position[0][2] === position[1][2])
  && (position[0][2] === position[2][2])) {
    return position[0][2];
  }
  if (position[0][0] && (position[0][0] === position[1][1])
  && (position[0][0] === position[2][2])) {
    return position[0][0];
  }
  if (position[1][1] && (position[2][0] === position[1][1])
  && (position[0][2] === position[1][1])) {
    return position[1][1];
  }
  return undefined;
  // throw new Error('Not implemented');
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
