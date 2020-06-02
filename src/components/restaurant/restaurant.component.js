import React from 'react';
import './restaurant.css';

class Restaurant extends React.Component {
  render() {
    const { business } = this.props;

    return (
      <div className="Restaurant">
        <div className="image-container">
          <img src={business.imageSrc} alt='' />
        </div>
        <h2>{business.name}</h2>
        <div className="Restaurant-information">
          <div className="Restaurant-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipCode}`}</p>
            <h3>{business.area}</h3>

          </div>
          <div className="Restaurant-reviews">
            <h3 className="rating">{business.price}</h3>
            <p>{`${business.phone} reviews`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Restaurant;
