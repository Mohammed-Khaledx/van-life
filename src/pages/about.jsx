import "../App.css";
import aboutImage from "../images/about1.png";
import { Link } from "react-router-dom";

export function About(params) {
  return (
    <div className="about">
      <div className="image-container">
        <img src={aboutImage} alt="" />
      </div>
      <div className="container">
        <div className="info">
          <h2>Do not squeeze in sedan when you could relax in a van</h2>
          <p className="mission">
            Our mission is Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eaque voluptatum obcaecati molestias dolores nisi ullam unde
            omnis ex ducimus suscipit odio, similique commodi mollitia magni
            consequatur cupiditate. Placeat, mollitia tenetur!
          </p>
          <p className="team">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world in 4 wheels
          </p>
        </div>
        <div className="explore">
          <h3>Your destination is waiting. Your van is ready </h3>
          
            <Link to="/vans"><button>Explore Our vans</button></Link>
          
        </div>
      </div>
    </div>
  );
}
