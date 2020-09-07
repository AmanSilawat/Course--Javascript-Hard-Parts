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
ProtoFun.prototype.getName = function() {
	return "Aman Silawat";
}
let getMyName = new ProtoFun();
console.log(getMyName.getName());




// class example
let UserCreator {
	constructor (name, score){
	this.name = name;
	this.score = score;
	}
	increment (){ this.score++; }
	login (){ console.log("login"); }
}
let user1 = new UserCreator("Eva", 9);
user1.increment();