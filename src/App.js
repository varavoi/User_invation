import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Success } from './Components/Success';
import { Users } from './Components/Users/Users';


function App() {
  const [users, setUsers] = React.useState([])
  const [invites, setInites] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [searchValue, setSearchValue] = React.useState('')
React.useEffect(()=>{
  fetch('https://reqres.in/api/users').then(res=>res.json()).then(json=>{
    setUsers(json.data)
  }).catch(err=>{
    console.warn(err)
    alert('Ошибка при получении пользователей')
  }).finally(()=>setLoading(false))
},[])

const onChangeSearchValue = (event)=>{
    setSearchValue(event.target.value)
}
  return (
    <div className="App">
      <Users 
        searchValue={searchValue}  
        onChangeSearchValue={onChangeSearchValue}
        items={users} 
        isLoading={isLoading}/>
      {/* <Success/> */}
    </div>
  );
}

export default App;
