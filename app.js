 function uniteUnique(...arr){
  var newArr = [];
        var i = 0;
      var s = new Set();
  while (arr[i]) {
    newArr = newArr.concat(arr[i]);
    i++;
  }
  for (let j = 0; j < newArr.length; j++) {
    s.add(newArr[j]);
  }
  return Array.from(s);
};
//console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

 function booWho(bool) {
  return (typeof bool) ==="boolean";
}

//console.log(booWho(null));
export{uniteUnique,booWho}
