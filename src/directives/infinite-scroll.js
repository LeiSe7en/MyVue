function doBind () {
  const { el, vm, expression } = this
  el.addEventListener('scroll', function () {
    if (el.scrollHeight - 100 < el.clientHeight + el.scrollTop) {
      console.log('Woops reach Bottom')
      this.expression()
    }
    console.log('this', this)
  })
}
export default {
  bind (el, binding, vnode) {
    const vm = vnode.context
    vm.$on('hook:mounted', () => {
      doBind.call({
        el, 
        vm, 
        expression: binding.value
      }, arguments)
    })
  },
  unbind () {
    console.log('haha, unbind')
  }
}