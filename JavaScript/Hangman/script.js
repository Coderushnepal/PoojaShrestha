document.body.style.backgroundColor = "#34495e";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";

//importing the elements

var word = document.getElementById("word");
// var word =document.querySelector("#word span");
var figureParts = document.querySelectorAll(".figure-part");
var incorrect = document.getElementById('wrong-word');
var incorrectLettersEl = document.querySelector('#wrong-word p');
var duplication = document.getElementById('duplication');


//chosen words

var dictionary = [
    "application", "javascript", "programming", "design", "tuesday", "morning", "oil", "give", "sun", "moon"
];

//selects word

var inputWords = dictionary[Math.floor(Math.random() * dictionary.length)];
var numLetters = inputWords.length;
var incorrectCount = 0;

console.log(inputWords);

var correctWords = [];
var incorrectWords = [];

//displays the character is true

function displayWord() {
    
    word.innerHTML = 
    `
    ${inputWords.split('').map(letter => 
        `
            <span class="letter">
            ${correctWords.includes(letter) ? letter : ''}
            </span>
        `
        )
        .join('')}
    `;
}

displayWord();

// Update the figure when incorrect letters typed
function updateFigure() 
{
    figureParts[incorrectCount].style.display = 'block';
    incorrectCount++;
}

//displays incorrect words

function displayWrong() 
{
    // Display wrong letters
    incorrectLettersEl.innerHTML = 
    `
        ${incorrectWords.length > 0 ? '<h2>Incorrect</h2>' : ''}
      ${incorrectWords.map(letter => `<span>${letter}</span>`)}
    `;
    updateFigure();

    if (incorrectWords.length >= figureParts.length) {
        var finish = incorrectWords.innerText = 'Unfortunately you lost.';
        alert(finish);
      }

}



//checks duplication

function displayDuplication() {
    duplication.classList.add('visible');
  
    setTimeout(() => {
        duplication.classList.remove('visible');
    }, 2400);
  }
  
// function on event call

 
function check(event)
{
    if (event.keyCode >= 65 && event.keyCode <= 90) 
    {
        var character = event.key;

        if (inputWords.includes(character)) 
        {
            if (!correctWords.includes(character)) 
            {
                correctWords.push(character);
                displayWord();
            }
            else
            {
                displayDuplication();
            }
        }
        else
        {

            if (!incorrectWords.includes(character)) 
            {
                incorrectWords.push(character);
                displayWrong();

            } 
            else
            {
                displayDuplication();
            }
        }
    }
}


window.addEventListener('keydown', check);