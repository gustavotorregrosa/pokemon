import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from "./pokedex-app.component";
import { PokemonService } from "./pokemon/pokemon.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PokemonTableComponent } from "./pokemon-table/pokemon-table.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PokemonTableComponent
  ],
  providers: [
    PokemonService,
    provideAnimationsAsync(),
  ],
  declarations: [
    PokedexAppComponent,
  ],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
