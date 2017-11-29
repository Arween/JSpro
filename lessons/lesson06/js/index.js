const $$ = document.querySelectorAll.bind(document);
// console.dir($$('li'));


let inp1 = document.querySelector('input[name="first"]');
let inp2 = document.querySelector('input[name="second"]');
let btn = document.getElementById('btn');
let inp1_wp, inp2_wp;
btn.addEventListener('click', function (e) {
    inp1_wp = inp1.value;
    console.log(inp1_wp);
    inp2_wp = inp2.value;
    createTable();

});

function createTable() {
    let table = document.getElementById('table');

    for (let i = 1; i <= inp1_wp; i++){

        let grid = document.createElement('div');


        for (let j = 1; j <= inp2_wp; j++){
            let row = document.createElement('table');
            let temp = i + '* ' +j +'='+ (i*j);
            row.innerHTML = temp ;
            grid.appendChild(row);
        }
        table.appendChild(grid);


    }
}



let p3 = new Promise((resolve, reject) => {
    // то же что reject(new Error("o_O"))
    throw new Error("o_O");
})
// p.then(console.log('oooo'))
p3.catch(console.log); // Error: o_O
p3.catch(console.log); // Error: o_O






let promise = new Promise(function(resolve, reject) {
    const temp = Math.random();
    // if ( temp > 0.5 ){
    //     resolve(temp);
    // } else{
    //     reject(temp);
    // }

    setTimeout(()=>{resolve('ok')}, Math.random()*1000);
    setTimeout(()=>{resolve('no')}, Math.random()*1000);
    // setTimeout(resolve(temp), Math.random()*1000, reject(temp));
});
promise.then(onFulfilled, onRejected);

function onFulfilled(temp) {
    console.log('eeee ' + temp);
}

function onRejected(temp) {
    console.log('noooo ' + temp);
}
promise.then(l1);
promise.then(l1);
promise.catch(l2);
promise.catch(l2);

function l1() {
    console.log('llllllll')
}
function l2() {
    console.log('234234324')
}

// Создаётся объект promise
let promise2 = new Promise((resolve, reject) => {

    setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve("result");
}, 1000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise2
    .then(
        result => {
    // первая функция-обработчик - запустится при вызове resolve
    console.log("Fulfilled: " + result); // result - аргумент resolve
},
error => {
    // вторая функция - запустится при вызове reject
    console.log("Rejected: " + error); // error - аргумент reject
}
);


function Fact2(numb2) {

    if (numb2===1){
        return numb2;
    }

    return numb2*Fact2(numb2-1);
}

var p = Fact2(5);
console.log(p);


//
// for (let k = 0; k<=10; k++){
//     let grid2 = document.createElement('table2');
//     for (let l = 1; l <= 10; l++){
//         let row2 = document.createElement('div');
//         let temp2 =  i*j;
//         row2.innerHTML = temp2 ;
//         grid2.appendChild(row);
//     }
//     table2.appendChild(grid2);
// }