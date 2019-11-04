import 'reflect-metadata';
import { AppRouter } from '../../appRouter';
import { HttpMethod } from './httpMethod';
import { MetadataKey } from './metadataKey';

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKey.path, target.prototype, key);
      const method: HttpMethod = Reflect.getMetadata(
        MetadataKey.method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKey.middleware, target.prototype, key) ||
        [];

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
