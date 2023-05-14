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
    setFormData({ ...formData, [target.name]: target.value });
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
        value={formData.airline}
        placeholder="Airline Name"
        onChange={handleChange}
      />
      <label htmlFor="roundtrip">Roundtrip?</label>
      <input
        type="boolean"
        name="roundtrip"
        id="roundtrip-input"
        value={formData.roundtrip}
        placeholder="true"
        onChange={handleChange}
      />
      <label htmlFor="departureAirport">Departure Airport</label>
      <input
        required
        type="text"
        name="departureAirport"
        id="departureAirport-input"
        value={formData.departureAirport}
        onChange={handleChange}
      />
      <label htmlFor="departureDate">Departure Date</label>
      <input
        type="date"
        name="departureDate"
        id="departureDate-input"
        value={formData.departureDate ? formData.departureDate.slice(0, 10) : ''}
        onChange={handleChange}
      />
      <label htmlFor="arrivalAirport">Arrival Airport</label>
      <input
        type="text"
        name="arrivalAirport"
        id="arrivalAirport-input"
        value={formData.arrivalAirport}
        onChange={handleChange}
      />
      <label htmlFor="arrivalDate">Arrival Date</label>
      <input
        type="date"
        name="arrivalDate"
        id="arrivalDate-input"
        value={formData.arrivalDate ? formData.arrivalDate.slice(0, 10) : ''}
        onChange={handleChange}
      />
      <label htmlFor="recordLocator">Record Locator</label>
      <input
        type="text"
        name="recordLocator"
        id="recordLocator-input"
        value={formData.recordLocator}
        onChange={handleChange}
      />
      <label htmlFor="cost">Cost</label>
      <input
        type="text"
        name="cost"
        id="cost-input"
        value={formData.cost}
        onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default EditFlight;
