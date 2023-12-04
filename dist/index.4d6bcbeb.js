// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cz7Qg":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _riza = require("riza");
var _utils = require("./utils");
var _random = require("./random");
var _config = require("./config");
var _images = require("./images");
var _persona = require("./persona");
var _personaDefault = parcelHelpers.interopDefault(_persona);
var _guardia = require("./guardia");
var _guardiaDefault = parcelHelpers.interopDefault(_guardia);
const getSpawnPoint = (0, _random.randItem)([
    [
        -25,
        515
    ],
    [
        -25,
        587
    ],
    [
        -25,
        720
    ],
    [
        96,
        800
    ],
    [
        260,
        800
    ],
    [
        380,
        800
    ],
    [
        545,
        800
    ],
    [
        635,
        800
    ],
    [
        700,
        800
    ],
    [
        825,
        800
    ],
    [
        940,
        800
    ],
    [
        1030,
        800
    ],
    [
        1170,
        800
    ],
    [
        1160,
        800
    ],
    [
        1370,
        745
    ],
    [
        1370,
        685
    ],
    [
        1370,
        600
    ],
    [
        1370,
        500
    ]
]);
const posicionFila = [
    660,
    480
];
const posicionPuerta = [
    662,
    475
];
const posicionGuardia1 = [
    633,
    472
];
const posicionGuardia2 = [
    686,
    472
];
const C_DEBUG = "#fff";
const C_BANK = "#f0f";
const C_FAILURE = "#f33";
const C_SUCCESS = "#0c0";
const _$0 = (0, _riza.helpers).create("b", [], [
    (0, _riza.helpers).DYNAMIC
]);
const _$1 = (0, _riza.helpers).create("span", [
    "style",
    "position:absolute; left:16px; top:20px; color:#c0c;"
], [
    "Total Clientes: ",
    (0, _riza.helpers).DYNAMIC
]);
const _$2 = (0, _riza.helpers).create("span", [
    "style",
    "position:absolute; left:16px; top:40px; color:#c0c;"
], [
    "Total Fallos: ",
    (0, _riza.helpers).DYNAMIC
]);
const _$3 = (0, _riza.helpers).create("span", [
    "style",
    "position:absolute; left:16px; top:60px; color:#c0c;"
], [
    "Total Exitos: ",
    (0, _riza.helpers).DYNAMIC
]);
const _$4 = (0, _riza.helpers).create("span", [
    "style",
    "position:absolute; left:16px; top:100px; color:#c0c;"
], [
    "Prom. Espera Entrar: ",
    (0, _riza.helpers).DYNAMIC
]);
const _$5 = (0, _riza.helpers).create("span", [
    "style",
    "position:absolute; left:16px; top:120px; color:#c0c;"
], [
    "Prom. Espera Salir: ",
    (0, _riza.helpers).DYNAMIC
]);
function prepararSimulacion(ctx) {
    let bancoExterior = (0, _utils.crearObjeto)(ctx, null, (0, _images.IMG).bank_open, 400, 10);
    let bancoCerrado = (0, _utils.crearObjeto)(ctx, null, (0, _images.IMG).bank_closed, 400, 10);
    let colaExterna = [
        {
            x: posicionFila[0],
            y: posicionFila[1]
        }
    ];
    let colaInterna = [];
    let colaGuardias = [];
    let ultimo = (0, _random.last)(colaExterna);
    let ultimoX = (0, _random.atKey)("x", ultimo);
    let ultimoY = (0, _random.atKey)("y", ultimo);
    const statPersonas = (0, _riza.signal)(0);
    const statFallos = (0, _riza.signal)(0);
    const statExitos = (0, _riza.signal)(0);
    const statEsperaExternaT = (0, _riza.signal)(0);
    const statEsperaExternaN = (0, _riza.signal)(1);
    const statEsperaInternaT = (0, _riza.signal)(0);
    const statEsperaInternaN = (0, _riza.signal)(1);
    let contadorPersonas = _$1([], [
        _$0([], [
            statPersonas
        ])
    ]);
    document.body.append(contadorPersonas);
    let contadorFallos = _$2([], [
        _$0([], [
            statFallos
        ])
    ]);
    document.body.append(contadorFallos);
    let contadorExitos = _$3([], [
        _$0([], [
            statExitos
        ])
    ]);
    document.body.append(contadorExitos);
    let contadorEsperaExternaT = _$4([], [
        _$0([], [
            (0, _riza.expr)([
                statEsperaExternaT,
                statEsperaExternaN
            ], (t, n)=>(0, _utils.formatTime)(t / n))
        ])
    ]);
    document.body.append(contadorEsperaExternaT);
    let contadorEsperaInternaT = _$5([], [
        _$0([], [
            (0, _riza.expr)([
                statEsperaInternaT,
                statEsperaInternaN
            ], (t, n)=>(0, _utils.formatTime)(t / n))
        ])
    ]);
    document.body.append(contadorEsperaInternaT);
    ctx.log.write(C_DEBUG, "Inicio de simulaci\xf3n");
    ctx.canvas.addEventListener("click", ()=>{
        if (!ctx.paused) {
            ctx.log.write(C_DEBUG, "Pausa");
            ctx.pause();
        } else {
            ctx.log.write(C_DEBUG, "Resumiendo");
            ctx.resume();
        }
    });
    ctx.quitarPersona = function(persona, cola = null) {
        cola = cola ?? colaExterna;
        let index = cola.indexOf(persona);
        if (index === -1) {
            if (cola === colaExterna) ctx.quitarPersona(persona, colaInterna);
            return;
        }
        if (index === cola.length - 1) {
            cola.pop();
            return;
        }
        cola[index + 1].targetX = cola[index].targetX;
        cola[index + 1].targetY = cola[index].targetY;
        cola.splice(index, 1);
    };
    function touchDelay(cola, fn_delay, ratio) {
        for (let persona of cola)persona.wait_time += fn_delay() * ratio;
    }
    ctx.alarm((0, _config.bank_opening_time)(), ()=>{
        if (bancoCerrado.visible && colaGuardias.length > 0) {
            ctx.log.write(C_BANK, `Banco abri\xf3, E=${colaExterna.length}`);
            bancoCerrado.visible = false;
        }
    });
    ctx.alarm((0, _config.bank_closing_time)(), ()=>{
        ctx.log.write(C_BANK, `Banco cerr\xf3, E=${colaExterna.length}, I=${colaInterna.length}`);
        bancoCerrado.visible = 2;
    });
    ctx.interval(1, ()=>{
        if (bancoCerrado.visible == 2 && colaExterna.length == 1 && colaInterna.length == 0) {
            ctx.log.write(C_DEBUG, "Fin de simulaci\xf3n");
            ctx.stop();
        }
    });
    ctx.alarm((0, _config.guard_arrival_time)(), ()=>{
        let posicion = getSpawnPoint();
        let guardia = (0, _guardiaDefault.default)(ctx, bancoExterior, posicion[0], posicion[1]);
        guardia.moveTo(posicionGuardia1[0], posicionGuardia1[1], (guardia)=>{
            guardia.posX = guardia.x;
            guardia.posY = guardia.y;
            ctx.log.write(C_BANK, `Lleg\xf3 un Guardia, E=${colaExterna.length}, I=${colaInterna.length}`);
            colaGuardias.push(guardia);
            if ((0, _config.simulationTime)() >= (0, _config.bank_opening_time)() && bancoCerrado.visible) {
                ctx.log.write(C_BANK, `Banco abri\xf3, E=${colaExterna.length}`);
                bancoCerrado.visible = false;
            }
        });
    });
    ctx.alarm((0, _config.guard_arrival_time)(), ()=>{
        let posicion = getSpawnPoint();
        let guardia = (0, _guardiaDefault.default)(ctx, bancoExterior, posicion[0], posicion[1]);
        guardia.moveTo(posicionGuardia2[0], posicionGuardia2[1], (guardia)=>{
            guardia.posX = guardia.x;
            guardia.posY = guardia.y;
            ctx.log.write(C_BANK, `Lleg\xf3 un Guardia, E=${colaExterna.length}, I=${colaInterna.length}`);
            colaGuardias.push(guardia);
            if ((0, _config.simulationTime)() >= (0, _config.bank_opening_time)() && bancoCerrado.visible) {
                ctx.log.write(C_BANK, `Banco abri\xf3, E=${colaExterna.length}`);
                bancoCerrado.visible = false;
            }
        });
    });
    ctx.alarm((0, _config.simulationTime)() + (0, _config.person_arrival_delay)(), function spawnPerson() {
        if (bancoCerrado.visible == 2) {
            ctx.log.write(C_FAILURE, `Cliente potencial, banco cerrado`);
            return;
        }
        ctx.alarm((0, _config.simulationTime)() + (0, _config.person_arrival_delay)(), spawnPerson);
        let posicion = getSpawnPoint();
        let persona = (0, _personaDefault.default)(ctx, bancoExterior, posicion[0], posicion[1]);
        persona.entryX = posicion[0];
        persona.entryY = posicion[1];
        persona.arrival_time = (0, _config.simulationTime)();
        persona.wait_time = (0, _config.person_outside_wait_time)();
        persona.moveTo((0, _random.delta)(-24, ultimoX), ultimoY, (persona)=>{
            ctx.log.write(C_SUCCESS, `Lleg\xf3 un Cliente, E=${colaExterna.length}, I=${colaInterna.length}`);
            statPersonas.value++;
            colaExterna.push(persona);
        });
    });
    ctx.interval(1, function irseSinServicio() {
        // cola externa
        for(let i = 1; i < colaExterna.length; i++){
            let persona = colaExterna[i];
            // demasiado tiempo en cola
            if (persona.wait_time <= 0) {
                ctx.quitarPersona(persona);
                touchDelay(colaExterna, (0, _config.person_outside_wait_time), 0.25);
                persona.moveTo(persona.entryX, persona.entryY, (persona)=>{
                    ctx.log.write(C_FAILURE, `Cliente se fue, demasiado tiempo, Tt=${(0, _utils.formatTime)((0, _config.simulationTime)() - persona.arrival_time)}, E=${colaExterna.length}`);
                    statFallos.value++;
                    persona.remove();
                });
                i--;
                continue;
            }
            // ya cerraron el banco
            if ((0, _config.simulationTime)() > (0, _config.bank_closing_time)()) {
                ctx.quitarPersona(persona);
                touchDelay(colaExterna, (0, _config.person_outside_wait_time), 0.25);
                persona.moveTo(persona.entryX, persona.entryY, (persona)=>{
                    ctx.log.write(C_FAILURE, `Cliente se fue, banco cerr\xf3, Tt=${(0, _utils.formatTime)((0, _config.simulationTime)() - persona.arrival_time)}, E=${colaExterna.length}`);
                    statFallos.value++;
                    persona.remove();
                });
                i--;
                continue;
            }
        }
        // cola interna
        for(let i = 0; i < colaInterna.length; i++){
            let persona = colaInterna[i];
            // demasiado tiempo en cola
            if (persona.wait_time <= 0) {
                ctx.quitarPersona(persona);
                touchDelay(colaInterna, (0, _config.person_inside_wait_time), 0.25);
                persona.visible = true;
                persona.moveTo(persona.entryX, persona.entryY, (persona)=>{
                    ctx.log.write(C_FAILURE, `Cliente se fue, demasiado tiempo, Tt=${(0, _utils.formatTime)((0, _config.simulationTime)() - persona.arrival_time)}, Ti=${(0, _utils.formatTime)((0, _config.simulationTime)() - persona.entry_time)}, I=${colaInterna.length}`);
                    statEsperaInternaT.value += (0, _config.simulationTime)() - persona.entry_time;
                    statEsperaInternaN.value++;
                    statFallos.value++;
                    persona.remove();
                });
                i--;
            }
            // procesamiento completado
            if (persona.process_time <= 0) {
                ctx.quitarPersona(persona);
                touchDelay(colaInterna, (0, _config.person_inside_wait_time), 0.25);
                persona.visible = true;
                persona.moveTo(persona.entryX, persona.entryY, (persona)=>{
                    ctx.log.write(C_FAILURE, `Cliente se fue, exitoso, Tt=${(0, _utils.formatTime)((0, _config.simulationTime)() - persona.arrival_time)}, Ti=${(0, _utils.formatTime)((0, _config.simulationTime)() - persona.entry_time)}, I=${colaInterna.length}`);
                    statEsperaInternaT.value += (0, _config.simulationTime)() - persona.entry_time;
                    statEsperaInternaN.value++;
                    statExitos.value++;
                    persona.remove();
                });
                i--;
            }
        }
    });
    ctx.interval(1, function entrarAlBanco() {
        if (bancoCerrado.visible || colaExterna.length == 1 || colaInterna.blocked || colaInterna.length >= (0, _config.INSIDE_CAPACITY)) return;
        colaInterna.blocked = true;
        let persona = colaExterna.at(1);
        ctx.quitarPersona(persona);
        touchDelay(colaExterna, (0, _config.person_outside_wait_time), 0.25);
        colaInterna.push(persona);
        persona.entry_time = (0, _config.simulationTime)();
        persona.wait_time = (0, _config.person_inside_wait_time)();
        persona.process_time = (0, _config.person_inside_process_time)();
        ctx.log.write(C_SUCCESS, `Cliente entr\xf3 al Banco, Tt=${(0, _utils.formatTime)((0, _config.simulationTime)() - persona.arrival_time)}, E=${colaExterna.length}, I=${colaInterna.length}`);
        statEsperaExternaT.value += (0, _config.simulationTime)() - persona.arrival_time;
        statEsperaExternaN.value++;
        persona.moveTo(posicionPuerta[0], posicionPuerta[1], (persona)=>{
            persona.visible = false;
            colaInterna.blocked = false;
        });
    });
    ctx.interval(1, function checkCola() {
        let total = colaExterna.reduce((count, persona)=>count + (persona.saliendo ? 0 : 1), 0);
        if (total <= (0, _config.OUTSIDE_CAPACITY)) return;
        let guardia = colaGuardias.find((guardia)=>!guardia.ocupado);
        if (!guardia) return;
        let persona = colaExterna.at(-1);
        if (!persona || persona.saliendo) return;
        guardia.ocupado = true;
        ctx.log.write(C_BANK, `Guardia ocupado, E=${colaExterna.length}, I=${colaInterna.length}`);
        persona.saliendo = true;
        guardia.moveTo((0, _random.atKey)("x", persona), (0, _random.delta)(30, (0, _random.atKey)("y", persona)), (guardia)=>{
            ctx.log.write(C_FAILURE, `Cliente se fu\xe9, cola limite, E=${colaExterna.length}`);
            ctx.quitarPersona(persona);
            touchDelay(colaExterna, (0, _config.person_outside_wait_time), 0.25);
            persona.moveTo(persona.entryX, persona.entryY, (persona)=>{
                persona.remove();
            });
            guardia.ocupado = false;
            ctx.log.write(C_BANK, `Guardia libre, E=${colaExterna.length}, I=${colaInterna.length}`);
            guardia.moveTo(guardia.posX, guardia.posY, (guardia)=>{});
        });
    });
}
/**
 * Crea un objeto de simulador para agregarlo al documento.
 * @returns {HTMLCanvasElement}
 */ const Simulacion = ()=>{
    canvas = (0, _utils.crearCanvas)();
    let ctx = canvas.getContext("2d");
    (0, _utils.loadImages)((0, _images.IMG)).then(()=>{
        (0, _utils.crearSimulador)(canvas, ctx);
        prepararSimulacion(ctx);
    });
    return canvas;
};
document.body.appendChild(Simulacion());

},{"riza":"cCAh0","./utils":"en4he","./images":"lLWtd","./persona":"hBGor","./random":"1fE0k","@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh","./config":"jtCLN","./guardia":"1KVU2"}],"cCAh0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Router", ()=>F);
parcelHelpers.export(exports, "Element", ()=>V);
parcelHelpers.export(exports, "CElement", ()=>Y);
parcelHelpers.export(exports, "Api", ()=>j);
parcelHelpers.export(exports, "DataSource", ()=>X);
parcelHelpers.export(exports, "DataList", ()=>Q);
parcelHelpers.export(exports, "Easing", ()=>z);
parcelHelpers.export(exports, "Anim", ()=>W);
parcelHelpers.export(exports, "Elements", ()=>G);
parcelHelpers.export(exports, "Utils", ()=>K);
parcelHelpers.export(exports, "db", ()=>J);
parcelHelpers.export(exports, "geo", ()=>Z);
parcelHelpers.export(exports, "Rinn", ()=>tt);
parcelHelpers.export(exports, "Class", ()=>te);
parcelHelpers.export(exports, "Event", ()=>ti);
parcelHelpers.export(exports, "EventDispatcher", ()=>ts);
parcelHelpers.export(exports, "Model", ()=>tn);
parcelHelpers.export(exports, "ModelList", ()=>to);
parcelHelpers.export(exports, "Schema", ()=>ta);
parcelHelpers.export(exports, "Flattenable", ()=>tr);
parcelHelpers.export(exports, "Collection", ()=>tl);
parcelHelpers.export(exports, "Template", ()=>th);
parcelHelpers.export(exports, "signal", ()=>M);
parcelHelpers.export(exports, "expr", ()=>D);
parcelHelpers.export(exports, "watch", ()=>$);
parcelHelpers.export(exports, "validator", ()=>B);
parcelHelpers.export(exports, "helpers", ()=>H);
var _rinn = require("rinn");
var _base64 = require("base-64");
var _base64Default = parcelHelpers.interopDefault(_base64);
var _rizaSignal = require("riza-signal");
var g = globalThis;
let b = {
    Route: (0, _rinn.EventDispatcher).extend({
        routeRegex: null,
        value: null,
        params: null,
        args: null,
        s_args: null,
        active: !1,
        changed: !1,
        __ctor: function(t) {
            this._super.EventDispatcher.__ctor(), this._compileRoute(this.value = t);
        },
        _compileRoute: function(t) {
            for(this.params = [], t = t.replace(/\/\*\//g, "/.+/");;){
                var e = /:([!@A-Za-z0-9_-]+)/.exec(t);
                if (!e) break;
                t = t.replace(e[0], "([^/]+)"), this.params.push(e[1]);
            }
            this.routeRegex = "^" + t.replace(/##/g, "");
        },
        addHandler: function(t, e = !1, s = null) {
            this.addEventListener((!0 === e ? "un" : "") + "routed", t, s);
        },
        removeHandler: function(t, e = !1, s = null) {
            this.removeEventListener((!0 === e ? "un" : "") + "routed", t, s);
        },
        dispatch: function(t) {
            var e = t.match(this.routeRegex);
            if (!e) {
                this.s_args = null, this.active && this.dispatchEvent("unrouted", {
                    route: this
                }), this.active = !1;
                return;
            }
            for(var s = {
                route: this
            }, n = "", o = 0; o < this.params.length; o++)s[this.params[o]] = e[o + 1], n += "_" + e[o + 1];
            this.changed = n != this.s_args, this.s_args = n, this.dispatchEvent("routed", this.args = s), this.active = !0;
        }
    }),
    routes: {},
    sortedRoutes: [],
    ignoreHashChangeEvent: 0,
    location: "",
    args: [],
    init: function() {
        !this.alreadyAttached && (this.alreadyAttached = !0, "onhashchange" in globalThis && (globalThis.onhashchange = this.onLocationChanged.bind(this)));
    },
    refresh: function() {
        this.onLocationChanged();
    },
    setRoute: function(t, e) {
        var s = this.realLocation(t);
        s != this.location && (e && this.ignoreHashChangeEvent++, globalThis.location.hash = s);
    },
    addRoute: function(t, e, s = null) {
        return this.routes[t] || (this.routes[t] = new this.Route(t), this.sortedRoutes.push(t), this.sortedRoutes.sort((t, e)=>this.routes[t].routeRegex.length - this.routes[e].routeRegex.length)), null !== s ? (this.routes[t].addHandler(e, !1), this.routes[t].addHandler(s, !0)) : this.routes[t].addHandler(e, !1), this.routes[t];
    },
    getRoute: function(t) {
        return this.routes[t] || (this.routes[t] = new this.Route(t), this.sortedRoutes.push(t), this.sortedRoutes.sort((t, e)=>this.routes[t].routeRegex.length - this.routes[e].routeRegex.length)), this.routes[t];
    },
    addRoutes: function(t) {
        for(var e in t)this.routes[e] || (this.routes[e] = new this.Route(e), this.sortedRoutes.push(e)), this.routes[e].addHandler(t[e], !1);
        this.sortedRoutes.sort((t, e)=>this.routes[t].routeRegex.length - this.routes[e].routeRegex.length);
    },
    removeRoute: function(t, e, s) {
        this.routes[t] && (void 0 !== s ? (this.routes[t].removeHandler(e, !1), this.routes[t].removeHandler(s, !0)) : this.routes[t].removeHandler(e));
    },
    removeRoutes: function(t) {
        for(var e in t)this.routes[e] && this.routes[e].removeHandler(t[e]);
    },
    realLocation: function(t, e) {
        e || (e = this.location), e || (e = " ");
        for(var s, n = 0, o = 0, a = 0, r = ""; -1 != n && o < t.length && a < e.length;)switch(n){
            case 0:
                if ("*" == t.substr(o++, 1)) {
                    n = 1;
                    break;
                }
                if (t.substr(o - 1, 1) != e.substr(a++, 1)) {
                    r += t.substr(o - 1), n = -1;
                    break;
                }
                r += e.substr(a - 1, 1);
                break;
            case 1:
                if ("*" == t.substr(o, 1)) {
                    n = 3, o++;
                    break;
                }
                n = 2;
                break;
            case 2:
                if (-1 == (s = e.indexOf(t.substr(o, 1), a))) {
                    r += e.substr(a) + t.substr(o), n = -1;
                    break;
                }
                r += e.substr(a, s - a), n = 0, a = s;
                break;
            case 3:
                if (-1 == (s = e.lastIndexOf(t.substr(o, 1)))) {
                    r += t.substr(o), n = -1;
                    break;
                }
                r += e.substr(a, s - a), n = 0, a = s;
        }
        return -1 != n && (r += t.substr(o)), r.trim();
    },
    onLocationChanged: function() {
        var t = location.hash.substr(1), e = this.realLocation(t);
        if (t != e) {
            globalThis.location.replace("#" + e);
            return;
        }
        if (this.location = t, this.args = this.location.split("/"), this.ignoreHashChangeEvent > 0) {
            this.ignoreHashChangeEvent--;
            return;
        }
        for(var s = 0; s < this.sortedRoutes.length; s++)this.routes[this.sortedRoutes[s]].dispatch(this.location);
    },
    navigate: function(t, e = !1) {
        if (t = this.realLocation(t), globalThis.location.hash == "#" + t) {
            this.refresh();
            return;
        }
        e ? globalThis.location.replace("#" + t) : globalThis.location.hash = t;
    }
};
b.init();
let v = {}, y = {}, _ = {
    eid: null,
    isRoot: !1,
    root: null,
    isReady: 0,
    readyReenter: 0,
    readyLocked: 0,
    modelt: (0, _rinn.Model),
    model: null,
    contents: null,
    events: {
        "mousedown [data-long-press]": function(t) {
            if (t.continuePropagation = !0, t.source._long_press) return;
            let e = t.source;
            e._long_press = setTimeout(()=>{
                let t = e._pos_fx - e._pos_sx, s = e._pos_fy - e._pos_sy;
                e._long_press = null, 5 > Math.sqrt(t * t + s * s) && (e._long_press = !1, this.dispatchOn(e, "long-press"));
            }, 500), e._pos_sx = t.clientX, e._pos_sy = t.clientY, e._pos_fx = t.clientX, e._pos_fy = t.clientY;
        },
        "mousemove [data-long-press]": function(t) {
            t.continuePropagation = !0, t.source._long_press && (t.source._pos_fx = t.clientX, t.source._pos_fy = t.clientY);
        },
        "touchstart [data-long-press]": function(t) {
            if (t.continuePropagation = !0, t.source._long_press) return;
            let e = t.source;
            e._long_press = setTimeout(()=>{
                let t = e._pos_fx - e._pos_sx, s = e._pos_fy - e._pos_sy;
                e._long_press = null, 5 > Math.sqrt(t * t + s * s) && (e._long_press = !1, this.dispatchOn(e, "long-press"));
            }, 500), e._pos_sx = t.touches[0].clientX, e._pos_sy = t.touches[0].clientY, e._pos_fx = t.touches[0].clientX, e._pos_fy = t.touches[0].clientY;
        },
        "touchmove [data-long-press]": function(t) {
            t.continuePropagation = !0, t.source._long_press && (t.source._pos_fx = t.touches[0].clientX, t.source._pos_fy = t.touches[0].clientY);
        },
        "mouseup [data-long-press]": function(t) {
            !1 !== t.source._long_press && (t.source._long_press && (clearTimeout(t.source._long_press), t.source._long_press = null), t.continuePropagation = !0);
        },
        "touchend [data-long-press]": function(t) {
            !1 !== t.source._long_press && (t.source._long_press && (clearTimeout(t.source._long_press), t.source._long_press = null), t.continuePropagation = !0);
        },
        "click [data-action]": function(t) {
            if (!1 === t.source._long_press) return;
            let e = t.source.dataset.action.split(" ");
            e[0] in this ? this[e[0]]({
                ...t.params,
                ...t.source.dataset,
                ...e,
                length: e.length
            }, t) : t.continuePropagation = !0;
        },
        "long-press [data-long-press]": function(t) {
            let e = t.source.dataset.longPress.split(" ");
            e[0] in this ? this[e[0]]({
                ...t.params,
                ...t.source.dataset,
                ...e,
                length: e.length
            }, t) : t.continuePropagation = !0;
        },
        "keyup(13) input[data-enter]": function(t) {
            let e = t.source.dataset.enter.split(" ");
            e[0] in this ? this[e[0]]({
                ...t.params,
                ...t.source.dataset,
                ...e,
                length: e.length
            }, t) : t.continuePropagation = !0;
        }
    },
    routes: null,
    __ctor: function() {
        if (this._list_watch = [], this._list_visible = [], this._list_attr = [], this._list_property = [], "root" in this.dataset && (this.isRoot = "true" === this.dataset.root), this.style.display = "block", this.eid = Math.random().toString().substr(2), null != this.model) {
            let t = this.model;
            this.model = null, this.setModel(t, !1);
        }
        Object.keys(this._super).reverse().forEach((t)=>{
            "init" in this._super[t] && this._super[t].init();
        }), _.debug && console.log(">> " + this.tagName + " INIT ON " + this.parentElement.tagName), this.init(), this.events && this.bindEvents(this.events), this.contents && this.setInnerHTML(this.contents), setTimeout(()=>{
            "r-dom-probe" !== this.tagName.toLowerCase() ? this.appendChild(document.createElement("r-dom-probe")) : this.markReady();
        }, 0);
    },
    init: function() {},
    ready: function() {},
    rready: function() {},
    markReady: function(t = null) {
        if (this.readyLocked++, this.isReady) this.collectWatchers();
        else {
            if (this.isReady = 1, "model" in this.dataset) {
                let t = this.getFieldByPath(this.dataset.model);
                t && this.setModel(t);
            }
            Object.keys(this._super).reverse().forEach((t)=>{
                "ready" in this._super[t] && this._super[t].ready();
            }), _.debug && console.log(">> " + this.tagName + " READY"), this.ready(), this.onready && this.onready(this), this.collectWatchers();
        }
        let e = this.findCustomParent(this);
        _.debug && console.log(this.tagName + " ROOT IS " + (e ? e.tagName : "NULL")), e && 0 === e.isReady && 0 != this.isReady && e.checkReady();
        let s = !1;
        if (e && 2 === e.isReady && 2 !== this.isReady && (this.getRoot(), this.root && this.dataset.ref && (_.debug && console.log(this.tagName + " REF AS `" + this.dataset.ref + "` ON " + this.root.tagName), this.root[this.dataset.ref] = this, this.root.onRefAdded(this.dataset.ref, this)), s = !0), e || 2 === this.isReady || (s = !0), s) {
            if (this.isReady = 2, null !== t) for (let e of t)e.checkReady();
            _.debug && console.log(">> " + this.tagName + " RREADY"), Object.keys(this._super).reverse().forEach((t)=>{
                "rready" in this._super[t] && this._super[t].rready();
            }), this.rready(), this.onrootready && this.onrootready(this);
        }
        this.readyLocked--, this.readyReenter && !this.readyLocked && (this.readyReenter = !1, this.checkReady()), "r-dom-probe" === this.tagName.toLowerCase() && this.remove();
    },
    checkReady: function() {
        if (0 == this.childNodes.length) return;
        if (this.readyLocked) {
            this.readyReenter = !0;
            return;
        }
        let t = !0, e = [], s = document.evaluate(".//*[contains(name(),'-')]", this, null, XPathResult.ANY_TYPE, null);
        for(_.debug && console.log("# CHECKING " + this.tagName);;){
            let n = s.iterateNext();
            if (!n) break;
            n !== this && this.findCustomParent(n) === this && (_.debug && console.log("   " + n.tagName + " = " + n.isReady), n.isReady || (t = !1), e.push(n));
        }
        t && this.markReady(e);
    },
    getFieldByPath: function(t) {
        if (!t) return null;
        if ("string" != typeof t) return t;
        let e = t.split("."), s = g;
        for(e.length && "this" == e[0] && (s = this, e.shift()), e.length && "root" == e[0] && (s = this.getRoot(), e.shift()); null != s && 0 != e.length;)s = s[e.shift()];
        return s;
    },
    getRoot: function() {
        return this.root ? this.root : this.root = this.findRoot();
    },
    setModel: function(e, s = !0) {
        return e && (e = (0, _rinn.Rinn).ensureTypeOf(this.modelt, e), this.model !== e && (null != this.model && (this.model.removeEventListener(this.eid + ":modelChanged", this.onModelPreChanged, this), this.model.removeEventListener(this.eid + ":propertyChanging", this.onModelPropertyChanging, this), this.model.removeEventListener(this.eid + ":propertyChanged", this.onModelPropertyPreChanged, this), this.model.removeEventListener(this.eid + ":propertyRemoved", this.onModelPropertyRemoved, this)), this.model = e, this.model.addEventListener(this.eid + ":modelChanged", this.onModelPreChanged, this), this.model.addEventListener(this.eid + ":propertyChanging", this.onModelPropertyChanging, this), this.model.addEventListener(this.eid + ":propertyChanged", this.onModelPropertyPreChanged, this), this.model.addEventListener(this.eid + ":propertyRemoved", this.onModelPropertyRemoved, this)), !1 !== s && this.model.setNamespace(this.eid).update(!0).setNamespace(null)), this;
    },
    getModel: function() {
        return this.model;
    },
    addClass: function(t) {
        return t && t.split(" ").forEach((t)=>{
            (t = t.trim()) && ("-" == t[0] || "+" == t[0] ? this.classList["-" == t[0] ? "remove" : "add"](t.substr(1)) : this.classList.add(t));
        }), this;
    },
    removeClass: function(t) {
        return t && t.split(" ").forEach((t)=>{
            (t = t.trim()) && ("-" == t[0] || "+" == t[0] ? this.classList["-" == t[0] ? "remove" : "add"](t.substr(1)) : this.classList.remove(t));
        }), this;
    },
    setStyle: function(t) {
        return t && t.split(";").forEach((t)=>{
            let e = (t = t.trim()).indexOf(":");
            if (-1 == e) return;
            let s = t.substr(0, e).trim();
            for(let t = s.indexOf("-"); -1 != t; t = s.indexOf("-"))s = s.substr(0, t) + s.substr(t + 1, 1).toUpperCase() + s.substr(t + 2);
            this.style[s] = t.substr(e + 1).trim();
        }), this;
    },
    getWidth: function(t = null) {
        return (t || this).getBoundingClientRect().width;
    },
    getHeight: function(t = null) {
        return (t || this).getBoundingClientRect().height;
    },
    bindEvents: function(e) {
        for(let r in e){
            let l = e[r];
            "string" == (0, _rinn.Rinn).typeOf(l) && (l = this[l]), l = l.bind(this);
            var s = r.indexOf(" "), n = -1 == s ? r : r.substr(0, s), o = -1 == s ? "" : r.substr(s + 1);
            let h = null;
            var a = n.indexOf("(");
            if (-1 != a && (h = n.substr(a + 1, n.length - a - 2).split(","), n = n.substr(0, a)), "@" == o[0]) {
                if ("@this" != o) {
                    this[o.substr(1)].addEventListener(n, l);
                    continue;
                }
                o = this;
            } else "&" == o[0] && (o = "&this" != o ? "[data-ref='" + o.substr(1) + "']" : this);
            if ("#" == n.substr(0, 1)) {
                this.listen("propertyChanged." + n.substr(1), this, l);
                continue;
            }
            if (null != h) switch(n){
                case "keyup":
                case "keydown":
                    this.listen(n, o, function(e) {
                        if (-1 != (0, _rinn.Rinn).indexOf(h, e.keyCode.toString())) return l(e, h);
                        e.continuePropagation = !0;
                    });
                    continue;
            }
            this.listen(n, o, l);
        }
        return this;
    },
    bindRoutes: function() {
        if (this.routes) for(let e in this.routes){
            let s = "!" === e[0] ? b.getRoute(e.substr(1)) : b.getRoute(e), n = this.routes[e];
            "string" === (0, _rinn.Rinn).typeOf(n) && (n = this[n]), "!" === e[0] ? s.addHandler(n, !0, this) : s.addHandler(n, !1, this);
        }
    },
    unbindRoutes: function() {
        if (this.routes) for(let e in this.routes){
            let s = "!" === e[0] ? b.getRoute(e.substr(1)) : b.getRoute(e), n = this.routes[e];
            "string" === (0, _rinn.Rinn).typeOf(n) && (n = this[n]), "!" === e[0] ? s.removeHandler(n, !0, this) : s.removeHandler(n, !1, this);
        }
    },
    _eventHandler: function(e, s, n) {
        if (!1 !== e.continuePropagation) {
            if (e.continuePropagation = !0, e.source = e.target, s && s instanceof HTMLElement) e.source === s && (e.continuePropagation = !1, !0 === n.call(this, e, e.detail) && (e.continuePropagation = !0));
            else if (s && "*" != s) {
                let o = this.querySelectorAll(s);
                for(; e.source !== this;){
                    if (-1 !== (0, _rinn.Rinn).indexOf(o, e.source, !0)) {
                        e.continuePropagation = !1, !0 === n.call(this, e, e.detail) && (e.continuePropagation = !0);
                        break;
                    }
                    e.source = e.source.parentElement;
                }
            } else e.continuePropagation = !1, !0 === n.call(this, e, e.detail) && (e.continuePropagation = !0);
            !1 === e.continuePropagation && (e.preventDefault(), e.stopPropagation());
        }
    },
    listen: function(e, s, n) {
        let o = !1, a = !1;
        "function" == (0, _rinn.Rinn).typeOf(s) && (n = s, s = null), "!" == e[e.length - 1] && (e = e.substr(0, e.length - 1), o = !0), "!" == e[0] && (e = e.substr(1), a = !0);
        let r = null, l = null, h = this;
        return this.addEventListener(e, r = (t)=>{
            !1 !== t.continuePropagation && (t.firstCapture || (t.firstCapture = this, t.firstCaptureCount = 0, t.queue = []), t.firstCapture === this && t.firstCaptureCount++, !0 == o && t.queue.push([
                this,
                s,
                n
            ]), !0 == a && this._eventHandler(t, s, n));
        }, !0), this.addEventListener(e, l = (t)=>{
            if (!1 !== t.continuePropagation && (!0 != o && !0 != a && this._eventHandler(t, s, n), t.firstCapture === this && !1 !== t.continuePropagation && 0 == --t.firstCaptureCount)) {
                for(; t.queue.length;){
                    let e = t.queue.pop();
                    e[0]._eventHandler(t, e[1], e[2]);
                }
                t.continuePropagation = !1;
            }
        }, !1), {
            removed: !1,
            remove: function() {
                this.removed || (this.removed = !0, h.removeEventListener(e, r, !0), h.removeEventListener(e, l, !1));
            }
        };
    },
    createEventObject: function(t, e, s) {
        return "click" == t ? new MouseEvent(t, {
            bubbles: s,
            detail: e
        }) : new CustomEvent(t, {
            bubbles: s,
            detail: e
        });
    },
    dispatch: function(t, e = null, s = !0) {
        let n = "on" + t.toLowerCase();
        if (n in this) {
            this[n](e, this);
            return;
        }
        this.dispatchEvent(this.createEventObject(t, e, s));
    },
    dispatchOn: function(t, e, s = null, n = !0) {
        t.dispatchEvent(this.createEventObject(e, s, n));
    },
    setInnerHTML: function(t) {
        this.readyLocked++, this.innerHTML = t, this.readyLocked--;
    },
    collectWatchers: function() {
        let t, e = this, s = !1;
        if (!this.isRoot) return;
        let n = this._list_watch.length, o = this._list_visible.length, a = this._list_attr.length, r = this._list_property.length;
        t = this.querySelectorAll("[data-watch]");
        for(let e = 0; e < t.length; e++){
            for (let s of t[e].querySelectorAll(".pseudo"))s.remove();
            t[e]._template = (0, _rinn.Template).compile(t[e].innerHTML), t[e]._watch = RegExp("^(" + t[e].dataset.watch + ")$"), t[e].innerHTML = "", t[e].removeAttribute("data-watch"), this._list_watch.push(t[e]);
        }
        if ("selfWatch" in this.dataset) {
            for (let t of this.querySelectorAll(".pseudo"))t.remove();
            this._template = (0, _rinn.Template).compile(this.innerHTML), this._watch = RegExp("^(" + this.dataset.selfWatch + ")$"), this.innerHTML = "", this.removeAttribute("data-self-watch"), this._list_watch.push(this);
        }
        t = this.querySelectorAll("[data-visible]");
        for(let e = 0; e < t.length; e++)t[e]._visible = (0, _rinn.Template).compile(t[e].dataset.visible), t[e].removeAttribute("data-visible"), this._list_visible.push(t[e]);
        "selfVisible" in this.dataset && (this._visible = (0, _rinn.Template).compile(this.dataset.selfVisible), this.removeAttribute("data-self-visible"), this._list_visible.push(this)), t = this.querySelectorAll("[data-attr]");
        for(let e = 0; e < t.length; e++){
            for (let s of (t[e]._attr = [], t[e].dataset.attr.split(";")))2 == (s = s.split(":")).length && t[e]._attr.push({
                name: s[0].trim(),
                value: (0, _rinn.Template).compile(s[1].trim())
            });
            t[e].removeAttribute("data-attr"), this._list_attr.push(t[e]);
        }
        if ("selfAttr" in this.dataset) {
            for (let t of (this._attr = [], this.dataset.selfAttr.split(";")))2 == (t = t.split(":")).length && this._attr.push({
                name: t[0].trim(),
                value: (0, _rinn.Template).compile(t[1].trim())
            });
            this.removeAttribute("data-self-attr"), this._list_attr.push(this);
        }
        t = this.querySelectorAll("[data-property]");
        for(let s = 0; s < t.length; s++)t[s].onchange = t[s].onblur = function() {
            switch(this.type){
                case "radio":
                    this.checked && e.getModel().set(this.name, this.value);
                    break;
                case "checkbox":
                    e.getModel().set(this.name, this.checked ? "1" : "0");
                    break;
                case "field":
                    e.getModel().set(this.name, this.getValue());
                    break;
                default:
                    e.getModel().set(this.name, this.value);
            }
        }, "SELECT" == t[s].tagName && (t[s].onmouseup = function() {
            e.getModel().set(this.name, this.value);
        }), t[s].name = t[s].dataset.property, t[s].removeAttribute("data-property"), this._list_property.push(t[s]);
        "selfProperty" in this.dataset && (this.onchange = this.onblur = function() {
            switch(this.type){
                case "radio":
                    this.checked && e.getModel().set(this.name, this.value);
                    break;
                case "checkbox":
                    e.getModel().set(this.name, this.checked ? "1" : "0");
                    break;
                case "field":
                    e.getModel().set(this.name, this.getValue());
                    break;
                default:
                    e.getModel().set(this.name, this.value);
            }
        }, "SELECT" == this.tagName && (this.onmouseup = function() {
            e.getModel().set(this.name, this.value);
        }), this.name = this.dataset.selfProperty, this.removeAttribute("data-self-property"), this._list_property.push(this)), this._list_watch = this._list_watch.filter((t)=>null != t.parentElement), n != this._list_watch.length && (s = !0), this._list_visible = this._list_visible.filter((t)=>null != t.parentElement), o != this._list_visible.length && (s = !0), this._list_attr = this._list_attr.filter((t)=>null != t.parentElement), a != this._list_attr.length && (s = !0), this._list_property = this._list_property.filter((t)=>null != t.parentElement), r != this._list_property.length && (s = !0), null != this.model && s && this.model.setNamespace(this.eid).update(!0).setNamespace(null);
    },
    onCreated: function() {},
    elementConnected: function() {
        this.bindRoutes(), this.onConnected();
    },
    elementDisconnected: function() {
        this.unbindRoutes();
    },
    onConnected: function() {
        this.onconnected && this.onconnected(this);
    },
    onDisconnected: function() {
        this.ondisconnected && this.ondisconnected(this);
    },
    onRefAdded: function(t, e) {},
    onRefRemoved: function(t, e) {},
    onModelPreChanged: function(t, e) {
        let s = this.getModel().get();
        for(let t = 0; t < this._list_watch.length; t++)for (let n of e.fields)if (this._list_watch[t]._watch.test(n)) {
            this._list_watch[t].innerHTML = this._list_watch[t]._template(s);
            break;
        }
        for(let t = 0; t < this._list_visible.length; t++)this._list_visible[t]._visible(s, "arg") ? this._list_visible[t].style.removeProperty("display") : this._list_visible[t].style.setProperty("display", "none", "important");
        for(let t = 0; t < this._list_attr.length; t++)for (let e of this._list_attr[t]._attr)this._list_attr[t][e.name] = e.value(s, "arg");
        this.onModelChanged(t, e);
    },
    onModelChanged: function(t, e) {},
    onModelPropertyChanging: function(t, e) {},
    onModelPropertyPreChanged: function(t, e) {
        for(let t = 0; t < this._list_property.length; t++)if (this._list_property[t].name == e.name) {
            let s = !0;
            switch(this._list_property[t].type){
                case "radio":
                    if (this._list_property[t].value != e.value) {
                        this._list_property[t].parentElement.classList.remove("active");
                        continue;
                    }
                    this._list_property[t].checked = !0, this._list_property[t].parentElement.classList.add("active");
                    break;
                case "checkbox":
                    ~~e.value ? (this._list_property[t].checked = !0, this._list_property[t].parentElement.classList.add("active")) : (this._list_property[t].checked = !1, this._list_property[t].parentElement.classList.remove("active"));
                    break;
                case "field":
                    this._list_property[t].val = this._list_property[t].dataset.value = e.value, this._list_property[t].setValue(e.value), s = !1;
                    break;
                default:
                    this._list_property[t].value = e.value, this._list_property[t].val = this._list_property[t].dataset.value = e.value, this._list_property[t].value != e.value && (s = !1);
            }
            s && this._list_property[t].onchange && this._list_property[t].onchange();
        }
        this.dispatch("propertyChanged." + e.name, e, !1), this.dispatch("propertyChanged", e, !1), this.onModelPropertyChanged(t, e);
    },
    onModelPropertyChanged: function(t, e) {},
    onModelPropertyRemoved: function(t, e) {},
    preparePrototype: function(t) {
        if (!0 !== t.__prototypePrepared) for(let e in t.__prototypePrepared = !0, t.hasOwnProperty("events") && t.events || (t.events = {}), t.hasOwnProperty("routes") && t.routes || (t.routes = {}), t)e.startsWith("event ") ? (t.events[e.substr(6)] = t[e], delete t[e]) : e.startsWith("route ") && (t.routes[e.substr(6)] = t[e], delete t[e]);
    },
    register: function(e, ...s) {
        let n;
        let o = class extends HTMLElement {
            constructor(){
                for (let t of (super(), this.invokeConstructor = !0, _.debug && console.log("CREATED " + this.tagName), this._super = {}, Object.entries(this.constructor.prototype._super)))for (let e of (this._super[t[0]] = {}, Object.entries(t[1])))this._super[t[0]][e[0]] = e[1].bind(this);
                this.onCreated();
            }
            findRoot(t = null) {
                let e = t || this.parentElement;
                for(; null != e;){
                    if ("isRoot" in e && !0 === e.isRoot) return e;
                    e = e.parentElement;
                }
                return null;
            }
            findCustomParent(t = null) {
                let e = t ? t.parentElement : this.parentElement;
                for(; null != e;){
                    if (-1 !== e.tagName.indexOf("-")) return e;
                    e = e.parentElement;
                }
                return null;
            }
            connectReference(t = null, e = 255) {
                this.root || (1 & e) != 1 || (null == t && (t = this.findRoot()), null == t || (this.dataset.ref && (t[this.dataset.ref] = this), this.root = t));
            }
            connectedCallback() {
                this.connectReference(null, 1), this.invokeConstructor && (this.invokeConstructor = !1, this.__ctor()), this.connectReference(null, 2), this.elementConnected(), this.dataset.xref && (globalThis[this.dataset.xref] = this);
            }
            disconnectedCallback() {
                this.root && (this.dataset.ref && (this.root.onRefRemoved(this.dataset.ref, this), delete this.root[this.dataset.ref]), this.root = null), this.elementDisconnected(), this.dataset.xref && delete globalThis[this.dataset.xref];
            }
        };
        (0, _rinn.Rinn).override(o.prototype, _);
        let a = {}, r = {}, l = (0, _rinn.Rinn).clone(_.events), h = !0, c = !0, u = !0;
        for(let e = 0; e < s.length; e++)if (s[e]) {
            if ("string" == (0, _rinn.Rinn).typeOf(s[e])) {
                let o = s[e];
                if (s[e] = v[o], !s[e]) continue;
                for(let n in r[o] = {}, s[e])"function" == (0, _rinn.Rinn).typeOf(s[e][n]) && (r[o][n] = s[e][n]);
                h = !1, c = !1, u = !1, n = !1;
            } else _.preparePrototype(s[e]), n = !0;
            "_super" in s[e] && (0, _rinn.Rinn).override(r, s[e]._super), "events" in s[e] && (0, _rinn.Rinn).override(l, s[e].events), (0, _rinn.Rinn).override(o.prototype, s[e]), (0, _rinn.Rinn).override(a, s[e]), n && (!h && "init" in s[e] && (h = !0), !c && "ready" in s[e] && (c = !0), !u && "rready" in s[e] && (u = !0));
        }
        let d = function() {};
        return h || (o.prototype.init = d, a.init = d), c || (o.prototype.ready = d, a.ready = d), u || (o.prototype.rready = d, a.rready = d), o.prototype._super = r, o.prototype.events = l, a._super = r, a.events = l, customElements.define(e, o), v[e] = a, y[e] = o, o;
    },
    expand: function(e, ...s) {
        if (!(e in v)) return;
        let n = v[e], o = y[e], a = n._super, r = n.events;
        for (let e of s)_.preparePrototype(e), "_super" in e && (0, _rinn.Rinn).override(a, e._super), "events" in e && (0, _rinn.Rinn).override(r, e.events), (0, _rinn.Rinn).override(o.prototype, e), (0, _rinn.Rinn).override(n, e);
        o.prototype._super = a, o.prototype.events = r, n._super = a, n.events = r;
    },
    hookAppend: function(e, s, n) {
        if (!(e in v)) return;
        let o = (0, _rinn.Rinn).hookAppend(v[e], s, n), a = (0, _rinn.Rinn).hookAppend(y[e].prototype, s, n);
        return {
            unhook: function() {
                o.unhook(), a.unhook();
            }
        };
    },
    hookPrepend: function(e, s, n) {
        if (!(e in v)) return;
        let o = (0, _rinn.Rinn).hookPrepend(v[e], s, n), a = (0, _rinn.Rinn).hookPrepend(y[e].prototype, s, n);
        return {
            unhook: function() {
                o.unhook(), a.unhook();
            }
        };
    },
    ":toggleClass": function(t, e) {
        let s = e.source;
        "2" in t && (s = document.querySelector(t[2])), s && (s.classList.contains(t[1]) ? s.classList.remove(t[1]) : s.classList.add(t[1]));
    },
    ":setClass": function(t, e) {
        let s = e.source;
        "2" in t && (s = document.querySelector(t[2])), s && s.classList.add(t[1]);
    },
    ":volatileClass": function(t, e) {
        let s = e.source;
        if ("2" in t && (s = document.querySelector(t[2])), !s) return;
        s.classList.add(t[1]);
        let n = ()=>{
            window.removeEventListener("click", n, !0), s.classList.remove(t[1]);
        };
        window.addEventListener("click", n, !0);
    },
    ":toggleClassUnique": function(t, e) {
        let s = e.source;
        s && (s.classList.contains(t[1]) ? s.classList.remove(t[1]) : (s.querySelectorParent(t[2]).querySelectorAll(t[3]).forEach((e)=>e.classList.remove(t[1])), s.classList.add(t[1])));
    },
    ":setClassUnique": function(t, e) {
        let s = e.source;
        s && (s.querySelectorParent(t[2]).querySelectorAll(t[3]).forEach((e)=>e.classList.remove(t[1])), s.classList.add(t[1]));
    }
};
_.debug = !1, _.register("r-elem", {}), _.register("r-dom-probe", {}), HTMLElement.prototype.querySelectorParent = function(t) {
    let e = this;
    for(; null != e && !e.matches(t);)e = e.parentElement;
    return e;
};
let E = {
    REQUEST_PACKAGE_SUPPORTED: 1,
    REQ64_SUPPORTED: 2,
    JSON_RESPONSE_SUPPORTED: 4,
    XML_RESPONSE_SUPPORTED: 8,
    INCLUDE_CREDENTIALS: 16,
    UNIQUE_STAMP: 32,
    DISABLE_CORS: 64,
    apiUrl: "/api",
    flags: 63,
    useReq64: !1,
    retries: 0,
    headers: {},
    _requestLevel: 0,
    _requestPackage: 0,
    _packageData: [],
    setEndPoint: function(t, e = null) {
        return this.apiUrl = t, this.flags = e ?? this.flags, this;
    },
    responseFilter: function(t, e) {
        return !0;
    },
    packageBegin: function() {
        this.flags & E.REQUEST_PACKAGE_SUPPORTED && this._requestPackage++;
    },
    packageEnd: function(t) {
        this.flags & E.REQUEST_PACKAGE_SUPPORTED && this._requestPackage && (--this._requestPackage || this.packageSend(t));
    },
    batch: function(t, e = null) {
        if (!(this.flags & E.REQUEST_PACKAGE_SUPPORTED)) {
            t(), e && e();
            return;
        }
        this.packageBegin(), t(), this.packageEnd(e);
    },
    packageSend: function(t) {
        if (!(this.flags & E.REQUEST_PACKAGE_SUPPORTED) || !this._packageData.length) return;
        let e = this._packageData;
        this._packageData = [];
        for(var s = "", n = 0; n < e.length; n++)s += "r" + n + "," + (0, _base64Default.default).encode(this.encodeParams(e[n][2])) + ";";
        this._showProgress(), this.apiCall({
            rpkg: s
        }, (s, n)=>{
            this._hideProgress();
            for(let t = 0; t < e.length; t++)try {
                var o = s["r" + t];
                if (!o) {
                    null != e[t][1] && e[t][1](e[t][2]);
                    continue;
                }
                null != e[t][0] && this.responseFilter(o, e[t][2]) && e[t][0](o, e[t][2]);
            } catch (t) {}
            t && t();
        }, (t)=>{
            this._hideProgress();
            for(let t = 0; t < e.length; t++)null != e[t][1] && e[t][1](e[t][2]);
        });
    },
    _showProgress: function() {
        "document" in g && (this._requestLevel++, this._requestLevel > 0 && g.document.documentElement.classList.add("busy"));
    },
    _hideProgress: function() {
        "document" in g && (this._requestLevel--, this._requestLevel || setTimeout(()=>{
            0 === this._requestLevel && g.document.documentElement.classList.remove("busy");
        }, 250));
    },
    header: function(t, e) {
        return null === e ? delete this.headers[t] : this.headers[t] = e, this;
    },
    encodeParams: function(t) {
        let e = [];
        if (t instanceof FormData) for (let s of t.entries())e.push(encodeURIComponent(s[0]) + "=" + encodeURIComponent(s[1]));
        else for(let s in t)e.push(encodeURIComponent(s) + "=" + encodeURIComponent(t[s]));
        return e.join("&");
    },
    getUrl: function(t) {
        return -1 !== t.indexOf("//") ? t : this.apiUrl + t;
    },
    appendParam: function(t, e) {
        return t + (-1 == t.indexOf("?") ? "?" : "&") + e;
    },
    apiCall: function(t, e, s, n = null, o = null, a = "") {
        let r = this.getUrl(a);
        if (this.flags & E.UNIQUE_STAMP && (r = this.appendParam(r, "_=" + Date.now())), "GET" != (n = n ? n.toUpperCase() : null) && "POST" != n && (n = "auto"), null === o && (o = this.retries), this._requestPackage && this.flags & E.REQUEST_PACKAGE_SUPPORTED) {
            t instanceof FormData || (t = {
                ...t
            }), this._packageData.push([
                e,
                s,
                t
            ]);
            return;
        }
        this._showProgress();
        let l = t, h = {
            mode: this.flags & E.DISABLE_CORS ? "no-cors" : "cors",
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml,application/json;q=0.9",
                ...this.headers
            },
            method: n,
            body: null,
            multipart: !1
        };
        if (this.flags & E.INCLUDE_CREDENTIALS && (h.credentials = "include"), "string" == typeof l || l instanceof Blob) "string" == typeof l ? "<" === l[0] ? l.endsWith("</soap:Envelope>") ? h.headers["Content-Type"] = "application/soap+xml" : h.headers["Content-Type"] = "application/xml" : "{" === l[0] || "[" === l[0] ? h.headers["Content-Type"] = "application/json" : h.headers["Content-Type"] = "application/octet-stream" : h.headers["Content-Type"] = l.type, h.method = "POST", h.body = l;
        else {
            if (!(l instanceof FormData)) for(let e in l = new FormData, t)t[e] instanceof File || t[e] instanceof Blob ? l.append(e, t[e], t[e].name) : l.append(e, t[e]);
            for (let t of l.entries())if (t[1] instanceof File || t[1] instanceof Blob) {
                h.method = "POST", h.multipart = !0;
                break;
            }
            if (this.useReq64 && this.flags & E.REQ64_SUPPORTED && !h.multipart) {
                let t = new FormData;
                t.append("req64", (0, _base64Default.default).encode(this.encodeParams(l))), l = t;
            }
            if ("auto" == h.method) {
                let t = 0;
                for (let e of (h.method = "GET", l.entries()))if ((t += e[0].length + e[1].length + 2) > 960) {
                    h.method = "POST";
                    break;
                }
            }
            "GET" == h.method ? r = this.appendParam(r, this.encodeParams(l)) : h.multipart ? h.body = l : (h.headers["Content-Type"] = "application/x-www-form-urlencoded", h.body = this.encodeParams(l));
        }
        g.fetch(r, h).then((t)=>this.decodeResult(t)).then((s)=>{
            if (this._hideProgress(), e && this.responseFilter(s, t)) try {
                e(s, t);
            } catch (t) {}
        }).catch((r)=>{
            this._hideProgress(), 0 == o ? s && s(r, t) : this.apiCall(l, e, s, n, o - 1, a);
        });
    },
    decodeResult: function(t) {
        let e = t.headers.get("content-type").split(";")[0].toLowerCase();
        return this.flags & E.JSON_RESPONSE_SUPPORTED && -1 !== e.indexOf("json") ? t.json() : this.flags & E.XML_RESPONSE_SUPPORTED && -1 !== e.indexOf("xml") ? new Promise((e, s)=>{
            t.text().then((t)=>{
                e(t = (new DOMParser).parseFromString(t, "text/xml"));
            }).catch(s);
        }) : t.blob();
    },
    getBlob: function(t, e) {
        return new Blob([
            t
        ], {
            type: e
        });
    },
    base64: {
        encode: function(t) {
            return (0, _base64Default.default).encode(t);
        },
        decode: function(t) {
            return (0, _base64Default.default).decode(t);
        }
    },
    request: function(t, e, s = null) {
        return null === s && "string" != typeof e && (s = e, e = ""), new Promise((n, o)=>{
            this.apiCall(s, n, o, null, t, e);
        });
    },
    post: function(t, e = null, s = null) {
        return this.apiCall(t, e, s, "POST");
    },
    get: function(t, e = null, s = null) {
        return this.apiCall(t, e, s, "GET");
    },
    fetch: function(t, e, s = null) {
        if ("string" == typeof t) {
            let n = t.toUpperCase();
            "GET" !== n && "POST" !== n && "PUT" !== n && "DELETE" !== n && "PATCH" !== n && "HEAD" !== n && (s = e, e = t, t = null);
        }
        return null === s && "string" != typeof e && (s = e, e = ""), new Promise((n, o)=>{
            this.apiCall(s, n, o, t, null, e);
        });
    },
    makeUrl: function(t, e = null) {
        return null === e && "string" != typeof t && (e = t, t = ""), this.appendParam(this.getUrl(t), this.encodeParams(e));
    }
};
var k = (0, _rinn.EventDispatcher).extend({
    className: "DataSource",
    debounceDelay: 250,
    request: null,
    includeCount: !1,
    includeEnum: !1,
    includeList: !0,
    eid: null,
    count: 0,
    list: null,
    enum: null,
    __ctor: function(t, e) {
        this._super.EventDispatcher.__ctor(), this.basePath = t, e && Object.assign(this, e), this.request = new (0, _rinn.Model)(this.request), this.eid = Math.random().toString().substr(2), this.count = 0, this.list = new (0, _rinn.ModelList), this.list.dataSource = this, this.enum = new (0, _rinn.ModelList), this.enum.dataSource = this, this.request.addEventListener(this.eid + ":propertyChanged", this.forwardRequestEvent, this), this.list.addEventListener(this.eid + ":itemsCleared", this.forwardListEvent, this), this.list.addEventListener(this.eid + ":itemsChanged", this.forwardListEvent, this), this.list.addEventListener(this.eid + ":itemRemoved", this.forwardListEvent, this), this.list.addEventListener(this.eid + ":itemChanged", this.forwardListEvent, this), this.list.addEventListener(this.eid + ":itemAdded", this.forwardListEvent, this), this.enum.addEventListener(this.eid + ":itemsCleared", this.forwardEnumEvent, this), this.enum.addEventListener(this.eid + ":itemsChanged", this.forwardEnumEvent, this), this.enum.addEventListener(this.eid + ":itemRemoved", this.forwardEnumEvent, this), this.enum.addEventListener(this.eid + ":itemChanged", this.forwardEnumEvent, this), this.enum.addEventListener(this.eid + ":itemAdded", this.forwardEnumEvent, this);
    },
    forwardRequestEvent: function(t, e) {
        this.prepareEvent("request" + t.name[0].toUpperCase() + t.name.substr(1), e).setSource(t.source).resume();
    },
    forwardListEvent: function(t, e) {
        this.prepareEvent("list" + t.name[0].toUpperCase() + t.name.substr(1), e).setSource(t.source).resume();
    },
    forwardEnumEvent: function(t, e) {
        this.prepareEvent("enum" + t.name[0].toUpperCase() + t.name.substr(1), e).setSource(t.source).resume();
    },
    refresh: function(t = "full", e = null) {
        "function" == typeof t && (e = t, t = "full"), this._timeout && (clearTimeout(this._timeout), this._timeout = null);
        let s = ()=>{
            this._timeout = null, E.packageBegin(), this.includeCount && ("full" === t || "filter" === t) && this.fetchCount(), this.includeEnum && ("full" === t || "enum" === t) && this.fetchEnum(), this.includeList && "enum" !== t && this.fetchList(), E.packageEnd(e);
        };
        !0 === t ? (t = "full", s()) : this._timeout = setTimeout(s, this.debounceDelay);
    },
    fetch: function(t, e = !1) {
        return new Promise((s, n)=>{
            let o = !0 == e ? null : this.list.find(t, !0);
            o ? s(o.get()) : this.fetchOne(t, (t)=>{
                t && 200 == t.response && t.data.length > 0 ? s(t.data[0]) : n(t);
            });
        });
    },
    delete: function(t) {
        return new Promise((e, s)=>{
            this.fetchDelete(t, (t)=>{
                200 == t.response ? e(t) : s(t.error);
            });
        });
    },
    fetchList: function() {
        let t = {
            ...this.request.get()
        };
        t.f = this.basePath + ".list", this.dispatchEvent("listLoading"), E.fetch(t).then((t)=>{
            this.list.setData(200 == t.response ? t.data : null), this.dispatchEvent("listLoaded"), this.dispatchEvent("listChanged");
        });
    },
    fetchEnum: function() {
        let t = {
            ...this.request.get()
        };
        t.f = this.basePath + ".enum", this.dispatchEvent("enumLoading"), E.fetch(t).then((t)=>{
            this.enum.setData(200 == t.response ? t.data : null), this.dispatchEvent("enumLoaded"), this.dispatchEvent("enumChanged");
        });
    },
    fetchCount: function() {
        let t = {
            ...this.request.get()
        };
        t.f = this.basePath + ".count", this.dispatchEvent("countLoading"), E.fetch(t).then((t)=>{
            this.count = 200 == t.response ? t.count : 0, this.dispatchEvent("countLoaded"), this.dispatchEvent("countChanged");
        });
    },
    fetchOne: function(t, e) {
        let s = {
            ...this.request.get(),
            ...t
        };
        s.f = this.basePath + ".get", E.fetch(s).then((t)=>{
            e(t);
        });
    },
    fetchDelete: function(t, e) {
        let s = {
            ...this.request.get(),
            ...t
        };
        s.f = this.basePath + ".delete", E.fetch(s).then((t)=>{
            e(t);
        });
    },
    fetchData: function(t) {
        let e = {
            ...this.request.get(),
            ...t
        };
        return "." == e.f[0] && (e.f = this.basePath + e.f), E.fetch(e);
    },
    makeUrl: function(t) {
        let e = {
            ...this.request.get(),
            ...t
        };
        return "." == e.f[0] && (e.f = this.basePath + e.f), E.makeUrl(e);
    }
}), L = (0, _rinn.ModelList).extend({
    className: "DataList",
    debounceDelay: 250,
    request: null,
    eid: null,
    __ctor: function(t, e = null) {
        this._super.ModelList.__ctor(), null !== e && Object.assign(this, e), this.request || (this.request = {}), this.request.f = t, this.request = new (0, _rinn.Model)(this.request), this.eid = Math.random().toString().substr(2), this.dataList = this, this.request.addEventListener(this.eid + ":propertyChanged", this.forwardRequestEvent, this);
    },
    forwardRequestEvent: function(t, e) {
        this.prepareEvent("request" + t.name[0].toUpperCase() + t.name.substr(1), e).setSource(t.source).resume();
    },
    refresh: function(t = null, e = null) {
        if (this._timeout && (clearTimeout(this._timeout), this._timeout = null), !0 === t) {
            this.dispatchEvent("listLoading"), E.fetch(this.request.get()).then((t)=>{
                this.setData(200 == t.response ? t.data : null), this.dispatchEvent("listLoaded"), this.dispatchEvent("listChanged"), null !== e && e();
            });
            return;
        }
        this._timeout = setTimeout(()=>{
            this.refresh(!0, t);
        }, this.debounceDelay);
    }
});
let C = {
    interpolate: function(t, e, s, n, o) {
        let a = {}, r = {}, l = 0;
        for(let e in t)a[e] = 0, r[e] = t[e], l++;
        let h = Date.now() / 1e3, c = 0, u = function() {
            let d = Date.now() / 1e3;
            for(let o in c = d - h, h = d, a){
                if (a[o] == s[o]) continue;
                a[o] += c, a[o] >= s[o] && (a[o] = s[o], l--);
                let h = n[o](a[o] / s[o]);
                r[o] = (1 - h) * t[o] + h * e[o];
            }
            o(r, 0 == l), 0 != l && requestAnimationFrame(u);
        };
        u();
    },
    Linear: {
        IN: function(t) {
            return t;
        },
        OUT: function(t) {
            return t;
        },
        IN_OUT: function(t) {
            return t;
        }
    },
    Back: {
        k: 1.70158,
        IN: function(t, e) {
            return void 0 === e && (e = C.Back.k), t * t * ((e + 1) * t - e);
        },
        OUT: function(t, e) {
            return 1 - C.Back.IN(1 - t, e);
        },
        IN_OUT: function(t, e) {
            return t < .5 ? C.Back.IN(2 * t, e) / 2 : C.Back.OUT((t - .5) * 2, e) / 2 + .5;
        }
    },
    Bounce: {
        getConst: function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        IN: function(t) {
            return 1 - C.Bounce.getConst(1 - t);
        },
        OUT: function(t) {
            return C.Bounce.getConst(t);
        },
        IN_OUT: function(t) {
            return t < .5 ? (1 - C.Bounce.getConst(1 - 2 * t)) / 2 : C.Bounce.getConst((t - .5) * 2) / 2 + .5;
        }
    },
    Circ: {
        IN: function(t) {
            return 1 - Math.sqrt(1 - t * t);
        },
        OUT: function(t) {
            return 1 - C.Circ.IN(1 - t);
        },
        IN_OUT: function(t) {
            return t < .5 ? C.Circ.IN(2 * t) / 2 : C.Circ.OUT((t - .5) * 2) / 2 + .5;
        }
    },
    Cubic: {
        IN: function(t) {
            return t * t * t;
        },
        OUT: function(t) {
            return 1 - C.Cubic.IN(1 - t);
        },
        IN_OUT: function(t) {
            return t < .5 ? C.Cubic.IN(2 * t) / 2 : C.Cubic.OUT((t - .5) * 2) / 2 + .5;
        }
    },
    Expo: {
        IN: function(t) {
            return Math.pow(2, 12 * (t - 1));
        },
        OUT: function(t) {
            return -Math.pow(2, -12 * t) + 1;
        },
        IN_OUT: function(t) {
            return (t *= 2) < 1 ? Math.pow(2, 12 * (t - 1)) / 2 : (-Math.pow(2, -12 * (t - 1)) + 2) / 2;
        }
    },
    Power: {
        p: 12,
        IN: function(t) {
            return Math.pow(t, C.Power.p);
        },
        OUT: function(t) {
            return 1 - C.Power.IN(1 - t);
        },
        IN_OUT: function(t) {
            return t < .5 ? C.Power.IN(2 * t) / 2 : C.Power.OUT((t - .5) * 2) / 2 + .5;
        }
    },
    Quad: {
        IN: function(t) {
            return t * t;
        },
        OUT: function(t) {
            return 1 - C.Quad.IN(1 - t);
        },
        IN_OUT: function(t) {
            return t < .5 ? C.Quad.IN(2 * t) / 2 : C.Quad.OUT((t - .5) * 2) / 2 + .5;
        }
    },
    Quartic: {
        IN: function(t) {
            return t * t * t * t;
        },
        OUT: function(t) {
            return 1 - C.Quartic.IN(1 - t);
        },
        IN_OUT: function(t) {
            return t < .5 ? C.Quartic.IN(2 * t) / 2 : C.Quartic.OUT((t - .5) * 2) / 2 + .5;
        }
    },
    Quintic: {
        IN: function(t) {
            return t * t * t * t * t;
        },
        OUT: function(t) {
            return 1 - C.Quintic.IN(1 - t);
        },
        IN_OUT: function(t) {
            return t < .5 ? C.Quintic.IN(2 * t) / 2 : C.Quintic.OUT((t - .5) * 2) / 2 + .5;
        }
    },
    Sine: {
        IN: function(t) {
            return 1 - Math.sin(1.5708 * (1 - t));
        },
        OUT: function(t) {
            return Math.sin(1.5708 * t);
        },
        IN_OUT: function(t) {
            return -((Math.cos(3.1416 * t) - 1) / 2);
        }
    },
    Step: {
        IN: function(t) {
            return 1 != t ? 0 : 1;
        },
        OUT: function(t) {
            return 1 != t ? 0 : 1;
        },
        IN_OUT: function(t) {
            return 1 != t ? 0 : 1;
        }
    }
}, S = (0, _rinn.Class).extend({
    list: null,
    initialData: null,
    data: null,
    stack: null,
    block: null,
    timeScale: 1,
    time: 0,
    blockTime: 0,
    index: 0,
    paused: !1,
    finished: !1,
    onFinishedCallback: null,
    onUpdatedCallback: null,
    __ctor: function() {
        this.list = [], this.initialData = {}, this.data = {}, this.stack = [], this.block = this.list, this.reset();
    },
    __dtor: function() {},
    clone: function() {
        let t = new S;
        return t.list = this.list, t.initialData = this.initialData, t.reset();
    },
    onFinished: function(t) {
        return this.onFinishedCallback = t, this;
    },
    onUpdated: function(t) {
        return this.onUpdatedCallback = t, this;
    },
    reset: function() {
        for(let t in this.stack.length = 0, this.blockTime = 0, this.time = 0, this.index = 0, this.block = this.list, this.paused = !0, this.finished = !1, this.handle = null, this.initialData)this.data[t] = this.initialData[t];
        return this;
    },
    initial: function(t) {
        return this.initialData = t, this.reset();
    },
    speed: function(t) {
        return this.timeScale = t > 0 ? t : 1, this;
    },
    setOutput: function(t) {
        return this.data = t, this;
    },
    pause: function() {
        this.paused || (clearInterval(this.handle), this.paused = !0);
    },
    resume: function() {
        if (!this.paused) return;
        let t = Date.now() / 1e3;
        this.handle = setInterval(()=>{
            let e = Date.now() / 1e3, s = e - t;
            t = e, this.update(s), this.onUpdatedCallback && this.onUpdatedCallback(this.data, this);
        }, 16), this.onUpdatedCallback && this.onUpdatedCallback(this.data, this), this.paused = !1;
    },
    update: function(e) {
        let s, n, o;
        if (this.paused) return !1;
        if (this.index >= this.block.length) return !0;
        let a = 0;
        for(this.time += e * this.timeScale; this.index < this.block.length;){
            let r, l = this.block[this.index];
            switch(l.op){
                case "parallel":
                    if (!1 == l.started) for(a = 0, l.blocks.length = 0, l.started = !0; a < l.block.length; a++)l.blocks.push([
                        l.block[a]
                    ]), l.indices[a] = 0, l.blockTimes[a] = this.blockTime;
                    s = this.block, n = this.index;
                    let h = 0, c = o = this.blockTime;
                    for(a = 0; a < l.blocks.length; a++)this.block = l.blocks[a], this.index = l.indices[a], this.blockTime = l.blockTimes[a], !0 === this.update(0) && h++, this.blockTime > c && (c = this.blockTime), l.blockTimes[a] = this.blockTime, l.blocks[a] = this.block, l.indices[a] = this.index;
                    if (this.block = s, this.index = n, this.blockTime = o, l.fn && l.fn.call(this), h != l.blocks.length) return !1;
                    l.started = !1, this.blockTime = c, this.index++;
                    break;
                case "serial":
                    if (!1 == l.started && (l._block = l.block, l._index = 0, l._blockTime = this.blockTime, l.started = !0), s = this.block, n = this.index, o = this.blockTime, this.block = l._block, this.index = l._index, this.blockTime = l._blockTime, a = this.update(0), l._block = this.block, l._index = this.index, l._blockTime = this.blockTime, this.block = s, this.index = n, this.blockTime = o, l.fn && l.fn.call(this), !0 !== a) return !1;
                    l.started = !1, this.blockTime = l._blockTime, this.index++;
                    break;
                case "repeat":
                    if (!1 == l.started && (l._block = l.block, l._index = 0, l._blockTime = this.blockTime, l._count = l.count, l.started = !0), s = this.block, n = this.index, o = this.blockTime, this.block = l._block, this.index = l._index, this.blockTime = l._blockTime, a = this.update(0), l._block = this.block, l._index = this.index, l._blockTime = this.blockTime, this.block = s, this.index = n, this.blockTime = o, l.fn && l.fn.call(this), !0 !== a) return !1;
                    if (l._count <= 1) return l.started = !1, this.blockTime = l._blockTime, this.index++, !1;
                    return l._index = 0, l._count--, !1;
                case "set":
                    this.data[l.field] = l.value, this.index++;
                    break;
                case "restart":
                    this.index = 0;
                    break;
                case "wait":
                    if (r = "string" == (0, _rinn.Rinn).typeOf(l.duration) ? this.data[l.duration] : l.duration, this.time < this.blockTime + r) return !1;
                    this.blockTime += r, this.index++;
                    break;
                case "range":
                    if (!1 == l.started && (null === l.startValue ? l._startValue = this.data[l.field] : l._startValue = l.startValue, l._endValue = l.endValue, l.started = !0), r = "string" == (0, _rinn.Rinn).typeOf(l.duration) ? this.data[l.duration] : l.duration, e = this.time < this.blockTime + r ? (this.time - this.blockTime) / r : 1, l.easing && 1 != e ? this.data[l.field] = l.easing(e) * (l._endValue - l._startValue) + l._startValue : this.data[l.field] = e * (l._endValue - l._startValue) + l._startValue, 1 != e) return !1;
                    l.started = !1, this.blockTime += r, this.index++;
                    break;
                case "rand":
                    if (!1 == l.started && (l.started = !0, l.last = null), r = "string" == (0, _rinn.Rinn).typeOf(l.duration) ? this.data[l.duration] : l.duration, e = this.time < this.blockTime + r ? (this.time - this.blockTime) / r : 1, l.easing && 1 != e ? l.cur = ~~(l.easing(e) * l.count) : l.cur = ~~(e * l.count), l.cur != l.last) {
                        for(; (a = ~~(Math.random() * (l.endValue - l.startValue + 1)) + l.startValue) == this.data[l.field];);
                        this.data[l.field] = a, l.last = l.cur;
                    }
                    if (1 != e) return !1;
                    l.started = !1, this.blockTime += r, this.index++;
                    break;
                case "randt":
                    if (r = "string" == (0, _rinn.Rinn).typeOf(l.duration) ? this.data[l.duration] : l.duration, e = this.time < this.blockTime + r ? (this.time - this.blockTime) / r : 1, a = l.easing && 1 != e ? l.easing(e) * (l.count - 1) : e * (l.count - 1), this.data[l.field] = l.table[~~((a + l.count) % l.count)], 1 != e) return !1;
                    this.blockTime += r, this.index++;
                    break;
                case "play":
                    l.snd.play(), this.index++;
                    break;
                case "exec":
                    l.fn.call(this, this), this.index++;
            }
        }
        return this.block == this.list && (this.finished || null == this.onFinishedCallback || this.onFinishedCallback(), this.pause(), this.finished = !0), !0;
    },
    parallel: function() {
        let t = [];
        return this.block.push({
            op: "parallel",
            started: !1,
            block: t,
            blocks: [],
            indices: [],
            blockTimes: []
        }), this.stack.push(this.block), this.block = t, this;
    },
    serial: function() {
        let t = [];
        return this.block.push({
            op: "serial",
            started: !1,
            block: t
        }), this.stack.push(this.block), this.block = t, this;
    },
    repeat: function(t) {
        let e = [];
        return this.block.push({
            op: "repeat",
            started: !1,
            block: e,
            count: t
        }), this.stack.push(this.block), this.block = e, this;
    },
    callback: function(t) {
        let e = this.stack[this.stack.length - 1];
        return e[e.length - 1].fn = t, this;
    },
    end: function() {
        return this.block = this.stack.pop(), this;
    },
    set: function(t, e) {
        return this.block.push({
            op: "set",
            field: t,
            value: e
        }), this;
    },
    restart: function(t) {
        return this.block.push({
            op: "restart"
        }), this;
    },
    wait: function(t) {
        return this.block.push({
            op: "wait",
            duration: t
        }), this;
    },
    range: function(t, e, s, n, o) {
        return this.block.push({
            op: "range",
            started: !1,
            field: t,
            duration: e,
            startValue: s,
            endValue: n,
            easing: o || null
        }), this;
    },
    rand: function(t, e, s, n, o, a) {
        return this.block.push({
            op: "rand",
            started: !1,
            field: t,
            duration: e,
            count: s,
            startValue: n,
            endValue: o,
            easing: a || null
        }), this;
    },
    randt: function(t, e, s, n, o, a) {
        let r = [];
        for(let t = 0; t < s; t++)r.push(t % (o - n + 1) + n);
        for(let t = s >> 2; t > 0; t--){
            let t = ~~(Math.random() * s), e = ~~(Math.random() * s), n = r[e];
            r[e] = r[t], r[t] = n;
        }
        return this.block.push({
            op: "randt",
            field: t,
            duration: e,
            count: s,
            startValue: n,
            endValue: o,
            table: r,
            easing: a || null
        }), this;
    },
    play: function(t) {
        return this.block.push({
            op: "play",
            snd: t
        }), this;
    },
    exec: function(t) {
        return this.block.push({
            op: "exec",
            fn: t
        }), this;
    }
});
var x = _.register("r-tabs", {
    container: null,
    activeTab: null,
    "event click [data-name]": function(t) {
        if (t.continuePropagation = !0, this.dataset.baseRoute) {
            location = "#" + b.realLocation(this.dataset.baseRoute.replace("@", t.source.dataset.name));
            return;
        }
        this.selectTab(t.source.dataset.name);
    },
    init: function() {
        this._routeHandler = (t, e)=>{
            "" != b.location && this.querySelectorAll("[href]").forEach((t)=>{
                t.href && (b.location.startsWith(t.href.substr(t.href.indexOf("#") + 1)) ? (t.classList.add("is-active"), t.classList.remove("is-inactive")) : (t.classList.add("is-inactive"), t.classList.remove("is-active")), t.classList.remove("anim-ended"), t.onanimationend = ()=>{
                    t.onanimationend = null, t.classList.add("anim-ended");
                });
            }), e.route.changed && this.showTab(e.tabName);
        };
    },
    ready: function() {
        "container" in this.dataset ? ":previousElement" == this.dataset.container ? this.container = this.previousElementSibling : ":nextElement" == this.dataset.container ? this.container = this.nextElementSibling : ":none" == this.dataset.container ? this.container = null : this.container = document.querySelector(this.dataset.container) : this.container = this.nextElementSibling, this._hideTabsExcept(this.dataset.initial);
    },
    onConnected: function() {
        this.dataset.baseRoute && b.addRoute(this.dataset.baseRoute.replace("@", ":tabName"), this._routeHandler);
    },
    onDisconnected: function() {
        this.dataset.baseRoute && b.removeRoute(this.dataset.baseRoute.replace("@", ":tabName"), this._routeHandler);
    },
    _hideTabsExcept: function(t) {
        t || (t = ""), null != this.container && this.container.querySelectorAll(":scope > [data-name]").forEach((e)=>{
            e.dataset.name === t ? (e.classList.remove("is-hidden"), this.dispatch("tabShown", {
                name: e.dataset.name,
                el: e
            })) : (e.classList.add("is-hidden"), this.dispatch("tabHidden", {
                name: e.dataset.name,
                el: e
            }));
        }), this.querySelectorAll("[data-name]").forEach((e)=>{
            e.dataset.name === t ? (e.classList.add("is-active"), e.classList.remove("is-inactive")) : (e.classList.add("is-inactive"), e.classList.remove("is-active")), e.classList.remove("anim-ended"), e.onanimationend = ()=>{
                e.onanimationend = null, e.classList.add("anim-ended");
            };
        }), this.activeTab = t, this.dispatch("tabChanged", {
            name: t,
            el: this
        });
    },
    showTab: function(t) {
        return this._hideTabsExcept(t);
    },
    selectTab: function(t) {
        if (this.dataset.baseRoute) {
            let e = "#" + b.realLocation(this.dataset.baseRoute.replace("@", t));
            if (location.hash != e) {
                location = e;
                return;
            }
        }
        this.showTab(t);
    }
}), T = _.register("r-form", {
    isRoot: !0,
    model: {},
    events: {
        "change [data-field]": "_fieldChanged",
        "click input[type=reset]": "reset",
        "click .reset": "reset",
        "click input[type=submit]": "submit",
        "click button[type=submit]": "submit",
        "click .submit": "submit",
        "submit form": "submit"
    },
    ready: function() {
        let t = document.createElement("form");
        t.append(...this.childNodes), this.append(t);
        let e = {}, s = this.model.get();
        for(let t in this.querySelectorAll("[data-field]").forEach((t)=>{
            t.name = t.dataset.field, s[t.name] = t.type;
            let n = t.dataset.default;
            if (void 0 == n) switch(t.type){
                case "radio":
                    if (!t.checked) return;
                    n = t.value;
                    break;
                case "checkbox":
                    n = t.checked ? "1" : "0";
                    break;
                case "field":
                    n = t.getValue();
                    break;
                default:
                    n = "";
            }
            e[t.dataset.field] = n;
        }), s)t in e ? s[t] = e[t] : s[t] = "";
        e = s, this.model.defaults = e, this.model.reset(), this.clearMarkers();
    },
    filterString: function(t, e) {
        return t && "messages" in g && t.startsWith("@messages.") && t.substr(10) in g.messages && (t = (0, _rinn.Template).eval(g.messages[t.substr(10)], e)), t;
    },
    _change: function(t) {
        if ("createEvent" in document) {
            let e = document.createEvent("HTMLEvents");
            e.initEvent("change", !1, !0), t.dispatchEvent(e);
        } else t.fireEvent("onchange");
    },
    _setField: function(t, e, s) {
        if (t) for (t of this.querySelectorAll('[data-field="' + t + '"]'))switch(t.type || t.tagName.toLowerCase()){
            case "select":
                t.val = t.dataset.value = t.multiple && e ? e.split(",") : e, t.value = t.val = t.dataset.value, !0 !== s && this._change(t);
                break;
            case "checkbox":
                t.checked = !!parseInt(e);
                break;
            case "radio":
                t.checked = e == t.value;
                break;
            case "field":
                t.val = t.dataset.value = e, t.setValue(e);
                break;
            case "file":
                e instanceof File || e instanceof Blob ? (t.val = e, t.dataset.value = e) : e instanceof FileList ? (t.val = e, t.dataset.value = e) : (t.val = t.dataset.value = "", t.value = "");
                break;
            default:
                t.val = t.dataset.value = e, t.value = e, !0 !== s && this._change(t);
        }
    },
    _getField: function(t, e = null, s = !1) {
        if (!t) return null;
        if ("string" != typeof t) {
            let n = null == t.value ? t.val : t.value;
            switch(null === n && (n = e), t.type || t.tagName.toLowerCase()){
                case "select":
                    e = t.multiple && n ? n.join(",") : n;
                    break;
                case "checkbox":
                    e = t.checked ? "1" : "0";
                    break;
                case "radio":
                    t.checked && (e = t.value);
                    break;
                case "field":
                    e = t.getValue();
                    break;
                case "file":
                    e = s ? t.files && t.files.length ? t.multiple ? t.files : t.files[0] : null : t.val;
                    break;
                default:
                    e = n;
            }
            return null === e ? "" : e;
        }
        for (t of (e = null, this.querySelectorAll('[data-field="' + t + '"]')))e = this._getField(t, e);
        return null === e ? "" : e;
    },
    getField: function(t) {
        return this._getField(t);
    },
    clearMarkers: function() {
        this.classList.remove("busy"), this.querySelectorAll(".message").forEach((t)=>t.classList.add("is-hidden")), this.querySelectorAll("span.field-error").forEach((t)=>t.remove()), this.querySelectorAll(".field-error").forEach((t)=>{
            t.classList.remove("field-error"), t.classList.remove("is-invalid");
        }), this.querySelectorAll(".field-passed").forEach((t)=>t.classList.remove("field-passed"));
    },
    _fieldChanged: function(t) {
        let e = t.source;
        "file" == e.type ? this.model.set(e.dataset.field, this._getField(e, null, !0), !0) : this.model.set(e.dataset.field, this._getField(e)), t.continuePropagation = !0;
    },
    onModelPropertyChanged: function(t, e) {
        this._setField(e.name, e.value);
    },
    _onSuccess: function(t) {
        let e;
        this.classList.remove("busy"), this.clearMarkers(), this.dispatch("formSuccess", t), t.message && null != (e = this.querySelector(".message.success")) && (e.innerHTML = this.filterString(t.message, t).replace(/\n/g, "<br/>"), e.classList.remove("is-hidden"), e.onanimationend = ()=>e.classList.add("is-hidden"));
    },
    _onFailure: function(t) {
        let e;
        if (this.classList.remove("busy"), this.clearMarkers(), this.dispatch("formError", t), t.fields) {
            for(let e in t.fields){
                let s = this.querySelector('[data-field-container="' + e + '"]');
                if (!s && !(s = this.querySelector('[data-field="' + e + '"]'))) continue;
                let n = document.createElement("span");
                n.classList.add("field-error"), n.innerHTML = this.filterString(t.fields[e], t).replace(/\n/g, "<br/>"), s.classList.add("field-error"), s.classList.add("is-invalid"), "bottom" == this.dataset.errorsAt ? s.parentElement.append(n) : "top" == this.dataset.errorsAt ? s.parentElement.prepend(n) : s.parentElement.insertBefore(n, s.nextElementSibling), setTimeout(function(t) {
                    return function() {
                        t.classList.add("active");
                    };
                }(n), 25);
            }
            t.error && null != (e = this.querySelector(".message.error")) && (e.innerHTML = this.filterString(t.error, t).replace(/\n/g, "<br/>"), e.classList.remove("is-hidden"), e.onanimationend = ()=>e.classList.add("is-hidden"));
        } else null != (e = this.querySelector(".message.error")) && (e.innerHTML = this.filterString(t.error, t).replace(/\n/g, "<br/>") || "Error: " + t.response, e.classList.remove("is-hidden"), e.onanimationend = ()=>e.classList.add("is-hidden"));
    },
    reset: function(t) {
        if (this.model.reset(t), this.clearMarkers(), !1 === t) for(var e in this.model.data)this._setField(e, this.model.data[e], !0);
        return !1;
    },
    submit: function() {
        if (this.classList.contains("busy")) return;
        let t = {};
        "false" == this.dataset.strict && Object.assign(t, this.model.get());
        let e = {};
        this.querySelectorAll("[data-field]").forEach((t)=>e[t.dataset.field] = !0), Object.keys(e).forEach((e)=>t[e] = this._getField(e)), this.dispatch("beforeSubmit", t), this.model.set(t);
        let s = this.dataset.formAction || this.formAction;
        s && (this.classList.add("busy"), "function" != typeof s ? (t.f = s, E.apiCall(t, (t)=>this[200 == t.response ? "_onSuccess" : "_onFailure"](t), (t)=>this._onFailure({
                error: "Unable to execute request."
            }), this.dataset.method ?? "POST")) : s(t, (t)=>this[200 == t.response ? "_onSuccess" : "_onFailure"](t)));
    }
}), P = _.register("r-panel", {
    route: null,
    init: function() {
        this.style.display = "", this._onActivate = (t, e)=>{
            e.route.changed && this.show(!0);
        }, this._onDeactivate = (t, e)=>{
            this.hide();
        }, this.hide();
    },
    onConnected: function() {
        this.dataset.route ? (this.route = b.addRoute(this.dataset.route, this._onActivate, this._onDeactivate), this.classList.remove("is-active"), this.classList.add("is-inactive")) : (this.classList.add("is-active"), this.classList.remove("is-inactive")), this.classList.add("anim-ended");
    },
    onDisconnected: function() {
        this.dataset.route && b.removeRoute(this.dataset.route, this._onActivate, this._onDeactivate);
    },
    hide: function() {
        this.dispatch("panelHidden", this.route ? this.route.args : {}), this.classList.remove("anim-ended"), this.classList.remove("is-active"), this.classList.add("is-inactive"), this.onanimationend = ()=>{
            this.classList.add("anim-ended"), this.onanimationend = null;
        };
    },
    show: function(t = !1) {
        if (this.dataset.route && !t) {
            let t = "#" + this.dataset.route;
            if (window.location.hash.substr(0, t.length) != t) {
                window.location = t;
                return;
            }
        }
        this.dispatch("panelShown", this.route ? this.route.args : {}), this.classList.remove("anim-ended"), this.classList.remove("is-inactive"), this.classList.add("is-active"), this.onanimationend = ()=>{
            this.classList.add("anim-ended"), this.onanimationend = null;
        };
    },
    toggleVisibility: function(t = !1) {
        this.classList.contains("is-active") ? this.hide() : this.show(t);
    }
}), A = _.register("r-list", {
    list: null,
    container: null,
    template: null,
    isEmpty: !1,
    isDynamicTemplate: !1,
    ready: function() {
        this.container = this.querySelector(this.dataset.container || ".x-data"), this.container || (this.container = document.createElement("div"), this.container.className = "x-data", this.appendChild(this.container));
        let t = this.template_elem = this.querySelector("template");
        t ? ("dynamic" != t.dataset.mode ? this.template = (0, _rinn.Template).compile(t.innerHTML) : (this.template = ()=>t.innerHTML, this.isDynamicTemplate = !0), t.remove()) : this.template = ()=>"", this.container.textContent = " ", this.setEmpty(null), this.setLoading(null);
    },
    rready: function() {
        let t = this.dataList ?? this.getFieldByPath(this.dataset.list);
        if (!t) {
            this.dataset.list && console.error("data-list not found: " + this.dataset.list);
            return;
        }
        this.setList(t);
    },
    setEmpty: function(t) {
        this.isEmpty !== t && (!0 === t ? (this.querySelectorAll(".x-empty").forEach((t)=>t.classList.remove("is-hidden")), this.querySelectorAll(".x-not-empty").forEach((t)=>t.classList.add("is-hidden")), this.querySelectorAll(".x-empty-null").forEach((t)=>t.classList.add("is-hidden"))) : !1 === t ? (this.querySelectorAll(".x-empty").forEach((t)=>t.classList.add("is-hidden")), this.querySelectorAll(".x-not-empty").forEach((t)=>t.classList.remove("is-hidden")), this.querySelectorAll(".x-empty-null").forEach((t)=>t.classList.add("is-hidden"))) : (this.querySelectorAll(".x-empty").forEach((t)=>t.classList.add("is-hidden")), this.querySelectorAll(".x-not-empty").forEach((t)=>t.classList.add("is-hidden")), this.querySelectorAll(".x-empty-null").forEach((t)=>t.classList.remove("is-hidden"))), this.isEmpty = t);
    },
    setLoading: function(t) {
        !0 === t ? this.querySelectorAll(".is-loading").forEach((t)=>t.classList.remove("is-hidden")) : this.querySelectorAll(".is-loading").forEach((t)=>t.classList.add("is-hidden"));
    },
    setList: function(e) {
        e && (0, _rinn.Rinn).isInstanceOf(e, (0, _rinn.ModelList)) && this.list !== e && (null != this.list && (this.list.dataSource && this.list.dataSource.removeEventListener(this.eid + ":*"), this.list.dataList && this.list.dataList.removeEventListener(this.eid + ":*"), this.list.removeEventListener(this.eid + ":*")), this.list = e, this.list.dataSource && (this.list.dataSource.addEventListener(this.eid + ":listLoading", this.onLoading, this), this.list.dataSource.addEventListener(this.eid + ":listLoaded", this.onLoaded, this)), this.list.dataList && (this.list.dataList.addEventListener(this.eid + ":listLoading", this.onLoading, this), this.list.dataList.addEventListener(this.eid + ":listLoaded", this.onLoaded, this)), this.list.addEventListener(this.eid + ":itemsCleared", this.onItemsCleared, this), this.list.addEventListener(this.eid + ":itemsChanged", this.onItemsChanged, this), this.list.addEventListener(this.eid + ":itemRemoved", this.onItemRemoved, this), this.list.addEventListener(this.eid + ":itemChanged", this.onItemChanged, this), this.list.addEventListener(this.eid + ":itemAdded", this.onItemAdded, this));
    },
    buildItem: function(t, e, s = !1) {
        if (this.content) {
            let s = this.content(e.get(), e);
            return s.dataset.iid = t, s;
        }
        if (this.container.content) {
            let s = this.container.content(e.get(), e);
            return s.dataset.iid = t, s;
        }
        let n = this.template(e.get());
        if (s) return n;
        let o = document.createElement("div");
        for (let s of (o.dataset.iid = t, o.innerHTML = n, o.querySelectorAll('[data-model=":list-item"]').forEach((t)=>{
            t.model = e, t.dataset.model = "this.model";
        }), this.template_elem.attributes))s.nodeName.startsWith("data-_") || "data-mode" == s.nodeName || o.setAttribute(s.nodeName, s.nodeValue);
        return o;
    },
    onLoading: function() {
        this.setLoading(!0);
    },
    onLoaded: function() {
        this.setLoading(!1);
    },
    onItemsCleared: function() {
        this.container._timeout = setTimeout(()=>{
            this.setEmpty(!0), this.container._timeout = null, this.container.textContent = "";
        }, 300);
    },
    onItemsChanged: function() {
        if (0 == this.list.length()) return;
        this.container._timeout && clearTimeout(this.container._timeout), this.container._timeout = null, this.container.textContent = "";
        let t = 0;
        for (let e of this.list.getData())"false" != this.dataset.wrap ? this.container.append(this.buildItem(this.list.itemId[t++], e)) : this.container.innerHTML += this.buildItem(this.list.itemId[t++], e, !0);
        this.setEmpty(0 == t);
    },
    onItemRemoved: function(t, e) {
        if ("false" == this.dataset.wrap) {
            this.onItemsChanged();
            return;
        }
        let s = this.container.querySelector('[data-iid="' + e.id + '"]');
        s && (s.remove(), this.setEmpty(0 == this.list.length()));
    },
    onItemChanged: function(t, e) {
        if (this.isDynamicTemplate) return;
        if ("false" == this.dataset.wrap) {
            this.onItemsChanged();
            return;
        }
        let s = this.container.querySelector('[data-iid="' + e.id + '"]');
        s && (s.innerHTML = this.template(e.item));
    },
    onItemAdded: function(t, e) {
        "head" == e.position ? "false" != this.dataset.wrap ? this.container.prepend(this.buildItem(e.id, e.item)) : this.container.innerHTML = this.buildItem(e.id, e.item, !0) + this.container.innerHTML : "false" != this.dataset.wrap ? this.container.append(this.buildItem(e.id, e.item)) : this.container.innerHTML += this.buildItem(e.id, e.item, !0), this.setEmpty(!1);
    },
    refresh: function() {
        this.onItemsChanged();
    }
}), R = _.register("r-item", {
    isRoot: !0,
    init: function() {},
    rready: function() {
        let t = this.dataModel ?? this.getFieldByPath(this.dataset.model);
        t || (t = {}), this.setModel(t);
    }
}), w = _.register("r-paginator", {
    source: null,
    template: null,
    init: function() {
        this.setModel({
            offsetStart: 0,
            offsetEnd: 0,
            count: 0,
            offset: 0,
            currentPageSize: this.dataset.pageSize || 25,
            pageSize: this.dataset.pageSize || 25
        }), this.listen("propertyChanged.pageSize", (t, e)=>{
            this.model.get("currentPageSize") != e.value && (this.model.set("currentPageSize", e.value), this.updateOffset("range"));
        });
    },
    rready: function() {
        let t = this.dataSource ?? this.getFieldByPath(this.dataset.source);
        if (!t) {
            this.dataset.source && console.error("data-source not found: " + this.dataset.source);
            return;
        }
        this.setSource(t);
    },
    setSource: function(e) {
        e && (0, _rinn.Rinn).isInstanceOf(e, k) && this.source !== e && (null != this.source && (this.source.removeEventListener(this.eid + ":*"), this.source.includeCount = !1), this.source = e, this.source.includeCount = !0, this.updateOffset(), this.source.addEventListener(this.eid + ":requestPropertyChanged", this.onRequestPropertyChanged, this), this.source.addEventListener(this.eid + ":countChanged", this.onCountChanged, this), this.source.addEventListener(this.eid + ":listItemRemoved", this.onItemRemoved, this), this.source.addEventListener(this.eid + ":listItemAdded", this.onItemAdded, this), this.source.setNamespace(this.eid), this.source.request.update(!0), this.source.setNamespace(null));
    },
    updateOffset: function(t = null) {
        this.model.set("offsetStart", 0 != this.model.get("count") ? this.model.get("offset") + 1 : 0), this.model.set("offsetEnd", Math.min(this.model.get("count"), this.model.get("offsetStart") + this.model.getInt("pageSize") - 1)), this.model.update("count");
        let e = this.source.request.get("count"), s = this.source.request.get("offset");
        this.source.request.set("count", this.model.getInt("pageSize")), this.source.request.set("offset", this.model.get("offset")), t && (e != this.source.request.get("count") || s != this.source.request.get("offset")) && this.source.refresh(t);
    },
    onRequestPropertyChanged: function(t, e) {
        "count" != e.name && "offset" != e.name && this.model.set(e.name, e.value);
    },
    onModelPropertyChanged: function(t, e) {
        -1 == [
            "offsetStart",
            "offsetEnd",
            "count",
            "offset",
            "currentPageSize",
            "pageSize"
        ].indexOf(e.name) && this.source.request.get(e.name) != e.value && (this.source.request.set(e.name, e.value), this.source.refresh("filter"));
    },
    onCountChanged: function(t, e) {
        this.model.set("count", t.source.count, !1), this.updateOffset();
    },
    onItemRemoved: function(t, e) {
        this.model.set("count", this.model.getInt("count") - 1, !1), this.updateOffset();
    },
    onItemAdded: function(t, e) {
        this.model.set("count", this.model.getInt("count") + 1, !1), this.updateOffset();
    },
    prevPage: function() {
        if (0 >= this.model.get("offset")) return;
        let t = this.model.get("offset") - this.model.getInt("pageSize");
        t < 0 && (t = 0), this.model.set("offset", t), this.updateOffset("range");
    },
    nextPage: function() {
        let t = this.model.get("offset") + this.model.getInt("pageSize");
        t >= this.model.get("count") || (this.model.set("offset", t), this.updateOffset("range"));
    },
    firstPage: function() {
        this.model.set("offset", 0), this.updateOffset("range");
    },
    lastPage: function() {
        let t = this.model.get("count") - this.model.getInt("pageSize");
        t < 0 && (t = 0), this.model.set("offset", t), this.updateOffset("range");
    },
    refresh: function() {
        this.source.refresh("full");
    },
    clear: function(t) {
        for(let e = 0; e < t.length; e++)this.model.set(t[e], "");
    }
}), O = _.register("r-table", {
    isRoot: !0,
    source: null,
    template: null,
    container: null,
    isEmpty: null,
    init: function() {
        this.setModel({});
    },
    ready: function() {
        if (this.container = this.querySelector(this.dataset.container || "tbody.x-data"), !this.container) throw Error("r-table requires a container");
        "dynamic" != this.container.dataset.mode ? this.template = (0, _rinn.Template).compile(this.container.innerHTML) : this.template = ()=>this.container.innerHTML, this.temporalBody = document.createElement("tbody"), this.container.textContent = " ", this.setEmpty(!0);
    },
    rready: function() {
        let t = this.dataSource ?? this.getFieldByPath(this.dataset.source);
        if (!t) {
            this.dataset.source && console.error("data-source not found: " + this.dataset.source);
            return;
        }
        this.setSource(t);
    },
    setEmpty: function(t) {
        this.isEmpty !== t && (t ? (this.querySelectorAll(".x-empty").forEach((t)=>t.classList.remove("is-hidden")), this.querySelectorAll(".x-not-empty").forEach((t)=>t.classList.add("is-hidden"))) : (this.querySelectorAll(".x-empty").forEach((t)=>t.classList.add("is-hidden")), this.querySelectorAll(".x-not-empty").forEach((t)=>t.classList.remove("is-hidden"))), this.isEmpty = t);
    },
    setSource: function(e) {
        e && (0, _rinn.Rinn).isInstanceOf(e, k) && this.source !== e && (null != this.source && this.source.removeEventListener(this.eid + ":*"), this.source = e, this.source.addEventListener(this.eid + ":requestPropertyChanged", this.onRequestPropertyChanged, this), this.source.addEventListener(this.eid + ":listItemsCleared", this.onItemsCleared, this), this.source.addEventListener(this.eid + ":listItemsChanged", this.onItemsChanged, this), this.source.addEventListener(this.eid + ":listItemRemoved", this.onItemRemoved, this), this.source.addEventListener(this.eid + ":listItemChanged", this.onItemChanged, this), this.source.addEventListener(this.eid + ":listItemAdded", this.onItemAdded, this), this.source.setNamespace(this.eid), this.source.request.update(!0), this.source.setNamespace(null));
    },
    onRequestPropertyChanged: function(t, e) {
        if (this.model.set(e.name, e.value), "sort" == e.name) this.querySelectorAll("thead [data-sort]").forEach((t)=>t.dataset.order = "");
        else if ("order" == e.name) {
            let s = this.querySelector('thead [data-sort="' + t.source.get("sort") + '"]');
            s && (s.dataset.order = e.value);
        }
    },
    onModelPropertyChanged: function(t, e) {
        this.source.request.get(e.name) != e.value && (this.source.request.set(e.name, e.value), -1 == [
            "count",
            "offset"
        ].indexOf(e.name) && this.source.refresh("filter"));
    },
    onModelPropertyRemoved: function(t, e) {
        "string" == typeof e.fields ? this.source.request.remove(i) : e.fields.forEach((t)=>this.source.request.remove(t)), this.source.refresh("filter");
    },
    buildItem: function(t, e) {
        if (this.container.content) {
            let s = this.container.content(e.get(), e);
            return s.dataset.iid = t, s;
        }
        let s = this.temporalBody;
        return s.innerHTML = this.template(e.get()), s.querySelectorAll('[data-model=":list-item"]').forEach((t)=>{
            t.model = e, t.dataset.model = "this.model";
        }), (s = s.firstElementChild).dataset.iid = t, s;
    },
    onItemsCleared: function(t, e) {
        this.container._timeout = setTimeout(()=>{
            this.setEmpty(!0), this.container._timeout = null, this.container.textContent = "";
        }, 300);
    },
    onItemsChanged: function(t, e) {
        if (0 == this.source.list.length()) return;
        this.container._timeout && clearTimeout(this.container._timeout), this.container._timeout = null, this.container.textContent = "";
        let s = 0;
        for (let t of this.source.list.getData())this.container.append(this.buildItem(this.source.list.itemId[s++], t));
        this.setEmpty(0 == s);
    },
    onItemRemoved: function(t, e) {
        let s = this.container.querySelector('[data-iid="' + e.id + '"]');
        s && (s.remove(), this.setEmpty(0 == this.source.list.length()));
    },
    onItemChanged: function(t, e) {
        let s = this.container.querySelector('[data-iid="' + e.id + '"]');
        if (!s) return;
        let n = this.buildItem(e.id, e.item);
        this.container.replaceChild(n, s);
    },
    onItemAdded: function(t, e) {
        "head" == e.position ? this.container.prepend(this.buildItem(e.id, e.item)) : this.container.append(this.buildItem(e.id, e.item)), this.setEmpty(!1);
    },
    "event click thead [data-sort]": function(t, e) {
        this.source.request.get("sort") == t.source.dataset.sort ? this.source.request.set("order", "asc" == this.source.request.get("order") ? "desc" : "asc") : (this.source.request.set("sort", t.source.dataset.sort), this.source.request.set("order", "asc", !0)), this.source.refresh("order");
    },
    refresh: function() {
        this.source.refresh("full");
    },
    clear: function(t) {
        for(let e = 0; e < t.length; e++)this.model.set(t[e], "");
    }
}), I = _.register("r-select", {
    list: null,
    container: null,
    value: "",
    init: function() {
        this.container = document.createElement("select"), this.parentElement.insertBefore(this.container, this);
        let t = [];
        for (let e of this.attributes)e.nodeName.startsWith("data-_") || "data-list" == e.nodeName || "data-blank" == e.nodeName || (this.container.setAttribute(e.nodeName, e.nodeValue), t.push(e.nodeName));
        this.disabled && (this.container.disabled = this.disabled), t.forEach((t)=>this.removeAttribute(t)), this.textContent = " ", this.style.display = "none";
    },
    rready: function() {
        let t = this.dataList ?? this.getFieldByPath(this.dataset.list);
        if (!t) {
            this.dataset.list && console.error("data-list not found: " + this.dataset.list);
            return;
        }
        this.setList(t), this.parentElement.lastElementChild !== this && this.parentElement.append(this);
    },
    setList: function(e) {
        e && (0, _rinn.Rinn).isInstanceOf(e, (0, _rinn.ModelList)) && this.list !== e && (null != this.list && this.list.removeEventListener(this.eid + ":*"), this.list = e, this.list.dataSource && (this.list.dataSource.includeEnum = !0), this.list.addEventListener(this.eid + ":itemsCleared", this.onItemsCleared, this), this.list.addEventListener(this.eid + ":itemsChanged", this.onItemsChanged, this), this.list.addEventListener(this.eid + ":itemRemoved", this.onItemsChanged, this), this.list.addEventListener(this.eid + ":itemChanged", this.onItemsChanged, this), this.list.addEventListener(this.eid + ":itemAdded", this.onItemsChanged, this), this.onItemsChanged());
    },
    onItemsCleared: function(t, e) {
        this.container.textContent = "";
    },
    onItemsChanged: function(t, e) {
        if (0 == this.list.length()) return;
        let s = this.list.getData(), n, o, a = "";
        if (s[0].has("value") ? n = "value" : s[0].has("id") && (n = "id"), s[0].has("label") ? o = "label" : s[0].has("name") && (o = "name"), "blank" in this.dataset && (a += '<option value="">' + this.dataset.blank + "</option>"), s[0].has("group")) {
            let t = {};
            for(let e in s.forEach((e)=>t[e.get("group")] = null), t)t[e] = {
                name: e,
                list: []
            };
            s.forEach((e)=>t[e.get("group")].list.push(e)), (t = Object.values(t)).forEach((t)=>{
                a += '<optgroup label="' + t.name + '">', t.list.forEach((t)=>a += '<option value="' + t.get(n) + '">' + t.get(o) + "</option>"), a += "</optgroup>";
            });
        } else s.forEach((t)=>a += '<option value="' + t.get(n) + '">' + t.get(o) + "</option>");
        this.container.innerHTML = a, this.container.value = this.container.dataset.value;
    },
    refresh: function() {
        this.onItemsChanged();
    }
});
let N = {
    showDownload: function(t, e) {
        let s = document.createElement("a");
        s.href = e, s.style.display = "none", s.download = t, s.target = "_blank", document.body.appendChild(s), s.click(), document.body.removeChild(s);
    },
    showFilePicker: function(t, e, s) {
        let n = document.createElement("input");
        n.type = "file", n.accept = e, n.style.display = "none", n.multiple = t, document.body.appendChild(n), n.onchange = function() {
            s(n.files);
        }, document.body.onfocus = function() {
            document.body.onfocus = null, document.body.removeChild(n);
        }, n.click();
    },
    loadAsDataUrl: function(t, e) {
        let s = new FileReader;
        s.onload = function(t) {
            e(t.target.result, null);
        }, s.onerror = function(t) {
            e(null, t);
        }, s.readAsDataURL(t);
    },
    loadAsText: function(t, e) {
        let s = new FileReader;
        s.onload = function(t) {
            e(t.target.result);
        }, s.readAsText(t);
    },
    loadAsArrayBuffer: function(t, e) {
        let s = new FileReader;
        s.onload = function(t) {
            e(t.target.result);
        }, s.readAsArrayBuffer(t);
    },
    loadAllAsDataUrl: function(t, e) {
        let s = [];
        if (!t || !t.length) {
            e(s);
            return;
        }
        let n = function(o) {
            if (o == t.length) {
                e(s);
                return;
            }
            N.loadAsDataUrl(t[o], function(e, a) {
                a || s.push({
                    name: t[o].name,
                    size: t[o].size,
                    url: e
                }), n(o + 1);
            });
        };
        n(0);
    },
    loadImageFromUrl: function(t, e) {
        let s = new Image;
        s.onload = ()=>e(s), s.onerror = ()=>e(null), s.src = t;
    }
};
var q = _.register("r-image-cropper", {
    aspectRatio: 1,
    imageScale0: 0,
    imageScale: 1,
    imageOffsX: 0,
    imageOffsY: 0,
    pointerA: null,
    pointerB: null,
    bounds: null,
    init: function() {
        this.canvas = document.createElement("canvas"), this.appendChild(this.canvas), this.g = this.canvas.getContext("2d"), this.pointerA = {
            id: null,
            active: !1,
            sx: 0,
            sy: 0,
            cx: 0,
            cy: 0,
            ix: 0,
            iy: 0
        }, this.pointerB = {
            id: null,
            active: !1,
            sx: 0,
            sy: 0,
            cx: 0,
            cy: 0,
            ix: 0,
            iy: 0
        }, this.log = document.createElement("div"), this.appendChild(this.log);
    },
    setImageUrl: function(t) {
        N.loadImageFromUrl(t, (t)=>{
            this.setImage(t);
        });
    },
    setImageFile: function(t) {
        N.loadAsDataUrl(t, (t)=>{
            N.loadImageFromUrl(t, (t)=>{
                this.setImage(t);
            });
        });
    },
    setImage: function(t) {
        this.image = t, this.reset(), this.imageScale = Math.max(this.canvas.width / this.image.width, this.canvas.height / this.image.height), this.imageOffsX = (this.canvas.width - this.imageScale * this.image.width) * .5, this.imageOffsY = (this.canvas.height - this.imageScale * this.image.height) * .5, this.render();
    },
    getBlobAndUrl: function(t, e = "image/png", s = .9) {
        this.canvas.toBlob((e)=>{
            t(e, URL.createObjectURL(e));
        }, e, s);
    },
    reset: function() {
        this.bounds = this.getBoundingClientRect(), this.canvas.width = this.bounds.width, this.canvas.height = this.bounds.width / this.aspectRatio;
    },
    render: function() {
        this.canvas.width = this.canvas.width, this.g.fillStyle = "#000", this.g.beginPath(), this.g.rect(0, 0, this.canvas.width, this.canvas.height), this.g.fill(), this.g.translate(this.imageOffsX, this.imageOffsY), this.g.scale(this.imageScale, this.imageScale), this.g.drawImage(this.image, 0, 0);
    },
    translateImage: function(t, e) {
        this.imageOffsX += t, this.imageOffsY += e, this.render(!0);
    },
    "event mousemove canvas": function(t) {
        this.pointerA.active && (this.pointerA.cx = t.clientX, this.pointerA.cy = t.clientY, this.translateImage(this.pointerA.cx - this.pointerA.sx, this.pointerA.cy - this.pointerA.sy), this.pointerA.sx = this.pointerA.cx, this.pointerA.sy = this.pointerA.cy), this.pointerA.ix = (t.clientX - this.bounds.left - this.imageOffsX) / this.imageScale, this.pointerA.iy = (t.clientY - this.bounds.top - this.imageOffsY) / this.imageScale;
    },
    "event mousedown canvas": function(t) {
        this.pointerA.active = !0, this.pointerA.sx = t.clientX, this.pointerA.sy = t.clientY;
    },
    "event mouseup canvas": function(t) {
        this.pointerA.active = !1;
    },
    "event wheel canvas": function(t) {
        t.deltaY > 0 ? this.imageScale -= .045 : this.imageScale += .045, this.imageScale < .1 && (this.imageScale = .1), this.imageOffsX += -this.pointerA.ix * this.imageScale + (t.clientX - this.bounds.left) - this.imageOffsX, this.imageOffsY += -this.pointerA.iy * this.imageScale + (t.clientY - this.bounds.top) - this.imageOffsY, this.render();
    },
    "event touchmove canvas": function(t) {
        for (let e of t.changedTouches)this.pointerA.id == e.identifier ? (this.pointerA.cx = e.clientX, this.pointerA.cy = e.clientY) : this.pointerB.id == e.identifier && (this.pointerB.cx = e.clientX, this.pointerB.cy = e.clientY);
        if (this.pointerA.active && this.pointerB.active) {
            let t = Math.sqrt(Math.pow(this.pointerA.sx - this.pointerB.sx, 2) + Math.pow(this.pointerA.sy - this.pointerB.sy, 2)), e = Math.sqrt(Math.pow(this.pointerA.cx - this.pointerB.cx, 2) + Math.pow(this.pointerA.cy - this.pointerB.cy, 2));
            this.imageScale += (e - t) / 10 * .025, this.imageScale < .1 && (this.imageScale = .1), this.imageOffsX += -this.pointerA.ix * this.imageScale + (this.pointerA.cx - this.bounds.left) - this.imageOffsX, this.imageOffsY += -this.pointerA.iy * this.imageScale + (this.pointerA.cy - this.bounds.top) - this.imageOffsY, this.pointerA.sx = this.pointerA.cx, this.pointerA.sy = this.pointerA.cy, this.pointerB.sx = this.pointerB.cx, this.pointerB.sy = this.pointerB.cy, this.render();
        } else {
            let t = this.pointerA.active ? this.pointerA : this.pointerB.active ? this.pointerB : null;
            if (!t) return;
            this.translateImage(t.cx - t.sx, t.cy - t.sy), t.sx = t.cx, t.sy = t.cy;
        }
    },
    "event touchstart canvas": function(t) {
        for (let e of (this.imageScale0 = this.imageScale, t.changedTouches))null === this.pointerA.id ? (this.pointerA.id = e.identifier, this.pointerA.active = !0, this.pointerA.sx = e.clientX, this.pointerA.sy = e.clientY, this.pointerA.ix = (e.clientX - this.bounds.left - this.imageOffsX) / this.imageScale, this.pointerA.iy = (e.clientY - this.bounds.top - this.imageOffsY) / this.imageScale) : null === this.pointerB.id && (this.pointerB.id = e.identifier, this.pointerB.active = !0, this.pointerB.sx = e.clientX, this.pointerB.sy = e.clientY, this.pointerB.ix = (e.clientX - this.bounds.left - this.imageOffsX) / this.imageScale, this.pointerB.iy = (e.clientY - this.bounds.top - this.imageOffsY) / this.imageScale);
    },
    "event touchend canvas": function(t) {
        for (let e of t.changedTouches)this.pointerA.id == e.identifier ? (this.pointerA.id = null, this.pointerA.active = !1) : this.pointerB.id == e.identifier && (this.pointerB.id = null, this.pointerB.active = !1);
    },
    "event touchcancel canvas": function(t) {
        for (let e of t.changedTouches)this.pointerA.id == e.identifier ? (this.pointerA.id = null, this.pointerA.active = !1) : this.pointerB.id == e.identifier && (this.pointerB.id = null, this.pointerB.active = !1);
    }
});
let U = {
    E_NONE: 0,
    E_PERMISSION_DENIED: 32769,
    E_POSITION_UNAVAILABLE: 32770,
    E_TIMEOUT: 32771,
    E_UNSUPPORTED: 32772,
    E_UNKNOWN: 32777,
    supported: null,
    status: null,
    indicatorOn: function() {
        g.document.documentElement.classList.add("busy-geo");
    },
    indicatorOff: function() {
        g.document.documentElement.classList.remove("busy-geo");
    },
    init: function() {
        return this.supported = !!navigator.geolocation, this.supported;
    },
    getCurrentPosition: function() {
        null === this.supported && this.init();
        let t = this.status = {
            cancelled: !1
        };
        return new Promise(async (e, s)=>{
            if (this.indicatorOn(), !this.supported) {
                this.status === t && (this.status = null), t.cancelled || this.indicatorOff(), s({
                    status: t,
                    code: U.E_UNSUPPORTED,
                    message: "Geolocation is not supported on this device."
                });
                return;
            }
            navigator.geolocation.getCurrentPosition((s)=>{
                this.status === t && (this.status = null), t.cancelled || this.indicatorOff(), s.status = t, e(s);
            }, (e)=>{
                let n;
                switch(this.status === t && (this.status = null), t.cancelled || this.indicatorOff(), e.code){
                    case 1:
                        n = U.E_PERMISSION_DENIED;
                        break;
                    case 2:
                        n = U.E_POSITION_UNAVAILABLE;
                        break;
                    case 3:
                        n = U.E_TIMEOUT;
                        break;
                    default:
                        n = U.E_UNKNOWN, e.message = "Unable to get the current location.";
                }
                s({
                    status: t,
                    code: n,
                    message: e.message
                });
            }, {
                enableHighAccuracy: !0
            });
        });
    },
    cancel: function() {
        null !== this.status && (this.status.cancelled || this.indicatorOff(), this.status.cancelled = !0, this.status = null);
    }
}, M = (0, _rizaSignal.signal), D = (0, _rizaSignal.expr), $ = (0, _rizaSignal.watch), B = (0, _rizaSignal.validator), H = {
    DYNAMIC: {},
    setValue: function(t, e, s, n) {
        if (("class" === e[0] || "classList" === e[0]) && (e[0] = "className"), e.length > 1 && "trait" === e[0]) {
            switch(e[1]){
                case "value":
                    t.onchange = (t)=>n.set(t.currentTarget.value), $([
                        n
                    ], (e)=>t.value = e);
                    break;
                case "input":
                    t.oninput = (t)=>n.set(t.currentTarget.value), $([
                        n
                    ], (e)=>t.value = e);
                    break;
                case "checked":
                    t.onchange = (t)=>n.set(t.currentTarget.checked), $([
                        n
                    ], (e)=>t.checked = e);
                    break;
                case "selected":
                    t.onchange = (t)=>n.set(t.currentTarget.selected), $([
                        n
                    ], (e)=>t.selected = e);
                    break;
                default:
                    console.error("Unknown trait: " + e[1]);
            }
            return;
        }
        if (1 === e.length && "object" == typeof n) switch(e[0]){
            case "style":
                for(let e in n)$([
                    e,
                    n[e]
                ], (e, s)=>t.style[e] = s);
                return;
            case "className":
                if (n instanceof Array) $([
                    n
                ], (e)=>{
                    for(let s in t.className = "", e)t.classList.add(e[s]);
                });
                else for(let e in n)$([
                    e,
                    n[e]
                ], (e, s)=>t.classList[!0 == s ? "add" : "remove"](e));
                return;
        }
        if (2 === e.length && "className" === e[0]) {
            $([
                e[1],
                n
            ], (e, s)=>t.classList[!0 == s ? "add" : "remove"](e));
            return;
        }
        for(let n = 0; n < s && t; n++)t = t[e[n]];
        if (!t) return;
        let o = e[s];
        o.startsWith("on") && (o = o.toLowerCase()), $([
            o,
            n
        ], (e, s)=>t[e] = s);
    },
    createSetter: function(t) {
        let e = t.length - 1;
        return function(s, n) {
            H.setValue(s, t, e, n);
        };
    },
    copyProps: function(t, e) {
        for(let s in t)!(!s.startsWith("on") || s.startsWith("onmoz")) && t[s] && (e[s] = t[s]);
        for (let s of Object.getOwnPropertyNames(t))~~s != s && (e[s] = t[s]);
        return e;
    },
    cloneNode: function(t, e = !1) {
        if (!e && !0 === t.isCustom) throw Error("cloneNode only available as deep clone for custom elements.");
        if (e && !0 === t.isCustom) return t.cloneNodeCustom();
        let s = t.cloneNode();
        if (e) for (let e of t.childNodes)s.appendChild(H.cloneNode(e, !0));
        return H.copyProps(t, s), "oncreated" in s && s.oncreated(s), s;
    },
    ensureNode: function(t, e = !1) {
        if (t instanceof Array) {
            for(let s = 0; s < t.length; s++)t[s] = H.ensureNode(t[s], e);
            return t;
        }
        return t instanceof Node ? e ? H.cloneNode(t, !0) : t : document.createTextNode(t);
    },
    replaceNode: function(t, e, s, n = !1) {
        if (e instanceof Array) {
            for(; e.length > 1;){
                let s = e.shift();
                s.parentElement === t && s.remove();
            }
            e = e.shift();
        }
        let o = s, a = s;
        if (s instanceof Array) {
            let t = document.createDocumentFragment();
            o = [], 0 == s.length && (s = [
                document.createTextNode("")
            ]);
            for(let e = 0; e < s.length; e++)o.push(s[e]), t.appendChild(s[e]);
            a = s[0], s = t;
        }
        if (!1 === n) {
            e.replaceWith(s);
            let t = document.createComment("");
            a.parentElement.insertBefore(t, a), o instanceof Array || (o = [
                o
            ]), o.push(t);
        } else e.appendChild(s);
        return o;
    },
    createReplacer: function(t) {
        return function(e, s) {
            t = H.replaceNode(e, t, H.ensureNode(s));
        };
    },
    create: function(t, e, s) {
        let n = document.createElement(t), o = [];
        for(let t = 0; t < e.length; t += 2){
            let s = null;
            if (s = -1 !== e[t].indexOf(":") ? e[t].split(":") : [
                e[t]
            ], e[t + 1] !== H.DYNAMIC) {
                H.setValue(n, s, s.length - 1, e[t + 1]);
                continue;
            }
            o.push(H.createSetter(s));
        }
        let a = [], r = !1, l = !0;
        for(let t in s)!0 === s[t].isCustom && (r = !0), s[t] === H.DYNAMIC && a.push(t);
        let h = o.length, c = a.length;
        return function(t, e, u = null) {
            let d = (e, f = null)=>{
                let p = null;
                if (l || r) {
                    let t = r ? H.cloneNode(n) : n;
                    for(let e in s){
                        if (s[e] instanceof Array) throw Error("Document fragments not fully supported!");
                        H.replaceNode(t, t, H.ensureNode(s[e], !0), !0);
                    }
                    r && (p = t), l = !1;
                }
                null === p && (p = H.cloneNode(n, !0));
                let m = "oncreated" in p, g = a.map((t)=>H.createReplacer(p.childNodes[t]));
                for(let e = 0; e < h; e++)o[e](p, t[e]);
                for(let t = 0; t < c; t++)$([
                    e[t],
                    t
                ], (t, e)=>g[e](p, t));
                if (null !== u) for (let t of u)for(let e in t){
                    let s = null;
                    s = -1 !== e.indexOf(":") ? e.split(":") : [
                        e
                    ], H.setValue(p, s, s.length - 1, t[e]);
                }
                return null !== f && H.copyProps(f, p), !m && "oncreated" in p && p.oncreated(p), p.isCustom = !0, p.cloneNode = ()=>{
                    throw Error("Use of cloneNode is forbidden in custom elements, use cloneNodeCustom instead.");
                }, p.cloneNodeCustom = ()=>d(e.map((t)=>t instanceof Node && !0 === t.isCustom ? t.cloneNodeCustom() : t), p), p;
            };
            return d(e);
        };
    }
}, F = b, V = _, Y = _, j = E, X = k, Q = L, z = C, W = S, G = {
    Tabs: x,
    Form: T,
    Panel: P,
    List: A,
    Item: R,
    Paginator: w,
    Table: O,
    Select: I,
    ImageCropper: q
}, K = N, J = {
    db: null,
    init: function(t, e, s) {
        return new Promise((n, o)=>{
            if (!g.indexedDB) {
                o("IndexedDB is not available in your system.");
                return;
            }
            let a = indexedDB.open(t, e);
            a.onerror = (t)=>{
                let e = t.target.error + "";
                -1 !== e.indexOf("AbortError") && (e = "\n" + a.message), o("Unable to open database: " + e);
            }, a.onupgradeneeded = async (t)=>{
                try {
                    let e = t.target.result, n = t.target.transaction;
                    t.oldVersion < 1 && e.createObjectStore("system", {
                        keyPath: [
                            "name"
                        ]
                    }), await s(e, n, t.oldVersion);
                } catch (t) {
                    a.message = t.message, a.transaction.abort();
                }
            }, a.onsuccess = async (t)=>{
                this.db = t.target.result, n();
            };
        });
    },
    ensureConnected: function() {
        this.db || alert("Error: Database not initialized.");
    },
    index: function(t, e) {
        this.ensureConnected();
        let s = this.db.transaction(t, "readwrite").objectStore(t).index(e);
        if (!s) throw Error("Unable to find index `" + e + "` in store " + t);
        return s;
    },
    forEach: function(t, e, s) {
        return this.ensureConnected(), "function" == typeof e && (s = e, e = null), new Promise(async (n, o)=>{
            let a, r;
            r = "string" == typeof t ? this.db.transaction(t, "readwrite").objectStore(t) : t, (a = null === e ? r.openCursor() : r.openCursor(e)).onsuccess = async (t)=>{
                let e = t.target.result;
                if (!e || !1 === await s(e.value, e)) {
                    n();
                    return;
                }
                e.continue();
            }, a.onerror = (t)=>{
                o(t.target.error);
            };
        });
    },
    count: function(t) {
        return this.ensureConnected(), new Promise((e, s)=>{
            let n = ("string" == typeof t ? this.db.transaction(t, "readonly").objectStore(t) : t).count();
            n.onsuccess = (t)=>{
                e(t.target.result);
            }, n.onerror = (t)=>{
                s(t.target.error);
            };
        });
    },
    getAll: function(t, e = null) {
        return this.ensureConnected(), new Promise((s, n)=>{
            let o = ("string" == typeof t ? this.db.transaction(t, "readonly").objectStore(t) : t).getAll(e);
            o.onsuccess = (t)=>{
                s(t.target.result);
            }, o.onerror = (t)=>{
                n(t.target.error);
            };
        });
    },
    getAllKeys: function(t, e = null) {
        return this.ensureConnected(), new Promise((s, n)=>{
            let o = ("string" == typeof t ? this.db.transaction(t, "readonly").objectStore(t) : t).getAllKeys(e);
            o.onsuccess = (t)=>{
                s(t.target.result);
            }, o.onerror = (t)=>{
                n(t.target.error);
            };
        });
    },
    getAllUnique: function(t, e = null) {
        return this.ensureConnected(), new Promise((s, n)=>{
            let o = ("string" == typeof t ? this.db.transaction(t, "readonly").objectStore(t) : t).openCursor(null, "nextunique"), a = [];
            o.onsuccess = (t)=>{
                let n = t.target.result;
                if (!n) {
                    s(a);
                    return;
                }
                a.push(e ? n.value[e] : n.value), n.continue();
            }, o.onerror = (t)=>{
                n(t.target.error);
            };
        });
    },
    get: function(t, e) {
        return this.ensureConnected(), new Promise((s, n)=>{
            let o = ("string" == typeof t ? this.db.transaction(t, "readonly").objectStore(t) : t).get(e);
            o.onsuccess = (t)=>{
                s(t.target.result || null);
            }, o.onerror = (t)=>{
                n(t.target.error);
            };
        });
    },
    put: function(t, e) {
        return this.ensureConnected(), new Promise((s, n)=>{
            let o = this.db.transaction(t, "readwrite").objectStore(t).put(e);
            o.onsuccess = (t)=>{
                s();
            }, o.onerror = (t)=>{
                n(t.target.error);
            };
        });
    },
    sysGet: async function(t, e = !1) {
        let s = await this.get("system", [
            t
        ]);
        return s ? e ? s : s.value : null;
    },
    sysPut: async function(t, e, s = !1) {
        s ? (e.name = t, await this.put("system", e)) : await this.put("system", {
            name: t,
            value: e
        });
    },
    findOne: function(e, s = null, n = null) {
        return this.ensureConnected(), new Promise((o, a)=>{
            let r = ("string" == typeof e ? this.db.transaction(e, "readonly").objectStore(e) : e).openCursor();
            r.onsuccess = (e)=>{
                let a = e.target.result;
                if (!a) {
                    o(null);
                    return;
                }
                if (null === s || (0, _rinn.Rinn).partialCompare(a.value, s)) {
                    if (null !== n && (0, _rinn.Rinn).partialCompare(a.value, n)) {
                        a.continue();
                        return;
                    }
                    o(a.value);
                    return;
                }
                a.continue();
            }, r.onerror = (t)=>{
                a(t.target.error);
            };
        });
    },
    delete: function(t, e) {
        return this.ensureConnected(), new Promise((s, n)=>{
            let o = this.db.transaction(t, "readwrite").objectStore(t).delete(e);
            o.onsuccess = (t)=>{
                s();
            }, o.onerror = (t)=>{
                n(t.target.error);
            };
        });
    },
    deleteAll: function(t, e = null) {
        return this.forEach(t, e, async (t, e)=>{
            await e.delete();
        });
    },
    insert: function(t, e) {
        return this.ensureConnected(), new Promise((s, n)=>{
            let o = this.db.transaction(t, "readwrite").objectStore(t).add(e);
            o.onsuccess = (t)=>{
                s();
            }, o.onerror = (t)=>{
                n(t.target.error);
            };
        });
    }
}, Z = U, tt = (0, _rinn.Rinn), te = (0, _rinn.Class), ti = (0, _rinn.Event), ts = (0, _rinn.EventDispatcher), tn = (0, _rinn.Model), to = (0, _rinn.ModelList), ta = (0, _rinn.Schema), tr = (0, _rinn.Flattenable), tl = (0, _rinn.Collection), th = (0, _rinn.Template);

},{"rinn":"hIZRY","base-64":"i0RlT","riza-signal":"i0lQm","@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh"}],"hIZRY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Rinn", ()=>$9ffb7151b8b2d038$export$eefcfe56efaaa57d) //# sourceMappingURL=rinn.m.js.map
;
parcelHelpers.export(exports, "Class", ()=>$9ffb7151b8b2d038$export$4c85e640eb41c31b);
parcelHelpers.export(exports, "Event", ()=>$9ffb7151b8b2d038$export$d61e24a684f9e51);
parcelHelpers.export(exports, "EventDispatcher", ()=>$9ffb7151b8b2d038$export$ec8b666c5fe2c75a);
parcelHelpers.export(exports, "Model", ()=>$9ffb7151b8b2d038$export$a1edc412be3e1841);
parcelHelpers.export(exports, "ModelList", ()=>$9ffb7151b8b2d038$export$59eced47f477f85a);
parcelHelpers.export(exports, "Schema", ()=>$9ffb7151b8b2d038$export$19342e026b58ebb7);
parcelHelpers.export(exports, "Flattenable", ()=>$9ffb7151b8b2d038$export$3a9581c9ade29768);
parcelHelpers.export(exports, "Collection", ()=>$9ffb7151b8b2d038$export$fb8073518f34e6ec);
parcelHelpers.export(exports, "Template", ()=>$9ffb7151b8b2d038$export$14416b8d99d47caa);
var global = arguments[3];
function $parcel$export(t1, e1, n1, r1) {
    Object.defineProperty(t1, e1, {
        get: n1,
        set: r1,
        enumerable: !0,
        configurable: !0
    });
}
var $parcel$global = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, $parcel$modules = {}, $parcel$inits = {}, parcelRequire = $parcel$global.parcelRequire25d2;
null == parcelRequire && ((parcelRequire = function(t1) {
    if (t1 in $parcel$modules) return $parcel$modules[t1].exports;
    if (t1 in $parcel$inits) {
        var e1 = $parcel$inits[t1];
        delete $parcel$inits[t1];
        var n1 = {
            id: t1,
            exports: {}
        };
        return $parcel$modules[t1] = n1, e1.call(n1.exports, n1, n1.exports), n1.exports;
    }
    var r1 = Error("Cannot find module '" + t1 + "'");
    throw r1.code = "MODULE_NOT_FOUND", r1;
}).register = function(t1, e1) {
    $parcel$inits[t1] = e1;
}, $parcel$global.parcelRequire25d2 = parcelRequire), parcelRequire.register("4VREF", function(module, exports) {
    $parcel$export(module.exports, "default", ()=>$39761b0dd175036e$export$2e2bcd8739ae039);
    var $fMUO1 = parcelRequire("fMUO1"), $cAEYe = parcelRequire("cAEYe"), /**
**	Map of model constraint handlers. Each function should accept parameters (in order): the model object (model), the constraint value (ctval),
**	the property name (name), the property value (value) and return the corrected value once verified or throw an exception if errors occur.
*/ $39761b0dd175036e$export$2e2bcd8739ae039 = {
        _getref: function(value, obj) {
            return "string" != typeof value ? value : ("#" == value.substr(0, 1) ? value = obj.get(value.substr(1)) : "@" == value.substr(0, 1) && (value = obj[value.substr(1)]), "string" == typeof value) ? eval(value) : value;
        },
        /**
	**	Verifies that the new value is of the valid type before storing it on the property. When possible if the
	**	input is of compatible type it will be converted to the target type.
	*/ type: function(t1, e1, n1, r1) {
            switch(e1){
                case "int":
                    if (isNaN(r1 = parseInt(r1))) throw Error(e1);
                    break;
                case "float":
                    if (isNaN(r1 = parseFloat(r1))) throw Error(e1);
                    break;
                case "string":
                    r1 = null == r1 ? "" : r1.toString();
                    break;
                case "bit":
                    if (!0 === r1 || !1 === r1) {
                        r1 = r1 ? 1 : 0;
                        break;
                    }
                    if (isNaN(r1 = parseInt(r1))) throw Error(e1);
                    r1 = r1 ? 1 : 0;
                    break;
                case "array":
                    if ("array" == (0, $fMUO1.default).typeOf(r1)) break;
                    if (null == r1) {
                        r1 = [];
                        break;
                    }
                    throw Error(e1);
                case "bool":
                    if ("true" === r1 || !0 === r1) {
                        r1 = !0;
                        break;
                    }
                    if ("false" === r1 || !1 === r1) {
                        r1 = !1;
                        break;
                    }
                    throw Error(e1);
            }
            return r1;
        },
        /**
	**	Verifies that the field is of the specified model type.
	*/ model: function(t1, e1, n1, r1) {
            var i1 = this._getref(e1, t1);
            if (!i1) throw Error(e1);
            return r1 ? i1.ensure(r1) : new i1;
        },
        /**
	**	Verifies that the field is of the specified class.
	*/ cls: function(t1, e1, n1, r1) {
            var i1 = this._getref(e1, t1);
            return r1 ? (0, $fMUO1.default).ensureTypeOf(i1, r1) : new i1;
        },
        /**
	**	Verifies that the array contents are of the specified class. Returns error if the class does not exist
	**	or if the field is not an array. Therefore a type:array constraint should be used before this one.
	*/ arrayof: function(t1, e1, n1, r1) {
            var i1 = this._getref(e1, t1);
            if (r1 || (r1 = []), !i1 || "array" != (0, $fMUO1.default).typeOf(r1)) throw Error(e1);
            for(var s1 = 0; s1 < r1.length; s1++)r1[s1] = (0, $fMUO1.default).ensureTypeOf(i1, r1[s1]);
            return r1;
        },
        /**
	**	Verifies that the array contents are not null. Returns error if the field is not an array, therefore a
	**	type:array constraint should be used before this one.
	*/ arraynull: function(t1, e1, n1, r1) {
            var i1 = !1;
            if ("object" == (0, $fMUO1.default).typeOf(e1) && (e1.remove && (i1 = e1.remove), e1 = e1.value), e1) return r1;
            if ("array" != (0, $fMUO1.default).typeOf(r1)) throw Error(e1);
            for(var s1 = 0; s1 < r1.length; s1++)if (null == r1[s1]) {
                if (i1) r1.splice(s1--, 1);
                else throw Error(e1);
            }
            return r1;
        },
        /**
	**	Verifies that the array contents are all compliant. Returns error if the field is not an array, therefore
	**	a type:array constraint should be used before this one.
	*/ arraycompliant: function(t1, e1, n1, r1) {
            var i1 = !1;
            if ("object" == (0, $fMUO1.default).typeOf(e1) && (e1.remove && (i1 = e1.remove), e1 = e1.value), !e1) return r1;
            if ("array" != (0, $fMUO1.default).typeOf(r1)) throw Error(e1);
            for(var s1 = 0; s1 < r1.length; s1++)if (null != r1[s1] && !r1[s1].isCompliant()) {
                if (i1) r1.splice(s1--, 1);
                else throw Error(e1);
            }
            return r1;
        },
        /**
	**	Verifies the presense of the field.
	*/ required: function(t1, e1, n1, r1) {
            if (null == r1) throw Error(e1 ? "" : "null");
            if ("array" === (0, $fMUO1.default).typeOf(r1)) {
                if (0 == r1.length) throw Error(e1 ? "" : "null");
            } else if (0 == r1.toString().length) throw Error(e1 ? "" : "null");
            return r1;
        },
        /**
	**	Verifies the minimum length of the field.
	*/ minlen: function(t1, e1, n1, r1) {
            if (r1.toString().length < e1) throw Error(e1);
            return r1;
        },
        /**
	**	Verifies the maximum length of the field.
	*/ maxlen: function(t1, e1, n1, r1) {
            if (r1.toString().length > e1) throw Error(e1);
            return r1;
        },
        /**
	**	Verifies the minimum value of the field.
	*/ minval: function(t1, e1, n1, r1) {
            if (parseFloat(r1) < e1) throw Error(e1);
            return r1;
        },
        /**
	**	Verifies the maximum value of the field.
	*/ maxval: function(t1, e1, n1, r1) {
            if (parseFloat(r1) > e1) throw Error(e1);
            return r1;
        },
        /**
	**	Verifies the minimum number of items in the array.
	*/ mincount: function(t1, e1, n1, r1) {
            if ("array" != (0, $fMUO1.default).typeOf(r1) || r1.length < e1) throw Error(e1);
            return r1;
        },
        /**
	**	Verifies the maximum number of items in the array.
	*/ maxcount: function(t1, e1, n1, r1) {
            if ("array" != (0, $fMUO1.default).typeOf(r1) || r1.length > e1) throw Error(e1);
            return r1;
        },
        /**
	**	Verifies the format of the field using a regular expression. The constraint value should be the name of
	**	one of the Model.Regex regular expressions.
	*/ pattern: function(t1, e1, n1, r1) {
            if (!(0, $cAEYe.default)[e1].test(r1.toString())) throw Error(e1);
            return r1;
        },
        /**
	**	Verifies that the field is inside the specified set of options. The set can be an array or a string with
	**	the options separated by vertical bar (|). The comparison is case-sensitive.
	*/ inset: function(t1, e1, n1, r1) {
            if ("array" != (0, $fMUO1.default).typeOf(e1)) {
                if (!RegExp("^(" + e1.toString() + ")$").test(r1.toString())) throw Error(e1);
                return r1;
            }
            if (-1 == e1.indexOf(r1.toString())) throw Error(e1.join("|"));
            return r1;
        },
        /**
	**	Sets the field to upper case.
	*/ upper: function(t1, e1, n1, r1) {
            return e1 ? r1.toString().toUpperCase() : r1;
        },
        /**
	**	Sets the field to lower case.
	*/ lower: function(t1, e1, n1, r1) {
            return e1 ? r1.toString().toLowerCase() : r1;
        }
    };
}), parcelRequire.register("fMUO1", function(t1, e1) {
    $parcel$export(t1.exports, "default", ()=>r1);
    let n1 = {};
    var r1 = n1; /*
**	Invokes the specified function 'fn' 10ms later.
**
**	>> void invokeLater (function fn);
*/ 
    n1.invokeLater = function(t1) {
        t1 && setTimeout(function() {
            t1();
        }, 10);
    }, /*
**	Waits for the specified amount of milliseconds. Returns a Promise.
**
**	>> Promise wait (int millis);
*/ n1.wait = function(t1) {
        return new Promise(function(e1, n1) {
            setTimeout(e1, t1);
        });
    }, /*
**	Returns the type of an element 'o', properly detects arrays and null types. The return string is always in lowercase.
**
**	>> string typeOf (any o);
*/ n1.typeOf = function(t1) {
        return t1 instanceof Array ? "array" : null === t1 ? "null" : (typeof t1).toString().toLowerCase();
    }, /*
**	Returns boolean indicating if the type of the element is an array or an object.
**
**	>> bool isArrayOrObject (any o);
*/ n1.isArrayOrObject = function(t1) {
        switch(n1.typeOf(t1)){
            case "array":
            case "object":
                return !0;
        }
        return !1;
    }, /*
**	Creates a clone (deep copy) of the specified element. The element can be an array, an object or a primitive type.
**
**	>> T clone (T elem);
*/ n1.clone = function(t1) {
        let e1 = n1.typeOf(t1);
        if ("array" === e1) {
            e1 = [];
            for(let r1 = 0; r1 < t1.length; r1++)e1.push(n1.clone(t1[r1]));
        } else if ("object" === e1) {
            if ("clone" in t1 && "function" == typeof t1.clone) return t1.clone();
            for(let r1 in e1 = {}, t1)e1[r1] = n1.clone(t1[r1]);
        } else e1 = t1;
        return e1;
    }, /*
**	Merges all given elements into the first one, object fields are cloned.
**
**	>> T merge (T... elems)
*/ n1.merge = function(t1, ...e1) {
        if ("array" == n1.typeOf(t1)) for(let r1 = 0; r1 < e1.length; r1++){
            let i1 = e1[r1];
            if ("array" != n1.typeOf(i1)) t1.push(i1);
            else for(let e1 = 0; e1 < i1.length; e1++)t1.push(n1.clone(i1[e1]));
        }
        else if ("object" == n1.typeOf(t1)) for(let r1 = 0; r1 < e1.length; r1++){
            let i1 = e1[r1];
            if ("object" == n1.typeOf(i1)) for(let e1 in i1)n1.isArrayOrObject(i1[e1]) ? e1 in t1 ? n1.merge(t1[e1], i1[e1]) : t1[e1] = n1.clone(i1[e1]) : t1[e1] = i1[e1];
        }
        return t1;
    }, /*
**	Assigns all fields from the specified objects into the first one.
**
**	>> object override (object output, object... objs)
*/ n1.override = function(t1, ...e1) {
        for(let n1 = 0; n1 < e1.length; n1++)for(let r1 in e1[n1])t1[r1] = e1[n1][r1];
        return t1;
    }, /*
**	Compares two objects and returns `true` if all properties in "partial" find a match in "full".
*/ n1.partialCompare = function(t1, e1) {
        if (null == t1 || null == e1) return !1;
        if (t1 === e1) return !0;
        for(var n1 in e1)if (t1[n1] != e1[n1]) return !1;
        return !0;
    }, /*
**	Performs a partial search for an object (o) in the specified array and returns its index or `false` if the
**	object was not found. When `getObject` is set to `true` the object will be returned instead of an index, or
**	`null` if not found.
*/ n1.arrayFind = function(t1, e1, n1) {
        for(var r1 = 0; t1 && r1 < t1.length; r1++)if (this.partialCompare(t1[r1], e1)) return n1 ? t1[r1] : r1;
        return !!n1 && null;
    }, /*
**	Verifies if the specified object is of class `m`, returns boolean.
**
**	>> bool isTypeOf (object obj, class _class);
*/ n1.isInstanceOf = function(t1, e1) {
        return !!t1 && !!e1 && "object" == typeof t1 && (t1 instanceof e1 || "isInstanceOf" in t1 && t1.isInstanceOf(e1));
    }, /*
**	Traverses the given object attempting to find the index/key that does an identical match with the specified value,
**	if not found returns -1, otherwise the index/key where the value was found.
**
**	>> int indexOf (array container, T value)
**	>> string indexOf (object container, T value)
*/ n1.indexOf = function(t1, e1, n1 = !1) {
        if (n1) {
            for(let n1 = 0; n1 < t1.length; n1++)if (t1[n1] === e1) return n1;
            return -1;
        }
        for(let n1 in t1)if (t1[n1] === e1) return n1;
        return -1;
    }, /*
**	Escapes a string using HTML entities.
**
**	>> string escape (string str);
*/ n1.escape = function(t1) {
        return (t1 + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }, /*
**	Verifies if the specified object is of class `m`, if not it will create a new instance of `m` passing `o` as parameter.
**
**	>> object ensureTypeOf (class m, object o);
*/ n1.ensureTypeOf = function(t1, e1) {
        return !e1 || !t1 || e1 instanceof t1 || e1.isInstanceOf && t1.prototype.className && e1.isInstanceOf(t1.prototype.className) ? e1 : new t1(e1);
    }, /*
**	Serializes an object and returns its JSON string representation.
**
**	>> string serialize (object o);
*/ n1.serialize = function(t1) {
        return JSON.stringify(t1);
    }, /*
**	Deserializes a string in JSON format and returns the result.
**
**	>> any deserialize (string s);
*/ n1.deserialize = function(t1) {
        return JSON.parse(t1);
    }, /*
**	Chains a new function to an existing one on some object, such that invoking the function on the object will cause
**	both functions to run (order would be oldFunction then newFunction).
**
**	If the `conditional` flag is set to `true`, the second function will be run only if the first one returns non-false.
**	Returns an object with a single method 'unhook' which will revert the changes to leave only the original function.
**
**	>> object{function unhook} hook (Object object, String functionName, function newFunction, bool conditional=false);
*/ n1.hookAppend = function(t1, e1, n1, r1 = !0) {
        let i1 = t1[e1];
        return r1 ? t1[e1] = function(...t1) {
            if (!1 !== i1.apply(this, t1)) return n1.apply(this, t1);
        } : t1[e1] = function(...t1) {
            return i1.apply(this, t1), n1.apply(this, t1);
        }, {
            unhook: function() {
                t1[e1] = i1;
            }
        };
    }, /*
**	Chains a new function to an existing one on some object, such that invoking the function on the object will cause
**	both functions to run (order would be oldFunction then newFunction).
**
**	If the `conditional` flag is set to `true`, the second function will be run only if the first one returns non-false.
**	Returns an object with a single method 'unhook' which will revert the changes to leave only the original function.
**
**	>> object{function unhook} hook (Object object, String functionName, function newFunction, bool conditional=false);
*/ n1.hookPrepend = function(t1, e1, n1, r1 = !0) {
        let i1 = t1[e1];
        return r1 ? t1[e1] = function(...t1) {
            if (!1 !== n1.apply(this, t1)) return i1.apply(this, t1);
        } : t1[e1] = function(...t1) {
            return n1.apply(this, t1), i1.apply(this, t1);
        }, {
            unhook: function() {
                t1[e1] = i1;
            }
        };
    };
}), parcelRequire.register("cAEYe", function(t1, e1) {
    $parcel$export(t1.exports, "default", ()=>n1); /**
**	Common regular expressions for pattern validation.
*/ 
    var n1 = {
        email: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/i,
        url: /^[\w-]+:\/\/[\w-]+(\.\w+)+.*$/,
        urlNoProt: /^[\w-]+(\.\w+)+.*$/,
        name: /^[-A-Za-z0-9_.]+$/,
        uname: /^['\pL\pN ]+$/,
        text: /^[^&<>{}]*$/,
        utext: /^([\r\n\pL\pN\pS &!@#$%*\[\]()_+=;',.\/?:"~-]+)$/
    };
});
var $fMUO1 = parcelRequire("fMUO1"), $fMUO1 = parcelRequire("fMUO1"); /**
 * Base class used to create other classes with complex prototype based multiple inheritance while at the
 * same time avoiding the prototype chain for faster access. Supports calling parent class methods.
 */ 
//!class Class
let $2394d727dfd6a212$var$Class = function() {}; /**
 * Reference to the class itself.
 */ 
$2394d727dfd6a212$var$Class._class = $2394d727dfd6a212$var$Class, /**
 * Contains the methods of each of the super classes.
 */ $2394d727dfd6a212$var$Class._super = {}, /**
 * Name of the class, if none specified the class will be considered "final" and will not be inheritable.
 * !readonly string className;
 */ $2394d727dfd6a212$var$Class.prototype.className = "Class", /**
 * Class constructor, should initialize the instance. Invoked when the `new` keyword is used with the class.
 * !constructor();
 */ $2394d727dfd6a212$var$Class.prototype.__ctor = function() {}, /**
 * Class destructor, should clear the instance and release any used resources, invoked when the global `dispose` function is called with an instance as parameter.
 * !__dtor() : void;
 */ $2394d727dfd6a212$var$Class.prototype.__dtor = function() {}, /**
 * Returns true if the object is an instance of the specified class, the parameter can be a class name (string), a constructor (function) or
 * a class instance (object), in any cases the appropriate checks will be done.
 * !isInstanceOf (className: string|function|object) : boolean;
 */ $2394d727dfd6a212$var$Class.prototype.isInstanceOf = function(t1) {
    return null !== t1 && ("function" == typeof t1 ? t1 = t1.prototype.className : "string" != typeof t1 && (t1 = t1.__proto__.className), this.className === t1 || this._super.hasOwnProperty(t1));
}, /**
 * Returns true if the given object is an instance of the specified class, the parameter can be a class name (string), a constructor (function)
 * or a class instance (object), in any cases the appropriate checks will be done.
 * !instanceOf (object: object, className: string|function|object) : boolean;
 */ $2394d727dfd6a212$var$Class.instanceOf = function(t1, e1) {
    return null !== t1 && null !== e1 && t1.isInstanceOf(e1);
}, /**
 * Internal method to ensure the _super field of an instance has all functions properly bound to the instance.
 */ $2394d727dfd6a212$var$Class.prototype._initSuperRefs = function() {
    let t1 = this.constructor._super, e1 = {}, n1 = this;
    for(let r1 in t1){
        let i1 = {}, s1 = t1[r1].prototype;
        for(let t1 in s1)"function" === (0, $fMUO1.default).typeOf(s1[t1]) && (i1[t1] = function(t1) {
            return function(e1, r1, i1, s1, a1, l1, o1, u1, f1, h1, c1) {
                return t1.call(n1, e1, r1, i1, s1, a1, l1, o1, u1, f1, h1, c1);
            };
        }(s1[t1]));
        e1[r1] = i1;
    }
    this._super = e1;
}, /*
**	Extends the class with the specified prototype. The prototype can be a function (class constructor) or an object. Note that the
**	class will be modified (and returned) instead of creating a new class. Must be called at the class-level (**not** instance level).
**	When a class is provided all fields starting with uppercase at the class-level will not be inherited, this is used to create constants
**	on classes without having them to be copied to derived classes.
**
**	>> class inherit (constructor classConstructor);
**	>> class inherit (object obj);
*/ $2394d727dfd6a212$var$Class.inherit = function(t1) {
    let e1 = this._class, n1 = e1._super, r1 = e1._class;
    if ("function" === (0, $fMUO1.default).typeOf(t1)) {
        for(let n1 in t1._class)/^[A-Z]/.test(n1) || (e1[n1] = t1._class[n1]); // Combine methods and properties.
        (0, $fMUO1.default).override(e1.prototype, t1._class.prototype), (0, $fMUO1.default).override(n1, t1._class._super), t1._class.prototype.className && (n1[t1._class.prototype.className] = t1._class);
    } else (0, $fMUO1.default).override(e1.prototype, t1);
    return e1._super = n1, e1._class = r1, e1;
}, /**
 * Internal method used to extend a class with one or more prototypes.
 */ $2394d727dfd6a212$var$Class.prototype._extend = function(t1, e1) {
    if (0 === e1.length) return t1; //VIOLET OPTIMIZE
    let n1 = function(...t1) {
        this._initSuperRefs(), this.__ctor.apply(this, t1);
    };
    n1._class = n1, n1._super = {}, $2394d727dfd6a212$var$Class.inherit.call(n1, t1), delete n1.prototype.className;
    for(let t1 = 0; t1 < e1.length; t1++)n1.inherit(e1[t1]);
    return delete n1._super.Class, "classInit" in n1.prototype && n1.prototype.classInit(), n1.isInstance = function(t1) {
        return (0, $fMUO1.default).isInstanceOf(t1, n1);
    }, n1;
}, /**
 * Creates a new class with the specified prototypes each of which can be a class constructor (function) or an object.
 */ $2394d727dfd6a212$var$Class.extend = function(...t1) {
    return this._class.prototype._extend(this, t1);
}, /**
 * Creates a new instance of a class resulting from extending the self class with the specified prototype.
 */ $2394d727dfd6a212$var$Class.create = function(t1) {
    return new (this.extend(t1));
}, /**
 * Mutates the host object to be an instance of the specified class.
 * !static mutate (classConstructor: object, host: object, override?: object) : object;
 */ $2394d727dfd6a212$var$Class.mutate = function(t1, e1, n1 = null) {
    let r1 = new t1; // Copy all members from the class prototype.
    for(let n1 in t1.prototype)e1.hasOwnProperty(n1) || (e1[n1] = t1.prototype[n1]); // Copy all members from the zombie class instance.
    for(let t1 in r1)e1.hasOwnProperty(t1) || (e1[t1] = r1[t1]); // Rebind the super references.
    if (e1._super) for(let n1 in e1._super)for(let r1 in e1._super[n1])e1._super[n1][r1] = t1.prototype.constructor._super[n1].prototype[r1].bind(e1); // Copy override members.
    if (null !== n1) for(let t1 in n1)e1[t1] = n1[t1];
    return e1;
};
var $2394d727dfd6a212$export$2e2bcd8739ae039 = $2394d727dfd6a212$var$Class, $fMUO1 = parcelRequire("fMUO1"), /**
**	Holds the information about a triggered event. It also provides a mechanism to allow asynchronous
**	event propagation to ensure the event chain order.
*/ $13eda5a5dec8010f$export$2e2bcd8739ae039 = $2394d727dfd6a212$export$2e2bcd8739ae039.extend({
    className: "Event",
    /**
	**	Source of the event.
	*/ source: null,
    /**
	**	Name of the event.
	*/ name: null,
    /**
	**	Arguments of the event.
	*/ args: null,
    /**
	**	Indicates if the last event handler wants to use async mode.
	*/ _async: !1,
    /**
	**	Queue of all handlers to invoke.
	*/ list: null,
    /**
	**	Next event to be executed in the event chain.
	*/ next: null,
    /**
	**	Return values from event handlers.
	*/ ret: null,
    /**
	**	Original root event.
	*/ original: null,
    /**
	**	Index of the current event handler.
	*/ i: -1,
    /**
	**	Contructs an event object with the specified parameters. Source is the event-dispatcher object, list is
	**	an array with all the listeners to invoke. The eventName and eventArgs are the event information to be
	**	passed to each handler and if a callback is specified (cbHandler+cbContext) it will be executed once all
	**	the event handlers have been processed.
	**
	**	Event __ctor (source: EventDispatcher, list: Array, eventName: string, eventArgs: map, cbHandler: function, cbContext: object);
	*/ __ctor: function(t1, e1, n1, r1, i1, s1) {
        this.source = t1, this.name = n1, this.args = r1, this.cbHandler = i1, this.cbContext = s1, this.list = e1, this.reset();
    },
    /**
	**	Resets the event to its initial state. An event object can be reused by resetting it and then
	**	invoking the resume event.
	**
	**	Event reset ();
	*/ reset: function() {
        return this.next = null, this.ret = [], this._async = !1, this.i = -1, this;
    },
    /**
	**	Changes the source of the event.
	**
	**	Event setSource (object value);
	*/ setSource: function(t1) {
        return this.source = t1, this;
    },
    /**
	**	Sets the internal asynchronous flag. Should be called before a handler returns. If a handler
	**	calls this method it should also call resume() when async operations are finished.
	**
	**	Event wait ();
	*/ wait: function() {
        return this._async = !0, this;
    },
    /**
	**	Resumes event propagation. Should be called manually by event handlers that also call wait().
	**
	**	Event resume ();
	*/ resume: function() {
        for(this._async = !1; !this._async && !(++this.i >= this.list.length);)if (!this.list[this.i].silent) {
            if ("string" == (0, $fMUO1.default).typeOf(this.list[this.i].handler)) {
                if (this.list[this.i].context) {
                    if (!this.list[this.i].context[this.list[this.i].handler]) continue;
                    if (!1 === this.list[this.i].context[this.list[this.i].handler](this, this.args, this.list[this.i].data)) break;
                } else if (!1 === $parcel$global[this.list[this.i].handler].call(null, this, this.args, this.list[this.i].data)) break;
            } else if (!1 === this.list[this.i].handler.call(this.list[this.i].context, this, this.args, this.list[this.i].data)) break;
        }
        return this._async || (this.i >= this.list.length && this.next && this.next.resume(), this.cbHandler && this.cbHandler.call(this.cbContext)), this;
    },
    /**
	**	Sets the "original" property of the event to indicate where the original event comes from.
	**
	**	Event from (event: Event);
	*/ from: function(t1) {
        return this.original = t1, this;
    },
    /**
	**	Enqueues the specified event to be executed upon the current event process is finished. The "original"
	**	property of the chained event will be set to the current event.
	**
	**	Event enqueueEvent (event: Event);
	*/ enqueue: function(t1) {
        var e1;
        if (!t1) return this;
        for(e1 = this; null != e1.next; e1 = e1.next);
        return e1.next = t1, t1.from(this), this;
    }
}), /**
**	Event dispatcher allows several event listeners to be attached, these will be invoked whenever the
**	event that is being listened to is triggered.
*/ $c43adaf9cb6d6dd3$export$2e2bcd8739ae039 = $2394d727dfd6a212$export$2e2bcd8739ae039.extend({
    className: "EventDispatcher",
    /**
	**	Listeners attached to this event dispatcher. Grouped by event name.
	*/ listeners: null,
    /**
	**	Namespace for event dispatching. Defaults to null. Can be modified using setNamespace().
	*/ namespace: null,
    /**
	**	Initializes the event dispatcher.
	**
	**	EventDispatcher __ctor ();
	*/ __ctor: function() {
        this.listeners = {};
    },
    /**
	**	Sets the event dispatching namespace. Used to force all events dispatched to have the specified namespace.
	**
	**	EventDispatcher setNamespace (value: string);
	*/ setNamespace: function(t1) {
        return this.namespace = t1, this;
    },
    /**
	**	Adds an event listener for a specified event to the event dispatcher. The event name can have an optional
	**	namespace indicator which is added to the beginning of the event name and separated using a colon (:). This
	**	indicator can be used to later trigger or remove all handlers of an specific namespace.
	**
	**	EventDispatcher addEventListener (eventName: string, handler: function, context: object, data: object);
	*/ addEventListener: function(t1, e1, n1, r1) {
        var i1 = (t1 = t1.split(":"))[t1.length - 1], s1 = t1.length > 1 ? t1[0] : null;
        return this.listeners[i1] || (this.listeners[i1] = []), this.listeners[i1].push({
            ns: s1,
            handler: e1,
            context: n1,
            data: r1,
            silent: 0
        }), this;
    },
    /**
	**	Removes an event listener from the event dispatcher. If only the name is provided all handlers with the
	**	specified name will be removed. If a context is provided without a handler then any handler matching the
	**	context will be removed. Special event name "*" can be used to match all event names.
	**
	**	EventDispatcher removeEventListener (eventName: string, handler: function, context: object);
	*/ removeEventListener: function(t1, e1, n1) {
        var r1 = (t1 = t1.split(":"))[t1.length - 1], i1 = t1.length > 1 ? t1[0] : null;
        if ("*" == r1) for(var s1 in this.listeners)for(var a1 = this.listeners[s1], l1 = 0; l1 < a1.length; l1++){
            var o1 = !0;
            e1 && (o1 = o1 && a1[l1].handler === e1), n1 && (o1 = o1 && a1[l1].context === n1), i1 && (o1 = o1 && a1[l1].ns == i1), o1 && a1.splice(l1--, 1);
        }
        else {
            if (!this.listeners[r1]) return this;
            for(var a1 = this.listeners[r1], l1 = 0; l1 < a1.length; l1++){
                var o1 = !0;
                e1 && (o1 = o1 && a1[l1].handler === e1), n1 && (o1 = o1 && a1[l1].context === n1), i1 && (o1 = o1 && a1[l1].ns == i1), o1 && a1.splice(l1--, 1);
            }
        }
        return this;
    },
    /**
	**	Prepares an event with the specified parameters for its later usage. The event is started when
	**	the resume() method is called. If a callback is specified it will be executed once all event
	**	handlers have been processed.
	**
	**	Event prepareEvent (eventName: string, eventArgs: map, cbHandler: function, cbContext: object);
	**	Event prepareEvent (eventName: string, eventArgs: map);
	*/ prepareEvent: function(t1, e1, n1, r1) {
        var i1 = [], s1 = (t1 = t1.split(":"))[t1.length - 1], a1 = t1.length > 1 ? t1[0] : null;
        this.listeners[s1] && (i1 = i1.concat(this.listeners[s1])), this.listeners["*"] && (i1 = i1.concat(this.listeners["*"]));
        for(var l1 = 0; l1 < i1.length; l1++)i1[l1].silent && i1.splice(l1--, 1);
        if (a1) for(var l1 = 0; l1 < i1.length; l1++)i1[l1].ns != a1 && i1.splice(l1--, 1);
        return new $13eda5a5dec8010f$export$2e2bcd8739ae039(this, i1, s1, e1, n1, r1);
    },
    /**
	**	Silences or unsilences all handlers attached to an event such that if the event fires the handler(s) will
	**	not be invoked. It is recommended to use a namespace to ensure other handlers will continue to be run.
	**
	**	EventDispatcher silence (eventName: string);
	*/ silence: function(t1, e1) {
        var n1 = (t1 = t1.split(":"))[t1.length - 1], r1 = t1.length > 1 ? t1[0] : null;
        if (e1 = !1 === e1 ? -1 : 1, "*" == n1) for(var i1 in this.listeners)for(var s1 = this.listeners[i1], a1 = 0; a1 < s1.length; a1++)r1 && s1[a1].ns != r1 || (s1[a1].silent += e1);
        else {
            if (!this.listeners[n1]) return this;
            for(var s1 = this.listeners[n1], a1 = 0; a1 < s1.length; a1++)r1 && s1[a1].ns != r1 || (s1[a1].silent += e1);
        }
        return this;
    },
    /**
	**	Dispatches an event to the respective listeners. If a callback is specified it will be executed once
	**	all event handlers have been processed.
	**
	**	Event dispatchEvent (eventName: string, eventArgs: map, cbHandler: function, cbContext: object);
	**	Event dispatchEvent (eventName: string, eventArgs: map);
	*/ dispatchEvent: function(t1, e1, n1, r1) {
        return this.prepareEvent(this.namespace ? this.namespace + ":" + t1 : t1, e1, n1, r1).resume();
    }
}), $fMUO1 = parcelRequire("fMUO1"), $4VREF = parcelRequire("4VREF"); /**
**	A model is a high-integrity data object used to store properties and more importantly to provide event support to notify of any
**	kind of change that occurs to the model's properties. Integrity of the model is maintained by optionally using property constraints.
*/ 
let $4dfa0622e14576ea$var$_Model = $c43adaf9cb6d6dd3$export$2e2bcd8739ae039.extend({
    className: "Model",
    /**
	**	Default properties for the model. Can be a map with the property name and its default value or a function
	**	returning a map with dynamic default values. This is used to reset the model to its initial state.
	*/ defaults: null,
    /**
	**	Model property contraints. A map with the property name and an object specifying the constraints of the
	**	property. This is used to determine the type, format and behavior of each property in the model.
	*/ constraints: null,
    /**
	**	Properties of the model.
	*/ data: null,
    /**
	**	Array with the name of the properties that have changed. Populated prior modelChanged event.
	*/ changedList: null,
    /**
	**	Silent mode indicator. While in silent mode events will not be dispatched.
	*/ _silent: 0,
    /**
	**	Current nesting level of the set() method. This is used to determine when all the property
	**	changes are done.
	*/ _level: 0,
    /**
	**	Initializes the model and sets the properties to the specified data object.
	**
	**	>> Model __ctor (object data);
	**	>> Model __ctor (object data, object defaults);
	*/ __ctor: function(t1, e1) {
        if (this._super.EventDispatcher.__ctor(), this.data = {}, null != e1) this.reset(e1, !1);
        else {
            let t1 = null;
            if (!this.defaults && this.constraints) for(let e1 in t1 = {}, this.constraints){
                let n1 = this.constraints[e1];
                if (null === n1.def || void 0 === n1.def) {
                    t1[e1] = null;
                    continue;
                }
                "function" == typeof n1.def ? t1[e1] = n1.def() : t1[e1] = n1.def;
            }
            this.reset(t1);
        }
        this.init(), null != t1 && this.set(t1, !0), this.constraints && this.update(), this.ready();
    },
    /**
	**	Resets the model to its default state and triggers update events. If a map is provided the defaults of
	**	the model will be set to the specified map.
	**
	**	>> Model reset (object defaults, [bool nsilent=true]);
	**	>> Model reset ([bool nsilent=true]);
	*/ reset: function(t1, e1) {
        if (!this.defaults) {
            if (!t1 || "object" !== (0, $fMUO1.default).typeOf(t1) && "function" !== (0, $fMUO1.default).typeOf(t1)) return this;
            this.defaults = t1;
        }
        return "function" === (0, $fMUO1.default).typeOf(this.defaults) ? this.data = this.defaults() : this.data = (0, $fMUO1.default).clone(this.defaults), !1 === e1 || !1 === t1 ? this : this.update(null, !0);
    },
    /**
	**	Initializes the model. Called before the model properties are set.
	**
	**	>> void init ();
	*/ init: function() {},
    /**
	**	Initialization epilogue. Called after initialization and after model properties are set.
	**
	**	>> void ready ();
	*/ ready: function() {},
    /**
	**	Enables or disables silent mode. When the model is in silent mode events will not be dispatched.
	**
	**	>> Model silent (value: bool);
	*/ silent: function(t1) {
        return this._silent += t1 ? 1 : -1, this;
    },
    /**
	**	Validates a property name and value against the constraints defined in the model (if any). Returns the
	**	final value if successful or throws an empty exception if errors occur.
	**
	**	>> T _validate (string name, T value);
	*/ _validate: function(t1, e1) {
        if (!this.constraints || !this.constraints[t1]) return e1;
        var n1 = this.constraints[t1], r1 = e1;
        for(var i1 in n1)if ($4dfa0622e14576ea$var$_Model.Constraints[i1]) try {
            r1 = $4dfa0622e14576ea$var$_Model.Constraints[i1](this, n1[i1], t1, r1);
        } catch (e1) {
            if ("null" == e1.message) break;
            throw Error(`Constraint [${i1}:${n1[i1]}] failed on property '${t1}'.`);
        }
        return r1;
    },
    /**
	**	Sets the value of a property and returns the value set. This method is internally used to set properties
	**	one at a time. If constraints are present in the model for the specified property all constraints will be
	**	verified. When constraint errors occur the constraintError event will be raised and the property value
	**	will not be changed.
	**
	**	>> T _set (string name, T value);
	*/ _set: function(t1, e1) {
        if (!this.constraints || !this.constraints[t1]) return this.data[t1] = e1, e1;
        var n1 = this.constraints[t1];
        this.data[t1];
        var r1 = e1;
        for(var i1 in n1)if ($4dfa0622e14576ea$var$_Model.Constraints[i1]) try {
            r1 = $4dfa0622e14576ea$var$_Model.Constraints[i1](this, n1[i1], t1, r1);
        } catch (n1) {
            if ("null" == n1.message) break;
            this._silent || this.dispatchEvent("constraintError", {
                constraint: i1,
                message: n1.message,
                name: t1,
                value: e1
            });
            break;
        }
        return this.data[t1] = r1;
    },
    /**
	**	Triggers property events to indicate a property is changing. First triggers "propertyChanging" and then
	**	"propertyChanged". If the first event returns false the second event will not be triggered.
	**
	**	>> void _propertyEvent (string name, T prev, T value, bool direct=false);
	*/ _propertyEvent: function(t1, e1, n1, r1) {
        var i1 = {
            name: t1,
            old: e1,
            value: n1,
            level: this._level
        }, s1 = this.dispatchEvent("propertyChanging", i1);
        r1 ? this.data[t1] = i1.value : i1.value = this._set(t1, i1.value), null != s1 && s1.ret.length && !1 === s1.ret[0] || (this.dispatchEvent("propertyChanged." + t1, i1), this.dispatchEvent("propertyChanged", i1), this.changedList.push(t1));
    },
    /**
	**	Sets one or more properties of the model. Possible arguments can be two strings or a map.
	**
	**	>> Model set (string name, T value, bool force=true);
	**	>> Model set (string name, T value, bool silent=false);
	**	>> Model set (string name, T value);
	**	>> Model set (object data);
	*/ set: function() {
        var t1 = arguments.length, e1 = !1, n1 = !1;
        if ((t1 > 2 || 2 == t1 && "object" == (0, $fMUO1.default).typeOf(arguments[0])) && "boolean" == (0, $fMUO1.default).typeOf(arguments[t1 - 1]) && (e1 = arguments[--t1], !1 === e1 && (n1 = !0)), 0 == this._level && (this.changedList = []), this._level++, 2 == t1) (this.data[arguments[0]] !== arguments[1] || e1) && (this._silent || n1 ? this._set(arguments[0], arguments[1]) : this._propertyEvent(arguments[0], this.data[arguments[0]], this._validate(arguments[0], arguments[1])));
        else for(var r1 in arguments[0])(this.data[r1] !== arguments[0][r1] || e1) && (this._silent || n1 ? this._set(r1, arguments[0][r1]) : this._propertyEvent(r1, this.data[r1], this._validate(r1, arguments[0][r1])));
        return --this._level || !this.changedList.length || n1 || this._silent || this.dispatchEvent("modelChanged", {
            fields: this.changedList
        }), this;
    },
    /**
	**	Returns true if the given key exists in the model.
	**
	**	>> boolean has (string name);
	*/ has: function(t1) {
        return t1 in this.data;
    },
    /**
	**	Returns the value of a property. If no name is specified the whole map of properties will be returned.
	**	If a boolean value of "true" is provided the properties map will be returned but first will be compacted
	**	using the default data to ensure only valid properties are present.
	**
	**	>> T get (string name);
	**	>> object get ();
	**	>> object get (true);
	**	>> object get (false);
	**	
	*/ get: function(t1, e1) {
        return 0 == arguments.length || !1 === t1 ? this.data : 1 == arguments.length && !0 === t1 ? this.flatten() : 2 == arguments.length && void 0 === this.data[t1] ? e1 : this.data[t1];
    },
    /**
	**	Returns the value of a property as an integer number.
	**
	**	>> int getInt (string name, [int def]);
	*/ getInt: function(t1, e1) {
        return 2 == arguments.length && void 0 === this.data[t1] ? e1 : parseInt(this.data[t1]);
    },
    /**
	**	Returns the value of a property as a floating point number.
	**
	**	>> float getFloat (string name, [float def]);
	*/ getFloat: function(t1, e1) {
        return 2 == arguments.length && void 0 === this.data[t1] ? e1 : parseFloat(this.data[t1]);
    },
    /**
	**	Returns the value of a property as a boolean value (true or false).
	**
	**	>> bool getBool (string name, [bool def]);
	**	
	*/ getBool: function(t1, e1) {
        return t1 = 2 == arguments.length && void 0 === this.data[t1] ? e1 : this.data[t1], "true" === t1 || !0 === t1 || "false" !== t1 && !1 !== t1 && !!parseInt(t1);
    },
    /**
	**	Returns a reference object for a model property. The resulting object contains two methods
	**	named "get" and "set" to modify the value of the property.
	**
	**	>> object getReference (string name);
	*/ getReference: function(t1) {
        var e1 = this;
        return {
            get: function() {
                return e1.get(t1);
            },
            set: function(n1) {
                e1.set(t1, n1);
            }
        };
    },
    /**
	**	Sets or returns a constraint given the property name. 
	**
	**	>> Model constraint (string field, string constraint, T value);
	**	>> Model constraint (string field, object constraint);
	**	>> Model constraint (object constraints);
	**	>> object constraint (string field);
	*/ constraint: function(t1, e1, n1) {
        if (3 == arguments.length || 2 == arguments.length || 1 == arguments.length && "object" == (0, $fMUO1.default).typeOf(t1)) {
            switch(this.constraints === this.constructor.prototype.constraints && (this.constraints = (0, $fMUO1.default).clone(this.constraints)), arguments.length){
                case 1:
                    (0, $fMUO1.default).override(this.constraints, t1);
                    break;
                case 2:
                    (0, $fMUO1.default).override(this.constraints[t1], e1);
                    break;
                case 3:
                    this.constraints[t1][e1] = n1;
            }
            return this;
        }
        return t1 ? this.constraints[t1] : this;
    },
    /**
	**	Returns a compact version of the model properties. That is, a map only with validated properties that are
	**	also present in the default data map. Returns null if the object is not compliant. If the "safe" parameter
	**	is set one last property named "class" will be attached, this specifies the original classPath of the object.
	**
	**	>> object flatten ([bool safe=false]);
	*/ flatten: function(t1, e1) {
        if (t1) {
            var n1 = this.flatten(!1, !0);
            return null == n1 ? null : (n1.class = this.classPath, n1);
        }
        if (!this.constraints && !this.defaults) return this.data;
        if (!this.isCompliant()) return {};
        var r1 = this.constraints, i1 = this.defaults ? "function" == (0, $fMUO1.default).typeOf(this.defaults) ? this.defaults() : this.defaults : this.constraints, n1 = {};
        for(var s1 in this.data)if (s1 in i1) {
            if (r1 && r1[s1]) {
                var a1 = r1[s1];
                if (a1.model) {
                    n1[s1] = this.data[s1] ? this.data[s1].flatten(e1) : null;
                    continue;
                }
                if (a1.arrayof) {
                    n1[s1] = [];
                    for(var l1 = 0; l1 < this.data[s1].length; l1++)n1[s1][l1] = this.data[s1][l1] ? this.data[s1][l1].flatten(e1) : null;
                    continue;
                }
                if (a1.cls) {
                    n1[s1] = this.data[s1] ? this.data[s1].flatten() : null;
                    continue;
                }
            }
            n1[s1] = this.data[s1];
        }
        return n1;
    },
    /**
	**	Removes a property or a list of properties.
	**
	**	>> void remove (string name, [bool nsilent=true]);
	**	>> void remove (array name, [bool nsilent=true]);
	*/ remove: function(t1, e1) {
        if ("array" == (0, $fMUO1.default).typeOf(t1)) {
            for(var n1 = 0; n1 < t1.length; n1++)delete this.data[t1[n1]];
            !1 === e1 || this._silent || this.dispatchEvent("propertyRemoved", {
                fields: t1
            });
        } else delete this.data[t1], !1 === e1 || this._silent || this.dispatchEvent("propertyRemoved", {
            fields: [
                t1
            ]
        });
    },
    /**
	**	Triggers data change events for one or more properties. Ensure that silent mode is not enabled or else
	**	this method will have no effect. If no parameters are provided a full update will be triggered on all of
	**	the model properties.
	**
	**	>> Model update (array fields);
	**	>> Model update (string name);
	**	>> Model update (bool forceModelChanged);
	**	>> Model update ();
	*/ update: function(t1, e1) {
        if (this._silent) return this;
        if (0 == this._level && (this.changedList = []), this._level++, t1 && "string" == (0, $fMUO1.default).typeOf(t1)) this._propertyEvent(t1, this.data[t1], this.data[t1], e1);
        else if (t1 && "array" == (0, $fMUO1.default).typeOf(t1)) for (var n1 of t1)this._propertyEvent(n1, this.data[n1], this.data[n1], e1);
        else for(var n1 in this.data)this._propertyEvent(n1, this.data[n1], this.data[n1], e1);
        return --this._level || this._silent || 0 == this.changedList.length && !0 !== t1 || this.dispatchEvent("modelChanged", {
            fields: this.changedList
        }), this;
    },
    /**
	**	Validates one or mode model properties using the defined constraints. If no parameters are provided all of
	**	the properties in the model will be validated.
	**
	**	>> Model validate (array fields);
	**	>> Model validate (string name);
	**	>> Model validate ();
	*/ validate: function(t1) {
        if (!this.constraints) return this;
        if (t1 && "string" == (0, $fMUO1.default).typeOf(t1)) this._set(t1, this.data[t1]);
        else for(var e1 in this.data)t1 && -1 == (0, $fMUO1.default).indexOf(t1, e1) || this._set(e1, this.data[e1]);
        return this;
    },
    /**
	**	Validates all the properties in the model and returns a boolean indicating if all of them comply with the
	**	constraints defined in the model.
	**
	**	>> bool isCompliant ();
	*/ isCompliant: function() {
        if (!this.constraints) return !0;
        try {
            for(var t1 in this.data)this._validate(t1, this.data[t1]);
            return !0;
        } catch (t1) {}
        return !1;
    },
    /**
	**	Registers an event handler for changes in a specific property of the model.
	**
	**	>> void observe (string property, function handler, object context);
	*/ observe: function(t1, e1, n1) {
        this.addEventListener("propertyChanged." + t1, e1, n1);
    },
    /**
	**	Unregisters an event handler from changes in a specific property of the model.
	**
	**	>> void unobserve (string property, function handler, object context);
	*/ unobserve: function(t1, e1, n1) {
        this.removeEventListener("propertyChanged." + t1, e1, n1);
    },
    /**
	**	Adds a propertyChanged event handler for the given property. The property name can have an event namespace prepended and separated by colon.
	**
	**	>> void watch (string property, function handler);
	*/ watch: function(t1, e1) {
        1 == (t1 = t1.split(":")).length && (t1[1] = t1[0], t1[0] = "watch"), this.addEventListener(t1[0] + ":propertyChanged." + t1[1], function(t1, n1) {
            e1(n1.value, n1, t1);
        });
    },
    /**
	**	Removes propertyChanged handlers related to the specified property. The property name can have an event namespace prepended and separated by colon.
	**
	**	>> void unwatch (string property);
	*/ unwatch: function(t1) {
        1 == (t1 = t1.split(":")).length && (t1[1] = t1[0], t1[0] = "watch"), this.removeEventListener(t1[0] + ":propertyChanged." + t1[1]);
    },
    /**
	 * Triggers a field change event. Even if the value of the field is the same as the model's, the event will still be triggered.
	 */ trigger: function(t1, e1 = null) {
        return this.set(t1, e1, !0);
    },
    /**
	**	Serializes the model into a string.
	**
	**	string toString ();
	*/ toString: function() {
        return (0, $fMUO1.default).serialize(this.get(!0));
    }
});
$4dfa0622e14576ea$var$_Model.Constraints = $4VREF.default;
var $4dfa0622e14576ea$export$2e2bcd8739ae039 = $4dfa0622e14576ea$var$_Model, $fMUO1 = parcelRequire("fMUO1"), /**
**	Generic list for models.
*/ $0890bed8a163f087$export$2e2bcd8739ae039 = $4dfa0622e14576ea$export$2e2bcd8739ae039.extend({
    className: "ModelList",
    /**
	**	Class of the items in the list, can be overriden by child classes to impose a more strict constraint.
	*/ itemt: $4dfa0622e14576ea$export$2e2bcd8739ae039,
    /**
	**	Mirror of data.contents
	*/ contents: null,
    /**
	**	IDs of every item in the contents.
	*/ itemId: null,
    /**
	**	Autoincremental ID for the next item to be added.
	*/ nextId: null,
    /**
	**	Default properties of the model.
	*/ defaults: {
        contents: null
    },
    /**
	**	Constraints of the model to ensure integrity.
	*/ constraints: {
        contents: {
            type: "array",
            arrayof: "@itemt"
        }
    },
    /**
	**	Constructor.
	*/ __ctor: function(...t1) {
        this.itemId = [], this.nextId = 0, this._super.Model.__ctor(...t1);
    },
    /**
	**	Initialization epilogue. Called after initialization and after model properties are set.
	*/ ready: function() {
        this._eventGroup = "ModelList_" + Date.now() + ":modelChanged", this.contents = this.data.contents;
    },
    /**
	**	Connects the event handlers to the item.
	**
	**	>> Model _bind (int iid, Model item);
	*/ _bind: function(t1, e1) {
        return e1 && e1.addEventListener && e1.addEventListener(this._eventGroup, this._onItemEvent, this, t1), e1;
    },
    /**
	**	Disconnects the event handlers from the item.
	**
	**	>> Model _unbind (Model item);
	*/ _unbind: function(t1) {
        return t1 && t1.removeEventListener && t1.removeEventListener(this._eventGroup), t1;
    },
    /**
	**	Handler for item events.
	**
	**	>> Model _onItemEvent (Event evt, object args, int iid);
	*/ _onItemEvent: function(t1, e1, n1) {
        this.prepareEvent("itemChanged", {
            id: n1,
            item: t1.source
        }).from(t1).enqueue(this.prepareEvent("modelChanged", {
            fields: [
                "contents"
            ]
        })).resume();
    },
    /**
	**	Returns the number of items in the list.
	**
	**	>> int length ();
	*/ length: function() {
        return this.data.contents.length;
    },
    /**
	**	Clears the contents of the list.
	**
	**	>> void clear ();
	*/ clear: function() {
        for(var t1 = 0; t1 < this.data.contents; t1++)this._unbind(this.data.contents[t1]);
        return this.itemId = [], this.nextId = 0, this.contents = this.data.contents = [], this.prepareEvent("itemsCleared").enqueue(this.prepareEvent("modelChanged", {
            fields: [
                "contents"
            ]
        })).resume(), this;
    },
    /**
	**	Sets the contents of the list with the specified array. All items will be ensured to be of the same model
	**	type as the one specified in the list.
	**
	**	>> ModelList setData (array data);
	*/ setData: function(t1) {
        if (this.clear(), !t1) return this;
        for(var e1 = 0; e1 < t1.length; e1++){
            var n1 = (0, $fMUO1.default).ensureTypeOf(this.itemt, t1[e1]);
            this.itemId.push(this.nextId++), this.data.contents.push(n1), this._bind(this.nextId - 1, n1);
        }
        return this.prepareEvent("itemsChanged").enqueue(this.prepareEvent("modelChanged", {
            fields: [
                "contents"
            ]
        })).resume(), this;
    },
    /**
	**	Returns the raw array contents of the list.
	**
	**	>> array getData ();
	*/ getData: function() {
        return this.data.contents;
    },
    /**
	**	Returns the item at the specified index or null if the index is out of bounds.
	**
	**	>> Model getAt (int index);
	*/ getAt: function(t1) {
        return t1 < 0 || t1 >= this.data.contents.length ? null : this.data.contents[t1];
    },
    /**
	**	Removes and returns the item at the specified index. Returns null if the index is out of bounds.
	**
	**	>> Model removeAt (int index);
	*/ removeAt: function(t1) {
        if (t1 < 0 || t1 >= this.data.contents.length) return null;
        let e1 = this.data.contents.splice(t1, 1)[0], n1 = this.itemId.splice(t1, 1)[0];
        return this._unbind(e1), this.prepareEvent("itemRemoved", {
            id: n1,
            item: e1
        }).enqueue(this.prepareEvent("modelChanged", {
            fields: [
                "contents"
            ]
        })).resume(), e1;
    },
    /**
	**	Sets the item at the specified index. Returns false if the index is out of bounds, true otherwise. The
	**	item will be ensured to be of the model defined in the list.
	**
	**	>> bool setAt (int index, Model item);
	*/ setAt: function(t1, e1) {
        return !(t1 < 0) && !(t1 >= this.data.contents.length) && (e1 = (0, $fMUO1.default).ensureTypeOf(this.itemt, e1), this._unbind(this.data.contents[t1]), this.data.contents[t1] = e1, this._bind(this.itemId[t1], e1), this.prepareEvent("itemChanged", {
            id: this.itemId[t1],
            item: e1
        }).enqueue(this.prepareEvent("modelChanged", {
            fields: [
                "contents"
            ]
        })).resume(), !0);
    },
    /**
	**	Notifies a change in the item at the specified index. Returns false if the index is out of bounds.
	**
	**	>> bool updateAt (int index);
	*/ updateAt: function(t1) {
        return !(t1 < 0) && !(t1 >= this.data.contents.length) && (this.prepareEvent("itemChanged", {
            id: this.itemId[t1],
            item: this.data.contents[t1]
        }).enqueue(this.prepareEvent("modelChanged", {
            fields: [
                "contents"
            ]
        })).resume(), !0);
    },
    /**
	**	Adds an item to the bottom of the list. Returns null if the item is not an object or a model. The item
	**	will be ensured to be of the model specified in the list.
	**
	**	>> Model push (Model item);
	*/ push: function(t1) {
        return t1 && "object" != (0, $fMUO1.default).typeOf(t1) ? null : (t1 = (0, $fMUO1.default).ensureTypeOf(this.itemt, t1), this.itemId.push(this.nextId++), this.data.contents.push(t1), this._bind(this.nextId - 1, t1), this.prepareEvent("itemAdded", {
            id: this.itemId[this.itemId.length - 1],
            item: t1,
            position: "tail"
        }).enqueue(this.prepareEvent("modelChanged", {
            fields: [
                "contents"
            ]
        })).resume(), t1);
    },
    /**
	**	Removes and returns an item from the bottom of the list.
	**
	**	>> Model pop ();
	*/ pop: function() {
        return this._unbind(this.data.contents.pop());
    },
    /**
	**	Adds an item to the top of the list. Returns null if the item is not an object or a model. The item
	**	will be ensured to be of the model specified in the list.
	**
	**	>> Model unshift (Model item);
	*/ unshift: function(t1) {
        return t1 && "object" != (0, $fMUO1.default).typeOf(t1) ? null : (t1 = (0, $fMUO1.default).ensureTypeOf(this.itemt, t1), this.itemId.unshift(this.nextId++), this.data.contents.unshift(t1), this._bind(this.nextId - 1, t1), this.prepareEvent("itemAdded", {
            id: this.itemId[0],
            item: t1,
            position: "head"
        }).enqueue(this.prepareEvent("modelChanged", {
            fields: [
                "contents"
            ]
        })).resume(), t1);
    },
    /**
	**	Removes and returns an item from the top of the list.
	**
	**	>> Model shift ();
	*/ shift: function() {
        return this._unbind(this.data.contents.shift());
    },
    /**
	**	Searches for an item matching the specified partial definition and returns its index. Returns -1 if the
	**	item was not found. If retObject is set to true the object will be returned instead of its index and null
	**	will be returned when the item is not found.
	**
	**	int|object find (object data, bool retObject=false);
	*/ find: function(t1, e1 = !1) {
        for(var n1 = this.data.contents, r1 = 0; r1 < n1.length; r1++)if ((0, $fMUO1.default).partialCompare(n1[r1].data, t1)) return e1 ? n1[r1] : r1;
        return e1 ? null : -1;
    }
}), $fMUO1 = parcelRequire("fMUO1"); /**
 * The utility functions in this module allow to create a very strict serialization/deserialization schema
 * to ensure that all values are of the specific type when stored in string format.
 */ 
let $2710795e2347ba2a$var$Schema = {
    Type: function(t1) {
        let e1 = {
            flatten: function(t1, e1) {
                return t1;
            },
            unflatten: function(t1, e1) {
                return t1;
            }
        };
        return t1 ? (0, $fMUO1.default).override(e1, t1) : e1;
    },
    String: function() {
        return $2710795e2347ba2a$var$Schema.Type({
            flatten: function(t1, e1) {
                return null != t1 ? t1.toString() : null;
            },
            unflatten: function(t1, e1) {
                return null != t1 ? t1.toString() : null;
            }
        });
    },
    Integer: function() {
        return $2710795e2347ba2a$var$Schema.Type({
            flatten: function(t1, e1) {
                return ~~t1;
            },
            unflatten: function(t1, e1) {
                return ~~t1;
            }
        });
    },
    Number: function(t1) {
        return $2710795e2347ba2a$var$Schema.Type({
            _precision: t1,
            _round: !1,
            precision: function(t1) {
                return this._precision = ~~t1, this;
            },
            flatten: function(t1, e1) {
                return t1 = parseFloat(t1), this._precision > 0 && (t1 = ~~(t1 * Math.pow(10, this._precision)) / Math.pow(10, this._precision)), t1;
            },
            unflatten: function(t1, e1) {
                return parseFloat(t1);
            }
        });
    },
    Bool: function(t1) {
        return $2710795e2347ba2a$var$Schema.Type({
            _compact: t1,
            compact: function(t1) {
                return this._compact = t1, this;
            },
            flatten: function(t1, e1) {
                return t1 = ~~t1, this._compact ? t1 > 0 ? 1 : 0 : t1 > 0;
            },
            unflatten: function(t1, e1) {
                return !!~~t1;
            }
        });
    },
    SharedString: function() {
        return $2710795e2347ba2a$var$Schema.Type({
            flatten: function(t1, e1) {
                return null == t1 ? 0 : (t1 = t1.toString(), "strings" in e1 || (e1.index = {}, e1.strings = []), t1 in e1.index || (e1.strings.push(t1), e1.index[t1] = e1.strings.length), e1.index[t1]);
            },
            unflatten: function(t1, e1) {
                return null == t1 || 0 == t1 ? null : e1.strings[~~t1 - 1];
            }
        });
    },
    Array: function(t1) {
        return $2710795e2347ba2a$var$Schema.Type({
            itemType: t1,
            _debug: !1,
            _filter: null,
            debug: function(t1) {
                return this._debug = t1, this;
            },
            of: function(t1) {
                return this.itemType = t1, this;
            },
            filter: function(t1) {
                return this._filter = t1, this;
            },
            flatten: function(t1, e1) {
                if (null == t1) return null;
                let n1 = [];
                for(let r1 = 0; r1 < t1.length; r1++)(!this._filter || this._filter(t1[r1], r1)) && n1.push(this.itemType.flatten(t1[r1], e1));
                return n1;
            },
            unflatten: async function(t1, e1) {
                if (null == t1) return null;
                let n1 = [];
                for(let r1 = 0; r1 < t1.length; r1++)n1.push(await this.itemType.unflatten(t1[r1], e1));
                return n1;
            }
        });
    },
    Object: function() {
        return $2710795e2347ba2a$var$Schema.Type({
            properties: [],
            property: function(t1, e1, n1 = null) {
                return this.properties.push({
                    name: t1,
                    source: t1,
                    type: e1,
                    defvalue: n1
                }), this;
            },
            propertyAlias: function(t1, e1, n1, r1 = null) {
                return this.properties.push({
                    name: t1,
                    source: e1,
                    type: n1,
                    defvalue: r1
                }), this;
            },
            flatten: function(t1, e1) {
                let n1;
                if (null == t1) return null;
                if (!0 === e1.symbolic) {
                    n1 = {};
                    for(let r1 = 0; r1 < this.properties.length; r1++)this.properties[r1].source in t1 ? n1[this.properties[r1].name] = this.properties[r1].type.flatten(t1[this.properties[r1].source], e1) : n1[this.properties[r1].name] = this.properties[r1].type.flatten(this.properties[r1].defvalue, e1);
                } else {
                    n1 = [];
                    for(let r1 = 0; r1 < this.properties.length; r1++)this.properties[r1].source in t1 ? n1.push(this.properties[r1].type.flatten(t1[this.properties[r1].source], e1)) : n1.push(this.properties[r1].type.flatten(this.properties[r1].defvalue, e1));
                }
                return n1;
            },
            unflatten: async function(t1, e1) {
                if (null == t1) return null;
                let n1 = {};
                if (!0 === e1.symbolic) for(let r1 = 0; r1 < this.properties.length; r1++)n1[this.properties[r1].name] = await this.properties[r1].type.unflatten(this.properties[r1].name in t1 ? t1[this.properties[r1].name] : this.properties[r1].defvalue, e1);
                else for(let r1 = 0; r1 < this.properties.length; r1++)n1[this.properties[r1].name] = await this.properties[r1].type.unflatten(r1 in t1 ? t1[r1] : this.properties[r1].defvalue, e1);
                return n1;
            }
        });
    },
    Class: function(t1) {
        return $2710795e2347ba2a$var$Schema.Type({
            _constructor: t1,
            constructor: function(t1) {
                return this._constructor = t1, this;
            },
            flatten: function(t1, e1) {
                return null == t1 ? null : t1.flatten(e1);
            },
            unflatten: async function(t1, e1) {
                return null == t1 ? null : await new this._constructor().unflatten(t1, e1);
            }
        });
    },
    /*
	**	Used when you want to specify just a single property.
	*/ Property: function(t1, e1) {
        return $2710795e2347ba2a$var$Schema.Type({
            property: t1,
            type: e1,
            name: function(t1) {
                return this.property = t1, this;
            },
            is: function(t1) {
                return this.type = t1, this;
            },
            flatten: function(t1, e1) {
                let n1;
                return null == t1 ? null : (!0 === e1.symbolic ? (n1 = {})[this.property] = this.type.flatten(t1[this.property], e1) : n1 = this.type.flatten(t1[this.property], e1), n1);
            },
            unflatten: async function(t1, e1) {
                if (null == t1) return null;
                let n1 = {};
                return !0 === e1.symbolic ? n1[this.property] = await this.type.unflatten(t1[this.property], e1) : n1[this.property] = await this.type.unflatten(t1, e1), n1;
            }
        });
    },
    Map: function() {
        return $2710795e2347ba2a$var$Schema.Type({
            flatten: function(t1, e1) {
                if (null == t1) return null;
                if (!0 === e1.symbolic) return t1;
                let n1 = [];
                for(let e1 in t1)n1.push(e1), n1.push(t1[e1]);
                return n1;
            },
            unflatten: function(t1, e1) {
                if (null == t1) return null;
                if (!0 === e1.symbolic) return t1;
                let n1 = {};
                for(let e1 = 0; e1 < t1.length; e1 += 2)n1[t1[e1]] = t1[e1 + 1];
                return n1;
            }
        });
    },
    Selector: function() {
        return $2710795e2347ba2a$var$Schema.Type({
            conditions: [],
            value: null,
            when: function(t1, e1) {
                return this.conditions.push([
                    (e1)=>e1 === t1,
                    e1
                ]), this;
            },
            with: function(t1) {
                return this.value = t1, this;
            },
            flatten: function(t1, e1) {
                if (null == t1) return null;
                for (let n1 of this.conditions)if (!0 === n1[0](this.value)) return n1[1].flatten(t1, e1);
                return null;
            },
            unflatten: async function(t1, e1) {
                if (null == t1) return null;
                for (let n1 of this.conditions)if (!0 === n1[0](this.value)) return await n1[1].unflatten(t1, e1);
                return null;
            }
        });
    }
};
var $2710795e2347ba2a$export$2e2bcd8739ae039 = $2710795e2347ba2a$var$Schema, /**
**	Class used to add flattening and unflattening capabilities to any object. A "flat" object is an object composed
**	only of native types, that is: `null,` `boolean`, `integer`, `number`, `array` or `object`.
*/ $32651d5f38a8a64c$export$2e2bcd8739ae039 = $2394d727dfd6a212$export$2e2bcd8739ae039.extend({
    className: "Flattenable",
    /**
	**	Type schema used to flatten/unflatten the contents of this class. See Schema class for more information.
	*/ typeSchema: null,
    /**
	**	Returns the flattened contents of the object.
	*/ flatten: function(t1) {
        return this.typeSchema.flatten(this, t1);
    },
    /**
	**	Unflattens the given object and overrides the local contents.
	*/ unflatten: async function(t1, e1) {
        return Object.assign(this, await this.typeSchema.unflatten(t1, e1)), await this.onUnflattened(), this;
    },
    /*
	**	Executed when the unflatten() method is called on the object.
	*/ onUnflattened: async function() {}
}), $fMUO1 = parcelRequire("fMUO1"), /**
**	Flattenable collection class, used to store items and manipulate them. The items should also be flattenable.
*/ $2bcce06113365814$export$2e2bcd8739ae039 = $32651d5f38a8a64c$export$2e2bcd8739ae039.extend({
    className: "Collection",
    /**
	**	Describes the type schema of the underlying items.
	*/ itemTypeSchema: null,
    /**
	**	Array of items.
	*/ items: null,
    /* Array */ /**
	**	Constructs the collection.
	*/ __ctor: function(t1) {
        t1 || (t1 = this.itemTypeSchema), t1 && (this.typeSchema = $2710795e2347ba2a$export$2e2bcd8739ae039.Property("items").is($2710795e2347ba2a$export$2e2bcd8739ae039.Array().of(t1))), this.reset();
    },
    /*
	**	Executed after the collection has been unflattened, re-adds the items to ensure onItemAdded() is called.
	*/ onUnflattened: function() {
        let t1 = this.items;
        for (let e1 of (this.reset(), t1))this.add(e1);
    },
    /**
	 * 	Executed when the value in `items` is changed.
	 */ itemsReferenceChanged: function() {},
    /*
	**	Resets the collection to empty. Note that onItemRemoved will not be called.
	*/ reset: function() {
        return this.items = [], this.itemsReferenceChanged(), this;
    },
    /*
	**	Clears the contents of the collection (removes each item manually, onItemRemoved will be called).
	*/ clear: function() {
        var t1 = this.items;
        this.reset();
        for(var e1 = 0; e1 < t1.length; e1++)this.onItemRemoved(t1[e1], 0);
        return this;
    },
    /*
	**	Sorts the collection. A comparison function should be provided, or the name of a property to sort by.
	**
	**	Object sort (fn: Function)
	**	Object sort (prop: string, [desc:bool=false])
	*/ sort: function(t1, e1) {
        return "function" != typeof t1 ? this.items.sort(function(n1, r1) {
            return (n1[t1] <= r1[t1] ? -1 : 1) * (!0 === e1 ? -1 : 1);
        }) : this.items.sort(t1), this;
    },
    /*
	**	Searches for an item with the specified fields and returns it. The "inc" object is the "inclusive" map, meaning all fields must match
	**	and the optional "exc" is the exclusive map, meaning not even one field should match.
	**
	**	Object findItem (inc: Object, exc: Object);
	*/ findItem: function(t1, e1) {
        if (!this.items) return null;
        for(var n1 = 0; n1 < this.items.length; n1++)if (!(e1 && (0, $fMUO1.default).partialCompare(this.items[n1], e1)) && (0, $fMUO1.default).partialCompare(this.items[n1], t1)) return this.items[n1];
        return null;
    },
    /*
	**	Returns the container array.
	*/ getItems: function() {
        return this.items;
    },
    /*
	**	Returns the number of items in the collection.
	*/ length: function() {
        return this.items.length;
    },
    /*
	**	Returns true if the collection is empty.
	*/ isEmpty: function() {
        return !this.items.length;
    },
    /*
	**	Returns the index of the specified item, or -1 if not found.
	*/ indexOf: function(t1) {
        return this.items.indexOf(t1);
    },
    /*
	**	Returns the item at the specified index, or null if not found. When `relative` is true, negative offsets are allowed such that -1 refers to the last item.
	*/ getAt: function(t1, e1 = !1) {
        return t1 < 0 && !0 == e1 && (t1 += this.items.length), t1 >= 0 && t1 < this.items.length ? this.items[t1] : null;
    },
    /*
	**	Returns the first item in the collection.
	*/ first: function() {
        return this.getAt(0);
    },
    /*
	**	Returns the last item in the collection.
	*/ last: function() {
        return this.getAt(-1, !0);
    },
    /*
	**	Adds an item at the specified index, effectively moving the remaining items to the right.
	*/ addAt: function(t1, e1) {
        if (!e1 || !this.onBeforeItemAdded(e1)) return this;
        if (t1 < 0 && (t1 = 0), t1 > this.items.length && (t1 = this.items.length), 0 == t1) this.items.unshift(e1);
        else if (t1 == this.items.length) this.items.push(e1);
        else {
            var n1 = this.items.splice(0, t1);
            n1.push(e1), this.items = n1.concat(this.items), this.itemsReferenceChanged();
        }
        return this.onItemAdded(e1), this;
    },
    /*
	**	Adds an item to the start of the collection, onBeforeItemAdded and onItemAdded will be triggered.
	*/ unshift: function(t1) {
        return this.addAt(0, t1);
    },
    /*
	**	Adds an item to the end of the collection, onBeforeItemAdded and onItemAdded will be triggered.
	*/ push: function(t1) {
        return this.addAt(this.items.length, t1);
    },
    /*
	**	Adds an item to the end of the collection, onBeforeItemAdded and onItemAdded will be triggered.
	*/ add: function(t1) {
        return this.push(t1);
    },
    /*
	**	Removes the item at the specified index. When `relative` is true, negative offsets are allowed such that -1 refers to the last item.
	*/ removeAt: function(t1, e1 = !1) {
        if (t1 < 0 && !0 == e1 && (t1 += this.items.length), t1 < 0 || t1 >= this.items.length) return null;
        var n1 = this.items[t1];
        return this.items.splice(t1, 1), this.onItemRemoved(n1, t1), n1;
    },
    /*
	**	Removes an item from the end of the collection.
	*/ pop: function(t1) {
        return this.removeAt(-1, !0);
    },
    /*
	**	Removes an item from the start of the collection.
	*/ shift: function(t1) {
        return this.removeAt(0);
    },
    /*
	**	Removes the specified item from the collection.
	*/ remove: function(t1) {
        return this.removeAt(this.indexOf(t1));
    },
    /*
	**	Runs the specified callback for each of the items in the collection, if false is returned by the callback this function
	**	will exit immediately. Parameters to the callback are: (item, index, collection).
	*/ forEach: function(t1) {
        if (this.isEmpty()) return this;
        for(var e1 = 0; e1 < this.items.length && !1 !== t1(this.items[e1], e1, this); e1++);
        return this;
    },
    /*
	**	Executes a method call with the specified parameters on each of the items in the collection, if false is returned by the
	**	item's method this function will exit immediately.
	*/ forEachCall: function(t1, ...e1) {
        if (this.isEmpty()) return this;
        for(var n1 = 0; n1 < this.items.length && !1 !== this.items[n1][t1](...e1); n1++);
        return this;
    },
    /*
	**	Exactly the same as forEach but in reverse order.
	*/ forEachRev: function(t1) {
        if (this.isEmpty()) return this;
        for(var e1 = this.items.length - 1; e1 >= 0 && !1 !== t1(this.items[e1], e1, this); e1--);
        return this;
    },
    /*
	**	Exactly the same as forEachCall but in reverse order.
	*/ forEachRevCall: function(t1, ...e1) {
        if (this.isEmpty()) return this;
        for(var n1 = this.items.length - 1; n1 >= 0 && !1 !== this.items[n1][t1](...e1); n1--);
        return this;
    },
    /*
	**	Handler for the beforeItemAdded event. If returns false the item will not be added.
	*/ onBeforeItemAdded: function(t1) {
        return !0;
    },
    /*
	**	Handler for the itemAdded event.
	*/ onItemAdded: function(t1) {},
    /*
	**	Handler for the itemRemoved event.
	*/ onItemRemoved: function(t1) {}
}), $fMUO1 = parcelRequire("fMUO1"); /**
**	Templating module. The template formats available are shown below, note that the sym-open and sym-close symbols are by
**	default the square brackets, however those can be modified since are just parameters.
**
**	HTML Escaped Output:			[data.value]					Escapes HTML characters from the output.
**	Raw Output:						[!data.value]					Does not escape HTML characters from the output (used to output direct HTML).
**	Double-Quoted Escaped Output:	[data.value]					Escapes HTML characters and surrounds with double quotes.
**	Immediate Reparse:				[<....] [@....] "..." '...'		Reparses the contents as if parseTemplate() was called again.
**	Immediate Output:				[:...]							Takes the contents and outputs exactly as-is without format and optionally surrounded by the
**																	sym-open and sym-close symbols when the first character is not '<', sym_open or space.
**	Filtered Output:				[functionName ... <expr> ...]	Runs a function call, 'expr' can be any of the allowed formats shown here (nested if desired),
**																	functionName should map to one of the available expression functions registered in the
**																	Rinn.Template.functions map, each of which have their own parameters.
*/ 
let $d261ccdafdfe12a9$var$Template = {
    strict: !1,
    /**
	**	Parses a template and returns the compiled 'parts' structure to be used by the 'expand' method.
	**
	**	>> array parseTemplate (string template, char sym_open, char sym_close, bool is_tpl=false);
	*/ parseTemplate: function(t1, e1, n1, r1 = !1, i1 = 1) {
        let s1 = "string", a1 = null, l1 = 0, o1 = 0, u1 = "", f1 = [], h1 = f1, c1 = !1;
        function p1(t1) {
            if ("object" == typeof t1) {
                if (t1 instanceof Array) for(let e1 = 0; e1 < t1.length; e1++)p1(t1[e1]);
                else t1.data = p1(t1.data);
                return t1;
            }
            for(let e1 = 0; e1 < t1.length; e1++)if ("\\" == t1[e1]) {
                let n1 = t1[e1 + 1];
                switch(n1){
                    case "n":
                        n1 = "\n";
                        break;
                    case "r":
                        n1 = "\r";
                        break;
                    case "f":
                        n1 = "\f";
                        break;
                    case "v":
                        n1 = "\v";
                        break;
                    case "t":
                        n1 = "	";
                        break;
                    case "s":
                        n1 = "s";
                        break;
                    case '"':
                        n1 = '"';
                        break;
                    case "'":
                        n1 = "'";
                }
                t1 = t1.substr(0, e1) + n1 + t1.substr(e1 + 2);
            }
            return t1;
        }
        function d1(t1, r1) {
            if ("template" == t1 ? r1 = $d261ccdafdfe12a9$var$Template.parseTemplate(r1, e1, n1, !0, 0) : "parse" == t1 ? (r1 = $d261ccdafdfe12a9$var$Template.parseTemplate(r1, e1, n1, !1, 0), t1 = "base-string", "array" == (0, $fMUO1.default).typeOf(r1) && (t1 = r1[0].type, r1 = r1[0].data)) : "parse-trim-merge" == t1 ? r1 = $d261ccdafdfe12a9$var$Template.parseTemplate(r1.trim().split("\n").map((t1)=>t1.trim()).join("\n"), e1, n1, !1, 0) : "parse-merge" == t1 ? r1 = $d261ccdafdfe12a9$var$Template.parseTemplate(r1, e1, n1, !1, 0) : "parse-merge-alt" == t1 && (r1 = $d261ccdafdfe12a9$var$Template.parseTemplate(r1, "{", "}", !1, 0)), "parse-merge" == t1 || "parse-merge-alt" == t1 || "parse-trim-merge" == t1) for(let t1 = 0; t1 < r1.length; t1++)f1.push(r1[t1]);
            else f1.push({
                type: t1,
                data: r1
            });
            c1 && (h1.push(f1 = []), c1 = !1);
        }
        !0 === r1 && (t1 = t1.trim(), s1 = "identifier", l1 = 10, h1.push(f1 = [])), t1 += "\x00";
        for(let r1 = 0; r1 < t1.length; r1++){
            if ("\\" == t1[r1]) {
                u1 += "\\" + t1[++r1];
                continue;
            }
            switch(l1){
                case 0:
                    "\x00" == t1[r1] ? a1 = "string" : t1[r1] == e1 && "<" == t1[r1 + 1] ? (l1 = 1, o1 = 1, a1 = "string", s1 = "parse-merge") : t1[r1] == e1 && "@" == t1[r1 + 1] ? (l1 = 1, o1 = 1, a1 = "string", s1 = "parse-trim-merge", r1++) : t1[r1] == e1 && ":" == t1[r1 + 1] ? (l1 = 12, o1 = 1, a1 = "string", s1 = "string", r1++) : t1[r1] == e1 ? (l1 = 1, o1 = 1, a1 = "string", s1 = "template") : u1 += t1[r1];
                    break;
                case 1:
                    if ("\x00" == t1[r1]) throw Error("Parse error: Unexpected end of template");
                    if (t1[r1] == n1) {
                        if (--o1 < 0) throw Error("Parse error: Unmatched " + n1);
                        if (0 == o1) {
                            l1 = 0, a1 = s1;
                            break;
                        }
                    } else t1[r1] == e1 && o1++;
                    u1 += t1[r1];
                    break;
                case 10:
                    if ("\x00" == t1[r1]) {
                        a1 = s1;
                        break;
                    }
                    if ("." == t1[r1]) {
                        d1(s1, u1), d1("access", "."), s1 = "identifier", u1 = "";
                        break;
                    }
                    if (null != t1[r1].match(/[\t\n\r\f\v ]/)) {
                        for(a1 = s1, s1 = "identifier", c1 = !0; null != t1[r1].match(/[\t\n\r\f\v ]/);)r1++;
                        r1--;
                        break;
                    }
                    if (t1[r1] == e1 && "<" == t1[r1 + 1]) {
                        u1 && (a1 = s1), l1 = 11, o1 = 1, s1 = "parse-merge";
                        break;
                    } else if (t1[r1] == e1 && "@" == t1[r1 + 1]) {
                        u1 && (a1 = s1), l1 = 11, o1 = 1, s1 = "parse-trim-merge", r1++;
                        break;
                    } else if ('"' == t1[r1]) {
                        u1 && (a1 = s1), l1 = 14, o1 = 1, s1 = "parse-merge";
                        break;
                    } else if ("'" == t1[r1]) {
                        u1 && (a1 = s1), l1 = 15, o1 = 1, s1 = "parse-merge";
                        break;
                    } else if ("`" == t1[r1]) {
                        u1 && (a1 = s1), l1 = 16, o1 = 1, s1 = "parse-merge-alt";
                        break;
                    } else if (t1[r1] == e1 && ":" == t1[r1 + 1]) {
                        u1 && (a1 = s1), l1 = 13, o1 = 1, s1 = "string", r1++;
                        break;
                    } else if (t1[r1] == e1) {
                        u1 && d1(s1, u1), l1 = 11, o1 = 1, s1 = "parse", u1 = "" + t1[r1];
                        break;
                    }
                    "identifier" != s1 && (d1(s1, u1), u1 = "", s1 = "identifier"), u1 += t1[r1];
                    break;
                case 11:
                    if ("\x00" == t1[r1]) throw Error("Parse error: Unexpected end of template");
                    if (t1[r1] == n1) {
                        if (--o1 < 0) throw Error("Parse error: Unmatched " + n1);
                        if (0 == o1 && (l1 = 10, "parse-merge" == s1 || "parse-merge-alt" == s1 || "parse-trim-merge" == s1)) break;
                    } else t1[r1] == e1 && o1++;
                    u1 += t1[r1];
                    break;
                case 12:
                    if ("\x00" == t1[r1]) throw Error("Parse error: Unexpected end of template");
                    if (t1[r1] == n1) {
                        if (--o1 < 0) throw Error("Parse error: Unmatched " + n1);
                        if (0 == o1) {
                            0 == u1.length || "<" == u1[0] || "[" == u1[0] || " " == u1[0] || (u1 = e1 + u1 + n1), l1 = 0, a1 = s1;
                            break;
                        }
                    } else t1[r1] == e1 && o1++;
                    u1 += t1[r1];
                    break;
                case 13:
                    if ("\x00" == t1[r1]) throw Error("Parse error: Unexpected end of template");
                    if (t1[r1] == n1) {
                        if (--o1 < 0) throw Error("Parse error: Unmatched " + n1);
                        if (0 == o1) {
                            "<" == u1[0] || "[" == u1[0] || " " == u1[0] || (u1 = e1 + u1 + n1), l1 = 10;
                            break;
                        }
                    } else t1[r1] == e1 && o1++;
                    u1 += t1[r1];
                    break;
                case 14:
                    if ("\x00" == t1[r1]) throw Error("Parse error: Unexpected end of template");
                    if ('"' == t1[r1]) {
                        if (--o1 < 0) throw Error('Parse error: Unmatched "');
                        if (0 == o1 && (l1 = 10, "parse-merge" == s1 || "parse-merge-alt" == s1 || "parse-trim-merge" == s1)) break;
                    }
                    u1 += t1[r1];
                    break;
                case 15:
                    if ("\x00" == t1[r1]) throw Error("Parse error: Unexpected end of template");
                    if ("'" == t1[r1]) {
                        if (--o1 < 0) throw Error("Parse error: Unmatched '");
                        if (0 == o1 && (l1 = 10, "parse-merge" == s1 || "parse-merge-alt" == s1 || "parse-trim-merge" == s1)) break;
                    }
                    u1 += t1[r1];
                    break;
                case 16:
                    if ("\x00" == t1[r1]) throw Error("Parse error: Unexpected end of template");
                    if ("`" == t1[r1]) {
                        if (--o1 < 0) throw Error("Parse error: Unmatched `");
                        if (0 == o1 && (l1 = 10, "parse-merge" == s1 || "parse-merge-alt" == s1 || "parse-trim-merge" == s1)) break;
                    }
                    u1 += t1[r1];
            }
            a1 && (d1(a1, u1), a1 = u1 = "");
        }
        if (!r1) {
            let t1 = 0;
            for(; t1 < h1.length;)if ("string" == h1[t1].type && "" == h1[t1].data) h1.splice(t1, 1);
            else break;
            for(t1 = h1.length - 1; t1 > 0;)if ("string" == h1[t1].type && "" == h1[t1].data) h1.splice(t1--, 1);
            else break;
            0 == h1.length && h1.push({
                type: "string",
                data: ""
            });
        }
        return i1 && p1(h1), h1;
    },
    /**
	**	Parses a template and returns the compiled 'parts' structure to be used by the 'expand' method. This
	**	version assumes the sym_open and sym_close chars are [ and ] respectively.
	**
	**	>> array parse (string template);
	*/ parse: function(t1) {
        return this.parseTemplate(t1.trim(), "[", "]", !1);
    },
    /**
	**	Removes all static parts from a parsed template.
	**
	**	>> array clean (array parts);
	*/ clean: function(t1) {
        for(let e1 = 0; e1 < t1.length; e1++)"template" != t1[e1].type && (t1.splice(e1, 1), e1--);
        return t1;
    },
    /**
	**	Expands a template using the given data object, ret can be set to 'text' or 'obj' allowing to expand the template as
	**	a string (text) or an array of objects (obj) respectively. If none provided it will be expanded as text.
	**
	**	>> string/array expand (array parts, object data, string ret='text', string mode='base-string');
	*/ expand: function(t1, e1, n1 = "text", r1 = "base-string") {
        let i1 = []; // Expand variable parts.
        if ("var" == r1) {
            let n1 = !0, r1 = !1, s1 = e1, a1 = null, l1 = !0, o1 = "";
            for(let i1 = 0; i1 < t1.length && null != e1; i1++)switch(t1[i1].type){
                case "identifier":
                case "string":
                    o1 += t1[i1].data, a1 = null;
                    break;
                case "template":
                    o1 += "object" != typeof (a1 = this.expand(t1[i1].data, s1, "arg", "template")) ? a1 : "";
                    break;
                case "base-string":
                    o1 += this.expand(t1[i1].data, s1, "arg", "base-string"), a1 = null;
                    break;
                case "access":
                    if (a1 && "object" == typeof a1) e1 = a1;
                    else {
                        for("" == o1 && (o1 = "this");;)if ("!" == o1[0]) o1 = o1.substr(1), n1 = !1;
                        else if ("$" == o1[0]) o1 = o1.substr(1), r1 = !0;
                        else break;
                        if ("this" != o1 && null != e1) {
                            let t1 = e1;
                            null === (e1 = o1 in e1 ? e1[o1] : null) && l1 && o1 in $d261ccdafdfe12a9$var$Template.functions && (e1 = $d261ccdafdfe12a9$var$Template.functions[o1](null, null, t1)), l1 = !1;
                        }
                    }
                    o1 = "";
            }
            for(; "" != o1;)if ("!" == o1[0]) o1 = o1.substr(1), n1 = !1;
            else if ("$" == o1[0]) o1 = o1.substr(1), r1 = !0;
            else break;
            if ("this" != o1) {
                let n1 = !1;
                if (null != e1 ? o1 in e1 ? e1 = e1[o1] : (n1 = !0, e1 = null) : n1 = !0, n1 && 1 == t1.length && !0 == $d261ccdafdfe12a9$var$Template.strict) throw Error("Expression function `" + o1 + "` not found.");
            }
            "string" == typeof e1 && (n1 && (e1 = e1.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")), r1 && (e1 = '"' + e1 + '"')), i1.push(e1);
        } // Expand variable parts and returns a reference to it.
        if ("varref" == n1) {
            let n1 = e1, r1 = null, i1 = !0, s1 = "";
            for(let a1 = 0; a1 < t1.length && null != e1; a1++)switch(t1[a1].type){
                case "identifier":
                case "string":
                    s1 += t1[a1].data, r1 = null;
                    break;
                case "template":
                    s1 += "object" != typeof (r1 = this.expand(t1[a1].data, n1, "arg", "template")) ? r1 : "";
                    break;
                case "base-string":
                    s1 += this.expand(t1[a1].data, n1, "arg", "base-string"), r1 = null;
                    break;
                case "access":
                    if (r1 && "object" == typeof r1) e1 = r1;
                    else {
                        for("" == s1 && (s1 = "this");;)if ("!" == s1[0]) s1 = s1.substr(1);
                        else if ("$" == s1[0]) s1 = s1.substr(1);
                        else break;
                        if ("this" != s1 && null != e1) {
                            let t1 = e1;
                            null === (e1 = s1 in e1 ? e1[s1] : null) && i1 && s1 in $d261ccdafdfe12a9$var$Template.functions && (e1 = $d261ccdafdfe12a9$var$Template.functions[s1](null, null, t1)), i1 = !1;
                        }
                    }
                    s1 = "";
            }
            for(; "" != s1;)if ("!" == s1[0]) s1 = s1.substr(1);
            else if ("$" == s1[0]) s1 = s1.substr(1);
            else break;
            return "this" != s1 ? [
                e1,
                s1
            ] : null;
        } // Expand function parts.
        if ("fn" == r1) {
            var s1 = [];
            if (s1.push($d261ccdafdfe12a9$var$Template.expand(t1[0], e1, "text", "base-string")), "_" + s1[0] in $d261ccdafdfe12a9$var$Template.functions && (s1[0] = "_" + s1[0]), !(s1[0] in $d261ccdafdfe12a9$var$Template.functions)) {
                if (!0 == $d261ccdafdfe12a9$var$Template.strict) throw Error("Expression function `" + s1[0] + "` not found.");
                return `(Unknown: ${s1[0]})`;
            }
            if ("_" == s1[0][0]) return $d261ccdafdfe12a9$var$Template.functions[s1[0]](t1, e1);
            for(let n1 = 1; n1 < t1.length; n1++)s1.push($d261ccdafdfe12a9$var$Template.expand(t1[n1], e1, "arg", "base-string"));
            i1.push($d261ccdafdfe12a9$var$Template.functions[s1[0]](s1, t1, e1));
        } // Template mode.
        if ("template" == r1) {
            if (1 == t1.length) {
                if (1 == t1[0].length && "string" == t1[0][0].type) return t1[0][0].data;
                if (1 == t1[0].length && "identifier" == t1[0][0].type) {
                    let r1 = t1[0][0].data;
                    if (r1 in $d261ccdafdfe12a9$var$Template.functions || "_" + r1 in $d261ccdafdfe12a9$var$Template.functions) return $d261ccdafdfe12a9$var$Template.expand(t1, e1, n1, "fn");
                }
                return $d261ccdafdfe12a9$var$Template.expand(t1[0], e1, n1, "var");
            }
            return $d261ccdafdfe12a9$var$Template.expand(t1, e1, n1, "fn");
        } // Expand parts.
        if ("base-string" == r1) {
            let r1 = -1;
            for (let s1 of t1){
                let a1 = null;
                switch(r1++, s1.type){
                    case "template":
                        a1 = $d261ccdafdfe12a9$var$Template.expand(s1.data, e1, n1, "template");
                        break;
                    case "string":
                    case "identifier":
                        a1 = s1.data;
                        break;
                    case "base-string":
                        a1 = $d261ccdafdfe12a9$var$Template.expand(s1.data, e1, n1, "base-string");
                }
                "void" != n1 && ("last" != n1 || r1 == t1.length - 1) && i1.push(a1);
            }
        } // Return types for direct objects.
        if ("obj" == n1) return i1;
        if ("last" == n1) return "Rose\\Arry" == typeOf(i1) && (i1 = i1[0]), i1; // When the output is not really needed.
        if ("void" == n1) return null; // Return as argument ('object' if only one, or string if more than one), that is, the first item in the result.
        if ("arg" == n1) return "array" == (0, $fMUO1.default).typeOf(i1) ? 1 != i1.length ? i1.join("") : i1[0] : i1;
        if ("text" == n1 && "array" == (0, $fMUO1.default).typeOf(i1)) {
            let t1 = (e1)=>null != e1 && "object" == typeof e1 ? "map" in e1 ? e1.map(t1).join("") : "join" in e1 ? e1.join("") : e1.toString() : e1;
            i1 = i1.map(t1).join("");
        }
        return i1;
    },
    /**
	**	Parses the given template and returns a function that when called with an object will expand the template.
	**
	**	>> object compile (string template);
	*/ compile: function(t1) {
        return t1 = $d261ccdafdfe12a9$var$Template.parse(t1), function(e1 = null, n1 = "text") {
            return $d261ccdafdfe12a9$var$Template.expand(t1, e1 || {}, n1);
        };
    },
    /**
	**	Parses and expands the given template immediately.
	**
	**	>> object eval (string template, object data, string mode='text');
	*/ eval: function(t1, e1 = null, n1 = "text") {
        return t1 = $d261ccdafdfe12a9$var$Template.parse(t1), $d261ccdafdfe12a9$var$Template.expand(t1, e1 || {}, n1);
    },
    /**
	**	Expands the template as 'arg' and returns the result.
	**
	**	>> object value (string parts, object data);
	*/ value: function(t1, e1 = null) {
        return "array" != (0, $fMUO1.default).typeOf(t1) ? t1 : $d261ccdafdfe12a9$var$Template.expand(t1, e1 || {}, "arg");
    },
    /**
	**	Registers an expression function.
	**
	**	>> object register (string name, function fn);
	*/ register: function(t1, e1) {
        $d261ccdafdfe12a9$var$Template.functions[t1] = e1;
    },
    /**
	**	Calls an expression function.
	**
	**	>> object call (string name, object args, object data);
	*/ call: function(t1, e1, n1 = null) {
        return t1 in $d261ccdafdfe12a9$var$Template.functions ? $d261ccdafdfe12a9$var$Template.functions[t1](e1, null, n1) : null;
    },
    /**
	**	Returns a map given a 'parts' array having values of the form "name: value" or ":name value".
	**
	**	>> Map getNamedValues (array parts, object data, int i=1, bool expanded=true);
	*/ getNamedValues: function(t1, e1, n1 = 1, r1 = !0) {
        let i1 = {}, s1 = 0;
        for(; n1 < t1.length; n1 += 2){
            let a1 = $d261ccdafdfe12a9$var$Template.expand(t1[n1], e1, "arg");
            s1 || (s1 = a1.startsWith(":") ? 1 : a1.endsWith(":") ? 2 : 3), 1 == s1 ? a1 = a1.substr(1) : 2 == s1 && (a1 = a1.substr(0, a1.length - 1)), r1 ? i1[a1] = $d261ccdafdfe12a9$var$Template.expand(t1[n1 + 1], e1, "arg") : i1[a1] = t1[n1 + 1];
        }
        return i1;
    }
}; /**
**	Template functions, functions that are used to format data. Each function takes three parameters (args, parts and data). By default the function arguments
**	are expanded and passed via 'args' for convenience, however if the function name starts with '_' the 'args' parameter will be skipped and only (parts, data)
**	will be available, each 'part' must be expanded manually by calling Template.expand.
*/ 
$d261ccdafdfe12a9$var$Template.functions = {
    global: function(t1) {
        return globalThis;
    },
    null: function(t1) {
        return null;
    },
    true: function(t1) {
        return !0;
    },
    false: function(t1) {
        return !1;
    },
    len: function(t1) {
        return t1[1].toString().length;
    },
    int: function(t1) {
        return ~~t1[1];
    },
    str: function(t1) {
        return t1[1].toString();
    },
    float: function(t1) {
        return parseFloat(t1[1]);
    },
    chr: function(t1) {
        return String.fromCharCode(t1[1]);
    },
    ord: function(t1) {
        return t1[1].toString().charCodeAt(0);
    },
    not: function(t1) {
        return !t1[1];
    },
    neg: function(t1) {
        return -t1[1];
    },
    abs: function(t1) {
        return Math.abs(t1[1]);
    },
    and: function(t1) {
        for(let e1 = 1; e1 < t1.length; e1++)if (!t1[e1]) return !1;
        return !0;
    },
    or: function(t1) {
        for(let e1 = 1; e1 < t1.length; e1++)if (~~t1[e1]) return !0;
        return !1;
    },
    eq: function(t1) {
        return t1[1] == t1[2];
    },
    ne: function(t1) {
        return t1[1] != t1[2];
    },
    lt: function(t1) {
        return t1[1] < t1[2];
    },
    le: function(t1) {
        return t1[1] <= t1[2];
    },
    gt: function(t1) {
        return t1[1] > t1[2];
    },
    ge: function(t1) {
        return t1[1] >= t1[2];
    },
    isnotnull: function(t1) {
        return !!t1[1];
    },
    isnull: function(t1) {
        return !t1[1];
    },
    iszero: function(t1) {
        return 0 == parseInt(t1[1]);
    },
    "eq?": function(t1) {
        return t1[1] == t1[2];
    },
    "ne?": function(t1) {
        return t1[1] != t1[2];
    },
    "lt?": function(t1) {
        return t1[1] < t1[2];
    },
    "le?": function(t1) {
        return t1[1] <= t1[2];
    },
    "gt?": function(t1) {
        return t1[1] > t1[2];
    },
    "ge?": function(t1) {
        return t1[1] >= t1[2];
    },
    "notnull?": function(t1) {
        return !!t1[1];
    },
    "null?": function(t1) {
        return !t1[1];
    },
    "zero?": function(t1) {
        return 0 == parseInt(t1[1]);
    },
    typeof: function(t1) {
        return (0, $fMUO1.default).typeOf(t1[1]);
    },
    "*": function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 *= t1[n1];
        return e1;
    },
    "/": function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 /= t1[n1];
        return e1;
    },
    "+": function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 -= -t1[n1];
        return e1;
    },
    "-": function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 -= t1[n1];
        return e1;
    },
    mul: function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 *= t1[n1];
        return e1;
    },
    div: function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 /= t1[n1];
        return e1;
    },
    sum: function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 -= -t1[n1];
        return e1;
    },
    sub: function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 -= t1[n1];
        return e1;
    },
    mod: function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 %= t1[n1];
        return e1;
    },
    pow: function(t1) {
        let e1 = t1[1];
        for(let n1 = 2; n1 < t1.length; n1++)e1 = Math.pow(e1, t1[n1]);
        return e1;
    },
    /**
	**	Returns the JSON representation of the expression.
	**
	**	dump <expr>
	*/ dump: function(t1) {
        return JSON.stringify(t1[1]);
    },
    /**
	**	Sets one or more variables in the data context.
	**
	**	set <var-name> <expr> [<var-name> <expr>]*
	*/ _set: function(t1, e1) {
        for(let n1 = 1; n1 + 1 < t1.length; n1 += 2){
            let r1 = $d261ccdafdfe12a9$var$Template.value(t1[n1 + 1], e1);
            if (t1[n1].length > 1) {
                let i1 = $d261ccdafdfe12a9$var$Template.expand(t1[n1], e1, "varref");
                null != i1 && (i1[0][i1[1]] = r1);
            } else e1[$d261ccdafdfe12a9$var$Template.value(t1[n1], e1)] = r1;
        }
        return "";
    },
    /**
	**	Removes one or more variables from the data context.
	**
	**	unset <var-name> [<var-name>]*
	*/ _unset: function(t1, e1) {
        for(let n1 = 1; n1 < t1.length; n1++)if (t1[n1].length > 1) {
            let r1 = $d261ccdafdfe12a9$var$Template.expand(t1[n1], e1, "varref");
            null != r1 && delete r1[0][r1[1]];
        } else delete e1[$d261ccdafdfe12a9$var$Template.value(t1[n1], e1)];
        return null;
    },
    /**
	**	Returns the expression without white-space on the left or right. The expression can be a string or an array.
	**
	**	trim <expr>
	*/ trim: function(t1) {
        return t1[1] ? "object" == typeof t1[1] ? t1[1].map((t1)=>t1.trim()) : t1[1].trim() : "";
    },
    /**
	**	Returns the expression in uppercase. The expression can be a string or an array.
	**
	**	upper <expr>
	*/ upper: function(t1) {
        return t1[1] ? "object" == typeof t1[1] ? t1[1].map((t1)=>t1.toUpperCase()) : t1[1].toUpperCase() : "";
    },
    /**
	**	Returns the expression in lower. The expression can be a string or an array.
	**
	**	lower <expr>
	*/ lower: function(t1) {
        return t1[1] ? "object" == typeof t1[1] ? t1[1].map((t1)=>t1.toLowerCase()) : t1[1].toLowerCase() : "";
    },
    /**
	**	Returns a sub-string of the given string.
	**
	**	substr <start> <count> <string>
	**	substr <start> <string>
	*/ substr: function(t1) {
        let e1 = t1[t1.length - 1].toString(), n1 = 0, r1 = null;
        return 4 == t1.length ? (n1 = ~~t1[1], r1 = ~~t1[2]) : (n1 = ~~t1[1], r1 = null), n1 < 0 && (n1 += e1.length), r1 < 0 && (r1 += e1.length), null === r1 && (r1 = e1.length - n1), e1.substr(n1, r1);
    },
    /**
	**	Replaces a matching string with the given replacement string in a given text.
	**
	**	replace <search> <replacement> <text>
	*/ replace: function(t1) {
        return t1[3].split(t1[1]).join(t1[2]);
    },
    /**
	**	Converts all new-line chars in the expression to <br/>, the expression can be a string or an array.
	**
	**	nl2br <expr>
	*/ nl2br: function(t1) {
        return t1[1] ? "object" == typeof t1[1] ? t1[1].map((t1)=>t1.replace(/\n/g, "<br/>")) : t1[1].replace(/\n/g, "<br/>") : "";
    },
    /**
	**	Returns the expression inside an XML tag named 'tag-name', the expression can be a string or an array.
	**
	**	% <tag-name> <expr>
	*/ "%": function(t1) {
        t1.shift();
        var e1 = t1.shift();
        let n1 = "";
        for(let r1 = 0; r1 < t1.length; r1++)if ("array" == (0, $fMUO1.default).typeOf(t1[r1])) {
            n1 += `<${e1}>`;
            for(let e1 = 0; e1 < t1[r1].length; e1++)n1 += t1[r1][e1];
            n1 += `</${e1}>`;
        } else n1 += `<${e1}>${t1[r1]}</${e1}>`;
        return n1;
    },
    /**
	**	Returns the expression inside an XML tag named 'tag-name', attributes are supported.
	**
	**	%% <tag-name> [<attr> <value>]* [<content>]
	*/ "%%": function(t1) {
        t1.shift();
        var e1 = t1.shift();
        let n1 = "", r1 = "";
        for(let e1 = 0; e1 < t1.length; e1 += 2)e1 + 1 < t1.length ? n1 += ` ${t1[e1]}="${t1[e1 + 1]}"` : r1 = t1[e1];
        return r1 ? `<${e1}${n1}>${r1}</${e1}>` : `<${e1}${n1}/>`;
    },
    /**
	**	Joins the given array expression into a string. The provided string-expr will be used as separator.
	**
	**	join <string-expr> <array-expr>
	*/ join: function(t1) {
        return t1[2] && "array" == (0, $fMUO1.default).typeOf(t1[2]) ? t1[2].join(t1[1]) : "";
    },
    /**
	**	Splits the given expression by the specified string. Returns an array.
	**
	**	split <string-expr> <expr>
	*/ split: function(t1) {
        return t1[2] && "string" == typeof t1[2] ? t1[2].split(t1[1]) : [];
    },
    /**
	**	Returns an array with the keys of the given object-expr.
	**
	**	keys <object-expr>
	*/ keys: function(t1) {
        return t1[1] && "object" == typeof t1[1] ? Object.keys(t1[1]) : [];
    },
    /**
	**	Returns an array with the values of the given object-expr.
	**
	**	values <object-expr>
	*/ values: function(t1) {
        return t1[1] && "object" == typeof t1[1] ? Object.values(t1[1]) : [];
    },
    /**
	**	Constructs a string obtained by concatenating the expanded template for each of the items in the list-expr, the mandatory varname
	**	parameter (namely 'i') indicates the name of the variable that will contain the data of each item as the list-expr is
	**	traversed. Extra variables i# and i## (suffix '#' and '##') are introduced to denote the index/key and numeric index
	**	of the current item respectively, note that the later will always have a numeric value.
	**
	**	each <varname> <list-expr> <template>
	*/ _each: function(t1, e1) {
        let n1 = $d261ccdafdfe12a9$var$Template.expand(t1[1], e1, "arg"), r1 = $d261ccdafdfe12a9$var$Template.expand(t1[2], e1, "arg"), i1 = "", s1 = 0;
        if (!r1) return i1;
        for(let a1 in r1)e1[n1] = r1[a1], e1[n1 + "##"] = s1++, e1[n1 + "#"] = a1, i1 += $d261ccdafdfe12a9$var$Template.expand(t1[3], e1, "text");
        return delete e1[n1], delete e1[n1 + "##"], delete e1[n1 + "#"], i1;
    },
    /**
	**	Expands the given template for each of the items in the list-expr, the mandatory varname parameter (namely 'i') indicates the name of the variable
	**	that will contain the data of each item as the list-expr is traversed. Extra variables i# and i## (suffix '#' and '##') are introduced to denote
	**	the index/key and numeric index of the current item respectively, note that the later will always have a numeric value.
	**
	**	Does not produce any output (returns null).
	**
	**	foreach <varname> <list-expr> <template>
	*/ _foreach: function(t1, e1) {
        let n1 = $d261ccdafdfe12a9$var$Template.expand(t1[1], e1, "arg"), r1 = $d261ccdafdfe12a9$var$Template.expand(t1[2], e1, "arg"), i1 = 0;
        if (!r1) return null;
        for(let s1 in r1)e1[n1] = r1[s1], e1[n1 + "##"] = i1++, e1[n1 + "#"] = s1, $d261ccdafdfe12a9$var$Template.expand(t1[3], e1, "text");
        return delete e1[n1], delete e1[n1 + "##"], delete e1[n1 + "#"], null;
    },
    /**
	**	Returns the valueA if the expression is true otherwise valueB, this is a short version of the 'if' function with the
	**	difference that the result is 'obj' instead of text.
	**
	**	? <expr> <valueA> [<valueB>]
	*/ "_?": function(t1, e1) {
        return $d261ccdafdfe12a9$var$Template.expand(t1[1], e1, "arg") ? $d261ccdafdfe12a9$var$Template.expand(t1[2], e1, "arg") : t1.length > 3 ? $d261ccdafdfe12a9$var$Template.expand(t1[3], e1, "arg") : "";
    },
    /**
	**	Returns the valueA if it is not null (or empty or zero), otherwise returns valueB.
	**
	**	?? <valueA> <valueB>
	*/ "_??": function(t1, e1) {
        return $d261ccdafdfe12a9$var$Template.expand(t1[1], e1, "arg") || $d261ccdafdfe12a9$var$Template.expand(t1[2], e1, "arg");
    },
    /**
	**	Returns the value if the expression is true, supports 'elif' and 'else' as well. The result of this function is always text.
	**
	**	if <expr> <value> [elif <expr> <value>] [else <value>]
	*/ _if: function(t1, e1) {
        for(let n1 = 0; n1 < t1.length; n1 += 3){
            if ("else" == $d261ccdafdfe12a9$var$Template.expand(t1[n1], e1, "arg")) return $d261ccdafdfe12a9$var$Template.expand(t1[n1 + 1], e1, "text");
            if ($d261ccdafdfe12a9$var$Template.expand(t1[n1 + 1], e1, "arg")) return $d261ccdafdfe12a9$var$Template.expand(t1[n1 + 2], e1, "text");
        }
        return "";
    },
    /**
	**	Loads the expression value and attempts to match one case.
	**
	**	switch <expr> <case1> <value1> ... <caseN> <valueN> default <defvalue> 
	*/ _switch: function(t1, e1) {
        let n1 = $d261ccdafdfe12a9$var$Template.expand(t1[1], e1, "arg");
        for(let r1 = 2; r1 < t1.length; r1 += 2){
            let i1 = $d261ccdafdfe12a9$var$Template.expand(t1[r1], e1, "arg");
            if (i1 == n1 || "default" == i1) return $d261ccdafdfe12a9$var$Template.expand(t1[r1 + 1], e1, "text");
        }
        return "";
    },
    /**
	**	Exits the current inner most loop.
	**
	**	break
	*/ _break: function(t1, e1) {
        throw Error("EXC_BREAK");
    },
    /**
	**	Skips execution and continues the next cycle of the current inner most loop.
	**
	**	continue
	*/ _continue: function(t1, e1) {
        throw Error("EXC_CONTINUE");
    },
    /**
	**	Constructs an array with the results of repeating the specified template for a number of times.
	**
	**	repeat <varname:i> [from <number>] [to <number>] [count <number>] [step <number>] <template>
	*/ _repeat: function(t1, e1) {
        if (t1.length < 3 || (1 & t1.length) != 1) return "(`repeat`: Wrong number of parameters)";
        let n1 = $d261ccdafdfe12a9$var$Template.value(t1[1], e1), r1 = null, i1 = 0, s1 = null, a1 = null;
        for(let n1 = 2; n1 < t1.length - 1; n1 += 2)switch($d261ccdafdfe12a9$var$Template.value(t1[n1], e1).toLowerCase()){
            case "from":
                i1 = parseFloat($d261ccdafdfe12a9$var$Template.value(t1[n1 + 1], e1));
                break;
            case "to":
                s1 = parseFloat($d261ccdafdfe12a9$var$Template.value(t1[n1 + 1], e1));
                break;
            case "count":
                r1 = parseFloat($d261ccdafdfe12a9$var$Template.value(t1[n1 + 1], e1));
                break;
            case "step":
                a1 = parseFloat($d261ccdafdfe12a9$var$Template.value(t1[n1 + 1], e1));
        }
        let l1 = t1[t1.length - 1], o1 = [];
        if (null !== s1) {
            if (null === a1 && (a1 = i1 > s1 ? -1 : 1), a1 < 0) for(let t1 = i1; t1 >= s1; t1 += a1)try {
                e1[n1] = t1, o1.push($d261ccdafdfe12a9$var$Template.value(l1, e1));
            } catch (e1) {
                let t1 = e1.message;
                if ("EXC_BREAK" == t1) break;
                if ("EXC_CONTINUE" == t1) continue;
                throw e1;
            }
            else for(let t1 = i1; t1 <= s1; t1 += a1)try {
                e1[n1] = t1, o1.push($d261ccdafdfe12a9$var$Template.value(l1, e1));
            } catch (e1) {
                let t1 = e1.message;
                if ("EXC_BREAK" == t1) break;
                if ("EXC_CONTINUE" == t1) continue;
                throw e1;
            }
        } else if (null !== r1) {
            null === a1 && (a1 = 1);
            for(let t1 = i1; r1 > 0; r1--, t1 += a1)try {
                e1[n1] = t1, o1.push($d261ccdafdfe12a9$var$Template.value(l1, e1));
            } catch (e1) {
                let t1 = e1.message;
                if ("EXC_BREAK" == t1) break;
                if ("EXC_CONTINUE" == t1) continue;
                throw e1;
            }
        } else {
            null === a1 && (a1 = 1);
            for(let t1 = i1;; t1 += a1)try {
                e1[n1] = t1, o1.push($d261ccdafdfe12a9$var$Template.value(l1, e1));
            } catch (e1) {
                let t1 = e1.message;
                if ("EXC_BREAK" == t1) break;
                if ("EXC_CONTINUE" == t1) continue;
                throw e1;
            }
        }
        return delete e1[n1], o1;
    },
    /**
	**	Repeats the specified template for a number of times.
	**
	**	for <varname:i> [from <number>] [to <number>] [count <number>] [step <number>] <template>
	*/ _for: function(t1, e1) {
        if (t1.length < 3 || (1 & t1.length) != 1) return "(`for`: Wrong number of parameters)";
        let n1 = $d261ccdafdfe12a9$var$Template.value(t1[1], e1), r1 = null, i1 = 0;
        to = null;
        let s1 = null;
        for(let n1 = 2; n1 < t1.length - 1; n1 += 2)switch((value = $d261ccdafdfe12a9$var$Template.value(t1[n1], e1)).toLowerCase()){
            case "from":
                i1 = parseFloat($d261ccdafdfe12a9$var$Template.value(t1[n1 + 1], e1));
                break;
            case "to":
                to = parseFloat($d261ccdafdfe12a9$var$Template.value(t1[n1 + 1], e1));
                break;
            case "count":
                r1 = parseFloat($d261ccdafdfe12a9$var$Template.value(t1[n1 + 1], e1));
                break;
            case "step":
                s1 = parseFloat($d261ccdafdfe12a9$var$Template.value(t1[n1 + 1], e1));
        }
        let a1 = t1[t1.length - 1];
        if (null !== to) {
            if (null === s1 && (s1 = i1 > to ? -1 : 1), s1 < 0) for(let t1 = i1; t1 >= to; t1 += s1)try {
                e1[n1] = t1, $d261ccdafdfe12a9$var$Template.value(a1, e1);
            } catch (e1) {
                let t1 = e1.message;
                if ("EXC_BREAK" == t1) break;
                if ("EXC_CONTINUE" == t1) continue;
                throw e1;
            }
            else for(let t1 = i1; t1 <= to; t1 += s1)try {
                e1[n1] = t1, $d261ccdafdfe12a9$var$Template.value(a1, e1);
            } catch (e1) {
                let t1 = e1.message;
                if ("EXC_BREAK" == t1) break;
                if ("EXC_CONTINUE" == t1) continue;
                throw e1;
            }
        } else if (null !== r1) {
            null === s1 && (s1 = 1);
            for(let t1 = i1; r1 > 0; r1--, t1 += s1)try {
                e1[n1] = t1, $d261ccdafdfe12a9$var$Template.value(a1, e1);
            } catch (e1) {
                let t1 = e1.message;
                if ("EXC_BREAK" == t1) break;
                if ("EXC_CONTINUE" == t1) continue;
                throw e1;
            }
        } else {
            null === s1 && (s1 = 1);
            for(let t1 = i1;; t1 += s1)try {
                e1[n1] = t1, $d261ccdafdfe12a9$var$Template.value(a1, e1);
            } catch (e1) {
                let t1 = e1.message;
                if ("EXC_BREAK" == t1) break;
                if ("EXC_CONTINUE" == t1) continue;
                throw e1;
            }
        }
        return delete e1[n1], null;
    },
    /**
	**	Repeats the specified template infinitely until a "break" is found.
	**
	**	loop <template>
	*/ _loop: function(t1, e1) {
        if (t1.length < 2) return "(`loop`: Wrong number of parameters)";
        let n1 = t1[1];
        for(;;)try {
            $d261ccdafdfe12a9$var$Template.value(n1, e1);
        } catch (e1) {
            let t1 = e1.message;
            if ("EXC_BREAK" == t1) break;
            if ("EXC_CONTINUE" == t1) continue;
            throw e1;
        }
        return null;
    },
    /**
	**	Writes the specified arguments to the console.
	**
	**	echo <expr> [<expr>...]
	*/ _echo: function(t1, e1) {
        let n1 = "";
        for(let r1 = 1; r1 < t1.length; r1++)n1 += $d261ccdafdfe12a9$var$Template.expand(t1[r1], e1, "arg");
        return console.log(n1), "";
    },
    /**
	**	Constructs a list from the given arguments and returns it.
	**
	**	# <expr> [<expr>...]
	*/ "_#": function(t1, e1) {
        let n1 = [];
        for(let r1 = 1; r1 < t1.length; r1++)n1.push($d261ccdafdfe12a9$var$Template.expand(t1[r1], e1, "arg"));
        return n1;
    },
    /**
	**	Constructs a non-expanded list from the given arguments and returns it.
	**
	**	## <expr> [<expr>...]
	*/ "_##": function(t1, e1) {
        let n1 = [];
        for(let e1 = 1; e1 < t1.length; e1++)n1.push(t1[e1]);
        return n1;
    },
    /**
	**	Constructs an associative array (dictionary) and returns it.
	**
	**	& <name>: <expr> [<name>: <expr>...]
	**	& :<name> <expr> [:<name> <expr>...]
	*/ "_&": function(t1, e1) {
        return $d261ccdafdfe12a9$var$Template.getNamedValues(t1, e1, 1, !0);
    },
    /**
	**	Constructs a non-expanded associative array (dictionary) and returns it.
	**
	**	&& <name>: <expr> [<name>: <expr>...]
	**	&& :<name> <expr> [:<name> <expr>...]
	*/ "_&&": function(t1, e1) {
        return $d261ccdafdfe12a9$var$Template.getNamedValues(t1, e1, 1, !1);
    },
    /**
	**	Returns true if the specified map contains all the specified keys. If it fails the global variable `err` will contain an error message.
	**
	**	contains <expr> <name> [<name>...]
	*/ contains: function(t1, e1, n1) {
        let r1 = t1[1];
        if ("object" != typeof r1) return n1.err = "Argument is not a Map", !1;
        let i1 = "";
        for(let e1 = 2; e1 < t1.length; e1++)t1[e1] in r1 || (i1 += ", " + t1[e1]);
        return "" == i1 || (n1.err = i1.substr(1), !1);
    },
    /**
	**	Returns true if the specified map has the specified key. Returns boolean.
	**
	**	has <name> <expr>
	*/ has: function(t1, e1, n1) {
        let r1 = t1[2];
        return "object" == (0, $fMUO1.default).typeOf(r1) && t1[1] in r1;
    },
    /**
	**	Returns a new array/map contaning the transformed values of the array/map (evaluating the template). And just as in 'each', the i# and i## variables be available.
	**
	**	map <varname> <list-expr> <template>
	*/ _map: function(t1, e1) {
        let n1 = $d261ccdafdfe12a9$var$Template.expand(t1[1], e1, "arg"), r1 = $d261ccdafdfe12a9$var$Template.expand(t1[2], e1, "arg");
        if (!r1) return r1;
        let i1 = "array" == (0, $fMUO1.default).typeOf(r1), s1 = i1 ? [] : {}, a1 = 0;
        for(let l1 in r1)e1[n1] = r1[l1], e1[n1 + "##"] = a1++, e1[n1 + "#"] = l1, i1 ? s1.push($d261ccdafdfe12a9$var$Template.expand(t1[3], e1, "arg")) : s1[l1] = $d261ccdafdfe12a9$var$Template.expand(t1[3], e1, "arg");
        return delete e1[n1], delete e1[n1 + "##"], delete e1[n1 + "#"], s1;
    },
    /**
	**	Returns a new array/map contaning the elements where the template evaluates to non-zero. Just as in 'each', the i# and i## variables be available.
	**
	**	filter <varname> <list-expr> <template>
	*/ _filter: function(t1, e1) {
        let n1 = $d261ccdafdfe12a9$var$Template.expand(t1[1], e1, "arg"), r1 = $d261ccdafdfe12a9$var$Template.expand(t1[2], e1, "arg");
        if (!r1) return r1;
        let i1 = "array" == (0, $fMUO1.default).typeOf(r1), s1 = i1 ? [] : {}, a1 = 0;
        for(let l1 in r1)e1[n1] = r1[l1], e1[n1 + "##"] = a1++, e1[n1 + "#"] = l1, ~~$d261ccdafdfe12a9$var$Template.expand(t1[3], e1, "arg") && (i1 ? s1.push(r1[l1]) : s1[l1] = r1[l1]);
        return delete e1[n1], delete e1[n1 + "##"], delete e1[n1 + "#"], s1;
    },
    /**
	**	Expands the specified template string with the given data. The sym_open and sym_close will be '{' and '}' respectively.
	**	If no data is provided, current data parameter will be used.
	**
	**	expand <template> <data>
	*/ expand: function(t1, e1, n1) {
        return $d261ccdafdfe12a9$var$Template.expand($d261ccdafdfe12a9$var$Template.parseTemplate(t1[1], "{", "}"), 3 == t1.length ? t1[2] : n1);
    },
    /**
	**	Calls a function described by the given parameter.
	**
	**	call <function> <args...>
	*/ _call: function(t1, e1) {
        let n1 = $d261ccdafdfe12a9$var$Template.expand(t1[1], e1, "varref");
        if (!n1 || "function" != typeof n1[0][n1[1]]) throw Error("Expression is not a function: " + $d261ccdafdfe12a9$var$Template.expand(t1[1], e1, "obj").map((t1)=>null == t1 ? "." : t1).join(""));
        let r1 = [];
        for(let n1 = 2; n1 < t1.length; n1++)r1.push($d261ccdafdfe12a9$var$Template.value(t1[n1], e1));
        return n1[0][n1[1]](...r1);
    }
};
var $d261ccdafdfe12a9$export$2e2bcd8739ae039 = $d261ccdafdfe12a9$var$Template;
let $9ffb7151b8b2d038$export$eefcfe56efaaa57d = $fMUO1.default, $9ffb7151b8b2d038$export$4c85e640eb41c31b = $2394d727dfd6a212$export$2e2bcd8739ae039, $9ffb7151b8b2d038$export$d61e24a684f9e51 = $13eda5a5dec8010f$export$2e2bcd8739ae039, $9ffb7151b8b2d038$export$ec8b666c5fe2c75a = $c43adaf9cb6d6dd3$export$2e2bcd8739ae039, $9ffb7151b8b2d038$export$a1edc412be3e1841 = $4dfa0622e14576ea$export$2e2bcd8739ae039, $9ffb7151b8b2d038$export$59eced47f477f85a = $0890bed8a163f087$export$2e2bcd8739ae039, $9ffb7151b8b2d038$export$19342e026b58ebb7 = $2710795e2347ba2a$export$2e2bcd8739ae039, $9ffb7151b8b2d038$export$3a9581c9ade29768 = $32651d5f38a8a64c$export$2e2bcd8739ae039, $9ffb7151b8b2d038$export$fb8073518f34e6ec = $2bcce06113365814$export$2e2bcd8739ae039, $9ffb7151b8b2d038$export$14416b8d99d47caa = $d261ccdafdfe12a9$export$2e2bcd8739ae039;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh"}],"fF8Uh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"i0RlT":[function(require,module,exports) {
var global = arguments[3];
(function(root) {
    // Detect free variables `exports`.
    var freeExports = exports;
    // Detect free variable `module`.
    var freeModule = module && module.exports == freeExports && module;
    // Detect free variable `global`, from Node.js or Browserified code, and use
    // it as `root`.
    var freeGlobal = typeof global == "object" && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;
    /*--------------------------------------------------------------------------*/ var InvalidCharacterError = function(message) {
        this.message = message;
    };
    InvalidCharacterError.prototype = new Error;
    InvalidCharacterError.prototype.name = "InvalidCharacterError";
    var error = function(message) {
        // Note: the error messages used throughout this file match those used by
        // the native `atob`/`btoa` implementation in Chromium.
        throw new InvalidCharacterError(message);
    };
    var TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // http://whatwg.org/html/common-microsyntaxes.html#space-character
    var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;
    // `decode` is designed to be fully compatible with `atob` as described in the
    // HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
    // The optimized base64-decoding algorithm used is based on @atk’s excellent
    // implementation. https://gist.github.com/atk/1020396
    var decode = function(input) {
        input = String(input).replace(REGEX_SPACE_CHARACTERS, "");
        var length = input.length;
        if (length % 4 == 0) {
            input = input.replace(/==?$/, "");
            length = input.length;
        }
        if (length % 4 == 1 || // http://whatwg.org/C#alphanumeric-ascii-characters
        /[^+a-zA-Z0-9/]/.test(input)) error("Invalid character: the string to be decoded is not correctly encoded.");
        var bitCounter = 0;
        var bitStorage;
        var buffer;
        var output = "";
        var position = -1;
        while(++position < length){
            buffer = TABLE.indexOf(input.charAt(position));
            bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
            // Unless this is the first of a group of 4 characters…
            if (bitCounter++ % 4) // …convert the first 8 bits to a single ASCII character.
            output += String.fromCharCode(0xFF & bitStorage >> (-2 * bitCounter & 6));
        }
        return output;
    };
    // `encode` is designed to be fully compatible with `btoa` as described in the
    // HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
    var encode = function(input) {
        input = String(input);
        if (/[^\0-\xFF]/.test(input)) // Note: no need to special-case astral symbols here, as surrogates are
        // matched, and the input is supposed to only contain ASCII anyway.
        error("The string to be encoded contains characters outside of the Latin1 range.");
        var padding = input.length % 3;
        var output = "";
        var position = -1;
        var a;
        var b;
        var c;
        var buffer;
        // Make sure any padding is handled outside of the loop.
        var length = input.length - padding;
        while(++position < length){
            // Read three bytes, i.e. 24 bits.
            a = input.charCodeAt(position) << 16;
            b = input.charCodeAt(++position) << 8;
            c = input.charCodeAt(++position);
            buffer = a + b + c;
            // Turn the 24 bits into four chunks of 6 bits each, and append the
            // matching character for each of them to the output.
            output += TABLE.charAt(buffer >> 18 & 0x3F) + TABLE.charAt(buffer >> 12 & 0x3F) + TABLE.charAt(buffer >> 6 & 0x3F) + TABLE.charAt(buffer & 0x3F);
        }
        if (padding == 2) {
            a = input.charCodeAt(position) << 8;
            b = input.charCodeAt(++position);
            buffer = a + b;
            output += TABLE.charAt(buffer >> 10) + TABLE.charAt(buffer >> 4 & 0x3F) + TABLE.charAt(buffer << 2 & 0x3F) + "=";
        } else if (padding == 1) {
            buffer = input.charCodeAt(position);
            output += TABLE.charAt(buffer >> 2) + TABLE.charAt(buffer << 4 & 0x3F) + "==";
        }
        return output;
    };
    var base64 = {
        "encode": encode,
        "decode": decode,
        "version": "1.0.0"
    };
    // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) define(function() {
        return base64;
    });
    else if (freeExports && !freeExports.nodeType) {
        if (freeModule) freeModule.exports = base64;
        else for(var key in base64)base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
    } else root.base64 = base64;
})(this);

},{}],"i0lQm":[function(require,module,exports) {
/**
 * Signal class.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Signal", ()=>Signal);
/**
 * Creates a new signal object.
 * @param {*} value?
 * @param {*} defaultValue?
 * @returns {Signal}
 */ parcelHelpers.export(exports, "signal", ()=>signal);
/**
 * Creates a new signal as an expression of the specified signals evaluated by the given function.
 * @param {Array<Signal|*>} signals 
 * @param {Function} evaluator 
 * @returns {Signal}
 */ parcelHelpers.export(exports, "expr", ()=>expr);
/**
 * Creates a new watcher, such that if any signal changes the evaluator will be run.
 * @param {Array<Signal|*>} signals 
 * @param {Function} evaluator 
 * @param {boolean} initialRun? Set to `false` to disable the initial run of the evaluator.
 */ parcelHelpers.export(exports, "watch", ()=>watch);
/**
 * Create a new validation watcher for the signal.
 * @param {Signal} signal
 * @param {object} rules
 * @returns {Signal}
 */ /**
 * Register a new validation rule.
 * @param {string} ruleName
 * @param {(Signal, *) => boolean} handler
 */ parcelHelpers.export(exports, "validator", ()=>validator);
class Signal {
    #value;
    #defvalue;
    #listeners;
    #type;
    /**
     * Creates a new signal object.
     * @param {*} value
     * @param {*} defvalue
     */ constructor(value = null, defvalue = null){
        this.#value = value;
        this.#type = null;
        this.#defvalue = defvalue;
        this.#listeners = [];
    }
    /**
     * Sets the type of the signal.
     * @param {'string'|'bool'|'int'|'number'|'*'} type 
     * @returns {Signal}
     */ is(type) {
        this.#type = type === "*" ? null : type;
        return this;
    }
    /**
     * Transforms the given value to the type of the signal.
     * @param {*} val 
     * @returns {*}
     */ transform(val) {
        if (this.#type === null) return val;
        if (this.#type === "string") return typeof val === "string" ? val : val.toString();
        if (this.#type === "int") return ~~val;
        if (this.#type === "number") return typeof val === "number" ? val : parseFloat(val);
        if (this.#type === "bool") {
            if (typeof val === "boolean") return val;
            if (typeof val === "string") return val === "true" || val === "1";
            return !!val;
        }
        return null;
    }
    /**
     * Returns the type of the signal.
     * @returns {'string'|'bool'|'int'|'number'|'*'}
     */ get type() {
        return this.#type === null ? "*" : this.#type;
    }
    /**
     * Returns the value of the signal.
     * @returns {*}
     */ get value() {
        return this.#value;
    }
    /**
     * Sets the value of the signal.
     * @param {*} val
     */ set value(val) {
        val = this.transform(val);
        if (this.#value === val) return;
        this.#value = val;
        this.notify();
    }
    /**
     * Returns the value of the signal.
     * @returns {*}
     */ get() {
        return this.value;
    }
    /**
     * Sets the value of the signal, when `forced` is true the signal will be updated even if its value is the same.
     * @param {*} value
     * @param {boolean} [forced]
     * @returns {Signal}
     */ set(value, forced = false) {
        value = this.transform(value);
        if (this.#value === value && forced !== true) return;
        this.#value = value;
        this.notify();
        return this;
    }
    /**
     * Resets the value of the signal to its default value.
     * @returns {Signal}
     */ reset() {
        this.value = this.#defvalue;
        return this;
    }
    /**
     * Connects a callback to the signal.
     * @param {function} callback
     * @returns {Signal}
     */ connect(callback) {
        this.#listeners.push(callback);
        return this;
    }
    /**
     * Disconnects a callback from the signal.
     * @param {function} callback
     * @returns {Signal}
     */ disconnect(callback) {
        const index = this.#listeners.indexOf(callback);
        if (index !== -1) this.#listeners.splice(index, 1);
        return this;
    }
    /**
     * Notifies all the listeners of the signal that it has changed its value.
     */ notify() {
        for (let callback of this.#listeners)callback();
    }
}
function signal(value = null, defaultValue = null) {
    return new Signal(value, defaultValue);
}
function expr(signals, evaluator) {
    let active = [];
    let notified = false;
    for(let i = 0; i < signals.length; i++)if (signals[i] instanceof Signal) active.push([
        i,
        signals[i]
    ]);
    if (!active.length) return evaluator(...signals);
    const sgn = signal();
    const update = function() {
        for (let i of active)signals[i[0]] = i[1].value;
        sgn.value = evaluator(...signals);
        notified = false;
    };
    const debouncer = function() {
        if (notified) return;
        notified = true;
        queueMicrotask(update);
    };
    for (let i of active)i[1].connect(debouncer);
    update();
    return sgn;
}
function watch(signals, evaluator, initialRun = true) {
    let active = [];
    let notified = false;
    for(let i = 0; i < signals.length; i++)if (signals[i] instanceof Signal) active.push([
        i,
        signals[i]
    ]);
    if (!active.length) {
        if (initialRun) evaluator(...signals);
        return;
    }
    const update = function() {
        for (let i of active)signals[i[0]] = i[1].value;
        evaluator(...signals);
        notified = false;
    };
    const debouncer = function() {
        if (notified) return;
        notified = true;
        queueMicrotask(update);
    };
    for (let i of active)i[1].connect(debouncer);
    if (initialRun) update();
}
/**
 * A validator is a function that is called when a signal changes. It is passed the signal and the config parameter
 * of the validator. If the validator returns `false` the validation cycle will be stopped.
 */ const validators = {};
function validator(signal, rules) {
    // Register a new validation rule.
    if (typeof signal === "string") {
        if (typeof rules !== "function") throw new Error("Validator handler must be a function");
        validators[signal] = rules;
        return;
    }
    // Ensure all validators are defined.
    for(let rule in rules){
        if (!(rule in validators)) throw new Error("Validator `" + rule + "` not defined");
    }
    // Create a new validation watcher for the signal.
    watch([
        signal
    ], ()=>{
        for(let rule in rules){
            if (validators[rule](signal, rules[rule]) === false) break;
        }
    });
    return signal;
}
validator("min", (signal, val)=>{
    if (signal.get() < val) signal.set(val);
});
validator("max", (signal, val)=>{
    if (signal.get() > val) signal.set(val);
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh"}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Retorna tiempo en segundos formado con los datos especificados.
 * @param {number} hh
 * @param {number} [mm]
 * @param {number} [ss]
 * @returns {number}
 */ parcelHelpers.export(exports, "makeTime", ()=>makeTime);
/**
 * Retorna una cadena con el tiempo en formato HH:MM:SS.
 * @param {number} value
 * @returns {string}
 */ parcelHelpers.export(exports, "formatTime", ()=>formatTime);
/**
 * Retorna el valor de interpolacion entre a y b al momento t.
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @returns {number}
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Convierte un valor de grados a radianes.
 * @param {number} value
 * @returns {number}
 */ parcelHelpers.export(exports, "rad", ()=>rad);
/**
 * Carga una imagen desde una URL.
 * @param {string} url
 * @returns {Promise<Image>}
 */ parcelHelpers.export(exports, "loadImage", ()=>loadImage);
/**
 * Carga un conjunto de imagenes.
 * @param {key: url} urlMap
 * @returns {Promise<void>}
 */ parcelHelpers.export(exports, "loadImages", ()=>loadImages);
parcelHelpers.export(exports, "crearCanvas", ()=>crearCanvas);
/**
 * Crea un objeto que se puede dibujar en el canvas.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object|null} parent
 * @param {Image} img 
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 * @param {number} height 
 * @returns {object}
 */ parcelHelpers.export(exports, "crearObjeto", ()=>crearObjeto);
parcelHelpers.export(exports, "crearReloj", ()=>crearReloj);
parcelHelpers.export(exports, "crearLog", ()=>crearLog);
/**
 * Crea un simulador.
 * @param {HTMLCanvasElement} canvas
 * @param {CanvasRenderingContext2D} ctx
 */ parcelHelpers.export(exports, "crearSimulador", ()=>crearSimulador);
var _riza = require("riza");
var _images = require("./images");
var _config = require("./config");
function makeTime(hh, mm = 0, ss = 0) {
    return (hh * 60 + mm) * 60 + ss;
}
function formatTime(value) {
    let hh = Math.floor(value / 3600);
    let mm = Math.floor(value % 3600 / 60);
    let ss = Math.floor(value % 60);
    return hh.toString().padStart(2, "0") + ":" + mm.toString().padStart(2, "0") + ":" + ss.toString().padStart(2, "0");
}
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function rad(value) {
    return value * Math.PI / 180;
}
function loadImage(url) {
    return new Promise((resolve, reject)=>{
        const image = new Image();
        image.onload = ()=>{
            resolve(image);
        };
        image.src = url;
        return image;
    });
}
async function loadImages(urlMap) {
    let loaders = await Promise.allSettled(Object.values(urlMap).map(loadImage));
    Object.keys(urlMap).forEach((key, index)=>{
        urlMap[key] = loaders[index].value;
    });
}
/**
 * Crea un canvas que ocupe toda la pantalla.
 * @returns {HTMLCanvasElement}
 */ const _$0 = (0, _riza.helpers).create("canvas", [], []);
function crearCanvas() {
    let canvas = _$0([], []);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    Object.assign(canvas.style, {
        position: "absolute",
        left: "0",
        top: "0",
        width: canvas.width + "px",
        height: canvas.height + "px"
    });
    return canvas;
}
function crearObjeto(ctx, parent, img, x = 0, y = 0, width = 0, height = 0) {
    if (width === 0) width = img.width;
    if (height === 0) height = img.height;
    if (x === -1) x = (ctx.canvas.width - width) / 2;
    if (y === -1) y = (ctx.canvas.height - height) / 2;
    const obj = {
        "x": x,
        "y": y,
        "width": width,
        "height": height,
        "visible": true,
        "parent": null,
        "children": [],
        "addObject": function(obj) {
            obj.parent = this;
            this.children.push(obj);
        },
        "removeObject": function(obj) {
            let index = this.children.indexOf(obj);
            if (index !== -1) this.children.splice(index, 1);
        },
        "remove": function() {
            if (this.parent) this.parent.removeObject(this);
            else ctx.removeObject(this);
        },
        "draw": function() {
            if (!this.visible) return;
            ctx.drawImage(img, this.x, this.y, this.width, this.height);
            ctx.save();
            ctx.translate(this.x, this.y);
            for (let child of this.children)if ("draw" in child) child.draw(ctx, this);
            ctx.restore();
        },
        "update": function(dt) {
            this.advance(dt);
            for (let child of this.children)if ("update" in child) child.update(dt, this);
        },
        "advance": function(dt) {}
    };
    if (parent === null) ctx.addObject(obj);
    else parent.addObject(obj);
    return obj;
}
/**
 * Crea un reloj para visualizar el tiempo de simulacion.
 * @param {CanvasRenderingContext2D} ctx
 * @returns { [object, HTMLSpanElement] }
 */ const _$1 = (0, _riza.helpers).create("span", [
    "style",
    (0, _riza.helpers).DYNAMIC
], [
    (0, _riza.helpers).DYNAMIC
]);
function crearReloj(ctx) {
    const offsX = 230;
    let clock = crearObjeto(ctx, null, (0, _images.IMG).clock, 16 + offsX, 16);
    let currentTime = (0, _riza.signal)(0);
    clock.addObject({
        update: function(dt) {
            currentTime.set(Math.floor((0, _config.simulationTime)()));
        },
        draw: function(ctx, parent) {
            let cx = 0.5 * parent.width;
            let cy = 0.5 * parent.height;
            let angle = 2 * Math.PI * ((0, _config.simulationTime)() / 1 % 60 / 60);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + 30 * Math.cos(Math.PI * 0.5 - angle), cy + -30 * Math.sin(Math.PI * 0.5 - angle));
            ctx.strokeStyle = "#f00";
            ctx.lineWidth = 1;
            ctx.stroke();
            angle = 2 * Math.PI * ((0, _config.simulationTime)() / 60 % 60 / 60);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + 30 * Math.cos(Math.PI * 0.5 - angle), cy + -30 * Math.sin(Math.PI * 0.5 - angle));
            ctx.strokeStyle = "#f00";
            ctx.lineWidth = 1;
            ctx.stroke();
            angle = 2 * Math.PI * ((0, _config.simulationTime)() / 3600 % 12 / 12);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + 27 * Math.cos(Math.PI * 0.5 - angle), cy + -27 * Math.sin(Math.PI * 0.5 - angle));
            ctx.strokeStyle = "#f00";
            ctx.lineWidth = 3;
            ctx.stroke();
        }
    });
    let timeLabel = _$1([
        "position:absolute; left:" + (80 + offsX) + "px; top:145px; transform:translateX(-50%);"
    ], [
        (0, _riza.expr)([
            currentTime
        ], (value)=>formatTime(value))
    ]);
    document.body.appendChild(timeLabel);
    return [
        clock,
        timeLabel
    ];
}
/**
 * Crea un log para visualizar las acciones de la simulacion.
 * @param {CanvasRenderingContext2D} ctx
 * @returns { write: function(message: string) }
 */ const _$2 = (0, _riza.helpers).create("div", [
    "style",
    "position:absolute; left:13px; top:200px; width:370px; height:595px; resize:none; overflow-y:auto; font-size:14px; font-family:Consolas; background:#000; color:#fff; border:none; outline:none; padding:0.5rem; box-sizing: border-box; border-radius: 0.3rem;"
], []);
const _$3 = (0, _riza.helpers).create("span", [
    "style:color",
    "#0ff"
], [
    (0, _riza.helpers).DYNAMIC
]);
const _$4 = (0, _riza.helpers).create("div", [
    "style:color",
    (0, _riza.helpers).DYNAMIC
], [
    (0, _riza.helpers).DYNAMIC,
    " ",
    (0, _riza.helpers).DYNAMIC
]);
function crearLog(ctx) {
    let div = _$2([], []);
    document.body.appendChild(div);
    div.write = function(color, message) {
        let line = _$4([
            color
        ], [
            _$3([], [
                formatTime((0, _config.simulationTime)())
            ]),
            message
        ]);
        div.prepend(line);
    };
    return div;
}
function crearSimulador(canvas, ctx) {
    ctx.objects = [];
    ctx.timeouts = [];
    ctx.paused = false;
    ctx.stopped = false;
    ctx.addObject = function(obj) {
        this.objects.push(obj);
    };
    ctx.removeObject = function(obj) {
        let index = this.objects.indexOf(obj);
        if (index !== -1) this.objects.splice(index, 1);
    };
    ctx.timeout = function(delta, callback) {
        this.timeouts.push({
            "timeout": (0, _config.simulationTime)() + delta,
            "callback": callback,
            "loop": 0
        });
    };
    ctx.alarm = function(time, callback) {
        this.timeouts.push({
            "timeout": time,
            "callback": callback,
            "loop": 0
        });
    };
    ctx.interval = function(delta, callback) {
        this.timeouts.push({
            "timeout": (0, _config.simulationTime)() + delta,
            "callback": callback,
            "loop": delta
        });
    };
    ctx.advance = function(dt) {};
    let lastFrame = performance.now();
    ctx.stop = function() {
        this.stopped = true;
    };
    ctx.pause = function() {
        this.paused = true;
    };
    ctx.resume = function() {
        this.paused = false;
        lastFrame = performance.now();
    };
    const loop = function() {
        if (ctx.stopped) return;
        if (ctx.paused) {
            requestAnimationFrame(loop);
            return;
        }
        canvas.width = canvas.width;
        let curFrame = performance.now();
        let dt = (curFrame - lastFrame) / 1000 * (0, _config.TIME_SCALE);
        lastFrame = curFrame;
        (0, _config.simulationTime)(dt);
        ctx.advance(dt);
        for (let obj of ctx.objects){
            obj.update(dt);
            obj.draw();
        }
        let curTime = (0, _config.simulationTime)();
        for(let i = 0; i < ctx.timeouts.length; i++)if (curTime >= ctx.timeouts[i].timeout) {
            ctx.timeouts[i].callback();
            if (!ctx.timeouts[i].loop) {
                ctx.timeouts.splice(i, 1);
                i--;
            } else ctx.timeouts[i].timeout = curTime + ctx.timeouts[i].loop;
        }
        requestAnimationFrame(loop);
    };
    loop();
    ctx.clock = crearReloj(ctx);
    ctx.log = crearLog(ctx);
}

},{"riza":"cCAh0","@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh","./images":"lLWtd","./config":"jtCLN"}],"lLWtd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IMG", ()=>IMG);
var _riza = require("riza");
var _bankOpenPng = require("./img/bank-open.png");
var _bankOpenPngDefault = parcelHelpers.interopDefault(_bankOpenPng);
var _bankClosedPng = require("./img/bank-closed.png");
var _bankClosedPngDefault = parcelHelpers.interopDefault(_bankClosedPng);
var _clockPng = require("./img/clock.png");
var _clockPngDefault = parcelHelpers.interopDefault(_clockPng);
var _guard1Png = require("./img/guard-1.png");
var _guard1PngDefault = parcelHelpers.interopDefault(_guard1Png);
var _car1Png = require("./img/car-1.png");
var _car1PngDefault = parcelHelpers.interopDefault(_car1Png);
var _car2Png = require("./img/car-2.png");
var _car2PngDefault = parcelHelpers.interopDefault(_car2Png);
var _car3Png = require("./img/car-3.png");
var _car3PngDefault = parcelHelpers.interopDefault(_car3Png);
var _car4Png = require("./img/car-4.png");
var _car4PngDefault = parcelHelpers.interopDefault(_car4Png);
var _person1Png = require("./img/person-1.png");
var _person1PngDefault = parcelHelpers.interopDefault(_person1Png);
var _person2Png = require("./img/person-2.png");
var _person2PngDefault = parcelHelpers.interopDefault(_person2Png);
var _person3Png = require("./img/person-3.png");
var _person3PngDefault = parcelHelpers.interopDefault(_person3Png);
const IMG = {
    "bank_open": (0, _bankOpenPngDefault.default),
    "bank_closed": (0, _bankClosedPngDefault.default),
    "clock": (0, _clockPngDefault.default),
    "guard_1": (0, _guard1PngDefault.default),
    "car_1": (0, _car1PngDefault.default),
    "car_2": (0, _car2PngDefault.default),
    "car_3": (0, _car3PngDefault.default),
    "car_4": (0, _car4PngDefault.default),
    "person_1": (0, _person1PngDefault.default),
    "person_2": (0, _person2PngDefault.default),
    "person_3": (0, _person3PngDefault.default)
};

},{"riza":"cCAh0","./img/guard-1.png":"5eDc2","./img/car-1.png":"lOgXO","./img/car-2.png":"fwz6H","./img/car-3.png":"dEDty","./img/car-4.png":"kmvqH","@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh","./img/person-1.png":"dpd96","./img/person-2.png":"5gy5h","./img/person-3.png":"fxjfz","./img/clock.png":"5R5id","./img/bank-open.png":"1oVBG","./img/bank-closed.png":"hdolQ"}],"5eDc2":[function(require,module,exports) {
module.exports = require("1024d9e335ba5425").getBundleURL("gnRNX") + "guard-1.0ec892b3.png" + "?" + Date.now();

},{"1024d9e335ba5425":"fjtJG"}],"fjtJG":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lOgXO":[function(require,module,exports) {
module.exports = require("d19bde7dbb95fe35").getBundleURL("gnRNX") + "car-1.ce95ed13.png" + "?" + Date.now();

},{"d19bde7dbb95fe35":"fjtJG"}],"fwz6H":[function(require,module,exports) {
module.exports = require("7ce81ff197369d66").getBundleURL("gnRNX") + "car-2.0dd76cbc.png" + "?" + Date.now();

},{"7ce81ff197369d66":"fjtJG"}],"dEDty":[function(require,module,exports) {
module.exports = require("4975a47d333944ee").getBundleURL("gnRNX") + "car-3.ec0eed76.png" + "?" + Date.now();

},{"4975a47d333944ee":"fjtJG"}],"kmvqH":[function(require,module,exports) {
module.exports = require("a3aa2d5ba3b459f").getBundleURL("gnRNX") + "car-4.ad77434c.png" + "?" + Date.now();

},{"a3aa2d5ba3b459f":"fjtJG"}],"dpd96":[function(require,module,exports) {
module.exports = require("b23090647c7d9a6b").getBundleURL("gnRNX") + "person-1.26779309.png" + "?" + Date.now();

},{"b23090647c7d9a6b":"fjtJG"}],"5gy5h":[function(require,module,exports) {
module.exports = require("96729397a4a13b46").getBundleURL("gnRNX") + "person-2.88e71bb3.png" + "?" + Date.now();

},{"96729397a4a13b46":"fjtJG"}],"fxjfz":[function(require,module,exports) {
module.exports = require("482fda3eeba12ff1").getBundleURL("gnRNX") + "person-3.a14fb012.png" + "?" + Date.now();

},{"482fda3eeba12ff1":"fjtJG"}],"5R5id":[function(require,module,exports) {
module.exports = require("e38c9fbe8f7d6e62").getBundleURL("gnRNX") + "clock.96a4bee3.png" + "?" + Date.now();

},{"e38c9fbe8f7d6e62":"fjtJG"}],"1oVBG":[function(require,module,exports) {
module.exports = require("b624ab8db34ed69f").getBundleURL("gnRNX") + "bank-open.f23df08a.png" + "?" + Date.now();

},{"b624ab8db34ed69f":"fjtJG"}],"hdolQ":[function(require,module,exports) {
module.exports = require("ea0b7798be08f543").getBundleURL("gnRNX") + "bank-closed.6785d90a.png" + "?" + Date.now();

},{"ea0b7798be08f543":"fjtJG"}],"jtCLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TIME_SCALE", ()=>TIME_SCALE);
parcelHelpers.export(exports, "PIXELS_PER_METER", ()=>PIXELS_PER_METER);
parcelHelpers.export(exports, "OUTSIDE_CAPACITY", ()=>OUTSIDE_CAPACITY);
parcelHelpers.export(exports, "INSIDE_CAPACITY", ()=>INSIDE_CAPACITY);
parcelHelpers.export(exports, "bank_opening_time", ()=>bank_opening_time);
parcelHelpers.export(exports, "bank_closing_time", ()=>bank_closing_time);
parcelHelpers.export(exports, "person_arrival_delay", ()=>person_arrival_delay);
parcelHelpers.export(exports, "person_walk_velocity", ()=>person_walk_velocity);
parcelHelpers.export(exports, "person_attention_delay", ()=>person_attention_delay);
parcelHelpers.export(exports, "person_reaction_delay", ()=>person_reaction_delay);
parcelHelpers.export(exports, "person_outside_wait_time", ()=>person_outside_wait_time);
parcelHelpers.export(exports, "person_inside_wait_time", ()=>person_inside_wait_time);
parcelHelpers.export(exports, "person_inside_process_time", ()=>person_inside_process_time);
parcelHelpers.export(exports, "guard_arrival_time", ()=>guard_arrival_time);
parcelHelpers.export(exports, "simulationTime", ()=>simulationTime);
var _riza = require("riza");
var _random = require("./random");
var _utils = require("./utils");
const TIME_SCALE = 144; // 12 horas en 5 minutos
const PIXELS_PER_METER = 40 / 1.5; // 40 pixels = 1.5 m
const OUTSIDE_CAPACITY = 25;
const INSIDE_CAPACITY = 5;
const bank_opening_time = (0, _random.randValue)((0, _utils.makeTime)(9, 0), (0, _utils.makeTime)(9, 30)); // 09:00am a 09:30am
const bank_closing_time = (0, _random.randValue)((0, _utils.makeTime)(17, 0), (0, _utils.makeTime)(17, 30)); // 05:00pm a 05:30pm
const person_arrival_delay = (0, _random.randValue)((0, _utils.makeTime)(0, 2.4), (0, _utils.makeTime)(0, 7.5)); // 8 a 25 personas por hora
const person_walk_velocity = (0, _random.randValue)(0.90, 1.34); // Metros por segundo
const person_attention_delay = (0, _random.randValue)(3.0, 6.0); // Segundos
const person_reaction_delay = (0, _random.randValue)(3.0, 8.0); // Segundos
const person_outside_wait_time = (0, _random.randValue)((0, _utils.makeTime)(0, 10), (0, _utils.makeTime)(0, 20)); // 10 a 20 minutos
const person_inside_wait_time = (0, _random.randValue)((0, _utils.makeTime)(0, 10), (0, _utils.makeTime)(0, 20)); // 10 a 20 minutos
const person_inside_process_time = (0, _random.randValue)((0, _utils.makeTime)(0, 10), (0, _utils.makeTime)(0, 90)); // 10 a 90 minutos
const guard_arrival_time = (0, _random.randValue)((0, _utils.makeTime)(8, 30), (0, _utils.makeTime)(9, 10)); // 08:30am a 09:10am
let currentTime = (0, _utils.makeTime)(8, 0); // Starts at 8:00am
function simulationTime(value = null) {
    if (value !== null) currentTime += value;
    return currentTime;
}

},{"riza":"cCAh0","@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh","./random":"1fE0k","./utils":"en4he"}],"1fE0k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Retornar um número aleatório de 16-bits (0 a 65,535).
 * @returns {number}
 */ parcelHelpers.export(exports, "rand16", ()=>rand16);
