(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2mL":
/*!*********************************************************!*\
  !*** ./src/app/pages/planner/planner/planner.module.ts ***!
  \*********************************************************/
/*! exports provided: PlannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlannerModule", function() { return PlannerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _planner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planner.component */ "vSUY");
/* harmony import */ var _router_planner_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../router/planner.routing */ "kEjy");
/* harmony import */ var _meal_form_meal_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../meal-form/meal-form.component */ "Hkfm");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../menu-form/menu-form.component */ "PwrI");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../menu/menu.component */ "H510");
/* harmony import */ var _profile_user_form_user_form_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../profile/user-form/user-form.module */ "h9Mt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class PlannerModule {
}
PlannerModule.ɵfac = function PlannerModule_Factory(t) { return new (t || PlannerModule)(); };
PlannerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: PlannerModule });
PlannerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _router_planner_routing__WEBPACK_IMPORTED_MODULE_4__["PlannerRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _profile_user_form_user_form_module__WEBPACK_IMPORTED_MODULE_13__["UserFormModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](PlannerModule, { declarations: [_planner_component__WEBPACK_IMPORTED_MODULE_3__["PlannerComponent"],
        _meal_form_meal_form_component__WEBPACK_IMPORTED_MODULE_5__["MealFormComponent"],
        _menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_11__["MenuFormComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _router_planner_routing__WEBPACK_IMPORTED_MODULE_4__["PlannerRoutingModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _profile_user_form_user_form_module__WEBPACK_IMPORTED_MODULE_13__["UserFormModule"]] }); })();


/***/ }),

/***/ "/p2I":
/*!*********************************************************!*\
  !*** ./src/app/pages/recipe/recipe/recipe.component.ts ***!
  \*********************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RecipeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Omnivorous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Vegetarian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Vegan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", m_r9, " ");
} }
function RecipeComponent_div_30_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeComponent_div_30_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ing_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onAdd(ing_r10.ingredient); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RecipeComponent_div_30_i_1_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ing_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.loggedIn == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ing_r10.quantity, " ", ing_r10.unit, " ", ing_r10.ingredient, " ");
} }
function RecipeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Video Recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeComponent_a_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r6.recipe.videoRecipe, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.recipe.videoRecipe);
} }
function RecipeComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", step_r15, " ");
} }
function RecipeComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.onEdit(ctx_r16.recipe._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "show": a0 }; };
class RecipeComponent {
    constructor(router, localStorage, apiService) {
        this.router = router;
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token'
            })
        };
        this.loggedIn = false;
        this.editable = false;
        this.showModal = false;
        this.modalText = '';
        this.recipe = {
            _id: '',
            name: '',
            timing: 1,
            guest: 1,
            meal: [],
            diet: '',
            ingredients: [],
            steps: [],
            image: '',
            creator: ''
        };
    }
    ngOnInit() {
        this.apiService.get('/recipe/' + history.state.id)
            .subscribe(response => {
            this.recipe = response;
            if (this.localStorage.get('email') === this.recipe.creator) {
                this.editable = true;
            }
        }, error => {
            if (error.message === 'recipe not found') {
                this.router.navigate(['/notfound']);
            }
            else {
                console.log('Internal server error');
            }
        });
        if (this.localStorage.get('token') != null) {
            this.loggedIn = true;
            this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
        }
    }
    onAdd(ingredient) {
        const body = {
            action: 'add'
        };
        this.apiService.put('/user/ingredient/' + this.localStorage.get('email') + '&' + ingredient, body, this.httpOptions)
            .subscribe(response => {
            console.log(ingredient, 'added to the groceries');
            this.modalText = 'added to the groceries';
        }, error => {
            if (error.message === 'user not found') {
                this.router.navigate(['/notfound']);
            }
            else if (error.message === 'ingredient not found') {
                console.log('no such ingredient');
                this.modalText = 'no such ingredient';
            }
            else if (error.message === 'ingredient already in the list') {
                console.log('already in the list');
                this.modalText = 'already in the list';
            }
            else {
                console.log('Internal server error');
                this.modalText = 'internal server error';
            }
        });
        this.showModal = true;
    }
    onEdit(id) {
        this.router.navigateByUrl('/recipe/recipe-form', { state: { id } });
    }
}
RecipeComponent.ɵfac = function RecipeComponent_Factory(t) { return new (t || RecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
RecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecipeComponent, selectors: [["app-recipe"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])], decls: 46, vars: 17, consts: [[1, "grid-container"], [1, "recipe"], [3, "src"], [1, "details"], [1, "data-pair"], [1, "label-details"], [1, "input-details"], ["class", "input-details", 4, "ngIf"], ["class", "meal", 4, "ngFor", "ngForOf"], ["class", "ingredient", 4, "ngFor", "ngForOf"], ["class", "label", 4, "ngIf"], ["class", "input", 3, "href", 4, "ngIf"], [1, "label"], ["class", "input", 4, "ngFor", "ngForOf"], ["class", "btn btn-warning", 3, "click", 4, "ngIf"], ["id", "modal", "role", "dialog", 1, "modal", "fade", 3, "ngClass"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], ["type", "button", "data-bs-dismiss", "modal", 1, "close", 3, "click"], [1, "fas", "fa-drumstick-bite"], [1, "fas", "fa-egg"], [1, "fas", "fa-seedling"], [1, "meal"], [1, "ingredient"], ["data-bs-toggle", "modal", "data-bs-target", "#modal", "class", "fas fa-plus-circle", 3, "click", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#modal", 1, "fas", "fa-plus-circle", 3, "click"], [1, "input", 3, "href"], [1, "input"], [1, "btn", "btn-warning", 3, "click"], [1, "fas", "fa-pen"]], template: function RecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "TIMING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "SERVINGS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "DIET ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RecipeComponent_div_20_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RecipeComponent_div_21_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RecipeComponent_div_22_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "MEAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RecipeComponent_div_26_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "INGREDIENTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, RecipeComponent_div_30_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, RecipeComponent_div_31_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, RecipeComponent_a_32_Template, 2, 2, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "STEPS TO FOLLOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, RecipeComponent_div_35_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, RecipeComponent_button_36_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeComponent_Template_button_click_44_listener() { return ctx.showModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.recipe.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.recipe.timing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.recipe.guest);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe.diet == "Omnivorous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe.diet == "Vegetarian");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe.diet == "Vegan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipe.meal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipe.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe.videoRecipe != "" && ctx.recipe.videoRecipe != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe.videoRecipe != "" && ctx.recipe.videoRecipe != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipe.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editable == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.modalText);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n@media(min-width: 768px){\r\n\r\n    .recipe[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        margin-bottom: 10px;\r\n        margin-left: 10%;\r\n        margin-right: 10%;\r\n    }\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 30%;\r\n    width: 45%;\r\n    align-content: center; \r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n    flex-basis: 40%;\r\n}\r\n\r\n.data-pair[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.label-details[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n    flex-basis: 25%;\r\n    font-size: small;\r\n    color:slategrey;\r\n}\r\n\r\n.input-details[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n    flex-basis: 70%;\r\n    font-size: medium;\r\n}\r\n\r\n.meal[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n    flex-basis: 35%;\r\n    font-size: medium;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n    flex-basis: 100%;\r\n    font-size: x-large;\r\n    color:slategrey;\r\n    margin-top: 2%;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n    flex-basis: 100%;\r\n    font-size: large;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n}\r\n\r\n.ingredient[_ngcontent-%COMP%]{\r\n    font-family: \"Convergence\", sans-serif;\r\n    font-size: medium;\r\n    flex-basis: 100%;\r\n}\r\n\r\n.btn-warning[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\r\n\r\n.modal.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwicmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVJLGtDQUFrQzs7QUFFdEM7TUFDTSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1Y7QUFDTjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FDaklBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InJlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo1MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo3NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQsIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmNzg1MTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDI4NTc7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59IFxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mX19ncm91cCA+IGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZfX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZl9faW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzhjMmFkO1xyXG59XHJcblxyXG4gICAgLyogQ2hhbmdlIGJvcmRlciB3aGVuIGlucHV0IGZvY3VzKi9cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDBlYWUyO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDEyMCwgMTk0LCAxNzMsIC4yNSlcclxufVxyXG5cclxuLmZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMgfiAuZl9fbGFiZWwsXHJcbi5mX19pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKS5mX19pbnB1dDpub3QoOmZvY3VzKSB+IC5mX19sYWJlbCB7XHJcbiAgdG9wOiAtMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxlZnQ6IDAuOHJlbTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7XHJcbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAucmVjaXBlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IFxyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICBmbGV4LWJhc2lzOiA0MCU7XHJcbn1cclxuXHJcbi5kYXRhLXBhaXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5sYWJlbC1kZXRhaWxzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmbGV4LWJhc2lzOiAyNSU7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6c2xhdGVncmV5O1xyXG59XHJcblxyXG4uaW5wdXQtZGV0YWlscyB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZmxleC1iYXNpczogNzAlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbi5tZWFsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmbGV4LWJhc2lzOiAzNSU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgY29sb3I6c2xhdGVncmV5O1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mYS1wbHVzLWNpcmNsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmluZ3JlZGllbnR7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1vZGFsLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aliga\Desktop\Me\uni\4\4B\TFG\TFGWebApp\client\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_display_recipes_display_recipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/display-recipes/display-recipes.component */ "1MR9");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









function HomeComponent_mat_card_38_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_mat_card_38_div_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ingredient_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.onDeleteIngredient(ingredient_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingredient_r6);
} }
function HomeComponent_mat_card_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Filter ingredients:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_mat_card_38_div_4_Template, 6, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.ingredientsFilter);
} }
class HomeComponent {
    constructor(localStorage, apiService) {
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-auth-token': 'token'
            })
        };
        this.recipes = [];
        this.environment = '';
        // this.filters = false;
        this.ingredientsFilter = [];
        this.searchText = '';
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.searchControl.valueChanges
            .subscribe((value) => {
            if (value.length > 0) {
                this.apiService.post('/filter', { name: value })
                    .subscribe(response => {
                    // console.log('r', response);
                    this.recipes = response;
                }, error => {
                    console.log(error);
                });
            }
            else {
                this.apiService.get('/').subscribe(response => {
                    this.recipes = response;
                }, err => {
                    // internal server error
                    console.log(err);
                });
            }
        });
    }
    ngOnInit() {
        // this.recipes = await this.recipeService.init();
        if (this.localStorage.get('token') != null) {
            this.environment = 'home';
            this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
        }
        this.apiService.get('/').subscribe(response => {
            this.recipes = response;
        }, error => {
            // internal server error
            console.log(error);
        });
    }
    onSave(rid) {
        this.apiService.put('/recipe/save/' + rid + '&' + this.localStorage.get('email'), {}, this.httpOptions)
            .subscribe(response => {
            // console.log(response);
            if (response.msg === 'recipe saved') {
                // make toast
                console.log('saved');
            }
        }, error => {
            console.log(error);
        });
    }
    onAddIngredient(ingredient) {
        this.apiService.get('/ingredient/' + ingredient).subscribe(ing => {
            if (this.ingredientsFilter.indexOf(this.ingredientsFilter.filter(i => i === ing.name)[0], 0) === -1) {
                this.ingredientsFilter.push(ing.name);
            }
            else {
                // already in the list
            }
        }, error => {
            // not a valid ingredient
            console.log(error);
        });
    }
    onDeleteIngredient(ingredient) {
        const i = this.ingredientsFilter.filter(ing => ing === ingredient)[0];
        const index = this.ingredientsFilter.indexOf(i, 0);
        if (index > -1) {
            this.ingredientsFilter.splice(index, 1);
        }
    }
    onSubmit(n, d, m) {
        // console.log(n, d, m);
        this.apiService.post('/filter', { name: n, diet: d, meal: m, ingredients: this.ingredientsFilter })
            .subscribe(response => {
            // console.log('r', response);
            this.recipes = response;
        }, error => {
            console.log(error);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 40, vars: 4, consts: [[1, "grid-container"], [1, "filter-input"], [1, "input-group"], ["type", "search", "placeholder", "Search recipe", 1, "form-control", "input-one", 3, "formControl"], ["name", ""], ["id", "diet", 1, "custom-select"], ["diet", ""], ["selected", ""], ["value", "Omnivorous"], ["value", "Vegetarian"], ["value", "Vegan"], ["id", "meal", 1, "custom-select"], ["meal", ""], ["value", "Breakfast"], ["value", "Snack"], ["value", "Lunch"], ["value", "Dinner"], [1, "input-ingredient"], ["type", "text", "placeholder", "Introduce an ingredient", 1, "form-control"], ["ingredient", ""], ["type", "button", 1, "btn", "btn-primary", "btn-circle", "input-three", 3, "click"], [1, "fas", "fa-plus"], [1, "btn", "btn-outline-primary", "btn-circle", 3, "click"], [1, "fas", "fa-check"], ["class", "ingredient-filter", 4, "ngIf"], [3, "recipes", "environment", "saveRecipe"], [1, "ingredient-filter"], [1, "card-title"], [1, "ingredientList"], ["class", "ingredient", 4, "ngFor", "ngForOf"], [1, "ingredient"], [1, "i"], [1, "btn", "btn-secondary", "btn-circle", 3, "click"], [1, "fas", "fa-times"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Diet...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Omnivorous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Vegetarian");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Vegan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Meal...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Breakfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Snack");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Lunch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](32); return ctx.onAddIngredient(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19); return ctx.onSubmit(_r0.value, _r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, HomeComponent_mat_card_38_Template, 5, 1, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "app-display-recipes", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("saveRecipe", function HomeComponent_Template_app_display_recipes_saveRecipe_39_listener($event) { return ctx.onSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ingredientsFilter.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("recipes", ctx.recipes)("environment", ctx.environment);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], src_app_components_display_recipes_display_recipes_component__WEBPACK_IMPORTED_MODULE_6__["DisplayRecipesComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px){\n\n  .input-group[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%] {\n    flex-basis: 20%;\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 5px;\n  }\n\n  .input-ingredient[_ngcontent-%COMP%]{\n    flex-basis: 20%;\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 5px;\n  }\n}\r\n\r\n@media (max-width: 768px){\n\n  .input-ingredient[_ngcontent-%COMP%]{\n    flex-basis: 77%;\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 5px;\n  }\n\n  .input-group[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%] {\n    flex-basis: 30%;\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 5px;\n  }\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\n  height: 135px;\n  width: 94%;\n  margin-bottom: 10px;\n  margin-left: 5px;\n}\r\n\r\n.filter-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\r\n\r\n.ingredient-filter[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n}\r\n\r\n.ingredient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 5px;\n  margin-left: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\r\n\r\n.i[_ngcontent-%COMP%] {\n  flex-basis: 100%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFSSxrQ0FBa0M7O0FBRXRDO01BQ00sY0FBYztNQUNkLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsVUFBVTtNQUNWO0FBQ047O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQ2pJQTs7RUFFRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBOztFQUVFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NTIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUyJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMiwgaDMsIGg0LCBoNSB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZjc4NTE7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjAyODU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufSBcclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZl9fZ3JvdXAgPiBkaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mX19pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmZfX2lucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzc4YzJhZDtcclxufVxyXG5cclxuICAgIC8qIENoYW5nZSBib3JkZXIgd2hlbiBpbnB1dCBmb2N1cyovXHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2QwZWFlMjtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgLjJyZW0gcmdiYSgxMjAsIDE5NCwgMTczLCAuMjUpXHJcbn1cclxuXHJcbi5mX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG4gICAgdG9wOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxufVxyXG5cclxuLmZfX2lucHV0OmZvY3VzIH4gLmZfX2xhYmVsLFxyXG4uZl9faW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikuZl9faW5wdXQ6bm90KDpmb2N1cykgfiAuZl9fbGFiZWwge1xyXG4gIHRvcDogLTAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsZWZ0OiAwLjhyZW07XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vYXBwLmNvbXBvbmVudC5jc3MnO1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcblxuICAuaW5wdXQtZ3JvdXAsIC5jdXN0b20tc2VsZWN0IHtcbiAgICBmbGV4LWJhc2lzOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAuaW5wdXQtaW5ncmVkaWVudHtcbiAgICBmbGV4LWJhc2lzOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcblxuICAuaW5wdXQtaW5ncmVkaWVudHtcbiAgICBmbGV4LWJhc2lzOiA3NyU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAuaW5wdXQtZ3JvdXAsIC5jdXN0b20tc2VsZWN0IHtcbiAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgaGVpZ2h0OiAxMzVweDtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmZpbHRlci1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbmdyZWRpZW50LWZpbHRlciB7XG4gIHdpZHRoOiA5MyU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbmdyZWRpZW50ID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmkge1xuICBmbGV4LWJhc2lzOiAxMDAlXG59XG4iXX0= */"] });


/***/ }),

/***/ "1MR9":
/*!*************************************************************************!*\
  !*** ./src/app/components/display-recipes/display-recipes.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisplayRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayRecipesComponent", function() { return DisplayRecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





function DisplayRecipesComponent_mat_card_1_h5_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r5);
} }
function DisplayRecipesComponent_mat_card_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayRecipesComponent_mat_card_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const r_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSave(r_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayRecipesComponent_mat_card_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayRecipesComponent_mat_card_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const r_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onDelete(r_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayRecipesComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DisplayRecipesComponent_mat_card_1_h5_6_Template, 2, 1, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DisplayRecipesComponent_mat_card_1_button_7_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DisplayRecipesComponent_mat_card_1_button_8_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayRecipesComponent_mat_card_1_Template_h2_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const r_r1 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.expandRecipe(r_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r1.diet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", r_r1.meal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.environment === "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.environment === "myrecipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", r_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class DisplayRecipesComponent {
    constructor(router) {
        this.router = router;
        this.deleteRecipe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveRecipe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recipes = [];
        this.environment = '';
    }
    ngOnInit() {
    }
    expandRecipe(rid) {
        this.router.navigateByUrl('recipe', { state: { id: rid } });
    }
    onDelete(rid) {
        this.deleteRecipe.emit(rid);
    }
    onSave(rid) {
        this.saveRecipe.emit(rid);
    }
}
DisplayRecipesComponent.ɵfac = function DisplayRecipesComponent_Factory(t) { return new (t || DisplayRecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DisplayRecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayRecipesComponent, selectors: [["app-display-recipes"]], inputs: { recipes: "recipes", environment: "environment" }, outputs: { deleteRecipe: "deleteRecipe", saveRecipe: "saveRecipe" }, decls: 3, vars: 1, consts: [[1, "container"], ["class", "container-box", 4, "ngFor", "ngForOf"], [1, "container-box"], [1, "header"], [1, "badge", "badge-primary"], ["class", "badge badge-warning", 4, "ngFor", "ngForOf"], ["class", "btn btn-outline-info", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], [1, "dashboard-card-content"], [3, "click"], [3, "src"], [1, "badge", "badge-warning"], [1, "btn", "btn-outline-info", 3, "click"], [1, "far", "fa-bookmark"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "far", "fa-trash-alt"]], template: function DisplayRecipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisplayRecipesComponent_mat_card_1_Template, 14, 6, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["@media(min-width: 768px){\r\n\r\n    .container[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        flex-wrap: wrap;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 50%;\r\n    width: 50%;\r\n    align-content: center; \r\n}\r\n\r\n.container-box[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    flex-basis: 49%;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n}\r\n\r\n.more-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 6px;\r\n    right: 6px;\r\n}\r\n\r\n.btn-outline-danger[_ngcontent-%COMP%], .btn-outline-info[_ngcontent-%COMP%] {\r\n    padding: 1%;\r\n    position: absolute;\r\n    top: 4px;\r\n    right: 6px;\r\n    font-size: large;\r\n    border: 0px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 6px;\r\n    left: 10px;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    flex-basis: 5%;\r\n    margin-left: 5px;\r\n}\r\n\r\n.dashboard-card-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktcmVjaXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixlQUFlO1FBQ2YsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMkJBQW1CO0lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImRpc3BsYXktcmVjaXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgXHJcbn1cclxuICBcclxuXHJcbi5jb250YWluZXItYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgZmxleC1iYXNpczogNDklO1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLm1vcmUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhbmdlciwgLmJ0bi1vdXRsaW5lLWluZm8ge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHJpZ2h0OiA2cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGZsZXgtYmFzaXM6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4gIFxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "4UDB":
/*!**********************************************!*\
  !*** ./src/app/router/my-recipes.routing.ts ***!
  \**********************************************/
/*! exports provided: MyRecipesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRecipesRoutingModule", function() { return MyRecipesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_my_recipes_my_recipes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/my-recipes/my-recipes.component */ "imb2");
/* harmony import */ var _pages_recipe_recipe_form_recipe_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/recipe/recipe-form/recipe-form.component */ "SjIf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const myRecipesRoutes = [
    { path: 'my-recipes', component: _pages_my_recipes_my_recipes_component__WEBPACK_IMPORTED_MODULE_1__["MyRecipesComponent"] },
    { path: 'my-recipes/recipe-form', component: _pages_recipe_recipe_form_recipe_form_component__WEBPACK_IMPORTED_MODULE_2__["RecipeFormComponent"] },
];
class MyRecipesRoutingModule {
}
MyRecipesRoutingModule.ɵfac = function MyRecipesRoutingModule_Factory(t) { return new (t || MyRecipesRoutingModule)(); };
MyRecipesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MyRecipesRoutingModule });
MyRecipesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(myRecipesRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MyRecipesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "4XP2":
/*!****************************************!*\
  !*** ./src/app/router/user.routing.ts ***!
  \****************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_profile_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/profile/user/user.component */ "oLT7");
