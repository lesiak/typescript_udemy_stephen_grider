import { User } from './models/user';
import { UserForm } from './views/userForm';

const user = User.buildUser({ id: 1, name: 'John', age: 50 });

// console.log(user.get('name'));
// user.on('change', () => {
//   console.log(user);
// });
// user.set({ name: 'Jim' });
// const user2 = User.buildUser({ id: 2 });
// user2.on('change', () => {
//   console.log(user2);
// });
// user2.fetch();

// const collection = User.buildUserCollection();
// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

const rootElement = document.getElementById('root');
if (rootElement) {
  const userForm = new UserForm(rootElement, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}
