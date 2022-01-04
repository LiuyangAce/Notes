var p1 = new Promise(function(resolve) {
  setTimeout(function(){
    resolve(1);
  }, 1000);
});

var p2 = new Promise(function(resolve, reject) {
  resolve(p1);
  // 等价于
  p1.then(resolve).catch(reject);
});
// 标准就是这样规定的，这才是 promise 的价值所在，否则和普通的callback有什么区别？