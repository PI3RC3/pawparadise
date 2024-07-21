import './App.css';
import React from 'react';

function App() {
  // Phone number parts to avoid scraping
  const phonePart1 = "239";
  const phonePart2 = "445";
  const phonePart3 = "6880";
  const phoneNumber = `${phonePart1}-${phonePart2}-${phonePart3}`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/pppLogo.png`} className="App-logo" alt="Paw Paradise Logo" />
        
        <div className="store-hours">
          <p><strong>Store Hours:</strong></p>
          <p>Every Day: 9am - 4pm</p>
        </div>

        <div className="contact-info">
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </div>

        <div className="location-info">
          <p><strong>Location:</strong></p>
          <p>1700 Periwinkle Way, Unit 8</p>
          <p>Sanibel, FL 33957</p>

          <a href="https://maps.app.goo.gl/aB21nTGEiHtRF1jS8" target="_blank" rel="noopener noreferrer">Directions</a>

        </div>

        <div className="map-embed">
          <iframe 
            title="Paw Paradise Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.413029915063!2d-82.06158042296843!3d26.442412176930674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db308c44eed0d7%3A0x1b26568d2462e999!2s1700%20Periwinkle%20Way%2C%20Sanibel%2C%20FL%2033957!5e0!3m2!1sen!2sus!4v1721601178255!5m2!1sen!2sus" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
