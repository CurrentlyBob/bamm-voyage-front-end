import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import moment from 'moment'

//css
import styles from './EditItinerary.module.css'

const EditItinerary = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateItinerary(formData)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Edit Itinerary</h1>
          <fieldset>
            <legend>Itinerary Name</legend>
            <input
              required
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.input}
              autoComplete="off"
            />
          </fieldset>
          <fieldset>
            <legend>Image Address URL</legend>
            <input
              type="text"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleChange}
              className={styles.input}
              autoComplete="off"
            />
          </fieldset>
          <fieldset>
            <legend>Budget</legend>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={styles.input}
              autoComplete="off"
            />
          </fieldset>
          <fieldset>
            <legend>Start Date</legend>
            <input
              type="date"
              name="startDate"
              value={moment.utc(formData.startDate).format('yyyy-MM-DD')}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>End Date</legend>
            <input
              type="date"
              name="endDate"
              value={moment.utc(formData.endDate).format('yyyy-MM-DD')}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>City</legend>
            <input
              required
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={styles.input}
              autoComplete="off"
            />
          </fieldset>
          <fieldset>
            <legend>Country</legend>
            <input
              required
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={styles.input}
              autoComplete="off"
            />
          </fieldset>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </main>
  )
}

export default EditItinerary
