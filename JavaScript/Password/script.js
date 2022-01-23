//creating wrapper for all content

var wrapperAll = document.createElement('div');
wrapperAll.setAttribute('id', 'wrapper');
wrapperAll.setAttribute('class', 'center');

//creating heading

var heading = document.createElement('h1');
heading.innerHTML = 'Password Toggle';
wrapperAll.appendChild(heading);


// //creating email field


// var emailInput = document.createElement("input");
// emailInput.type = 'text';
// emailInput.name = 'email';
// emailInput.value = 'Enter your email here';


//creating password field


var passwordInput = document.createElement('input');
passwordInput.classList.add('pwField');
passwordInput.type = 'password';
passwordInput.name = 'password';
passwordInput.placeholder = "Enter Password";


var passwordEye = document.createElement("i");
passwordEye.className = "fa fa-eye-slash";
passwordEye.addEventListener("click", function(event){
    if(passwordInput.type == "password")
    {
        passwordInput.type = "text";
        passwordEye.className = "fa fa-eye";
    }

    else{
        passwordInput.type = "password";
        passwordEye.className = "fa fa-eye-slash";
    }
})

console.log(passwordEye);


//creating other options

var optionWrapper = document.createElement("div");
optionWrapper.classList.add('options');


//creating forgot field

var forgotOption = document.createElement('a');
forgotOption.innerHTML = "Forgot password?";
forgotOption.setAttribute('href', '#');
forgotOption.classList.add("optionOne");

//creating next field

var nextBtn = document.createElement('button');
nextBtn.classList.add("optionTwo");
nextBtn.innerHTML = "Next";
nextBtn.addEventListener('mousedown', function(event){
    nextBtn.style.backgroundColor = "#13365f";
});
nextBtn.addEventListener('mouseup', function(event){
    nextBtn.style.backgroundColor = "#3486eb";
});


optionWrapper.appendChild(forgotOption);
optionWrapper.appendChild(nextBtn);



wrapperAll.appendChild(passwordInput);
wrapperAll.appendChild(passwordEye);
wrapperAll.appendChild(optionWrapper);


console.log(wrapperAll);
document.body.appendChild(wrapperAll);