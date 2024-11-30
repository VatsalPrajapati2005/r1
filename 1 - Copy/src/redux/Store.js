// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";

// const store=configureStore({
//     reducer:{
//         users: userSlice
//     }
// })

// export default store


import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
export const store = configureStore({
  reducer: {
    user:userReducer
  },
})