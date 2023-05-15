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
      { showForm 
      ? 
        <form className={styles.container} onSubmit={handleSubmit}>
          <h2>Flight</h2>
          <label htmlFor="airline-input">Airline</label>
              <input 
                required
                type="text" 
                name="airline"
                id="airline-input"
                value={formData.airline}
                placeholder="Airline Name"
                onChange={handleChange}
              />
              <label htmlFor="roundtrip">Roundtrip?</label>
              <input 
                type="checkbox" 
                name="roundtrip"
                id="roundtrip-input"
                checked={formData.roundtrip}
                onChange={handleChange}
              />
              <label htmlFor="departureAirport">Departure Airport</label>
              <input 
                required
                type="text" 
                name="departureAirport"
                id="departureAirport-input"
                value={formData.departureAirport}
                onChange={handleChange}
              />
              <label htmlFor="departureDate">Departure Date</label>
              <input 
                type="date" 
                name="departureDate"
                id="departureDate-input"
                value={formData.departureDate}
                onChange={handleChange}
              />
              <label htmlFor="arrivalAirport">Arrival Airport</label>
              <input 
                type="text" 
                name="arrivalAirport"
                id="arrivalAirport-input"
                value={formData.arrivalAirport}
                onChange={handleChange}
              />
              <label htmlFor="arrivalDate">Arrival Date</label>
              <input 
                type="date" 
                name="arrivalDate"
                id="arrivalDate-input"
                value={formData.arrivalDate}
                onChange={handleChange}
              />
              <label htmlFor="recordLocator">Record Locator</label>
              <input 
                type="text" 
                name="recordLocator"
                id="recordLocator-input"
                value={formData.recordLocator}
                onChange={handleChange}
              />
              <label htmlFor="cost">Cost</label>
              <input 
                type="text" 
                name="cost"
                id="cost-input"
                value={formData.cost}
                onChange={handleChange}
              />
              <button type="submit">SUBMIT</button>
        </form>
      :
        <></>
      }
      <FormGroup className={styles.toggleContainer}>
        <FormControlLabel 
        control={ <Switch 
          onChange={toggle}
          className={styles.toggle}
        />} 
        label={`${showForm? '' : 'Add Flight'}`}
        labelPlacement="top" />
      </FormGroup>
    </>
  )
}

export default NewFlight

