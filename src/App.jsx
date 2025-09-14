import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import LoginPage from './Components/LoginPage';
import Email from './Components/Email';
import Profile from './Components/Profile';

function App() {
 

  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/email' element={<Email/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
