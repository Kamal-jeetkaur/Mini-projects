const dice_id = document.getElementById("dice");
const dice_img = dice_id.querySelector("img");
const roll_button = document.getElementById("roll");

const historyList = document.getElementById("history-list");
function addToHistory(number) {
    const li = document.createElement("li");
    li.textContent = `Rolled a ${number}`;
    historyList.prepend(li);
}

const dice_1 = 'https://static.thenounproject.com/png/1194695-200.png'
const dice_2 = 'https://static.thenounproject.com/png/1194703-200.png'
const dice_3 = 'https://static.thenounproject.com/png/1194696-200.png'
const dice_4 = 'https://static.thenounproject.com/png/1194702-200.png'
const dice_5 = 'https://static.thenounproject.com/png/1194701-200.png'
const dice_6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BcZMOpEzV-zFsfoph6ciiBard-zasQxE5BIZuiv7l9duJfe6UWt_hNI4gBArbOJ68yI&usqp=CAU'



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
