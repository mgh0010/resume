(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<main>\n  <app-topnav></app-topnav>\n  <app-cart-icon></app-cart-icon>\n  <router-outlet></router-outlet>\n</main>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topnav/topnav.component */ "./src/app/topnav/topnav.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skill-list/skill-list.component */ "./src/app/skill-list/skill-list.component.ts");
/* harmony import */ var _cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart-icon/cart-icon.component */ "./src/app/cart-icon/cart-icon.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./attribute-list/attribute-list.component */ "./src/app/attribute-list/attribute-list.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
    { path: 'landing-page', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__["ShopComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"] },
    { path: 'work-history', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__["JobsComponent"],
                _job_job_component__WEBPACK_IMPORTED_MODULE_5__["JobComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_8__["TopnavComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__["ShopComponent"],
                _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_10__["SkillListComponent"],
                _cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_11__["CartIconComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"],
                _attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_14__["AttributeListComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attribute-list/attribute-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/attribute-list/attribute-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attr-card {\n  display: block;\n}\n\n.selected {\n  background-color: #E57373;\n  color: #212121 !important;\n}\n\n.attr-card-container {\n  padding-top: .5em;\n  padding-bottom: .5em;\n}\n\n.attr-card:hover {\n  background-color: #E57373;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/attribute-list/attribute-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/attribute-list/attribute-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <p> <span class=\"myp\">Choose</span> the attributes you're looking for!</p>\n  </div>\n  <div *ngFor=\"let attr of ms.attributes()\" class=\"col attr-card-container s12\">\n    <div class=\"attr-card waves-effect waves-purple z-depth-2 hoverable\"\n         [id]=\"takeAwaySpaces(attr)\"\n         (click)=\"toggleAttributeSelect(attr)\">\n      <h5 class=\"center\">{{attr}}</h5>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/attribute-list/attribute-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/attribute-list/attribute-list.component.ts ***!
  \************************************************************/
/*! exports provided: AttributeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeListComponent", function() { return AttributeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_michael_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/michael.service */ "./src/app/services/michael.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttributeListComponent = /** @class */ (function () {
    function AttributeListComponent(ms, cs) {
        this.ms = ms;
        this.cs = cs;
    }
    AttributeListComponent.prototype.ngOnInit = function () {
    };
    AttributeListComponent.prototype.ngAfterViewInit = function () {
        this.reselectChosenAttributes();
    };
    AttributeListComponent.prototype.reselectChosenAttributes = function () {
        for (var _i = 0, _a = this.ms.attributes(); _i < _a.length; _i++) {
            var attr = _a[_i];
            if (this.cs.chosenAttributes.includes(attr)) {
                $('#' + this.takeAwaySpaces(attr)).addClass('selected');
            }
        }
    };
    AttributeListComponent.prototype.toggleAttributeSelect = function (attr) {
        // get the attr object
        var attr_object = $('#' + this.takeAwaySpaces(attr));
        if (this.cs.chosenAttributes.includes(attr)) {
            // remove the selected class
            attr_object.removeClass('selected');
            // remove the attr from the attr list
            this.cs.removeAttribute(attr);
        }
        else {
            // add the selected class
            attr_object.addClass('selected');
            // add the attr to the attr list
            this.cs.addAttribute(attr);
        }
    };
    AttributeListComponent.prototype.takeAwaySpaces = function (str) {
        return str.replace(/ /g, '');
    };
    AttributeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attribute-list',
            template: __webpack_require__(/*! ./attribute-list.component.html */ "./src/app/attribute-list/attribute-list.component.html"),
            styles: [__webpack_require__(/*! ./attribute-list.component.css */ "./src/app/attribute-list/attribute-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_michael_service__WEBPACK_IMPORTED_MODULE_1__["MichaelService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], AttributeListComponent);
    return AttributeListComponent;
}());



/***/ }),

/***/ "./src/app/cart-icon/cart-icon.component.css":
/*!***************************************************!*\
  !*** ./src/app/cart-icon/cart-icon.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopping-cart-icon {\n  color: #E57373;\n  cursor: pointer;\n  padding: 1em .5em .3em 0.5em;\n}\n\n"

/***/ }),