/**
 * Retorna una funcion que retorna un elemento aleatorio del arreglo.
 * @param {array} arr 
 * @returns {function}
 */ parcelHelpers.export(exports, "randItem", ()=>randItem);
/**
 * Retorna una funcion que retorna un numero aleatorio entre min y max.
 * @param {number} min
 * @param {number} max
 * @returns {function}
 */ parcelHelpers.export(exports, "randValue", ()=>randValue);
/**
 * Retorna una funcion que retorna el valor dado.
 * @param {*} value
 * @returns {function}
 */ parcelHelpers.export(exports, "ident", ()=>ident);
/**
 * Retorna el valor de la funcion dada, o simplemente el valor dado si no es una función.
 * @param {*|function} value
 * @returns {*}
 */ parcelHelpers.export(exports, "val", ()=>val);
/**
 * Congela el valor de la funcion dada, o simplemente retorna el valor dado si no es una función.
 * @param {*} fn
 * @param {*} value
 * @returns {*}
 */ parcelHelpers.export(exports, "freeze", ()=>freeze);
/**
 * Retorna una funcion que retorna el elemento del arreglo en el indice dado.
 * @param {number} index
 * @param {array|function} array
 * @returns {function}
 */ parcelHelpers.export(exports, "atIndex", ()=>atIndex);
