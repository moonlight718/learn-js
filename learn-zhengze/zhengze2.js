// 锚字符：^ $ \b \B (?=p) 正向先行断言：p前面的位置 (?!p) 负向先行断言，p后面的位置 (?<=p) (?<!p)

const res1 = 'hello'.replace(/^|$/g, '#');
// console.log(res1);

const res2 = 'I\nlove\njavascript'.replace(/^|$/gm, '#');
// console.log(res2);

// \b 是 \w 和 \W， \w 和 ^， \w 和 $ 之间的位置
const res3 = '[JS] Lesson_01.mp4'.replace(/\b/g, '#');
// console.log(res3);

// \B \w 和 \w, \W 和 \W, ^ 和 \W, $ 和 \W 之间的位置 非单词边界
const res4 = '[JS] Lesson_01.mp4'.replace(/\B/g, '#');
// console.log(res4);

// (?=p) 子模式前面的位置 (?<=p) 子模式后面的位置
const res5 = 'hello'.replace(/(?=l)/g, '#');
// console.log(res5);

// (?!p) 非子模式前面的位置 （?<!p）非子模式后面的位置
const res6 = 'hello'.replace(/(?!l)/g, '#');
// console.log(res6);

// 位置可以写成多个，但是它匹配的是同一个位置
const res7 = /(?=he)^^^he(?=\w)llo$\b\b$/.test('hello');
// console.log(res7);

// 不匹配任何东西 /.^/
const res8 = '123456789'.replace(/(?!^)(?=(\d{3})+$)/g, ',');
// console.log(res8);

const res9 = '1234567 123456789'.replace(/\B(?=(\d{3})+\b)/g, ',');
// console.log(res9);

const reg10 = /((?!^[0-9]{6,12}$)|(?!^[a-z]{6,12}$)|(?!^[A-Z]{6,12}$))^[0-9a-zA-Z]{6,12}$/g;




