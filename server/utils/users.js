class Users {
    constructor () {
        this.users = [];
    }

    addUser(id ,name, room) {
        var user  = {id,name,room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);
        if(user){
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }

    getUser(id) {
        return this.users.filter((usr) => usr.id === id)[0];
    }

    getUserList(room) {
        var users = this.users.filter((usr) => usr.room === room);
        var namesArray = users.map((usr) => usr.name)
        return namesArray;
    }
}

module.exports = {Users};






// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }

// var me = new Person('Ashu' , 25);
// console.log(me.getUserDescription());