/* harmony import */ var _pages_profile_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/profile/edit-user/edit-user.component */ "iigl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const userRoutes = [
    { path: 'user', component: _pages_profile_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"] },
    { path: 'user/edit-user', component: _pages_profile_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__["EditUserComponent"] }
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(userRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "89PC":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-tracker/expenses-tracker.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExpensesTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesTrackerComponent", function() { return ExpensesTrackerComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");









function ExpensesTrackerComponent_div_22_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r3, " ");
} }
function ExpensesTrackerComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExpensesTrackerComponent_div_22_i_4_Template, 2, 1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExpensesTrackerComponent_div_22_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const expense_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.onEdit(expense_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExpensesTrackerComponent_div_22_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const expense_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.onDelete(expense_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", expense_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", expense_r1.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", expense_r1.expense, " \u20AC ");
} }
class ExpensesTrackerComponent {
    constructor(router, apiService, localStorage, datepipe) {
        this.router = router;
        this.apiService = apiService;
        this.localStorage = localStorage;
        this.datepipe = datepipe;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token',
            }),
        };
        this.expenses = [];
    }
    ngOnInit() {
        if (this.localStorage.get('token') == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
            this.apiService
                .get('/expense/user/' + this.localStorage.get('email'), this.httpOptions)
                .subscribe((response) => {
                this.expenses = response;
                this.expenses = this.transformDate(this.expenses);
            }, (error) => {
                if (error.status === 401) {
                    this.router.navigateByUrl('/login', { state: { msg: 'Unauthorized' } });
                }
                else if (error.message === 'There are no expenses for such user') {
                    this.router.navigate(['/notfound']);
                }
                else {
                    console.log('Internal server error');
                }
            });
        }
    }
    onEdit(id) {
        this.router.navigateByUrl('/expenses/expense-form', { state: { id } });
    }
    onDelete(id) {
        if (id) {
            this.apiService.delete('/expense/' + id, this.httpOptions).subscribe((response) => {
                if (response.msg === 'expense removed') {
                    this.ngOnInit();
                }
            }, (error) => {
                if (error.message === 'Expense does not exist') {
                    this.router.navigate(['/notfound']);
                }
                else {
                    console.log('Internal server error');
                }
            });
        }
    }
    transformDate(expenses) {
        expenses.forEach((e) => {
            const date = this.datepipe.transform(e.date, 'dd-MM-yyyy');
            if (date != null) {
                e.date = date;
            }
        });
        return expenses;
    }
}
ExpensesTrackerComponent.ɵfac = function ExpensesTrackerComponent_Factory(t) { return new (t || ExpensesTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"])); };
ExpensesTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExpensesTrackerComponent, selectors: [["app-expenses-tracker"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])], decls: 23, vars: 1, consts: [[1, "grid-container"], [1, "nav", "nav-pills"], [1, "nav-item"], ["routerLink", "/expenses/expense-form", 1, "nav-link"], [1, "fas", "fa-plus-circle"], [1, "expenses"], [1, "header"], ["class", "expense", 4, "ngFor", "ngForOf"], [1, "expense"], [1, "item"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-warning", "btn-circle", 3, "click"], [1, "fas", "fa-pen"], [1, "btn", "btn-secondary", "btn-circle", 3, "click"], [1, "fas", "fa-times"]], template: function ExpensesTrackerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Add expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Expenses tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Groceries");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ExpensesTrackerComponent_div_22_Template, 12, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.expenses);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n.expenses[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.expense[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    flex-basis: 24%;\r\n    text-align: center;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    flex-basis: 24%;\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiZXhwZW5zZXMtdHJhY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFSSxrQ0FBa0M7O0FBRXRDO01BQ00sY0FBYztNQUNkLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsVUFBVTtNQUNWO0FBQ047O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQ2hJQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiZXhwZW5zZXMtdHJhY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo1MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo3NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQsIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmNzg1MTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDI4NTc7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59IFxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mX19ncm91cCA+IGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZfX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZl9faW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzhjMmFkO1xyXG59XHJcblxyXG4gICAgLyogQ2hhbmdlIGJvcmRlciB3aGVuIGlucHV0IGZvY3VzKi9cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDBlYWUyO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDEyMCwgMTk0LCAxNzMsIC4yNSlcclxufVxyXG5cclxuLmZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMgfiAuZl9fbGFiZWwsXHJcbi5mX19pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKS5mX19pbnB1dDpub3QoOmZvY3VzKSB+IC5mX19sYWJlbCB7XHJcbiAgdG9wOiAtMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxlZnQ6IDAuOHJlbTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7XHJcblxyXG4uZXhwZW5zZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4cGVuc2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDI0JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgZmxleC1iYXNpczogMjQlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "8Ldt":
/*!*********************************************!*\
  !*** ./src/app/core/service/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class ApiService {
    constructor(router, http) {
        this.router = router;
        this.baseUri /*: string*/ = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUri; // 'http:localhost:5000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.http = http;
    }
    post(request, body, options) {
        const url = this.baseUri + request;
        console.log(url);
        return this.http.post(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    }
    get(request, options) {
        const url = this.baseUri + request;
        console.log(url);
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    }
    put(request, body, options) {
        const url = this.baseUri + request;
        console.log(url);
        return this.http.put(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    }
    delete(request, options) {
        const url = this.baseUri + request;
        console.log(url);
        return this.http.delete(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    }
    // error handling
    errorHandler(error) {
        let errorMessage = {
            error: '',
            message: ''
        };
        if (error.error instanceof ErrorEvent) {
            // get client error
            errorMessage = {
                error: 'Client error',
                message: error.error.message,
            };
        }
        else {
            // get server error
            errorMessage = {
                error: `Error code : ${error.status}\n Message: ${error.message}`,
                status: error.status,
                message: error.error.msg
            };
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUri: 'http://localhost:5000/api'
};
// baseUri: 'https://foodietfg.azurewebsites.net/api'


/***/ }),

/***/ "B10K":
/*!******************************************************************!*\
  !*** ./src/app/pages/groceries-list/groceries-list.component.ts ***!
  \******************************************************************/
/*! exports provided: GroceriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesListComponent", function() { return GroceriesListComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









function GroceriesListComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingredient already in the list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function GroceriesListComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " That is not an ingredient ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function GroceriesListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GroceriesListComponent_div_16_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, GroceriesListComponent_div_16_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.ingredientForm.controls.ingredient.errors.alreadyInList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.ingredientForm.controls.ingredient.errors.notExists);
} }
function GroceriesListComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroceriesListComponent_div_37_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ingredient_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onBought(ingredient_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroceriesListComponent_div_37_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ingredient_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onDelete(ingredient_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingredient_r6);
} }
function GroceriesListComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroceriesListComponent_div_42_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ingredient_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onNotBought(ingredient_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingredient_r10);
} }
const _c0 = function (a0) { return { "show": a0 }; };
class GroceriesListComponent {
    constructor(router, fb, localStorage, apiService) {
        this.router = router;
        this.fb = fb;
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.ing = 'ingredient';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token'
            })
        };
        this.ingredientsDropdown = [];
        this.ingredientsList = [];
        this.ingredientsBought = [];
        this.showModal = false;
        this.ingredientForm = this.fb.group({
            ingredient: ['']
        });
        this.ingredientForm.controls[this.ing].setErrors({
            alreadyInList: false,
            notExists: false
        });
        this.ingredientForm.controls[this.ing].valueChanges
            .subscribe((value) => {
            if (value.length >= 3) {
                console.log(value);
                this.apiService.post('/ingredient/filter', { name: value }, this.httpOptions)
                    .subscribe(response => {
                    this.ingredientsDropdown = response;
                    console.log(this.ingredientsDropdown);
                }, error => {
                    console.log('e', error);
                });
            }
            else {
                this.ingredientsDropdown.splice(0, this.ingredientsDropdown.length);
            }
        });
    }
    ngOnInit() {
        if (this.localStorage.get('token') == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
            this.apiService.get('/user/' + this.localStorage.get('email'), this.httpOptions)
                .subscribe(response => {
                this.ingredientsList = response.groceries;
            }, error => {
                if (error.status === 401) {
                    this.router.navigateByUrl('/login', { state: { msg: 'Unauthorized' } });
                }
                else if (error.message === 'user not found') {
                    this.router.navigate(['/notfound']);
                }
                else {
                    console.log('Internal server error');
                }
            });
        }
    }
    onAdd(ingredient) {
        const body = {
            action: 'add'
        };
        this.apiService.put('/user/ingredient/' + this.localStorage.get('email') + '&' + ingredient, body, this.httpOptions)
            .subscribe(response => {
            this.ingredientsList = response.groceries;
        }, error => {
            if (error.message === 'user not found') {
                this.router.navigate(['/notfound']);
            }
            else if (error.message === 'ingredient not found') {
                // console.log('no such ingredient');
                this.ingredientForm.controls[this.ing].setErrors({
                    notExists: true
                });
            }
            else if (error.message === 'ingredient already in the list') {
                // console.log('already in the list');
                this.ingredientForm.controls[this.ing].setErrors({
                    alreadyInList: true
                });
            }
            else {
                console.log('Internal server error');
            }
        });
    }
    onBought(ingredient) {
        // look for the ingredient in the list
        const ing = this.ingredientsList.filter(x => x === ingredient)[0];
        // then looks for the index of that element
        const index = this.ingredientsList.indexOf(ing, 0);
        if (index > -1) {
            // removes an element from the position index
            this.ingredientsList.splice(index, 1);
        }
        this.ingredientsBought.push(ingredient);
        this.onDelete(ingredient);
    }
    onNotBought(ingredient) {
        // look for the ingredient in the list
        const ing = this.ingredientsBought.filter(x => x === ingredient)[0];
        // then looks for the index of that element
        const index = this.ingredientsBought.indexOf(ing, 0);
        if (index > -1) {
            // removes an element from the position index
            this.ingredientsBought.splice(index, 1);
        }
        this.onAdd(ingredient);
    }
    onDelete(ingredient) {
        const body = {
            action: 'delete'
        };
        this.apiService.put('/user/ingredient/' + this.localStorage.get('email') + '&' + ingredient, body, this.httpOptions)
            .subscribe(response => {
            this.ingredientsList = response.groceries;
        }, error => {
            if (error.message === 'user not found') {
                this.router.navigate(['/notfound']);
            }
            else if (error.message === 'ingredient not found') {
                this.router.navigate(['/notfound']);
            }
            else {
                console.log('Internal server error');
            }
        });
    }
    onShow() {
        this.showModal = true;
    }
    onSubmit() {
        const body = {
            _user: this.localStorage.get('email'),
            ingredients: this.ingredientsBought
        };
        this.apiService.post('/expense', body, this.httpOptions)
            .subscribe(response => {
            this.ingredientsBought = [];
        }, error => {
            console.log(error.error);
        });
        this.apiService.get('/user/' + this.localStorage.get('email'), this.httpOptions)
            .subscribe(response => {
            this.ingredientsList = response.groceries;
        }, error => {
            if (error.message === 'user not found') {
                this.router.navigate(['/notfound']);
            }
            else {
                console.log('Internal server error');
            }
        });
        this.showModal = false;
    }
}
GroceriesListComponent.ɵfac = function GroceriesListComponent_Factory(t) { return new (t || GroceriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
GroceriesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroceriesListComponent, selectors: [["app-groceries-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])], decls: 43, vars: 7, consts: [[1, "grid-container"], [1, "f__group", 3, "formGroup"], [1, "f"], ["type", "text", "formControlName", "ingredient", "placeholder", " ", 1, "f__input"], ["ingredient", ""], ["for", "ingredient", 1, "f__label"], ["type", "button", 1, "btn", "btn-primary", "btn-circle", "input", 3, "click"], [1, "fas", "fa-plus"], ["type", "sumbmit", "data-bs-toggle", "modal", "data-bs-target", "#modal", 1, "btn", "btn-outline-primary", "btn-circle", "input", 3, "click"], [1, "fas", "fa-check"], [4, "ngIf"], ["id", "modal", "role", "dialog", 1, "modal", "fade", 3, "ngClass"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], [1, "list"], [1, "card-title"], [1, "ingredientList"], [4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "btn", "btn-primary", "btn-circle", 3, "click"], [1, "btn", "btn-secondary", "btn-circle", 3, "click"], [1, "fas", "fa-times"]], template: function GroceriesListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Groceries List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroceriesListComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8); return ctx.onAdd(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroceriesListComponent_Template_button_click_13_listener() { return ctx.onShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, GroceriesListComponent_div_16_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroceriesListComponent_Template_button_click_22_listener() { return ctx.showModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Are you done shopping?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroceriesListComponent_Template_button_click_28_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Check out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroceriesListComponent_Template_button_click_30_listener() { return ctx.showModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "To Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, GroceriesListComponent_div_37_Template, 9, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Bought");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, GroceriesListComponent_div_42_Template, 7, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ingredientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ingredientForm.controls.ingredient.touched && ctx.ingredientForm.controls.ingredient.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ingredientsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ingredientsBought);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px){\r\n\r\n    .list[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: space-evenly;\r\n    }\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        flex-basis: 90%;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n    }\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n    margin-top: 1.5rem;\r\n}\r\n\r\n.ingredientList[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.ingredientList[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.modal.show[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    flex-basis: 45%;\r\n    margin-bottom: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiZ3JvY2VyaWVzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOzs7SUFHQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUksa0NBQWtDOztBQUV0QztNQUNNLGNBQWM7TUFDZCx1QkFBdUI7TUFDdkIscUJBQXFCO01BQ3JCLFVBQVU7TUFDVjtBQUNOOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUNqSUE7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJncm9jZXJpZXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo1MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo3NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQsIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmNzg1MTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDI4NTc7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59IFxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mX19ncm91cCA+IGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZfX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZl9faW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzhjMmFkO1xyXG59XHJcblxyXG4gICAgLyogQ2hhbmdlIGJvcmRlciB3aGVuIGlucHV0IGZvY3VzKi9cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDBlYWUyO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDEyMCwgMTk0LCAxNzMsIC4yNSlcclxufVxyXG5cclxuLmZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMgfiAuZl9fbGFiZWwsXHJcbi5mX19pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKS5mX19pbnB1dDpub3QoOmZvY3VzKSB+IC5mX19sYWJlbCB7XHJcbiAgdG9wOiAtMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxlZnQ6IDAuOHJlbTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDkwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG5cclxuLmluZ3JlZGllbnRMaXN0ID4gZGl2ID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50TGlzdCA+IGRpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "EP4Q":
/*!***************************************************************!*\
  !*** ./src/app/pages/groceries-list/groceries-list.module.ts ***!
  \***************************************************************/
/*! exports provided: GroceriesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesListModule", function() { return GroceriesListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var src_app_router_groceries_list_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/router/groceries-list.routing */ "j18b");
/* harmony import */ var _groceries_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groceries-list.component */ "B10K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class GroceriesListModule {
}
GroceriesListModule.ɵfac = function GroceriesListModule_Factory(t) { return new (t || GroceriesListModule)(); };
GroceriesListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GroceriesListModule });
GroceriesListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_router_groceries_list_routing__WEBPACK_IMPORTED_MODULE_3__["GroceriesListRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GroceriesListModule, { declarations: [_groceries_list_component__WEBPACK_IMPORTED_MODULE_4__["GroceriesListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_router_groceries_list_routing__WEBPACK_IMPORTED_MODULE_3__["GroceriesListRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]] }); })();


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "H510":
/*!******************************************************!*\
  !*** ./src/app/pages/planner/menu/menu.component.ts ***!
  \******************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");







function MenuComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.menu.title);
} }
function MenuComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Description: ", ctx_r1.menu.description, "");
} }
function MenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", d_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r6);
} }
function MenuComponent_div_6_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_6_div_1_div_9_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const r_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r11.expandRecipe(r_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r10.name);
} }
function MenuComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_6_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const c_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.editMeal(c_r8._idMeal, c_r8.recipes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MenuComponent_div_6_div_1_div_9_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r8.meal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", c_r8.recipes);
} }
function MenuComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_div_6_div_1_Template, 10, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.cards);
} }
function MenuComponent_div_7_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_7_div_1_div_9_Template_h5_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const r_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r19.expandRecipe(r_r18._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r18.name);
} }
function MenuComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_7_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const c_r16 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.editMeal(c_r16._idMeal, c_r16.recipes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MenuComponent_div_7_div_1_div_9_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r16.meal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", c_r16.recipes);
} }
function MenuComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_div_7_div_1_Template, 10, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.cards);
} }
function MenuComponent_div_8_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_8_div_1_div_9_Template_h5_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const r_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r27.expandRecipe(r_r26._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r26.name);
} }
function MenuComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_8_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const c_r24 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.editMeal(c_r24._idMeal, c_r24.recipes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MenuComponent_div_8_div_1_div_9_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r24.meal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", c_r24.recipes);
} }
function MenuComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_div_8_div_1_Template, 10, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.cards);
} }
class MenuComponent {
    constructor(localStorage, apiService, router) {
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.router = router;
        this.daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.meals = ['Breakfast', 'Lunch', 'Diner'];
        this.cards = [];
        this.days = [];
        // this.showModalAdd = false;
        // this.showModalDel = false;
        this.showModalEdit = false;
        this.menu = {
            _id: '',
            _user: '',
            title: ''
        };
        this.active = {
            _id: '',
            _idMeal: '',
            recipes: [{
                    _id: '',
                    name: ''
                }],
            day: '',
            meal: ''
        };
        this.httpOptions = {};
    }
    ngOnInit() {
        this.getDays(this.menu._id, this.httpOptions);
    }
    ngOnChanges() {
        this.getDays(this.menu._id, this.httpOptions);
    }
    getDays(id, options) {
        this.apiService.get('/day/menu/' + id, options)
            .subscribe(response => {
            this.days = response;
            this.setDays(this.days);
            // console.log(this.days);
        }, error => {
            if (error.message === 'There is no such menu') {
                console.log(error);
            }
            else if (error.message === 'not a menu object id') {
                console.log(error);
            }
        });
    }
    setDays(days) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cards.splice(0, this.cards.length);
            days.forEach(d => {
                d.meals.forEach(meal => {
                    const r = [{
                            _id: '',
                            name: ''
                        }];
                    meal.recipes.forEach(rid => {
                        r.push({
                            _id: rid,
                            name: 'Recipe'
                        });
                    });
                    let c;
                    c = {
                        _id: d._id,
                        _idMeal: meal._id,
                        recipes: r,
                        day: d.day,
                        meal: meal.meal
                    };
                    this.cards.push(c);
                });
            });
            let i = 0;
            let j = 0;
            for (i = 0; i < this.cards.length; i++) {
                if (this.cards[i].recipes.length > 0) {
                    for (j = 0; j < this.cards[i].recipes.length; j++) {
                        if (this.cards[i].recipes[j]._id !== '') {
                            this.cards[i].recipes[j].name = (yield this.getRecipe(this.cards[i].recipes[j]._id)).name;
                        }
                    }
                }
            }
        });
    }
    getRecipe(rid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.get('/recipe/' + rid, this.httpOptions)
                .toPromise();
        });
    }
    expandRecipe(rid) {
        this.router.navigateByUrl('recipe', { state: { id: rid } });
    }
    editMeal(mealid, r) {
        this.router.navigateByUrl('planner/meal-form', { state: { id: mealid, recipes: r } });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { menu: "menu", httpOptions: "httpOptions" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 6, consts: [[1, "grid-container"], [4, "ngIf"], [1, "container"], ["class", "header", 3, "id", 4, "ngFor", "ngForOf"], ["class", "grid-container menu1", 4, "ngIf"], ["class", "grid-container menu2", 4, "ngIf"], ["class", "grid-container menu3", 4, "ngIf"], [1, "header", 3, "id"], [1, "badge", "badge-dark"], [1, "grid-container", "menu1"], [4, "ngFor", "ngForOf"], [1, "dashboard-card"], [1, "badge", "badge-primary"], [1, "btn", "btn-outline-info", "btn-circle", 3, "click"], [1, "fas", "fa-edit"], [1, "dashboard-card-content", "content"], [1, "r", 3, "click"], [1, "grid-container", "menu2"], [1, "dashboard-card-content"], [3, "click"], [1, "grid-container", "menu3"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_h1_2_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_h3_3_Template, 2, 1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_div_5_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MenuComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MenuComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MenuComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menu.title != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menu.description != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.daysWeek);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cards.length / 7 == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cards.length / 7 == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cards.length / 7 == 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin-left: 19px;\r\n}\r\n\r\n.badge-dark[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    margin-top: 5px;\r\n    margin-left: 5%;\r\n    width: 100%;\r\n}\r\n\r\n.badge-primary[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    font-size: small;\r\n    top: 5px;\r\n    left:10px\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 1px;\r\n    border: 0px;\r\n}\r\n\r\n.btn-outline-info[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 1px;\r\n    right: 1px;\r\n    border: 0px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    flex-basis: 14%;\r\n}\r\n\r\n.menu1[_ngcontent-%COMP%] {\r\n    height: 440px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.menu2[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.menu3[_ngcontent-%COMP%] {\r\n    height: 730px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n    height: 135px;\r\n    width: 94%;\r\n    margin-bottom: 10px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.dashboard-card-content[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.modal.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.flex-box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.recipe-name[_ngcontent-%COMP%] {\r\n    flex-basis: 75%;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n}\r\n\r\n.r[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwibWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFSSxrQ0FBa0M7O0FBRXRDO01BQ00sY0FBYztNQUNkLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsVUFBVTtNQUNWO0FBQ047O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQ2hJQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NTIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUyJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMiwgaDMsIGg0LCBoNSB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZjc4NTE7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjAyODU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufSBcclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZl9fZ3JvdXAgPiBkaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mX19pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmZfX2lucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzc4YzJhZDtcclxufVxyXG5cclxuICAgIC8qIENoYW5nZSBib3JkZXIgd2hlbiBpbnB1dCBmb2N1cyovXHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2QwZWFlMjtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgLjJyZW0gcmdiYSgxMjAsIDE5NCwgMTczLCAuMjUpXHJcbn1cclxuXHJcbi5mX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG4gICAgdG9wOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxufVxyXG5cclxuLmZfX2lucHV0OmZvY3VzIH4gLmZfX2xhYmVsLFxyXG4uZl9faW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikuZl9faW5wdXQ6bm90KDpmb2N1cykgfiAuZl9fbGFiZWwge1xyXG4gIHRvcDogLTAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsZWZ0OiAwLjhyZW07XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXBwLmNvbXBvbmVudC5jc3MnO1xyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTlweDtcclxufVxyXG5cclxuLmJhZGdlLWRhcmsge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWRnZS1wcmltYXJ5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6MTBweFxyXG59XHJcblxyXG4uYnRuLWluZm8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZmxleC1iYXNpczogMTQlO1xyXG59XHJcblxyXG5cclxuLm1lbnUxIHtcclxuICAgIGhlaWdodDogNDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm1lbnUyIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm1lbnUzIHtcclxuICAgIGhlaWdodDogNzMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIHtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICB3aWR0aDogOTQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uZmxleC1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5yZWNpcGUtbmFtZSB7XHJcbiAgICBmbGV4LWJhc2lzOiA3NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Hkfm":
/*!****************************************************************!*\
  !*** ./src/app/pages/planner/meal-form/meal-form.component.ts ***!
  \****************************************************************/
/*! exports provided: MealFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealFormComponent", function() { return MealFormComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function MealFormComponent_div_11_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealFormComponent_div_11_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const r_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.deleteRecipe(r_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MealFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MealFormComponent_div_11_button_3_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r2._id !== "");
} }
class MealFormComponent {
    constructor(fb, router, localStorage, apiService) {
        this.fb = fb;
        this.router = router;
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token'
            })
        };
        this.mealForm = this.fb.group({
            recipe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.mid = '';
        this.recipes = [];
    }
    ngOnInit() {
        this.mid = history.state.id;
        this.recipes = history.state.recipes;
        this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
    }
    addRecipe(recipe) {
        const r = {
            name: recipe,
            _id: ''
        };
        console.log('name:', recipe);
        this.apiService.post('/filter', { name: recipe, user: this.localStorage.get('email') })
            .subscribe(response => {
            // console.log('r', response);
            console.log(response[0]._id);
            const body = {
                recipe: response[0]._id,
                edit: 'add'
            };
            r._id = response[0]._id;
            this.apiService.put('/day/meal/' + this.mid, body, this.httpOptions)
                .subscribe(value => {
                console.log('added');
                this.recipes.push(r);
            });
        }, error => {
            console.log(error);
        });
    }
    deleteRecipe(rid) {
        const body = {
            recipe: rid,
            edit: 'delete'
        };
        this.apiService.put('/day/meal/' + this.mid, body, this.httpOptions)
            .subscribe(response => {
            const recipe = this.recipes.filter(x => x._id === rid)[0];
            if (this.recipes.indexOf(recipe, 0) > -1) {
                this.recipes.splice(this.recipes.indexOf(recipe, 0), 1);
            }
        });
    }
    close() {
        this.router.navigate(['planner']);
    }
}
MealFormComponent.ɵfac = function MealFormComponent_Factory(t) { return new (t || MealFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
MealFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MealFormComponent, selectors: [["app-meal-form"]], decls: 14, vars: 1, consts: [[1, "container"], [1, "flex-box"], [1, "f"], ["type", "text", "placeholder", " ", 1, "f__input"], ["recipeName", ""], ["for", "recipeName", 1, "f__label"], [1, "btn", "btn-primary", "btn-circle", 3, "click"], [1, "fas", "fa-plus"], ["class", "flex-box", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"], [1, "recipe-name"], ["class", "btn btn-secondary btn-circle delete", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", "btn-circle", "delete", 3, "click"], [1, "fas", "fa-minus"]], template: function MealFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Introduce or delete a recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealFormComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return ctx.addRecipe(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MealFormComponent_div_11_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealFormComponent_Template_button_click_12_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n.flex-box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    margin-top: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwibWVhbC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVJLGtDQUFrQzs7QUFFdEM7TUFDTSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1Y7QUFDTjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FDL0hBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJtZWFsLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NTIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUyJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMiwgaDMsIGg0LCBoNSB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZjc4NTE7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjAyODU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufSBcclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZl9fZ3JvdXAgPiBkaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mX19pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmZfX2lucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzc4YzJhZDtcclxufVxyXG5cclxuICAgIC8qIENoYW5nZSBib3JkZXIgd2hlbiBpbnB1dCBmb2N1cyovXHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2QwZWFlMjtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgLjJyZW0gcmdiYSgxMjAsIDE5NCwgMTczLCAuMjUpXHJcbn1cclxuXHJcbi5mX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG4gICAgdG9wOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxufVxyXG5cclxuLmZfX2lucHV0OmZvY3VzIH4gLmZfX2xhYmVsLFxyXG4uZl9faW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikuZl9faW5wdXQ6bm90KDpmb2N1cykgfiAuZl9fbGFiZWwge1xyXG4gIHRvcDogLTAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsZWZ0OiAwLjhyZW07XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXBwLmNvbXBvbmVudC5jc3MnO1xyXG5cclxuXHJcbi5mbGV4LWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufSBcclxuIl19 */"] });


/***/ }),

