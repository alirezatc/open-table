const API_URL = 'http://opentable.herokuapp.com/api/restaurants'; 

const RestaurantsService = {
  search(city, refine) {
    return fetch(`${API_URL}?city=${city}&name=${refine}`)
    .then(response => { //since fetch returns a promise, to consume that promise we do a then call 
        return response.json() // the fetch API has a raw response, so, we need to parse it
      }).then(jsonResponse => { //the json method is also asynchronous, so it returns a promise, so we need another then
        if (jsonResponse.restaurants) {
          // console.log(jsonResponse);
          return jsonResponse.restaurants.map(business => {
            // console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              area: business.area,
              phone: business.phone,
              zipCode: business.postal_code,
              price: business.price
            }
          })
        } 
      })
  }
};

// const RestaurantsService = () => {
//   fetch(`${API_URL}?city="toronto"`)
//     .then(response => {
//       return response.json()
//         .then(result => {
//           console.log(result)
//         })
//     })
// };

// const Restaurants2 = async () => {
//   const resp = fetch(`${API_URL}?city="toronto"`);
//   const result = resp.json();
//   console.log(result);
// }

export default RestaurantsService;