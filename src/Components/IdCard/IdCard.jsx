import React from "react"
import './IdCard.css'

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  
  return (
    <div className="IdCard">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div className="IdCardDetails">
        <span><b>Last Name:</b> {lastName}</span>
        <span><b>First Name:</b> {firstName}</span>
        <span><b>Gender:</b> {gender === "male" ? "M" : "F"}</span>
        <span><b>Height:</b> {height / 100}m</span>
        <span>
          <b>Birth:</b>{" "}
          {birth.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  )
}

export default IdCard