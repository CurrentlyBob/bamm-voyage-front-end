import AccommodationCard from "../AccommodationCard/AccomodationCard";

const Accommodations = (props) => {
  if (!props.itinerary.accommodations) return <h4>Add Accommodations</h4>
  
  return (
    <>
      {props.itinerary.accommodations.map(accommodation => (
        <AccommodationCard 
          key={accommodation._id}
          accommodation={accommodation}
          user={props.user}
          itineraryId={props.itineraryId}
          handleDeleteAccommodation={props.handleDeleteAccommodation}
        />
      ))}
    </>
  )
}

export default Accommodations;