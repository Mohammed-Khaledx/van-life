import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [style, setStyle] = React.useState([false,false ,false ]);
  function handleClick(event) {
    console.log(event.target.id);
    setStyle((p) => {
      return p.map((e, index) => {
        if (event.target.id == index) {
          console.log(e, index);
          return true;
        } else {
          return false;
        }
      });
    });
  }
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <h1
            id="0"
            className={style[0] ? "selected" : ""}
            onClick={handleClick}
          >
            #VANLIFE
          </h1>
        </Link>
        <div className="nav">
          <Link
            id="1"
            className={style[1] ? "selected" : ""}
            to="/about"
            onClick={handleClick}
          >
            About
          </Link>
          <Link
            id="2"
            className={style[2] ? "selected" : ""}
            to="/vans"
            onClick={handleClick}
          >
            Vans
          </Link>
        </div>
      </div>
    </div>
  );
}