/***/ "JLvW":
/*!***********************************************************************!*\
  !*** ./src/app/pages/expenses/expense-form/expense-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExpenseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseFormComponent", function() { return ExpenseFormComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









function ExpenseFormComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit expense");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExpenseFormComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add expense");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExpenseFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExpenseFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Expense is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExpenseFormComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingredient already in the list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExpenseFormComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingredient does not exist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExpenseFormComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ExpenseFormComponent_div_26_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExpenseFormComponent_div_26_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.expenseForm.controls.ingredients.errors.alreadyInList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.expenseForm.controls.ingredients.errors.notExists);
} }
function ExpenseFormComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseFormComponent_div_32_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ingredient_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onDeleteIngredient(ingredient_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingredient_r11);
} }
function ExpenseFormComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseFormComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExpenseFormComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseFormComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ExpenseFormComponent {
    constructor(fb, router, apiService, localStorage) {
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.localStorage = localStorage;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token',
            }),
        };
        this.expenseForm = this.fb.group({
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ingredients: ['', []],
            expense: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.expenseId = '';
        this.ingredientsBought = [];
        this.expense = {
            date: '',
            ingredients: [],
            expense: 0
        };
    }
    ngOnInit() {
        this.expenseId = history.state.id;
        this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
        if (this.expenseId != null) {
            this.apiService.get('/expense/' + this.expenseId, this.httpOptions)
                .subscribe(response => {
                this.expense = response;
                this.ingredientsBought = this.expense.ingredients;
            }, error => {
                if (error.message === 'Expense not found') {
                    console.log('Expense does not exists');
                }
            });
        }
    }
    onAddIngredient(ingredient) {
        const ingredients = 'ingredients';
        this.apiService.get('/ingredient/' + ingredient)
            .subscribe(response => {
            const ing = this.ingredientsBought.filter(x => x === response.name)[0];
            if (this.ingredientsBought.indexOf(ing, 0) > -1) {
                this.expenseForm.controls[ingredients].setErrors({
                    alreadyInList: true
                });
            }
            else {
                this.ingredientsBought.push(response.name);
            }
        }, error => {
            if (error.message === 'Ingredient not found') {
                this.expenseForm.controls[ingredients].setErrors({
                    notExists: true
                });
            }
            else {
                console.log('Internal server error');
            }
        });
    }
    onDeleteIngredient(ingredient) {
        const ing = this.ingredientsBought.filter(x => x === ingredient)[0];
        const index = this.ingredientsBought.indexOf(ing, 0);
        if (index > -1) {
            this.ingredientsBought.splice(index, 1);
        }
        else {
            console.log('No such ingredient in the list');
        }
    }
    onSubmit() {
        if (this.expenseForm.valid) {
            const body = {
                _user: this.localStorage.get('email'),
                date: this.expenseForm.value['date'],
                ingredients: this.ingredientsBought,
                expense: this.expenseForm.value['expense'],
            };
            if (this.expenseId != null) {
                this.apiService.put('/expense/' + this.expenseId, body, this.httpOptions)
                    .subscribe(response => {
                    this.ingredientsBought = [];
                    this.router.navigate(['/expenses']);
                }, error => {
                    console.log(error.error);
                });
            }
            else {
                this.apiService.post('/expense', body, this.httpOptions)
                    .subscribe(response => {
                    this.ingredientsBought = [];
                    this.router.navigate(['/expenses']);
                }, error => {
                    console.log(error.error);
                });
            }
        }
    }
}
ExpenseFormComponent.ɵfac = function ExpenseFormComponent_Factory(t) { return new (t || ExpenseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"])); };
ExpenseFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExpenseFormComponent, selectors: [["app-expense-form"]], decls: 36, vars: 9, consts: [[1, "container"], [4, "ngIf"], [1, "f__group", 3, "formGroup"], [1, "f"], ["id", "date", "type", "date", "formControlName", "date", "placeholder", " ", 1, "f__input"], ["for", "date", 1, "f__label"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "expense", "type", "number", "formControlName", "expense", "placeholder", " ", 1, "f__input"], ["for", "expense", 1, "f__label"], [1, "f__2"], ["id", "ingredients", "type", "text", "formControlName", "ingredients", "placeholder", " ", 1, "f__input"], ["ingredient", ""], ["for", "ingredients", 1, "f__label"], [1, "btn", "btn-primary", "btn-circle", "add", 3, "click"], [1, "fas", "fa-plus"], [1, "list"], [1, "card-title"], [1, "ingredientList"], [4, "ngFor", "ngForOf"], [1, "form-group"], ["class", "btn btn-primary check", 3, "click", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "btn", "btn-secondary", "btn-circle", 3, "click"], [1, "fas", "fa-times"], [1, "btn", "btn-primary", "check", 3, "click"]], template: function ExpenseFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ExpenseFormComponent_h1_1_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExpenseFormComponent_h1_2_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ExpenseFormComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ExpenseFormComponent_div_17_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseFormComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21); return ctx.onAddIngredient(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ExpenseFormComponent_div_26_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Ingredients Bought");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ExpenseFormComponent_div_32_Template, 7, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ExpenseFormComponent_button_34_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ExpenseFormComponent_button_35_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.expenseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.expenseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.expenseForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.expenseForm.controls.date.touched && !ctx.expenseForm.controls.date.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.expenseForm.controls.expense.touched && !ctx.expenseForm.controls.expense.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.expenseForm.controls.ingredients.touched && ctx.expenseForm.controls.ingredients.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ingredientsBought);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.expenseId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.expenseId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px){\r\n    .f__2[_ngcontent-%COMP%] {\r\n        flex-basis: 48%;\r\n    } \r\n\r\n    mat-card[_ngcontent-%COMP%] {\r\n        margin-top: 1.5rem;\r\n        flex-basis: 52%;\r\n        margin-bottom: 2%;\r\n    }\r\n    .check[_ngcontent-%COMP%] {\r\n        margin-left: 24%;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f__2[_ngcontent-%COMP%] {\r\n        flex-basis: 70%;\r\n    }   \r\n    \r\n    mat-card[_ngcontent-%COMP%] {\r\n        margin-top: 1.5rem;\r\n        flex-basis: 75%;\r\n        margin-bottom: 2%;\r\n    }  \r\n\r\n    .check[_ngcontent-%COMP%] {\r\n        margin-left: 12%;\r\n    }\r\n    \r\n}\r\n\r\n.f__2[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 20rem;\r\n    height: 3rem;\r\n    margin-bottom: 1rem;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.ingredientList[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.add[_ngcontent-%COMP%] {\r\n    margin-top: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiZXhwZW5zZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVJLGtDQUFrQzs7QUFFdEM7TUFDTSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1Y7QUFDTjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FDaklBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiZXhwZW5zZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5mIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOjUyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MiU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMC41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogI2ZmNzg1MVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5mIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOjc1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMC41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogI2ZmNzg1MVxyXG4gICAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDIsIGgzLCBoNCwgaDUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmY3ODUxO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4wMjg1NztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn0gXHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmZfX2dyb3VwID4gZGl2e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZl9faW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlNWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5mX19pbnB1dDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM3OGMyYWQ7XHJcbn1cclxuXHJcbiAgICAvKiBDaGFuZ2UgYm9yZGVyIHdoZW4gaW5wdXQgZm9jdXMqL1xyXG5cclxuLmZfX2lucHV0OmZvY3VzIHtcclxuICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNkMGVhZTI7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIC4ycmVtIHJnYmEoMTIwLCAxOTQsIDE3MywgLjI1KVxyXG59XHJcblxyXG4uZl9fbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMXJlbTtcclxuICAgIHRvcDogMC44cmVtO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB+IC5mX19sYWJlbCxcclxuLmZfX2lucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pLmZfX2lucHV0Om5vdCg6Zm9jdXMpIH4gLmZfX2xhYmVsIHtcclxuICB0b3A6IC0wLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbGVmdDogMC44cmVtO1xyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzJztcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5mX18yIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA0OCU7XHJcbiAgICB9IFxyXG5cclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgfVxyXG4gICAgLmNoZWNrIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjQlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5mX18yIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgfSAgXHJcblxyXG4gICAgLmNoZWNrIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTIlO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5mX18yIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59ICBcclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50TGlzdCA+IGRpdiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "M9ps":
/*!**********************************************************!*\
  !*** ./src/app/components/not-found/not-found.module.ts ***!
  \**********************************************************/
