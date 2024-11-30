import React, { useDebugValue, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { viewUser } from '../redux/userSlice'

const SingleUser = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(()=>{
    dispatch(viewUser())
  },[dispatch])


  const {userlist} = useSelector((state)=>(state.user))
  const singleUser = userlist.find(user=>{
    return user.id == id 
  })
  useEffect(()=>{
    if(singleUser){
      console.log(singleUser)
    }
  },[singleUser])


  
  return (
    <div className="container shadow p-4">


  


      <h2 className="text-center mb-4">User Details</h2>
      {singleUser ? (
        <div>
          <p><strong>Name:</strong> {singleUser.username}</p>
          <p><strong>Email:</strong> {singleUser.email}</p>
          <p><strong>id:</strong> {singleUser.id}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default SingleUser