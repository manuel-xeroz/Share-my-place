import { Map } from './UI/Map'

class LoadPlace {
 constructor(coordinates, address) {
     new Map(coordinates);
     const headerTitle = document.querySelector('header h1');
     headerTitle.textContent = address;
 }
}
const url = new URL(location.href);
const queryParams = url.searchParams;
// const coords = {
//   lat: parseFloat(queryParams.get('lat')),
//   lng: +queryParams.get('lng')
// };
// const address = queryParams.get('address');
const locId = queryParams.get('location');
fetch('http://localhost:3000/location/' + locId)
  .then(response => {
    if (response.status === 404) {
      throw new Error('Could not find location!');
    }
    return response.json();
  })
  .then(data => {
    new LoadPlace(data.coordinates, data.address);
  })
  .catch(err => {
    alert(err.message);
  });
