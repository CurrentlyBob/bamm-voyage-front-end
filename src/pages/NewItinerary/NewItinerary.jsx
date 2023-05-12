// npm modules
import { useState } from "react";

// css
import styles from './NewItinerary.module.css'

const NewItinerary = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    budget: '',
    cost: '',
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
    helloo
    )
  }

  export default NewItinerary
  