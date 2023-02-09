import React, { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const IdRef = useRef(1);
  const [user, setUser] = useState([
    { id: IdRef.current++, name: "haneef" },
    { id: IdRef.current++, name: "khan" },
  ]);
  console.log(user);
  const InputRef = useRef();

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  const addUserHandler = (e) => {
    e.preventDefault();
    setUser([...user, { id: IdRef.current++, name: InputRef.current.value }]);
    InputRef.current.value = "";
  };
  const UserList = user.map((el, i) => (
    <div key={el.id}>
      {el.id}-{el.name}
    </div>
  ));
  return (
    <div>
      <div>{UserList}</div>
      <input type="text" ref={InputRef} />
      <button onClick={addUserHandler}>Add User</button>
    </div>
  );
}

// const StopWatch = () => {
//   const [time, setTime] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime((time) => {
//         return time + 1;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return <div>Time:{time}</div>;
// };

// function App() {
//   const [names, setNames] = useState([]);
//   const [selectName, setSelectName] = useState(null);
//   useEffect(() => {
//     fetch("/names.json")
//       .then((res) => res.json())
//       .then((data) => setNames(data));
//   }, [names]);

//   const onChangeName = (user) => {
//     fetch(`/${user}.json`)
//       .then((res) => res.json())
//       .then((data) => setSelectName(data));
//   };

//   return (
//     <div>
//       {/* <div>Names:{names.join(",")}</div> */}
//       {/* <div>
//         {names.map((user, i) => (
//           <button key={i} onClick={() => onChangeName(user)}>
//             {user}
//           </button>
//         ))}
//       </div>
//       <div>{JSON.stringify(selectName)}</div> */}
//       <StopWatch />
//     </div>
//   );
// }

export default App;
