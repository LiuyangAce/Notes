function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var a11 = [1, 2, 3, 4];
var ro11 = a11;
// ro11[4] = 123
// ro11[3] = 43
// ro11.push(123)
var ro11ToNum = ro11;
console.log(ro11ToNum);
