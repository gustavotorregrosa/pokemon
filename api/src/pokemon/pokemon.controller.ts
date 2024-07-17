import { Controller, Get, Param, Query } from "@nestjs/common";
import { PokemonService } from "src/@domains/pokemon/service";

@Controller('pokemon')
export class PokemonController {

    constructor(private pokemonService: PokemonService){}

    @Get()
    public getList(@Query() {offset, limit}: any){
        return this.pokemonService.loadMany({limit, offset})
    }

    @Get(':id')
    public getOne(@Param('id') id: string){
        return this.pokemonService.findOneById(id)
    }


}
