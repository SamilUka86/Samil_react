export default function Gallery({ items }) {
  // Custom captions for the past trips gallery
  const galleryCaptions = [
    "Summer Road Trip along Route 66 - June 2024",
    "Exploring the historic forts of Rajasthan - November 2024",
    "A magical autumn evening by the Seine River - October 2025"
  ];

  return (
    <div className="gallery-section">
      <h2>Past Trips Gallery</h2>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div className="gallery-item" key={index}>
            <div className="image-wrapper">
              <img src={item.pic} alt={`Trip to ${item.name}`} />
              <div className="image-overlay">
                <span>View Full Size</span>
              </div>
            </div>
            <div className="gallery-caption">
              <h4>{item.name}</h4>
              <p>{galleryCaptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
