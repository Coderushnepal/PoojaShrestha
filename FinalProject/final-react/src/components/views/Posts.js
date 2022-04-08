import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";

import 'react-toastify/dist/ReactToastify.css';


function Posts() {

    const [categoryId, setCategoryId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isExclusive, setIsExclusive] = useState(false);
    const [userId, setUserId] = useState("");

    // const [status, setStatus] = useState(false);

    const history = useHistory()

  function onPost(e) {
    e.preventDefault();
    const postData = {
      categoryId: categoryId,
      title: title,
      description: description,
      isExclusive: isExclusive,
      userId: userId
    };

    axios
      .post("http://127.0.01:1234/", postData)
      .then((response) => {
        const {data} = response;
        console.log(data);

        if (data.message === "Added record successfully") {
            console.log("data.message")
            toast.success("Did it !");
            setTimeout(() => {  history.push("/"); }, 2000);
        }
        else {
            toast.error('response');
            console.log(response);  
        }


      })
      .catch((err)=> {
          console.log(err);
        toast.error('Something is wrong!');
      });
  }

  const category = useSelector((store) => store.category.list);
  console.log('category is:', category)

  

  return (
    <div>
      
        <form onSubmit={onPost}>
        <div className="formElements">
          <h2>Post to Exclusive Khabar!</h2>
          <label>Category Id: </label> <br />
          <input
            type="number"
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
            placeholder="Enter category Id"
            value={categoryId}
            name="categoryId"
            required
          />
          <br />
          <label>Title : </label> <br />
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter Title"
            value={title}
            name="title"
            required
          />
          <br />
          <label>Description : </label> <br />
          <input
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Enter Description"
            value={description}
            name="description"
            required
          />
          <br/>
          <label>Exclusive: </label>
          <input
            type="radio"
            onChange={(e) => {
              setIsExclusive(e.target.value);
            }}
            placeholder="Enter Exclusive"
            value={true}
            name="isExclusive"
            required
          />
          <br />
          <label>Not Exclusive: </label>
          <input
            type="radio"
            onChange={(e) => {
              setIsExclusive(e.target.value);
            }}
            placeholder="Enter Exclusive"
            value={false}
            name="isExclusive"
            required
          />
          <br/>
          <label>User Id : </label> <br />
          <input
            type="number"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            placeholder="Enter UserID"
            value={userId}
            name="userId"
            required
          />
          
          <br />
          <button type="submit">Post</button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            />
          
        </div>
      </form>
    </div>
  )
}

export default Posts

// import React from 'react';

// // minified version is also included
// // import 'react-toastify/dist/ReactToastify.min.css';

// function Posts(){
//   const notify = () => toast("Wow so easy !");

//   return (
//     <div>
//       <button onClick={notify}>Notify !</button>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Posts;