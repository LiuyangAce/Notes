type Point = {
  x:number,
  y:number
}
function fun(pt: Point) {
  console.log(`x:${pt.x};y:${pt.y}`);
}
let point = {
  x:1,
  y:2
}
fun(point)