








/*NOTE: 
This file is not used in the program. This is for future reference.*/











//document.body.style.alignItems = "center";
document.body.style.backgroundColor = "#f9fafb";
document.body.style.fontFamily = "'Open Sans', sans-serif";


var form = document.createElement("form");
//Form
// var form = document.createElement("form");
// box.appendChild(form);

form.style = `
    border: 1px solid none;
    border-radius: 4px;
    box-shadow: 0px 3px 8px 5px #d9dadb;
    margin: 0 auto;
    margin-top: 100px;
    padding: 30px 40px;
    background-color: #ffffff;
    width: 25%;
`;

document.body.appendChild(form);

var heading = document.createElement("h2");
heading.innerHTML = "Register With Us";

heading.style = `
    font-size: 26px;
    text-align: center;
    font-weight: 600;
    box-sizing: border-box;
    margin: 0px 0px 20px 0px;

`;

form.appendChild(heading);




//name field

var nameField = document.createElement("div");
nameField.innerHTML = "Username"
form.appendChild(nameField);

var userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.className = "inputDemo";
userName.placeholder = "Enter username";
nameField.appendChild(userName);

var smallUser = document.createElement("small");
smallUser.innerHTML = "Username must be at least 3 characters";
nameField.appendChild(smallUser);

//email field

var emailField = document.createElement("div");
emailField.innerHTML = "Email"
form.appendChild(emailField);

var email = document.createElement("input");
email.setAttribute("type", "email");
email.className = "inputDemo";
email.placeholder = "Enter email";
emailField.appendChild(email);

var smallEmail = document.createElement("small");
smallEmail.innerHTML = "Email is not valid";
emailField.appendChild(smallEmail);

//password field

var passwordField = document.createElement("div");
passwordField.innerHTML = "Password"
form.appendChild(passwordField);

var password = document.createElement("input");
password.setAttribute("type", "password");
password.placeholder = "Enter password";
passwordField.appendChild(password);

var smallPW = document.createElement("small");
smallPW.innerHTML = "Password must be at least 6 characters";
passwordField.appendChild(smallPW);

//confirm password field

var passwordField2 = document.createElement("div");
passwordField2.innerHTML = "Confirm Password"
form.appendChild(passwordField2);

var password2 = document.createElement("input");
password2.setAttribute("type", "password");
password2.placeholder = "Enter password again";
passwordField2.appendChild(password2);

var smallPW2 = document.createElement("small");
smallPW2.innerHTML = "Password2 is required";
passwordField2.appendChild(smallPW2);

//field styling

const arrayField = [nameField, emailField, passwordField, passwordField2];

arrayField.forEach(function (item) {
   item.style.color = "#85676e";
   item.style.marginBottom = "20px";
    
});

const arrayInput = [userName, email, password, password2];

arrayInput.forEach(function (item) {
   item.style.color = "#a18b90";
   item.style.padding= "10px";
   item.style.borderRadius = "3px";
   item.style.border= "2px solid #e8e1e1";
   item.style.margin= "10px 0px 5px";
   item.style.fontSize= "14px";
   item.style.width= "100%";
   item.style.padding= "10px";
   item.style.boxSizing= "border-box";
    
});

const arraySmall = [smallUser, smallEmail, smallPW, smallPW2];

arraySmall.forEach(function (item) {
    item.style.color = "#ff0000";
    item.style.display = "none";
});




//submit button 

var submit = document.createElement("button");
submit.setAttribute('type', 'button');
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

function validateForm(){


    if(userName.value == "" || userName.value.length < 3)
    {
        inValidate();
    }

    else
    {
        validate();
    }

    if(email.value == "")
    {
        inValidate();
    }

    else
    {
        validate();
    }

    if(password.value == "" || password.length < 6)
    {
        inValidate();
    }

    else
    {
        validate();
    }

    if(password2.value != password.value)
    {
        inValidate();
    }

    else
    {
        validate();
    }

}

submit.addEventListener('click', function(event)
{
    // event.preventDefault();
    validateForm();
});





//validate input

function validate()
{
    var inputField = document.querySelector('.inputDemo');
    inputField.style.border = '2px solid #80e0a9';



    // document.querySelectorAll('input').forEach(function(element) {
    //     element.style.border = '2px solid #80e0a9';
    // });

    // document.querySelectorAll('small').forEach(function(element) {
    //     element.style.display = 'none';
    // });

    var smallInput = document.querySelector('small');
    smallInput.style.display = "none";
}

// document.querySelectorAll('.example').forEach(function(element) {
//     element.style.display = 'none';
//   });

//input not valid

function inValidate()
{
    var inputField = document.querySelector('.inputDemo');
    inputField.style.border = '2px solid #e74c3c';

    var smallInput = document.getElementsByTagName('small');
    smallInput.style.display = "block";

    // document.querySelectorAll('input').forEach(function(element) {
    //     element.style.border = '2px solid #e74c3c';
    // });

    // document.querySelectorAll('small').forEach(function(element) {
    //     element.style.display = 'block';
    // });

}
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);

//changing color on input

var inputBox = document.querySelector('input');

if (inputBox.addEventListener('click'))
{
    inputBox.style.border = "2px solid #6e5e62";  
};