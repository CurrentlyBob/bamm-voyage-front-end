// npm modules
import { useState } from 'react'

// css
import styles from './NewItinerary.module.css'

const NewItinerary = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    imgUrl: '',
    budget: '',
    startDate: '',
    endDate: '',
    city: '',
    country: '',
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target

    if (name === 'budget') {
      const costValue = value.replace(/^\$|,/g, '')
      setFormData({ ...formData, [name]: costValue })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddItinerary(formData)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Where to Next?</h1>
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
              required
              type="number"
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
              value={formData.startDate}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </fieldset>
          <fieldset>
            <legend>End Date</legend>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className={styles.input}
              required
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

export default NewItinerary
