import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import { IPokemon, IPokemonItem, IResult } from "./pokemon.interfaces";

@Injectable()
export class PokemonService {

    public count: number = 0
    public next: string | null = null
    public previous: string | null = null
    public results: IPokemonItem[] = []
    public singlePokemonList: IPokemon[] = []

    public async loadPokemons(currentOffset: number, limit: number){
        const url = currentOffset ? `${environment.apiKey}?offset=${currentOffset + limit}&limit=${limit}` : environment.apiKey
        const response = await fetch(url)
        const result = await response.json() as IResult

        const {count, next, previous, results} = result

        this.count = count
        this.next = next
        this.previous = previous
        results.map(pokeItem => {
            if(!this.results.find(_pokeItem => pokeItem.id == _pokeItem.id)){
                this.results.push(pokeItem)
            }
        })
    }

    public async getInfoForPokemon(id: string): Promise<IPokemon> {
        let singlePokemon = this.singlePokemonList.find(_pokemon => _pokemon.id == id)
        if(singlePokemon) return singlePokemon

        const response = await fetch(`${environment.apiKey}/${id}`)
        const result = await response.json() as any
        console.log({result})
        const {cries, sprites, weight, height, moves, abilities, name} = result

        singlePokemon = {
            cries, sprites, weight, height, moves, id, name,
            ability: abilities.map((_ability: any) => _ability.ability.name).join(', '),
        
        }
        this.singlePokemonList.push(singlePokemon)

        return singlePokemon

    }

}
