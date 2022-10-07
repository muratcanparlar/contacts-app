import React, { useEffect, useState } from 'react'

const intialValue={full_name:'',user_phone:''};

function Form({addContact,currentContacts}) {
   
   const[form,setForm]=useState(intialValue);
   const onChangeInput=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
   }
   useEffect(()=>{
    setForm(intialValue);
   },[currentContacts]);
   const onSubmit=(e)=>{
    e.preventDefault();
    if(form.full_name==='' || form.user_phone===''){
        return false;
    }
    addContact([...currentContacts,form]);
   

   }
  return (
    <>
    <form>
        <div><input name="full_name" placeholder='full name' onChange={onChangeInput} value={form.full_name}/></div>
        <div><input name="user_phone" placeholder='phone number' onChange={onChangeInput} value={form.user_phone}/></div>
        <div className='btn'>
            <button onClick={onSubmit}>Add</button>
        </div>
    </form>
    </>
  )
}

export default Form