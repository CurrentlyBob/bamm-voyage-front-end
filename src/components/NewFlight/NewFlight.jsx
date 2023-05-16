// npm imports
import { useState } from 'react'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import moment from "moment";

// css
import styles from './NewFlight.module.css'


const NewFlight = (props) => {
  const [showForm, setShowForm] = useState(false)
  
  const toggle = async () => {
    showForm ? setShowForm(false) : setShowForm(true)
  }
  
  const defaultDate = moment.utc(props.itineraryStart).format('yyyy-MM-DD HH:mm')

  const [formData, setFormData] = useState({
    airline: '',
    departureAirport: '',
    departureDate: defaultDate,
    arrivalAirport: '',
    arrivalDate: defaultDate,
    recordLocator: '',
    cost: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddFlight(formData)
    setFormData({
      airline: '',
      departureAirport: '',
      departureDate: defaultDate,
      arrivalAirport: '',
      arrivalDate: defaultDate,
      recordLocator: '',
      cost: '',
    })
  }

  return (
    <>
    <div>
      <FormGroup className={styles.toggleFormContainer}>
        <FormControlLabel 
        control={ <Switch 
          onChange={toggle}
          className={styles.toggle}
        />} 
        label={`${showForm? '' : 'Add Flight'}`}
        labelPlacement="top"
        className={styles.toggleContainer} />
      </FormGroup>
      { showForm 
      ? 
        <form className={`${styles.container} ${!showForm && styles.hidden}`} onSubmit={handleSubmit}>
          <h2>Flight</h2>
          {/* <label htmlFor="airline-input">Airline</label> */}
              <fieldset>
                <legend>Airline</legend>
                <input 
                  required
                  type="text" 
                  name="airline"
                  // id="airline-input"
                  autoComplete='off'
                  value={formData.airline}
                  // placeholder="Airline Name"
                  onChange={handleChange}
                  className={styles.input}
                />
              </fieldset>
              {/* <label htmlFor="departureAirport">Departure Airport</label> */}
              <fieldset>
                <legend>Departure Airport</legend>
                <input 
                  required
                  type="text" 
                  name="departureAirport"
                  // id="departureAirport-input"
                  autoComplete='off'
                  value={formData.departureAirport}
                  onChange={handleChange}
                  className={styles.input}
                />
              </fieldset>
              {/* <label htmlFor="departureDate">Departure Date</label> */}
              <fieldset>
                <legend>Departure Date</legend>
                <input 
                  type="datetime-local" 
                  name="departureDate"
                  // id="departureDate-input"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className={styles.input}
                />
              </fieldset>
              {/* <label htmlFor="arrivalAirport">Arrival Airport</label> */}
              <fieldset>
                <legend>Arrival Airport</legend>
                <input 
                  type="text" 
                  name="arrivalAirport"
                  // id="arrivalAirport-input"
                  autoComplete='off'
                  value={formData.arrivalAirport}
                  onChange={handleChange}
                  className={styles.input}
                />
              </fieldset>
              {/* <label htmlFor="arrivalDate">Arrival Date</label> */}
              <fieldset>
                <legend>Arrival Date</legend>
                <input 
                  type="datetime-local" 
                  name="arrivalDate"
                  // id="arrivalDate-input"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  className={styles.input}
                />
              </fieldset>
              {/* <label htmlFor="recordLocator">Record Locator</label> */}
              <fieldset>
                <legend>Record Locator</legend>
                <input 
                  type="text" 
                  name="recordLocator"
                  id="recordLocator-input"
                  autoComplete='off'
                  value={formData.recordLocator}
                  onChange={handleChange}
                  className={styles.input}
                />
              </fieldset>
              {/* <label htmlFor="cost">Cost</label> */}
              <fieldset>
                <legend>Cost</legend>
                <input 
                  type="text" 
                  name="cost"
                  id="cost-input"
                  autoComplete='off'
                  value={formData.cost}
                  onChange={handleChange}
                  className={styles.input}
                />
                </fieldset>
              <button type="submit">SUBMIT</button>
        </form>
      :
        <></>
      }
    </div>
  </>
  )
}

export default NewFlight

