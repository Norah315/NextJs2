"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-icons";
exports.ids = ["vendor-chunks/@react-icons"];
exports.modules = {

/***/ "(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconBase.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/iconBase.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GenIcon: () => (/* binding */ GenIcon),\n/* harmony export */   IconBase: () => (/* binding */ IconBase)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext */ \"(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconContext.js\");\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nvar __rest = undefined && undefined.__rest || function (s, e) {\n  var t = {};\n\n  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];\n\n  if (s != null && typeof Object.getOwnPropertySymbols === \"function\") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];\n  }\n  return t;\n};\n\n\n\n\nfunction Tree2Element(tree) {\n  return tree && tree.map(function (node, i) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(node.tag, __assign({\n      key: i\n    }, node.attr), Tree2Element(node.child));\n  });\n}\n\nfunction GenIcon(data) {\n  return function (props) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconBase, __assign({\n      attr: __assign({}, data.attr)\n    }, props), Tree2Element(data.child));\n  };\n}\nfunction IconBase(props) {\n  var elem = function (conf) {\n    var attr = props.attr,\n        size = props.size,\n        title = props.title,\n        svgProps = __rest(props, [\"attr\", \"size\", \"title\"]);\n\n    var computedSize = size || conf.size || \"1em\";\n    var className;\n    if (conf.className) className = conf.className;\n    if (props.className) className = (className ? className + ' ' : '') + props.className;\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", __assign({\n      stroke: \"currentColor\",\n      fill: \"currentColor\",\n      strokeWidth: \"0\"\n    }, conf.attr, attr, svgProps, {\n      className: className,\n      style: __assign(__assign({\n        color: props.color || conf.color\n      }, conf.style), props.style),\n      height: computedSize,\n      width: computedSize,\n      xmlns: \"http://www.w3.org/2000/svg\"\n    }), title && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, title), props.children);\n  };\n\n  return _iconContext__WEBPACK_IMPORTED_MODULE_1__.IconContext !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconContext__WEBPACK_IMPORTED_MODULE_1__.IconContext.Consumer, null, function (conf) {\n    return elem(conf);\n  }) : elem(_iconContext__WEBPACK_IMPORTED_MODULE_1__.DefaultContext);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWljb25zL2FsbC1maWxlcy9saWIvZXNtL2ljb25CYXNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZUFBZSxTQUFJLElBQUksU0FBSTtBQUMzQjtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsU0FBSSxJQUFJLFNBQUk7QUFDekI7O0FBRUE7O0FBRUEsNEhBQTRILGNBQWM7QUFDMUk7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCO0FBQ2tDOztBQUU1RDtBQUNBO0FBQ0EsV0FBVywwREFBbUI7QUFDOUI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQSxXQUFXLDBEQUFtQjtBQUM5Qix1QkFBdUI7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBEQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWSwwREFBbUI7QUFDcEM7O0FBRUEsU0FBUyxxREFBVyxpQkFBaUIsMERBQW1CLENBQUMscURBQVc7QUFDcEU7QUFDQSxHQUFHLFNBQVMsd0RBQWM7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWljb25zL2FsbC1maWxlcy9saWIvZXNtL2ljb25CYXNlLmpzP2RlMGYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gdGhpcyAmJiB0aGlzLl9fYXNzaWduIHx8IGZ1bmN0aW9uICgpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuXG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uQ29udGV4dCwgRGVmYXVsdENvbnRleHQgfSBmcm9tICcuL2ljb25Db250ZXh0JztcblxuZnVuY3Rpb24gVHJlZTJFbGVtZW50KHRyZWUpIHtcbiAgcmV0dXJuIHRyZWUgJiYgdHJlZS5tYXAoZnVuY3Rpb24gKG5vZGUsIGkpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChub2RlLnRhZywgX19hc3NpZ24oe1xuICAgICAga2V5OiBpXG4gICAgfSwgbm9kZS5hdHRyKSwgVHJlZTJFbGVtZW50KG5vZGUuY2hpbGQpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHZW5JY29uKGRhdGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CYXNlLCBfX2Fzc2lnbih7XG4gICAgICBhdHRyOiBfX2Fzc2lnbih7fSwgZGF0YS5hdHRyKVxuICAgIH0sIHByb3BzKSwgVHJlZTJFbGVtZW50KGRhdGEuY2hpbGQpKTtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBJY29uQmFzZShwcm9wcykge1xuICB2YXIgZWxlbSA9IGZ1bmN0aW9uIChjb25mKSB7XG4gICAgdmFyIGF0dHIgPSBwcm9wcy5hdHRyLFxuICAgICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgICAgc3ZnUHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImF0dHJcIiwgXCJzaXplXCIsIFwidGl0bGVcIl0pO1xuXG4gICAgdmFyIGNvbXB1dGVkU2l6ZSA9IHNpemUgfHwgY29uZi5zaXplIHx8IFwiMWVtXCI7XG4gICAgdmFyIGNsYXNzTmFtZTtcbiAgICBpZiAoY29uZi5jbGFzc05hbWUpIGNsYXNzTmFtZSA9IGNvbmYuY2xhc3NOYW1lO1xuICAgIGlmIChwcm9wcy5jbGFzc05hbWUpIGNsYXNzTmFtZSA9IChjbGFzc05hbWUgPyBjbGFzc05hbWUgKyAnICcgOiAnJykgKyBwcm9wcy5jbGFzc05hbWU7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX19hc3NpZ24oe1xuICAgICAgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHN0cm9rZVdpZHRoOiBcIjBcIlxuICAgIH0sIGNvbmYuYXR0ciwgYXR0ciwgc3ZnUHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHtcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yIHx8IGNvbmYuY29sb3JcbiAgICAgIH0sIGNvbmYuc3R5bGUpLCBwcm9wcy5zdHlsZSksXG4gICAgICBoZWlnaHQ6IGNvbXB1dGVkU2l6ZSxcbiAgICAgIHdpZHRoOiBjb21wdXRlZFNpemUsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgfSksIHRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCB0aXRsZSksIHByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gSWNvbkNvbnRleHQgIT09IHVuZGVmaW5lZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb25mKSB7XG4gICAgcmV0dXJuIGVsZW0oY29uZik7XG4gIH0pIDogZWxlbShEZWZhdWx0Q29udGV4dCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconBase.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/iconContext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefaultContext: () => (/* binding */ DefaultContext),\n/* harmony export */   IconContext: () => (/* binding */ IconContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar DefaultContext = {\n  color: undefined,\n  size: undefined,\n  className: undefined,\n  style: undefined,\n  attr: undefined\n};\nvar IconContext = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext) && react__WEBPACK_IMPORTED_MODULE_0___default().createContext(DefaultContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWljb25zL2FsbC1maWxlcy9saWIvZXNtL2ljb25Db250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDbkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxrQkFBa0IsNERBQW1CLElBQUksMERBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0ByZWFjdC1pY29ucy9hbGwtZmlsZXMvbGliL2VzbS9pY29uQ29udGV4dC5qcz8yZTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIERlZmF1bHRDb250ZXh0ID0ge1xuICBjb2xvcjogdW5kZWZpbmVkLFxuICBzaXplOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBzdHlsZTogdW5kZWZpbmVkLFxuICBhdHRyOiB1bmRlZmluZWRcbn07XG5leHBvcnQgdmFyIEljb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCAmJiBSZWFjdC5jcmVhdGVDb250ZXh0KERlZmF1bHRDb250ZXh0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconContext.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconsManifest: () => (/* binding */ IconsManifest)\n/* harmony export */ });\nvar IconsManifest = [\n  {\n    \"id\": \"fa\",\n    \"name\": \"Font Awesome\",\n    \"projectUrl\": \"https://fontawesome.com/\",\n    \"license\": \"CC BY 4.0 License\",\n    \"licenseUrl\": \"https://creativecommons.org/licenses/by/4.0/\"\n  },\n  {\n    \"id\": \"io\",\n    \"name\": \"Ionicons 4\",\n    \"projectUrl\": \"https://ionicons.com/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/ionic-team/ionicons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"io5\",\n    \"name\": \"Ionicons 5\",\n    \"projectUrl\": \"https://ionicons.com/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/ionic-team/ionicons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"md\",\n    \"name\": \"Material Design icons\",\n    \"projectUrl\": \"http://google.github.io/material-design-icons/\",\n    \"license\": \"Apache License Version 2.0\",\n    \"licenseUrl\": \"https://github.com/google/material-design-icons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"ti\",\n    \"name\": \"Typicons\",\n    \"projectUrl\": \"http://s-ings.com/typicons/\",\n    \"license\": \"CC BY-SA 3.0\",\n    \"licenseUrl\": \"https://creativecommons.org/licenses/by-sa/3.0/\"\n  },\n  {\n    \"id\": \"go\",\n    \"name\": \"Github Octicons icons\",\n    \"projectUrl\": \"https://octicons.github.com/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/primer/octicons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"fi\",\n    \"name\": \"Feather\",\n    \"projectUrl\": \"https://feathericons.com/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/feathericons/feather/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"gi\",\n    \"name\": \"Game Icons\",\n    \"projectUrl\": \"https://game-icons.net/\",\n    \"license\": \"CC BY 3.0\",\n    \"licenseUrl\": \"https://creativecommons.org/licenses/by/3.0/\"\n  },\n  {\n    \"id\": \"wi\",\n    \"name\": \"Weather Icons\",\n    \"projectUrl\": \"https://erikflowers.github.io/weather-icons/\",\n    \"license\": \"SIL OFL 1.1\",\n    \"licenseUrl\": \"http://scripts.sil.org/OFL\"\n  },\n  {\n    \"id\": \"di\",\n    \"name\": \"Devicons\",\n    \"projectUrl\": \"https://vorillaz.github.io/devicons/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"ai\",\n    \"name\": \"Ant Design Icons\",\n    \"projectUrl\": \"https://github.com/ant-design/ant-design-icons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"bs\",\n    \"name\": \"Bootstrap Icons\",\n    \"projectUrl\": \"https://github.com/twbs/icons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"ri\",\n    \"name\": \"Remix Icon\",\n    \"projectUrl\": \"https://github.com/Remix-Design/RemixIcon\",\n    \"license\": \"Apache License Version 2.0\",\n    \"licenseUrl\": \"http://www.apache.org/licenses/\"\n  },\n  {\n    \"id\": \"fc\",\n    \"name\": \"Flat Color Icons\",\n    \"projectUrl\": \"https://github.com/icons8/flat-color-icons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"gr\",\n    \"name\": \"Grommet-Icons\",\n    \"projectUrl\": \"https://github.com/grommet/grommet-icons\",\n    \"license\": \"Apache License Version 2.0\",\n    \"licenseUrl\": \"http://www.apache.org/licenses/\"\n  },\n  {\n    \"id\": \"hi\",\n    \"name\": \"Heroicons\",\n    \"projectUrl\": \"https://github.com/refactoringui/heroicons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"si\",\n    \"name\": \"Simple Icons\",\n    \"projectUrl\": \"https://simpleicons.org/\",\n    \"license\": \"CC0 1.0 Universal\",\n    \"licenseUrl\": \"https://creativecommons.org/publicdomain/zero/1.0/\"\n  },\n  {\n    \"id\": \"im\",\n    \"name\": \"IcoMoon Free\",\n    \"projectUrl\": \"https://github.com/Keyamoon/IcoMoon-Free\",\n    \"license\": \"CC BY 4.0 License\"\n  },\n  {\n    \"id\": \"bi\",\n    \"name\": \"BoxIcons\",\n    \"projectUrl\": \"https://github.com/atisawd/boxicons\",\n    \"license\": \"CC BY 4.0 License\"\n  },\n  {\n    \"id\": \"cg\",\n    \"name\": \"css.gg\",\n    \"projectUrl\": \"https://github.com/astrit/css.gg\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"vsc\",\n    \"name\": \"VS Code Icons\",\n    \"projectUrl\": \"https://github.com/microsoft/vscode-codicons\",\n    \"license\": \"CC BY 4.0\",\n    \"licenseUrl\": \"https://creativecommons.org/licenses/by/4.0/\"\n  }\n]//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWljb25zL2FsbC1maWxlcy9saWIvZXNtL2ljb25zTWFuaWZlc3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWljb25zL2FsbC1maWxlcy9saWIvZXNtL2ljb25zTWFuaWZlc3QuanM/NGJmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEljb25zTWFuaWZlc3QgPSBbXG4gIHtcbiAgICBcImlkXCI6IFwiZmFcIixcbiAgICBcIm5hbWVcIjogXCJGb250IEF3ZXNvbWVcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpb1wiLFxuICAgIFwibmFtZVwiOiBcIklvbmljb25zIDRcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2lvbmljb25zLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpbzVcIixcbiAgICBcIm5hbWVcIjogXCJJb25pY29ucyA1XCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9pb25pY29ucy5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwibWRcIixcbiAgICBcIm5hbWVcIjogXCJNYXRlcmlhbCBEZXNpZ24gaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwOi8vZ29vZ2xlLmdpdGh1Yi5pby9tYXRlcmlhbC1kZXNpZ24taWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ0aVwiLFxuICAgIFwibmFtZVwiOiBcIlR5cGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cDovL3MtaW5ncy5jb20vdHlwaWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlktU0EgMy4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImdvXCIsXG4gICAgXCJuYW1lXCI6IFwiR2l0aHViIE9jdGljb25zIGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9vY3RpY29ucy5naXRodWIuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZXIvb2N0aWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZmlcIixcbiAgICBcIm5hbWVcIjogXCJGZWF0aGVyXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9mZWF0aGVyaWNvbnMuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0aGVyaWNvbnMvZmVhdGhlci9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJnaVwiLFxuICAgIFwibmFtZVwiOiBcIkdhbWUgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dhbWUtaWNvbnMubmV0L1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZIDMuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ3aVwiLFxuICAgIFwibmFtZVwiOiBcIldlYXRoZXIgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2VyaWtmbG93ZXJzLmdpdGh1Yi5pby93ZWF0aGVyLWljb25zL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIlNJTCBPRkwgMS4xXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImRpXCIsXG4gICAgXCJuYW1lXCI6IFwiRGV2aWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL3ZvcmlsbGF6LmdpdGh1Yi5pby9kZXZpY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYWlcIixcbiAgICBcIm5hbWVcIjogXCJBbnQgRGVzaWduIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi1pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJic1wiLFxuICAgIFwibmFtZVwiOiBcIkJvb3RzdHJhcCBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2ljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInJpXCIsXG4gICAgXCJuYW1lXCI6IFwiUmVtaXggSWNvblwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9SZW1peC1EZXNpZ24vUmVtaXhJY29uXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJmY1wiLFxuICAgIFwibmFtZVwiOiBcIkZsYXQgQ29sb3IgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaWNvbnM4L2ZsYXQtY29sb3ItaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZ3JcIixcbiAgICBcIm5hbWVcIjogXCJHcm9tbWV0LUljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyb21tZXQvZ3JvbW1ldC1pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaGlcIixcbiAgICBcIm5hbWVcIjogXCJIZXJvaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcmVmYWN0b3Jpbmd1aS9oZXJvaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwic2lcIixcbiAgICBcIm5hbWVcIjogXCJTaW1wbGUgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL3NpbXBsZWljb25zLm9yZy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQzAgMS4wIFVuaXZlcnNhbFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpbVwiLFxuICAgIFwibmFtZVwiOiBcIkljb01vb24gRnJlZVwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9LZXlhbW9vbi9JY29Nb29uLUZyZWVcIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYmlcIixcbiAgICBcIm5hbWVcIjogXCJCb3hJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hdGlzYXdkL2JveGljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wIExpY2Vuc2VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImNnXCIsXG4gICAgXCJuYW1lXCI6IFwiY3NzLmdnXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FzdHJpdC9jc3MuZ2dcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwidnNjXCIsXG4gICAgXCJuYW1lXCI6IFwiVlMgQ29kZSBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvdnNjb2RlLWNvZGljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC9cIlxuICB9XG5dIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@react-icons/all-files/lib/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefaultContext: () => (/* reexport safe */ _iconContext__WEBPACK_IMPORTED_MODULE_2__.DefaultContext),\n/* harmony export */   GenIcon: () => (/* reexport safe */ _iconBase__WEBPACK_IMPORTED_MODULE_1__.GenIcon),\n/* harmony export */   IconBase: () => (/* reexport safe */ _iconBase__WEBPACK_IMPORTED_MODULE_1__.IconBase),\n/* harmony export */   IconContext: () => (/* reexport safe */ _iconContext__WEBPACK_IMPORTED_MODULE_2__.IconContext),\n/* harmony export */   IconsManifest: () => (/* reexport safe */ _iconsManifest__WEBPACK_IMPORTED_MODULE_0__.IconsManifest)\n/* harmony export */ });\n/* harmony import */ var _iconsManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest */ \"(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js\");\n/* harmony import */ var _iconBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase */ \"(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconBase.js\");\n/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext */ \"(ssr)/./node_modules/@react-icons/all-files/lib/esm/iconContext.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWljb25zL2FsbC1maWxlcy9saWIvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWljb25zL2FsbC1maWxlcy9saWIvZXNtL2luZGV4LmpzPzhkOTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vaWNvbnNNYW5pZmVzdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaWNvbkJhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2ljb25Db250ZXh0XCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@react-icons/all-files/lib/esm/index.js\n");

/***/ })

};
;