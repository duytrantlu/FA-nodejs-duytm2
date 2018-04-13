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

export { uniteUnique };
