document.body.style.backgroundColor = "#296ca8";
document.body.style.fontFamily = "'Roboto', sans-serif";

wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.style.width = "50%";
wrapper.style.textAlign = "center";
wrapper.style.margin = "0 auto";

let heading = document.createElement("h1");
wrapper.appendChild(heading);
heading.innerHTML = "My Blog";
heading.style.color = "#ffffff";
heading.style.margin = "25px";

let search = document.createElement("input");
search.setAttribute('type', 'text');
search.setAttribute('id', 'search');
search.setAttribute('placeholder', 'Filter posts...');
search.style.width = "100%";
search.style.height = "50px";
search.style.paddingLeft = "15px";
search.style.fontSize = "16px";
search.style.marginBottom = "16px";
search.style.boxSizing = "border-box";
wrapper.appendChild(search);

blogs = [];

for(let i = 1; i < 100; i++) {
  let blog = {
    id: i,
    title: "sunt aut facere repellat provident occaecati excepturi optio",
    content: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  };
  blogs.push(blog);
}

const blogContainer = document.createElement("div");
wrapper.appendChild(blogContainer);

function display(element){
    let eachBlog = document.createElement("div");
    blogContainer.appendChild(eachBlog);
    eachBlog.style = `
        width: 100%;
        margin: 40px 0px;
        padding: 30px 40px;
        background-color: #4992d3;
        box-sizing: border-box;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        color: #ffffff;
        text-align: left;
        position: relative;
    `;

    let blogNumber = document.createElement("div");
    eachBlog.appendChild(blogNumber);
    blogNumber.style = `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #296ca8;
    background-color: #ffffff;
    text-align: center;
    position: absolute;
    left: -15px;
    top: -20px;
    
    `;

    let blogId = document.createElement("div");
    blogId.innerHTML = element.id;
    blogNumber.appendChild(blogId);
    blogId.style = `
    position: absolute;
    top: 10px;
    left: 10px;
    `;

    let blogTitle = document.createElement("h2");
    eachBlog.appendChild(blogTitle);
    blogTitle.innerHTML = element.title;
    blogTitle.style = `
    margin-bottom: 20px;
    `;

    let blogContent = document.createElement("p");
    blogContent.innerHTML = element.content;
    eachBlog.appendChild(blogContent);  
}

blogList = [];
initialNumber = 5;

blogs.slice(0, initialNumber).forEach(element => {
    blogList.push(element);
    display(element); 
    
});

function scrollWindow(e){
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight){
        load();
    

        setTimeout(() => {
            if (initialNumber >= blogs.length) {
            loaderWrapper.innerHTML = "No more Blogs";
            return;
            }});
    }
}   

wrapper.appendChild(loaderWrapper);

function load(){
    loaderWrapper.style.visibility = "visible";
        setTimeout(()=>{
            console.log(initialNumber);
        blogs.slice(initialNumber, initialNumber+5).forEach(element => { 
            blogList.push(element);
            display(element); 
        });
        initialNumber+=5;

    },2000);
}

window.addEventListener('scroll',(e)=>{
    scrollWindow(e);
 }) 