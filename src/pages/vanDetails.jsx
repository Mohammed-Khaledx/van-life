import "../App.css";
import React from "react";
// useParam is get things from the URL any thing you had passed
import { useParams } from "react-router-dom";

export function VanDetails() {
  const [vanInfo, getVanInfo] = React.useState();

  const params = useParams();
  console.log(params);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/vans/${params.id}`);
        const data = await res.json();
        getVanInfo(data.vans);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, [params.id]);

  console.log(vanInfo);

  return (
    <div className="container">
      <div className="van-detail-container">
        {vanInfo ? (
          <div className="van-detail">
            <img src={vanInfo.imageUrl} alt="" />
            <i className={`van-type ${vanInfo.type} selected`}>
              {vanInfo.type}
            </i>
            <h2>{vanInfo.name}</h2>
            <p className="van-price">
              <span>${vanInfo.price}</span>/day
            </p>
            <p>{vanInfo.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
