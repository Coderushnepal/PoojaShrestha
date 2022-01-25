//document.body.style.alignItems = "center";
document.body.style.backgroundColor = "#f9fafb";
document.body.style.fontFamily = "'Open Sans', sans-serif";


var box = document.createElement("div");

box.style = `
    border: 1px solid none;
    border-radius: 4px;
    box-shadow: 0px 3px 8px 5px #d9dadb;
    margin: 0 auto;
    margin-top: 100px;
    padding: 30px 40px;
    background-color: #ffffff;
    width: 25%;
`;

document.body.appendChild(box);

var heading = document.createElement("h2");
heading.innerHTML = "Register With Us";

heading.style = `
    font-size: 26px;
    text-align: center;
    font-weight: 600;
    box-sizing: border-box;
    margin: 0px 0px 20px 0px;

`;

box.appendChild(heading);


//Form
var form = document.createElement("form");
form.setAttribute("action", "/");
form.setAttribute("method", "GET");
form.setAttribute("name", "formName");
box.appendChild(form);



var nameField = document.createElement("div");
nameField.className = "labels";
nameField.innerHTML = "Username"
form.appendChild(nameField);

var userName = document.createElement("input");
userName.className = "fields"
userName.setAttribute("type", "text");
userName.placeholder = "Enter username";
nameField.appendChild(userName);


// const label = document.querySelector("div.labels");

// label.style = `
//     color: #85676e;
//     margin-bottom: 10px;
// `;
// form.appendChild(label);

var field = document.querySelector('.fields');
field.style = `
    color: #a18b90;
    padding: 10px;
    border-radius: 3px;
    border: 2px solid #e8e1e1;
    margin: 10px 0px 5px;
    font-size: 14px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;



var smallUser = document.createElement("small");
smallUser.innerHTML = "Username must be at least 3 characters";

nameField.appendChild(smallUser);
smallUser.style.color = "#ff0000";
smallUser.style.display = "none";

//nameField ended


//Email

var emailField = document.createElement("div");
emailField.className = "labels";
emailField.innerHTML = "Email"
form.appendChild(emailField);

// var email = document.createElement("input");
// email.className = "fields";
// email.setAttribute("type", "email");
// email.placeholder = "Enter email";
// nameField.appendChild(email);


const label = document.querySelector(".labels");

label.style = `
    color: #85676e;
    margin-bottom: 10px;
`;
form.appendChild(label);

//submit button 

var submit = document.createElement("button");
submit.innerHTML = "Submit";

submit.style = `
    background-color: #3498db;
    border: none;
    width: 100%;
    box-sizing: border-box;
    color: #ffffff;
    padding: 10px;
    font-size: 15px;
    border-radius: 3px;
`;

form.appendChild(submit);

//submit button ended



//action upon submitting

submit.addEventListener('click', function(event){


    if(userName.value == "" || userName.value.length < 3)
    {
        inValidate();
    }

    else
    {
        validate();
    }

});



//changing color on input

var inputBox = document.querySelector('input');

if (inputBox.addEventListener('click'))
{
    inputBox.style.border = "2px solid #6e5e62";  
};

//validate input

function validate()
{
    var inputField = document.querySelector('input');
    inputField.style.border = '2px solid #80e0a9';

    var smallInput = document.querySelector('small');
    smallInput.style.display = "none";
}

//input not valid

function inValidate()
{
    var inputField = document.querySelector('input');
    inputField.style.border = '2px solid #e74c3c';

    var smallInput = document.querySelector('small');
    smallInput.style.display = "block";
}

