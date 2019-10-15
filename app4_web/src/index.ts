import { User } from './models/user';
import { UserEdit } from './views/userEdit';

const user = User.buildUser({ id: 1, name: 'John', age: 50 });

const rootElement = document.getElementById('root');
if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);
  userEdit.render();
} else {
  throw new Error('Root element not found');
}
