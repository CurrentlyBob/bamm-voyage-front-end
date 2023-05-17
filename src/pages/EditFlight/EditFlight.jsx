//services
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as itineraryService from "../../services/itineraryService";
import { useState } from "react";
import moment from "moment";

import styles from './EditFlight.module.css'



const EditFlight = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { itineraryId, flightId } = useParams();
  const [formData, setFormData] = useState(state);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await itineraryService.updateFlight(itineraryId, flightId, formData);
    navigate(`/itineraries/${itineraryId}`);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Edit Flight</h1>
          {/* <label htmlFor="airline-input">Airline</label> */}
          <fieldset>
            <legend>Airline</legend>
            <input 
              required
              type="text" 
              name="airline"
              // id="airline-input"
              autoComplete='off'
              value={formData.airline}
              // placeholder="Airline Name"
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          {/* <label htmlFor="departureAirport">Departure Airport</label> */}
          <fieldset>
            <legend>Departure Airport</legend>
            <input 
              required
              type="text" 
              name="departureAirport"
              // id="departureAirport-input"
              autoComplete='off'
              value={formData.departureAirport}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          {/* <label htmlFor="departureDate">Departure Date</label> */}
          <fieldset>
            <legend>Departure Date</legend>
            <input 
              type="datetime-local" 
              name="departureDate"
              // id="departureDate-input"
              value={moment(formData.departureDate).format('yyyy-MM-DD HH:mm')}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          {/* <label htmlFor="arrivalAirport">Arrival Airport</label> */}
          <fieldset>
            <legend>Arrival Airport</legend>
            <input 
              type="text" 
              name="arrivalAirport"
              // id="arrivalAirport-input"
              autoComplete='off'
              value={formData.arrivalAirport}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          {/* <label htmlFor="arrivalDate">Arrival Date</label> */}
          <fieldset>
            <legend>Arrival Date</legend>
            <input 
              type="datetime-local" 
              name="arrivalDate"
              // id="arrivalDate-input"
              value={moment(formData.arrivalDate).format('yyyy-MM-DD HH:mm')}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          {/* <label htmlFor="recordLocator">Record Locator</label> */}
          <fieldset>
            <legend>Record Locator</legend>
            <input 
              type="text" 
              name="recordLocator"
              id="recordLocator-input"
              autoComplete='off'
              value={formData.recordLocator}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          {/* <label htmlFor="cost">Cost</label> */}
          <fieldset>
            <legend>Cost</legend>
            <input 
              type="text" 
              name="cost"
              id="cost-input"
              autoComplete='off'
              value={formData.cost}
              onChange={handleChange}
              className={styles.input}
            />
          </fieldset>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </main>
  );
};

export default EditFlight;
