import { Component, Inject, inject, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pokemon-view-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './pokemon-view-modal.component.html',
  styleUrl: './pokemon-view-modal.component.scss'
})
export class PokemonViewModalComponent {
  
  constructor(public dialogRef: MatDialogRef<PokemonViewModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
  
}
