// npm imports
import { useState } from 'react'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


// css
import styles from './NewFlight.module.css'


const NewFlight = (props) => {
  const [showForm, setShowForm] = useState(false)
  
  const toggle = async () => {
    showForm ? setShowForm(false) : setShowForm(true)
  }


  const [formData, setFormData] = useState({
    airline: '',
    roundtrip: true,
    departureAirport: '',
    arrivalAirport: '',
    arrivalDate: '',
    recordLocator: '',
    cost: '',
  })

  const handleChange = (evt) => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
    setFormData({ ...formData, [evt.target.name]: value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddFlight(formData)
    setFormData({
      airline: '',
      roundtrip: true,
      departureAirport: '',
      departureDate: '',
      arrivalAirport: '',
      arrivalDate: '',
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
        <label htmlFor="airline-input">Airline</label>
            <input 
              required
              type="text" 
              name="airline"
              id="airline-input"
              autoComplete='off'
              value={formData.airline}
              placeholder="Airline Name"
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="roundtrip">Roundtrip?</label>
            <input 
              type="checkbox" 
              name="roundtrip"
              id="roundtrip-input"
              checked={formData.roundtrip}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="departureAirport">Departure Airport</label>
            <input 
              required
              type="text" 
              name="departureAirport"
              id="departureAirport-input"
              autoComplete='off'
              value={formData.departureAirport}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="departureDate">Departure Date</label>
            <input 
              type="datetime-local" 
              name="departureDate"
              id="departureDate-input"
              value={formData.departureDate}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="arrivalAirport">Arrival Airport</label>
            <input 
              type="text" 
              name="arrivalAirport"
              id="arrivalAirport-input"
              autoComplete='off'
              value={formData.arrivalAirport}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="arrivalDate">Arrival Date</label>
            <input 
              type="datetime-local" 
              name="arrivalDate"
              id="arrivalDate-input"
              value={formData.arrivalDate}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="recordLocator">Record Locator</label>
            <input 
              type="text" 
              name="recordLocator"
              id="recordLocator-input"
              autoComplete='off'
              value={formData.recordLocator}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="cost">Cost</label>
            <input 
              type="text" 
              name="cost"
              id="cost-input"
              autoComplete='off'
              value={formData.cost}
              onChange={handleChange}
              className={styles.input}
            />
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

