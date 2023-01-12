import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give the opportunity to Travel around the world </p>

      <DestinationData
        className="first-desc"
        heading="Taal Volcano Bantagas"
        text="Taal Volcano is a large caldera in Batangas that was formed by prehistoric eruptions. In the wake of the eruptions, it was eventually filled by Taal Lake. Throughout history it has erupted about 38 times, making it the second most active volcano in the Philippines. While it is usually known to only have one crater, the volcano is actually a complex volcano system that consists of 47 volcanic craters. Its most popular crater is the Binintiang Malaki cone on the volcano's northwestern tip. This now dormant crater is also what you can see from nearby Tagaytay City and nearby towns. Meanwhile, its Main Crater Lake is the biggest crater in the system. This lake used to contain a small island called Vulcan Point, but it eventually disappeared after the main crater had a Phreatomagmatic eruption in 2020. A phreatomagmatic eruption is caused by the interaction of magma and water."
        img1=<img
          alt="img"
          src="https://images.unsplash.com/photo-1606047557233-88cc1e4d368c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
        img2=<img
          alt="img"
          src="https://images.unsplash.com/photo-1462557661829-6a1129313bbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      />
      <DestinationData
        className="first-desc-reverse"
        heading="Nigara Waterfall, Canada"
        text="Niagara Falls, city in the Regional Municipality of Niagara, southeastern Ontario, Canada, a port on the Niagara River opposite Niagara Falls, New York. The city overlooks the Horseshoe, or Canadian, Falls cataract of Niagara Falls; the crescent-shaped cataract is 54 M (177 ft) high and carries nine times more water than its United States counterpart. Niagara Falls is an enormously popular tourist destination, and it also serves as a major source of electricity for Ontario."
        img1=<img
          alt="img"
          src="https://images.unsplash.com/photo-1598402453861-4fbcbf6ced3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        img2=<img
          alt="img"
          src="https://images.unsplash.com/photo-1511358146320-eb018ab3e22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      />
    </div>
  );
};

export default Destination;
