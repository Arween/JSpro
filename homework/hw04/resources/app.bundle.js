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
    birthday = '13.09';

function getDaysBirthday() {
    var tempBirthday = birthday.split('.'),
        monthBirthday = parseInt(tempBirthday[1]),
        dayBirthday = parseInt(tempBirthday[0]);
    if (monthBirthday < month) {
        var numCurDaysMonth = new Date(year, month, 0).getDate();
        console.log('sddsdsadasd');
    } else if (monthBirthday == month) {
        var resultDays = Math.round(birthday - day);
    } else {
        var resultDays = 0;
        for (var f = month; f < parseInt(tempBirthday[1]); f++) {
            var numCurDaysMonth = new Date(year, f, 0).getDate();
            resultDays += numCurDaysMonth;
        }
        resultDays -= day - dayBirthday;
    }

    console.log(resultDays);
}

getDaysBirthday();

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map