
//=演算子
var x = 1;
var y = x;
x = 2;
console.log(y);

// 参照型
var date1 = [0, 1, 2];
var date2 = date1;
date1[0] = 5;
console.log(date2);

const date = [1, 2, 3];
date = [4, 5, 6]; //再代入できない。
date[1] = 10; //元の配列はそのまま、内容のみ書き換えてるのでOK
