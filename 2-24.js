//入れ子となったオブジェクトの分解
let book = {
  title: "ノルウェーの森",
  author: "村上春樹",
  price: 2450,
  other: { release_date: 1987, language: "日本語" },
};
let {
  title,
  other,
  other: { release_date },
} = book;

console.log(title);
console.log(other);
console.log(release_date);

//
