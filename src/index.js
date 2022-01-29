module.exports = function check(str, bracketsConfig) {

  let array = [...str];

  for (let i = 0; i < array.length; i++) {
    bracketsConfig.map((elem) => {
      if (array[i] === elem[0] && array[i + 1] === elem[1]) {
        array.splice(i, 2);
        i = -1;
      }
    })
  }
  return array.length === 0 ? true : false
}