/***/ "./src/app/cart-icon/cart-icon.component.html":
/*!****************************************************!*\
  !*** ./src/app/cart-icon/cart-icon.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mb-0\">\n    <div class=\"col s3 center\">\n      <a href=\"/#/shop\">\n        <i class=\"material-icons shopping-cart-icon waves-effect waves-purple tooltipped\"\n           data-position=\"bottom\"\n           data-tooltip=\"Shop\">\n          shopping_basket</i>\n      </a>\n    </div>\n    <div class=\"col s3 center\">\n        <a href=\"/#/cart\">\n          <i class=\"material-icons shopping-cart-icon waves-effect waves-purple tooltipped\"\n             data-position=\"bottom\"\n             data-tooltip=\"Cart\">\n            shopping_cart</i>\n        </a>\n        <span class=\"myp\">{{cs.numItemsInCart()}}</span>\n    </div>\n    <div class=\"col s3 center\">\n      <a href=\"/#/work-history\">\n        <i class=\"material-icons shopping-cart-icon waves-effect waves-purple tooltipped\"\n           data-position=\"bottom\"\n           data-tooltip=\"Work History\">\n          folder_shared</i>\n      </a>\n    </div>\n    <div class=\"col s3 center\">\n      <a href=\"/#/projects\">\n        <i class=\"material-icons shopping-cart-icon waves-effect waves-purple tooltipped\"\n           data-position=\"bottom\"\n           data-tooltip=\"Projects\">\n          work</i>\n      </a>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/cart-icon/cart-icon.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cart-icon/cart-icon.component.ts ***!
  \**************************************************/
