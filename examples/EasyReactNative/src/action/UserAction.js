
function UserAction() {
    this.type = "user";
    this.getDefaultStorage = function() {
        return {
            name: "Alex",
            gender: "男",
            age: "28"
        };
    }
    this.getInfo = function(name, gender, age) {
        this.update("*", { name:name, gender: gender, age:age });
    }
    this.updateInfo = function(type, newValue) {

        this.update(type, newValue);
    }
};


export default UserAction;