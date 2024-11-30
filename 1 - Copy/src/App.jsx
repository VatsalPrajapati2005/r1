import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Routers, Routes, Route  } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import UserForm from './pages/UserForm';
import ViewUser from './pages/ViewUser'
import Update from './pages/Update'
import SingleUser from './pages/SingleUser'
import GoogleAuth from './pages/GoogleAuth';
const App=()=>{
return(
  <>
<Routers>
  <Header/>
  <Routes>
    <Route path='/Form' element={<UserForm/>}></Route>
    <Route path= '/view'element={<ViewUser/>}></Route>
    <Route path='update/:id' element={<Update/>}></Route>
    <Route path='singleuser/:id' element={<SingleUser/>}></Route>
    <Route path='/googleAuth' element={<GoogleAuth/>}></Route>
  </Routes>
  <Footer/>
</Routers>
  </>
)
}
export default App