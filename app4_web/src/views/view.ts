import { Model, HasId } from '../models/model';

export abstract class View<T extends Model<K>, K extends HasId> {
  abstract template(): string;
  abstract eventsMap(): { [key: string]: () => void };

  constructor(public parent: Element, public model: T) {
    this.model.on('change', () => {
      this.render();
    });
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
