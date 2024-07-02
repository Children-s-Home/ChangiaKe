import ContentSection from "./ContentSection";
import "./chi.css";
import { content } from "./ChiData";

function ChiContent() {
  const contentSection = content.map((section) => {
    return <ContentSection key={section.id} {...section} />;
  });
  return <div className="chiContent-container">{contentSection}</div>;
}

export default ChiContent;
