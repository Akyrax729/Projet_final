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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzZCO0FBQ047QUFDdEI7QUFFM0JBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDOztBQUc3RTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyw2QkFBNkJBLENBQUFDLElBQUEsRUFBMkM7RUFBQSxJQUF4Q0MsaUJBQWlCLEdBQUFELElBQUEsQ0FBakJDLGlCQUFpQjtJQUFFQyxpQkFBaUIsR0FBQUYsSUFBQSxDQUFqQkUsaUJBQWlCO0VBQzNFLElBQUlELGlCQUFpQixLQUFLLElBQUksRUFBRTtJQUM5QixPQUFPQSxpQkFBaUI7RUFDMUI7RUFFQSxJQUFJQyxpQkFBaUIsQ0FBQ0MsT0FBTyxFQUFFO0lBQzdCLE9BQU8sTUFBTTtFQUNmO0VBRUEsT0FBTyxPQUFPO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLFlBQVlBLENBQUFDLEtBQUEsRUFBdUI7RUFBQSxJQUFwQkMsUUFBUSxHQUFBRCxLQUFBLENBQVJDLFFBQVE7SUFBRUMsTUFBTSxHQUFBRixLQUFBLENBQU5FLE1BQU07RUFDdEMsSUFBTUMsTUFBTSxHQUFHRCxNQUFNLEdBQUcsYUFBYSxHQUFHLFlBQVk7RUFDcERELFFBQVEsQ0FBQ0csWUFBWSxDQUFDLFlBQVksRUFBRUQsTUFBTSxDQUFDO0VBQzNDRixRQUFRLENBQUNJLFNBQVMsR0FBR0YsTUFBTTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTRyxtQkFBbUJBLENBQUFDLEtBQUEsRUFBWTtFQUFBLElBQVRDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQ2xDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ04sWUFBWSxDQUFDLFlBQVksRUFBRUksS0FBSyxDQUFDO0FBQ2xFOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFNRyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQzVELElBQU1kLGlCQUFpQixHQUFHZ0IsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3ZELElBQU1oQixpQkFBaUIsR0FBR2lCLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLDhCQUE4QixDQUFDOztBQUUzRTtBQUNBO0FBQ0E7QUFDQSxJQUFJQyxtQkFBbUIsR0FBR3RCLDZCQUE2QixDQUFDO0VBQUVFLGlCQUFpQixFQUFqQkEsaUJBQWlCO0VBQUVDLGlCQUFpQixFQUFqQkE7QUFBa0IsQ0FBQyxDQUFDOztBQUVqRztBQUNBO0FBQ0E7QUFDQUUsWUFBWSxDQUFDO0VBQUVFLFFBQVEsRUFBRVUsTUFBTTtFQUFFVCxNQUFNLEVBQUVjLG1CQUFtQixLQUFLO0FBQU8sQ0FBQyxDQUFDO0FBQzFFVixtQkFBbUIsQ0FBQztFQUFFRSxLQUFLLEVBQUVRO0FBQW9CLENBQUMsQ0FBQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0FMLE1BQU0sQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUMxQyxJQUFNQyxRQUFRLEdBQUdILG1CQUFtQixLQUFLLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtFQUVsRUosWUFBWSxDQUFDUSxPQUFPLENBQUMsT0FBTyxFQUFFRCxRQUFRLENBQUM7RUFDdkNwQixZQUFZLENBQUM7SUFBRUUsUUFBUSxFQUFFVSxNQUFNO0lBQUVULE1BQU0sRUFBRWlCLFFBQVEsS0FBSztFQUFPLENBQUMsQ0FBQztFQUMvRGIsbUJBQW1CLENBQUM7SUFBRUUsS0FBSyxFQUFFVztFQUFTLENBQUMsQ0FBQztFQUV4Q0gsbUJBQW1CLEdBQUdHLFFBQVE7QUFDaEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2hGRjs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcblxuXG4vKipcbiogVsOpcmlmaWUgc2kgbGUgdGjDqG1lIGVzdCBzdG9ja8OpIGRhbnMgbGUgbG9jYWxTdG9yYWdlIG91IHMnaWwgZmF1dCB1dGlsaXNlciBsZXMgcGFyYW3DqHRyZXMgcGFyIGTDqWZhdXRcbiovXG5mdW5jdGlvbiBjYWxjdWxhdGVTZXR0aW5nQXNUaGVtZVN0cmluZyh7IGxvY2FsU3RvcmFnZVRoZW1lLCBzeXN0ZW1TZXR0aW5nRGFyayB9KSB7XG4gIGlmIChsb2NhbFN0b3JhZ2VUaGVtZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VUaGVtZTtcbiAgfVxuXG4gIGlmIChzeXN0ZW1TZXR0aW5nRGFyay5tYXRjaGVzKSB7XG4gICAgcmV0dXJuIFwiZGFya1wiO1xuICB9XG5cbiAgcmV0dXJuIFwibGlnaHRcIjtcbn1cblxuLyoqXG4qIENoYW5nZSBsZSB0ZXh0ZSBkZSBsJ2lucHV0XG4qL1xuZnVuY3Rpb24gdXBkYXRlQnV0dG9uKHsgYnV0dG9uTEQsIGlzRGFyayB9KSB7XG4gIGNvbnN0IG5ld0N0YSA9IGlzRGFyayA/IFwiTGlnaHQgdGhlbWVcIiA6IFwiRGFyayB0aGVtZVwiO1xuICBidXR0b25MRC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIG5ld0N0YSk7XG4gIGJ1dHRvbkxELmlubmVyVGV4dCA9IG5ld0N0YTtcbn1cblxuLyoqXG4qIERvbm5lIGxhIGNsYXNzZSBEYXRhLXRoZW1lIMOgIGwnw6lsw6ltZW50IChiYWxpc2UpIEhUTUxcbiovXG5mdW5jdGlvbiB1cGRhdGVUaGVtZU9uSHRtbEVsKHsgdGhlbWUgfSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIHRoZW1lKTtcbn1cblxuXG4vKipcbiogT24gcGFnZSBsb2FkOlxuKi9cblxuLyoqXG4qIDEuIFLDqWN1cMOocmUgbGEgdmFsZXVyIGR1IHRow6htZSBkYW5zIGxlIGxvY2FsU3RvcmFnZSBvdSBsZXMgcGFyYW3DqHRyZXMgc3lzdMOobWVcbiovXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGhlbWUtdG9nZ2xlXVwiKTtcbmNvbnN0IGxvY2FsU3RvcmFnZVRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcbmNvbnN0IHN5c3RlbVNldHRpbmdEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xuXG4vKipcbiogMi4gTWV0IGxlIHNpdGUgZGFucyBsZSB0aMOobWUgY29ycmVzcG9uZGFudFxuKi9cbmxldCBjdXJyZW50VGhlbWVTZXR0aW5nID0gY2FsY3VsYXRlU2V0dGluZ0FzVGhlbWVTdHJpbmcoeyBsb2NhbFN0b3JhZ2VUaGVtZSwgc3lzdGVtU2V0dGluZ0RhcmsgfSk7XG5cbi8qKlxuKiAzLiBNZXQgw6Agam91ciBsZSB0ZXh0ZSBkdSBib3V0b24gZXQgbCdhdHRyaWJ1dCBkYXRhLXRoZW1lIGRlIGwnw6lsw6ltZW50IEhUTUwgc2kgbGUgdGjDqG1lIGVzdCBcInNvbWJyZVwiXG4qL1xudXBkYXRlQnV0dG9uKHsgYnV0dG9uTEQ6IGJ1dHRvbiwgaXNEYXJrOiBjdXJyZW50VGhlbWVTZXR0aW5nID09PSBcImRhcmtcIiB9KTtcbnVwZGF0ZVRoZW1lT25IdG1sRWwoeyB0aGVtZTogY3VycmVudFRoZW1lU2V0dGluZyB9KTtcblxuLyoqXG4qIDQuIEFqb3V0IGRlIGwnw6l2w6luZW1lbnQgcG91ciBjaGFuZ2VyIGxlIHRow6htZSBhdSBjbGljIHN1ciBsZSBib3V0b25cbiovXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBjb25zdCBuZXdUaGVtZSA9IGN1cnJlbnRUaGVtZVNldHRpbmcgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBuZXdUaGVtZSk7XG4gIHVwZGF0ZUJ1dHRvbih7IGJ1dHRvbkxEOiBidXR0b24sIGlzRGFyazogbmV3VGhlbWUgPT09IFwiZGFya1wiIH0pO1xuICB1cGRhdGVUaGVtZU9uSHRtbEVsKHsgdGhlbWU6IG5ld1RoZW1lIH0pO1xuXG4gIGN1cnJlbnRUaGVtZVNldHRpbmcgPSBuZXdUaGVtZTtcbn0pOyBcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiY2FsY3VsYXRlU2V0dGluZ0FzVGhlbWVTdHJpbmciLCJfcmVmIiwibG9jYWxTdG9yYWdlVGhlbWUiLCJzeXN0ZW1TZXR0aW5nRGFyayIsIm1hdGNoZXMiLCJ1cGRhdGVCdXR0b24iLCJfcmVmMiIsImJ1dHRvbkxEIiwiaXNEYXJrIiwibmV3Q3RhIiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwidXBkYXRlVGhlbWVPbkh0bWxFbCIsIl9yZWYzIiwidGhlbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImN1cnJlbnRUaGVtZVNldHRpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJuZXdUaGVtZSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9