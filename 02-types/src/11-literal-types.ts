// let a : "hello" = "hello"

// type num = 1 | 2 | 3
// function fun (a:number,b:number):num {
//  return a>b ? 1 : a<b ? 2 : 3
// }
// fun(3,5)
// interface a {
//   x:string
// }
// type num = 1

// function fun(obj:a|num) {

// }
// fun({x:'123'})
// fun(1)

function handleRequest(url: string, method:'GET'|'POST'|'GUESS') {

}
const req = {
  url: 'http://www.baidu.com',
  method: 'GET'
}

handleRequest(req.url,req.method as 'GET')