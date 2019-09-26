import { User } from './user';
import { Company } from './company';
import { CustomMap } from './customMap';

console.log('hi there');
const user = new User();
const company = new Company();

const map = new CustomMap(document.getElementById('map'));