/**
 * Retorna una funcion que retorna el valor de la propiedad del objeto dado.
 * @param {string} key
 * @param {object|function} obj
 * @returns {function}
 */ parcelHelpers.export(exports, "atKey", ()=>atKey);
/**
 * Retorna una funcion que retorna la suma de los valores dados.
 * @param {number} deltaValue
 * @param {number|function} value
 * @returns {number}
 */ parcelHelpers.export(exports, "delta", ()=>delta);
/**
 * Retorna una function que retorna el ultimo elemento del arreglo.
 * @param {array|function} values
 * @returns {*}
 */ parcelHelpers.export(exports, "last", ()=>last);
/**
 * Retorna una function que retorna el primer elemento del arreglo.
 * @param {array} values
 * @returns {*}
 */ parcelHelpers.export(exports, "first", ()=>first);
var _riza = require("riza");
function rand16() {
    return Math.random() * 0x10000 & 0xFFFF;
}
function randItem(arr) {
    return ()=>arr[rand16() % arr.length];
}
function randValue(min, max) {
    return ()=>min + rand16() % (max - min);
}
function ident(value) {
    return ()=>value;
}
function val(value) {
    if (typeof value === "function") return value();
    return value;
}
function freeze(fn, value) {
    if (value === undefined) {
        if (fn instanceof Function) fn = fn.clone().freeze();
        return fn;
    }
    if (value instanceof Function) value = value.clone().freeze();
    fn = fn.clone();
    fn.frozen = val(value);
    return fn;
}
function atIndex(index, array) {
    let fn = ()=>val(fn.frozen ?? array)[index];
    fn.frozen = null;
    fn.clone = ()=>atIndex(index, array);
    fn.freeze = ()=>freeze(fn, array);
    return fn;
}
function atKey(key, obj) {
    let fn = ()=>val(fn.frozen ?? obj)[key];
    fn.frozen = null;
    fn.clone = ()=>atKey(key, obj);
    fn.freeze = ()=>freeze(fn, obj);
    return fn;
}
function delta(deltaValue, value) {
    let fn = ()=>val(fn.frozen ?? value) + deltaValue;
    fn.frozen = null;
    fn.clone = ()=>delta(deltaValue, value);
    fn.freeze = ()=>delta(deltaValue, freeze(value));
    return fn;
}
function last(values) {
    let fn = ()=>val(fn.frozen ?? values).at(-1);
    fn.frozen = null;
    fn.clone = ()=>last(values);
    fn.freeze = ()=>freeze(fn, values);
    return fn;
}
function first(values) {
    let fn = ()=>val(fn.frozen ?? values).at(0);
    fn.frozen = null;
    fn.clone = ()=>first(values);
    fn.freeze = ()=>freeze(fn, values);
    return fn;
}

},{"riza":"cCAh0","@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh"}],"hBGor":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _riza = require("riza");
var _config = require("./config");
var _images = require("./images");
var _random = require("./random");
var _utils = require("./utils");
const image_name = (0, _random.randItem)([
    "person_1",
    "person_2",
    "person_3"
]);
function moveTo(targetX, targetY, callback = null) {
    this.srcX = this.x;
    this.srcY = this.y;
    this.moveCallback = callback;
    this.targetX = targetX;
    this.targetY = targetY;
    this.velocity = (0, _config.person_walk_velocity);
    this.mode = "moving";
}
function advance(dt) {
    if (this.mode == "waiting_line") {
        this.delay -= dt;
        if (this.delay > 0) return;
        this.delay = (0, _config.person_attention_delay)();
        let targetX = (0, _random.val)(this.targetX);
        let targetY = (0, _random.val)(this.targetY);
        let remaining = Math.sqrt(Math.pow(targetX - this.x, 2) + Math.pow(targetY - this.y, 2));
        if (remaining > 1.0) {
            this.mode = "moving_delay";
            this.delay = (0, _config.person_reaction_delay)();
        }
        this.wait_time -= dt;
        this.process_time -= dt;
        return;
    }
    if (this.mode === "moving_delay") {
        this.delay -= dt;
        if (this.delay > 0) return;
        this.mode = "moving";
        return;
    }
    if (this.mode === "moving") {
        let targetX = (0, _random.val)(this.targetX);
        let targetY = (0, _random.val)(this.targetY);
        let speed = (0, _random.val)(this.velocity);
        let angle = Math.atan2(targetY - this.y, targetX - this.x);
        this.x += speed * dt * Math.cos(angle);
        this.y += speed * dt * Math.sin(angle);
        let remaining = Math.sqrt(Math.pow(targetX - this.x, 2) + Math.pow(targetY - this.y, 2));
        if (remaining < 1.0) {
            this.delay = (0, _config.person_attention_delay)();
            this.mode = "waiting_line";
            if (this.moveCallback) {
                this.targetX = (0, _random.freeze)(this.targetX);
                this.targetY = (0, _random.freeze)(this.targetY);
                let tmp = this.moveCallback;
                this.moveCallback = null;
                tmp(this);
            }
        }
    }
}
exports.default = (ctx, parent, x, y)=>{
    let obj = (0, _utils.crearObjeto)(ctx, parent, (0, _images.IMG)[image_name()], (0, _random.val)(x), (0, _random.val)(y));
    Object.assign(obj, {
        "moveTo": moveTo,
        "advance": advance,
        "mode": "idle",
        "saliendo": false,
        "wait_time": 0,
        "process_time": 0
    });
    return obj;
};

},{"riza":"cCAh0","./images":"lLWtd","./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh","./random":"1fE0k","./config":"jtCLN"}],"1KVU2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _riza = require("riza");
var _config = require("./config");
var _images = require("./images");
var _random = require("./random");
var _utils = require("./utils");
const image_name = (0, _random.randItem)([
    "guard_1"
]);
function moveTo(targetX, targetY, callback = null) {
    this.srcX = this.x;
    this.srcY = this.y;
    this.moveCallback = callback;
    this.targetX = targetX;
    this.targetY = targetY;
    this.velocity = (0, _config.person_walk_velocity);
    this.mode = "moving";
}
function advance(dt) {
    if (this.mode === "moving") {
        let targetX = (0, _random.val)(this.targetX);
        let targetY = (0, _random.val)(this.targetY);
        let speed = (0, _random.val)(this.velocity);
        let angle = Math.atan2(targetY - this.y, targetX - this.x);
        this.x += speed * dt * Math.cos(angle);
        this.y += speed * dt * Math.sin(angle);
        let remaining = Math.sqrt(Math.pow(targetX - this.x, 2) + Math.pow(targetY - this.y, 2));
        if (remaining < 1.0) {
            this.mode = "idle";
            if (this.moveCallback) {
                this.targetX = (0, _random.freeze)(this.targetX);
                this.targetY = (0, _random.freeze)(this.targetY);
                let tmp = this.moveCallback;
                this.moveCallback = null;
                tmp(this);
            }
        }
    }
}
exports.default = (ctx, parent, x, y)=>{
    let obj = (0, _utils.crearObjeto)(ctx, parent, (0, _images.IMG)[image_name()], (0, _random.val)(x), (0, _random.val)(y));
    Object.assign(obj, {
        "moveTo": moveTo,
        "advance": advance,
        "mode": "idle",
        "ocupado": false
    });
    return obj;
};

},{"riza":"cCAh0","./config":"jtCLN","./images":"lLWtd","./random":"1fE0k","./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"fF8Uh"}]},["cz7Qg","gLLPy"], "gLLPy", "parcelRequire6038")

//# sourceMappingURL=index.4d6bcbeb.js.map
