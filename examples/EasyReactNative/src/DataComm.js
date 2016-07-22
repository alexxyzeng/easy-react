//  基础方法集，其他方法集继承于这个类，实现不同功能
import EventDispatcher from './Event.js';

function BaseAction() {

    var instance = this;
    //  注册事件安排
    this.eventDispatcher = new EventDispatcher(instance);
    //  注入数据发布器
    this.injectDataComm = function(instance) {
        this.dc = instance;
    }
    this.getInfo = function(name, gender, age) {
        this.update("*", {name:name, gender: gender, age:age});
    }
    //  更新数据
    this.update = function(property, newValue) {
        if (property != "*") {
            property = this.type + "." + property;
        } else {
            property = this.type
        }
        //  通知数据管理器更新全局storage
        this.dc.updateStorage(property, newValue);
    }
    //  获取数据
    this.fetch = function(property) {
        if (property != "*") {
            property = this.type + "." + property;
        } else {
            property = this.type;
        }
        return this.dc.fetchStorage(property);
    }
}
//  数据管理器
function DataComm() {
    var nestedProperty = require('./NestedProperty');
    var instance = this;
    this.actions = {};
    //  创建一个全局的storage
    var storage = {};
    var dataHandlers = {};
    //  注册action，将已有的方法添加到当前的actions中
    this.registerAction = function(actionClass) {
        var action = new actionClass();
        BaseAction.call(action);
        action.injectDataComm(this);
        var actionType = action.type;
        this.actions[actionType] = action;
        //  获取方法设置的默认值，存入全局的storage
        if (action.getDefaultStorage) {
            //  获取初始数据
            var data = action.getDefaultStorage();
            if (data) {
                storage[actionType] = {};
                for (var key in data) {
                    var path = actionType.concat('.', key);
                    nestedProperty.set(storage, path, data[key]);
                }
            }
        }
    }

    //  数据订阅方法
    this.subscribe = function(property, handler) {
        //  特定的订阅的数据的处理方法
        var temp = property.split(".");
        var actProperty = temp.pop();
        var group = dataHandlers[temp[0]];
        if (!group) {
            group = {};
            dataHandlers[temp[0]] = group;
        }
        //var actProperty = temp.length > 1 ? property.replace(temp[0] + ".", "") : "*";
        //var list = group[actProperty];
        var list = nestedProperty.get(dataHandlers, property);
        if (!list) {
            list = [];
            temp.shift();
            var tempProp = temp.join('.');
            var groupProp = nestedProperty.get(group, tempProp);
            groupProp[actProperty] = list;
        }
        if (typeof handler == "function") {
            list.push(handler);
        }

        return this.fetchStorage(property);
    };

    // 取消订阅方法
    this.unsubscribe = function(property) {
        var temp = property.split(".");
        var actProperty = temp.pop();
        var property = temp.join('.');
        var group = nestedProperty.get(dataHandlers, property);
        group[actProperty] = null;
    }
    //  更新数据到storage
    this.updateStorage = function(property, newValue) {
        var properties = property.split(".");
        //  将数据提交到storage
        //  不止一级
        if (properties.length > 1) {
            var propLen = properties.length - 1;
            var val = storage;
            for (var i = 0; i < propLen; i++) {
                val = val[properties[i]];
            }
            val[properties[propLen]] = newValue;
        } else {
            //  只有一级
            storage[property] = newValue;
        }

        var ins = this;
        var groupName = properties[0];
        //  取出本组的handlers
        var group = dataHandlers[groupName];
        //  如果这个组没有handler，直接返回
        if (!group) {
            return ;
        }
        //  从storage中获取数据，并由回调函数来进行处理
        if (properties.length == 1) {
            //  组只有一级，取出改组的方法遍历执行
            for (var p in group) {
                var list = group[p];
                if (list && list.length > 0) {
                    list.forEach(function(handler) {
                        var val = ins.fetchStorage(p == "*" ? groupName : (groupName + "." + p));
                        handler(val);
                    });
                }
            }
        } else {
            //var p = properties[1];
            //var list = group[p];
            var p = property.replace(temp[0] + ".", "");
            var list = nestedProperty.get(group, p);
            if (list && list.length > 0) {
                list.forEach(function(handler) {
                    var val = ins.fetchStorage(property);
                    handler(val);
                });
            } else {
                // 没有对应的handler的情况下，调用本组的方法来更新
                list = group["*"];
                if (list && list.length > 0) {
                    list.forEach(function(handler) {
                        var val = ins.fetchStorage(groupName);
                        handler(val);
                    });
                }
            }

        }
    }

    //  从storage中获取数据
    this.fetchStorage = function(property) {
        var properties = property.split(".");
        if (properties.length > 1) {
            var val = storage;
            for (var i = 0; i < properties.length; i++) {
                val = val[properties[i]];
            }
            return val;
        } else {
            return storage[property];
        }
    }
}

__dc = new DataComm();

DataComm.sharedInstance = __dc;

export default __dc;