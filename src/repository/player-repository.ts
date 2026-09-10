import type { PlayerDTO } from "../dto/player-dto";
import type { ResponseModel } from "../dto/response-model";
import type { IRepository } from "./i-repository";

export class PlayerRepository implements IRepository<PlayerDTO> {
  async getEntitiesAsync(): Promise<ResponseModel<PlayerDTO[]>> {
    try {
      const response: Response = await fetch("https://dummyjson.com/users");

      if (response.ok) {
        const responseModel: ResponseModel<PlayerDTO[]> = {
          payload: (await response.json()).users,
          metadata: {
            result: true,
            errorMessage: "",
          },
          statusCode: response.status,
        };
        return responseModel;
      }

      return {
        metadata: {
          result: false,
          errorMessage: "Errore getPlayer" + response.statusText,
        },
        statusCode: response.status,
      };
    } catch (error) {
      const responseModel: ResponseModel<PlayerDTO[]> = {
        metadata: {
          result: false,
          errorMessage: "Errore getPlayer",
        },
      };
      return responseModel;
    }
  }
  getEntityAsync(): Promise<ResponseModel<PlayerDTO>> {
    throw new Error("Method not implemented.");
  }
  postEntityAsync(entity: PlayerDTO): Promise<ResponseModel<PlayerDTO>> {
    throw new Error("Method not implemented.");
  }
  postEntitiesAsync(
    entities: PlayerDTO[],
  ): Promise<ResponseModel<PlayerDTO[]>> {
    throw new Error("Method not implemented.");
  }
}
