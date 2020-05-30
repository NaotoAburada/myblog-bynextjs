webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cache; });
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");


class Cache {
    constructor(initialData = {}) {
        this.__cache = new Map(Object.entries(initialData));
        this.__listeners = [];
    }
    get(key) {
        const [_key] = this.serializeKey(key);
        return this.__cache.get(_key);
    }
    set(key, value, shouldNotify = true) {
        const [_key] = this.serializeKey(key);
        this.__cache.set(_key, value);
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, value, false);
        this.notify();
    }
    keys() {
        return Array.from(this.__cache.keys());
    }
    has(key) {
        const [_key] = this.serializeKey(key);
        return this.__cache.has(_key);
    }
    clear(shouldNotify = true) {
        if (shouldNotify)
            this.__cache.forEach(key => Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false));
        this.__cache.clear();
        this.notify();
    }
    delete(key, shouldNotify = true) {
        const [_key] = this.serializeKey(key);
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false);
        this.__cache.delete(_key);
        this.notify();
    }
    // TODO: introduce namespace for the cache
    serializeKey(key) {
        let args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = Object(_libs_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        const errorKey = key ? 'err@' + key : '';
        return [key, args, errorKey];
    }
    subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        let isSubscribed = true;
        this.__listeners.push(listener);
        return () => {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            const index = this.__listeners.indexOf(listener);
            if (index > -1) {
                this.__listeners[index] = this.__listeners[this.__listeners.length - 1];
                this.__listeners.length--;
            }
        };
    }
    // Notify Cache subscribers about a change in the cache
    notify() {
        for (let listener of this.__listeners) {
            listener();
        }
    }
}


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/*! exports provided: CONCURRENT_PROMISES, CONCURRENT_PROMISES_TS, FOCUS_REVALIDATORS, CACHE_REVALIDATORS, MUTATION_TS, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES", function() { return CONCURRENT_PROMISES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES_TS", function() { return CONCURRENT_PROMISES_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_REVALIDATORS", function() { return FOCUS_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_REVALIDATORS", function() { return CACHE_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTATION_TS", function() { return MUTATION_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");




// cache
const cache = new _cache__WEBPACK_IMPORTED_MODULE_3__["default"]();
// state managers
const CONCURRENT_PROMISES = {};
const CONCURRENT_PROMISES_TS = {};
const FOCUS_REVALIDATORS = {};
const CACHE_REVALIDATORS = {};
const MUTATION_TS = {};
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (config.errorRetryCount && opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    const count = Math.min(opts.retryCount || 0, 8);
    const timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
const slowConnection = typeof window !== 'undefined' &&
    navigator['connection'] &&
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
const defaultConfig = {
    // events
    onLoadingSlow: () => { },
    onSuccess: () => { },
    onError: () => { },
    onErrorRetry,
    errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: (slowConnection ? 5 : 3) * 1000,
    refreshInterval: 0,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    suspense: false,
    compare: fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default.a
};
// Focus revalidate
let eventsBinded = false;
if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
    const revalidate = () => {
        if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])() || !Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_2__["default"])())
            return;
        for (let key in FOCUS_REVALIDATORS) {
            if (FOCUS_REVALIDATORS[key][0])
                FOCUS_REVALIDATORS[key][0]();
        }
    };
    window.addEventListener('visibilitychange', revalidate, false);
    window.addEventListener('focus', revalidate, false);
    // only bind the events once
    eventsBinded = true;
}

/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/*! exports provided: trigger, mutate, SWRConfig, useSWRPages, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["SWRConfig"]; });

/* harmony import */ var _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-pages */ "./node_modules/swr/esm/use-swr-pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__["useSWRPages"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["cache"]; });





/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
// counter of the key
let counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    let key = 'arg';
    for (let i = 0; i < args.length; ++i) {
        let _hash;
        if (args[i] === null || typeof args[i] !== 'object') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // null        -> 'null'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-document-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-document-visible.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDocumentVisible; });
function isDocumentVisible() {
    if (typeof document !== 'undefined' &&
        typeof document.visibilityState !== 'undefined') {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-online.js":
/*!************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-online.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOnline; });
function isOnline() {
    if (typeof navigator.onLine !== 'undefined') {
        return navigator.onLine;
    }
    // always assume it's online
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/throttle.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/libs/throttle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
function throttle(fn, interval) {
    let pending = false;
    return (...args) => {
        if (pending)
            return;
        pending = true;
        fn(...args);
        setTimeout(() => (pending = false), interval);
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SWRConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-pages.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/use-swr-pages.js ***!
  \***********************************************/
/*! exports provided: useSWRPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return useSWRPages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");


/*
The idea

A "Page" component renders the content of 1 API request, it accepts an offset (in this example it's from),
uses a SWR hook (useSWR(API + '?limit=' + limit + '&from=' + from)) and returns items (Projects).

The UI:
      +------------------------------------------+
      |   Projects                               |
+------------------------------------------------------+
|     |   +----------------+                     |     |
|     |                                          |     |
|     |   +------------+                         |     |
|     |                                          |     +--> 1 Page
|     |   +-----------------+                    |     |
|     |                                          |     |  /projects/list?limit=4
|     |   +---------+                            |     |
+------------------------------------------------------+
      |                                          |
      |   +------------+                         |     +  /projects/list?limit=4&from=123
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |   +---------+                            |     |
      |                                          |     |
      |   +--------------+                       |     +
      |                                          |
      |   +-------------------+                  |     +  /projects/list?limit=4&from=456
      |                                          |     |
      |   +------------+                         |     |
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |                                          |     +

The API
// (inside `render`)

function App () {
  const {
    pages,    // an array of each page component
    pageSWRs, // an array of SWRs of each page
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    loadMore
  } = useSWRPages(
    'project-page', // key of this page

    // ======== the actual Page component!
    ({ offset, withSWR }) => {
      // required: use `withSWR` to wrap your main SWR (source of your pagination API)
      const { data } = withSWR(
        useSWR(API + '?limit=10&from=' + offset) // request projects with offset
      )
      if (!data) return <Placeholder>
      return data.projects.map(project => <Card project={project} team={team}>)
    },
    // ========

    // a function accepts a SWR's `data`, and returns the offset of the next page (or null)
    data => data && data.length >= 10 ? data[data.length - 1].createdAt : null,

    // (optional) outside deps of your Page component. in this case it's empty
    []
  )

  // ...

  if (isEmpty) return <EmptyProjectsPage/>

  return <div>
    {pages}
    {isReachingEnd
      ? null
      : <button loading={isLoadingMore} onClick={loadMore}>Load More</button>}
  </div>
}
*/
const pageCacheMap = new Map();
function useSWRPages(pageKey, pageFn, SWRToOffset, deps = []) {
    const pageCountKey = `_swr_page_count_` + pageKey;
    const pageOffsetKey = `_swr_page_offset_` + pageKey;
    const [pageCount, setPageCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageCountKey) || 1);
    const [pageOffsets, setPageOffsets] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageOffsetKey) || [null]);
    const [pageSWRs, setPageSWRs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
    const pageFnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(pageFn);
    const emptyPageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // Page component (wraps `pageFn`)
    // for performance reason we need to memorize it
    const Page = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(props => {
        // render the page component
        const dataList = pageFnRef.current(props);
        // if dataList is [], we can assume this page is empty
        // TODO: this API is not stable
        if (dataList && !dataList.length) {
            emptyPageRef.current = true;
        }
        else {
            emptyPageRef.current = false;
        }
        return dataList;
    }, []);
    // Doesn't have a next page
    const isReachingEnd = pageOffsets[pageCount] === null;
    const isLoadingMore = pageCount === pageOffsets.length;
    const isEmpty = isReachingEnd && pageCount === 1 && emptyPageRef.current;
    const loadMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (isLoadingMore || isReachingEnd)
            return;
        setPageCount(c => {
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageCountKey, c + 1);
            return c + 1;
        });
    }, [isLoadingMore || isReachingEnd]);
    const _pageFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(pageFn, deps);
    pageFnRef.current = _pageFn;
    const pages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const getWithSWR = id => swr => {
            if (!pageSWRs[id] ||
                pageSWRs[id].data !== swr.data ||
                pageSWRs[id].error !== swr.error ||
                pageSWRs[id].revalidate !== swr.revalidate) {
                // hoist side effects: setPageSWRs and setPageOffsets -- https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#warnings-for-some-updates-during-render
                setTimeout(() => {
                    setPageSWRs(swrs => {
                        const _swrs = [...swrs];
                        _swrs[id] = {
                            data: swr.data,
                            error: swr.error,
                            revalidate: swr.revalidate,
                            isValidating: swr.isValidating,
                            mutate: swr.mutate
                        };
                        return _swrs;
                    });
                    if (typeof swr.data !== 'undefined') {
                        // set next page's offset
                        const newPageOffset = SWRToOffset(swr, id);
                        if (pageOffsets[id + 1] !== newPageOffset) {
                            setPageOffsets(arr => {
                                const _arr = [...arr];
                                _arr[id + 1] = newPageOffset;
                                _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageOffsetKey, _arr);
                                return _arr;
                            });
                        }
                    }
                });
            }
            return swr;
        };
        // render each page
        const p = [];
        if (!pageCacheMap.has(pageKey)) {
            pageCacheMap.set(pageKey, []);
        }
        const pageCache = pageCacheMap.get(pageKey);
        for (let i = 0; i < pageCount; ++i) {
            if (!pageCache[i] ||
                pageCache[i].offset !== pageOffsets[i] ||
                pageCache[i].pageFn !== _pageFn) {
                // when props change or at init
                // render the page and cache it
                pageCache[i] = {
                    component: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, { key: `page-${pageOffsets[i]}-${i}`, offset: pageOffsets[i], withSWR: getWithSWR(i) })),
                    pageFn: _pageFn,
                    offset: pageOffsets[i]
                };
            }
            p.push(pageCache[i].component);
        }
        return p;
    }, [_pageFn, pageCount, pageSWRs, pageOffsets, pageKey]);
    return {
        pages,
        pageCount,
        pageSWRs,
        isLoadingMore,
        isReachingEnd,
        isEmpty,
        loadMore
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/*! exports provided: trigger, mutate, SWRConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _libs_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/throttle */ "./node_modules/swr/esm/libs/throttle.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");






