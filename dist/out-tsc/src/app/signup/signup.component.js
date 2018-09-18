"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.type = 'password';
        this.eye = 'fa fa-eye';
        this.submitted = false;
        this.signUp = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            country: ['', forms_1.Validators.required],
            mobile: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
            emailAvai: ['']
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.readPassword = function (typ) {
        if (typ == 'password') {
            this.type = 'text';
            this.eye = 'fa fa-eye-slash';
        }
        else {
            this.type = 'password';
            this.eye = 'fa fa-eye';
        }
    };
    SignupComponent.prototype.onSubmit = function () {
        console.log('this.signUp.controls', this.signUp);
        this.submitted = true;
        // stop here if form is invalid
        if (this.signUp.invalid) {
            console.log("Gb");
            return;
        }
        else {
            console.log("Proceed next");
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUp.value));
    };
    SignupComponent.prototype.emailNothave = function () {
        console.log("emailNothave", this.signUp.controls.emailAvai.value);
        // this.signUp.controls['email'].clearValidators();
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map