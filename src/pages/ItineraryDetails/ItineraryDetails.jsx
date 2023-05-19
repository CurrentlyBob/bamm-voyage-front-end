// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

// service
import * as itineraryService from '../../services/itineraryService'

// css
import styles from './ItineraryDetails.module.css'
import FlightIcon from '@mui/icons-material/Flight'
import HotelIcon from '@mui/icons-material/Hotel'
import NightlifeIcon from '@mui/icons-material/Nightlife'

// components
import NewFlight from '../../components/NewFlight/NewFlight'
import Flights from '../../components/Flights/Flights'
import Accommodations from '../../components/Accommodations/Accommodations'
import NewAccommodation from '../../components/NewAccommodation/NewAccommodation'
import TotalCost from '../../components/TotalCost/TotalCost'
import NewActivity from '../../components/NewActivity/NewActivity'
import Activities from '../../components/Activities/Activities'
import ItineraryKebabMenu from '../../components/KebabMenus/ItineraryKebabMenu'

const ItineraryDetails = (props) => {
  const { itineraryId } = useParams()
  const [itinerary, setItinerary] = useState(null)

  useEffect(() => {
    const fetchItinerary = async () => {
      const data = await itineraryService.show(itineraryId)
      setItinerary(data)
    }
    fetchItinerary()
  }, [itineraryId])

  const handleAddFlight = async (flightFormData) => {
    const newFlight = await itineraryService.createFlight(itineraryId, flightFormData)
    setItinerary({ ...itinerary, flights: [...itinerary.flights, newFlight] })
  }

  const handleDeleteFlight = async (itineraryId, flightId) => {
    await itineraryService.deleteFlight(itineraryId, flightId)
    setItinerary({ ...itinerary, flights: itinerary.flights.filter((f) => f._id !== flightId) })
  }

  const handleAddAccommodation = async (accommodationFormData) => {
    const newAccommodation = await itineraryService.createAccommodation(itineraryId, accommodationFormData)
    setItinerary({ ...itinerary, accommodations: [...itinerary.accommodations, newAccommodation] })
  }

  const handleDeleteAccommodation = async (itineraryId, accommodationId) => {
    await itineraryService.deleteAccommodations(itineraryId, accommodationId)
    setItinerary({ ...itinerary, accommodations: itinerary.accommodations.filter((a) => a._id !== accommodationId) })
  }

  const handleAddActivity = async (activityFormData) => {
    const newActivity = await itineraryService.createActivity(itineraryId, activityFormData)
    setItinerary({ ...itinerary, activities: [...itinerary.activities, newActivity] })

  }

  const handleDeleteActivity = async (itineraryId, activityId) => {
    await itineraryService.deleteActivity(itineraryId, activityId)
    setItinerary({ ...itinerary, activities: itinerary.activities.filter((a) => a._id !== activityId) })
  }

  if (!itinerary) return <h1 className={styles.loading}>Loading itineraries...</h1>

  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <h1>{itinerary.title.charAt(0).toUpperCase() + itinerary.title.slice(1)}</h1>
        {itinerary.owner._id === props.user.profile._id && (
          <ItineraryKebabMenu
            itinerary={itinerary}
            itineraryId={itineraryId}
            handleDeleteItinerary={props.handleDeleteItinerary}
          />
        )}
      </div>
      <div className={styles.cost}>
        <h3>Budget: ${itinerary.budget.toLocaleString('en-US')}</h3>
        <TotalCost itinerary={itinerary} />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>DESTINATION</th>
            <th className={styles.th}>START DATE</th>
            <th className={styles.th}>END DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>
              {itinerary.city.charAt(0).toUpperCase() + itinerary.city.slice(1)}, {itinerary.country.charAt(0).toUpperCase() + itinerary.country.slice(1)}
            </td>
            <td className={styles.td}>{moment.utc(itinerary.startDate).format('ddd MMMM Do, YYYY')}</td>
            <td className={styles.td}>{moment.utc(itinerary.endDate).format('ddd MMMM Do YYYY')}</td>
          </tr>
        </tbody>
      </table>
      <section className={styles.flightSection}>
        <h2 className={styles.flightTitle}>
          Flights
          <FlightIcon />
        </h2>
        <Flights
          flights={itinerary.flights}
          user={props.user}
          itineraryId={itineraryId}
          handleDeleteFlight={handleDeleteFlight}
        />
      </section>
      <section className={styles.accommodationSection}>
        <h2 className={styles.accommodationtTitle}>
          Accommodations
          <HotelIcon />
        </h2>
        <Accommodations
          itinerary={itinerary}
          user={props.user}
          itineraryId={itineraryId}
          handleDeleteAccommodation={handleDeleteAccommodation}
        />
      </section>
      <section className={styles.activitySection}>
        <h2 className={styles.activityTitle}>
          Activities
          <NightlifeIcon />
        </h2>
        <Activities
          itinerary={itinerary}
          user={props.user}
          itineraryId={itineraryId}
          handleDeleteActivity={handleDeleteActivity}
        />
      </section>
      <div className={styles.formData}>
        <NewFlight handleAddFlight={handleAddFlight} itineraryStart={itinerary.startDate} itineraryEnd={itinerary.endDate}/>
        <NewAccommodation handleAddAccommodation={handleAddAccommodation} itineraryStart={itinerary.startDate} />
        <NewActivity handleAddActivity={handleAddActivity} itineraryStart={itinerary.startDate} />
      </div>
    </main>
  )
}

export default ItineraryDetails
