import ChiBanner from "./ChiBanner";
import ChiContent from "./ChiContent";
import Gallery from "./Gallery";
import Leadership from "./Leadership";
import Need from "./Need";
import "./chi.css";

const ChildrenHomeIndividual = () => {
  return (
    <div className="chi-container">
      <ChiBanner />
      <ChiContent />
      <Need />
      <Leadership />
      <Gallery />
    </div>
  );
};

export default ChildrenHomeIndividual;
