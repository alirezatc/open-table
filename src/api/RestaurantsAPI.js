const API_URL = 'http://opentable.herokuapp.com/api/restaurants'; 

// const RestaurantsService1 = {
//   search(city, refine) {
//     return fetch(`${API_URL}?city=${city}&name=${refine}`)
//     .then(response => { //since fetch returns a promise, to consume that promise we do a then call 
//         return response.json() // the fetch API has a raw response, so, we need to parse it
//       }).then(jsonResponse => { //the json method is also asynchronous, so it returns a promise, so we need another then
//         if (jsonResponse.restaurants) {
//           console.log(jsonResponse);
//           return jsonResponse.restaurants.map(business => {
//             // console.log(business);
//             return {
//               id: business.id,
//               imageSrc: business.image_url,
//               name: business.name,
//               address: business.address,
//               city: business.city,
//               state: business.state,
//               area: business.area,
//               phone: business.phone,
//               zipCode: business.postal_code,
//               price: business.price
//             }
//           })
//         } 
//       })
//   },
  
// };


const RestaurantsService = {
  search(city, refine) {
    let fetchingUrl = '';
    city === '' ? fetchingUrl = `${API_URL}?country=ca&name=${refine}` : fetchingUrl = `${API_URL}?city=${city}&name=${refine}`;
    
    return fetch(fetchingUrl)
    .then(response =>  response.json())
    .then(jsonResponse => {
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
  },
  
};

export default RestaurantsService;