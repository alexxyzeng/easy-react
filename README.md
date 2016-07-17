# 框架(第一稿)文档
使用方法
1.创建一个继承自BaseComp的自定义组件,让它拥有在BaseComp中定义的方法
class BaseComp extends React.Component {
... ...
}
//  customComp: 自定义组件
class customComp extends BaseComp {
... ...
}
2.执行自定义事件的方法
// group.cmdType: 第一个参数,必选,包括指定的方法集名称(action)和方法名称(cmdType),以"."分隔
// arg1, arg2, ...: 传递给指定方法的参数,可选
this.exec(action.actionType, arg1, arg2,....) {
... ...
}
3.获取数据方法
// property: 要获取的数据的名称
// handler : 处理订阅的数据的方法  
this.subData(property, handler) {
... ...
}
4.数据绑定方法
// property      : 要获取的数据的名称
// stateProperty : 组件state中要绑定的数据的名称
this.bindData(property, stateProperty) {
... ...
}
5.示例代码
examples/index.html
1)实现绑定输入框初始值到显示区域;
2)点击"确认"按钮，同步输入结果到显示区域
