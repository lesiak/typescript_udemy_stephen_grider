import { User, UserProps } from '../models/user';
import { View } from './view';

export class UserForm extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
      <input placeholder="${this.model.get('name')}" />
      <button id='set-name'>Change Name</button>
      <button id='set-age'>Set Random Age</button>
      <button id='save-model'>Save User</button>
    </div>
   `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button#set-age': this.onSetAgeClick,
      'click:button#set-name': this.onSetNameClick,
      'click:button#save-model': this.onSaveClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSaveClick = (): void => {
    this.model.save();
  };
}
