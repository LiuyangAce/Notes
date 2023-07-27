// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

console.log(error('xxx'));



