let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputHours = document.getElementById("hours");
let result = document.getElementById("result")
const title = "Developed by Andrey Pontes";
let letter = 0;

function calculate(){
    let adults = inputAdults.value;
    let children = inputChildren.value;
    let hours = inputHours.value

    if (hours >= 5 && hours < 8){
        totalMeat = 600 * adults + (600/2 * children);
        pepperoni = 400 * adults + (400/2 * children);
        water = 560 * adults + (560/2 * children);
        juice = 550 * adults + (550/2 * children);
        soda = 650 * adults + (650/2 * children);
        beer = 6 * adults 
    }

    else if (hours >= 8){
        totalMeat = 700 * adults + (700/2 * children);
        pepperoni = 500 * adults + (500/2 * children);
        water = 640 * adults + (640/2 * children);
        juice = 600 * adults + (600/2 * children);
        soda = 700 * adults + (700/2 * children);
        beer = 8 * adults 
    }

    else{
        totalMeat = 500 * adults + (500/2 * children);
        pepperoni = 300 * adults + (300/2 * children);
        water = 400 * adults + (400/2 * children);
        juice = 500 * adults + (500/2 * children);
        soda = 600 * adults + (600/2 * children);
        beer = 4 * adults 
    }

    result.innerHTML = `<h2>Você vai precisar de:</h2>`

    result.innerHTML += `<div class="result-icons"><img src="./src/assets/carne.png"><p>${totalMeat/1000} Kg de Carne</p></div>`

    result.innerHTML += `<div class="result-icons"><img src="./src/assets/calabresa.png"><p>${pepperoni/1000} Kg de Calabresa</p></div>`

    result.innerHTML += `<div class="result-icons"><img src="./src/assets/agua.png"><p>${water/1000} L de água</p></div>`

    result.innerHTML += `<div class="result-icons"><img src="./src/assets/suco.png"><p>${juice/1000} L de suco</p></div>`

    result.innerHTML += `<div class="result-icons"><img src="./src/assets/soda.png" id="soda"><p>${soda/1000} L de refrigerante</p></div>`

    result.innerHTML += `<div class="result-icons"><img src="./src/assets/cerveja.png"><p>${beer} latinhas de Cerveja</p></div>`
}


function typeWriter() {
    if(letter < title.length) {
        document.querySelector(".name").innerHTML += title.charAt(letter);
        
        letter++;
        
        setTimeout(typeWriter, 80)
    }
}

typeWriter();
