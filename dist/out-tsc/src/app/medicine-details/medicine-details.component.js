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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MedicineDetailsComponent = /** @class */ (function () {
    function MedicineDetailsComponent(router, http) {
        this.router = router;
        this.http = http;
        this.API_URL = 'http://api.pillpresso.com/';
        this.medicineDetails = [];
        this.slots = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.foodInst = ["", "No food instructions", "Before food", "With food", "After food"];
    }
    MedicineDetailsComponent.prototype.ngOnInit = function () {
        this.id = this.router.snapshot.paramMap.get('id');
        this.getMedicineDetails(this.id);
    };
    MedicineDetailsComponent.prototype.getMedicineDetails = function (id) {
        var _this = this;
        this.http.get(this.API_URL + 'api/medication/getMedicine/' + id).subscribe(function (response) {
            console.log('response', response);
            _this.medicineDetails = response['docs'];
            _this.enable = _this.medicineDetails['status'];
            _this.enStatus = _this.enable.toString();
            _this.quantity = _this.medicineDetails['stock'];
        }, function (error) {
            console.log('error', error);
        });
    };
    MedicineDetailsComponent.prototype.updateState = function (type, value) {
        console.log('update status', type, value);
        var data;
        if (type == "status") {
            data = { "status": value };
        }
        else if (type == "critical") {
            data = { "critical": value };
        }
        this.http.put(this.API_URL + 'api/medication/statusActiveCritical/' + this.id, data).subscribe(function (res) {
            if (res) {
                console.log('res', res);
            }
        }, function (Error) {
            console.log('Error', Error);
        });
    };
    MedicineDetailsComponent.prototype.refillmedicine = function (id) {
        if (this.quantity != '' && this.quantity > 0) {
            this.http.put(this.API_URL + 'api/medication/refillMeds/' + id, { "quantity": this.quantity }).subscribe(function (res) {
                console.log('Add quentity res', res);
            });
        }
        else {
            return false;
        }
    };
    MedicineDetailsComponent.prototype.deleteMedicine = function () {
        this.http.delete(this.API_URL + 'api/user/removeMedicine/' + this.id).subscribe(function (res) {
            console.log('res', res);
        }, function (error) {
            console.log('error', error);
        });
    };
    MedicineDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-medicine-details',
            templateUrl: './medicine-details.component.html',
            styleUrls: ['./medicine-details.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.HttpClient])
    ], MedicineDetailsComponent);
    return MedicineDetailsComponent;
}());
exports.MedicineDetailsComponent = MedicineDetailsComponent;
//# sourceMappingURL=medicine-details.component.js.map