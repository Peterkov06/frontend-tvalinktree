
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import UserPage from './pages/UserPage'
import SlugContextProvider from './context/SlugContextProvider'
import Login from './pages/Login'

function App() {

  return (
    <>
      <SlugContextProvider>
        <BrowserRouter>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/login'}>Log in</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/u/:username' element={<UserPage></UserPage>}></Route>
        </Routes>
        </BrowserRouter>
      </SlugContextProvider>
    </>
  )
}

export default App
