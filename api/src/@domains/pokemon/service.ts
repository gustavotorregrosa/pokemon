import { IPokemon } from "./domain.interfaces";
import { IPokemonRepository, IResult } from "./repository.interface";
import { IPokemonService } from "./service.interface";


export class PokemonService implements IPokemonService {

    constructor(private pokemonRepository: IPokemonRepository){}

    public loadMany = async ({ limit, offset }: { offset: string; limit: string; }): Promise<IResult> => {
        const result = await this.pokemonRepository.loadMany({limit, offset})
        return result
    }

    public findOneById = async (id: string): Promise<IPokemon> => {
        return await this.pokemonRepository.findOneById(id)
    }

}