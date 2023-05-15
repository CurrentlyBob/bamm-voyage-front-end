// npm modules
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import moment from "moment"

// service
import * as itineraryService from "../../services/itineraryService";

// css
import styles from './ItineraryDetails.module.css'

// components
import NewFlight from "../../components/NewFlight/NewFlight";
import Flights from "../../components/Flights/Flights";
import Accommodations from "../../components/Accommodations/Accommodations";
import NewAccommodation from "../../components/NewAccommodation/NewAccommodation";
import TotalCost from "../../components/TotalCost/TotalCost";

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
      <h1>{itinerary.title.charAt(0).toUpperCase() + itinerary.title.slice(1)}</h1>
      <div className={styles.cost}>
        <h3>Budget: ${itinerary.budget}</h3>
        {/* <h3 className={(itinerary.cost>itinerary.budget) ? "over" : "under"}>Actual Cost: ${itinerary.cost}</h3> */}
        <h3>Actual Cost: $
          <TotalCost itinerary={itinerary}/>
        </h3>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>DESTINATION</th>
            <th className={styles.th}>START DATE</th>
            <th className={styles.th}>END DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>{itinerary.city}, {itinerary.country}</td>
            <td className={styles.td}>{moment(itinerary.startDate).format('ddd MMMM Do, YYYY')}</td>
            <td className={styles.td}>{moment(itinerary.endDate).format('ddd MMMM Do YYYY')}</td>
          </tr>
        </tbody>
      </table>
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
        <h2 className={styles.flightTitle}>Flights</h2>
        <Flights flights={itinerary.flights} user={props.user} itineraryId={itineraryId} handleDeleteFlight={handleDeleteFlight}/>
      </section>
      <section className={styles.accommodationSection}>
        <h2 className={styles.accommodationtTitle}>Accommodations</h2>
        <Accommodations itinerary={itinerary} user={props.user} itineraryId={itineraryId} handleDeleteAccommodation={handleDeleteAccommodation}/>
      </section>
      <div className={styles.formData}>
        <NewFlight handleAddFlight={handleAddFlight}/>
        <NewAccommodation handleAddAccommodation={handleAddAccommodation}/>
      </div>
    </main>
  );
};

export default ItineraryDetails;