const IS_SERVER = typeof window === 'undefined';
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
const trigger = (_key, shouldRevalidate = true) => {
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    const [key, , keyErr] = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key);
    if (!key)
        return;
    const updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        const currentData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        const currentError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        for (let i = 0; i < updaters.length; ++i) {
            updaters[i](shouldRevalidate, currentData, currentError, i > 0);
        }
    }
};
const broadcastState = (key, data, error) => {
    const updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        for (let i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error);
        }
    }
};
const mutate = async (_key, _data, shouldRevalidate = true) => {
    const [key] = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key);
    if (!key)
        return;
    // if there is no new data, call revalidate against the key
    if (typeof _data === 'undefined')
        return trigger(_key, shouldRevalidate);
    // update timestamp
    _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
    let data, error;
    if (_data && typeof _data === 'function') {
        // `_data` is a function, call it passing current cache value
        try {
            data = await _data(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
        }
        catch (err) {
            error = err;
        }
    }
    else if (_data && typeof _data.then === 'function') {
        // `_data` is a promise
        try {
            data = await _data;
        }
        catch (err) {
            error = err;
        }
    }
    else {
        data = _data;
    }
    if (typeof data !== 'undefined') {
        // update cached data, avoid notifying from the cache
        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, data, false);
    }
    // update existing SWR Hooks' state
    const updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (updaters) {
        for (let i = 0; i < updaters.length; ++i) {
            updaters[i](!!shouldRevalidate, data, error, i > 0);
        }
    }
    // throw error or return data to be used by caller of mutate
    if (error)
        throw error;
    return data;
};
function useSWR(...args) {
    let _key, fn, config = {};
    if (args.length >= 1) {
        _key = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    const [key, fnArgs, keyErr] = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key);
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"]), config);
    if (typeof fn === 'undefined') {
        // use a global fetcher
        fn = config.fetcher;
    }
    const initialData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
    const initialError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    const stateDependencies = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    const stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: initialData,
        error: initialError,
        isValidating: false
    });
    const rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null)[1];
    let dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
        let shouldUpdateState = false;
        for (let k in payload) {
            stateRef.current[k] = payload[k];
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState || config.suspense) {
            rerender({});
        }
    }, []);
    // error ref inside revalidate (is last request errored?)
    const unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key);
    const boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((data, shouldRevalidate) => {
        return mutate(key, data, shouldRevalidate);
    }, [key]);
    // start a revalidation
    const revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (revalidateOpts = {}) => {
        if (!key || !fn)
            return false;
        if (unmountedRef.current)
            return false;
        revalidateOpts = Object.assign({ dedupe: false }, revalidateOpts);
        let loading = true;
        let shouldDeduping = typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] !== 'undefined' && revalidateOpts.dedupe;
        // start fetching
        try {
            dispatch({
                isValidating: true
            });
            let newData;
            let startAt;
            if (shouldDeduping) {
                // there's already an ongoing request,
                // this one needs to be deduplicated.
                startAt = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                newData = await _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            }
            else {
                // if not deduping the request (hard revalidate) but
                // there're other ongoing request(s) at the same time,
                // we need to ignore the other result(s) to avoid
                // possible race conditions:
                // req1------------------>res1
                //      req2-------->res2
                // in that case, the second response should not be overridden
                // by the first one.
                if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                    // we can mark it as a mutation to ignore
                    // all requests which are fired before this one
                    _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
                }
                // if no cache being rendered currently (it shows a blank page),
                // we trigger the loading slow event.
                if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key)) {
                    setTimeout(() => {
                        if (loading)
                            config.onLoadingSlow(key, config);
                    }, config.loadingTimeout);
                }
                if (fnArgs !== null) {
                    _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn(...fnArgs);
                }
                else {
                    _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn(key);
                }
                _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key] = startAt = Date.now();
                newData = await _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                setTimeout(() => {
                    delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                    delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                }, config.dedupingInterval);
                // trigger the success event,
                // only do this for the original request.
                config.onSuccess(newData, key, config);
            }
            // if the revalidation happened earlier than the local mutation,
            // we have to ignore the result because it could override.
            // meanwhile, a new revalidation should be triggered by the mutation.
            if (_config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] && startAt <= _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key]) {
                dispatch({ isValidating: false });
                return false;
            }
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, newData, false);
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, undefined, false);
            // new state for the reducer
            const newState = {
                isValidating: false
            };
            if (typeof stateRef.current.error !== 'undefined') {
                // we don't have an error
                newState.error = undefined;
            }
            if (!config.compare(stateRef.current.data, newData)) {
                // deep compare to avoid extra re-render
                // data changed
                newState.data = newData;
            }
            // merge the new state
            dispatch(newState);
            if (!shouldDeduping) {
                // also update other hooks
                broadcastState(key, newData, undefined);
            }
        }
        catch (err) {
            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, err, false);
            // get a new error
            // don't use deep equal for errors
            if (stateRef.current.error !== err) {
                // we keep the stale data
                dispatch({
                    isValidating: false,
                    error: err
                });
                if (!shouldDeduping) {
                    // also broadcast to update other hooks
                    broadcastState(key, undefined, err);
                }
            }
            // events and retry
            config.onError(err, key, config);
            if (config.shouldRetryOnError) {
                // when retrying, we always enable deduping
                const retryCount = (revalidateOpts.retryCount || 0) + 1;
                config.onErrorRetry(err, key, config, revalidate, Object.assign({ dedupe: true }, revalidateOpts, { retryCount }));
            }
        }
        loading = false;
        return true;
    }, [key]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(() => {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        const currentHookData = stateRef.current.data;
        const latestKeyedData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
        // update the state if the key changed (not the inital render) or cache updated
        if (keyRef.current !== key ||
            !config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
            keyRef.current = key;
        }
        // revalidate with deduping
        const softRevalidate = () => revalidate({ dedupe: true });
        // trigger a revalidation
        if (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined)) {
            if (typeof latestKeyedData !== 'undefined' &&
                !IS_SERVER &&
                window['requestIdleCallback']) {
                // delay revalidate if there's cache
                // to not block the rendering
                window['requestIdleCallback'](softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        // whenever the window gets focused, revalidate
        let onFocus;
        if (config.revalidateOnFocus) {
            // throttle: avoid being called twice from both listeners
            // and tabs being switched quickly
            onFocus = Object(_libs_throttle__WEBPACK_IMPORTED_MODULE_4__["default"])(softRevalidate, config.focusThrottleInterval);
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key] = [onFocus];
            }
            else {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key].push(onFocus);
            }
        }
        // register global cache update listener
        const onUpdate = (shouldRevalidate = true, updatedData, updatedError, dedupe = true) => {
            // update hook state
            const newState = {};
            let needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        // add updater to listeners
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key] = [onUpdate];
        }
        else {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key].push(onUpdate);
        }
        // set up reconnecting when the browser regains network connection
        let reconnect = null;
        if (!IS_SERVER && window.addEventListener && config.revalidateOnReconnect) {
            window.addEventListener('online', (reconnect = softRevalidate));
        }
        return () => {
            // cleanup
            dispatch = () => null;
            // mark it as unmounted
            unmountedRef.current = true;
            if (onFocus && _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                const revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key];
                const index = revalidators.indexOf(onFocus);
                if (index >= 0) {
                    // 10x faster than splice
                    // https://jsperf.com/array-remove-by-index
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
                const revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
                const index = revalidators.indexOf(onUpdate);
                if (index >= 0) {
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (!IS_SERVER && window.removeEventListener && reconnect !== null) {
                window.removeEventListener('online', reconnect);
            }
        };
    }, [key, revalidate]);
    // set up polling
    useIsomorphicLayoutEffect(() => {
        let timer = null;
        const tick = async () => {
            if (!stateRef.current.error &&
                (config.refreshWhenHidden || Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__["default"])()) &&
                (config.refreshWhenOffline || Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_3__["default"])())) {
                // only revalidate when the page is visible
                // if API request errored, we stop polling in this round
                // and let the error retry function handle it
                await revalidate({ dedupe: true });
            }
            if (config.refreshInterval) {
                timer = setTimeout(tick, config.refreshInterval);
            }
        };
        if (config.refreshInterval) {
            timer = setTimeout(tick, config.refreshInterval);
        }
        return () => {
            if (timer)
                clearTimeout(timer);
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // suspense
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        let latestData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        let latestError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                // trigger revalidate immediately
                // to get the promise
                revalidate();
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] &&
                typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key].then === 'function') {
                // if it is a promise
                throw _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            }
            // it's a value, return it directly (override)
            latestData = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
        // return the latest data / error from cache
        // in case `key` has changed
        return {
            error: latestError,
            data: latestData,
            revalidate,
            mutate: boundMutate,
            isValidating: stateRef.current.isValidating
        };
    }
    // define returned state
    // can be memorized since the state is a ref
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const state = { revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    return keyRef.current === key ? stateRef.current.error : initialError;
                }
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    return keyRef.current === key ? stateRef.current.data : initialData;
                }
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return stateRef.current.isValidating;
                }
            }
        });
        return state;
    }, [revalidate]);
}
const SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);


