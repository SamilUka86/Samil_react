export default function Destination({ items }) {
  return (
    <div className="destinations-grid">
      {items.map((item, index) => (
        <div className="destination-card" key={index}>
          <img src={item.pic} alt={item.name} />
          <div className="destination-card-content">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
