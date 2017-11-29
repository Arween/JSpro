'use strict';


class Cards{
    constructor(values) {
        this.name = ['2','3','4','5','6','7','8','9','J','Q','K','A'];
        this.value = ['2','3','4','5','6','7','8','9','10','11','12','13'];
        this.suit = [
            [{'suit': '&clubs;'},{'color': 'black'}],
            [{'suit': '&diams;'},{'color': 'red'}],
            [{'suit': '&hearts;'},{'color': 'red'}],
            [{'suit': '&spades;'},{'color': 'black'}]
        ];
        this.deck = [];
    }
    createDeckCards() {
        for (const name of this.name) {
            for (const suit of this.suit) {
                const tempIndex = this.name.indexOf(name);
                const card = [name, suit["0"].suit, suit["1"].color, this.value[tempIndex]];
                this.deck.push(card);
            }
        }
        // console.table(this.deck);
        return this.deck;
    }
    randomDeck(){
        return Math.random() - 0.5;
    }
    createCardsInDom(arr){
        const cardTable = document.getElementById('cardTable');
            cardTable.innerHTML = '';
        for ( const item of arr){
            const div_card = document.createElement('div');
            div_card.classList.add('card');
            let i = 0;
            while ( i < 2 ){
                const div_info = document.createElement('div'),
                    span = document.createElement('span');
                div_info.classList.add('card_info');
                span.style.color = item["2"];
                span.innerHTML = item["1"] + ' ' + item["0"];
                div_info.append(span);
                div_card.append(div_info);
                i++;

            }
            const div_suit = document.createElement('div'),
                p = document.createElement('p');
            div_suit.classList.add('card_suit');
            p.style.color = item["2"];
            p.innerHTML = item["1"] ;
            div_suit.append(p);
            div_card.append(div_suit);
            cardTable.append(div_card);
        }

    }

}


// console.log(mycards);
// console.log(randomcards);




class Players{
    constructor(numbers, deck) {
        this.numbers = numbers;
        this.deck = deck;
        this.game = [];
    }
    createPlayersCards(){
        let tempPlayers = 1;
        while (tempPlayers <= this.numbers){
            let numbOfCards = 1,
                tempArr = [];
            while (numbOfCards <= 2){
                tempArr.push(this.deck.pop());
                numbOfCards++;
            }
            this.game.push(tempArr);
            tempPlayers++;
        }
        return this.deck;
    }
    amountPointsPlayers(){
        for ( const player of this.game){
            player.sum = 0;
            [].forEach.call(player, function(item){

                if ( item === undefined ){
                    document.getElementById('info').innerHTML = "Колода закончилась";
                } else {
                    player.sum += +item[3];
                }

            });
        }
    }
    maxSum(){
        // console.log(this.game);
        let max = 0,
            ind = 0;
        for ( const player of this.game){
            if ( player.sum > max && player.sum <= 21){
                max = player.sum;
                ind = this.game.indexOf(player);
            }
        }
        // return max;
        this.rulesPlayers(max);

    }
    rulesPlayers(max){
        // console.log(max);
        // let max = players.maxSum()
        for ( const player of this.game){
            if ( player.sum === max ){
                player.winner = true;
            } else {
                player.winner = false;
            }
        }
        this.renderGames(max);
        // console.log(this.deck)
    }
    renderGames(max){
        const playersTable = document.getElementById('playersTable');
            playersTable.innerHTML = '';
            // console.table(this.game);
        for ( const player of this.game){
            const div_player = document.createElement('div');
                if (player.sum == max){
                    div_player.classList.add('winner');
                }
                div_player.innerHTML = `<p class="text">Общая сумма: ${player.sum}</p>`;
            [].forEach.call(player, function(item){
                if ( item !== undefined ){
                    div_player.innerHTML
                        +=
                        `<div class="card">
                        <div class="card_info">
                        <span style="color: ${item[2]}">${item[1]}${item[0]}</span>
                        </div>
                        <div class="card_suit"><p style="color: ${item[2]}">${item[1]}</p></div>
                        <div class="card_info">
                        <span style="color: ${item[2]}">${item[1]}${item[0]}</span>
                        </div>
                        </div>`;
                }

            });
            playersTable.append(div_player);


        }
    }
}

// const players = new Players();


document.querySelector('button').addEventListener('click', function (e) {
    const numbers = document.querySelector('input').value;
    if (numbers && numbers >= 2){
        const cards = new Cards();

        const mycards = cards.createDeckCards();
        const randomcards = mycards.sort(cards.randomDeck);
        cards.createCardsInDom(randomcards);
        // console.log(players);
        const players = new Players(numbers, randomcards);
        players.createPlayersCards();
        players.amountPointsPlayers();
        players.maxSum();
        // cards.createCardsInDom(players.createPlayersCards());
    } else {
        // document.querySelector('button').innerHTML = '';
    }
});









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
