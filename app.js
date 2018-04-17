// bài 1:
function uniteUnique(...arr) {
  let newArr = [];
  let i = 0;
  const s = new Set();
  while (arr[i]) {
    newArr = newArr.concat(arr[i]);
    i++;
  }
  for (let j = 0; j < newArr.length; j++) {
    s.add(newArr[j]);
  }
  return Array.from(s);
}
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// bài 2
function booWho(bool) {
  return typeof bool === 'boolean';
}

// console.log(booWho(null));

// bài 3:

function convertHTML(str) {
  // &colon;&rpar;
  const regEx = /[&<>"']/g;
  const obj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  const placer = match => obj[match];
  const rsStr = str.replace(regEx, placer);
  return rsStr;
}

// console.log(convertHTML("Dolce & Gabbana <>"));
// bài 4:
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])|[(\s)|_|\W]+/g, '$1-$2').toLowerCase();
}
// console.log(spinalCase('This::IsSpinalTap'));

// bài 5: Sum all odd Fibonacci number
function numFibs(n) {
  let preF = 0;
  let curF = 1;
  let rs = 0;
  let temp;
  while (curF <= n) {
    if (curF % 2 !== 0) {
      rs += curF;
    }
    temp = curF + preF;
    preF = curF;
    curF = temp;
  }
  return rs;
}
// console.log(numFibs(5));

// bài 6: Sum all primes

function sumPrimes(num) {
  let sum = 0;
  const newArr = [];
  for (let i = 1; i <= num; i++) {
    newArr.push(i);
  }
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] === 1) {
      // continue;
    } else if (newArr[j] === 2 || newArr[j] === 3) {
      sum += newArr[j];
    } else if (newArr[j] % 2 === 0) {
      sum = sum;
    } else {
      for (let k = 3; k < newArr[j] - 1; k += 2) {
        if (newArr[j] % k === 0) {
          newArr[j] = 0;
          break;
        }
      }
      sum += newArr[j];
    }
  }
  return sum;
}
// console.log(sumPrimes(10));
// bài 7: Finders Keepers
function findElement(arr, func) {
  const num = arr.filter(x => func(x));
  return num[0];
}
// console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
// bài 8: Smallest Common Multiple

function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let rs;
  let i;
  function ucln(x, y) {
    if (y === 0) {
      return x;
    }
    return ucln(y, x % y);
  }
  for (i = min; i < max; i = ++i) {
    if (i === min) {
      rs = i * (i + 1) / ucln(i, i + 1);
    } else {
      rs = rs * (i + 1) / ucln(rs, i + 1);
    }
  }
  return rs;
}
console.log(smallestCommons([1, 5]));
export {
  uniteUnique,
  booWho,
  convertHTML,
  spinalCase,
  numFibs,
  sumPrimes,
  findElement,
  smallestCommons,
};
