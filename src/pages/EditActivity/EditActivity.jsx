import { useState } from "react";
import {useLocation, useParams, useNavigate} from "react-router-dom"
import styles from './EditActivity.module.css'
import moment from "moment";

import * as itineraryService from '../../services/itineraryService'

const EditActivity = () => {
  const navigate = useNavigate
  const {state} = useLocation()
  const { itineraryId, activityId } = useParams()
  const [formData, setFormData] = useState(state)

const handleChange = ({target}) => {
  setFormData({...formData, [target.name]: target.value})
}
const handleSubmit = async (evt) => {
  evt.preventDefault()
    await itineraryService.updateActivity(itineraryId, activityId, formData)
    navigate(`/itineraries/${itineraryId}`)
}

return (
  <>
        <form className={`${styles.container}`} onSubmit={handleSubmit}>
          <h2>Edit Activity</h2>
          <label htmlFor="type-input">Category</label>
          <select
            name="category"
            id="type-input"
            value={formData.category}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="Activity">Activity</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Landmark">Landmark</option>
            <option value="Nightlife">Nightlife</option>
          </select>
          <label htmlFor="name">Activity</label>
          <input
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            autoComplete="off"
            onChange={handleChange}
            className={styles.input}
          />
          <label htmlFor="activityDate">Activity Date</label>
          <input
            required
            type="datetime-local"
            name="activityDate"
            id="activityDate-input"
            value={moment(formData.activityDate).format('yyyy-MM-DD HH:mm')}
            onChange={handleChange}
            className={styles.input}
          />
          <label htmlFor="activityWebsite">Activity Website</label>
          <input
            type="text"
            name="activityWebsite"
            id="activityWebsite-input"
            value={formData.activityWebsite}
            autoComplete="off"
            onChange={handleChange}
            className={styles.input}
          />
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            name="notes"
            id="notes-input"
            value={formData.notes}
            autoComplete="off"
            onChange={handleChange}
            className={styles.input}
          />
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            name="cost"
            id="cost-input"
            value={formData.cost}
            autoComplete="off"
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit">SUBMIT</button>
        </form>
  </>
);
};

export default EditActivity