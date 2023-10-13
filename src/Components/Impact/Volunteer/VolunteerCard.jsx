function VolunteerCard({ data }) {
  const imageUrl =
    "https://media.istockphoto.com/id/143922546/photo/group-of-african-orphan-children.jpg?s=612x612&w=0&k=20&c=RpKm-4iCJGJ_6ukzmMDxk1lTXhGp7VoYchb_sBLKqtY=";
  const { id, location, name, desc } = data;
  return (
    <div className="card-container">
      <img src={imageUrl} className="card-image" />
      <div className="home-info-container">
        <p className="home-name">{name}</p>
        <p className="location-text">{location}</p>
        <p className="desc-text">{desc}</p>
      </div>
      <button className="cta-btn">Volunteer</button>
    </div>
  );
}

export default VolunteerCard;
