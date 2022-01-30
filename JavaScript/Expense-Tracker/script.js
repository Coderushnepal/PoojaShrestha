document.body.style.backgroundColor ="#f7f7f7";;
document.body.style.fontFamily = "'Lato', sans-serif";
document.body.style.margin = "0"; 
document.body.style.padding = "0"; 


var wrapper = document.createElement("div");
wrapper.className = "wrapper";
wrapper.style.margin = "0 auto";
wrapper.style.width = "25%";
document.body.appendChild(wrapper);

//heading

var heading = document.createElement("h1");
heading.innerHTML = "Expense Tracker";
heading.style = 
`
    color: #000000 ;
    fontSize: 24px ;
    fontWeight: 800 ;
    marginTop: 32px ;
    textAlign: center ;
`;
wrapper.appendChild(heading);

income = 0;
expense = 0;

//total balance display

var balance = document.createElement("div");
wrapper.appendChild(balance);

var yourBalance = document.createElement("p");
yourBalance.innerHTML = "YOUR BALANCE";
yourBalance.style.fontWeight = "bold";
yourBalance.style.fontSize = "16px";
yourBalance.style.marginBottom = "5px";
yourBalance.style.marginTop = "50px";
balance.appendChild(yourBalance);

var amount = income - expense;
console.log("Here here "+ amount);
var amountTotal = document.createElement("h2");
amountTotal.innerHTML = "$" + amount + ".00";
amountTotal.style.fontSize = "32px";
amountTotal.style.margin = "0";
balance.appendChild(amountTotal);


//income and expense display


var transaction = document.createElement("div");

transaction.style =
`
    background-color: #ffffff;
    border: 1px solid none;
    margin: 20px 0px;
    padding: 22px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;


//income block 

var incomeTransaction = document.createElement("div");
transaction.appendChild(incomeTransaction);
incomeTransaction.style = 
`
    display: inline-block;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    width: 50%;
    text-align: center;
    box-sizing: border-box;
`;


var incomeTitle = document.createElement("p");
incomeTitle.innerHTML = "INCOME";
incomeTitle.style.margin = "0px 0px 5px 0px";
incomeTitle.style.fontWeight = "bolder";
incomeTransaction.appendChild(incomeTitle);

var incomeAmount = document.createElement('span');
incomeAmount.innerHTML = "$" + income + ".00";
incomeAmount.style.fontSize = "18px";
incomeAmount.style.color = "#38cf8a";
incomeTransaction.appendChild(incomeAmount);


//expense block 

var expenseTransaction = document.createElement("div");
expenseTransaction.style = 
`
    display: inline-block;
    width: 50%;
    text-align: center;
    box-sizing: border-box;
`;
transaction.appendChild(expenseTransaction);

var expenseTitle = document.createElement("p");
expenseTitle.innerHTML = "EXPENSE";
expenseTitle.style.margin = "0px 0px 5px 0px";
expenseTitle.style.fontWeight = "bolder";
expenseTransaction.appendChild(expenseTitle);

var expenseAmount = document.createElement('span');
expenseAmount.innerHTML = "$" + expense + ".00";
expenseAmount.style.fontSize = "18px";
expenseAmount.style.color = "#c23f2b";
expenseTransaction.appendChild(expenseAmount);


//float

var float = document.createElement("div");
float.style.float = "clear";
expenseTransaction.appendChild(float);

wrapper.appendChild(transaction);


//History

var historyWrapper = document.createElement("div");
wrapper.appendChild(historyWrapper);

var historyTitle = document.createElement("p");
historyTitle.innerHTML = "History";
historyWrapper.appendChild(historyTitle);


//Adding new transaction

var newTransaction = document.createElement("div");
wrapper.appendChild(newTransaction);


var newTransactionTitle = document.createElement("p");
newTransactionTitle.innerHTML = "Add new transaction";
newTransaction.appendChild(newTransactionTitle);


//common style for history and new transaction title

var commonStyle = [historyTitle, newTransactionTitle];

commonStyle.forEach(function (item) {
    item.style.borderBottom= "1px solid #c2c2c2";
    item.style.padding= "20px 0px 10px 0px"; 
    item.style.fontWeight= "bolder";
    item.style.fontSize= "20px";
    item.style.margin= "0";
    item.style.marginBottom= "20px";
 });


//input form
var transactionForm = document.createElement("div");
newTransaction.appendChild(transactionForm);

var formFields = [
    {
        label: "Text",
        type: "text",
        id: "text",
        placeholder: "Enter text...",
        message: "Text field looks empty"
    },
    {
        label: "Amount <br/>(negative - expense, positive - income)",
        type: "number",
        id: "amount",
        placeholder: "Enter amount...",
        message: "Amount field looks empty"
    },
]

formFields.forEach(function (value) {
    var formField = document.createElement("div");
    formField.className = "formfield";

    var labelField = document.createElement("label");
    labelField.innerHTML = value.label;

    var inputType = document.createElement("input");
    inputType.type = value.type;
    inputType.id = value.id;
    inputType.placeholder = value.placeholder;

    var smallMessage = document.createElement("small");
    smallMessage.innerHTML = value.message;
    smallMessage.id = "message-" + value.id;
    

    transactionForm.appendChild(formField);
    formField.appendChild(labelField);
    formField.appendChild(inputType);
    formField.appendChild(smallMessage);

    formField.style = 
    `
        margin-bottom: 10px;
    `;

    labelField.style = 
    `
        color: #000000;
        margin: 20px 0px;
        font-size: 16px;
    `;

    inputType.style = 
    `
        color: #a18b90;
        padding: 10px;
        border-radius: 3px;
        border: 2px solid #e8e1e1;
        margin-top: 10px;
        font-size: 16px;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    `;
    
    smallMessage.style = 
    `
        color: #ff0000;
        visibility: hidden; //visibility covers the space even if hidden
    `;  
});


//submit button 

var submit = document.createElement("button");
submit.setAttribute('type', 'button');
submit.innerHTML = "Add transaction";

submit.style = `
    background-color: #9c88ff;
    border: none;
    width: 100%;
    box-sizing: border-box;
    color: #ffffff;
    padding: 10px;
    margin-bottom: 50px;
    font-size: 17px;
    border-radius: 3px;
