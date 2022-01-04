let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');   // then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行
});

console.log('Hi!');