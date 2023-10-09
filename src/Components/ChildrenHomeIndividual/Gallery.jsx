import IndividualSlide from "./IndividualSlide";
import { galleryPics } from "./ChiData";
import "./chi.css";

function Gallery() {
  const individualSlide = galleryPics.map((pic) => {
    return <IndividualSlide key={pic.id} {...pic} />;
  }); 

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-content">
        <div className="gallery-images">{individualSlide}</div>
        <div className="gallery-nav-buttons">
          <button className="less-than">
            <img src="/images/ic_round-less-than.png" alt="" />
          </button>
          <button className="greater-than">
            <img src="/images/ic_round-greater-than.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
