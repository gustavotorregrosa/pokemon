import { IPokemon } from "src/@domains/pokemon/domain.interfaces";
import { IPokemonRepository, IResult } from "src/@domains/pokemon/repository.interface";

export class PokemonRepository implements IPokemonRepository {

    public loadMany = async ({limit, offset}): Promise<IResult> => {

        let url = 'https://pokeapi.co/api/v2/pokemon?' 
        if(limit){
            url += `limit=${limit}`
        }

        if(offset){
            if(limit){
                url += '&'
            }
            
            url += `offset=${offset}`
        }

        const response = await fetch(url)
        return await response.json() as IResult

    }

    public findOneById = async (id) : Promise<IPokemon> => {
        let url = 'https://pokeapi.co/api/v2/pokemon/'+id 
        const response = await fetch(url)
        return await response.json() as IPokemon

    }

}