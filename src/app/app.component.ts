import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdressFormComponent} from "./adress-form/adress-form.component";
import {Address} from "./adress-form/address";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdressFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularElement';

  displayValue(addressForm: Address) {
    console.log(addressForm)
  }
}
