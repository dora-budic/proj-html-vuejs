/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    contacts: [{
      family: 'fas',
      prefix: 'fa-',
      type: 'phone-alt',
      text: '+1 (305) 1234-5678',
      url: '#'
    }, {
      family: 'fas',
      prefix: 'fa-',
      type: 'envelope',
      text: 'hello@example.com',
      url: '#'
    }, {
      family: 'fas',
      prefix: 'fa-',
      type: 'map-marker-alt',
      text: 'Main Avenue, 987',
      url: '#'
    }, {
      family: 'fab',
      prefix: 'fa-',
      type: 'facebook-f',
      text: '',
      url: '#'
    }, {
      family: 'fab',
      prefix: 'fa-',
      type: 'twitter',
      text: '',
      url: '#'
    }, {
      family: 'fab',
      prefix: 'fa-',
      type: 'linkedin-in',
      text: '',
      url: '#'
    }],
    navLinks: [{
      name: 'home',
      icon: '',
      url: '#'
    }, {
      name: 'about',
      icon: '',
      url: '#'
    }, {
      name: 'services',
      icon: '',
      url: '#'
    }, {
      name: 'team',
      icon: '',
      url: '#'
    }, {
      name: 'blog',
      icon: '',
      url: '#'
    }, {
      name: 'profile',
      icon: 'far fa-user',
      url: '#'
    }, {
      name: 'get in touch',
      icon: '',
      url: '#'
    }],
    jumbtron: [{
      img: 'bg-1.jpg',
      title: 'Business Consulting',
      description: 'We drive product and service innovation, improve financial performance, accelerate market speed.'
    }, {
      img: 'bg-2.jpg',
      title: 'Financial Risk',
      description: 'The right outcomes depend on continuous rigor in governance, models, and processes across the finance function.'
    }, {
      img: 'bg-3.jpg',
      title: 'Audit & Assurance',
      description: 'Our focus is to map the technologies to solve the business transformation, offering services.'
    }],
    currentIndex: 0,
    statsInfo: [{
      number: 128,
      name: 'Certifications'
    }, {
      number: 230,
      name: 'Employees'
    }, {
      number: 517,
      name: 'Customers'
    }, {
      number: 94,
      name: 'Countries Served'
    }],
    experts: [{
      img: 'team-1.jpg',
      name: 'David Cooper',
      position: 'cto & co-founder',
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }, {
      img: 'team-3.jpg',
      name: 'Oliver Jones',
      position: 'chief procurement',
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }, {
      img: 'team-2.jpg',
      name: 'Emma Lopez',
      position: 'chief marketing',
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }, {
      img: 'team-4.jpg',
      name: 'T.Johnson',
      position: 'ceo & president',
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }],
    articles: [{
      img: 'news-1.jpg',
      author: 'Andrea Miller',
      time: '2 Days Ago',
      title: 'Increasing creativity is possible for everyone',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }, {
      img: 'news-2.jpg',
      author: 'John Smith',
      time: '9 Days Ago',
      title: 'Because market research is part of the business plan',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }, {
      img: 'news-3.jpg',
      author: 'Andrea Miller',
      time: '16 Days Ago',
      title: 'Working from home is now a trend',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }],
    aboutList: [{
      name: 'The Company',
      url: '#'
    }, {
      name: 'Institutional',
      url: '#'
    }, {
      name: 'Social & Events',
      url: '#'
    }, {
      name: 'Innovation',
      url: '#'
    }, {
      name: 'Environment',
      url: '#'
    }, {
      name: 'Technology',
      url: '#'
    }],
    servicesList: [{
      name: 'Audit & Assurance',
      url: '#'
    }, {
      name: 'Financial Advisory',
      url: '#'
    }, {
      name: 'Analytics and M&A',
      url: '#'
    }, {
      name: 'Middle Marketing',
      url: '#'
    }, {
      name: 'Legal Consulting',
      url: '#'
    }, {
      name: 'Regulatory Risk',
      url: '#'
    }],
    supportList: [{
      name: 'Responsibility',
      url: '#'
    }, {
      name: 'Terms of Use',
      url: '#'
    }, {
      name: 'About Cookies',
      url: '#'
    }, {
      name: 'Privacy Policy',
      url: '#'
    }, {
      name: 'Accessibility',
      url: '#'
    }, {
      name: 'Information',
      url: '#'
    }]
  },
  mounted: function mounted() {
    var _this = this;

    setInterval(function () {
      if (_this.currentIndex < _this.jumbtron.length - 1) {
        _this.currentIndex++;
      } else {
        _this.currentIndex = 0;
      }
    }, 10000);
  },
  methods: {
    getName: function getName(object) {
      if (object.icon != '') {
        return '';
      } else {
        return object.name;
      }
    },
    changeJumbo: function changeJumbo(index) {
      this.currentIndex = index;
    }
  }
});

/***/ }),

/***/ "./src/master.scss":
/*!*************************!*\
  !*** ./src/master.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/main": 0,
/******/ 			"dist/master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/master"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/master"], () => (__webpack_require__("./src/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;