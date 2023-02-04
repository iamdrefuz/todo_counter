import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes ,Link } from 'react-router-dom'
import Todo from './components/Todo'
import Counter from './components/Counter/Counter'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
           <Routes>  
           <Route path="/" element={<Home/>}></Route>
           <Route path="/counter" element={<Counter/>}></Route>
           <Route path='/todo' element={<Todo/>}></Route>
           </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
