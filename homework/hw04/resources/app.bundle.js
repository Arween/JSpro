/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// --------------------------- triangle Pascal

var numLines = 10;
var triangle = [],
    tempNullStr = [];
// let    curTriangle = [[1]];

function pascalTriangle(numL, curTriangle) {

    if (numL < 2) return curTriangle;

    var prevLine = curTriangle[curTriangle.length - 1];
    // console.log(prevLine)

    var currentLine = [1];

    for (var i = 1; i < prevLine.length; i++) {
        currentLine[i] = prevLine[i] + prevLine[i - 1];
    }
    currentLine.push(1);
    curTriangle.push(currentLine);
    // console.log(curTriangle.length);

    return pascalTriangle(numL - 1, curTriangle);
}

function addNullTriangle(arrTriangle) {
    // arrTriangle
    for (var i = 0; i < arrTriangle.length; i++) {
        console.log(numLines - arrTriangle.length);
        tempNullStr = [];
        var lineLength = (numLines - arrTriangle[i].length) / 2;
        // if (lineLength%2)
        for (var j = 0; j < lineLength; j++) {
            tempNullStr.push(' ');
            // console.log(Math.round((numLines - arrTriangle[i].length)/2))
        }

        // arrTriangle[i] = arrTriangle[i].concat(tempNullStr);
        arrTriangle[i] = tempNullStr.concat(arrTriangle[i], tempNullStr);
    }
}

triangle = pascalTriangle(numLines, [[1]]);

function createTablePascalTriangle() {
    var divPascal = document.getElementById('pascalTriangle');
    for (var n = 0; n < triangle.length; n++) {
        var tagDIV = document.createElement('div');
        divPascal.appendChild(tagDIV);
        for (var m = 0; m < triangle[n].length; m++) {
            var tagP = document.createElement('p');
            tagP.innerHTML = triangle[n][m];
            tagDIV.appendChild(tagP);
            // console.log(triangle[n][m]);
        }
    }
}

function triangleWithNull(triangle, callback) {
    addNullTriangle(triangle);
    callback();
}

triangleWithNull(triangle, createTablePascalTriangle);

console.table(triangle);

// --------------------------- sum of cubes

var numbers = 10,
    power_cubes = 3,
    sum_cubes = 0;

function sumCubes(arr) {
    for (var p = 1; p < arr; p++) {
        sum_cubes += Math.pow(p, power_cubes);
    }
    console.log(sum_cubes);
}

sumCubes(numbers);

// --------------------------- random

var numb_max = 0,
    numb_min = 10,
    arr_random = [],
    numbers_array = [3, 7, 2, 9, 34, 23, 11];

function findRandomNumb(min, max) {
    for (var l = 0; l < 15; l++) {
        arr_random.push(Math.round(Math.random() * (max - min) + min));
        // console.log(Math.round(Math.random() * (max - min) + min));
    }
    console.log(arr_random);
}
findRandomNumb(numb_min, numb_max);
// console.log(findRandomNumb());


// --------------------------- birthday!!!


var now = new Date(),
    month = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    birthday = '02.11';

function getDaysBirthday() {
    var tempBirthday = birthday.split('.'),
        monthBirthday = parseInt(tempBirthday[1]),
        dayBirthday = parseInt(tempBirthday[0]);

    if (monthBirthday < month || monthBirthday == month && dayBirthday < day) {
        // console.log(monthBirthday, dayBirthday, month)
        var resultDays = getDaysMonth(12, month);
        resultDays += getDaysMonth(monthBirthday, 0);
        resultDays -= day - dayBirthday;
    } else if (monthBirthday == month && dayBirthday >= day) {
        var resultDays = Math.round(birthday - day);
    } else {

        var resultDays = getDaysMonth(monthBirthday, month);
        resultDays -= day - dayBirthday;
    }

    function getDaysMonth(monthB, m) {
        var reasultB = 0;
        for (var f = m; f < monthB; f++) {
            var numCurDaysMonth = new Date(year, f, 0).getDate();
            reasultB += numCurDaysMonth;
        }
        return reasultB;
    }

    console.log(resultDays);
}

getDaysBirthday();

// --------------------------- money

var def_translite = {
    null: 'ноль',
    a1: ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    a2: ['одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    a10: ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
    a20: ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
    a100: ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    uc: ['копейка', 'копейки', 'копеек'],
    ur: ['рубль', 'рубля', 'рублей'],
    u3: ['тысяча', 'тысячи', 'тысяч'],
    u2: ['миллион', 'миллиона', 'миллионов'],
    u1: ['миллиард', 'миллиарда', 'миллиардов']
};

// --------------------------- live-search


var inputSearch = document.getElementById('liveSearch'),
    list = document.getElementsByClassName('search__item'),
    idCount = document.getElementById('count');

inputSearch.addEventListener('keyup', function (event) {
    var target = event.target,
        count = 0,
        valFilter = target.value.toLowerCase();
    // console.log(list.length);
    for (var v = 0; v <= list.length; v++) {
        console.dir(list);
        console.log(list[v].innerHTML);
        if (list[v].innerHTML.indexOf(valFilter) > 0) {
            list[v].style.display = 'block';
            count++;
            idCount.innerHTML = 'Найдено стран: ' + count;
        } else {
            list[v].style.display = 'none';
        }
    }
});
// $(document).ready(function(){
//     $("#filter").keyup(function(){
//
//         // Retrieve the input field text and reset the count to zero
//         var filter = $(this).val(), count = 0;
//
//         // Loop through the comment list
//         $("nav ul li").each(function(){
//
//             // If the list item does not contain the text phrase fade it out
//             if ($(this).text().search(new RegExp(filter, "i"))) {
//                 $(this).fadeOut();
//
//                 // Show the list item if the phrase matches and increase the count by 1
//             } else {
//                 $(this).show();
//                 count++;
//             }
//         });
//
//         // Update the count
//         var numberItems = count;
//         $("#filter-count").text("Number of Filter = "+count);
//     });
// });

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map