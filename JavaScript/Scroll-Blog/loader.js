// function loader(){

loaderWrapper = document.createElement("div");
// wrapper.appendChild(loaderWrapper);
loaderWrapper.classList.add('loading');
    loaderWrapper.style = `
        margin: 0 auto;
        margin-bottom: 30px;
        align-items: center;
        visibility: hidden;
    `;

    var firstCircle = document.createElement("div");
    firstCircle.classList.add('first', 'ball');

    var secondCircle = document.createElement("div");
    secondCircle.classList.add('second', 'ball');

    var thirdCircle = document.createElement("div");
    thirdCircle.classList.add('third', 'ball');

    loaderWrapper.appendChild(firstCircle);
    loaderWrapper.appendChild(secondCircle);
    loaderWrapper.appendChild(thirdCircle);
