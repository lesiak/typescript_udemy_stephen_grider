import { User } from './models/user';

const user = new User({ id: 1, name: 'John', age: 50 });
//user.save();
console.log(user.get('name'));
user.on('change', () => {
  console.log(user);
});
user.set({ name: 'Jim' });
//const userNew = new User({ name: 'Jim', age: 55 });
//userNew.save();
