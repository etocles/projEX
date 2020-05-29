function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/layout/header/header.component */
    "./src/app/components/layout/header/header.component.ts");
    /* harmony import */


    var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/todos/todos.component */
    "./src/app/components/todos/todos.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_2__["TodosComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
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
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/todos/todos.component */
    "./src/app/components/todos/todos.component.ts");
    /* harmony import */


    var _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/todo-item/todo-item.component */
    "./src/app/components/todo-item/todo-item.component.ts");
    /* harmony import */


    var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/layout/header/header.component */
    "./src/app/components/layout/header/header.component.ts");
    /* harmony import */


    var _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/add-todo/add-todo.component */
    "./src/app/components/add-todo/add-todo.component.ts");
    /* harmony import */


    var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/progress-bar/progress-bar.component */
    "./src/app/components/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _components_benchmark_benchmark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/benchmark/benchmark.component */
    "./src/app/components/benchmark/benchmark.component.ts");
    /* harmony import */


    var _components_nested_bar_nested_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/nested-bar/nested-bar.component */
    "./src/app/components/nested-bar/nested-bar.component.ts");
    /* harmony import */


    var _components_part_part_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/part/part.component */
    "./src/app/components/part/part.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_editing_dropdown_editing_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/editing-dropdown/editing-dropdown.component */
    "./src/app/components/editing-dropdown/editing-dropdown.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"], _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_9__["TodoItemComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_11__["AddTodoComponent"], _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressBarComponent"], _components_benchmark_benchmark_component__WEBPACK_IMPORTED_MODULE_13__["BenchmarkComponent"], _components_nested_bar_nested_bar_component__WEBPACK_IMPORTED_MODULE_14__["NestedBarComponent"], _components_part_part_component__WEBPACK_IMPORTED_MODULE_15__["PartComponent"], _components_editing_dropdown_editing_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["EditingDropdownComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"], _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_9__["TodoItemComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_11__["AddTodoComponent"], _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressBarComponent"], _components_benchmark_benchmark_component__WEBPACK_IMPORTED_MODULE_13__["BenchmarkComponent"], _components_nested_bar_nested_bar_component__WEBPACK_IMPORTED_MODULE_14__["NestedBarComponent"], _components_part_part_component__WEBPACK_IMPORTED_MODULE_15__["PartComponent"], _components_editing_dropdown_editing_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["EditingDropdownComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/add-todo/add-todo.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/add-todo/add-todo.component.ts ***!
    \***********************************************************/

  /*! exports provided: AddTodoComponent */

  /***/
  function srcAppComponentsAddTodoAddTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function () {
      return AddTodoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Todo */
    "./src/app/models/Todo.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddTodoComponent = /*#__PURE__*/function () {
      function AddTodoComponent() {
        _classCallCheck(this, AddTodoComponent);

        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AddTodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          //template for adding a Todo
          var proj = new src_app_models_Todo__WEBPACK_IMPORTED_MODULE_1__["Project"](this.name, "CategoryTemp", 6);
          this.name = '';
          this.addTodo.emit(proj);
        }
      }]);

      return AddTodoComponent;
    }();

    AddTodoComponent.ɵfac = function AddTodoComponent_Factory(t) {
      return new (t || AddTodoComponent)();
    };

    AddTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddTodoComponent,
      selectors: [["app-add-todo"]],
      outputs: {
        addTodo: "addTodo"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "form", 3, "ngSubmit"], ["type", "text", "name", "title", "placeholder", "Add Todo...", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 1, "btn"]],
      template: function AddTodoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddTodoComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTodoComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: [".form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\r\n  flex: 10;\r\n  padding: 5px;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdG9kby9hZGQtdG9kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87QUFDVCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRvZG8vYWRkLXRvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gIGZsZXg6IDEwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xyXG4gIGZsZXg6IDI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-todo',
          templateUrl: './add-todo.component.html',
          styleUrls: ['./add-todo.component.css']
        }]
      }], function () {
        return [];
      }, {
        addTodo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/benchmark/benchmark.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/benchmark/benchmark.component.ts ***!
    \*************************************************************/

  /*! exports provided: BenchmarkComponent */

  /***/
  function srcAppComponentsBenchmarkBenchmarkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BenchmarkComponent", function () {
      return BenchmarkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nested_bar_nested_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../nested-bar/nested-bar.component */
    "./src/app/components/nested-bar/nested-bar.component.ts");

    function BenchmarkComponent_app_nested_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nested-bar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nestedMsg", function BenchmarkComponent_app_nested_bar_0_Template_app_nested_bar_nestedMsg_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.nestedMark($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bench", ctx_r0.bench)("prog", ctx_r0.prog)("first", ctx_r0.first)("last", ctx_r0.last)("parts", ctx_r0.bench.nested_bar.parts);
      }
    }

    function BenchmarkComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BenchmarkComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onMark(ctx_r4.bench);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r1.bench.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.setClasses())("ngStyle", ctx_r1.getStyles());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.bench.title, "\n");
      }
    }

    var BenchmarkComponent = /*#__PURE__*/function () {
      function BenchmarkComponent() {
        _classCallCheck(this, BenchmarkComponent);

        this.markUpTo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.markDownTo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BenchmarkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.nested) {
            this.nested_bar = this.bench.nested_bar;
          }

          this.percent = this.prog.num_done / this.prog.benchmarks.length;
        }
      }, {
        key: "setClasses",
        value: function setClasses() {
          var classes = {
            'default': true,
            'is-done': this.bench.completed,
            'not-done': !this.bench.completed,
            'firstbench': this.first,
            'lastbench': this.last
          };
          return classes;
        }
      }, {
        key: "onMark",
        value: function onMark(bench) {
          //toggle current bench state
          this.bench.completed = !this.bench.completed; //update rest of progress bar

          if (this.bench.completed) this.markUpTo.emit(this.bench);else this.markDownTo.emit(this.bench);
        }
      }, {
        key: "nestedMark",
        value: function nestedMark(b) {
          if (b.completed == true) this.markUpTo.emit(this.bench);else this.markDownTo.emit(this.bench);
        }
      }, {
        key: "getStyles",
        value: function getStyles() {
          this.percent = this.prog.num_done / this.prog.benchmarks.length;
          var h = this.percent > .9 ? 130 * this.percent : 60 * this.percent; //better gradient

          var s = 86;
          var l = 56;
          h /= 360;
          s /= 100;
          l /= 100;
          var r, g, b;

          if (s === 0) {
            r = g = b = l; // achromatic
          } else {
            var hue2rgb = function hue2rgb(p, q, t) {
              if (t < 0) t += 1;
              if (t > 1) t -= 1;
              if (t < 1 / 6) return p + (q - p) * 6 * t;
              if (t < 1 / 2) return q;
              if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
              return p;
            };

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }

          var toHex = function toHex(x) {
            var hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          };

          var progColor = "#" + toHex(r) + toHex(g) + toHex(b);
          var linGradientText = 'linear-gradient(to left, ' + "".concat(progColor) + ' 50%, #aaaaaa 50%)';
          return {
            'backgroundImage': linGradientText
          };
        }
      }]);

      return BenchmarkComponent;
    }();

    BenchmarkComponent.ɵfac = function BenchmarkComponent_Factory(t) {
      return new (t || BenchmarkComponent)();
    };

    BenchmarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BenchmarkComponent,
      selectors: [["app-benchmark"]],
      inputs: {
        bench: "bench",
        prog: "prog",
        first: "first",
        last: "last",
        nested: "nested"
      },
      outputs: {
        markUpTo: "markUpTo",
        markDownTo: "markDownTo"
      },
      decls: 2,
      vars: 2,
      consts: [[3, "bench", "prog", "first", "last", "parts", "nestedMsg", 4, "ngIf"], ["id", "bench", 3, "title", "ngClass", "ngStyle", "click", 4, "ngIf"], [3, "bench", "prog", "first", "last", "parts", "nestedMsg"], ["id", "bench", 3, "title", "ngClass", "ngStyle", "click"]],
      template: function BenchmarkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BenchmarkComponent_app_nested_bar_0_Template, 1, 5, "app-nested-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BenchmarkComponent_div_1_Template, 2, 4, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nested);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nested);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _nested_bar_nested_bar_component__WEBPACK_IMPORTED_MODULE_2__["NestedBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".default[_ngcontent-%COMP%]{\r\n  background-size: 200% 100%; \r\n  background-image: linear-gradient(to left, green 50%, gray 50%);\r\n  transition: background-position .75s;\r\n  box-shadow: 0px 4px 4px #555;\r\n}\r\n\r\n#bench[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:100%;\r\n    overflow:hidden;\r\n    border-right: 1px solid;\r\n    border-color: #828282;\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    align-items: center;\r\n}\r\n\r\n#bench[_ngcontent-%COMP%]:hover{\r\n  -webkit-filter:brightness(90%);\r\n          filter:brightness(90%);\r\n}\r\n\r\n.is-done[_ngcontent-%COMP%]{\r\n  background-position: -100% 0%;\r\n}\r\n\r\n.not-done[_ngcontent-%COMP%]{\r\n  background-position: 0% 0%;\r\n}\r\n\r\n.firstbench[_ngcontent-%COMP%]{\r\n  border-top-left-radius: 20px;\r\n  border-bottom-left-radius: 20px;\r\n}\r\n\r\n.lastbench[_ngcontent-%COMP%]{\r\n  border-top-right-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iZW5jaG1hcmsvYmVuY2htYXJrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEIsRUFBRSx1QkFBdUI7RUFDbkQsK0RBQStEO0VBQy9ELG9DQUFvQztFQUNwQyw0QkFBNEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmVuY2htYXJrL2JlbmNobWFyay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlZmF1bHR7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7IC8qd2lkdGg9MjAwLGhlaWdodD0xMDAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBncmVlbiA1MCUsIGdyYXkgNTAlKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC43NXM7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggIzU1NTtcclxufVxyXG5cclxuI2JlbmNoe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM4MjgyODI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYmVuY2g6aG92ZXJ7XHJcbiAgZmlsdGVyOmJyaWdodG5lc3MoOTAlKTtcclxufVxyXG5cclxuLmlzLWRvbmV7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMCUgMCU7XHJcbn1cclxuXHJcbi5ub3QtZG9uZXtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcclxufVxyXG5cclxuLmZpcnN0YmVuY2h7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubGFzdGJlbmNoe1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BenchmarkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-benchmark',
          templateUrl: './benchmark.component.html',
          styleUrls: ['./benchmark.component.css']
        }]
      }], function () {
        return [];
      }, {
        bench: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        first: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        last: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nested: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        markUpTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        markDownTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/editing-dropdown/editing-dropdown.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/editing-dropdown/editing-dropdown.component.ts ***!
    \***************************************************************************/

  /*! exports provided: EditingDropdownComponent */

  /***/
  function srcAppComponentsEditingDropdownEditingDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditingDropdownComponent", function () {
      return EditingDropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var src_app_models_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/Todo */
    "./src/app/models/Todo.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function EditingDropdownComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "hr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditingDropdownComponent_div_1_Template_hr_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.addBench($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "reorder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditingDropdownComponent_div_1_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var b_r1 = ctx.$implicit;
          return b_r1.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditingDropdownComponent_div_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var b_r1 = ctx.$implicit;
          return b_r1.parts_summary = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditingDropdownComponent_div_1_Template_mat_icon_click_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.delBench($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var b_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", b_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", b_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", b_r1.parts_summary);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, b_r1.due_date, "yyyy-MM-dd"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 9, b_r1.due_date, "HH:mm"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", b_r1.id);
      }
    }

    var EditingDropdownComponent = /*#__PURE__*/function () {
      function EditingDropdownComponent() {
        _classCallCheck(this, EditingDropdownComponent);

        this.updateBar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(EditingDropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bar = this.proj.progbar;
          this.benchmarks = this.bar.benchmarks;
        }
      }, {
        key: "drop",
        value: function drop(event) {
          //rearranges the list to move the benchmark
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.benchmarks, event.previousIndex, event.currentIndex); // update ids of the benchmarks

          this.benchmarks = this.reID(this.benchmarks); // update completed values

          this.benchmarks = this.updateCompleted(this.benchmarks); // update the rest of the bar (rounding corners where needed)

          this.updateBar.emit(this.benchmarks);
        }
      }, {
        key: "addBench",
        value: function addBench(event) {
          //obtaining the id from the element
          var target = event.srcElement;
          var idAttr = target.attributes.id;
          var value = idAttr.nodeValue;
          this.benchmarks.splice(value, 0, new src_app_models_Todo__WEBPACK_IMPORTED_MODULE_2__["Bench"](-3, new Date(Date.now())));
          this.benchmarks = this.reID(this.benchmarks);
          this.benchmarks = this.updateCompleted(this.benchmarks);
          console.log(this.benchmarks);
        }
      }, {
        key: "delBench",
        value: function delBench(event) {
          //obtaining the id from the element
          var target = event.srcElement;
          var idAttr = target.attributes.id;
          var value = idAttr.nodeValue;
          this.benchmarks = this.benchmarks.filter(function (t) {
            return t.id != value;
          });
          this.benchmarks = this.reID(this.benchmarks);
          console.log(this.benchmarks);
        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          //a little costly, but go through each benchmark, and:
          // if nested parts have been removed, remove them
          // if nested parts have been added/changed, modify them
          var benchmarksCopy = this.benchmarks;

          for (var i = 0; i < benchmarksCopy.length; i++) {
            var b = benchmarksCopy[i]; //bench isn't nested but needs to be

            if (!b.isnested) {
              if (b.parts_summary != null) {
                console.log(b.title + "falls under case 1");
                var namesOfParts = b.parts_summary.split(",");
                namesOfParts = namesOfParts.filter(function (t) {
                  return t.trim().length != 0;
                }); //sanity check

                if (namesOfParts.length == 0) continue;
                b.isnested = true;
                b.nested_bar = new src_app_models_Todo__WEBPACK_IMPORTED_MODULE_2__["NestedBar"](namesOfParts.length);

                for (var n = 0; n < b.nested_bar.parts.length; n++) {
                  b.nested_bar.parts[n].name = namesOfParts[n];
                  b.nested_bar.parts[n].completed = b.completed;
                }

                continue;
              }
            } else {
              //bench is nested but doesn't need to be
              if (b.parts_summary == "") {
                console.log(b.title + "falls under case 2");
                b.isnested = false;
                b.nested_bar = null;
                continue;
              } //bench is nested but needs updating (length or content different)


              if (b.parts_summary != b.nested_bar.AllNames()) {
                console.log(b.title + "falls under case 3");
                var namesOfParts = b.parts_summary.split(",");
                namesOfParts = namesOfParts.filter(function (t) {
                  return t.trim().length != 0;
                }); //sanity check

                if (namesOfParts.length == 0) continue;
                b.isnested = true;
                b.nested_bar = new src_app_models_Todo__WEBPACK_IMPORTED_MODULE_2__["NestedBar"](namesOfParts.length);

                for (var _n = 0; _n < b.nested_bar.parts.length; _n++) {
                  b.nested_bar.parts[_n].name = namesOfParts[_n];
                  b.nested_bar.parts[_n].completed = b.completed;
                }

                continue;
              }
            }
          }

          return benchmarksCopy;
        } //helper functions

      }, {
        key: "reID",
        value: function reID(benchmarks) {
          for (var i = 0; i < benchmarks.length; i++) {
            benchmarks[i].id = i;
          }

          return benchmarks;
        }
      }, {
        key: "updateCompleted",
        value: function updateCompleted(benchmarks) {
          var startCheckingCompleted = false;

          for (var i = benchmarks.length - 1; i >= 0; i--) {
            if (benchmarks[i].completed) startCheckingCompleted = true;
            benchmarks[i].completed = startCheckingCompleted;
          }

          return benchmarks;
        }
      }]);

      return EditingDropdownComponent;
    }();

    EditingDropdownComponent.ɵfac = function EditingDropdownComponent_Factory(t) {
      return new (t || EditingDropdownComponent)();
    };

    EditingDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditingDropdownComponent,
      selectors: [["app-editing-dropdown"]],
      inputs: {
        proj: "proj"
      },
      outputs: {
        updateBar: "updateBar"
      },
      decls: 3,
      vars: 2,
      consts: [["cdkDropList", "", 1, "drop-list", 3, "cdkDropListDropped"], [4, "ngFor", "ngForOf"], ["matTooltip", "Click to add a benchmark", 1, "dd", 3, "id", "click"], ["cdkDrag", "", 1, "list-box"], ["cdkDragHandle", ""], [1, "input-array"], ["type", "text", 1, "input-text", 3, "ngModel", "ngModelChange"], ["type", "date", 1, "nest-input-date", 3, "ngModel"], ["type", "time", 1, "nest-input-time", 3, "ngModel"], [1, "del", 3, "id", "click"]],
      template: function EditingDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function EditingDropdownComponent_Template_div_cdkDropListDropped_0_listener($event) {
            return ctx.drop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditingDropdownComponent_div_1_Template, 15, 12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "hr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditingDropdownComponent_Template_hr_click_2_listener($event) {
            return ctx.addBench($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.benchmarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.bar.benchmarks.length);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: [".dd[_ngcontent-%COMP%]{\r\n  margin: 10px 20px;\r\n  padding: 1px;\r\n  background: #3ed68f;\r\n  transition: transform 300ms;\r\n}\r\n.dd[_ngcontent-%COMP%]:hover{\r\n  cursor:cell;\r\n  box-shadow: 0px 10px 20px black;\r\n  \r\n}\r\n.del[_ngcontent-%COMP%]:hover{\r\n  cursor:pointer;\r\n}\r\n.input-array[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  grid-column-gap: 2rem;\r\n  width:90%;\r\n  grid-template-columns: repeat(auto-fit,minmax(30px,1fr));\r\n}\r\n.input-text[_ngcontent-%COMP%], .input-date[_ngcontent-%COMP%], .input-time[_ngcontent-%COMP%]{\r\nheight:60px;\r\n}\r\n.nest-input-date[_ngcontent-%COMP%], .nest-input-time[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  height:30px;\r\n  display:block;\r\n}\r\n.drop-list[_ngcontent-%COMP%] {\r\n  margin-left:5%;\r\n  width: 90%;\r\n   \r\n  border: solid 1px #ccc;\r\n  \r\n  display: block;\r\n  background: white; \r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n}\r\n.list-box[_ngcontent-%COMP%] {\r\n  padding: 20px 10px;\r\n  border-bottom: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  background: white;\r\n  font-size: 14px;\r\n}\r\n.cdk-drag-handle[_ngcontent-%COMP%] {\r\n  cursor:move;\r\n}\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.list-box[_ngcontent-%COMP%]:last-child {\r\n  border: none;\r\n}\r\n.drop-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .list-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0aW5nLWRyb3Bkb3duL2VkaXRpbmctZHJvcGRvd24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEM7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCx3REFBd0Q7QUFDMUQ7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YscUJBQXFCLEVBQUUsd0JBQXdCO0VBQy9DLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQixFQUFFLG1DQUFtQztFQUN0RCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEI7O2dEQUU4QztBQUNoRDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0aW5nLWRyb3Bkb3duL2VkaXRpbmctZHJvcGRvd24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHBsYXlpbmcgYXJvdW5kIHdpdGggZHJvcGRvd25zICovXHJcbi5kZHtcclxuICBtYXJnaW46IDEwcHggMjBweDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYmFja2dyb3VuZDogIzNlZDY4ZjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XHJcbn1cclxuLmRkOmhvdmVye1xyXG4gIGN1cnNvcjpjZWxsO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggYmxhY2s7XHJcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwJSk7ICovXHJcbn1cclxuLmRlbDpob3ZlcntcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLmlucHV0LWFycmF5e1xyXG4gIGRpc3BsYXk6Z3JpZDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XHJcbiAgd2lkdGg6OTAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgzMHB4LDFmcikpO1xyXG59XHJcblxyXG4uaW5wdXQtdGV4dCwgLmlucHV0LWRhdGUsIC5pbnB1dC10aW1le1xyXG5oZWlnaHQ6NjBweDtcclxufVxyXG4ubmVzdC1pbnB1dC1kYXRlLCAubmVzdC1pbnB1dC10aW1le1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjMwcHg7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuLmRyb3AtbGlzdCB7XHJcbiAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovIC8qIFRPRE86IGFkZCBtaW4td2lkdGggKi9cclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDYwcHg7ICovXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7IC8qIFRPRE86IGNoYW5nZSB0byBhIGJldHRlciBjb2xvciAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGlzdC1ib3gge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1oYW5kbGUge1xyXG4gIGN1cnNvcjptb3ZlO1xyXG59XHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuLmxpc3QtYm94Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmRyb3AtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5saXN0LWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditingDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-editing-dropdown',
          templateUrl: './editing-dropdown.component.html',
          styleUrls: ['./editing-dropdown.component.css']
        }]
      }], function () {
        return [];
      }, {
        proj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        updateBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/layout/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/layout/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "header"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ProjEX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\r\n  background: #333;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/nested-bar/nested-bar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/nested-bar/nested-bar.component.ts ***!
    \***************************************************************/

  /*! exports provided: NestedBarComponent */

  /***/
  function srcAppComponentsNestedBarNestedBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedBarComponent", function () {
      return NestedBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _part_part_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../part/part.component */
    "./src/app/components/part/part.component.ts");

    function NestedBarComponent_app_part_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-part", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("partMsg", function NestedBarComponent_app_part_3_Template_app_part_partMsg_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.nestedMark($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var part_r1 = ctx.$implicit;
        var f_r2 = ctx.first;
        var l_r3 = ctx.last;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("part", part_r1)("prog", ctx_r0.prog)("first", ctx_r0.first)("last", ctx_r0.last)("firstpart", f_r2)("lastpart", l_r3);
      }
    }

    var NestedBarComponent = /*#__PURE__*/function () {
      function NestedBarComponent() {
        _classCallCheck(this, NestedBarComponent);

        this.nestedMsg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NestedBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.percent = this.prog.num_done / this.prog.benchmarks.length;
        }
      }, {
        key: "setClasses",
        value: function setClasses() {
          var classes = {
            'default': true,
            'is-done': this.bench.completed,
            'not-done': !this.bench.completed,
            'firstbench': this.first,
            'lastbench': this.last
          };
          return classes;
        }
      }, {
        key: "onMark",
        value: function onMark() {
          this.bench.completed = !this.bench.completed;
          var partsCopy = this.parts;

          for (var i = 0; i < partsCopy.length; i++) {
            partsCopy[i].completed = this.bench.completed;
          }

          this.parts = partsCopy; //update progressBar accordingly

          this.nestedMsg.emit(this.bench);
        }
      }, {
        key: "nestedMark",
        value: function nestedMark(p) {
          var temp = true; //flag

          for (var i = 0; i < this.parts.length; i++) {
            if (this.parts[i].completed == false) {
              //if even one part isn't done, the whole benchmark is not done
              temp = false;
            }
          }

          if (this.bench.completed != temp) {
            this.bench.completed = temp;
            this.nestedMsg.emit(this.bench);
          }
        }
      }, {
        key: "getStyles",
        value: function getStyles() {
          this.percent = this.prog.num_done / this.prog.benchmarks.length;
          var h = this.percent > .9 ? 130 * this.percent : 60 * this.percent; //better gradient

          var s = 86;
          var l = 56;
          h /= 360;
          s /= 100;
          l /= 100;
          var r, g, b;

          if (s === 0) {
            r = g = b = l; // achromatic
          } else {
            var hue2rgb = function hue2rgb(p, q, t) {
              if (t < 0) t += 1;
              if (t > 1) t -= 1;
              if (t < 1 / 6) return p + (q - p) * 6 * t;
              if (t < 1 / 2) return q;
              if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
              return p;
            };

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }

          var toHex = function toHex(x) {
            var hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          };

          var progColor = "#" + toHex(r) + toHex(g) + toHex(b);
          var linGradientText = 'linear-gradient(to left, ' + "".concat(progColor) + ' 50%, #aaaaaa 50%)';
          return {
            'backgroundImage': linGradientText
          };
        }
      }]);

      return NestedBarComponent;
    }();

    NestedBarComponent.ɵfac = function NestedBarComponent_Factory(t) {
      return new (t || NestedBarComponent)();
    };

    NestedBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NestedBarComponent,
      selectors: [["app-nested-bar"]],
      inputs: {
        bench: "bench",
        parts: "parts",
        prog: "prog",
        first: "first",
        last: "last"
      },
      outputs: {
        nestedMsg: "nestedMsg"
      },
      decls: 4,
      vars: 5,
      consts: [["id", "nest-title", 3, "ngClass", "ngStyle", "title", "click"], [1, "basic-grid"], [3, "part", "prog", "first", "last", "firstpart", "lastpart", "partMsg", 4, "ngFor", "ngForOf"], [3, "part", "prog", "first", "last", "firstpart", "lastpart", "partMsg"]],
      template: function NestedBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NestedBarComponent_Template_p_click_0_listener() {
            return ctx.onMark();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NestedBarComponent_app_part_3_Template, 1, 6, "app-part", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.bench.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses())("ngStyle", ctx.getStyles());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bench.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _part_part_component__WEBPACK_IMPORTED_MODULE_2__["PartComponent"]],
      styles: [".basic-grid[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  grid-row-gap: 0rem;\r\n  width:100%;\r\n  height:50%;\r\n  grid-template-columns: repeat(auto-fit,minmax(1px,1fr));\r\n}\r\n\r\n#nest-title[_ngcontent-%COMP%]{\r\n  height:50%;\r\n  background-size: 200% 100%;\r\n  background-image: linear-gradient(to left, green 50%, gray 50%);\r\n  border-right: 1px solid;\r\n  border-color: #828282;\r\n  transition: background-position 1s;\r\n  border-bottom: 1px groove;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n#nest-title[_ngcontent-%COMP%]:hover{\r\n  -webkit-filter:brightness(90%);\r\n          filter:brightness(90%);\r\n}\r\n\r\n.default[_ngcontent-%COMP%]{\r\n  background-size: 200% 100%; \r\n  background-image: linear-gradient(to left, green 50%, gray 50%);\r\n  transition: background-position .75s;\r\n}\r\n\r\n.is-done[_ngcontent-%COMP%]{\r\n  background-position: -100% 0%;\r\n}\r\n\r\n.not-done[_ngcontent-%COMP%]{\r\n  background-position: 0% 0%;\r\n}\r\n\r\n.firstbench[_ngcontent-%COMP%]{\r\n  border-top-left-radius: 20px;\r\n}\r\n\r\n.lastbench[_ngcontent-%COMP%]{\r\n  border-top-right-radius: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXN0ZWQtYmFyL25lc3RlZC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLCtEQUErRDtFQUMvRCx1QkFBdUI7RUFDdkIscUJBQXFCO0VBR3JCLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsK0VBQStFO0VBQy9FLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSwwQkFBMEIsRUFBRSx1QkFBdUI7RUFDbkQsK0RBQStEO0VBRy9ELG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFHQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmVzdGVkLWJhci9uZXN0ZWQtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMtZ3JpZHtcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAwcmVtO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjUwJTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMXB4LDFmcikpO1xyXG59XHJcblxyXG4jbmVzdC10aXRsZXtcclxuICBoZWlnaHQ6NTAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBncmVlbiA1MCUsIGdyYXkgNTAlKTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICM4MjgyODI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAxcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDFzO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBncm9vdmU7XHJcbiAgLyogY2VudGVycyB0aGUgdGV4dCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBlbGVtZW50IHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSAgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI25lc3QtdGl0bGU6aG92ZXJ7XHJcbiAgZmlsdGVyOmJyaWdodG5lc3MoOTAlKTtcclxufVxyXG5cclxuXHJcbi5kZWZhdWx0e1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlOyAvKndpZHRoPTIwMCxoZWlnaHQ9MTAwKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgZ3JlZW4gNTAlLCBncmF5IDUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC43NXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC43NXM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAuNzVzO1xyXG59XHJcbi5pcy1kb25le1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlIDAlO1xyXG59XHJcblxyXG4ubm90LWRvbmV7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbn1cclxuXHJcblxyXG4uZmlyc3RiZW5jaHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5sYXN0YmVuY2h7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NestedBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nested-bar',
          templateUrl: './nested-bar.component.html',
          styleUrls: ['./nested-bar.component.css']
        }]
      }], function () {
        return [];
      }, {
        bench: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        parts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        first: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        last: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nestedMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/part/part.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/part/part.component.ts ***!
    \***************************************************/

  /*! exports provided: PartComponent */

  /***/
  function srcAppComponentsPartPartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartComponent", function () {
      return PartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PartComponent = /*#__PURE__*/function () {
      function PartComponent() {
        _classCallCheck(this, PartComponent);

        this.partMsg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.percent = this.prog.num_done / this.prog.benchmarks.length;
        }
      }, {
        key: "setClasses",
        value: function setClasses() {
          var classes = {
            'default': true,
            'is-done': this.part.completed,
            'not-done': !this.part.completed,
            'firstpartfirst': this.first && this.firstpart,
            'lastpartlast': this.last && this.lastpart
          };
          return classes;
        }
      }, {
        key: "onMark",
        value: function onMark() {
          this.part.completed = !this.part.completed;
          this.partMsg.emit(this.part);
        }
      }, {
        key: "getStyles",
        value: function getStyles() {
          this.percent = this.prog.num_done / this.prog.benchmarks.length;
          var h = this.percent > .9 ? 130 * this.percent : 60 * this.percent; //better gradient

          var s = 86;
          var l = 56;
          h /= 360;
          s /= 100;
          l /= 100;
          var r, g, b;

          if (s === 0) {
            r = g = b = l; // achromatic
          } else {
            var hue2rgb = function hue2rgb(p, q, t) {
              if (t < 0) t += 1;
              if (t > 1) t -= 1;
              if (t < 1 / 6) return p + (q - p) * 6 * t;
              if (t < 1 / 2) return q;
              if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
              return p;
            };

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }

          var toHex = function toHex(x) {
            var hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          };

          var progColor = "#" + toHex(r) + toHex(g) + toHex(b);
          var linGradientText = 'linear-gradient(to left, ' + "".concat(progColor) + ' 50%, #aaaaaa 50%)';
          return {
            'backgroundImage': linGradientText
          };
        }
      }]);

      return PartComponent;
    }();

    PartComponent.ɵfac = function PartComponent_Factory(t) {
      return new (t || PartComponent)();
    };

    PartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PartComponent,
      selectors: [["app-part"]],
      inputs: {
        part: "part",
        prog: "prog",
        first: "first",
        last: "last",
        firstpart: "firstpart",
        lastpart: "lastpart"
      },
      outputs: {
        partMsg: "partMsg"
      },
      decls: 2,
      vars: 4,
      consts: [["id", "part", 3, "title", "ngClass", "ngStyle", "click"]],
      template: function PartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartComponent_Template_div_click_0_listener() {
            return ctx.onMark();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.part.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses())("ngStyle", ctx.getStyles());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.part.name, "\n");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: ["#part[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    height:100%;\r\n    overflow:hidden;\r\n    border-right: 1px solid;\r\n    border-color: #828282;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#part[_ngcontent-%COMP%]:hover{\r\n  -webkit-filter: brightness(90%);\r\n          filter: brightness(90%);\r\n}\r\n\r\n.default[_ngcontent-%COMP%]{\r\n  background-size: 200% 100%; \r\n  background-image: linear-gradient(to left, green 50%, gray 50%);\r\n  transition: background-position .75s;\r\n  box-shadow: 0px 4px 5px #555;\r\n}\r\n\r\n.is-done[_ngcontent-%COMP%]{\r\n  background-position: -100% 0%;\r\n}\r\n\r\n.not-done[_ngcontent-%COMP%]{\r\n  background-position: 0% 0%;\r\n}\r\n\r\n.firstpartfirst[_ngcontent-%COMP%]{\r\n  border-bottom-left-radius: 20px;\r\n}\r\n\r\n.lastpartlast[_ngcontent-%COMP%]{\r\n  border-bottom-right-radius: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0L3BhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCLEVBQUUsdUJBQXVCO0VBQ25ELCtEQUErRDtFQUcvRCxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUdBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXJ0L3BhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXJ0IHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODI4MjgyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3BhcnQ6aG92ZXJ7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XHJcbn1cclxuXHJcbi5kZWZhdWx0e1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlOyAvKndpZHRoPTIwMCxoZWlnaHQ9MTAwKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgZ3JlZW4gNTAlLCBncmF5IDUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC43NXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC43NXM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAuNzVzO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICM1NTU7XHJcbn1cclxuLmlzLWRvbmV7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMCUgMCU7XHJcbn1cclxuXHJcbi5ub3QtZG9uZXtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcclxufVxyXG5cclxuXHJcbi5maXJzdHBhcnRmaXJzdHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubGFzdHBhcnRsYXN0e1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-part',
          templateUrl: './part.component.html',
          styleUrls: ['./part.component.css']
        }]
      }], function () {
        return [];
      }, {
        part: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        first: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        last: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstpart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastpart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        partMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/progress-bar/progress-bar.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/progress-bar/progress-bar.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProgressBarComponent */

  /***/
  function srcAppComponentsProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _benchmark_benchmark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../benchmark/benchmark.component */
    "./src/app/components/benchmark/benchmark.component.ts");

    function ProgressBarComponent_app_benchmark_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-benchmark", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("markUpTo", function ProgressBarComponent_app_benchmark_1_Template_app_benchmark_markUpTo_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.markUpTo($event);
        })("markDownTo", function ProgressBarComponent_app_benchmark_1_Template_app_benchmark_markDownTo_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.markDownTo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bench_r1 = ctx.$implicit;
        var f_r2 = ctx.first;
        var l_r3 = ctx.last;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bench", bench_r1)("prog", ctx_r0.bar)("first", f_r2)("last", l_r3)("nested", bench_r1.isnested);
      }
    }

    var ProgressBarComponent = /*#__PURE__*/function () {
      function ProgressBarComponent() {
        _classCallCheck(this, ProgressBarComponent);
      }

      _createClass(ProgressBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bar = this.proj.progbar;
        }
      }, {
        key: "markUpTo",
        value: function markUpTo(b) {
          this.bar.num_done++; //add one for the current bench

          if (!this.proj.order_matters) return;
          this.bar.MarkUpTo(b);
        }
      }, {
        key: "markDownTo",
        value: function markDownTo(b) {
          this.bar.num_done--; //subtracts one for the current bench

          if (!this.proj.order_matters) return;
          this.bar.MarkDownTo(b);
        }
      }, {
        key: "numDoneRecount",
        value: function numDoneRecount() {
          var temp_num_done = 0;

          for (var i = 0; i < this.bar.benchmarks.length; i++) {
            if (this.bar.benchmarks[i].completed) temp_num_done++;
          }

          this.bar.num_done = temp_num_done;
        }
      }]);

      return ProgressBarComponent;
    }();

    ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
      return new (t || ProgressBarComponent)();
    };

    ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressBarComponent,
      selectors: [["app-progress-bar"]],
      inputs: {
        proj: "proj",
        benchmarks: "benchmarks"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "basic-grid"], [3, "bench", "prog", "first", "last", "nested", "markUpTo", "markDownTo", 4, "ngFor", "ngForOf"], [3, "bench", "prog", "first", "last", "nested", "markUpTo", "markDownTo"]],
      template: function ProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressBarComponent_app_benchmark_1_Template, 1, 5, "app-benchmark", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.benchmarks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _benchmark_benchmark_component__WEBPACK_IMPORTED_MODULE_2__["BenchmarkComponent"]],
      styles: [".basic-grid[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  grid-row-gap: 0rem;\r\n  width:100%;\r\n  height:80px; \r\n  grid-template-columns: repeat(auto-fit,minmax(30px,1fr));\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFFLDJDQUEyQztFQUN4RCx3REFBd0Q7QUFDMUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdyaWQgY3NzICAqL1xyXG4uYmFzaWMtZ3JpZHtcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAwcmVtO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjgwcHg7IC8qbm9ybWFsaXplcyB0aGUgaGVpZ2h0IG9mIHRoZSBwcm9ncmVzc0JhciovXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDMwcHgsMWZyKSk7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-progress-bar',
          templateUrl: './progress-bar.component.html',
          styleUrls: ['./progress-bar.component.css']
        }]
      }], function () {
        return [];
      }, {
        proj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        benchmarks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/todo-item/todo-item.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/todo-item/todo-item.component.ts ***!
    \*************************************************************/

  /*! exports provided: TodoItemComponent */

  /***/
  function srcAppComponentsTodoItemTodoItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function () {
      return TodoItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _editing_dropdown_editing_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../editing-dropdown/editing-dropdown.component */
    "./src/app/components/editing-dropdown/editing-dropdown.component.ts");
    /* harmony import */


    var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../progress-bar/progress-bar.component */
    "./src/app/components/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TodoItemComponent_app_editing_dropdown_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-editing-dropdown", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateBar", function TodoItemComponent_app_editing_dropdown_25_Template_app_editing_dropdown_updateBar_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.updateBar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("proj", ctx_r0.proj);
      }
    }

    var TodoItemComponent = /*#__PURE__*/function () {
      function TodoItemComponent() {
        _classCallCheck(this, TodoItemComponent);

        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TodoItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bar = this.proj.progbar;
          this.editing = false;
        } //Set Dynamic Classes //aka set attributes of the div based on the todo that's being passed in

      }, {
        key: "setClasses",
        value: function setClasses() {
          var classes = {
            todo: true,
            'is-complete': this.proj.completed
          };
          return classes;
        }
      }, {
        key: "onToggle",
        value: function onToggle(proj) {
          //Toggle in UI
          proj.completed = !proj.completed; // this.bar.MarkUpTo(this.bar.benchmarks[this.bar.benchmarks.length-1]); // TODO: needs to be fully implemented
        }
      }, {
        key: "onDelete",
        value: function onDelete(proj) {
          this.deleteTodo.emit(proj);
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          //onOpen:
          //toggle editing mode to on
          this.editing = !this.editing; //change dropdown icon

          var editBtn = document.getElementById('edit');
          editBtn.innerHTML = !this.editing ? '🔽' : '🆗'; //onClose:

          if (this.editing == false) {
            //set current progressbar to new progressBar provided by form
            console.log(this.dropdownForm.myFunction());
            this.bar.benchmarks = this.dropdownForm.myFunction();
            this.barComponent.numDoneRecount(); //sanity check to make sure the num_done isn't thrown off
          }
        }
      }, {
        key: "setDropdownClasses",
        value: function setDropdownClasses() {
          var classes = {
            'dropdown-content': true,
            'show': this.editing
          };
          return classes;
        }
      }, {
        key: "updateBar",
        value: function updateBar(event) {
          //should reapply styles to the progressBar, such as rounding corners and completing
          //needs to set the current progressbar's benchmarks to event
          //update num_done
          console.log(event);
        }
      }]);

      return TodoItemComponent;
    }();

    TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) {
      return new (t || TodoItemComponent)();
    };

    TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoItemComponent,
      selectors: [["app-todo-item"]],
      viewQuery: function TodoItemComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_editing_dropdown_editing_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["EditingDropdownComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownForm = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.barComponent = _t.first);
        }
      },
      inputs: {
        proj: "proj"
      },
      outputs: {
        deleteTodo: "deleteTodo"
      },
      decls: 26,
      vars: 16,
      consts: [[3, "ngClass"], ["id", "del", 3, "click"], ["id", "category"], ["id", "spacer"], ["id", "name"], ["id", "date-info"], ["id", "percent"], ["id", "separator"], [1, "bar-container"], ["id", "progressBar", 3, "proj", "benchmarks"], [1, "btn-group"], ["id", "done", 3, "click"], ["id", "edit", 3, "click"], [3, "proj", "updateBar", 4, "ngIf"], [3, "proj", "updateBar"]],
      template: function TodoItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_2_listener() {
            return ctx.onDelete(ctx.proj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-progress-bar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_21_listener() {
            return ctx.onToggle(ctx.proj);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u2705");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_23_listener() {
            return ctx.onEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\uD83D\uDD3D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TodoItemComponent_app_editing_dropdown_25_Template, 1, 1, "app-editing-dropdown", 13);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.proj.category));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.proj.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" DUE: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 10, ctx.proj.due_date, "short"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 13, ctx.proj.progbar.num_done / ctx.proj.progbar.benchmarks.length * 100, "1.0-0"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("proj", ctx.proj)("benchmarks", ctx.bar.benchmarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _editing_dropdown_editing_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["EditingDropdownComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: [".todo[_ngcontent-%COMP%] {\r\n  background: #f4f4f4;\r\n  padding: 10px;\r\n  border-bottom: 1px #ccc dotted;\r\n  border-radius: 40px;\r\n  margin-top:1%; \r\n  margin-left:0.6%;\r\n  margin-right:0.6%;\r\n  height: minmax(260px,auto); \r\n  box-shadow: 5px 5px #223540;\r\n}\r\n\r\n.is-complete[_ngcontent-%COMP%] {\r\n  text-decoration: line-through;\r\n  background:#a1a1a1;\r\n  -webkit-filter:brightness(70%);\r\n          filter:brightness(70%);\r\n}\r\n\r\n.btn-group[_ngcontent-%COMP%]{\r\n  width:35px;\r\n}\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  flex:right;\r\n  display: block; \r\n  margin-left: 30%;\r\n}\r\n\r\n.bar-container[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#del[_ngcontent-%COMP%] { \r\n  background: #ff0000;\r\n  color: #333333;\r\n  border: none;\r\n  padding: 5px 9px;\r\n  border-radius: 50%;\r\n  float: right;\r\n  margin-right: 1%;\r\n  cursor: pointer;\r\n}\r\n\r\n#del[_ngcontent-%COMP%]:hover{\r\n  background: #c91919;\r\n}\r\n\r\n#edit[_ngcontent-%COMP%] { \r\n  width:100%;\r\n  height:45%;\r\n  border: 1px solid;\r\n  margin-top: 20%;\r\n  border-radius: 20%;\r\n  \r\n}\r\n\r\n#done[_ngcontent-%COMP%] { \r\n  width:100%;\r\n  height:45%;\r\n}\r\n\r\n#category[_ngcontent-%COMP%]{\r\n  padding-left: 20px;\r\n  width: 90%;\r\n  font-weight:bold;\r\n  font-size: 2em;\r\n  color: #8794a3;\r\n  z-index: 1;\r\n  position: relative;\r\n  top:25px;  \r\n}\r\n\r\n#spacer[_ngcontent-%COMP%]{\r\n  width:92%;\r\n  justify-content: space-between;\r\n  display:flex;\r\n  align-items:baseline;\r\n  \r\n}\r\n\r\n#name[_ngcontent-%COMP%]{\r\n  padding-left: 20px;\r\n  font-size:3.7em;\r\n  display:inline;\r\n}\r\n\r\n#date-info[_ngcontent-%COMP%]{\r\n  font-size: 1em;\r\n  font-weight:600;\r\n  display:inline;\r\n}\r\n\r\n#percent[_ngcontent-%COMP%]{\r\n  font-size:5em;\r\n  color: rgba(130,130,130,0.2);\r\n}\r\n\r\n#progressBar[_ngcontent-%COMP%]{\r\n  padding-left: 15px;\r\n  width:95%;\r\n}\r\n\r\n#separator[_ngcontent-%COMP%]{\r\n  padding-left: 15px;\r\n  margin: 0.1% 6% 1% 1%; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYSxFQUFFLHlCQUF5QjtFQUN4QyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBCQUEwQixFQUFFLDRCQUE0QjtFQUN4RCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYyxFQUFFLDZDQUE2QztFQUM3RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBLE9BQU8sb0JBQW9CO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBLFFBQVEsb0JBQW9CO0VBQzFCLFVBQVU7RUFDVixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBLFFBQVEsd0JBQXdCO0VBQzlCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUSxHQUFHLDJFQUEyRTtBQUN4Rjs7QUFFQTtFQUNFLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBRSwyQkFBMkI7QUFDcEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvIHtcclxuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNjY2MgZG90dGVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDoxJTsgLyogc3BhY2VzIG91dCB0aGUgdG9kb3MgKi9cclxuICBtYXJnaW4tbGVmdDowLjYlO1xyXG4gIG1hcmdpbi1yaWdodDowLjYlO1xyXG4gIGhlaWdodDogbWlubWF4KDI2MHB4LGF1dG8pOyAvKm5vcm1hbGl6ZXMgcHJvamVjdCBoZWlnaHQqL1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggIzIyMzU0MDtcclxufVxyXG5cclxuLmlzLWNvbXBsZXRlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICBiYWNrZ3JvdW5kOiNhMWExYTE7XHJcbiAgZmlsdGVyOmJyaWdodG5lc3MoNzAlKTtcclxufVxyXG5cclxuLmJ0bi1ncm91cHtcclxuICB3aWR0aDozNXB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIGJ1dHRvbiB7XHJcbiAgZmxleDpyaWdodDtcclxuICBkaXNwbGF5OiBibG9jazsgLyogTWFrZSB0aGUgYnV0dG9ucyBhcHBlYXIgYmVsb3cgZWFjaCBvdGhlciAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuXHJcbi5iYXItY29udGFpbmVye1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI2RlbCB7IC8qIGRlbGV0aW5nIGJ1dHRvbiAqL1xyXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jZGVsOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNjOTE5MTk7XHJcbn1cclxuI2VkaXQgeyAvKiBkcm9wZG93biBidXR0b24gKi9cclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo0NSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAvKiBjb250ZW50OiBcIvCflL1cIjsgKi9cclxufVxyXG4jZG9uZSB7IC8qIHRvZ2dsaW5nIGRvbmUgYnV0dG9uKi9cclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo0NSU7XHJcbn1cclxuXHJcbiNjYXRlZ29yeXtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGNvbG9yOiAjODc5NGEzO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDoyNXB4OyAgLyogVE9ETzogc2tldGNoeSwgdGhpcyBjb250cm9scyBob3cgY2xvc2UgY2F0ZWdvcnkgaXMgdG8gdGhlIHByb2plY3QgbmFtZSAqL1xyXG59XHJcblxyXG4jc3BhY2Vye1xyXG4gIHdpZHRoOjkyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xyXG4gIC8qIGZsZXgtd3JhcDp3cmFwOyAqL1xyXG59XHJcblxyXG4jbmFtZXtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOjMuN2VtO1xyXG4gIGRpc3BsYXk6aW5saW5lO1xyXG59XHJcblxyXG4jZGF0ZS1pbmZve1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OjYwMDtcclxuICBkaXNwbGF5OmlubGluZTtcclxufVxyXG5cclxuI3BlcmNlbnR7XHJcbiAgZm9udC1zaXplOjVlbTtcclxuICBjb2xvcjogcmdiYSgxMzAsMTMwLDEzMCwwLjIpO1xyXG59XHJcblxyXG4jcHJvZ3Jlc3NCYXJ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHdpZHRoOjk1JTtcclxufVxyXG5cclxuI3NlcGFyYXRvcntcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luOiAwLjElIDYlIDElIDElOyAvKnRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCovXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-item',
          templateUrl: './todo-item.component.html',
          styleUrls: ['./todo-item.component.css']
        }]
      }], function () {
        return [];
      }, {
        proj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteTodo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dropdownForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_editing_dropdown_editing_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["EditingDropdownComponent"]]
        }],
        barComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/todos/todos.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/todos/todos.component.ts ***!
    \*****************************************************/

  /*! exports provided: TodosComponent */

  /***/
  function srcAppComponentsTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
      return TodosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/Todo */
    "./src/app/models/Todo.ts");
    /* harmony import */


    var _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../add-todo/add-todo.component */
    "./src/app/components/add-todo/add-todo.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../todo-item/todo-item.component */
    "./src/app/components/todo-item/todo-item.component.ts");

    function TodosComponent_app_todo_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-todo-item", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteTodo", function TodosComponent_app_todo_item_1_Template_app_todo_item_deleteTodo_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteTodo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proj_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("proj", proj_r1);
      }
    }

    var TodosComponent = /*#__PURE__*/function () {
      function TodosComponent() {// const BrowserWindow = remote.BrowserWindow;
        // const win = new BrowserWindow({
        //   height: 600,
        //   width: 800
        // });
        //
        // win.loadURL('www.google.com');
        // ipcRenderer.send('OpenNumber2');

        _classCallCheck(this, TodosComponent);
      }

      _createClass(TodosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var proj1 = new _models_Todo__WEBPACK_IMPORTED_MODULE_1__["Project"](localStorage.getItem('temp'), 'FOCS', 5);
          proj1.due_date = new Date('2020-05-09T23:59:00');
          proj1.progbar = new _models_Todo__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"](5, proj1.due_date);
          proj1.progbar.benchmarks[1].isnested = true;
          proj1.progbar.benchmarks[1].nested_bar = new _models_Todo__WEBPACK_IMPORTED_MODULE_1__["NestedBar"](3);
          proj1.progbar.benchmarks[1].CorrelateParts();
          proj1.progbar.ToggleBenchmark(0);
          proj1.progbar.ToggleBenchmark(1);
          var proj2 = new _models_Todo__WEBPACK_IMPORTED_MODULE_1__["Project"]('Character', '3D Modeling', 5);
          proj2.due_date = new Date('2020-06-09T23:59:00');
          var proj3 = new _models_Todo__WEBPACK_IMPORTED_MODULE_1__["Project"]('ProjectName3', 'Category3', 10);
          proj3.due_date = new Date('2020-11-09T23:59:00');
          proj3.progbar.MarkUpTo(proj3.progbar.benchmarks[4]);
          var proj4 = new _models_Todo__WEBPACK_IMPORTED_MODULE_1__["Project"]('ProjectName4', 'Category4', 10);
          proj4.due_date = new Date('2020-11-20T23:59:00');
          proj4.order_matters = false;
          proj4.progbar.benchmarks[5].isnested = true;
          proj4.progbar.benchmarks[5].nested_bar = new _models_Todo__WEBPACK_IMPORTED_MODULE_1__["NestedBar"](5);
          proj4.progbar.benchmarks[5].CorrelateParts();
          var proj5 = new _models_Todo__WEBPACK_IMPORTED_MODULE_1__["Project"]('ProjectName5', 'Category5', 2);
          var proj6 = new _models_Todo__WEBPACK_IMPORTED_MODULE_1__["Project"]('Test', 'YEST', 1);
          this.projects = [proj1, proj2, proj3, proj4, proj5, proj6];
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(proj) {
          //Removes from UI
          //returns all projects that are not the specified id in the UI
          this.projects = this.projects.filter(function (t) {
            return t.name !== proj.name;
          });
        }
      }, {
        key: "addTodo",
        value: function addTodo(proj) {
          this.projects.push(proj);
        }
      }]);

      return TodosComponent;
    }();

    TodosComponent.ɵfac = function TodosComponent_Factory(t) {
      return new (t || TodosComponent)();
    };

    TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodosComponent,
      selectors: [["app-todos"]],
      decls: 2,
      vars: 1,
      consts: [[3, "addTodo"], [3, "proj", "deleteTodo", 4, "ngFor", "ngForOf"], [3, "proj", "deleteTodo"]],
      template: function TodosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-todo", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addTodo", function TodosComponent_Template_app_add_todo_addTodo_0_listener($event) {
            return ctx.addTodo($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodosComponent_app_todo_item_1_Template, 1, 1, "app-todo-item", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      directives: [_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_2__["AddTodoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__["TodoItemComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todos',
          templateUrl: './todos.component.html',
          styleUrls: ['./todos.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/Todo.ts":
  /*!********************************!*\
    !*** ./src/app/models/Todo.ts ***!
    \********************************/

  /*! exports provided: Project, ProgressBar, Bench, NestedBar, Part */

  /***/
  function srcAppModelsTodoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project", function () {
      return Project;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBar", function () {
      return ProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bench", function () {
      return Bench;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedBar", function () {
      return NestedBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Part", function () {
      return Part;
    }); //Project


    var Project = function Project(name, cat, length) {
      _classCallCheck(this, Project);

      this.name = name;
      this.category = cat;
      this.due_date = new Date(Date.now());
      this.order_matters = true;
      this.completed = false;
      this.progbar = new ProgressBar(length, this.due_date);
    };

    var ProgressBar = /*#__PURE__*/function () {
      function ProgressBar(length, date) {
        _classCallCheck(this, ProgressBar);

        this.benchmarks = [new Bench(-1, date)];

        for (var i = 0; i < length; i++) {
          this.benchmarks.push(new Bench(i, date));
        }

        this.benchmarks.shift();
        this.num_done = 0;
      }

      _createClass(ProgressBar, [{
        key: "MarkUpTo",
        value: function MarkUpTo(b) {
          //otherwise, edit the components
          var benchmarksCopy = this.benchmarks; //make appropriate modifications

          var _iterator = _createForOfIteratorHelper(benchmarksCopy),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var i = _step.value;
              if (i.id > b.id) break;

              if (!i.completed) {
                this.num_done++;
                i.ToggleTo(true);
              }
            } //apply changes

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.benchmarks = benchmarksCopy;
        }
      }, {
        key: "MarkDownTo",
        value: function MarkDownTo(b) {
          //otherwise, edit the components
          var benchmarksCopy = this.benchmarks; //make appropriate modifications

          var _iterator2 = _createForOfIteratorHelper(benchmarksCopy),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var i = _step2.value;

              if (i.id > b.id && i.completed) {
                this.num_done--;
                i.ToggleTo(false);
              }
            } //apply changes

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.benchmarks = benchmarksCopy;
        }
      }, {
        key: "ToggleBenchmark",
        value: function ToggleBenchmark(index) {
          var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          //if completing a benchmark, state is true
          if (state) {
            this.num_done++;
            this.benchmarks[index].ToggleTo(state);
          } //if uncompleting a benchmark, state is false
          else {
              this.num_done--;
              this.benchmarks[index].ToggleTo(state);
            }
        }
      }]);

      return ProgressBar;
    }();

    var Bench = /*#__PURE__*/function () {
      function Bench(id, date) {
        _classCallCheck(this, Bench);

        this.id = id;
        this.title = "Bench" + this.id;
        this.due_date = date; // TODO: DATE NEEDS TO BE ADDED TO CONSTRUCTOR

        this.completed = false;
        this.isnested = false;
        this.nested_bar = null;
        this.parts_summary = null;
      }

      _createClass(Bench, [{
        key: "ToggleTo",
        value: function ToggleTo(state) {
          //this should only be called through the ProgressBar's CompleteBenchmark function
          this.completed = state;

          if (this.isnested) {
            this.nested_bar.ToggleAll(state);
          }
        }
      }, {
        key: "CorrelateParts",
        value: function CorrelateParts() {
          //sets the parts summary equal to the names of all the nested bar's parts.
          //If there are none, it will return an empty string
          var s = "";
          if (!this.isnested) return s;

          for (var i = 0; i < this.nested_bar.parts.length; i++) {
            s += this.nested_bar.parts[i].name + ",";
          }

          s = s.substring(0, s.length - 1);
          this.parts_summary = s;
        }
      }]);

      return Bench;
    }();

    var NestedBar = /*#__PURE__*/function () {
      function NestedBar(length) {
        _classCallCheck(this, NestedBar);

        this.parts = [new Part(-1)];

        for (var i = 0; i < length; i++) {
          this.parts.push(new Part(i));
        }

        this.parts.shift();
      }

      _createClass(NestedBar, [{
        key: "ToggleAll",
        value: function ToggleAll(state) {
          for (var i = 0; i < this.parts.length; i++) {
            this.parts[i].Toggle(state);
          }
        }
      }, {
        key: "AllNames",
        value: function AllNames() {
          var s = "";

          for (var i = 0; i < this.parts.length; i++) {
            s += this.parts[i].name + ",";
          }

          s = s.substring(0, s.length - 1);
          return s;
        }
      }]);

      return NestedBar;
    }();

    var Part = /*#__PURE__*/function () {
      function Part(n) {
        _classCallCheck(this, Part);

        this.name = String.fromCharCode(97 + n);
        this.id = n;
        this.completed = false;
      }

      _createClass(Part, [{
        key: "Toggle",
        value: function Toggle(state) {
          this.completed = state;
        }
      }]);

      return Part;
    }(); //
    // //sample class creation
    // let proj:Project = {
    //   name:'ProjectName',
    //   category:'CategoryName',
    //   dueDate: new Date('2020-05-09T23:59:00'),
    //   order_matters:false,
    //   completed:false,
    //   progbar:{
    //     num_done:3,
    //     benchmarks:[
    //       {
    //         id:1,
    //         title:"Bench1",
    //         dueDate: new Date('2019-02-18T23:59:00'),
    //         isdone:true,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:2,
    //         title:"Bench2",
    //         dueDate: new Date('2019-02-19T23:59:00'),
    //         isdone:true,
    //         isnested:true,
    //         nested_bar:{
    //           miniBar:[
    //             {
    //               id:1,
    //               name:"a",
    //               completed:true
    //             },
    //             {
    //               id:2,
    //               name:"b",
    //               completed:true
    //             },
    //             {
    //               id:3,
    //               name:"c",
    //               completed:true
    //             }
    //           ]
    //         }
    //       },
    //       {
    //         id:3,
    //         title:"Bench3",
    //         dueDate: new Date('2019-02-20T23:59:00'),
    //         isdone:true,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:4,
    //         title:"Bench4",
    //         dueDate: new Date('2019-02-21T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:5,
    //         title:"Bench5",
    //         dueDate: new Date('2019-02-22T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //     ]
    //   }
    // };
    //
    // let proj2:Project = {
    //   name:'ProjectName2',
    //   category:'CategoryName2',
    //   dueDate: new Date('2020-06-09T23:59:00'),
    //   order_matters:false,
    //   completed:false,
    //   progbar:{
    //     num_done:1,
    //     benchmarks:[
    //       {
    //         id:1,
    //         title:"Bench2",
    //         dueDate: new Date('2019-02-18T23:59:00'),
    //         isdone:true,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:2,
    //         title:"Bench2",
    //         dueDate: new Date('2019-02-18T23:59:00'),
    //         isdone:true,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:3,
    //         title:"Bench3",
    //         dueDate: new Date('2019-02-20T23:59:00'),
    //         isdone:true,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:4,
    //         title:"Bench4",
    //         dueDate: new Date('2019-02-21T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:5,
    //         title:"Bench5",
    //         dueDate: new Date('2019-02-22T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //     ]
    //   }
    // };
    //
    // let proj3:Project = {
    //   name:'ProjectName3',
    //   category:'CategoryName3',
    //   dueDate: new Date('2020-11-09T23:59:00'),
    //   order_matters:false,
    //   completed:false,
    //   progbar:{
    //     num_done:4,
    //     benchmarks:[
    //       {
    //         id:1,
    //         title:"Bench2",
    //         dueDate: new Date('2019-02-18T23:59:00'),
    //         isdone:true,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:2,
    //         title:"Bench2",
    //         dueDate: new Date('2019-02-18T23:59:00'),
    //         isdone:true,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:3,
    //         title:"Bench3",
    //         dueDate: new Date('2019-02-20T23:59:00'),
    //         isdone:true,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:4,
    //         title:"Bench4",
    //         dueDate: new Date('2019-02-21T23:59:00'),
    //         isdone:true,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:5,
    //         title:"Bench5",
    //         dueDate: new Date('2019-02-22T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:6,
    //         title:"Bench6",
    //         dueDate: new Date('2019-02-22T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:7,
    //         title:"Bench7",
    //         dueDate: new Date('2019-02-22T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:8,
    //         title:"Bench8",
    //         dueDate: new Date('2019-02-22T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:9,
    //         title:"Bench9",
    //         dueDate: new Date('2019-02-22T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //       {
    //         id:10,
    //         title:"Bench10",
    //         dueDate: new Date('2019-02-22T23:59:00'),
    //         isdone:false,
    //         isnested:false,
    //         nested_bar:new NestedBar()
    //       },
    //     ]
    //   }
    // };

    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\misha\Documents\GitHub\projEX\angular-todolist\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map