import React, { useEffect, useState } from 'react'
import './styles.css'
import List from './List'
import Form from './Form'
function Contacts() {
  const [contacts,setContacts]=useState([
    {
      full_name:"Murat",
      user_phone:"1"
    },
    {
      full_name:"Mete",
      user_phone:"2"
    },
    {
      full_name:"Tülay",
      user_phone:"4"
    }
  ]);
  useEffect(()=>{
    console.log(contacts)
  },[contacts])
  return (
   <div id="container">
    <h1>Contacts</h1>
    <List  contacts={contacts}/>
    <Form addContact={setContacts} currentContacts={contacts}/>
   </div>
  )
}

export default Contacts