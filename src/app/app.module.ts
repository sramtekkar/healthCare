import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { MedicationComponent } from './medication/medication.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { SignupComponent } from './signup/signup.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { VerificationComponent } from './verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedicineComponent,
    MedicationComponent,
    MedicineDetailsComponent,
    SignupComponent,
    VerificationComponent
  ],
  imports: [
    TypeaheadModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiSwitchModule,
    ReactiveFormsModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
