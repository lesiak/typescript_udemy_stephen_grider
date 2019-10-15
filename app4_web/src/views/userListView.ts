import { CollectionView } from './collectionView';
import { User, UserProps } from '../models/user';
import { UserShow } from './userShow';

export class UserListView extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
