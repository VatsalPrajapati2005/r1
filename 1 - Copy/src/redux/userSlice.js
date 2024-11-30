// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// var API_URL='http://localhost:5500/users'

// export const addUser=createAsyncThunk('users/addUser',async(data)=>{
//     const rse=await axios.post(API_URL,data)
//     return res.data

// })
// export const viewUser= createAsyncThunk('users/viewUser',async()=>{
//     const res= await axios.get(API_URL)
//     return res.data
// })
// export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
//     const res = await axios.delete(`${API_URL}/${id}`)
//     return res.data.id
// })

// export const updateUser = createAsyncThunk("users/updateUser",async(data)=>{
//     const{id}=data
//     const res=await axios.put(`${API_URL}/${id}`,data)
//     return res.data
// })
// const userSlice= createSlice({
//     name:'users',
//     initialState:{
//         userList:[]
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(addUser.fulfilled,(state,action)=>{
//             console.log(action.payload)
//             state.userList.push(action.payload)
//         })
//         .addCase(viewUser.fulfilled,(state,action)=>{
//             state.userList=action.payload
//         })
//         .addCase(deleteUser.fulfilled, (state, action) => {
//             const filterData = state.userList.filter((user) => {
//                 return user.id !== action.payload
//             })
//             state.userList = filterData
//         })
//         .addCase(updateUser.fulfilled,(state,action)=>{
//             const {id}=action.payload;
//             const index_number=state.userList.findIndex((user)=>{
//                 return user.id===id 
//             })
//             if(index_number!=-1){
//                 state.userList[index_number]=action.payload

//             }
//         })
//     }
// })

// export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    userlist: [],
}


export const adduser = createAsyncThunk('users/adduser', async (data) => {
    await axios.post('http://localhost:5500/users', data)
    return data
},
)

export const viewUser = createAsyncThunk('users/viewuser', async () => {
    let res = await axios.get('http://localhost:5500/users')
    return res.data
})

export const deleteUser = createAsyncThunk('users/deleteuser', async (id) => {
    await axios.delete(`http://localhost:5500/users/${id}`)
    return id
})


export const updateUser = createAsyncThunk('users/updateUser', async (data) => {
    const {id} = data
    
    let res = await axios.put(`http://localhost:5500/users/${id}`,data)
    return res.data
})


const userslice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(adduser.fulfilled, (state, action) => {

            state.userlist.push(action.payload)
        }),
            builder.addCase(viewUser.fulfilled, (state, action) => {
                state.userlist = action.payload
            }),
            builder.addCase(deleteUser.fulfilled, (state, action) => {
                let id = action.payload
                
              let filterData = state.userlist.filter(user=>{
                return user.id !== id
              })

              state.userlist = filterData
            })
            builder.addCase(updateUser.fulfilled,(state,action)=>{
                console.log(action.payload)
                const {id} = action.payload

                const findIndex = state.userlist.findIndex(user=>{
                   return  user.id == id
                })
                state.userlist[findIndex] = action.payload
            })

    },

})


export default userslice.reducer