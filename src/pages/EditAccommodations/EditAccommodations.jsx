import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import moment from 'moment'

import styles from './EditAccommodations.module.css'

// Services
import * as itineraryService from '../../services/itineraryService'

const EditAccommodation = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { itineraryId, accommodationId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    const { name, value } = evt.target;
  
    if (name === "cost") {
      const costValue = value.replace(/^\$|,/g, "");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: costValue,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await itineraryService.updateAccommodations(itineraryId, accommodationId, formData)
    navigate(`/itineraries/${itineraryId}`)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Edit Accommodation</h1>
          <fieldset>
            <legend>Type</legend>
            <select name="type" id="type-input" value={formData.type} onChange={handleChange} className={styles.select}>
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
            />
          </fieldset>
          <fieldset>
            <legend>CheckIn Date</legend>
            <input
              required
              type="datetime-local"
              name="checkInDate"
              value={moment.utc(formData.checkInDate).format('yyyy-MM-DD HH:mm')}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>CheckOut Date</legend>
            <input
              type="datetime-local"
              name="checkOutDate"
              id="checkOutDate-input"
              value={moment.utc(formData.checkOutDate).format('yyyy-MM-DD HH:mm')}
              onChange={handleChange}
              className={styles.input}
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
              value={formData.website}
              autoComplete="off"
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
              value={formData.cost}
              autoComplete="off"
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

export default EditAccommodation
