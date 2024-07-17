import { IAbility, ICries, IMove, IPokemon, ISprites } from "./domain.interfaces";

export class Pokemon implements IPokemon {

    constructor(public id: string, public name: string, public cries: ICries, public sprites: ISprites, public weight: number, public height: number, public moves: IMove[], public ability: IAbility[], public description: string){}

}