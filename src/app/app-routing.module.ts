import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { MedicationComponent } from './medication/medication.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'addMedicine', component: AddMedicineComponent },
  { path: 'medication', component: MedicationComponent },
  { path: 'medicineDetails/:id', component: MedicineDetailsComponent },
  { path: 'verification', component: VerificationComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
