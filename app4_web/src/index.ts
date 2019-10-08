import { User } from './models/user';

const user = new User({ name: 'John', age: 20 });
user.set({ name: 'Jack' });
console.log(user.get('age'));
console.log(user.get('name'));

user.on('change', () => {
  console.log('Change #1');
});

user.on('change', () => {
  console.log('Change #2');
});

user.on('save', () => {
  console.log('Save');
});

user.trigger('change');
