function getFirstWord(msg) {
    console.log(msg.split(' ')[0]);
}
getFirstWord('Hello World');
const petter = {
    name: 'Petter',
    age: 18,
    friendList: []
};
// 现在的 admin 就非常精简了
const admin = {
    name: 'Petter',
    age: 18,
    permissionLevel: 1,
};
// 可以在 demo 里运行这段代码
function counter(count) {
    console.log(`The current count is: ${count}.`);
}
// 不论传数值还是字符串，都可以达到的目的
counter(1); // The current count is: 1.
counter('2'); // The current count is: 2.
import md5 from 'md5';
console.log(md5('Hello World'));
// src/ts/index.ts
import greet from './greet';
// 单个问候语
const greeting = greet('Petter');
console.log(greeting);
// 多个问候语
const greetings = greet(['Petter', 'Tom', 'Jimmy']);
console.log(greetings);
