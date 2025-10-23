import { Routes, Route } from 'react-router-dom'
import './App.css'
import WelcomePage from './Pages/Welcome/welcomePage'
import HomePage from './Pages/Home/homePage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<WelcomePage/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
    </>
  )
}

export default App
