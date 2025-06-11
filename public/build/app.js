"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */




console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/**
* Vérifie si le thème est stocké dans le localStorage ou s'il faut utiliser les paramètres par défaut
*/
function calculateSettingAsThemeString(_ref) {
  var localStorageTheme = _ref.localStorageTheme,
    systemSettingDark = _ref.systemSettingDark;
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}

/**
* Change le texte de l'input
*/
function updateButton(_ref2) {
  var buttonLD = _ref2.buttonLD,
    isDark = _ref2.isDark;
  var newCta = isDark ? "Light theme" : "Dark theme";
  buttonLD.setAttribute("aria-label", newCta);
  buttonLD.innerText = newCta;
}

/**
* Donne la classe Data-theme à l'élément (balise) HTML
*/
function updateThemeOnHtmlEl(_ref3) {
  var theme = _ref3.theme;
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
* On page load:
*/

/**
* 1. Récupère la valeur du thème dans le localStorage ou les paramètres système
*/
var button = document.querySelector("[data-theme-toggle]");
var localStorageTheme = localStorage.getItem("theme");
var systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
* 2. Met le site dans le thème correspondant
*/
var currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme: localStorageTheme,
  systemSettingDark: systemSettingDark
});

/**
* 3. Met à jour le texte du bouton et l'attribut data-theme de l'élément HTML si le thème est "sombre"
*/
updateButton({
  buttonLD: button,
  isDark: currentThemeSetting === "dark"
});
updateThemeOnHtmlEl({
  theme: currentThemeSetting
});

