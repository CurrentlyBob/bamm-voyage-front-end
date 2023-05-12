// npm modules
import { useState } from "react";

// css
import styles from './NewItinerary.module.css'

const NewItinerary = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    budget: '',
    startDate: '',
    endDate: '',
    city: '',
    country: '',
  })
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddItinerary(formData)
  }
  
  return (
    <main>  
      <form onSubmit={handleSubmit} className={styles.container}>
          <label htmlFor="title-input">Itinerary Name</label>
          <input 
            required
            type="text" 
            name="title"
            id="title-input"
            value={formData.title}
            placeholder="Itinerary Name"
            onChange={handleChange}
          />
          <label htmlFor="budget">Budget</label>
          <input 
            type="text" 
            name="budget"
            id="budget-input"
            value={formData.budget}
            placeholder="$$"
            onChange={handleChange}
          />
          <label htmlFor="startDate">Start Date</label>
          <input 
            type="date" 
            name="startDate"
            id="startDate-input"
            value={formData.startDate}
            onChange={handleChange}
          />
          <label htmlFor="endDate">End Date</label>
          <input 
            type="date" 
            name="endDate"
            id="endDate-input"
            value={formData.endDate}
            onChange={handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </main>
    )
  }

  export default NewItinerary