/*! exports provided: WildcardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildcardRoutingModule", function() { return WildcardRoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "F33o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class WildcardRoutingModule {
}
WildcardRoutingModule.ɵfac = function WildcardRoutingModule_Factory(t) { return new (t || WildcardRoutingModule)(); };
WildcardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WildcardRoutingModule });
WildcardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
            ])
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WildcardRoutingModule, { declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "Mw7/":
/*!***************************************************!*\
  !*** ./src/app/router/expense-tracker.routing.ts ***!
  \***************************************************/
/*! exports provided: ExpensesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesRoutingModule", function() { return ExpensesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_expenses_expenses_tracker_expenses_tracker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/expenses/expenses-tracker/expenses-tracker.component */ "89PC");
/* harmony import */ var _pages_expenses_expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/expenses/expense-form/expense-form.component */ "JLvW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const expensesRoutes = [
    { path: 'expenses', component: _pages_expenses_expenses_tracker_expenses_tracker_component__WEBPACK_IMPORTED_MODULE_1__["ExpensesTrackerComponent"] },
    { path: 'expenses/expense-form', component: _pages_expenses_expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_2__["ExpenseFormComponent"] }
];
class ExpensesRoutingModule {
}
ExpensesRoutingModule.ɵfac = function ExpensesRoutingModule_Factory(t) { return new (t || ExpensesRoutingModule)(); };
ExpensesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ExpensesRoutingModule });
ExpensesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(expensesRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExpensesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "PwrI":
/*!****************************************************************!*\
  !*** ./src/app/pages/planner/menu-form/menu-form.component.ts ***!
  \****************************************************************/
/*! exports provided: MenuFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuFormComponent", function() { return MenuFormComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/selectable-button/selectable-button.component */ "whHg");









