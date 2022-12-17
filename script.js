let count = 0;
let countEl;

function increment() {
    count += 1;
    countEl = document.getElementById("count-el");

    countEl.innerText = count;
}

let username = "khushboo";

let message = "You have three new notifications";
console.log(message + ' ' + username);

let namee = "Khushboo ! ";
let greeting = " Welcome back  ";


let welcomeEl = document.getElementById("welcome-el");
welcomeEl.innerText = greeting + namee;

welcomeEl.innerText += "👋";

let saveEl = document.getElementById("save-el");

function save() {
    let forsave = count + " - ";
    saveEl.textContent += forsave;
    count = 0;
    countEl.textContent = 0;

}