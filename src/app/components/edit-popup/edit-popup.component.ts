import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../../types';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormsModule, Validators,ValidatorFn, ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule,CommonModule,FormsModule,RatingModule,ButtonModule,ReactiveFormsModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss'
})
export class EditPopupComponent {
productForm:any;
constructor(private formBuilder:FormBuilder){
  this.productForm=this.formBuilder.group({
    name:['',[Validators.required,this.specialCharacterValidator()]],
    image:[''],
    price:['',[Validators.required]],
    rating:[0],
  });
}
@Input() display: boolean = false;
@Output() confirm = new EventEmitter<Product>();
@Input() header!: string;
@Output() displayChange = new EventEmitter<boolean>();
@Input() product: Product={
  name: '',
  image: '',
  price: '',
  rating: 0
}

specialCharacterValidator():ValidatorFn{
  return (control) => {
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);
    return hasSpecialCharacter ? { hasSpecialCharacter: true } : null;
  }
}
ngOnChanges(){
  this.productForm.patchValue(this.product);
}

onConfirm() {
  this.confirm.emit({
    name : this.productForm.value.name || '',
    image : this.productForm.value.image || '',
    price : this.productForm.value.price || '',
    rating : this.productForm.value.rating || 0
  });
  this.display = false;
  this.displayChange.emit(this.display);
}

onCancel() {
  this.display = false;
  this.displayChange.emit(this.display);
}

}
