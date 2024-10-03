import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Success } from './Components/Success';
import { Users } from './Components/Users/Users';


function App() {
  const [users, setUsers] = React.useState([])
  const [invites, setInvites] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [searchValue, setSearchValue] = React.useState('')
  const [success, setSuccess] = React.useState(false)
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

const onClickInvite = (id)=>{
  if(invites.includes(id)){
    setInvites(prev=>prev.filter(_id=>_id!==id))
  }
  else{
    setInvites(prev=>[...prev,id])
  }
}
 const onClickSendInvites = ()=>{
    setSuccess(true)
 }
  return (
    <div className="App">
      {success?<Success/>:
      <Users 
        searchValue={searchValue}  
        onChangeSearchValue={onChangeSearchValue}
        items={users} 
        isLoading={isLoading}
        invites={invites}
        onClickInvite={onClickInvite}
        onClickSendInvites= {onClickSendInvites}
        />
      }
      {/* <Success/> */}
    </div>
  );
}

export default App;
