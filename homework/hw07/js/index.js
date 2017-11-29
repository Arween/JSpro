const btn_toggle = document.getElementById('btn_toggle'),
    btn_setTime = document.getElementById('btn_setTime'),
    btn_time = document.getElementById('btn_time'),
    contsTime = document.getElementById('contsTime'),
    time_out = document.getElementById('time_out');

btn_toggle.addEventListener("click", function(e){
    e.target.classList.toggle('active');
});

btn_setTime.addEventListener("click", function(e){
    e.target.classList.add('active')
    setTimeout( () => {
         e.target.classList.remove('active')
     }, 4000);
    // if (count2 > 0){
    //     count2--;
    // }
    timeoOutRemoveClass();
});

let count = 0;
let count2 = 4;

let timeWp = () => {
    setInterval(timeoOut(), 1000);
}
let timeoOut = () => {
    time_out.innerHTML = count;
    count++;
    console.log(count)
}
let timeoOutRemoveClass = () => {
    if (count2 > 0){
        contsTime.innerHTML = count2;
        count2--;
    }
}
btn_time.addEventListener("click", timeWp());

// let timeWp = () => {
//     setTimeout(timeOut(), 1000);
// }
// let timeOut = () => {
//     time_out.innerHTML = count;
//     count++;
//     setTimeout(timeWp(), 1000);
// }


let showList = data =>{
    let div = document.querySelector('div#place-for-list');
    div.innerHTML = '';
    data.response.length && data.response.forEach( el => {
            div.innerHTML
                += '<div class="row" data-user-id="'
                + el.user_id
                +'">'
                + '<img src="'
                + el.photo
                + '"/>'
                + el.first_name
                + ' '
                + el.last_name
                + '</div>';
        }
    );
    let script = document.querySelector('head').querySelector('script#jsonp-remove');
    script.parentElement.removeChild(script);
    console.log(data.response);
};
;(x=>{
        "use strict";

    let main = event => {
        "use strict";
        document.querySelector('button#get-friends').addEventListener('click',button);
        document.querySelector('div#place-for-list').addEventListener('click',button);
    };

    let button = event => {
        var script = document.createElement('script');
        let item = event.target;
        let data = item.dataset;
        let userId = data.userId || 176346497;
        script.src = 'https://api.vk.com/method/friends.get?user_id='+userId+'&fields=photo,sex,bdate&callback=showList';
        script.id = 'jsonp-remove';
        console.log(script,userId,item);
        document.getElementsByTagName('head')[0].appendChild(script);
    };
    document.addEventListener('DOMContentLoaded',main);
    // https://davids-restaurant.herokuapp.com/menu_items.json
    // https://davids-restaurant.herokuapp.com/categories.json
    // https://davids-restaurant.herokuapp.com/menu_items.json?category=L
}
)();
























