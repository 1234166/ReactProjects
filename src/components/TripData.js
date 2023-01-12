import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="image" src={props.Image} />
      </div>
      <h4>{props.Heading}</h4>
      <p>{props.Text}</p>
    </div>
  );
}
export default TripData;
