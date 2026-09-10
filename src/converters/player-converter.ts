import { AbstractConverter } from "./abstract-converter";
import type { PlayerGame } from "../models/player-game";
import type { PlayerDTO } from "../dto/player-dto";

export class PlayerConverter extends AbstractConverter<PlayerDTO, PlayerGame> {
  toDTO(entity: PlayerGame): PlayerDTO {
    throw new Error("Method not implemented.");
  }
  toEntity(dto: PlayerDTO): PlayerGame {
    const entity: PlayerGame = {
      name: dto.firstName,
      symbol: "",
      lastName: dto.lastName,
      age: dto.age,
    };
    return entity;
  }
}
