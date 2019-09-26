function Test (options) {
	this.options = {instanceAttr: 1111}
  this.init()
}
Test.ctorOptions = {constructorAttr: 12121}
Test.prototype.init = function () {
	// console.log(this.constructor.options) //{constructorAttr: 12121}
	console.log(this) // {instanceAttr: 1111}
	console.log('ssss', this.ctorOptions)
	console.log('prototype init')
}

let Obj = {}

Object.defineProperty(Obj, 'name', {
	value: 'Nelson', //数据描述符
	enumerable: false, 
	writable: true, 
	/**
	存取描述符和数据描述符不能同时使用
	get: function () {

	},
	set: function () {

	}**/
})
console.log(Obj) // {name: Nelson} 
console.log(JSON.parse(JSON.stringify(Obj))) // {} /*因为不可枚举的属性，stringify是不能字符串化的*/ 
export default Test


export class TestClass {
	constructor () {

	}
	static sayStatic () {
		console.log('Static')
	}
	/*在class内部定义的公有方法实际上是定义在原型链上面的*/
	sayHi () {
		console.log('Hi')
	}
}

console.log(new TestClass().sayHi())
console.log(TestClass.sayStatic()) // Static
console.log(new TestClass().sayStatic())
// let nums = '5 2 8 1 6 3 4 7'
// let rules = ['R', 'L', 'L', 'R', 'L', 'L', 'R']
// let length = rules.length 
//  let groups = []

// function getResult (arr, rules) {
//   if (rules.length == 0) {
//     return arr
//   }
//   let map = {
//     L: [],
//     R: []
//   }
//   for(let i = 0; i < arr.split(' ').length; i++){ // split 是拆分字符串
//     if (i%2 == 0) {
//      map.L.push(arr.split(' ')[i]) // 这两行是分成两个数组
//     } else {
//      map.R.push(arr.split(' ')[i])
//     }
//   }
//   let newNum = [], newRules = rules.slice(map.L.length) // 得到新的rules 就是把之前的截断
//   for (let j = 0; j < map.L.length; j++) {
//     newNum.push(map[rules[j]][j]) 
//   }
//   return getResult(newNum.join(' '), newRules)
// }

// console.log(getResult(nums, rules))

