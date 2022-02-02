document.body.style.backgroundColor = "#296ca8";
document.body.style.fontFamily = "'Roboto', sans-serif";

wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.style.width = "50%";
wrapper.style.textAlign = "center";
wrapper.style.margin = "0 auto";

var heading = document.createElement("h1");
wrapper.appendChild(heading);
heading.innerHTML = "My Blog";
heading.style.color = "#ffffff";
heading.style.margin = "25px";

var search = document.createElement("input");
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

// console.log(loaderWrapper);

const blogContainer = document.createElement("div");
wrapper.appendChild(blogContainer);

function display(element)
{
    var eachBlog = document.createElement("div");
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
    left: 15px;
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
    }
}   

wrapper.appendChild(loaderWrapper);

function load(){
    //console.log( loaderWrapper.style.visibility);
    loaderWrapper.style.visibility = "visible";
        setTimeout(()=>{
            console.log(initialNumber);
        blogs.slice(initialNumber, initialNumber+5).forEach(element => { 
            blogList.push(element);
            display(element); 
            
        });
        initialNumber+=5;

    },2000);
    //console.log(initialNumber);
}

//console.log(titleList);

window.addEventListener('scroll',(e)=>{
    scrollWindow(e);
 }) 




search = document.getElementById("search");
 const results = document.createElement("ul");
 wrapper.appendChild(results);
 let search_term = "";

const filterBlogs = () => {
    results.innerHTML = "";
    blogList.filter((item) => {
        return (
          item.title.toLowerCase().includes(search_term) ||
          item.content.toLowerCase().includes(search_term)
        );
      })
      .forEach((e) => {
        // const li = document.createElement("li");
        // // li.innerHTML = `${e.title}`;
        // results.appendChild(li);
      });
  };
  
  filterBlogs();
  
  search.addEventListener("input", (event) => {
    search_term = event.target.value.toLowerCase();
    filterBlogs();
  });
