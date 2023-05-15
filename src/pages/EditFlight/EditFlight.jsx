//services
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as itineraryService from "../../services/itineraryService";
import { useState } from "react";
import styles from './EditFlight.module.css'


const EditFlight = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { itineraryId, flightId } = useParams();
  const [formData, setFormData] = useState(state);

  const handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await itineraryService.updateFlight(itineraryId, flightId, formData);
    navigate(`/itineraries/${itineraryId}`);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="airline-input">Airline</label>
      <input
        required
        type="text"
        name="airline"
        id="airline-input"
        autoComplete="off"
        value={formData.airline}
        placeholder="Airline Name"
        onChange={handleChange}
      />
      <label htmlFor="roundtrip">Roundtrip?</label>
      <input
        type="checkbox"
        name="roundtrip"
        id="roundtrip-input"
        checked={formData.roundtrip}
        onChange={handleChange}
      />
      <label htmlFor="departureAirport">Departure Airport</label>
      <input
        required
        type="text"
        name="departureAirport"
        id="departureAirport-input"
        autoComplete="off"
        value={formData.departureAirport}
        onChange={handleChange}
      />
      <label htmlFor="departureDate">Departure Date</label>
      <input
        type="datetime-local"
        name="departureDate"
        id="departureDate-input"
        value={formData.departureDate ? formData.departureDate : ''}
        onChange={handleChange}
      />
      <label htmlFor="arrivalAirport">Arrival Airport</label>
      <input
        type="text"
        name="arrivalAirport"
        id="arrivalAirport-input"
        autoComplete="off"
        value={formData.arrivalAirport}
        onChange={handleChange}
      />
      <label htmlFor="arrivalDate">Arrival Date</label>
      <input
        type="datetime-local"
        name="arrivalDate"
        id="arrivalDate-input"
        value={formData.arrivalDate ? formData.arrivalDate : ''}
        onChange={handleChange}
      />
      <label htmlFor="recordLocator">Record Locator</label>
      <input
        type="text"
        name="recordLocator"
        id="recordLocator-input"
        autoComplete="off"
        value={formData.recordLocator}
        onChange={handleChange}
      />
      <label htmlFor="cost">Cost</label>
      <input
        type="text"
        name="cost"
        id="cost-input"
        autoComplete="off"
        value={formData.cost}
        onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default EditFlight;
