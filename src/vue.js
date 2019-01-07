/** 
 * 定义一个 vue 类，用于创建 vue 的实例
 */
class Vue {
  constructor(options = {}) {
    // 给vue增加属性
    this.$el = options.el
    this.$data = options.data

    if(this.$el) {
      // compile 负责对模板进行解析
      let c = new Compile(this.$el, this)
      console.log(c)
    }
  }
}