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

export { uniteUnique, booWho, convertHTML, spinalCase };
