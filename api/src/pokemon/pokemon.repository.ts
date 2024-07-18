import { IPokemon, IPokemonItem } from "src/@domains/pokemon/domain.interfaces";
import { IPokemonRepository, IResult } from "src/@domains/pokemon/repository.interface";

export class PokemonRepository implements IPokemonRepository {

    public loadMany = async ({limit, offset}): Promise<IResult> => {

        const testing = process.env.API_URL
        console.log({testing})

        let url = process.env.API_URL + '/pokemon?' 
        if(limit) url += `limit=${limit}`
        
        if(offset){
            if(limit) url += '&'
            url += `offset=${offset}`
        }

        const response = await fetch(url)

        const result = await response.json() as IResult
        result.next = result.next ? result.next.split('?')[1] : null
        result.previous = result.previous ? result.previous.split('?')[1] : null

        result.results = result.results.map(pokemon => {
            const _pokemon: IPokemonItem = {...pokemon}
            _pokemon.id = _pokemon.url.split('/')[_pokemon.url.split('/').length -2]
            _pokemon.url = ''
            return _pokemon
        })

        return result

    }

    public findOneById = async (id) : Promise<IPokemon> => {
        let url =  process.env.API_URL + '/pokemon/'+id 
        const response = await fetch(url)
        return await response.json() as IPokemon

    }

}