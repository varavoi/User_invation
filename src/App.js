import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Success } from './Components/Success';
import { Users } from './Components/Users/Users';

function App() {
  const [users, setUsers] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
React.useEffect(()=>{
  fetch('https://reqres.in/api/users').then(res=>res.json()).then(json=>{
    setUsers(json.data)
  }).catch(err=>{
    console.warn(err)
    alert('Ошибка при получении пользователей')
  })
},[])

  return (
    <div className="App">
      <Users items={users}/>
      {/* <Success/> */}
    </div>
  );
}

export default App;
