import { IPokemon, IPokemonItem } from "./domain.interfaces"

export interface IResult {
    count: number
    next: string | null
    previous: string | null
    results: IPokemonItem[]
}

export interface IPokemonRepository {
    loadMany: ({limit, offset}: {offset: string, limit: string}) => Promise<IResult>
    findOneById: (id: string) => Promise<IPokemon>
}