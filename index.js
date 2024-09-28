
var button = document.getElementById('guess');
var restart = document.getElementById('restart');
var counter = document.getElementById('counter');
var hint = document.getElementById('hint');
var randomValue = generateRandomValue();
var count=0;
var won = false;
var val;

function generateRandomValue(){
    return Math.floor(Math.random() * 100) + 1;
}
button.onclick = function(){
    val = Number(document.getElementById('guessValue').value);
    getHint(val);
    increaseCounter();
}

function getHint(val) {
    if (val >=1 && val <=100){
        if (val==randomValue) {
            hint.innerText = `Congratulation,you won in ${count + 1} attempts!`;
            won = true;
        } else if ((randomValue - val) > 10) {
            hint.innerText = "Your guess is too low!";
        } else if ((val - randomValue) > 10) {
            hint.innerText = "Your guess is too high!";
        } else if ((randomValue - val) <= 10 && randomValue > val) {
                hint.innerText = "Your guess is slight low!";
        } else if ((val - randomValue) <= 10 && randomValue > val) {
                hint.innerText = "Your guess is slight high!";


        }
    } else {
        hint.innerText = "No hints for this value"

    }    
    }


function increaseCounter(){
   if(count < 9){
    count++;
    counter.innerText = count;
   } else {
    counter.innerText = "Guesses Finished";
    if (!won) {
        hint.innerText = `You lost, the ans was ${randomValue}`
    }
   }
}


// restart.onclick = function(){
//     location.href = "/NumberGame/index.html";
    
// }
document.getElementById("restart").addEventListener("click", function() {
    location.reload();
  });
