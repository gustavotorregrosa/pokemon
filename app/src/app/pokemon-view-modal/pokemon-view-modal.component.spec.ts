import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonViewModalComponent } from './pokemon-view-modal.component';

describe('PokemonViewModalComponent', () => {
  let component: PokemonViewModalComponent;
  let fixture: ComponentFixture<PokemonViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonViewModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
