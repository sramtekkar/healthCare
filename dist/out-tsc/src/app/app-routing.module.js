"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var signup_component_1 = require("./signup/signup.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_medicine_component_1 = require("./add-medicine/add-medicine.component");
var medication_component_1 = require("./medication/medication.component");
var medicine_details_component_1 = require("./medicine-details/medicine-details.component");
var routes = [
    { path: '', component: signup_component_1.SignupComponent },
    { path: 'addMedicine', component: add_medicine_component_1.AddMedicineComponent },
    { path: 'medication', component: medication_component_1.MedicationComponent },
    { path: 'medicineDetails/:id', component: medicine_details_component_1.MedicineDetailsComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map