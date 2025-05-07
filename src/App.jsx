import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import { RecoilRoot } from 'recoil';
import LoginPage from './Components/LoginPage';
import Email from './Components/Email';

function App() {
 

  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/email' element={<Email/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
