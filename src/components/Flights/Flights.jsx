import FlightCard from "../FlightCard/FlightCard";

const Flights = (props) => {
  if (!props.flights) return <h4>Add Flights</h4>
  
  return (
    <>
      {props.flights.map(flight => (
        <FlightCard 
          key={flight._id}
          flight={flight}
          user={props.user}
          itineraryId={props.itineraryId}
          handleDeleteFlight={props.handleDeleteFlight}
        />
      ))}
    </>
  )
}

export default Flights;