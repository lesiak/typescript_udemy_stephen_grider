import 'reflect-metadata';
import { HttpMethod } from './httpMethod';
import { MetadataKey } from './metadataKey';

function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKey.path, path, target, key);
      Reflect.defineMetadata(MetadataKey.method, method, target, key);
    };
  };
}

export const get = routeBinder(HttpMethod.get);
export const post = routeBinder(HttpMethod.post);
export const put = routeBinder(HttpMethod.put);
export const del = routeBinder(HttpMethod.del);
export const patch = routeBinder(HttpMethod.patch);
