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
      symbol: Math.random() < 0.5 ? "X" : "O",
      lastName: dto.lastName,
      age: dto.age,
      email: dto.email,
    };
    return entity;
  }
}
