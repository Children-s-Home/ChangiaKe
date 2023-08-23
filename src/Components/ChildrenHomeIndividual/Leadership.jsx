import LeadershipCard from "./LeadershipCard"
import "./chi.css"
import { leaders } from "./ChiData";

function Leadership() {

  const leadershipCard = leaders.map((leader)=> {
    return(
      <LeadershipCard
      key={leader.id}
      {...leader}
       />
    )
  })

  return (
    <div className="leadership-container">
      <h1>Our Leadership</h1>
      <div className="leadership-images">
       {leadershipCard}
      </div>
    </div>
  );
}

export default Leadership