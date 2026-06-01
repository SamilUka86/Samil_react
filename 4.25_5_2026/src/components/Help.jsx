import { useState } from 'react';

export default function Help() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I cancel or change my booking?",
      answer: "You can cancel or modify your booking up to 24 hours before departure through your profile dashboard or by calling support."
    },
    {
      question: "What documents do I need for international travel?",
      answer: "You will need a passport valid for at least 6 months beyond your travel date, along with any required visas or entry permits."
    },
    {
      question: "Are flight tickets included in the destination packages?",
      answer: "Package inclusions vary. Please check the specific details on your booking confirmation page or contact our team."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help-section">
      <h2>Help & Support Center</h2>
      
      <div className="help-container">
        {/* FAQ Accordion Side */}
        <div className="faq-container">
          <h3>Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <div className="faq-question" onClick={() => toggleAccordion(index)}>
                <span>{faq.question}</span>
                <span className="arrow">▼</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Details Side */}
        <div className="contact-card">
          <h3>Contact Customer Support</h3>
          <p>Our team is available 24/7 to assist you with your travel needs.</p>
          
          <div className="contact-info">
            <div className="contact-method">
              <span className="icon">✉</span>
              <div>
                <strong>Email Us</strong>
                <p><a href="mailto:support@travelworld.com">support@travelworld.com</a></p>
              </div>
            </div>

            <div className="contact-method">
              <span className="icon">📞</span>
              <div>
                <strong>Call Us</strong>
                <p><a href="tel:+18005550199">+1 (800) 555-0199</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
