import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './@domains/pokemon/service';
import { PokemonRepository } from './pokemon/pokemon.repository';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [
    {
      provide: PokemonService,
      useFactory: () => new PokemonService(new PokemonRepository())
    }
  ],
})
export class PokedexApiModule {}
