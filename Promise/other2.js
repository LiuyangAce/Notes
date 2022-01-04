var p = new Promise(function(resolve, reject) {
  resolve(1);
});

var cb = function(data) {
  console.log(111,data);
};

p.then(cb); // cb函数 和 上面的 resolve 不是一个东西！不是！