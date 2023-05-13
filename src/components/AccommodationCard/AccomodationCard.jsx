const AccommodationCard = ({accommodation}) => {
  return ( 
    <>
      <h2>{accommodation.name}: ${accommodation.cost}</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>CheckIn Date</th>
            <th>CheckOut Date</th>
            <th>address</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{accommodation.type}</td>
            <td>{accommodation.checkInDate}</td>
            <td>{accommodation.checkOutDate}</td>
            <td>{accommodation.address}</td>
            <td>{accommodation.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
 
export default AccommodationCard;