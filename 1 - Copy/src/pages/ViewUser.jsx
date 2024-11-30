// Shree Ganeshay namah 
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { viewUser } from "../redux/userSlice"
import { useEffect, useState } from "react"
import { deleteUser } from "../redux/userSlice"
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom"
function ViewUser(){


    const [serached,setSerached] = useState('')
    const [city,setCity] = useState('')
    const [sorted,SetSort] = useState('')
    const dispatch = useDispatch()
    const userlist = useSelector((state)=>(state.user.userlist))
    console.log(userlist)
    useEffect(()=>{
        dispatch(viewUser())
    },[dispatch])


    useEffect(()=>{
        console.log(sorted)
    },[sorted])


    function trash(id){
            dispatch(deleteUser(id))
    }

//    const filterData = userlist.filter((user)=>{
//         const upperSearch = serached.toUpperCase()
//         const userSearch = user.username.toUpperCase()
//         return userSearch.includes(upperSearch)
//    })

    const filterData = userlist
    .filter((user)=>{
        const upperSearch = serached.toUpperCase()
        const UserSearch = user.username.toUpperCase()
        return UserSearch.includes(upperSearch)
    })
    .filter((user)=>{
       return user.city.includes(city)
    })
    .sort((a,b)=>{
        if(sorted == "ASC"){
            return a.username.localeCompare(b.username)
        }else if(sorted == "DESC"){
            return b.username.localeCompare(a.username)
        }
    })


    const Citys = userlist.map((user)=>{
        return user.city
    })

    const FinalCitys = new Set(Citys)

    // console.log([...FinalCitys])

    return (
        <>
    <div className="container">
        <div className="row">
            <div className="col-lg-4 my-4">
                <input type="text" className=" form-control" onChange={(e)=>setSerached(e.target.value)}  placeholder="Enter Your Username"/>
            </div>

            <div className="col-lg-4 my-4">
                <select className=" form-control" onChange={(e)=>setCity(e.target.value)}>
                    <option selected disabled>Select City</option>
                    {
                        [...FinalCitys].map((city)=>{
                            return(
                            <option key={city} value={city}>{city}</option>
                            )
                        })
                    }
                </select>                
            </div>

            <div className=" col-lg-4 my-4">
                <select className=" form-select " onChange={(e)=>SetSort(e.target.value)}>
                    <option selected disabled>Sorting</option>
                     <option value="ASC">A-Z</option>
                     <option value="DESC">Z-A</option>
                </select>
            </div>
        </div>
    </div>

           <table className="table table-bordered table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>username</th>
          <th>City</th>
          <th>Email</th>
          <th>deleter</th>
          <th>Update</th>
          <th>SingleUser</th>
        </tr>
      </thead>
      <tbody>
       {
       filterData.map((user,index)=>{
        return(
        <tr key={index}>
        <th>{index+1}</th>
        <th>{user.username}</th>
        <th>{user.city}</th>
        <th>{user.email}</th>
        <th><button className="btn btn-danger" onClick={()=>(trash(user.id))}><MdDelete/></button></th>
        <th><NavLink className="btn btn-warning" to={`/update/${user.id}`} >Update</NavLink></th>
        <th><NavLink className="btn btn-warning" to={`/singleuser/${user.id}`} >SingleUser</NavLink></th>
      </tr>  
        )
       })
       }
      </tbody>
    </table>
        </>
    )
}

export default ViewUser