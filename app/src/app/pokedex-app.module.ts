import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from "./pokedex-app.component";
import { PokemonService } from "./pokemon/pokemon.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PokemonTableComponent } from "./pokemon-table/pokemon-table.component";
import { PokemonViewModalComponent } from "./pokemon-view-modal/pokemon-view-modal.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PokemonTableComponent,
    PokemonViewModalComponent
  ],
  providers: [
    { 
      provide: MAT_DIALOG_DATA, 
      useValue: {} 
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
    PokemonService,
    provideAnimationsAsync(),
  ],
  declarations: [
    PokedexAppComponent,
  ],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
