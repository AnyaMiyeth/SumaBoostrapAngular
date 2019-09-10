import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {


 sumaForm;

  

  constructor(formBuilder: FormBuilder) {
    this.sumaForm = formBuilder.group({
    numero1: [0, Validators.required],
    numero2: [0, Validators.required],
    resultado: 0
    });
   }


  ngOnInit() {
  }


  sumar(numeroData) {
    numeroData.resultado =numeroData.numero1 + numeroData.numero2;
    console.warn('Your order has been submitted', numeroData);
   // this.checkoutForm.reset();
  }

}
