import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
// import { addUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { adduser } from '../redux/userSlice'
const UserForm = () => {
  const {register,handleSubmit} = useForm()
  const dispatch=useDispatch()
  const redirect=useNavigate()
  function regist (data){
    // dispatch(addUser(data))
    alert("data inserted")
    console.log(data)
    dispatch(adduser(data))
    // redirect('/userlist')
  }
  return (
 <>
 <div className='col-lg-6 my-4 p-5 mx-auto shadow'>
<form action="" method='post' onSubmit={handleSubmit(regist)}>
  <div className='mt-4'>
    <input type="text" {...register('username')}className='form-control' placeholder='Enter Name' />
  </div>
  <div className='mt-4'>
    <input type="text" {...register('city')}className='form-control' placeholder='Enter Your City' />
  </div>
  <div className='mt-4'>
    <input type="text" {...register('email')}className='form-control' placeholder='Enter Email' />
  </div>
  <div className='mt-4'>
    <button className='btn btn-success width-100'>submit</button>
  </div>
 </form>
 </div>
 </>
  )
}

export default UserForm