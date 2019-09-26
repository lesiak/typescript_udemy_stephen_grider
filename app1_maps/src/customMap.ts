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
}
