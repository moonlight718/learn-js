const regex = /hello/;

// console.log(regex.test('hello'));

// 横向匹配：长度不固定，可以是多种情况
const regex2 = /ab{2,5}c/g; // g 表示全局匹配，按顺序找到满足匹配模式的所有子串
const str2 = 'abc abbc abbbc abbbbbc abbbbc';
// console.log(str2.match(regex2));

// 纵向匹配，某个特定的字符可以有多种可能
const regex3 = /a[123]b/g;
const str3 = 'a0b a1b a2b a3b a4b';
// console.log(str3.match(regex3));

// 范围表示法
const regex4 = /a[1-5a-fG-M]b/g;
const str4 = 'aab afb aqb';
// console.log(str4.match(regex4));

// 如果确实要匹配a-z这三个字符怎么办
const regex5 = /a[a\-z]b/g;
const str5 = 'a-b aab azb';
// console.log(str5.match(regex5));

// 某位字符可以是任何字符，但不是是abc
const regex6 = /a[^abc]b/g;
const str6 = 'aab abb acb adb agb';
// console.log(str6.match(regex6));

// 常见简写形式
// \d  [0-9]  digit(数字)
// \D  [^0-9] 除数字以外的任何字符
// \w  [0-9a-zA-Z_] 数字、大小写字母和下划线。word单词字符
// \W  [^0-9a-zA-Z_] 非单词字符
// \s  [\t\v\n\r\f] 空白字符，空格，水平制表符，垂直制表符，换行符，回车符，换页符 space
// \S  [^\t\v\n\r\f] 非空白字符
// .   [^\n\r\u2028\u2029] 通配符，表示几乎任何字符。换行符、回车符、行分隔符和段分隔符除外
// 匹配任意字符 [\d\D] [\w\W] [\s\S] [^]

// 量词
// {m, } 至少出现m次 {m, }?
// {m} 等价 {m,m} 只能出现m次 
// ?   等价 {0, 1} 表示出现或不出现，有吗？  ??
// +   等价 {1, } 表示至少出现一次，得先有一个，才能追加  +?
// *   {0,} 表示出现任意次或不出现 *?

// 贪婪匹配, 尽可能多的匹配
const reg7 = /\d{2,5}/g;
const str7 = '123 1234 12345 123456';
// console.log(str7.match(reg7));

// 惰性匹配, 只要足够了就不再往下匹配
const reg8 = /\d{2,5}?/g;
const str8 = '123 1234 12345 123456';
// console.log(str8.match(reg8));

// 多选分支： 可以支持多个子模式任选其一
const reg9 = /good|nice/g;
const str9 = 'good idea, nice day.';
// console.log(str9.match(reg9));

// 分支是惰性的，当前面已经匹配上后，后面就不再尝试了
const reg10 = /good|goodbye/g;
const str10 = 'goodbye';
// console.log(str10.match(reg10));

// 单元测试
// 1. 匹配26进制颜色 由于是惰性匹配的，所以要把6放在前面，3放在后面
const reg11 = /#[0-9a-fA-F]{6}|([0-9a-fA-F]{3})/g;
const str11 = '#abc #1affBb #123 #1Ab';
// console.log(str11.match(reg11));

// 2. 匹配时间
const reg12 = /([0-1][0-9]|2[0-3]):[0-5][0-9]/g;
const str12 = '23:59 02:07 19:39';
// console.log(str12.match(reg12));

// 2.1 匹配时间，如果前面的0可以省略
const reg13 = /(0?\d|1\d|2[0-3]):(0?\d|[1-5]\d)/g;
const str13 = '23:59 2:7 19:39 09:02';
// console.log(str13.match(reg13));

// 3. 匹配日期 yyyy-mm-dd
const reg14 = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|1\d|3[01])/g;
const str14 = '2018-09-22';
console.log(str14.match(reg14));

// 4. window操作系统文件路径 
// F:\study\javascript\regex\regular expression.pdf
// F:\study\javascript\regex\
// F:\study\javascript
// F:\

const reg15 = /[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?/g;

// 太难了

// 5. 匹配ID
const reg16 = /id=\"[^"]*?\"/g;
const str16 = '<div id="container" class="main"></div>';
console.log(str16.match(reg16));
