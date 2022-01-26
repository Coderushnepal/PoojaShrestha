document.body.style.backgroundColor = "#f9fafb";
document.body.style.fontFamily = "'Open Sans', sans-serif";

var form = document.createElement("form");

form.style = `
    border: 1px solid none;
    border-radius: 4px;
    box-shadow: 0px 3px 8px 5px #d9dadb;
    margin: 0 auto;
    margin-top: 100px;
    padding: 30px 40px;
    background-color: #ffffff;
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

var formFields = [
    {
        label: "Username",
        type: "text",
        id: "username",
        placeholder: "Enter username",
        message: "Username must be at least 3 characters",
    },
    {
        label: "Email",
        type: "email",
        id: "email",
        placeholder: "Enter email",
        message: "Email is not valid",
    },
    {
        label: "Password",
        type: "password",
        id: "password",
        placeholder: "Enter password",
        message: "Password must be at least 6 characters",
    },
    {
        label: "Confirm password",
        type: "password",
        id: "password2",
        placeholder: "Enter password again",
        message: "Passwords do not match",
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

    form.appendChild(formField);
    formField.appendChild(labelField);
    formField.appendChild(inputType);
    formField.appendChild(smallMessage);

    formField.style = 
    `
        margin-bottom: 10px;
    `;

    labelField.style = 
    `
        color: #85676e;
        margin: 20px 0px;
        font-family: 'Open Sans', sans-serif;
    `;

    inputType.style = 
    `
        color: #a18b90;
        padding: 10px;
        border-radius: 3px;
        border: 2px solid #e8e1e1;
        margin-top: 10px;
        font-size: 14px;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    `;

    smallMessage.style = 
    `
        color: #ff0000;
        visibility: hidden; //visibility covers the space even if hidden
    `;   
})

//submit button 

var submit = document.createElement("button");
submit.setAttribute('type', 'button');
submit.className = "submitBtn"
submit.innerHTML = "Submit";

submit.style = `
    background-color: #3498db;
    border: none;
    width: 100%;
    box-sizing: border-box;
    color: #ffffff;
    padding: 10px;
    font-size: 17px;
    border-radius: 3px;
`;

form.appendChild(submit);

//action upon submitting

function validateForm(){

    var username = document.getElementById('username');
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    var errorUsername = document.getElementById('message-username');
    var errorEmail = document.getElementById('message-email');
    var errorPassword = document.getElementById('message-password');
    var errorPassword2 = document.getElementById('message-password2');

    //username validation

    if(username.value == "" || username.value.length < 3)
    {
        username.style.border = '2px solid red';
        errorUsername.style.visibility = "visible";
    }
    else
    {
        username.style.border = '2px solid #80e0a9';
        errorUsername.style.visibility = "hidden";
    }

    //email validation

    if(email.value == "" || emailValidator(email, errorEmail))
    {
        email.style.border = '2px solid red';
        errorEmail.style.visibility = "visible";
    }
    else
    {
        email.style.border = '2px solid #80e0a9';
        errorEmail.style.visibility = "hidden";
    }

    //password validation

    if(password.value == "" || password.value.length < 6)
    {
        password.style.border = '2px solid red';
        errorPassword.style.visibility = "visible";
    }
    else
    {
        password.style.border = '2px solid #80e0a9';
        errorPassword.style.visibility = "hidden";
    }

    //confirming password

    if(password.value == "" || password2.value != password.value)
    {
        password2.style.border = '2px solid red';
        errorPassword2.style.visibility = "visible";
    }
    else
    {
        password2.style.border = '2px solid #80e0a9';
        errorPassword2.style.visibility = "hidden";
    }
}

submit.addEventListener('click', function(event)
{
    validateForm();
});

//to check email's format

function emailValidator(inputType, errorHolder) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!mailFormat.test(inputType.value)) {
        return true;
    }
}

//changing color on input of the input box

var inputBox = document.querySelector('input');

if (inputBox.addEventListener('click'))
{
    inputBox.style.border = "2px solid #6e5e62";  
};