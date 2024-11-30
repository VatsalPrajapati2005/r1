// Shree Ganeshay namah 
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { redirect, useNavigate,useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateUser, viewUser } from "../redux/userSlice"
import { useSelector } from "react-redux"
function Update() {

    const { register, handleSubmit,reset } = useForm()
    const {id} = useParams()
    const redirect = useNavigate()
    const dispatch = useDispatch()

    function regist(data){
        console.log(data)
        console.log(id)
        dispatch(updateUser(data))
        redirect('/view')
    }

    const {userlist} = useSelector((state)=>(state.user))
    console.log(userlist)



    useEffect(()=>{
        dispatch(viewUser())
    },[dispatch])


    const singleUser = userlist.find((user)=>{
        return user.id == id
    })

    useEffect(()=>{
        if(singleUser){
            console.log(singleUser)
            reset(singleUser)
        }
    },[singleUser])

   

    return (
        <>
            <div className='col-lg-6 my-4 p-5 mx-auto shadow'>
                <form action="" method='post' onSubmit={handleSubmit(regist)}>
                    <div className='mt-4'>
                        <input type="text" {...register('username')} className='form-control' placeholder='Enter Name' />
                    </div>
                    <div className='mt-4'>
                        <input type="text" {...register('city')}className='form-control' placeholder='Enter Your City' />
                    </div>
                    <div className='mt-4'>
                        <input type="text" {...register('email')} className='form-control' placeholder='Enter Email' />
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-success width-100'>submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Update