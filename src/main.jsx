import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FirebaseProvider } from './context/Firebase.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FirebaseProvider>
    <App />
    </FirebaseProvider>
  </BrowserRouter>,
)
