
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Navber from './Components/Navber/Navber'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Help from './pages/Help'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Help' element={<Help/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

  return (
    <>
     <RouterProvider router={route}/>
    </>
  )
}

export default App
