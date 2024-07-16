interface ICries {
    latest: string
    legacy: string
}

interface ISprites {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

interface IMove {
    name: string
    url: string
}

interface IAbility {
    name: string
    url: string
}

export interface IPokemonItem {
    id: string
    name: string
    url: string
}

export interface IPokemon extends Omit<IPokemonItem, 'url'> {
    cries: ICries
    sprites: ISprites
    weight: number
    height: number
    moves: IMove[]
    ability: IAbility[]
    descripton?: string

}