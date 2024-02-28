"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Hero.jsx":
/*!*********************************!*\
  !*** ./src/components/Hero.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_images_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/images.json */ \"(app-pages-browser)/./src/data/images.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction HeroSection() {\n    _s();\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    const goToPrevImage = ()=>{\n        setCurrentImageIndex((prevIndex)=>prevIndex === 0 ? _data_images_json__WEBPACK_IMPORTED_MODULE_2__.length - 1 : prevIndex - 1);\n    };\n    const goToNextImage = ()=>{\n        setCurrentImageIndex((prevIndex)=>prevIndex === _data_images_json__WEBPACK_IMPORTED_MODULE_2__.length - 1 ? 0 : prevIndex + 1);\n    };\n    const imageWidth = windowWidth > 768 ? \"50%\" : \"80%\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-scroll flex items-center justify-center mt-4 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: goToPrevImage,\n                className: \"absolute left-0 bg-[#33333380] text-white px-4 py-2 rounded-full\",\n                style: {\n                    left: \"5rem\",\n                    zIndex: \"1\"\n                },\n                children: \"<\"\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex transition-transform ease-in-out duration-300 gap-4\",\n                style: {\n                    transform: \"translateX(-\".concat(currentImageIndex * (windowWidth > 768 ? 650 : windowWidth * 0.8), \"px)\")\n                },\n                children: _data_images_json__WEBPACK_IMPORTED_MODULE_2__.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image.url,\n                        alt: \"Image \".concat(index),\n                        className: \"h-full px-4\",\n                        style: {\n                            width: imageWidth\n                        }\n                    }, index, false, {\n                        fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: goToNextImage,\n                className: \"absolute bg-[#33333380] text-white px-4 py-2 rounded-full\",\n                style: {\n                    right: \"5rem\",\n                    zIndex: \"1\"\n                },\n                children: \">\"\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(HeroSection, \"LrktzoHdPpssJ8OR8MB8o18sx4w=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUQ7QUFDUDtBQUU1QyxTQUFTSTs7SUFDUCxNQUFNLENBQUNDLG1CQUFtQkMscUJBQXFCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQ1EsT0FBT0MsVUFBVTtJQUVoRVIsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxlQUFlO1lBQ25CSCxlQUFlQyxPQUFPQyxVQUFVO1FBQ2xDO1FBRUFELE9BQU9HLGdCQUFnQixDQUFDLFVBQVVEO1FBRWxDLE9BQU87WUFDTEYsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUY7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRyxnQkFBZ0I7UUFDcEJSLHFCQUFxQixDQUFDUyxZQUNwQkEsY0FBYyxJQUFJWiw4Q0FBU0EsQ0FBQ2EsTUFBTSxHQUFHLElBQUlELFlBQVk7SUFFekQ7SUFFQSxNQUFNRSxnQkFBZ0I7UUFDcEJYLHFCQUFxQixDQUFDUyxZQUNwQkEsY0FBY1osOENBQVNBLENBQUNhLE1BQU0sR0FBRyxJQUFJLElBQUlELFlBQVk7SUFFekQ7SUFFQSxNQUFNRyxhQUFhWCxjQUFjLE1BQU0sUUFBUTtJQUUvQyxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDQyxTQUFTUjtnQkFDVE0sV0FBVTtnQkFDVkcsT0FBTztvQkFDTEMsTUFBTTtvQkFDTkMsUUFBUTtnQkFDVjswQkFDRDs7Ozs7OzBCQUdELDhEQUFDTjtnQkFDQ0MsV0FBVTtnQkFDVkcsT0FBTztvQkFDTEcsV0FBVyxlQUVWLE9BRENyQixvQkFBcUJFLENBQUFBLGNBQWMsTUFBTSxNQUFNQSxjQUFjLEdBQUUsR0FDaEU7Z0JBQ0g7MEJBRUNKLDhDQUFTQSxDQUFDd0IsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNyQiw4REFBQ0M7d0JBRUNDLEtBQUtILE1BQU1JLEdBQUc7d0JBQ2RDLEtBQUssU0FBZSxPQUFOSjt3QkFDZFQsV0FBVTt3QkFDVkcsT0FBTzs0QkFBRVcsT0FBT2hCO3dCQUFXO3VCQUp0Qlc7Ozs7Ozs7Ozs7MEJBUVgsOERBQUNSO2dCQUNDQyxTQUFTTDtnQkFDVEcsV0FBVTtnQkFDVkcsT0FBTztvQkFDTFksT0FBTztvQkFDUFYsUUFBUTtnQkFDVjswQkFDRDs7Ozs7Ozs7Ozs7O0FBS1A7R0F4RVNyQjtLQUFBQTtBQTBFVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZXJvLmpzeD9iMGQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbWFnZURhdGEgZnJvbSBcIi4uL2RhdGEvaW1hZ2VzLmpzb25cIjtcblxuZnVuY3Rpb24gSGVyb1NlY3Rpb24oKSB7XG4gIGNvbnN0IFtjdXJyZW50SW1hZ2VJbmRleCwgc2V0Q3VycmVudEltYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdvVG9QcmV2SW1hZ2UgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEltYWdlSW5kZXgoKHByZXZJbmRleCkgPT5cbiAgICAgIHByZXZJbmRleCA9PT0gMCA/IGltYWdlRGF0YS5sZW5ndGggLSAxIDogcHJldkluZGV4IC0gMVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub05leHRJbWFnZSA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW1hZ2VJbmRleCgocHJldkluZGV4KSA9PlxuICAgICAgcHJldkluZGV4ID09PSBpbWFnZURhdGEubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBpbWFnZVdpZHRoID0gd2luZG93V2lkdGggPiA3NjggPyBcIjUwJVwiIDogXCI4MCVcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1zY3JvbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNCBweC00XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2dvVG9QcmV2SW1hZ2V9XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBiZy1bIzMzMzMzMzgwXSB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGxcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGxlZnQ6IFwiNXJlbVwiLCAvLyBBZGp1c3QgYXMgbmVlZGVkXG4gICAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgJmx0O1xuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggdHJhbnNpdGlvbi10cmFuc2Zvcm0gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIGdhcC00XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke1xuICAgICAgICAgICAgY3VycmVudEltYWdlSW5kZXggKiAod2luZG93V2lkdGggPiA3NjggPyA2NTAgOiB3aW5kb3dXaWR0aCAqIDAuOClcbiAgICAgICAgICB9cHgpYCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2ltYWdlRGF0YS5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzcmM9e2ltYWdlLnVybH1cbiAgICAgICAgICAgIGFsdD17YEltYWdlICR7aW5kZXh9YH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBweC00XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBpbWFnZVdpZHRoIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17Z29Ub05leHRJbWFnZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctWyMzMzMzMzM4MF0gdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICByaWdodDogXCI1cmVtXCIsIC8vIEFkanVzdCBhcyBuZWVkZWRcbiAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICAmZ3Q7XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImltYWdlRGF0YSIsIkhlcm9TZWN0aW9uIiwiY3VycmVudEltYWdlSW5kZXgiLCJzZXRDdXJyZW50SW1hZ2VJbmRleCIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnb1RvUHJldkltYWdlIiwicHJldkluZGV4IiwibGVuZ3RoIiwiZ29Ub05leHRJbWFnZSIsImltYWdlV2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJsZWZ0IiwiekluZGV4IiwidHJhbnNmb3JtIiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImltZyIsInNyYyIsInVybCIsImFsdCIsIndpZHRoIiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Hero.jsx\n"));

/***/ })

});