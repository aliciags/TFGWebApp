import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  public addForm: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<any>) {
    this.addForm = this.fb.group({
      ingredient: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    if(this.addForm.valid) {
      this.onClose();
    }
  }

  onClose(): void{
    this.dialogRef.close();
  }

}
