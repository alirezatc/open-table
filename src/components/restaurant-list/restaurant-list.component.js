import React from 'react';
import './restaurant-list.css';
import Restaurant from '../restaurant/restaurant.component';

class RestaurantList extends React.Component {
  render() {
    return (
      <div className="RestaurantList">
       
        {
          this.props.businesses.map(item => {
            return <Restaurant business={item}/>
          })
        }

      </div>
    )
  }
}

export default RestaurantList;
