// nextTick 下一次事件循环中调用
process.nextTick(function() {
  console.log('nextTick callback!');
})
console.log('nextTick was set!')

// 退出之前执行函数
process.on('exit', function (code) {
  console.log('about to exit with code: ' + code);
});