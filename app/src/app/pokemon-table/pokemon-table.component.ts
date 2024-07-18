import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { PokemonService } from '../pokemon/pokemon.service';
import { IPokemon, IPokemonItem } from '../pokemon/pokemon.interfaces';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PokemonViewModalComponent } from '../pokemon-view-modal/pokemon-view-modal.component';

@Component({
  selector: 'app-pokemon-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatIconModule],
  templateUrl: './pokemon-table.component.html',
  styleUrl: './pokemon-table.component.scss'
})
export class PokemonTableComponent implements AfterViewInit, OnInit {

  constructor(private pokemonService: PokemonService, public dialog: MatDialog){}

  ngOnInit(): void {}

  displayedColumns: string[] = ['id','name', 'view'];
  dataSource = new MatTableDataSource<IPokemonItem>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  async ngAfterViewInit() {
    this.paginator && (this.dataSource.paginator = this.paginator);
    await this.pokemonService.loadPokemons(0, 0)
    this.dataSource.data = this.pokemonService.results
    setTimeout(() => {
      this.paginator!.length = this.pokemonService.count
    }, 500)
  }

  public viewPokemon(e: any){
    this.openViewPokemonModal(e.id)
  }


  async openViewPokemonModal(id: string): Promise<void> {

    const pokemon: IPokemon = await this.pokemonService.getInfoForPokemon(id)

    console.log({pokemon})

    const dialogRef = this.dialog.open(PokemonViewModalComponent, {
      data: { ...pokemon }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async getPaginatorData(e: any){
    const currentOffset = e.pageSize * e.pageIndex
    if((currentOffset + e.pageSize) >=  Number(this.pokemonService.results[this.pokemonService.results.length -1].id)){
      await this.pokemonService.loadPokemons(currentOffset, e.pageSize)
      this.dataSource.data = this.pokemonService.results
      this.paginator!.length = this.pokemonService.count
    }
    
  }

}



