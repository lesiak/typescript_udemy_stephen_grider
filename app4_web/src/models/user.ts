import { SimpleEventing } from './simpleEventing';
import { ApiSync } from './apiSync';
import { Attributes } from './attributes';
import { Model } from './model';
import { ModelCollection } from './modelCollection';

const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(data: UserProps): User {
    return new User(
      new Attributes(data),
      new SimpleEventing(),
      new ApiSync(rootUrl)
    );
  }
  static buildUserCollection(): ModelCollection<User, UserProps> {
    return new ModelCollection<User, UserProps>(rootUrl, User.buildUser);
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
