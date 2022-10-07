import React, { useState } from 'react'

function List({contacts}) {
  const [filterText,setFilter]=useState('');
 
  const filtered=contacts.filter((item)=>{
return Object.keys(item).some((key)=>
    item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
);
  })


  return (
    <div>
    <div>
        <input name="filter" onChange={(e)=>{setFilter(e.target.value)}} value={filterText}/>
    </div>
      
      <div>
      <ul className='list'>
          {filtered.map((contact,id)=>(
          <li key={id}> <span>{contact.full_name}</span><span>{contact.user_phone}</span></li>
          ))}
      </ul>
      <p>Total contacts: {filtered.length}</p>
      </div>
    </div>
  )
}

export default List