// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addList } from "../actions/list";

// // class List extends React.Component {

// //   render() {
// //     const { list, onAdd } = this.props; //props before while on apps

// //     return (
// //       <>
// //       {/* <h1>Number of fruits = {list.length}</h1> */}
// //       <ul>
// //         {list.map((item, index) => (
// //           <li key={index}>{item}</li>
// //     ))}
// //     <button onClick={onAdd}>+</button>
// //       </ul></>
// //     );
// //   }
// // }

// function List() {
//   // const list = useSelector((state) => state);

//   // const dispatch = useDispatch();

//   // function handleListAdd() {
//   //   const enteredFruit = prompt("Enter the name of fruit");

//   //   if(!enteredFruit){
//   //     return;
//   //   }

//   //   dispatch(addList);
//   // };
    
//         return (
//           <>
//           {/* <h1>Number of fruits = {list.length}</h1> */}
//           <ul>
//             {list.map((item, index) => (
//               <li key={index}>{item}</li>
//         ))}
//         <button onClick={handleListAdd}></button>
//           </ul></>
//         );
  
// }

// export default List;

import React from "react";


class List extends React.Component {

  render() {
    const { list, onAdd } = this.props; //props before while on apps

    return (
      <>
      {/* <h1>Number of fruits = {list.length}</h1> */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
    ))}
    <button onClick={onAdd}>+</button>
      </ul></>
    );
  }
}

export default List;
