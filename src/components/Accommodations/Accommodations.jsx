import AccommodationCard from "../AccommodationCard/AccomodationCard";

const Accommodations = (props) => {
  if (!props.accommodations) return <h4>Add Accommodations</h4>
  
  return (
    <>
      {props.accommodations.map(accommodation => (
        <AccommodationCard 
          key={accommodation._id}
          accommodation={accommodation}
        />
      ))}
    </>
  )
}

export default Accommodations;