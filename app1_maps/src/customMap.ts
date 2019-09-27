import { User } from './user';
import { Company } from './company';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDiv: Element) {
    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: user.location
    });
  }

  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: company.location
    });
  }
}
