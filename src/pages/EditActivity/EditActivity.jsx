import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import styles from './EditActivity.module.css'
import moment from 'moment'

import * as itineraryService from '../../services/itineraryService'

const EditActivity = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { itineraryId, activityId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await itineraryService.updateActivity(itineraryId, activityId, formData)
    navigate(`/itineraries/${itineraryId}`)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={`${styles.form}`} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Edit Activity</h1>
          <fieldset>
            <legend>Type</legend>
            <select name="category" value={formData.category} onChange={handleChange} className={styles.select}>
              <option value="Activity">Activity</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Landmark">Landmark</option>
              <option value="Nightlife">Nightlife</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Name</legend>
            <input
              type="text"
              name="name"
              value={formData.name}
              autoComplete="off"
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>Activity Date</legend>
            <input
              required
              type="datetime-local"
              name="activityDate"
              value={moment.utc(formData.activityDate).format('yyyy-MM-DD HH:mm')}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>Website</legend>
            <input
              type="text"
              name="activityWebsite"
              value={formData.activityWebsite}
              autoComplete="off"
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <fieldset>
            <legend>Notes</legend>
            <input
              type="text"
              name="notes"
              value={formData.notes}
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

export default EditActivity
