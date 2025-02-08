let arrayNumberRandom = [ ]; 
let numberLimit = 10;
let numberSecret =  generateRandomNumber();
let attempts = 1; 

console.log(numberSecret)
// Retrieve the return value and store it in numberSecret

/*let titulo = document.querySelector('h1');

titulo.innerHTML = 'Secret number guessing game'; 
let  paragraph = document.querySelector('p')

paragraph.innerHTML = 'Try to guess the secret number I am thinking, of between 0 and 10! '; 
*/

function showText(tag, text){
    let element=document.querySelector(tag)
    element.innerHTML = text; 
    responsiveVoice.speak(text,'UK English Female', {rate:1})
}

function initialMessage(){

    showText('h1','Secret number guessing game'); 
    showText('p','Try to guess the secret number I am thinking, of between 0 and 10!');

    }

    initialMessage();



function checkGuess(){
    let guess = document.querySelector('input').value;
    if(guess == numberSecret){
        showText('h1','You guessed it!')

        let wordAttempt= attempts  > 1 ? 'attempts' : 'attempt';

        let messageAttempts = `You found out the secret number in ${attempts} ${wordAttempt}.  `

        showText('p', messageAttempts)

        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {



        if(guess > numberSecret){
            showText('p', 'The number secret is smaller!')
        } else{
            showText('p', 'the sceret number is greater! ')
        }

        attempts++;
        clearElement();
    }
}


function generateRandomNumber(){

   let numberChoosedOne =  parseInt(Math.random() * numberLimit + 1 );
   let quantityOfElmementsInArray = arrayNumberRandom.length;

    if(quantityOfElmementsInArray == 3){
        arrayNumberRandom = [] ; 
    }

   if (arrayNumberRandom.includes(numberChoosedOne)){
    return generateRandomNumber();
   }else{

        arrayNumberRandom.push(numberChoosedOne)

        console.log(arrayNumberRandom)
    
      return numberChoosedOne;
   }
}

function clearElement() {

    guess = document.querySelector('input');
    guess.value = ' ';
    
}

function restartGame(){
    numberSecret = generateRandomNumber();
    clearElement();
    attempts =  1;
   initialMessage();
   document;getElementById('reiniciar').setAttribute('disabled', true)
}