class MenuFormComponent {
    constructor(fb, router, apiService, localStorage) {
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.localStorage = localStorage;
        this.meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token'
            })
        };
        this.meal = [];
        this.menuForm = this.fb.group({
            title: ['', []],
            description: ['', []],
            nMeals: ['', []],
            meal: ['', []]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        const body = {
            _user: this.localStorage.get('email'),
            title: this.menuForm.value['title'],
            description: this.menuForm.value['description'],
            meal: this.meal
        };
        this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
        this.apiService.post('/menu', body, this.httpOptions)
            .subscribe(response => {
            this.router.navigate(['planner']);
        }, error => {
            console.log('no such user');
        });
    }
    onClick(str) {
        if (this.meals.indexOf(str.trim(), 0) > -1) {
            if (this.meal.indexOf(str, 0) > -1) {
                this.meal.splice(this.meal.indexOf(str, 0), 1);
            }
            else {
                this.meal.push(str);
            }
            console.log(this.meal);
        }
    }
}
MenuFormComponent.ɵfac = function MenuFormComponent_Factory(t) { return new (t || MenuFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"])); };
MenuFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MenuFormComponent, selectors: [["app-menu-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])], decls: 27, vars: 5, consts: [[1, "container"], [1, "f__group", 3, "formGroup", "ngSubmit"], [1, "f"], ["id", "title", "type", "text", "formControlName", "title", "placeholder", " ", "autocomplete", "off", 1, "f__input"], ["for", "title", 1, "f__label"], ["id", "description", "type", "text", "formControlName", "description", "placeholder", " ", "autocomplete", "off", 1, "f__input"], ["for", "description", 1, "f__label"], ["for", "meals"], [3, "text", "selected"], ["type", "submit", 1, "btn", "btn-primary"]], template: function MenuFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "New menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MenuFormComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Please select at least three meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "app-selectable-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selected", function MenuFormComponent_Template_app_selectable_button_selected_20_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "app-selectable-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selected", function MenuFormComponent_Template_app_selectable_button_selected_21_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "app-selectable-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selected", function MenuFormComponent_Template_app_selectable_button_selected_22_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "app-selectable-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selected", function MenuFormComponent_Template_app_selectable_button_selected_23_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Add menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.menuForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", ctx.meals[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", ctx.meals[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", ctx.meals[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", ctx.meals[3]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_6__["SelectableButtonComponent"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\napp-selectable-button[_ngcontent-%COMP%] {\r\n    margin-right: 0.3rem;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    margin-top: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwibWVudS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVJLGtDQUFrQzs7QUFFdEM7TUFDTSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1Y7QUFDTjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FDL0hBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6Im1lbnUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo1MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo3NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQsIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmNzg1MTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDI4NTc7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59IFxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mX19ncm91cCA+IGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZfX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZl9faW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzhjMmFkO1xyXG59XHJcblxyXG4gICAgLyogQ2hhbmdlIGJvcmRlciB3aGVuIGlucHV0IGZvY3VzKi9cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDBlYWUyO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDEyMCwgMTk0LCAxNzMsIC4yNSlcclxufVxyXG5cclxuLmZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMgfiAuZl9fbGFiZWwsXHJcbi5mX19pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKS5mX19pbnB1dDpub3QoOmZvY3VzKSB+IC5mX19sYWJlbCB7XHJcbiAgdG9wOiAtMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxlZnQ6IDAuOHJlbTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7XHJcblxyXG5cclxuYXBwLXNlbGVjdGFibGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "SjIf":
/*!*******************************************************************!*\
  !*** ./src/app/pages/recipe/recipe-form/recipe-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: RecipeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeFormComponent", function() { return RecipeFormComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/selectable-button/selectable-button.component */ "whHg");












function RecipeFormComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Edit recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RecipeFormComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RecipeFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RecipeFormComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", d_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](d_r13);
} }
function RecipeFormComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", u_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](u_r14);
} }
function RecipeFormComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please fill the three ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RecipeFormComponent_div_60_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingredient already in the recipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RecipeFormComponent_div_60_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingedient does not exist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RecipeFormComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecipeFormComponent_div_60_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RecipeFormComponent_div_60_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RecipeFormComponent_div_60_div_3_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.recipeForm.controls.ingredients.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.recipeForm.controls.ingredients.errors.alreadyInList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.recipeForm.controls.ingredients.errors.notExists);
} }
function RecipeFormComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecipeFormComponent_div_66_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ingredient_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onDeleteIngredient(ingredient_r18.ingredient); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", ingredient_r18.quantity, " ", ingredient_r18.unit, " ", ingredient_r18.ingredient, "");
} }
function RecipeFormComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please introduce at least one step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RecipeFormComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecipeFormComponent_div_82_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const step_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.onDeleteStep(step_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](step_r21);
} }
class RecipeFormComponent {
    constructor(fb, router, localStorage, apiService) {
        this.fb = fb;
        this.router = router;
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
        this.diets = ['Omnivorous', 'Vegetarian', 'Vegan'];
        this.units = ['unit', 'g', 'kg', 'ml', 'cl', 'L', 'tsp', 'tbps'];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token',
            }),
        };
        this.ingredients = [];
        this.steps = [];
        this.meal = [];
        this.selectedFile = null;
        this.recipeForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            timing: [''],
            dinnerGuest: [''],
            diet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ingredients: this.fb.group({
                quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                unit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                ingredient: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }),
            steps: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            image: [''],
            videoRecipe: [''],
        });
        this.recipe = {
            _id: '',
            name: '',
            timing: 0,
            guest: 0,
            meal: [],
            diet: '',
            ingredients: [],
            steps: [],
            image: '',
            videoRecipe: '',
            creator: this.localStorage.get('email'),
        };
    }
    ngOnInit() {
        this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
        if (history.state.id != null) {
            this.apiService.get('/recipe/' + history.state.id, this.httpOptions)
                .subscribe(response => {
                this.recipe = response;
                this.ingredients = this.recipe.ingredients;
                this.steps = this.recipe.steps;
            }, error => {
                console.log(error);
            });
        }
    }
    onSubmit() {
        console.log(this.recipe);
        if (this.recipeForm.valid) {
            const recipe = new FormData();
            recipe.append('image', this.selectedFile, this.selectedFile.name);
            const r = JSON.stringify({
                _id: '',
                name: this.recipeForm.value['name'],
                timing: this.recipeForm.value['timing'],
                guest: this.recipeForm.value['dinnerGuest'],
                meal: this.meal,
                diet: this.recipeForm.value['diet'],
                ingredients: this.ingredients,
                steps: this.steps,
                image: '',
                videoRecipe: this.recipeForm.value['videoRecipe'],
                creator: this.localStorage.get('email'),
            });
            recipe.append('data', r);
            if (this.recipe._id !== '') {
                this.apiService.put('/recipe/' + this.recipe._id, recipe, this.httpOptions).subscribe((response) => {
                    console.log(response);
                    this.router.navigate(['/my-recipes']);
                }, (error) => {
                    console.log(error);
                });
            }
            else {
                console.log(recipe);
                this.apiService.post('/recipe', recipe, this.httpOptions).subscribe((response) => {
                    console.log(response);
                    this.router.navigate(['/my-recipes']);
                }, (error) => {
                    console.log(error);
                });
            }
        }
        else {
            console.log('there is an error');
            console.log(this.recipeForm.errors);
        }
    }
    onFileSelected(event) {
        const target = event.target;
        try {
            this.selectedFile = target.files[0];
        }
        catch (err) {
            console.log(err);
        }
    }
    onAddIngredient(q, u, ingredient) {
        const ingredients = 'ingredients';
        this.apiService.get('/ingredient/' + ingredient).subscribe((response) => {
            const ing = this.ingredients.filter((x) => x.ingredient === response.name)[0];
            if (this.ingredients.indexOf(ing, 0) > -1) {
                this.recipeForm.controls[ingredients].setErrors({
                    alreadyInList: true,
                });
            }
            else {
                this.ingredients.push({
                    quantity: q,
                    unit: u,
                    ingredient: response.name
                });
            }
        }, (error) => {
            if (error.message === 'Ingredient not found') {
                this.recipeForm.controls[ingredients].setErrors({
                    notExists: true,
                });
            }
            else {
                console.log('Internal server error');
            }
        });
    }
    onDeleteIngredient(ingredient) {
        const ing = this.ingredients.filter((x) => x.ingredient === ingredient)[0];
        const index = this.ingredients.indexOf(ing, 0);
        if (index > -1) {
            this.ingredients.splice(index, 1);
        }
        else {
            console.log('No such ingredient in the list');
        }
    }
    onAddStep(step) {
        this.steps.push(step);
    }
    onDeleteStep(step) {
        const ing = this.steps.filter((x) => x === step)[0];
        const index = this.steps.indexOf(ing, 0);
        if (index > -1) {
            this.steps.splice(index, 1);
        }
        else {
            console.log('No such ingredient in the list');
        }
    }
    onClick(str) {
        if (this.meals.indexOf(str.trim(), 0) > -1) {
            if (this.meal.indexOf(str, 0) > -1) {
                this.meal.splice(this.meal.indexOf(str, 0), 1);
            }
            else {
                this.meal.push(str);
            }
            console.log(this.meal);
        }
    }
}
RecipeFormComponent.ɵfac = function RecipeFormComponent_Factory(t) { return new (t || RecipeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
RecipeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RecipeFormComponent, selectors: [["app-recipe-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], decls: 96, vars: 14, consts: [[1, "container"], [4, "ngIf"], [1, "f__group", 3, "formGroup"], [1, "f"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", " ", 1, "f__input"], ["for", "name", 1, "f__label"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "timing", "type", "number", "formControlName", "timing", "placeholder", " ", 1, "f__input"], ["for", "timing", 1, "f__label"], ["id", "dinnerGuest", "type", "number", "formControlName", "dinnerGuest", "placeholder", " ", 1, "f__input"], ["for", "dinnerGuest", 1, "f__label"], ["id", "videoRecipe", "type", "string", "formControlName", "videoRecipe", "placeholder", " ", 1, "f__input"], ["for", "videoRecipe", 1, "f__label"], ["for", "diet"], ["id", "diet", "type", "diet", "formControlName", "diet", 1, "form-control"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "file"], ["type", "file", 3, "change"], ["formGroupName", "ingredients"], ["for", "ingredients"], [1, "add"], ["id", "quantity", "type", "number", "formControlName", "quantity", "placeholder", " ", 1, "f__input"], ["quantity", ""], ["for", "quantity", 1, "f__label"], ["id", "unit", "type", "text", "formControlName", "unit", 1, "form-control"], ["unit", ""], ["id", "ingredient", "type", "text", "formControlName", "ingredient", "placeholder", " ", 1, "f__input"], ["ingredient", ""], ["for", "ingredient", 1, "f__label"], [1, "btn", "btn-primary", "btn-circle", "btn-add", 3, "click"], [1, "fas", "fa-plus"], [1, "list"], [1, "card-title"], [1, "ingredientList"], [4, "ngFor", "ngForOf"], [1, "f", "f__step"], ["id", "steps", "type", "steps", "formControlName", "steps", "placeholder", " ", 1, "f__input"], ["step", ""], ["for", "steps", 1, "f__label"], [1, "stepsList"], ["for", "meals"], [3, "text", "selected"], [1, "btn", "btn-primary", "check", 3, "click"], [1, "alert", "alert-danger"], [3, "value"], [1, "btn", "btn-secondary", "btn-circle", 3, "click"], [1, "fas", "fa-times"]], template: function RecipeFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecipeFormComponent_h1_1_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RecipeFormComponent_h1_2_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, RecipeFormComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Timing minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Number of servings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Video Recipe link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Diet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Diet...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, RecipeFormComponent_option_33_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RecipeFormComponent_Template_input_change_36_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "select", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Unit...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, RecipeFormComponent_option_52_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecipeFormComponent_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](49); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](55); return ctx.onAddIngredient(_r4.value, _r5.value, _r7.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, RecipeFormComponent_div_60_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "h3", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, RecipeFormComponent_div_66_Template, 7, 3, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecipeFormComponent_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](70); return ctx.onAddStep(_r10.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, RecipeFormComponent_div_76_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "h3", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, RecipeFormComponent_div_82_Template, 7, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Select the meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "app-selectable-button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selected", function RecipeFormComponent_Template_app_selectable_button_selected_89_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "app-selectable-button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selected", function RecipeFormComponent_Template_app_selectable_button_selected_90_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "app-selectable-button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selected", function RecipeFormComponent_Template_app_selectable_button_selected_91_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "app-selectable-button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selected", function RecipeFormComponent_Template_app_selectable_button_selected_92_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecipeFormComponent_Template_button_click_94_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.recipe._id !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.recipe._id === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.recipeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.recipeForm.controls.name.touched && !ctx.recipeForm.controls.name.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.diets);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.recipeForm.controls.ingredients.touched && ctx.recipeForm.controls.ingredients.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.recipeForm.controls.steps.touched && !ctx.recipeForm.controls.steps.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", ctx.meals[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", ctx.meals[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", ctx.meals[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", ctx.meals[3]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_8__["SelectableButtonComponent"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px){\r\n    .list[_ngcontent-%COMP%] {\r\n        margin-top: 5rem;\r\n        width: 52%;\r\n        margin-left: 24%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: space-evenly;\r\n    }\r\n\r\n    .f__step[_ngcontent-%COMP%] {\r\n        flex-basis: 48%;\r\n    }\r\n\r\n    .check[_ngcontent-%COMP%] {\r\n        margin-left: 24%;\r\n        margin-top: 5%;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .list[_ngcontent-%COMP%] {\r\n        margin-top: 5rem;\r\n        width: 70%;\r\n        margin-left: 12%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: space-evenly;\r\n    }\r\n    \r\n    .f__step[_ngcontent-%COMP%]{\r\n        flex-basis: 70%;\r\n    }\r\n\r\n    .check[_ngcontent-%COMP%] {\r\n        margin-left: 12%;\r\n        margin-top: 5%;\r\n    }\r\n    \r\n}\r\n\r\n.f__step[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 20rem;\r\n    height: 3rem;\r\n    margin-bottom: 1rem;\r\n    margin-top: 1rem;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    flex-basis: 100%;\r\n}\r\n\r\n.meals[_ngcontent-%COMP%] {\r\n    flex-basis: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.f__diet[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 20rem;\r\n  height: 3rem;\r\n  flex-basis: 52%;\r\n  margin-bottom: 1rem;\r\n  margin-top: 6rem;\r\n}\r\n\r\n.btn-add[_ngcontent-%COMP%] {\r\n    margin-top: 1.5rem;\r\n}\r\n\r\n.add[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.ingredientList[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .stepsList[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    flex-basis: 100%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\napp-selectable-button[_ngcontent-%COMP%] {\r\n    padding: 0.3rem;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    height: 3rem;\r\n}\r\n\r\n.file[_ngcontent-%COMP%] {\r\n    margin-top: 1.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwicmVjaXBlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOzs7SUFHQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUksa0NBQWtDOztBQUV0QztNQUNNLGNBQWM7TUFDZCx1QkFBdUI7TUFDdkIscUJBQXFCO01BQ3JCLFVBQVU7TUFDVjtBQUNOOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUNoSUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztJQUNsQjs7QUFFSjs7QUFFQTs7SUFFSTtRQUNJLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztJQUNsQjs7QUFFSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJyZWNpcGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo1MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo3NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQsIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmNzg1MTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDI4NTc7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59IFxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mX19ncm91cCA+IGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZfX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZl9faW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzhjMmFkO1xyXG59XHJcblxyXG4gICAgLyogQ2hhbmdlIGJvcmRlciB3aGVuIGlucHV0IGZvY3VzKi9cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDBlYWUyO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDEyMCwgMTk0LCAxNzMsIC4yNSlcclxufVxyXG5cclxuLmZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMgfiAuZl9fbGFiZWwsXHJcbi5mX19pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKS5mX19pbnB1dDpub3QoOmZvY3VzKSB+IC5mX19sYWJlbCB7XHJcbiAgdG9wOiAtMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxlZnQ6IDAuOHJlbTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmxpc3Qge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgd2lkdGg6IDUyJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjQlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9XHJcblxyXG4gICAgLmZfX3N0ZXAge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDQ4JTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2sge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAubGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZfX3N0ZXB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVjayB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uZl9fc3RlcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufSBcclxuXHJcbmxhYmVsIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbn1cclxuXHJcbi5tZWFscyB7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5mX19kaWV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBmbGV4LWJhc2lzOiA1MiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4uYnRuLWFkZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZ3JlZGllbnRMaXN0ID4gZGl2ID4gZGl2LCAuc3RlcHNMaXN0ID4gZGl2ID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG5hcHAtc2VsZWN0YWJsZS1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxufVxyXG5cclxuLmZpbGUge1xyXG4gICAgbWFyZ2luLXRvcDogMS44cmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "bF8b");


class AppComponent {
    constructor() {
        this.title = 'FoodiePlanner';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__["MainNavComponent"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFSSxrQ0FBa0M7O0FBRXRDO01BQ00sY0FBYztNQUNkLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsVUFBVTtNQUNWO0FBQ047O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo1MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo3NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQsIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmNzg1MTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDI4NTc7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59IFxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mX19ncm91cCA+IGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZfX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZl9faW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzhjMmFkO1xyXG59XHJcblxyXG4gICAgLyogQ2hhbmdlIGJvcmRlciB3aGVuIGlucHV0IGZvY3VzKi9cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDBlYWUyO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDEyMCwgMTk0LCAxNzMsIC4yNSlcclxufVxyXG5cclxuLmZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMgfiAuZl9fbGFiZWwsXHJcbi5mX19pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKS5mX19pbnB1dDpub3QoOmZvY3VzKSB+IC5mX19sYWJlbCB7XHJcbiAgdG9wOiAtMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxlZnQ6IDAuOHJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Your session has expired, please log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Invalid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_0_div_10_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_div_0_div_10_div_2_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.loginForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.loginForm.controls.email.errors.pattern);
} }
function LoginComponent_div_0_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Invalid user or password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_0_div_16_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_div_0_div_16_div_2_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.loginForm.controls.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.loginForm.controls.password.errors.invalidLogin);
} }
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LoginComponent_div_0_div_3_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onSumbit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginComponent_div_0_div_10_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, LoginComponent_div_0_div_16_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Not registred?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.msg === "Unauthorized");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.email.touched && ctx_r0.loginForm.controls.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.password.touched && ctx_r0.loginForm.controls.password.errors);
} }
function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Are you sure you want to leave?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, router, apiService, localStorageService) {
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.localStorageService = localStorageService;
        this.loggedIn = false;
        this.loginForm = this.fb.group({
            // The first parameter in a FormControl is optional, is the default value we give to the control
            // The second parameter provides a set of validators such as required, minlength, maxlength ...
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.msg = history.state.msg;
        ((this.localStorageService.get('token') != null) && (this.msg !== 'Unauthorized'))
            ? this.loggedIn = true : this.loggedIn = false;
    }
    onSumbit() {
        this.login().then(response => {
            // console.log(response);
            const email = 'email';
            this.token = response.token;
            if (this.loginForm.valid) {
                this.localStorageService.set('token', this.token);
                this.localStorageService.set('email', this.loginForm.value[email]);
                this.router.navigateByUrl('/', { state: response });
            }
        }, error => {
            if (error.message === 'Invalid Credentials') {
                // console.log(error)
                const password = 'password';
                this.loginForm.controls[password].setErrors({
                    invalidLogin: true
                });
            }
        });
        // console.log(this.loginForm.valid);
        /*if(this.loginForm.valid){
          this.router.navigateByUrl("/"/*, {state: response});
        }*/
    }
    login() {
        // set an error if the user and password not match
        const email = 'email';
        const password = 'password';
        const body = {
            email: this.loginForm.value[email],
            password: this.loginForm.value[password]
        };
        return this.apiService.post('/auth', body).toPromise();
    }
    logout() {
        this.localStorageService.remove('token');
        this.localStorageService.remove('email');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], ["class", "alert alert-danger", 4, "ngIf"], [1, "f__group", 3, "formGroup", "ngSubmit"], [1, "f"], ["id", "email", "type", "text", "formControlName", "email", "placeholder", " ", "autocomplete", "off", 1, "f__input"], ["for", "email", 1, "f__label"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", " ", 1, "f__input"], ["for", "password", 1, "f__label"], ["type", "submit", 1, "btn", "btn-primary", "login"], [1, "signup"], ["routerLink", "signin"], [1, "alert", "alert-danger"], ["routerLink", "/", 1, "btn", "btn-primary", "logout", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 26, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 6, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n.login[_ngcontent-%COMP%], .signup[_ngcontent-%COMP%] {\n  margin-left: 24%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFSSxrQ0FBa0M7O0FBRXRDO01BQ00sY0FBYztNQUNkLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsVUFBVTtNQUNWO0FBQ047O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQ2hJQTtFQUNJLGdCQUFBO0FBQUoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5mIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOjUyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MiU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMC41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogI2ZmNzg1MVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5mIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOjc1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMC41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogI2ZmNzg1MVxyXG4gICAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDIsIGgzLCBoNCwgaDUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmY3ODUxO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4wMjg1NztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn0gXHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmZfX2dyb3VwID4gZGl2e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZl9faW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlNWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5mX19pbnB1dDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM3OGMyYWQ7XHJcbn1cclxuXHJcbiAgICAvKiBDaGFuZ2UgYm9yZGVyIHdoZW4gaW5wdXQgZm9jdXMqL1xyXG5cclxuLmZfX2lucHV0OmZvY3VzIHtcclxuICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNkMGVhZTI7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIC4ycmVtIHJnYmEoMTIwLCAxOTQsIDE3MywgLjI1KVxyXG59XHJcblxyXG4uZl9fbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMXJlbTtcclxuICAgIHRvcDogMC44cmVtO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB+IC5mX19sYWJlbCxcclxuLmZfX2lucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pLmZfX2lucHV0Om5vdCg6Zm9jdXMpIH4gLmZfX2xhYmVsIHtcclxuICB0b3A6IC0wLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbGVmdDogMC44cmVtO1xyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uL2FwcC5jb21wb25lbnQuY3NzJztcclxuXHJcbi5sb2dpbiwgLnNpZ251cCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjQlO1xyXG59XHJcblxyXG4ubG9nb3V0IHtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _core_service_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/service/api.service */ "8Ldt");
/* harmony import */ var _pages_profile_user_user_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/profile/user/user.module */ "zp6I");
/* harmony import */ var _pages_profile_user_form_user_form_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/profile/user-form/user-form.module */ "h9Mt");
/* harmony import */ var _pages_planner_planner_planner_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/planner/planner/planner.module */ "+2mL");
/* harmony import */ var _pages_recipe_recipe_recipe_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/recipe/recipe/recipe.module */ "lTi6");
/* harmony import */ var _pages_my_recipes_my_recipes_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/my-recipes/my-recipes.module */ "y3oH");
/* harmony import */ var _pages_expenses_expenses_tracker_expense_tacker_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/expenses/expenses-tracker/expense-tacker.module */ "hJpN");
/* harmony import */ var _pages_groceries_list_groceries_list_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/groceries-list/groceries-list.module */ "EP4Q");
/* harmony import */ var _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/not-found/not-found.module */ "M9ps");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "bF8b");
/* harmony import */ var _core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./core/filter/filter.pipe */ "xeZR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ "fXoL");
































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ providers: [_core_service_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"], _core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_28__["LocalStorageService"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _pages_profile_user_user_module__WEBPACK_IMPORTED_MODULE_17__["UserModule"],
            _pages_profile_user_form_user_form_module__WEBPACK_IMPORTED_MODULE_18__["UserFormModule"],
            _pages_recipe_recipe_recipe_module__WEBPACK_IMPORTED_MODULE_20__["RecipeModule"],
            _pages_my_recipes_my_recipes_module__WEBPACK_IMPORTED_MODULE_21__["MyRecipesModule"],
            _pages_planner_planner_planner_module__WEBPACK_IMPORTED_MODULE_19__["PlannerModule"],
            _pages_expenses_expenses_tracker_expense_tacker_module__WEBPACK_IMPORTED_MODULE_22__["ExpenseModule"],
            _pages_groceries_list_groceries_list_module__WEBPACK_IMPORTED_MODULE_23__["GroceriesListModule"],
            _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_24__["WildcardRoutingModule"] // always last module to check first other child routes
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
        _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_27__["MainNavComponent"],
        _core_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_30__["FilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _pages_profile_user_user_module__WEBPACK_IMPORTED_MODULE_17__["UserModule"],
        _pages_profile_user_form_user_form_module__WEBPACK_IMPORTED_MODULE_18__["UserFormModule"],
        _pages_recipe_recipe_recipe_module__WEBPACK_IMPORTED_MODULE_20__["RecipeModule"],
        _pages_my_recipes_my_recipes_module__WEBPACK_IMPORTED_MODULE_21__["MyRecipesModule"],
        _pages_planner_planner_planner_module__WEBPACK_IMPORTED_MODULE_19__["PlannerModule"],
        _pages_expenses_expenses_tracker_expense_tacker_module__WEBPACK_IMPORTED_MODULE_22__["ExpenseModule"],
        _pages_groceries_list_groceries_list_module__WEBPACK_IMPORTED_MODULE_23__["GroceriesListModule"],
        _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_24__["WildcardRoutingModule"] // always last module to check first other child routes
    ] }); })();


/***/ }),

/***/ "ZOSf":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/sign-in-form/sign-in-form.service.ts ***!
  \********************************************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { FormGroup } from '@angular/forms';
class SignInService {
    /*constructor(private data : FormGroup){

    }*/
    signIn(password, passwordConfirmation) {
        if (password === passwordConfirmation) {
            return true;
        }
        else {
            return false;
        }
    }
}
SignInService.ɵfac = function SignInService_Factory(t) { return new (t || SignInService)(); };
SignInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignInService, factory: SignInService.ɵfac });


/***/ }),

/***/ "bF8b":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function MainNavComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainNavComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class MainNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], decls: 33, vars: 12, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "routerLink", ""], ["mat-list-item", "", "routerLink", "my-recipes"], ["mat-list-item", "", "routerLink", "planner"], ["mat-list-item", "", "routerLink", "groceries"], ["mat-list-item", "", "routerLink", "expenses"], ["mat-list-item", "", "routerLink", "user"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "spacer"], ["type", "button", "aria-label", "Login", "mat-icon-button", ""], ["aria-label", "Login nav icon", "routerLink", "login"], [1, "content"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "My recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Planner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Groceries List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Expenses tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-toolbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, MainNavComponent_button_23_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Foodie Planner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 10, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background-color: #56cc9d;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  font-family: \"Convergence\", sans-serif;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\na[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%] {\n  font-family: \"Convergence\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4QyIsImZpbGUiOiJtYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2Y2M5ZDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMiU7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5hLCBtYXQtdG9vbGJhciB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XG59XG4iXX0= */"] });


/***/ }),

/***/ "edQ9":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/user-form/user-form.service.ts ***!
  \**************************************************************/
