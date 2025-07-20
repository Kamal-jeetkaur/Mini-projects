const coin_div = document.getElementById("coin");
const coin_img= coin_div.querySelector("img");
const result_div = document.getElementById("result");
const flip_button=document.getElementById('flip');

const heads_image = '../images/heads.png';
const tails_image = '../images/tails.png';

function choice(){
    const choices=['head', 'tail'];
    const random_choice = Math.floor(Math.random()*2);
    console.log(choices[random_choice])
    result_div.innerHTML = choices[random_choice] === 'head' ? "Heads" : "Tails";
    coin_img.src = choices[random_choice] === 'head' ? heads_image : tails_image;

    coin_div.classList.remove("flip");
    void coin_div.offsetWidth;        
    coin_div.classList.add("flip");
}

flip_button.addEventListener('click', choice);
