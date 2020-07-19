// JS 正则表达式的结构有： 字符字面量，字符组，量词，锚字符，分组，选择分支，反向引用

// 字面量 a  \n \.
// 字符组 [0-9], \d \D \w \W \S \s 
// 量词 * + ? {m, n} {m} {m,}
// 锚字符 ^ $ \b \B (?=p) (?!p)
// 分组 (ab)
// 分支 a|b
// 反向引用 /1 /2


// 操作符优先级
// 1. \ 转译符，转译符优先级最高
// 2. 括号和方括号 () [] (?=) (?!)(?:)
// 3. 量词限定符  {m} {m, n} {m,} * + ?
// 4. 位置和序列 ^ $ \b \B
// 5. 分支符 |

