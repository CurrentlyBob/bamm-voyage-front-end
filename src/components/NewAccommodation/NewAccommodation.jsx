// npm imports
import { useEffect, useState } from 'react'


// css
import styles from './NewAccommodation.module.css'
import { useLocation } from 'react-router-dom'
// import { useEffect } from 'react'
import * as itineraryService from '../../services/itineraryService'


const NewAccommodation = (props) => {
  const [formData, setFormData]= useState({
    type: 'Hotel',
    name: '',
    checkInDate: '',
    checkOutDate: '',
    address: '',
    website: '',
    cost: '',
  })

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddAccommodation(formData)
    setFormData({
      type: 'Hotel',
      name: '',
      checkInDate: '',
      checkOutDate: '',
      address: '',
      website: '',
      cost: '',
    })
  }

  return ( 
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Accommodation</h2>
      <label htmlFor="type-input">Type</label>
        <select 
          name="type" 
          id="type-input"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="Hotel">Hotel</option>
          <option value="Cruise">Cruise</option>
          <option value="Airbnb">Airbnb</option>
          <option value="Other">Other</option>
        </select>
      <label htmlFor="name">Name</label>
      <input 
        type="text" 
        name="name"
        id="name-input"
        value={formData.name}
        autoComplete='off'
        onChange={handleChange}
      />
      <label htmlFor="checkInDate">CheckIn Date</label>
      <input 
        required
        type="date" 
        name="checkInDate"
        id="checkInDate-input"
        value={formData.checkInDate}
        onChange={handleChange}
      />
      <label htmlFor="checkOutDate">CheckOut Date</label>
      <input 
        type="date" 
        name="checkOutDate"
        id="checkOutDate-input"
        value={formData.checkOutDate}
        onChange={handleChange}
      />
      <label htmlFor="address">Address</label>
      <input 
        type="text" 
        name="address"
        id="address-input"
        value={formData.address}
        autoComplete='off'
        onChange={handleChange}
      />
      <label htmlFor="website">Website</label>
      <input 
        type="text" 
        name="website"
        id="website-input"
        value={formData.website}
        autoComplete='off'
        onChange={handleChange}
      />
      <label htmlFor="cost">Cost</label>
      <input 
        type="text" 
        name="cost"
        id="cost-input"
        value={formData.cost}
        autoComplete='off'
        onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  )
}
 
export default NewAccommodation;