/*! exports provided: UserFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormService", function() { return UserFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserFormService {
    constructor() {
        this.actualYear = new Date().getFullYear();
    }
    checkValidYear(birthYear) {
        if (birthYear > this.actualYear) {
            // console.log('year greather than 2021');
            return false;
        }
        return true;
    }
}
UserFormService.ɵfac = function UserFormService_Factory(t) { return new (t || UserFormService)(); };
UserFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserFormService, factory: UserFormService.ɵfac });


/***/ }),

/***/ "h9Mt":
/*!*************************************************************!*\
  !*** ./src/app/pages/profile/user-form/user-form.module.ts ***!
  \*************************************************************/
/*! exports provided: UserFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormModule", function() { return UserFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-form.component */ "kqGc");
/* harmony import */ var _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-in-form/sign-in-form.component */ "v1NO");
/* harmony import */ var _router_user_form_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../router/user-form.routing */ "m1Tv");
/* harmony import */ var _planner_planner_form_planner_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../planner/planner-form/planner-form.component */ "vUOq");
/* harmony import */ var _user_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-form.service */ "edQ9");
/* harmony import */ var src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/selectable-button/selectable-button.component */ "whHg");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class UserFormModule {
}
UserFormModule.ɵfac = function UserFormModule_Factory(t) { return new (t || UserFormModule)(); };
UserFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: UserFormModule });
UserFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_user_form_service__WEBPACK_IMPORTED_MODULE_6__["UserFormService"], src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _router_user_form_routing__WEBPACK_IMPORTED_MODULE_4__["UserFormRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](UserFormModule, { declarations: [_user_form_component__WEBPACK_IMPORTED_MODULE_2__["UserFormComponent"],
        _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_3__["SignInFormComponent"],
        _planner_planner_form_planner_form_component__WEBPACK_IMPORTED_MODULE_5__["PlannerFormComponent"],
        src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_7__["SelectableButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _router_user_form_routing__WEBPACK_IMPORTED_MODULE_4__["UserFormRoutingModule"]], exports: [src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_7__["SelectableButtonComponent"]] }); })();


/***/ }),

/***/ "hJpN":
/*!**************************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-tracker/expense-tacker.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExpenseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseModule", function() { return ExpenseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _router_expense_tracker_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../router/expense-tracker.routing */ "Mw7/");
/* harmony import */ var _expenses_tracker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expenses-tracker.component */ "89PC");
/* harmony import */ var _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../expense-form/expense-form.component */ "JLvW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ExpenseModule {
}
ExpenseModule.ɵfac = function ExpenseModule_Factory(t) { return new (t || ExpenseModule)(); };
ExpenseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ExpenseModule });
ExpenseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _router_expense_tracker_routing__WEBPACK_IMPORTED_MODULE_3__["ExpensesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ExpenseModule, { declarations: [_expenses_tracker_component__WEBPACK_IMPORTED_MODULE_4__["ExpensesTrackerComponent"],
        _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_5__["ExpenseFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _router_expense_tracker_routing__WEBPACK_IMPORTED_MODULE_3__["ExpensesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]] }); })();


/***/ }),

/***/ "iigl":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile/edit-user/edit-user.component.ts ***!
  \****************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/selectable-button/selectable-button.component */ "whHg");








function EditUserComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", d_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r1);
} }
class EditUserComponent {
    constructor(router, localStorage, apiService) {
        this.router = router;
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.meal = [];
        this.meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
        this.diets = ['Omnivorous', 'Vegetarian', 'Vegan'];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token',
            }),
        };
    }
    ngOnInit() {
        this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
        this.apiService.get('/user/' + history.state.id, this.httpOptions)
            .subscribe(response => {
            this.user = response;
            console.log(this.user);
        }, error => {
            console.log(error);
        });
    }
    onSubmit() {
        this.apiService.put('/user/' + this.user.email, this.user, this.httpOptions)
            .subscribe(response => {
            this.router.navigate(['user']);
        }, error => {
            if (error.message === 'user not registered') {
                this.router.navigate(['not-found']);
            }
            console.log(error);
        });
    }
    onClick(str) {
        if (this.meals.indexOf(str.trim(), 0) > -1) {
            if (this.meal.indexOf(str, 0) > -1) {
                this.meal.splice(this.meal.indexOf(str, 0), 1);
            }
            else {
                this.meal.push(str);
            }
            console.log(this.meal);
        }
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], decls: 34, vars: 8, consts: [[1, "f__group"], [1, "f"], ["id", "firstname", "type", "text", "placeholder", " ", "autocomplete", "off", 1, "f__input", 3, "ngModel", "ngModelChange"], ["for", "firstname", 1, "f__label"], ["id", "lastname", "type", "text", "placeholder", " ", "autocomplete", "off", 1, "f__input", 3, "ngModel", "ngModelChange"], ["for", "lastname", 1, "f__label"], ["id", "birthyear", "type", "number", "placeholder", " ", 1, "f__input", 3, "ngModel", "ngModelChange"], ["for", "birthyear", 1, "f__label"], ["for", "diet"], ["id", "diet", "type", "diet", "formControlName", "diet", 1, "form-control"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "meals"], [3, "text", "selected"], [1, "btn", "btn-primary", 3, "click"], [3, "value"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_4_listener($event) { return ctx.user.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Firstname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.birthyear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Birth year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Diet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Diet...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, EditUserComponent_option_21_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Please introduce at least three meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "app-selectable-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function EditUserComponent_Template_app_selectable_button_selected_27_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "app-selectable-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function EditUserComponent_Template_app_selectable_button_selected_28_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "app-selectable-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function EditUserComponent_Template_app_selectable_button_selected_29_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "app-selectable-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function EditUserComponent_Template_app_selectable_button_selected_30_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "--> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUserComponent_Template_button_click_32_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Sumbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.birthyear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.diets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", ctx.meals[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", ctx.meals[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", ctx.meals[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", ctx.meals[3]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_7__["SelectableButtonComponent"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 24%;\n}\r\n\r\nselect[_ngcontent-%COMP%] {\n  border: 2px solid #e1e5ee;\n  border-radius: 0.5rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVJLGtDQUFrQzs7QUFFdEM7TUFDTSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1Y7QUFDTjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FDaElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5mIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOjUyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MiU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMC41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogI2ZmNzg1MVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5mIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOjc1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMC41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogI2ZmNzg1MVxyXG4gICAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDIsIGgzLCBoNCwgaDUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmY3ODUxO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4wMjg1NztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn0gXHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmZfX2dyb3VwID4gZGl2e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZl9faW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlNWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5mX19pbnB1dDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM3OGMyYWQ7XHJcbn1cclxuXHJcbiAgICAvKiBDaGFuZ2UgYm9yZGVyIHdoZW4gaW5wdXQgZm9jdXMqL1xyXG5cclxuLmZfX2lucHV0OmZvY3VzIHtcclxuICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNkMGVhZTI7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIC4ycmVtIHJnYmEoMTIwLCAxOTQsIDE3MywgLjI1KVxyXG59XHJcblxyXG4uZl9fbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMXJlbTtcclxuICAgIHRvcDogMC44cmVtO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB+IC5mX19sYWJlbCxcclxuLmZfX2lucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pLmZfX2lucHV0Om5vdCg6Zm9jdXMpIH4gLmZfX2xhYmVsIHtcclxuICB0b3A6IC0wLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbGVmdDogMC44cmVtO1xyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzJztcclxuXHJcbi5mX19ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBtYXJnaW4tbGVmdDogMjQlO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "imb2":
/*!**********************************************************!*\
  !*** ./src/app/pages/my-recipes/my-recipes.component.ts ***!
  \**********************************************************/
/*! exports provided: MyRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRecipesComponent", function() { return MyRecipesComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_display_recipes_display_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/display-recipes/display-recipes.component */ "1MR9");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");










function MyRecipesComponent_mat_card_43_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyRecipesComponent_mat_card_43_div_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ingredient_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.onDeleteIngredient(ingredient_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingredient_r6);
} }
function MyRecipesComponent_mat_card_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Filter ingredients:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MyRecipesComponent_mat_card_43_div_4_Template, 6, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.ingredientsFilter);
} }
const _c0 = function (a0) { return { "show": a0 }; };
class MyRecipesComponent {
    constructor(router, apiService, localStorage) {
        this.router = router;
        this.apiService = apiService;
        this.localStorage = localStorage;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token'
            })
        };
        this.recipes = [];
        this.environment = 'myrecipes';
        this.rid = '';
        this.ingredientsFilter = [];
        this.showModal = false;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.searchControl.valueChanges
            .subscribe((value) => {
            if (value.length > 0) {
                // asi no se puede hacer porq no filtra las recetas q sean solo del user
                // lo hace con tda la colleccion
                this.apiService.post('/filter', { name: value, user: this.localStorage.get('email') })
                    .subscribe(response => {
                    // console.log('r', response);
                    this.recipes = response;
                }, error => {
                    console.log(error);
                });
            }
            else {
                this.apiService.get('/recipe/book/' + this.localStorage.get('email'), this.httpOptions)
                    .subscribe(response => {
                    this.recipes = response;
                    // this.setRecipes(this.recipes);
                }, error => {
                    // internal server error
                    console.log(error);
                });
            }
        });
    }
    ngOnInit() {
        if (this.localStorage.get('token') == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
            this.apiService.get('/recipe/book/' + this.localStorage.get('email'), this.httpOptions).subscribe(response => {
                this.recipes = response;
            }, error => {
                if (error.status === 401) {
                    this.router.navigateByUrl('/login', { state: { msg: 'Unauthorized' } });
                }
                else {
                    console.log(error);
                }
            });
        }
    }
    onFilter(n, d, m) {
        // console.log(n, d, m);
        this.apiService.post('/filter', { name: n, diet: d, meal: m, ingredients: this.ingredientsFilter, user: this.localStorage.get('email') })
            .subscribe(response => {
            console.log('r', response);
            this.recipes = response;
        }, error => {
            console.log('e', error);
        });
    }
    onDelete() {
        this.apiService.delete('/recipe/' + this.rid + '&' + this.localStorage.get('email'), this.httpOptions)
            .subscribe(response => {
            // console.log(response);
            if (response.msg === 'recipe removed') {
                this.ngOnInit();
            }
        }, error => {
            console.log(error);
        });
        this.showModal = false;
    }
    onShow(rid) {
        this.rid = rid;
        this.showModal = true;
    }
    /* onAddRecipe(): void{
      this.router.navigate(['recipe/recipe-form']);
    }*/
    onAddIngredient(ingredient) {
        this.apiService.get('/ingredient/' + ingredient).subscribe(ing => {
            if (this.ingredientsFilter.indexOf(this.ingredientsFilter.filter(i => i === ing.name)[0], 0) === -1) {
                this.ingredientsFilter.push(ing.name);
            }
            else {
                // already in the list
            }
        }, error => {
            // not a valid ingredient
            console.log(error);
        });
    }
    onDeleteIngredient(ingredient) {
        const i = this.ingredientsFilter.filter(ing => ing === ingredient)[0];
        const index = this.ingredientsFilter.indexOf(i, 0);
        if (index > -1) {
            this.ingredientsFilter.splice(index, 1);
        }
    }
}
MyRecipesComponent.ɵfac = function MyRecipesComponent_Factory(t) { return new (t || MyRecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"])); };
MyRecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MyRecipesComponent, selectors: [["app-my-recipes"]], decls: 59, vars: 7, consts: [[1, "grid-container"], [1, "nav", "nav-pills"], [1, "nav-item"], ["routerLink", "/my-recipes/recipe-form", 1, "nav-link"], [1, "fas", "fa-plus-circle"], [1, "mat-h1"], [1, "filter-input"], [1, "input-group"], ["type", "text", "placeholder", "Search recipe", "aria-label", "recipe", "aria-describedby", "basic-addon1", 1, "form-control", 3, "formControl"], ["name", ""], ["id", "diet", 1, "custom-select"], ["diet", ""], ["selected", ""], ["value", "Omnivorous"], ["value", "Vegetarian"], ["value", "Vegan"], ["id", "meal", 1, "custom-select"], ["meal", ""], ["value", "Breakfast"], ["value", "Snack"], ["value", "Lunch"], ["value", "Dinner"], [1, "input-ingredient"], ["type", "text", "placeholder", "Introduce an ingredient", 1, "form-control"], ["ingredient", ""], ["type", "button", 1, "btn", "btn-primary", "btn-circle", 3, "click"], [1, "fas", "fa-plus"], [1, "btn", "btn-outline-primary", "btn-circle", 3, "click"], [1, "fas", "fa-check"], ["class", "ingredient-filter", 4, "ngIf"], ["id", "modal", "role", "dialog", 1, "modal", "fade", 3, "ngClass"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], [3, "recipes", "environment", "deleteRecipe"], [1, "ingredient-filter"], [1, "card-title"], [1, "ingredientList"], ["class", "ingredient", 4, "ngFor", "ngForOf"], [1, "ingredient"], [1, "btn", "btn-secondary", "btn-circle", 3, "click"], [1, "fas", "fa-times"]], template: function MyRecipesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Add recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "My recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Diet...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Omnivorous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Vegetarian");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Vegan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "select", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Meal...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Breakfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Snack");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Lunch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyRecipesComponent_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](37); return ctx.onAddIngredient(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyRecipesComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24); return ctx.onFilter(_r0.value, _r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, MyRecipesComponent_mat_card_43_Template, 5, 1, "mat-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyRecipesComponent_Template_button_click_48_listener() { return ctx.showModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Do you want to remove the recipe?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyRecipesComponent_Template_button_click_54_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyRecipesComponent_Template_button_click_56_listener() { return ctx.showModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "app-display-recipes", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("deleteRecipe", function MyRecipesComponent_Template_app_display_recipes_deleteRecipe_58_listener($event) { return ctx.onShow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ingredientsFilter.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("recipes", ctx.recipes)("environment", ctx.environment);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], src_app_components_display_recipes_display_recipes_component__WEBPACK_IMPORTED_MODULE_7__["DisplayRecipesComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px){\r\n\r\n    .input-group[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%] {\r\n      flex-basis: 20%;\r\n      margin-left: 5px;\r\n      margin-right: 5px;\r\n      margin-bottom: 5px;\r\n    }\r\n  \r\n    .input-ingredient[_ngcontent-%COMP%]{\r\n      flex-basis: 20%;\r\n      margin-left: 5px;\r\n      margin-right: 5px;\r\n      margin-bottom: 5px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .input-ingredient[_ngcontent-%COMP%]{\r\n        flex-basis: 77%;\r\n        margin-left: 5px;\r\n        margin-right: 5px;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    .input-group[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%] {\r\n        flex-basis: 30%;\r\n        margin-left: 5px;\r\n        margin-right: 5px;\r\n        margin-bottom: 5px;\r\n    }\r\n}\r\n\r\n.filter-input[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n    flex-basis: 30%;\r\n}\r\n\r\n.modal.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.ingredient-filter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.ingredient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    flex-basis: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwibXktcmVjaXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFSSxrQ0FBa0M7O0FBRXRDO01BQ00sY0FBYztNQUNkLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsVUFBVTtNQUNWO0FBQ047O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQ2pJQTs7SUFFSTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtJQUNwQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQiIsImZpbGUiOiJteS1yZWNpcGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5mIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOjUyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MiU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMC41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogI2ZmNzg1MVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5mIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOjc1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMC41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogI2ZmNzg1MVxyXG4gICAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDIsIGgzLCBoNCwgaDUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmY3ODUxO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4wMjg1NztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn0gXHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmZfX2dyb3VwID4gZGl2e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZl9faW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlNWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5mX19pbnB1dDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM3OGMyYWQ7XHJcbn1cclxuXHJcbiAgICAvKiBDaGFuZ2UgYm9yZGVyIHdoZW4gaW5wdXQgZm9jdXMqL1xyXG5cclxuLmZfX2lucHV0OmZvY3VzIHtcclxuICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNkMGVhZTI7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIC4ycmVtIHJnYmEoMTIwLCAxOTQsIDE3MywgLjI1KVxyXG59XHJcblxyXG4uZl9fbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMXJlbTtcclxuICAgIHRvcDogMC44cmVtO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB+IC5mX19sYWJlbCxcclxuLmZfX2lucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pLmZfX2lucHV0Om5vdCg6Zm9jdXMpIH4gLmZfX2xhYmVsIHtcclxuICB0b3A6IC0wLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbGVmdDogMC44cmVtO1xyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uL2FwcC5jb21wb25lbnQuY3NzJztcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuaW5wdXQtZ3JvdXAsIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlucHV0LWluZ3JlZGllbnR7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDIwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxufVxyXG4gIFxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG5cclxuICAgIC5pbnB1dC1pbmdyZWRpZW50e1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDc3JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZ3JvdXAsIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICBmbGV4LWJhc2lzOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0ZXItaW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxufVxyXG5cclxuLm1vZGFsLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuICBcclxuLmluZ3JlZGllbnQtZmlsdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaW5ncmVkaWVudCA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC1iYXNpczogMjAlO1xyXG59XHJcblxyXG4gIFxyXG4gIFxyXG4iXX0= */"] });


/***/ }),

/***/ "j18b":
/*!**************************************************!*\
  !*** ./src/app/router/groceries-list.routing.ts ***!
  \**************************************************/
