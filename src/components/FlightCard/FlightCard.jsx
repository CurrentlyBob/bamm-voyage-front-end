import { Link } from "react-router-dom";

const FlightCard = ({ flight, itineraryId }) => {
  return (
    <>
      <h2>
        {flight.airline}: {flight.recordLocator} ${flight.cost}
      </h2>
      <table>
        <thead>
          <tr>
            <th>Departure</th>
            <th>Departure Airport</th>
            <th>Arrival</th>
            <th>Arrival Airport</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{flight.departureDate}</td>
            <td>{flight.departureAirport}</td>
            <td>{flight.arrivalDate}</td>
            <td>{flight.arrivalAirport}</td>
            <td>
              <Link to={`/itineraries/${itineraryId}/flights/${flight._id}`} state={flight}>
              <button>
                Edit
              </button>
                </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FlightCard;
