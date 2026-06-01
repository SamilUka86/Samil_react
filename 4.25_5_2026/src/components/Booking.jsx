import { useState } from 'react';

export default function Booking() {
  // Manage all form data in a single state object
  const [formData, setFormData] = useState({
    uname: '',
    destination: '',
    travelDate: '',
    travellers: 1,
  });

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    
    // Basic validation check
    if (!formData.uname || !formData.destination || !formData.travelDate) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    alert(`Booking successful for ${formData.uname} to ${formData.destination}!`);
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="booking-section">
      <h2>Book Your Dream Trip</h2>
      <div className="booking-container">
        <form onSubmit={handleSubmit} className="booking-form">
          
          <div className="form-group">
            <label htmlFor="uname">Enter Your Name:</label>
            <input 
              type="text" 
              id="uname"
              placeholder="Enter Your Name" 
              name="uname"
              value={formData.uname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <select 
              name="destination" 
              id="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">--Select Your Destination--</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Paris">Paris</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="travelDate">Travel Date:</label>
            <input 
              type="date" 
              id="travelDate"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="travellers">No. of Travellers:</label>
            <input 
              type="number" 
              id="travellers"
              name="travellers"
              step={1} 
              min={1} 
              max={10}
              value={formData.travellers}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit Booking</button>
        </form>
      </div>
    </div>
  );
}
