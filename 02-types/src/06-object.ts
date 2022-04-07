function printCoord(kkk:{x:string,y?:string}){
  console.log(kkk.y?.toLowerCase());
  
}
let obj = {
  x:'1',
  y:'2'
}
printCoord(obj)