/*! exports provided: GroceriesListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesListRoutingModule", function() { return GroceriesListRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_groceries_list_groceries_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/groceries-list/groceries-list.component */ "B10K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const groceriesListRoutes = [
    { path: 'groceries', component: _pages_groceries_list_groceries_list_component__WEBPACK_IMPORTED_MODULE_1__["GroceriesListComponent"] }
];
class GroceriesListRoutingModule {
}
GroceriesListRoutingModule.ɵfac = function GroceriesListRoutingModule_Factory(t) { return new (t || GroceriesListRoutingModule)(); };
GroceriesListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GroceriesListRoutingModule });
GroceriesListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(groceriesListRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GroceriesListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "kEjy":
/*!*******************************************!*\
  !*** ./src/app/router/planner.routing.ts ***!
  \*******************************************/
/*! exports provided: PlannerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlannerRoutingModule", function() { return PlannerRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_planner_meal_form_meal_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/planner/meal-form/meal-form.component */ "Hkfm");
/* harmony import */ var _pages_planner_menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/planner/menu-form/menu-form.component */ "PwrI");
/* harmony import */ var _pages_planner_planner_form_planner_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/planner/planner-form/planner-form.component */ "vUOq");
/* harmony import */ var _pages_planner_planner_planner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/planner/planner/planner.component */ "vSUY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const plannerRoutes = [
    { path: 'planner', component: _pages_planner_planner_planner_component__WEBPACK_IMPORTED_MODULE_4__["PlannerComponent"] },
    { path: 'planner/planner-form', component: _pages_planner_planner_form_planner_form_component__WEBPACK_IMPORTED_MODULE_3__["PlannerFormComponent"] },
    { path: 'planner/meal-form', component: _pages_planner_meal_form_meal_form_component__WEBPACK_IMPORTED_MODULE_1__["MealFormComponent"] },
    { path: 'planner/menu-form', component: _pages_planner_menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_2__["MenuFormComponent"] }
];
class PlannerRoutingModule {
}
PlannerRoutingModule.ɵfac = function PlannerRoutingModule_Factory(t) { return new (t || PlannerRoutingModule)(); };
PlannerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PlannerRoutingModule });
PlannerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(plannerRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PlannerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "kqGc":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile/user-form/user-form.component.ts ***!
  \****************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-form.service */ "edQ9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function UserFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Firstname is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Lastname is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Birth year is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Invalid year must be less than ", ctx_r4.year, " ");
} }
function UserFormComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserFormComponent_div_24_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserFormComponent_div_24_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.userForm.controls.birthyear.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.userForm.controls.birthyear.errors.invalidYear);
} }
class UserFormComponent {
    constructor(fb, router, usrFormService) {
        this.fb = fb;
        this.router = router;
        this.usrFormService = usrFormService;
        this.submitted = false;
        this.year = new Date().getFullYear();
        this.userForm = this.fb.group({
            // validate if firstname and lastname does not contain special chars
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            birthyear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() { }
    onSubmit() {
        this.checkBirthYear();
        if (this.userForm.valid) {
            const data = {
                email: history.state.email,
                password: history.state.password,
                user: this.userForm.value
            };
            this.router.navigateByUrl('login/signin/user/planner', { state: data });
        }
    }
    checkBirthYear() {
        const result = this.usrFormService.checkValidYear(this.userForm.controls['birthyear'].value);
        if (!result) {
            this.userForm.controls['birthyear'].setErrors({
                invalidYear: true
            });
        }
    }
}
UserFormComponent.ɵfac = function UserFormComponent_Factory(t) { return new (t || UserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_form_service__WEBPACK_IMPORTED_MODULE_3__["UserFormService"])); };
UserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserFormComponent, selectors: [["app-user-form"]], decls: 29, vars: 4, consts: [[1, "container"], [1, "f__group", 3, "formGroup", "ngSubmit"], [1, "f"], ["id", "firstname", "type", "text", "formControlName", "firstname", "placeholder", " ", "autocomplete", "off", 1, "f__input"], ["for", "firstname", 1, "f__label"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "lastname", "type", "text", "formControlName", "lastname", "placeholder", " ", "autocomplete", "off", 1, "f__input"], ["for", "lastname", 1, "f__label"], ["id", "birthyear", "type", "number", "formControlName", "birthyear", "maxlength", "4", "placeholder", " ", 1, "f__input"], ["for", "birthyear", 1, "f__label"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"]], template: function UserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserFormComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Firstname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserFormComponent_div_11_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserFormComponent_div_18_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Birth year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserFormComponent_div_24_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.controls.firstname.touched && !ctx.userForm.controls.firstname.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.controls.lastname.touched && !ctx.userForm.controls.lastname.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.controls.birthyear.touched && ctx.userForm.controls.birthyear.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    margin-left: 24%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwidXNlci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVJLGtDQUFrQzs7QUFFdEM7TUFDTSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1Y7QUFDTjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FDaElBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InVzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo1MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo3NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQsIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmNzg1MTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDI4NTc7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59IFxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mX19ncm91cCA+IGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZfX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZl9faW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzhjMmFkO1xyXG59XHJcblxyXG4gICAgLyogQ2hhbmdlIGJvcmRlciB3aGVuIGlucHV0IGZvY3VzKi9cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDBlYWUyO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDEyMCwgMTk0LCAxNzMsIC4yNSlcclxufVxyXG5cclxuLmZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMgfiAuZl9fbGFiZWwsXHJcbi5mX19pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKS5mX19pbnB1dDpub3QoOmZvY3VzKSB+IC5mX19sYWJlbCB7XHJcbiAgdG9wOiAtMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxlZnQ6IDAuOHJlbTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "lTi6":
/*!******************************************************!*\
  !*** ./src/app/pages/recipe/recipe/recipe.module.ts ***!
  \******************************************************/
/*! exports provided: RecipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeModule", function() { return RecipeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe.component */ "/p2I");
/* harmony import */ var _recipe_form_recipe_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipe-form/recipe-form.component */ "SjIf");
/* harmony import */ var _router_recipe_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../router/recipe.routing */ "uhtS");
/* harmony import */ var _profile_user_form_user_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../profile/user-form/user-form.module */ "h9Mt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class RecipeModule {
}
RecipeModule.ɵfac = function RecipeModule_Factory(t) { return new (t || RecipeModule)(); };
RecipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RecipeModule });
RecipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _profile_user_form_user_form_module__WEBPACK_IMPORTED_MODULE_7__["UserFormModule"],
            _router_recipe_routing__WEBPACK_IMPORTED_MODULE_6__["RecipeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RecipeModule, { declarations: [_recipe_component__WEBPACK_IMPORTED_MODULE_4__["RecipeComponent"],
        _recipe_form_recipe_form_component__WEBPACK_IMPORTED_MODULE_5__["RecipeFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _profile_user_form_user_form_module__WEBPACK_IMPORTED_MODULE_7__["UserFormModule"],
        _router_recipe_routing__WEBPACK_IMPORTED_MODULE_6__["RecipeRoutingModule"]] }); })();


/***/ }),

/***/ "m1Tv":
/*!*********************************************!*\
  !*** ./src/app/router/user-form.routing.ts ***!
  \*********************************************/
/*! exports provided: UserFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormRoutingModule", function() { return UserFormRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_planner_planner_form_planner_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/planner/planner-form/planner-form.component */ "vUOq");
/* harmony import */ var _pages_profile_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/profile/sign-in-form/sign-in-form.component */ "v1NO");
/* harmony import */ var _pages_profile_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/profile/user-form/user-form.component */ "kqGc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const userFormRoutes = [
    { path: 'login/signin', component: _pages_profile_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_2__["SignInFormComponent"] },
    { path: 'login/signin/user', component: _pages_profile_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_3__["UserFormComponent"], data: _pages_profile_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_3__["UserFormComponent"] },
    { path: 'login/signin/user/planner', component: _pages_planner_planner_form_planner_form_component__WEBPACK_IMPORTED_MODULE_1__["PlannerFormComponent"] }
];
class UserFormRoutingModule {
}
UserFormRoutingModule.ɵfac = function UserFormRoutingModule_Factory(t) { return new (t || UserFormRoutingModule)(); };
UserFormRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserFormRoutingModule });
UserFormRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(userFormRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserFormRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "oLT7":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/user/user.component.ts ***!
  \******************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UserComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Omnivorous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Vegetarian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Vegan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", m_r4, " ");
} }
class UserComponent {
    constructor(apiService, router, localStorage) {
        this.apiService = apiService;
        this.router = router;
        this.localStorage = localStorage;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-auth-token': 'token'
            })
        };
    }
    ngOnInit() {
        if (this.localStorage.get('token') == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
            this.apiService.get('/user/' + this.localStorage.get('email'), this.httpOptions)
                .subscribe(response => {
                this.user = response;
            }, error => {
                if (error.status === 401) {
                    this.router.navigateByUrl('/login', { state: { msg: 'Unauthorized' } });
                }
                else if (error.message === 'user not found') {
                    this.router.navigate(['/notfound']);
                }
                else {
                    console.log('Internal server error');
                }
            });
        }
    }
    onEdit(userId) {
        this.router.navigate(['user/edit-user'], { state: { id: this.user.email } });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])], decls: 38, vars: 8, consts: [[1, "grid-container"], [1, "profile"], [1, "data-pair"], [1, "label"], [1, "input"], ["class", "input", 4, "ngIf"], ["class", "meal", 4, "ngFor", "ngForOf"], [1, "btn", "btn-warning", 3, "click"], [1, "fas", "fa-drumstick-bite"], [1, "fas", "fa-egg"], [1, "fas", "fa-seedling"], [1, "meal"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "LASTNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "BIRTH YEAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "DIET");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, UserComponent_div_28_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, UserComponent_div_29_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, UserComponent_div_30_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "MEALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, UserComponent_div_34_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserComponent_Template_button_click_36_listener() { return ctx.onEdit(ctx.user.email); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.user.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.user.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.user.birthyear);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user.diet == "Omnivorous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user.diet == "Vegetarian");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user.diet == "Vegan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.user.meals);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n@media(min-width: 768px){\r\n\r\n    .profile[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n        margin: auto;\r\n    }\r\n    \r\n    .btn-warning[_ngcontent-%COMP%] {\r\n        margin-left: 20%;\r\n    }\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.data-pair[_ngcontent-%COMP%] {\r\n    border-bottom: .7px solid aliceblue;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n    flex-basis: 25%;\r\n    font-size: small;\r\n    color:slategrey;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n    flex-basis: 70%;\r\n    font-size: large;\r\n}\r\n\r\n.meal[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-family: \"Convergence\", sans-serif;\r\n    flex-basis: 24%;\r\n    font-size: large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwidXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFSSxrQ0FBa0M7O0FBRXRDO01BQ00sY0FBYztNQUNkLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsVUFBVTtNQUNWO0FBQ047O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQ2pJQTs7SUFFSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NTIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUyJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMiwgaDMsIGg0LCBoNSB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZjc4NTE7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjAyODU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufSBcclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZl9fZ3JvdXAgPiBkaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mX19pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmZfX2lucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzc4YzJhZDtcclxufVxyXG5cclxuICAgIC8qIENoYW5nZSBib3JkZXIgd2hlbiBpbnB1dCBmb2N1cyovXHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2QwZWFlMjtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgLjJyZW0gcmdiYSgxMjAsIDE5NCwgMTczLCAuMjUpXHJcbn1cclxuXHJcbi5mX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG4gICAgdG9wOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxufVxyXG5cclxuLmZfX2lucHV0OmZvY3VzIH4gLmZfX2xhYmVsLFxyXG4uZl9faW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikuZl9faW5wdXQ6bm90KDpmb2N1cykgfiAuZl9fbGFiZWwge1xyXG4gIHRvcDogLTAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsZWZ0OiAwLjhyZW07XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXBwLmNvbXBvbmVudC5jc3MnO1xyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLXdhcm5pbmcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9maWxlID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRhdGEtcGFpciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAuN3B4IHNvbGlkIGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmbGV4LWJhc2lzOiAyNSU7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6c2xhdGVncmV5O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZsZXgtYmFzaXM6IDcwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5tZWFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmbGV4LWJhc2lzOiAyNCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59Il19 */"] });


/***/ }),

/***/ "sdZK":
/*!*******************************************************!*\
  !*** ./src/app/core/service/local-storage.service.ts ***!
  \*******************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalStorageService {
    constructor() {
        this.localStorage = window.localStorage;
    }
    get(key) {
        if (this.isLocalStorageSupported) {
            const localStorageData = this.localStorage.getItem(key);
            if (localStorageData != null) {
                return JSON.parse(localStorageData);
            }
        }
        return null;
    }
    set(key, value) {
        if (this.isLocalStorageSupported) {
            this.localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }
    remove(key) {
        if (this.isLocalStorageSupported) {
            this.localStorage.removeItem(key);
            return true;
        }
        return false;
    }
    get isLocalStorageSupported() {
        return !!this.localStorage;
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uhtS":
/*!******************************************!*\
  !*** ./src/app/router/recipe.routing.ts ***!
  \******************************************/
