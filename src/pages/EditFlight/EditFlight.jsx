//services
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import * as itineraryService from '../../services/itineraryService'
import { useState } from 'react'
import moment from 'moment'

import styles from './EditFlight.module.css'

const EditFlight = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { itineraryId, flightId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    const { name, value } = evt.target

    if (name === 'cost') {
      const costValue = value.replace(/^\$|,/g, '')
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: costValue,
      }))
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await itineraryService.updateFlight(itineraryId, flightId, formData)
    navigate(`/itineraries/${itineraryId}`)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Edit Flight</h1>
          <fieldset>
            <legend>Airline</legend>
            <input
              required
              type="text"
              name="airline"
              autoComplete="off"
              value={formData.airline}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>Departure Airport</legend>
            <input
              required
              type="text"
              name="departureAirport"
              autoComplete="off"
              value={formData.departureAirport}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>Departure Date</legend>
            <input
              type="datetime-local"
              name="departureDate"
              value={moment.utc(formData.departureDate).format('yyyy-MM-DD HH:mm')}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>Arrival Airport</legend>
            <input
              type="text"
              name="arrivalAirport"
              autoComplete="off"
              value={formData.arrivalAirport}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>Arrival Date</legend>
            <input
              type="datetime-local"
              name="arrivalDate"
              value={moment.utc(formData.arrivalDate).format('yyyy-MM-DD HH:mm')}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>Record Locator</legend>
            <input
              type="text"
              name="recordLocator"
              id="recordLocator-input"
              autoComplete="off"
              value={formData.recordLocator}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>Cost</legend>
            <input
              type="text"
              name="cost"
              id="cost-input"
              autoComplete="off"
              value={formData.cost}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </main>
  )
}

export default EditFlight
