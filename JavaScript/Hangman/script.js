document.body.style.backgroundColor = "#34495e";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";

//importing the elements

var word = document.getElementById("word");
var figureParts = document.querySelectorAll(".figure-part");
var incorrect = document.getElementById('wrong-word');
var incorrectLettersEl = document.querySelector('#wrong-word p');
var duplication = document.getElementById('duplication');

//chosen words

var dictionary = [
    "application", "javascript", "programming", "design", "tuesday", "morning", "oil", "give", "sun", "moon"
];

console.log(dictionary);


//selects word

var inputWords = dictionary[Math.floor(Math.random() * dictionary.length)];
var numLetters = inputWords.length;

//splitting to take the total length with unique letters

var uniqueLetters = inputWords.split("");
var letters = new Set(uniqueLetters);
var uniqueSize = letters.size;

//to be used to update figure
var incorrectCount = 0;

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

    if (incorrectWords.length === figureParts.length) {
        result.innerHTML = "You lost";
        popupDisplay();
        window.removeEventListener('keydown', check);
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
    if (event.keyCode >= 65 && event.keyCode <= 90){
        var character = event.key;
        
        if (inputWords.includes(character)) {
            
            if (!correctWords.includes(character)){
                correctWords.push(character);
                displayWord();
                
                if(uniqueSize === correctWords.length){
                    result.innerHTML = "Congratulations!!";
                    popupDisplay();
                }  
            }
            else{
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

//upon keystrokes

window.addEventListener('keydown', check);


//popup on success or failure

var popup = document.createElement("div");
popup.style = `
    background-color: #8f962a;
    padding: 20px;
    width: 30%;
    text-align: center;
    border-radius: 5px;
    color: #ffffff;
    margin: 0 auto;
    transform: translateY(-250px);     
    visibility: hidden;
`;

var result = document.createElement("h2");
result.id = "result";

var button = document.createElement("button");
button.innerHTML = "Play again";
button.style = `
    padding: 10px;
    background-color: #000000;
    color: #ffffff;
    border-radius: 5px;
`;

button.addEventListener("click", function(){
    window.location.reload();
})

popup.appendChild(result);
popup.appendChild(button);
document.body.appendChild(popup);


function popupDisplay() {
    popup.style.visibility = "visible";
}     