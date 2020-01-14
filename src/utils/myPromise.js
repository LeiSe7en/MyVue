const isFunction = (param) => typeof param === 'function'

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
let UID = 0
export default class MyPromise {
	_status = PENDING
	_value = null
	_fulfilledQueue = []
	_rejectedQueue = []
	constructor (callback) {
		if (!isFunction(callback)) {
			throw new Error('MyPromise must accept a function as a parameter')
		}
		try {
			UID++
			this._ui = UID 
			callback(this._resolve.bind(this), this._reject.bind(this))
		} catch (e) {
			throw new Error(e)
		}
	}

	then (onFulfilled, onRejected) {
		const { _status, _value } = this
		return new MyPromise((onFulfilledNext, onRejectedNext) => {
			let fulfilled = (value) => {
				if (!isFunction(onFulfilled)) {
					onFulfilledNext(value)
				} else {
					let res = onFulfilled(value)
					if (res instanceof MyPromise) {
						res.then(onFulfilledNext, onRejectedNext)
					} else {
						// 这个onFulfilledNext就是resolve，并且这个resolve中this的指向新new出来的promise，
						onFulfilledNext(res)
					}
				}
			}
			switch (_status) {
				case PENDING: 
					this._fulfilledQueue.push(fulfilled) // 这里的this指向当前的实例
					this._rejectedQueue.push(onRejected)
					break
				// 当状态已经改变了， 则直接执行对应的方法
				case FULFILLED: 
					fulfilled(_value)
					break;
				case REJECTED:
				 	onFulfilled(_value)
				 	break
			}
		})
	}

	_resolve (val) {
		if (this._status != PENDING) return
		let resolve = () => {
			this._status = FULFILLED
			this._value = val
			console.log('_fulfilledQueue.length',this._fulfilledQueue.length)
			while (cb = this._fulfilledQueue.shift()) {
				cb(val)
			}
		}
		setTimeout(resolve)
	}

	_reject (error) {
		if (this._status !== PENDING) return
		this._status = REJECTED
		this._value = error
	}
}