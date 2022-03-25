(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/admin/Downloads/my-ecommerce-app-main/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "50ZR":
    /*!*******************************************************************!*\
      !*** ./src/app/components/cart-details/cart-details.component.ts ***!
      \*******************************************************************/

    /*! exports provided: CartDetailsComponent */

    /***/
    function ZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function () {
        return CartDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function CartDetailsComponent_div_3_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quantity:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_div_3_tr_8_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var tempCartItem_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.incrementQuantity(tempCartItem_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_div_3_tr_8_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var tempCartItem_r3 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.decrementQuantity(tempCartItem_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_div_3_tr_8_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var tempCartItem_r3 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.remove(tempCartItem_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tempCartItem_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", tempCartItem_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tempCartItem_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, tempCartItem_r3.unitPrice, "USD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tempCartItem_r3.quantity, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subtotal: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 8, tempCartItem_r3.quantity * tempCartItem_r3.unitPrice, "USD"), "");
        }
      }

      function CartDetailsComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartDetailsComponent_div_3_tr_8_Template, 28, 11, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shipping: FREE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Quantity: ", ctx_r0.totalQuantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 3, ctx_r0.totalPrice, "USD"), "");
        }
      }

      function CartDetailsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your shopping cart is empty. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CartDetailsComponent = /*#__PURE__*/function () {
        function CartDetailsComponent(cartService) {
          _classCallCheck(this, CartDetailsComponent);

          this.cartService = cartService;
          this.cartItems = [];
          this.totalPrice = 0;
          this.totalQuantity = 0;
        }

        _createClass(CartDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listCartDetails();
          }
        }, {
          key: "listCartDetails",
          value: function listCartDetails() {
            var _this = this;

            // get a handle to the cart items
            this.cartItems = this.cartService.cartItems; // subscribe to the cart totalPrice

            this.cartService.totalPrice.subscribe(function (data) {
              return _this.totalPrice = data;
            }); // subscribe to the cart totalQuantity

            this.cartService.totalQuantity.subscribe(function (data) {
              return _this.totalQuantity = data;
            }); // compute cart total price and quantity

            this.cartService.computeCartTotals();
          }
        }, {
          key: "incrementQuantity",
          value: function incrementQuantity(theCartItem) {
            this.cartService.addToCart(theCartItem);
          }
        }, {
          key: "decrementQuantity",
          value: function decrementQuantity(theCartItem) {
            this.cartService.decrementQuantity(theCartItem);
          }
        }, {
          key: "remove",
          value: function remove(theCartItem) {
            this.cartService.remove(theCartItem);
          }
        }]);

        return CartDetailsComponent;
      }();

      CartDetailsComponent.ɵfac = function CartDetailsComponent_Factory(t) {
        return new (t || CartDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
      };

      CartDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CartDetailsComponent,
        selectors: [["app-cart-details"]],
        decls: 5,
        vars: 2,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [4, "ngIf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "table", "table-bordered"], ["width", "20%"], ["width", "50%"], ["width", "30%"], [4, "ngFor", "ngForOf"], ["colspan", "2"], [2, "font-weight", "bold"], ["routerLink", "/checkout", 1, "btn", "btn-primary"], ["width", "150px", 1, "img-responsive", 3, "src"], [1, "items"], [1, "row", "no-gutters"], [1, "col"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "col", "ml-4", "mr-2"], [1, "fas", "fa-minus"], [1, "col-8"], [1, "btn", "btn-primary", "btn-sm", "mt-2", 3, "click"], [1, "mt-2"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
        template: function CartDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartDetailsComponent_div_3_Template, 21, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartDetailsComponent_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cart-details',
            templateUrl: './cart-details.component.html',
            styleUrls: ['./cart-details.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6Idd":
    /*!*********************************!*\
      !*** ./src/app/common/order.ts ***!
      \*********************************/

    /*! exports provided: Order */

    /***/
    function Idd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return Order;
      });

      var Order = function Order() {
        _classCallCheck(this, Order);
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        luv2shopApiUrl: "http://localhost:8080/api",
        stripePublishableKey: "pk_test_51KgZckE6okuwhGCfjABpYUUcNI0kbbK36WsnseXatx6xdoSKMsF7hO6mSLHDvNocKnQYdeMI9bwbBCXJpiIKMbM3002aJHIZkX"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BZKk":
    /*!************************************!*\
      !*** ./src/app/common/purchase.ts ***!
      \************************************/

    /*! exports provided: Purchase */

    /***/
    function BZKk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Purchase", function () {
        return Purchase;
      });

      var Purchase = function Purchase() {
        _classCallCheck(this, Purchase);
      };
      /***/

    },

    /***/
    "EHlr":
    /*!*******************************************************************!*\
      !*** ./src/app/components/members-page/members-page.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MembersPageComponent */

    /***/
    function EHlr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembersPageComponent", function () {
        return MembersPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MembersPageComponent = /*#__PURE__*/function () {
        function MembersPageComponent() {
          _classCallCheck(this, MembersPageComponent);
        }

        _createClass(MembersPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MembersPageComponent;
      }();

      MembersPageComponent.ɵfac = function MembersPageComponent_Factory(t) {
        return new (t || MembersPageComponent)();
      };

      MembersPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MembersPageComponent,
        selectors: [["app-members-page"]],
        decls: 8,
        vars: 0,
        consts: [[1, "main-content"], ["align", "center", "role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
        template: function MembersPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Members Special");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thank you for being a member.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Member discounts are coming soon!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXJzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-members-page',
            templateUrl: './members-page.component.html',
            styleUrls: ['./members-page.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Gdn9":
    /*!*********************************************!*\
      !*** ./src/app/services/product.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductService */

    /***/
    function Gdn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(httpClient) {
          _classCallCheck(this, ProductService);

          this.httpClient = httpClient;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].luv2shopApiUrl + '/products';
          this.categoryUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].luv2shopApiUrl + '/product-category';
        }

        _createClass(ProductService, [{
          key: "getProduct",
          value: function getProduct(theProductId) {
            // need to build URL based on product id
            var productUrl = "".concat(this.baseUrl, "/").concat(theProductId);
            return this.httpClient.get(productUrl);
          }
        }, {
          key: "getProductListPaginate",
          value: function getProductListPaginate(thePage, thePageSize, theCategoryId) {
            // need to build URL based on category id, page and size 
            var searchUrl = "".concat(this.baseUrl, "/search/findByCategoryId?id=").concat(theCategoryId) + "&page=".concat(thePage, "&size=").concat(thePageSize);
            console.log("Getting products from - ".concat(searchUrl));
            return this.httpClient.get(searchUrl);
          }
        }, {
          key: "getProductList",
          value: function getProductList(theCategoryId) {
            // need to build URL based on category id 
            var searchUrl = "".concat(this.baseUrl, "/search/findByCategoryId?id=").concat(theCategoryId);
            return this.getProducts(searchUrl);
          }
        }, {
          key: "searchProducts",
          value: function searchProducts(theKeyword) {
            // need to build URL based on the keyword 
            var searchUrl = "".concat(this.baseUrl, "/search/findByNameContaining?name=").concat(theKeyword);
            return this.getProducts(searchUrl);
          }
        }, {
          key: "searchProductsPaginate",
          value: function searchProductsPaginate(thePage, thePageSize, theKeyword) {
            // need to build URL based on keyword, page and size 
            var searchUrl = "".concat(this.baseUrl, "/search/findByNameContaining?name=").concat(theKeyword) + "&page=".concat(thePage, "&size=").concat(thePageSize);
            return this.httpClient.get(searchUrl);
          }
        }, {
          key: "getProducts",
          value: function getProducts(searchUrl) {
            return this.httpClient.get(searchUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response._embedded.products;
            }));
          }
        }, {
          key: "getProductCategories",
          value: function getProductCategories() {
            return this.httpClient.get(this.categoryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response._embedded.productCategory;
            }));
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GnJv":
    /*!****************************************************!*\
      !*** ./src/app/services/luv2-shop-form.service.ts ***!
      \****************************************************/

    /*! exports provided: Luv2ShopFormService */

    /***/
    function GnJv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Luv2ShopFormService", function () {
        return Luv2ShopFormService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var Luv2ShopFormService = /*#__PURE__*/function () {
        function Luv2ShopFormService(httpClient) {
          _classCallCheck(this, Luv2ShopFormService);

          this.httpClient = httpClient;
          this.countriesUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].luv2shopApiUrl + '/countries';
          this.statesUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].luv2shopApiUrl + '/states';
        }

        _createClass(Luv2ShopFormService, [{
          key: "getCountries",
          value: function getCountries() {
            return this.httpClient.get(this.countriesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response._embedded.countries;
            }));
          }
        }, {
          key: "getStates",
          value: function getStates(theCountryCode) {
            // search url
            var searchStatesUrl = "".concat(this.statesUrl, "/search/findByCountryCode?code=").concat(theCountryCode);
            return this.httpClient.get(searchStatesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response._embedded.states;
            }));
          }
        }, {
          key: "getCreditCardMonths",
          value: function getCreditCardMonths(startMonth) {
            var data = []; // build an array for "Month" dropdown list
            // - start at current month and loop until 

            for (var theMonth = startMonth; theMonth <= 12; theMonth++) {
              data.push(theMonth);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
          }
        }, {
          key: "getCreditCardYears",
          value: function getCreditCardYears() {
            var data = []; // build an array for "Year" downlist list
            // - start at current year and loop for next 10 years

            var startYear = new Date().getFullYear();
            var endYear = startYear + 10;

            for (var theYear = startYear; theYear <= endYear; theYear++) {
              data.push(theYear);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
          }
        }]);

        return Luv2ShopFormService;
      }();

      Luv2ShopFormService.ɵfac = function Luv2ShopFormService_Factory(t) {
        return new (t || Luv2ShopFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      Luv2ShopFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Luv2ShopFormService,
        factory: Luv2ShopFormService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Luv2ShopFormService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HsGO":
    /*!****************************************!*\
      !*** ./src/app/common/payment-info.ts ***!
      \****************************************/

    /*! exports provided: PaymentInfo */

    /***/
    function HsGO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentInfo", function () {
        return PaymentInfo;
      });

      var PaymentInfo = function PaymentInfo() {
        _classCallCheck(this, PaymentInfo);
      };
      /***/

    },

    /***/
    "LWgM":
    /*!***************************************************!*\
      !*** ./src/app/services/order-history.service.ts ***!
      \***************************************************/

    /*! exports provided: OrderHistoryService */

    /***/
    function LWgM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryService", function () {
        return OrderHistoryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var OrderHistoryService = /*#__PURE__*/function () {
        function OrderHistoryService(httpClient) {
          _classCallCheck(this, OrderHistoryService);

          this.httpClient = httpClient;
          this.orderUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].luv2shopApiUrl + '/orders';
        }

        _createClass(OrderHistoryService, [{
          key: "getOrderHistory",
          value: function getOrderHistory(theEmail) {
            // need to build URL based on the customer email
            var orderHistoryUrl = "".concat(this.orderUrl, "/search/findByCustomerEmailOrderByDateCreatedDesc?email=").concat(theEmail);
            return this.httpClient.get(orderHistoryUrl);
          }
        }]);

        return OrderHistoryService;
      }();

      OrderHistoryService.ɵfac = function OrderHistoryService_Factory(t) {
        return new (t || OrderHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      OrderHistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OrderHistoryService,
        factory: OrderHistoryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderHistoryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ldpo":
    /*!*************************************!*\
      !*** ./src/app/common/cart-item.ts ***!
      \*************************************/

    /*! exports provided: CartItem */

    /***/
    function Ldpo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartItem", function () {
        return CartItem;
      });

      var CartItem = function CartItem(product) {
        _classCallCheck(this, CartItem);

        this.id = product.id;
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.unitPrice = product.unitPrice;
        this.quantity = 1;
      };
      /***/

    },

    /***/
    "PEC5":
    /*!***********************************************************!*\
      !*** ./src/app/components/checkout/checkout.component.ts ***!
      \***********************************************************/

    /*! exports provided: CheckoutComponent */

    /***/
    function PEC5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
        return CheckoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/validators/luv2-shop-validators */
      "zTuY");
      /* harmony import */


      var src_app_common_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/common/order */
      "6Idd");
      /* harmony import */


      var src_app_common_order_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/common/order-item */
      "Wmh0");
      /* harmony import */


      var src_app_common_purchase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/common/purchase */
      "BZKk");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_common_payment_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/common/payment-info */
      "HsGO");
      /* harmony import */


      var src_app_services_luv2_shop_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/luv2-shop-form.service */
      "GnJv");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/checkout.service */
      "SqMf");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CheckoutComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_14_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_14_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.firstName.errors.required || ctx_r0.firstName.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.firstName.errors.minlength);
        }
      }

      function CheckoutComponent_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_22_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_22_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_22_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lastName.errors.required || ctx_r1.lastName.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lastName.errors.minlength);
        }
      }

      function CheckoutComponent_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_30_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be a valid email address format ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_30_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_30_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.errors.pattern);
        }
      }

      function CheckoutComponent_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", country_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r23.name, " ");
        }
      }

      function CheckoutComponent_div_42_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_42_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.shippingAddressCountry.errors.required);
        }
      }

      function CheckoutComponent_div_50_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Street is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_50_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Street must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_50_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_50_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.shippingAddressStreet.errors.required || ctx_r5.shippingAddressStreet.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.shippingAddressStreet.errors.minlength);
        }
      }

      function CheckoutComponent_div_58_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_58_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_58_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_58_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.shippingAddressCity.errors.required || ctx_r6.shippingAddressCity.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.shippingAddressCity.errors.minlength);
        }
      }

      function CheckoutComponent_option_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", state_r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r29.name, " ");
        }
      }

      function CheckoutComponent_div_67_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_67_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.shippingAddressState.errors.required);
        }
      }

      function CheckoutComponent_div_75_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zip code is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_75_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zip code must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_75_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_75_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.shippingAddressZipCode.errors.required || ctx_r9.shippingAddressZipCode.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.shippingAddressZipCode.errors.minlength);
        }
      }

      function CheckoutComponent_option_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", country_r33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r33.name, " ");
        }
      }

      function CheckoutComponent_div_92_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_92_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.billingAddressCountry.errors.required);
        }
      }

      function CheckoutComponent_div_100_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Street is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_100_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Street must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_100_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_100_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.billingAddressStreet.errors.required || ctx_r12.billingAddressStreet.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.billingAddressStreet.errors.minlength);
        }
      }

      function CheckoutComponent_div_108_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_108_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_108_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_108_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.billingAddressCity.errors.required || ctx_r13.billingAddressCity.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.billingAddressCity.errors.minlength);
        }
      }

      function CheckoutComponent_option_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", state_r39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r39.name, " ");
        }
      }

      function CheckoutComponent_div_117_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_117_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.billingAddressState.errors.required);
        }
      }

      function CheckoutComponent_div_125_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zip code is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_125_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zip code must be at least 2 characters long ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_125_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_125_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.billingAddressZipCode.errors.required || ctx_r16.billingAddressZipCode.errors.notOnlyWhitespace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.billingAddressZipCode.errors.minlength);
        }
      }

      var CheckoutComponent = /*#__PURE__*/function () {
        function CheckoutComponent(formBuilder, luv2ShopFormService, cartService, checkoutService, router) {
          _classCallCheck(this, CheckoutComponent);

          this.formBuilder = formBuilder;
          this.luv2ShopFormService = luv2ShopFormService;
          this.cartService = cartService;
          this.checkoutService = checkoutService;
          this.router = router;
          this.totalPrice = 0;
          this.totalQuantity = 0;
          this.creditCardYears = [];
          this.creditCardMonths = [];
          this.countries = [];
          this.shippingAddressStates = [];
          this.billingAddressStates = [];
          this.storage = sessionStorage; // initialize Stripe API

          this.stripe = Stripe(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].stripePublishableKey);
          this.paymentInfo = new src_app_common_payment_info__WEBPACK_IMPORTED_MODULE_7__["PaymentInfo"]();
          this.displayError = "";
          this.isDisabled = false;
        }

        _createClass(CheckoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // setup Stripe payment form
            this.setupStripePaymentForm();
            this.reviewCartDetails(); // read the user's email address from browser storage

            var theEmail = JSON.parse(this.storage.getItem('userEmail'));
            this.checkoutFormGroup = this.formBuilder.group({
              customer: this.formBuilder.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](theEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
              }),
              shippingAddress: this.formBuilder.group({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace])
              }),
              billingAddress: this.formBuilder.group({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace]),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_validators_luv2_shop_validators__WEBPACK_IMPORTED_MODULE_2__["Luv2ShopValidators"].notOnlyWhitespace])
              }),
              creditCard: this.formBuilder.group({
                /*
                cardType: new FormControl('', [Validators.required]),
                nameOnCard:  new FormControl('', [Validators.required, Validators.minLength(2),
                                                  Luv2ShopValidators.notOnlyWhitespace]),
                cardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
                securityCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')]),
                expirationMonth: [''],
                expirationYear: ['']
                */
              })
            });
            /*
            // populate credit card months
                 const startMonth: number = new Date().getMonth() + 1;
            console.log("startMonth: " + startMonth);
                 this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe(
              data => {
                console.log("Retrieved credit card months: " + JSON.stringify(data));
                this.creditCardMonths = data;
              }
            );
                 // populate credit card years
                 this.luv2ShopFormService.getCreditCardYears().subscribe(
              data => {
                console.log("Retrieved credit card years: " + JSON.stringify(data));
                this.creditCardYears = data;
              }
            );
            */
            // populate countries

            this.luv2ShopFormService.getCountries().subscribe(function (data) {
              console.log("Retrieved countries: " + JSON.stringify(data));
              _this2.countries = data;
            });
          }
        }, {
          key: "setupStripePaymentForm",
          value: function setupStripePaymentForm() {
            var _this3 = this;

            // get a handle to stripe elements
            var elements = this.stripe.elements(); // Create a card element ... and hide the zip-code field

            this.cardElement = elements.create('card', {
              hidePostalCode: true
            }); // Add an instance of card UI component into the 'card-element' div

            this.cardElement.mount('#card-element'); // Add event binding for the 'change' event on the card element

            this.cardElement.on('change', function (event) {
              // get a handle to card-errors element
              _this3.displayError = document.getElementById('card-errors');

              if (event.complete) {
                _this3.displayError.textContent = "";
              } else if (event.error) {
                // show validation error to customer
                _this3.displayError.textContent = event.error.message;
              }
            });
          }
        }, {
          key: "reviewCartDetails",
          value: function reviewCartDetails() {
            var _this4 = this;

            // subscribe to cartService.totalQuantity
            this.cartService.totalQuantity.subscribe(function (totalQuantity) {
              return _this4.totalQuantity = totalQuantity;
            }); // subscribe to cartService.totalPrice

            this.cartService.totalPrice.subscribe(function (totalPrice) {
              return _this4.totalPrice = totalPrice;
            });
          }
        }, {
          key: "copyShippingAddressToBillingAddress",
          value: function copyShippingAddressToBillingAddress(event) {
            if (event.target.checked) {
              this.checkoutFormGroup.controls.billingAddress.setValue(this.checkoutFormGroup.controls.shippingAddress.value); // bug fix for states

              this.billingAddressStates = this.shippingAddressStates;
            } else {
              this.checkoutFormGroup.controls.billingAddress.reset(); // bug fix for states

              this.billingAddressStates = [];
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            console.log("Handling the submit button");

            if (this.checkoutFormGroup.invalid) {
              this.checkoutFormGroup.markAllAsTouched();
              return;
            } // set up order


            var order = new src_app_common_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
            order.totalPrice = this.totalPrice;
            order.totalQuantity = this.totalQuantity; // get cart items

            var cartItems = this.cartService.cartItems; // create orderItems from cartItems
            // - long way

            /*
            let orderItems: OrderItem[] = [];
            for (let i=0; i < cartItems.length; i++) {
              orderItems[i] = new OrderItem(cartItems[i]);
            }
            */
            // - short way of doing the same thingy

            var orderItems = cartItems.map(function (tempCartItem) {
              return new src_app_common_order_item__WEBPACK_IMPORTED_MODULE_4__["OrderItem"](tempCartItem);
            }); // set up purchase

            var purchase = new src_app_common_purchase__WEBPACK_IMPORTED_MODULE_5__["Purchase"](); // populate purchase - customer

            purchase.customer = this.checkoutFormGroup.controls['customer'].value; // populate purchase - shipping address

            purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value;
            var shippingState = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
            var shippingCountry = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
            purchase.shippingAddress.state = shippingState.name;
            purchase.shippingAddress.country = shippingCountry.name; // populate purchase - billing address

            purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
            var billingState = JSON.parse(JSON.stringify(purchase.billingAddress.state));
            var billingCountry = JSON.parse(JSON.stringify(purchase.billingAddress.country));
            purchase.billingAddress.state = billingState.name;
            purchase.billingAddress.country = billingCountry.name; // populate purchase - order and orderItems

            purchase.order = order;
            purchase.orderItems = orderItems; // compute payment info

            this.paymentInfo.amount = Math.round(this.totalPrice * 100);
            this.paymentInfo.currency = "USD";
            this.paymentInfo.receiptEmail = purchase.customer.email; // if valid form then
            // - create payment intent
            // - confirm card payment
            // - place order

            if (!this.checkoutFormGroup.invalid && this.displayError.textContent === "") {
              this.isDisabled = true;
              this.checkoutService.createPaymentIntent(this.paymentInfo).subscribe(function (paymentIntentResponse) {
                _this5.stripe.confirmCardPayment(paymentIntentResponse.client_secret, {
                  payment_method: {
                    card: _this5.cardElement,
                    billing_details: {
                      email: purchase.customer.email,
                      name: "".concat(purchase.customer.firstName, " ").concat(purchase.customer.lastName),
                      address: {
                        line1: purchase.billingAddress.street,
                        city: purchase.billingAddress.city,
                        state: purchase.billingAddress.state,
                        postal_code: purchase.billingAddress.zipCode,
                        country: _this5.billingAddressCountry.value.code
                      }
                    }
                  }
                }, {
                  handleActions: false
                }).then(function (result) {
                  var _this6 = this;

                  if (result.error) {
                    // inform the customer there was an error
                    alert("There was an error: ".concat(result.error.message));
                    this.isDisabled = false;
                  } else {
                    // call REST API via the CheckoutService
                    this.checkoutService.placeOrder(purchase).subscribe({
                      next: function next(response) {
                        alert("Your order has been received.\nOrder tracking number: ".concat(response.orderTrackingNumber)); // reset cart

                        _this6.resetCart();

                        _this6.isDisabled = false;
                      },
                      error: function error(err) {
                        alert("There was an error: ".concat(err.message));
                        _this6.isDisabled = false;
                      }
                    });
                  }
                }.bind(_this5));
              });
            } else {
              this.checkoutFormGroup.markAllAsTouched();
              return;
            }
          }
        }, {
          key: "resetCart",
          value: function resetCart() {
            // reset cart data
            this.cartService.cartItems = [];
            this.cartService.totalPrice.next(0);
            this.cartService.totalQuantity.next(0);
            this.cartService.persistCartItems(); // reset the form

            this.checkoutFormGroup.reset(); // navigate back to the products page

            this.router.navigateByUrl("/products");
          }
          /*
          handleMonthsAndYears() {
               const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
               const currentYear: number = new Date().getFullYear();
            const selectedYear: number = Number(creditCardFormGroup.value.expirationYear);
               // if the current year equals the selected year, then start with the current month
               let startMonth: number;
               if (currentYear === selectedYear) {
              startMonth = new Date().getMonth() + 1;
            }
            else {
              startMonth = 1;
            }
               this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe(
              data => {
                console.log("Retrieved credit card months: " + JSON.stringify(data));
                this.creditCardMonths = data;
              }
            );
          }
          */

        }, {
          key: "getStates",
          value: function getStates(formGroupName) {
            var _this7 = this;

            var formGroup = this.checkoutFormGroup.get(formGroupName);
            var countryCode = formGroup.value.country.code;
            var countryName = formGroup.value.country.name;
            console.log("".concat(formGroupName, " country code: ").concat(countryCode));
            console.log("".concat(formGroupName, " country name: ").concat(countryName));
            this.luv2ShopFormService.getStates(countryCode).subscribe(function (data) {
              if (formGroupName === 'shippingAddress') {
                _this7.shippingAddressStates = data;
              } else {
                _this7.billingAddressStates = data;
              } // select first item by default


              formGroup.get('state').setValue(data[0]);
            });
          }
        }, {
          key: "firstName",
          get: function get() {
            return this.checkoutFormGroup.get('customer.firstName');
          }
        }, {
          key: "lastName",
          get: function get() {
            return this.checkoutFormGroup.get('customer.lastName');
          }
        }, {
          key: "email",
          get: function get() {
            return this.checkoutFormGroup.get('customer.email');
          }
        }, {
          key: "shippingAddressStreet",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.street');
          }
        }, {
          key: "shippingAddressCity",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.city');
          }
        }, {
          key: "shippingAddressState",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.state');
          }
        }, {
          key: "shippingAddressZipCode",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.zipCode');
          }
        }, {
          key: "shippingAddressCountry",
          get: function get() {
            return this.checkoutFormGroup.get('shippingAddress.country');
          }
        }, {
          key: "billingAddressStreet",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.street');
          }
        }, {
          key: "billingAddressCity",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.city');
          }
        }, {
          key: "billingAddressState",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.state');
          }
        }, {
          key: "billingAddressZipCode",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.zipCode');
          }
        }, {
          key: "billingAddressCountry",
          get: function get() {
            return this.checkoutFormGroup.get('billingAddress.country');
          }
        }, {
          key: "creditCardType",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.cardType');
          }
        }, {
          key: "creditCardNameOnCard",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.nameOnCard');
          }
        }, {
          key: "creditCardNumber",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.cardNumber');
          }
        }, {
          key: "creditCardSecurityCode",
          get: function get() {
            return this.checkoutFormGroup.get('creditCard.securityCode');
          }
        }]);

        return CheckoutComponent;
      }();

      CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
        return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_luv2_shop_form_service__WEBPACK_IMPORTED_MODULE_8__["Luv2ShopFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_10__["CheckoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]));
      };

      CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckoutComponent,
        selectors: [["app-checkout"]],
        decls: 144,
        vars: 24,
        consts: [[1, "main-content", "page-m"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [3, "formGroup", "ngSubmit"], ["formGroupName", "customer", 1, "form-area"], [1, "row"], [1, "col-md-2"], [1, "col-md-9"], [1, "input-space"], ["formControlName", "firstName", "type", "text"], ["class", "alert alert-danger mt-1", 4, "ngIf"], ["formControlName", "lastName", "type", "text"], ["formControlName", "email", "type", "text"], ["formGroupName", "shippingAddress", 1, "form-area"], ["formControlName", "country", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "street", "type", "text"], ["formControlName", "city", "type", "text"], ["formControlName", "state"], ["formControlName", "zipCode", "type", "text"], [1, "au-checkbox"], ["type", "checkbox", 3, "change"], [1, "au-checkmark"], ["formGroupName", "billingAddress", 1, "form-area"], ["formGroupName", "creditCard", 1, "form-area"], ["id", "card-element"], ["id", "card-errors", 1, "displayError.textContent!=='':", "'alert", "alert-danger", "mt-1'"], [1, "form-area"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], [1, "alert", "alert-danger", "mt-1"], [4, "ngIf"], [3, "ngValue"]],
        template: function CheckoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CheckoutComponent_div_14_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CheckoutComponent_div_22_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CheckoutComponent_div_30_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Shipping Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckoutComponent_Template_select_change_40_listener() {
              return ctx.getStates("shippingAddress");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CheckoutComponent_option_41_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CheckoutComponent_div_42_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Street");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CheckoutComponent_div_50_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, CheckoutComponent_div_58_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CheckoutComponent_option_66_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, CheckoutComponent_div_67_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Zip Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, CheckoutComponent_div_75_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckoutComponent_Template_input_change_78_listener($event) {
              return ctx.copyShippingAddressToBillingAddress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Billing Address same as Shipping Address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Billing Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckoutComponent_Template_select_change_90_listener() {
              return ctx.getStates("billingAddress");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, CheckoutComponent_option_91_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, CheckoutComponent_div_92_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Street");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, CheckoutComponent_div_100_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, CheckoutComponent_div_108_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, CheckoutComponent_option_116_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, CheckoutComponent_div_117_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Zip Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, CheckoutComponent_div_125_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Credit or Debit Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Review Your Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Shipping: FREE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Purchase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName.invalid && (ctx.firstName.dirty || ctx.firstName.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastName.invalid && (ctx.lastName.dirty || ctx.lastName.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shippingAddressCountry.invalid && (ctx.shippingAddressCountry.dirty || ctx.shippingAddressCountry.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shippingAddressStreet.invalid && (ctx.shippingAddressStreet.dirty || ctx.shippingAddressStreet.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shippingAddressCity.invalid && (ctx.shippingAddressCity.dirty || ctx.shippingAddressCity.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shippingAddressStates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shippingAddressState.invalid && (ctx.shippingAddressState.dirty || ctx.shippingAddressState.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shippingAddressZipCode.invalid && (ctx.shippingAddressZipCode.dirty || ctx.shippingAddressZipCode.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billingAddressCountry.invalid && (ctx.billingAddressCountry.dirty || ctx.billingAddressCountry.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billingAddressStreet.invalid && (ctx.billingAddressStreet.dirty || ctx.billingAddressStreet.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billingAddressCity.invalid && (ctx.billingAddressCity.dirty || ctx.billingAddressCity.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.billingAddressStates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billingAddressState.invalid && (ctx.billingAddressState.dirty || ctx.billingAddressState.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billingAddressZipCode.invalid && (ctx.billingAddressZipCode.dirty || ctx.billingAddressZipCode.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Quantity: ", ctx.totalQuantity, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](140, 21, ctx.totalPrice, "USD"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_luv2_shop_form_service__WEBPACK_IMPORTED_MODULE_8__["Luv2ShopFormService"]
          }, {
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"]
          }, {
            type: src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_10__["CheckoutService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RZmA":
    /*!*******************************************************!*\
      !*** ./src/app/components/search/search.component.ts ***!
      \*******************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function RZmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent(router) {
          _classCallCheck(this, SearchComponent);

          this.router = router;
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doSearch",
          value: function doSearch(value) {
            console.log("value=".concat(value));
            this.router.navigateByUrl("/search/".concat(value));
          }
        }]);

        return SearchComponent;
      }();

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        decls: 5,
        vars: 0,
        consts: [[1, "form-header"], ["type", "text", "placeholder", "Search for products ...", 1, "au-input", "au-input-xl", 3, "keyup.enter"], ["myInput", ""], [1, "au-btn-submit", 3, "click"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return ctx.doSearch(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return ctx.doSearch(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Search ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "SqMf":
    /*!**********************************************!*\
      !*** ./src/app/services/checkout.service.ts ***!
      \**********************************************/

    /*! exports provided: CheckoutService */

    /***/
    function SqMf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutService", function () {
        return CheckoutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CheckoutService = /*#__PURE__*/function () {
        function CheckoutService(httpClient) {
          _classCallCheck(this, CheckoutService);

          this.httpClient = httpClient;
          this.purchaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].luv2shopApiUrl + '/checkout/purchase';
          this.paymentIntentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].luv2shopApiUrl + '/checkout/payment-intent';
        }

        _createClass(CheckoutService, [{
          key: "placeOrder",
          value: function placeOrder(purchase) {
            return this.httpClient.post(this.purchaseUrl, purchase);
          }
        }, {
          key: "createPaymentIntent",
          value: function createPaymentIntent(paymentInfo) {
            return this.httpClient.post(this.paymentIntentUrl, paymentInfo);
          }
        }]);

        return CheckoutService;
      }();

      CheckoutService.ɵfac = function CheckoutService_Factory(t) {
        return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CheckoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CheckoutService,
        factory: CheckoutService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/product-category-menu/product-category-menu.component */
      "ZChD");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/search/search.component */
      "RZmA");
      /* harmony import */


      var _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/login-status/login-status.component */
      "i4Kf");
      /* harmony import */


      var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/cart-status/cart-status.component */
      "YbQc");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'angular-ecommerce';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 27,
        vars: 0,
        consts: [[1, "page-wrapper"], [1, "menu-sidebar", "d-none", "d-lg-block"], [1, "logo"], ["routerLink", "/products"], ["src", "assets/images/logo.png", "alt", "luv2shop", 1, "img-responsive"], [1, "page-container"], [1, "header-desktop"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "header-wrap"], [1, "account-wrap"], ["href", "#"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-product-category-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-login-status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-cart-status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryMenuComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_4__["LoginStatusComponent"], _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_5__["CartStatusComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "UoNx":
    /*!***********************************!*\
      !*** ./src/app/common/product.ts ***!
      \***********************************/

    /*! exports provided: Product */

    /***/
    function UoNx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = function Product() {
        _classCallCheck(this, Product);
      };
      /***/

    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @okta/okta-signin-widget */
      "TWom");
      /* harmony import */


      var _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _config_my_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../config/my-app-config */
      "f8oX");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @okta/okta-angular */
      "51h4");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(oktaAuthService) {
          _classCallCheck(this, LoginComponent);

          this.oktaAuthService = oktaAuthService;
          this.oktaSignin = new _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_1__({
            logo: 'assets/images/logo.png',
            features: {
              registration: true
            },
            baseUrl: _config_my_app_config__WEBPACK_IMPORTED_MODULE_2__["default"].oidc.issuer.split('/oauth2')[0],
            clientId: _config_my_app_config__WEBPACK_IMPORTED_MODULE_2__["default"].oidc.clientId,
            redirectUri: _config_my_app_config__WEBPACK_IMPORTED_MODULE_2__["default"].oidc.redirectUri,
            authParams: {
              pkce: true,
              issuer: _config_my_app_config__WEBPACK_IMPORTED_MODULE_2__["default"].oidc.issuer,
              scopes: _config_my_app_config__WEBPACK_IMPORTED_MODULE_2__["default"].oidc.scopes
            }
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.oktaSignin.remove();
            this.oktaSignin.renderEl({
              el: '#okta-sign-in-widget'
            }, // this name should be same as div tag id in login.component.html
            function (response) {
              if (response.status === 'SUCCESS') {
                _this8.oktaAuthService.signInWithRedirect();
              }
            }, function (error) {
              throw error;
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_okta_okta_angular__WEBPACK_IMPORTED_MODULE_3__["OktaAuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 2,
        vars: 0,
        consts: [[1, "pt=5"], ["id", "okta-sign-in-widget", 1, "pt-5"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_3__["OktaAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Wmh0":
    /*!**************************************!*\
      !*** ./src/app/common/order-item.ts ***!
      \**************************************/

    /*! exports provided: OrderItem */

    /***/
    function Wmh0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderItem", function () {
        return OrderItem;
      });

      var OrderItem = function OrderItem(cartItem) {
        _classCallCheck(this, OrderItem);

        this.imageUrl = cartItem.imageUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        this.productId = cartItem.id;
      };
      /***/

    },

    /***/
    "YbQc":
    /*!*****************************************************************!*\
      !*** ./src/app/components/cart-status/cart-status.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CartStatusComponent */

    /***/
    function YbQc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartStatusComponent", function () {
        return CartStatusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CartStatusComponent = /*#__PURE__*/function () {
        function CartStatusComponent(cartService) {
          _classCallCheck(this, CartStatusComponent);

          this.cartService = cartService;
          this.totalPrice = 0.00;
          this.totalQuantity = 0;
        }

        _createClass(CartStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateCartStatus();
          }
        }, {
          key: "updateCartStatus",
          value: function updateCartStatus() {
            var _this9 = this;

            // subscribe to the cart totalPrice
            this.cartService.totalPrice.subscribe(function (data) {
              return _this9.totalPrice = data;
            }); // subscribe to the cart totalQuantity

            this.cartService.totalQuantity.subscribe(function (data) {
              return _this9.totalQuantity = data;
            });
          }
        }]);

        return CartStatusComponent;
      }();

      CartStatusComponent.ɵfac = function CartStatusComponent_Factory(t) {
        return new (t || CartStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
      };

      CartStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CartStatusComponent,
        selectors: [["app-cart-status"]],
        decls: 8,
        vars: 5,
        consts: [[1, "cart-area", "d-n"], ["routerLink", "/cart-details"], [1, "total"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]],
        template: function CartStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx.totalPrice, "USD"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalQuantity);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartStatusComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cart-status',
            templateUrl: './cart-status.component.html',
            styleUrls: ['./cart-status.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/product-list/product-list.component */
      "a6FK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/product-category-menu/product-category-menu.component */
      "ZChD");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/search/search.component */
      "RZmA");
      /* harmony import */


      var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/product-details/product-details.component */
      "ZQA1");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/cart-status/cart-status.component */
      "YbQc");
      /* harmony import */


      var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/cart-details/cart-details.component */
      "50ZR");
      /* harmony import */


      var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/checkout/checkout.component */
      "PEC5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/login-status/login-status.component */
      "i4Kf");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @okta/okta-angular */
      "51h4");
      /* harmony import */


      var _config_my_app_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./config/my-app-config */
      "f8oX");
      /* harmony import */


      var _components_members_page_members_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/members-page/members-page.component */
      "EHlr");
      /* harmony import */


      var _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/order-history/order-history.component */
      "epZu");
      /* harmony import */


      var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/auth-interceptor.service */
      "giCd");

      var oktaConfig = Object.assign({
        onAuthRequired: function onAuthRequired(oktaAuth, injector) {
          var router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]); // Redirect the user to your custom login page

          router.navigate(['/login']);
        }
      }, _config_my_app_config__WEBPACK_IMPORTED_MODULE_18__["default"].oidc);
      var routes = [{
        path: 'order-history',
        component: _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_20__["OrderHistoryComponent"],
        canActivate: [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_17__["OktaAuthGuard"]]
      }, {
        path: 'members',
        component: _components_members_page_members_page_component__WEBPACK_IMPORTED_MODULE_19__["MembersPageComponent"],
        canActivate: [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_17__["OktaAuthGuard"]]
      }, {
        path: 'login/callback',
        component: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_17__["OktaCallbackComponent"]
      }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
      }, {
        path: 'checkout',
        component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"]
      }, {
        path: 'cart-details',
        component: _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_12__["CartDetailsComponent"]
      }, {
        path: 'products/:id',
        component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"]
      }, {
        path: 'search/:keyword',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }, {
        path: 'category/:id',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }, {
        path: 'category',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }, {
        path: 'products',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }, {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/products',
        pathMatch: 'full'
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], {
          provide: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_17__["OKTA_CONFIG"],
          useValue: oktaConfig
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptorService"],
          multi: true
        }],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _okta_okta_angular__WEBPACK_IMPORTED_MODULE_17__["OktaAuthModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryMenuComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"], _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_11__["CartStatusComponent"], _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_12__["CartDetailsComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_16__["LoginStatusComponent"], _components_members_page_members_page_component__WEBPACK_IMPORTED_MODULE_19__["MembersPageComponent"], _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_20__["OrderHistoryComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _okta_okta_angular__WEBPACK_IMPORTED_MODULE_17__["OktaAuthModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryMenuComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"], _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_11__["CartStatusComponent"], _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_12__["CartDetailsComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_16__["LoginStatusComponent"], _components_members_page_members_page_component__WEBPACK_IMPORTED_MODULE_19__["MembersPageComponent"], _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_20__["OrderHistoryComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _okta_okta_angular__WEBPACK_IMPORTED_MODULE_17__["OktaAuthModule"]],
            providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], {
              provide: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_17__["OKTA_CONFIG"],
              useValue: oktaConfig
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
              useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptorService"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZChD":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/product-category-menu/product-category-menu.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ProductCategoryMenuComponent */

    /***/
    function ZChD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductCategoryMenuComponent", function () {
        return ProductCategoryMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ProductCategoryMenuComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tempProductCategory_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/category/", tempProductCategory_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tempProductCategory_r1.categoryName, " ");
        }
      }

      var ProductCategoryMenuComponent = /*#__PURE__*/function () {
        function ProductCategoryMenuComponent(productService) {
          _classCallCheck(this, ProductCategoryMenuComponent);

          this.productService = productService;
        }

        _createClass(ProductCategoryMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listProductCategories();
          }
        }, {
          key: "listProductCategories",
          value: function listProductCategories() {
            var _this10 = this;

            this.productService.getProductCategories().subscribe(function (data) {
              console.log('Product Categories=' + JSON.stringify(data));
              _this10.productCategories = data;
            });
          }
        }]);

        return ProductCategoryMenuComponent;
      }();

      ProductCategoryMenuComponent.ɵfac = function ProductCategoryMenuComponent_Factory(t) {
        return new (t || ProductCategoryMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
      };

      ProductCategoryMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductCategoryMenuComponent,
        selectors: [["app-product-category-menu"]],
        decls: 4,
        vars: 1,
        consts: [[1, "menu-sidebar-content", "js-scrollbar1"], [1, "navbar-sidebar"], [1, "list-unstyled", "navbar-list"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active-link", 3, "routerLink"]],
        template: function ProductCategoryMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductCategoryMenuComponent_li_3_Template, 3, 2, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productCategories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhdGVnb3J5LW1lbnUuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCategoryMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-category-menu',
            templateUrl: './product-category-menu.component.html',
            styleUrls: ['./product-category-menu.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZQA1":
    /*!*************************************************************************!*\
      !*** ./src/app/components/product-details/product-details.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ProductDetailsComponent */

    /***/
    function ZQA1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
        return ProductDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_common_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/product */
      "UoNx");
      /* harmony import */


      var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/common/cart-item */
      "Ldpo");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ProductDetailsComponent = /*#__PURE__*/function () {
        function ProductDetailsComponent(productService, cartService, route) {
          _classCallCheck(this, ProductDetailsComponent);

          this.productService = productService;
          this.cartService = cartService;
          this.route = route;
          this.product = new src_app_common_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        }

        _createClass(ProductDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.route.paramMap.subscribe(function () {
              _this11.handleProductDetails();
            });
          }
        }, {
          key: "handleProductDetails",
          value: function handleProductDetails() {
            var _this12 = this;

            // get the "id" param string. convert string to a number using the "+" symbol
            var theProductId = +this.route.snapshot.paramMap.get('id');
            this.productService.getProduct(theProductId).subscribe(function (data) {
              _this12.product = data;
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            console.log("Adding to cart: ".concat(this.product.name, ", ").concat(this.product.unitPrice));
            var theCartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_2__["CartItem"](this.product);
            this.cartService.addToCart(theCartItem);
          }
        }]);

        return ProductDetailsComponent;
      }();

      ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
        return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductDetailsComponent,
        selectors: [["app-product-details"]],
        decls: 17,
        vars: 7,
        consts: [[1, "detail-section"], [1, "container-fluid"], [1, "detail-img", 3, "src"], [1, "price"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["routerLink", "/products", 1, "mt-5"]],
        template: function ProductDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_8_listener() {
              return ctx.addToCart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add to cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Back to Product List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx.product.unitPrice, "USD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
          }, {
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "a6FK":
    /*!*******************************************************************!*\
      !*** ./src/app/components/product-list/product-list.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProductListComponent */

    /***/
    function a6FK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
        return ProductListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/cart-item */
      "Ldpo");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ProductListComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_4_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var tempProduct_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.addToCart(tempProduct_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tempProduct_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", tempProduct_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", tempProduct_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", tempProduct_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tempProduct_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, tempProduct_r2.unitPrice, "USD"));
        }
      }

      function ProductListComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No products found. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProductListComponent = /*#__PURE__*/function () {
        function ProductListComponent(productService, cartService, route) {
          _classCallCheck(this, ProductListComponent);

          this.productService = productService;
          this.cartService = cartService;
          this.route = route;
          this.products = [];
          this.currentCategoryId = 1;
          this.previousCategoryId = 1;
          this.searchMode = false; // new properties for pagination

          this.thePageNumber = 1;
          this.thePageSize = 5;
          this.theTotalElements = 0;
          this.previousKeyword = null;
        }

        _createClass(ProductListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.route.paramMap.subscribe(function () {
              _this13.listProducts();
            });
          }
        }, {
          key: "listProducts",
          value: function listProducts() {
            this.searchMode = this.route.snapshot.paramMap.has('keyword');

            if (this.searchMode) {
              this.handleSearchProducts();
            } else {
              this.handleListProducts();
            }
          }
        }, {
          key: "handleSearchProducts",
          value: function handleSearchProducts() {
            var theKeyword = this.route.snapshot.paramMap.get('keyword'); // if we have a different keyword than previous
            // then set thePageNumber to 1

            if (this.previousKeyword != theKeyword) {
              this.thePageNumber = 1;
            }

            this.previousKeyword = theKeyword;
            console.log("keyword=".concat(theKeyword, ", thePageNumber=").concat(this.thePageNumber)); // now search for the products using keyword

            this.productService.searchProductsPaginate(this.thePageNumber - 1, this.thePageSize, theKeyword).subscribe(this.processResult());
          }
        }, {
          key: "handleListProducts",
          value: function handleListProducts() {
            // check if "id" parameter is available
            var hasCategoryId = this.route.snapshot.paramMap.has('id');

            if (hasCategoryId) {
              // get the "id" param string. convert string to a number using the "+" symbol
              this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
            } else {
              // not category id available ... default to category id 1
              this.currentCategoryId = 1;
            } //
            // Check if we have a different category than previous
            // Note: Angular will reuse a component if it is currently being viewed
            //
            // if we have a different category id than previous
            // then set thePageNumber back to 1


            if (this.previousCategoryId != this.currentCategoryId) {
              this.thePageNumber = 1;
            }

            this.previousCategoryId = this.currentCategoryId;
            console.log("currentCategoryId=".concat(this.currentCategoryId, ", thePageNumber=").concat(this.thePageNumber)); // now get the products for the given category id

            this.productService.getProductListPaginate(this.thePageNumber - 1, this.thePageSize, this.currentCategoryId).subscribe(this.processResult());
          }
        }, {
          key: "processResult",
          value: function processResult() {
            var _this14 = this;

            return function (data) {
              _this14.products = data._embedded.products;
              _this14.thePageNumber = data.page.number + 1;
              _this14.thePageSize = data.page.size;
              _this14.theTotalElements = data.page.totalElements;
            };
          }
        }, {
          key: "updatePageSize",
          value: function updatePageSize(pageSize) {
            this.thePageSize = pageSize;
            this.thePageNumber = 1;
            this.listProducts();
          }
        }, {
          key: "addToCart",
          value: function addToCart(theProduct) {
            console.log("Adding to cart: ".concat(theProduct.name, ", ").concat(theProduct.unitPrice)); // TODO ... do the real work

            var theCartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"](theProduct);
            this.cartService.addToCart(theCartItem);
          }
        }]);

        return ProductListComponent;
      }();

      ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
        return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductListComponent,
        selectors: [["app-product-list"]],
        decls: 27,
        vars: 7,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "footer-pagination"], [1, "col-md-6"], [1, "col-md-9", 2, "padding-left", "30%"], [3, "page", "pageSize", "collectionSize", "maxSize", "boundaryLinks", "pageChange"], [1, "col-md-3", "mt-2", 2, "text-align", "right"], [1, "mr-2"], [3, "change"], ["selected", "true"], [1, "col-md-3"], [1, "product-box"], [3, "routerLink"], [1, "img-responsive", 3, "src"], [1, "price"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
        template: function ProductListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductListComponent_div_4_Template, 12, 8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductListComponent_div_5_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-pagination", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener($event) {
              return ctx.thePageNumber = $event;
            })("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener() {
              return ctx.listProducts();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Page Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_Template_select_change_16_listener($event) {
              return ctx.updatePageSize($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.products == null ? null : ctx.products.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.thePageNumber)("pageSize", ctx.thePageSize)("collectionSize", ctx.theTotalElements)("maxSize", 5)("boundaryLinks", true);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-list',
            templateUrl: './product-list-grid.component.html',
            styleUrls: ['./product-list.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "c14U":
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function c14U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CartService = /*#__PURE__*/function () {
        // storage: Storage = localStorage;
        function CartService() {
          _classCallCheck(this, CartService);

          this.cartItems = [];
          this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
          this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
          this.storage = sessionStorage; // read data from storage

          var data = JSON.parse(this.storage.getItem('cartItems'));

          if (data != null) {
            this.cartItems = data; // compute totals based on the data that is read from storage

            this.computeCartTotals();
          }
        }

        _createClass(CartService, [{
          key: "addToCart",
          value: function addToCart(theCartItem) {
            // check if we already have the item in our cart
            var alreadyExistsInCart = false;
            var existingCartItem = undefined;

            if (this.cartItems.length > 0) {
              // find the item in the cart based on item id
              existingCartItem = this.cartItems.find(function (tempCartItem) {
                return tempCartItem.id === theCartItem.id;
              }); // check if we found it

              alreadyExistsInCart = existingCartItem != undefined;
            }

            if (alreadyExistsInCart) {
              // increment the quantity
              existingCartItem.quantity++;
            } else {
              // just add the item to the array
              this.cartItems.push(theCartItem);
            } // compute cart total price and total quantity


            this.computeCartTotals();
          }
        }, {
          key: "computeCartTotals",
          value: function computeCartTotals() {
            var totalPriceValue = 0;
            var totalQuantityValue = 0;

            var _iterator = _createForOfIteratorHelper(this.cartItems),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var currentCartItem = _step.value;
                totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
                totalQuantityValue += currentCartItem.quantity;
              } // publish the new values ... all subscribers will receive the new data

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.totalPrice.next(totalPriceValue);
            this.totalQuantity.next(totalQuantityValue); // log cart data just for debugging purposes

            this.logCartData(totalPriceValue, totalQuantityValue); // persist cart data

            this.persistCartItems();
          }
        }, {
          key: "persistCartItems",
          value: function persistCartItems() {
            this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
          }
        }, {
          key: "logCartData",
          value: function logCartData(totalPriceValue, totalQuantityValue) {
            console.log('Contents of the cart');

            var _iterator2 = _createForOfIteratorHelper(this.cartItems),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var tempCartItem = _step2.value;
                var subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
                console.log("name: ".concat(tempCartItem.name, ", quantity=").concat(tempCartItem.quantity, ", unitPrice=").concat(tempCartItem.unitPrice, ", subTotalPrice=").concat(subTotalPrice));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            console.log("totalPrice: ".concat(totalPriceValue.toFixed(2), ", totalQuantity: ").concat(totalQuantityValue));
            console.log('----');
          }
        }, {
          key: "decrementQuantity",
          value: function decrementQuantity(theCartItem) {
            theCartItem.quantity--;

            if (theCartItem.quantity === 0) {
              this.remove(theCartItem);
            } else {
              this.computeCartTotals();
            }
          }
        }, {
          key: "remove",
          value: function remove(theCartItem) {
            // get index of item in the array
            var itemIndex = this.cartItems.findIndex(function (tempCartItem) {
              return tempCartItem.id === theCartItem.id;
            }); // if found, remove the item from the array at the given index

            if (itemIndex > -1) {
              this.cartItems.splice(itemIndex, 1);
              this.computeCartTotals();
            }
          }
        }]);

        return CartService;
      }();

      CartService.ɵfac = function CartService_Factory(t) {
        return new (t || CartService)();
      };

      CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CartService,
        factory: CartService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "epZu":
    /*!*********************************************************************!*\
      !*** ./src/app/components/order-history/order-history.component.ts ***!
      \*********************************************************************/

    /*! exports provided: OrderHistoryComponent */

    /***/
    function epZu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function () {
        return OrderHistoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_order_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/order-history.service */
      "LWgM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function OrderHistoryComponent_div_5_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tempOrderHistory_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tempOrderHistory_r3.orderTrackingNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, tempOrderHistory_r3.totalPrice, "USD"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tempOrderHistory_r3.totalQuantity, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, tempOrderHistory_r3.dateCreated, "medium"), " ");
        }
      }

      function OrderHistoryComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Tracking Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Total Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderHistoryComponent_div_5_tr_11_Template, 11, 10, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orderHistoryList);
        }
      }

      function OrderHistoryComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No orders found. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var OrderHistoryComponent = /*#__PURE__*/function () {
        function OrderHistoryComponent(orderHistoryService) {
          _classCallCheck(this, OrderHistoryComponent);

          this.orderHistoryService = orderHistoryService;
          this.orderHistoryList = [];
          this.storage = sessionStorage;
        }

        _createClass(OrderHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.handleOrderHistory();
          }
        }, {
          key: "handleOrderHistory",
          value: function handleOrderHistory() {
            var _this15 = this;

            // read the user's email address from browser storage
            var theEmail = JSON.parse(this.storage.getItem('userEmail')); // retrieve data from the service

            this.orderHistoryService.getOrderHistory(theEmail).subscribe(function (data) {
              _this15.orderHistoryList = data._embedded.orders;
            });
          }
        }]);

        return OrderHistoryComponent;
      }();

      OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) {
        return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_history_service__WEBPACK_IMPORTED_MODULE_1__["OrderHistoryService"]));
      };

      OrderHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderHistoryComponent,
        selectors: [["app-order-history"]],
        decls: 7,
        vars: 2,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [4, "ngIf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "table", "table-bordered"], ["width", "20%"], ["width", "10%"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
        template: function OrderHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderHistoryComponent_div_5_Template, 12, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderHistoryComponent_div_6_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderHistoryList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderHistoryList.length == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1oaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-history',
            templateUrl: './order-history.component.html',
            styleUrls: ['./order-history.component.css']
          }]
        }], function () {
          return [{
            type: _services_order_history_service__WEBPACK_IMPORTED_MODULE_1__["OrderHistoryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "f8oX":
    /*!*****************************************!*\
      !*** ./src/app/config/my-app-config.ts ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function f8oX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = {
        oidc: {
          clientId: '0oa4c8dn9p65fmC7O5d7',
          issuer: 'https://dev-5165573.okta.com/oauth2/default',
          redirectUri: 'https://my-ecommerce-app.azurewebsites.net/login/callback',
          //redirectUri: 'http://localhost:4200/login/callback',
          scopes: ['openid', 'profile', 'email']
        }
      };
      /***/
    },

    /***/
    "giCd":
    /*!******************************************************!*\
      !*** ./src/app/services/auth-interceptor.service.ts ***!
      \******************************************************/

    /*! exports provided: AuthInterceptorService */

    /***/
    function giCd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
        return AuthInterceptorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @okta/okta-angular */
      "51h4");

      var AuthInterceptorService = /*#__PURE__*/function () {
        function AuthInterceptorService(oktaAuth) {
          _classCallCheck(this, AuthInterceptorService);

          this.oktaAuth = oktaAuth;
        }

        _createClass(AuthInterceptorService, [{
          key: "intercept",
          value: function intercept(request, next) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.handleAccess(request, next));
          }
        }, {
          key: "handleAccess",
          value: function handleAccess(request, next) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var theEndpoint, securedEndpoints, accessToken;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // Only add an access token for secured endpoints
                      theEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].luv2shopApiUrl + '/orders';
                      securedEndpoints = [theEndpoint];

                      if (!securedEndpoints.some(function (url) {
                        return request.urlWithParams.includes(url);
                      })) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 5;
                      return this.oktaAuth.getAccessToken();

                    case 5:
                      accessToken = _context.sent;
                      // clone the request and add new header with access token
                      request = request.clone({
                        setHeaders: {
                          Authorization: 'Bearer ' + accessToken
                        }
                      });

                    case 7:
                      return _context.abrupt("return", next.handle(request).toPromise());

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AuthInterceptorService;
      }();

      AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
        return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"]));
      };

      AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthInterceptorService,
        factory: AuthInterceptorService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "i4Kf":
    /*!*******************************************************************!*\
      !*** ./src/app/components/login-status/login-status.component.ts ***!
      \*******************************************************************/

    /*! exports provided: LoginStatusComponent */

    /***/
    function i4Kf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginStatusComponent", function () {
        return LoginStatusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @okta/okta-angular */
      "51h4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function LoginStatusComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome back ", ctx_r0.userFullName, "! ");
        }
      }

      function LoginStatusComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginStatusComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginStatusComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginStatusComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginStatusComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginStatusComponent = /*#__PURE__*/function () {
        function LoginStatusComponent(oktaAuthService) {
          _classCallCheck(this, LoginStatusComponent);

          this.oktaAuthService = oktaAuthService;
          this.isAuthenticated = false;
          this.storage = sessionStorage;
        }

        _createClass(LoginStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            // Subscribe to authentication state changes
            this.oktaAuthService.$authenticationState.subscribe(function (result) {
              _this16.isAuthenticated = result;

              _this16.getUserDetails();
            });
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this17 = this;

            if (this.isAuthenticated) {
              // Fetch the logged in user details (user's claims)
              //
              // user full name is exposed as a property name
              this.oktaAuthService.getUser().then(function (res) {
                _this17.userFullName = res.name; // retrieve the user's email from authentication response

                var theEmail = res.email; // now store the email in browser storage

                _this17.storage.setItem('userEmail', JSON.stringify(theEmail));
              });
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            // Terminates the session with Okta and removes current tokens.
            this.oktaAuthService.signOut();
          }
        }]);

        return LoginStatusComponent;
      }();

      LoginStatusComponent.ɵfac = function LoginStatusComponent_Factory(t) {
        return new (t || LoginStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"]));
      };

      LoginStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginStatusComponent,
        selectors: [["app-login-status"]],
        decls: 6,
        vars: 5,
        consts: [[1, "login-status-header"], ["class", "login-status-user-info", 4, "ngIf"], ["routerLink", "/login", "class", "security-btn", 4, "ngIf"], ["class", "security-btn", 3, "click", 4, "ngIf"], ["routerLink", "/members", "class", "security-btn ml-1", 4, "ngIf"], ["routerLink", "/order-history", "class", "security-btn ml-1", 4, "ngIf"], [1, "login-status-user-info"], ["routerLink", "/login", 1, "security-btn"], [1, "security-btn", 3, "click"], ["routerLink", "/members", 1, "security-btn", "ml-1"], ["routerLink", "/order-history", 1, "security-btn", "ml-1"]],
        template: function LoginStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginStatusComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginStatusComponent_button_2_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginStatusComponent_button_3_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginStatusComponent_button_4_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginStatusComponent_button_5_Template, 2, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.userFullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".security-btn[_ngcontent-%COMP%] {\n    position:relative;\n    right:0;\n    min-width:95px;\n    color:#fff;\n    border:10px solid #205b8d;\n    border-radius:43px;\n    background:#205b8d\n}\n\n.login-status-header[_ngcontent-%COMP%]{\n    display:flex\n}\n\n.login-status-user-info[_ngcontent-%COMP%] {\n    line-height:43px;\n    border:1px;\n    padding:0 17px;\n    border-radius:3px;\n    transition:all .5s ease\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NBSUM7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsY0FBYztJQUNkLFVBQVU7SUFDVix5QkFBeUI7SUFHekIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFFQTs7O0NBR0M7QUFDRDtJQUtJO0FBQ0o7QUFFQTs7OztDQUlDO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGNBQWM7SUFHZCxpQkFBaUI7SUFJakI7QUFDSiIsImZpbGUiOiJsb2dpbi1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weSBmcm9tIHN0eWxlcy5jc3MgLT4gLmF1LWJ0bi1zdWJtaXRcbiAgICBSZW5hbWUgYXMgLnNlY3VyaXR5LWJ0blxuICAgIENoYW5nZSBib3JkZXIgdG8gMTBweFxuKi9cbi5zZWN1cml0eS1idG4ge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjA7XG4gICAgbWluLXdpZHRoOjk1cHg7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBib3JkZXI6MTBweCBzb2xpZCAjMjA1YjhkO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czozcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOjNweDtcbiAgICBib3JkZXItcmFkaXVzOjQzcHg7XG4gICAgYmFja2dyb3VuZDojMjA1YjhkXG59XG5cbi8qXG4gICAgQ29weSBmcm9tIHN0eWxlcy5jc3MgLT4gLmZvcm0taGVhZGVyXG4gICAgUmVuYW1lIGFzIC5sb2dpbi1zdGF0dXMtaGVhZGVyXG4qL1xuLmxvZ2luLXN0YXR1cy1oZWFkZXJ7XG4gICAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgICBkaXNwbGF5Oi13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5Oi1tb3otYm94O1xuICAgIGRpc3BsYXk6LW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTpmbGV4XG59XG5cbi8qXG4gICAgQ29weSBmcm9tIHN0eWxlcy5jc3MgLT4gLmF1LWlucHV0XG4gICAgUmVuYW1lIGFzIC5sb2dpbi1zdGF0dXMtdXNlci1pbmZvXG4gICAgLSByZW1vdmUgJ3NvbGlkJywgJ2ZvbnQtc2l6ZScsICdjb2xvcidcbiovXG4ubG9naW4tc3RhdHVzLXVzZXItaW5mbyB7XG4gICAgbGluZS1oZWlnaHQ6NDNweDtcbiAgICBib3JkZXI6MXB4O1xuICAgIHBhZGRpbmc6MCAxN3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czozcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOjNweDtcbiAgICBib3JkZXItcmFkaXVzOjNweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIC41cyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246YWxsIC41cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjphbGwgLjVzIGVhc2Vcbn1cblxuXG5cblxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginStatusComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login-status',
            templateUrl: './login-status.component.html',
            styleUrls: ['./login-status.component.css']
          }]
        }], function () {
          return [{
            type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zTuY":
    /*!****************************************************!*\
      !*** ./src/app/validators/luv2-shop-validators.ts ***!
      \****************************************************/

    /*! exports provided: Luv2ShopValidators */

    /***/
    function zTuY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Luv2ShopValidators", function () {
        return Luv2ShopValidators;
      });

      var Luv2ShopValidators = /*#__PURE__*/function () {
        function Luv2ShopValidators() {
          _classCallCheck(this, Luv2ShopValidators);
        }

        _createClass(Luv2ShopValidators, null, [{
          key: "notOnlyWhitespace",
          // whitespace validation
          value: function notOnlyWhitespace(control) {
            // check if string only contains whitespace
            if (control.value != null && control.value.trim().length === 0) {
              // invalid, return error object
              return {
                'notOnlyWhitespace': true
              };
            } else {
              // valid, return null
              return null;
            }
          }
        }]);

        return Luv2ShopValidators;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map