webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__);
/* unused harmony reexport router */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__store_index__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return app; });






__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__router_index__["a" /* default */]);

const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.extend({
  router: __WEBPACK_IMPORTED_MODULE_3__router_index__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_1__App_vue___default.a));



/***/ },
/* 6 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  data() {
    return {
      title: '',
      item: {
        href: '#!',
        text: 'Get Started'
      }
    };
  },

  methods: {
    meta(obj) {
      if (typeof obj === 'string') {
        return this.title = obj;
      }
      this.title = obj.h1;
    }
  }
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  mounted() {
    this.$emit('view', this.meta());
  },

  preFetch() {
    return this.methods.meta();
  },

  methods: {
    meta() {
      return {
        title: 'view1 title',
        h1: 'view1 - view1',
        description: 'this is view1 description',
        keywords: 'view, view1'
      };
    }
  }
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  mounted() {
    this.$emit('view', this.meta());
  },

  preFetch() {
    return this.methods.meta();
  },

  methods: {
    meta() {
      return {
        title: 'view2 title',
        h1: 'view2 - view2',
        description: 'this is view2 description',
        keywords: 'view, view2'
      };
    }
  }
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Main_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_View1_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_View1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_View1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_View2_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_View2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_View2_vue__);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  routes: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_2__views_Main_vue___default.a }, { path: '/view1', component: __WEBPACK_IMPORTED_MODULE_3__views_View1_vue___default.a }, { path: '/view2', component: __WEBPACK_IMPORTED_MODULE_4__views_View2_vue___default.a }]
});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  state: {},

  actions: {},

  mutations: {}
});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(17)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "/public/logo.png"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("view2")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("APP")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/view1"
    }
  }, [_vm._v("view1")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/view2"
    }
  }, [_vm._v("view2")])])
}]}

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "/public/logo.png"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("view1")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("APP")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/view1"
    }
  }, [_vm._v("view1")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/view2"
    }
  }, [_vm._v("view2")])])
}]}

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main', [_c('h1', [_vm._v("SSR Template")]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "/public/logo.png"
    }
  }), _vm._v(" "), _c('h1', [_vm._v("Vue SSR Template")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/view1"
    }
  }, [_vm._v("view1")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/view2"
    }
  }, [_vm._v("view2")])])
}]}

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(5);
__webpack_require__(7);
__webpack_require__(6);
__webpack_require__(1).polyfill();


// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
__WEBPACK_IMPORTED_MODULE_0__app__["a" /* store */].replaceState(window.__INITIAL_STATE__);

// actually mount to DOM
__WEBPACK_IMPORTED_MODULE_0__app__["b" /* app */].$mount('div');

/***/ }
],[22]);
//# sourceMappingURL=app08b38.js.map