import { User, UserProps } from '../models/user';
import { View } from './view';
import { UserShow } from './userShow';
import { UserForm } from './userForm';

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <div id="user-show"></div>
      <div id="user-form"></div>
    </div>
   `;
  }

  regionsMap(): { [key: string]: string } {
    return {
      userShow: '#user-show',
      userForm: '#user-form'
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
}
