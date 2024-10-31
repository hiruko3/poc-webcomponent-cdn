import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdressFormComponent} from './adress-form.component';
import {By} from "@angular/platform-browser";

describe('AdressFormComponent', () => {
  let component: AdressFormComponent;
  let fixture: ComponentFixture<AdressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdressFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with default value', () => {
    expect(component).toBeTruthy();
    expect(component.city.value).toEqual('')
    expect(component.street.value).toEqual('')
  });

  it('form is not valid if there is no city value', () => {
    expect(component.addressFormGroup.valid).toBeFalse();
  });

  it('form is valid if there is only city value', () => {
    component.city.setValue("city");
    expect(component.addressFormGroup.valid).toBeTruthy();
  });

  it('form emit its value only if valid', () => {

    spyOn(component.addressFormValue, 'emit');

    component.city.setValue("city");
    component.street.setValue("avenue franklin");

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.addressFormValue.emit).toHaveBeenCalledWith({
      city: "city", street: "avenue franklin"
    });
  });
});
