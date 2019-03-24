'use strict';

/*記号
console.log('Hello world from main.js!'); //ブラウザーのコンソールに値を表示するための命令
console.log('It\'s me'); //「\」後の1文字が特別扱いになって後方の「'」と認識されない．もしくは，「""」で囲む
console.log('hell\no wor\tld'); //「\n」改行．「\t」スペース
console.log('hello' + 'world'); //「+」文字を繋げる
*/

/*計算
// console.log(10 + 3);
// console.log(10 - 3);
// console.log(10 * 3);
// console.log(10 / 3);
// console.log(10 % 3);
// console.log(10 ** 3);
// console.log(2 + 10 * 3);
// console.log((2 + 10) * 3);
*/

/*定数(const)変数(let)
//これらの定義は，英数字，「$」，「_」のみ．数値から始められない
//let const といった予約語も使えない
// console.log(150 * 140);
// console.log(150 * 160);
let price = 150; //「=」は数学に意味じゃなく，値を割り当てるという意味．これを代入と呼ぶ
console.log(price * 140);
console.log(price * 160);

price = 170; //上記がconstなら，このように再代入できない
console.log(price * 140);
console.log(price * 160);
*/

/*変数 let
let price = 500;

price += 100;//price = price + 100;
price *= 2; //price = price *2;
price++; //price = price + 1;
price--; //price = price - 1;

console.log(price);
*/

/*比較演算子
=== 等しい
!== 等しくない
*/

/*データ型
console.log(typeof 'hello'); //値が何の型なのか調べる命令
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
*/

/*数値文字列
console.log('5' * 3); //15
console.log('5' - '3'); //2
console.log('5' + 3); //53 足し算だけ別
console.log(parseInt('5', 10) + 3); //8にしたい場合．これを使う．10は10進数の値
console.log(parseInt('hello', 10) + 3);
*/

/*if条件
const score = 40;

if(score >= 80){
  console.log('Great!');
}else if(score >= 60){
  console.log('Good!');
}else{
  console.log('OK!');
}
const score = 85;
score >= 80 ? console.log('Great!') : console.log('OK!'); //if条件省略
*/

/*論理演算子
const score = 60;
const name = 'taguchi';

if(score >= 50){
  if(name === 'taguchi'){
    console.log('Good job!');
  }
}

// && なおかつ(AND)
// || もしくは(OR)
// !  ～ではない(NOT)

if(score >=50 && name === 'taguchi'){
  console.log('Good job!');
}
*/

/*条件分岐
const signal = 'yellow';

if(signal === 'red'){
  console.log('stop!');
}else if(signal === 'yellow'){
  console.log('caution!');
}else if(signal === 'blue'){
  console.log('go!');
}

switch (signal){
  case 'red':
    console.log('stop!')
    break;
  case 'yellow':
    console.log('caution!')
    break;
  case 'blue':
  case 'green':
    console.log('go!')
    break;
  default:
    console.log('wrong signai!')
    break;
}
*/

/*forループ処理
for (let i = 1; i <= 10; i++){
  console.log('hello');
  console.log(i + 'hello');
  console.log(`${i} hello`); //テンプレートリテラルと呼ぶ
}
*/

/*whileループ処理
let hp = 200;

while (hp > 0){
  console.log(`${hp} HP left!`);
  hp -= 15; //hp= hp -15
}

//上記のforでの書き換え
for (let hp = 200; hp > 0; hp -= 15){
  console.log(`${hp} HP left!`);
}
*/

/*continue break
for (let i = 1; i <= 10; i++){
  // if (i === 4){
  // if (i % 3 === 0){ //3の倍数
  //   continue; //iの数字を飛ばせる
  if (i === 4){
    break; //4になるとループが終わる
  }
  console.log(i);
}
*/

/*関数
function showAd(message = 'AD'){ //仮引数
console.log('----------');
console.log(`--- ${message} ---`);
console.log('----------');
}

showAd('Header AD'); //実引数
console.log('Tom is great!');
console.log('Bob is great!');
showAd();
console.log('Steve is great!');
console.log('Rich is great!');
showAd('Footer AD');
*/

/*関数宣言
function sum(a, b, c){
  return a + b + c;
}

sum(1, 2, 3);
sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5);//const totoal = 6 + 12;
console.log(total);
*/

/*関数式
const sum = function (a, b, c){
  return a + b + c;
};

sum(1, 2, 3);
sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5);//const totoal = 6 + 12;
console.log(total);
*/

/*アロー関数
const sum = (a, b, c) => a + b + c;

sum(1, 2, 3);
sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5);//const totoal = 6 + 12;
console.log(total);


const double = a => a * 2;
console.log(double(12));
*/

{
  const x = 2; //グローバルスコープ（function内も含め全てのxに適用）

  function f(){
    const x = 1;
    console.log(x);
  }

  f();
  console.log(x);
}
