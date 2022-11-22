import React from "react";
import { GiPositionMarker } from "react-icons/gi";


export default function Card(props) {
  return(
    <>
      <div className="card">
        <img className="card--image" src={props.imageUrl} alt="" />
        <div className="card--info">
          <div className="card--location">
            <h4><GiPositionMarker className="card--icon"/>{props.location} <a href={props.googleMapsUrl} className="card--map-link">View on Google Maps</a></h4>

          </div>
          <h2 className="card--title">{props.title}</h2>
          <p className="card--date">{props.startDate} - {props.endDate}</p>
          <p className="card--description">{props.description}</p>
        </div>
      </div>
      <hr />
    </>
  )
}
