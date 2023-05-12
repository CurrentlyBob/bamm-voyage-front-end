// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Itineraries from './pages/Itineraries/Itineraries'
import ItineraryDetails from './pages/ItineraryDetails/ItineraryDetails'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import NewItinerary from './pages/NewItinerary/NewItinerary'
// services
import * as authService from './services/authService'
import * as itineraryService from './services/itineraryService'

// styles
import './App.css'


function App() {
  const [user, setUser] = useState(authService.getUser())
  const [itineraries, setItineraries] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddItinerary = async (itineraryFormData) => {
    const newItinerary = await itineraryService.create(itineraryFormData)
    setItineraries([newItinerary, ...itineraries])
    navigate('/itineraries')
  }

  useEffect(() => {
    const fetchItineraries = async () => {
      const data = await itineraryService.index()
      setItineraries(data)
    }
    if (user) fetchItineraries()
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/itineraries"
          element = {
            <ProtectedRoute user={user}>
              <Itineraries itineraries={itineraries}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/itineraries/:itineraryId"
          element = {
            <ProtectedRoute user={user}>
              <ItineraryDetails user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/itineraries/new"
          element = {
            <ProtectedRoute user={user}>
              <NewItinerary handleAddItinerary={handleAddItinerary}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
