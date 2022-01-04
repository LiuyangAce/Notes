function getMoneyBack(money, callback) {
  if (typeof money !== 'number') {
    callback(null, new Error('money is not a number'))
  } else {
    callback(money)
  }
}

const money = getMoneyBack(1200)
console.log(money)