NaN === NaN false
判断NaN 类型只能用 isNaN

模板字符串 `` 
  用法 
    1.`多行
      输入`  这样会原样打印出
    如果不支持 es6 可以用 /n 转义
    2. 可以将变量直接输出
         e.g. let name = 'liuyang'  log  我的名字:`${name}`
            不支持es6=> log(我的名字:+name)
map 和 set
  map
    初始化：初始化Map需要一个二维数组，或者直接初始化一个空Map
    let m = new Map()
    let m = new Map([['name':'liuyang'],['Bob',75]])
    方法：
    set() get() has() delete()
  
  set 
    初始化: 初始化set需要一个一维数组，或者直接初始化一个空set
    方法： add()  delete()
for...of 遍历iterable类型 Array map set
  for(let item of iterable){...}


  =======================
  nodejs

  window 命令行模式 
  node 命令行模式 可以同步输入结果 node进入

  严格模式执行代码 node --use_strict

  module.exports VS export

  内置对象
    global   对应 win -》 window
    process 
      nextTick 让函数在下一次循环的时候调用
      on('exit',callback()) 退出的时候执行

  内置模块
  fs
    readFile('文件名','字符编码',callback(err,data))
      能读取到

  
