// 回溯
// 本质为深度优先搜索算法，其中退到之前的某一步的过程称为回溯

// 产生回溯的地方
// 1. 贪婪量词 {1, 3}
// 多个贪婪量词存在且出现冲突的情况下，则先下手为强
const str = '12345';
const reg = /(\d{1,3})(\d{1,3})/;
// console.log(str.match(reg));

// 惰性量词，表示尽可能少匹配
const reg2 = /(\d{1,3}?)(\d{1,3})/;

// console.log(str.match(reg2));

// 惰性量词也有回溯现象
const reg3 = /^(\d{1,3}?)(\d{1,3})$/;
console.log(str.match(reg3));

// 分支结构，可能前面的子模式会形成局部匹配，如果接下来表达式整体不匹配时，仍然会尝试剩下的分支
const reg4 = /^(?:can|candy)$/;
console.log('candy'.match(reg4));