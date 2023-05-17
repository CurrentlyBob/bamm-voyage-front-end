import { useState } from "react"
import { useLocation } from "react-router-dom"
import moment from "moment"

//css
import styles from './EditItinerary.module.css'


const EditItinerary = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  console.log(state)
  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateItinerary(formData)
  }

  return (
    <main> 
      <h1 className={styles.title}>Edit Your Itinerary</h1> 
      <form onSubmit={handleSubmit} className={styles.container}>
        {/* <label htmlFor="title-input">Itinerary Name</label> */}
        <fieldset>
          <legend>Itinerary Name</legend>
          <input 
            required
            type="text" 
            name="title"
            // id="title-input"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
            autoComplete='off'
          />
        </fieldset>
        {/* <label htmlFor="imgUrl-input">Image Address URL</label> */}
        <fieldset>
          <legend>Image Address URL</legend>
          <input 
            type="text" 
            name="imgUrl"
            // id="imgUrl-input"
            value={formData.imgUrl}
            onChange={handleChange}
            className={styles.input}
            autoComplete='off'
          />
        </fieldset>
        {/* <label htmlFor="budget">Budget</label> */}
        <fieldset>
          <legend>Budget</legend>
          <input 
            type="text" 
            name="budget"
            // id="budget-input"
            value={formData.budget}
            onChange={handleChange}
            className={styles.input}
            autoComplete='off'
          />
        </fieldset>
        {/* <label htmlFor="startDate">Start Date</label> */}
        <fieldset>
          <legend>Start Date</legend>
          <input 
            type="date" 
            name="startDate"
            // id="startDate-input"
            value={formData.startDate}
            onChange={handleChange}
            className={styles.input}
          />
        </fieldset>
        {/* <label htmlFor="endDate">End Date</label> */}
        <fieldset>
          <legend>End Date</legend>
          <input 
            type="date" 
            name="endDate"
            // id="endDate-input"
            value={formData.endDate}
            onChange={handleChange}
            className={styles.input}
          />
        </fieldset>
        {/* <label htmlFor="city">City</label> */}
        <fieldset>
          <legend>City</legend>
          <input 
            required
            type="text" 
            name="city"
            // id="city-input"
            value={formData.city}
            onChange={handleChange}
            className={styles.input}
            autoComplete='off'
          />
        </fieldset>
        {/* <label htmlFor="country">Country</label> */}
        <fieldset>
          <legend>Country</legend>
          <input 
            required
            type="text" 
            name="country"
            // id="country-input"
            value={formData.country}
            onChange={handleChange}
            className={styles.input}
            autoComplete='off'
          />
        </fieldset>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}


export default EditItinerary