import ActivityCard from "../ActivityCard/ActivityCard";

const Activities = (props) => {
  if (!props.itinerary.activities) return <h4>Add Activities</h4>
  
  console.log(props.itinerary.activities)
  return (
    <>
      {props.itinerary.activities.map(activity => (
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