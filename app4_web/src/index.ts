import { User } from './models/user';
import { UserEdit } from './views/userEdit';
import { UserListView } from './views/userListView';

const user = User.buildUser({ id: 1, name: 'John', age: 50 });

const rootElement = document.getElementById('root');
if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);
  userEdit.render();
} else {
  throw new Error('Root element not found');
}

const users = User.buildUserCollection();
const rootListElement = document.getElementById('rootList');
if (rootListElement) {
  const userListView = new UserListView(rootListElement, users);
  users.on('change', () => userListView.render());
  users.fetch();
} else {
  throw new Error('RootList element not found');
}
