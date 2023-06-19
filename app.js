const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
let p1Display = document.querySelector('#p1Display')
let p2Display = document.querySelector('#p2Display')
const reset = document.querySelector('#reset')
const playingTo = document.querySelector('#playingTo')

// Computing Winning Score
let theValue = 3;


playingTo.addEventListener('change', function(){
    theValue = parseInt(this.value);
    winningScore = theValue;
    resetfunc();
})

let p1Score = 0; 
let p2Score = 0; 
let winningScore = theValue; 
let isGameOver = false; 
 
p1Button.addEventListener('click', function(e) {
    if(isGameOver!==true){
        // then change the color of the digits
        p1Score+=1;
        if(p1Score===winningScore){
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            isGameOver = true; 
            p1Button.disabled=true; 
            p2Button.disabled=true; 
        }
        p1Display.textContent = p1Score; 
    }

})

p2Button.addEventListener('click', function(){
    if(isGameOver!==true){
        p2Score+=1; 
        if(p2Score===winningScore){
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            isGameOver = true; 
            p1Button.disabled=true; 
            p2Button.disabled=true; 
        }
        p2Display.textContent = p2Score; 
    }
           
})


function resetfunc() {
    p1Score = 0; 
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
    // p2Display.classList.add('normal')
    // p1Display.classList.add('normal')
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    // use this remove only because if you do that add then normal class will always overwrite the other and not let it 
    // change the color when wins or loses
    // we could've also done remove the classes both of them from both displays 
    p1Button.disabled=false; 
    p2Button.disabled=false; 
}

reset.addEventListener('click', resetfunc)
cardHeader = document.querySelector(".card-header-title")






