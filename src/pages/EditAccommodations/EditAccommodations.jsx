import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from './EditAccommodations.module.css'

// Services
import * as itineraryService from '../../services/itineraryService'


const EditAccommodation = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const { itineraryId, accommodationId } = useParams()
    const [formData, setFormData] = useState(state)

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        await itineraryService.updateAccommodations(itineraryId, accommodationId, formData)
        navigate(`/itineraries/${itineraryId}`)
    }
    
    return ( 
        <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Edit Accommodation</h2>
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
        type="datetime-local" 
        name="checkInDate"
        id="checkInDate-input"
        value={formData.checkInDate ? formData.checkInDate : ''}
        onChange={handleChange}
      />
      <label htmlFor="checkOutDate">CheckOut Date</label>
      <input 
        type="datetime-local" 
        name="checkOutDate"
        id="checkOutDate-input"
        value={formData.checkOutDate ? formData.checkOutDate : ''}
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
     );
}
 
export default EditAccommodation;