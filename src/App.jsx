import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import WaterRepelBackground from './components/WaterRepelBackground'

function App() {

  return (
    <>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      <Route path="/register" element={<WaterRepelBackground><Register /></WaterRepelBackground>} />
      <Route path="/login" element={<WaterRepelBackground><Login /></WaterRepelBackground>} />
      
    </Routes>
      
    </>
  )
}

export default App
