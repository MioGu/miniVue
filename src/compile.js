/**
 * Compile 专门负责解析模板内容
 */
class Compile {
  /**
   * @param {模板} el 
   * @param {vue实例} vm 
   */
  constructor(el, vm) {
    this.el = typeof el === 'string' ? document.querySelector(el) : el
    this.vm = vm

    // 编译模板
    if(this.el) {
      let fragment = this.node2fragment(this.el)
      console.dir(fragment)
    }
    
  }

  /** 核心方法 */
  /**
   * 将node节点转换为文档碎片
   * @param {node节点} node 
   */
  node2fragment(node) {
    let fragment = document.createDocumentFragment()
    let childNodes = node.childNodes

    this.toArray(childNodes).forEach(node => {
      fragment.appendChild(node)
    })
    
    return fragment
  }


  /** 工具方法 */
  toArray(likeArray) {
    return [].slice.call(likeArray)
  }
}