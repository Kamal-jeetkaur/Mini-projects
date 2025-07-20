const dice_id = document.getElementById("dice");
const dice_img = dice_id.querySelector("img");
const roll_button = document.getElementById("roll");

const historyList = document.getElementById("history-list");
function addToHistory(number) {
    const li = document.createElement("li");
    li.textContent = `Rolled a ${number}`;
    historyList.prepend(li);
}

const dice_1 = '../images/dice_1.png'
const dice_2 = '../images/dice_2.png'
const dice_3 = '../images/dice_3.png'
const dice_4 = '../images/dice_4.png'
const dice_5 = '../images/dice_5.png'
const dice_6 = '../images/dice_6.png'



function roll(){
    const numbers = ["1", "2", "3", "4", "5", "6"];
    const random_choice = Math.floor(Math.random(numbers)*6);
    const roll_choice = numbers[random_choice];
    addToHistory(roll_choice);
    
    if(roll_choice==='1'){
        dice_img.src= dice_1;
    }

    else if(roll_choice==='2'){
        dice_img.src= dice_2;
    }

    else if(roll_choice==='3'){
        dice_img.src= dice_3; 
    }

    else if(roll_choice==='4'){
        dice_img.src= dice_4;
    }

    else if(roll_choice==='5'){
        dice_img.src= dice_5;
    }

    else{
        dice_img.src= dice_6;
    }

    dice_id.classList.remove("roll");
    void dice_id.offsetWidth;
    dice_id.classList.add("roll");

}


roll_button.addEventListener('click', roll);
