import { useState } from "react"
import { useLocation } from "react-router-dom"

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
            <label htmlFor="city">City</label>
            <input 
              required
              type="text" 
              name="city"
              id="city-input"
              value={formData.city}
              onChange={handleChange}
            />
            <label htmlFor="country">Country</label>
            <input 
              required
              type="text" 
              name="country"
              id="country-input"
              value={formData.country}
              onChange={handleChange}
            />
            <button type="submit">SUBMIT</button>
          </form>
        </main>
      )
    }
  

    export default EditItinerary