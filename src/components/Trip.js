import TripData from "./TripData";
import "./TripStyles.css";
function Trip() {
  return (
    <div className="Trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique Destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          Image="https://images.unsplash.com/photo-1501950183564-3c8ac97d08f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          Heading="Trip in Indonesia"
          Text="Indonesia officially the Republic of Indonesia, is a country in Southeast Asia and Oceanic between the Indian and Pacific Oceans. It consists of over 17,000 islands, including Sumatra ,Java, Sulawesi and parts of Bornea and New Guinea."
        />

        <TripData
          Image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80"
          Heading="Trip in Malaysia"
          Text="Malaysia is a country of contrasts-an eclectic mix of colonial architecture, stunning parks and beaches, contemporary skyscrapers, and a unique landscape covered in tea plantations. A melting pot with influences from neighboring lands, as well as Western countries, Malaysia has something for everybody-from the world-famous Petrona Towers to the cultural and religious diversity that makes this a destination like no other.

          "
        />

        <TripData
          Image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
          Heading="Trip in France"
          Text="Tourism in France directly contributed 79.8 billion euros to gross domestic product (GDP) in 2013, 30% of which comes from international visitors and 70% from domestic tourism spending. The total contribution of travel and tourism represents 9.7% of GDP and supports 2.9 million jobs (10.9% of employment) in the country.[1] Tourism contributes significantly to the balance of payments."
        />
      </div>
    </div>
  );
}
export default Trip;
