const FlightCard = ({ flight }) => {
  return (
    <>
      <h2>{flight.airline}: {flight.recordLocator} ${flight.cost}</h2>
      <table>
        <thead>
          <tr>
            <th>Departure</th>
            <th>Departure Airport</th>
            <th>Arrival</th>
            <th>Arrival Airport</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{flight.departureDate}</td>
            <td>{flight.departureAirport}</td>
            <td>{flight.arrivalDate}</td>
            <td>{flight.arrivalAirport}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default FlightCard