webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.tsx");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/more-stories */ "./components/more-stories.tsx");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero-post */ "./components/hero-post.tsx");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/intro */ "./components/intro.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.ts");
var _this = undefined,
    _jsxFileName = "D:\\workspace_nextjs\\myblog-bynextjs\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Index = function Index(_ref) {
  var allPosts = _ref.allPosts;
  var heroPost = allPosts[0];
  var morePosts = allPosts.slice(1);
  var cmsurl = 'https://myblog-nextjs.microcms.io/api/v1/blog';
  /*
  const fetcher = (
    message: {contents: {
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      excerpt: string,
      date: string,
      slug: string,
      blogtext: string,
    }}) => fetch(cmsurl, {
      method: 'GET',
      headers : {
        'X-API=KEY':"c2bf30d3-1da2-45a3-8327-b992b9006af3"
      }
    }).then(res => res.json());
   const {data, error} = useSWR(cmsurl, fetcher)
  */

  var fetcher = function fetcher(url) {
    return fetch("https://api.github.com/users/facebook/repos").then(function (res) {
      return res.json();
    });
  };

  var _usrSWR = usrSWR("https://api.github.com/users/facebook/repos", fetcher),
      data = _usrSWR.data,
      error = _usrSWR.error;

  if (!data) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "loading...");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_7__["CMS_NAME"])), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), heroPost && __jsx(_components_hero_post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: heroPost.title,
    coverImage: heroPost.coverImage,
    date: heroPost.date,
    author: heroPost.author,
    slug: heroPost.slug,
    excerpt: heroPost.excerpt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), morePosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: morePosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 36
    }
  }))));
};

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJjbXN1cmwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInVzclNXUiIsImRhdGEiLCJlcnJvciIsIkNNU19OQU1FIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsInNsdWciLCJleGNlcnB0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBUUEsSUFBTUEsS0FBc0IsR0FBRyxTQUF6QkEsS0FBeUIsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDL0MsTUFBTUMsUUFBUSxHQUFHRCxRQUFRLENBQUMsQ0FBRCxDQUF6QjtBQUNBLE1BQU1FLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxLQUFULENBQWUsQ0FBZixDQUFsQjtBQUVBLE1BQU1DLE1BQU0sR0FBRywrQ0FBZjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUNkQyxHQURjO0FBQUEsV0FFWEMsS0FBSyxDQUFDLDZDQUFELENBQUwsQ0FBcURDLElBQXJELENBQTBELFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBQTdELENBRlc7QUFBQSxHQUFoQjs7QUEzQitDLGdCQThCekJDLE1BQU0sQ0FBQyw2Q0FBRCxFQUFnRE4sT0FBaEQsQ0E5Qm1CO0FBQUEsTUE4QnhDTyxJQTlCd0MsV0E4QnhDQSxJQTlCd0M7QUFBQSxNQThCbENDLEtBOUJrQyxXQThCbENBLEtBOUJrQzs7QUErQi9DLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUVYLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBa0NFLHVEQUFsQyxDQURGLENBREYsRUFJRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHYixRQUFRLElBQ1AsTUFBQyw2REFBRDtBQUNFLFNBQUssRUFBRUEsUUFBUSxDQUFDYyxLQURsQjtBQUVFLGNBQVUsRUFBRWQsUUFBUSxDQUFDZSxVQUZ2QjtBQUdFLFFBQUksRUFBRWYsUUFBUSxDQUFDZ0IsSUFIakI7QUFJRSxVQUFNLEVBQUVoQixRQUFRLENBQUNpQixNQUpuQjtBQUtFLFFBQUksRUFBRWpCLFFBQVEsQ0FBQ2tCLElBTGpCO0FBTUUsV0FBTyxFQUFFbEIsUUFBUSxDQUFDbUIsT0FOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBWUdsQixTQUFTLENBQUNtQixNQUFWLEdBQW1CLENBQW5CLElBQXdCLE1BQUMsZ0VBQUQ7QUFBYSxTQUFLLEVBQUVuQixTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWjNCLENBSkYsQ0FERixDQURGO0FBdUJELENBeEREOztLQUFNSCxLOztBQTBEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjJiNTg1ZWU4MGY2OTJiMTEzNGNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IE1vcmVTdG9yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzJ1xuaW1wb3J0IEhlcm9Qb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby1wb3N0J1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICcuLi9saWIvYXBpJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ01TX05BTUUgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vdHlwZXMvcG9zdCdcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG50eXBlIFByb3BzID0ge1xuICBhbGxQb3N0czogUG9zdFtdXG59XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBhbGxQb3N0cyB9KSA9PiB7XG4gIGNvbnN0IGhlcm9Qb3N0ID0gYWxsUG9zdHNbMF1cbiAgY29uc3QgbW9yZVBvc3RzID0gYWxsUG9zdHMuc2xpY2UoMSlcblxuICBjb25zdCBjbXN1cmwgPSAnaHR0cHM6Ly9teWJsb2ctbmV4dGpzLm1pY3JvY21zLmlvL2FwaS92MS9ibG9nJ1xuXG4gIC8qXG4gIGNvbnN0IGZldGNoZXIgPSAoXG4gICAgbWVzc2FnZToge2NvbnRlbnRzOiB7XG4gICAgICBpZDogc3RyaW5nLFxuICAgICAgY3JlYXRlZEF0OiBzdHJpbmcsXG4gICAgICB1cGRhdGVkQXQ6IHN0cmluZyxcbiAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICBleGNlcnB0OiBzdHJpbmcsXG4gICAgICBkYXRlOiBzdHJpbmcsXG4gICAgICBzbHVnOiBzdHJpbmcsXG4gICAgICBibG9ndGV4dDogc3RyaW5nLFxuICAgIH19KSA9PiBmZXRjaChjbXN1cmwsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzIDoge1xuICAgICAgICAnWC1BUEk9S0VZJzpcImMyYmYzMGQzLTFkYTItNDVhMy04MzI3LWI5OTJiOTAwNmFmM1wiXG4gICAgICB9XG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cbiAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihjbXN1cmwsIGZldGNoZXIpXG4gICovXG5cbiAgY29uc3QgZmV0Y2hlciA9IChcbiAgICB1cmwgOiBzdHJpbmdcbiAgKSA9PiBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZmFjZWJvb2svcmVwb3NcIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c3JTV1IoXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2ZhY2Vib29rL3JlcG9zXCIsIGZldGNoZXIpXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5OZXh0LmpzIEJsb2cgRXhhbXBsZSB3aXRoIHtDTVNfTkFNRX08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEludHJvIC8+XG4gICAgICAgICAge2hlcm9Qb3N0ICYmIChcbiAgICAgICAgICAgIDxIZXJvUG9zdFxuICAgICAgICAgICAgICB0aXRsZT17aGVyb1Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGNvdmVySW1hZ2U9e2hlcm9Qb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgIGRhdGU9e2hlcm9Qb3N0LmRhdGV9XG4gICAgICAgICAgICAgIGF1dGhvcj17aGVyb1Bvc3QuYXV0aG9yfVxuICAgICAgICAgICAgICBzbHVnPXtoZXJvUG9zdC5zbHVnfVxuICAgICAgICAgICAgICBleGNlcnB0PXtoZXJvUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnc2x1ZycsXG4gICAgJ2F1dGhvcicsXG4gICAgJ2NvdmVySW1hZ2UnLFxuICAgICdleGNlcnB0JyxcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=