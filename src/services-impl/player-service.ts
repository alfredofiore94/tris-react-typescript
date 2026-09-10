import { PlayerConverter } from "../converters/player-converter";
import type { PlayerDTO } from "../dto/player-dto";
import type { ResponseModel } from "../dto/response-model";
import type { PlayerGame } from "../models/player-game";
import { PlayerRepository } from "../repository/player-repository";
import type { IPlayerService } from "../services/i-player-service";

export class PlayerService implements IPlayerService {
  private _playerConverter: PlayerConverter;
  private _playerRepository: PlayerRepository;

  constructor(
    playerConverter: PlayerConverter,
    playerRepository: PlayerRepository,
  ) {
    this._playerConverter = playerConverter;
    this._playerRepository = playerRepository;
  }

  async getPlayersData(): Promise<PlayerGame[]> {
    const responseModel: ResponseModel<PlayerDTO[]> =
      await this._playerRepository.getEntitiesAsync();

    try {
      if (responseModel.metadata?.result) {
        return this._playerConverter.toEntities(responseModel.payload!);
      }
    } catch (error) {
      Error;
    }
    return [];
  }
}
