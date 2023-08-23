import "./chi.css";
import NeedsCard from "./NeedsCard";
import { needs } from "./ChiData";

function Need() {
  const needsCard = needs.map((item) => {
    return <NeedsCard key={item.id} {...item} />;
  });

  return (
    <div className="need-container">
      <h1>What we need</h1>
      <div className="needs-part">
        <div className="needs-section">{needsCard}</div>
        <button className="support-button">Support Us</button>
      </div>
    </div>
  );
}

export default Need;
