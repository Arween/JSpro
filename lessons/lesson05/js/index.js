// получить от 4-6  получить 10 карт

let a = 4 + Math.random(Math.random()*2);

let r = (count, begin = 0) =>
    begin + Math.random(Math.random()*count);



var Volume = {
    a : 12,
    b : function () {
        console.log(this.a);
    },
};

Volume.b();

var cup = Object.create(Volume);
cup.b();


cup.a++;
cup.a++;

cup.b();