/**
* 4. Ajout de l'événement pour changer le thème au clic sur le bouton
*/
button.addEventListener("click", function (event) {
  var newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  updateButton({
    buttonLD: button,
    isDark: newTheme === "dark"
  });
  updateThemeOnHtmlEl({
    theme: newTheme
  });
  currentThemeSetting = newTheme;
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-8e93d7"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzZCO0FBQ047QUFDdEI7QUFFM0JBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDOztBQUc3RTtBQUNBO0FBQ0E7QUFDRSxTQUFTQyw2QkFBNkJBLENBQUFDLElBQUEsRUFBMkM7RUFBQSxJQUF4Q0MsaUJBQWlCLEdBQUFELElBQUEsQ0FBakJDLGlCQUFpQjtJQUFFQyxpQkFBaUIsR0FBQUYsSUFBQSxDQUFqQkUsaUJBQWlCO0VBQzNFLElBQUlELGlCQUFpQixLQUFLLElBQUksRUFBRTtJQUM5QixPQUFPQSxpQkFBaUI7RUFDMUI7RUFFQSxJQUFJQyxpQkFBaUIsQ0FBQ0MsT0FBTyxFQUFFO0lBQzdCLE9BQU8sTUFBTTtFQUNmO0VBRUEsT0FBTyxPQUFPO0FBQ2hCOztBQUVBO0FBQ0Y7QUFDQTtBQUNFLFNBQVNDLFlBQVlBLENBQUFDLEtBQUEsRUFBdUI7RUFBQSxJQUFwQkMsUUFBUSxHQUFBRCxLQUFBLENBQVJDLFFBQVE7SUFBRUMsTUFBTSxHQUFBRixLQUFBLENBQU5FLE1BQU07RUFDdEMsSUFBTUMsTUFBTSxHQUFHRCxNQUFNLEdBQUcsYUFBYSxHQUFHLFlBQVk7RUFDcERELFFBQVEsQ0FBQ0csWUFBWSxDQUFDLFlBQVksRUFBRUQsTUFBTSxDQUFDO0VBQzNDRixRQUFRLENBQUNJLFNBQVMsR0FBR0YsTUFBTTtBQUM3Qjs7QUFFQTtBQUNGO0FBQ0E7QUFDRSxTQUFTRyxtQkFBbUJBLENBQUFDLEtBQUEsRUFBWTtFQUFBLElBQVRDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQ2xDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ04sWUFBWSxDQUFDLFlBQVksRUFBRUksS0FBSyxDQUFDO0FBQ2xFOztBQUdBO0FBQ0Y7QUFDQTs7QUFFRTtBQUNGO0FBQ0E7QUFDRSxJQUFNRyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQzVELElBQU1kLGlCQUFpQixHQUFHZ0IsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3ZELElBQU1oQixpQkFBaUIsR0FBR2lCLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLDhCQUE4QixDQUFDOztBQUUzRTtBQUNGO0FBQ0E7QUFDRSxJQUFJQyxtQkFBbUIsR0FBR3RCLDZCQUE2QixDQUFDO0VBQUVFLGlCQUFpQixFQUFqQkEsaUJBQWlCO0VBQUVDLGlCQUFpQixFQUFqQkE7QUFBa0IsQ0FBQyxDQUFDOztBQUVqRztBQUNGO0FBQ0E7QUFDRUUsWUFBWSxDQUFDO0VBQUVFLFFBQVEsRUFBRVUsTUFBTTtFQUFFVCxNQUFNLEVBQUVjLG1CQUFtQixLQUFLO0FBQU8sQ0FBQyxDQUFDO0FBQzFFVixtQkFBbUIsQ0FBQztFQUFFRSxLQUFLLEVBQUVRO0FBQW9CLENBQUMsQ0FBQzs7QUFFbkQ7QUFDRjtBQUNBO0FBQ0VMLE1BQU0sQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUMxQyxJQUFNQyxRQUFRLEdBQUdILG1CQUFtQixLQUFLLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtFQUVsRUosWUFBWSxDQUFDUSxPQUFPLENBQUMsT0FBTyxFQUFFRCxRQUFRLENBQUM7RUFDdkNwQixZQUFZLENBQUM7SUFBRUUsUUFBUSxFQUFFVSxNQUFNO0lBQUVULE1BQU0sRUFBRWlCLFFBQVEsS0FBSztFQUFPLENBQUMsQ0FBQztFQUMvRGIsbUJBQW1CLENBQUM7SUFBRUUsS0FBSyxFQUFFVztFQUFTLENBQUMsQ0FBQztFQUV4Q0gsbUJBQW1CLEdBQUdHLFFBQVE7QUFDaEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2hGSjs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcblxuXG4vKipcbiogVsOpcmlmaWUgc2kgbGUgdGjDqG1lIGVzdCBzdG9ja8OpIGRhbnMgbGUgbG9jYWxTdG9yYWdlIG91IHMnaWwgZmF1dCB1dGlsaXNlciBsZXMgcGFyYW3DqHRyZXMgcGFyIGTDqWZhdXRcbiovXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVNldHRpbmdBc1RoZW1lU3RyaW5nKHsgbG9jYWxTdG9yYWdlVGhlbWUsIHN5c3RlbVNldHRpbmdEYXJrIH0pIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlVGhlbWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2VUaGVtZTtcbiAgICB9XG5cbiAgICBpZiAoc3lzdGVtU2V0dGluZ0RhcmsubWF0Y2hlcykge1xuICAgICAgcmV0dXJuIFwiZGFya1wiO1xuICAgIH1cblxuICAgIHJldHVybiBcImxpZ2h0XCI7XG4gIH1cblxuICAvKipcbiAgKiBDaGFuZ2UgbGUgdGV4dGUgZGUgbCdpbnB1dFxuICAqL1xuICBmdW5jdGlvbiB1cGRhdGVCdXR0b24oeyBidXR0b25MRCwgaXNEYXJrIH0pIHtcbiAgICBjb25zdCBuZXdDdGEgPSBpc0RhcmsgPyBcIkxpZ2h0IHRoZW1lXCIgOiBcIkRhcmsgdGhlbWVcIjtcbiAgICBidXR0b25MRC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIG5ld0N0YSk7XG4gICAgYnV0dG9uTEQuaW5uZXJUZXh0ID0gbmV3Q3RhO1xuICB9XG5cbiAgLyoqXG4gICogRG9ubmUgbGEgY2xhc3NlIERhdGEtdGhlbWUgw6AgbCfDqWzDqW1lbnQgKGJhbGlzZSkgSFRNTFxuICAqL1xuICBmdW5jdGlvbiB1cGRhdGVUaGVtZU9uSHRtbEVsKHsgdGhlbWUgfSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgdGhlbWUpO1xuICB9XG5cblxuICAvKipcbiAgKiBPbiBwYWdlIGxvYWQ6XG4gICovXG5cbiAgLyoqXG4gICogMS4gUsOpY3Vww6hyZSBsYSB2YWxldXIgZHUgdGjDqG1lIGRhbnMgbGUgbG9jYWxTdG9yYWdlIG91IGxlcyBwYXJhbcOodHJlcyBzeXN0w6htZVxuICAqL1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGhlbWUtdG9nZ2xlXVwiKTtcbiAgY29uc3QgbG9jYWxTdG9yYWdlVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuICBjb25zdCBzeXN0ZW1TZXR0aW5nRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcblxuICAvKipcbiAgKiAyLiBNZXQgbGUgc2l0ZSBkYW5zIGxlIHRow6htZSBjb3JyZXNwb25kYW50XG4gICovXG4gIGxldCBjdXJyZW50VGhlbWVTZXR0aW5nID0gY2FsY3VsYXRlU2V0dGluZ0FzVGhlbWVTdHJpbmcoeyBsb2NhbFN0b3JhZ2VUaGVtZSwgc3lzdGVtU2V0dGluZ0RhcmsgfSk7XG5cbiAgLyoqXG4gICogMy4gTWV0IMOgIGpvdXIgbGUgdGV4dGUgZHUgYm91dG9uIGV0IGwnYXR0cmlidXQgZGF0YS10aGVtZSBkZSBsJ8OpbMOpbWVudCBIVE1MIHNpIGxlIHRow6htZSBlc3QgXCJzb21icmVcIlxuICAqL1xuICB1cGRhdGVCdXR0b24oeyBidXR0b25MRDogYnV0dG9uLCBpc0Rhcms6IGN1cnJlbnRUaGVtZVNldHRpbmcgPT09IFwiZGFya1wiIH0pO1xuICB1cGRhdGVUaGVtZU9uSHRtbEVsKHsgdGhlbWU6IGN1cnJlbnRUaGVtZVNldHRpbmcgfSk7XG5cbiAgLyoqXG4gICogNC4gQWpvdXQgZGUgbCfDqXbDqW5lbWVudCBwb3VyIGNoYW5nZXIgbGUgdGjDqG1lIGF1IGNsaWMgc3VyIGxlIGJvdXRvblxuICAqL1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld1RoZW1lID0gY3VycmVudFRoZW1lU2V0dGluZyA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIjtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3VGhlbWUpO1xuICAgIHVwZGF0ZUJ1dHRvbih7IGJ1dHRvbkxEOiBidXR0b24sIGlzRGFyazogbmV3VGhlbWUgPT09IFwiZGFya1wiIH0pO1xuICAgIHVwZGF0ZVRoZW1lT25IdG1sRWwoeyB0aGVtZTogbmV3VGhlbWUgfSk7XG5cbiAgICBjdXJyZW50VGhlbWVTZXR0aW5nID0gbmV3VGhlbWU7XG4gIH0pOyBcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiY2FsY3VsYXRlU2V0dGluZ0FzVGhlbWVTdHJpbmciLCJfcmVmIiwibG9jYWxTdG9yYWdlVGhlbWUiLCJzeXN0ZW1TZXR0aW5nRGFyayIsIm1hdGNoZXMiLCJ1cGRhdGVCdXR0b24iLCJfcmVmMiIsImJ1dHRvbkxEIiwiaXNEYXJrIiwibmV3Q3RhIiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwidXBkYXRlVGhlbWVPbkh0bWxFbCIsIl9yZWYzIiwidGhlbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImN1cnJlbnRUaGVtZVNldHRpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJuZXdUaGVtZSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9