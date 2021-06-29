import Leaflet from 'leaflet';
import mapMarkerImg from '../images/Icon-map.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [180, 8],
});

export default mapIcon;
