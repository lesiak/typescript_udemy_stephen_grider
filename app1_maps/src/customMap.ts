export interface MapLocation {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

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

  addMarker(mapLocation: MapLocation) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mapLocation.location
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapLocation.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
