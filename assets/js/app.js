/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function() {

eval("/* -------------- BURGER MOBILE ------------- */\n//console.log('burger mobile 333');\nlet navToggle = $('#navToggle');\nlet navMenu = $('#navmenu');\n\n\nnavToggle.on('click', function(event){\n    event.preventDefault();\n    navMenu.toggleClass('open');\n    $(this).toggleClass('active');\n \n});\n\n$(window).on(\"resize, scroll\", function(){\n    navToggle.removeClass('active');\n     navMenu.removeClass('open');\n \n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/owl.js":
/*!******************************!*\
  !*** ./src/assets/js/owl.js ***!
  \******************************/
/***/ (function() {

eval("\n\t\t$(document).ready(function(){\n            $('.works-slider').owlCarousel({\n          loop:true,\n          center:true,\n          margin:100,\n          nav:false,\n          dots: true,\n          autoplay:true,\n          autoplayTimeout:5000,\n          startPosition:1,\n          responsive:{\n          0:{\n              items:1\n          },\n          600:{\n              items:2,\n              margin:30\n              \n          },\n          1000:{\n              items:3,\n              margin: 70\n          }\n          }\n          });\n\n          $('.reviews__slider').owlCarousel({\n            loop:true,\n            center:true,\n            margin:100,\n            nav:false,\n            dots: true,\n            autoplay:true,\n            autoplayTimeout:5000,\n            startPosition:1,\n            items: 1,\n            responsive:{\n                0:{\n                    items:1,\n                    margin: 150\n                },\n                600:{\n                    items:1\n                    \n                },\n                1000:{\n                    items:1\n                }\n                }\n            })\n      });\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/owl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/owl.js"]();
/******/ 	
/******/ })()
;