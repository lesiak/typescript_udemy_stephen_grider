import { User } from '../models/user';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.model.on('change', () => {
      this.render();
    });
  }

  private eventsMap(): { [key: string]: () => void } {
    return {
      'click:button#set-age': this.onSetAgeClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    console.log('Hi there');
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
      <input />
      <button id='set-age'>Set Random Age</button>
    </div>
   `;
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
}
