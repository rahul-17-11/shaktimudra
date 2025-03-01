import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import YogaAsanas from './components/YogaAsanas'
import WaterRepelBackground from './components/WaterRepelBackground'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
    <WaterRepelBackground>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<WaterRepelBackground><Login /></WaterRepelBackground>} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
    </WaterRepelBackground>
      
    </>
  )
}

export default App
