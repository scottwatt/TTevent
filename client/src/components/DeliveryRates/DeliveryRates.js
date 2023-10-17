import React from 'react';
import './DeliveryRates.css';

const DeliveryRates = [
  { location: 'Bakersfield', rate: '$75.00+' },
  { location: 'Arvin', rate: '$95.00+' },
  { location: 'Bear Valley Springs', rate: '$275.00+' },
  { location: 'Buttonwillow', rate: '$115.00+' },
  { location: 'Cuyama', rate: '$350.00+' },
  { location: 'Coalinga', rate: '$400.00+' },
  { location: 'Delano', rate: '$105.00+' },
  { location: 'Fraizer Park', rate: '$200.00+' },
  { location: 'Glenville', rate: '$350.00+' },
  { location: 'Hanford', rate: '$350.00+' },
  { location: 'JEH Ranch', rate: '$100.00+' },
  { location: 'Keene', rate: '$175.00+' },
  { location: 'Kernville', rate: '$400.00+' },
  { location: 'Lake Isabella', rate: '$350.00+' },
  { location: 'Lamont', rate: '$90.00+' },
  { location: 'Lebec', rate: '$115.00+' },
  { location: 'Maricopa', rate: '$200.00+' },
  { location: 'Nirvana Estates', rate: '$100.00+' },
  { location: 'Paso Robles', rate: '$350.00+' },
  { location: 'Pine Mountain Club', rate: '$375.00+' },
  { location: 'Porterville', rate: '$300.00+' },
  { location: 'Ridgecrest', rate: '$450.00+' },
  { location: 'San Luis Obispo', rate: '$400.00+' },
  { location: 'Shafter', rate: '$95.00+' },
  { location: 'Taft', rate: '$130.00+' },
  { location: 'Tehachapi', rate: '$200.00+' },
  { location: 'Tulare', rate: '$300.00+' },
  { location: 'Visalia', rate: '$350.00+' },
  { location: 'Wasco', rate: '$115.00+' },
  { location: 'Wooford Heights', rate: '$375.00+' }
];

const DeliveryRatePage = () => {
    return (
      <div className="delivery-rate-container">
        <h1 className="title">T&T Event Rentals Delivery & Pickup Services</h1>
  
        <p className="intro-text">Experience seamless event management with our reliable delivery and pick-up services, specifically designed to align with your event's requirements. At T&T Event Rentals, we prioritize punctuality, ensuring that every delivery and pick-up adheres to the scheduled time, adding to the success of your event.</p>
  
        <h2 className="subtitle">Delivery Rates (as of October 2023)</h2>
        <p className="description">Our transparent pricing structure is based on a fixed rate for each delivery zone, complemented by an additional $1 per mile fee. The mileage fee is assessed based on a one-way trip from the T&T Event Rentals warehouse to your specified delivery address.</p>
  
        <table className="rates-table">
          <thead>
            <tr>
              <th className="table-header">Location</th>
              <th className="table-header">Rate</th>
            </tr>
          </thead>
          <tbody>
            {DeliveryRates.map((rate, index) => (
              <tr key={index}>
                <td className="table-data">{rate.location}</td>
                <td className="table-data">{rate.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
                
        <h3 className="special-requirements-title">Specific Requirements?</h3>
        <p className="special-requirements-desc">For events that demand precise timing, such as surprise celebrations, kindly inform our coordination team during the order process. Such vital details will be highlighted in our records, ensuring that our delivery team is synchronized with your event's timeline.</p>
  
        <strong className="important-note">Please Note:</strong>
        <ul className="important-list">
          <li className="important-item">Our delivery and pick-up services are exclusive of product setups. For detailed quotes on product setup, feel free to reach out to our team.</li>
          <li className="important-item">If your event location isn't mentioned in our list, do connect with us for tailored delivery rates.</li>
        </ul>
      </div>
    );
  };
  
  export default DeliveryRatePage;