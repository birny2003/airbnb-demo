import React from "react";

export default function Cards(props) {
  let badgeText;
  // make 3 sold out whilst 1 and 2 are online:
  if (props.item.openSpots === 3) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`../images/${props.item.coverImg}`}
        className="card--image"
        alt="Michael Phelps"
      ></img>
      <div className="card--stats">
        <img src="../images/Star.png" className="card--star" alt="star"></img>
        <span>{props.item.stats.rating}</span>
        <span className="Gray">({props.item.stats.reviewCount}) • </span>
        <span className="Gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="Bold">From ${props.item.price} </span> / person
      </p>
    </div>
  );
}
