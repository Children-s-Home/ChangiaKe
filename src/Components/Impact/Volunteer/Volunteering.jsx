import React from 'react'
import VolunteerCardsContainer from './VolunteerCardsContainer'
import childrensHome from "./Volunteering_data"
import "./Volunteering.css"

function Volunteering() {
  return (
    <div><p>Volunteering</p>
      <div>
      <VolunteerCardsContainer homes={childrensHome} />
      </div></div>
  )
}

export default Volunteering