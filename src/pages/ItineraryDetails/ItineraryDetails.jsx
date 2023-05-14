// npm modules
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// service
import * as itineraryService from "../../services/itineraryService";

// css
import styles from './ItineraryDetails.module.css'

// components
import NewFlight from "../../components/NewFlight/NewFlight";
import Flights from "../../components/Flights/Flights";
import Accommodations from "../../components/Accommodations/Accommodations";
import NewAccommodation from "../../components/NewAccommodation/NewAccommodation";

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

  const handleAddFlight = async (flightFormData) => {
    const newFlight = await itineraryService.createFlight(itineraryId, flightFormData)
    setItinerary({ ...itinerary, flights: [...itinerary.flights, newFlight] })
  }

  const handleDeleteFlight = async (itineraryId, flightId) => {
    await itineraryService.deleteFlight(itineraryId, flightId)
    setItinerary({...itinerary, flights: itinerary.flights.filter((f) => f._id !== flightId)})
  }

  const handleAddAccommodation = async (accommodationFormData) => {
    const newAccommodation = await itineraryService.createAccommodation(itineraryId, accommodationFormData)
    setItinerary({ ...itinerary, accommodations: [...itinerary.accommodations, newAccommodation] })
  }

  const handleDeleteAccommodation = async (itineraryId, accommodationId) => {
    await itineraryService.deleteAccommodations(itineraryId, accommodationId)
    setItinerary({...itinerary, accommodations: itinerary.accommodations.filter((a) => a._id !== accommodationId)})
  }

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
      <section className={styles.flightSection}>
        <h2>Flights</h2>
        <NewFlight handleAddFlight={handleAddFlight}/>
        <Flights flights={itinerary.flights} user={props.user} itineraryId={itineraryId} handleDeleteFlight={handleDeleteFlight}/>
      </section>
      <section className={styles.accommodationSection}>
        <h2>Accommodations</h2>
        <Link to={`/itineraries/${itineraryId}/accommodations`} state={itinerary}>
          <button>Add Accommodation</button>
        </Link>
        <NewAccommodation handleAddAccommodation={handleAddAccommodation}/>
        <Accommodations itinerary={itinerary} user={props.user} itineraryId={itineraryId} handleDeleteAccommodation={handleDeleteAccommodation}/>
      </section>
    </main>
  );
};

export default ItineraryDetails;
