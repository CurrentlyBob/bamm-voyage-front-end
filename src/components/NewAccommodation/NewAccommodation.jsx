// npm imports
import { useState } from 'react'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import moment from 'moment'

// css
import styles from './NewAccommodation.module.css'

const NewAccommodation = (props) => {
  const [showForm, setShowForm] = useState(false)

  const toggle = async () => {
    showForm ? setShowForm(false) : setShowForm(true)
  }

  const defaultDate = moment.utc(props.itineraryStart).format('yyyy-MM-DD HH:mm')

  const [formData, setFormData] = useState({
    type: 'Hotel',
    name: '',
    checkInDate: defaultDate,
    checkOutDate: defaultDate,
    address: '',
    website: '',
    cost: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddAccommodation(formData)
    setFormData({
      type: 'Hotel',
      name: '',
      checkInDate: defaultDate,
      checkOutDate: defaultDate,
      address: '',
      website: '',
      cost: '',
    })
  }

  return (
    <>
      <div>
        <FormGroup className={styles.toggleFormContainer}>
          <FormControlLabel
            control={<Switch onChange={toggle} className={styles.toggle} />}
            label={`${showForm ? '' : 'Add Accommodation'}`}
            labelPlacement="top"
            className={styles.toggleContainer}
          />
        </FormGroup>
        {showForm ? (
          <form className={`${styles.container} ${!showForm && styles.hidden}`} onSubmit={handleSubmit}>
            <h2>Accommodation</h2>
            <fieldset>
              <legend>Type</legend>
              <select
                name="type"
                id="type-input"
                value={formData.type}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="Hotel">Hotel</option>
                <option value="Cruise">Cruise</option>
                <option value="Airbnb">Airbnb</option>
                <option value="Other">Other</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Name</legend>
              <input
                type="text"
                name="name"
                id="name-input"
                value={formData.name}
                autoComplete="off"
                onChange={handleChange}
                className={styles.input}
                required
              />
            </fieldset>
            <fieldset>
              <legend>Check In Date</legend>
              <input
                required
                type="datetime-local"
                name="checkInDate"
                id="checkInDate-input"
                value={moment.utc(formData.checkInDate).format('yyyy-MM-DD HH:mm')}
                onChange={handleChange}
                className={styles.input}
              />
            </fieldset>
            <fieldset>
              <legend>Check Out Date</legend>
              <input
                type="datetime-local"
                name="checkOutDate"
                id="checkOutDate-input"
                value={moment.utc(formData.checkOutDate).format('yyyy-MM-DD HH:mm')}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </fieldset>
            <fieldset>
              <legend>Address</legend>
              <input
                type="text"
                name="address"
                id="address-input"
                value={formData.address}
                autoComplete="off"
                onChange={handleChange}
                className={styles.input}
              />
            </fieldset>
            <fieldset>
              <legend>Website</legend>
              <input
                type="text"
                name="website"
                id="website-input"
                value={formData.website.substring(formData.website.indexOf('/', formData.website.indexOf('/') + 1) + 1)}
                autoComplete="off"
                onChange={handleChange}
                className={styles.input}
              />
            </fieldset>
            <fieldset>
              <legend>Cost</legend>
              <input
                type="number"
                name="cost"
                id="cost-input"
                value={formData.cost}
                autoComplete="off"
                onChange={handleChange}
                className={styles.input}
                required
              />
            </fieldset>
            <button type="submit">SUBMIT</button>
          </form>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default NewAccommodation
