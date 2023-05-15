import ActivityCard from "../ActivityCard/ActivitesCard";

const Activities = (props) => {
  if (!props.itinerary.activites) return <h4>Add Activities</h4>
  
  return (
    <>
      {props.itinerary.activites.map(activity => (
        <ActivityCard 
          key={activity._id}
          activity={activity}
          user={props.user}
          itineraryId={props.itineraryId}
          handleDeleteActivity={props.handleDeleteActivity}
        />
      ))}
    </>
  )
}

export default Activities;