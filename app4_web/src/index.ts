import { User } from './models/user';
import { ModelCollection } from './models/modelCollection';

const user = User.buildUser({ id: 1, name: 'John', age: 50 });
//user.save();
console.log(user.get('name'));
user.on('change', () => {
  console.log(user);
});
user.set({ name: 'Jim' });
const user2 = User.buildUser({ id: 2 });
user2.on('change', () => {
  console.log(user2);
});
user2.fetch();

const collection = new ModelCollection('http://localhost:3000/users');
collection.on('change', () => {
  console.log(collection);
});
collection.fetch();
