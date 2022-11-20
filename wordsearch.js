const wordSearch = (letters, word) => {
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log(horizontalJoin); //test
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const horizontalReverseJoin = letters.map(ls => ls.reverse().join(''));
  // console.log(horizontalReverseJoin); //test
  for (let y of horizontalReverseJoin) {
    if (y.includes(word)) return true;
  }

  const vertical = [];

  for (let col = 0; col < letters[0].length; col++) {
    let line = [];
    for (let row = 0; row < letters.length; row++) {
      line.push(letters[row][col]);
    }
    vertical.push(line);
  }
  const verticalJoin = vertical.map(ls => ls.join(''));
  console.log(verticalJoin); //test
  for (let x of verticalJoin) {
    if (x.includes(word)) return true;
    // else return false;
  }

  return false;

};


module.exports = wordSearch;

