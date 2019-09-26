import { User } from './user';
import { Company } from './company';

console.log('hi there');
const user = new User();
const company = new Company();

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});
