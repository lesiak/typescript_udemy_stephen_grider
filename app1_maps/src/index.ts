import { User } from './user';
import { Company } from './company';
import { CustomMap } from './customMap';

const user = new User();
const company = new Company();
const map = new CustomMap(document.getElementById('map'));

map.addMarker(user);
map.addMarker(company);
