//分割代入
let date = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, x3, x4, ...other] = date;
console.log(x0); //56
console.log(other); //17, 73, 99

//オブジェクトの場合
let book = { title: "ノルウェーの森", author: "村上春樹", price: 2450 };
let { price, title, memo = "なし" } = book; //変数の並び順はプロパティの定義順と違っても良い
console.log(title);
console.log(price);
console.log(memo);
