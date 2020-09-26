/*
CLOSURE ?
closer is most secret of concept of javascript

1. closed over variable enviroment(c.o.v.e.)
2. presistent lexical scope reference data (p.l.s.r.d)
3. closer
4. backpack

*/

// prototype example
function ProtoFun() {}
ProtoFun.prototype.getName = function () {
    return 'Aman Silawat';
};
let getMyName = new ProtoFun();
console.log(getMyName.getName());

// class example
class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() {
        this.score++;
    }
    login() {
        console.log('login');
    }
}
let user1 = new UserCreator('Eva', 9);
user1.increment();

//..
// without 'new' keyword function
function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}
const userFunctionStore = {
    increment: function () {
        this.score++;
    },
    login: function () {
        console.log('Logged in');
    },
};
const user01 = userCreator('Will', 3);
const user02 = userCreator('Tim', 5);

console.log(user01.hasOwnProperty('score'));


//..
// 'new' keyword constructor function
function UserCreator02(name, score) {
    this.name = name;
    this.score = score;
}
UserCreator02.prototype.increment = function () {
	this.score++;
}
UserCreator02.prototype.login = function () {
    console.log('Logged in');
}

const user011 = new UserCreator02('Will', 3);
const user022 = new UserCreator02('Tim', 5);

console.log(user011.hasOwnProperty('score'));