/***/ }),

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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _this = undefined,
    _jsxFileName = "D:\\workspace_nextjs\\myblog-bynextjs\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Index = function Index(_ref) {
  _s();

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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])("https://api.github.com/users/facebook/repos", fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

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

_s(Index, "PLUSh3GLacfZJClYQJks7Deieck=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2NhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9saWJzL2hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vbGlicy9pcy1kb2N1bWVudC12aXNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2xpYnMvaXMtb25saW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2xpYnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vc3dyLWNvbmZpZy1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL3VzZS1zd3ItcGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vdXNlLXN3ci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJjbXN1cmwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsIkNNU19OQU1FIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsInNsdWciLCJleGNlcnB0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFdBQVc7QUFDL0I7O0FBRUEsb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNKO0FBQ2hCO0FBQ2YsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsdURBQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDbUI7QUFDbkI7QUFDWjtBQUM1QjtBQUNBLGtCQUFrQiw4Q0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5RUFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUIsc0JBQXNCLEVBQUU7QUFDeEIsb0JBQW9CLEVBQUU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzREFBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5RUFBaUIsT0FBTywrREFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21IO0FBQ3BHLDRFQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN0RTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDb0I7QUFDQTtBQUNiO0FBQ2xCLCtHQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNKdEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFzQztBQUN0Qyx5QkFBeUIsMkRBQWEsR0FBRztBQUN6QztBQUNlLCtFQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDSGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0U7QUFDckM7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLE1BQU0sa0JBQWtCO0FBQ3hCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxRQUFRLE9BQU8sS0FBSztBQUM3RSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMO0FBQ0EseUJBQXlCLGNBQWMsVUFBVSxTQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esc0NBQXNDLHNEQUFRLENBQUMsNkNBQUs7QUFDcEQsMENBQTBDLHNEQUFRLENBQUMsNkNBQUs7QUFDeEQsb0NBQW9DLHNEQUFRO0FBQzVDLHNCQUFzQixvREFBTTtBQUM1Qix5QkFBeUIsb0RBQU07QUFDL0I7QUFDQTtBQUNBLGlCQUFpQix5REFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUs7QUFDakI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLG9CQUFvQix5REFBVztBQUMvQjtBQUNBLGtCQUFrQixxREFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDZDQUFLO0FBQ3JDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUFLLHNCQUFzQixjQUFjLGVBQWUsR0FBRyxFQUFFLG1EQUFtRDtBQUNoSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVHO0FBQzJDO0FBQ3ZGO0FBQ25CO0FBQ0Q7QUFDYTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywrQ0FBUyxHQUFHLHFEQUFlO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBSztBQUNqQztBQUNBO0FBQ0EscUJBQXFCLDBEQUFrQjtBQUN2QztBQUNBLDRCQUE0Qiw2Q0FBSztBQUNqQyw2QkFBNkIsNkNBQUs7QUFDbEMsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFrQjtBQUN2QztBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFLO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQiwwREFBa0I7QUFDdkM7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNkNBQUs7QUFDdkMsNkJBQTZCLEVBQUUsK0NBQWEsRUFBRSx3REFBVSxDQUFDLDJEQUFnQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2Q0FBSztBQUM3Qix5QkFBeUIsNkNBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9EQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsb0RBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQixzREFBUTtBQUM3QixtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixvREFBTTtBQUMvQixtQkFBbUIsb0RBQU07QUFDekIsd0JBQXdCLHlEQUFXO0FBQ25DO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLHlEQUFXLDJCQUEyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQSxvQ0FBb0MsMkRBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOERBQXNCO0FBQ2hELGdDQUFnQywyREFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxvQkFBb0IsbURBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDZDQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFtQjtBQUN2QztBQUNBO0FBQ0Esb0JBQW9CLDJEQUFtQjtBQUN2QztBQUNBLGdCQUFnQiw4REFBc0I7QUFDdEMsZ0NBQWdDLDJEQUFtQjtBQUNuRDtBQUNBLDJCQUEyQiwyREFBbUI7QUFDOUMsMkJBQTJCLDhEQUFzQjtBQUNqRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVcsb0JBQW9CLG1EQUFXO0FBQzFELDBCQUEwQixzQkFBc0I7QUFDaEQ7QUFDQTtBQUNBLFlBQVksNkNBQUs7QUFDakIsWUFBWSw2Q0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQW1CO0FBQ3RDLG1CQUFtQiw4REFBc0I7QUFDekMsWUFBWSw2Q0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixlQUFlLG1CQUFtQixhQUFhO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDZDQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGVBQWU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOERBQVE7QUFDOUIsaUJBQWlCLDBEQUFrQjtBQUNuQyxnQkFBZ0IsMERBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUFrQjtBQUMvQixZQUFZLDBEQUFrQjtBQUM5QjtBQUNBO0FBQ0EsWUFBWSwwREFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwREFBa0I7QUFDN0MscUNBQXFDLDBEQUFrQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFrQjtBQUNsQyxxQ0FBcUMsMERBQWtCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUVBQWlCO0FBQzlELDhDQUE4QywrREFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZUFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQUs7QUFDOUIsMEJBQTBCLDZDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyREFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQW1CO0FBQ25DLHVCQUF1QiwyREFBbUI7QUFDMUM7QUFDQSxzQkFBc0IsMkRBQW1CO0FBQ3pDO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFEQUFPO0FBQ2xCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsMkRBQWdCO0FBQ0k7QUFDdkIscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hkdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLEtBQXNCLEdBQUcsU0FBekJBLEtBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9DLE1BQU1DLFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNRSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLENBQWYsQ0FBbEI7QUFFQSxNQUFNQyxNQUFNLEdBQUcsK0NBQWY7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FDZEMsR0FEYztBQUFBLFdBRVhDLEtBQUssQ0FBQyw2Q0FBRCxDQUFMLENBQXFEQyxJQUFyRCxDQUEwRCxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQUE3RCxDQUZXO0FBQUEsR0FBaEI7O0FBM0IrQyxnQkE4QnpCQyxtREFBTSxDQUFDLDZDQUFELEVBQWdETixPQUFoRCxDQTlCbUI7QUFBQSxNQThCeENPLElBOUJ3QyxXQThCeENBLElBOUJ3QztBQUFBLE1BOEJsQ0MsS0E5QmtDLFdBOEJsQ0EsS0E5QmtDOztBQStCL0MsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRVgsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFrQ0UsdURBQWxDLENBREYsQ0FERixFQUlFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdiLFFBQVEsSUFDUCxNQUFDLDZEQUFEO0FBQ0UsU0FBSyxFQUFFQSxRQUFRLENBQUNjLEtBRGxCO0FBRUUsY0FBVSxFQUFFZCxRQUFRLENBQUNlLFVBRnZCO0FBR0UsUUFBSSxFQUFFZixRQUFRLENBQUNnQixJQUhqQjtBQUlFLFVBQU0sRUFBRWhCLFFBQVEsQ0FBQ2lCLE1BSm5CO0FBS0UsUUFBSSxFQUFFakIsUUFBUSxDQUFDa0IsSUFMakI7QUFNRSxXQUFPLEVBQUVsQixRQUFRLENBQUNtQixPQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFZR2xCLFNBQVMsQ0FBQ21CLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsTUFBQyxnRUFBRDtBQUFhLFNBQUssRUFBRW5CLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaM0IsQ0FKRixDQURGLENBREY7QUF1QkQsQ0F4REQ7O0dBQU1ILEs7VUE4QmtCWSwyQzs7O0tBOUJsQlosSzs7QUEwRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45ODhlOTEwODAwODEyZjZlNzc5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIga2V5TGlzdCA9IE9iamVjdC5rZXlzO1xudmFyIGhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYXJyQSA9IGlzQXJyYXkoYSlcbiAgICAgICwgYXJyQiA9IGlzQXJyYXkoYilcbiAgICAgICwgaVxuICAgICAgLCBsZW5ndGhcbiAgICAgICwga2V5O1xuXG4gICAgaWYgKGFyckEgJiYgYXJyQikge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlXG4gICAgICAsIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRhdGVBICYmIGRhdGVCKSByZXR1cm4gYS5nZXRUaW1lKCkgPT0gYi5nZXRUaW1lKCk7XG5cbiAgICB2YXIgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHBcbiAgICAgICwgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChyZWdleHBBICYmIHJlZ2V4cEIpIHJldHVybiBhLnRvU3RyaW5nKCkgPT0gYi50b1N0cmluZygpO1xuXG4gICAgdmFyIGtleXMgPSBrZXlMaXN0KGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCAhPT0ga2V5TGlzdChiKS5sZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICBpZiAoIWhhc1Byb3AuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFlcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iLCJpbXBvcnQgeyBtdXRhdGUgfSBmcm9tICcuL3VzZS1zd3InO1xuaW1wb3J0IGhhc2ggZnJvbSAnLi9saWJzL2hhc2gnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjaGUge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhID0ge30pIHtcbiAgICAgICAgdGhpcy5fX2NhY2hlID0gbmV3IE1hcChPYmplY3QuZW50cmllcyhpbml0aWFsRGF0YSkpO1xuICAgICAgICB0aGlzLl9fbGlzdGVuZXJzID0gW107XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgW19rZXldID0gdGhpcy5zZXJpYWxpemVLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jYWNoZS5nZXQoX2tleSk7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlLCBzaG91bGROb3RpZnkgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IFtfa2V5XSA9IHRoaXMuc2VyaWFsaXplS2V5KGtleSk7XG4gICAgICAgIHRoaXMuX19jYWNoZS5zZXQoX2tleSwgdmFsdWUpO1xuICAgICAgICBpZiAoc2hvdWxkTm90aWZ5KVxuICAgICAgICAgICAgbXV0YXRlKGtleSwgdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fX2NhY2hlLmtleXMoKSk7XG4gICAgfVxuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgY29uc3QgW19rZXldID0gdGhpcy5zZXJpYWxpemVLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jYWNoZS5oYXMoX2tleSk7XG4gICAgfVxuICAgIGNsZWFyKHNob3VsZE5vdGlmeSA9IHRydWUpIHtcbiAgICAgICAgaWYgKHNob3VsZE5vdGlmeSlcbiAgICAgICAgICAgIHRoaXMuX19jYWNoZS5mb3JFYWNoKGtleSA9PiBtdXRhdGUoa2V5LCBudWxsLCBmYWxzZSkpO1xuICAgICAgICB0aGlzLl9fY2FjaGUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9XG4gICAgZGVsZXRlKGtleSwgc2hvdWxkTm90aWZ5ID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBbX2tleV0gPSB0aGlzLnNlcmlhbGl6ZUtleShrZXkpO1xuICAgICAgICBpZiAoc2hvdWxkTm90aWZ5KVxuICAgICAgICAgICAgbXV0YXRlKGtleSwgbnVsbCwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9fY2FjaGUuZGVsZXRlKF9rZXkpO1xuICAgICAgICB0aGlzLm5vdGlmeSgpO1xuICAgIH1cbiAgICAvLyBUT0RPOiBpbnRyb2R1Y2UgbmFtZXNwYWNlIGZvciB0aGUgY2FjaGVcbiAgICBzZXJpYWxpemVLZXkoa2V5KSB7XG4gICAgICAgIGxldCBhcmdzID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAga2V5ID0ga2V5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVwZW5kZW5jaWVzIG5vdCByZWFkeVxuICAgICAgICAgICAgICAgIGtleSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIGFyZ3MgYXJyYXlcbiAgICAgICAgICAgIGFyZ3MgPSBrZXk7XG4gICAgICAgICAgICBrZXkgPSBoYXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IG51bGwgdG8gJydcbiAgICAgICAgICAgIGtleSA9IFN0cmluZyhrZXkgfHwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVycm9yS2V5ID0ga2V5ID8gJ2VyckAnICsga2V5IDogJyc7XG4gICAgICAgIHJldHVybiBba2V5LCBhcmdzLCBlcnJvcktleV07XG4gICAgfVxuICAgIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX19saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5lcnNbaW5kZXhdID0gdGhpcy5fX2xpc3RlbmVyc1t0aGlzLl9fbGlzdGVuZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5lcnMubGVuZ3RoLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIE5vdGlmeSBDYWNoZSBzdWJzY3JpYmVycyBhYm91dCBhIGNoYW5nZSBpbiB0aGUgY2FjaGVcbiAgICBub3RpZnkoKSB7XG4gICAgICAgIGZvciAobGV0IGxpc3RlbmVyIG9mIHRoaXMuX19saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgZGVlcEVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgaXNEb2N1bWVudFZpc2libGUgZnJvbSAnLi9saWJzL2lzLWRvY3VtZW50LXZpc2libGUnO1xuaW1wb3J0IGlzT25saW5lIGZyb20gJy4vbGlicy9pcy1vbmxpbmUnO1xuaW1wb3J0IENhY2hlIGZyb20gJy4vY2FjaGUnO1xuLy8gY2FjaGVcbmNvbnN0IGNhY2hlID0gbmV3IENhY2hlKCk7XG4vLyBzdGF0ZSBtYW5hZ2Vyc1xuY29uc3QgQ09OQ1VSUkVOVF9QUk9NSVNFUyA9IHt9O1xuY29uc3QgQ09OQ1VSUkVOVF9QUk9NSVNFU19UUyA9IHt9O1xuY29uc3QgRk9DVVNfUkVWQUxJREFUT1JTID0ge307XG5jb25zdCBDQUNIRV9SRVZBTElEQVRPUlMgPSB7fTtcbmNvbnN0IE1VVEFUSU9OX1RTID0ge307XG4vLyBlcnJvciByZXRyeVxuZnVuY3Rpb24gb25FcnJvclJldHJ5KF8sIF9fLCBjb25maWcsIHJldmFsaWRhdGUsIG9wdHMpIHtcbiAgICBpZiAoIWlzRG9jdW1lbnRWaXNpYmxlKCkpIHtcbiAgICAgICAgLy8gaWYgaXQncyBoaWRkZW4sIHN0b3BcbiAgICAgICAgLy8gaXQgd2lsbCBhdXRvIHJldmFsaWRhdGUgd2hlbiBmb2N1c1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25maWcuZXJyb3JSZXRyeUNvdW50ICYmIG9wdHMucmV0cnlDb3VudCA+IGNvbmZpZy5lcnJvclJldHJ5Q291bnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBleHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgY29uc3QgY291bnQgPSBNYXRoLm1pbihvcHRzLnJldHJ5Q291bnQgfHwgMCwgOCk7XG4gICAgY29uc3QgdGltZW91dCA9IH5+KChNYXRoLnJhbmRvbSgpICsgMC41KSAqICgxIDw8IGNvdW50KSkgKiBjb25maWcuZXJyb3JSZXRyeUludGVydmFsO1xuICAgIHNldFRpbWVvdXQocmV2YWxpZGF0ZSwgdGltZW91dCwgb3B0cyk7XG59XG4vLyBjbGllbnQgc2lkZTogbmVlZCB0byBhZGp1c3QgdGhlIGNvbmZpZ1xuLy8gYmFzZWQgb24gdGhlIGJyb3dzZXIgc3RhdHVzXG4vLyBzbG93IGNvbm5lY3Rpb24gKDw9IDcwS2JwcylcbmNvbnN0IHNsb3dDb25uZWN0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBuYXZpZ2F0b3JbJ2Nvbm5lY3Rpb24nXSAmJlxuICAgIFsnc2xvdy0yZycsICcyZyddLmluZGV4T2YobmF2aWdhdG9yWydjb25uZWN0aW9uJ10uZWZmZWN0aXZlVHlwZSkgIT09IC0xO1xuLy8gY29uZmlnXG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIC8vIGV2ZW50c1xuICAgIG9uTG9hZGluZ1Nsb3c6ICgpID0+IHsgfSxcbiAgICBvblN1Y2Nlc3M6ICgpID0+IHsgfSxcbiAgICBvbkVycm9yOiAoKSA9PiB7IH0sXG4gICAgb25FcnJvclJldHJ5LFxuICAgIGVycm9yUmV0cnlJbnRlcnZhbDogKHNsb3dDb25uZWN0aW9uID8gMTAgOiA1KSAqIDEwMDAsXG4gICAgZm9jdXNUaHJvdHRsZUludGVydmFsOiA1ICogMTAwMCxcbiAgICBkZWR1cGluZ0ludGVydmFsOiAyICogMTAwMCxcbiAgICBsb2FkaW5nVGltZW91dDogKHNsb3dDb25uZWN0aW9uID8gNSA6IDMpICogMTAwMCxcbiAgICByZWZyZXNoSW50ZXJ2YWw6IDAsXG4gICAgcmV2YWxpZGF0ZU9uRm9jdXM6IHRydWUsXG4gICAgcmV2YWxpZGF0ZU9uUmVjb25uZWN0OiB0cnVlLFxuICAgIHJlZnJlc2hXaGVuSGlkZGVuOiBmYWxzZSxcbiAgICByZWZyZXNoV2hlbk9mZmxpbmU6IGZhbHNlLFxuICAgIHNob3VsZFJldHJ5T25FcnJvcjogdHJ1ZSxcbiAgICBzdXNwZW5zZTogZmFsc2UsXG4gICAgY29tcGFyZTogZGVlcEVxdWFsXG59O1xuLy8gRm9jdXMgcmV2YWxpZGF0ZVxubGV0IGV2ZW50c0JpbmRlZCA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmICFldmVudHNCaW5kZWQpIHtcbiAgICBjb25zdCByZXZhbGlkYXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWlzRG9jdW1lbnRWaXNpYmxlKCkgfHwgIWlzT25saW5lKCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBGT0NVU19SRVZBTElEQVRPUlMpIHtcbiAgICAgICAgICAgIGlmIChGT0NVU19SRVZBTElEQVRPUlNba2V5XVswXSlcbiAgICAgICAgICAgICAgICBGT0NVU19SRVZBTElEQVRPUlNba2V5XVswXSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIHJldmFsaWRhdGUsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCByZXZhbGlkYXRlLCBmYWxzZSk7XG4gICAgLy8gb25seSBiaW5kIHRoZSBldmVudHMgb25jZVxuICAgIGV2ZW50c0JpbmRlZCA9IHRydWU7XG59XG5leHBvcnQgeyBDT05DVVJSRU5UX1BST01JU0VTLCBDT05DVVJSRU5UX1BST01JU0VTX1RTLCBGT0NVU19SRVZBTElEQVRPUlMsIENBQ0hFX1JFVkFMSURBVE9SUywgTVVUQVRJT05fVFMsIGNhY2hlIH07XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q29uZmlnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi91c2Utc3dyJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgdXNlU1dSIH0gZnJvbSAnLi91c2Utc3dyJztcbmV4cG9ydCB7IHVzZVNXUlBhZ2VzIH0gZnJvbSAnLi91c2Utc3dyLXBhZ2VzJztcbmV4cG9ydCB7IGNhY2hlIH0gZnJvbSAnLi9jb25maWcnO1xuZXhwb3J0IGRlZmF1bHQgdXNlU1dSO1xuIiwiLy8gdXNlIFdlYWtNYXAgdG8gc3RvcmUgdGhlIG9iamVjdC0+a2V5IG1hcHBpbmdcbi8vIHNvIHRoZSBvYmplY3RzIGNhbiBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbi8vIFdlYWtNYXAgdXNlcyBhIGhhc2h0YWJsZSB1bmRlciB0aGUgaG9vZCwgc28gdGhlIGxvb2t1cFxuLy8gY29tcGxleGl0eSBpcyBhbG1vc3QgTygxKS5cbmNvbnN0IHRhYmxlID0gbmV3IFdlYWtNYXAoKTtcbi8vIGNvdW50ZXIgb2YgdGhlIGtleVxubGV0IGNvdW50ZXIgPSAwO1xuLy8gaGFzaGVzIGFuIGFycmF5IG9mIG9iamVjdHMgYW5kIHJldHVybnMgYSBzdHJpbmdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc2goYXJncykge1xuICAgIGlmICghYXJncy5sZW5ndGgpXG4gICAgICAgIHJldHVybiAnJztcbiAgICBsZXQga2V5ID0gJ2FyZyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBfaGFzaDtcbiAgICAgICAgaWYgKGFyZ3NbaV0gPT09IG51bGwgfHwgdHlwZW9mIGFyZ3NbaV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIGNvbnNpZGVyIHRoZSBjYXNlIHRoYXQgYXJnc1tpXSBpcyBhIHN0cmluZzpcbiAgICAgICAgICAgIC8vIGFyZ3NbaV0gICAgICAgIF9oYXNoXG4gICAgICAgICAgICAvLyBcInVuZGVmaW5lZFwiIC0+ICdcInVuZGVmaW5lZFwiJ1xuICAgICAgICAgICAgLy8gdW5kZWZpbmVkICAgLT4gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgIC8vIDEyMyAgICAgICAgIC0+ICcxMjMnXG4gICAgICAgICAgICAvLyBudWxsICAgICAgICAtPiAnbnVsbCdcbiAgICAgICAgICAgIC8vIFwibnVsbFwiICAgICAgLT4gJ1wibnVsbFwiJ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIF9oYXNoID0gJ1wiJyArIGFyZ3NbaV0gKyAnXCInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX2hhc2ggPSBTdHJpbmcoYXJnc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRhYmxlLmhhcyhhcmdzW2ldKSkge1xuICAgICAgICAgICAgICAgIF9oYXNoID0gY291bnRlcjtcbiAgICAgICAgICAgICAgICB0YWJsZS5zZXQoYXJnc1tpXSwgY291bnRlcisrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9oYXNoID0gdGFibGUuZ2V0KGFyZ3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleSArPSAnQCcgKyBfaGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRG9jdW1lbnRWaXNpYmxlKCkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09ICdoaWRkZW4nO1xuICAgIH1cbiAgICAvLyBhbHdheXMgYXNzdW1lIGl0J3MgdmlzaWJsZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPbmxpbmUoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3Iub25MaW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm9uTGluZTtcbiAgICB9XG4gICAgLy8gYWx3YXlzIGFzc3VtZSBpdCdzIG9ubGluZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZm4sIGludGVydmFsKSB7XG4gICAgbGV0IHBlbmRpbmcgPSBmYWxzZTtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKHBlbmRpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAocGVuZGluZyA9IGZhbHNlKSwgaW50ZXJ2YWwpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuY29uc3QgU1dSQ29uZmlnQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuU1dSQ29uZmlnQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdTV1JDb25maWdDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IFNXUkNvbmZpZ0NvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJy4vY29uZmlnJztcbi8qXG5UaGUgaWRlYVxuXG5BIFwiUGFnZVwiIGNvbXBvbmVudCByZW5kZXJzIHRoZSBjb250ZW50IG9mIDEgQVBJIHJlcXVlc3QsIGl0IGFjY2VwdHMgYW4gb2Zmc2V0IChpbiB0aGlzIGV4YW1wbGUgaXQncyBmcm9tKSxcbnVzZXMgYSBTV1IgaG9vayAodXNlU1dSKEFQSSArICc/bGltaXQ9JyArIGxpbWl0ICsgJyZmcm9tPScgKyBmcm9tKSkgYW5kIHJldHVybnMgaXRlbXMgKFByb2plY3RzKS5cblxuVGhlIFVJOlxuICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgIHwgICBQcm9qZWN0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xufCAgICAgfCAgICstLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbnwgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8XG58ICAgICB8ICAgKy0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxufCAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICstLT4gMSBQYWdlXG58ICAgICB8ICAgKy0tLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxufCAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgIC9wcm9qZWN0cy9saXN0P2xpbWl0PTRcbnwgICAgIHwgICArLS0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8XG4rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgIHwgICArLS0tLS0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICArICAvcHJvamVjdHMvbGlzdD9saW1pdD00JmZyb209MTIzXG4gICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxuICAgICAgfCAgICstLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbiAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8XG4gICAgICB8ICAgKy0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxuICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbiAgICAgIHwgICArLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgICAgICAgICB8ICAgICArXG4gICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgfCAgICstLS0tLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICAgICAgICAgIHwgICAgICsgIC9wcm9qZWN0cy9saXN0P2xpbWl0PTQmZnJvbT00NTZcbiAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8XG4gICAgICB8ICAgKy0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxuICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbiAgICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICAgICB8ICAgICB8XG4gICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxuICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICtcblxuVGhlIEFQSVxuLy8gKGluc2lkZSBgcmVuZGVyYClcblxuZnVuY3Rpb24gQXBwICgpIHtcbiAgY29uc3Qge1xuICAgIHBhZ2VzLCAgICAvLyBhbiBhcnJheSBvZiBlYWNoIHBhZ2UgY29tcG9uZW50XG4gICAgcGFnZVNXUnMsIC8vIGFuIGFycmF5IG9mIFNXUnMgb2YgZWFjaCBwYWdlXG4gICAgaXNMb2FkaW5nTW9yZSxcbiAgICBpc1JlYWNoaW5nRW5kLFxuICAgIGlzRW1wdHksXG4gICAgbG9hZE1vcmVcbiAgfSA9IHVzZVNXUlBhZ2VzKFxuICAgICdwcm9qZWN0LXBhZ2UnLCAvLyBrZXkgb2YgdGhpcyBwYWdlXG5cbiAgICAvLyA9PT09PT09PSB0aGUgYWN0dWFsIFBhZ2UgY29tcG9uZW50IVxuICAgICh7IG9mZnNldCwgd2l0aFNXUiB9KSA9PiB7XG4gICAgICAvLyByZXF1aXJlZDogdXNlIGB3aXRoU1dSYCB0byB3cmFwIHlvdXIgbWFpbiBTV1IgKHNvdXJjZSBvZiB5b3VyIHBhZ2luYXRpb24gQVBJKVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSB3aXRoU1dSKFxuICAgICAgICB1c2VTV1IoQVBJICsgJz9saW1pdD0xMCZmcm9tPScgKyBvZmZzZXQpIC8vIHJlcXVlc3QgcHJvamVjdHMgd2l0aCBvZmZzZXRcbiAgICAgIClcbiAgICAgIGlmICghZGF0YSkgcmV0dXJuIDxQbGFjZWhvbGRlcj5cbiAgICAgIHJldHVybiBkYXRhLnByb2plY3RzLm1hcChwcm9qZWN0ID0+IDxDYXJkIHByb2plY3Q9e3Byb2plY3R9IHRlYW09e3RlYW19PilcbiAgICB9LFxuICAgIC8vID09PT09PT09XG5cbiAgICAvLyBhIGZ1bmN0aW9uIGFjY2VwdHMgYSBTV1IncyBgZGF0YWAsIGFuZCByZXR1cm5zIHRoZSBvZmZzZXQgb2YgdGhlIG5leHQgcGFnZSAob3IgbnVsbClcbiAgICBkYXRhID0+IGRhdGEgJiYgZGF0YS5sZW5ndGggPj0gMTAgPyBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uY3JlYXRlZEF0IDogbnVsbCxcblxuICAgIC8vIChvcHRpb25hbCkgb3V0c2lkZSBkZXBzIG9mIHlvdXIgUGFnZSBjb21wb25lbnQuIGluIHRoaXMgY2FzZSBpdCdzIGVtcHR5XG4gICAgW11cbiAgKVxuXG4gIC8vIC4uLlxuXG4gIGlmIChpc0VtcHR5KSByZXR1cm4gPEVtcHR5UHJvamVjdHNQYWdlLz5cblxuICByZXR1cm4gPGRpdj5cbiAgICB7cGFnZXN9XG4gICAge2lzUmVhY2hpbmdFbmRcbiAgICAgID8gbnVsbFxuICAgICAgOiA8YnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ01vcmV9IG9uQ2xpY2s9e2xvYWRNb3JlfT5Mb2FkIE1vcmU8L2J1dHRvbj59XG4gIDwvZGl2PlxufVxuKi9cbmNvbnN0IHBhZ2VDYWNoZU1hcCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTV1JQYWdlcyhwYWdlS2V5LCBwYWdlRm4sIFNXUlRvT2Zmc2V0LCBkZXBzID0gW10pIHtcbiAgICBjb25zdCBwYWdlQ291bnRLZXkgPSBgX3N3cl9wYWdlX2NvdW50X2AgKyBwYWdlS2V5O1xuICAgIGNvbnN0IHBhZ2VPZmZzZXRLZXkgPSBgX3N3cl9wYWdlX29mZnNldF9gICsgcGFnZUtleTtcbiAgICBjb25zdCBbcGFnZUNvdW50LCBzZXRQYWdlQ291bnRdID0gdXNlU3RhdGUoY2FjaGUuZ2V0KHBhZ2VDb3VudEtleSkgfHwgMSk7XG4gICAgY29uc3QgW3BhZ2VPZmZzZXRzLCBzZXRQYWdlT2Zmc2V0c10gPSB1c2VTdGF0ZShjYWNoZS5nZXQocGFnZU9mZnNldEtleSkgfHwgW251bGxdKTtcbiAgICBjb25zdCBbcGFnZVNXUnMsIHNldFBhZ2VTV1JzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBwYWdlRm5SZWYgPSB1c2VSZWYocGFnZUZuKTtcbiAgICBjb25zdCBlbXB0eVBhZ2VSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIFBhZ2UgY29tcG9uZW50ICh3cmFwcyBgcGFnZUZuYClcbiAgICAvLyBmb3IgcGVyZm9ybWFuY2UgcmVhc29uIHdlIG5lZWQgdG8gbWVtb3JpemUgaXRcbiAgICBjb25zdCBQYWdlID0gdXNlQ2FsbGJhY2socHJvcHMgPT4ge1xuICAgICAgICAvLyByZW5kZXIgdGhlIHBhZ2UgY29tcG9uZW50XG4gICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gcGFnZUZuUmVmLmN1cnJlbnQocHJvcHMpO1xuICAgICAgICAvLyBpZiBkYXRhTGlzdCBpcyBbXSwgd2UgY2FuIGFzc3VtZSB0aGlzIHBhZ2UgaXMgZW1wdHlcbiAgICAgICAgLy8gVE9ETzogdGhpcyBBUEkgaXMgbm90IHN0YWJsZVxuICAgICAgICBpZiAoZGF0YUxpc3QgJiYgIWRhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW1wdHlQYWdlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW1wdHlQYWdlUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YUxpc3Q7XG4gICAgfSwgW10pO1xuICAgIC8vIERvZXNuJ3QgaGF2ZSBhIG5leHQgcGFnZVxuICAgIGNvbnN0IGlzUmVhY2hpbmdFbmQgPSBwYWdlT2Zmc2V0c1twYWdlQ291bnRdID09PSBudWxsO1xuICAgIGNvbnN0IGlzTG9hZGluZ01vcmUgPSBwYWdlQ291bnQgPT09IHBhZ2VPZmZzZXRzLmxlbmd0aDtcbiAgICBjb25zdCBpc0VtcHR5ID0gaXNSZWFjaGluZ0VuZCAmJiBwYWdlQ291bnQgPT09IDEgJiYgZW1wdHlQYWdlUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgbG9hZE1vcmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChpc0xvYWRpbmdNb3JlIHx8IGlzUmVhY2hpbmdFbmQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNldFBhZ2VDb3VudChjID0+IHtcbiAgICAgICAgICAgIGNhY2hlLnNldChwYWdlQ291bnRLZXksIGMgKyAxKTtcbiAgICAgICAgICAgIHJldHVybiBjICsgMTtcbiAgICAgICAgfSk7XG4gICAgfSwgW2lzTG9hZGluZ01vcmUgfHwgaXNSZWFjaGluZ0VuZF0pO1xuICAgIGNvbnN0IF9wYWdlRm4gPSB1c2VDYWxsYmFjayhwYWdlRm4sIGRlcHMpO1xuICAgIHBhZ2VGblJlZi5jdXJyZW50ID0gX3BhZ2VGbjtcbiAgICBjb25zdCBwYWdlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRXaXRoU1dSID0gaWQgPT4gc3dyID0+IHtcbiAgICAgICAgICAgIGlmICghcGFnZVNXUnNbaWRdIHx8XG4gICAgICAgICAgICAgICAgcGFnZVNXUnNbaWRdLmRhdGEgIT09IHN3ci5kYXRhIHx8XG4gICAgICAgICAgICAgICAgcGFnZVNXUnNbaWRdLmVycm9yICE9PSBzd3IuZXJyb3IgfHxcbiAgICAgICAgICAgICAgICBwYWdlU1dSc1tpZF0ucmV2YWxpZGF0ZSAhPT0gc3dyLnJldmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBob2lzdCBzaWRlIGVmZmVjdHM6IHNldFBhZ2VTV1JzIGFuZCBzZXRQYWdlT2Zmc2V0cyAtLSBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAyMC8wMi8yNi9yZWFjdC12MTYuMTMuMC5odG1sI3dhcm5pbmdzLWZvci1zb21lLXVwZGF0ZXMtZHVyaW5nLXJlbmRlclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRQYWdlU1dScyhzd3JzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9zd3JzID0gWy4uLnN3cnNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3N3cnNbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHN3ci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBzd3IuZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0ZTogc3dyLnJldmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBzd3IuaXNWYWxpZGF0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0ZTogc3dyLm11dGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfc3dycztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3dyLmRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgbmV4dCBwYWdlJ3Mgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQYWdlT2Zmc2V0ID0gU1dSVG9PZmZzZXQoc3dyLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFnZU9mZnNldHNbaWQgKyAxXSAhPT0gbmV3UGFnZU9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2VPZmZzZXRzKGFyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9hcnIgPSBbLi4uYXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FycltpZCArIDFdID0gbmV3UGFnZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KHBhZ2VPZmZzZXRLZXksIF9hcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2FycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN3cjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVuZGVyIGVhY2ggcGFnZVxuICAgICAgICBjb25zdCBwID0gW107XG4gICAgICAgIGlmICghcGFnZUNhY2hlTWFwLmhhcyhwYWdlS2V5KSkge1xuICAgICAgICAgICAgcGFnZUNhY2hlTWFwLnNldChwYWdlS2V5LCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZUNhY2hlID0gcGFnZUNhY2hlTWFwLmdldChwYWdlS2V5KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgaWYgKCFwYWdlQ2FjaGVbaV0gfHxcbiAgICAgICAgICAgICAgICBwYWdlQ2FjaGVbaV0ub2Zmc2V0ICE9PSBwYWdlT2Zmc2V0c1tpXSB8fFxuICAgICAgICAgICAgICAgIHBhZ2VDYWNoZVtpXS5wYWdlRm4gIT09IF9wYWdlRm4pIHtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHByb3BzIGNoYW5nZSBvciBhdCBpbml0XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBwYWdlIGFuZCBjYWNoZSBpdFxuICAgICAgICAgICAgICAgIHBhZ2VDYWNoZVtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAoUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlLCB7IGtleTogYHBhZ2UtJHtwYWdlT2Zmc2V0c1tpXX0tJHtpfWAsIG9mZnNldDogcGFnZU9mZnNldHNbaV0sIHdpdGhTV1I6IGdldFdpdGhTV1IoaSkgfSkpLFxuICAgICAgICAgICAgICAgICAgICBwYWdlRm46IF9wYWdlRm4sXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogcGFnZU9mZnNldHNbaV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5wdXNoKHBhZ2VDYWNoZVtpXS5jb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgIH0sIFtfcGFnZUZuLCBwYWdlQ291bnQsIHBhZ2VTV1JzLCBwYWdlT2Zmc2V0cywgcGFnZUtleV0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBwYWdlQ291bnQsXG4gICAgICAgIHBhZ2VTV1JzLFxuICAgICAgICBpc0xvYWRpbmdNb3JlLFxuICAgICAgICBpc1JlYWNoaW5nRW5kLFxuICAgICAgICBpc0VtcHR5LFxuICAgICAgICBsb2FkTW9yZVxuICAgIH07XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdENvbmZpZywgeyBDQUNIRV9SRVZBTElEQVRPUlMsIENPTkNVUlJFTlRfUFJPTUlTRVMsIENPTkNVUlJFTlRfUFJPTUlTRVNfVFMsIEZPQ1VTX1JFVkFMSURBVE9SUywgTVVUQVRJT05fVFMsIGNhY2hlIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IGlzRG9jdW1lbnRWaXNpYmxlIGZyb20gJy4vbGlicy9pcy1kb2N1bWVudC12aXNpYmxlJztcbmltcG9ydCBpc09ubGluZSBmcm9tICcuL2xpYnMvaXMtb25saW5lJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL2xpYnMvdGhyb3R0bGUnO1xuaW1wb3J0IFNXUkNvbmZpZ0NvbnRleHQgZnJvbSAnLi9zd3ItY29uZmlnLWNvbnRleHQnO1xuY29uc3QgSVNfU0VSVkVSID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG4vLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci5cbmNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBJU19TRVJWRVIgPyB1c2VFZmZlY3QgOiB1c2VMYXlvdXRFZmZlY3Q7XG5jb25zdCB0cmlnZ2VyID0gKF9rZXksIHNob3VsZFJldmFsaWRhdGUgPSB0cnVlKSA9PiB7XG4gICAgLy8gd2UgYXJlIGlnbm9yaW5nIHRoZSBzZWNvbmQgYXJndW1lbnQgd2hpY2ggY29ycmVzcG9uZCB0byB0aGUgYXJndW1lbnRzXG4gICAgLy8gdGhlIGZldGNoZXIgd2lsbCByZWNlaXZlIHdoZW4ga2V5IGlzIGFuIGFycmF5XG4gICAgY29uc3QgW2tleSwgLCBrZXlFcnJdID0gY2FjaGUuc2VyaWFsaXplS2V5KF9rZXkpO1xuICAgIGlmICgha2V5KVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgdXBkYXRlcnMgPSBDQUNIRV9SRVZBTElEQVRPUlNba2V5XTtcbiAgICBpZiAoa2V5ICYmIHVwZGF0ZXJzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gY2FjaGUuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRFcnJvciA9IGNhY2hlLmdldChrZXlFcnIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB1cGRhdGVyc1tpXShzaG91bGRSZXZhbGlkYXRlLCBjdXJyZW50RGF0YSwgY3VycmVudEVycm9yLCBpID4gMCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgYnJvYWRjYXN0U3RhdGUgPSAoa2V5LCBkYXRhLCBlcnJvcikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZXJzID0gQ0FDSEVfUkVWQUxJREFUT1JTW2tleV07XG4gICAgaWYgKGtleSAmJiB1cGRhdGVycykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB1cGRhdGVyc1tpXShmYWxzZSwgZGF0YSwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IG11dGF0ZSA9IGFzeW5jIChfa2V5LCBfZGF0YSwgc2hvdWxkUmV2YWxpZGF0ZSA9IHRydWUpID0+IHtcbiAgICBjb25zdCBba2V5XSA9IGNhY2hlLnNlcmlhbGl6ZUtleShfa2V5KTtcbiAgICBpZiAoIWtleSlcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBkYXRhLCBjYWxsIHJldmFsaWRhdGUgYWdhaW5zdCB0aGUga2V5XG4gICAgaWYgKHR5cGVvZiBfZGF0YSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybiB0cmlnZ2VyKF9rZXksIHNob3VsZFJldmFsaWRhdGUpO1xuICAgIC8vIHVwZGF0ZSB0aW1lc3RhbXBcbiAgICBNVVRBVElPTl9UU1trZXldID0gRGF0ZS5ub3coKSAtIDE7XG4gICAgbGV0IGRhdGEsIGVycm9yO1xuICAgIGlmIChfZGF0YSAmJiB0eXBlb2YgX2RhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gYF9kYXRhYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0IHBhc3NpbmcgY3VycmVudCBjYWNoZSB2YWx1ZVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IF9kYXRhKGNhY2hlLmdldChrZXkpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChfZGF0YSAmJiB0eXBlb2YgX2RhdGEudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBgX2RhdGFgIGlzIGEgcHJvbWlzZVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IF9kYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkYXRhID0gX2RhdGE7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gdXBkYXRlIGNhY2hlZCBkYXRhLCBhdm9pZCBub3RpZnlpbmcgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgY2FjaGUuc2V0KGtleSwgZGF0YSwgZmFsc2UpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgZXhpc3RpbmcgU1dSIEhvb2tzJyBzdGF0ZVxuICAgIGNvbnN0IHVwZGF0ZXJzID0gQ0FDSEVfUkVWQUxJREFUT1JTW2tleV07XG4gICAgaWYgKHVwZGF0ZXJzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHVwZGF0ZXJzW2ldKCEhc2hvdWxkUmV2YWxpZGF0ZSwgZGF0YSwgZXJyb3IsIGkgPiAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0aHJvdyBlcnJvciBvciByZXR1cm4gZGF0YSB0byBiZSB1c2VkIGJ5IGNhbGxlciBvZiBtdXRhdGVcbiAgICBpZiAoZXJyb3IpXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIHJldHVybiBkYXRhO1xufTtcbmZ1bmN0aW9uIHVzZVNXUiguLi5hcmdzKSB7XG4gICAgbGV0IF9rZXksIGZuLCBjb25maWcgPSB7fTtcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gMSkge1xuICAgICAgICBfa2V5ID0gYXJnc1swXTtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xuICAgICAgICBmbiA9IGFyZ3NbMV07XG4gICAgICAgIGNvbmZpZyA9IGFyZ3NbMl07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuID0gYXJnc1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IGFyZ3NbMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2UgYXNzdW1lIGBrZXlgIGFzIHRoZSBpZGVudGlmaWVyIG9mIHRoZSByZXF1ZXN0XG4gICAgLy8gYGtleWAgY2FuIGNoYW5nZSBidXQgYGZuYCBzaG91bGRuJ3RcbiAgICAvLyAoYmVjYXVzZSBgcmV2YWxpZGF0ZWAgb25seSBkZXBlbmRzIG9uIGBrZXlgKVxuICAgIC8vIGBrZXlFcnJgIGlzIHRoZSBjYWNoZSBrZXkgZm9yIGVycm9yIG9iamVjdHNcbiAgICBjb25zdCBba2V5LCBmbkFyZ3MsIGtleUVycl0gPSBjYWNoZS5zZXJpYWxpemVLZXkoX2tleSk7XG4gICAgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgdXNlQ29udGV4dChTV1JDb25maWdDb250ZXh0KSwgY29uZmlnKTtcbiAgICBpZiAodHlwZW9mIGZuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyB1c2UgYSBnbG9iYWwgZmV0Y2hlclxuICAgICAgICBmbiA9IGNvbmZpZy5mZXRjaGVyO1xuICAgIH1cbiAgICBjb25zdCBpbml0aWFsRGF0YSA9IGNhY2hlLmdldChrZXkpIHx8IGNvbmZpZy5pbml0aWFsRGF0YTtcbiAgICBjb25zdCBpbml0aWFsRXJyb3IgPSBjYWNoZS5nZXQoa2V5RXJyKTtcbiAgICAvLyBpZiBhIHN0YXRlIGlzIGFjY2Vzc2VkIChkYXRhLCBlcnJvciBvciBpc1ZhbGlkYXRpbmcpLFxuICAgIC8vIHdlIGFkZCB0aGUgc3RhdGUgdG8gZGVwZW5kZW5jaWVzIHNvIGlmIHRoZSBzdGF0ZSBpc1xuICAgIC8vIHVwZGF0ZWQgaW4gdGhlIGZ1dHVyZSwgd2UgY2FuIHRyaWdnZXIgYSByZXJlbmRlclxuICAgIGNvbnN0IHN0YXRlRGVwZW5kZW5jaWVzID0gdXNlUmVmKHtcbiAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IHN0YXRlUmVmID0gdXNlUmVmKHtcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGEsXG4gICAgICAgIGVycm9yOiBpbml0aWFsRXJyb3IsXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCByZXJlbmRlciA9IHVzZVN0YXRlKG51bGwpWzFdO1xuICAgIGxldCBkaXNwYXRjaCA9IHVzZUNhbGxiYWNrKHBheWxvYWQgPT4ge1xuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgayBpbiBwYXlsb2FkKSB7XG4gICAgICAgICAgICBzdGF0ZVJlZi5jdXJyZW50W2tdID0gcGF5bG9hZFtrXTtcbiAgICAgICAgICAgIGlmIChzdGF0ZURlcGVuZGVuY2llcy5jdXJyZW50W2tdKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGVTdGF0ZSB8fCBjb25maWcuc3VzcGVuc2UpIHtcbiAgICAgICAgICAgIHJlcmVuZGVyKHt9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBlcnJvciByZWYgaW5zaWRlIHJldmFsaWRhdGUgKGlzIGxhc3QgcmVxdWVzdCBlcnJvcmVkPylcbiAgICBjb25zdCB1bm1vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGtleVJlZiA9IHVzZVJlZihrZXkpO1xuICAgIGNvbnN0IGJvdW5kTXV0YXRlID0gdXNlQ2FsbGJhY2soKGRhdGEsIHNob3VsZFJldmFsaWRhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG11dGF0ZShrZXksIGRhdGEsIHNob3VsZFJldmFsaWRhdGUpO1xuICAgIH0sIFtrZXldKTtcbiAgICAvLyBzdGFydCBhIHJldmFsaWRhdGlvblxuICAgIGNvbnN0IHJldmFsaWRhdGUgPSB1c2VDYWxsYmFjayhhc3luYyAocmV2YWxpZGF0ZU9wdHMgPSB7fSkgPT4ge1xuICAgICAgICBpZiAoIWtleSB8fCAhZm4pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh1bm1vdW50ZWRSZWYuY3VycmVudClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV2YWxpZGF0ZU9wdHMgPSBPYmplY3QuYXNzaWduKHsgZGVkdXBlOiBmYWxzZSB9LCByZXZhbGlkYXRlT3B0cyk7XG4gICAgICAgIGxldCBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IHNob3VsZERlZHVwaW5nID0gdHlwZW9mIENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XSAhPT0gJ3VuZGVmaW5lZCcgJiYgcmV2YWxpZGF0ZU9wdHMuZGVkdXBlO1xuICAgICAgICAvLyBzdGFydCBmZXRjaGluZ1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgbmV3RGF0YTtcbiAgICAgICAgICAgIGxldCBzdGFydEF0O1xuICAgICAgICAgICAgaWYgKHNob3VsZERlZHVwaW5nKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlcmUncyBhbHJlYWR5IGFuIG9uZ29pbmcgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG9uZSBuZWVkcyB0byBiZSBkZWR1cGxpY2F0ZWQuXG4gICAgICAgICAgICAgICAgc3RhcnRBdCA9IENPTkNVUlJFTlRfUFJPTUlTRVNfVFNba2V5XTtcbiAgICAgICAgICAgICAgICBuZXdEYXRhID0gYXdhaXQgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgbm90IGRlZHVwaW5nIHRoZSByZXF1ZXN0IChoYXJkIHJldmFsaWRhdGUpIGJ1dFxuICAgICAgICAgICAgICAgIC8vIHRoZXJlJ3JlIG90aGVyIG9uZ29pbmcgcmVxdWVzdChzKSBhdCB0aGUgc2FtZSB0aW1lLFxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBvdGhlciByZXN1bHQocykgdG8gYXZvaWRcbiAgICAgICAgICAgICAgICAvLyBwb3NzaWJsZSByYWNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgICAgICAgLy8gcmVxMS0tLS0tLS0tLS0tLS0tLS0tLT5yZXMxXG4gICAgICAgICAgICAgICAgLy8gICAgICByZXEyLS0tLS0tLS0+cmVzMlxuICAgICAgICAgICAgICAgIC8vIGluIHRoYXQgY2FzZSwgdGhlIHNlY29uZCByZXNwb25zZSBzaG91bGQgbm90IGJlIG92ZXJyaWRkZW5cbiAgICAgICAgICAgICAgICAvLyBieSB0aGUgZmlyc3Qgb25lLlxuICAgICAgICAgICAgICAgIGlmIChDT05DVVJSRU5UX1BST01JU0VTW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIG1hcmsgaXQgYXMgYSBtdXRhdGlvbiB0byBpZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsIHJlcXVlc3RzIHdoaWNoIGFyZSBmaXJlZCBiZWZvcmUgdGhpcyBvbmVcbiAgICAgICAgICAgICAgICAgICAgTVVUQVRJT05fVFNba2V5XSA9IERhdGUubm93KCkgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiBubyBjYWNoZSBiZWluZyByZW5kZXJlZCBjdXJyZW50bHkgKGl0IHNob3dzIGEgYmxhbmsgcGFnZSksXG4gICAgICAgICAgICAgICAgLy8gd2UgdHJpZ2dlciB0aGUgbG9hZGluZyBzbG93IGV2ZW50LlxuICAgICAgICAgICAgICAgIGlmIChjb25maWcubG9hZGluZ1RpbWVvdXQgJiYgIWNhY2hlLmdldChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uTG9hZGluZ1Nsb3coa2V5LCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICB9LCBjb25maWcubG9hZGluZ1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm5BcmdzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XSA9IGZuKC4uLmZuQXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDT05DVVJSRU5UX1BST01JU0VTW2tleV0gPSBmbihrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBDT05DVVJSRU5UX1BST01JU0VTX1RTW2tleV0gPSBzdGFydEF0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBuZXdEYXRhID0gYXdhaXQgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgQ09OQ1VSUkVOVF9QUk9NSVNFU19UU1trZXldO1xuICAgICAgICAgICAgICAgIH0sIGNvbmZpZy5kZWR1cGluZ0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBzdWNjZXNzIGV2ZW50LFxuICAgICAgICAgICAgICAgIC8vIG9ubHkgZG8gdGhpcyBmb3IgdGhlIG9yaWdpbmFsIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgY29uZmlnLm9uU3VjY2VzcyhuZXdEYXRhLCBrZXksIGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmV2YWxpZGF0aW9uIGhhcHBlbmVkIGVhcmxpZXIgdGhhbiB0aGUgbG9jYWwgbXV0YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIGlnbm9yZSB0aGUgcmVzdWx0IGJlY2F1c2UgaXQgY291bGQgb3ZlcnJpZGUuXG4gICAgICAgICAgICAvLyBtZWFud2hpbGUsIGEgbmV3IHJldmFsaWRhdGlvbiBzaG91bGQgYmUgdHJpZ2dlcmVkIGJ5IHRoZSBtdXRhdGlvbi5cbiAgICAgICAgICAgIGlmIChNVVRBVElPTl9UU1trZXldICYmIHN0YXJ0QXQgPD0gTVVUQVRJT05fVFNba2V5XSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgaXNWYWxpZGF0aW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZS5zZXQoa2V5LCBuZXdEYXRhLCBmYWxzZSk7XG4gICAgICAgICAgICBjYWNoZS5zZXQoa2V5RXJyLCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIG5ldyBzdGF0ZSBmb3IgdGhlIHJlZHVjZXJcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlUmVmLmN1cnJlbnQuZXJyb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgaGF2ZSBhbiBlcnJvclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjb25maWcuY29tcGFyZShzdGF0ZVJlZi5jdXJyZW50LmRhdGEsIG5ld0RhdGEpKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVlcCBjb21wYXJlIHRvIGF2b2lkIGV4dHJhIHJlLXJlbmRlclxuICAgICAgICAgICAgICAgIC8vIGRhdGEgY2hhbmdlZFxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmRhdGEgPSBuZXdEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWVyZ2UgdGhlIG5ldyBzdGF0ZVxuICAgICAgICAgICAgZGlzcGF0Y2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgaWYgKCFzaG91bGREZWR1cGluZykge1xuICAgICAgICAgICAgICAgIC8vIGFsc28gdXBkYXRlIG90aGVyIGhvb2tzXG4gICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGUoa2V5LCBuZXdEYXRhLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBDT05DVVJSRU5UX1BST01JU0VTW2tleV07XG4gICAgICAgICAgICBkZWxldGUgQ09OQ1VSUkVOVF9QUk9NSVNFU19UU1trZXldO1xuICAgICAgICAgICAgY2FjaGUuc2V0KGtleUVyciwgZXJyLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyBnZXQgYSBuZXcgZXJyb3JcbiAgICAgICAgICAgIC8vIGRvbid0IHVzZSBkZWVwIGVxdWFsIGZvciBlcnJvcnNcbiAgICAgICAgICAgIGlmIChzdGF0ZVJlZi5jdXJyZW50LmVycm9yICE9PSBlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBrZWVwIHRoZSBzdGFsZSBkYXRhXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzaG91bGREZWR1cGluZykge1xuICAgICAgICAgICAgICAgICAgICAvLyBhbHNvIGJyb2FkY2FzdCB0byB1cGRhdGUgb3RoZXIgaG9va3NcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGUoa2V5LCB1bmRlZmluZWQsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXZlbnRzIGFuZCByZXRyeVxuICAgICAgICAgICAgY29uZmlnLm9uRXJyb3IoZXJyLCBrZXksIGNvbmZpZyk7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnNob3VsZFJldHJ5T25FcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gcmV0cnlpbmcsIHdlIGFsd2F5cyBlbmFibGUgZGVkdXBpbmdcbiAgICAgICAgICAgICAgICBjb25zdCByZXRyeUNvdW50ID0gKHJldmFsaWRhdGVPcHRzLnJldHJ5Q291bnQgfHwgMCkgKyAxO1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vbkVycm9yUmV0cnkoZXJyLCBrZXksIGNvbmZpZywgcmV2YWxpZGF0ZSwgT2JqZWN0LmFzc2lnbih7IGRlZHVwZTogdHJ1ZSB9LCByZXZhbGlkYXRlT3B0cywgeyByZXRyeUNvdW50IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIFtrZXldKTtcbiAgICAvLyBtb3VudGVkIChjbGllbnQgc2lkZSByZW5kZXJpbmcpXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICgha2V5KVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgLy8gYWZ0ZXIgYGtleWAgdXBkYXRlcywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIG1vdW50ZWRcbiAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgLy8gYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIChoeWRyYXRlZCksXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBkYXRhIGZyb20gdGhlIGNhY2hlXG4gICAgICAgIC8vIGFuZCB0cmlnZ2VyIGEgcmV2YWxpZGF0aW9uXG4gICAgICAgIGNvbnN0IGN1cnJlbnRIb29rRGF0YSA9IHN0YXRlUmVmLmN1cnJlbnQuZGF0YTtcbiAgICAgICAgY29uc3QgbGF0ZXN0S2V5ZWREYXRhID0gY2FjaGUuZ2V0KGtleSkgfHwgY29uZmlnLmluaXRpYWxEYXRhO1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIGlmIHRoZSBrZXkgY2hhbmdlZCAobm90IHRoZSBpbml0YWwgcmVuZGVyKSBvciBjYWNoZSB1cGRhdGVkXG4gICAgICAgIGlmIChrZXlSZWYuY3VycmVudCAhPT0ga2V5IHx8XG4gICAgICAgICAgICAhY29uZmlnLmNvbXBhcmUoY3VycmVudEhvb2tEYXRhLCBsYXRlc3RLZXllZERhdGEpKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IGRhdGE6IGxhdGVzdEtleWVkRGF0YSB9KTtcbiAgICAgICAgICAgIGtleVJlZi5jdXJyZW50ID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldmFsaWRhdGUgd2l0aCBkZWR1cGluZ1xuICAgICAgICBjb25zdCBzb2Z0UmV2YWxpZGF0ZSA9ICgpID0+IHJldmFsaWRhdGUoeyBkZWR1cGU6IHRydWUgfSk7XG4gICAgICAgIC8vIHRyaWdnZXIgYSByZXZhbGlkYXRpb25cbiAgICAgICAgaWYgKGNvbmZpZy5yZXZhbGlkYXRlT25Nb3VudCB8fFxuICAgICAgICAgICAgKCFjb25maWcuaW5pdGlhbERhdGEgJiYgY29uZmlnLnJldmFsaWRhdGVPbk1vdW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdGVzdEtleWVkRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAhSVNfU0VSVkVSICYmXG4gICAgICAgICAgICAgICAgd2luZG93WydyZXF1ZXN0SWRsZUNhbGxiYWNrJ10pIHtcbiAgICAgICAgICAgICAgICAvLyBkZWxheSByZXZhbGlkYXRlIGlmIHRoZXJlJ3MgY2FjaGVcbiAgICAgICAgICAgICAgICAvLyB0byBub3QgYmxvY2sgdGhlIHJlbmRlcmluZ1xuICAgICAgICAgICAgICAgIHdpbmRvd1sncmVxdWVzdElkbGVDYWxsYmFjayddKHNvZnRSZXZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2hlbmV2ZXIgdGhlIHdpbmRvdyBnZXRzIGZvY3VzZWQsIHJldmFsaWRhdGVcbiAgICAgICAgbGV0IG9uRm9jdXM7XG4gICAgICAgIGlmIChjb25maWcucmV2YWxpZGF0ZU9uRm9jdXMpIHtcbiAgICAgICAgICAgIC8vIHRocm90dGxlOiBhdm9pZCBiZWluZyBjYWxsZWQgdHdpY2UgZnJvbSBib3RoIGxpc3RlbmVyc1xuICAgICAgICAgICAgLy8gYW5kIHRhYnMgYmVpbmcgc3dpdGNoZWQgcXVpY2tseVxuICAgICAgICAgICAgb25Gb2N1cyA9IHRocm90dGxlKHNvZnRSZXZhbGlkYXRlLCBjb25maWcuZm9jdXNUaHJvdHRsZUludGVydmFsKTtcbiAgICAgICAgICAgIGlmICghRk9DVVNfUkVWQUxJREFUT1JTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBGT0NVU19SRVZBTElEQVRPUlNba2V5XSA9IFtvbkZvY3VzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEZPQ1VTX1JFVkFMSURBVE9SU1trZXldLnB1c2gob25Gb2N1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVnaXN0ZXIgZ2xvYmFsIGNhY2hlIHVwZGF0ZSBsaXN0ZW5lclxuICAgICAgICBjb25zdCBvblVwZGF0ZSA9IChzaG91bGRSZXZhbGlkYXRlID0gdHJ1ZSwgdXBkYXRlZERhdGEsIHVwZGF0ZWRFcnJvciwgZGVkdXBlID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gdXBkYXRlIGhvb2sgc3RhdGVcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG4gICAgICAgICAgICBsZXQgbmVlZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cGRhdGVkRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAhY29uZmlnLmNvbXBhcmUoc3RhdGVSZWYuY3VycmVudC5kYXRhLCB1cGRhdGVkRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kYXRhID0gdXBkYXRlZERhdGE7XG4gICAgICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbHdheXMgdXBkYXRlIGVycm9yXG4gICAgICAgICAgICAvLyBiZWNhdXNlIGl0IGNhbiBiZSBgdW5kZWZpbmVkYFxuICAgICAgICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQuZXJyb3IgIT09IHVwZGF0ZWRFcnJvcikge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmVycm9yID0gdXBkYXRlZEVycm9yO1xuICAgICAgICAgICAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5lZWRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChuZXdTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWR1cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gYWRkIHVwZGF0ZXIgdG8gbGlzdGVuZXJzXG4gICAgICAgIGlmICghQ0FDSEVfUkVWQUxJREFUT1JTW2tleV0pIHtcbiAgICAgICAgICAgIENBQ0hFX1JFVkFMSURBVE9SU1trZXldID0gW29uVXBkYXRlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIENBQ0hFX1JFVkFMSURBVE9SU1trZXldLnB1c2gob25VcGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCB1cCByZWNvbm5lY3Rpbmcgd2hlbiB0aGUgYnJvd3NlciByZWdhaW5zIG5ldHdvcmsgY29ubmVjdGlvblxuICAgICAgICBsZXQgcmVjb25uZWN0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFJU19TRVJWRVIgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJiYgY29uZmlnLnJldmFsaWRhdGVPblJlY29ubmVjdCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIChyZWNvbm5lY3QgPSBzb2Z0UmV2YWxpZGF0ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjbGVhbnVwXG4gICAgICAgICAgICBkaXNwYXRjaCA9ICgpID0+IG51bGw7XG4gICAgICAgICAgICAvLyBtYXJrIGl0IGFzIHVubW91bnRlZFxuICAgICAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKG9uRm9jdXMgJiYgRk9DVVNfUkVWQUxJREFUT1JTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXZhbGlkYXRvcnMgPSBGT0NVU19SRVZBTElEQVRPUlNba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHJldmFsaWRhdG9ycy5pbmRleE9mKG9uRm9jdXMpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDEweCBmYXN0ZXIgdGhhbiBzcGxpY2VcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9qc3BlcmYuY29tL2FycmF5LXJlbW92ZS1ieS1pbmRleFxuICAgICAgICAgICAgICAgICAgICByZXZhbGlkYXRvcnNbaW5kZXhdID0gcmV2YWxpZGF0b3JzW3JldmFsaWRhdG9ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0b3JzLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChDQUNIRV9SRVZBTElEQVRPUlNba2V5XSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldmFsaWRhdG9ycyA9IENBQ0hFX1JFVkFMSURBVE9SU1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmV2YWxpZGF0b3JzLmluZGV4T2Yob25VcGRhdGUpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdG9yc1tpbmRleF0gPSByZXZhbGlkYXRvcnNbcmV2YWxpZGF0b3JzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXZhbGlkYXRvcnMucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFJU19TRVJWRVIgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgcmVjb25uZWN0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29ubGluZScsIHJlY29ubmVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW2tleSwgcmV2YWxpZGF0ZV0pO1xuICAgIC8vIHNldCB1cCBwb2xsaW5nXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCB0aW1lciA9IG51bGw7XG4gICAgICAgIGNvbnN0IHRpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN0YXRlUmVmLmN1cnJlbnQuZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAoY29uZmlnLnJlZnJlc2hXaGVuSGlkZGVuIHx8IGlzRG9jdW1lbnRWaXNpYmxlKCkpICYmXG4gICAgICAgICAgICAgICAgKGNvbmZpZy5yZWZyZXNoV2hlbk9mZmxpbmUgfHwgaXNPbmxpbmUoKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHJldmFsaWRhdGUgd2hlbiB0aGUgcGFnZSBpcyB2aXNpYmxlXG4gICAgICAgICAgICAgICAgLy8gaWYgQVBJIHJlcXVlc3QgZXJyb3JlZCwgd2Ugc3RvcCBwb2xsaW5nIGluIHRoaXMgcm91bmRcbiAgICAgICAgICAgICAgICAvLyBhbmQgbGV0IHRoZSBlcnJvciByZXRyeSBmdW5jdGlvbiBoYW5kbGUgaXRcbiAgICAgICAgICAgICAgICBhd2FpdCByZXZhbGlkYXRlKHsgZGVkdXBlOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5yZWZyZXNoSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQodGljaywgY29uZmlnLnJlZnJlc2hJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjb25maWcucmVmcmVzaEludGVydmFsKSB7XG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQodGljaywgY29uZmlnLnJlZnJlc2hJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aW1lcilcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgY29uZmlnLnJlZnJlc2hJbnRlcnZhbCxcbiAgICAgICAgY29uZmlnLnJlZnJlc2hXaGVuSGlkZGVuLFxuICAgICAgICBjb25maWcucmVmcmVzaFdoZW5PZmZsaW5lLFxuICAgICAgICByZXZhbGlkYXRlXG4gICAgXSk7XG4gICAgLy8gc3VzcGVuc2VcbiAgICBpZiAoY29uZmlnLnN1c3BlbnNlKSB7XG4gICAgICAgIC8vIGluIHN1c3BlbnNlIG1vZGUsIHdlIGNhbid0IHJldHVybiBlbXB0eSBzdGF0ZVxuICAgICAgICAvLyAoaXQgc2hvdWxkIGJlIHN1c3BlbmRlZClcbiAgICAgICAgLy8gdHJ5IHRvIGdldCBkYXRhIGFuZCBlcnJvciBmcm9tIGNhY2hlXG4gICAgICAgIGxldCBsYXRlc3REYXRhID0gY2FjaGUuZ2V0KGtleSk7XG4gICAgICAgIGxldCBsYXRlc3RFcnJvciA9IGNhY2hlLmdldChrZXlFcnIpO1xuICAgICAgICBpZiAodHlwZW9mIGxhdGVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgbGF0ZXN0RXJyb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIHN0YXJ0IHRoZSByZXF1ZXN0IGlmIGl0IGhhc24ndFxuICAgICAgICAgICAgaWYgKCFDT05DVVJSRU5UX1BST01JU0VTW2tleV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHJldmFsaWRhdGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAvLyB0byBnZXQgdGhlIHByb21pc2VcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgYSBwcm9taXNlXG4gICAgICAgICAgICAgICAgdGhyb3cgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXQncyBhIHZhbHVlLCByZXR1cm4gaXQgZGlyZWN0bHkgKG92ZXJyaWRlKVxuICAgICAgICAgICAgbGF0ZXN0RGF0YSA9IENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxhdGVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGxhdGVzdEVycm9yKSB7XG4gICAgICAgICAgICAvLyBpbiBzdXNwZW5zZSBtb2RlLCB0aHJvdyBlcnJvciBpZiB0aGVyZSdzIG5vIGNvbnRlbnRcbiAgICAgICAgICAgIHRocm93IGxhdGVzdEVycm9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiB0aGUgbGF0ZXN0IGRhdGEgLyBlcnJvciBmcm9tIGNhY2hlXG4gICAgICAgIC8vIGluIGNhc2UgYGtleWAgaGFzIGNoYW5nZWRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yOiBsYXRlc3RFcnJvcixcbiAgICAgICAgICAgIGRhdGE6IGxhdGVzdERhdGEsXG4gICAgICAgICAgICByZXZhbGlkYXRlLFxuICAgICAgICAgICAgbXV0YXRlOiBib3VuZE11dGF0ZSxcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzogc3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkYXRpbmdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZGVmaW5lIHJldHVybmVkIHN0YXRlXG4gICAgLy8gY2FuIGJlIG1lbW9yaXplZCBzaW5jZSB0aGUgc3RhdGUgaXMgYSByZWZcbiAgICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0geyByZXZhbGlkYXRlLCBtdXRhdGU6IGJvdW5kTXV0YXRlIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0YXRlLCB7XG4gICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIC8vIGBrZXlgIG1pZ2h0IGJlIGNoYW5nZWQgaW4gdGhlIHVwY29taW5nIGhvb2sgcmUtcmVuZGVyLFxuICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGUgcHJldmlvdXMgc3RhdGUgd2lsbCBzdGF5XG4gICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBtYXRjaCB0aGUgbGF0ZXN0IGtleSBhbmQgZGF0YSAoZmFsbGJhY2sgdG8gYGluaXRpYWxEYXRhYClcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuY3VycmVudC5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlSZWYuY3VycmVudCA9PT0ga2V5ID8gc3RhdGVSZWYuY3VycmVudC5lcnJvciA6IGluaXRpYWxFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZURlcGVuZGVuY2llcy5jdXJyZW50LmRhdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5UmVmLmN1cnJlbnQgPT09IGtleSA/IHN0YXRlUmVmLmN1cnJlbnQuZGF0YSA6IGluaXRpYWxEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuY3VycmVudC5pc1ZhbGlkYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkYXRpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sIFtyZXZhbGlkYXRlXSk7XG59XG5jb25zdCBTV1JDb25maWcgPSBTV1JDb25maWdDb250ZXh0LlByb3ZpZGVyO1xuZXhwb3J0IHsgdHJpZ2dlciwgbXV0YXRlLCBTV1JDb25maWcgfTtcbmV4cG9ydCBkZWZhdWx0IHVzZVNXUjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgTW9yZVN0b3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXMnXG5pbXBvcnQgSGVyb1Bvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvLXBvc3QnXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uL2xpYi9hcGknXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDTVNfTkFNRSB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgUG9zdCBmcm9tICcuLi90eXBlcy9wb3N0J1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFsbFBvc3RzOiBQb3N0W11cbn1cblxuY29uc3QgSW5kZXg6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFsbFBvc3RzIH0pID0+IHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBhbGxQb3N0c1swXVxuICBjb25zdCBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxKVxuXG4gIGNvbnN0IGNtc3VybCA9ICdodHRwczovL215YmxvZy1uZXh0anMubWljcm9jbXMuaW8vYXBpL3YxL2Jsb2cnXG5cbiAgLypcbiAgY29uc3QgZmV0Y2hlciA9IChcbiAgICBtZXNzYWdlOiB7Y29udGVudHM6IHtcbiAgICAgIGlkOiBzdHJpbmcsXG4gICAgICBjcmVhdGVkQXQ6IHN0cmluZyxcbiAgICAgIHVwZGF0ZWRBdDogc3RyaW5nLFxuICAgICAgdGl0bGU6IHN0cmluZyxcbiAgICAgIGV4Y2VycHQ6IHN0cmluZyxcbiAgICAgIGRhdGU6IHN0cmluZyxcbiAgICAgIHNsdWc6IHN0cmluZyxcbiAgICAgIGJsb2d0ZXh0OiBzdHJpbmcsXG4gICAgfX0pID0+IGZldGNoKGNtc3VybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnMgOiB7XG4gICAgICAgICdYLUFQST1LRVknOlwiYzJiZjMwZDMtMWRhMi00NWEzLTgzMjctYjk5MmI5MDA2YWYzXCJcbiAgICAgIH1cbiAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblxuICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGNtc3VybCwgZmV0Y2hlcilcbiAgKi9cblxuICBjb25zdCBmZXRjaGVyID0gKFxuICAgIHVybCA6IHN0cmluZ1xuICApID0+IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9mYWNlYm9vay9yZXBvc1wiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZmFjZWJvb2svcmVwb3NcIiwgZmV0Y2hlcilcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk5leHQuanMgQmxvZyBFeGFtcGxlIHdpdGgge0NNU19OQU1FfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgICB7aGVyb1Bvc3QgJiYgKFxuICAgICAgICAgICAgPEhlcm9Qb3N0XG4gICAgICAgICAgICAgIHRpdGxlPXtoZXJvUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17aGVyb1Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXtoZXJvUG9zdC5hdXRob3J9XG4gICAgICAgICAgICAgIHNsdWc9e2hlcm9Qb3N0LnNsdWd9XG4gICAgICAgICAgICAgIGV4Y2VycHQ9e2hlcm9Qb3N0LmV4Y2VycHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==