`;

transactionForm.appendChild(submit);


//Display 

function display(){

    var historyData = document.createElement("div");
    historyWrapper.appendChild(historyData);
    
    var historyEach = document.createElement("div");
    historyEach.id = "historyBox";
    historyData.appendChild(historyEach);

    var button = document.createElement("button");
    historyData.appendChild(button);
    button.innerHTML = "X";
    button.style = 
    `
        background-color: red;
        color: white;
        border: none;
        position: relative;
        top: -30px;
        left: -22px;
        padding: 5px;
        opacity: 0;
        
    `;

    button.addEventListener('mouseover', e =>
    {
        button.style.opacity = "3";
        button.style.transition= "opacity 0.3s ease";
    })

    button.addEventListener('mouseout', e =>
    {
        button.style.opacity = "0";
    })

    historyEach.style =
    `
        background-color: #ffffff;
        border: 1px solid none;
        padding: 10px 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    `;

    if(amount.value > 0){
        historyEach.style.borderRight = "5px solid #38cf8a";
    }
    else{
        historyEach.style.borderRight = "5px solid #c23f2b";
    }

    let transactionData = [];
    transactionData.push({
         text: text,
         amount: amount,
    });


    historyEach.innerHTML = 
    `
    ${transactionData.map(letter => 
        `
            <span class="left">
            ${letter.text.value}
            </span>

            <span class="right">
            ${letter.amount.value}
            </span>
        `
        )
    }
    `;   

    //event on button clicl (removes element)
    
    button.addEventListener('click', function(e){

        let value = e.target.parentElement.querySelector('.right').innerHTML;
            console.log(value);
            if (value < 0) {
                expense -= value;
                expenseAmount.innerHTML = "$" + -expense + ".00";
            } else {
                income -= value;
                incomeAmount.innerHTML = "$" + income + ".00";
            }
            amount -= value;
            amountTotal.innerHTML = "$" + amount + ".00";
            e.target.parentElement.remove();
        });
        text.value = "";
        amount.value = "";
}


//onclick function

submit.addEventListener('click', function(e)
{
    text = document.getElementById('text');
    amount = document.getElementById('amount');
    errorText = document.getElementById('message-text');
    errorAmount = document.getElementById('message-amount');
    historyColor = document.getElementById('historyEach');

    amountValue = amount.value;
    amountValue = parseInt(amountValue);
 
    var amountString = amountValue.toString();
    var amountSplit = amountString.split('');
    var amountSign = amountSplit[0];


    if(text.value == ""){
        invalidate(errorText);
    }
    else{
        validate(errorText);
    }

    if(amount.value == ""){
        invalidate(errorAmount);
    }   
    else{
        validate(errorAmount);
    }


    if(text.value == "" || amount.value == ""){
        income = 0;
        expense = 0;
    }
    
    else{
        
        if(amountSign === '-'){

            expense += amountValue;
            console.log("Expense: " + expense);
            expenseAmount.innerHTML = "$" + -expense + ".00";
            display();
        }
        else{
            income += amountValue;
            incomeAmount.innerHTML = "$" + income + ".00";
            console.log("Income 2 : " + income);
            display();
    
        }

        amount = income + expense;
        amountTotal.innerHTML = "$" + amount + ".00";
    }
});

function validate(value)
{
    value.style.visibility = "hidden";
}

function invalidate(value)
{
    value.style.visibility = "visible";
}