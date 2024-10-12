import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
export function Vans() {
  const [vans, getVans] = React.useState();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/vans");
        const d = await response.json();
        getVans(d.vans);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, []);

  console.log(vans);

  if (!vans) {
    return (
      <div className="container">
        <div className="van-list-container">
          <h1>loading</h1>
        </div>
      </div>
    );
  }

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`./${van.id}`}
        // this is important for accessability
        aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt="" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="container">
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">{vanElements}</div>
      </div>
    </div>
  );
}
