let count=0;
const value_span=document.querySelector("#value");
const increase_div=document.querySelector(".btn-increase");
const reset_div=document.querySelector(".btn-reset");
const decrease_div=document.querySelector(".btn-decrease");

function display() {
    value_span.textContent = count; 

    if (count > 0) {
        value_span.style.color = "green";
    } else if (count < 0) {
        value_span.style.color = "red";
    } else {
        value_span.style.color = "black";
    }
}

function increase(){
    count++;
    display();
}

function decrease(){
    count--;
    display();
}

function reset(){
    count=0;
    display();
}

function main(){
    increase_div.addEventListener('click', increase);

    decrease_div.addEventListener('click', decrease);

    reset_div.addEventListener('click', reset);
}

main();
