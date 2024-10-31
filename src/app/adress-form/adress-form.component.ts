import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from "@angular/common";
import {Address} from "./address";
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-adress-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    MatButton,
    MatSlideToggle
  ],
  templateUrl: './adress-form.component.html',
  styleUrl: './adress-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdressFormComponent {

  city: FormControl<string | null> = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  street: FormControl<string | null> = new FormControl('');

  @Output("emitAddressValue") addressFormValue: EventEmitter<Address> = new EventEmitter();

  @Input() public addressTitle: string = "Address form to complete";

  /**
   * formGroup qui représente l'adresse complète saisie :
   * @city
   * @street
   */
  addressFormGroup: FormGroup;


  constructor() {
    this.addressFormGroup = new FormGroup({
      city: this.city,
      street: this.street
    });
  }


  emitAddressValue(): void {
    if (this.addressFormGroup.valid) {
      this.addressFormValue.emit(this.addressFormGroup.value);
    }
  }
}
