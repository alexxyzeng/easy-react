
function UserAction() {
    this.type = "user";
    this.getDefaultStorage = function() {
        return {
            name: "",
            gender: "",
            age: "2"
        };
    }
    this.getInfo = function(name, gender, age) {
        this.update("*", { name:name, gender: gender, age:age });
    }
};