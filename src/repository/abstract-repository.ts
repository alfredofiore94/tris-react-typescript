import type { ResponseModel } from "../dto/response-model";

export abstract class AbstractRepository<T> {
  abstract getEntitiesAsync(): Promise<ResponseModel<T[]>>;

  abstract getEntityAsync(): Promise<ResponseModel<T>>;

  //abstract getEntityAsync(): ResponseModel<T>;

  abstract postEntityAsync(entity: T): Promise<ResponseModel<T>>;

  abstract postEntitiesAsync(entities: T[]): Promise<ResponseModel<T[]>>;
}