/*! exports provided: RecipeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeRoutingModule", function() { return RecipeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_recipe_recipe_form_recipe_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/recipe/recipe-form/recipe-form.component */ "SjIf");
/* harmony import */ var _pages_recipe_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/recipe/recipe/recipe.component */ "/p2I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const recipeRoutes = [
    { path: 'recipe', component: _pages_recipe_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_2__["RecipeComponent"] },
    { path: 'recipe/recipe-form', component: _pages_recipe_recipe_form_recipe_form_component__WEBPACK_IMPORTED_MODULE_1__["RecipeFormComponent"] }
];
class RecipeRoutingModule {
}
RecipeRoutingModule.ɵfac = function RecipeRoutingModule_Factory(t) { return new (t || RecipeRoutingModule)(); };
RecipeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RecipeRoutingModule });
RecipeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(recipeRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RecipeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "v1NO":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/sign-in-form/sign-in-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: SignInFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInFormComponent", function() { return SignInFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sign_in_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in-form.service */ "ZOSf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SignInFormComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignInFormComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Invalid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignInFormComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " User already exists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignInFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignInFormComponent_div_10_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignInFormComponent_div_10_div_2_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SignInFormComponent_div_10_div_3_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.signInForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.signInForm.controls.email.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.signInForm.controls.email.errors.alreadyExists);
} }
function SignInFormComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignInFormComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least contain: 8 characters, a number, a upper and lower case character, a special character ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignInFormComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignInFormComponent_div_16_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignInFormComponent_div_16_div_2_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.signInForm.controls.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.signInForm.controls.password.errors.pattern);
} }
function SignInFormComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password confirmations is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignInFormComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The confirmation password does not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignInFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignInFormComponent_div_22_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignInFormComponent_div_22_div_2_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.signInForm.controls.passwordConf.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.signInForm.controls.passwordConf.errors.invalidSignIn);
} }
class SignInFormComponent {
    constructor(fb, router, route, signInService, apiService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.signInService = signInService;
        this.apiService = apiService;
        this.submitted = false;
        this.signInForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$')]],
            passwordConf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.signIn().then(response => {
            if (response.msg) {
                this.signInForm.controls['email'].setErrors({
                    alreadyExists: true
                });
            }
            else {
                if (this.signInForm.valid) {
                    this.router.navigateByUrl('login/signin/user', { state: this.signInForm.value });
                }
            }
        }, error => {
            console.log('internal server error', error);
        });
    }
    signIn() {
        const res = this.apiService.get('/user/exists/' + this.signInForm.value['email']).toPromise();
        const result = this.signInService.signIn(this.signInForm.controls['password'].value, this.signInForm.controls['passwordConf'].value);
        if (!result) {
            this.signInForm.controls['passwordConf'].setErrors({
                invalidSignIn: true
            });
        }
        return res;
    }
}
SignInFormComponent.ɵfac = function SignInFormComponent_Factory(t) { return new (t || SignInFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_sign_in_form_service__WEBPACK_IMPORTED_MODULE_4__["SignInService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
SignInFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignInFormComponent, selectors: [["app-sign-in-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])], decls: 27, vars: 4, consts: [[1, "grid-container"], [1, "f__group", 3, "formGroup", "ngSubmit"], [1, "f"], ["id", "email", "type", "text", "formControlName", "email", "placeholder", " ", "autocomplete", "off", 1, "f__input"], ["for", "email", 1, "f__label"], [4, "ngIf"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", " ", 1, "f__input"], ["for", "password", 1, "f__label"], ["id", "passwordConf", "type", "password", "formControlName", "passwordConf", "placeholder", " ", 1, "f__input"], ["for", "passwordConf", 1, "f__label"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function SignInFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Welcome to foodie planner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignInFormComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SignInFormComponent_div_10_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SignInFormComponent_div_16_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SignInFormComponent_div_22_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signInForm.controls.email.touched && ctx.signInForm.controls.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signInForm.controls.password.touched && ctx.signInForm.controls.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signInForm.controls.passwordConf.touched && ctx.signInForm.controls.passwordConf.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    margin-left: 24%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwic2lnbi1pbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVJLGtDQUFrQzs7QUFFdEM7TUFDTSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1Y7QUFDTjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FDaElBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNpZ24taW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo1MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo3NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQsIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmNzg1MTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDI4NTc7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59IFxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mX19ncm91cCA+IGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZfX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZl9faW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzhjMmFkO1xyXG59XHJcblxyXG4gICAgLyogQ2hhbmdlIGJvcmRlciB3aGVuIGlucHV0IGZvY3VzKi9cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDBlYWUyO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDEyMCwgMTk0LCAxNzMsIC4yNSlcclxufVxyXG5cclxuLmZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMgfiAuZl9fbGFiZWwsXHJcbi5mX19pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKS5mX19pbnB1dDpub3QoOmZvY3VzKSB+IC5mX19sYWJlbCB7XHJcbiAgdG9wOiAtMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxlZnQ6IDAuOHJlbTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "vSUY":
/*!************************************************************!*\
  !*** ./src/app/pages/planner/planner/planner.component.ts ***!
  \************************************************************/
/*! exports provided: PlannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlannerComponent", function() { return PlannerComponent; });
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/menu.component */ "H510");










function PlannerComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannerComponent_li_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const menu_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.activeMenu(menu_r3.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", menu_r3.title, " ");
} }
function PlannerComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "You do not have any menus yet, add one!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PlannerComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-menu", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menu", ctx_r2.menu)("httpOptions", ctx_r2.httpOptions);
} }
const _c0 = function (a0) { return { "show": a0 }; };
class PlannerComponent {
    constructor(breakpointObserver, router, localStorage, apiService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.localStorage = localStorage;
        this.apiService = apiService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-auth-token': 'token'
            })
        };
        // this.card = [];
        this.menus = [];
        this.showModalDel = false;
        this.menu = {
            _id: '',
            _user: '',
            title: ''
        };
    }
    ngOnInit() {
        if (this.localStorage.get('token') == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
            this.apiService.get('/menu/user/' + this.localStorage.get('email'), this.httpOptions)
                .subscribe(response => {
                this.menus = response;
                if (this.menus.length > 0) {
                    this.menu = this.menus[0];
                    // this.getMenu(this.menus[0]._user, this.httpOptions);
                }
            }, error => {
                if (error.status === 401) {
                    this.router.navigateByUrl('/login', { state: { msg: 'Unauthorized' } });
                }
                else if (error.message === 'There are no menus for such user') {
                    console.log(error);
                }
            });
        }
    }
    activeMenu(title) {
        this.menu = this.menus.filter(m => m.title === title)[0];
    }
    addMenu() {
        this.router.navigate(['planner/menu-form']);
    }
    /*editMenu(): void{
      this.router.navigate(['planner/meal-form']);
    }*/
    deleteMenu(mid) {
        this.apiService.delete('/menu/' + mid, this.httpOptions)
            .subscribe(response => {
            if (response.msg === 'menu removed') {
                this.ngOnInit();
            }
        }, error => {
            console.log(error);
        });
        this.showModalDel = false;
    }
}
PlannerComponent.ɵfac = function PlannerComponent_Factory(t) { return new (t || PlannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
PlannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlannerComponent, selectors: [["app-planner"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"], src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])], decls: 28, vars: 6, consts: [[1, "grid-container"], [1, "nav", "nav-pills"], [1, "nav-item"], ["routerLink", "menu-form", 1, "nav-link"], [1, "fas", "fa-plus-circle"], [1, "nav-link", 3, "click"], [1, "fas", "fa-minus-circle"], [4, "ngFor", "ngForOf"], ["id", "deleteModal", "role", "dialog", 1, "modal", "fade", 3, "ngClass"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], [4, "ngIf"], [3, "menu", "httpOptions"]], template: function PlannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Add menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannerComponent_Template_a_click_7_listener() { return ctx.showModalDel = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Delete menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PlannerComponent_li_10_Template, 3, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannerComponent_Template_button_click_15_listener() { return ctx.showModalDel = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannerComponent_Template_button_click_21_listener() { return ctx.deleteMenu(ctx.menu._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannerComponent_Template_button_click_23_listener() { return ctx.showModalDel = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, PlannerComponent_div_25_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, PlannerComponent_div_26_Template, 2, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx.showModalDel));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.menus.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.menus.length > 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.badge-dark[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n    width: 95%;\r\n}\r\n\r\n.badge-primary[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    font-size: small;\r\n    top: 5px;\r\n    left:10px\r\n}\r\n\r\n.more-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n}\r\n\r\n#useless[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    \r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n\r\n    display: grid;\r\n    margin-bottom: 5%;\r\n    grid-template-columns: -webkit-max-content;\r\n    grid-template-columns: max-content;\r\n    grid-template-rows: -webkit-max-content;\r\n    grid-template-rows: max-content;\r\n\r\n}\r\n\r\n.modal.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwicGxhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFSSxrQ0FBa0M7O0FBRXRDO01BQ00sY0FBYztNQUNkLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsVUFBVTtNQUNWO0FBQ047O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQ2hJQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZ0JBQWdCOztBQUVwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDBDQUFrQztJQUFsQyxrQ0FBa0M7SUFDbEMsdUNBQStCO0lBQS9CLCtCQUErQjs7QUFFbkM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InBsYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NTIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUyJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMiwgaDMsIGg0LCBoNSB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZjc4NTE7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjAyODU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufSBcclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZl9fZ3JvdXAgPiBkaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mX19pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmZfX2lucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzc4YzJhZDtcclxufVxyXG5cclxuICAgIC8qIENoYW5nZSBib3JkZXIgd2hlbiBpbnB1dCBmb2N1cyovXHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2QwZWFlMjtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgLjJyZW0gcmdiYSgxMjAsIDE5NCwgMTczLCAuMjUpXHJcbn1cclxuXHJcbi5mX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG4gICAgdG9wOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxufVxyXG5cclxuLmZfX2lucHV0OmZvY3VzIH4gLmZfX2xhYmVsLFxyXG4uZl9faW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikuZl9faW5wdXQ6bm90KDpmb2N1cykgfiAuZl9fbGFiZWwge1xyXG4gIHRvcDogLTAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsZWZ0OiAwLjhyZW07XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXBwLmNvbXBvbmVudC5jc3MnO1xyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWRnZS1kYXJrIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLmJhZGdlLXByaW1hcnkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDoxMHB4XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4jdXNlbGVzcyBcclxuLmNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIFxyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudDtcclxuXHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"] });


/***/ }),

/***/ "vUOq":
/*!**********************************************************************!*\
  !*** ./src/app/pages/planner/planner-form/planner-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlannerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlannerFormComponent", function() { return PlannerFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/selectable-button/selectable-button.component */ "whHg");










function PlannerFormComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", d_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r3);
} }
function PlannerFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please select an option ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PlannerFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-selectable-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selected", function PlannerFormComponent_div_17_Template_app_selectable_button_selected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.onClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", m_r4);
} }
class PlannerFormComponent {
    constructor(fb, router, apiService, localStorage) {
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.localStorage = localStorage;
        this.meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
        this.diets = ['Omnivorous', 'Vegetarian', 'Vegan'];
        this.plannerForm = this.fb.group({
            diet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.meal = [];
    }
    ngOnInit() { }
    onClick(str) {
        if (this.meals.indexOf(str.trim(), 0) > -1) {
            if (this.meal.indexOf(str, 0) > -1) {
                this.meal.splice(this.meal.indexOf(str, 0), 1);
            }
            else {
                this.meal.push(str);
            }
            console.log(this.meal);
        }
    }
    onSubmit() {
        if (this.plannerForm.valid) {
            const user = {
                email: history.state.email,
                password: history.state.password,
                firstname: history.state.user.firstname,
                lastname: history.state.user.lastname,
                birthyear: history.state.user.birthyear,
                meals: this.meal,
                diet: this.plannerForm.value['diet'],
                recipes: [],
                groceries: []
            };
            this.apiService.post('/user', user).subscribe(response => {
                this.localStorage.set('token', response.token);
                this.localStorage.set('email', user.email);
                this.router.navigateByUrl('/');
            }, error => {
                console.log(error);
            });
        }
    }
}
PlannerFormComponent.ɵfac = function PlannerFormComponent_Factory(t) { return new (t || PlannerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"])); };
PlannerFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlannerFormComponent, selectors: [["app-planner-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])], decls: 20, vars: 4, consts: [[1, "container"], [1, "f__group", 3, "formGroup", "ngSubmit"], [1, "f"], ["for", "diet"], ["id", "diet", "type", "diet", "formControlName", "diet", 1, "form-control"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger danger", 4, "ngIf"], ["for", "meals"], ["class", "meals", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"], [1, "alert", "alert-danger", "danger"], [1, "meals"], [1, "meal"], [3, "text", "selected"]], template: function PlannerFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Food habits");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PlannerFormComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Diet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Diet...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PlannerFormComponent_option_10_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PlannerFormComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Please introduce at least three meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PlannerFormComponent_div_17_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.plannerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.diets);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.plannerForm.controls.diet.touched && !ctx.plannerForm.controls.diet.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.meals);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], src_app_components_selectable_button_selectable_button_component__WEBPACK_IMPORTED_MODULE_6__["SelectableButtonComponent"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n    flex-basis: 100%;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.meals[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.meal[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 2rem;\r\n  flex-basis: 20%;\r\n  margin-bottom: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 10rem;\r\n    left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwicGxhbm5lci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVJLGtDQUFrQzs7QUFFdEM7TUFDTSxjQUFjO01BQ2QsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1Y7QUFDTjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FDaElBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztBQUNYIiwiZmlsZSI6InBsYW5uZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo1MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTIlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbiAgICAuZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczo3NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZjc4NTFcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQsIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnZlcmdlbmNlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmNzg1MTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDI4NTc7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59IFxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5mX19ncm91cCA+IGRpdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZfX2lucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UxZTVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uZl9faW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzhjMmFkO1xyXG59XHJcblxyXG4gICAgLyogQ2hhbmdlIGJvcmRlciB3aGVuIGlucHV0IGZvY3VzKi9cclxuXHJcbi5mX19pbnB1dDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDBlYWUyO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMnJlbSByZ2JhKDEyMCwgMTk0LCAxNzMsIC4yNSlcclxufVxyXG5cclxuLmZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB0b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMgfiAuZl9fbGFiZWwsXHJcbi5mX19pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKS5mX19pbnB1dDpub3QoOmZvY3VzKSB+IC5mX19sYWJlbCB7XHJcbiAgdG9wOiAtMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxlZnQ6IDAuOHJlbTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7XHJcblxyXG5sYWJlbCwgaDQge1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxufVxyXG5cclxuLmZfX2dyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZWFscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWVhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHJlbTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "whHg":
/*!*****************************************************************************!*\
  !*** ./src/app/components/selectable-button/selectable-button.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectableButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableButtonComponent", function() { return SelectableButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SelectableButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectableButtonComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.text, "\n");
} }
function SelectableButtonComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectableButtonComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.text, "\n");
} }
class SelectableButtonComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = false;
    }
    ngOnInit() {
    }
    onClick() {
        this.select ? this.select = false : this.select = true;
        this.selected.emit(this.text);
    }
}
SelectableButtonComponent.ɵfac = function SelectableButtonComponent_Factory(t) { return new (t || SelectableButtonComponent)(); };
SelectableButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectableButtonComponent, selectors: [["app-selectable-button"]], inputs: { text: "text" }, outputs: { selected: "selected" }, decls: 2, vars: 2, consts: [["class", "btn btn-warning", 3, "click", 4, "ngIf"], ["class", "btn btn-warning active", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-warning", "active", 3, "click"]], template: function SelectableButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectableButtonComponent_button_0_Template, 2, 1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectableButtonComponent_button_1_Template, 2, 1, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.select);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.select);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@media (min-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:52%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 52%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n\r\n    .f[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        width: 20rem;\r\n        height: 3rem;\r\n        flex-basis:75%;\r\n        margin-bottom: 1rem;\r\n        margin-top: 1rem;\r\n    }    \r\n    \r\n    .alert-danger[_ngcontent-%COMP%] {\r\n        flex-basis: 75%;\r\n        background-color: white;\r\n        border: white;\r\n        padding: 0 0 0.5rem;\r\n        left: 1.3rem;\r\n        color: #ff7851\r\n    }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    color: #ff7851;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-family: \"Convergence\", sans-serif;\r\n}\r\n\r\n.btn-circle[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    line-height: 1.02857;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n.f__group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #e1e5ee;\r\n    border-radius: 0.5rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: black;\r\n    outline: none;\r\n    padding: 1.25rem;\r\n    background: none;\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:hover {\r\n    border-color: #78c2ad;\r\n}\r\n\r\n\r\n\r\n.f__input[_ngcontent-%COMP%]:focus {\r\n      color: #5a5a5a;\r\n      background-color: white;\r\n      border-color: #d0eae2;\r\n      outline: 0;\r\n      box-shadow: 0 0 0 .2rem rgba(120, 194, 173, .25)\r\n}\r\n\r\n.f__label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 0.8rem;\r\n    padding: 0 0.5rem;\r\n    color: black;\r\n    transition: all 200ms ease-in;\r\n    background-color: white\r\n}\r\n\r\n.f__input[_ngcontent-%COMP%]:focus    ~ .f__label[_ngcontent-%COMP%], .f__input[_ngcontent-%COMP%]:not(:placeholder-shown).f__input:not(:focus)    ~ .f__label[_ngcontent-%COMP%] {\r\n  top: -0.5rem;\r\n  font-size: 0.8rem;\r\n  left: 0.8rem;\r\n}\r\n\r\n.btn-warning[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwic2VsZWN0YWJsZS1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOzs7SUFHQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7SUFDSjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUksa0NBQWtDOztBQUV0QztNQUNNLGNBQWM7TUFDZCx1QkFBdUI7TUFDdkIscUJBQXFCO01BQ3JCLFVBQVU7TUFDVjtBQUNOOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUNoSUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic2VsZWN0YWJsZS1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NTIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUyJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLmYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6NzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjVyZW07XHJcbiAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmY3ODUxXHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMiwgaDMsIGg0LCBoNSB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb252ZXJnZW5jZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZjc4NTE7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29udmVyZ2VuY2VcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjAyODU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufSBcclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZl9fZ3JvdXAgPiBkaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mX19pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmZfX2lucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzc4YzJhZDtcclxufVxyXG5cclxuICAgIC8qIENoYW5nZSBib3JkZXIgd2hlbiBpbnB1dCBmb2N1cyovXHJcblxyXG4uZl9faW5wdXQ6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogIzVhNWE1YTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2QwZWFlMjtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgLjJyZW0gcmdiYSgxMjAsIDE5NCwgMTczLCAuMjUpXHJcbn1cclxuXHJcbi5mX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG4gICAgdG9wOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxufVxyXG5cclxuLmZfX2lucHV0OmZvY3VzIH4gLmZfX2xhYmVsLFxyXG4uZl9faW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikuZl9faW5wdXQ6bm90KDpmb2N1cykgfiAuZl9fbGFiZWwge1xyXG4gIHRvcDogLTAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsZWZ0OiAwLjhyZW07XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vYXBwLmNvbXBvbmVudC5jc3MnO1xyXG5cclxuLmJ0bi13YXJuaW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "xeZR":
/*!********************************************!*\
  !*** ./src/app/core/filter/filter.pipe.ts ***!
  \********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.name.toLocaleLowerCase().includes(searchText);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ "y3oH":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-recipes/my-recipes.module.ts ***!
  \*******************************************************/
/*! exports provided: MyRecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRecipesModule", function() { return MyRecipesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _my_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-recipes.component */ "imb2");
/* harmony import */ var src_app_components_display_recipes_display_recipes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/display-recipes/display-recipes.component */ "1MR9");
/* harmony import */ var src_app_router_my_recipes_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/router/my-recipes.routing */ "4UDB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class MyRecipesModule {
}
MyRecipesModule.ɵfac = function MyRecipesModule_Factory(t) { return new (t || MyRecipesModule)(); };
MyRecipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MyRecipesModule });
MyRecipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_router_my_recipes_routing__WEBPACK_IMPORTED_MODULE_5__["MyRecipesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MyRecipesModule, { declarations: [_my_recipes_component__WEBPACK_IMPORTED_MODULE_3__["MyRecipesComponent"],
        src_app_components_display_recipes_display_recipes_component__WEBPACK_IMPORTED_MODULE_4__["DisplayRecipesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_router_my_recipes_routing__WEBPACK_IMPORTED_MODULE_5__["MyRecipesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]], exports: [src_app_components_display_recipes_display_recipes_component__WEBPACK_IMPORTED_MODULE_4__["DisplayRecipesComponent"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zp6I":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/user/user.module.ts ***!
  \***************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "oLT7");
/* harmony import */ var _router_user_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../router/user.routing */ "4XP2");
/* harmony import */ var _sign_in_form_sign_in_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-in-form/sign-in-form.service */ "ZOSf");
/* harmony import */ var src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/api.service */ "8Ldt");
/* harmony import */ var src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/service/local-storage.service */ "sdZK");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edit-user/edit-user.component */ "iigl");
/* harmony import */ var _user_form_user_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-form/user-form.module */ "h9Mt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_sign_in_form_sign_in_form_service__WEBPACK_IMPORTED_MODULE_5__["SignInService"], src_app_core_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], src_app_core_service_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _router_user_routing__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
            _user_form_user_form_module__WEBPACK_IMPORTED_MODULE_9__["UserFormModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__["EditUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _router_user_routing__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
        _user_form_user_form_module__WEBPACK_IMPORTED_MODULE_9__["UserFormModule"]] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map