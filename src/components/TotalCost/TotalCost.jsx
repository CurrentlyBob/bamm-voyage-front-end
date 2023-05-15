const TotalCost = ({itinerary}) => {
  
  const flightsArr = itinerary.flights.map(flight => (
    flight
  ))

  const totalFlightCost = flightsArr.reduce(
    (accumulator, curr) => 
      accumulator + curr.cost, 0
  )

  const accommodationsArr = itinerary.accommodations.map(accommodation => (
    accommodation
  ))

  const totalAccommodationCost = accommodationsArr.reduce(
    (accumulator, curr) =>
      accumulator + curr.cost, 0
  )

  return (
    <>
        {totalFlightCost + totalAccommodationCost}
    </>
  )
}

export default TotalCost