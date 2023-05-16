import FlightCard from "../FlightCard/FlightCard";

const Flights = (props) => {
  if (!props.flights) return <h4>Add Flights</h4>
  
  return (
    <>
      {props.flights.map((flight, index) => (
        <FlightCard 
          key={flight._id}
          flight={flight}
          user={props.user}
          itineraryId={props.itineraryId}
          handleDeleteFlight={props.handleDeleteFlight}
          recordLocator={flight.recordLocator}
          isFirstFlight={index === 0 || props.flights[index-1].recordLocator !== flight.recordLocator}
        />
      ))}
    </>
  )
}

export default Flights;