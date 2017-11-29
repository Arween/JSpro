// 'user sticts'

// ;(x = > {
//     x+2;
//     console.log('fired');
//     })
// ();
//
// let user = {
//     sayHi: function () {
//         alert(this);
//     }
// };

// (user.sayBye = user.sayHi)();


// for (let i=0; i<10; i++){
//     console.log(i)
// }
// for (var j=0; j<10; j++){
//     console.log(j)
// }


// вместо if-ов

// something
//     && something.classList
//         && something.classList.length
//             && something.classList.add('cool');
// github pages
//
//
// let arr = [1, 2, 3, 4];
// console.table(arr);
//
//
//
// var temp = document.querySelector('ul');
// console.log(temp);
// console.table(temp);


;(x => {
    let a = new Array(9);

    let newArraySintax = [];
    let al = Array.of(9);

    let o = Object.create(null);    // объект без прототипа

    let tempArray = [5,3,5,6,3,4,34,34,435,56,343,3,4,434];
    // tempArray.length;
    let temp = [];
    temp.length = 9;


    let newo = {};
    let newo1 = new Object();
    newo.newProp = '';
    newo['cdcd cdcd '] = 2;
    console.log(newo);


    let testArray = [1, '2', {}, function (a) {
        console.log(a);
    }];
    testArray[3](11);


    console.log('sdf f sdf df sdf sf'.split('') + []);
    console.log('sdf f sdf df sdf sf');
    testArray = 'sdf f sdf df sdf sf'.split('');
    console.log(testArray);
    console.log(testArray + []);
    console.log(testArray.join(''));


    // // splice возвращает удаляемые
    // let a = [3,3,5,56,65,7,76,45,343];
    // a.shift(); // сдвигает
    // a.unshift(); //добавлять
    //
    // a.pop('sa'); //добавить
    // a.push();    //убрать последний
    //
    // a.reverse();
    //
    //
    // a.fill(7); //поменяет все на 7ки

// slice - копирует кусок (с-по)
//splice - возвращает с позиции - ко-во позиций

console.log([1,2,3,4,5,6,7,8,9].reduce(
    (previous_return,current_element)=>
        previous_return + current_element
    , 1000));
console.log([1,2,3,4,5,6,7,8,9].reduce(
    (previous_return,current_element)=>
    previous_return + current_element
));


            let t = [1,2,3,4,5,6,7,8,9];
            t.forEach((x,i) => console.log(i,x)); //9 аргументов   (...args) (args)

                let k  = t.filter(el=>((el/2)==Math.floor(el/2))?el:'');
                console.log(k);
            let p  = t.filter(el=>el%2?el:'');
                console.log(p);
            let n  = t.filter(el=>el%2?el:'').sort();
                console.log(n);

            console.log(
                ['ter', 'ytr', 'optr'].sort(
                    (a,b) => b.length > a.length ? 1 : -1
                )
            );


            // псевдо код, пример аля своя сортировка
// console.log(
//     ['ter', 'ytr', 'optr'].sort(
//         (a,b) => {
//         if (true) return 1;
//         return -1;
//     }
// ))



console.log(
    [1,2,3,4,5,6,7,8,9,10]
        .map((el,i)=>el*2)
);


let arrayForMap = [1,2,3,4,5,6,7,8,9,10];
console.log(
    arrayForMap.map((el,i)=>*=2),arrayForMap
)


})();