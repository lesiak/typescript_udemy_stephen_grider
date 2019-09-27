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

  addMarker(hasLocation: User | Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: hasLocation.location
    });
  }
}
