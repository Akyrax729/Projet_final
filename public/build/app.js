"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");







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

/**
 * CAROUSSEL
 */

// Ceci est une fonction auto - exécutable.Les fonctions auto - exécutables
// sont des fonctions qui s'exécutent immédiatement après leur déclaration,
// sans avoir besoin d'être appelées.Les accolades immédiatement après la 
// déclaration de la fonction et les parenthèses à la fin de la déclaration 
// définissent la fonction et permettent de l'exécuter immédiatement.
(function () {
  // Utilisation de la directive "use strict" pour activer le mode strict en JavaScript
  // Cela implique une meilleure gestion des erreurs et une syntaxe plus stricte pour le code
  "use stict";

  // Déclare la constante pour la durée de chaque slide
  var slideTimeout = 5000;

  // Récupère les boutons de navigation
  var prev = document.querySelector('#prev');
  var next = document.querySelector('#next');

  // Récupère tous les éléments de type "slide"
  var $slides = document.querySelectorAll('.slide');

  // Initialisation de la variable pour les "dots"
  var $dots;

  // Initialisation de la variable pour l'intervalle d'affichage des slides
  var intervalId;

  // Initialisation du slide courant à 1
  var currentSlide = 1;

  // Fonction pour afficher un slide spécifique en utilisant un index
  function slideTo(index) {
    // Vérifie si l'index est valide (compris entre 0 et le nombre de slides - 1)
    currentSlide = index >= $slides.length || index < 1 ? 0 : index;

    // Boucle sur tous les éléments de type "slide" pour les déplacer
    $slides.forEach(function ($elt) {
      return $elt.style.transform = "translateX(-".concat(currentSlide * 100, "%)");
    });

    // Boucle sur tous les "dots" pour mettre à jour la couleur par la classe "active" ou "inactive"
    $dots.forEach(function ($elt, key) {
      return $elt.classList = "dot ".concat(key === currentSlide ? 'active' : 'inactive');
    });
  }

  // Fonction pour afficher le prochain slide
  function showSlide() {
    slideTo(currentSlide);
    currentSlide++;
  }

  // Boucle pour créer les "dots" en fonction du nombre de slides
  for (var i = 1; i <= $slides.length; i++) {
    var dotClass = i == currentSlide ? 'active' : 'inactive';
    var $dot = "<span data-slidId=\"".concat(i, "\" class=\"dot ").concat(dotClass, "\"></span>");
    document.querySelector('.carousel-dots').innerHTML += $dot;
  }

  // Récupère tous les "dots"
  $dots = document.querySelectorAll('.dot');

  // Boucle pour ajouter des écouteurs d'événement "click" sur chaque "dot"
  $dots.forEach(function ($elt, key) {
    return $elt.addEventListener('click', function () {
      return slideTo(key);
    });
  });

  // Ajout d'un écouteur d'événement "click" sur le bouton "prev" pour afficher le slide précédent
  prev.addEventListener('click', function () {
    return slideTo(--currentSlide);
  });

  // Ajout d'un écouteur d'événement "click" sur le bouton "next" pour afficher le slide suivant
  next.addEventListener('click', function () {
    return slideTo(++currentSlide);
  });

  // Initialisation de l'intervalle pour afficher les slides
  intervalId = setInterval(showSlide, slideTimeout);
  // Boucle sur tous les éléments de type "slide" pour ajouter des écouteurs d'événement pour les interactions avec la souris et le toucher
  $slides.forEach(function ($elt) {
    var startX;
    var endX;
    // Efface l'intervalle d'affichage des slides lorsque la souris passe sur un slide
    $elt.addEventListener('mouseover', function () {
      clearInterval(intervalId);
    }, false);
    // Réinitialise l'intervalle d'affichage des slides lorsque la souris sort d'un slide
    $elt.addEventListener('mouseout', function () {
      intervalId = setInterval(showSlide, slideTimeout);
    }, false);
    // Enregistre la position initiale du toucher lorsque l'utilisateur touche un slide
    $elt.addEventListener('touchstart', function (event) {
      startX = event.touches[0].clientX;
    });
    // Enregistre la position finale du toucher lorsque l'utilisateur relâche son doigt
    $elt.addEventListener('touchend', function (event) {
      endX = event.changedTouches[0].clientX;
      // Si la position initiale est plus grande que la position finale, affiche le prochain slide
      if (startX > endX) {
        slideTo(currentSlide + 1);
        // Si la position initiale est plus petite que la position finale, affiche le slide précédent
      } else if (startX < endX) {
        slideTo(currentSlide - 1);
      }
    });
  });
})();

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-2b67f1"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxDQUFDO0lBQ3JELENBQUMsRUFBRSxLQUFLLENBQUM7SUFDVDtJQUNBWSxJQUFJLENBQUNoQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQzNDMkIsTUFBTSxHQUFHM0IsS0FBSyxDQUFDOEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPO0lBQ3JDLENBQUMsQ0FBQztJQUNGO0lBQ0FoQixJQUFJLENBQUNoQixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3pDNEIsSUFBSSxHQUFHNUIsS0FBSyxDQUFDZ0MsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDRCxPQUFPO01BQ3RDO01BQ0EsSUFBSUosTUFBTSxHQUFHQyxJQUFJLEVBQUU7UUFDZmpCLE9BQU8sQ0FBQ0QsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN6QjtNQUNKLENBQUMsTUFBTSxJQUFJaUIsTUFBTSxHQUFHQyxJQUFJLEVBQUU7UUFDdEJqQixPQUFPLENBQUNELFlBQVksR0FBRyxDQUFDLENBQUM7TUFDN0I7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7QUN0TEo7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcblxuXG4vKipcbiogVsOpcmlmaWUgc2kgbGUgdGjDqG1lIGVzdCBzdG9ja8OpIGRhbnMgbGUgbG9jYWxTdG9yYWdlIG91IHMnaWwgZmF1dCB1dGlsaXNlciBsZXMgcGFyYW3DqHRyZXMgcGFyIGTDqWZhdXRcbiovXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVNldHRpbmdBc1RoZW1lU3RyaW5nKHsgbG9jYWxTdG9yYWdlVGhlbWUsIHN5c3RlbVNldHRpbmdEYXJrIH0pIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlVGhlbWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2VUaGVtZTtcbiAgICB9XG5cbiAgICBpZiAoc3lzdGVtU2V0dGluZ0RhcmsubWF0Y2hlcykge1xuICAgICAgcmV0dXJuIFwiZGFya1wiO1xuICAgIH1cblxuICAgIHJldHVybiBcImxpZ2h0XCI7XG4gIH1cblxuICAvKipcbiAgKiBDaGFuZ2UgbGUgdGV4dGUgZGUgbCdpbnB1dFxuICAqL1xuICBmdW5jdGlvbiB1cGRhdGVCdXR0b24oeyBidXR0b25MRCwgaXNEYXJrIH0pIHtcbiAgICBjb25zdCBuZXdDdGEgPSBpc0RhcmsgPyBcIkxpZ2h0IHRoZW1lXCIgOiBcIkRhcmsgdGhlbWVcIjtcbiAgICBidXR0b25MRC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIG5ld0N0YSk7XG4gICAgYnV0dG9uTEQuaW5uZXJUZXh0ID0gbmV3Q3RhO1xuICB9XG5cbiAgLyoqXG4gICogRG9ubmUgbGEgY2xhc3NlIERhdGEtdGhlbWUgw6AgbCfDqWzDqW1lbnQgKGJhbGlzZSkgSFRNTFxuICAqL1xuICBmdW5jdGlvbiB1cGRhdGVUaGVtZU9uSHRtbEVsKHsgdGhlbWUgfSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgdGhlbWUpO1xuICB9XG5cblxuICAvKipcbiAgKiBPbiBwYWdlIGxvYWQ6XG4gICovXG5cbiAgLyoqXG4gICogMS4gUsOpY3Vww6hyZSBsYSB2YWxldXIgZHUgdGjDqG1lIGRhbnMgbGUgbG9jYWxTdG9yYWdlIG91IGxlcyBwYXJhbcOodHJlcyBzeXN0w6htZVxuICAqL1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGhlbWUtdG9nZ2xlXVwiKTtcbiAgY29uc3QgbG9jYWxTdG9yYWdlVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuICBjb25zdCBzeXN0ZW1TZXR0aW5nRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcblxuICAvKipcbiAgKiAyLiBNZXQgbGUgc2l0ZSBkYW5zIGxlIHRow6htZSBjb3JyZXNwb25kYW50XG4gICovXG4gIGxldCBjdXJyZW50VGhlbWVTZXR0aW5nID0gY2FsY3VsYXRlU2V0dGluZ0FzVGhlbWVTdHJpbmcoeyBsb2NhbFN0b3JhZ2VUaGVtZSwgc3lzdGVtU2V0dGluZ0RhcmsgfSk7XG5cbiAgLyoqXG4gICogMy4gTWV0IMOgIGpvdXIgbGUgdGV4dGUgZHUgYm91dG9uIGV0IGwnYXR0cmlidXQgZGF0YS10aGVtZSBkZSBsJ8OpbMOpbWVudCBIVE1MIHNpIGxlIHRow6htZSBlc3QgXCJzb21icmVcIlxuICAqL1xuICB1cGRhdGVCdXR0b24oeyBidXR0b25MRDogYnV0dG9uLCBpc0Rhcms6IGN1cnJlbnRUaGVtZVNldHRpbmcgPT09IFwiZGFya1wiIH0pO1xuICB1cGRhdGVUaGVtZU9uSHRtbEVsKHsgdGhlbWU6IGN1cnJlbnRUaGVtZVNldHRpbmcgfSk7XG5cbiAgLyoqXG4gICogNC4gQWpvdXQgZGUgbCfDqXbDqW5lbWVudCBwb3VyIGNoYW5nZXIgbGUgdGjDqG1lIGF1IGNsaWMgc3VyIGxlIGJvdXRvblxuICAqL1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld1RoZW1lID0gY3VycmVudFRoZW1lU2V0dGluZyA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIjtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3VGhlbWUpO1xuICAgIHVwZGF0ZUJ1dHRvbih7IGJ1dHRvbkxEOiBidXR0b24sIGlzRGFyazogbmV3VGhlbWUgPT09IFwiZGFya1wiIH0pO1xuICAgIHVwZGF0ZVRoZW1lT25IdG1sRWwoeyB0aGVtZTogbmV3VGhlbWUgfSk7XG5cbiAgICBjdXJyZW50VGhlbWVTZXR0aW5nID0gbmV3VGhlbWU7XG4gIH0pOyBcblxuICAvKipcbiAgICogQ0FST1VTU0VMXG4gICAqL1xuXG4vLyBDZWNpIGVzdCB1bmUgZm9uY3Rpb24gYXV0byAtIGV4w6ljdXRhYmxlLkxlcyBmb25jdGlvbnMgYXV0byAtIGV4w6ljdXRhYmxlc1xuLy8gc29udCBkZXMgZm9uY3Rpb25zIHF1aSBzJ2V4w6ljdXRlbnQgaW1tw6lkaWF0ZW1lbnQgYXByw6hzIGxldXIgZMOpY2xhcmF0aW9uLFxuLy8gc2FucyBhdm9pciBiZXNvaW4gZCfDqnRyZSBhcHBlbMOpZXMuTGVzIGFjY29sYWRlcyBpbW3DqWRpYXRlbWVudCBhcHLDqHMgbGEgXG4vLyBkw6ljbGFyYXRpb24gZGUgbGEgZm9uY3Rpb24gZXQgbGVzIHBhcmVudGjDqHNlcyDDoCBsYSBmaW4gZGUgbGEgZMOpY2xhcmF0aW9uIFxuLy8gZMOpZmluaXNzZW50IGxhIGZvbmN0aW9uIGV0IHBlcm1ldHRlbnQgZGUgbCdleMOpY3V0ZXIgaW1tw6lkaWF0ZW1lbnQuXG4oZnVuY3Rpb24gKCkge1xuICAgIC8vIFV0aWxpc2F0aW9uIGRlIGxhIGRpcmVjdGl2ZSBcInVzZSBzdHJpY3RcIiBwb3VyIGFjdGl2ZXIgbGUgbW9kZSBzdHJpY3QgZW4gSmF2YVNjcmlwdFxuICAgIC8vIENlbGEgaW1wbGlxdWUgdW5lIG1laWxsZXVyZSBnZXN0aW9uIGRlcyBlcnJldXJzIGV0IHVuZSBzeW50YXhlIHBsdXMgc3RyaWN0ZSBwb3VyIGxlIGNvZGVcbiAgICBcInVzZSBzdGljdFwiXG5cbiAgICAvLyBEw6ljbGFyZSBsYSBjb25zdGFudGUgcG91ciBsYSBkdXLDqWUgZGUgY2hhcXVlIHNsaWRlXG4gICAgY29uc3Qgc2xpZGVUaW1lb3V0ID0gNTAwMDtcblxuICAgIC8vIFLDqWN1cMOocmUgbGVzIGJvdXRvbnMgZGUgbmF2aWdhdGlvblxuICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldicpO1xuICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dCcpO1xuXG4gICAgLy8gUsOpY3Vww6hyZSB0b3VzIGxlcyDDqWzDqW1lbnRzIGRlIHR5cGUgXCJzbGlkZVwiXG4gICAgY29uc3QgJHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xuXG4gICAgLy8gSW5pdGlhbGlzYXRpb24gZGUgbGEgdmFyaWFibGUgcG91ciBsZXMgXCJkb3RzXCJcbiAgICBsZXQgJGRvdHM7XG5cbiAgICAvLyBJbml0aWFsaXNhdGlvbiBkZSBsYSB2YXJpYWJsZSBwb3VyIGwnaW50ZXJ2YWxsZSBkJ2FmZmljaGFnZSBkZXMgc2xpZGVzXG4gICAgbGV0IGludGVydmFsSWQ7XG5cbiAgICAvLyBJbml0aWFsaXNhdGlvbiBkdSBzbGlkZSBjb3VyYW50IMOgIDFcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMTtcblxuICAgIC8vIEZvbmN0aW9uIHBvdXIgYWZmaWNoZXIgdW4gc2xpZGUgc3DDqWNpZmlxdWUgZW4gdXRpbGlzYW50IHVuIGluZGV4XG4gICAgZnVuY3Rpb24gc2xpZGVUbyhpbmRleCkge1xuICAgICAgICAvLyBWw6lyaWZpZSBzaSBsJ2luZGV4IGVzdCB2YWxpZGUgKGNvbXByaXMgZW50cmUgMCBldCBsZSBub21icmUgZGUgc2xpZGVzIC0gMSlcbiAgICAgICAgY3VycmVudFNsaWRlID0gaW5kZXggPj0gJHNsaWRlcy5sZW5ndGggfHwgaW5kZXggPCAxID8gMCA6IGluZGV4O1xuXG4gICAgICAgIC8vIEJvdWNsZSBzdXIgdG91cyBsZXMgw6lsw6ltZW50cyBkZSB0eXBlIFwic2xpZGVcIiBwb3VyIGxlcyBkw6lwbGFjZXJcbiAgICAgICAgJHNsaWRlcy5mb3JFYWNoKCRlbHQgPT4gJGVsdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtjdXJyZW50U2xpZGUgKiAxMDB9JSlgKTtcblxuICAgICAgICAvLyBCb3VjbGUgc3VyIHRvdXMgbGVzIFwiZG90c1wiIHBvdXIgbWV0dHJlIMOgIGpvdXIgbGEgY291bGV1ciBwYXIgbGEgY2xhc3NlIFwiYWN0aXZlXCIgb3UgXCJpbmFjdGl2ZVwiXG4gICAgICAgICRkb3RzLmZvckVhY2goKCRlbHQsIGtleSkgPT4gJGVsdC5jbGFzc0xpc3QgPSBgZG90ICR7a2V5ID09PSBjdXJyZW50U2xpZGU/ICdhY3RpdmUnOiAnaW5hY3RpdmUnfWApO1xuICAgIH1cblxuICAgIC8vIEZvbmN0aW9uIHBvdXIgYWZmaWNoZXIgbGUgcHJvY2hhaW4gc2xpZGVcbiAgICBmdW5jdGlvbiBzaG93U2xpZGUoKSB7XG4gICAgICAgIHNsaWRlVG8oY3VycmVudFNsaWRlKTtcbiAgICAgICAgY3VycmVudFNsaWRlKys7XG4gICAgfVxuXG4gICAgLy8gQm91Y2xlIHBvdXIgY3LDqWVyIGxlcyBcImRvdHNcIiBlbiBmb25jdGlvbiBkdSBub21icmUgZGUgc2xpZGVzXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gJHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZG90Q2xhc3MgPSBpID09IGN1cnJlbnRTbGlkZSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJztcbiAgICAgICAgbGV0ICRkb3QgPSBgPHNwYW4gZGF0YS1zbGlkSWQ9XCIke2l9XCIgY2xhc3M9XCJkb3QgJHtkb3RDbGFzc31cIj48L3NwYW4+YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWRvdHMnKS5pbm5lckhUTUwgKz0gJGRvdDtcbiAgICB9XG5cbiAgICAvLyBSw6ljdXDDqHJlIHRvdXMgbGVzIFwiZG90c1wiXG4gICAgJGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XG5cbiAgICAvLyBCb3VjbGUgcG91ciBham91dGVyIGRlcyDDqWNvdXRldXJzIGQnw6l2w6luZW1lbnQgXCJjbGlja1wiIHN1ciBjaGFxdWUgXCJkb3RcIlxuICAgICRkb3RzLmZvckVhY2goKCRlbHQsIGtleSkgPT4gJGVsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNsaWRlVG8oa2V5KSkpO1xuXG4gICAgLy8gQWpvdXQgZCd1biDDqWNvdXRldXIgZCfDqXbDqW5lbWVudCBcImNsaWNrXCIgc3VyIGxlIGJvdXRvbiBcInByZXZcIiBwb3VyIGFmZmljaGVyIGxlIHNsaWRlIHByw6ljw6lkZW50XG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNsaWRlVG8oLS1jdXJyZW50U2xpZGUpKVxuXG4gICAgLy8gQWpvdXQgZCd1biDDqWNvdXRldXIgZCfDqXbDqW5lbWVudCBcImNsaWNrXCIgc3VyIGxlIGJvdXRvbiBcIm5leHRcIiBwb3VyIGFmZmljaGVyIGxlIHNsaWRlIHN1aXZhbnRcbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2xpZGVUbygrK2N1cnJlbnRTbGlkZSkpXG5cbiAgICAvLyBJbml0aWFsaXNhdGlvbiBkZSBsJ2ludGVydmFsbGUgcG91ciBhZmZpY2hlciBsZXMgc2xpZGVzXG4gICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHNob3dTbGlkZSwgc2xpZGVUaW1lb3V0KVxuICAgIC8vIEJvdWNsZSBzdXIgdG91cyBsZXMgw6lsw6ltZW50cyBkZSB0eXBlIFwic2xpZGVcIiBwb3VyIGFqb3V0ZXIgZGVzIMOpY291dGV1cnMgZCfDqXbDqW5lbWVudCBwb3VyIGxlcyBpbnRlcmFjdGlvbnMgYXZlYyBsYSBzb3VyaXMgZXQgbGUgdG91Y2hlclxuICAgICRzbGlkZXMuZm9yRWFjaCgkZWx0ID0+IHtcbiAgICAgICAgbGV0IHN0YXJ0WDtcbiAgICAgICAgbGV0IGVuZFg7XG4gICAgICAgIC8vIEVmZmFjZSBsJ2ludGVydmFsbGUgZCdhZmZpY2hhZ2UgZGVzIHNsaWRlcyBsb3JzcXVlIGxhIHNvdXJpcyBwYXNzZSBzdXIgdW4gc2xpZGVcbiAgICAgICAgJGVsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICB9LCBmYWxzZSlcbiAgICAgICAgLy8gUsOpaW5pdGlhbGlzZSBsJ2ludGVydmFsbGUgZCdhZmZpY2hhZ2UgZGVzIHNsaWRlcyBsb3JzcXVlIGxhIHNvdXJpcyBzb3J0IGQndW4gc2xpZGVcbiAgICAgICAgJGVsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChzaG93U2xpZGUsIHNsaWRlVGltZW91dCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgLy8gRW5yZWdpc3RyZSBsYSBwb3NpdGlvbiBpbml0aWFsZSBkdSB0b3VjaGVyIGxvcnNxdWUgbCd1dGlsaXNhdGV1ciB0b3VjaGUgdW4gc2xpZGVcbiAgICAgICAgJGVsdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBFbnJlZ2lzdHJlIGxhIHBvc2l0aW9uIGZpbmFsZSBkdSB0b3VjaGVyIGxvcnNxdWUgbCd1dGlsaXNhdGV1ciByZWzDomNoZSBzb24gZG9pZ3RcbiAgICAgICAgJGVsdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZW5kWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICAvLyBTaSBsYSBwb3NpdGlvbiBpbml0aWFsZSBlc3QgcGx1cyBncmFuZGUgcXVlIGxhIHBvc2l0aW9uIGZpbmFsZSwgYWZmaWNoZSBsZSBwcm9jaGFpbiBzbGlkZVxuICAgICAgICAgICAgaWYgKHN0YXJ0WCA+IGVuZFgpIHtcbiAgICAgICAgICAgICAgICBzbGlkZVRvKGN1cnJlbnRTbGlkZSArIDEpO1xuICAgICAgICAgICAgICAgIC8vIFNpIGxhIHBvc2l0aW9uIGluaXRpYWxlIGVzdCBwbHVzIHBldGl0ZSBxdWUgbGEgcG9zaXRpb24gZmluYWxlLCBhZmZpY2hlIGxlIHNsaWRlIHByw6ljw6lkZW50XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0WCA8IGVuZFgpIHtcbiAgICAgICAgICAgICAgICBzbGlkZVRvKGN1cnJlbnRTbGlkZSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxufSkoKSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiY2FsY3VsYXRlU2V0dGluZ0FzVGhlbWVTdHJpbmciLCJfcmVmIiwibG9jYWxTdG9yYWdlVGhlbWUiLCJzeXN0ZW1TZXR0aW5nRGFyayIsIm1hdGNoZXMiLCJ1cGRhdGVCdXR0b24iLCJfcmVmMiIsImJ1dHRvbkxEIiwiaXNEYXJrIiwibmV3Q3RhIiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwidXBkYXRlVGhlbWVPbkh0bWxFbCIsIl9yZWYzIiwidGhlbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImN1cnJlbnRUaGVtZVNldHRpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJuZXdUaGVtZSIsInNldEl0ZW0iLCJzbGlkZVRpbWVvdXQiLCJwcmV2IiwibmV4dCIsIiRzbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJGRvdHMiLCJpbnRlcnZhbElkIiwiY3VycmVudFNsaWRlIiwic2xpZGVUbyIsImluZGV4IiwibGVuZ3RoIiwiZm9yRWFjaCIsIiRlbHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNvbmNhdCIsImtleSIsImNsYXNzTGlzdCIsInNob3dTbGlkZSIsImkiLCJkb3RDbGFzcyIsIiRkb3QiLCJpbm5lckhUTUwiLCJzZXRJbnRlcnZhbCIsInN0YXJ0WCIsImVuZFgiLCJjbGVhckludGVydmFsIiwidG91Y2hlcyIsImNsaWVudFgiLCJjaGFuZ2VkVG91Y2hlcyJdLCJzb3VyY2VSb290IjoiIn0=