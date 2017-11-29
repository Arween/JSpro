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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cards = function () {
    function Cards(values) {
        _classCallCheck(this, Cards);

        this.name = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
        this.value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
        this.suit = [[{ 'suit': '&clubs;' }, { 'color': 'black' }], [{ 'suit': '&diams;' }, { 'color': 'red' }], [{ 'suit': '&hearts;' }, { 'color': 'red' }], [{ 'suit': '&spades;' }, { 'color': 'black' }]];
        this.deck = [];
    }

    _createClass(Cards, [{
        key: 'createDeckCards',
        value: function createDeckCards() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.name[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var name = _step.value;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = this.suit[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var suit = _step2.value;

                            var tempIndex = this.name.indexOf(name);
                            var card = [name, suit["0"].suit, suit["1"].color, this.value[tempIndex]];
                            this.deck.push(card);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
                // console.table(this.deck);
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return this.deck;
        }
    }, {
        key: 'randomDeck',
        value: function randomDeck() {
            return Math.random() - 0.5;
        }
    }, {
        key: 'createCardsInDom',
        value: function createCardsInDom(arr) {
            var cardTable = document.getElementById('cardTable');
            cardTable.innerHTML = '';
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var item = _step3.value;

                    var div_card = document.createElement('div');
                    div_card.classList.add('card');
                    var i = 0;
                    while (i < 2) {
                        var div_info = document.createElement('div'),
                            span = document.createElement('span');
                        div_info.classList.add('card_info');
                        span.style.color = item["2"];
                        span.innerHTML = item["1"] + ' ' + item["0"];
                        div_info.append(span);
                        div_card.append(div_info);
                        i++;
                    }
                    var div_suit = document.createElement('div'),
                        p = document.createElement('p');
                    div_suit.classList.add('card_suit');
                    p.style.color = item["2"];
                    p.innerHTML = item["1"];
                    div_suit.append(p);
                    div_card.append(div_suit);
                    cardTable.append(div_card);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }]);

    return Cards;
}();

var cards = new Cards();

var mycards = cards.createDeckCards();
console.log(mycards);
var randomcards = mycards.sort(cards.randomDeck);
console.log(randomcards);

var Players = function () {
    function Players(numbers, deck) {
        _classCallCheck(this, Players);

        this.numbers = numbers;
        this.deck = deck;
        this.game = [];
    }

    _createClass(Players, [{
        key: 'createPlayersCards',
        value: function createPlayersCards() {
            var tempPlayers = 1;
            while (tempPlayers <= this.numbers) {
                var numbOfCards = 1,
                    tempArr = [];
                while (numbOfCards <= 2) {
                    tempArr.push(this.deck.pop());
                    numbOfCards++;
                }
                this.game.push(tempArr);
                tempPlayers++;
            }
            return this.deck;
        }
    }, {
        key: 'amountPointsPlayers',
        value: function amountPointsPlayers() {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                var _loop = function _loop() {
                    var player = _step4.value;

                    player.sum = 0;
                    [].forEach.call(player, function (item) {

                        if (item === undefined) {
                            document.getElementById('info').innerHTML = "Колода закончилась";
                        } else {
                            player.sum += +item[3];
                        }
                    });
                };

                for (var _iterator4 = this.game[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    _loop();
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }, {
        key: 'maxSum',
        value: function maxSum() {
            // console.log(this.game);
            var max = 0,
                ind = 0;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.game[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _player = _step5.value;

                    if (_player.sum > max && _player.sum <= 21) {
                        max = _player.sum;
                        ind = this.game.indexOf(_player);
                    }
                }
                // return max;
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            this.rulesPlayers(max);
        }
    }, {
        key: 'rulesPlayers',
        value: function rulesPlayers(max) {
            // console.log(max);
            // let max = players.maxSum()
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.game[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _player2 = _step6.value;

                    if (_player2.sum === max) {
                        _player2.winner = true;
                    } else {
                        _player2.winner = false;
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            this.renderGames(max);
            // console.log(this.deck)
        }
    }, {
        key: 'renderGames',
        value: function renderGames(max) {
            var playersTable = document.getElementById('playersTable');
            playersTable.innerHTML = '';
            // console.table(this.game);
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                var _loop2 = function _loop2() {
                    var player = _step7.value;

                    var div_player = document.createElement('div');
                    if (player.sum == max) {
                        div_player.classList.add('winner');
                    }
                    div_player.innerHTML = '<p class="text">\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430: ' + player.sum + '</p>';
                    [].forEach.call(player, function (item) {
                        if (item !== undefined) {
                            div_player.innerHTML += '<div class="card">\n                        <div class="card_info">\n                        <span style="color: ' + item[2] + '">' + item[1] + item[0] + '</span>\n                        </div>\n                        <div class="card_suit"><p style="color: ' + item[2] + '">' + item[1] + '</p></div>\n                        <div class="card_info">\n                        <span style="color: ' + item[2] + '">' + item[1] + item[0] + '</span>\n                        </div>\n                        </div>';
                        }
                    });
                    playersTable.append(div_player);
                };

                for (var _iterator7 = this.game[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    _loop2();
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }
        }
    }]);

    return Players;
}();

// const players = new Players();


document.querySelector('button').addEventListener('click', function (e) {
    var numbers = document.querySelector('input').value;
    if (numbers && numbers >= 2) {
        // console.log(players);
        var players = new Players(numbers, randomcards);
        players.createPlayersCards();
        players.amountPointsPlayers();
        players.maxSum();
        // cards.createCardsInDom(players.createPlayersCards());
    } else {
            // document.querySelector('button').innerHTML = '';
        }
});

cards.createCardsInDom(randomcards);

// --------------- разобраться

//
// document.querySelector('input').onkeypress = function(e) {
//     e = e || event;
//
//     if (e.ctrlKey || e.altKey || e.metaKey) return;
//
//     var chr = getChar(e);
//
//     // с null надо осторожно в неравенствах,
//     // т.к. например null >= '0' => true
//     // на всякий случай лучше вынести проверку chr == null отдельно
//     if (chr == null) return;
//
//     if (chr < '0' || chr > '9') {
//         return false;
//     }
// };
// function getChar(event) {
//     if (event.which == null) { // IE
//         if (event.keyCode < 32) return null; // спец. символ
//         return String.fromCharCode(event.keyCode)
//     }
//
//     if (event.which != 0 && event.charCode != 0) { // все кроме IE
//         if (event.which < 32) return null; // спец. символ
//         return String.fromCharCode(event.which); // остальные
//     }
//     return null; // спец. символ
// }


// Трефы — clubs - &clubs;
// Бубны — diamonds - &diams;
// Червы — hearts - &hearts;
// Пики — spades - &spades;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map