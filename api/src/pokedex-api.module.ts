import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './@domains/pokemon/service';
import { PokemonRepository } from './pokemon/pokemon.repository';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [PokemonController],
  providers: [
    {
      provide: PokemonService,
      useFactory: () => new PokemonService(new PokemonRepository())
    }
  ],
})
export class PokedexApiModule {}
