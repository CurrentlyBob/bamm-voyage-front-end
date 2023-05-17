// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Itineraries from './pages/Itineraries/Itineraries'
import ItineraryDetails from './pages/ItineraryDetails/ItineraryDetails'
import EditItinerary from './pages/EditItinerary/EditItinerary'
import NewItinerary from './pages/NewItinerary/NewItinerary'
import EditFlight from './pages/EditFlight/EditFlight'
import EditAccommodation from './pages/EditAccommodations/EditAccommodations'
import EditActivity from './pages/EditActivity/EditActivity'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


// services
import * as authService from './services/authService'
import * as itineraryService from './services/itineraryService'

// styles
import './App.css'




function App() {
  const [user, setUser] = useState(authService.getUser())
  const [itineraries, setItineraries] = useState([])
  // const [itinerary, setItinerary] = useState(null)
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleChangePassword= () => {
    navigate('/auth/change-password')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddItinerary = async (itineraryFormData) => {
    const newItinerary = await itineraryService.create(itineraryFormData)
    setItineraries([newItinerary, ...itineraries])
    navigate('/itineraries')
  }
  const handleUpdateItinerary = async (itineraryFormData) => {
    const updatedItinerary = await itineraryService.update(itineraryFormData)
    setItineraries(itineraries.map((b) => itineraryFormData._id === b._id ? updatedItinerary : b))
    navigate('/itineraries')
  }
  
  const handleDeleteItinerary = async (itineraryId) => {
    const deletedItinerary = await itineraryService.deleteItinerary(itineraryId)
    setItineraries(itineraries.filter(itin => itin._id !== deletedItinerary._id))

    navigate('/itineraries')
  }

  const handleUpdateActivity = async (itineraryFormData) => {
    const updatedItinerary = await itineraryService.update(itineraryFormData)
    setItineraries(itineraries.map((b) => itineraryFormData._id === b._id ? updatedItinerary : b))
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
      <NavBar user={user} handleLogout={handleLogout} handleChangePassword={handleChangePassword}/>
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
              <ItineraryDetails user={user} handleDeleteItinerary={handleDeleteItinerary}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/itineraries/:itineraryId/flights/:flightId"
          element = {
            <ProtectedRoute user={user}>
              <EditFlight />
            </ProtectedRoute>
          }
        />
        <Route
          path="/itineraries/:itineraryId/accommodations/:accommodationId"
          element = {
            <ProtectedRoute user={user}>
              <EditAccommodation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/itineraries/:itineraryId/activities/:activityId"
          element = {
            <ProtectedRoute user={user}>
              <EditActivity user={user} handleUpdateActivity={handleUpdateActivity}/>
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
          path="/itineraries/:itineraryId/edit" 
          element={
            <ProtectedRoute user={user}>
              <EditItinerary handleUpdateItinerary={handleUpdateItinerary} />
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
