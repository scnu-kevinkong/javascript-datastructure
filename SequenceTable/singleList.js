// 单向链表类
class singleList {
  // 构造函数， 初始化数据
  constructor(data) {
    this.data = data;
    this.LinkNode = null;
    if (data) {
      this.Length = 1;
    } else {
      this.Length = 0;
    }
  }
  // 获取下一个指针
  get next() {
    if (!this.LinkNode) {
      throw Error('the Current lcation of this SingleList is last, can not to the next position');
    } else {
      return this.LinkNode;
    }
  }
  // 赋值下一个指针
  set next (singlelist) {
    const { data, LinkNode } = singlelist 
    _.setNext(this, data)
    this.Length++;
  }
  // 获取单链表的长度
  get length() {
    return this.Length;
  }
  // 搜索x在表中的位置，返回表项位置，没有返回-1
  search (value) {
    if (value || value === '') {
      return _.findObject(value, this)
    } else {
      throw Error('you must give a value to search in the singleList')
    }
  }
  // 定位函数，返回第i个位置的指针
  locate (index) {
    index = _.isIndex(index, this.Length)
    let tmp = this
    for (let i = 0; i <= index - 1;i++) {
      tmp = tmp.LinkNode
    }
    return tmp;
  }
  // 取第i个位置的值
  getData (index) {
    index = _.isIndex(index, this.Length)
    return this.locate(index).data
  }
  // 修改第i个位置的值
  setData (index, value) {
    index = _.isIndex(index, this.Length)
    let tmp = this
    for (let i =0;i<index;i++) {
      tmp = tmp.LinkNode
    }
    tmp.data = value
  }
  // 插入value在第i个位置， 返回boolean
  insert(index, value) {
    index = _.isIndex(index, this.Length)
    if (index === 0) {
      if (value instanceof singleList) {
        const LinkNode = {
          data: this.data,
          LinkNode: this.LinkNode
        }
        this.data = value.data
        this.LinkNode = value.LinkNode
        let tmp = this
        for (let i =0;i<value.Length - 1;i++) {
          tmp = tmp.LinkNode
        }
        tmp.LinkNode = LinkNode
        this.Length = this.Length + value.Length
      } else {
        const LinkNode = {
          data: this.data,
          LinkNode: this.LinkNode
        }
        this.data = value
        this.LinkNode = LinkNode
        this.Length++
        return true
      }
    } else {
      if (value instanceof singleList) {
        let tmp = this
        for (let i =0;i<index;i++) {
          tmp = tmp.LinkNode
        }
        let temp = value
        for (let i =0;i<value.Length - 1;i++) {
          temp = temp.LinkNode
        }
        temp.LinkNode = tmp.LinkNode
        const LinkNode = {
          data: value.data,
          LinkNode: value.LinkNode
        }
        tmp.LinkNode = LinkNode
        this.Length += value.Length
      } else {
        let tmp = this
        for (let i =0;i<index;i++) {
          tmp = tmp.LinkNode
        }
        const LinkNode = {
          data: tmp.data,
          LinkNode: tmp.LinkNode
        }
        tmp.data = value
        tmp.LinkNode = LinkNode
        this.Length++
        return true
      }
    }
  }
  // 删除第i个位置的数据
  remove(index) {
    index = _.isIndex(index, this.Length)
    if (index === 0) {
      this.data = this.LinkNode.data
      this.LinkNode = this.LinkNode.LinkNode
      this.Length--;
    } else {
      let tmp = this
      for (let i =0;i<index - 1;i++) {
        tmp = tmp.LinkNode
      }
      const LinkNode = (tmp.LinkNode && tmp.LinkNode.LinkNode)? tmp.LinkNode.LinkNode:null
      tmp.LinkNode = LinkNode
      this.Length--;
    }
  }
  // 判断链表是否为空
  isEmpty() {
    return (this.Length === 0)? true:false
  }
  // 输出值
  output() {
    let result = ''
    let tmp = this
    for (let i=0;i<this.Length;i++) {
      result = `${result} ${tmp.data}`
      tmp = tmp.LinkNode
    }
    return result
  }
}
let a = new singleList(1);
a.next = {data: 2};
a.next = {data: 3};
a.next = {data: 4};
a.next = {data: 5};