import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import * as itineraryService from "../../services/itineraryService";

// css
import styles from './ItineraryDetails.module.css'

const ItineraryDetails = (props) => {
  const { itineraryId } = useParams();
  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    const fetchItinerary = async () => {
      const data = await itineraryService.show(itineraryId);
      setItinerary(data);
    };
    fetchItinerary();
  }, [itineraryId]);

  console.log(("itinerary state:", itinerary));

  if (!itinerary) return <h1>Loading itineraries...</h1>;

  return (
    <main className={styles.container}>
      <h1>{itinerary.title}</h1>
      <div className={styles.header}>
        <h3>Destination: {itinerary.city}, {itinerary.country}</h3>
        <h3>Dates: {itinerary.startDate} - {itinerary.endDate}</h3>
        <h3>Budget: ${itinerary.budget} Actual Cost: ${itinerary.cost}</h3>
      </div>
      {itinerary.owner._id === props.user.profile._id &&
      <div className={styles.buttons}>
        <Link to={`/itineraries/${itineraryId}/edit`} state={itinerary}>
          <button>Edit</button>
        </Link>
        <button onClick={() => props.handleDeleteItinerary(itineraryId)}>
          Delete
        </button>
      </div>
    }
      <section>Flights</section>
      <section>Accomodations</section>
    </main>
  );
};

export default ItineraryDetails;
