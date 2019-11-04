import 'reflect-metadata';
import { AppRouter } from '../../appRouter';
import { HttpMethod } from './httpMethod';

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      const method: HttpMethod = Reflect.getMetadata(
        'method',
        target.prototype,
        key
      );
      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
