import VolunteerCard from "./VolunteerCard"

function VolunteerCardsContainer({ homes }) {
  return (
    <div className="cards-container">
      {homes.map(h => <VolunteerCard key={homes.id} data={h} />)}
    </div>
  )
}

export default VolunteerCardsContainer