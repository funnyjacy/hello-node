function getFirstWord(msg: string) {
    console.log(msg.split(' ')[0])
}

getFirstWord('Hello World')

interface UserItem {
    name: string
    age: number
    friendList: UserItem[]
}

const petter: UserItem = {
    name: 'Petter',
    age: 18,
    friendList: []
}

// 这里在继承 UserItem 类型的时候，删除了两个多余的属性
interface Admin extends Omit<UserItem, 'enjoyFoods' | 'friendList'> {
  permissionLevel: number
}

// 现在的 admin 就非常精简了
const admin: Admin = {
  name: 'Petter',
  age: 18,
  permissionLevel: 1,
}

// 可以在 demo 里运行这段代码
function counter(count: number | string) {
  console.log(`The current count is: ${count}.`)
}

// 不论传数值还是字符串，都可以达到的目的
counter(1)  // The current count is: 1.
counter('2')  // The current count is: 2.

import md5 from 'md5'
console.log(md5('Hello World'))

// src/ts/index.ts
import greet from './greet.js'

// 单个问候语
const greeting = greet('Petter')
console.log(greeting)

// 多个问候语
const greetings = greet(['Petter', 'Tom', 'Jimmy'])
console.log(greetings)