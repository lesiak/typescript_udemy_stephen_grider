import { Eventing } from './model';

export type Callback = () => void;

export class SimpleEventing implements Eventing {
  private events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers) {
      return;
    }
    handlers.forEach(callback => callback());
  }
}
