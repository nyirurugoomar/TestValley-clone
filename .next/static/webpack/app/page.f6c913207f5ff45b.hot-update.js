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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_images_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/images.json */ \"(app-pages-browser)/./src/data/images.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction HeroSection() {\n    _s();\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth);\n    const [autoSlideInterval, setAutoSlideInterval] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        const startAutoSlide = ()=>{\n            setAutoSlideInterval(setInterval(()=>{\n                goToNextImage();\n            }, 5000) // Change the interval duration as needed\n            );\n        };\n        const stopAutoSlide = ()=>{\n            clearInterval(autoSlideInterval);\n            setAutoSlideInterval(null);\n        };\n        startAutoSlide();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            stopAutoSlide();\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        autoSlideInterval\n    ]);\n    const goToPrevImage = ()=>{\n        setCurrentImageIndex((prevIndex)=>prevIndex === 0 ? _data_images_json__WEBPACK_IMPORTED_MODULE_2__.length - 1 : prevIndex - 1);\n    };\n    const goToNextImage = ()=>{\n        setCurrentImageIndex((prevIndex)=>prevIndex === _data_images_json__WEBPACK_IMPORTED_MODULE_2__.length - 1 ? 0 : prevIndex + 1);\n    };\n    const handleDotClick = (index)=>{\n        setCurrentImageIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: goToPrevImage,\n                className: \"absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#33333380] text-white px-4 py-2 rounded-full z-10\",\n                style: {\n                    zIndex: \"1\"\n                },\n                children: \"<\"\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex transition-transform ease-in-out duration-300\",\n                style: {\n                    transform: \"translateX(-\".concat(currentImageIndex * 100 + windowWidth * 0.25 // Translate to show half of the previous image\n                    , \"%)\")\n                },\n                children: _data_images_json__WEBPACK_IMPORTED_MODULE_2__.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image.url,\n                        alt: \"Image \".concat(index),\n                        className: \"h-auto w-full object-cover\",\n                        style: {\n                            marginLeft: index === 0 ? \"-\".concat(windowWidth * 20.25, \"px\") : 0\n                        }\n                    }, index, false, {\n                        fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: goToNextImage,\n                className: \"absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#33333380] text-white px-4 py-2 rounded-full z-10\",\n                style: {\n                    zIndex: \"1\"\n                },\n                children: \">\"\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-4 left-0 right-0 flex justify-center z-10\",\n                children: _data_images_json__WEBPACK_IMPORTED_MODULE_2__.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>handleDotClick(index),\n                        className: \"w-4 h-4 rounded-full mx-2 cursor-pointer \".concat(currentImageIndex === index ? \"bg-white\" : \"bg-gray-400\")\n                    }, index, false, {\n                        fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Omar/Desktop/NEXTJS/UI challenge/valleyclone/TestValley-clone/src/components/Hero.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(HeroSection, \"hM4M0oW/jZjw0TnXm0NqqyAnjOQ=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUQ7QUFDUDtBQUU1QyxTQUFTSTs7SUFDUCxNQUFNLENBQUNDLG1CQUFtQkMscUJBQXFCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQ1EsT0FBT0MsVUFBVTtJQUNoRSxNQUFNLENBQUNDLG1CQUFtQkMscUJBQXFCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLGVBQWU7WUFDbkJMLGVBQWVDLE9BQU9DLFVBQVU7UUFDbEM7UUFFQSxNQUFNSSxpQkFBaUI7WUFDckJGLHFCQUNFRyxZQUFZO2dCQUNWQztZQUNGLEdBQUcsTUFBTSx5Q0FBeUM7O1FBRXREO1FBRUEsTUFBTUMsZ0JBQWdCO1lBQ3BCQyxjQUFjUDtZQUNkQyxxQkFBcUI7UUFDdkI7UUFFQUU7UUFFQUwsT0FBT1UsZ0JBQWdCLENBQUMsVUFBVU47UUFFbEMsT0FBTztZQUNMSTtZQUNBUixPQUFPVyxtQkFBbUIsQ0FBQyxVQUFVUDtRQUN2QztJQUNGLEdBQUc7UUFBQ0Y7S0FBa0I7SUFFdEIsTUFBTVUsZ0JBQWdCO1FBQ3BCZixxQkFBcUIsQ0FBQ2dCLFlBQ3BCQSxjQUFjLElBQUluQiw4Q0FBU0EsQ0FBQ29CLE1BQU0sR0FBRyxJQUFJRCxZQUFZO0lBRXpEO0lBRUEsTUFBTU4sZ0JBQWdCO1FBQ3BCVixxQkFBcUIsQ0FBQ2dCLFlBQ3BCQSxjQUFjbkIsOENBQVNBLENBQUNvQixNQUFNLEdBQUcsSUFBSSxJQUFJRCxZQUFZO0lBRXpEO0lBRUEsTUFBTUUsaUJBQWlCLENBQUNDO1FBQ3RCbkIscUJBQXFCbUI7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDQyxTQUFTUjtnQkFDVE0sV0FBVTtnQkFDVkcsT0FBTztvQkFDTEMsUUFBUTtnQkFDVjswQkFDRDs7Ozs7OzBCQUdELDhEQUFDTDtnQkFDQ0MsV0FBVTtnQkFDVkcsT0FBTztvQkFDTEUsV0FBVyxlQUVWLE9BREMzQixvQkFBb0IsTUFBTUUsY0FBYyxLQUFLLCtDQUErQztzQkFDN0Y7Z0JBQ0g7MEJBRUNKLDhDQUFTQSxDQUFDOEIsR0FBRyxDQUFDLENBQUNDLE9BQU9ULHNCQUNyQiw4REFBQ1U7d0JBRUNDLEtBQUtGLE1BQU1HLEdBQUc7d0JBQ2RDLEtBQUssU0FBZSxPQUFOYjt3QkFDZEUsV0FBVTt3QkFDVkcsT0FBTzs0QkFDTFMsWUFBWWQsVUFBVSxJQUFJLElBQXdCLE9BQXBCbEIsY0FBYyxPQUFNLFFBQU07d0JBQzFEO3VCQU5La0I7Ozs7Ozs7Ozs7MEJBVVgsOERBQUNHO2dCQUNDQyxTQUFTYjtnQkFDVFcsV0FBVTtnQkFDVkcsT0FBTztvQkFDTEMsUUFBUTtnQkFDVjswQkFDRDs7Ozs7OzBCQUdELDhEQUFDTDtnQkFBSUMsV0FBVTswQkFDWnhCLDhDQUFTQSxDQUFDOEIsR0FBRyxDQUFDLENBQUNPLEdBQUdmLHNCQUNqQiw4REFBQ0M7d0JBRUNHLFNBQVMsSUFBTUwsZUFBZUM7d0JBQzlCRSxXQUFXLDRDQUVWLE9BREN0QixzQkFBc0JvQixRQUFRLGFBQWE7dUJBSHhDQTs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQjtHQXRHU3JCO0tBQUFBO0FBd0dULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlcm8uanN4P2IwZDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGltYWdlRGF0YSBmcm9tIFwiLi4vZGF0YS9pbWFnZXMuanNvblwiO1xuXG5mdW5jdGlvbiBIZXJvU2VjdGlvbigpIHtcbiAgY29uc3QgW2N1cnJlbnRJbWFnZUluZGV4LCBzZXRDdXJyZW50SW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIGNvbnN0IFthdXRvU2xpZGVJbnRlcnZhbCwgc2V0QXV0b1NsaWRlSW50ZXJ2YWxdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXJ0QXV0b1NsaWRlID0gKCkgPT4ge1xuICAgICAgc2V0QXV0b1NsaWRlSW50ZXJ2YWwoXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBnb1RvTmV4dEltYWdlKCk7XG4gICAgICAgIH0sIDUwMDApIC8vIENoYW5nZSB0aGUgaW50ZXJ2YWwgZHVyYXRpb24gYXMgbmVlZGVkXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBzdG9wQXV0b1NsaWRlID0gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChhdXRvU2xpZGVJbnRlcnZhbCk7XG4gICAgICBzZXRBdXRvU2xpZGVJbnRlcnZhbChudWxsKTtcbiAgICB9O1xuXG4gICAgc3RhcnRBdXRvU2xpZGUoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3RvcEF1dG9TbGlkZSgpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbYXV0b1NsaWRlSW50ZXJ2YWxdKTtcblxuICBjb25zdCBnb1RvUHJldkltYWdlID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbWFnZUluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICBwcmV2SW5kZXggPT09IDAgPyBpbWFnZURhdGEubGVuZ3RoIC0gMSA6IHByZXZJbmRleCAtIDFcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGdvVG9OZXh0SW1hZ2UgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEltYWdlSW5kZXgoKHByZXZJbmRleCkgPT5cbiAgICAgIHByZXZJbmRleCA9PT0gaW1hZ2VEYXRhLmxlbmd0aCAtIDEgPyAwIDogcHJldkluZGV4ICsgMVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG90Q2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRDdXJyZW50SW1hZ2VJbmRleChpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtnb1RvUHJldkltYWdlfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBiZy1bIzMzMzMzMzgwXSB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgei0xMFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgJmx0O1xuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggdHJhbnNpdGlvbi10cmFuc2Zvcm0gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke1xuICAgICAgICAgICAgY3VycmVudEltYWdlSW5kZXggKiAxMDAgKyB3aW5kb3dXaWR0aCAqIDAuMjUgLy8gVHJhbnNsYXRlIHRvIHNob3cgaGFsZiBvZiB0aGUgcHJldmlvdXMgaW1hZ2VcbiAgICAgICAgICB9JSlgLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7aW1hZ2VEYXRhLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHNyYz17aW1hZ2UudXJsfVxuICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1hdXRvIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogaW5kZXggPT09IDAgPyBgLSR7d2luZG93V2lkdGggKiAyMC4yNX1weGAgOiAwLFxuICAgICAgICAgICAgfX0gLy8gQWRqdXN0IG1hcmdpbiBmb3IgdGhlIGZpcnN0IGltYWdlXG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17Z29Ub05leHRJbWFnZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiByaWdodC0wIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLVsjMzMzMzMzODBdIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCB6LTEwXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICAmZ3Q7XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC0wIHJpZ2h0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciB6LTEwXCI+XG4gICAgICAgIHtpbWFnZURhdGEubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEb3RDbGljayhpbmRleCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LTQgaC00IHJvdW5kZWQtZnVsbCBteC0yIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGN1cnJlbnRJbWFnZUluZGV4ID09PSBpbmRleCA/IFwiYmctd2hpdGVcIiA6IFwiYmctZ3JheS00MDBcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImltYWdlRGF0YSIsIkhlcm9TZWN0aW9uIiwiY3VycmVudEltYWdlSW5kZXgiLCJzZXRDdXJyZW50SW1hZ2VJbmRleCIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYXV0b1NsaWRlSW50ZXJ2YWwiLCJzZXRBdXRvU2xpZGVJbnRlcnZhbCIsImhhbmRsZVJlc2l6ZSIsInN0YXJ0QXV0b1NsaWRlIiwic2V0SW50ZXJ2YWwiLCJnb1RvTmV4dEltYWdlIiwic3RvcEF1dG9TbGlkZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdvVG9QcmV2SW1hZ2UiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJoYW5kbGVEb3RDbGljayIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiekluZGV4IiwidHJhbnNmb3JtIiwibWFwIiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJ1cmwiLCJhbHQiLCJtYXJnaW5MZWZ0IiwiXyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Hero.jsx\n"));

/***/ })

});