/*! exports provided: CartIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartIconComponent", function() { return CartIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartIconComponent = /** @class */ (function () {
    function CartIconComponent(cs) {
        this.cs = cs;
    }
    CartIconComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.tooltipped').tooltip();
        });
    };
    CartIconComponent.prototype.ngOnDestroy = function () {
        $('.tooltipped').close();
    };
    CartIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-icon',
            template: __webpack_require__(/*! ./cart-icon.component.html */ "./src/app/cart-icon/cart-icon.component.html"),
            styles: [__webpack_require__(/*! ./cart-icon.component.css */ "./src/app/cart-icon/cart-icon.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartIconComponent);
    return CartIconComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cart-header {\n  margin-top: 0;\n}\n\ni {\n  cursor: pointer;\n}\n\ni:hover {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a href=\"/#/shop\"><i class=\"material-icons waves-purple waves-effect white-text\">arrow_back</i></a>\n</div>\n<h1 class=\"center mys animated fast invisible\" id=\"cart-header\">Cart</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <ul>\n        <h4 class=\"mys invisible animated fast\" id=\"chosen-skill-header\">Chosen Skills</h4>\n        <li class=\"card-panel mysbg mya invisible animated fast\"\n            *ngFor=\"let skill of cs.chosenSkills; let i = index\"\n            [id]=\"'skill' + i\">\n          {{skill}}\n          <span class=\"right\">\n            <i class=\"material-icons waves-effect waves-purple\" (click)=\"cs.removeSkill(skill)\">delete</i>\n          </span>\n        </li>\n      </ul>\n      <ul>\n        <h4 class=\"myp invisible animated fast\" id=\"chosen-attr-header\">Chosen Attributes</h4>\n        <li class=\"card-panel mypbg mya invisible animated fast\"\n            *ngFor=\"let attr of cs.chosenAttributes; let i = index\"\n            [id]=\"'attr' + i\">\n          {{attr}}\n          <span class=\"right\">\n            <i class=\"material-icons waves-effect waves-purple\" (click)=\"cs.removeAttribute(attr)\">delete</i>\n          </span>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <h2 class=\"center animated invisible\" id=\"go-to-checkout-btn\">\n    <a class=\"btn btn-large mysbg waves-effect waves-purple mya\"\n       href=\"/#/checkout\">\n      Find your Web Developer\n    </a>\n  </h2>\n</div>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/animation.service */ "./src/app/services/animation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(cs, as) {
        this.cs = cs;
        this.as = as;
        this.time = 0;
    }
    CartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var myHeader = document.getElementById('side-nav-header');
        myHeader.scrollTop = 0;
        setTimeout(function () {
            _this.as.animateIn('#cart-header', 'fadeInUp');
        }, this.time);
        this.time += 250;
        this.animateInCartItems();
        this.animateInCheckoutBtn();
    };
    CartComponent.prototype.animateInCartItems = function () {
        var _this = this;
        // animate in skill header
        setTimeout(function () {
            _this.as.animateIn('#chosen-skill-header', 'flipInX');
        }, this.time);
        var cartItem;
        var _loop_1 = function (index) {
            setTimeout(function () {
                cartItem = $('#skill' + index);
                _this.as.animateIn(cartItem, 'flipInX');
            }, this_1.time);
            this_1.time += 250;
        };
        var this_1 = this;
        // animate in Skills
        for (var index = 0; index < this.cs.chosenSkills.length; ++index) {
            _loop_1(index);
        }
        // animate in attribute header
        setTimeout(function () {
            _this.as.animateIn('#chosen-attr-header', 'flipInX');
        }, this.time);
        var _loop_2 = function (index) {
            setTimeout(function () {
                cartItem = $('#attr' + index);
                _this.as.animateIn(cartItem, 'flipInX');
            }, this_2.time);
            this_2.time += 250;
        };
        var this_2 = this;
        // animate in Attributes
        for (var index = 0; index < this.cs.chosenAttributes.length; ++index) {
            _loop_2(index);
        }
    };
    CartComponent.prototype.animateInCheckoutBtn = function () {
        var _this = this;
        setTimeout(function () {
            _this.as.animateIn('#go-to-checkout-btn', 'fadeIn');
        }, this.time);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _services_animation_service__WEBPACK_IMPORTED_MODULE_2__["AnimationService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#me-img {\n  max-height: 25em;\n}\n\n.link-btn {\n  width: 75% !important;\n  padding: 0 4px !important;\n}\n\n.link-btn:hover {\n  opacity: .8;\n}\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row center\">\n    <h3 class=\"invisible animated fast\" id=\"man-for-job-txt\">Meet your new\n      <span class=\"myp\">\n        web developer!\n      </span>\n    </h3>\n    <img src=\"/assets/images/me.jpeg\" class=\"responsive-img circle invisible animated fast\" id=\"me-img\">\n  </div>\n</div>\n<div class=\"hide-on-small-and-down\">\n  <div class=\"row\">\n    <div class=\"col s4 center p-0\">\n      <a id=\"work-history-btn-large\"\n         class=\"link-btn btn btn-large waves-effect waves-purple btn-flat center mypbg\n                invisible animated fast\"\n         href=\"/#/work-history\">\n        Work History</a>\n    </div>\n    <div class=\"col s4 center p-0\">\n      <a id=\"projects-btn-large\"\n         class=\"link-btn btn btn-large waves-effect waves-purple btn-flat center mysbg\n                invisible animated fast\"\n         href=\"/#/projects\">\n        Projects</a>\n    </div>\n    <div class=\"col s4 center p-0\">\n      <a id=\"about-me-btn-large\"\n         class=\"link-btn btn btn-large waves-effect waves-purple btn-flat center myalbg\n                invisible animated fast\"\n         href=\"/#/about-me\">\n        About Me</a>\n    </div>\n  </div>\n</div>\n<div class=\"hide-on-med-and-up\">\n  <div class=\"row\">\n    <div class=\"col s4 center p-0\">\n      <a id=\"work-history-btn\"\n         class=\"link-btn btn waves-effect waves-purple btn-flat center mypbg\n                invisible animated fast\"\n         href=\"/#/work-history\">\n        Work History</a>\n    </div>\n    <div class=\"col s4 center p-0\">\n      <a id=\"projects-btn\"\n         class=\"link-btn btn waves-effect waves-purple btn-flat center mysbg\n                invisible animated fast\"\n         href=\"/#/projects\">\n        Projects</a>\n    </div>\n    <div class=\"col s4 center p-0\">\n      <a id=\"about-me-btn\"\n         class=\"link-btn btn waves-effect waves-purple btn-flat center myalbg\n                invisible animated fast\"\n         href=\"/#/about-me\">\n        About Me</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/animation.service */ "./src/app/services/animation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(as) {
        this.as = as;
        this.time = 0;
    }
    CheckoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.as.animateIn('#man-for-job-txt', 'flipInX');
        }, this.time);
        this.time += 250;
        setTimeout(function () {
            _this.as.animateIn('#me-img', 'fadeIn');
        }, this.time);
        this.loadInBtns();
        this.loadInLargeBtns();
    };
    CheckoutComponent.prototype.loadInBtns = function () {
        var _this = this;
        setTimeout(function () {
            _this.as.animateIn('#work-history-btn', 'fadeInUp');
        }, this.time);
        setTimeout(function () {
            _this.as.animateIn('#projects-btn', 'fadeInUp');
        }, this.time);
        setTimeout(function () {
            _this.as.animateIn('#about-me-btn', 'fadeInUp');
        }, this.time);
    };
    CheckoutComponent.prototype.loadInLargeBtns = function () {
        var _this = this;
        setTimeout(function () {
            _this.as.animateIn('#work-history-btn-large', 'fadeInUp');
        }, this.time);
        setTimeout(function () {
            _this.as.animateIn('#projects-btn-large', 'fadeInUp');
        }, this.time);
        setTimeout(function () {
            _this.as.animateIn('#about-me-btn-large', 'fadeInUp');
        }, this.time);
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_animation_service__WEBPACK_IMPORTED_MODULE_1__["AnimationService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/job/job.component.css":
/*!***************************************!*\
  !*** ./src/app/job/job.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/job/job.component.html":
/*!****************************************!*\
  !*** ./src/app/job/job.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  job works!\n</p>\n"

/***/ }),

/***/ "./src/app/job/job.component.ts":
/*!**************************************!*\
  !*** ./src/app/job/job.component.ts ***!
  \**************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobComponent = /** @class */ (function () {
    function JobComponent() {
    }
    JobComponent.prototype.ngOnInit = function () {
    };
    JobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.css */ "./src/app/job/job.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/*!*****************************************!*\
  !*** ./src/app/jobs/jobs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".job-icon {\n  padding-top: 1em;\n}\n\n.experience-card-panel {\n  margin-left: 2em;\n  margin-right: 2em;\n  border: solid #EE6E73 2px;\n}\n"

/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center mys animated invisible fast\" id=\"exp-header\">Work History</h1>\n<div *ngFor=\"let job of getJobs(); let i = index\">\n  <div [id]=\"'job' + i\" class=\"row card-panel experience-card-panel myabg invisible fast animated\">\n    <div class=\"col s12 m2 offset-m1 center\">\n      <i class=\"large material-icons job-icon myp\">{{jobs[job]['icon']}}</i>\n      <h6>{{jobs[job]['time']}}</h6>\n    </div>\n    <div class=\"col s12 m8\">\n      <blockquote>\n      <div class=\"center\">\n        <h2 class=\"mys\">{{jobs[job]['title']}}</h2>\n        <h4 class=\"myp\">{{jobs[job]['company']}}</h4>\n        <h5><i class=\"material-icons\">location_on</i>{{jobs[job]['location']}}</h5>\n        <h6>{{jobs[job]['description']}}</h6>\n      </div>\n      </blockquote>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/*!****************************************!*\
  !*** ./src/app/jobs/jobs.component.ts ***!
  \****************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/animation.service */ "./src/app/services/animation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobsComponent = /** @class */ (function () {
    function JobsComponent(as) {
        this.as = as;
        this.time = 0;
        this.jobs = {
            'selex': {
                'title': 'Software Engineer',
                'company': 'Selex Galileo Inc',
                'location': 'Huntsville, AL',
                'time': 'August 2018 - Present',
                'description': 'Build and maintain C++ Electronic Warfare Avionic Systems with Rhapsody and Visual Studio.',
                'icon': 'airplanemode_active'
            },
            'saturn': {
                'title': 'Angular Software Developer',
                'company': 'Saturn Ergonomics',
                'location': 'Auburn, AL',
                'time': 'May 2018 - Aug 2018',
                'description': "Research, Design, and development a web-based suite of calculators for the ergonomic industry.\n        The web application consists of an Angular 6 front-end with flask server back-end in python with MySQL\n        database.",
                'icon': 'code'
            },
            'adtran1': {
                'title': 'User Experience Co-op',
                'company': 'ADTRAN',
                'location': 'Huntsville, AL',
                'time': 'May 2016 - Aug 2016',
                'description': "Design User interfaces per User Experience guidelines for several widgets in\n        ADTRAN's MOSAIC framework. Design these widgets by means of heavy research, user testing,\n        gathering feedback, drawing mockups, presenting mockups, and refining designs to best meet user needs.",
                'icon': 'widgets'
            },
            'adtran2': {
                'title': 'System Software Team Co-op',
                'company': 'ADTRAN',
                'location': 'Huntsville, AL',
                'time': 'Aug 2015 - Dec 2015',
                'description': "Optimize current data structure algorithms in C++ and C using STL containers.\n        Construct more efficient data structure for OS timer handling and implement into the existing\n        kernel code. Write many tests for own code with gtest framework.",
                'icon': 'sd_card'
            },
            'adtran3': {
                'title': 'Systems Design and Verification Test Co-op',
                'company': 'ADTRAN',
                'location': 'Huntsville, AL',
                'time': 'Jan 2015 - May 2015',
                'description': "Work closely with a Triple Play Testbed. Upgrade the network, configure new services\n        and write python scripts and python app to speed up redundant interaction with testbed and other\n        telnet accessible lab equipment.",
                'icon': 'build'
            }
        };
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.as.animateIn('#exp-header', 'fadeInUp');
        }, this.time);
    };
    JobsComponent.prototype.ngAfterViewInit = function () {
        this.animateInJobs();
    };
    JobsComponent.prototype.animateInJobs = function () {
        var _this = this;
        this.time += 250;
        var job;
        var _loop_1 = function (index) {
            setTimeout(function () {
                job = '#job' + index;
                _this.as.animateIn(job, 'fadeInUp');
            }, this_1.time);
            this_1.time += 250;
        };
        var this_1 = this;
        for (var index = 0; index < this.getJobs().length; ++index) {
            _loop_1(index);
        }
    };
    JobsComponent.prototype.getJobs = function () {
        return Object.keys(this.jobs);
    };
    JobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/jobs/jobs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_animation_service__WEBPACK_IMPORTED_MODULE_1__["AnimationService"]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row section\">\n    <div class=\"col s12\">\n      <h1 class=\"center animated invisible slow myp\" id=\"hi\">Hi</h1>\n      <h2 class=\"center animated invisible\" id=\"find-help\">\n        Let's end your search for a <span class=\"myp\">Web Developer</span> here\n      </h2>\n      <h2 class=\"center animated invisible\" id=\"go-shop\">\n        <a class=\"btn btn-large mysbg waves-effect waves-purple mya\"\n           href=\"/#/shop\">\n          Go Shop\n        </a>\n      </h2>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        $('#hi').removeClass('invisible');
        $('#hi').addClass('flipInX');
        setTimeout(function () {
            $('#find-help').removeClass('invisible');
            $('#find-help').addClass('flipInX');
        }, 1000);
        setTimeout(function () {
            $('#go-shop').removeClass('invisible');
            $('#go-shop').addClass('flipInX');
        }, 1500);
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "card:hover {\n  opacity: 70% !important;\n}\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center mys animated fast invisible\" id=\"projects-header\">Projects</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngFor=\"let project of ps.projects(); let i = index\" class=\"col s12 m6\">\n      <div class=\"card project-card hoverable invisible animated fast\" [id]=\"'project' + i\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img class=\"activator\" [src]=\"ps.projectData[project]['imageUrl']\">\n        </div>\n        <div class=\"card-content mypbg\">\n          <span class=\"card-title activator grey-text text-darken-4\">\n            {{ps.projectData[project]['name']}}\n            <i class=\"material-icons right\">more_vert</i>\n          </span>\n          <p><a class=\"btn btn-flat\" [href]=\"ps.projectData[project]['linkToSite']\">Link to project</a></p>\n        </div>\n        <div class=\"card-reveal mypbg\">\n          <span class=\"card-title grey-text text-darken-4\">\n            {{ps.projectData[project]['name']}} Details\n            <i class=\"material-icons right\">close</i>\n          </span>\n          <p class=\"mya\">{{ps.projectData[project]['details']}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projects.service */ "./src/app/services/projects.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(ps) {
        this.ps = ps;
        this.time = 0;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $('#projects-header').removeClass('invisible');
            $('#projects-header').addClass('fadeInUp');
        }, this.time);
    };
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        this.animateInProjects();
    };
    ProjectsComponent.prototype.animateInProjects = function () {
        this.time += 250;
        var job;
        var _loop_1 = function (index) {
            setTimeout(function () {
                job = $('#project' + index);
                job.removeClass('invisible');
                job.addClass('fadeInUp');
            }, this_1.time);
            this_1.time += 250;
        };
        var this_1 = this;
        for (var index = 0; index < this.ps.projects().length; ++index) {
            _loop_1(index);
        }
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-jobs></app-jobs>\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/services/animation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/animation.service.ts ***!
  \***********************************************/
/*! exports provided: AnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationService = /** @class */ (function () {
    function AnimationService() {
    }
    AnimationService.prototype.animateIn = function (id, animationClass) {
        $(id).removeClass('invisible');
        $(id).addClass(animationClass);
    };
    AnimationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AnimationService);
    return AnimationService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartService = /** @class */ (function () {
    function CartService() {
        this.chosenSkills = ['Web Dev'];
        this.chosenAttributes = ['Efficient'];
        console.log(this.numItemsInCart());
    }
    CartService.prototype.numItemsInCart = function () {
        return this.chosenSkills.length + this.chosenAttributes.length;
    };
    CartService.prototype.addSkill = function (skill) {
        this.chosenSkills.push(skill);
    };
    CartService.prototype.addAttribute = function (attr) {
        this.chosenAttributes.push(attr);
    };
    CartService.prototype.removeAttribute = function (attr_to_remove) {
        var index = 0;
        for (var _i = 0, _a = this.chosenAttributes; _i < _a.length; _i++) {
            var attr = _a[_i];
            if (attr === attr_to_remove) {
                this.chosenAttributes.splice(index, 1);
            }
            ++index;
        }
    };
    CartService.prototype.removeSkill = function (skill_to_remove) {
        var index = 0;
        for (var _i = 0, _a = this.chosenSkills; _i < _a.length; _i++) {
            var skill = _a[_i];
            if (skill === skill_to_remove) {
                this.chosenSkills.splice(index, 1);
            }
            ++index;
        }
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/michael.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/michael.service.ts ***!
  \*********************************************/
/*! exports provided: MichaelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MichaelService", function() { return MichaelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MichaelService = /** @class */ (function () {
    function MichaelService() {
        this.skillsData = {
            'angular': { 'name': 'Angular', 'id': 'angular' },
            'ngrx': { 'name': 'NgRx', 'id': 'ngrx' },
            'rxjs': { 'name': 'RxJs', 'id': 'rxjs' },
            'javascript': { 'name': 'Javascript', 'id': 'javascript' },
            'css': { 'name': 'CSS', 'id': 'css' },
            'html': { 'name': 'HTML', 'id': 'html' },
            'jquery': { 'name': 'Jquery', 'id': 'html' },
            'ux-friendly-design': { 'name': 'UX Friendly Design', 'id': 'ux-friendly-design' },
            'vue-js': { 'name': 'Vue Js', 'id': 'vue-js' },
            'material-design': { 'name': 'Material Design', 'id': 'material-design' },
            'bootstrap': { 'name': 'Bootstrap', 'id': 'bootstrap' },
            'materialize': { 'name': 'Materialize', 'id': 'materialize' },
            'firebase-db': { 'name': 'Firebase Db', 'id': 'firebase-db' },
            'c': { 'name': 'C', 'id': 'c' }, 'c-plus-plus': { 'name': 'C++', 'id': 'c-plus-plus' },
            'java': { 'name': 'Java', 'id': 'java' }
        };
        this.attributesData = ['Joyful', 'Hardworking', 'A persistent NEED to learn', 'Detail Oriented with Design',
            'Guided by a good balance of Realism and Imagination'];
    }
    MichaelService.prototype.attributes = function () {
        return this.attributesData;
    };
    MichaelService.prototype.skillIds = function () {
        return Object.keys(this.skillsData);
    };
    MichaelService.prototype.skillNames = function () {
        var skillNameList = [];
        for (var _i = 0, _a = this.skillIds(); _i < _a.length; _i++) {
            var skill = _a[_i];
            skillNameList += this.skillsData[skill]['name'];
        }
        return skillNameList;
    };
    MichaelService.prototype.getSkillName = function (skill) {
        return this.skillsData[skill]['name'];
    };
    MichaelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MichaelService);
    return MichaelService;
}());



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsService = /** @class */ (function () {
    function ProjectsService() {
        this.imagePath = 'assets/images/';
        this.projectData = {
            'resume': {
                'name': 'Portfolio',
                'linkToSite': 'https://michaelguy.herokuapp.com/',
                'imageUrl': this.imagePath + 'resume-site.png',
                'details': 'Angular 6 app for promoting my work, skillset, and experience. Still in progress.'
            },
            'sig-int': {
                'name': 'Interactions',
                'linkToSite': 'https://significant-interactions.herokuapp.com/#/sig-int',
                'imageUrl': this.imagePath + 'sig-int-site.png',
                'details': 'A Vue.js app with a Firebase database. This app was made for my team to log significant interactions ' +
                    'with college students and then use that data to calculate important outreach metrics.'
            },
            'old-resume': {
                'name': 'Old Portfolio',
                'linkToSite': 'https://michael-harrison.herokuapp.com/#/about-me',
                'imageUrl': this.imagePath + 'old-resume-site.png',
                'details': 'An older, out-of-date Angular app acting as my resume.'
            },
            'rails-homepage': {
                'name': 'Homepage',
                'linkToSite': 'https://home4dawgs.herokuapp.com/',
                'imageUrl': this.imagePath + 'rails-homepage-site.png',
                'details': 'A Ruby on Rails app used as a playground for me to mess with the framework. I actually display a ' +
                    'weather report(weekly and daily) by darksky.api, but you can only see it if you enable CORS by an addon ' +
                    'through a browser plugin'
            },
            'diary': {
                'name': 'Diary',
                'linkToSite': '',
                'imageUrl': this.imagePath + 'diary-site.png',
                'details': 'An Angular app with the intention of being a useful quick diary entry input form. Still in Progress'
            },
            'why-do-that': {
                'name': 'Why Do That?',
                'linkToSite': 'https://whydothat.herokuapp.com/',
                'imageUrl': this.imagePath + 'why-do-that-site.png',
                'details': 'An Angular app used to explore page links. It\'s goal is to tell people why I do some of the things ' +
                    'I do. '
            },
            'michalle': {
                'name': 'HomePage',
                'linkToSite': 'https://michalle.herokuapp.com/',
                'imageUrl': this.imagePath + 'michalle-site.png',
                'details': 'An Angular app messing around with drawing an SVG image and used by my wife and me for ' +
                    'frequently used links.'
            },
            'to-lisa': {
                'name': 'In Law Gift',
                'linkToSite': 'https://tolisa.herokuapp.com/',
                'imageUrl': this.imagePath + 'to-lisa-site.png',
                'details': 'An Angular app reading a poem to my mother in law about my wife, Alle.'
            },
            'open-when': {
                'name': '"Open When"',
                'linkToSite': 'https://open-whenn.herokuapp.com/#/login',
                'imageUrl': this.imagePath + 'open-when-site.png',
                'details': 'An Angular app I built for my wife as a wedding gift. The premise of it is that it holds letters ' +
                    'for her to open when the time comes in life for her to read the respective letter. However, there is a sign ' +
                    'in page blocking the way for easy reading!'
            }
        };
    }
    ProjectsService.prototype.projects = function () {
        return Object.keys(this.projectData);
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".collapsible {\n  border: none !important;\n}\n.collapsible-header {\n  border-bottom: 1px solid #212121;\n  color: #212121 !important;\n}\n#build-web-dev-p {\n  font-size: 1.5rem;\n}\n\n"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"center mys animated fast invisible\" id=\"shop-header\">Shop</h1>\n    <p id=\"build-web-dev-p\" class=\"animated fast invisible\">\n      <span class=\"myp\">Build</span>\n      your optimal Web Developer!\n    </p>\n\n  <blockquote id=\"blockquote-with-collapsible\" class=\"invisible fast animated\">\n  <ul class=\"collapsible popout animated invisible fast\" id=\"collapsible-for-choosing\">\n      <li class=\"active\">\n        <div class=\"collapsible-header mysbg\"><i class=\"material-icons\">unfold_more</i>Skills</div>\n        <div class=\"collapsible-body\">\n          <app-skill-list></app-skill-list>\n        </div>\n      </li>\n    <li class=\"\">\n      <div class=\"collapsible-header mypbg\"><i class=\"material-icons\">unfold_more</i>Attributes</div>\n      <div class=\"collapsible-body\">\n        <app-attribute-list></app-attribute-list>\n      </div>\n    </li>\n  </ul>\n  </blockquote>\n\n  <h2 class=\"center animated invisible\" id=\"go-to-cart-btn\">\n    <a class=\"btn btn-large mysbg waves-effect waves-purple mya\"\n       href=\"/#/cart\">\n      Cart\n    </a>\n  </h2>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/animation.service */ "./src/app/services/animation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopComponent = /** @class */ (function () {
    function ShopComponent(as) {
        this.as = as;
    }
    ShopComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });
    };
    ShopComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.as.animateIn('#shop-header', 'flipInX');
        setTimeout(function () {
            _this.as.animateIn('#build-web-dev-p', 'fadeInUp');
        }, 250);
        setTimeout(function () {
            _this.as.animateIn('#collapsible-for-choosing', 'fadeInUp');
            _this.as.animateIn('#blockquote-with-collapsible', 'fadeInUp');
            _this.as.animateIn('#go-to-cart-btn', 'fadeInUp');
        }, 250);
    };
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [_services_animation_service__WEBPACK_IMPORTED_MODULE_1__["AnimationService"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-icon {\n  padding-top: .5em;\n  padding-left: .5em;\n}\n\n#home-sidebar-link {\n  height: 13em;\n  padding-top: 1em;\n  padding-bottom: 3em;\n}\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--sidenav-->\n<ul id=\"slide-out\" class=\"sidenav sidenav-fixed mysbg\">\n  <a href=\"/#/checkout\">\n  <div id=\"home-sidebar-link\" class=\"myabg\">\n    <h1 class=\"m-0 light-txt center waves-effect waves-ripple\"\n        id=\"side-nav-header\">\n      Michael Harrison\n    </h1>\n  </div>\n    </a>\n  <li><a href=\"/#/work-history\" class=\"waves-effect waves-light\">Work History</a></li>\n  <li><a href=\"/#/projects\" class=\"waves-effect waves-light\">Projects</a></li>\n  <li><a href=\"/#/shop\" class=\"waves-effect waves-light\">Shop</a></li>\n  <li><a href=\"/#/cart\" class=\"waves-effect waves-light\">Cart</a></li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.sidenav').sidenav();
        });
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/skill-list/skill-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/skill-list/skill-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skill-card {\n  min-height: 9em;\n  padding-top: 1.5em;\n  display: block;\n}\n\n.selected {\n  background-color: #90A4AE;\n  color: #212121;\n}\n\n.skill-card-container {\n  padding-top: .5em;\n  padding-bottom: .5em;\n}\n\n.skill-card:hover {\n  background-color: #90A4AE;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/skill-list/skill-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/skill-list/skill-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <p> <span class=\"mys\">Choose</span> the skills you're looking for!</p>\n  </div>\n  <div *ngFor=\"let skill of ms.skillIds()\" class=\"col skill-card-container s6 m4\">\n    <div class=\"skill-card waves-effect waves-purple z-depth-2 hoverable\"\n         [id]=\"skill\"\n         (click)=\"toggleSkillSelect(skill)\">\n      <h5 class=\"center\">{{ms.getSkillName(skill)}}</h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skill-list/skill-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/skill-list/skill-list.component.ts ***!
  \****************************************************/
/*! exports provided: SkillListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillListComponent", function() { return SkillListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_michael_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/michael.service */ "./src/app/services/michael.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillListComponent = /** @class */ (function () {
    function SkillListComponent(ms, cs) {
        this.ms = ms;
        this.cs = cs;
    }
    SkillListComponent.prototype.ngOnInit = function () {
    };
    SkillListComponent.prototype.ngAfterViewInit = function () {
        this.reselectChosenSkills();
    };
    SkillListComponent.prototype.reselectChosenSkills = function () {
        for (var _i = 0, _a = this.ms.skillIds(); _i < _a.length; _i++) {
            var skill_id = _a[_i];
            if (this.cs.chosenSkills.includes(this.ms.getSkillName(skill_id))) {
                $('#' + skill_id).addClass('selected');
            }
        }
    };
    SkillListComponent.prototype.toggleSkillSelect = function (skill_id) {
        // get the skill object
        var skill_object = $('#' + skill_id);
        if (this.cs.chosenSkills.includes(this.ms.getSkillName(skill_id))) {
            // remove the selected class
            skill_object.removeClass('selected');
            // remove the skill from the skill list
            this.cs.removeSkill(this.ms.getSkillName(skill_id));
        }
        else {
            // add the selected class
            skill_object.addClass('selected');
            // add the skill to the skill list
            this.cs.addSkill(this.ms.getSkillName(skill_id));
        }
    };
    SkillListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skill-list',
            template: __webpack_require__(/*! ./skill-list.component.html */ "./src/app/skill-list/skill-list.component.html"),
            styles: [__webpack_require__(/*! ./skill-list.component.css */ "./src/app/skill-list/skill-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_michael_service__WEBPACK_IMPORTED_MODULE_1__["MichaelService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], SkillListComponent);
    return SkillListComponent;
}());



/***/ }),

/***/ "./src/app/topnav/topnav.component.css":
/*!*********************************************!*\
  !*** ./src/app/topnav/topnav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/topnav/topnav.component.html":
/*!**********************************************!*\
  !*** ./src/app/topnav/topnav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--nav on medium and up-->\n<div class=\"hide-on-large-only\">\n  <nav>\n    <div class=\"nav-wrapper mysbg\">\n      <a href=\"#\" class=\"brand-logo mya\">MGH</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a href=\"/#/work-history\" class=\"waves-effect waves-light\">Work History</a></li>\n        <li><a href=\"/#/projects\" class=\"waves-effect waves-light\">Projects</a></li>\n        <li><a href=\"/#/shop\" class=\"waves-effect waves-light\">Shop</a></li>\n        <li><a href=\"/#/cart\" class=\"waves-effect waves-light\">Cart</a></li>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/topnav/topnav.component.ts":
/*!********************************************!*\
  !*** ./src/app/topnav/topnav.component.ts ***!
  \********************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopnavComponent = /** @class */ (function () {
    function TopnavComponent() {
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    TopnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.css */ "./src/app/topnav/topnav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/michael/webdev/resume/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map