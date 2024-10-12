import "../App.css";
import { Link } from "react-router-dom";

export function Home(params) {
  return (
    <div className="home">
      <div className="container">
        <h1>You got THe travel plans,We got The travel vans.</h1>
        <p>
          Add adventure to Your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.{" "}
        </p>
         <Link to='/vans'><button>Find your van</button></Link>
      </div>
    </div>
  );
}
