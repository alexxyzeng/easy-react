/**
 * Created by xiayao on 16/7/15.
 */
/**
 * 所有组件的父类
 */
//  创建自定义的基础组件，实现自定义方法
class BaseComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    /*
     * 执行指定的方法
     * action: 要执行的方法集和方法名称
     * 后面可以加给指定方法的参数，没有则不加
     * */
    exec(action) {
        //  将传递的参数action，拆解传递给对应的方法
        var group = arguments[0].split(".")[0];
        var cmd = arguments[0].split(".")[1];
        var act = DataComm.sharedInstance.actions[group];
        //  传递给user-->login方法的参数，此处为空
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        act[cmd].apply(act, args);
    }
    /*
     * 订阅数据方法
     * property: 传入的方法集名称和方法名称的组合
     * handler:  回调函数
     * */
    subData(property, handler) {
        return DataComm.sharedInstance.subscribe(property, handler);
    }
    /*
     * 绑定storage数据到组件state中
     * property: 需要获取的storage中的数据名称
     * stateProperty: 需要更新的state中的数据名称
     * */
    bindData(property, stateProperty) {

        var ins = this;
        // 最终回调的数据
        var currentData = this.subData(property, function(data) {
            console.log("回调的数据为：" + data);
            ins.__syncData(stateProperty, data);
        });
        //  先设置一个当前数据
        ins.__syncData(stateProperty, currentData);
    }
    /*
     * 同步数据到组件state中
     * stateProperty: 需要更新的state中的数据名称
     * data: 需要获取的更新数据
     * */
    __syncData(stateProperty, data) {
        var obj = {};
        if (stateProperty == "*") {
            //  对象拷贝方法ES6
            obj = { ...data };
        } else {

            var stateProperties = stateProperty.split(".");
            if (stateProperties.length > 1) {
                var val = this.state;
                for (var i = 0; i < stateProperties.length - 1; i++) {
                    var propName = stateProperties[i];
                    var temp = val[propName];
                    if (!temp) val[propName] = {};
                    val = val[propName];
                }
                val[stateProperties[stateProperties.length - 1]] = data;

                obj = {};
                obj[stateProperties[0]] = this.state[stateProperties[0]];
            } else {
                obj[stateProperty] = data;
            }

        }
        this.setState(obj);
    }
    getState(obj) {
        return this.state[obj];
    }
}

export default BaseComp;