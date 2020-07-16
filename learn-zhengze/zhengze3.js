// 括号提供的分组，便于我们引用它

// 分组和分支， 捕获分支，反向引用，非捕获分组

// 分组
const reg1 = /(ab)+/g;
const str = 'ababa abbbbb bababab';
// console.log(str.match(reg1));

// 分支
const reg2 = /^(I love Java|reg exp)$/;
// console.log(reg2.test('I love Java'));
// console.log(reg2.test('reg exp'));

// 引用分组
// 如果有g则不显示引用，否则显示
const reg3 = /(\d{4})-(\d{2})-(\d{2})/;

// console.log('1208-07-09'.match(reg3));
// reg3.test('1208-07-09');
// console.log(reg3.exec('1208-07-09'));
// console.log(RegExp.$3);

// console.log('2018-09-34'.replace(/(\d{4})-(\d{2})-(\d{2})/, (match, year, month, day) => {
//   return `${day}/${month}/${year}`;
//   // return `${RegExp.$3}/${RegExp.$2}/${RegExp.$1}`;
// }));

const reg4 = /\d{4}([\.\/-])\d{2}\1\d{2}/g;
// console.log('2019-90-89'.match(reg4));

const reg5 = /^((\d)(\d(\d)))\1\2\3\4$/;
'1231231233'.match(reg5);
// console.log(RegExp.$1);
// console.log(RegExp.$2);
// console.log(RegExp.$3);
// console.log(RegExp.$4);

const reg6 = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#)\10+/;
// console.log('123456789######'.match(reg6));

// console.log('\2\3\4'.split(""));

// 非捕获分组，不要捕获当前分组(?:p)
const reg7 = /(?:ab)+/g;
// console.log('ababa abbbb abababab'.match(reg7));

// trim 方法，去掉字符串开头和字符串结尾的空白字符
function trim(str) {
  // return str.replace(/^\s+|\s+$/, '');
  return str.replace(/^\s*(.*?)\s*$/g, '#$1#');
}
// console.log(trim('  float  '));

// 将每个单词的首字母转换为大写

function titleize(str) {
  return str.replace(/\b\w/g, (match) => {
    return match.toUpperCase();
  });
}

// console.log(camelize('i am a big girl.'));

// 驼峰化 -moz-transform
function camelize(str) {
  return str.replace(/[-_\s]+(\w)/g, () => {
    return (RegExp.$1).toUpperCase();
  });
}
// console.log(camelize('my-home'));

function dasherize(str) {
  return str.replace(/[A-Z]/g, (match) => {
    return `-${match.toLowerCase()}`;
  });
}
// console.log(dasherize('MozTransform'));

// html 转译
function escapeHTML(str) {
  return str.replace(/([<>])/g, '&lt;');
}
// console.log(escapeHTML('<div>hahaha</div>'));

// 匹配成对标签
// 比如匹配<title>regular expression</title>
// 不匹配 <p>wrong!</title>

function matchTag(str) {
  const reg = /^<([^>]+)>[\d\D]*<\/\1>$/g;
  return reg.test(str);
}
console.log(matchTag('<title>regular expression</p>'));
