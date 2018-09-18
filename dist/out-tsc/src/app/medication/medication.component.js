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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var MedicationComponent = /** @class */ (function () {
    function MedicationComponent(http, router) {
        this.http = http;
        this.router = router;
        this.boxes = [];
        this.slots = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.currentMeds = [];
        this.outsidemed = [];
        this.API_URL = 'http://api.pillpresso.com/';
        this.tabVal = [1, 2, 3];
        this.refillMedi = [];
        this.view = 1;
        this.boxesList = [];
    }
    MedicationComponent.prototype.ngOnInit = function () {
        this.getAllMedicineData();
    };
    MedicationComponent.prototype.changeView = function (vw) {
        if (vw == 0) {
            this.view = 1;
        }
        else {
            this.view = 0;
        }
    };
    MedicationComponent.prototype.getAllMedicineData = function () {
        var _this = this;
        this.http.get(this.API_URL + "api/medication/myAllMedicine/599b1480446ce64f19f59707").subscribe(function (res) {
            if (res) {
                res['docs'].forEach(function (item) {
                    if (item._id == true) {
                        console.log('Doc [0]', item['data']);
                        _this.outsidemed = item['data'];
                    }
                    else if (item._id == false) {
                        console.log('Doc [1]', item);
                    }
                    else if (item._id == "refill") {
                        console.log('Doc [2]', item);
                        _this.refillMedi = item.data;
                    }
                    else if (item._id == "grid") {
                        console.log('Doc [3]', item);
                        _this.boxes = item.data;
                        if (item.data) {
                            item.data.forEach(function (listData) {
                                if (listData.mesg == 'current') {
                                    _this.boxesList.push(listData);
                                    console.log('boxesList1111111111', _this.boxesList);
                                }
                            });
                        }
                    }
                });
            }
        });
    };
    MedicationComponent.prototype.getDetails = function (details, index) {
        console.log("details:-", details);
        if (details._id !== "") {
            this.router.navigate(['/medicineDetails', details._id]);
        }
        else {
            console.log("Add button");
            this.router.navigate(['/addMedicine']);
        }
    };
    MedicationComponent.prototype.isString = function (val) {
        if (typeof (val) == 'string') {
            return true;
        }
    };
    MedicationComponent.prototype.isShow = function (val) {
        console.log('Val:11111', val);
        if (val === "current") {
            return true;
        }
    };
    MedicationComponent.prototype.tabChange = function (state) {
        console.log('Tab state', state);
        // this.tabVal=state;
    };
    MedicationComponent = __decorate([
        core_1.Component({
            selector: 'app-medication',
            templateUrl: './medication.component.html',
            styleUrls: ['./medication.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], MedicationComponent);
    return MedicationComponent;
}());
exports.MedicationComponent = MedicationComponent;
//# sourceMappingURL=medication.component.js.map