// npm imports
import { useState } from 'react'

// css
import styles from './NewAccommodation.module.css'

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
  return ( 
    <form className={styles.container}>
      <label htmlFor="type-input">Type</label>
        <select 
          name="type" 
          id="type-input"
          value={formData.type}
          // onChange={handleChange}
        >
          <option value="Hotel">Hotel</option>
          <option value="Cruise">Cruise</option>
          <option value="Airbnb">Airbnb</option>
          <option value="Other">Other</option>
        </select>
      <label htmlFor="Name">Name</label>
      <input 
        type="text" 
        name="Name"
        id="name-input"
        value={formData.name}
        // onChange={handleChange}
      />
      <label htmlFor="checkInDate">CheckIn Date</label>
      <input 
        required
        type="date" 
        name="checkInDate"
        id="checkInDate-input"
        value={formData.checkInDate}
        // onChange={handleChange}
      />
      <label htmlFor="checkOutDate">CheckOut Date</label>
      <input 
        type="date" 
        name="checkOutDate"
        id="checkOutDate-input"
        value={formData.checkOutDate}
        // onChange={handleChange}
      />
      <label htmlFor="address">Address</label>
      <input 
        type="text" 
        name="address"
        id="address-input"
        value={formData.address}
        // onChange={handleChange}
      />
      <label htmlFor="website">Website</label>
      <input 
        type="text" 
        name="website"
        id="website-input"
        value={formData.website}
        // onChange={handleChange}
      />
      <label htmlFor="cost">Cost</label>
      <input 
        type="text" 
        name="cost"
        id="cost-input"
        value={formData.cost}
        // onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  )
}
 
export default NewAccommodation;
