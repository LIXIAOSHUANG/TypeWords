import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, removeResponseHeader, getQuery as getQuery$1, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler as lazyEventHandler$1, getRouterParam as getRouterParam$1, getResponseStatusText } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, joinRelativeURL, withTrailingSlash, decodePath, withLeadingSlash as withLeadingSlash$1, withoutTrailingSlash } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/nitropack/node_modules/source-map/source-map.js';
import { getRequestURL as getRequestURL$1, getRequestHeader as getRequestHeader$1, getCookie, setCookie, sendRedirect as sendRedirect$1, defineEventHandler as defineEventHandler$1, getRouterParam, createError as createError$1, lazyEventHandler, useBase } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/.pnpm/h3@1.15.5/node_modules/h3/dist/index.mjs';
import { createDefu } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { parsePath, withLeadingSlash, joinURL as joinURL$1 } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/.pnpm/ufo@1.6.3/node_modules/ufo/dist/index.mjs';
import { createRouterMatcher } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/.pnpm/vue-router@4.6.4_vue@3.5.27_typescript@5.9.3_/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/errx/dist/index.js';
import { isVNode, isRef, toValue } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/.pnpm/vue@3.5.27_typescript@5.9.3/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/unhead/dist/server.mjs';
import { renderToString } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/.pnpm/vue@3.5.27_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/unhead/dist/utils.mjs';
import { prefixStorage as prefixStorage$1 } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/.pnpm/unstorage@1.17.4_@netlify+blobs@9.1.2_db0@0.3.4_idb-keyval@6.2.2_ioredis@5.9.2/node_modules/unstorage/dist/index.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/.pnpm/ipx@3.1.1_@netlify+blobs@9.1.2_db0@0.3.4_idb-keyval@6.2.2_ioredis@5.9.2/node_modules/ipx/dist/index.mjs';
import { isAbsolute } from 'file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/words": {
        "ssr": false
      },
      "/articles": {
        "ssr": false
      },
      "/setting": {
        "ssr": false
      },
      "/book/nce1": {
        "prerender": true
      },
      "/book/nce2": {
        "prerender": true
      },
      "/book/nce3": {
        "prerender": true
      },
      "/book/nce4": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "http://localhost/",
    "origin": "https://typewords.cc",
    "host": "typewords.cc",
    "latestCommitHash": "d004096 (dev)",
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "zh",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "en",
          "language": "en-US",
          "name": "English"
        },
        {
          "code": "zh",
          "language": "zh-CN",
          "name": "中文"
        },
        {
          "code": "es",
          "language": "es-ES",
          "name": "Español"
        },
        {
          "code": "fr",
          "language": "fr-FR",
          "name": "Français"
        },
        {
          "code": "pt",
          "language": "pt-BR",
          "name": "Português"
        },
        {
          "code": "de",
          "language": "de-DE",
          "name": "Deutsch"
        },
        {
          "code": "ru",
          "language": "ru-RU",
          "name": "Русский"
        },
        {
          "code": "uk",
          "language": "uk-UA",
          "name": "Українська"
        },
        {
          "code": "ja",
          "language": "ja-JP",
          "name": "日本語"
        },
        {
          "code": "ko",
          "language": "ko-KR",
          "name": "한국어"
        },
        {
          "code": "th",
          "language": "th-TH",
          "name": "ไทย"
        },
        {
          "code": "vi",
          "language": "vi-VN",
          "name": "Tiếng Việt"
        },
        {
          "code": "id",
          "language": "id-ID",
          "name": "Bahasa Indonesia"
        },
        {
          "code": "tw",
          "language": "zh-TW",
          "name": "繁體中文"
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10
      },
      "domainLocales": {
        "en": {
          "domain": ""
        },
        "zh": {
          "domain": ""
        },
        "es": {
          "domain": ""
        },
        "fr": {
          "domain": ""
        },
        "pt": {
          "domain": ""
        },
        "de": {
          "domain": ""
        },
        "ru": {
          "domain": ""
        },
        "uk": {
          "domain": ""
        },
        "ja": {
          "domain": ""
        },
        "ko": {
          "domain": ""
        },
        "th": {
          "domain": ""
        },
        "vi": {
          "domain": ""
        },
        "id": {
          "domain": ""
        },
        "tw": {
          "domain": ""
        }
      }
    }
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		// normalize to string format expected by nuxt `error.vue`
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message
	errorObject.message ||= "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			// TODO: Support `message` in template
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _6_Se0l6gx76j_NZ_MKNBsitpy50_TarVFyerjx_hB8 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

/*!
  * shared v11.2.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => x.default);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
const isResolvedModule = (val) => isModule(val) || true;
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isResolvedModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

// @ts-nocheck
const localeCodes =  [
  "en",
  "zh",
  "es",
  "fr",
  "pt",
  "de",
  "ru",
  "uk",
  "ja",
  "ko",
  "th",
  "vi",
  "id",
  "tw"
];
const localeLoaders = {
  en: [
    {
      key: "locale_en_46json_cd369631",
      load: () => Promise.resolve().then(function () { return en$1; }),
      cache: true
    }
  ],
  zh: [
    {
      key: "locale_zh_46json_df5f0f16",
      load: () => Promise.resolve().then(function () { return zh$1; }),
      cache: true
    }
  ],
  es: [
    {
      key: "locale_es_46json_e72d657f",
      load: () => Promise.resolve().then(function () { return es$1; }),
      cache: true
    }
  ],
  fr: [
    {
      key: "locale_fr_46json_20e4d9b2",
      load: () => Promise.resolve().then(function () { return fr$1; }),
      cache: true
    }
  ],
  pt: [
    {
      key: "locale_pt_46json_5b1996a6",
      load: () => Promise.resolve().then(function () { return pt$1; }),
      cache: true
    }
  ],
  de: [
    {
      key: "locale_de_46json_aa2442aa",
      load: () => Promise.resolve().then(function () { return de$1; }),
      cache: true
    }
  ],
  ru: [
    {
      key: "locale_ru_46json_df6cd0b7",
      load: () => Promise.resolve().then(function () { return ru$1; }),
      cache: true
    }
  ],
  uk: [
    {
      key: "locale_uk_46json_3e55d9fa",
      load: () => Promise.resolve().then(function () { return uk$1; }),
      cache: true
    }
  ],
  ja: [
    {
      key: "locale_ja_46json_9fc645ae",
      load: () => Promise.resolve().then(function () { return ja$1; }),
      cache: true
    }
  ],
  ko: [
    {
      key: "locale_ko_46json_1f0dcec6",
      load: () => Promise.resolve().then(function () { return ko$1; }),
      cache: true
    }
  ],
  th: [
    {
      key: "locale_th_46json_3dc0b2f4",
      load: () => Promise.resolve().then(function () { return th$1; }),
      cache: true
    }
  ],
  vi: [
    {
      key: "locale_vi_46json_75ba86d9",
      load: () => Promise.resolve().then(function () { return vi$1; }),
      cache: true
    }
  ],
  id: [
    {
      key: "locale_id_46json_c895de95",
      load: () => Promise.resolve().then(function () { return id$1; }),
      cache: true
    }
  ],
  tw: [
    {
      key: "locale_tw_46json_983d863e",
      load: () => Promise.resolve().then(function () { return tw$1; }),
      cache: true
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "en",
    language: "en-US",
    name: "English"
  },
  {
    code: "zh",
    language: "zh-CN",
    name: "中文"
  },
  {
    code: "es",
    language: "es-ES",
    name: "Español"
  },
  {
    code: "fr",
    language: "fr-FR",
    name: "Français"
  },
  {
    code: "pt",
    language: "pt-BR",
    name: "Português"
  },
  {
    code: "de",
    language: "de-DE",
    name: "Deutsch"
  },
  {
    code: "ru",
    language: "ru-RU",
    name: "Русский"
  },
  {
    code: "uk",
    language: "uk-UA",
    name: "Українська"
  },
  {
    code: "ja",
    language: "ja-JP",
    name: "日本語"
  },
  {
    code: "ko",
    language: "ko-KR",
    name: "한국어"
  },
  {
    code: "th",
    language: "th-TH",
    name: "ไทย"
  },
  {
    code: "vi",
    language: "vi-VN",
    name: "Tiếng Việt"
  },
  {
    code: "id",
    language: "id-ID",
    name: "Bahasa Indonesia"
  },
  {
    code: "tw",
    language: "zh-TW",
    name: "繁體中文"
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL$1(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"UTF-8"},{"name":"baidu-site-verification","content":"codeva-NoSMtV313P"},{"name":"description","content":"Type Words 官方网站 - 在线英语练习平台，支持单词、文章跟打练习，提升英语学习效率。Practice English, one strike, one step forward"},{"name":"keywords","content":"Type Words, Typing Word, Type Words 官网, 官方网站, 英语打字练习, 单词跟打, 文章跟打, 键盘练习, 英语学习, 文章学习, 打字练习软件, 单词记忆工具, 英语学习软件, 背单词神器, 英语肌肉记忆, 键盘工作者, 免费英语学习, 音标发音, 默写练习, 在线学英语, CET-4, CET-6, TOEFL, IELTS, GRE, GMAT, SAT, 考研英语, 专四专八, 程序员英语, JavaScript API, Node.js API, Java API, Linux命令, 编程词汇, 技术英语, VSCode插件, 开源项目, GitHub趋势榜, V2EX热搜, Gitee GVP, 少数派推荐, 英语打字训练, WPM统计, 准确率分析, 商务英语, BEC, 雅思听力, 日语学习, 多语言学习, 英语口语练习, 单词拼写训练"},{"name":"author","content":"zyronon"},{"name":"robots","content":"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"},{"property":"og:title","content":"Type Words 官网 - 英语打字练习平台"},{"property":"og:description","content":"Type Words 官方网站 - 在线英语练习平台，支持单词、文章跟打练习，提升英语学习效率。Practice English, one strike, one step forward"},{"property":"og:type","content":"website"},{"property":"og:url","content":"https://typewords.cc/"},{"property":"og:image","content":"https://typewords.cc/favicon.ico"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:title","content":"Type Words 官网 - 英语打字练习平台"},{"name":"twitter:description","content":"Type Words 官方网站 - 在线英语练习平台，支持单词、文章跟打练习，提升英语学习效率。Practice English, one strike, one step forward"},{"name":"twitter:image","content":"https://typewords.cc/favicon.ico"},{"name":"theme-color","content":"#818CF8"},{"name":"format-detection","content":"telephone=no"},{"name":"HandheldFriendly","content":"True"},{"name":"MobileOptimized","content":"320"},{"name":"referrer","content":"origin-when-cross-origin"},{"name":"color-scheme","content":"light dark"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"canonical","href":"https://typewords.cc/"},{"rel":"apple-touch-icon","sizes":"180x180","href":"/favicon.ico"},{"rel":"manifest","href":"/manifest.json"}],"style":[],"script":[],"noscript":[],"title":"Type Words 官网 - 词文记 | 单词跟打 · 文章跟打","htmlAttrs":{"lang":"zh-CN"}};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader$1(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL$1(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {};
const i18nPathToPath = {};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    return withLeadingSlash(joinURL$1("", match.path));
  }
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
const _MrPGsz_jjHyVrAwIxxLCtzU1fQKNxlTKJqzdnrlk54M = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL$1(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "no_prefix" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async ({ event }) => {
    const ctx = useI18nContext(event);
    const url = getRequestURL$1(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/1VVYtqhB") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      await sendRedirect$1(
        event,
        joinURL$1(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const rootDir = "/Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _N5M7kBJUiFkaJbmSknPAQpgU5gKWTaZg4RBBuvrhvQ = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		// retain log to be include in the next render
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	// Pass any logs to the client
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const plugins = [
  _6_Se0l6gx76j_NZ_MKNBsitpy50_TarVFyerjx_hB8,
_MrPGsz_jjHyVrAwIxxLCtzU1fQKNxlTKJqzdnrlk54M,
_N5M7kBJUiFkaJbmSknPAQpgU5gKWTaZg4RBBuvrhvQ
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _QIrelW = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash$1(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
	const ssrContext = {
		url: decodePath(event.path),
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => import('file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => import('file:///Users/lishuang/Documents/workspace/web/study/vue/TypeWords/apps/nuxt/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = undefined ;
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		// In development with vite-node, the manifest is on-demand and will be available after rendering
		// eslint-disable-next-line no-restricted-globals
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			// Do not add links to resources that are inlined (vite v5+)
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			// Add CSS links in <head> for CSS files
			// - in dev mode when rendering an island and the file has scoped styles and is not a page
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
async function getIslandContext(event) {
	// TODO: Strict validation for url
	let url = event.path || "";
	const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	// TODO: Validate context
	const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	const ctx = {
		url: "/",
		...context,
		id: hashId,
		name: componentName,
		props: destr$1(context.props) || {},
		slots: {},
		components: {}
	};
	return ctx;
}

const storage = prefixStorage$1(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: -1 ,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler$1(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError$1({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError$1({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _J3AQSo = _messagesHandler ;

const _WdlK24 = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_1WDJyT = () => Promise.resolve().then(function () { return articles_get$1; });
const _lazy_dGxcNX = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _QIrelW, lazy: false, middleware: true, method: undefined },
  { route: '/api/articles', handler: _lazy_1WDJyT, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_dGxcNX, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _J3AQSo, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _WdlK24, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_dGxcNX, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler$1(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam$1(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$d = "Learn English, one keystroke at a time, open-source word and article practice tool";
var app_name$d = "Type Words";
var start_word_practice$d = "Start Word Practice";
var start_article_practice$d = "Start Article Practice";
var home_word_practice$d = "Word Practice";
var home_word_practice_desc1$d = "Practice modes: Follow-typing/Dictation/Self-test/Recitation";
var home_word_practice_desc2$d = "Smart learning: Intelligent planning for review";
var home_word_practice_desc3$d = "Free learning: No restrictions, plan yourself";
var home_article_practice$d = "Article Practice";
var home_article_practice_desc1$d = "Built-in common books, add articles yourself";
var home_article_practice_desc2$d = "Follow-typing + Recitation dual mode";
var home_article_practice_desc3$d = "Support listening while reciting";
var home_collection$d = "Favorites, Wrong Words, Mastered";
var home_collection_desc1$d = "Wrong input auto added to wrong word book";
var home_collection_desc2$d = "Add to mastered, auto skip later";
var home_collection_desc3$d = "Add to favorites for review";
var home_vocabulary$d = "Massive Vocabulary";
var home_vocabulary_desc$d = "Built-in elementary to advanced vocabulary";
var home_free_opensource$d = "Free & Open Source";
var home_free_opensource_desc1$d = "Completely open source, auditable";
var home_free_opensource_desc2$d = "Free to use";
var home_free_opensource_desc3$d = "Private deployment";
var home_customization$d = "Highly Customizable";
var home_customization_desc1$d = "Rich keyboard sound effects";
var home_customization_desc2$d = "Customizable shortcut keys";
var home_customization_desc3$d = "Highly customizable settings";
var home_design$d = "Simple & Efficient";
var home_design_desc1$d = "Simple design, modern UI";
var home_design_desc2$d = "Clean interface, simple operation";
var home_design_desc3$d = "No forced following of any platform";
var home_personalized$d = "Personalized Learning";
var home_personalized_desc1$d = "Freely add dictionaries and articles";
var home_personalized_desc2$d = "Customize personalized learning plan";
var home_personalized_desc3$d = "Multiple learning and review strategies";
var cn_limit_no1$d = "川公网安备51015602001426号";
var cn_limit_no2$d = "蜀ICP备2025157466号-2";
var setting$d = "Settings";
var edit$d = "Edit";
var cancel$d = "Cancel";
var confirm$d = "Confirm";
var save$d = "Save";
var close$d = "Close";
var search$d = "Search";
var more$d = "More";
var loading$d = "Loading";
var introduction$d = "Introduction";
var learn$d = "Learn";
var practice$d = "Practice";
var test$d = "Test";
var feedback$d = "Feedback";
var document$d = "Resources";
var help$d = "Help";
var about$d = "About";
var login$d = "Login";
var register$d = "Register";
var register_account$d = "Register Account";
var register_new_account$d = "Register New Account";
var code_login$d = "Code Login";
var password_login$d = "Password Login";
var phone_placeholder$d = "Please enter phone number";
var code_placeholder$d = "Please enter verification code";
var account_placeholder$d = "Please enter phone/email";
var password_placeholder$d = "Please enter password";
var auto_register_notice$d = "Unregistered phone will be auto-registered";
var forgot_password$d = "Forgot Password?";
var reset_password$d = "Reset Password";
var set_password_placeholder$d = "Please set password";
var confirm_password_placeholder$d = "Please confirm password";
var new_password_placeholder$d = "Please enter new password";
var confirm_new_password$d = "Confirm new password";
var wechat_scan_login$d = "WeChat Scan Login";
var scan_success$d = "Scan Success";
var tap_allow_in_wechat$d = "Tap allow in WeChat to login";
var login_cancelled$d = "Login cancelled";
var login_again$d = "Login again";
var sync_data$d = "Sync Data";
var local_data_detected$d = "Local data detected";
var sync_to_account_question$d = "Sync to account?";
var no_sync$d = "Don't Sync";
var sync$d = "Sync";
var syncing$d = "Syncing";
var sync_failed$d = "Sync Failed";
var sync_success$d = "Sync Success";
var enter_website$d = "Enter Website";
var general_settings$d = "General Settings";
var word_settings$d = "Word Settings";
var article_settings$d = "Article Settings";
var data_management$d = "Data Management";
var shortcut_settings$d = "Shortcut Settings";
var update_log$d = "Update Log";
var shortcut_key$d = "Shortcut (click to modify)";
var no_shortcut_set$d = "No shortcut set";
var press_key_to_set$d = "Press key to set";
var click_here_when_done$d = "Click here when done";
var restore_default$d = "Restore Default";
var data_saved_locally$d = "All data saved locally in browser";
var export_data_backup$d = "Export Data Backup (ZIP)";
var import_data_restore$d = "Import Data Restore";
var import_warning$d = "Import will overwrite all current data, proceed with caution";
var words$d = "Words";
var no_dict_selected$d = "No dictionary selected";
var select_dict_to_start$d = "Please select a dictionary to start";
var select_dict$d = "Select Dictionary";
var change_progress$d = "Change Progress";
var estimated_completion$d = "Estimated Completion";
var current_progress$d = "Current Progress";
var learned$d = "Learned";
var completed_review_stage$d = "Completed, entering review stage";
var today_task$d = "Today's Task";
var last_task$d = "Last Task";
var word_list$d = "Word List";
var daily_goal$d = "Daily Goal";
var words_count$d = "words";
var change$d = "Change";
var new_words_count$d = "New Words";
var review_last$d = "Review Last";
var review_previous$d = "Review Previous";
var start_learning$d = "Start Learning";
var continue_learning$d = "Continue Learning";
var free_practice$d = "Free Practice";
var continue_free_practice$d = "Continue Free Practice";
var smart_learning$d = "Smart Learning";
var review$d = "Review";
var random_review$d = "Random Review";
var my_dictionaries$d = "My Dictionaries";
var manage_dict$d = "Manage Dictionaries";
var create_personal_dict$d = "Create Personal Dictionary";
var recommend$d = "Recommended";
var articles$d = "Articles";
var this_week_record$d = "This Week's Record";
var change_book$d = "Change";
var today_study_time$d = "Today's Study Time";
var total_study_days$d = "Total Study Days";
var total_study_time$d = "Total Study Time";
var my_books$d = "My Books";
var manage_books$d = "Manage Books";
var create_personal_book$d = "Create Personal Book";
var article_management$d = "Article Management";
var toggle_translation$d = "Toggle Translation";
var switch_display_mode$d = "Switch Display Mode";
var line_by_line$d = "Line by Line";
var single_line$d = "Single Line";
var comparison$d = "Comparison";
var question$d = "Question";
var study_record$d = "Study Record";
var play_next_after_end$d = "Play next after end";
var create_book$d = "Create Book";
var edit_book$d = "Edit Book";
var dict_list$d = "Dictionary List";
var book_list$d = "Book List";
var word$d = "Word";
var phonetic$d = "Phonetic";
var translation$d = "Translation";
var example_sentence$d = "Example Sentence";
var phrase$d = "Phrase";
var synonym$d = "Synonym";
var related_words$d = "Related Words";
var etymology$d = "Etymology";
var add_word$d = "Add Word";
var edit_word$d = "Edit Word";
var create_dict$d = "Create Dictionary";
var edit_dict$d = "Edit Dictionary";
var faq$d = "FAQ";
var is_free$d = "Is the website free?";
var cannot_type$d = "Cannot type, keyboard not responding?";
var where_is_data$d = "Where is data? How to use across devices?";
var resource_sharing$d = "Resource Sharing";
var all_resources$d = "All Resources";
var new_concept_english$d = "New Concept English";
var tv_movie$d = "TV/Movie";
var grammar_learning$d = "Grammar Learning";
var listening_training$d = "Listening Training";
var warm_tips$d = "Warm Tips";
var resources_from_internet$d = "All resources are collected from the internet, for learning only";
var toggle_theme$d = "Toggle Theme";
var english_document$d = "English Resources";
var empty_placeholder$d = "Nothing here~";
var custom$d = "Custom";
var back$d = "Back";
var total_items$d = "items";
var batch_delete$d = "Batch Delete";
var confirm_delete_selected$d = "Confirm delete all selected?";
var change_order$d = "Change Order";
var list_order_setting$d = "List Order Settings";
var reverse_current_page$d = "Reverse Current Page";
var reverse_all$d = "Reverse All";
var random_current_page$d = "Shuffle Current Page";
var random_all$d = "Shuffle All";
var apply$d = "Apply";
var add$d = "Add";
var collect$d = "Favorite";
var uncollect$d = "Unfavorite";
var mark_mastered$d = "Mark as Mastered";
var unmark_mastered$d = "Unmark Mastered";
var about_thanks$d = "Thank you for using this project! It is open source and free. If helpful, please star us on GitHub. Your support motivates our improvement!";
var github_address$d = "GitHub: ";
var about_wechat_feedback$d = "WeChat Feedback: ";
var about_ticket_feedback$d = "Ticket Feedback: ";
var about_other_channels$d = "Other Channels: ";
var wait_translation$d = "Please wait for translation to complete";
var migrate_data$d = "Migrate Data";
var migrate_new_domain$d = "This website has enabled a new domain";
var migrate_old_domain_notice$d = "The old domain will be discontinued. Due to browser security restrictions, data cannot be shared between old and new sites. Please click to transfer data manually.";
var migrate_later_notice$d = "If you don't want to migrate now, you can do it later in \"Settings\" -> \"Data Management\"";
var author$d = "Author: ";
var features$d = "Features: ";
var suitable_for$d = "Suitable for: ";
var open_link$d = "Open Link";
var qq_group$d = "QQ Group";
var xiaohongshu$d = "Xiaohongshu";
var follow_x_account$d = "Follow my X account {x_account}";
var twitter$d = "Twitter";
var send_email$d = "Send email to {email}";
var email$d = "Email";
var xiaohongshu_desc$d = "Follow us on Xiaohongshu to get the latest updates from the development team, share your feedback and suggestions, help us improve the product, and stay updated with our latest news.";
var xiaohongshu_qrcode$d = "Xiaohongshu QR Code";
var community_desc$d = "Join our community to communicate with the development team, share your experience and suggestions, help us improve the product, and stay updated with our latest news.";
var qq_qrcode$d = "QQ Group QR Code";
var wechat_group$d = "WeChat Group";
var wechat_qrcode$d = "WeChat Group QR Code";
var github_project$d = "GITHUB Project";
var ie_not_supported$d = "IE Browser Not Supported";
var ie_use_modern_browser$d = "Type Words is built with modern technology. Please use Chrome, Edge, Firefox, or Safari.";
var download_chrome$d = "Download Chrome";
var i_understand$d = "I Understand";
var ignore_case$d = "Ignore Case";
var ignore_case_desc$d = "When enabled, input is case-insensitive. Both \"hello\" and \"Hello\" are considered correct.";
var allow_dictation_tip$d = "Allow tips in dictation mode";
var allow_dictation_tip_desc$d = "When enabled, you can hover over words or press shortcut key to show the answer";
var simple_word_filter$d = "Simple Word Filter";
var simple_word_filter_desc$d = "When enabled, simple words will be excluded from practice and article word count";
var simple_word_list$d = "Simple Word List";
var words_comma_separated$d = "Separate words with commas";
var sound_effect$d = "Sound Effect";
var pronunciation_accent$d = "Pronunciation Accent";
var pronunciation_accent_desc$d = "Only for words, articles use US accent";
var please_select$d = "Please Select";
var us_accent$d = "US Accent";
var uk_accent$d = "UK Accent";
var keyboard_sound$d = "Keyboard Sound";
var keyboard_sound_effect$d = "Keyboard Sound Effect";
var volume$d = "Volume";
var show_prev_next_word$d = "Show Previous/Next Word";
var show_prev_next_word_desc$d = "When enabled, previous/next word will be shown above during practice";
var disable_practice_setting_dialog$d = "Don't show practice settings by default";
var disable_practice_setting_dialog_desc$d = "Whether to show practice settings dialog when clicking learn button on dictionary page";
var clear_input_on_error$d = "Clear input on error";
var word_repeat_setting$d = "Word Repeat Setting";
var repeat_count$d = "Repeat Count";
var review_ratio$d = "Review Ratio";
var review_ratio_desc$d = "Review to new word ratio, takes effect on next session";
var word_auto_pronunciation$d = "Auto Word Pronunciation";
var speed$d = "Speed";
var effect_sound$d = "Effect Sound (error/completion sound)";
var auto_switch$d = "Auto Switch";
var auto_next_word$d = "Auto Switch to Next Word";
var auto_next_word_desc$d = "Only works in follow-typing mode. For dictation/test/recitation, press spacebar to switch";
var auto_next_word_time$d = "Auto Switch Time";
var auto_next_word_time_desc$d = "Time before auto-switching to next word after correct input";
var milliseconds$d = "ms";
var font_setting$d = "Font Setting";
var foreign_font$d = "Foreign Language Font";
var chinese_font$d = "Chinese Font";
var auto_play_sentence$d = "Auto Play Sentence";
var ignore_symbols_numbers_names$d = "Ignore symbols/numbers/names when typing";
var settings$d = "Settings";
var please_select_dict$d = "Please select a dictionary first";
var learning_settings$d = "Learning Settings";
var total$d = "Total";
var estimated$d = "Estimated";
var days_to_complete$d = "days to complete";
var from_word$d = "From word";
var start_daily$d = ", daily";
var new_words$d = "new words";
var review_ratio_tooltip$d = "Review to new word ratio";
var review_ratio_notice_1$d = "During learning, review count follows the ratio setting. 0 means no review.";
var review_ratio_notice_2$d = "After completion, new words are 0, review count follows ratio (min 1).";
var daily_learning$d = "Daily Learning";
var learning_progress$d = "Learning Progress";
var select_from_dict$d = "Select from dictionary";
var change_in_settings$d = "Can be changed in settings";
var keep_default_no_show$d = "Keep default, don't show again";
var review_complete$d = "Review Complete";
var today_task_complete$d = "Today's Task Complete";
var study_duration$d = "Study Duration";
var accuracy_rate$d = "Accuracy Rate";
var weekly_study_record$d = "Weekly Study Record";
var studied$d = "Studied";
var total_words$d = "Total Words";
var restart_learning$d = "Start Over";
var another_round$d = "Another Round";
var return_home$d = "Return Home";
var import_tutorial$d = "Import Tutorial";
var import_follow_template$d = "Please follow the template format to fill in data";
var import_word_required$d = "Word field is required, others are optional";
var import_translation_hint$d = "Translation: one per line, part of speech first, then content (e.g. n.cancel); multiple translations on separate lines";
var import_example_hint$d = "Example: original on one line, translation on next; multiple entries need";
var import_phrase_hint$d = "Phrase: original on one line, translation on next; multiple entries need";
var two$d = "two";
var lines$d = "lines";
var import_other_hint$d = "Synonyms, related words, etymology: check official dictionary and edit a word to see the format";
var template_download$d = "Template download";
var word_import_template$d = "Word Import Template";
var conflict_notice_title$d = "If you encounter the following issues:";
var keyboard_no_response$d = "Keyboard not responding";
var check_plugins_installed$d = "Please check if you have installed";
var conflict_plugin_names$d = "\"Video Speed Controller\" \"Vim\" \"Audio/Video Enhancer\" \"Online Class Helper\"";
var plugins_intercept_keyboard$d = "or similar plugins/scripts that intercept keyboard events,";
var cause_no_response$d = "causing keys not to respond on this site";
var follow_steps_to_resolve$d = ". Follow these steps to resolve:";
var try_incognito_mode$d = "Open this site in incognito mode, check if you can type normally?";
var incognito_not_working$d = "If incognito mode doesn't work, ";
var click_here$d = "click here";
var feedback_or_wechat$d = " to report, or join WeChat group: ";
var incognito_working$d = "If incognito works, then a plugin/script is causing the conflict";
var disable_plugin_or_exclude$d = "Temporarily disable the plugin/script, or exclude this site in its settings";
var install_extension_manager$d = "You can install this";
var chrome_extension$d = "extension (Chrome, requires VPN)";
var edge_extension$d = "extension (Edge, no VPN needed)";
var to_manage_extensions$d = "to quickly enable/disable other extensions";
var delete_key_goes_back$d = "Delete key goes back to previous page";
var browser_360_shortcut$d = "In 360 Browser, \"delete key goes back\" is set by default";
var change_browser_or_shortcut$d = "Either change browser or remove the shortcut: search \"back\" in browser settings and delete the shortcut";
var please_enter_name$d = "Please enter name";
var name_max_20_chars$d = "Name cannot exceed 20 characters";
var name_already_exists$d = "Name already exists!";
var add_success$d = "Added successfully";
var edit_success$d = "Modified successfully";
var edit_and_add_to_dict$d = "Modified and added to my dictionary";
var please_fill_complete$d = "Please fill in all required fields";
var name$d = "Name";
var description$d = "Description";
var source_language$d = "Source Language";
var target_language$d = "Target Language";
var english$d = "English";
var german$d = "German";
var japanese$d = "Japanese";
var code$d = "Code";
var chinese$d = "Chinese";
var multiple_choice$d = "Multiple Choice";
var start$d = "Start";
var countdown$d = "Countdown";
var seconds$d = "seconds";
var submit_exam$d = "Submit Exam";
var exam_color_hint$d = "Light red: wrong, Dark red: not selected, Green: correct";
var items_per_page$d = "/page";
var jump_to$d = "Jump to";
var page_or_index$d = "Page/Index";
var please_fill_original$d = "Please fill in the original text!";
var please_fill_title$d = "Please fill in the title!";
var please_fill_content$d = "Please fill in the content!";
var audio_added_success$d = "Audio added successfully";
var lrc_parse_success$d = "LRC file parsed successfully";
var original_text$d = "Original";
var title$d = "Title";
var please_fill_original_title$d = "Please fill in original title";
var content$d = "Content";
var one_sentence_per_line$d = "One sentence per line, empty line between paragraphs";
var name_config_tip$d = "Names will be auto-ignored during practice (optional, enabled by default)";
var name_config$d = "Name Config";
var please_paste_original$d = "Please paste original text";
var usage_guide$d = "Usage Guide";
var copy_and_split$d = "Copy original text, then split sentences";
var click$d = "Click";
var split_sentence$d = "Split";
var auto_split$d = "button to auto split";
var or$d = "or";
var manual_split$d = "manually edit";
var split_rule$d = "Split rule: one sentence per line, empty line between paragraphs";
var after_edit_click$d = "After editing click";
var sync_to_result$d = "button to sync to result panel";
var please_fill_translation_title$d = "Please fill in translation title";
var please_fill_translation$d = "Please fill in translation";
var translate$d = "Translate";
var copy_translation_or_click$d = "Copy translation, or click";
var result$d = "Result";
var editable_auto_sync$d = "All editable, click Apply to sync after editing";
var audio$d = "Audio";
var audio_management$d = "Audio Management";
var paragraph$d = "Paragraph ";
var set_start_time$d = "Set start time";
var use_prev_end_time$d = "Use previous sentence end time";
var minus_03s$d = "-0.3s";
var end$d = "End";
var set_end_time$d = "Set end time";
var edit_audio_align$d = "Edit audio alignment";
var play$d = "Play";
var status$d = "Status";
var sentences_not_translated$d = "{count} sentences not translated!";
var translation_complete$d = "Translation complete!";
var save_and_next$d = "Save and add next";
var no_translation_comparison$d = "No translation comparison";
var adjust_audio_timeline$d = "Adjust Audio Timeline";
var audio_timeline_tutorial$d = "Tutorial: Click play, when sentence starts click Record for start time; when sentence ends click Record for end time, then preview";
var start_time$d = "Start time";
var jump_to_seconds$d = "Jump to {seconds}s";
var use_prev_end_seconds$d = "Use previous end time: {seconds}s";
var decrease_03s$d = "Decrease 0.3s";
var increase_03s$d = "Increase 0.3s";
var record$d = "Record";
var end_time$d = "End time";
var audio_upload_notice$d = "1. Uploaded files are saved locally, data will be lost when changing computers, please backup\n2. LRC files are used to parse audio positions, may not be accurate, can be modified later";
var upload_audio$d = "Upload Audio";
var upload_lrc$d = "Upload LRC File";
var name_management$d = "Name Management";
var name_ignore_config_desc$d = "Configure names to ignore during practice (optional, enabled by default)";
var add_name$d = "Add Name";
var enter_name$d = "Enter name";
var collect_word$d = "Collect Word";
var copy$d = "Copy";
var copy_sentence$d = "Copy Sentence";
var copied$d = "Copied";
var copy_word$d = "Copy Word";
var start_from_here$d = "Start from here";
var play_sentence$d = "Play Sentence";
var grammar_analysis$d = "Grammar Analysis";
var copied_open_grammar$d = "Copied! Opening grammar analysis site...";
var youdao_translate$d = "Youdao Translate";
var translate_word$d = "Translate Word";
var translate_sentence$d = "Translate Sentence";
var restart_practice$d = "Restart Practice";
var next_article$d = "Next Article";
var learning_record$d = "Learning Record";
var total_learning_time$d = "Total Learning Time";
var current$d = "Current";
var show_questions$d = "Show Questions";
var explanation$d = "Explanation";
var encouragement_95$d = "Excellent! Keep it up!";
var encouragement_85$d = "Great job, keep going!";
var encouragement_70$d = "Good score, keep it up!";
var encouragement_default$d = "Every practice is progress, keep going!";
var daily_task_complete$d = "Daily Task Complete";
var weekly_record$d = "Weekly Record";
var study_progress$d = "Progress";
var relearn$d = "Relearn";
var start_from_beginning$d = "Start Over";
var another_group$d = "Another Group";
var back_to_home$d = "Back to Home";
var know_word_tip$d = "If you selected \"I know\" by mistake, press Delete to reselect!";
var press_delete_reinput$d = "Press Delete to re-enter";
var press_space_continue$d = "Press Space to continue";
var shortcut$d = "Shortcut";
var i_know$d = "I Know";
var i_dont_know$d = "I Don't Know";
var phrases$d = "Phrases";
var synonyms$d = "Synonyms";
var word_root$d = "Word Root";
var review_wrong_words$d = "Review Wrong Words";
var collapse$d = "Collapse";
var expand$d = "Expand";
var minutes$d = "min";
var time$d = "Time";
var errors$d = "Errors";
var skip_to_next_stage$d = "Skip to next stage";
var skip_word$d = "Skip Word";
var toggle_dictation_mode$d = "Toggle Dictation Mode";
var send_failed$d = "Send failed";
var send_code_failed$d = "Failed to send verification code";
var sending$d = "Sending";
var send_code$d = "Send Code";
var agree_terms_notice$d = "By continuing, you agree to our";
var user_agreement$d = "Terms of Service";
var and$d = "and";
var privacy_policy$d = "Privacy Policy";
var important_notice$d = "Important Notice";
var dont_remind$d = "Don't remind again";
var function_desc$d = "Features";
var qa1_a$d = "Is the website free?";
var qa1_q1$d = "Not completely free. For long-term development, future charges are inevitable, but it will not require payment to use. We try to find a balance between free and paid.";
var qa1_q2$d = "The project is open source, you can deploy it yourself.";
var qa2_a$d = "Cannot type, keyboard has no response?";
var qa3_a$d = "Where is the data? How to use across multiple computers/devices?";
var qa3_q1$d = "All user data is saved in the local browser. If you need to use Type Words on different devices or browsers, you need to manually export and import data.";
var qa3_q2$d = "Settings -> Data Settings -> Export data on original computer -> Send to new computer via social software -> Import on new computer";
var qa3_q3$d = "Account system is under development.";
var qa4_a$d = "The website plans too many words automatically, how to modify?";
var qa4_q1$d = "The default ratio of review words to new words is 1:4. If there are 40 new words, it will review 40 words from the last session and 120 words from previous sessions.";
var qa4_q2$d = "You can modify it via Settings -> Word Settings -> Review Ratio";
var qa5_a$d = "It takes too long to complete one learning session, is the process too lengthy?";
var qa5_q1$d = "This is indeed an issue. A lengthy process can easily make people lose motivation. I am thinking about how to optimize the learning process.";
var qa5_q2$d = "Wrong words will be repeated. If it was just a typo, you can press Tab to skip during subsequent practice.";
var qa5_q3$d = "During review, only words marked as \"don't know\" require dictation and spelling.";
var qa5_q4$d = "After the account system is launched, the Ebbinghaus memory curve feature will be added.";
var qa6_a$d = "Will the Ebbinghaus memory curve feature be added?";
var qa7_a$d = "Can I add words/custom dictionaries/import my own words/modify word content?";
var qa7_q1$d = "Yes, on the Words page, click \"Create Personal Dictionary\"";
var qa7_q2$d = "After creation, on the dictionary details page, click the \"Add Word\" icon to add your own words";
var qa7_q3$d = "You can also click the \"Import\" icon to batch import (must strictly follow the template xlsx format)";
var qa8_a$d = "Can I add articles/custom books/import my own articles/modify article content?";
var qa8_q1$d = "Yes, the steps are basically the same as adding words";
var qa8_q2$d = "On the Articles page, click \"Create Personal Book\"";
var qa8_q3$d = "After creation, click the \"Article Management\" button at the top to add your own articles";
var qa9_a$d = "How to turn off key sounds?";
var qa9_q$d = "Settings -> General Settings -> Sound Effects -> Key Sound, turn it off";
var qa10_a$d = "Can I use it on a tablet?";
var qa10_q1$d = "Tablets can be used, but using a Bluetooth keyboard provides a better experience since the built-in virtual keyboard takes up 1/3 of the screen space.";
var qa10_q2$d = "After connecting a Bluetooth keyboard, Android tablets need to manually enable \"Desktop Mode\" in the browser; iPad does not need this operation.";
var qa11_a$d = "Can I use it on a phone?";
var qa11_q$d = "Phones can be used, but optimization for phones has not been done yet. It is recommended to use on a computer or tablet.";
var qa12_a$d = "Is there an APP or mini-program?";
var qa12_q$d = "No, only the website";
var qa13_a$d = "How to provide feedback to the development team?";
var qa13_q1$d = "You can join our official WeChat group, describe in detail the features you want";
var qa13_q2$d = "If you find bugs in the application, please provide a detailed description and steps to reproduce, preferably with a short video";
var qa13_q3$d = "You can also submit a support ticket to us";
var qa13_q4$d = "You can also submit on github/issues";
const en = {
	app_desc: app_desc$d,
	app_name: app_name$d,
	start_word_practice: start_word_practice$d,
	start_article_practice: start_article_practice$d,
	home_word_practice: home_word_practice$d,
	home_word_practice_desc1: home_word_practice_desc1$d,
	home_word_practice_desc2: home_word_practice_desc2$d,
	home_word_practice_desc3: home_word_practice_desc3$d,
	home_article_practice: home_article_practice$d,
	home_article_practice_desc1: home_article_practice_desc1$d,
	home_article_practice_desc2: home_article_practice_desc2$d,
	home_article_practice_desc3: home_article_practice_desc3$d,
	home_collection: home_collection$d,
	home_collection_desc1: home_collection_desc1$d,
	home_collection_desc2: home_collection_desc2$d,
	home_collection_desc3: home_collection_desc3$d,
	home_vocabulary: home_vocabulary$d,
	home_vocabulary_desc: home_vocabulary_desc$d,
	home_free_opensource: home_free_opensource$d,
	home_free_opensource_desc1: home_free_opensource_desc1$d,
	home_free_opensource_desc2: home_free_opensource_desc2$d,
	home_free_opensource_desc3: home_free_opensource_desc3$d,
	home_customization: home_customization$d,
	home_customization_desc1: home_customization_desc1$d,
	home_customization_desc2: home_customization_desc2$d,
	home_customization_desc3: home_customization_desc3$d,
	home_design: home_design$d,
	home_design_desc1: home_design_desc1$d,
	home_design_desc2: home_design_desc2$d,
	home_design_desc3: home_design_desc3$d,
	home_personalized: home_personalized$d,
	home_personalized_desc1: home_personalized_desc1$d,
	home_personalized_desc2: home_personalized_desc2$d,
	home_personalized_desc3: home_personalized_desc3$d,
	cn_limit_no1: cn_limit_no1$d,
	cn_limit_no2: cn_limit_no2$d,
	setting: setting$d,
	edit: edit$d,
	"delete": "Delete",
	cancel: cancel$d,
	confirm: confirm$d,
	save: save$d,
	close: close$d,
	search: search$d,
	more: more$d,
	loading: loading$d,
	introduction: introduction$d,
	learn: learn$d,
	practice: practice$d,
	test: test$d,
	feedback: feedback$d,
	document: document$d,
	help: help$d,
	about: about$d,
	login: login$d,
	register: register$d,
	register_account: register_account$d,
	register_new_account: register_new_account$d,
	code_login: code_login$d,
	password_login: password_login$d,
	phone_placeholder: phone_placeholder$d,
	code_placeholder: code_placeholder$d,
	account_placeholder: account_placeholder$d,
	password_placeholder: password_placeholder$d,
	auto_register_notice: auto_register_notice$d,
	forgot_password: forgot_password$d,
	reset_password: reset_password$d,
	set_password_placeholder: set_password_placeholder$d,
	confirm_password_placeholder: confirm_password_placeholder$d,
	new_password_placeholder: new_password_placeholder$d,
	confirm_new_password: confirm_new_password$d,
	wechat_scan_login: wechat_scan_login$d,
	scan_success: scan_success$d,
	tap_allow_in_wechat: tap_allow_in_wechat$d,
	login_cancelled: login_cancelled$d,
	login_again: login_again$d,
	sync_data: sync_data$d,
	local_data_detected: local_data_detected$d,
	sync_to_account_question: sync_to_account_question$d,
	no_sync: no_sync$d,
	sync: sync$d,
	syncing: syncing$d,
	sync_failed: sync_failed$d,
	sync_success: sync_success$d,
	enter_website: enter_website$d,
	general_settings: general_settings$d,
	word_settings: word_settings$d,
	article_settings: article_settings$d,
	data_management: data_management$d,
	shortcut_settings: shortcut_settings$d,
	update_log: update_log$d,
	"function": "Function",
	shortcut_key: shortcut_key$d,
	no_shortcut_set: no_shortcut_set$d,
	press_key_to_set: press_key_to_set$d,
	click_here_when_done: click_here_when_done$d,
	restore_default: restore_default$d,
	data_saved_locally: data_saved_locally$d,
	export_data_backup: export_data_backup$d,
	import_data_restore: import_data_restore$d,
	import_warning: import_warning$d,
	words: words$d,
	no_dict_selected: no_dict_selected$d,
	select_dict_to_start: select_dict_to_start$d,
	select_dict: select_dict$d,
	change_progress: change_progress$d,
	estimated_completion: estimated_completion$d,
	current_progress: current_progress$d,
	learned: learned$d,
	completed_review_stage: completed_review_stage$d,
	today_task: today_task$d,
	last_task: last_task$d,
	word_list: word_list$d,
	daily_goal: daily_goal$d,
	words_count: words_count$d,
	change: change$d,
	new_words_count: new_words_count$d,
	review_last: review_last$d,
	review_previous: review_previous$d,
	start_learning: start_learning$d,
	continue_learning: continue_learning$d,
	free_practice: free_practice$d,
	continue_free_practice: continue_free_practice$d,
	smart_learning: smart_learning$d,
	review: review$d,
	random_review: random_review$d,
	my_dictionaries: my_dictionaries$d,
	manage_dict: manage_dict$d,
	create_personal_dict: create_personal_dict$d,
	recommend: recommend$d,
	articles: articles$d,
	this_week_record: this_week_record$d,
	change_book: change_book$d,
	today_study_time: today_study_time$d,
	total_study_days: total_study_days$d,
	total_study_time: total_study_time$d,
	my_books: my_books$d,
	manage_books: manage_books$d,
	create_personal_book: create_personal_book$d,
	article_management: article_management$d,
	toggle_translation: toggle_translation$d,
	switch_display_mode: switch_display_mode$d,
	line_by_line: line_by_line$d,
	single_line: single_line$d,
	comparison: comparison$d,
	question: question$d,
	study_record: study_record$d,
	play_next_after_end: play_next_after_end$d,
	create_book: create_book$d,
	edit_book: edit_book$d,
	dict_list: dict_list$d,
	book_list: book_list$d,
	word: word$d,
	phonetic: phonetic$d,
	translation: translation$d,
	example_sentence: example_sentence$d,
	phrase: phrase$d,
	synonym: synonym$d,
	related_words: related_words$d,
	etymology: etymology$d,
	add_word: add_word$d,
	edit_word: edit_word$d,
	create_dict: create_dict$d,
	edit_dict: edit_dict$d,
	"import": "Import",
	"export": "Export",
	faq: faq$d,
	is_free: is_free$d,
	cannot_type: cannot_type$d,
	where_is_data: where_is_data$d,
	resource_sharing: resource_sharing$d,
	all_resources: all_resources$d,
	new_concept_english: new_concept_english$d,
	tv_movie: tv_movie$d,
	grammar_learning: grammar_learning$d,
	listening_training: listening_training$d,
	warm_tips: warm_tips$d,
	resources_from_internet: resources_from_internet$d,
	toggle_theme: toggle_theme$d,
	english_document: english_document$d,
	empty_placeholder: empty_placeholder$d,
	custom: custom$d,
	back: back$d,
	total_items: total_items$d,
	batch_delete: batch_delete$d,
	confirm_delete_selected: confirm_delete_selected$d,
	change_order: change_order$d,
	list_order_setting: list_order_setting$d,
	reverse_current_page: reverse_current_page$d,
	reverse_all: reverse_all$d,
	random_current_page: random_current_page$d,
	random_all: random_all$d,
	apply: apply$d,
	add: add$d,
	collect: collect$d,
	uncollect: uncollect$d,
	mark_mastered: mark_mastered$d,
	unmark_mastered: unmark_mastered$d,
	about_thanks: about_thanks$d,
	github_address: github_address$d,
	about_wechat_feedback: about_wechat_feedback$d,
	about_ticket_feedback: about_ticket_feedback$d,
	about_other_channels: about_other_channels$d,
	wait_translation: wait_translation$d,
	migrate_data: migrate_data$d,
	migrate_new_domain: migrate_new_domain$d,
	migrate_old_domain_notice: migrate_old_domain_notice$d,
	migrate_later_notice: migrate_later_notice$d,
	author: author$d,
	features: features$d,
	suitable_for: suitable_for$d,
	open_link: open_link$d,
	qq_group: qq_group$d,
	xiaohongshu: xiaohongshu$d,
	follow_x_account: follow_x_account$d,
	twitter: twitter$d,
	send_email: send_email$d,
	email: email$d,
	xiaohongshu_desc: xiaohongshu_desc$d,
	xiaohongshu_qrcode: xiaohongshu_qrcode$d,
	community_desc: community_desc$d,
	qq_qrcode: qq_qrcode$d,
	wechat_group: wechat_group$d,
	wechat_qrcode: wechat_qrcode$d,
	github_project: github_project$d,
	ie_not_supported: ie_not_supported$d,
	ie_use_modern_browser: ie_use_modern_browser$d,
	download_chrome: download_chrome$d,
	i_understand: i_understand$d,
	ignore_case: ignore_case$d,
	ignore_case_desc: ignore_case_desc$d,
	allow_dictation_tip: allow_dictation_tip$d,
	allow_dictation_tip_desc: allow_dictation_tip_desc$d,
	simple_word_filter: simple_word_filter$d,
	simple_word_filter_desc: simple_word_filter_desc$d,
	simple_word_list: simple_word_list$d,
	words_comma_separated: words_comma_separated$d,
	sound_effect: sound_effect$d,
	pronunciation_accent: pronunciation_accent$d,
	pronunciation_accent_desc: pronunciation_accent_desc$d,
	please_select: please_select$d,
	us_accent: us_accent$d,
	uk_accent: uk_accent$d,
	keyboard_sound: keyboard_sound$d,
	keyboard_sound_effect: keyboard_sound_effect$d,
	volume: volume$d,
	show_prev_next_word: show_prev_next_word$d,
	show_prev_next_word_desc: show_prev_next_word_desc$d,
	disable_practice_setting_dialog: disable_practice_setting_dialog$d,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$d,
	clear_input_on_error: clear_input_on_error$d,
	word_repeat_setting: word_repeat_setting$d,
	repeat_count: repeat_count$d,
	review_ratio: review_ratio$d,
	review_ratio_desc: review_ratio_desc$d,
	word_auto_pronunciation: word_auto_pronunciation$d,
	speed: speed$d,
	effect_sound: effect_sound$d,
	auto_switch: auto_switch$d,
	auto_next_word: auto_next_word$d,
	auto_next_word_desc: auto_next_word_desc$d,
	auto_next_word_time: auto_next_word_time$d,
	auto_next_word_time_desc: auto_next_word_time_desc$d,
	milliseconds: milliseconds$d,
	font_setting: font_setting$d,
	foreign_font: foreign_font$d,
	chinese_font: chinese_font$d,
	auto_play_sentence: auto_play_sentence$d,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$d,
	settings: settings$d,
	please_select_dict: please_select_dict$d,
	learning_settings: learning_settings$d,
	total: total$d,
	estimated: estimated$d,
	days_to_complete: days_to_complete$d,
	from_word: from_word$d,
	start_daily: start_daily$d,
	new_words: new_words$d,
	review_ratio_tooltip: review_ratio_tooltip$d,
	review_ratio_notice_1: review_ratio_notice_1$d,
	review_ratio_notice_2: review_ratio_notice_2$d,
	daily_learning: daily_learning$d,
	learning_progress: learning_progress$d,
	select_from_dict: select_from_dict$d,
	change_in_settings: change_in_settings$d,
	keep_default_no_show: keep_default_no_show$d,
	review_complete: review_complete$d,
	today_task_complete: today_task_complete$d,
	study_duration: study_duration$d,
	accuracy_rate: accuracy_rate$d,
	weekly_study_record: weekly_study_record$d,
	studied: studied$d,
	total_words: total_words$d,
	restart_learning: restart_learning$d,
	another_round: another_round$d,
	return_home: return_home$d,
	import_tutorial: import_tutorial$d,
	import_follow_template: import_follow_template$d,
	import_word_required: import_word_required$d,
	import_translation_hint: import_translation_hint$d,
	import_example_hint: import_example_hint$d,
	import_phrase_hint: import_phrase_hint$d,
	two: two$d,
	lines: lines$d,
	import_other_hint: import_other_hint$d,
	template_download: template_download$d,
	word_import_template: word_import_template$d,
	conflict_notice_title: conflict_notice_title$d,
	keyboard_no_response: keyboard_no_response$d,
	check_plugins_installed: check_plugins_installed$d,
	conflict_plugin_names: conflict_plugin_names$d,
	plugins_intercept_keyboard: plugins_intercept_keyboard$d,
	cause_no_response: cause_no_response$d,
	follow_steps_to_resolve: follow_steps_to_resolve$d,
	try_incognito_mode: try_incognito_mode$d,
	incognito_not_working: incognito_not_working$d,
	click_here: click_here$d,
	feedback_or_wechat: feedback_or_wechat$d,
	incognito_working: incognito_working$d,
	disable_plugin_or_exclude: disable_plugin_or_exclude$d,
	install_extension_manager: install_extension_manager$d,
	chrome_extension: chrome_extension$d,
	edge_extension: edge_extension$d,
	to_manage_extensions: to_manage_extensions$d,
	delete_key_goes_back: delete_key_goes_back$d,
	browser_360_shortcut: browser_360_shortcut$d,
	change_browser_or_shortcut: change_browser_or_shortcut$d,
	please_enter_name: please_enter_name$d,
	name_max_20_chars: name_max_20_chars$d,
	name_already_exists: name_already_exists$d,
	add_success: add_success$d,
	edit_success: edit_success$d,
	edit_and_add_to_dict: edit_and_add_to_dict$d,
	please_fill_complete: please_fill_complete$d,
	name: name$d,
	description: description$d,
	source_language: source_language$d,
	target_language: target_language$d,
	english: english$d,
	german: german$d,
	japanese: japanese$d,
	code: code$d,
	chinese: chinese$d,
	multiple_choice: multiple_choice$d,
	start: start$d,
	countdown: countdown$d,
	seconds: seconds$d,
	submit_exam: submit_exam$d,
	exam_color_hint: exam_color_hint$d,
	items_per_page: items_per_page$d,
	jump_to: jump_to$d,
	page_or_index: page_or_index$d,
	please_fill_original: please_fill_original$d,
	please_fill_title: please_fill_title$d,
	please_fill_content: please_fill_content$d,
	audio_added_success: audio_added_success$d,
	lrc_parse_success: lrc_parse_success$d,
	original_text: original_text$d,
	title: title$d,
	please_fill_original_title: please_fill_original_title$d,
	content: content$d,
	one_sentence_per_line: one_sentence_per_line$d,
	name_config_tip: name_config_tip$d,
	name_config: name_config$d,
	please_paste_original: please_paste_original$d,
	usage_guide: usage_guide$d,
	copy_and_split: copy_and_split$d,
	click: click$d,
	split_sentence: split_sentence$d,
	auto_split: auto_split$d,
	or: or$d,
	manual_split: manual_split$d,
	split_rule: split_rule$d,
	after_edit_click: after_edit_click$d,
	sync_to_result: sync_to_result$d,
	please_fill_translation_title: please_fill_translation_title$d,
	please_fill_translation: please_fill_translation$d,
	translate: translate$d,
	copy_translation_or_click: copy_translation_or_click$d,
	result: result$d,
	editable_auto_sync: editable_auto_sync$d,
	audio: audio$d,
	audio_management: audio_management$d,
	paragraph: paragraph$d,
	set_start_time: set_start_time$d,
	use_prev_end_time: use_prev_end_time$d,
	minus_03s: minus_03s$d,
	end: end$d,
	set_end_time: set_end_time$d,
	edit_audio_align: edit_audio_align$d,
	play: play$d,
	status: status$d,
	sentences_not_translated: sentences_not_translated$d,
	translation_complete: translation_complete$d,
	save_and_next: save_and_next$d,
	no_translation_comparison: no_translation_comparison$d,
	adjust_audio_timeline: adjust_audio_timeline$d,
	audio_timeline_tutorial: audio_timeline_tutorial$d,
	start_time: start_time$d,
	jump_to_seconds: jump_to_seconds$d,
	use_prev_end_seconds: use_prev_end_seconds$d,
	decrease_03s: decrease_03s$d,
	increase_03s: increase_03s$d,
	record: record$d,
	end_time: end_time$d,
	audio_upload_notice: audio_upload_notice$d,
	upload_audio: upload_audio$d,
	upload_lrc: upload_lrc$d,
	name_management: name_management$d,
	name_ignore_config_desc: name_ignore_config_desc$d,
	add_name: add_name$d,
	enter_name: enter_name$d,
	collect_word: collect_word$d,
	copy: copy$d,
	copy_sentence: copy_sentence$d,
	copied: copied$d,
	copy_word: copy_word$d,
	start_from_here: start_from_here$d,
	play_sentence: play_sentence$d,
	grammar_analysis: grammar_analysis$d,
	copied_open_grammar: copied_open_grammar$d,
	youdao_translate: youdao_translate$d,
	translate_word: translate_word$d,
	translate_sentence: translate_sentence$d,
	restart_practice: restart_practice$d,
	next_article: next_article$d,
	learning_record: learning_record$d,
	total_learning_time: total_learning_time$d,
	current: current$d,
	show_questions: show_questions$d,
	explanation: explanation$d,
	encouragement_95: encouragement_95$d,
	encouragement_85: encouragement_85$d,
	encouragement_70: encouragement_70$d,
	encouragement_default: encouragement_default$d,
	daily_task_complete: daily_task_complete$d,
	weekly_record: weekly_record$d,
	study_progress: study_progress$d,
	relearn: relearn$d,
	start_from_beginning: start_from_beginning$d,
	another_group: another_group$d,
	back_to_home: back_to_home$d,
	know_word_tip: know_word_tip$d,
	press_delete_reinput: press_delete_reinput$d,
	press_space_continue: press_space_continue$d,
	shortcut: shortcut$d,
	i_know: i_know$d,
	i_dont_know: i_dont_know$d,
	phrases: phrases$d,
	synonyms: synonyms$d,
	word_root: word_root$d,
	review_wrong_words: review_wrong_words$d,
	collapse: collapse$d,
	expand: expand$d,
	minutes: minutes$d,
	time: time$d,
	errors: errors$d,
	skip_to_next_stage: skip_to_next_stage$d,
	skip_word: skip_word$d,
	toggle_dictation_mode: toggle_dictation_mode$d,
	send_failed: send_failed$d,
	send_code_failed: send_code_failed$d,
	sending: sending$d,
	send_code: send_code$d,
	agree_terms_notice: agree_terms_notice$d,
	user_agreement: user_agreement$d,
	and: and$d,
	privacy_policy: privacy_policy$d,
	important_notice: important_notice$d,
	dont_remind: dont_remind$d,
	function_desc: function_desc$d,
	qa1_a: qa1_a$d,
	qa1_q1: qa1_q1$d,
	qa1_q2: qa1_q2$d,
	qa2_a: qa2_a$d,
	qa3_a: qa3_a$d,
	qa3_q1: qa3_q1$d,
	qa3_q2: qa3_q2$d,
	qa3_q3: qa3_q3$d,
	qa4_a: qa4_a$d,
	qa4_q1: qa4_q1$d,
	qa4_q2: qa4_q2$d,
	qa5_a: qa5_a$d,
	qa5_q1: qa5_q1$d,
	qa5_q2: qa5_q2$d,
	qa5_q3: qa5_q3$d,
	qa5_q4: qa5_q4$d,
	qa6_a: qa6_a$d,
	qa7_a: qa7_a$d,
	qa7_q1: qa7_q1$d,
	qa7_q2: qa7_q2$d,
	qa7_q3: qa7_q3$d,
	qa8_a: qa8_a$d,
	qa8_q1: qa8_q1$d,
	qa8_q2: qa8_q2$d,
	qa8_q3: qa8_q3$d,
	qa9_a: qa9_a$d,
	qa9_q: qa9_q$d,
	qa10_a: qa10_a$d,
	qa10_q1: qa10_q1$d,
	qa10_q2: qa10_q2$d,
	qa11_a: qa11_a$d,
	qa11_q: qa11_q$d,
	qa12_a: qa12_a$d,
	qa12_q: qa12_q$d,
	qa13_a: qa13_a$d,
	qa13_q1: qa13_q1$d,
	qa13_q2: qa13_q2$d,
	qa13_q3: qa13_q3$d,
	qa13_q4: qa13_q4$d
};

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$d,
  about_other_channels: about_other_channels$d,
  about_thanks: about_thanks$d,
  about_ticket_feedback: about_ticket_feedback$d,
  about_wechat_feedback: about_wechat_feedback$d,
  account_placeholder: account_placeholder$d,
  accuracy_rate: accuracy_rate$d,
  add: add$d,
  add_name: add_name$d,
  add_success: add_success$d,
  add_word: add_word$d,
  adjust_audio_timeline: adjust_audio_timeline$d,
  after_edit_click: after_edit_click$d,
  agree_terms_notice: agree_terms_notice$d,
  all_resources: all_resources$d,
  allow_dictation_tip: allow_dictation_tip$d,
  allow_dictation_tip_desc: allow_dictation_tip_desc$d,
  and: and$d,
  another_group: another_group$d,
  another_round: another_round$d,
  app_desc: app_desc$d,
  app_name: app_name$d,
  apply: apply$d,
  article_management: article_management$d,
  article_settings: article_settings$d,
  articles: articles$d,
  audio: audio$d,
  audio_added_success: audio_added_success$d,
  audio_management: audio_management$d,
  audio_timeline_tutorial: audio_timeline_tutorial$d,
  audio_upload_notice: audio_upload_notice$d,
  author: author$d,
  auto_next_word: auto_next_word$d,
  auto_next_word_desc: auto_next_word_desc$d,
  auto_next_word_time: auto_next_word_time$d,
  auto_next_word_time_desc: auto_next_word_time_desc$d,
  auto_play_sentence: auto_play_sentence$d,
  auto_register_notice: auto_register_notice$d,
  auto_split: auto_split$d,
  auto_switch: auto_switch$d,
  back: back$d,
  back_to_home: back_to_home$d,
  batch_delete: batch_delete$d,
  book_list: book_list$d,
  browser_360_shortcut: browser_360_shortcut$d,
  cancel: cancel$d,
  cannot_type: cannot_type$d,
  cause_no_response: cause_no_response$d,
  change: change$d,
  change_book: change_book$d,
  change_browser_or_shortcut: change_browser_or_shortcut$d,
  change_in_settings: change_in_settings$d,
  change_order: change_order$d,
  change_progress: change_progress$d,
  check_plugins_installed: check_plugins_installed$d,
  chinese: chinese$d,
  chinese_font: chinese_font$d,
  chrome_extension: chrome_extension$d,
  clear_input_on_error: clear_input_on_error$d,
  click: click$d,
  click_here: click_here$d,
  click_here_when_done: click_here_when_done$d,
  close: close$d,
  cn_limit_no1: cn_limit_no1$d,
  cn_limit_no2: cn_limit_no2$d,
  code: code$d,
  code_login: code_login$d,
  code_placeholder: code_placeholder$d,
  collapse: collapse$d,
  collect: collect$d,
  collect_word: collect_word$d,
  community_desc: community_desc$d,
  comparison: comparison$d,
  completed_review_stage: completed_review_stage$d,
  confirm: confirm$d,
  confirm_delete_selected: confirm_delete_selected$d,
  confirm_new_password: confirm_new_password$d,
  confirm_password_placeholder: confirm_password_placeholder$d,
  conflict_notice_title: conflict_notice_title$d,
  conflict_plugin_names: conflict_plugin_names$d,
  content: content$d,
  continue_free_practice: continue_free_practice$d,
  continue_learning: continue_learning$d,
  copied: copied$d,
  copied_open_grammar: copied_open_grammar$d,
  copy: copy$d,
  copy_and_split: copy_and_split$d,
  copy_sentence: copy_sentence$d,
  copy_translation_or_click: copy_translation_or_click$d,
  copy_word: copy_word$d,
  countdown: countdown$d,
  create_book: create_book$d,
  create_dict: create_dict$d,
  create_personal_book: create_personal_book$d,
  create_personal_dict: create_personal_dict$d,
  current: current$d,
  current_progress: current_progress$d,
  custom: custom$d,
  daily_goal: daily_goal$d,
  daily_learning: daily_learning$d,
  daily_task_complete: daily_task_complete$d,
  data_management: data_management$d,
  data_saved_locally: data_saved_locally$d,
  days_to_complete: days_to_complete$d,
  decrease_03s: decrease_03s$d,
  default: en,
  delete_key_goes_back: delete_key_goes_back$d,
  description: description$d,
  dict_list: dict_list$d,
  disable_plugin_or_exclude: disable_plugin_or_exclude$d,
  disable_practice_setting_dialog: disable_practice_setting_dialog$d,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$d,
  document: document$d,
  dont_remind: dont_remind$d,
  download_chrome: download_chrome$d,
  edge_extension: edge_extension$d,
  edit: edit$d,
  edit_and_add_to_dict: edit_and_add_to_dict$d,
  edit_audio_align: edit_audio_align$d,
  edit_book: edit_book$d,
  edit_dict: edit_dict$d,
  edit_success: edit_success$d,
  edit_word: edit_word$d,
  editable_auto_sync: editable_auto_sync$d,
  effect_sound: effect_sound$d,
  email: email$d,
  empty_placeholder: empty_placeholder$d,
  encouragement_70: encouragement_70$d,
  encouragement_85: encouragement_85$d,
  encouragement_95: encouragement_95$d,
  encouragement_default: encouragement_default$d,
  end: end$d,
  end_time: end_time$d,
  english: english$d,
  english_document: english_document$d,
  enter_name: enter_name$d,
  enter_website: enter_website$d,
  errors: errors$d,
  estimated: estimated$d,
  estimated_completion: estimated_completion$d,
  etymology: etymology$d,
  exam_color_hint: exam_color_hint$d,
  example_sentence: example_sentence$d,
  expand: expand$d,
  explanation: explanation$d,
  export_data_backup: export_data_backup$d,
  faq: faq$d,
  features: features$d,
  feedback: feedback$d,
  feedback_or_wechat: feedback_or_wechat$d,
  follow_steps_to_resolve: follow_steps_to_resolve$d,
  follow_x_account: follow_x_account$d,
  font_setting: font_setting$d,
  foreign_font: foreign_font$d,
  forgot_password: forgot_password$d,
  free_practice: free_practice$d,
  from_word: from_word$d,
  function_desc: function_desc$d,
  general_settings: general_settings$d,
  german: german$d,
  github_address: github_address$d,
  github_project: github_project$d,
  grammar_analysis: grammar_analysis$d,
  grammar_learning: grammar_learning$d,
  help: help$d,
  home_article_practice: home_article_practice$d,
  home_article_practice_desc1: home_article_practice_desc1$d,
  home_article_practice_desc2: home_article_practice_desc2$d,
  home_article_practice_desc3: home_article_practice_desc3$d,
  home_collection: home_collection$d,
  home_collection_desc1: home_collection_desc1$d,
  home_collection_desc2: home_collection_desc2$d,
  home_collection_desc3: home_collection_desc3$d,
  home_customization: home_customization$d,
  home_customization_desc1: home_customization_desc1$d,
  home_customization_desc2: home_customization_desc2$d,
  home_customization_desc3: home_customization_desc3$d,
  home_design: home_design$d,
  home_design_desc1: home_design_desc1$d,
  home_design_desc2: home_design_desc2$d,
  home_design_desc3: home_design_desc3$d,
  home_free_opensource: home_free_opensource$d,
  home_free_opensource_desc1: home_free_opensource_desc1$d,
  home_free_opensource_desc2: home_free_opensource_desc2$d,
  home_free_opensource_desc3: home_free_opensource_desc3$d,
  home_personalized: home_personalized$d,
  home_personalized_desc1: home_personalized_desc1$d,
  home_personalized_desc2: home_personalized_desc2$d,
  home_personalized_desc3: home_personalized_desc3$d,
  home_vocabulary: home_vocabulary$d,
  home_vocabulary_desc: home_vocabulary_desc$d,
  home_word_practice: home_word_practice$d,
  home_word_practice_desc1: home_word_practice_desc1$d,
  home_word_practice_desc2: home_word_practice_desc2$d,
  home_word_practice_desc3: home_word_practice_desc3$d,
  i_dont_know: i_dont_know$d,
  i_know: i_know$d,
  i_understand: i_understand$d,
  ie_not_supported: ie_not_supported$d,
  ie_use_modern_browser: ie_use_modern_browser$d,
  ignore_case: ignore_case$d,
  ignore_case_desc: ignore_case_desc$d,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$d,
  import_data_restore: import_data_restore$d,
  import_example_hint: import_example_hint$d,
  import_follow_template: import_follow_template$d,
  import_other_hint: import_other_hint$d,
  import_phrase_hint: import_phrase_hint$d,
  import_translation_hint: import_translation_hint$d,
  import_tutorial: import_tutorial$d,
  import_warning: import_warning$d,
  import_word_required: import_word_required$d,
  important_notice: important_notice$d,
  incognito_not_working: incognito_not_working$d,
  incognito_working: incognito_working$d,
  increase_03s: increase_03s$d,
  install_extension_manager: install_extension_manager$d,
  introduction: introduction$d,
  is_free: is_free$d,
  items_per_page: items_per_page$d,
  japanese: japanese$d,
  jump_to: jump_to$d,
  jump_to_seconds: jump_to_seconds$d,
  keep_default_no_show: keep_default_no_show$d,
  keyboard_no_response: keyboard_no_response$d,
  keyboard_sound: keyboard_sound$d,
  keyboard_sound_effect: keyboard_sound_effect$d,
  know_word_tip: know_word_tip$d,
  last_task: last_task$d,
  learn: learn$d,
  learned: learned$d,
  learning_progress: learning_progress$d,
  learning_record: learning_record$d,
  learning_settings: learning_settings$d,
  line_by_line: line_by_line$d,
  lines: lines$d,
  list_order_setting: list_order_setting$d,
  listening_training: listening_training$d,
  loading: loading$d,
  local_data_detected: local_data_detected$d,
  login: login$d,
  login_again: login_again$d,
  login_cancelled: login_cancelled$d,
  lrc_parse_success: lrc_parse_success$d,
  manage_books: manage_books$d,
  manage_dict: manage_dict$d,
  manual_split: manual_split$d,
  mark_mastered: mark_mastered$d,
  migrate_data: migrate_data$d,
  migrate_later_notice: migrate_later_notice$d,
  migrate_new_domain: migrate_new_domain$d,
  migrate_old_domain_notice: migrate_old_domain_notice$d,
  milliseconds: milliseconds$d,
  minus_03s: minus_03s$d,
  minutes: minutes$d,
  more: more$d,
  multiple_choice: multiple_choice$d,
  my_books: my_books$d,
  my_dictionaries: my_dictionaries$d,
  name: name$d,
  name_already_exists: name_already_exists$d,
  name_config: name_config$d,
  name_config_tip: name_config_tip$d,
  name_ignore_config_desc: name_ignore_config_desc$d,
  name_management: name_management$d,
  name_max_20_chars: name_max_20_chars$d,
  new_concept_english: new_concept_english$d,
  new_password_placeholder: new_password_placeholder$d,
  new_words: new_words$d,
  new_words_count: new_words_count$d,
  next_article: next_article$d,
  no_dict_selected: no_dict_selected$d,
  no_shortcut_set: no_shortcut_set$d,
  no_sync: no_sync$d,
  no_translation_comparison: no_translation_comparison$d,
  one_sentence_per_line: one_sentence_per_line$d,
  open_link: open_link$d,
  or: or$d,
  original_text: original_text$d,
  page_or_index: page_or_index$d,
  paragraph: paragraph$d,
  password_login: password_login$d,
  password_placeholder: password_placeholder$d,
  phone_placeholder: phone_placeholder$d,
  phonetic: phonetic$d,
  phrase: phrase$d,
  phrases: phrases$d,
  play: play$d,
  play_next_after_end: play_next_after_end$d,
  play_sentence: play_sentence$d,
  please_enter_name: please_enter_name$d,
  please_fill_complete: please_fill_complete$d,
  please_fill_content: please_fill_content$d,
  please_fill_original: please_fill_original$d,
  please_fill_original_title: please_fill_original_title$d,
  please_fill_title: please_fill_title$d,
  please_fill_translation: please_fill_translation$d,
  please_fill_translation_title: please_fill_translation_title$d,
  please_paste_original: please_paste_original$d,
  please_select: please_select$d,
  please_select_dict: please_select_dict$d,
  plugins_intercept_keyboard: plugins_intercept_keyboard$d,
  practice: practice$d,
  press_delete_reinput: press_delete_reinput$d,
  press_key_to_set: press_key_to_set$d,
  press_space_continue: press_space_continue$d,
  privacy_policy: privacy_policy$d,
  pronunciation_accent: pronunciation_accent$d,
  pronunciation_accent_desc: pronunciation_accent_desc$d,
  qa10_a: qa10_a$d,
  qa10_q1: qa10_q1$d,
  qa10_q2: qa10_q2$d,
  qa11_a: qa11_a$d,
  qa11_q: qa11_q$d,
  qa12_a: qa12_a$d,
  qa12_q: qa12_q$d,
  qa13_a: qa13_a$d,
  qa13_q1: qa13_q1$d,
  qa13_q2: qa13_q2$d,
  qa13_q3: qa13_q3$d,
  qa13_q4: qa13_q4$d,
  qa1_a: qa1_a$d,
  qa1_q1: qa1_q1$d,
  qa1_q2: qa1_q2$d,
  qa2_a: qa2_a$d,
  qa3_a: qa3_a$d,
  qa3_q1: qa3_q1$d,
  qa3_q2: qa3_q2$d,
  qa3_q3: qa3_q3$d,
  qa4_a: qa4_a$d,
  qa4_q1: qa4_q1$d,
  qa4_q2: qa4_q2$d,
  qa5_a: qa5_a$d,
  qa5_q1: qa5_q1$d,
  qa5_q2: qa5_q2$d,
  qa5_q3: qa5_q3$d,
  qa5_q4: qa5_q4$d,
  qa6_a: qa6_a$d,
  qa7_a: qa7_a$d,
  qa7_q1: qa7_q1$d,
  qa7_q2: qa7_q2$d,
  qa7_q3: qa7_q3$d,
  qa8_a: qa8_a$d,
  qa8_q1: qa8_q1$d,
  qa8_q2: qa8_q2$d,
  qa8_q3: qa8_q3$d,
  qa9_a: qa9_a$d,
  qa9_q: qa9_q$d,
  qq_group: qq_group$d,
  qq_qrcode: qq_qrcode$d,
  question: question$d,
  random_all: random_all$d,
  random_current_page: random_current_page$d,
  random_review: random_review$d,
  recommend: recommend$d,
  record: record$d,
  register: register$d,
  register_account: register_account$d,
  register_new_account: register_new_account$d,
  related_words: related_words$d,
  relearn: relearn$d,
  repeat_count: repeat_count$d,
  reset_password: reset_password$d,
  resource_sharing: resource_sharing$d,
  resources_from_internet: resources_from_internet$d,
  restart_learning: restart_learning$d,
  restart_practice: restart_practice$d,
  restore_default: restore_default$d,
  result: result$d,
  return_home: return_home$d,
  reverse_all: reverse_all$d,
  reverse_current_page: reverse_current_page$d,
  review: review$d,
  review_complete: review_complete$d,
  review_last: review_last$d,
  review_previous: review_previous$d,
  review_ratio: review_ratio$d,
  review_ratio_desc: review_ratio_desc$d,
  review_ratio_notice_1: review_ratio_notice_1$d,
  review_ratio_notice_2: review_ratio_notice_2$d,
  review_ratio_tooltip: review_ratio_tooltip$d,
  review_wrong_words: review_wrong_words$d,
  save: save$d,
  save_and_next: save_and_next$d,
  scan_success: scan_success$d,
  search: search$d,
  seconds: seconds$d,
  select_dict: select_dict$d,
  select_dict_to_start: select_dict_to_start$d,
  select_from_dict: select_from_dict$d,
  send_code: send_code$d,
  send_code_failed: send_code_failed$d,
  send_email: send_email$d,
  send_failed: send_failed$d,
  sending: sending$d,
  sentences_not_translated: sentences_not_translated$d,
  set_end_time: set_end_time$d,
  set_password_placeholder: set_password_placeholder$d,
  set_start_time: set_start_time$d,
  setting: setting$d,
  settings: settings$d,
  shortcut: shortcut$d,
  shortcut_key: shortcut_key$d,
  shortcut_settings: shortcut_settings$d,
  show_prev_next_word: show_prev_next_word$d,
  show_prev_next_word_desc: show_prev_next_word_desc$d,
  show_questions: show_questions$d,
  simple_word_filter: simple_word_filter$d,
  simple_word_filter_desc: simple_word_filter_desc$d,
  simple_word_list: simple_word_list$d,
  single_line: single_line$d,
  skip_to_next_stage: skip_to_next_stage$d,
  skip_word: skip_word$d,
  smart_learning: smart_learning$d,
  sound_effect: sound_effect$d,
  source_language: source_language$d,
  speed: speed$d,
  split_rule: split_rule$d,
  split_sentence: split_sentence$d,
  start: start$d,
  start_article_practice: start_article_practice$d,
  start_daily: start_daily$d,
  start_from_beginning: start_from_beginning$d,
  start_from_here: start_from_here$d,
  start_learning: start_learning$d,
  start_time: start_time$d,
  start_word_practice: start_word_practice$d,
  status: status$d,
  studied: studied$d,
  study_duration: study_duration$d,
  study_progress: study_progress$d,
  study_record: study_record$d,
  submit_exam: submit_exam$d,
  suitable_for: suitable_for$d,
  switch_display_mode: switch_display_mode$d,
  sync: sync$d,
  sync_data: sync_data$d,
  sync_failed: sync_failed$d,
  sync_success: sync_success$d,
  sync_to_account_question: sync_to_account_question$d,
  sync_to_result: sync_to_result$d,
  syncing: syncing$d,
  synonym: synonym$d,
  synonyms: synonyms$d,
  tap_allow_in_wechat: tap_allow_in_wechat$d,
  target_language: target_language$d,
  template_download: template_download$d,
  test: test$d,
  this_week_record: this_week_record$d,
  time: time$d,
  title: title$d,
  to_manage_extensions: to_manage_extensions$d,
  today_study_time: today_study_time$d,
  today_task: today_task$d,
  today_task_complete: today_task_complete$d,
  toggle_dictation_mode: toggle_dictation_mode$d,
  toggle_theme: toggle_theme$d,
  toggle_translation: toggle_translation$d,
  total: total$d,
  total_items: total_items$d,
  total_learning_time: total_learning_time$d,
  total_study_days: total_study_days$d,
  total_study_time: total_study_time$d,
  total_words: total_words$d,
  translate: translate$d,
  translate_sentence: translate_sentence$d,
  translate_word: translate_word$d,
  translation: translation$d,
  translation_complete: translation_complete$d,
  try_incognito_mode: try_incognito_mode$d,
  tv_movie: tv_movie$d,
  twitter: twitter$d,
  two: two$d,
  uk_accent: uk_accent$d,
  uncollect: uncollect$d,
  unmark_mastered: unmark_mastered$d,
  update_log: update_log$d,
  upload_audio: upload_audio$d,
  upload_lrc: upload_lrc$d,
  us_accent: us_accent$d,
  usage_guide: usage_guide$d,
  use_prev_end_seconds: use_prev_end_seconds$d,
  use_prev_end_time: use_prev_end_time$d,
  user_agreement: user_agreement$d,
  volume: volume$d,
  wait_translation: wait_translation$d,
  warm_tips: warm_tips$d,
  wechat_group: wechat_group$d,
  wechat_qrcode: wechat_qrcode$d,
  wechat_scan_login: wechat_scan_login$d,
  weekly_record: weekly_record$d,
  weekly_study_record: weekly_study_record$d,
  where_is_data: where_is_data$d,
  word: word$d,
  word_auto_pronunciation: word_auto_pronunciation$d,
  word_import_template: word_import_template$d,
  word_list: word_list$d,
  word_repeat_setting: word_repeat_setting$d,
  word_root: word_root$d,
  word_settings: word_settings$d,
  words: words$d,
  words_comma_separated: words_comma_separated$d,
  words_count: words_count$d,
  xiaohongshu: xiaohongshu$d,
  xiaohongshu_desc: xiaohongshu_desc$d,
  xiaohongshu_qrcode: xiaohongshu_qrcode$d,
  youdao_translate: youdao_translate$d
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$c = "学习英语，一次敲击，一点进步，开源单词与文章练习工具";
var app_name$c = "Type Words";
var start_word_practice$c = "开始单词练习";
var start_article_practice$c = "开始文章练习";
var home_word_practice$c = "单词练习";
var home_word_practice_desc1$c = "练习模式：跟打/听写/自测/默写";
var home_word_practice_desc2$c = "智能学习：智能规划复习与默写";
var home_word_practice_desc3$c = "自由学习：不受限制，自行规划";
var home_article_practice$c = "文章练习";
var home_article_practice_desc1$c = "内置常见书籍，也可自行添加文章";
var home_article_practice_desc2$c = "跟打 + 默写双模式，让背诵更高效";
var home_article_practice_desc3$c = "支持边听边默写，强化记忆";
var home_collection$c = "收藏、错词本、已掌握";
var home_collection_desc1$c = "输入错误自动添加到错词本";
var home_collection_desc2$c = "主动添加到已掌握，后续自动跳过";
var home_collection_desc3$c = "主动添加到收藏中，以便巩固复习";
var home_vocabulary$c = "海量词库";
var home_vocabulary_desc$c = "内置小学、初中、高中、四六级、考研、雅思、托福、GRE、GMAT、SAT、BEC、专四、专八等词库";
var home_free_opensource$c = "免费开源";
var home_free_opensource_desc1$c = "完全开源，可审查、可修改";
var home_free_opensource_desc2$c = "免费使用";
var home_free_opensource_desc3$c = "私有部署";
var home_customization$c = "高度自由";
var home_customization_desc1$c = "丰富的键盘音效";
var home_customization_desc2$c = "可自定义快捷键";
var home_customization_desc3$c = "高度定制化的设置选项";
var home_design$c = "简洁高效";
var home_design_desc1$c = "简洁设计，现代化UI";
var home_design_desc2$c = "界面清爽，操作简单";
var home_design_desc3$c = "不强制关注任何平台";
var home_personalized$c = "个性学习";
var home_personalized_desc1$c = "自由添加词典与文章";
var home_personalized_desc2$c = "定制个性学习计划";
var home_personalized_desc3$c = "多种学习复习策略";
var cn_limit_no1$c = "川公网安备51015602001426号";
var cn_limit_no2$c = "蜀ICP备2025157466号-2";
var setting$c = "设置";
var edit$c = "编辑";
var cancel$c = "取消";
var confirm$c = "确认";
var save$c = "保存";
var close$c = "关闭";
var search$c = "搜索";
var more$c = "更多";
var loading$c = "加载中";
var introduction$c = "介绍";
var learn$c = "学习";
var practice$c = "练习";
var test$c = "测试";
var feedback$c = "反馈";
var document$c = "资料";
var help$c = "帮助";
var about$c = "关于";
var login$c = "登录";
var register$c = "注册";
var register_account$c = "注册账号";
var register_new_account$c = "注册新账号";
var code_login$c = "验证码登录";
var password_login$c = "密码登录";
var phone_placeholder$c = "请输入手机号";
var code_placeholder$c = "请输入验证码";
var account_placeholder$c = "请输入手机号/邮箱地址";
var password_placeholder$c = "请输入密码";
var auto_register_notice$c = "未注册的手机号将自动注册";
var forgot_password$c = "忘记密码?";
var reset_password$c = "重置密码";
var set_password_placeholder$c = "请设置密码";
var confirm_password_placeholder$c = "请再次输入密码";
var new_password_placeholder$c = "请输入新密码";
var confirm_new_password$c = "请再次输入新密码";
var wechat_scan_login$c = "微信扫码登录";
var scan_success$c = "扫描成功";
var tap_allow_in_wechat$c = "微信中轻触允许即可登录";
var login_cancelled$c = "你已取消此次登录";
var login_again$c = "再次登录";
var sync_data$c = "同步数据";
var local_data_detected$c = "检测到您本地存在使用记录";
var sync_to_account_question$c = "是否需要同步到账户中？";
var no_sync$c = "不同步";
var sync$c = "同步";
var syncing$c = "正在导入中";
var sync_failed$c = "同步失败";
var sync_success$c = "同步成功";
var enter_website$c = "进入网站";
var general_settings$c = "通用设置";
var word_settings$c = "单词设置";
var article_settings$c = "文章设置";
var data_management$c = "数据管理";
var shortcut_settings$c = "快捷键设置";
var update_log$c = "更新日志";
var shortcut_key$c = "快捷键(点击可修改)";
var no_shortcut_set$c = "未设置快捷键";
var press_key_to_set$c = "按键盘进行设置";
var click_here_when_done$c = "设置完成点击这里";
var restore_default$c = "恢复默认";
var data_saved_locally$c = "所有用户数据保存在本地浏览器中";
var export_data_backup$c = "导出数据备份(ZIP)";
var import_data_restore$c = "导入数据恢复";
var import_warning$c = "导入数据将完全覆盖当前所有数据，请谨慎操作";
var words$c = "单词";
var no_dict_selected$c = "当前无正在学习的词典";
var select_dict_to_start$c = "请选择一本词典开始学习";
var select_dict$c = "选择词典";
var change_progress$c = "更改进度";
var estimated_completion$c = "预计完成日期";
var current_progress$c = "当前进度";
var learned$c = "已学";
var completed_review_stage$c = "已学完，进入总复习阶段";
var today_task$c = "今日任务";
var last_task$c = "上次任务";
var word_list$c = "词表";
var daily_goal$c = "每日目标";
var words_count$c = "个单词";
var change$c = "更改";
var new_words_count$c = "新词数";
var review_last$c = "复习上次";
var review_previous$c = "复习之前";
var start_learning$c = "开始学习";
var continue_learning$c = "继续学习";
var free_practice$c = "自由练习";
var continue_free_practice$c = "继续自由练习";
var smart_learning$c = "智能学习";
var review$c = "复习";
var random_review$c = "随机复习";
var my_dictionaries$c = "我的词典";
var manage_dict$c = "管理词典";
var create_personal_dict$c = "创建个人词典";
var recommend$c = "推荐";
var articles$c = "文章";
var this_week_record$c = "本周学习记录";
var change_book$c = "更换";
var today_study_time$c = "今日学习时长";
var total_study_days$c = "总学习天数";
var total_study_time$c = "总学习时长";
var my_books$c = "我的书籍";
var manage_books$c = "管理书籍";
var create_personal_book$c = "创建个人书籍";
var article_management$c = "文章管理";
var toggle_translation$c = "开关释义显示";
var switch_display_mode$c = "切换显示模式";
var line_by_line$c = "逐行显示";
var single_line$c = "单行显示";
var comparison$c = "对照显示";
var question$c = "问题";
var study_record$c = "学习记录";
var play_next_after_end$c = "结束后播放下一篇";
var create_book$c = "创建书籍";
var edit_book$c = "修改书籍";
var dict_list$c = "词典列表";
var book_list$c = "书籍列表";
var word$c = "单词";
var phonetic$c = "音标";
var translation$c = "翻译";
var example_sentence$c = "例句";
var phrase$c = "短语";
var synonym$c = "近义词";
var related_words$c = "同根词";
var etymology$c = "词源";
var add_word$c = "添加单词";
var edit_word$c = "修改单词";
var create_dict$c = "创建词典";
var edit_dict$c = "修改词典";
var faq$c = "常见问题解答";
var is_free$c = "网站是免费的吗？";
var cannot_type$c = "无法输入，按下键盘没有反应？";
var where_is_data$c = "数据在哪？怎么在多台电脑/设备之间使用？";
var resource_sharing$c = "英语学习资源分享";
var all_resources$c = "全部资源";
var new_concept_english$c = "新概念英语";
var tv_movie$c = "电视/电影";
var grammar_learning$c = "语法学习";
var listening_training$c = "听力训练";
var warm_tips$c = "温馨提示";
var resources_from_internet$c = "所有资源均来自互联网收集，仅供学习交流使用";
var toggle_theme$c = "切换主题";
var english_document$c = "英语资料";
var empty_placeholder$c = "空荡荡的~";
var custom$c = "自定义";
var back$c = "返回";
var total_items$c = "条";
var batch_delete$c = "批量删除";
var confirm_delete_selected$c = "确认删除所有选中数据？";
var change_order$c = "改变顺序";
var list_order_setting$c = "列表顺序设置";
var reverse_current_page$c = "翻转当前页";
var reverse_all$c = "翻转所有";
var random_current_page$c = "随机当前页";
var random_all$c = "随机所有";
var apply$c = "应用";
var add$c = "添加";
var collect$c = "收藏";
var uncollect$c = "取消收藏";
var mark_mastered$c = "标记为已掌握";
var unmark_mastered$c = "取消标记已掌握";
var about_thanks$c = "感谢使用本项目！本项目是开源项目，免费使用，如果觉得有帮助，请在 GitHub 点个 Star，您的支持是我持续改进的动力！";
var github_address$c = "GitHub地址：";
var about_wechat_feedback$c = "微信反馈：";
var about_ticket_feedback$c = "工单反馈：";
var about_other_channels$c = "其他渠道：";
var wait_translation$c = "请等候翻译完成";
var migrate_data$c = "迁移数据";
var migrate_new_domain$c = "本网站已启用新域名";
var migrate_old_domain_notice$c = "老域名即将停用，由于浏览器安全限制，新老网站数据无法互通，需要您手动点击转移数据";
var migrate_later_notice$c = "如果您不想此时迁移，关闭弹窗后，您可随时在\"设置\" -> \"数据管理\" 里面再次进行";
var author$c = "作者：";
var features$c = "特点：";
var suitable_for$c = "适合：";
var open_link$c = "打开链接";
var qq_group$c = "QQ群";
var xiaohongshu$c = "小红书";
var follow_x_account$c = "关注我的 X 账户 {x_account}";
var twitter$c = "推特";
var send_email$c = "发送邮件到 {email}";
var email$c = "邮箱";
var xiaohongshu_desc$c = "关注小红书后，您可以获得开发团队的最新动态和更新内容，反馈您的使用体验和建议，帮助我们改进产品，同时也能够及时了解我们的最新动态和更新内容。";
var xiaohongshu_qrcode$c = "小红书二维码";
var community_desc$c = "加入我们的用户社群后，您可以与我们的开发团队进行沟通，分享您的使用体验和建议，帮助我们改进产品，同时也能够及时了解我们的最新动态和更新内容。";
var qq_qrcode$c = "QQ群二维码";
var wechat_group$c = "微信群";
var wechat_qrcode$c = "微信群二维码";
var github_project$c = "GITHUB 项目地址";
var ie_not_supported$c = "不支持 IE 浏览器";
var ie_use_modern_browser$c = "Type Words 使用现代技术构建，请使用 Chrome、Edge、Firefox 或 Safari 等现代浏览器访问。";
var download_chrome$c = "下载 Chrome";
var i_understand$c = "我知道了";
var ignore_case$c = "忽略大小写";
var ignore_case_desc$c = "开启后，输入时不区分大小写，如输入\"hello\"和\"Hello\"都会被认为是正确的";
var allow_dictation_tip$c = "允许默写模式下显示提示";
var allow_dictation_tip_desc$c = "开启后，可以通过将鼠标移动到单词上或者按快捷键显示正确答案";
var simple_word_filter$c = "简单词过滤";
var simple_word_filter_desc$c = "开启后，练习的单词中不会包含简单词；文章统计的总词数中不会包含简单词";
var simple_word_list$c = "简单词列表";
var words_comma_separated$c = "多个单词用英文逗号隔号";
var sound_effect$c = "音效";
var pronunciation_accent$c = "单词/句子发音口音";
var pronunciation_accent_desc$c = "仅单词生效，文章固定美音";
var please_select$c = "请选择";
var us_accent$c = "美音";
var uk_accent$c = "英音";
var keyboard_sound$c = "按键音";
var keyboard_sound_effect$c = "按键音效";
var volume$c = "音量";
var show_prev_next_word$c = "显示上一个/下一个单词";
var show_prev_next_word_desc$c = "开启后，练习中会在上方显示上一个/下一个单词";
var disable_practice_setting_dialog$c = "不默认显示练习设置弹框";
var disable_practice_setting_dialog_desc$c = "在词典详情页面，点击学习按钮后，是否显示练习设置弹框";
var clear_input_on_error$c = "输入错误时，清空已输入内容";
var word_repeat_setting$c = "单词循环设置";
var repeat_count$c = "循环次数";
var review_ratio$c = "复习比";
var review_ratio_desc$c = "复习词与新词的比例，修改后下次学习生效";
var word_auto_pronunciation$c = "单词自动发音";
var speed$c = "倍速";
var effect_sound$c = "效果音（输入错误、完成时的音效）";
var auto_switch$c = "自动切换";
var auto_next_word$c = "自动切换下一个单词";
var auto_next_word_desc$c = "仅在跟写时生效，听写、自测、默写均不会自动切换，需要手动按空格键切换";
var auto_next_word_time$c = "自动切换下一个单词时间";
var auto_next_word_time_desc$c = "正确输入单词后，自动跳转下一个单词的时间";
var milliseconds$c = "毫秒";
var font_setting$c = "字体设置";
var foreign_font$c = "外语字体";
var chinese_font$c = "中文字体";
var auto_play_sentence$c = "自动播放句子";
var ignore_symbols_numbers_names$c = "输入时忽略符号/数字/人名";
var settings$c = "设置";
var please_select_dict$c = "请先选择一本词典";
var learning_settings$c = "学习设置";
var total$c = "共";
var estimated$c = "预计";
var days_to_complete$c = "天完成";
var from_word$c = "从第";
var start_daily$c = "个开始，每日";
var new_words$c = "个新词";
var review_ratio_tooltip$c = "复习词与新词的比例";
var review_ratio_notice_1$c = "未完成学习时，复习数量按照设置的复习比生成，为0则不复习";
var review_ratio_notice_2$c = "完成学习后，新词数量固定为0，复习数量按照比例生成（若复习比小于1，以 1 计算）";
var daily_learning$c = "每日学习";
var learning_progress$c = "学习进度";
var select_from_dict$c = "从词典选起始位置";
var change_in_settings$c = "可在设置页面更改";
var keep_default_no_show$c = "保持默认，不再显示";
var review_complete$c = "复习完成";
var today_task_complete$c = "今日任务完成";
var study_duration$c = "学习时长";
var accuracy_rate$c = "正确率";
var weekly_study_record$c = "本周学习记录";
var studied$c = "已学习";
var total_words$c = "总词数";
var restart_learning$c = "重学一遍";
var another_round$c = "再来一组";
var return_home$c = "返回主页";
var import_tutorial$c = "导入教程";
var import_follow_template$c = "请按照模板的格式来填写数据";
var import_word_required$c = "单词项为必填，其他项可不填";
var import_translation_hint$c = "翻译：一行一个翻译，前面词性，后面内容（如n.取消）；多个翻译请换行";
var import_example_hint$c = "例句：一行原文，一行译文；多个请换";
var import_phrase_hint$c = "短语：一行原文，一行译文；多个请换";
var two$c = "两";
var lines$c = "行";
var import_other_hint$c = "同义词、同根词、词源：请前往官方词典，然后编辑其中某个单词，参考其格式";
var template_download$c = "模板下载地址";
var word_import_template$c = "单词导入模板";
var conflict_notice_title$c = "如果您在使用过程中发现以下情况:";
var keyboard_no_response$c = "按下键盘无反应";
var check_plugins_installed$c = "请检查是否安装";
var conflict_plugin_names$c = "\"视频调速\" \"Vim\" \"音视频增强\" \"网课助手\"";
var plugins_intercept_keyboard$c = "等插件/脚本，它们会拦截键盘按下事件，";
var cause_no_response$c = "导致在本网站练习时按键无反应";
var follow_steps_to_resolve$c = "，请根据以下步骤解决冲突：";
var try_incognito_mode$c = "用浏览器无痕模式打开本网站，确认能否正常输入？";
var incognito_not_working$c = "无痕模式下无法输入，";
var click_here$c = "点此";
var feedback_or_wechat$c = "反馈，或者加微信群反馈：";
var incognito_working$c = "无痕模式下可以输入，则是插件/脚本导致的冲突";
var disable_plugin_or_exclude$c = "临时禁用对应插件/脚本，或在对应插件/脚本的设置里面排除本网站";
var install_extension_manager$c = "可安装此";
var chrome_extension$c = "插件(Chrome版本，需翻墙)";
var edge_extension$c = "插件(Edge版本，无需翻墙)";
var to_manage_extensions$c = "来快速激活、禁用其他插件";
var delete_key_goes_back$c = "按删除键却返回了上一页";
var browser_360_shortcut$c = "在 360 浏览器中，默认设置了 \"删除键返回上一页\" 的快捷键";
var change_browser_or_shortcut$c = "要么换浏览器，要么把 360 默认的快捷键删除：可在浏览器设置里面搜索 \"后退\" 或者 \"返回\"，将对应的快捷键删除";
var please_enter_name$c = "请输入名称";
var name_max_20_chars$c = "名称不能超过20个字符";
var name_already_exists$c = "已有相同名称！";
var add_success$c = "添加成功";
var edit_success$c = "修改成功";
var edit_and_add_to_dict$c = "修改成功并加入我的词典";
var please_fill_complete$c = "请填写完整";
var name$c = "名称";
var description$c = "描述";
var source_language$c = "原文语言";
var target_language$c = "译文语言";
var english$c = "英语";
var german$c = "德语";
var japanese$c = "日语";
var code$c = "代码";
var chinese$c = "中文";
var multiple_choice$c = "选择题";
var start$c = "开始";
var countdown$c = "倒计时";
var seconds$c = "秒";
var submit_exam$c = "提交试卷";
var exam_color_hint$c = "浅红：错误 深红：未选 绿：正确";
var items_per_page$c = "条/页";
var jump_to$c = "跳至";
var page_or_index$c = "页/序号";
var please_fill_original$c = "请填写原文！";
var please_fill_title$c = "请填写标题！";
var please_fill_content$c = "请填写正文！";
var audio_added_success$c = "音频添加成功";
var lrc_parse_success$c = "LRC文件解析成功";
var original_text$c = "原文";
var title$c = "标题";
var please_fill_original_title$c = "请填写原文标题";
var content$c = "正文";
var one_sentence_per_line$c = "一行一句，段落间空一行";
var name_config_tip$c = "配置人名之后，在练习时自动忽略(可选，默认开启)";
var name_config$c = "人名配置";
var please_paste_original$c = "请复制原文";
var usage_guide$c = "使用方法";
var copy_and_split$c = "复制原文，然后分句";
var click$c = "点击";
var split_sentence$c = "分句";
var auto_split$c = "按钮进行自动分句";
var or$c = "或";
var manual_split$c = "手动编辑分句";
var split_rule$c = "分句规则：一行一句，段落间空一行";
var after_edit_click$c = "修改完成后点击";
var sync_to_result$c = "按钮同步到左侧结果栏";
var please_fill_translation_title$c = "请填写翻译标题";
var please_fill_translation$c = "请填写翻译";
var translate$c = "翻译";
var copy_translation_or_click$c = "复制译文，如果没有请点击";
var result$c = "结果";
var editable_auto_sync$c = "均可编辑，编辑后点击应用按钮会自动同步";
var audio$c = "音频";
var audio_management$c = "音频管理";
var paragraph$c = "第";
var set_start_time$c = "设置开始时间";
var use_prev_end_time$c = "使用前一句的结束时间";
var minus_03s$c = "减 0.3 秒";
var end$c = "结束";
var set_end_time$c = "设置结束时间";
var edit_audio_align$c = "编辑音频对齐";
var play$c = "播放";
var status$c = "状态";
var sentences_not_translated$c = "共有{count}句没有翻译！";
var translation_complete$c = "翻译完成！";
var save_and_next$c = "保存并添加下一篇";
var no_translation_comparison$c = "没有译文对照~";
var adjust_audio_timeline$c = "调整音频时间轴";
var audio_timeline_tutorial$c = "教程：点击音频播放按钮，当播放到句子开始时，点击开始时间的记录按钮；当播放到句子结束时，点击结束时间的记录按钮，最后再试听是否正确";
var start_time$c = "开始时间";
var jump_to_seconds$c = "跳转至{seconds}秒";
var use_prev_end_seconds$c = "使用前一句的结束时间：{seconds}秒";
var decrease_03s$c = "减少 0.3 秒";
var increase_03s$c = "增加 0.3 秒";
var record$c = "记录";
var end_time$c = "结束时间";
var audio_upload_notice$c = "1、上传的文件保存在本地电脑上，更换电脑数据将丢失，请及时备份数据\n2、LRC 文件用于解析句子对应音频的位置，不一定准确，后续可自行修改";
var upload_audio$c = "上传音频";
var upload_lrc$c = "上传 LRC 文件";
var name_management$c = "人名管理";
var name_ignore_config_desc$c = "配置需要忽略的人名，练习时自动忽略这些名称(可选，默认开启)";
var add_name$c = "添加名称";
var enter_name$c = "输入名称";
var collect_word$c = "收藏单词";
var copy$c = "复制";
var copy_sentence$c = "复制句子";
var copied$c = "已复制";
var copy_word$c = "复制单词";
var start_from_here$c = "从这开始";
var play_sentence$c = "播放句子";
var grammar_analysis$c = "语法分析";
var copied_open_grammar$c = "已复制！随后将打开语法分析网站！";
var youdao_translate$c = "有道词典翻译";
var translate_word$c = "翻译单词";
var translate_sentence$c = "翻译句子";
var restart_practice$c = "重新练习";
var next_article$c = "下一篇";
var learning_record$c = "学习记录";
var total_learning_time$c = "总学习时长";
var current$c = "当前";
var show_questions$c = "显示题目";
var explanation$c = "解析";
var encouragement_95$c = "太棒了！继续保持！";
var encouragement_85$c = "表现很好，再接再厉！";
var encouragement_70$c = "不错的成绩，继续加油！";
var encouragement_default$c = "每次练习都是进步，坚持下去！";
var daily_task_complete$c = "今日任务完成";
var weekly_record$c = "本周学习记录";
var study_progress$c = "学习进度";
var relearn$c = "重学一遍";
var start_from_beginning$c = "从头开始练习";
var another_group$c = "再来一组";
var back_to_home$c = "返回主页";
var know_word_tip$c = "若误选\"我认识\"，可按删除键重新选择！";
var press_delete_reinput$c = "请按删除键重新输入";
var press_space_continue$c = "请按空格键继续";
var shortcut$c = "快捷键";
var i_know$c = "我认识";
var i_dont_know$c = "不认识";
var phrases$c = "短语";
var synonyms$c = "同近义词";
var word_root$c = "词根";
var review_wrong_words$c = "复习错词";
var collapse$c = "收起";
var expand$c = "展开";
var minutes$c = "分钟";
var time$c = "时间";
var errors$c = "错误数";
var skip_to_next_stage$c = "跳到下一阶段";
var skip_word$c = "跳过单词";
var toggle_dictation_mode$c = "开关默写模式";
var send_failed$c = "发送失败";
var send_code_failed$c = "发送验证码失败";
var sending$c = "发送中";
var send_code$c = "发送验证码";
var agree_terms_notice$c = "继续操作即表示你阅读并同意我们的";
var user_agreement$c = "用户协议";
var and$c = "与";
var privacy_policy$c = "隐私政策";
var important_notice$c = "重要提示";
var dont_remind$c = "不再提醒";
var function_desc$c = "功能介绍";
var qa1_a$c = "网站是免费的吗？";
var qa1_q1$c = "不完全免费，因为想要长久发展后续收费是必然的，但不会必须付费才能使用，我们尽量在免费与收费之间找一个平衡点";
var qa1_q2$c = "项目是开源的，可自行部署";
var qa2_a$c = "无法输入，按下键盘没有反应？";
var qa3_a$c = "数据在哪？怎么在多台电脑/设备之间使用？";
var qa3_q1$c = "所有用户数据 保存在本地浏览器中。如果您需要在不同的设备、浏览器上使用 Type Words， 您需要手动进行数据导出和导入";
var qa3_q2$c = "设置 -> 数据设置 -> 在原电脑上导出数据 -> 通过社交软件发送给新电脑 -> 在新电脑上导入";
var qa3_q3$c = "正在开发账户体系";
var qa4_a$c = "网站自动规划的单词数量太多了，怎么修改？";
var qa4_q1$c = "默认复习词数量与新词数量是1：4，如果新词40个，那么会复习40个上次学习的，复习120个之前学习的（由近到远）";
var qa4_q2$c = "您可在通过 设置 -> 单词设置 -> 复习比 修改";
var qa5_a$c = "完成一次学习要很久，流程是不是太冗长了？";
var qa5_q1$c = "这的确是个问题，冗长的流程容易让人失去背单词的积极性，我正在思考如何优化学习流程，如果您有好的建议欢迎反馈";
var qa5_q2$c = "错误单词会重新再来，如果只是手误按错了，后续重新练习时，可以按Tab键跳过。无法判断用户是手误还是真的不会，所以只能错词统统重来，直到正确为止";
var qa5_q3$c = "复习时，只有选择了不认识的单词才会要求听写与默写，这是合理的，不过目前会出现同一个单词复习了N遍的问题";
var qa5_q4$c = "上线了账户体系之后，会添加艾宾浩斯的记忆曲线功能，到时候规划的复习单词会比现在更智能";
var qa6_a$c = "会添加艾宾浩斯的记忆曲线功能吗？";
var qa7_a$c = "能否  自行添加单词/自定义词典/导入自己的单词/修改单词内容？";
var qa7_q1$c = "可以，在单词界面，点击“创建个人词典”";
var qa7_q2$c = "创建完成之后，在词典详情页面，点击 “添加单词” 图标，即可添加自己的单词";
var qa7_q3$c = "也可以点击 “导入” 图标，批量导入（需要严格按照模板xlsx格式来）";
var qa8_a$c = "能否  自行添加文章/自定义书籍/导入自己的文章/修改文章内容？";
var qa8_q1$c = "可以，操作步骤基本和添加单词的一样";
var qa8_q2$c = "在文章界面，点击“创建个人书籍”";
var qa8_q3$c = "创建完成之后，在书籍详情页面，点击顶部的 “文章管理” 按钮，即可添加自己的文章";
var qa9_a$c = "怎么关闭按键音？";
var qa9_q$c = "设置 -> 通用设置 -> 音效 -> 按键音，关闭即可";
var qa10_a$c = "平板能用吗？";
var qa10_q1$c = "平板可以使用，但使用蓝牙键盘体验会更好，毕竟系统自带的虚拟键盘占了1/3的屏幕空间，比较影响观感";
var qa10_q2$c = "连接蓝牙键盘后，安卓平板，需要在浏览器里主动开启 “电脑模式”；iPad无需此操作（因为 Safari 默认电脑模式）";
var qa11_a$c = "手机能用吗？";
var qa11_q$c = "手机可以使用，但暂时未进行其针对优化，使用起来可能会有不方便的地方，还是建议在电脑或平板上用";
var qa12_a$c = "有APP、小程序吗？";
var qa12_q$c = "无，只有网站";
var qa13_a$c = "如何向开发团队反馈问题和功能需求？";
var qa13_q1$c = "可以加入我们官方 微信 群, 详细的描述您想要的功能以及告知这个功能想要解决的问题是什么";
var qa13_q2$c = "如果您在应用中发现了错误或漏洞，请提供详细的描述和重现问题的步骤，当然最好提供一个小视频";
var qa13_q3$c = "也可以给我们提工单";
var qa13_q4$c = "也可以去 github/issues 提交";
const zh = {
	app_desc: app_desc$c,
	app_name: app_name$c,
	start_word_practice: start_word_practice$c,
	start_article_practice: start_article_practice$c,
	home_word_practice: home_word_practice$c,
	home_word_practice_desc1: home_word_practice_desc1$c,
	home_word_practice_desc2: home_word_practice_desc2$c,
	home_word_practice_desc3: home_word_practice_desc3$c,
	home_article_practice: home_article_practice$c,
	home_article_practice_desc1: home_article_practice_desc1$c,
	home_article_practice_desc2: home_article_practice_desc2$c,
	home_article_practice_desc3: home_article_practice_desc3$c,
	home_collection: home_collection$c,
	home_collection_desc1: home_collection_desc1$c,
	home_collection_desc2: home_collection_desc2$c,
	home_collection_desc3: home_collection_desc3$c,
	home_vocabulary: home_vocabulary$c,
	home_vocabulary_desc: home_vocabulary_desc$c,
	home_free_opensource: home_free_opensource$c,
	home_free_opensource_desc1: home_free_opensource_desc1$c,
	home_free_opensource_desc2: home_free_opensource_desc2$c,
	home_free_opensource_desc3: home_free_opensource_desc3$c,
	home_customization: home_customization$c,
	home_customization_desc1: home_customization_desc1$c,
	home_customization_desc2: home_customization_desc2$c,
	home_customization_desc3: home_customization_desc3$c,
	home_design: home_design$c,
	home_design_desc1: home_design_desc1$c,
	home_design_desc2: home_design_desc2$c,
	home_design_desc3: home_design_desc3$c,
	home_personalized: home_personalized$c,
	home_personalized_desc1: home_personalized_desc1$c,
	home_personalized_desc2: home_personalized_desc2$c,
	home_personalized_desc3: home_personalized_desc3$c,
	cn_limit_no1: cn_limit_no1$c,
	cn_limit_no2: cn_limit_no2$c,
	setting: setting$c,
	edit: edit$c,
	"delete": "删除",
	cancel: cancel$c,
	confirm: confirm$c,
	save: save$c,
	close: close$c,
	search: search$c,
	more: more$c,
	loading: loading$c,
	introduction: introduction$c,
	learn: learn$c,
	practice: practice$c,
	test: test$c,
	feedback: feedback$c,
	document: document$c,
	help: help$c,
	about: about$c,
	login: login$c,
	register: register$c,
	register_account: register_account$c,
	register_new_account: register_new_account$c,
	code_login: code_login$c,
	password_login: password_login$c,
	phone_placeholder: phone_placeholder$c,
	code_placeholder: code_placeholder$c,
	account_placeholder: account_placeholder$c,
	password_placeholder: password_placeholder$c,
	auto_register_notice: auto_register_notice$c,
	forgot_password: forgot_password$c,
	reset_password: reset_password$c,
	set_password_placeholder: set_password_placeholder$c,
	confirm_password_placeholder: confirm_password_placeholder$c,
	new_password_placeholder: new_password_placeholder$c,
	confirm_new_password: confirm_new_password$c,
	wechat_scan_login: wechat_scan_login$c,
	scan_success: scan_success$c,
	tap_allow_in_wechat: tap_allow_in_wechat$c,
	login_cancelled: login_cancelled$c,
	login_again: login_again$c,
	sync_data: sync_data$c,
	local_data_detected: local_data_detected$c,
	sync_to_account_question: sync_to_account_question$c,
	no_sync: no_sync$c,
	sync: sync$c,
	syncing: syncing$c,
	sync_failed: sync_failed$c,
	sync_success: sync_success$c,
	enter_website: enter_website$c,
	general_settings: general_settings$c,
	word_settings: word_settings$c,
	article_settings: article_settings$c,
	data_management: data_management$c,
	shortcut_settings: shortcut_settings$c,
	update_log: update_log$c,
	"function": "功能",
	shortcut_key: shortcut_key$c,
	no_shortcut_set: no_shortcut_set$c,
	press_key_to_set: press_key_to_set$c,
	click_here_when_done: click_here_when_done$c,
	restore_default: restore_default$c,
	data_saved_locally: data_saved_locally$c,
	export_data_backup: export_data_backup$c,
	import_data_restore: import_data_restore$c,
	import_warning: import_warning$c,
	words: words$c,
	no_dict_selected: no_dict_selected$c,
	select_dict_to_start: select_dict_to_start$c,
	select_dict: select_dict$c,
	change_progress: change_progress$c,
	estimated_completion: estimated_completion$c,
	current_progress: current_progress$c,
	learned: learned$c,
	completed_review_stage: completed_review_stage$c,
	today_task: today_task$c,
	last_task: last_task$c,
	word_list: word_list$c,
	daily_goal: daily_goal$c,
	words_count: words_count$c,
	change: change$c,
	new_words_count: new_words_count$c,
	review_last: review_last$c,
	review_previous: review_previous$c,
	start_learning: start_learning$c,
	continue_learning: continue_learning$c,
	free_practice: free_practice$c,
	continue_free_practice: continue_free_practice$c,
	smart_learning: smart_learning$c,
	review: review$c,
	random_review: random_review$c,
	my_dictionaries: my_dictionaries$c,
	manage_dict: manage_dict$c,
	create_personal_dict: create_personal_dict$c,
	recommend: recommend$c,
	articles: articles$c,
	this_week_record: this_week_record$c,
	change_book: change_book$c,
	today_study_time: today_study_time$c,
	total_study_days: total_study_days$c,
	total_study_time: total_study_time$c,
	my_books: my_books$c,
	manage_books: manage_books$c,
	create_personal_book: create_personal_book$c,
	article_management: article_management$c,
	toggle_translation: toggle_translation$c,
	switch_display_mode: switch_display_mode$c,
	line_by_line: line_by_line$c,
	single_line: single_line$c,
	comparison: comparison$c,
	question: question$c,
	study_record: study_record$c,
	play_next_after_end: play_next_after_end$c,
	create_book: create_book$c,
	edit_book: edit_book$c,
	dict_list: dict_list$c,
	book_list: book_list$c,
	word: word$c,
	phonetic: phonetic$c,
	translation: translation$c,
	example_sentence: example_sentence$c,
	phrase: phrase$c,
	synonym: synonym$c,
	related_words: related_words$c,
	etymology: etymology$c,
	add_word: add_word$c,
	edit_word: edit_word$c,
	create_dict: create_dict$c,
	edit_dict: edit_dict$c,
	"import": "导入",
	"export": "导出",
	faq: faq$c,
	is_free: is_free$c,
	cannot_type: cannot_type$c,
	where_is_data: where_is_data$c,
	resource_sharing: resource_sharing$c,
	all_resources: all_resources$c,
	new_concept_english: new_concept_english$c,
	tv_movie: tv_movie$c,
	grammar_learning: grammar_learning$c,
	listening_training: listening_training$c,
	warm_tips: warm_tips$c,
	resources_from_internet: resources_from_internet$c,
	toggle_theme: toggle_theme$c,
	english_document: english_document$c,
	empty_placeholder: empty_placeholder$c,
	custom: custom$c,
	back: back$c,
	total_items: total_items$c,
	batch_delete: batch_delete$c,
	confirm_delete_selected: confirm_delete_selected$c,
	change_order: change_order$c,
	list_order_setting: list_order_setting$c,
	reverse_current_page: reverse_current_page$c,
	reverse_all: reverse_all$c,
	random_current_page: random_current_page$c,
	random_all: random_all$c,
	apply: apply$c,
	add: add$c,
	collect: collect$c,
	uncollect: uncollect$c,
	mark_mastered: mark_mastered$c,
	unmark_mastered: unmark_mastered$c,
	about_thanks: about_thanks$c,
	github_address: github_address$c,
	about_wechat_feedback: about_wechat_feedback$c,
	about_ticket_feedback: about_ticket_feedback$c,
	about_other_channels: about_other_channels$c,
	wait_translation: wait_translation$c,
	migrate_data: migrate_data$c,
	migrate_new_domain: migrate_new_domain$c,
	migrate_old_domain_notice: migrate_old_domain_notice$c,
	migrate_later_notice: migrate_later_notice$c,
	author: author$c,
	features: features$c,
	suitable_for: suitable_for$c,
	open_link: open_link$c,
	qq_group: qq_group$c,
	xiaohongshu: xiaohongshu$c,
	follow_x_account: follow_x_account$c,
	twitter: twitter$c,
	send_email: send_email$c,
	email: email$c,
	xiaohongshu_desc: xiaohongshu_desc$c,
	xiaohongshu_qrcode: xiaohongshu_qrcode$c,
	community_desc: community_desc$c,
	qq_qrcode: qq_qrcode$c,
	wechat_group: wechat_group$c,
	wechat_qrcode: wechat_qrcode$c,
	github_project: github_project$c,
	ie_not_supported: ie_not_supported$c,
	ie_use_modern_browser: ie_use_modern_browser$c,
	download_chrome: download_chrome$c,
	i_understand: i_understand$c,
	ignore_case: ignore_case$c,
	ignore_case_desc: ignore_case_desc$c,
	allow_dictation_tip: allow_dictation_tip$c,
	allow_dictation_tip_desc: allow_dictation_tip_desc$c,
	simple_word_filter: simple_word_filter$c,
	simple_word_filter_desc: simple_word_filter_desc$c,
	simple_word_list: simple_word_list$c,
	words_comma_separated: words_comma_separated$c,
	sound_effect: sound_effect$c,
	pronunciation_accent: pronunciation_accent$c,
	pronunciation_accent_desc: pronunciation_accent_desc$c,
	please_select: please_select$c,
	us_accent: us_accent$c,
	uk_accent: uk_accent$c,
	keyboard_sound: keyboard_sound$c,
	keyboard_sound_effect: keyboard_sound_effect$c,
	volume: volume$c,
	show_prev_next_word: show_prev_next_word$c,
	show_prev_next_word_desc: show_prev_next_word_desc$c,
	disable_practice_setting_dialog: disable_practice_setting_dialog$c,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$c,
	clear_input_on_error: clear_input_on_error$c,
	word_repeat_setting: word_repeat_setting$c,
	repeat_count: repeat_count$c,
	review_ratio: review_ratio$c,
	review_ratio_desc: review_ratio_desc$c,
	word_auto_pronunciation: word_auto_pronunciation$c,
	speed: speed$c,
	effect_sound: effect_sound$c,
	auto_switch: auto_switch$c,
	auto_next_word: auto_next_word$c,
	auto_next_word_desc: auto_next_word_desc$c,
	auto_next_word_time: auto_next_word_time$c,
	auto_next_word_time_desc: auto_next_word_time_desc$c,
	milliseconds: milliseconds$c,
	font_setting: font_setting$c,
	foreign_font: foreign_font$c,
	chinese_font: chinese_font$c,
	auto_play_sentence: auto_play_sentence$c,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$c,
	settings: settings$c,
	please_select_dict: please_select_dict$c,
	learning_settings: learning_settings$c,
	total: total$c,
	estimated: estimated$c,
	days_to_complete: days_to_complete$c,
	from_word: from_word$c,
	start_daily: start_daily$c,
	new_words: new_words$c,
	review_ratio_tooltip: review_ratio_tooltip$c,
	review_ratio_notice_1: review_ratio_notice_1$c,
	review_ratio_notice_2: review_ratio_notice_2$c,
	daily_learning: daily_learning$c,
	learning_progress: learning_progress$c,
	select_from_dict: select_from_dict$c,
	change_in_settings: change_in_settings$c,
	keep_default_no_show: keep_default_no_show$c,
	review_complete: review_complete$c,
	today_task_complete: today_task_complete$c,
	study_duration: study_duration$c,
	accuracy_rate: accuracy_rate$c,
	weekly_study_record: weekly_study_record$c,
	studied: studied$c,
	total_words: total_words$c,
	restart_learning: restart_learning$c,
	another_round: another_round$c,
	return_home: return_home$c,
	import_tutorial: import_tutorial$c,
	import_follow_template: import_follow_template$c,
	import_word_required: import_word_required$c,
	import_translation_hint: import_translation_hint$c,
	import_example_hint: import_example_hint$c,
	import_phrase_hint: import_phrase_hint$c,
	two: two$c,
	lines: lines$c,
	import_other_hint: import_other_hint$c,
	template_download: template_download$c,
	word_import_template: word_import_template$c,
	conflict_notice_title: conflict_notice_title$c,
	keyboard_no_response: keyboard_no_response$c,
	check_plugins_installed: check_plugins_installed$c,
	conflict_plugin_names: conflict_plugin_names$c,
	plugins_intercept_keyboard: plugins_intercept_keyboard$c,
	cause_no_response: cause_no_response$c,
	follow_steps_to_resolve: follow_steps_to_resolve$c,
	try_incognito_mode: try_incognito_mode$c,
	incognito_not_working: incognito_not_working$c,
	click_here: click_here$c,
	feedback_or_wechat: feedback_or_wechat$c,
	incognito_working: incognito_working$c,
	disable_plugin_or_exclude: disable_plugin_or_exclude$c,
	install_extension_manager: install_extension_manager$c,
	chrome_extension: chrome_extension$c,
	edge_extension: edge_extension$c,
	to_manage_extensions: to_manage_extensions$c,
	delete_key_goes_back: delete_key_goes_back$c,
	browser_360_shortcut: browser_360_shortcut$c,
	change_browser_or_shortcut: change_browser_or_shortcut$c,
	please_enter_name: please_enter_name$c,
	name_max_20_chars: name_max_20_chars$c,
	name_already_exists: name_already_exists$c,
	add_success: add_success$c,
	edit_success: edit_success$c,
	edit_and_add_to_dict: edit_and_add_to_dict$c,
	please_fill_complete: please_fill_complete$c,
	name: name$c,
	description: description$c,
	source_language: source_language$c,
	target_language: target_language$c,
	english: english$c,
	german: german$c,
	japanese: japanese$c,
	code: code$c,
	chinese: chinese$c,
	multiple_choice: multiple_choice$c,
	start: start$c,
	countdown: countdown$c,
	seconds: seconds$c,
	submit_exam: submit_exam$c,
	exam_color_hint: exam_color_hint$c,
	items_per_page: items_per_page$c,
	jump_to: jump_to$c,
	page_or_index: page_or_index$c,
	please_fill_original: please_fill_original$c,
	please_fill_title: please_fill_title$c,
	please_fill_content: please_fill_content$c,
	audio_added_success: audio_added_success$c,
	lrc_parse_success: lrc_parse_success$c,
	original_text: original_text$c,
	title: title$c,
	please_fill_original_title: please_fill_original_title$c,
	content: content$c,
	one_sentence_per_line: one_sentence_per_line$c,
	name_config_tip: name_config_tip$c,
	name_config: name_config$c,
	please_paste_original: please_paste_original$c,
	usage_guide: usage_guide$c,
	copy_and_split: copy_and_split$c,
	click: click$c,
	split_sentence: split_sentence$c,
	auto_split: auto_split$c,
	or: or$c,
	manual_split: manual_split$c,
	split_rule: split_rule$c,
	after_edit_click: after_edit_click$c,
	sync_to_result: sync_to_result$c,
	please_fill_translation_title: please_fill_translation_title$c,
	please_fill_translation: please_fill_translation$c,
	translate: translate$c,
	copy_translation_or_click: copy_translation_or_click$c,
	result: result$c,
	editable_auto_sync: editable_auto_sync$c,
	audio: audio$c,
	audio_management: audio_management$c,
	paragraph: paragraph$c,
	set_start_time: set_start_time$c,
	use_prev_end_time: use_prev_end_time$c,
	minus_03s: minus_03s$c,
	end: end$c,
	set_end_time: set_end_time$c,
	edit_audio_align: edit_audio_align$c,
	play: play$c,
	status: status$c,
	sentences_not_translated: sentences_not_translated$c,
	translation_complete: translation_complete$c,
	save_and_next: save_and_next$c,
	no_translation_comparison: no_translation_comparison$c,
	adjust_audio_timeline: adjust_audio_timeline$c,
	audio_timeline_tutorial: audio_timeline_tutorial$c,
	start_time: start_time$c,
	jump_to_seconds: jump_to_seconds$c,
	use_prev_end_seconds: use_prev_end_seconds$c,
	decrease_03s: decrease_03s$c,
	increase_03s: increase_03s$c,
	record: record$c,
	end_time: end_time$c,
	audio_upload_notice: audio_upload_notice$c,
	upload_audio: upload_audio$c,
	upload_lrc: upload_lrc$c,
	name_management: name_management$c,
	name_ignore_config_desc: name_ignore_config_desc$c,
	add_name: add_name$c,
	enter_name: enter_name$c,
	collect_word: collect_word$c,
	copy: copy$c,
	copy_sentence: copy_sentence$c,
	copied: copied$c,
	copy_word: copy_word$c,
	start_from_here: start_from_here$c,
	play_sentence: play_sentence$c,
	grammar_analysis: grammar_analysis$c,
	copied_open_grammar: copied_open_grammar$c,
	youdao_translate: youdao_translate$c,
	translate_word: translate_word$c,
	translate_sentence: translate_sentence$c,
	restart_practice: restart_practice$c,
	next_article: next_article$c,
	learning_record: learning_record$c,
	total_learning_time: total_learning_time$c,
	current: current$c,
	show_questions: show_questions$c,
	explanation: explanation$c,
	encouragement_95: encouragement_95$c,
	encouragement_85: encouragement_85$c,
	encouragement_70: encouragement_70$c,
	encouragement_default: encouragement_default$c,
	daily_task_complete: daily_task_complete$c,
	weekly_record: weekly_record$c,
	study_progress: study_progress$c,
	relearn: relearn$c,
	start_from_beginning: start_from_beginning$c,
	another_group: another_group$c,
	back_to_home: back_to_home$c,
	know_word_tip: know_word_tip$c,
	press_delete_reinput: press_delete_reinput$c,
	press_space_continue: press_space_continue$c,
	shortcut: shortcut$c,
	i_know: i_know$c,
	i_dont_know: i_dont_know$c,
	phrases: phrases$c,
	synonyms: synonyms$c,
	word_root: word_root$c,
	review_wrong_words: review_wrong_words$c,
	collapse: collapse$c,
	expand: expand$c,
	minutes: minutes$c,
	time: time$c,
	errors: errors$c,
	skip_to_next_stage: skip_to_next_stage$c,
	skip_word: skip_word$c,
	toggle_dictation_mode: toggle_dictation_mode$c,
	send_failed: send_failed$c,
	send_code_failed: send_code_failed$c,
	sending: sending$c,
	send_code: send_code$c,
	agree_terms_notice: agree_terms_notice$c,
	user_agreement: user_agreement$c,
	and: and$c,
	privacy_policy: privacy_policy$c,
	important_notice: important_notice$c,
	dont_remind: dont_remind$c,
	function_desc: function_desc$c,
	qa1_a: qa1_a$c,
	qa1_q1: qa1_q1$c,
	qa1_q2: qa1_q2$c,
	qa2_a: qa2_a$c,
	qa3_a: qa3_a$c,
	qa3_q1: qa3_q1$c,
	qa3_q2: qa3_q2$c,
	qa3_q3: qa3_q3$c,
	qa4_a: qa4_a$c,
	qa4_q1: qa4_q1$c,
	qa4_q2: qa4_q2$c,
	qa5_a: qa5_a$c,
	qa5_q1: qa5_q1$c,
	qa5_q2: qa5_q2$c,
	qa5_q3: qa5_q3$c,
	qa5_q4: qa5_q4$c,
	qa6_a: qa6_a$c,
	qa7_a: qa7_a$c,
	qa7_q1: qa7_q1$c,
	qa7_q2: qa7_q2$c,
	qa7_q3: qa7_q3$c,
	qa8_a: qa8_a$c,
	qa8_q1: qa8_q1$c,
	qa8_q2: qa8_q2$c,
	qa8_q3: qa8_q3$c,
	qa9_a: qa9_a$c,
	qa9_q: qa9_q$c,
	qa10_a: qa10_a$c,
	qa10_q1: qa10_q1$c,
	qa10_q2: qa10_q2$c,
	qa11_a: qa11_a$c,
	qa11_q: qa11_q$c,
	qa12_a: qa12_a$c,
	qa12_q: qa12_q$c,
	qa13_a: qa13_a$c,
	qa13_q1: qa13_q1$c,
	qa13_q2: qa13_q2$c,
	qa13_q3: qa13_q3$c,
	qa13_q4: qa13_q4$c
};

const zh$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$c,
  about_other_channels: about_other_channels$c,
  about_thanks: about_thanks$c,
  about_ticket_feedback: about_ticket_feedback$c,
  about_wechat_feedback: about_wechat_feedback$c,
  account_placeholder: account_placeholder$c,
  accuracy_rate: accuracy_rate$c,
  add: add$c,
  add_name: add_name$c,
  add_success: add_success$c,
  add_word: add_word$c,
  adjust_audio_timeline: adjust_audio_timeline$c,
  after_edit_click: after_edit_click$c,
  agree_terms_notice: agree_terms_notice$c,
  all_resources: all_resources$c,
  allow_dictation_tip: allow_dictation_tip$c,
  allow_dictation_tip_desc: allow_dictation_tip_desc$c,
  and: and$c,
  another_group: another_group$c,
  another_round: another_round$c,
  app_desc: app_desc$c,
  app_name: app_name$c,
  apply: apply$c,
  article_management: article_management$c,
  article_settings: article_settings$c,
  articles: articles$c,
  audio: audio$c,
  audio_added_success: audio_added_success$c,
  audio_management: audio_management$c,
  audio_timeline_tutorial: audio_timeline_tutorial$c,
  audio_upload_notice: audio_upload_notice$c,
  author: author$c,
  auto_next_word: auto_next_word$c,
  auto_next_word_desc: auto_next_word_desc$c,
  auto_next_word_time: auto_next_word_time$c,
  auto_next_word_time_desc: auto_next_word_time_desc$c,
  auto_play_sentence: auto_play_sentence$c,
  auto_register_notice: auto_register_notice$c,
  auto_split: auto_split$c,
  auto_switch: auto_switch$c,
  back: back$c,
  back_to_home: back_to_home$c,
  batch_delete: batch_delete$c,
  book_list: book_list$c,
  browser_360_shortcut: browser_360_shortcut$c,
  cancel: cancel$c,
  cannot_type: cannot_type$c,
  cause_no_response: cause_no_response$c,
  change: change$c,
  change_book: change_book$c,
  change_browser_or_shortcut: change_browser_or_shortcut$c,
  change_in_settings: change_in_settings$c,
  change_order: change_order$c,
  change_progress: change_progress$c,
  check_plugins_installed: check_plugins_installed$c,
  chinese: chinese$c,
  chinese_font: chinese_font$c,
  chrome_extension: chrome_extension$c,
  clear_input_on_error: clear_input_on_error$c,
  click: click$c,
  click_here: click_here$c,
  click_here_when_done: click_here_when_done$c,
  close: close$c,
  cn_limit_no1: cn_limit_no1$c,
  cn_limit_no2: cn_limit_no2$c,
  code: code$c,
  code_login: code_login$c,
  code_placeholder: code_placeholder$c,
  collapse: collapse$c,
  collect: collect$c,
  collect_word: collect_word$c,
  community_desc: community_desc$c,
  comparison: comparison$c,
  completed_review_stage: completed_review_stage$c,
  confirm: confirm$c,
  confirm_delete_selected: confirm_delete_selected$c,
  confirm_new_password: confirm_new_password$c,
  confirm_password_placeholder: confirm_password_placeholder$c,
  conflict_notice_title: conflict_notice_title$c,
  conflict_plugin_names: conflict_plugin_names$c,
  content: content$c,
  continue_free_practice: continue_free_practice$c,
  continue_learning: continue_learning$c,
  copied: copied$c,
  copied_open_grammar: copied_open_grammar$c,
  copy: copy$c,
  copy_and_split: copy_and_split$c,
  copy_sentence: copy_sentence$c,
  copy_translation_or_click: copy_translation_or_click$c,
  copy_word: copy_word$c,
  countdown: countdown$c,
  create_book: create_book$c,
  create_dict: create_dict$c,
  create_personal_book: create_personal_book$c,
  create_personal_dict: create_personal_dict$c,
  current: current$c,
  current_progress: current_progress$c,
  custom: custom$c,
  daily_goal: daily_goal$c,
  daily_learning: daily_learning$c,
  daily_task_complete: daily_task_complete$c,
  data_management: data_management$c,
  data_saved_locally: data_saved_locally$c,
  days_to_complete: days_to_complete$c,
  decrease_03s: decrease_03s$c,
  default: zh,
  delete_key_goes_back: delete_key_goes_back$c,
  description: description$c,
  dict_list: dict_list$c,
  disable_plugin_or_exclude: disable_plugin_or_exclude$c,
  disable_practice_setting_dialog: disable_practice_setting_dialog$c,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$c,
  document: document$c,
  dont_remind: dont_remind$c,
  download_chrome: download_chrome$c,
  edge_extension: edge_extension$c,
  edit: edit$c,
  edit_and_add_to_dict: edit_and_add_to_dict$c,
  edit_audio_align: edit_audio_align$c,
  edit_book: edit_book$c,
  edit_dict: edit_dict$c,
  edit_success: edit_success$c,
  edit_word: edit_word$c,
  editable_auto_sync: editable_auto_sync$c,
  effect_sound: effect_sound$c,
  email: email$c,
  empty_placeholder: empty_placeholder$c,
  encouragement_70: encouragement_70$c,
  encouragement_85: encouragement_85$c,
  encouragement_95: encouragement_95$c,
  encouragement_default: encouragement_default$c,
  end: end$c,
  end_time: end_time$c,
  english: english$c,
  english_document: english_document$c,
  enter_name: enter_name$c,
  enter_website: enter_website$c,
  errors: errors$c,
  estimated: estimated$c,
  estimated_completion: estimated_completion$c,
  etymology: etymology$c,
  exam_color_hint: exam_color_hint$c,
  example_sentence: example_sentence$c,
  expand: expand$c,
  explanation: explanation$c,
  export_data_backup: export_data_backup$c,
  faq: faq$c,
  features: features$c,
  feedback: feedback$c,
  feedback_or_wechat: feedback_or_wechat$c,
  follow_steps_to_resolve: follow_steps_to_resolve$c,
  follow_x_account: follow_x_account$c,
  font_setting: font_setting$c,
  foreign_font: foreign_font$c,
  forgot_password: forgot_password$c,
  free_practice: free_practice$c,
  from_word: from_word$c,
  function_desc: function_desc$c,
  general_settings: general_settings$c,
  german: german$c,
  github_address: github_address$c,
  github_project: github_project$c,
  grammar_analysis: grammar_analysis$c,
  grammar_learning: grammar_learning$c,
  help: help$c,
  home_article_practice: home_article_practice$c,
  home_article_practice_desc1: home_article_practice_desc1$c,
  home_article_practice_desc2: home_article_practice_desc2$c,
  home_article_practice_desc3: home_article_practice_desc3$c,
  home_collection: home_collection$c,
  home_collection_desc1: home_collection_desc1$c,
  home_collection_desc2: home_collection_desc2$c,
  home_collection_desc3: home_collection_desc3$c,
  home_customization: home_customization$c,
  home_customization_desc1: home_customization_desc1$c,
  home_customization_desc2: home_customization_desc2$c,
  home_customization_desc3: home_customization_desc3$c,
  home_design: home_design$c,
  home_design_desc1: home_design_desc1$c,
  home_design_desc2: home_design_desc2$c,
  home_design_desc3: home_design_desc3$c,
  home_free_opensource: home_free_opensource$c,
  home_free_opensource_desc1: home_free_opensource_desc1$c,
  home_free_opensource_desc2: home_free_opensource_desc2$c,
  home_free_opensource_desc3: home_free_opensource_desc3$c,
  home_personalized: home_personalized$c,
  home_personalized_desc1: home_personalized_desc1$c,
  home_personalized_desc2: home_personalized_desc2$c,
  home_personalized_desc3: home_personalized_desc3$c,
  home_vocabulary: home_vocabulary$c,
  home_vocabulary_desc: home_vocabulary_desc$c,
  home_word_practice: home_word_practice$c,
  home_word_practice_desc1: home_word_practice_desc1$c,
  home_word_practice_desc2: home_word_practice_desc2$c,
  home_word_practice_desc3: home_word_practice_desc3$c,
  i_dont_know: i_dont_know$c,
  i_know: i_know$c,
  i_understand: i_understand$c,
  ie_not_supported: ie_not_supported$c,
  ie_use_modern_browser: ie_use_modern_browser$c,
  ignore_case: ignore_case$c,
  ignore_case_desc: ignore_case_desc$c,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$c,
  import_data_restore: import_data_restore$c,
  import_example_hint: import_example_hint$c,
  import_follow_template: import_follow_template$c,
  import_other_hint: import_other_hint$c,
  import_phrase_hint: import_phrase_hint$c,
  import_translation_hint: import_translation_hint$c,
  import_tutorial: import_tutorial$c,
  import_warning: import_warning$c,
  import_word_required: import_word_required$c,
  important_notice: important_notice$c,
  incognito_not_working: incognito_not_working$c,
  incognito_working: incognito_working$c,
  increase_03s: increase_03s$c,
  install_extension_manager: install_extension_manager$c,
  introduction: introduction$c,
  is_free: is_free$c,
  items_per_page: items_per_page$c,
  japanese: japanese$c,
  jump_to: jump_to$c,
  jump_to_seconds: jump_to_seconds$c,
  keep_default_no_show: keep_default_no_show$c,
  keyboard_no_response: keyboard_no_response$c,
  keyboard_sound: keyboard_sound$c,
  keyboard_sound_effect: keyboard_sound_effect$c,
  know_word_tip: know_word_tip$c,
  last_task: last_task$c,
  learn: learn$c,
  learned: learned$c,
  learning_progress: learning_progress$c,
  learning_record: learning_record$c,
  learning_settings: learning_settings$c,
  line_by_line: line_by_line$c,
  lines: lines$c,
  list_order_setting: list_order_setting$c,
  listening_training: listening_training$c,
  loading: loading$c,
  local_data_detected: local_data_detected$c,
  login: login$c,
  login_again: login_again$c,
  login_cancelled: login_cancelled$c,
  lrc_parse_success: lrc_parse_success$c,
  manage_books: manage_books$c,
  manage_dict: manage_dict$c,
  manual_split: manual_split$c,
  mark_mastered: mark_mastered$c,
  migrate_data: migrate_data$c,
  migrate_later_notice: migrate_later_notice$c,
  migrate_new_domain: migrate_new_domain$c,
  migrate_old_domain_notice: migrate_old_domain_notice$c,
  milliseconds: milliseconds$c,
  minus_03s: minus_03s$c,
  minutes: minutes$c,
  more: more$c,
  multiple_choice: multiple_choice$c,
  my_books: my_books$c,
  my_dictionaries: my_dictionaries$c,
  name: name$c,
  name_already_exists: name_already_exists$c,
  name_config: name_config$c,
  name_config_tip: name_config_tip$c,
  name_ignore_config_desc: name_ignore_config_desc$c,
  name_management: name_management$c,
  name_max_20_chars: name_max_20_chars$c,
  new_concept_english: new_concept_english$c,
  new_password_placeholder: new_password_placeholder$c,
  new_words: new_words$c,
  new_words_count: new_words_count$c,
  next_article: next_article$c,
  no_dict_selected: no_dict_selected$c,
  no_shortcut_set: no_shortcut_set$c,
  no_sync: no_sync$c,
  no_translation_comparison: no_translation_comparison$c,
  one_sentence_per_line: one_sentence_per_line$c,
  open_link: open_link$c,
  or: or$c,
  original_text: original_text$c,
  page_or_index: page_or_index$c,
  paragraph: paragraph$c,
  password_login: password_login$c,
  password_placeholder: password_placeholder$c,
  phone_placeholder: phone_placeholder$c,
  phonetic: phonetic$c,
  phrase: phrase$c,
  phrases: phrases$c,
  play: play$c,
  play_next_after_end: play_next_after_end$c,
  play_sentence: play_sentence$c,
  please_enter_name: please_enter_name$c,
  please_fill_complete: please_fill_complete$c,
  please_fill_content: please_fill_content$c,
  please_fill_original: please_fill_original$c,
  please_fill_original_title: please_fill_original_title$c,
  please_fill_title: please_fill_title$c,
  please_fill_translation: please_fill_translation$c,
  please_fill_translation_title: please_fill_translation_title$c,
  please_paste_original: please_paste_original$c,
  please_select: please_select$c,
  please_select_dict: please_select_dict$c,
  plugins_intercept_keyboard: plugins_intercept_keyboard$c,
  practice: practice$c,
  press_delete_reinput: press_delete_reinput$c,
  press_key_to_set: press_key_to_set$c,
  press_space_continue: press_space_continue$c,
  privacy_policy: privacy_policy$c,
  pronunciation_accent: pronunciation_accent$c,
  pronunciation_accent_desc: pronunciation_accent_desc$c,
  qa10_a: qa10_a$c,
  qa10_q1: qa10_q1$c,
  qa10_q2: qa10_q2$c,
  qa11_a: qa11_a$c,
  qa11_q: qa11_q$c,
  qa12_a: qa12_a$c,
  qa12_q: qa12_q$c,
  qa13_a: qa13_a$c,
  qa13_q1: qa13_q1$c,
  qa13_q2: qa13_q2$c,
  qa13_q3: qa13_q3$c,
  qa13_q4: qa13_q4$c,
  qa1_a: qa1_a$c,
  qa1_q1: qa1_q1$c,
  qa1_q2: qa1_q2$c,
  qa2_a: qa2_a$c,
  qa3_a: qa3_a$c,
  qa3_q1: qa3_q1$c,
  qa3_q2: qa3_q2$c,
  qa3_q3: qa3_q3$c,
  qa4_a: qa4_a$c,
  qa4_q1: qa4_q1$c,
  qa4_q2: qa4_q2$c,
  qa5_a: qa5_a$c,
  qa5_q1: qa5_q1$c,
  qa5_q2: qa5_q2$c,
  qa5_q3: qa5_q3$c,
  qa5_q4: qa5_q4$c,
  qa6_a: qa6_a$c,
  qa7_a: qa7_a$c,
  qa7_q1: qa7_q1$c,
  qa7_q2: qa7_q2$c,
  qa7_q3: qa7_q3$c,
  qa8_a: qa8_a$c,
  qa8_q1: qa8_q1$c,
  qa8_q2: qa8_q2$c,
  qa8_q3: qa8_q3$c,
  qa9_a: qa9_a$c,
  qa9_q: qa9_q$c,
  qq_group: qq_group$c,
  qq_qrcode: qq_qrcode$c,
  question: question$c,
  random_all: random_all$c,
  random_current_page: random_current_page$c,
  random_review: random_review$c,
  recommend: recommend$c,
  record: record$c,
  register: register$c,
  register_account: register_account$c,
  register_new_account: register_new_account$c,
  related_words: related_words$c,
  relearn: relearn$c,
  repeat_count: repeat_count$c,
  reset_password: reset_password$c,
  resource_sharing: resource_sharing$c,
  resources_from_internet: resources_from_internet$c,
  restart_learning: restart_learning$c,
  restart_practice: restart_practice$c,
  restore_default: restore_default$c,
  result: result$c,
  return_home: return_home$c,
  reverse_all: reverse_all$c,
  reverse_current_page: reverse_current_page$c,
  review: review$c,
  review_complete: review_complete$c,
  review_last: review_last$c,
  review_previous: review_previous$c,
  review_ratio: review_ratio$c,
  review_ratio_desc: review_ratio_desc$c,
  review_ratio_notice_1: review_ratio_notice_1$c,
  review_ratio_notice_2: review_ratio_notice_2$c,
  review_ratio_tooltip: review_ratio_tooltip$c,
  review_wrong_words: review_wrong_words$c,
  save: save$c,
  save_and_next: save_and_next$c,
  scan_success: scan_success$c,
  search: search$c,
  seconds: seconds$c,
  select_dict: select_dict$c,
  select_dict_to_start: select_dict_to_start$c,
  select_from_dict: select_from_dict$c,
  send_code: send_code$c,
  send_code_failed: send_code_failed$c,
  send_email: send_email$c,
  send_failed: send_failed$c,
  sending: sending$c,
  sentences_not_translated: sentences_not_translated$c,
  set_end_time: set_end_time$c,
  set_password_placeholder: set_password_placeholder$c,
  set_start_time: set_start_time$c,
  setting: setting$c,
  settings: settings$c,
  shortcut: shortcut$c,
  shortcut_key: shortcut_key$c,
  shortcut_settings: shortcut_settings$c,
  show_prev_next_word: show_prev_next_word$c,
  show_prev_next_word_desc: show_prev_next_word_desc$c,
  show_questions: show_questions$c,
  simple_word_filter: simple_word_filter$c,
  simple_word_filter_desc: simple_word_filter_desc$c,
  simple_word_list: simple_word_list$c,
  single_line: single_line$c,
  skip_to_next_stage: skip_to_next_stage$c,
  skip_word: skip_word$c,
  smart_learning: smart_learning$c,
  sound_effect: sound_effect$c,
  source_language: source_language$c,
  speed: speed$c,
  split_rule: split_rule$c,
  split_sentence: split_sentence$c,
  start: start$c,
  start_article_practice: start_article_practice$c,
  start_daily: start_daily$c,
  start_from_beginning: start_from_beginning$c,
  start_from_here: start_from_here$c,
  start_learning: start_learning$c,
  start_time: start_time$c,
  start_word_practice: start_word_practice$c,
  status: status$c,
  studied: studied$c,
  study_duration: study_duration$c,
  study_progress: study_progress$c,
  study_record: study_record$c,
  submit_exam: submit_exam$c,
  suitable_for: suitable_for$c,
  switch_display_mode: switch_display_mode$c,
  sync: sync$c,
  sync_data: sync_data$c,
  sync_failed: sync_failed$c,
  sync_success: sync_success$c,
  sync_to_account_question: sync_to_account_question$c,
  sync_to_result: sync_to_result$c,
  syncing: syncing$c,
  synonym: synonym$c,
  synonyms: synonyms$c,
  tap_allow_in_wechat: tap_allow_in_wechat$c,
  target_language: target_language$c,
  template_download: template_download$c,
  test: test$c,
  this_week_record: this_week_record$c,
  time: time$c,
  title: title$c,
  to_manage_extensions: to_manage_extensions$c,
  today_study_time: today_study_time$c,
  today_task: today_task$c,
  today_task_complete: today_task_complete$c,
  toggle_dictation_mode: toggle_dictation_mode$c,
  toggle_theme: toggle_theme$c,
  toggle_translation: toggle_translation$c,
  total: total$c,
  total_items: total_items$c,
  total_learning_time: total_learning_time$c,
  total_study_days: total_study_days$c,
  total_study_time: total_study_time$c,
  total_words: total_words$c,
  translate: translate$c,
  translate_sentence: translate_sentence$c,
  translate_word: translate_word$c,
  translation: translation$c,
  translation_complete: translation_complete$c,
  try_incognito_mode: try_incognito_mode$c,
  tv_movie: tv_movie$c,
  twitter: twitter$c,
  two: two$c,
  uk_accent: uk_accent$c,
  uncollect: uncollect$c,
  unmark_mastered: unmark_mastered$c,
  update_log: update_log$c,
  upload_audio: upload_audio$c,
  upload_lrc: upload_lrc$c,
  us_accent: us_accent$c,
  usage_guide: usage_guide$c,
  use_prev_end_seconds: use_prev_end_seconds$c,
  use_prev_end_time: use_prev_end_time$c,
  user_agreement: user_agreement$c,
  volume: volume$c,
  wait_translation: wait_translation$c,
  warm_tips: warm_tips$c,
  wechat_group: wechat_group$c,
  wechat_qrcode: wechat_qrcode$c,
  wechat_scan_login: wechat_scan_login$c,
  weekly_record: weekly_record$c,
  weekly_study_record: weekly_study_record$c,
  where_is_data: where_is_data$c,
  word: word$c,
  word_auto_pronunciation: word_auto_pronunciation$c,
  word_import_template: word_import_template$c,
  word_list: word_list$c,
  word_repeat_setting: word_repeat_setting$c,
  word_root: word_root$c,
  word_settings: word_settings$c,
  words: words$c,
  words_comma_separated: words_comma_separated$c,
  words_count: words_count$c,
  xiaohongshu: xiaohongshu$c,
  xiaohongshu_desc: xiaohongshu_desc$c,
  xiaohongshu_qrcode: xiaohongshu_qrcode$c,
  youdao_translate: youdao_translate$c
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$b = "Aprende inglés, una tecla a la vez, herramienta de práctica de código abierto";
var app_name$b = "Type Words";
var start_word_practice$b = "Iniciar práctica de palabras";
var start_article_practice$b = "Iniciar práctica de artículos";
var home_word_practice$b = "Práctica de palabras";
var home_word_practice_desc1$b = "Modos: Seguimiento/Dictado/Autoexamen/Recitación";
var home_word_practice_desc2$b = "Aprendizaje inteligente: Planificación inteligente";
var home_word_practice_desc3$b = "Aprendizaje libre: Sin restricciones";
var home_article_practice$b = "Práctica de artículos";
var home_article_practice_desc1$b = "Libros incorporados, agregar artículos";
var home_article_practice_desc2$b = "Modo dual de seguimiento + recitación";
var home_article_practice_desc3$b = "Soporte para escuchar mientras recita";
var home_collection$b = "Favoritos, Errores, Dominadas";
var home_collection_desc1$b = "Entrada incorrecta se agrega automáticamente";
var home_collection_desc2$b = "Agregar a dominadas, omitir después";
var home_collection_desc3$b = "Agregar a favoritos para revisar";
var home_vocabulary$b = "Vocabulario masivo";
var home_vocabulary_desc$b = "Vocabulario incorporado de básico a avanzado";
var home_free_opensource$b = "Gratis y código abierto";
var home_free_opensource_desc1$b = "Completamente de código abierto";
var home_free_opensource_desc2$b = "Uso gratuito";
var home_free_opensource_desc3$b = "Implementación privada";
var home_customization$b = "Altamente personalizable";
var home_customization_desc1$b = "Efectos de sonido de teclado";
var home_customization_desc2$b = "Teclas de acceso personalizables";
var home_customization_desc3$b = "Configuración altamente personalizable";
var home_design$b = "Simple y eficiente";
var home_design_desc1$b = "Diseño simple, UI moderna";
var home_design_desc2$b = "Interfaz limpia, operación simple";
var home_design_desc3$b = "Sin seguimiento forzado";
var home_personalized$b = "Aprendizaje personalizado";
var home_personalized_desc1$b = "Agregar libremente diccionarios y artículos";
var home_personalized_desc2$b = "Personalizar plan de aprendizaje";
var home_personalized_desc3$b = "Múltiples estrategias de aprendizaje";
var cn_limit_no1$b = "川公网安备51015602001426号";
var cn_limit_no2$b = "蜀ICP备2025157466号-2";
var setting$b = "Configuración";
var edit$b = "Editar";
var cancel$b = "Cancelar";
var confirm$b = "Confirmar";
var save$b = "Guardar";
var close$b = "Cerrar";
var search$b = "Buscar";
var more$b = "Más";
var loading$b = "Cargando";
var introduction$b = "Introducción";
var learn$b = "Aprender";
var practice$b = "Practicar";
var test$b = "Prueba";
var feedback$b = "Comentarios";
var document$b = "Recursos";
var help$b = "Ayuda";
var about$b = "Acerca de";
var login$b = "Iniciar sesión";
var register$b = "Registrarse";
var register_account$b = "Registrar cuenta";
var register_new_account$b = "Registrar nueva cuenta";
var code_login$b = "Inicio con código";
var password_login$b = "Inicio con contraseña";
var phone_placeholder$b = "Ingrese su número de teléfono";
var code_placeholder$b = "Ingrese el código de verificación";
var account_placeholder$b = "Ingrese teléfono/correo";
var password_placeholder$b = "Ingrese su contraseña";
var auto_register_notice$b = "Los números no registrados se registrarán automáticamente";
var forgot_password$b = "¿Olvidó su contraseña?";
var reset_password$b = "Restablecer contraseña";
var set_password_placeholder$b = "Por favor establezca contraseña";
var confirm_password_placeholder$b = "Por favor confirme contraseña";
var new_password_placeholder$b = "Ingrese nueva contraseña";
var confirm_new_password$b = "Confirmar nueva contraseña";
var wechat_scan_login$b = "Iniciar con escaneo WeChat";
var scan_success$b = "Escaneo exitoso";
var tap_allow_in_wechat$b = "Toque permitir en WeChat para iniciar";
var login_cancelled$b = "Inicio cancelado";
var login_again$b = "Iniciar de nuevo";
var sync_data$b = "Sincronizar datos";
var local_data_detected$b = "Datos locales detectados";
var sync_to_account_question$b = "¿Sincronizar a la cuenta?";
var no_sync$b = "No sincronizar";
var sync$b = "Sincronizar";
var syncing$b = "Sincronizando";
var sync_failed$b = "Sincronización fallida";
var sync_success$b = "Sincronización exitosa";
var enter_website$b = "Entrar al sitio";
var general_settings$b = "Configuración general";
var word_settings$b = "Configuración de palabras";
var article_settings$b = "Configuración de artículos";
var data_management$b = "Gestión de datos";
var shortcut_settings$b = "Configuración de atajos";
var update_log$b = "Registro de actualizaciones";
var shortcut_key$b = "Atajo (clic para modificar)";
var no_shortcut_set$b = "Sin atajo configurado";
var press_key_to_set$b = "Presione tecla para configurar";
var click_here_when_done$b = "Haga clic aquí cuando termine";
var restore_default$b = "Restaurar predeterminado";
var data_saved_locally$b = "Todos los datos guardados localmente";
var export_data_backup$b = "Exportar copia de seguridad (ZIP)";
var import_data_restore$b = "Importar restauración de datos";
var import_warning$b = "La importación sobrescribirá todos los datos";
var words$b = "Palabras";
var no_dict_selected$b = "Sin diccionario seleccionado";
var select_dict_to_start$b = "Seleccione un diccionario para comenzar";
var select_dict$b = "Seleccionar diccionario";
var change_progress$b = "Cambiar progreso";
var estimated_completion$b = "Finalización estimada";
var current_progress$b = "Progreso actual";
var learned$b = "Aprendido";
var completed_review_stage$b = "Completado, entrando en etapa de revisión";
var today_task$b = "Tarea de hoy";
var last_task$b = "Última tarea";
var word_list$b = "Lista de palabras";
var daily_goal$b = "Meta diaria";
var words_count$b = "palabras";
var change$b = "Cambiar";
var new_words_count$b = "Nuevas palabras";
var review_last$b = "Revisar último";
var review_previous$b = "Revisar anterior";
var start_learning$b = "Comenzar a aprender";
var continue_learning$b = "Continuar aprendiendo";
var free_practice$b = "Práctica libre";
var continue_free_practice$b = "Continuar práctica libre";
var smart_learning$b = "Aprendizaje inteligente";
var review$b = "Repasar";
var random_review$b = "Revisión aleatoria";
var my_dictionaries$b = "Mis diccionarios";
var manage_dict$b = "Gestionar diccionarios";
var create_personal_dict$b = "Crear diccionario personal";
var recommend$b = "Recomendado";
var articles$b = "Artículos";
var this_week_record$b = "Registros de esta semana";
var change_book$b = "Cambiar";
var today_study_time$b = "Tiempo de estudio de hoy";
var total_study_days$b = "Días totales de estudio";
var total_study_time$b = "Tiempo total de estudio";
var my_books$b = "Mis libros";
var manage_books$b = "Gestionar libros";
var create_personal_book$b = "Crear libro personal";
var article_management$b = "Gestión de artículos";
var toggle_translation$b = "Alternar traducción";
var switch_display_mode$b = "Cambiar modo de visualización";
var line_by_line$b = "Línea por línea";
var single_line$b = "Línea única";
var comparison$b = "Comparación";
var question$b = "Pregunta";
var study_record$b = "Registro de estudio";
var play_next_after_end$b = "Reproducir siguiente al terminar";
var create_book$b = "Crear libro";
var edit_book$b = "Editar libro";
var dict_list$b = "Lista de diccionarios";
var book_list$b = "Lista de libros";
var word$b = "Palabra";
var phonetic$b = "Fonética";
var translation$b = "Traducción";
var example_sentence$b = "Oración de ejemplo";
var phrase$b = "Frase";
var synonym$b = "Sinónimo";
var related_words$b = "Palabras relacionadas";
var etymology$b = "Etimología";
var add_word$b = "Agregar palabra";
var edit_word$b = "Editar palabra";
var create_dict$b = "Crear diccionario";
var edit_dict$b = "Editar diccionario";
var faq$b = "Preguntas frecuentes";
var is_free$b = "¿El sitio es gratuito?";
var cannot_type$b = "¿No puede escribir, el teclado no responde?";
var where_is_data$b = "¿Dónde están los datos? ¿Cómo usar en varios dispositivos?";
var resource_sharing$b = "Recursos de aprendizaje de inglés";
var all_resources$b = "Todos los recursos";
var new_concept_english$b = "Nuevo Concepto Inglés";
var tv_movie$b = "TV/Película";
var grammar_learning$b = "Aprendizaje de gramática";
var listening_training$b = "Entrenamiento de escucha";
var warm_tips$b = "Consejos";
var resources_from_internet$b = "Todos los recursos recopilados de internet, solo para aprendizaje";
var toggle_theme$b = "Cambiar tema";
var english_document$b = "Recursos de inglés";
var empty_placeholder$b = "Vacío~";
var custom$b = "Personalizado";
var back$b = "Volver";
var total_items$b = "elementos";
var batch_delete$b = "Eliminar lote";
var confirm_delete_selected$b = "¿Confirmar eliminar todos los seleccionados?";
var change_order$b = "Cambiar orden";
var list_order_setting$b = "Configuración de orden de lista";
var reverse_current_page$b = "Invertir página actual";
var reverse_all$b = "Invertir todo";
var random_current_page$b = "Mezclar página actual";
var random_all$b = "Mezclar todo";
var apply$b = "Aplicar";
var add$b = "Agregar";
var collect$b = "Favorito";
var uncollect$b = "Quitar favorito";
var mark_mastered$b = "Marcar como dominado";
var unmark_mastered$b = "Desmarcar dominado";
var about_thanks$b = "¡Gracias por usar este proyecto! Es un proyecto de código abierto, de uso gratuito. Si le resulta útil, ¡déjenos una estrella en GitHub!";
var github_address$b = "GitHub:";
var about_wechat_feedback$b = "Comentarios de WeChat:";
var about_ticket_feedback$b = "Comentarios de ticket:";
var about_other_channels$b = "Otros canales:";
var wait_translation$b = "Por favor espere a que se complete la traducción";
var migrate_data$b = "Migrar datos";
var migrate_new_domain$b = "Este sitio web tiene un nuevo dominio";
var migrate_old_domain_notice$b = "El dominio antiguo será descontinuado. Debido a restricciones de seguridad del navegador, los datos no se pueden compartir entre sitios. Por favor transfiera sus datos manualmente.";
var migrate_later_notice$b = "Si no desea migrar ahora, puede cerrar este diálogo y migrar más tarde en \"Configuración\" -> \"Gestión de datos\"";
var author$b = "Autor:";
var features$b = "Características:";
var suitable_for$b = "Adecuado para:";
var open_link$b = "Abrir enlace";
var qq_group$b = "Grupo QQ";
var xiaohongshu$b = "Xiaohongshu";
var follow_x_account$b = "Seguir mi cuenta X {x_account}";
var twitter$b = "Twitter";
var send_email$b = "Enviar correo a {email}";
var email$b = "Correo";
var xiaohongshu_desc$b = "Síguenos en Xiaohongshu para obtener las últimas actualizaciones del equipo de desarrollo, comparte tu experiencia y sugerencias";
var xiaohongshu_qrcode$b = "Código QR de Xiaohongshu";
var community_desc$b = "Únete a nuestra comunidad para comunicarte con el equipo de desarrollo, comparte tu experiencia y sugerencias";
var qq_qrcode$b = "Código QR del grupo QQ";
var wechat_group$b = "Grupo WeChat";
var wechat_qrcode$b = "Código QR del grupo WeChat";
var github_project$b = "Proyecto GitHub";
var ie_not_supported$b = "El navegador IE no es compatible";
var ie_use_modern_browser$b = "Type Words está construido con tecnología moderna, use Chrome, Edge, Firefox u otros navegadores modernos";
var download_chrome$b = "Descargar Chrome";
var i_understand$b = "Entiendo";
var ignore_case$b = "Ignorar mayúsculas";
var ignore_case_desc$b = "Cuando está habilitado, la entrada no distingue entre mayúsculas y minúsculas";
var allow_dictation_tip$b = "Permitir pistas en modo dictado";
var allow_dictation_tip_desc$b = "Cuando está habilitado, puede pasar el cursor sobre la palabra o presionar una tecla de acceso rápido para mostrar la respuesta correcta";
var simple_word_filter$b = "Filtro de palabras simples";
var simple_word_filter_desc$b = "Cuando está habilitado, las palabras simples se excluirán de la práctica; las palabras simples no se contarán en las estadísticas de artículos";
var simple_word_list$b = "Lista de palabras simples";
var words_comma_separated$b = "Múltiples palabras separadas por comas";
var sound_effect$b = "Efectos de sonido";
var pronunciation_accent$b = "Acento de pronunciación";
var pronunciation_accent_desc$b = "Solo afecta la pronunciación de palabras; los artículos usan acento americano";
var please_select$b = "Por favor seleccione";
var us_accent$b = "Americano";
var uk_accent$b = "Británico";
var keyboard_sound$b = "Sonido de tecla";
var keyboard_sound_effect$b = "Efecto de sonido de tecla";
var volume$b = "Volumen";
var show_prev_next_word$b = "Mostrar palabra anterior/siguiente";
var show_prev_next_word_desc$b = "Cuando está habilitado, las palabras anterior y siguiente se mostrarán arriba durante la práctica";
var disable_practice_setting_dialog$b = "No mostrar diálogo de configuración de práctica por defecto";
var disable_practice_setting_dialog_desc$b = "En la página de detalles del diccionario, si mostrar el diálogo de configuración de práctica después de hacer clic en el botón aprender";
var clear_input_on_error$b = "Borrar entrada en caso de error";
var word_repeat_setting$b = "Configuración de repetición de palabras";
var repeat_count$b = "Número de repeticiones";
var review_ratio$b = "Proporción de repaso";
var review_ratio_desc$b = "Proporción de palabras de repaso a palabras nuevas. Los cambios surten efecto en la próxima sesión";
var word_auto_pronunciation$b = "Pronunciación automática";
var speed$b = "Velocidad";
var effect_sound$b = "Sonido de efecto (sonidos de error y completado)";
var auto_switch$b = "Cambio automático";
var auto_next_word$b = "Siguiente palabra automática";
var auto_next_word_desc$b = "Solo funciona en modo seguimiento. Los modos de dictado, autoprueba y escritura requieren presionar espacio para continuar";
var auto_next_word_time$b = "Tiempo de siguiente palabra automática";
var auto_next_word_time_desc$b = "Tiempo para cambiar automáticamente a la siguiente palabra después de escribir correctamente";
var milliseconds$b = "ms";
var font_setting$b = "Configuración de fuente";
var foreign_font$b = "Fuente de idioma extranjero";
var chinese_font$b = "Fuente china";
var auto_play_sentence$b = "Reproducir oración automáticamente";
var ignore_symbols_numbers_names$b = "Ignorar símbolos, números y nombres al escribir";
var settings$b = "Configuración";
var please_select_dict$b = "Por favor seleccione un diccionario primero";
var learning_settings$b = "Configuración de aprendizaje";
var total$b = "Total";
var estimated$b = "Estimado";
var days_to_complete$b = "días para completar";
var from_word$b = "Comenzando desde la palabra";
var start_daily$b = ", diariamente";
var new_words$b = "palabras nuevas";
var review_ratio_tooltip$b = "Proporción de palabras de repaso a palabras nuevas";
var review_ratio_notice_1$b = "Cuando el aprendizaje no está completo, el conteo de repaso se genera según la proporción establecida. Si es 0, sin repaso";
var review_ratio_notice_2$b = "Después de completar el aprendizaje, el conteo de palabras nuevas se fija en 0, el conteo de repaso se genera según la proporción (si < 1, se calcula como 1)";
var daily_learning$b = "Aprendizaje diario";
var learning_progress$b = "Progreso de aprendizaje";
var select_from_dict$b = "Seleccionar posición inicial del diccionario";
var change_in_settings$b = "Se puede cambiar en la página de configuración";
var keep_default_no_show$b = "Mantener predeterminado, no mostrar de nuevo";
var review_complete$b = "Repaso completado";
var today_task_complete$b = "Tarea de hoy completada";
var study_duration$b = "Duración del estudio";
var accuracy_rate$b = "Precisión";
var weekly_study_record$b = "Registro de estudio semanal";
var studied$b = "Estudiado";
var total_words$b = "Total de palabras";
var restart_learning$b = "Reiniciar aprendizaje";
var another_round$b = "Otra ronda";
var return_home$b = "Volver a inicio";
var import_tutorial$b = "Tutorial de importación";
var import_follow_template$b = "Por favor complete los datos según el formato de la plantilla";
var import_word_required$b = "El campo de palabra es obligatorio, otros campos son opcionales";
var import_translation_hint$b = "Traducción: una traducción por línea, primero la parte del discurso, luego el contenido (ej. n.cancel); múltiples traducciones en líneas separadas";
var import_example_hint$b = "Ejemplo: una línea para el original, una línea para la traducción; múltiples ejemplos en líneas separadas";
var import_phrase_hint$b = "Frase: una línea para el original, una línea para la traducción; múltiples frases en líneas separadas";
var two$b = "dos";
var lines$b = "líneas";
var import_other_hint$b = "Sinónimos, palabras raíz, etimología: vaya al diccionario oficial, luego edite una palabra para ver el formato";
var template_download$b = "Descarga de plantilla";
var word_import_template$b = "Plantilla de importación de palabras";
var conflict_notice_title$b = "Si encuentra los siguientes problemas durante el uso:";
var keyboard_no_response$b = "El teclado no responde";
var check_plugins_installed$b = "Por favor verifique si ha instalado";
var conflict_plugin_names$b = "\"Controlador de velocidad de video\" \"Vim\" \"Mejorador de audio/video\" \"Asistente de cursos en línea\"";
var plugins_intercept_keyboard$b = "y otros plugins/scripts que interceptan eventos de teclado,";
var cause_no_response$b = "lo que causa que no haya respuesta al practicar en este sitio web";
var follow_steps_to_resolve$b = ", siga estos pasos para resolver el conflicto:";
var try_incognito_mode$b = "¿Abra este sitio web en modo incógnito del navegador y verifique si puede escribir normalmente?";
var incognito_not_working$b = "No se puede escribir en modo incógnito,";
var click_here$b = "haga clic aquí";
var feedback_or_wechat$b = "para proporcionar comentarios, o únase al grupo de WeChat:";
var incognito_working$b = "Se puede escribir en modo incógnito, por lo que es un conflicto de plugin/script";
var disable_plugin_or_exclude$b = "Deshabilite temporalmente el plugin/script correspondiente, o excluya este sitio web en la configuración del plugin/script";
var install_extension_manager$b = "Puede instalar este";
var chrome_extension$b = "extensión (versión Chrome, requiere VPN)";
var edge_extension$b = "extensión (versión Edge, sin VPN necesario)";
var to_manage_extensions$b = "para habilitar/deshabilitar rápidamente otras extensiones";
var delete_key_goes_back$b = "Presionar la tecla eliminar vuelve a la página anterior";
var browser_360_shortcut$b = "En el navegador 360, el atajo \"la tecla eliminar vuelve a la página anterior\" está configurado por defecto";
var change_browser_or_shortcut$b = "Cambie de navegador o elimine el atajo predeterminado de 360: busque \"atrás\" en la configuración del navegador";
var please_enter_name$b = "Por favor ingrese un nombre";
var name_max_20_chars$b = "El nombre no puede exceder 20 caracteres";
var name_already_exists$b = "¡El nombre ya existe!";
var add_success$b = "Agregado exitosamente";
var edit_success$b = "Modificado exitosamente";
var edit_and_add_to_dict$b = "Modificado exitosamente y agregado a mi diccionario";
var please_fill_complete$b = "Por favor complete todo";
var name$b = "Nombre";
var description$b = "Descripción";
var source_language$b = "Idioma de origen";
var target_language$b = "Idioma de destino";
var english$b = "Inglés";
var german$b = "Alemán";
var japanese$b = "Japonés";
var code$b = "Código";
var chinese$b = "Chino";
var multiple_choice$b = "Opción múltiple";
var start$b = "Comenzar";
var countdown$b = "Cuenta regresiva";
var seconds$b = "segundos";
var submit_exam$b = "Enviar examen";
var exam_color_hint$b = "Rojo claro: incorrecto, Rojo oscuro: no seleccionado, Verde: correcto";
var items_per_page$b = "elementos/página";
var jump_to$b = "Saltar a";
var page_or_index$b = "página/índice";
var please_fill_original$b = "¡Por favor complete el texto original!";
var please_fill_title$b = "¡Por favor complete el título!";
var please_fill_content$b = "¡Por favor complete el contenido!";
var audio_added_success$b = "Audio agregado exitosamente";
var lrc_parse_success$b = "Archivo LRC analizado exitosamente";
var original_text$b = "Texto original";
var title$b = "Título";
var please_fill_original_title$b = "Por favor complete el título original";
var content$b = "Contenido";
var one_sentence_per_line$b = "Una oración por línea, deje una línea en blanco entre párrafos";
var name_config_tip$b = "Después de configurar los nombres, se ignorarán automáticamente durante la práctica (opcional, habilitado por defecto)";
var name_config$b = "Configuración de nombres";
var please_paste_original$b = "Por favor pegue el texto original";
var usage_guide$b = "Guía de uso";
var copy_and_split$b = "Copie el texto original, luego divida en oraciones";
var click$b = "Haga clic";
var split_sentence$b = "Dividir oración";
var auto_split$b = "botón para dividir automáticamente";
var or$b = "o";
var manual_split$b = "editar manualmente para dividir";
var split_rule$b = "Regla de división: una oración por línea, línea en blanco entre párrafos";
var after_edit_click$b = "Después de editar, haga clic";
var sync_to_result$b = "botón para sincronizar con el panel de resultados izquierdo";
var please_fill_translation_title$b = "Por favor complete el título de traducción";
var please_fill_translation$b = "Por favor complete la traducción";
var translate$b = "Traducción";
var copy_translation_or_click$b = "Pegue la traducción, o haga clic si no hay";
var result$b = "Resultado";
var editable_auto_sync$b = "Todo editable, haga clic en el botón aplicar para sincronizar automáticamente después de editar";
var audio$b = "Audio";
var audio_management$b = "Gestión de audio";
var paragraph$b = "Párrafo";
var set_start_time$b = "Establecer hora de inicio";
var use_prev_end_time$b = "Usar hora de fin de la oración anterior";
var minus_03s$b = "Menos 0.3s";
var end$b = "Fin";
var set_end_time$b = "Establecer hora de fin";
var edit_audio_align$b = "Editar alineación de audio";
var play$b = "Reproducir";
var status$b = "Estado";
var sentences_not_translated$b = "¡{count} oraciones no traducidas!";
var translation_complete$b = "¡Traducción completa!";
var save_and_next$b = "Guardar y agregar siguiente";
var no_translation_comparison$b = "No hay comparación de traducción disponible";
var adjust_audio_timeline$b = "Ajustar línea de tiempo de audio";
var audio_timeline_tutorial$b = "Tutorial: Haga clic en reproducir, cuando el audio llegue al inicio de la oración, haga clic en grabar hora de inicio; cuando llegue al final, haga clic en grabar hora de fin";
var start_time$b = "Hora de inicio";
var jump_to_seconds$b = "Saltar a {seconds}s";
var use_prev_end_seconds$b = "Usar hora de fin de la oración anterior: {seconds}s";
var decrease_03s$b = "Disminuir 0.3s";
var increase_03s$b = "Aumentar 0.3s";
var record$b = "Grabar";
var end_time$b = "Hora de fin";
var audio_upload_notice$b = "1. Los archivos subidos se guardan localmente, los datos se perderán al cambiar de computadora, por favor haga copia de seguridad a tiempo\n2. Soporta mp3, wav, m4a y otros formatos de audio comunes";
var upload_audio$b = "Subir audio";
var upload_lrc$b = "Subir archivo LRC";
var name_management$b = "Gestión de nombres";
var name_ignore_config_desc$b = "Configure los nombres a ignorar, estos nombres se omitirán automáticamente durante la práctica (opcional, habilitado por defecto)";
var add_name$b = "Agregar nombre";
var enter_name$b = "Ingrese el nombre";
var collect_word$b = "Recopilar palabra";
var copy$b = "Copiar";
var copy_sentence$b = "Copiar oración";
var copied$b = "Copiado";
var copy_word$b = "Copiar palabra";
var start_from_here$b = "Comenzar desde aquí";
var play_sentence$b = "Reproducir oración";
var grammar_analysis$b = "Análisis gramatical";
var copied_open_grammar$b = "¡Copiado! ¡Abriendo sitio de análisis gramatical!";
var youdao_translate$b = "Diccionario Youdao";
var translate_word$b = "Traducir palabra";
var translate_sentence$b = "Traducir oración";
var restart_practice$b = "Reiniciar práctica";
var next_article$b = "Siguiente artículo";
var learning_record$b = "Registro de aprendizaje";
var total_learning_time$b = "Tiempo total de aprendizaje";
var current$b = "Actual";
var show_questions$b = "Mostrar preguntas";
var explanation$b = "Explicación";
var encouragement_95$b = "¡Excelente! ¡Sigue así!";
var encouragement_85$b = "¡Buen trabajo, sigue así!";
var encouragement_70$b = "¡Buena puntuación, sigue adelante!";
var encouragement_default$b = "¡Cada práctica es progreso, sigue adelante!";
var daily_task_complete$b = "Tarea diaria completada";
var weekly_record$b = "Registro semanal de estudio";
var study_progress$b = "Progreso de estudio";
var relearn$b = "Reaprender";
var start_from_beginning$b = "Empezar desde el principio";
var another_group$b = "Otro grupo";
var back_to_home$b = "Volver al inicio";
var know_word_tip$b = "¡Si seleccionó \"Lo conozco\" por error, presione la tecla eliminar para volver a seleccionar!";
var press_delete_reinput$b = "Presione la tecla eliminar para volver a ingresar";
var press_space_continue$b = "Presione espacio para continuar";
var shortcut$b = "Atajo";
var i_know$b = "Lo conozco";
var i_dont_know$b = "No lo conozco";
var phrases$b = "Frases";
var synonyms$b = "Sinónimos";
var word_root$b = "Raíz de palabra";
var review_wrong_words$b = "Revisar palabras incorrectas";
var collapse$b = "Contraer";
var expand$b = "Expandir";
var minutes$b = "minutos";
var time$b = "Tiempo";
var errors$b = "Errores";
var skip_to_next_stage$b = "Saltar a la siguiente etapa";
var skip_word$b = "Saltar palabra";
var toggle_dictation_mode$b = "Alternar modo de dictado";
var send_failed$b = "Envío fallido";
var send_code_failed$b = "Error al enviar código de verificación";
var sending$b = "Enviando";
var send_code$b = "Enviar código";
var agree_terms_notice$b = "Al continuar, acepta nuestros";
var user_agreement$b = "Acuerdo de usuario";
var and$b = "y";
var privacy_policy$b = "Política de privacidad";
var important_notice$b = "Aviso importante";
var dont_remind$b = "No recordar de nuevo";
var function_desc$b = "Características";
var qa1_a$b = "¿El sitio web es gratis?";
var qa1_q1$b = "No completamente gratis. Para el desarrollo a largo plazo, los cargos futuros son inevitables, pero no se requerirá pago para usar. Intentamos encontrar un equilibrio entre gratis y de pago.";
var qa1_q2$b = "El proyecto es de código abierto, puedes implementarlo tú mismo.";
var qa2_a$b = "¿No puede escribir, el teclado no responde?";
var qa3_a$b = "¿Dónde están los datos? ¿Cómo usar en múltiples computadoras/dispositivos?";
var qa3_q1$b = "Todos los datos del usuario se guardan en el navegador local. Si necesita usar Type Words en diferentes dispositivos o navegadores, debe exportar e importar datos manualmente.";
var qa3_q2$b = "Configuración -> Configuración de datos -> Exportar datos en la computadora original -> Enviar a la nueva computadora a través de software social -> Importar en la nueva computadora";
var qa3_q3$b = "El sistema de cuentas está en desarrollo.";
var qa4_a$b = "El sitio web planifica demasiadas palabras automáticamente, ¿cómo modificar?";
var qa4_q1$b = "La proporción predeterminada de palabras de repaso a palabras nuevas es 1:4.";
var qa4_q2$b = "Puede modificarlo en Configuración -> Configuración de palabras -> Proporción de repaso";
var qa5_a$b = "Se tarda demasiado en completar una sesión de aprendizaje, ¿el proceso es demasiado largo?";
var qa5_q1$b = "Este es de hecho un problema. Un proceso largo puede hacer que la gente pierda la motivación.";
var qa5_q2$b = "Las palabras incorrectas se repetirán. Si fue solo un error de escritura, puede presionar Tab para omitir.";
var qa5_q3$b = "Durante la revisión, solo las palabras marcadas como \"no conozco\" requieren dictado.";
var qa5_q4$b = "Después del lanzamiento del sistema de cuentas, se agregará la función de curva de memoria de Ebbinghaus.";
var qa6_a$b = "¿Se agregará la función de curva de memoria de Ebbinghaus?";
var qa7_a$b = "¿Puedo agregar palabras/diccionarios personalizados/importar mis propias palabras?";
var qa7_q1$b = "Sí, en la página de Palabras, haga clic en \"Crear diccionario personal\"";
var qa7_q2$b = "Después de la creación, haga clic en el icono \"Agregar palabra\" para agregar sus propias palabras";
var qa7_q3$b = "También puede hacer clic en el icono \"Importar\" para importar en lote";
var qa8_a$b = "¿Puedo agregar artículos/libros personalizados/importar mis propios artículos?";
var qa8_q1$b = "Sí, los pasos son básicamente los mismos que agregar palabras";
var qa8_q2$b = "En la página de Artículos, haga clic en \"Crear libro personal\"";
var qa8_q3$b = "Después de la creación, haga clic en el botón \"Gestión de artículos\" en la parte superior";
var qa9_a$b = "¿Cómo desactivar los sonidos de las teclas?";
var qa9_q$b = "Configuración -> Configuración general -> Efectos de sonido -> Sonido de teclas, desactivarlo";
var qa10_a$b = "¿Puedo usarlo en una tableta?";
var qa10_q1$b = "Las tabletas se pueden usar, pero usar un teclado Bluetooth proporciona una mejor experiencia.";
var qa10_q2$b = "Después de conectar un teclado Bluetooth, las tabletas Android necesitan habilitar manualmente el \"Modo de escritorio\".";
var qa11_a$b = "¿Puedo usarlo en un teléfono?";
var qa11_q$b = "Los teléfonos se pueden usar, pero la optimización para teléfonos aún no se ha realizado. Se recomienda usar en una computadora o tableta.";
var qa12_a$b = "¿Hay una APP o mini-programa?";
var qa12_q$b = "No, solo el sitio web";
var qa13_a$b = "¿Cómo proporcionar comentarios al equipo de desarrollo?";
var qa13_q1$b = "Puede unirse a nuestro grupo oficial de WeChat, describir en detalle las funciones que desea";
var qa13_q2$b = "Si encuentra errores en la aplicación, proporcione una descripción detallada y los pasos para reproducir";
var qa13_q3$b = "También puede enviarnos un ticket de soporte";
var qa13_q4$b = "También puede enviar en github/issues";
const es = {
	app_desc: app_desc$b,
	app_name: app_name$b,
	start_word_practice: start_word_practice$b,
	start_article_practice: start_article_practice$b,
	home_word_practice: home_word_practice$b,
	home_word_practice_desc1: home_word_practice_desc1$b,
	home_word_practice_desc2: home_word_practice_desc2$b,
	home_word_practice_desc3: home_word_practice_desc3$b,
	home_article_practice: home_article_practice$b,
	home_article_practice_desc1: home_article_practice_desc1$b,
	home_article_practice_desc2: home_article_practice_desc2$b,
	home_article_practice_desc3: home_article_practice_desc3$b,
	home_collection: home_collection$b,
	home_collection_desc1: home_collection_desc1$b,
	home_collection_desc2: home_collection_desc2$b,
	home_collection_desc3: home_collection_desc3$b,
	home_vocabulary: home_vocabulary$b,
	home_vocabulary_desc: home_vocabulary_desc$b,
	home_free_opensource: home_free_opensource$b,
	home_free_opensource_desc1: home_free_opensource_desc1$b,
	home_free_opensource_desc2: home_free_opensource_desc2$b,
	home_free_opensource_desc3: home_free_opensource_desc3$b,
	home_customization: home_customization$b,
	home_customization_desc1: home_customization_desc1$b,
	home_customization_desc2: home_customization_desc2$b,
	home_customization_desc3: home_customization_desc3$b,
	home_design: home_design$b,
	home_design_desc1: home_design_desc1$b,
	home_design_desc2: home_design_desc2$b,
	home_design_desc3: home_design_desc3$b,
	home_personalized: home_personalized$b,
	home_personalized_desc1: home_personalized_desc1$b,
	home_personalized_desc2: home_personalized_desc2$b,
	home_personalized_desc3: home_personalized_desc3$b,
	cn_limit_no1: cn_limit_no1$b,
	cn_limit_no2: cn_limit_no2$b,
	setting: setting$b,
	edit: edit$b,
	"delete": "Eliminar",
	cancel: cancel$b,
	confirm: confirm$b,
	save: save$b,
	close: close$b,
	search: search$b,
	more: more$b,
	loading: loading$b,
	introduction: introduction$b,
	learn: learn$b,
	practice: practice$b,
	test: test$b,
	feedback: feedback$b,
	document: document$b,
	help: help$b,
	about: about$b,
	login: login$b,
	register: register$b,
	register_account: register_account$b,
	register_new_account: register_new_account$b,
	code_login: code_login$b,
	password_login: password_login$b,
	phone_placeholder: phone_placeholder$b,
	code_placeholder: code_placeholder$b,
	account_placeholder: account_placeholder$b,
	password_placeholder: password_placeholder$b,
	auto_register_notice: auto_register_notice$b,
	forgot_password: forgot_password$b,
	reset_password: reset_password$b,
	set_password_placeholder: set_password_placeholder$b,
	confirm_password_placeholder: confirm_password_placeholder$b,
	new_password_placeholder: new_password_placeholder$b,
	confirm_new_password: confirm_new_password$b,
	wechat_scan_login: wechat_scan_login$b,
	scan_success: scan_success$b,
	tap_allow_in_wechat: tap_allow_in_wechat$b,
	login_cancelled: login_cancelled$b,
	login_again: login_again$b,
	sync_data: sync_data$b,
	local_data_detected: local_data_detected$b,
	sync_to_account_question: sync_to_account_question$b,
	no_sync: no_sync$b,
	sync: sync$b,
	syncing: syncing$b,
	sync_failed: sync_failed$b,
	sync_success: sync_success$b,
	enter_website: enter_website$b,
	general_settings: general_settings$b,
	word_settings: word_settings$b,
	article_settings: article_settings$b,
	data_management: data_management$b,
	shortcut_settings: shortcut_settings$b,
	update_log: update_log$b,
	"function": "Función",
	shortcut_key: shortcut_key$b,
	no_shortcut_set: no_shortcut_set$b,
	press_key_to_set: press_key_to_set$b,
	click_here_when_done: click_here_when_done$b,
	restore_default: restore_default$b,
	data_saved_locally: data_saved_locally$b,
	export_data_backup: export_data_backup$b,
	import_data_restore: import_data_restore$b,
	import_warning: import_warning$b,
	words: words$b,
	no_dict_selected: no_dict_selected$b,
	select_dict_to_start: select_dict_to_start$b,
	select_dict: select_dict$b,
	change_progress: change_progress$b,
	estimated_completion: estimated_completion$b,
	current_progress: current_progress$b,
	learned: learned$b,
	completed_review_stage: completed_review_stage$b,
	today_task: today_task$b,
	last_task: last_task$b,
	word_list: word_list$b,
	daily_goal: daily_goal$b,
	words_count: words_count$b,
	change: change$b,
	new_words_count: new_words_count$b,
	review_last: review_last$b,
	review_previous: review_previous$b,
	start_learning: start_learning$b,
	continue_learning: continue_learning$b,
	free_practice: free_practice$b,
	continue_free_practice: continue_free_practice$b,
	smart_learning: smart_learning$b,
	review: review$b,
	random_review: random_review$b,
	my_dictionaries: my_dictionaries$b,
	manage_dict: manage_dict$b,
	create_personal_dict: create_personal_dict$b,
	recommend: recommend$b,
	articles: articles$b,
	this_week_record: this_week_record$b,
	change_book: change_book$b,
	today_study_time: today_study_time$b,
	total_study_days: total_study_days$b,
	total_study_time: total_study_time$b,
	my_books: my_books$b,
	manage_books: manage_books$b,
	create_personal_book: create_personal_book$b,
	article_management: article_management$b,
	toggle_translation: toggle_translation$b,
	switch_display_mode: switch_display_mode$b,
	line_by_line: line_by_line$b,
	single_line: single_line$b,
	comparison: comparison$b,
	question: question$b,
	study_record: study_record$b,
	play_next_after_end: play_next_after_end$b,
	create_book: create_book$b,
	edit_book: edit_book$b,
	dict_list: dict_list$b,
	book_list: book_list$b,
	word: word$b,
	phonetic: phonetic$b,
	translation: translation$b,
	example_sentence: example_sentence$b,
	phrase: phrase$b,
	synonym: synonym$b,
	related_words: related_words$b,
	etymology: etymology$b,
	add_word: add_word$b,
	edit_word: edit_word$b,
	create_dict: create_dict$b,
	edit_dict: edit_dict$b,
	"import": "Importar",
	"export": "Exportar",
	faq: faq$b,
	is_free: is_free$b,
	cannot_type: cannot_type$b,
	where_is_data: where_is_data$b,
	resource_sharing: resource_sharing$b,
	all_resources: all_resources$b,
	new_concept_english: new_concept_english$b,
	tv_movie: tv_movie$b,
	grammar_learning: grammar_learning$b,
	listening_training: listening_training$b,
	warm_tips: warm_tips$b,
	resources_from_internet: resources_from_internet$b,
	toggle_theme: toggle_theme$b,
	english_document: english_document$b,
	empty_placeholder: empty_placeholder$b,
	custom: custom$b,
	back: back$b,
	total_items: total_items$b,
	batch_delete: batch_delete$b,
	confirm_delete_selected: confirm_delete_selected$b,
	change_order: change_order$b,
	list_order_setting: list_order_setting$b,
	reverse_current_page: reverse_current_page$b,
	reverse_all: reverse_all$b,
	random_current_page: random_current_page$b,
	random_all: random_all$b,
	apply: apply$b,
	add: add$b,
	collect: collect$b,
	uncollect: uncollect$b,
	mark_mastered: mark_mastered$b,
	unmark_mastered: unmark_mastered$b,
	about_thanks: about_thanks$b,
	github_address: github_address$b,
	about_wechat_feedback: about_wechat_feedback$b,
	about_ticket_feedback: about_ticket_feedback$b,
	about_other_channels: about_other_channels$b,
	wait_translation: wait_translation$b,
	migrate_data: migrate_data$b,
	migrate_new_domain: migrate_new_domain$b,
	migrate_old_domain_notice: migrate_old_domain_notice$b,
	migrate_later_notice: migrate_later_notice$b,
	author: author$b,
	features: features$b,
	suitable_for: suitable_for$b,
	open_link: open_link$b,
	qq_group: qq_group$b,
	xiaohongshu: xiaohongshu$b,
	follow_x_account: follow_x_account$b,
	twitter: twitter$b,
	send_email: send_email$b,
	email: email$b,
	xiaohongshu_desc: xiaohongshu_desc$b,
	xiaohongshu_qrcode: xiaohongshu_qrcode$b,
	community_desc: community_desc$b,
	qq_qrcode: qq_qrcode$b,
	wechat_group: wechat_group$b,
	wechat_qrcode: wechat_qrcode$b,
	github_project: github_project$b,
	ie_not_supported: ie_not_supported$b,
	ie_use_modern_browser: ie_use_modern_browser$b,
	download_chrome: download_chrome$b,
	i_understand: i_understand$b,
	ignore_case: ignore_case$b,
	ignore_case_desc: ignore_case_desc$b,
	allow_dictation_tip: allow_dictation_tip$b,
	allow_dictation_tip_desc: allow_dictation_tip_desc$b,
	simple_word_filter: simple_word_filter$b,
	simple_word_filter_desc: simple_word_filter_desc$b,
	simple_word_list: simple_word_list$b,
	words_comma_separated: words_comma_separated$b,
	sound_effect: sound_effect$b,
	pronunciation_accent: pronunciation_accent$b,
	pronunciation_accent_desc: pronunciation_accent_desc$b,
	please_select: please_select$b,
	us_accent: us_accent$b,
	uk_accent: uk_accent$b,
	keyboard_sound: keyboard_sound$b,
	keyboard_sound_effect: keyboard_sound_effect$b,
	volume: volume$b,
	show_prev_next_word: show_prev_next_word$b,
	show_prev_next_word_desc: show_prev_next_word_desc$b,
	disable_practice_setting_dialog: disable_practice_setting_dialog$b,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$b,
	clear_input_on_error: clear_input_on_error$b,
	word_repeat_setting: word_repeat_setting$b,
	repeat_count: repeat_count$b,
	review_ratio: review_ratio$b,
	review_ratio_desc: review_ratio_desc$b,
	word_auto_pronunciation: word_auto_pronunciation$b,
	speed: speed$b,
	effect_sound: effect_sound$b,
	auto_switch: auto_switch$b,
	auto_next_word: auto_next_word$b,
	auto_next_word_desc: auto_next_word_desc$b,
	auto_next_word_time: auto_next_word_time$b,
	auto_next_word_time_desc: auto_next_word_time_desc$b,
	milliseconds: milliseconds$b,
	font_setting: font_setting$b,
	foreign_font: foreign_font$b,
	chinese_font: chinese_font$b,
	auto_play_sentence: auto_play_sentence$b,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$b,
	settings: settings$b,
	please_select_dict: please_select_dict$b,
	learning_settings: learning_settings$b,
	total: total$b,
	estimated: estimated$b,
	days_to_complete: days_to_complete$b,
	from_word: from_word$b,
	start_daily: start_daily$b,
	new_words: new_words$b,
	review_ratio_tooltip: review_ratio_tooltip$b,
	review_ratio_notice_1: review_ratio_notice_1$b,
	review_ratio_notice_2: review_ratio_notice_2$b,
	daily_learning: daily_learning$b,
	learning_progress: learning_progress$b,
	select_from_dict: select_from_dict$b,
	change_in_settings: change_in_settings$b,
	keep_default_no_show: keep_default_no_show$b,
	review_complete: review_complete$b,
	today_task_complete: today_task_complete$b,
	study_duration: study_duration$b,
	accuracy_rate: accuracy_rate$b,
	weekly_study_record: weekly_study_record$b,
	studied: studied$b,
	total_words: total_words$b,
	restart_learning: restart_learning$b,
	another_round: another_round$b,
	return_home: return_home$b,
	import_tutorial: import_tutorial$b,
	import_follow_template: import_follow_template$b,
	import_word_required: import_word_required$b,
	import_translation_hint: import_translation_hint$b,
	import_example_hint: import_example_hint$b,
	import_phrase_hint: import_phrase_hint$b,
	two: two$b,
	lines: lines$b,
	import_other_hint: import_other_hint$b,
	template_download: template_download$b,
	word_import_template: word_import_template$b,
	conflict_notice_title: conflict_notice_title$b,
	keyboard_no_response: keyboard_no_response$b,
	check_plugins_installed: check_plugins_installed$b,
	conflict_plugin_names: conflict_plugin_names$b,
	plugins_intercept_keyboard: plugins_intercept_keyboard$b,
	cause_no_response: cause_no_response$b,
	follow_steps_to_resolve: follow_steps_to_resolve$b,
	try_incognito_mode: try_incognito_mode$b,
	incognito_not_working: incognito_not_working$b,
	click_here: click_here$b,
	feedback_or_wechat: feedback_or_wechat$b,
	incognito_working: incognito_working$b,
	disable_plugin_or_exclude: disable_plugin_or_exclude$b,
	install_extension_manager: install_extension_manager$b,
	chrome_extension: chrome_extension$b,
	edge_extension: edge_extension$b,
	to_manage_extensions: to_manage_extensions$b,
	delete_key_goes_back: delete_key_goes_back$b,
	browser_360_shortcut: browser_360_shortcut$b,
	change_browser_or_shortcut: change_browser_or_shortcut$b,
	please_enter_name: please_enter_name$b,
	name_max_20_chars: name_max_20_chars$b,
	name_already_exists: name_already_exists$b,
	add_success: add_success$b,
	edit_success: edit_success$b,
	edit_and_add_to_dict: edit_and_add_to_dict$b,
	please_fill_complete: please_fill_complete$b,
	name: name$b,
	description: description$b,
	source_language: source_language$b,
	target_language: target_language$b,
	english: english$b,
	german: german$b,
	japanese: japanese$b,
	code: code$b,
	chinese: chinese$b,
	multiple_choice: multiple_choice$b,
	start: start$b,
	countdown: countdown$b,
	seconds: seconds$b,
	submit_exam: submit_exam$b,
	exam_color_hint: exam_color_hint$b,
	items_per_page: items_per_page$b,
	jump_to: jump_to$b,
	page_or_index: page_or_index$b,
	please_fill_original: please_fill_original$b,
	please_fill_title: please_fill_title$b,
	please_fill_content: please_fill_content$b,
	audio_added_success: audio_added_success$b,
	lrc_parse_success: lrc_parse_success$b,
	original_text: original_text$b,
	title: title$b,
	please_fill_original_title: please_fill_original_title$b,
	content: content$b,
	one_sentence_per_line: one_sentence_per_line$b,
	name_config_tip: name_config_tip$b,
	name_config: name_config$b,
	please_paste_original: please_paste_original$b,
	usage_guide: usage_guide$b,
	copy_and_split: copy_and_split$b,
	click: click$b,
	split_sentence: split_sentence$b,
	auto_split: auto_split$b,
	or: or$b,
	manual_split: manual_split$b,
	split_rule: split_rule$b,
	after_edit_click: after_edit_click$b,
	sync_to_result: sync_to_result$b,
	please_fill_translation_title: please_fill_translation_title$b,
	please_fill_translation: please_fill_translation$b,
	translate: translate$b,
	copy_translation_or_click: copy_translation_or_click$b,
	result: result$b,
	editable_auto_sync: editable_auto_sync$b,
	audio: audio$b,
	audio_management: audio_management$b,
	paragraph: paragraph$b,
	set_start_time: set_start_time$b,
	use_prev_end_time: use_prev_end_time$b,
	minus_03s: minus_03s$b,
	end: end$b,
	set_end_time: set_end_time$b,
	edit_audio_align: edit_audio_align$b,
	play: play$b,
	status: status$b,
	sentences_not_translated: sentences_not_translated$b,
	translation_complete: translation_complete$b,
	save_and_next: save_and_next$b,
	no_translation_comparison: no_translation_comparison$b,
	adjust_audio_timeline: adjust_audio_timeline$b,
	audio_timeline_tutorial: audio_timeline_tutorial$b,
	start_time: start_time$b,
	jump_to_seconds: jump_to_seconds$b,
	use_prev_end_seconds: use_prev_end_seconds$b,
	decrease_03s: decrease_03s$b,
	increase_03s: increase_03s$b,
	record: record$b,
	end_time: end_time$b,
	audio_upload_notice: audio_upload_notice$b,
	upload_audio: upload_audio$b,
	upload_lrc: upload_lrc$b,
	name_management: name_management$b,
	name_ignore_config_desc: name_ignore_config_desc$b,
	add_name: add_name$b,
	enter_name: enter_name$b,
	collect_word: collect_word$b,
	copy: copy$b,
	copy_sentence: copy_sentence$b,
	copied: copied$b,
	copy_word: copy_word$b,
	start_from_here: start_from_here$b,
	play_sentence: play_sentence$b,
	grammar_analysis: grammar_analysis$b,
	copied_open_grammar: copied_open_grammar$b,
	youdao_translate: youdao_translate$b,
	translate_word: translate_word$b,
	translate_sentence: translate_sentence$b,
	restart_practice: restart_practice$b,
	next_article: next_article$b,
	learning_record: learning_record$b,
	total_learning_time: total_learning_time$b,
	current: current$b,
	show_questions: show_questions$b,
	explanation: explanation$b,
	encouragement_95: encouragement_95$b,
	encouragement_85: encouragement_85$b,
	encouragement_70: encouragement_70$b,
	encouragement_default: encouragement_default$b,
	daily_task_complete: daily_task_complete$b,
	weekly_record: weekly_record$b,
	study_progress: study_progress$b,
	relearn: relearn$b,
	start_from_beginning: start_from_beginning$b,
	another_group: another_group$b,
	back_to_home: back_to_home$b,
	know_word_tip: know_word_tip$b,
	press_delete_reinput: press_delete_reinput$b,
	press_space_continue: press_space_continue$b,
	shortcut: shortcut$b,
	i_know: i_know$b,
	i_dont_know: i_dont_know$b,
	phrases: phrases$b,
	synonyms: synonyms$b,
	word_root: word_root$b,
	review_wrong_words: review_wrong_words$b,
	collapse: collapse$b,
	expand: expand$b,
	minutes: minutes$b,
	time: time$b,
	errors: errors$b,
	skip_to_next_stage: skip_to_next_stage$b,
	skip_word: skip_word$b,
	toggle_dictation_mode: toggle_dictation_mode$b,
	send_failed: send_failed$b,
	send_code_failed: send_code_failed$b,
	sending: sending$b,
	send_code: send_code$b,
	agree_terms_notice: agree_terms_notice$b,
	user_agreement: user_agreement$b,
	and: and$b,
	privacy_policy: privacy_policy$b,
	important_notice: important_notice$b,
	dont_remind: dont_remind$b,
	function_desc: function_desc$b,
	qa1_a: qa1_a$b,
	qa1_q1: qa1_q1$b,
	qa1_q2: qa1_q2$b,
	qa2_a: qa2_a$b,
	qa3_a: qa3_a$b,
	qa3_q1: qa3_q1$b,
	qa3_q2: qa3_q2$b,
	qa3_q3: qa3_q3$b,
	qa4_a: qa4_a$b,
	qa4_q1: qa4_q1$b,
	qa4_q2: qa4_q2$b,
	qa5_a: qa5_a$b,
	qa5_q1: qa5_q1$b,
	qa5_q2: qa5_q2$b,
	qa5_q3: qa5_q3$b,
	qa5_q4: qa5_q4$b,
	qa6_a: qa6_a$b,
	qa7_a: qa7_a$b,
	qa7_q1: qa7_q1$b,
	qa7_q2: qa7_q2$b,
	qa7_q3: qa7_q3$b,
	qa8_a: qa8_a$b,
	qa8_q1: qa8_q1$b,
	qa8_q2: qa8_q2$b,
	qa8_q3: qa8_q3$b,
	qa9_a: qa9_a$b,
	qa9_q: qa9_q$b,
	qa10_a: qa10_a$b,
	qa10_q1: qa10_q1$b,
	qa10_q2: qa10_q2$b,
	qa11_a: qa11_a$b,
	qa11_q: qa11_q$b,
	qa12_a: qa12_a$b,
	qa12_q: qa12_q$b,
	qa13_a: qa13_a$b,
	qa13_q1: qa13_q1$b,
	qa13_q2: qa13_q2$b,
	qa13_q3: qa13_q3$b,
	qa13_q4: qa13_q4$b
};

const es$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$b,
  about_other_channels: about_other_channels$b,
  about_thanks: about_thanks$b,
  about_ticket_feedback: about_ticket_feedback$b,
  about_wechat_feedback: about_wechat_feedback$b,
  account_placeholder: account_placeholder$b,
  accuracy_rate: accuracy_rate$b,
  add: add$b,
  add_name: add_name$b,
  add_success: add_success$b,
  add_word: add_word$b,
  adjust_audio_timeline: adjust_audio_timeline$b,
  after_edit_click: after_edit_click$b,
  agree_terms_notice: agree_terms_notice$b,
  all_resources: all_resources$b,
  allow_dictation_tip: allow_dictation_tip$b,
  allow_dictation_tip_desc: allow_dictation_tip_desc$b,
  and: and$b,
  another_group: another_group$b,
  another_round: another_round$b,
  app_desc: app_desc$b,
  app_name: app_name$b,
  apply: apply$b,
  article_management: article_management$b,
  article_settings: article_settings$b,
  articles: articles$b,
  audio: audio$b,
  audio_added_success: audio_added_success$b,
  audio_management: audio_management$b,
  audio_timeline_tutorial: audio_timeline_tutorial$b,
  audio_upload_notice: audio_upload_notice$b,
  author: author$b,
  auto_next_word: auto_next_word$b,
  auto_next_word_desc: auto_next_word_desc$b,
  auto_next_word_time: auto_next_word_time$b,
  auto_next_word_time_desc: auto_next_word_time_desc$b,
  auto_play_sentence: auto_play_sentence$b,
  auto_register_notice: auto_register_notice$b,
  auto_split: auto_split$b,
  auto_switch: auto_switch$b,
  back: back$b,
  back_to_home: back_to_home$b,
  batch_delete: batch_delete$b,
  book_list: book_list$b,
  browser_360_shortcut: browser_360_shortcut$b,
  cancel: cancel$b,
  cannot_type: cannot_type$b,
  cause_no_response: cause_no_response$b,
  change: change$b,
  change_book: change_book$b,
  change_browser_or_shortcut: change_browser_or_shortcut$b,
  change_in_settings: change_in_settings$b,
  change_order: change_order$b,
  change_progress: change_progress$b,
  check_plugins_installed: check_plugins_installed$b,
  chinese: chinese$b,
  chinese_font: chinese_font$b,
  chrome_extension: chrome_extension$b,
  clear_input_on_error: clear_input_on_error$b,
  click: click$b,
  click_here: click_here$b,
  click_here_when_done: click_here_when_done$b,
  close: close$b,
  cn_limit_no1: cn_limit_no1$b,
  cn_limit_no2: cn_limit_no2$b,
  code: code$b,
  code_login: code_login$b,
  code_placeholder: code_placeholder$b,
  collapse: collapse$b,
  collect: collect$b,
  collect_word: collect_word$b,
  community_desc: community_desc$b,
  comparison: comparison$b,
  completed_review_stage: completed_review_stage$b,
  confirm: confirm$b,
  confirm_delete_selected: confirm_delete_selected$b,
  confirm_new_password: confirm_new_password$b,
  confirm_password_placeholder: confirm_password_placeholder$b,
  conflict_notice_title: conflict_notice_title$b,
  conflict_plugin_names: conflict_plugin_names$b,
  content: content$b,
  continue_free_practice: continue_free_practice$b,
  continue_learning: continue_learning$b,
  copied: copied$b,
  copied_open_grammar: copied_open_grammar$b,
  copy: copy$b,
  copy_and_split: copy_and_split$b,
  copy_sentence: copy_sentence$b,
  copy_translation_or_click: copy_translation_or_click$b,
  copy_word: copy_word$b,
  countdown: countdown$b,
  create_book: create_book$b,
  create_dict: create_dict$b,
  create_personal_book: create_personal_book$b,
  create_personal_dict: create_personal_dict$b,
  current: current$b,
  current_progress: current_progress$b,
  custom: custom$b,
  daily_goal: daily_goal$b,
  daily_learning: daily_learning$b,
  daily_task_complete: daily_task_complete$b,
  data_management: data_management$b,
  data_saved_locally: data_saved_locally$b,
  days_to_complete: days_to_complete$b,
  decrease_03s: decrease_03s$b,
  default: es,
  delete_key_goes_back: delete_key_goes_back$b,
  description: description$b,
  dict_list: dict_list$b,
  disable_plugin_or_exclude: disable_plugin_or_exclude$b,
  disable_practice_setting_dialog: disable_practice_setting_dialog$b,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$b,
  document: document$b,
  dont_remind: dont_remind$b,
  download_chrome: download_chrome$b,
  edge_extension: edge_extension$b,
  edit: edit$b,
  edit_and_add_to_dict: edit_and_add_to_dict$b,
  edit_audio_align: edit_audio_align$b,
  edit_book: edit_book$b,
  edit_dict: edit_dict$b,
  edit_success: edit_success$b,
  edit_word: edit_word$b,
  editable_auto_sync: editable_auto_sync$b,
  effect_sound: effect_sound$b,
  email: email$b,
  empty_placeholder: empty_placeholder$b,
  encouragement_70: encouragement_70$b,
  encouragement_85: encouragement_85$b,
  encouragement_95: encouragement_95$b,
  encouragement_default: encouragement_default$b,
  end: end$b,
  end_time: end_time$b,
  english: english$b,
  english_document: english_document$b,
  enter_name: enter_name$b,
  enter_website: enter_website$b,
  errors: errors$b,
  estimated: estimated$b,
  estimated_completion: estimated_completion$b,
  etymology: etymology$b,
  exam_color_hint: exam_color_hint$b,
  example_sentence: example_sentence$b,
  expand: expand$b,
  explanation: explanation$b,
  export_data_backup: export_data_backup$b,
  faq: faq$b,
  features: features$b,
  feedback: feedback$b,
  feedback_or_wechat: feedback_or_wechat$b,
  follow_steps_to_resolve: follow_steps_to_resolve$b,
  follow_x_account: follow_x_account$b,
  font_setting: font_setting$b,
  foreign_font: foreign_font$b,
  forgot_password: forgot_password$b,
  free_practice: free_practice$b,
  from_word: from_word$b,
  function_desc: function_desc$b,
  general_settings: general_settings$b,
  german: german$b,
  github_address: github_address$b,
  github_project: github_project$b,
  grammar_analysis: grammar_analysis$b,
  grammar_learning: grammar_learning$b,
  help: help$b,
  home_article_practice: home_article_practice$b,
  home_article_practice_desc1: home_article_practice_desc1$b,
  home_article_practice_desc2: home_article_practice_desc2$b,
  home_article_practice_desc3: home_article_practice_desc3$b,
  home_collection: home_collection$b,
  home_collection_desc1: home_collection_desc1$b,
  home_collection_desc2: home_collection_desc2$b,
  home_collection_desc3: home_collection_desc3$b,
  home_customization: home_customization$b,
  home_customization_desc1: home_customization_desc1$b,
  home_customization_desc2: home_customization_desc2$b,
  home_customization_desc3: home_customization_desc3$b,
  home_design: home_design$b,
  home_design_desc1: home_design_desc1$b,
  home_design_desc2: home_design_desc2$b,
  home_design_desc3: home_design_desc3$b,
  home_free_opensource: home_free_opensource$b,
  home_free_opensource_desc1: home_free_opensource_desc1$b,
  home_free_opensource_desc2: home_free_opensource_desc2$b,
  home_free_opensource_desc3: home_free_opensource_desc3$b,
  home_personalized: home_personalized$b,
  home_personalized_desc1: home_personalized_desc1$b,
  home_personalized_desc2: home_personalized_desc2$b,
  home_personalized_desc3: home_personalized_desc3$b,
  home_vocabulary: home_vocabulary$b,
  home_vocabulary_desc: home_vocabulary_desc$b,
  home_word_practice: home_word_practice$b,
  home_word_practice_desc1: home_word_practice_desc1$b,
  home_word_practice_desc2: home_word_practice_desc2$b,
  home_word_practice_desc3: home_word_practice_desc3$b,
  i_dont_know: i_dont_know$b,
  i_know: i_know$b,
  i_understand: i_understand$b,
  ie_not_supported: ie_not_supported$b,
  ie_use_modern_browser: ie_use_modern_browser$b,
  ignore_case: ignore_case$b,
  ignore_case_desc: ignore_case_desc$b,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$b,
  import_data_restore: import_data_restore$b,
  import_example_hint: import_example_hint$b,
  import_follow_template: import_follow_template$b,
  import_other_hint: import_other_hint$b,
  import_phrase_hint: import_phrase_hint$b,
  import_translation_hint: import_translation_hint$b,
  import_tutorial: import_tutorial$b,
  import_warning: import_warning$b,
  import_word_required: import_word_required$b,
  important_notice: important_notice$b,
  incognito_not_working: incognito_not_working$b,
  incognito_working: incognito_working$b,
  increase_03s: increase_03s$b,
  install_extension_manager: install_extension_manager$b,
  introduction: introduction$b,
  is_free: is_free$b,
  items_per_page: items_per_page$b,
  japanese: japanese$b,
  jump_to: jump_to$b,
  jump_to_seconds: jump_to_seconds$b,
  keep_default_no_show: keep_default_no_show$b,
  keyboard_no_response: keyboard_no_response$b,
  keyboard_sound: keyboard_sound$b,
  keyboard_sound_effect: keyboard_sound_effect$b,
  know_word_tip: know_word_tip$b,
  last_task: last_task$b,
  learn: learn$b,
  learned: learned$b,
  learning_progress: learning_progress$b,
  learning_record: learning_record$b,
  learning_settings: learning_settings$b,
  line_by_line: line_by_line$b,
  lines: lines$b,
  list_order_setting: list_order_setting$b,
  listening_training: listening_training$b,
  loading: loading$b,
  local_data_detected: local_data_detected$b,
  login: login$b,
  login_again: login_again$b,
  login_cancelled: login_cancelled$b,
  lrc_parse_success: lrc_parse_success$b,
  manage_books: manage_books$b,
  manage_dict: manage_dict$b,
  manual_split: manual_split$b,
  mark_mastered: mark_mastered$b,
  migrate_data: migrate_data$b,
  migrate_later_notice: migrate_later_notice$b,
  migrate_new_domain: migrate_new_domain$b,
  migrate_old_domain_notice: migrate_old_domain_notice$b,
  milliseconds: milliseconds$b,
  minus_03s: minus_03s$b,
  minutes: minutes$b,
  more: more$b,
  multiple_choice: multiple_choice$b,
  my_books: my_books$b,
  my_dictionaries: my_dictionaries$b,
  name: name$b,
  name_already_exists: name_already_exists$b,
  name_config: name_config$b,
  name_config_tip: name_config_tip$b,
  name_ignore_config_desc: name_ignore_config_desc$b,
  name_management: name_management$b,
  name_max_20_chars: name_max_20_chars$b,
  new_concept_english: new_concept_english$b,
  new_password_placeholder: new_password_placeholder$b,
  new_words: new_words$b,
  new_words_count: new_words_count$b,
  next_article: next_article$b,
  no_dict_selected: no_dict_selected$b,
  no_shortcut_set: no_shortcut_set$b,
  no_sync: no_sync$b,
  no_translation_comparison: no_translation_comparison$b,
  one_sentence_per_line: one_sentence_per_line$b,
  open_link: open_link$b,
  or: or$b,
  original_text: original_text$b,
  page_or_index: page_or_index$b,
  paragraph: paragraph$b,
  password_login: password_login$b,
  password_placeholder: password_placeholder$b,
  phone_placeholder: phone_placeholder$b,
  phonetic: phonetic$b,
  phrase: phrase$b,
  phrases: phrases$b,
  play: play$b,
  play_next_after_end: play_next_after_end$b,
  play_sentence: play_sentence$b,
  please_enter_name: please_enter_name$b,
  please_fill_complete: please_fill_complete$b,
  please_fill_content: please_fill_content$b,
  please_fill_original: please_fill_original$b,
  please_fill_original_title: please_fill_original_title$b,
  please_fill_title: please_fill_title$b,
  please_fill_translation: please_fill_translation$b,
  please_fill_translation_title: please_fill_translation_title$b,
  please_paste_original: please_paste_original$b,
  please_select: please_select$b,
  please_select_dict: please_select_dict$b,
  plugins_intercept_keyboard: plugins_intercept_keyboard$b,
  practice: practice$b,
  press_delete_reinput: press_delete_reinput$b,
  press_key_to_set: press_key_to_set$b,
  press_space_continue: press_space_continue$b,
  privacy_policy: privacy_policy$b,
  pronunciation_accent: pronunciation_accent$b,
  pronunciation_accent_desc: pronunciation_accent_desc$b,
  qa10_a: qa10_a$b,
  qa10_q1: qa10_q1$b,
  qa10_q2: qa10_q2$b,
  qa11_a: qa11_a$b,
  qa11_q: qa11_q$b,
  qa12_a: qa12_a$b,
  qa12_q: qa12_q$b,
  qa13_a: qa13_a$b,
  qa13_q1: qa13_q1$b,
  qa13_q2: qa13_q2$b,
  qa13_q3: qa13_q3$b,
  qa13_q4: qa13_q4$b,
  qa1_a: qa1_a$b,
  qa1_q1: qa1_q1$b,
  qa1_q2: qa1_q2$b,
  qa2_a: qa2_a$b,
  qa3_a: qa3_a$b,
  qa3_q1: qa3_q1$b,
  qa3_q2: qa3_q2$b,
  qa3_q3: qa3_q3$b,
  qa4_a: qa4_a$b,
  qa4_q1: qa4_q1$b,
  qa4_q2: qa4_q2$b,
  qa5_a: qa5_a$b,
  qa5_q1: qa5_q1$b,
  qa5_q2: qa5_q2$b,
  qa5_q3: qa5_q3$b,
  qa5_q4: qa5_q4$b,
  qa6_a: qa6_a$b,
  qa7_a: qa7_a$b,
  qa7_q1: qa7_q1$b,
  qa7_q2: qa7_q2$b,
  qa7_q3: qa7_q3$b,
  qa8_a: qa8_a$b,
  qa8_q1: qa8_q1$b,
  qa8_q2: qa8_q2$b,
  qa8_q3: qa8_q3$b,
  qa9_a: qa9_a$b,
  qa9_q: qa9_q$b,
  qq_group: qq_group$b,
  qq_qrcode: qq_qrcode$b,
  question: question$b,
  random_all: random_all$b,
  random_current_page: random_current_page$b,
  random_review: random_review$b,
  recommend: recommend$b,
  record: record$b,
  register: register$b,
  register_account: register_account$b,
  register_new_account: register_new_account$b,
  related_words: related_words$b,
  relearn: relearn$b,
  repeat_count: repeat_count$b,
  reset_password: reset_password$b,
  resource_sharing: resource_sharing$b,
  resources_from_internet: resources_from_internet$b,
  restart_learning: restart_learning$b,
  restart_practice: restart_practice$b,
  restore_default: restore_default$b,
  result: result$b,
  return_home: return_home$b,
  reverse_all: reverse_all$b,
  reverse_current_page: reverse_current_page$b,
  review: review$b,
  review_complete: review_complete$b,
  review_last: review_last$b,
  review_previous: review_previous$b,
  review_ratio: review_ratio$b,
  review_ratio_desc: review_ratio_desc$b,
  review_ratio_notice_1: review_ratio_notice_1$b,
  review_ratio_notice_2: review_ratio_notice_2$b,
  review_ratio_tooltip: review_ratio_tooltip$b,
  review_wrong_words: review_wrong_words$b,
  save: save$b,
  save_and_next: save_and_next$b,
  scan_success: scan_success$b,
  search: search$b,
  seconds: seconds$b,
  select_dict: select_dict$b,
  select_dict_to_start: select_dict_to_start$b,
  select_from_dict: select_from_dict$b,
  send_code: send_code$b,
  send_code_failed: send_code_failed$b,
  send_email: send_email$b,
  send_failed: send_failed$b,
  sending: sending$b,
  sentences_not_translated: sentences_not_translated$b,
  set_end_time: set_end_time$b,
  set_password_placeholder: set_password_placeholder$b,
  set_start_time: set_start_time$b,
  setting: setting$b,
  settings: settings$b,
  shortcut: shortcut$b,
  shortcut_key: shortcut_key$b,
  shortcut_settings: shortcut_settings$b,
  show_prev_next_word: show_prev_next_word$b,
  show_prev_next_word_desc: show_prev_next_word_desc$b,
  show_questions: show_questions$b,
  simple_word_filter: simple_word_filter$b,
  simple_word_filter_desc: simple_word_filter_desc$b,
  simple_word_list: simple_word_list$b,
  single_line: single_line$b,
  skip_to_next_stage: skip_to_next_stage$b,
  skip_word: skip_word$b,
  smart_learning: smart_learning$b,
  sound_effect: sound_effect$b,
  source_language: source_language$b,
  speed: speed$b,
  split_rule: split_rule$b,
  split_sentence: split_sentence$b,
  start: start$b,
  start_article_practice: start_article_practice$b,
  start_daily: start_daily$b,
  start_from_beginning: start_from_beginning$b,
  start_from_here: start_from_here$b,
  start_learning: start_learning$b,
  start_time: start_time$b,
  start_word_practice: start_word_practice$b,
  status: status$b,
  studied: studied$b,
  study_duration: study_duration$b,
  study_progress: study_progress$b,
  study_record: study_record$b,
  submit_exam: submit_exam$b,
  suitable_for: suitable_for$b,
  switch_display_mode: switch_display_mode$b,
  sync: sync$b,
  sync_data: sync_data$b,
  sync_failed: sync_failed$b,
  sync_success: sync_success$b,
  sync_to_account_question: sync_to_account_question$b,
  sync_to_result: sync_to_result$b,
  syncing: syncing$b,
  synonym: synonym$b,
  synonyms: synonyms$b,
  tap_allow_in_wechat: tap_allow_in_wechat$b,
  target_language: target_language$b,
  template_download: template_download$b,
  test: test$b,
  this_week_record: this_week_record$b,
  time: time$b,
  title: title$b,
  to_manage_extensions: to_manage_extensions$b,
  today_study_time: today_study_time$b,
  today_task: today_task$b,
  today_task_complete: today_task_complete$b,
  toggle_dictation_mode: toggle_dictation_mode$b,
  toggle_theme: toggle_theme$b,
  toggle_translation: toggle_translation$b,
  total: total$b,
  total_items: total_items$b,
  total_learning_time: total_learning_time$b,
  total_study_days: total_study_days$b,
  total_study_time: total_study_time$b,
  total_words: total_words$b,
  translate: translate$b,
  translate_sentence: translate_sentence$b,
  translate_word: translate_word$b,
  translation: translation$b,
  translation_complete: translation_complete$b,
  try_incognito_mode: try_incognito_mode$b,
  tv_movie: tv_movie$b,
  twitter: twitter$b,
  two: two$b,
  uk_accent: uk_accent$b,
  uncollect: uncollect$b,
  unmark_mastered: unmark_mastered$b,
  update_log: update_log$b,
  upload_audio: upload_audio$b,
  upload_lrc: upload_lrc$b,
  us_accent: us_accent$b,
  usage_guide: usage_guide$b,
  use_prev_end_seconds: use_prev_end_seconds$b,
  use_prev_end_time: use_prev_end_time$b,
  user_agreement: user_agreement$b,
  volume: volume$b,
  wait_translation: wait_translation$b,
  warm_tips: warm_tips$b,
  wechat_group: wechat_group$b,
  wechat_qrcode: wechat_qrcode$b,
  wechat_scan_login: wechat_scan_login$b,
  weekly_record: weekly_record$b,
  weekly_study_record: weekly_study_record$b,
  where_is_data: where_is_data$b,
  word: word$b,
  word_auto_pronunciation: word_auto_pronunciation$b,
  word_import_template: word_import_template$b,
  word_list: word_list$b,
  word_repeat_setting: word_repeat_setting$b,
  word_root: word_root$b,
  word_settings: word_settings$b,
  words: words$b,
  words_comma_separated: words_comma_separated$b,
  words_count: words_count$b,
  xiaohongshu: xiaohongshu$b,
  xiaohongshu_desc: xiaohongshu_desc$b,
  xiaohongshu_qrcode: xiaohongshu_qrcode$b,
  youdao_translate: youdao_translate$b
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$a = "Apprenez l'anglais, une frappe à la fois, outil de pratique open source";
var app_name$a = "Type Words";
var start_word_practice$a = "Commencer la pratique des mots";
var start_article_practice$a = "Commencer la pratique des articles";
var home_word_practice$a = "Pratique des mots";
var home_word_practice_desc1$a = "Modes: Suivi/Dictée/Auto-test/Récitation";
var home_word_practice_desc2$a = "Apprentissage intelligent: Planification intelligente";
var home_word_practice_desc3$a = "Apprentissage libre: Sans restrictions";
var home_article_practice$a = "Pratique des articles";
var home_article_practice_desc1$a = "Livres intégrés, ajouter des articles";
var home_article_practice_desc2$a = "Mode double suivi + récitation";
var home_article_practice_desc3$a = "Écouter pendant la récitation";
var home_collection$a = "Favoris, Erreurs, Maîtrisés";
var home_collection_desc1$a = "Entrée incorrecte ajoutée automatiquement";
var home_collection_desc2$a = "Ajouter aux maîtrisés, sauter après";
var home_collection_desc3$a = "Ajouter aux favoris pour révision";
var home_vocabulary$a = "Vocabulaire massif";
var home_vocabulary_desc$a = "Vocabulaire de base à avancé intégré";
var home_free_opensource$a = "Gratuit et open source";
var home_free_opensource_desc1$a = "Entièrement open source";
var home_free_opensource_desc2$a = "Utilisation gratuite";
var home_free_opensource_desc3$a = "Déploiement privé";
var home_customization$a = "Hautement personnalisable";
var home_customization_desc1$a = "Effets sonores de clavier";
var home_customization_desc2$a = "Raccourcis personnalisables";
var home_customization_desc3$a = "Paramètres hautement personnalisables";
var home_design$a = "Simple et efficace";
var home_design_desc1$a = "Design simple, interface moderne";
var home_design_desc2$a = "Interface propre, opération simple";
var home_design_desc3$a = "Pas de suivi forcé";
var home_personalized$a = "Apprentissage personnalisé";
var home_personalized_desc1$a = "Ajouter librement des dictionnaires et articles";
var home_personalized_desc2$a = "Personnaliser le plan d'apprentissage";
var home_personalized_desc3$a = "Stratégies d'apprentissage multiples";
var cn_limit_no1$a = "川公网安备51015602001426号";
var cn_limit_no2$a = "蜀ICP备2025157466号-2";
var setting$a = "Paramètres";
var edit$a = "Modifier";
var cancel$a = "Annuler";
var confirm$a = "Confirmer";
var save$a = "Enregistrer";
var close$a = "Fermer";
var search$a = "Rechercher";
var more$a = "Plus";
var loading$a = "Chargement";
var introduction$a = "Introduction";
var learn$a = "Apprendre";
var practice$a = "Pratiquer";
var test$a = "Test";
var feedback$a = "Retour";
var document$a = "Ressources";
var help$a = "Aide";
var about$a = "À propos";
var login$a = "Connexion";
var register$a = "S'inscrire";
var register_account$a = "Créer un compte";
var register_new_account$a = "Créer un nouveau compte";
var code_login$a = "Connexion par code";
var password_login$a = "Connexion par mot de passe";
var phone_placeholder$a = "Entrez votre numéro de téléphone";
var code_placeholder$a = "Entrez le code de vérification";
var account_placeholder$a = "Entrez téléphone/email";
var password_placeholder$a = "Entrez votre mot de passe";
var auto_register_notice$a = "Les numéros non enregistrés seront enregistrés automatiquement";
var forgot_password$a = "Mot de passe oublié?";
var reset_password$a = "Réinitialiser le mot de passe";
var set_password_placeholder$a = "Veuillez définir le mot de passe";
var confirm_password_placeholder$a = "Veuillez confirmer le mot de passe";
var new_password_placeholder$a = "Entrez le nouveau mot de passe";
var confirm_new_password$a = "Confirmer le nouveau mot de passe";
var wechat_scan_login$a = "Connexion par scan WeChat";
var scan_success$a = "Scan réussi";
var tap_allow_in_wechat$a = "Appuyez sur autoriser dans WeChat";
var login_cancelled$a = "Connexion annulée";
var login_again$a = "Se reconnecter";
var sync_data$a = "Synchroniser les données";
var local_data_detected$a = "Données locales détectées";
var sync_to_account_question$a = "Synchroniser avec le compte?";
var no_sync$a = "Ne pas synchroniser";
var sync$a = "Synchroniser";
var syncing$a = "Synchronisation";
var sync_failed$a = "Synchronisation échouée";
var sync_success$a = "Synchronisation réussie";
var enter_website$a = "Entrer sur le site";
var general_settings$a = "Paramètres généraux";
var word_settings$a = "Paramètres des mots";
var article_settings$a = "Paramètres des articles";
var data_management$a = "Gestion des données";
var shortcut_settings$a = "Paramètres des raccourcis";
var update_log$a = "Journal des mises à jour";
var shortcut_key$a = "Raccourci (cliquer pour modifier)";
var no_shortcut_set$a = "Aucun raccourci défini";
var press_key_to_set$a = "Appuyez sur une touche pour définir";
var click_here_when_done$a = "Cliquez ici quand terminé";
var restore_default$a = "Restaurer par défaut";
var data_saved_locally$a = "Toutes les données sauvegardées localement";
var export_data_backup$a = "Exporter sauvegarde (ZIP)";
var import_data_restore$a = "Importer restauration de données";
var import_warning$a = "L'importation écrasera toutes les données";
var words$a = "Mots";
var no_dict_selected$a = "Aucun dictionnaire sélectionné";
var select_dict_to_start$a = "Sélectionnez un dictionnaire pour commencer";
var select_dict$a = "Sélectionner un dictionnaire";
var change_progress$a = "Modifier la progression";
var estimated_completion$a = "Achèvement estimé";
var current_progress$a = "Progression actuelle";
var learned$a = "Appris";
var completed_review_stage$a = "Terminé, passage à la révision";
var today_task$a = "Tâche du jour";
var last_task$a = "Dernière tâche";
var word_list$a = "Liste de mots";
var daily_goal$a = "Objectif quotidien";
var words_count$a = "mots";
var change$a = "Modifier";
var new_words_count$a = "Nouveaux mots";
var review_last$a = "Réviser dernier";
var review_previous$a = "Réviser précédent";
var start_learning$a = "Commencer à apprendre";
var continue_learning$a = "Continuer à apprendre";
var free_practice$a = "Pratique libre";
var continue_free_practice$a = "Continuer pratique libre";
var smart_learning$a = "Apprentissage intelligent";
var review$a = "Réviser";
var random_review$a = "Révision aléatoire";
var my_dictionaries$a = "Mes dictionnaires";
var manage_dict$a = "Gérer les dictionnaires";
var create_personal_dict$a = "Créer dictionnaire personnel";
var recommend$a = "Recommandé";
var articles$a = "Articles";
var this_week_record$a = "Enregistrements de cette semaine";
var change_book$a = "Changer";
var today_study_time$a = "Temps d'étude aujourd'hui";
var total_study_days$a = "Jours d'étude totaux";
var total_study_time$a = "Temps d'étude total";
var my_books$a = "Mes livres";
var manage_books$a = "Gérer les livres";
var create_personal_book$a = "Créer livre personnel";
var article_management$a = "Gestion des articles";
var toggle_translation$a = "Basculer traduction";
var switch_display_mode$a = "Changer le mode d'affichage";
var line_by_line$a = "Ligne par ligne";
var single_line$a = "Ligne unique";
var comparison$a = "Comparaison";
var question$a = "Question";
var study_record$a = "Enregistrement d'étude";
var play_next_after_end$a = "Jouer suivant après fin";
var create_book$a = "Créer un livre";
var edit_book$a = "Éditer le livre";
var dict_list$a = "Liste des dictionnaires";
var book_list$a = "Liste des livres";
var word$a = "Mot";
var phonetic$a = "Phonétique";
var translation$a = "Traduction";
var example_sentence$a = "Phrase d'exemple";
var phrase$a = "Phrase";
var synonym$a = "Synonyme";
var related_words$a = "Mots apparentés";
var etymology$a = "Étymologie";
var add_word$a = "Ajouter un mot";
var edit_word$a = "Éditer le mot";
var create_dict$a = "Créer un dictionnaire";
var edit_dict$a = "Éditer le dictionnaire";
var faq$a = "FAQ";
var is_free$a = "Le site est-il gratuit?";
var cannot_type$a = "Impossible de taper, le clavier ne répond pas?";
var where_is_data$a = "Où sont les données? Comment utiliser sur plusieurs appareils?";
var resource_sharing$a = "Ressources d'apprentissage de l'anglais";
var all_resources$a = "Toutes les ressources";
var new_concept_english$a = "New Concept English";
var tv_movie$a = "TV/Film";
var grammar_learning$a = "Apprentissage de la grammaire";
var listening_training$a = "Entraînement à l'écoute";
var warm_tips$a = "Conseils";
var resources_from_internet$a = "Toutes les ressources collectées sur internet, uniquement pour l'apprentissage";
var toggle_theme$a = "Changer de thème";
var english_document$a = "Ressources en anglais";
var empty_placeholder$a = "Rien ici~";
var custom$a = "Personnalisé";
var back$a = "Retour";
var total_items$a = "éléments";
var batch_delete$a = "Supprimer en lot";
var confirm_delete_selected$a = "Confirmer la suppression de tous les sélectionnés?";
var change_order$a = "Changer l'ordre";
var list_order_setting$a = "Paramètres d'ordre de liste";
var reverse_current_page$a = "Inverser la page actuelle";
var reverse_all$a = "Inverser tout";
var random_current_page$a = "Mélanger la page actuelle";
var random_all$a = "Mélanger tout";
var apply$a = "Appliquer";
var add$a = "Ajouter";
var collect$a = "Favori";
var uncollect$a = "Retirer des favoris";
var mark_mastered$a = "Marquer comme maîtrisé";
var unmark_mastered$a = "Démarquer comme maîtrisé";
var about_thanks$a = "Merci d'utiliser ce projet ! C'est un projet open source, gratuit. Si vous le trouvez utile, mettez-nous une étoile sur GitHub !";
var github_address$a = "GitHub:";
var about_wechat_feedback$a = "Retour WeChat:";
var about_ticket_feedback$a = "Retour par ticket:";
var about_other_channels$a = "Autres canaux:";
var wait_translation$a = "Veuillez attendre la fin de la traduction";
var migrate_data$a = "Migrer les données";
var migrate_new_domain$a = "Ce site a un nouveau domaine";
var migrate_old_domain_notice$a = "L'ancien domaine sera abandonné. En raison des restrictions de sécurité du navigateur, les données ne peuvent pas être partagées. Veuillez transférer vos données manuellement.";
var migrate_later_notice$a = "Si vous ne voulez pas migrer maintenant, fermez ce dialogue et migrez plus tard dans \"Paramètres\" -> \"Gestion des données\"";
var author$a = "Auteur:";
var features$a = "Fonctionnalités:";
var suitable_for$a = "Convient pour:";
var open_link$a = "Ouvrir le lien";
var qq_group$a = "Groupe QQ";
var xiaohongshu$a = "Xiaohongshu";
var follow_x_account$a = "Suivez mon compte X {x_account}";
var twitter$a = "Twitter";
var send_email$a = "Envoyer un email à {email}";
var email$a = "Email";
var xiaohongshu_desc$a = "Suivez-nous sur Xiaohongshu pour obtenir les dernières mises à jour de l'équipe de développement, partagez votre expérience et suggestions";
var xiaohongshu_qrcode$a = "Code QR Xiaohongshu";
var community_desc$a = "Rejoignez notre communauté pour communiquer avec l'équipe de développement, partagez votre expérience et suggestions";
var qq_qrcode$a = "Code QR du groupe QQ";
var wechat_group$a = "Groupe WeChat";
var wechat_qrcode$a = "Code QR du groupe WeChat";
var github_project$a = "Projet GitHub";
var ie_not_supported$a = "Le navigateur IE n'est pas pris en charge";
var ie_use_modern_browser$a = "Type Words est construit avec une technologie moderne, veuillez utiliser Chrome, Edge, Firefox ou d'autres navigateurs modernes";
var download_chrome$a = "Télécharger Chrome";
var i_understand$a = "Je comprends";
var ignore_case$a = "Ignorer la casse";
var ignore_case_desc$a = "Lorsqu'activé, la saisie n'est pas sensible à la casse";
var allow_dictation_tip$a = "Autoriser les indices en mode dictée";
var allow_dictation_tip_desc$a = "Lorsqu'activé, vous pouvez survoler le mot ou appuyer sur un raccourci pour afficher la bonne réponse";
var simple_word_filter$a = "Filtre de mots simples";
var simple_word_filter_desc$a = "Lorsqu'activé, les mots simples seront exclus de la pratique; les mots simples ne seront pas comptés dans les statistiques d'articles";
var simple_word_list$a = "Liste de mots simples";
var words_comma_separated$a = "Plusieurs mots séparés par des virgules";
var sound_effect$a = "Effets sonores";
var pronunciation_accent$a = "Accent de prononciation";
var pronunciation_accent_desc$a = "N'affecte que la prononciation des mots; les articles utilisent l'accent américain";
var please_select$a = "Veuillez sélectionner";
var us_accent$a = "Américain";
var uk_accent$a = "Britannique";
var keyboard_sound$a = "Son de touche";
var keyboard_sound_effect$a = "Effet sonore de touche";
var volume$a = "Volume";
var show_prev_next_word$a = "Afficher le mot précédent/suivant";
var show_prev_next_word_desc$a = "Lorsqu'activé, les mots précédent et suivant seront affichés au-dessus pendant la pratique";
var disable_practice_setting_dialog$a = "Ne pas afficher la boîte de dialogue des paramètres de pratique par défaut";
var disable_practice_setting_dialog_desc$a = "Sur la page de détails du dictionnaire, afficher ou non la boîte de dialogue des paramètres de pratique après avoir cliqué sur le bouton apprendre";
var clear_input_on_error$a = "Effacer la saisie en cas d'erreur";
var word_repeat_setting$a = "Paramètres de répétition des mots";
var repeat_count$a = "Nombre de répétitions";
var review_ratio$a = "Ratio de révision";
var review_ratio_desc$a = "Ratio des mots de révision aux nouveaux mots. Les modifications prennent effet à la prochaine session";
var word_auto_pronunciation$a = "Prononciation automatique";
var speed$a = "Vitesse";
var effect_sound$a = "Son d'effet (sons d'erreur et de fin)";
var auto_switch$a = "Changement automatique";
var auto_next_word$a = "Mot suivant automatique";
var auto_next_word_desc$a = "Fonctionne uniquement en mode suivi. Les modes dictée, auto-test et orthographe nécessitent d'appuyer sur espace pour continuer";
var auto_next_word_time$a = "Temps du mot suivant automatique";
var auto_next_word_time_desc$a = "Temps pour passer automatiquement au mot suivant après avoir tapé correctement";
var milliseconds$a = "ms";
var font_setting$a = "Paramètres de police";
var foreign_font$a = "Police de langue étrangère";
var chinese_font$a = "Police chinoise";
var auto_play_sentence$a = "Lecture automatique de la phrase";
var ignore_symbols_numbers_names$a = "Ignorer les symboles, chiffres et noms lors de la saisie";
var settings$a = "Paramètres";
var please_select_dict$a = "Veuillez d'abord sélectionner un dictionnaire";
var learning_settings$a = "Paramètres d'apprentissage";
var total$a = "Total";
var estimated$a = "Estimé";
var days_to_complete$a = "jours pour terminer";
var from_word$a = "À partir du mot";
var start_daily$a = ", quotidiennement";
var new_words$a = "nouveaux mots";
var review_ratio_tooltip$a = "Ratio des mots de révision aux nouveaux mots";
var review_ratio_notice_1$a = "Lorsque l'apprentissage n'est pas terminé, le nombre de révisions est généré selon le ratio défini. Si 0, pas de révision";
var review_ratio_notice_2$a = "Après avoir terminé l'apprentissage, le nombre de nouveaux mots est fixé à 0, le nombre de révisions est généré selon le ratio (si < 1, calculé comme 1)";
var daily_learning$a = "Apprentissage quotidien";
var learning_progress$a = "Progression de l'apprentissage";
var select_from_dict$a = "Sélectionner la position de départ du dictionnaire";
var change_in_settings$a = "Peut être modifié dans la page des paramètres";
var keep_default_no_show$a = "Garder par défaut, ne plus afficher";
var review_complete$a = "Révision terminée";
var today_task_complete$a = "Tâche d'aujourd'hui terminée";
var study_duration$a = "Durée d'étude";
var accuracy_rate$a = "Précision";
var weekly_study_record$a = "Record d'étude hebdomadaire";
var studied$a = "Étudié";
var total_words$a = "Total des mots";
var restart_learning$a = "Recommencer l'apprentissage";
var another_round$a = "Un autre tour";
var return_home$a = "Retourner à l'accueil";
var import_tutorial$a = "Tutoriel d'importation";
var import_follow_template$a = "Veuillez remplir les données selon le format du modèle";
var import_word_required$a = "Le champ mot est obligatoire, les autres champs sont optionnels";
var import_translation_hint$a = "Traduction: une traduction par ligne, partie du discours d'abord, puis contenu (ex. n.cancel); plusieurs traductions sur des lignes séparées";
var import_example_hint$a = "Exemple: une ligne pour l'original, une ligne pour la traduction; plusieurs exemples sur des lignes séparées";
var import_phrase_hint$a = "Phrase: une ligne pour l'original, une ligne pour la traduction; plusieurs phrases sur des lignes séparées";
var two$a = "deux";
var lines$a = "lignes";
var import_other_hint$a = "Synonymes, mots racines, étymologie: allez au dictionnaire officiel, puis éditez un mot pour voir le format";
var template_download$a = "Télécharger le modèle";
var word_import_template$a = "Modèle d'importation de mots";
var conflict_notice_title$a = "Si vous rencontrez les problèmes suivants lors de l'utilisation:";
var keyboard_no_response$a = "Le clavier ne répond pas";
var check_plugins_installed$a = "Veuillez vérifier si vous avez installé";
var conflict_plugin_names$a = "\"Contrôleur de vitesse vidéo\" \"Vim\" \"Améliorateur audio/vidéo\" \"Assistant de cours en ligne\"";
var plugins_intercept_keyboard$a = "et d'autres plugins/scripts qui interceptent les événements de clavier,";
var cause_no_response$a = "ce qui provoque aucune réponse lors de la pratique sur ce site";
var follow_steps_to_resolve$a = ", suivez ces étapes pour résoudre le conflit:";
var try_incognito_mode$a = "Ouvrez ce site Web en mode navigation privée du navigateur et vérifiez si vous pouvez taper normalement?";
var incognito_not_working$a = "Impossible de taper en mode navigation privée,";
var click_here$a = "cliquez ici";
var feedback_or_wechat$a = "pour fournir des commentaires, ou rejoignez le groupe WeChat:";
var incognito_working$a = "Peut taper en mode navigation privée, c'est donc un conflit de plugin/script";
var disable_plugin_or_exclude$a = "Désactivez temporairement le plugin/script correspondant, ou excluez ce site Web dans les paramètres du plugin/script";
var install_extension_manager$a = "Vous pouvez installer ceci";
var chrome_extension$a = "extension (version Chrome, VPN requis)";
var edge_extension$a = "extension (version Edge, pas de VPN nécessaire)";
var to_manage_extensions$a = "pour activer/désactiver rapidement d'autres extensions";
var delete_key_goes_back$a = "Appuyer sur la touche suppr revient à la page précédente";
var browser_360_shortcut$a = "Dans le navigateur 360, le raccourci \"la touche suppr revient à la page précédente\" est défini par défaut";
var change_browser_or_shortcut$a = "Changez de navigateur ou supprimez le raccourci par défaut de 360: recherchez \"retour\" dans les paramètres du navigateur";
var please_enter_name$a = "Veuillez entrer un nom";
var name_max_20_chars$a = "Le nom ne peut pas dépasser 20 caractères";
var name_already_exists$a = "Le nom existe déjà!";
var add_success$a = "Ajouté avec succès";
var edit_success$a = "Modifié avec succès";
var edit_and_add_to_dict$a = "Modifié avec succès et ajouté à mon dictionnaire";
var please_fill_complete$a = "Veuillez remplir complètement";
var name$a = "Nom";
var description$a = "Description";
var source_language$a = "Langue source";
var target_language$a = "Langue cible";
var english$a = "Anglais";
var german$a = "Allemand";
var japanese$a = "Japonais";
var code$a = "Code";
var chinese$a = "Chinois";
var multiple_choice$a = "Choix multiple";
var start$a = "Commencer";
var countdown$a = "Compte à rebours";
var seconds$a = "secondes";
var submit_exam$a = "Soumettre l'examen";
var exam_color_hint$a = "Rouge clair: incorrect, Rouge foncé: non sélectionné, Vert: correct";
var items_per_page$a = "éléments/page";
var jump_to$a = "Aller à";
var page_or_index$a = "page/index";
var please_fill_original$a = "Veuillez remplir le texte original!";
var please_fill_title$a = "Veuillez remplir le titre!";
var please_fill_content$a = "Veuillez remplir le contenu!";
var audio_added_success$a = "Audio ajouté avec succès";
var lrc_parse_success$a = "Fichier LRC analysé avec succès";
var original_text$a = "Texte original";
var title$a = "Titre";
var please_fill_original_title$a = "Veuillez remplir le titre original";
var content$a = "Contenu";
var one_sentence_per_line$a = "Une phrase par ligne, laissez une ligne vide entre les paragraphes";
var name_config_tip$a = "Après avoir configuré les noms, ils seront automatiquement ignorés pendant la pratique (optionnel, activé par défaut)";
var name_config$a = "Configuration des noms";
var please_paste_original$a = "Veuillez coller le texte original";
var usage_guide$a = "Guide d'utilisation";
var copy_and_split$a = "Copiez le texte original, puis divisez-le en phrases";
var click$a = "Cliquez";
var split_sentence$a = "Diviser la phrase";
var auto_split$a = "bouton pour diviser automatiquement";
var or$a = "ou";
var manual_split$a = "modifier manuellement pour diviser";
var split_rule$a = "Règle de division: une phrase par ligne, ligne vide entre les paragraphes";
var after_edit_click$a = "Après modification, cliquez";
var sync_to_result$a = "bouton pour synchroniser avec le panneau de résultats gauche";
var please_fill_translation_title$a = "Veuillez remplir le titre de traduction";
var please_fill_translation$a = "Veuillez remplir la traduction";
var translate$a = "Traduction";
var copy_translation_or_click$a = "Collez la traduction, ou cliquez si aucune";
var result$a = "Résultat";
var editable_auto_sync$a = "Tout est modifiable, cliquez sur le bouton appliquer pour synchroniser automatiquement après modification";
var audio$a = "Audio";
var audio_management$a = "Gestion audio";
var paragraph$a = "Paragraphe";
var set_start_time$a = "Définir l'heure de début";
var use_prev_end_time$a = "Utiliser l'heure de fin de la phrase précédente";
var minus_03s$a = "Moins 0,3s";
var end$a = "Fin";
var set_end_time$a = "Définir l'heure de fin";
var edit_audio_align$a = "Modifier l'alignement audio";
var play$a = "Lecture";
var status$a = "Statut";
var sentences_not_translated$a = "{count} phrases non traduites!";
var translation_complete$a = "Traduction terminée!";
var save_and_next$a = "Enregistrer et ajouter suivant";
var no_translation_comparison$a = "Pas de comparaison de traduction disponible";
var adjust_audio_timeline$a = "Ajuster la chronologie audio";
var audio_timeline_tutorial$a = "Tutoriel: Cliquez sur lecture, quand l'audio atteint le début de la phrase, cliquez sur enregistrer l'heure de début; quand il atteint la fin, cliquez sur enregistrer l'heure de fin";
var start_time$a = "Heure de début";
var jump_to_seconds$a = "Aller à {seconds}s";
var use_prev_end_seconds$a = "Utiliser l'heure de fin de la phrase précédente: {seconds}s";
var decrease_03s$a = "Diminuer de 0,3s";
var increase_03s$a = "Augmenter de 0,3s";
var record$a = "Enregistrer";
var end_time$a = "Heure de fin";
var audio_upload_notice$a = "1. Les fichiers téléchargés sont enregistrés localement, les données seront perdues en changeant d'ordinateur, veuillez sauvegarder à temps\n2. Prend en charge mp3, wav, m4a et autres formats audio courants";
var upload_audio$a = "Télécharger audio";
var upload_lrc$a = "Télécharger fichier LRC";
var name_management$a = "Gestion des noms";
var name_ignore_config_desc$a = "Configurez les noms à ignorer, ces noms seront automatiquement ignorés pendant la pratique (optionnel, activé par défaut)";
var add_name$a = "Ajouter un nom";
var enter_name$a = "Entrez le nom";
var collect_word$a = "Collecter le mot";
var copy$a = "Copier";
var copy_sentence$a = "Copier la phrase";
var copied$a = "Copié";
var copy_word$a = "Copier le mot";
var start_from_here$a = "Commencer ici";
var play_sentence$a = "Lire la phrase";
var grammar_analysis$a = "Analyse grammaticale";
var copied_open_grammar$a = "Copié! Ouverture du site d'analyse grammaticale!";
var youdao_translate$a = "Dictionnaire Youdao";
var translate_word$a = "Traduire le mot";
var translate_sentence$a = "Traduire la phrase";
var restart_practice$a = "Recommencer la pratique";
var next_article$a = "Article suivant";
var learning_record$a = "Enregistrement d'apprentissage";
var total_learning_time$a = "Temps d'apprentissage total";
var current$a = "Actuel";
var show_questions$a = "Afficher les questions";
var explanation$a = "Explication";
var encouragement_95$a = "Excellent! Continuez comme ça!";
var encouragement_85$a = "Bon travail, continuez!";
var encouragement_70$a = "Bon score, continuez!";
var encouragement_default$a = "Chaque pratique est un progrès, continuez!";
var daily_task_complete$a = "Tâche quotidienne terminée";
var weekly_record$a = "Record d'étude hebdomadaire";
var study_progress$a = "Progression d'étude";
var relearn$a = "Réapprendre";
var start_from_beginning$a = "Recommencer depuis le début";
var another_group$a = "Un autre groupe";
var back_to_home$a = "Retour à l'accueil";
var know_word_tip$a = "Si vous avez sélectionné \"Je connais\" par erreur, appuyez sur la touche suppr pour resélectionner!";
var press_delete_reinput$a = "Appuyez sur la touche suppr pour ressaisir";
var press_space_continue$a = "Appuyez sur espace pour continuer";
var shortcut$a = "Raccourci";
var i_know$a = "Je connais";
var i_dont_know$a = "Je ne connais pas";
var phrases$a = "Phrases";
var synonyms$a = "Synonymes";
var word_root$a = "Racine du mot";
var review_wrong_words$a = "Réviser les mots incorrects";
var collapse$a = "Réduire";
var expand$a = "Développer";
var minutes$a = "minutes";
var time$a = "Temps";
var errors$a = "Erreurs";
var skip_to_next_stage$a = "Passer à l'étape suivante";
var skip_word$a = "Passer le mot";
var toggle_dictation_mode$a = "Basculer le mode dictée";
var send_failed$a = "Échec de l'envoi";
var send_code_failed$a = "Échec de l'envoi du code de vérification";
var sending$a = "Envoi en cours";
var send_code$a = "Envoyer le code";
var agree_terms_notice$a = "En continuant, vous acceptez nos";
var user_agreement$a = "Accord d'utilisation";
var and$a = "et";
var privacy_policy$a = "Politique de confidentialité";
var important_notice$a = "Avis important";
var dont_remind$a = "Ne plus rappeler";
var function_desc$a = "Fonctionnalités";
var qa1_a$a = "Le site est-il gratuit ?";
var qa1_q1$a = "Pas complètement gratuit. Pour le développement à long terme, des frais futurs sont inévitables, mais le paiement ne sera pas obligatoire. Nous essayons de trouver un équilibre entre gratuit et payant.";
var qa1_q2$a = "Le projet est open source, vous pouvez le déployer vous-même.";
var qa2_a$a = "Impossible de taper, le clavier ne répond pas ?";
var qa3_a$a = "Où sont les données ? Comment utiliser sur plusieurs ordinateurs/appareils ?";
var qa3_q1$a = "Toutes les données utilisateur sont enregistrées dans le navigateur local. Si vous devez utiliser Type Words sur différents appareils ou navigateurs, vous devez exporter et importer les données manuellement.";
var qa3_q2$a = "Paramètres -> Paramètres des données -> Exporter les données sur l'ordinateur d'origine -> Envoyer au nouvel ordinateur via un logiciel social -> Importer sur le nouvel ordinateur";
var qa3_q3$a = "Le système de compte est en cours de développement.";
var qa4_a$a = "Le site planifie automatiquement trop de mots, comment modifier ?";
var qa4_q1$a = "Le ratio par défaut entre mots de révision et nouveaux mots est 1:4.";
var qa4_q2$a = "Vous pouvez le modifier via Paramètres -> Paramètres des mots -> Ratio de révision";
var qa5_a$a = "Il faut trop de temps pour terminer une session d'apprentissage, le processus est-il trop long ?";
var qa5_q1$a = "C'est en effet un problème. Un processus long peut facilement faire perdre la motivation.";
var qa5_q2$a = "Les mots erronés seront répétés. Si c'était juste une faute de frappe, vous pouvez appuyer sur Tab pour passer.";
var qa5_q3$a = "Pendant la révision, seuls les mots marqués comme \"je ne connais pas\" nécessitent une dictée.";
var qa5_q4$a = "Après le lancement du système de compte, la fonctionnalité de courbe de mémoire d'Ebbinghaus sera ajoutée.";
var qa6_a$a = "La fonctionnalité de courbe de mémoire d'Ebbinghaus sera-t-elle ajoutée ?";
var qa7_a$a = "Puis-je ajouter des mots/dictionnaires personnalisés/importer mes propres mots ?";
var qa7_q1$a = "Oui, sur la page Mots, cliquez sur \"Créer un dictionnaire personnel\"";
var qa7_q2$a = "Après la création, cliquez sur l'icône \"Ajouter un mot\" pour ajouter vos propres mots";
var qa7_q3$a = "Vous pouvez également cliquer sur l'icône \"Importer\" pour importer en lot";
var qa8_a$a = "Puis-je ajouter des articles/livres personnalisés/importer mes propres articles ?";
var qa8_q1$a = "Oui, les étapes sont essentiellement les mêmes que pour ajouter des mots";
var qa8_q2$a = "Sur la page Articles, cliquez sur \"Créer un livre personnel\"";
var qa8_q3$a = "Après la création, cliquez sur le bouton \"Gestion des articles\" en haut";
var qa9_a$a = "Comment désactiver les sons des touches ?";
var qa9_q$a = "Paramètres -> Paramètres généraux -> Effets sonores -> Son des touches, désactivez-le";
var qa10_a$a = "Puis-je l'utiliser sur une tablette ?";
var qa10_q1$a = "Les tablettes peuvent être utilisées, mais l'utilisation d'un clavier Bluetooth offre une meilleure expérience.";
var qa10_q2$a = "Après avoir connecté un clavier Bluetooth, les tablettes Android doivent activer manuellement le \"Mode bureau\".";
var qa11_a$a = "Puis-je l'utiliser sur un téléphone ?";
var qa11_q$a = "Les téléphones peuvent être utilisés, mais l'optimisation n'a pas encore été effectuée. Il est recommandé d'utiliser sur un ordinateur ou une tablette.";
var qa12_a$a = "Y a-t-il une APP ou un mini-programme ?";
var qa12_q$a = "Non, seulement le site web";
var qa13_a$a = "Comment fournir des commentaires à l'équipe de développement ?";
var qa13_q1$a = "Vous pouvez rejoindre notre groupe WeChat officiel, décrire en détail les fonctionnalités que vous souhaitez";
var qa13_q2$a = "Si vous trouvez des bugs dans l'application, veuillez fournir une description détaillée et les étapes pour reproduire";
var qa13_q3$a = "Vous pouvez également nous soumettre un ticket de support";
var qa13_q4$a = "Vous pouvez également soumettre sur github/issues";
const fr = {
	app_desc: app_desc$a,
	app_name: app_name$a,
	start_word_practice: start_word_practice$a,
	start_article_practice: start_article_practice$a,
	home_word_practice: home_word_practice$a,
	home_word_practice_desc1: home_word_practice_desc1$a,
	home_word_practice_desc2: home_word_practice_desc2$a,
	home_word_practice_desc3: home_word_practice_desc3$a,
	home_article_practice: home_article_practice$a,
	home_article_practice_desc1: home_article_practice_desc1$a,
	home_article_practice_desc2: home_article_practice_desc2$a,
	home_article_practice_desc3: home_article_practice_desc3$a,
	home_collection: home_collection$a,
	home_collection_desc1: home_collection_desc1$a,
	home_collection_desc2: home_collection_desc2$a,
	home_collection_desc3: home_collection_desc3$a,
	home_vocabulary: home_vocabulary$a,
	home_vocabulary_desc: home_vocabulary_desc$a,
	home_free_opensource: home_free_opensource$a,
	home_free_opensource_desc1: home_free_opensource_desc1$a,
	home_free_opensource_desc2: home_free_opensource_desc2$a,
	home_free_opensource_desc3: home_free_opensource_desc3$a,
	home_customization: home_customization$a,
	home_customization_desc1: home_customization_desc1$a,
	home_customization_desc2: home_customization_desc2$a,
	home_customization_desc3: home_customization_desc3$a,
	home_design: home_design$a,
	home_design_desc1: home_design_desc1$a,
	home_design_desc2: home_design_desc2$a,
	home_design_desc3: home_design_desc3$a,
	home_personalized: home_personalized$a,
	home_personalized_desc1: home_personalized_desc1$a,
	home_personalized_desc2: home_personalized_desc2$a,
	home_personalized_desc3: home_personalized_desc3$a,
	cn_limit_no1: cn_limit_no1$a,
	cn_limit_no2: cn_limit_no2$a,
	setting: setting$a,
	edit: edit$a,
	"delete": "Supprimer",
	cancel: cancel$a,
	confirm: confirm$a,
	save: save$a,
	close: close$a,
	search: search$a,
	more: more$a,
	loading: loading$a,
	introduction: introduction$a,
	learn: learn$a,
	practice: practice$a,
	test: test$a,
	feedback: feedback$a,
	document: document$a,
	help: help$a,
	about: about$a,
	login: login$a,
	register: register$a,
	register_account: register_account$a,
	register_new_account: register_new_account$a,
	code_login: code_login$a,
	password_login: password_login$a,
	phone_placeholder: phone_placeholder$a,
	code_placeholder: code_placeholder$a,
	account_placeholder: account_placeholder$a,
	password_placeholder: password_placeholder$a,
	auto_register_notice: auto_register_notice$a,
	forgot_password: forgot_password$a,
	reset_password: reset_password$a,
	set_password_placeholder: set_password_placeholder$a,
	confirm_password_placeholder: confirm_password_placeholder$a,
	new_password_placeholder: new_password_placeholder$a,
	confirm_new_password: confirm_new_password$a,
	wechat_scan_login: wechat_scan_login$a,
	scan_success: scan_success$a,
	tap_allow_in_wechat: tap_allow_in_wechat$a,
	login_cancelled: login_cancelled$a,
	login_again: login_again$a,
	sync_data: sync_data$a,
	local_data_detected: local_data_detected$a,
	sync_to_account_question: sync_to_account_question$a,
	no_sync: no_sync$a,
	sync: sync$a,
	syncing: syncing$a,
	sync_failed: sync_failed$a,
	sync_success: sync_success$a,
	enter_website: enter_website$a,
	general_settings: general_settings$a,
	word_settings: word_settings$a,
	article_settings: article_settings$a,
	data_management: data_management$a,
	shortcut_settings: shortcut_settings$a,
	update_log: update_log$a,
	"function": "Fonction",
	shortcut_key: shortcut_key$a,
	no_shortcut_set: no_shortcut_set$a,
	press_key_to_set: press_key_to_set$a,
	click_here_when_done: click_here_when_done$a,
	restore_default: restore_default$a,
	data_saved_locally: data_saved_locally$a,
	export_data_backup: export_data_backup$a,
	import_data_restore: import_data_restore$a,
	import_warning: import_warning$a,
	words: words$a,
	no_dict_selected: no_dict_selected$a,
	select_dict_to_start: select_dict_to_start$a,
	select_dict: select_dict$a,
	change_progress: change_progress$a,
	estimated_completion: estimated_completion$a,
	current_progress: current_progress$a,
	learned: learned$a,
	completed_review_stage: completed_review_stage$a,
	today_task: today_task$a,
	last_task: last_task$a,
	word_list: word_list$a,
	daily_goal: daily_goal$a,
	words_count: words_count$a,
	change: change$a,
	new_words_count: new_words_count$a,
	review_last: review_last$a,
	review_previous: review_previous$a,
	start_learning: start_learning$a,
	continue_learning: continue_learning$a,
	free_practice: free_practice$a,
	continue_free_practice: continue_free_practice$a,
	smart_learning: smart_learning$a,
	review: review$a,
	random_review: random_review$a,
	my_dictionaries: my_dictionaries$a,
	manage_dict: manage_dict$a,
	create_personal_dict: create_personal_dict$a,
	recommend: recommend$a,
	articles: articles$a,
	this_week_record: this_week_record$a,
	change_book: change_book$a,
	today_study_time: today_study_time$a,
	total_study_days: total_study_days$a,
	total_study_time: total_study_time$a,
	my_books: my_books$a,
	manage_books: manage_books$a,
	create_personal_book: create_personal_book$a,
	article_management: article_management$a,
	toggle_translation: toggle_translation$a,
	switch_display_mode: switch_display_mode$a,
	line_by_line: line_by_line$a,
	single_line: single_line$a,
	comparison: comparison$a,
	question: question$a,
	study_record: study_record$a,
	play_next_after_end: play_next_after_end$a,
	create_book: create_book$a,
	edit_book: edit_book$a,
	dict_list: dict_list$a,
	book_list: book_list$a,
	word: word$a,
	phonetic: phonetic$a,
	translation: translation$a,
	example_sentence: example_sentence$a,
	phrase: phrase$a,
	synonym: synonym$a,
	related_words: related_words$a,
	etymology: etymology$a,
	add_word: add_word$a,
	edit_word: edit_word$a,
	create_dict: create_dict$a,
	edit_dict: edit_dict$a,
	"import": "Importer",
	"export": "Exporter",
	faq: faq$a,
	is_free: is_free$a,
	cannot_type: cannot_type$a,
	where_is_data: where_is_data$a,
	resource_sharing: resource_sharing$a,
	all_resources: all_resources$a,
	new_concept_english: new_concept_english$a,
	tv_movie: tv_movie$a,
	grammar_learning: grammar_learning$a,
	listening_training: listening_training$a,
	warm_tips: warm_tips$a,
	resources_from_internet: resources_from_internet$a,
	toggle_theme: toggle_theme$a,
	english_document: english_document$a,
	empty_placeholder: empty_placeholder$a,
	custom: custom$a,
	back: back$a,
	total_items: total_items$a,
	batch_delete: batch_delete$a,
	confirm_delete_selected: confirm_delete_selected$a,
	change_order: change_order$a,
	list_order_setting: list_order_setting$a,
	reverse_current_page: reverse_current_page$a,
	reverse_all: reverse_all$a,
	random_current_page: random_current_page$a,
	random_all: random_all$a,
	apply: apply$a,
	add: add$a,
	collect: collect$a,
	uncollect: uncollect$a,
	mark_mastered: mark_mastered$a,
	unmark_mastered: unmark_mastered$a,
	about_thanks: about_thanks$a,
	github_address: github_address$a,
	about_wechat_feedback: about_wechat_feedback$a,
	about_ticket_feedback: about_ticket_feedback$a,
	about_other_channels: about_other_channels$a,
	wait_translation: wait_translation$a,
	migrate_data: migrate_data$a,
	migrate_new_domain: migrate_new_domain$a,
	migrate_old_domain_notice: migrate_old_domain_notice$a,
	migrate_later_notice: migrate_later_notice$a,
	author: author$a,
	features: features$a,
	suitable_for: suitable_for$a,
	open_link: open_link$a,
	qq_group: qq_group$a,
	xiaohongshu: xiaohongshu$a,
	follow_x_account: follow_x_account$a,
	twitter: twitter$a,
	send_email: send_email$a,
	email: email$a,
	xiaohongshu_desc: xiaohongshu_desc$a,
	xiaohongshu_qrcode: xiaohongshu_qrcode$a,
	community_desc: community_desc$a,
	qq_qrcode: qq_qrcode$a,
	wechat_group: wechat_group$a,
	wechat_qrcode: wechat_qrcode$a,
	github_project: github_project$a,
	ie_not_supported: ie_not_supported$a,
	ie_use_modern_browser: ie_use_modern_browser$a,
	download_chrome: download_chrome$a,
	i_understand: i_understand$a,
	ignore_case: ignore_case$a,
	ignore_case_desc: ignore_case_desc$a,
	allow_dictation_tip: allow_dictation_tip$a,
	allow_dictation_tip_desc: allow_dictation_tip_desc$a,
	simple_word_filter: simple_word_filter$a,
	simple_word_filter_desc: simple_word_filter_desc$a,
	simple_word_list: simple_word_list$a,
	words_comma_separated: words_comma_separated$a,
	sound_effect: sound_effect$a,
	pronunciation_accent: pronunciation_accent$a,
	pronunciation_accent_desc: pronunciation_accent_desc$a,
	please_select: please_select$a,
	us_accent: us_accent$a,
	uk_accent: uk_accent$a,
	keyboard_sound: keyboard_sound$a,
	keyboard_sound_effect: keyboard_sound_effect$a,
	volume: volume$a,
	show_prev_next_word: show_prev_next_word$a,
	show_prev_next_word_desc: show_prev_next_word_desc$a,
	disable_practice_setting_dialog: disable_practice_setting_dialog$a,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$a,
	clear_input_on_error: clear_input_on_error$a,
	word_repeat_setting: word_repeat_setting$a,
	repeat_count: repeat_count$a,
	review_ratio: review_ratio$a,
	review_ratio_desc: review_ratio_desc$a,
	word_auto_pronunciation: word_auto_pronunciation$a,
	speed: speed$a,
	effect_sound: effect_sound$a,
	auto_switch: auto_switch$a,
	auto_next_word: auto_next_word$a,
	auto_next_word_desc: auto_next_word_desc$a,
	auto_next_word_time: auto_next_word_time$a,
	auto_next_word_time_desc: auto_next_word_time_desc$a,
	milliseconds: milliseconds$a,
	font_setting: font_setting$a,
	foreign_font: foreign_font$a,
	chinese_font: chinese_font$a,
	auto_play_sentence: auto_play_sentence$a,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$a,
	settings: settings$a,
	please_select_dict: please_select_dict$a,
	learning_settings: learning_settings$a,
	total: total$a,
	estimated: estimated$a,
	days_to_complete: days_to_complete$a,
	from_word: from_word$a,
	start_daily: start_daily$a,
	new_words: new_words$a,
	review_ratio_tooltip: review_ratio_tooltip$a,
	review_ratio_notice_1: review_ratio_notice_1$a,
	review_ratio_notice_2: review_ratio_notice_2$a,
	daily_learning: daily_learning$a,
	learning_progress: learning_progress$a,
	select_from_dict: select_from_dict$a,
	change_in_settings: change_in_settings$a,
	keep_default_no_show: keep_default_no_show$a,
	review_complete: review_complete$a,
	today_task_complete: today_task_complete$a,
	study_duration: study_duration$a,
	accuracy_rate: accuracy_rate$a,
	weekly_study_record: weekly_study_record$a,
	studied: studied$a,
	total_words: total_words$a,
	restart_learning: restart_learning$a,
	another_round: another_round$a,
	return_home: return_home$a,
	import_tutorial: import_tutorial$a,
	import_follow_template: import_follow_template$a,
	import_word_required: import_word_required$a,
	import_translation_hint: import_translation_hint$a,
	import_example_hint: import_example_hint$a,
	import_phrase_hint: import_phrase_hint$a,
	two: two$a,
	lines: lines$a,
	import_other_hint: import_other_hint$a,
	template_download: template_download$a,
	word_import_template: word_import_template$a,
	conflict_notice_title: conflict_notice_title$a,
	keyboard_no_response: keyboard_no_response$a,
	check_plugins_installed: check_plugins_installed$a,
	conflict_plugin_names: conflict_plugin_names$a,
	plugins_intercept_keyboard: plugins_intercept_keyboard$a,
	cause_no_response: cause_no_response$a,
	follow_steps_to_resolve: follow_steps_to_resolve$a,
	try_incognito_mode: try_incognito_mode$a,
	incognito_not_working: incognito_not_working$a,
	click_here: click_here$a,
	feedback_or_wechat: feedback_or_wechat$a,
	incognito_working: incognito_working$a,
	disable_plugin_or_exclude: disable_plugin_or_exclude$a,
	install_extension_manager: install_extension_manager$a,
	chrome_extension: chrome_extension$a,
	edge_extension: edge_extension$a,
	to_manage_extensions: to_manage_extensions$a,
	delete_key_goes_back: delete_key_goes_back$a,
	browser_360_shortcut: browser_360_shortcut$a,
	change_browser_or_shortcut: change_browser_or_shortcut$a,
	please_enter_name: please_enter_name$a,
	name_max_20_chars: name_max_20_chars$a,
	name_already_exists: name_already_exists$a,
	add_success: add_success$a,
	edit_success: edit_success$a,
	edit_and_add_to_dict: edit_and_add_to_dict$a,
	please_fill_complete: please_fill_complete$a,
	name: name$a,
	description: description$a,
	source_language: source_language$a,
	target_language: target_language$a,
	english: english$a,
	german: german$a,
	japanese: japanese$a,
	code: code$a,
	chinese: chinese$a,
	multiple_choice: multiple_choice$a,
	start: start$a,
	countdown: countdown$a,
	seconds: seconds$a,
	submit_exam: submit_exam$a,
	exam_color_hint: exam_color_hint$a,
	items_per_page: items_per_page$a,
	jump_to: jump_to$a,
	page_or_index: page_or_index$a,
	please_fill_original: please_fill_original$a,
	please_fill_title: please_fill_title$a,
	please_fill_content: please_fill_content$a,
	audio_added_success: audio_added_success$a,
	lrc_parse_success: lrc_parse_success$a,
	original_text: original_text$a,
	title: title$a,
	please_fill_original_title: please_fill_original_title$a,
	content: content$a,
	one_sentence_per_line: one_sentence_per_line$a,
	name_config_tip: name_config_tip$a,
	name_config: name_config$a,
	please_paste_original: please_paste_original$a,
	usage_guide: usage_guide$a,
	copy_and_split: copy_and_split$a,
	click: click$a,
	split_sentence: split_sentence$a,
	auto_split: auto_split$a,
	or: or$a,
	manual_split: manual_split$a,
	split_rule: split_rule$a,
	after_edit_click: after_edit_click$a,
	sync_to_result: sync_to_result$a,
	please_fill_translation_title: please_fill_translation_title$a,
	please_fill_translation: please_fill_translation$a,
	translate: translate$a,
	copy_translation_or_click: copy_translation_or_click$a,
	result: result$a,
	editable_auto_sync: editable_auto_sync$a,
	audio: audio$a,
	audio_management: audio_management$a,
	paragraph: paragraph$a,
	set_start_time: set_start_time$a,
	use_prev_end_time: use_prev_end_time$a,
	minus_03s: minus_03s$a,
	end: end$a,
	set_end_time: set_end_time$a,
	edit_audio_align: edit_audio_align$a,
	play: play$a,
	status: status$a,
	sentences_not_translated: sentences_not_translated$a,
	translation_complete: translation_complete$a,
	save_and_next: save_and_next$a,
	no_translation_comparison: no_translation_comparison$a,
	adjust_audio_timeline: adjust_audio_timeline$a,
	audio_timeline_tutorial: audio_timeline_tutorial$a,
	start_time: start_time$a,
	jump_to_seconds: jump_to_seconds$a,
	use_prev_end_seconds: use_prev_end_seconds$a,
	decrease_03s: decrease_03s$a,
	increase_03s: increase_03s$a,
	record: record$a,
	end_time: end_time$a,
	audio_upload_notice: audio_upload_notice$a,
	upload_audio: upload_audio$a,
	upload_lrc: upload_lrc$a,
	name_management: name_management$a,
	name_ignore_config_desc: name_ignore_config_desc$a,
	add_name: add_name$a,
	enter_name: enter_name$a,
	collect_word: collect_word$a,
	copy: copy$a,
	copy_sentence: copy_sentence$a,
	copied: copied$a,
	copy_word: copy_word$a,
	start_from_here: start_from_here$a,
	play_sentence: play_sentence$a,
	grammar_analysis: grammar_analysis$a,
	copied_open_grammar: copied_open_grammar$a,
	youdao_translate: youdao_translate$a,
	translate_word: translate_word$a,
	translate_sentence: translate_sentence$a,
	restart_practice: restart_practice$a,
	next_article: next_article$a,
	learning_record: learning_record$a,
	total_learning_time: total_learning_time$a,
	current: current$a,
	show_questions: show_questions$a,
	explanation: explanation$a,
	encouragement_95: encouragement_95$a,
	encouragement_85: encouragement_85$a,
	encouragement_70: encouragement_70$a,
	encouragement_default: encouragement_default$a,
	daily_task_complete: daily_task_complete$a,
	weekly_record: weekly_record$a,
	study_progress: study_progress$a,
	relearn: relearn$a,
	start_from_beginning: start_from_beginning$a,
	another_group: another_group$a,
	back_to_home: back_to_home$a,
	know_word_tip: know_word_tip$a,
	press_delete_reinput: press_delete_reinput$a,
	press_space_continue: press_space_continue$a,
	shortcut: shortcut$a,
	i_know: i_know$a,
	i_dont_know: i_dont_know$a,
	phrases: phrases$a,
	synonyms: synonyms$a,
	word_root: word_root$a,
	review_wrong_words: review_wrong_words$a,
	collapse: collapse$a,
	expand: expand$a,
	minutes: minutes$a,
	time: time$a,
	errors: errors$a,
	skip_to_next_stage: skip_to_next_stage$a,
	skip_word: skip_word$a,
	toggle_dictation_mode: toggle_dictation_mode$a,
	send_failed: send_failed$a,
	send_code_failed: send_code_failed$a,
	sending: sending$a,
	send_code: send_code$a,
	agree_terms_notice: agree_terms_notice$a,
	user_agreement: user_agreement$a,
	and: and$a,
	privacy_policy: privacy_policy$a,
	important_notice: important_notice$a,
	dont_remind: dont_remind$a,
	function_desc: function_desc$a,
	qa1_a: qa1_a$a,
	qa1_q1: qa1_q1$a,
	qa1_q2: qa1_q2$a,
	qa2_a: qa2_a$a,
	qa3_a: qa3_a$a,
	qa3_q1: qa3_q1$a,
	qa3_q2: qa3_q2$a,
	qa3_q3: qa3_q3$a,
	qa4_a: qa4_a$a,
	qa4_q1: qa4_q1$a,
	qa4_q2: qa4_q2$a,
	qa5_a: qa5_a$a,
	qa5_q1: qa5_q1$a,
	qa5_q2: qa5_q2$a,
	qa5_q3: qa5_q3$a,
	qa5_q4: qa5_q4$a,
	qa6_a: qa6_a$a,
	qa7_a: qa7_a$a,
	qa7_q1: qa7_q1$a,
	qa7_q2: qa7_q2$a,
	qa7_q3: qa7_q3$a,
	qa8_a: qa8_a$a,
	qa8_q1: qa8_q1$a,
	qa8_q2: qa8_q2$a,
	qa8_q3: qa8_q3$a,
	qa9_a: qa9_a$a,
	qa9_q: qa9_q$a,
	qa10_a: qa10_a$a,
	qa10_q1: qa10_q1$a,
	qa10_q2: qa10_q2$a,
	qa11_a: qa11_a$a,
	qa11_q: qa11_q$a,
	qa12_a: qa12_a$a,
	qa12_q: qa12_q$a,
	qa13_a: qa13_a$a,
	qa13_q1: qa13_q1$a,
	qa13_q2: qa13_q2$a,
	qa13_q3: qa13_q3$a,
	qa13_q4: qa13_q4$a
};

const fr$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$a,
  about_other_channels: about_other_channels$a,
  about_thanks: about_thanks$a,
  about_ticket_feedback: about_ticket_feedback$a,
  about_wechat_feedback: about_wechat_feedback$a,
  account_placeholder: account_placeholder$a,
  accuracy_rate: accuracy_rate$a,
  add: add$a,
  add_name: add_name$a,
  add_success: add_success$a,
  add_word: add_word$a,
  adjust_audio_timeline: adjust_audio_timeline$a,
  after_edit_click: after_edit_click$a,
  agree_terms_notice: agree_terms_notice$a,
  all_resources: all_resources$a,
  allow_dictation_tip: allow_dictation_tip$a,
  allow_dictation_tip_desc: allow_dictation_tip_desc$a,
  and: and$a,
  another_group: another_group$a,
  another_round: another_round$a,
  app_desc: app_desc$a,
  app_name: app_name$a,
  apply: apply$a,
  article_management: article_management$a,
  article_settings: article_settings$a,
  articles: articles$a,
  audio: audio$a,
  audio_added_success: audio_added_success$a,
  audio_management: audio_management$a,
  audio_timeline_tutorial: audio_timeline_tutorial$a,
  audio_upload_notice: audio_upload_notice$a,
  author: author$a,
  auto_next_word: auto_next_word$a,
  auto_next_word_desc: auto_next_word_desc$a,
  auto_next_word_time: auto_next_word_time$a,
  auto_next_word_time_desc: auto_next_word_time_desc$a,
  auto_play_sentence: auto_play_sentence$a,
  auto_register_notice: auto_register_notice$a,
  auto_split: auto_split$a,
  auto_switch: auto_switch$a,
  back: back$a,
  back_to_home: back_to_home$a,
  batch_delete: batch_delete$a,
  book_list: book_list$a,
  browser_360_shortcut: browser_360_shortcut$a,
  cancel: cancel$a,
  cannot_type: cannot_type$a,
  cause_no_response: cause_no_response$a,
  change: change$a,
  change_book: change_book$a,
  change_browser_or_shortcut: change_browser_or_shortcut$a,
  change_in_settings: change_in_settings$a,
  change_order: change_order$a,
  change_progress: change_progress$a,
  check_plugins_installed: check_plugins_installed$a,
  chinese: chinese$a,
  chinese_font: chinese_font$a,
  chrome_extension: chrome_extension$a,
  clear_input_on_error: clear_input_on_error$a,
  click: click$a,
  click_here: click_here$a,
  click_here_when_done: click_here_when_done$a,
  close: close$a,
  cn_limit_no1: cn_limit_no1$a,
  cn_limit_no2: cn_limit_no2$a,
  code: code$a,
  code_login: code_login$a,
  code_placeholder: code_placeholder$a,
  collapse: collapse$a,
  collect: collect$a,
  collect_word: collect_word$a,
  community_desc: community_desc$a,
  comparison: comparison$a,
  completed_review_stage: completed_review_stage$a,
  confirm: confirm$a,
  confirm_delete_selected: confirm_delete_selected$a,
  confirm_new_password: confirm_new_password$a,
  confirm_password_placeholder: confirm_password_placeholder$a,
  conflict_notice_title: conflict_notice_title$a,
  conflict_plugin_names: conflict_plugin_names$a,
  content: content$a,
  continue_free_practice: continue_free_practice$a,
  continue_learning: continue_learning$a,
  copied: copied$a,
  copied_open_grammar: copied_open_grammar$a,
  copy: copy$a,
  copy_and_split: copy_and_split$a,
  copy_sentence: copy_sentence$a,
  copy_translation_or_click: copy_translation_or_click$a,
  copy_word: copy_word$a,
  countdown: countdown$a,
  create_book: create_book$a,
  create_dict: create_dict$a,
  create_personal_book: create_personal_book$a,
  create_personal_dict: create_personal_dict$a,
  current: current$a,
  current_progress: current_progress$a,
  custom: custom$a,
  daily_goal: daily_goal$a,
  daily_learning: daily_learning$a,
  daily_task_complete: daily_task_complete$a,
  data_management: data_management$a,
  data_saved_locally: data_saved_locally$a,
  days_to_complete: days_to_complete$a,
  decrease_03s: decrease_03s$a,
  default: fr,
  delete_key_goes_back: delete_key_goes_back$a,
  description: description$a,
  dict_list: dict_list$a,
  disable_plugin_or_exclude: disable_plugin_or_exclude$a,
  disable_practice_setting_dialog: disable_practice_setting_dialog$a,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$a,
  document: document$a,
  dont_remind: dont_remind$a,
  download_chrome: download_chrome$a,
  edge_extension: edge_extension$a,
  edit: edit$a,
  edit_and_add_to_dict: edit_and_add_to_dict$a,
  edit_audio_align: edit_audio_align$a,
  edit_book: edit_book$a,
  edit_dict: edit_dict$a,
  edit_success: edit_success$a,
  edit_word: edit_word$a,
  editable_auto_sync: editable_auto_sync$a,
  effect_sound: effect_sound$a,
  email: email$a,
  empty_placeholder: empty_placeholder$a,
  encouragement_70: encouragement_70$a,
  encouragement_85: encouragement_85$a,
  encouragement_95: encouragement_95$a,
  encouragement_default: encouragement_default$a,
  end: end$a,
  end_time: end_time$a,
  english: english$a,
  english_document: english_document$a,
  enter_name: enter_name$a,
  enter_website: enter_website$a,
  errors: errors$a,
  estimated: estimated$a,
  estimated_completion: estimated_completion$a,
  etymology: etymology$a,
  exam_color_hint: exam_color_hint$a,
  example_sentence: example_sentence$a,
  expand: expand$a,
  explanation: explanation$a,
  export_data_backup: export_data_backup$a,
  faq: faq$a,
  features: features$a,
  feedback: feedback$a,
  feedback_or_wechat: feedback_or_wechat$a,
  follow_steps_to_resolve: follow_steps_to_resolve$a,
  follow_x_account: follow_x_account$a,
  font_setting: font_setting$a,
  foreign_font: foreign_font$a,
  forgot_password: forgot_password$a,
  free_practice: free_practice$a,
  from_word: from_word$a,
  function_desc: function_desc$a,
  general_settings: general_settings$a,
  german: german$a,
  github_address: github_address$a,
  github_project: github_project$a,
  grammar_analysis: grammar_analysis$a,
  grammar_learning: grammar_learning$a,
  help: help$a,
  home_article_practice: home_article_practice$a,
  home_article_practice_desc1: home_article_practice_desc1$a,
  home_article_practice_desc2: home_article_practice_desc2$a,
  home_article_practice_desc3: home_article_practice_desc3$a,
  home_collection: home_collection$a,
  home_collection_desc1: home_collection_desc1$a,
  home_collection_desc2: home_collection_desc2$a,
  home_collection_desc3: home_collection_desc3$a,
  home_customization: home_customization$a,
  home_customization_desc1: home_customization_desc1$a,
  home_customization_desc2: home_customization_desc2$a,
  home_customization_desc3: home_customization_desc3$a,
  home_design: home_design$a,
  home_design_desc1: home_design_desc1$a,
  home_design_desc2: home_design_desc2$a,
  home_design_desc3: home_design_desc3$a,
  home_free_opensource: home_free_opensource$a,
  home_free_opensource_desc1: home_free_opensource_desc1$a,
  home_free_opensource_desc2: home_free_opensource_desc2$a,
  home_free_opensource_desc3: home_free_opensource_desc3$a,
  home_personalized: home_personalized$a,
  home_personalized_desc1: home_personalized_desc1$a,
  home_personalized_desc2: home_personalized_desc2$a,
  home_personalized_desc3: home_personalized_desc3$a,
  home_vocabulary: home_vocabulary$a,
  home_vocabulary_desc: home_vocabulary_desc$a,
  home_word_practice: home_word_practice$a,
  home_word_practice_desc1: home_word_practice_desc1$a,
  home_word_practice_desc2: home_word_practice_desc2$a,
  home_word_practice_desc3: home_word_practice_desc3$a,
  i_dont_know: i_dont_know$a,
  i_know: i_know$a,
  i_understand: i_understand$a,
  ie_not_supported: ie_not_supported$a,
  ie_use_modern_browser: ie_use_modern_browser$a,
  ignore_case: ignore_case$a,
  ignore_case_desc: ignore_case_desc$a,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$a,
  import_data_restore: import_data_restore$a,
  import_example_hint: import_example_hint$a,
  import_follow_template: import_follow_template$a,
  import_other_hint: import_other_hint$a,
  import_phrase_hint: import_phrase_hint$a,
  import_translation_hint: import_translation_hint$a,
  import_tutorial: import_tutorial$a,
  import_warning: import_warning$a,
  import_word_required: import_word_required$a,
  important_notice: important_notice$a,
  incognito_not_working: incognito_not_working$a,
  incognito_working: incognito_working$a,
  increase_03s: increase_03s$a,
  install_extension_manager: install_extension_manager$a,
  introduction: introduction$a,
  is_free: is_free$a,
  items_per_page: items_per_page$a,
  japanese: japanese$a,
  jump_to: jump_to$a,
  jump_to_seconds: jump_to_seconds$a,
  keep_default_no_show: keep_default_no_show$a,
  keyboard_no_response: keyboard_no_response$a,
  keyboard_sound: keyboard_sound$a,
  keyboard_sound_effect: keyboard_sound_effect$a,
  know_word_tip: know_word_tip$a,
  last_task: last_task$a,
  learn: learn$a,
  learned: learned$a,
  learning_progress: learning_progress$a,
  learning_record: learning_record$a,
  learning_settings: learning_settings$a,
  line_by_line: line_by_line$a,
  lines: lines$a,
  list_order_setting: list_order_setting$a,
  listening_training: listening_training$a,
  loading: loading$a,
  local_data_detected: local_data_detected$a,
  login: login$a,
  login_again: login_again$a,
  login_cancelled: login_cancelled$a,
  lrc_parse_success: lrc_parse_success$a,
  manage_books: manage_books$a,
  manage_dict: manage_dict$a,
  manual_split: manual_split$a,
  mark_mastered: mark_mastered$a,
  migrate_data: migrate_data$a,
  migrate_later_notice: migrate_later_notice$a,
  migrate_new_domain: migrate_new_domain$a,
  migrate_old_domain_notice: migrate_old_domain_notice$a,
  milliseconds: milliseconds$a,
  minus_03s: minus_03s$a,
  minutes: minutes$a,
  more: more$a,
  multiple_choice: multiple_choice$a,
  my_books: my_books$a,
  my_dictionaries: my_dictionaries$a,
  name: name$a,
  name_already_exists: name_already_exists$a,
  name_config: name_config$a,
  name_config_tip: name_config_tip$a,
  name_ignore_config_desc: name_ignore_config_desc$a,
  name_management: name_management$a,
  name_max_20_chars: name_max_20_chars$a,
  new_concept_english: new_concept_english$a,
  new_password_placeholder: new_password_placeholder$a,
  new_words: new_words$a,
  new_words_count: new_words_count$a,
  next_article: next_article$a,
  no_dict_selected: no_dict_selected$a,
  no_shortcut_set: no_shortcut_set$a,
  no_sync: no_sync$a,
  no_translation_comparison: no_translation_comparison$a,
  one_sentence_per_line: one_sentence_per_line$a,
  open_link: open_link$a,
  or: or$a,
  original_text: original_text$a,
  page_or_index: page_or_index$a,
  paragraph: paragraph$a,
  password_login: password_login$a,
  password_placeholder: password_placeholder$a,
  phone_placeholder: phone_placeholder$a,
  phonetic: phonetic$a,
  phrase: phrase$a,
  phrases: phrases$a,
  play: play$a,
  play_next_after_end: play_next_after_end$a,
  play_sentence: play_sentence$a,
  please_enter_name: please_enter_name$a,
  please_fill_complete: please_fill_complete$a,
  please_fill_content: please_fill_content$a,
  please_fill_original: please_fill_original$a,
  please_fill_original_title: please_fill_original_title$a,
  please_fill_title: please_fill_title$a,
  please_fill_translation: please_fill_translation$a,
  please_fill_translation_title: please_fill_translation_title$a,
  please_paste_original: please_paste_original$a,
  please_select: please_select$a,
  please_select_dict: please_select_dict$a,
  plugins_intercept_keyboard: plugins_intercept_keyboard$a,
  practice: practice$a,
  press_delete_reinput: press_delete_reinput$a,
  press_key_to_set: press_key_to_set$a,
  press_space_continue: press_space_continue$a,
  privacy_policy: privacy_policy$a,
  pronunciation_accent: pronunciation_accent$a,
  pronunciation_accent_desc: pronunciation_accent_desc$a,
  qa10_a: qa10_a$a,
  qa10_q1: qa10_q1$a,
  qa10_q2: qa10_q2$a,
  qa11_a: qa11_a$a,
  qa11_q: qa11_q$a,
  qa12_a: qa12_a$a,
  qa12_q: qa12_q$a,
  qa13_a: qa13_a$a,
  qa13_q1: qa13_q1$a,
  qa13_q2: qa13_q2$a,
  qa13_q3: qa13_q3$a,
  qa13_q4: qa13_q4$a,
  qa1_a: qa1_a$a,
  qa1_q1: qa1_q1$a,
  qa1_q2: qa1_q2$a,
  qa2_a: qa2_a$a,
  qa3_a: qa3_a$a,
  qa3_q1: qa3_q1$a,
  qa3_q2: qa3_q2$a,
  qa3_q3: qa3_q3$a,
  qa4_a: qa4_a$a,
  qa4_q1: qa4_q1$a,
  qa4_q2: qa4_q2$a,
  qa5_a: qa5_a$a,
  qa5_q1: qa5_q1$a,
  qa5_q2: qa5_q2$a,
  qa5_q3: qa5_q3$a,
  qa5_q4: qa5_q4$a,
  qa6_a: qa6_a$a,
  qa7_a: qa7_a$a,
  qa7_q1: qa7_q1$a,
  qa7_q2: qa7_q2$a,
  qa7_q3: qa7_q3$a,
  qa8_a: qa8_a$a,
  qa8_q1: qa8_q1$a,
  qa8_q2: qa8_q2$a,
  qa8_q3: qa8_q3$a,
  qa9_a: qa9_a$a,
  qa9_q: qa9_q$a,
  qq_group: qq_group$a,
  qq_qrcode: qq_qrcode$a,
  question: question$a,
  random_all: random_all$a,
  random_current_page: random_current_page$a,
  random_review: random_review$a,
  recommend: recommend$a,
  record: record$a,
  register: register$a,
  register_account: register_account$a,
  register_new_account: register_new_account$a,
  related_words: related_words$a,
  relearn: relearn$a,
  repeat_count: repeat_count$a,
  reset_password: reset_password$a,
  resource_sharing: resource_sharing$a,
  resources_from_internet: resources_from_internet$a,
  restart_learning: restart_learning$a,
  restart_practice: restart_practice$a,
  restore_default: restore_default$a,
  result: result$a,
  return_home: return_home$a,
  reverse_all: reverse_all$a,
  reverse_current_page: reverse_current_page$a,
  review: review$a,
  review_complete: review_complete$a,
  review_last: review_last$a,
  review_previous: review_previous$a,
  review_ratio: review_ratio$a,
  review_ratio_desc: review_ratio_desc$a,
  review_ratio_notice_1: review_ratio_notice_1$a,
  review_ratio_notice_2: review_ratio_notice_2$a,
  review_ratio_tooltip: review_ratio_tooltip$a,
  review_wrong_words: review_wrong_words$a,
  save: save$a,
  save_and_next: save_and_next$a,
  scan_success: scan_success$a,
  search: search$a,
  seconds: seconds$a,
  select_dict: select_dict$a,
  select_dict_to_start: select_dict_to_start$a,
  select_from_dict: select_from_dict$a,
  send_code: send_code$a,
  send_code_failed: send_code_failed$a,
  send_email: send_email$a,
  send_failed: send_failed$a,
  sending: sending$a,
  sentences_not_translated: sentences_not_translated$a,
  set_end_time: set_end_time$a,
  set_password_placeholder: set_password_placeholder$a,
  set_start_time: set_start_time$a,
  setting: setting$a,
  settings: settings$a,
  shortcut: shortcut$a,
  shortcut_key: shortcut_key$a,
  shortcut_settings: shortcut_settings$a,
  show_prev_next_word: show_prev_next_word$a,
  show_prev_next_word_desc: show_prev_next_word_desc$a,
  show_questions: show_questions$a,
  simple_word_filter: simple_word_filter$a,
  simple_word_filter_desc: simple_word_filter_desc$a,
  simple_word_list: simple_word_list$a,
  single_line: single_line$a,
  skip_to_next_stage: skip_to_next_stage$a,
  skip_word: skip_word$a,
  smart_learning: smart_learning$a,
  sound_effect: sound_effect$a,
  source_language: source_language$a,
  speed: speed$a,
  split_rule: split_rule$a,
  split_sentence: split_sentence$a,
  start: start$a,
  start_article_practice: start_article_practice$a,
  start_daily: start_daily$a,
  start_from_beginning: start_from_beginning$a,
  start_from_here: start_from_here$a,
  start_learning: start_learning$a,
  start_time: start_time$a,
  start_word_practice: start_word_practice$a,
  status: status$a,
  studied: studied$a,
  study_duration: study_duration$a,
  study_progress: study_progress$a,
  study_record: study_record$a,
  submit_exam: submit_exam$a,
  suitable_for: suitable_for$a,
  switch_display_mode: switch_display_mode$a,
  sync: sync$a,
  sync_data: sync_data$a,
  sync_failed: sync_failed$a,
  sync_success: sync_success$a,
  sync_to_account_question: sync_to_account_question$a,
  sync_to_result: sync_to_result$a,
  syncing: syncing$a,
  synonym: synonym$a,
  synonyms: synonyms$a,
  tap_allow_in_wechat: tap_allow_in_wechat$a,
  target_language: target_language$a,
  template_download: template_download$a,
  test: test$a,
  this_week_record: this_week_record$a,
  time: time$a,
  title: title$a,
  to_manage_extensions: to_manage_extensions$a,
  today_study_time: today_study_time$a,
  today_task: today_task$a,
  today_task_complete: today_task_complete$a,
  toggle_dictation_mode: toggle_dictation_mode$a,
  toggle_theme: toggle_theme$a,
  toggle_translation: toggle_translation$a,
  total: total$a,
  total_items: total_items$a,
  total_learning_time: total_learning_time$a,
  total_study_days: total_study_days$a,
  total_study_time: total_study_time$a,
  total_words: total_words$a,
  translate: translate$a,
  translate_sentence: translate_sentence$a,
  translate_word: translate_word$a,
  translation: translation$a,
  translation_complete: translation_complete$a,
  try_incognito_mode: try_incognito_mode$a,
  tv_movie: tv_movie$a,
  twitter: twitter$a,
  two: two$a,
  uk_accent: uk_accent$a,
  uncollect: uncollect$a,
  unmark_mastered: unmark_mastered$a,
  update_log: update_log$a,
  upload_audio: upload_audio$a,
  upload_lrc: upload_lrc$a,
  us_accent: us_accent$a,
  usage_guide: usage_guide$a,
  use_prev_end_seconds: use_prev_end_seconds$a,
  use_prev_end_time: use_prev_end_time$a,
  user_agreement: user_agreement$a,
  volume: volume$a,
  wait_translation: wait_translation$a,
  warm_tips: warm_tips$a,
  wechat_group: wechat_group$a,
  wechat_qrcode: wechat_qrcode$a,
  wechat_scan_login: wechat_scan_login$a,
  weekly_record: weekly_record$a,
  weekly_study_record: weekly_study_record$a,
  where_is_data: where_is_data$a,
  word: word$a,
  word_auto_pronunciation: word_auto_pronunciation$a,
  word_import_template: word_import_template$a,
  word_list: word_list$a,
  word_repeat_setting: word_repeat_setting$a,
  word_root: word_root$a,
  word_settings: word_settings$a,
  words: words$a,
  words_comma_separated: words_comma_separated$a,
  words_count: words_count$a,
  xiaohongshu: xiaohongshu$a,
  xiaohongshu_desc: xiaohongshu_desc$a,
  xiaohongshu_qrcode: xiaohongshu_qrcode$a,
  youdao_translate: youdao_translate$a
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$9 = "Aprenda inglês, uma tecla de cada vez, ferramenta de prática de código aberto";
var app_name$9 = "Type Words";
var start_word_practice$9 = "Iniciar prática de palavras";
var start_article_practice$9 = "Iniciar prática de artigos";
var home_word_practice$9 = "Prática de palavras";
var home_word_practice_desc1$9 = "Modos: Acompanhamento/Ditado/Autoteste/Recitação";
var home_word_practice_desc2$9 = "Aprendizado inteligente: Planejamento inteligente";
var home_word_practice_desc3$9 = "Aprendizado livre: Sem restrições";
var home_article_practice$9 = "Prática de artigos";
var home_article_practice_desc1$9 = "Livros incorporados, adicionar artigos";
var home_article_practice_desc2$9 = "Modo duplo de acompanhamento + recitação";
var home_article_practice_desc3$9 = "Suporte para ouvir enquanto recita";
var home_collection$9 = "Favoritos, Erros, Dominadas";
var home_collection_desc1$9 = "Entrada incorreta adicionada automaticamente";
var home_collection_desc2$9 = "Adicionar a dominadas, pular depois";
var home_collection_desc3$9 = "Adicionar aos favoritos para revisar";
var home_vocabulary$9 = "Vocabulário massivo";
var home_vocabulary_desc$9 = "Vocabulário de básico a avançado";
var home_free_opensource$9 = "Gratuito e código aberto";
var home_free_opensource_desc1$9 = "Completamente de código aberto";
var home_free_opensource_desc2$9 = "Uso gratuito";
var home_free_opensource_desc3$9 = "Implantação privada";
var home_customization$9 = "Altamente personalizável";
var home_customization_desc1$9 = "Efeitos sonoros de teclado";
var home_customization_desc2$9 = "Teclas de atalho personalizáveis";
var home_customization_desc3$9 = "Configurações altamente personalizáveis";
var home_design$9 = "Simples e eficiente";
var home_design_desc1$9 = "Design simples, UI moderna";
var home_design_desc2$9 = "Interface limpa, operação simples";
var home_design_desc3$9 = "Sem seguimento forçado";
var home_personalized$9 = "Aprendizado personalizado";
var home_personalized_desc1$9 = "Adicionar livremente dicionários e artigos";
var home_personalized_desc2$9 = "Personalizar plano de aprendizado";
var home_personalized_desc3$9 = "Múltiplas estratégias de aprendizado";
var cn_limit_no1$9 = "川公网安备51015602001426号";
var cn_limit_no2$9 = "蜀ICP备2025157466号-2";
var setting$9 = "Configurações";
var edit$9 = "Editar";
var cancel$9 = "Cancelar";
var confirm$9 = "Confirmar";
var save$9 = "Salvar";
var close$9 = "Fechar";
var search$9 = "Pesquisar";
var more$9 = "Mais";
var loading$9 = "Carregando";
var introduction$9 = "Introdução";
var learn$9 = "Aprender";
var practice$9 = "Praticar";
var test$9 = "Teste";
var feedback$9 = "Feedback";
var document$9 = "Recursos";
var help$9 = "Ajuda";
var about$9 = "Sobre";
var login$9 = "Entrar";
var register$9 = "Registrar";
var register_account$9 = "Registrar conta";
var register_new_account$9 = "Registrar nova conta";
var code_login$9 = "Login com código";
var password_login$9 = "Login com senha";
var phone_placeholder$9 = "Digite seu número de telefone";
var code_placeholder$9 = "Digite o código de verificação";
var account_placeholder$9 = "Digite telefone/email";
var password_placeholder$9 = "Digite sua senha";
var auto_register_notice$9 = "Números não registrados serão registrados automaticamente";
var forgot_password$9 = "Esqueceu a senha?";
var reset_password$9 = "Redefinir senha";
var set_password_placeholder$9 = "Por favor defina a senha";
var confirm_password_placeholder$9 = "Por favor confirme a senha";
var new_password_placeholder$9 = "Digite nova senha";
var confirm_new_password$9 = "Confirmar nova senha";
var wechat_scan_login$9 = "Login por QR WeChat";
var scan_success$9 = "Escaneamento bem-sucedido";
var tap_allow_in_wechat$9 = "Toque permitir no WeChat para entrar";
var login_cancelled$9 = "Login cancelado";
var login_again$9 = "Entrar novamente";
var sync_data$9 = "Sincronizar dados";
var local_data_detected$9 = "Dados locais detectados";
var sync_to_account_question$9 = "Sincronizar com a conta?";
var no_sync$9 = "Não sincronizar";
var sync$9 = "Sincronizar";
var syncing$9 = "Sincronizando";
var sync_failed$9 = "Sincronização falhou";
var sync_success$9 = "Sincronização bem-sucedida";
var enter_website$9 = "Entrar no site";
var general_settings$9 = "Configurações gerais";
var word_settings$9 = "Configurações de palavras";
var article_settings$9 = "Configurações de artigos";
var data_management$9 = "Gerenciamento de dados";
var shortcut_settings$9 = "Configurações de atalhos";
var update_log$9 = "Log de atualizações";
var shortcut_key$9 = "Atalho (clique para modificar)";
var no_shortcut_set$9 = "Nenhum atalho definido";
var press_key_to_set$9 = "Pressione tecla para definir";
var click_here_when_done$9 = "Clique aqui quando terminar";
var restore_default$9 = "Restaurar padrão";
var data_saved_locally$9 = "Todos os dados salvos localmente";
var export_data_backup$9 = "Exportar backup de dados (ZIP)";
var import_data_restore$9 = "Importar restauração de dados";
var import_warning$9 = "A importação substituirá todos os dados";
var words$9 = "Palavras";
var no_dict_selected$9 = "Nenhum dicionário selecionado";
var select_dict_to_start$9 = "Selecione um dicionário para começar";
var select_dict$9 = "Selecionar dicionário";
var change_progress$9 = "Alterar progresso";
var estimated_completion$9 = "Conclusão estimada";
var current_progress$9 = "Progresso atual";
var learned$9 = "Aprendido";
var completed_review_stage$9 = "Concluído, entrando em fase de revisão";
var today_task$9 = "Tarefa de hoje";
var last_task$9 = "Última tarefa";
var word_list$9 = "Lista de palavras";
var daily_goal$9 = "Meta diária";
var words_count$9 = "palavras";
var change$9 = "Alterar";
var new_words_count$9 = "Novas palavras";
var review_last$9 = "Revisar último";
var review_previous$9 = "Revisar anterior";
var start_learning$9 = "Começar a aprender";
var continue_learning$9 = "Continuar aprendendo";
var free_practice$9 = "Prática livre";
var continue_free_practice$9 = "Continuar prática livre";
var smart_learning$9 = "Aprendizado inteligente";
var review$9 = "Revisar";
var random_review$9 = "Revisão aleatória";
var my_dictionaries$9 = "Meus dicionários";
var manage_dict$9 = "Gerenciar dicionários";
var create_personal_dict$9 = "Criar dicionário pessoal";
var recommend$9 = "Recomendado";
var articles$9 = "Artigos";
var this_week_record$9 = "Registros desta semana";
var change_book$9 = "Alterar";
var today_study_time$9 = "Tempo de estudo de hoje";
var total_study_days$9 = "Dias totais de estudo";
var total_study_time$9 = "Tempo total de estudo";
var my_books$9 = "Meus livros";
var manage_books$9 = "Gerenciar livros";
var create_personal_book$9 = "Criar livro pessoal";
var article_management$9 = "Gerenciamento de artigos";
var toggle_translation$9 = "Alternar tradução";
var switch_display_mode$9 = "Alternar modo de exibição";
var line_by_line$9 = "Linha por linha";
var single_line$9 = "Linha única";
var comparison$9 = "Comparação";
var question$9 = "Pergunta";
var study_record$9 = "Registro de estudo";
var play_next_after_end$9 = "Reproduzir próximo ao terminar";
var create_book$9 = "Criar livro";
var edit_book$9 = "Editar livro";
var dict_list$9 = "Lista de dicionários";
var book_list$9 = "Lista de livros";
var word$9 = "Palavra";
var phonetic$9 = "Fonética";
var translation$9 = "Tradução";
var example_sentence$9 = "Frase de exemplo";
var phrase$9 = "Frase";
var synonym$9 = "Sinônimo";
var related_words$9 = "Palavras relacionadas";
var etymology$9 = "Etimologia";
var add_word$9 = "Adicionar palavra";
var edit_word$9 = "Editar palavra";
var create_dict$9 = "Criar dicionário";
var edit_dict$9 = "Editar dicionário";
var faq$9 = "Perguntas frequentes";
var is_free$9 = "O site é gratuito?";
var cannot_type$9 = "Não consegue digitar, teclado não responde?";
var where_is_data$9 = "Onde estão os dados? Como usar em vários dispositivos?";
var resource_sharing$9 = "Recursos de aprendizado de inglês";
var all_resources$9 = "Todos os recursos";
var new_concept_english$9 = "Novo Conceito Inglês";
var tv_movie$9 = "TV/Filme";
var grammar_learning$9 = "Aprendizado de gramática";
var listening_training$9 = "Treinamento de escuta";
var warm_tips$9 = "Dicas";
var resources_from_internet$9 = "Todos os recursos coletados da internet, apenas para aprendizado";
var toggle_theme$9 = "Alternar tema";
var english_document$9 = "Recursos de inglês";
var empty_placeholder$9 = "Vazio~";
var custom$9 = "Personalizado";
var back$9 = "Voltar";
var total_items$9 = "itens";
var batch_delete$9 = "Excluir em lote";
var confirm_delete_selected$9 = "Confirmar excluir todos os selecionados?";
var change_order$9 = "Mudar ordem";
var list_order_setting$9 = "Configurações de ordem da lista";
var reverse_current_page$9 = "Inverter página atual";
var reverse_all$9 = "Inverter tudo";
var random_current_page$9 = "Embaralhar página atual";
var random_all$9 = "Embaralhar tudo";
var apply$9 = "Aplicar";
var add$9 = "Adicionar";
var collect$9 = "Favorito";
var uncollect$9 = "Desfavoritar";
var mark_mastered$9 = "Marcar como dominado";
var unmark_mastered$9 = "Desmarcar dominado";
var about_thanks$9 = "Obrigado por usar este projeto! É um projeto de código aberto, gratuito. Se achar útil, deixe uma estrela no GitHub!";
var github_address$9 = "GitHub:";
var about_wechat_feedback$9 = "Feedback do WeChat:";
var about_ticket_feedback$9 = "Feedback por ticket:";
var about_other_channels$9 = "Outros canais:";
var wait_translation$9 = "Por favor aguarde a conclusão da tradução";
var migrate_data$9 = "Migrar dados";
var migrate_new_domain$9 = "Este site tem um novo domínio";
var migrate_old_domain_notice$9 = "O domínio antigo será descontinuado. Devido a restrições de segurança do navegador, os dados não podem ser compartilhados. Por favor, transfira seus dados manualmente.";
var migrate_later_notice$9 = "Se não quiser migrar agora, pode fechar este diálogo e migrar mais tarde em \"Configurações\" -> \"Gestão de dados\"";
var author$9 = "Autor:";
var features$9 = "Recursos:";
var suitable_for$9 = "Adequado para:";
var open_link$9 = "Abrir link";
var qq_group$9 = "Grupo QQ";
var xiaohongshu$9 = "Xiaohongshu";
var follow_x_account$9 = "Seguir minha conta X {x_account}";
var twitter$9 = "Twitter";
var send_email$9 = "Enviar email para {email}";
var email$9 = "Email";
var xiaohongshu_desc$9 = "Siga-nos no Xiaohongshu para obter as últimas atualizações da equipe de desenvolvimento, compartilhe sua experiência e sugestões";
var xiaohongshu_qrcode$9 = "Código QR do Xiaohongshu";
var community_desc$9 = "Junte-se à nossa comunidade para se comunicar com a equipe de desenvolvimento, compartilhe sua experiência e sugestões";
var qq_qrcode$9 = "Código QR do grupo QQ";
var wechat_group$9 = "Grupo WeChat";
var wechat_qrcode$9 = "Código QR do grupo WeChat";
var github_project$9 = "Projeto GitHub";
var ie_not_supported$9 = "O navegador IE não é suportado";
var ie_use_modern_browser$9 = "Type Words é construído com tecnologia moderna, use Chrome, Edge, Firefox ou outros navegadores modernos";
var download_chrome$9 = "Baixar Chrome";
var i_understand$9 = "Entendi";
var ignore_case$9 = "Ignorar maiúsculas";
var ignore_case_desc$9 = "Quando ativado, a entrada não diferencia maiúsculas de minúsculas";
var allow_dictation_tip$9 = "Permitir dicas no modo ditado";
var allow_dictation_tip_desc$9 = "Quando ativado, você pode passar o mouse sobre a palavra ou pressionar uma tecla de atalho para mostrar a resposta correta";
var simple_word_filter$9 = "Filtro de palavras simples";
var simple_word_filter_desc$9 = "Quando ativado, palavras simples serão excluídas da prática; palavras simples não serão contadas nas estatísticas de artigos";
var simple_word_list$9 = "Lista de palavras simples";
var words_comma_separated$9 = "Múltiplas palavras separadas por vírgulas";
var sound_effect$9 = "Efeitos sonoros";
var pronunciation_accent$9 = "Sotaque de pronúncia";
var pronunciation_accent_desc$9 = "Afeta apenas a pronúncia de palavras; artigos usam sotaque americano";
var please_select$9 = "Por favor selecione";
var us_accent$9 = "Americano";
var uk_accent$9 = "Britânico";
var keyboard_sound$9 = "Som de tecla";
var keyboard_sound_effect$9 = "Efeito sonoro de tecla";
var volume$9 = "Volume";
var show_prev_next_word$9 = "Mostrar palavra anterior/próxima";
var show_prev_next_word_desc$9 = "Quando ativado, as palavras anterior e próxima serão mostradas acima durante a prática";
var disable_practice_setting_dialog$9 = "Não mostrar diálogo de configurações de prática por padrão";
var disable_practice_setting_dialog_desc$9 = "Na página de detalhes do dicionário, se deve mostrar o diálogo de configurações de prática após clicar no botão aprender";
var clear_input_on_error$9 = "Limpar entrada em caso de erro";
var word_repeat_setting$9 = "Configurações de repetição de palavras";
var repeat_count$9 = "Número de repetições";
var review_ratio$9 = "Taxa de revisão";
var review_ratio_desc$9 = "Proporção de palavras de revisão para novas palavras. As alterações entram em vigor na próxima sessão";
var word_auto_pronunciation$9 = "Pronúncia automática";
var speed$9 = "Velocidade";
var effect_sound$9 = "Som de efeito (sons de erro e conclusão)";
var auto_switch$9 = "Troca automática";
var auto_next_word$9 = "Próxima palavra automática";
var auto_next_word_desc$9 = "Funciona apenas no modo seguir. Os modos de ditado, autoteste e soletração requerem pressionar espaço para continuar";
var auto_next_word_time$9 = "Tempo de próxima palavra automática";
var auto_next_word_time_desc$9 = "Tempo para mudar automaticamente para a próxima palavra após digitar corretamente";
var milliseconds$9 = "ms";
var font_setting$9 = "Configurações de fonte";
var foreign_font$9 = "Fonte de idioma estrangeiro";
var chinese_font$9 = "Fonte chinesa";
var auto_play_sentence$9 = "Reproduzir frase automaticamente";
var ignore_symbols_numbers_names$9 = "Ignorar símbolos, números e nomes ao digitar";
var settings$9 = "Configurações";
var please_select_dict$9 = "Por favor selecione um dicionário primeiro";
var learning_settings$9 = "Configurações de aprendizado";
var total$9 = "Total";
var estimated$9 = "Estimado";
var days_to_complete$9 = "dias para completar";
var from_word$9 = "Começando da palavra";
var start_daily$9 = ", diariamente";
var new_words$9 = "palavras novas";
var review_ratio_tooltip$9 = "Proporção de palavras de revisão para palavras novas";
var review_ratio_notice_1$9 = "Quando o aprendizado não está completo, a contagem de revisão é gerada de acordo com a proporção definida. Se 0, sem revisão";
var review_ratio_notice_2$9 = "Após completar o aprendizado, a contagem de palavras novas é fixada em 0, a contagem de revisão é gerada de acordo com a proporção (se < 1, calculada como 1)";
var daily_learning$9 = "Aprendizado diário";
var learning_progress$9 = "Progresso de aprendizado";
var select_from_dict$9 = "Selecionar posição inicial do dicionário";
var change_in_settings$9 = "Pode ser alterado na página de configurações";
var keep_default_no_show$9 = "Manter padrão, não mostrar novamente";
var review_complete$9 = "Revisão completa";
var today_task_complete$9 = "Tarefa de hoje completa";
var study_duration$9 = "Duração do estudo";
var accuracy_rate$9 = "Precisão";
var weekly_study_record$9 = "Registro de estudo semanal";
var studied$9 = "Estudado";
var total_words$9 = "Total de palavras";
var restart_learning$9 = "Reiniciar aprendizado";
var another_round$9 = "Outra rodada";
var return_home$9 = "Voltar ao início";
var import_tutorial$9 = "Tutorial de importação";
var import_follow_template$9 = "Por favor preencha os dados de acordo com o formato do modelo";
var import_word_required$9 = "O campo de palavra é obrigatório, outros campos são opcionais";
var import_translation_hint$9 = "Tradução: uma tradução por linha, classe gramatical primeiro, depois conteúdo (ex. n.cancel); múltiplas traduções em linhas separadas";
var import_example_hint$9 = "Exemplo: uma linha para original, uma linha para tradução; múltiplos exemplos em linhas separadas";
var import_phrase_hint$9 = "Frase: uma linha para original, uma linha para tradução; múltiplas frases em linhas separadas";
var two$9 = "duas";
var lines$9 = "linhas";
var import_other_hint$9 = "Sinônimos, palavras raiz, etimologia: vá ao dicionário oficial, depois edite uma palavra para ver o formato";
var template_download$9 = "Download do modelo";
var word_import_template$9 = "Modelo de importação de palavras";
var conflict_notice_title$9 = "Se você encontrar os seguintes problemas durante o uso:";
var keyboard_no_response$9 = "Teclado não responde";
var check_plugins_installed$9 = "Por favor verifique se você instalou";
var conflict_plugin_names$9 = "\"Controlador de velocidade de vídeo\" \"Vim\" \"Aprimorador de áudio/vídeo\" \"Assistente de cursos online\"";
var plugins_intercept_keyboard$9 = "e outros plugins/scripts que interceptam eventos de teclado,";
var cause_no_response$9 = "o que causa nenhuma resposta ao praticar neste site";
var follow_steps_to_resolve$9 = ", siga estas etapas para resolver o conflito:";
var try_incognito_mode$9 = "Abra este site no modo de navegação anônima do navegador e verifique se você pode digitar normalmente?";
var incognito_not_working$9 = "Não é possível digitar no modo anônimo,";
var click_here$9 = "clique aqui";
var feedback_or_wechat$9 = "para fornecer feedback, ou entre no grupo do WeChat:";
var incognito_working$9 = "Pode digitar no modo anônimo, então é um conflito de plugin/script";
var disable_plugin_or_exclude$9 = "Desative temporariamente o plugin/script correspondente, ou exclua este site nas configurações do plugin/script";
var install_extension_manager$9 = "Você pode instalar este";
var chrome_extension$9 = "extensão (versão Chrome, requer VPN)";
var edge_extension$9 = "extensão (versão Edge, sem necessidade de VPN)";
var to_manage_extensions$9 = "para ativar/desativar rapidamente outras extensões";
var delete_key_goes_back$9 = "Pressionar a tecla delete volta para a página anterior";
var browser_360_shortcut$9 = "No navegador 360, o atalho \"tecla delete retorna à página anterior\" está definido por padrão";
var change_browser_or_shortcut$9 = "Mude de navegador ou exclua o atalho padrão do 360: procure \"voltar\" nas configurações do navegador";
var please_enter_name$9 = "Por favor digite um nome";
var name_max_20_chars$9 = "O nome não pode exceder 20 caracteres";
var name_already_exists$9 = "O nome já existe!";
var add_success$9 = "Adicionado com sucesso";
var edit_success$9 = "Modificado com sucesso";
var edit_and_add_to_dict$9 = "Modificado com sucesso e adicionado ao meu dicionário";
var please_fill_complete$9 = "Por favor preencha completamente";
var name$9 = "Nome";
var description$9 = "Descrição";
var source_language$9 = "Idioma de origem";
var target_language$9 = "Idioma de destino";
var english$9 = "Inglês";
var german$9 = "Alemão";
var japanese$9 = "Japonês";
var code$9 = "Código";
var chinese$9 = "Chinês";
var multiple_choice$9 = "Múltipla escolha";
var start$9 = "Iniciar";
var countdown$9 = "Contagem regressiva";
var seconds$9 = "segundos";
var submit_exam$9 = "Enviar exame";
var exam_color_hint$9 = "Vermelho claro: incorreto, Vermelho escuro: não selecionado, Verde: correto";
var items_per_page$9 = "itens/página";
var jump_to$9 = "Ir para";
var page_or_index$9 = "página/índice";
var please_fill_original$9 = "Por favor preencha o texto original!";
var please_fill_title$9 = "Por favor preencha o título!";
var please_fill_content$9 = "Por favor preencha o conteúdo!";
var audio_added_success$9 = "Áudio adicionado com sucesso";
var lrc_parse_success$9 = "Arquivo LRC analisado com sucesso";
var original_text$9 = "Texto original";
var title$9 = "Título";
var please_fill_original_title$9 = "Por favor preencha o título original";
var content$9 = "Conteúdo";
var one_sentence_per_line$9 = "Uma frase por linha, deixe uma linha em branco entre parágrafos";
var name_config_tip$9 = "Após configurar os nomes, eles serão ignorados automaticamente durante a prática (opcional, habilitado por padrão)";
var name_config$9 = "Configuração de nomes";
var please_paste_original$9 = "Por favor cole o texto original";
var usage_guide$9 = "Guia de uso";
var copy_and_split$9 = "Copie o texto original, depois divida em frases";
var click$9 = "Clique";
var split_sentence$9 = "Dividir frase";
var auto_split$9 = "botão para dividir automaticamente";
var or$9 = "ou";
var manual_split$9 = "editar manualmente para dividir";
var split_rule$9 = "Regra de divisão: uma frase por linha, linha em branco entre parágrafos";
var after_edit_click$9 = "Após editar, clique";
var sync_to_result$9 = "botão para sincronizar com o painel de resultados à esquerda";
var please_fill_translation_title$9 = "Por favor preencha o título da tradução";
var please_fill_translation$9 = "Por favor preencha a tradução";
var translate$9 = "Tradução";
var copy_translation_or_click$9 = "Cole a tradução, ou clique se não houver";
var result$9 = "Resultado";
var editable_auto_sync$9 = "Tudo editável, clique no botão aplicar para sincronizar automaticamente após editar";
var audio$9 = "Áudio";
var audio_management$9 = "Gerenciamento de áudio";
var paragraph$9 = "Parágrafo";
var set_start_time$9 = "Definir hora de início";
var use_prev_end_time$9 = "Usar hora de fim da frase anterior";
var minus_03s$9 = "Menos 0.3s";
var end$9 = "Fim";
var set_end_time$9 = "Definir hora de fim";
var edit_audio_align$9 = "Editar alinhamento de áudio";
var play$9 = "Reproduzir";
var status$9 = "Estado";
var sentences_not_translated$9 = "{count} frases não traduzidas!";
var translation_complete$9 = "Tradução completa!";
var save_and_next$9 = "Salvar e adicionar próximo";
var no_translation_comparison$9 = "Nenhuma comparação de tradução disponível";
var adjust_audio_timeline$9 = "Ajustar linha do tempo de áudio";
var audio_timeline_tutorial$9 = "Tutorial: Clique em reproduzir, quando o áudio chegar ao início da frase, clique em gravar hora de início; quando chegar ao fim, clique em gravar hora de fim";
var start_time$9 = "Hora de início";
var jump_to_seconds$9 = "Ir para {seconds}s";
var use_prev_end_seconds$9 = "Usar hora de fim da frase anterior: {seconds}s";
var decrease_03s$9 = "Diminuir 0.3s";
var increase_03s$9 = "Aumentar 0.3s";
var record$9 = "Gravar";
var end_time$9 = "Hora de fim";
var audio_upload_notice$9 = "1. Arquivos enviados são salvos localmente, os dados serão perdidos ao trocar de computador, por favor faça backup a tempo\n2. Suporta mp3, wav, m4a e outros formatos de áudio comuns";
var upload_audio$9 = "Enviar áudio";
var upload_lrc$9 = "Enviar arquivo LRC";
var name_management$9 = "Gerenciamento de nomes";
var name_ignore_config_desc$9 = "Configure os nomes a ignorar, esses nomes serão pulados automaticamente durante a prática (opcional, habilitado por padrão)";
var add_name$9 = "Adicionar nome";
var enter_name$9 = "Digite o nome";
var collect_word$9 = "Coletar palavra";
var copy$9 = "Copiar";
var copy_sentence$9 = "Copiar frase";
var copied$9 = "Copiado";
var copy_word$9 = "Copiar palavra";
var start_from_here$9 = "Começar daqui";
var play_sentence$9 = "Reproduzir frase";
var grammar_analysis$9 = "Análise gramatical";
var copied_open_grammar$9 = "Copiado! Abrindo site de análise gramatical!";
var youdao_translate$9 = "Dicionário Youdao";
var translate_word$9 = "Traduzir palavra";
var translate_sentence$9 = "Traduzir frase";
var restart_practice$9 = "Reiniciar prática";
var next_article$9 = "Próximo artigo";
var learning_record$9 = "Registro de aprendizado";
var total_learning_time$9 = "Tempo total de aprendizado";
var current$9 = "Atual";
var show_questions$9 = "Mostrar perguntas";
var explanation$9 = "Explicação";
var encouragement_95$9 = "Excelente! Continue assim!";
var encouragement_85$9 = "Ótimo trabalho, continue assim!";
var encouragement_70$9 = "Boa pontuação, continue!";
var encouragement_default$9 = "Cada prática é progresso, continue!";
var daily_task_complete$9 = "Tarefa diária completa";
var weekly_record$9 = "Registro de estudo semanal";
var study_progress$9 = "Progresso de estudo";
var relearn$9 = "Reaprender";
var start_from_beginning$9 = "Começar do início";
var another_group$9 = "Outro grupo";
var back_to_home$9 = "Voltar ao início";
var know_word_tip$9 = "Se você selecionou \"Eu conheço\" por engano, pressione a tecla delete para reselecionar!";
var press_delete_reinput$9 = "Pressione a tecla delete para redigitar";
var press_space_continue$9 = "Pressione espaço para continuar";
var shortcut$9 = "Atalho";
var i_know$9 = "Eu conheço";
var i_dont_know$9 = "Não conheço";
var phrases$9 = "Frases";
var synonyms$9 = "Sinônimos";
var word_root$9 = "Raiz da palavra";
var review_wrong_words$9 = "Revisar palavras erradas";
var collapse$9 = "Recolher";
var expand$9 = "Expandir";
var minutes$9 = "minutos";
var time$9 = "Tempo";
var errors$9 = "Erros";
var skip_to_next_stage$9 = "Pular para a próxima etapa";
var skip_word$9 = "Pular palavra";
var toggle_dictation_mode$9 = "Alternar modo de ditado";
var send_failed$9 = "Falha no envio";
var send_code_failed$9 = "Falha ao enviar código de verificação";
var sending$9 = "Enviando";
var send_code$9 = "Enviar código";
var agree_terms_notice$9 = "Ao continuar, você concorda com nossos";
var user_agreement$9 = "Contrato de usuário";
var and$9 = "e";
var privacy_policy$9 = "Política de privacidade";
var important_notice$9 = "Aviso importante";
var dont_remind$9 = "Não lembrar novamente";
var function_desc$9 = "Recursos";
var qa1_a$9 = "O site é gratuito?";
var qa1_q1$9 = "Não completamente gratuito. Para o desenvolvimento a longo prazo, cobranças futuras são inevitáveis, mas não será necessário pagar para usar. Tentamos encontrar um equilíbrio entre gratuito e pago.";
var qa1_q2$9 = "O projeto é de código aberto, você pode implantá-lo você mesmo.";
var qa2_a$9 = "Não consegue digitar, teclado não responde?";
var qa3_a$9 = "Onde estão os dados? Como usar em vários computadores/dispositivos?";
var qa3_q1$9 = "Todos os dados do usuário são salvos no navegador local. Se você precisar usar o Type Words em diferentes dispositivos ou navegadores, precisará exportar e importar dados manualmente.";
var qa3_q2$9 = "Configurações -> Configurações de dados -> Exportar dados no computador original -> Enviar para o novo computador via software social -> Importar no novo computador";
var qa3_q3$9 = "O sistema de contas está em desenvolvimento.";
var qa4_a$9 = "O site planeja muitas palavras automaticamente, como modificar?";
var qa4_q1$9 = "A proporção padrão de palavras de revisão para novas palavras é 1:4.";
var qa4_q2$9 = "Você pode modificar em Configurações -> Configurações de palavras -> Taxa de revisão";
var qa5_a$9 = "Demora muito para completar uma sessão de aprendizado, o processo é muito longo?";
var qa5_q1$9 = "Este é de fato um problema. Um processo longo pode fazer as pessoas perderem a motivação.";
var qa5_q2$9 = "Palavras erradas serão repetidas. Se foi apenas um erro de digitação, você pode pressionar Tab para pular.";
var qa5_q3$9 = "Durante a revisão, apenas palavras marcadas como \"não conheço\" requerem ditado.";
var qa5_q4$9 = "Após o lançamento do sistema de contas, o recurso de curva de memória de Ebbinghaus será adicionado.";
var qa6_a$9 = "O recurso de curva de memória de Ebbinghaus será adicionado?";
var qa7_a$9 = "Posso adicionar palavras/dicionários personalizados/importar minhas próprias palavras?";
var qa7_q1$9 = "Sim, na página de Palavras, clique em \"Criar dicionário pessoal\"";
var qa7_q2$9 = "Após a criação, clique no ícone \"Adicionar palavra\" para adicionar suas próprias palavras";
var qa7_q3$9 = "Você também pode clicar no ícone \"Importar\" para importar em lote";
var qa8_a$9 = "Posso adicionar artigos/livros personalizados/importar meus próprios artigos?";
var qa8_q1$9 = "Sim, os passos são basicamente os mesmos que adicionar palavras";
var qa8_q2$9 = "Na página de Artigos, clique em \"Criar livro pessoal\"";
var qa8_q3$9 = "Após a criação, clique no botão \"Gerenciamento de artigos\" no topo";
var qa9_a$9 = "Como desativar os sons das teclas?";
var qa9_q$9 = "Configurações -> Configurações gerais -> Efeitos sonoros -> Som das teclas, desative-o";
var qa10_a$9 = "Posso usar em um tablet?";
var qa10_q1$9 = "Tablets podem ser usados, mas usar um teclado Bluetooth proporciona uma melhor experiência.";
var qa10_q2$9 = "Após conectar um teclado Bluetooth, tablets Android precisam habilitar manualmente o \"Modo Desktop\".";
var qa11_a$9 = "Posso usar no celular?";
var qa11_q$9 = "Celulares podem ser usados, mas a otimização para celulares ainda não foi feita. É recomendado usar em um computador ou tablet.";
var qa12_a$9 = "Existe um APP ou mini-programa?";
var qa12_q$9 = "Não, apenas o site";
var qa13_a$9 = "Como fornecer feedback à equipe de desenvolvimento?";
var qa13_q1$9 = "Você pode se juntar ao nosso grupo oficial do WeChat, descrever em detalhes os recursos que deseja";
var qa13_q2$9 = "Se você encontrar bugs no aplicativo, forneça uma descrição detalhada e os passos para reproduzir";
var qa13_q3$9 = "Você também pode enviar um ticket de suporte para nós";
var qa13_q4$9 = "Você também pode enviar em github/issues";
const pt = {
	app_desc: app_desc$9,
	app_name: app_name$9,
	start_word_practice: start_word_practice$9,
	start_article_practice: start_article_practice$9,
	home_word_practice: home_word_practice$9,
	home_word_practice_desc1: home_word_practice_desc1$9,
	home_word_practice_desc2: home_word_practice_desc2$9,
	home_word_practice_desc3: home_word_practice_desc3$9,
	home_article_practice: home_article_practice$9,
	home_article_practice_desc1: home_article_practice_desc1$9,
	home_article_practice_desc2: home_article_practice_desc2$9,
	home_article_practice_desc3: home_article_practice_desc3$9,
	home_collection: home_collection$9,
	home_collection_desc1: home_collection_desc1$9,
	home_collection_desc2: home_collection_desc2$9,
	home_collection_desc3: home_collection_desc3$9,
	home_vocabulary: home_vocabulary$9,
	home_vocabulary_desc: home_vocabulary_desc$9,
	home_free_opensource: home_free_opensource$9,
	home_free_opensource_desc1: home_free_opensource_desc1$9,
	home_free_opensource_desc2: home_free_opensource_desc2$9,
	home_free_opensource_desc3: home_free_opensource_desc3$9,
	home_customization: home_customization$9,
	home_customization_desc1: home_customization_desc1$9,
	home_customization_desc2: home_customization_desc2$9,
	home_customization_desc3: home_customization_desc3$9,
	home_design: home_design$9,
	home_design_desc1: home_design_desc1$9,
	home_design_desc2: home_design_desc2$9,
	home_design_desc3: home_design_desc3$9,
	home_personalized: home_personalized$9,
	home_personalized_desc1: home_personalized_desc1$9,
	home_personalized_desc2: home_personalized_desc2$9,
	home_personalized_desc3: home_personalized_desc3$9,
	cn_limit_no1: cn_limit_no1$9,
	cn_limit_no2: cn_limit_no2$9,
	setting: setting$9,
	edit: edit$9,
	"delete": "Excluir",
	cancel: cancel$9,
	confirm: confirm$9,
	save: save$9,
	close: close$9,
	search: search$9,
	more: more$9,
	loading: loading$9,
	introduction: introduction$9,
	learn: learn$9,
	practice: practice$9,
	test: test$9,
	feedback: feedback$9,
	document: document$9,
	help: help$9,
	about: about$9,
	login: login$9,
	register: register$9,
	register_account: register_account$9,
	register_new_account: register_new_account$9,
	code_login: code_login$9,
	password_login: password_login$9,
	phone_placeholder: phone_placeholder$9,
	code_placeholder: code_placeholder$9,
	account_placeholder: account_placeholder$9,
	password_placeholder: password_placeholder$9,
	auto_register_notice: auto_register_notice$9,
	forgot_password: forgot_password$9,
	reset_password: reset_password$9,
	set_password_placeholder: set_password_placeholder$9,
	confirm_password_placeholder: confirm_password_placeholder$9,
	new_password_placeholder: new_password_placeholder$9,
	confirm_new_password: confirm_new_password$9,
	wechat_scan_login: wechat_scan_login$9,
	scan_success: scan_success$9,
	tap_allow_in_wechat: tap_allow_in_wechat$9,
	login_cancelled: login_cancelled$9,
	login_again: login_again$9,
	sync_data: sync_data$9,
	local_data_detected: local_data_detected$9,
	sync_to_account_question: sync_to_account_question$9,
	no_sync: no_sync$9,
	sync: sync$9,
	syncing: syncing$9,
	sync_failed: sync_failed$9,
	sync_success: sync_success$9,
	enter_website: enter_website$9,
	general_settings: general_settings$9,
	word_settings: word_settings$9,
	article_settings: article_settings$9,
	data_management: data_management$9,
	shortcut_settings: shortcut_settings$9,
	update_log: update_log$9,
	"function": "Função",
	shortcut_key: shortcut_key$9,
	no_shortcut_set: no_shortcut_set$9,
	press_key_to_set: press_key_to_set$9,
	click_here_when_done: click_here_when_done$9,
	restore_default: restore_default$9,
	data_saved_locally: data_saved_locally$9,
	export_data_backup: export_data_backup$9,
	import_data_restore: import_data_restore$9,
	import_warning: import_warning$9,
	words: words$9,
	no_dict_selected: no_dict_selected$9,
	select_dict_to_start: select_dict_to_start$9,
	select_dict: select_dict$9,
	change_progress: change_progress$9,
	estimated_completion: estimated_completion$9,
	current_progress: current_progress$9,
	learned: learned$9,
	completed_review_stage: completed_review_stage$9,
	today_task: today_task$9,
	last_task: last_task$9,
	word_list: word_list$9,
	daily_goal: daily_goal$9,
	words_count: words_count$9,
	change: change$9,
	new_words_count: new_words_count$9,
	review_last: review_last$9,
	review_previous: review_previous$9,
	start_learning: start_learning$9,
	continue_learning: continue_learning$9,
	free_practice: free_practice$9,
	continue_free_practice: continue_free_practice$9,
	smart_learning: smart_learning$9,
	review: review$9,
	random_review: random_review$9,
	my_dictionaries: my_dictionaries$9,
	manage_dict: manage_dict$9,
	create_personal_dict: create_personal_dict$9,
	recommend: recommend$9,
	articles: articles$9,
	this_week_record: this_week_record$9,
	change_book: change_book$9,
	today_study_time: today_study_time$9,
	total_study_days: total_study_days$9,
	total_study_time: total_study_time$9,
	my_books: my_books$9,
	manage_books: manage_books$9,
	create_personal_book: create_personal_book$9,
	article_management: article_management$9,
	toggle_translation: toggle_translation$9,
	switch_display_mode: switch_display_mode$9,
	line_by_line: line_by_line$9,
	single_line: single_line$9,
	comparison: comparison$9,
	question: question$9,
	study_record: study_record$9,
	play_next_after_end: play_next_after_end$9,
	create_book: create_book$9,
	edit_book: edit_book$9,
	dict_list: dict_list$9,
	book_list: book_list$9,
	word: word$9,
	phonetic: phonetic$9,
	translation: translation$9,
	example_sentence: example_sentence$9,
	phrase: phrase$9,
	synonym: synonym$9,
	related_words: related_words$9,
	etymology: etymology$9,
	add_word: add_word$9,
	edit_word: edit_word$9,
	create_dict: create_dict$9,
	edit_dict: edit_dict$9,
	"import": "Importar",
	"export": "Exportar",
	faq: faq$9,
	is_free: is_free$9,
	cannot_type: cannot_type$9,
	where_is_data: where_is_data$9,
	resource_sharing: resource_sharing$9,
	all_resources: all_resources$9,
	new_concept_english: new_concept_english$9,
	tv_movie: tv_movie$9,
	grammar_learning: grammar_learning$9,
	listening_training: listening_training$9,
	warm_tips: warm_tips$9,
	resources_from_internet: resources_from_internet$9,
	toggle_theme: toggle_theme$9,
	english_document: english_document$9,
	empty_placeholder: empty_placeholder$9,
	custom: custom$9,
	back: back$9,
	total_items: total_items$9,
	batch_delete: batch_delete$9,
	confirm_delete_selected: confirm_delete_selected$9,
	change_order: change_order$9,
	list_order_setting: list_order_setting$9,
	reverse_current_page: reverse_current_page$9,
	reverse_all: reverse_all$9,
	random_current_page: random_current_page$9,
	random_all: random_all$9,
	apply: apply$9,
	add: add$9,
	collect: collect$9,
	uncollect: uncollect$9,
	mark_mastered: mark_mastered$9,
	unmark_mastered: unmark_mastered$9,
	about_thanks: about_thanks$9,
	github_address: github_address$9,
	about_wechat_feedback: about_wechat_feedback$9,
	about_ticket_feedback: about_ticket_feedback$9,
	about_other_channels: about_other_channels$9,
	wait_translation: wait_translation$9,
	migrate_data: migrate_data$9,
	migrate_new_domain: migrate_new_domain$9,
	migrate_old_domain_notice: migrate_old_domain_notice$9,
	migrate_later_notice: migrate_later_notice$9,
	author: author$9,
	features: features$9,
	suitable_for: suitable_for$9,
	open_link: open_link$9,
	qq_group: qq_group$9,
	xiaohongshu: xiaohongshu$9,
	follow_x_account: follow_x_account$9,
	twitter: twitter$9,
	send_email: send_email$9,
	email: email$9,
	xiaohongshu_desc: xiaohongshu_desc$9,
	xiaohongshu_qrcode: xiaohongshu_qrcode$9,
	community_desc: community_desc$9,
	qq_qrcode: qq_qrcode$9,
	wechat_group: wechat_group$9,
	wechat_qrcode: wechat_qrcode$9,
	github_project: github_project$9,
	ie_not_supported: ie_not_supported$9,
	ie_use_modern_browser: ie_use_modern_browser$9,
	download_chrome: download_chrome$9,
	i_understand: i_understand$9,
	ignore_case: ignore_case$9,
	ignore_case_desc: ignore_case_desc$9,
	allow_dictation_tip: allow_dictation_tip$9,
	allow_dictation_tip_desc: allow_dictation_tip_desc$9,
	simple_word_filter: simple_word_filter$9,
	simple_word_filter_desc: simple_word_filter_desc$9,
	simple_word_list: simple_word_list$9,
	words_comma_separated: words_comma_separated$9,
	sound_effect: sound_effect$9,
	pronunciation_accent: pronunciation_accent$9,
	pronunciation_accent_desc: pronunciation_accent_desc$9,
	please_select: please_select$9,
	us_accent: us_accent$9,
	uk_accent: uk_accent$9,
	keyboard_sound: keyboard_sound$9,
	keyboard_sound_effect: keyboard_sound_effect$9,
	volume: volume$9,
	show_prev_next_word: show_prev_next_word$9,
	show_prev_next_word_desc: show_prev_next_word_desc$9,
	disable_practice_setting_dialog: disable_practice_setting_dialog$9,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$9,
	clear_input_on_error: clear_input_on_error$9,
	word_repeat_setting: word_repeat_setting$9,
	repeat_count: repeat_count$9,
	review_ratio: review_ratio$9,
	review_ratio_desc: review_ratio_desc$9,
	word_auto_pronunciation: word_auto_pronunciation$9,
	speed: speed$9,
	effect_sound: effect_sound$9,
	auto_switch: auto_switch$9,
	auto_next_word: auto_next_word$9,
	auto_next_word_desc: auto_next_word_desc$9,
	auto_next_word_time: auto_next_word_time$9,
	auto_next_word_time_desc: auto_next_word_time_desc$9,
	milliseconds: milliseconds$9,
	font_setting: font_setting$9,
	foreign_font: foreign_font$9,
	chinese_font: chinese_font$9,
	auto_play_sentence: auto_play_sentence$9,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$9,
	settings: settings$9,
	please_select_dict: please_select_dict$9,
	learning_settings: learning_settings$9,
	total: total$9,
	estimated: estimated$9,
	days_to_complete: days_to_complete$9,
	from_word: from_word$9,
	start_daily: start_daily$9,
	new_words: new_words$9,
	review_ratio_tooltip: review_ratio_tooltip$9,
	review_ratio_notice_1: review_ratio_notice_1$9,
	review_ratio_notice_2: review_ratio_notice_2$9,
	daily_learning: daily_learning$9,
	learning_progress: learning_progress$9,
	select_from_dict: select_from_dict$9,
	change_in_settings: change_in_settings$9,
	keep_default_no_show: keep_default_no_show$9,
	review_complete: review_complete$9,
	today_task_complete: today_task_complete$9,
	study_duration: study_duration$9,
	accuracy_rate: accuracy_rate$9,
	weekly_study_record: weekly_study_record$9,
	studied: studied$9,
	total_words: total_words$9,
	restart_learning: restart_learning$9,
	another_round: another_round$9,
	return_home: return_home$9,
	import_tutorial: import_tutorial$9,
	import_follow_template: import_follow_template$9,
	import_word_required: import_word_required$9,
	import_translation_hint: import_translation_hint$9,
	import_example_hint: import_example_hint$9,
	import_phrase_hint: import_phrase_hint$9,
	two: two$9,
	lines: lines$9,
	import_other_hint: import_other_hint$9,
	template_download: template_download$9,
	word_import_template: word_import_template$9,
	conflict_notice_title: conflict_notice_title$9,
	keyboard_no_response: keyboard_no_response$9,
	check_plugins_installed: check_plugins_installed$9,
	conflict_plugin_names: conflict_plugin_names$9,
	plugins_intercept_keyboard: plugins_intercept_keyboard$9,
	cause_no_response: cause_no_response$9,
	follow_steps_to_resolve: follow_steps_to_resolve$9,
	try_incognito_mode: try_incognito_mode$9,
	incognito_not_working: incognito_not_working$9,
	click_here: click_here$9,
	feedback_or_wechat: feedback_or_wechat$9,
	incognito_working: incognito_working$9,
	disable_plugin_or_exclude: disable_plugin_or_exclude$9,
	install_extension_manager: install_extension_manager$9,
	chrome_extension: chrome_extension$9,
	edge_extension: edge_extension$9,
	to_manage_extensions: to_manage_extensions$9,
	delete_key_goes_back: delete_key_goes_back$9,
	browser_360_shortcut: browser_360_shortcut$9,
	change_browser_or_shortcut: change_browser_or_shortcut$9,
	please_enter_name: please_enter_name$9,
	name_max_20_chars: name_max_20_chars$9,
	name_already_exists: name_already_exists$9,
	add_success: add_success$9,
	edit_success: edit_success$9,
	edit_and_add_to_dict: edit_and_add_to_dict$9,
	please_fill_complete: please_fill_complete$9,
	name: name$9,
	description: description$9,
	source_language: source_language$9,
	target_language: target_language$9,
	english: english$9,
	german: german$9,
	japanese: japanese$9,
	code: code$9,
	chinese: chinese$9,
	multiple_choice: multiple_choice$9,
	start: start$9,
	countdown: countdown$9,
	seconds: seconds$9,
	submit_exam: submit_exam$9,
	exam_color_hint: exam_color_hint$9,
	items_per_page: items_per_page$9,
	jump_to: jump_to$9,
	page_or_index: page_or_index$9,
	please_fill_original: please_fill_original$9,
	please_fill_title: please_fill_title$9,
	please_fill_content: please_fill_content$9,
	audio_added_success: audio_added_success$9,
	lrc_parse_success: lrc_parse_success$9,
	original_text: original_text$9,
	title: title$9,
	please_fill_original_title: please_fill_original_title$9,
	content: content$9,
	one_sentence_per_line: one_sentence_per_line$9,
	name_config_tip: name_config_tip$9,
	name_config: name_config$9,
	please_paste_original: please_paste_original$9,
	usage_guide: usage_guide$9,
	copy_and_split: copy_and_split$9,
	click: click$9,
	split_sentence: split_sentence$9,
	auto_split: auto_split$9,
	or: or$9,
	manual_split: manual_split$9,
	split_rule: split_rule$9,
	after_edit_click: after_edit_click$9,
	sync_to_result: sync_to_result$9,
	please_fill_translation_title: please_fill_translation_title$9,
	please_fill_translation: please_fill_translation$9,
	translate: translate$9,
	copy_translation_or_click: copy_translation_or_click$9,
	result: result$9,
	editable_auto_sync: editable_auto_sync$9,
	audio: audio$9,
	audio_management: audio_management$9,
	paragraph: paragraph$9,
	set_start_time: set_start_time$9,
	use_prev_end_time: use_prev_end_time$9,
	minus_03s: minus_03s$9,
	end: end$9,
	set_end_time: set_end_time$9,
	edit_audio_align: edit_audio_align$9,
	play: play$9,
	status: status$9,
	sentences_not_translated: sentences_not_translated$9,
	translation_complete: translation_complete$9,
	save_and_next: save_and_next$9,
	no_translation_comparison: no_translation_comparison$9,
	adjust_audio_timeline: adjust_audio_timeline$9,
	audio_timeline_tutorial: audio_timeline_tutorial$9,
	start_time: start_time$9,
	jump_to_seconds: jump_to_seconds$9,
	use_prev_end_seconds: use_prev_end_seconds$9,
	decrease_03s: decrease_03s$9,
	increase_03s: increase_03s$9,
	record: record$9,
	end_time: end_time$9,
	audio_upload_notice: audio_upload_notice$9,
	upload_audio: upload_audio$9,
	upload_lrc: upload_lrc$9,
	name_management: name_management$9,
	name_ignore_config_desc: name_ignore_config_desc$9,
	add_name: add_name$9,
	enter_name: enter_name$9,
	collect_word: collect_word$9,
	copy: copy$9,
	copy_sentence: copy_sentence$9,
	copied: copied$9,
	copy_word: copy_word$9,
	start_from_here: start_from_here$9,
	play_sentence: play_sentence$9,
	grammar_analysis: grammar_analysis$9,
	copied_open_grammar: copied_open_grammar$9,
	youdao_translate: youdao_translate$9,
	translate_word: translate_word$9,
	translate_sentence: translate_sentence$9,
	restart_practice: restart_practice$9,
	next_article: next_article$9,
	learning_record: learning_record$9,
	total_learning_time: total_learning_time$9,
	current: current$9,
	show_questions: show_questions$9,
	explanation: explanation$9,
	encouragement_95: encouragement_95$9,
	encouragement_85: encouragement_85$9,
	encouragement_70: encouragement_70$9,
	encouragement_default: encouragement_default$9,
	daily_task_complete: daily_task_complete$9,
	weekly_record: weekly_record$9,
	study_progress: study_progress$9,
	relearn: relearn$9,
	start_from_beginning: start_from_beginning$9,
	another_group: another_group$9,
	back_to_home: back_to_home$9,
	know_word_tip: know_word_tip$9,
	press_delete_reinput: press_delete_reinput$9,
	press_space_continue: press_space_continue$9,
	shortcut: shortcut$9,
	i_know: i_know$9,
	i_dont_know: i_dont_know$9,
	phrases: phrases$9,
	synonyms: synonyms$9,
	word_root: word_root$9,
	review_wrong_words: review_wrong_words$9,
	collapse: collapse$9,
	expand: expand$9,
	minutes: minutes$9,
	time: time$9,
	errors: errors$9,
	skip_to_next_stage: skip_to_next_stage$9,
	skip_word: skip_word$9,
	toggle_dictation_mode: toggle_dictation_mode$9,
	send_failed: send_failed$9,
	send_code_failed: send_code_failed$9,
	sending: sending$9,
	send_code: send_code$9,
	agree_terms_notice: agree_terms_notice$9,
	user_agreement: user_agreement$9,
	and: and$9,
	privacy_policy: privacy_policy$9,
	important_notice: important_notice$9,
	dont_remind: dont_remind$9,
	function_desc: function_desc$9,
	qa1_a: qa1_a$9,
	qa1_q1: qa1_q1$9,
	qa1_q2: qa1_q2$9,
	qa2_a: qa2_a$9,
	qa3_a: qa3_a$9,
	qa3_q1: qa3_q1$9,
	qa3_q2: qa3_q2$9,
	qa3_q3: qa3_q3$9,
	qa4_a: qa4_a$9,
	qa4_q1: qa4_q1$9,
	qa4_q2: qa4_q2$9,
	qa5_a: qa5_a$9,
	qa5_q1: qa5_q1$9,
	qa5_q2: qa5_q2$9,
	qa5_q3: qa5_q3$9,
	qa5_q4: qa5_q4$9,
	qa6_a: qa6_a$9,
	qa7_a: qa7_a$9,
	qa7_q1: qa7_q1$9,
	qa7_q2: qa7_q2$9,
	qa7_q3: qa7_q3$9,
	qa8_a: qa8_a$9,
	qa8_q1: qa8_q1$9,
	qa8_q2: qa8_q2$9,
	qa8_q3: qa8_q3$9,
	qa9_a: qa9_a$9,
	qa9_q: qa9_q$9,
	qa10_a: qa10_a$9,
	qa10_q1: qa10_q1$9,
	qa10_q2: qa10_q2$9,
	qa11_a: qa11_a$9,
	qa11_q: qa11_q$9,
	qa12_a: qa12_a$9,
	qa12_q: qa12_q$9,
	qa13_a: qa13_a$9,
	qa13_q1: qa13_q1$9,
	qa13_q2: qa13_q2$9,
	qa13_q3: qa13_q3$9,
	qa13_q4: qa13_q4$9
};

const pt$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$9,
  about_other_channels: about_other_channels$9,
  about_thanks: about_thanks$9,
  about_ticket_feedback: about_ticket_feedback$9,
  about_wechat_feedback: about_wechat_feedback$9,
  account_placeholder: account_placeholder$9,
  accuracy_rate: accuracy_rate$9,
  add: add$9,
  add_name: add_name$9,
  add_success: add_success$9,
  add_word: add_word$9,
  adjust_audio_timeline: adjust_audio_timeline$9,
  after_edit_click: after_edit_click$9,
  agree_terms_notice: agree_terms_notice$9,
  all_resources: all_resources$9,
  allow_dictation_tip: allow_dictation_tip$9,
  allow_dictation_tip_desc: allow_dictation_tip_desc$9,
  and: and$9,
  another_group: another_group$9,
  another_round: another_round$9,
  app_desc: app_desc$9,
  app_name: app_name$9,
  apply: apply$9,
  article_management: article_management$9,
  article_settings: article_settings$9,
  articles: articles$9,
  audio: audio$9,
  audio_added_success: audio_added_success$9,
  audio_management: audio_management$9,
  audio_timeline_tutorial: audio_timeline_tutorial$9,
  audio_upload_notice: audio_upload_notice$9,
  author: author$9,
  auto_next_word: auto_next_word$9,
  auto_next_word_desc: auto_next_word_desc$9,
  auto_next_word_time: auto_next_word_time$9,
  auto_next_word_time_desc: auto_next_word_time_desc$9,
  auto_play_sentence: auto_play_sentence$9,
  auto_register_notice: auto_register_notice$9,
  auto_split: auto_split$9,
  auto_switch: auto_switch$9,
  back: back$9,
  back_to_home: back_to_home$9,
  batch_delete: batch_delete$9,
  book_list: book_list$9,
  browser_360_shortcut: browser_360_shortcut$9,
  cancel: cancel$9,
  cannot_type: cannot_type$9,
  cause_no_response: cause_no_response$9,
  change: change$9,
  change_book: change_book$9,
  change_browser_or_shortcut: change_browser_or_shortcut$9,
  change_in_settings: change_in_settings$9,
  change_order: change_order$9,
  change_progress: change_progress$9,
  check_plugins_installed: check_plugins_installed$9,
  chinese: chinese$9,
  chinese_font: chinese_font$9,
  chrome_extension: chrome_extension$9,
  clear_input_on_error: clear_input_on_error$9,
  click: click$9,
  click_here: click_here$9,
  click_here_when_done: click_here_when_done$9,
  close: close$9,
  cn_limit_no1: cn_limit_no1$9,
  cn_limit_no2: cn_limit_no2$9,
  code: code$9,
  code_login: code_login$9,
  code_placeholder: code_placeholder$9,
  collapse: collapse$9,
  collect: collect$9,
  collect_word: collect_word$9,
  community_desc: community_desc$9,
  comparison: comparison$9,
  completed_review_stage: completed_review_stage$9,
  confirm: confirm$9,
  confirm_delete_selected: confirm_delete_selected$9,
  confirm_new_password: confirm_new_password$9,
  confirm_password_placeholder: confirm_password_placeholder$9,
  conflict_notice_title: conflict_notice_title$9,
  conflict_plugin_names: conflict_plugin_names$9,
  content: content$9,
  continue_free_practice: continue_free_practice$9,
  continue_learning: continue_learning$9,
  copied: copied$9,
  copied_open_grammar: copied_open_grammar$9,
  copy: copy$9,
  copy_and_split: copy_and_split$9,
  copy_sentence: copy_sentence$9,
  copy_translation_or_click: copy_translation_or_click$9,
  copy_word: copy_word$9,
  countdown: countdown$9,
  create_book: create_book$9,
  create_dict: create_dict$9,
  create_personal_book: create_personal_book$9,
  create_personal_dict: create_personal_dict$9,
  current: current$9,
  current_progress: current_progress$9,
  custom: custom$9,
  daily_goal: daily_goal$9,
  daily_learning: daily_learning$9,
  daily_task_complete: daily_task_complete$9,
  data_management: data_management$9,
  data_saved_locally: data_saved_locally$9,
  days_to_complete: days_to_complete$9,
  decrease_03s: decrease_03s$9,
  default: pt,
  delete_key_goes_back: delete_key_goes_back$9,
  description: description$9,
  dict_list: dict_list$9,
  disable_plugin_or_exclude: disable_plugin_or_exclude$9,
  disable_practice_setting_dialog: disable_practice_setting_dialog$9,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$9,
  document: document$9,
  dont_remind: dont_remind$9,
  download_chrome: download_chrome$9,
  edge_extension: edge_extension$9,
  edit: edit$9,
  edit_and_add_to_dict: edit_and_add_to_dict$9,
  edit_audio_align: edit_audio_align$9,
  edit_book: edit_book$9,
  edit_dict: edit_dict$9,
  edit_success: edit_success$9,
  edit_word: edit_word$9,
  editable_auto_sync: editable_auto_sync$9,
  effect_sound: effect_sound$9,
  email: email$9,
  empty_placeholder: empty_placeholder$9,
  encouragement_70: encouragement_70$9,
  encouragement_85: encouragement_85$9,
  encouragement_95: encouragement_95$9,
  encouragement_default: encouragement_default$9,
  end: end$9,
  end_time: end_time$9,
  english: english$9,
  english_document: english_document$9,
  enter_name: enter_name$9,
  enter_website: enter_website$9,
  errors: errors$9,
  estimated: estimated$9,
  estimated_completion: estimated_completion$9,
  etymology: etymology$9,
  exam_color_hint: exam_color_hint$9,
  example_sentence: example_sentence$9,
  expand: expand$9,
  explanation: explanation$9,
  export_data_backup: export_data_backup$9,
  faq: faq$9,
  features: features$9,
  feedback: feedback$9,
  feedback_or_wechat: feedback_or_wechat$9,
  follow_steps_to_resolve: follow_steps_to_resolve$9,
  follow_x_account: follow_x_account$9,
  font_setting: font_setting$9,
  foreign_font: foreign_font$9,
  forgot_password: forgot_password$9,
  free_practice: free_practice$9,
  from_word: from_word$9,
  function_desc: function_desc$9,
  general_settings: general_settings$9,
  german: german$9,
  github_address: github_address$9,
  github_project: github_project$9,
  grammar_analysis: grammar_analysis$9,
  grammar_learning: grammar_learning$9,
  help: help$9,
  home_article_practice: home_article_practice$9,
  home_article_practice_desc1: home_article_practice_desc1$9,
  home_article_practice_desc2: home_article_practice_desc2$9,
  home_article_practice_desc3: home_article_practice_desc3$9,
  home_collection: home_collection$9,
  home_collection_desc1: home_collection_desc1$9,
  home_collection_desc2: home_collection_desc2$9,
  home_collection_desc3: home_collection_desc3$9,
  home_customization: home_customization$9,
  home_customization_desc1: home_customization_desc1$9,
  home_customization_desc2: home_customization_desc2$9,
  home_customization_desc3: home_customization_desc3$9,
  home_design: home_design$9,
  home_design_desc1: home_design_desc1$9,
  home_design_desc2: home_design_desc2$9,
  home_design_desc3: home_design_desc3$9,
  home_free_opensource: home_free_opensource$9,
  home_free_opensource_desc1: home_free_opensource_desc1$9,
  home_free_opensource_desc2: home_free_opensource_desc2$9,
  home_free_opensource_desc3: home_free_opensource_desc3$9,
  home_personalized: home_personalized$9,
  home_personalized_desc1: home_personalized_desc1$9,
  home_personalized_desc2: home_personalized_desc2$9,
  home_personalized_desc3: home_personalized_desc3$9,
  home_vocabulary: home_vocabulary$9,
  home_vocabulary_desc: home_vocabulary_desc$9,
  home_word_practice: home_word_practice$9,
  home_word_practice_desc1: home_word_practice_desc1$9,
  home_word_practice_desc2: home_word_practice_desc2$9,
  home_word_practice_desc3: home_word_practice_desc3$9,
  i_dont_know: i_dont_know$9,
  i_know: i_know$9,
  i_understand: i_understand$9,
  ie_not_supported: ie_not_supported$9,
  ie_use_modern_browser: ie_use_modern_browser$9,
  ignore_case: ignore_case$9,
  ignore_case_desc: ignore_case_desc$9,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$9,
  import_data_restore: import_data_restore$9,
  import_example_hint: import_example_hint$9,
  import_follow_template: import_follow_template$9,
  import_other_hint: import_other_hint$9,
  import_phrase_hint: import_phrase_hint$9,
  import_translation_hint: import_translation_hint$9,
  import_tutorial: import_tutorial$9,
  import_warning: import_warning$9,
  import_word_required: import_word_required$9,
  important_notice: important_notice$9,
  incognito_not_working: incognito_not_working$9,
  incognito_working: incognito_working$9,
  increase_03s: increase_03s$9,
  install_extension_manager: install_extension_manager$9,
  introduction: introduction$9,
  is_free: is_free$9,
  items_per_page: items_per_page$9,
  japanese: japanese$9,
  jump_to: jump_to$9,
  jump_to_seconds: jump_to_seconds$9,
  keep_default_no_show: keep_default_no_show$9,
  keyboard_no_response: keyboard_no_response$9,
  keyboard_sound: keyboard_sound$9,
  keyboard_sound_effect: keyboard_sound_effect$9,
  know_word_tip: know_word_tip$9,
  last_task: last_task$9,
  learn: learn$9,
  learned: learned$9,
  learning_progress: learning_progress$9,
  learning_record: learning_record$9,
  learning_settings: learning_settings$9,
  line_by_line: line_by_line$9,
  lines: lines$9,
  list_order_setting: list_order_setting$9,
  listening_training: listening_training$9,
  loading: loading$9,
  local_data_detected: local_data_detected$9,
  login: login$9,
  login_again: login_again$9,
  login_cancelled: login_cancelled$9,
  lrc_parse_success: lrc_parse_success$9,
  manage_books: manage_books$9,
  manage_dict: manage_dict$9,
  manual_split: manual_split$9,
  mark_mastered: mark_mastered$9,
  migrate_data: migrate_data$9,
  migrate_later_notice: migrate_later_notice$9,
  migrate_new_domain: migrate_new_domain$9,
  migrate_old_domain_notice: migrate_old_domain_notice$9,
  milliseconds: milliseconds$9,
  minus_03s: minus_03s$9,
  minutes: minutes$9,
  more: more$9,
  multiple_choice: multiple_choice$9,
  my_books: my_books$9,
  my_dictionaries: my_dictionaries$9,
  name: name$9,
  name_already_exists: name_already_exists$9,
  name_config: name_config$9,
  name_config_tip: name_config_tip$9,
  name_ignore_config_desc: name_ignore_config_desc$9,
  name_management: name_management$9,
  name_max_20_chars: name_max_20_chars$9,
  new_concept_english: new_concept_english$9,
  new_password_placeholder: new_password_placeholder$9,
  new_words: new_words$9,
  new_words_count: new_words_count$9,
  next_article: next_article$9,
  no_dict_selected: no_dict_selected$9,
  no_shortcut_set: no_shortcut_set$9,
  no_sync: no_sync$9,
  no_translation_comparison: no_translation_comparison$9,
  one_sentence_per_line: one_sentence_per_line$9,
  open_link: open_link$9,
  or: or$9,
  original_text: original_text$9,
  page_or_index: page_or_index$9,
  paragraph: paragraph$9,
  password_login: password_login$9,
  password_placeholder: password_placeholder$9,
  phone_placeholder: phone_placeholder$9,
  phonetic: phonetic$9,
  phrase: phrase$9,
  phrases: phrases$9,
  play: play$9,
  play_next_after_end: play_next_after_end$9,
  play_sentence: play_sentence$9,
  please_enter_name: please_enter_name$9,
  please_fill_complete: please_fill_complete$9,
  please_fill_content: please_fill_content$9,
  please_fill_original: please_fill_original$9,
  please_fill_original_title: please_fill_original_title$9,
  please_fill_title: please_fill_title$9,
  please_fill_translation: please_fill_translation$9,
  please_fill_translation_title: please_fill_translation_title$9,
  please_paste_original: please_paste_original$9,
  please_select: please_select$9,
  please_select_dict: please_select_dict$9,
  plugins_intercept_keyboard: plugins_intercept_keyboard$9,
  practice: practice$9,
  press_delete_reinput: press_delete_reinput$9,
  press_key_to_set: press_key_to_set$9,
  press_space_continue: press_space_continue$9,
  privacy_policy: privacy_policy$9,
  pronunciation_accent: pronunciation_accent$9,
  pronunciation_accent_desc: pronunciation_accent_desc$9,
  qa10_a: qa10_a$9,
  qa10_q1: qa10_q1$9,
  qa10_q2: qa10_q2$9,
  qa11_a: qa11_a$9,
  qa11_q: qa11_q$9,
  qa12_a: qa12_a$9,
  qa12_q: qa12_q$9,
  qa13_a: qa13_a$9,
  qa13_q1: qa13_q1$9,
  qa13_q2: qa13_q2$9,
  qa13_q3: qa13_q3$9,
  qa13_q4: qa13_q4$9,
  qa1_a: qa1_a$9,
  qa1_q1: qa1_q1$9,
  qa1_q2: qa1_q2$9,
  qa2_a: qa2_a$9,
  qa3_a: qa3_a$9,
  qa3_q1: qa3_q1$9,
  qa3_q2: qa3_q2$9,
  qa3_q3: qa3_q3$9,
  qa4_a: qa4_a$9,
  qa4_q1: qa4_q1$9,
  qa4_q2: qa4_q2$9,
  qa5_a: qa5_a$9,
  qa5_q1: qa5_q1$9,
  qa5_q2: qa5_q2$9,
  qa5_q3: qa5_q3$9,
  qa5_q4: qa5_q4$9,
  qa6_a: qa6_a$9,
  qa7_a: qa7_a$9,
  qa7_q1: qa7_q1$9,
  qa7_q2: qa7_q2$9,
  qa7_q3: qa7_q3$9,
  qa8_a: qa8_a$9,
  qa8_q1: qa8_q1$9,
  qa8_q2: qa8_q2$9,
  qa8_q3: qa8_q3$9,
  qa9_a: qa9_a$9,
  qa9_q: qa9_q$9,
  qq_group: qq_group$9,
  qq_qrcode: qq_qrcode$9,
  question: question$9,
  random_all: random_all$9,
  random_current_page: random_current_page$9,
  random_review: random_review$9,
  recommend: recommend$9,
  record: record$9,
  register: register$9,
  register_account: register_account$9,
  register_new_account: register_new_account$9,
  related_words: related_words$9,
  relearn: relearn$9,
  repeat_count: repeat_count$9,
  reset_password: reset_password$9,
  resource_sharing: resource_sharing$9,
  resources_from_internet: resources_from_internet$9,
  restart_learning: restart_learning$9,
  restart_practice: restart_practice$9,
  restore_default: restore_default$9,
  result: result$9,
  return_home: return_home$9,
  reverse_all: reverse_all$9,
  reverse_current_page: reverse_current_page$9,
  review: review$9,
  review_complete: review_complete$9,
  review_last: review_last$9,
  review_previous: review_previous$9,
  review_ratio: review_ratio$9,
  review_ratio_desc: review_ratio_desc$9,
  review_ratio_notice_1: review_ratio_notice_1$9,
  review_ratio_notice_2: review_ratio_notice_2$9,
  review_ratio_tooltip: review_ratio_tooltip$9,
  review_wrong_words: review_wrong_words$9,
  save: save$9,
  save_and_next: save_and_next$9,
  scan_success: scan_success$9,
  search: search$9,
  seconds: seconds$9,
  select_dict: select_dict$9,
  select_dict_to_start: select_dict_to_start$9,
  select_from_dict: select_from_dict$9,
  send_code: send_code$9,
  send_code_failed: send_code_failed$9,
  send_email: send_email$9,
  send_failed: send_failed$9,
  sending: sending$9,
  sentences_not_translated: sentences_not_translated$9,
  set_end_time: set_end_time$9,
  set_password_placeholder: set_password_placeholder$9,
  set_start_time: set_start_time$9,
  setting: setting$9,
  settings: settings$9,
  shortcut: shortcut$9,
  shortcut_key: shortcut_key$9,
  shortcut_settings: shortcut_settings$9,
  show_prev_next_word: show_prev_next_word$9,
  show_prev_next_word_desc: show_prev_next_word_desc$9,
  show_questions: show_questions$9,
  simple_word_filter: simple_word_filter$9,
  simple_word_filter_desc: simple_word_filter_desc$9,
  simple_word_list: simple_word_list$9,
  single_line: single_line$9,
  skip_to_next_stage: skip_to_next_stage$9,
  skip_word: skip_word$9,
  smart_learning: smart_learning$9,
  sound_effect: sound_effect$9,
  source_language: source_language$9,
  speed: speed$9,
  split_rule: split_rule$9,
  split_sentence: split_sentence$9,
  start: start$9,
  start_article_practice: start_article_practice$9,
  start_daily: start_daily$9,
  start_from_beginning: start_from_beginning$9,
  start_from_here: start_from_here$9,
  start_learning: start_learning$9,
  start_time: start_time$9,
  start_word_practice: start_word_practice$9,
  status: status$9,
  studied: studied$9,
  study_duration: study_duration$9,
  study_progress: study_progress$9,
  study_record: study_record$9,
  submit_exam: submit_exam$9,
  suitable_for: suitable_for$9,
  switch_display_mode: switch_display_mode$9,
  sync: sync$9,
  sync_data: sync_data$9,
  sync_failed: sync_failed$9,
  sync_success: sync_success$9,
  sync_to_account_question: sync_to_account_question$9,
  sync_to_result: sync_to_result$9,
  syncing: syncing$9,
  synonym: synonym$9,
  synonyms: synonyms$9,
  tap_allow_in_wechat: tap_allow_in_wechat$9,
  target_language: target_language$9,
  template_download: template_download$9,
  test: test$9,
  this_week_record: this_week_record$9,
  time: time$9,
  title: title$9,
  to_manage_extensions: to_manage_extensions$9,
  today_study_time: today_study_time$9,
  today_task: today_task$9,
  today_task_complete: today_task_complete$9,
  toggle_dictation_mode: toggle_dictation_mode$9,
  toggle_theme: toggle_theme$9,
  toggle_translation: toggle_translation$9,
  total: total$9,
  total_items: total_items$9,
  total_learning_time: total_learning_time$9,
  total_study_days: total_study_days$9,
  total_study_time: total_study_time$9,
  total_words: total_words$9,
  translate: translate$9,
  translate_sentence: translate_sentence$9,
  translate_word: translate_word$9,
  translation: translation$9,
  translation_complete: translation_complete$9,
  try_incognito_mode: try_incognito_mode$9,
  tv_movie: tv_movie$9,
  twitter: twitter$9,
  two: two$9,
  uk_accent: uk_accent$9,
  uncollect: uncollect$9,
  unmark_mastered: unmark_mastered$9,
  update_log: update_log$9,
  upload_audio: upload_audio$9,
  upload_lrc: upload_lrc$9,
  us_accent: us_accent$9,
  usage_guide: usage_guide$9,
  use_prev_end_seconds: use_prev_end_seconds$9,
  use_prev_end_time: use_prev_end_time$9,
  user_agreement: user_agreement$9,
  volume: volume$9,
  wait_translation: wait_translation$9,
  warm_tips: warm_tips$9,
  wechat_group: wechat_group$9,
  wechat_qrcode: wechat_qrcode$9,
  wechat_scan_login: wechat_scan_login$9,
  weekly_record: weekly_record$9,
  weekly_study_record: weekly_study_record$9,
  where_is_data: where_is_data$9,
  word: word$9,
  word_auto_pronunciation: word_auto_pronunciation$9,
  word_import_template: word_import_template$9,
  word_list: word_list$9,
  word_repeat_setting: word_repeat_setting$9,
  word_root: word_root$9,
  word_settings: word_settings$9,
  words: words$9,
  words_comma_separated: words_comma_separated$9,
  words_count: words_count$9,
  xiaohongshu: xiaohongshu$9,
  xiaohongshu_desc: xiaohongshu_desc$9,
  xiaohongshu_qrcode: xiaohongshu_qrcode$9,
  youdao_translate: youdao_translate$9
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$8 = "Englisch lernen, ein Tastendruck nach dem anderen, Open-Source-Übungstool";
var app_name$8 = "Type Words";
var start_word_practice$8 = "Wortübung starten";
var start_article_practice$8 = "Artikelübung starten";
var home_word_practice$8 = "Wortübung";
var home_word_practice_desc1$8 = "Modi: Nachtippen/Diktat/Selbsttest/Rezitation";
var home_word_practice_desc2$8 = "Intelligentes Lernen: Intelligente Planung";
var home_word_practice_desc3$8 = "Freies Lernen: Keine Einschränkungen";
var home_article_practice$8 = "Artikelübung";
var home_article_practice_desc1$8 = "Eingebaute Bücher, Artikel hinzufügen";
var home_article_practice_desc2$8 = "Nachtippen + Rezitation Dual-Modus";
var home_article_practice_desc3$8 = "Hören während Rezitation unterstützt";
var home_collection$8 = "Favoriten, Fehler, Gemeistert";
var home_collection_desc1$8 = "Falsche Eingabe automatisch hinzugefügt";
var home_collection_desc2$8 = "Zu gemeistert hinzufügen, später überspringen";
var home_collection_desc3$8 = "Zu Favoriten für Überprüfung hinzufügen";
var home_vocabulary$8 = "Riesiger Wortschatz";
var home_vocabulary_desc$8 = "Eingebauter Wortschatz von Grundstufe bis Fortgeschritten";
var home_free_opensource$8 = "Kostenlos & Open Source";
var home_free_opensource_desc1$8 = "Vollständig Open Source";
var home_free_opensource_desc2$8 = "Kostenlos nutzbar";
var home_free_opensource_desc3$8 = "Private Bereitstellung";
var home_customization$8 = "Hochgradig anpassbar";
var home_customization_desc1$8 = "Reiche Tastatur-Soundeffekte";
var home_customization_desc2$8 = "Anpassbare Tastenkombinationen";
var home_customization_desc3$8 = "Hochgradig anpassbare Einstellungen";
var home_design$8 = "Einfach & Effizient";
var home_design_desc1$8 = "Einfaches Design, moderne UI";
var home_design_desc2$8 = "Saubere Oberfläche, einfache Bedienung";
var home_design_desc3$8 = "Kein erzwungenes Folgen";
var home_personalized$8 = "Personalisiertes Lernen";
var home_personalized_desc1$8 = "Wörterbücher und Artikel frei hinzufügen";
var home_personalized_desc2$8 = "Personalisierten Lernplan anpassen";
var home_personalized_desc3$8 = "Mehrere Lern- und Wiederholungsstrategien";
var cn_limit_no1$8 = "川公网安备51015602001426号";
var cn_limit_no2$8 = "蜀ICP备2025157466号-2";
var setting$8 = "Einstellungen";
var edit$8 = "Bearbeiten";
var cancel$8 = "Abbrechen";
var confirm$8 = "Bestätigen";
var save$8 = "Speichern";
var close$8 = "Schließen";
var search$8 = "Suchen";
var more$8 = "Mehr";
var loading$8 = "Laden";
var introduction$8 = "Einführung";
var learn$8 = "Lernen";
var practice$8 = "Üben";
var test$8 = "Test";
var feedback$8 = "Feedback";
var document$8 = "Ressourcen";
var help$8 = "Hilfe";
var about$8 = "Über";
var login$8 = "Anmelden";
var register$8 = "Registrieren";
var register_account$8 = "Konto registrieren";
var register_new_account$8 = "Neues Konto registrieren";
var code_login$8 = "Code-Anmeldung";
var password_login$8 = "Passwort-Anmeldung";
var phone_placeholder$8 = "Telefonnummer eingeben";
var code_placeholder$8 = "Verifizierungscode eingeben";
var account_placeholder$8 = "Telefon/E-Mail eingeben";
var password_placeholder$8 = "Passwort eingeben";
var auto_register_notice$8 = "Nicht registrierte Nummern werden automatisch registriert";
var forgot_password$8 = "Passwort vergessen?";
var reset_password$8 = "Passwort zurücksetzen";
var set_password_placeholder$8 = "Bitte Passwort festlegen";
var confirm_password_placeholder$8 = "Bitte Passwort bestätigen";
var new_password_placeholder$8 = "Neues Passwort eingeben";
var confirm_new_password$8 = "Neues Passwort bestätigen";
var wechat_scan_login$8 = "WeChat-Scan-Anmeldung";
var scan_success$8 = "Scan erfolgreich";
var tap_allow_in_wechat$8 = "Tippen Sie in WeChat auf Erlauben";
var login_cancelled$8 = "Anmeldung abgebrochen";
var login_again$8 = "Erneut anmelden";
var sync_data$8 = "Daten synchronisieren";
var local_data_detected$8 = "Lokale Daten erkannt";
var sync_to_account_question$8 = "Mit Konto synchronisieren?";
var no_sync$8 = "Nicht synchronisieren";
var sync$8 = "Synchronisieren";
var syncing$8 = "Synchronisieren";
var sync_failed$8 = "Synchronisierung fehlgeschlagen";
var sync_success$8 = "Synchronisierung erfolgreich";
var enter_website$8 = "Website betreten";
var general_settings$8 = "Allgemeine Einstellungen";
var word_settings$8 = "Worteinstellungen";
var article_settings$8 = "Artikeleinstellungen";
var data_management$8 = "Datenverwaltung";
var shortcut_settings$8 = "Tastenkürzel-Einstellungen";
var update_log$8 = "Aktualisierungsprotokoll";
var shortcut_key$8 = "Tastenkombination (klicken zum Ändern)";
var no_shortcut_set$8 = "Keine Tastenkombination festgelegt";
var press_key_to_set$8 = "Taste drücken zum Einstellen";
var click_here_when_done$8 = "Klicken Sie hier, wenn fertig";
var restore_default$8 = "Standard wiederherstellen";
var data_saved_locally$8 = "Alle Daten lokal im Browser gespeichert";
var export_data_backup$8 = "Datenbackup exportieren (ZIP)";
var import_data_restore$8 = "Datenwiederherstellung importieren";
var import_warning$8 = "Import überschreibt alle aktuellen Daten";
var words$8 = "Wörter";
var no_dict_selected$8 = "Kein Wörterbuch ausgewählt";
var select_dict_to_start$8 = "Wählen Sie ein Wörterbuch zum Starten";
var select_dict$8 = "Wörterbuch auswählen";
var change_progress$8 = "Fortschritt ändern";
var estimated_completion$8 = "Geschätzte Fertigstellung";
var current_progress$8 = "Aktueller Fortschritt";
var learned$8 = "Gelernt";
var completed_review_stage$8 = "Abgeschlossen, Wiederholungsphase beginnt";
var today_task$8 = "Heutige Aufgabe";
var last_task$8 = "Letzte Aufgabe";
var word_list$8 = "Wortliste";
var daily_goal$8 = "Tagesziel";
var words_count$8 = "Wörter";
var change$8 = "Ändern";
var new_words_count$8 = "Neue Wörter";
var review_last$8 = "Letzte wiederholen";
var review_previous$8 = "Vorherige wiederholen";
var start_learning$8 = "Lernen beginnen";
var continue_learning$8 = "Weiter lernen";
var free_practice$8 = "Freies Üben";
var continue_free_practice$8 = "Freie Übung fortsetzen";
var smart_learning$8 = "Intelligentes Lernen";
var review$8 = "Wiederholen";
var random_review$8 = "Zufällige Wiederholung";
var my_dictionaries$8 = "Meine Wörterbücher";
var manage_dict$8 = "Wörterbücher verwalten";
var create_personal_dict$8 = "Persönliches Wörterbuch erstellen";
var recommend$8 = "Empfohlen";
var articles$8 = "Artikel";
var this_week_record$8 = "Aufzeichnungen dieser Woche";
var change_book$8 = "Ändern";
var today_study_time$8 = "Heutige Lernzeit";
var total_study_days$8 = "Gesamte Lerntage";
var total_study_time$8 = "Gesamte Lernzeit";
var my_books$8 = "Meine Bücher";
var manage_books$8 = "Bücher verwalten";
var create_personal_book$8 = "Persönliches Buch erstellen";
var article_management$8 = "Artikelverwaltung";
var toggle_translation$8 = "Übersetzung umschalten";
var switch_display_mode$8 = "Anzeigemodus wechseln";
var line_by_line$8 = "Zeile für Zeile";
var single_line$8 = "Einzelne Zeile";
var comparison$8 = "Vergleich";
var question$8 = "Frage";
var study_record$8 = "Lernaufzeichnung";
var play_next_after_end$8 = "Nach Ende nächstes abspielen";
var create_book$8 = "Buch erstellen";
var edit_book$8 = "Buch bearbeiten";
var dict_list$8 = "Wörterbuchliste";
var book_list$8 = "Buchliste";
var word$8 = "Wort";
var phonetic$8 = "Lautschrift";
var translation$8 = "Übersetzung";
var example_sentence$8 = "Beispielsatz";
var phrase$8 = "Phrase";
var synonym$8 = "Synonym";
var related_words$8 = "Verwandte Wörter";
var etymology$8 = "Etymologie";
var add_word$8 = "Wort hinzufügen";
var edit_word$8 = "Wort bearbeiten";
var create_dict$8 = "Wörterbuch erstellen";
var edit_dict$8 = "Wörterbuch bearbeiten";
var faq$8 = "FAQ";
var is_free$8 = "Ist die Website kostenlos?";
var cannot_type$8 = "Kann nicht tippen, Tastatur reagiert nicht?";
var where_is_data$8 = "Wo sind die Daten? Wie auf mehreren Geräten nutzen?";
var resource_sharing$8 = "Englisch-Lernressourcen";
var all_resources$8 = "Alle Ressourcen";
var new_concept_english$8 = "New Concept English";
var tv_movie$8 = "TV/Film";
var grammar_learning$8 = "Grammatik lernen";
var listening_training$8 = "Hörtraining";
var warm_tips$8 = "Tipps";
var resources_from_internet$8 = "Alle Ressourcen aus dem Internet gesammelt, nur zum Lernen";
var toggle_theme$8 = "Thema wechseln";
var english_document$8 = "Englische Ressourcen";
var empty_placeholder$8 = "Nichts hier~";
var custom$8 = "Benutzerdefiniert";
var back$8 = "Zurück";
var total_items$8 = "Elemente";
var batch_delete$8 = "Stapel löschen";
var confirm_delete_selected$8 = "Alle ausgewählten löschen bestätigen?";
var change_order$8 = "Reihenfolge ändern";
var list_order_setting$8 = "Listenreihenfolge-Einstellungen";
var reverse_current_page$8 = "Aktuelle Seite umkehren";
var reverse_all$8 = "Alle umkehren";
var random_current_page$8 = "Aktuelle Seite mischen";
var random_all$8 = "Alle mischen";
var apply$8 = "Anwenden";
var add$8 = "Hinzufügen";
var collect$8 = "Favorit";
var uncollect$8 = "Favorit entfernen";
var mark_mastered$8 = "Als gemeistert markieren";
var unmark_mastered$8 = "Gemeistert-Markierung entfernen";
var about_thanks$8 = "Danke für die Nutzung dieses Projekts! Es ist ein Open-Source-Projekt, kostenlos nutzbar. Wenn es hilfreich war, geben Sie uns einen Stern auf GitHub!";
var github_address$8 = "GitHub:";
var about_wechat_feedback$8 = "WeChat-Feedback:";
var about_ticket_feedback$8 = "Ticket-Feedback:";
var about_other_channels$8 = "Andere Kanäle:";
var wait_translation$8 = "Bitte warten Sie auf die Übersetzung";
var migrate_data$8 = "Daten migrieren";
var migrate_new_domain$8 = "Diese Website hat eine neue Domain";
var migrate_old_domain_notice$8 = "Die alte Domain wird eingestellt. Aufgrund von Browser-Sicherheitsbeschränkungen können Daten nicht geteilt werden. Bitte übertragen Sie Ihre Daten manuell.";
var migrate_later_notice$8 = "Wenn Sie jetzt nicht migrieren möchten, schließen Sie diesen Dialog und migrieren Sie später unter \"Einstellungen\" -> \"Datenverwaltung\"";
var author$8 = "Autor:";
var features$8 = "Funktionen:";
var suitable_for$8 = "Geeignet für:";
var open_link$8 = "Link öffnen";
var qq_group$8 = "QQ-Gruppe";
var xiaohongshu$8 = "Xiaohongshu";
var follow_x_account$8 = "Folge meinem X-Konto {x_account}";
var twitter$8 = "Twitter";
var send_email$8 = "E-Mail senden an {email}";
var email$8 = "E-Mail";
var xiaohongshu_desc$8 = "Folgen Sie uns auf Xiaohongshu, um die neuesten Updates vom Entwicklungsteam zu erhalten, teilen Sie Ihre Erfahrungen und Vorschläge";
var xiaohongshu_qrcode$8 = "Xiaohongshu QR-Code";
var community_desc$8 = "Treten Sie unserer Community bei, um mit dem Entwicklungsteam zu kommunizieren, teilen Sie Ihre Erfahrungen und Vorschläge";
var qq_qrcode$8 = "QQ-Gruppe QR-Code";
var wechat_group$8 = "WeChat-Gruppe";
var wechat_qrcode$8 = "WeChat-Gruppe QR-Code";
var github_project$8 = "GitHub-Projekt";
var ie_not_supported$8 = "IE-Browser wird nicht unterstützt";
var ie_use_modern_browser$8 = "Type Words wurde mit moderner Technologie erstellt, bitte verwenden Sie Chrome, Edge, Firefox oder andere moderne Browser";
var download_chrome$8 = "Chrome herunterladen";
var i_understand$8 = "Ich verstehe";
var ignore_case$8 = "Groß-/Kleinschreibung ignorieren";
var ignore_case_desc$8 = "Wenn aktiviert, wird bei der Eingabe nicht zwischen Groß- und Kleinschreibung unterschieden";
var allow_dictation_tip$8 = "Hinweise im Diktatmodus erlauben";
var allow_dictation_tip_desc$8 = "Wenn aktiviert, können Sie mit der Maus über das Wort fahren oder eine Tastenkombination drücken, um die richtige Antwort anzuzeigen";
var simple_word_filter$8 = "Einfacher Wortfilter";
var simple_word_filter_desc$8 = "Wenn aktiviert, werden einfache Wörter von der Übung ausgeschlossen; einfache Wörter werden in der Artikelstatistik nicht gezählt";
var simple_word_list$8 = "Einfache Wortliste";
var words_comma_separated$8 = "Mehrere Wörter durch Kommas getrennt";
var sound_effect$8 = "Soundeffekte";
var pronunciation_accent$8 = "Ausspracheakzent";
var pronunciation_accent_desc$8 = "Betrifft nur die Wortaussprache; Artikel verwenden amerikanischen Akzent";
var please_select$8 = "Bitte wählen";
var us_accent$8 = "Amerikanisch";
var uk_accent$8 = "Britisch";
var keyboard_sound$8 = "Tastenton";
var keyboard_sound_effect$8 = "Tastenton-Effekt";
var volume$8 = "Lautstärke";
var show_prev_next_word$8 = "Vorheriges/Nächstes Wort anzeigen";
var show_prev_next_word_desc$8 = "Wenn aktiviert, werden die vorherigen und nächsten Wörter während der Übung oben angezeigt";
var disable_practice_setting_dialog$8 = "Übungseinstellungsdialog standardmäßig nicht anzeigen";
var disable_practice_setting_dialog_desc$8 = "Auf der Wörterbuch-Detailseite, ob der Übungseinstellungsdialog nach Klicken auf die Lernschaltfläche angezeigt werden soll";
var clear_input_on_error$8 = "Eingabe bei Fehler löschen";
var word_repeat_setting$8 = "Wortwiederholungseinstellungen";
var repeat_count$8 = "Wiederholungsanzahl";
var review_ratio$8 = "Wiederholungsverhältnis";
var review_ratio_desc$8 = "Verhältnis von Wiederholungswörtern zu neuen Wörtern. Änderungen werden in der nächsten Sitzung wirksam";
var word_auto_pronunciation$8 = "Automatische Aussprache";
var speed$8 = "Geschwindigkeit";
var effect_sound$8 = "Effektsound (Fehler- und Abschlusstöne)";
var auto_switch$8 = "Automatisch wechseln";
var auto_next_word$8 = "Automatisch nächstes Wort";
var auto_next_word_desc$8 = "Funktioniert nur im Folgemodus. Diktat-, Selbsttest- und Rechtschreibmodi erfordern das Drücken der Leertaste zum Fortfahren";
var auto_next_word_time$8 = "Zeit für automatisch nächstes Wort";
var auto_next_word_time_desc$8 = "Zeit zum automatischen Wechsel zum nächsten Wort nach korrekter Eingabe";
var milliseconds$8 = "ms";
var font_setting$8 = "Schrifteinstellungen";
var foreign_font$8 = "Fremdsprachenschrift";
var chinese_font$8 = "Chinesische Schrift";
var auto_play_sentence$8 = "Satz automatisch abspielen";
var ignore_symbols_numbers_names$8 = "Symbole, Zahlen und Namen beim Tippen ignorieren";
var settings$8 = "Einstellungen";
var please_select_dict$8 = "Bitte wählen Sie zuerst ein Wörterbuch";
var learning_settings$8 = "Lerneinstellungen";
var total$8 = "Gesamt";
var estimated$8 = "Geschätzt";
var days_to_complete$8 = "Tage zum Abschluss";
var from_word$8 = "Ab Wort";
var start_daily$8 = ", täglich";
var new_words$8 = "neue Wörter";
var review_ratio_tooltip$8 = "Verhältnis von Wiederholungswörtern zu neuen Wörtern";
var review_ratio_notice_1$8 = "Wenn das Lernen nicht abgeschlossen ist, wird die Wiederholungsanzahl gemäß dem eingestellten Verhältnis generiert. Bei 0 keine Wiederholung";
var review_ratio_notice_2$8 = "Nach Abschluss des Lernens ist die Anzahl neuer Wörter auf 0 festgelegt, die Wiederholungsanzahl wird gemäß Verhältnis generiert (wenn < 1, als 1 berechnet)";
var daily_learning$8 = "Tägliches Lernen";
var learning_progress$8 = "Lernfortschritt";
var select_from_dict$8 = "Startposition aus Wörterbuch auswählen";
var change_in_settings$8 = "Kann auf der Einstellungsseite geändert werden";
var keep_default_no_show$8 = "Standard beibehalten, nicht mehr anzeigen";
var review_complete$8 = "Wiederholung abgeschlossen";
var today_task_complete$8 = "Heutige Aufgabe abgeschlossen";
var study_duration$8 = "Lerndauer";
var accuracy_rate$8 = "Genauigkeit";
var weekly_study_record$8 = "Wöchentlicher Lernbericht";
var studied$8 = "Gelernt";
var total_words$8 = "Gesamte Wörter";
var restart_learning$8 = "Lernen neu starten";
var another_round$8 = "Noch eine Runde";
var return_home$8 = "Zurück zur Startseite";
var import_tutorial$8 = "Import-Anleitung";
var import_follow_template$8 = "Bitte füllen Sie die Daten gemäß dem Vorlagenformat aus";
var import_word_required$8 = "Das Wortfeld ist erforderlich, andere Felder sind optional";
var import_translation_hint$8 = "Übersetzung: eine Übersetzung pro Zeile, zuerst Wortart, dann Inhalt (z.B. n.cancel); mehrere Übersetzungen in separaten Zeilen";
var import_example_hint$8 = "Beispiel: eine Zeile für Original, eine Zeile für Übersetzung; mehrere Beispiele in separaten Zeilen";
var import_phrase_hint$8 = "Phrase: eine Zeile für Original, eine Zeile für Übersetzung; mehrere Phrasen in separaten Zeilen";
var two$8 = "zwei";
var lines$8 = "Zeilen";
var import_other_hint$8 = "Synonyme, Stammwörter, Etymologie: gehen Sie zum offiziellen Wörterbuch, bearbeiten Sie dann ein Wort, um das Format zu sehen";
var template_download$8 = "Vorlage herunterladen";
var word_import_template$8 = "Wortimport-Vorlage";
var conflict_notice_title$8 = "Wenn Sie während der Nutzung folgende Probleme feststellen:";
var keyboard_no_response$8 = "Tastatur reagiert nicht";
var check_plugins_installed$8 = "Bitte überprüfen Sie, ob Sie installiert haben";
var conflict_plugin_names$8 = "\"Video-Geschwindigkeitsregler\" \"Vim\" \"Audio/Video-Verbesserer\" \"Online-Kurs-Helfer\"";
var plugins_intercept_keyboard$8 = "und andere Plugins/Skripte, die Tastaturereignisse abfangen,";
var cause_no_response$8 = "was dazu führt, dass beim Üben auf dieser Website keine Reaktion erfolgt";
var follow_steps_to_resolve$8 = ", befolgen Sie diese Schritte, um den Konflikt zu lösen:";
var try_incognito_mode$8 = "Öffnen Sie diese Website im Inkognito-Modus des Browsers und prüfen Sie, ob Sie normal tippen können?";
var incognito_not_working$8 = "Kann im Inkognito-Modus nicht tippen,";
var click_here$8 = "klicken Sie hier";
var feedback_or_wechat$8 = "um Feedback zu geben, oder treten Sie der WeChat-Gruppe bei:";
var incognito_working$8 = "Kann im Inkognito-Modus tippen, also ist es ein Plugin/Skript-Konflikt";
var disable_plugin_or_exclude$8 = "Deaktivieren Sie vorübergehend das entsprechende Plugin/Skript oder schließen Sie diese Website in den Plugin/Skript-Einstellungen aus";
var install_extension_manager$8 = "Sie können dieses installieren";
var chrome_extension$8 = "Erweiterung (Chrome-Version, VPN erforderlich)";
var edge_extension$8 = "Erweiterung (Edge-Version, kein VPN erforderlich)";
var to_manage_extensions$8 = "um andere Erweiterungen schnell zu aktivieren/deaktivieren";
var delete_key_goes_back$8 = "Durch Drücken der Entf-Taste kehrt man zur vorherigen Seite zurück";
var browser_360_shortcut$8 = "Im 360-Browser ist die Tastenkombination \"Entf-Taste kehrt zur vorherigen Seite zurück\" standardmäßig eingestellt";
var change_browser_or_shortcut$8 = "Wechseln Sie den Browser oder löschen Sie die 360-Standardverknüpfung: Suchen Sie in den Browsereinstellungen nach \"zurück\"";
var please_enter_name$8 = "Bitte geben Sie einen Namen ein";
var name_max_20_chars$8 = "Der Name darf 20 Zeichen nicht überschreiten";
var name_already_exists$8 = "Name existiert bereits!";
var add_success$8 = "Erfolgreich hinzugefügt";
var edit_success$8 = "Erfolgreich geändert";
var edit_and_add_to_dict$8 = "Erfolgreich geändert und zu meinem Wörterbuch hinzugefügt";
var please_fill_complete$8 = "Bitte vollständig ausfüllen";
var name$8 = "Name";
var description$8 = "Beschreibung";
var source_language$8 = "Ausgangssprache";
var target_language$8 = "Zielsprache";
var english$8 = "Englisch";
var german$8 = "Deutsch";
var japanese$8 = "Japanisch";
var code$8 = "Code";
var chinese$8 = "Chinesisch";
var multiple_choice$8 = "Multiple Choice";
var start$8 = "Starten";
var countdown$8 = "Countdown";
var seconds$8 = "Sekunden";
var submit_exam$8 = "Prüfung abgeben";
var exam_color_hint$8 = "Hellrot: falsch, Dunkelrot: nicht ausgewählt, Grün: richtig";
var items_per_page$8 = "Einträge/Seite";
var jump_to$8 = "Gehe zu";
var page_or_index$8 = "Seite/Index";
var please_fill_original$8 = "Bitte füllen Sie den Originaltext aus!";
var please_fill_title$8 = "Bitte füllen Sie den Titel aus!";
var please_fill_content$8 = "Bitte füllen Sie den Inhalt aus!";
var audio_added_success$8 = "Audio erfolgreich hinzugefügt";
var lrc_parse_success$8 = "LRC-Datei erfolgreich analysiert";
var original_text$8 = "Originaltext";
var title$8 = "Titel";
var please_fill_original_title$8 = "Bitte füllen Sie den Originaltitel aus";
var content$8 = "Inhalt";
var one_sentence_per_line$8 = "Ein Satz pro Zeile, lassen Sie eine Leerzeile zwischen Absätzen";
var name_config_tip$8 = "Nach der Konfiguration von Namen werden diese während der Übung automatisch ignoriert (optional, standardmäßig aktiviert)";
var name_config$8 = "Namenskonfiguration";
var please_paste_original$8 = "Bitte fügen Sie den Originaltext ein";
var usage_guide$8 = "Gebrauchsanleitung";
var copy_and_split$8 = "Kopieren Sie den Originaltext und teilen Sie ihn in Sätze auf";
var click$8 = "Klicken";
var split_sentence$8 = "Satz teilen";
var auto_split$8 = "Schaltfläche zum automatischen Teilen";
var or$8 = "oder";
var manual_split$8 = "manuell bearbeiten zum Teilen";
var split_rule$8 = "Teilungsregel: Ein Satz pro Zeile, Leerzeile zwischen Absätzen";
var after_edit_click$8 = "Nach der Bearbeitung klicken";
var sync_to_result$8 = "Schaltfläche zum Synchronisieren mit dem linken Ergebnisbereich";
var please_fill_translation_title$8 = "Bitte füllen Sie den Übersetzungstitel aus";
var please_fill_translation$8 = "Bitte füllen Sie die Übersetzung aus";
var translate$8 = "Übersetzung";
var copy_translation_or_click$8 = "Übersetzung einfügen, oder klicken wenn keine vorhanden";
var result$8 = "Ergebnis";
var editable_auto_sync$8 = "Alles editierbar, klicken Sie nach der Bearbeitung auf Anwenden zur automatischen Synchronisierung";
var audio$8 = "Audio";
var audio_management$8 = "Audioverwaltung";
var paragraph$8 = "Absatz";
var set_start_time$8 = "Startzeit festlegen";
var use_prev_end_time$8 = "Endzeit des vorherigen Satzes verwenden";
var minus_03s$8 = "Minus 0,3s";
var end$8 = "Ende";
var set_end_time$8 = "Endzeit festlegen";
var edit_audio_align$8 = "Audio-Ausrichtung bearbeiten";
var play$8 = "Abspielen";
var status$8 = "Status";
var sentences_not_translated$8 = "{count} Sätze nicht übersetzt!";
var translation_complete$8 = "Übersetzung abgeschlossen!";
var save_and_next$8 = "Speichern und Nächstes hinzufügen";
var no_translation_comparison$8 = "Kein Übersetzungsvergleich verfügbar";
var adjust_audio_timeline$8 = "Audio-Zeitachse anpassen";
var audio_timeline_tutorial$8 = "Anleitung: Klicken Sie auf Abspielen, wenn das Audio den Satzanfang erreicht, klicken Sie auf Startzeit aufzeichnen; wenn es das Ende erreicht, klicken Sie auf Endzeit aufzeichnen";
var start_time$8 = "Startzeit";
var jump_to_seconds$8 = "Zu {seconds}s springen";
var use_prev_end_seconds$8 = "Endzeit des vorherigen Satzes verwenden: {seconds}s";
var decrease_03s$8 = "Um 0,3s verringern";
var increase_03s$8 = "Um 0,3s erhöhen";
var record$8 = "Aufnehmen";
var end_time$8 = "Endzeit";
var audio_upload_notice$8 = "1. Hochgeladene Dateien werden lokal gespeichert, Daten gehen beim Computerwechsel verloren, bitte rechtzeitig sichern\n2. Unterstützt mp3, wav, m4a und andere gängige Audioformate";
var upload_audio$8 = "Audio hochladen";
var upload_lrc$8 = "LRC-Datei hochladen";
var name_management$8 = "Namenverwaltung";
var name_ignore_config_desc$8 = "Konfigurieren Sie zu ignorierende Namen, diese Namen werden während der Übung automatisch übersprungen (optional, standardmäßig aktiviert)";
var add_name$8 = "Name hinzufügen";
var enter_name$8 = "Namen eingeben";
var collect_word$8 = "Wort sammeln";
var copy$8 = "Kopieren";
var copy_sentence$8 = "Satz kopieren";
var copied$8 = "Kopiert";
var copy_word$8 = "Wort kopieren";
var start_from_here$8 = "Von hier starten";
var play_sentence$8 = "Satz abspielen";
var grammar_analysis$8 = "Grammatikanalyse";
var copied_open_grammar$8 = "Kopiert! Grammatikanalyse-Website wird geöffnet!";
var youdao_translate$8 = "Youdao Wörterbuch";
var translate_word$8 = "Wort übersetzen";
var translate_sentence$8 = "Satz übersetzen";
var restart_practice$8 = "Übung neu starten";
var next_article$8 = "Nächster Artikel";
var learning_record$8 = "Lernprotokoll";
var total_learning_time$8 = "Gesamte Lernzeit";
var current$8 = "Aktuell";
var show_questions$8 = "Fragen anzeigen";
var explanation$8 = "Erklärung";
var encouragement_95$8 = "Ausgezeichnet! Weiter so!";
var encouragement_85$8 = "Gute Arbeit, weiter so!";
var encouragement_70$8 = "Gutes Ergebnis, weiter so!";
var encouragement_default$8 = "Jede Übung ist Fortschritt, weiter so!";
var daily_task_complete$8 = "Tägliche Aufgabe abgeschlossen";
var weekly_record$8 = "Wöchentlicher Lernbericht";
var study_progress$8 = "Lernfortschritt";
var relearn$8 = "Neu lernen";
var start_from_beginning$8 = "Von vorne beginnen";
var another_group$8 = "Noch eine Gruppe";
var back_to_home$8 = "Zurück zur Startseite";
var know_word_tip$8 = "Wenn Sie versehentlich \"Ich kenne es\" ausgewählt haben, drücken Sie die Entf-Taste, um erneut auszuwählen!";
var press_delete_reinput$8 = "Drücken Sie die Entf-Taste, um erneut einzugeben";
var press_space_continue$8 = "Drücken Sie die Leertaste, um fortzufahren";
var shortcut$8 = "Tastenkürzel";
var i_know$8 = "Ich kenne es";
var i_dont_know$8 = "Ich kenne es nicht";
var phrases$8 = "Phrasen";
var synonyms$8 = "Synonyme";
var word_root$8 = "Wortstamm";
var review_wrong_words$8 = "Falsche Wörter wiederholen";
var collapse$8 = "Einklappen";
var expand$8 = "Erweitern";
var minutes$8 = "Minuten";
var time$8 = "Zeit";
var errors$8 = "Fehler";
var skip_to_next_stage$8 = "Zur nächsten Stufe springen";
var skip_word$8 = "Wort überspringen";
var toggle_dictation_mode$8 = "Diktatmodus umschalten";
var send_failed$8 = "Senden fehlgeschlagen";
var send_code_failed$8 = "Bestätigungscode konnte nicht gesendet werden";
var sending$8 = "Wird gesendet";
var send_code$8 = "Code senden";
var agree_terms_notice$8 = "Wenn Sie fortfahren, stimmen Sie unseren";
var user_agreement$8 = "Nutzungsvereinbarung";
var and$8 = "und";
var privacy_policy$8 = "Datenschutzrichtlinie";
var important_notice$8 = "Wichtiger Hinweis";
var dont_remind$8 = "Nicht mehr erinnern";
var function_desc$8 = "Funktionen";
var qa1_a$8 = "Ist die Website kostenlos?";
var qa1_q1$8 = "Nicht komplett kostenlos. Für die langfristige Entwicklung sind zukünftige Gebühren unvermeidlich, aber es wird keine Zahlung erforderlich sein. Wir versuchen, ein Gleichgewicht zwischen kostenlos und kostenpflichtig zu finden.";
var qa1_q2$8 = "Das Projekt ist Open Source, Sie können es selbst bereitstellen.";
var qa2_a$8 = "Kann nicht tippen, Tastatur reagiert nicht?";
var qa3_a$8 = "Wo sind die Daten? Wie benutzt man es auf mehreren Computern/Geräten?";
var qa3_q1$8 = "Alle Benutzerdaten werden im lokalen Browser gespeichert. Wenn Sie Type Words auf verschiedenen Geräten oder Browsern verwenden möchten, müssen Sie Daten manuell exportieren und importieren.";
var qa3_q2$8 = "Einstellungen -> Dateneinstellungen -> Daten auf dem Originalcomputer exportieren -> Über soziale Software an neuen Computer senden -> Auf neuem Computer importieren";
var qa3_q3$8 = "Das Kontosystem ist in Entwicklung.";
var qa4_a$8 = "Die Website plant automatisch zu viele Wörter, wie ändern?";
var qa4_q1$8 = "Das Standardverhältnis von Wiederholungswörtern zu neuen Wörtern ist 1:4.";
var qa4_q2$8 = "Sie können es ändern unter Einstellungen -> Worteinstellungen -> Wiederholungsverhältnis";
var qa5_a$8 = "Es dauert zu lange, eine Lernsitzung abzuschließen, ist der Prozess zu lang?";
var qa5_q1$8 = "Dies ist tatsächlich ein Problem. Ein langer Prozess kann leicht dazu führen, dass Menschen die Motivation verlieren.";
var qa5_q2$8 = "Falsche Wörter werden wiederholt. Wenn es nur ein Tippfehler war, können Sie Tab drücken, um zu überspringen.";
var qa5_q3$8 = "Bei der Wiederholung erfordern nur Wörter, die als \"kenne ich nicht\" markiert sind, Diktat.";
var qa5_q4$8 = "Nach dem Start des Kontosystems wird die Ebbinghaus-Gedächtniskurvenfunktion hinzugefügt.";
var qa6_a$8 = "Wird die Ebbinghaus-Gedächtniskurvenfunktion hinzugefügt?";
var qa7_a$8 = "Kann ich Wörter hinzufügen/benutzerdefinierte Wörterbücher/meine eigenen Wörter importieren?";
var qa7_q1$8 = "Ja, klicken Sie auf der Wörter-Seite auf \"Persönliches Wörterbuch erstellen\"";
var qa7_q2$8 = "Nach der Erstellung klicken Sie auf das Symbol \"Wort hinzufügen\", um Ihre eigenen Wörter hinzuzufügen";
var qa7_q3$8 = "Sie können auch auf das Symbol \"Importieren\" klicken, um einen Batch-Import durchzuführen";
var qa8_a$8 = "Kann ich Artikel hinzufügen/benutzerdefinierte Bücher/meine eigenen Artikel importieren?";
var qa8_q1$8 = "Ja, die Schritte sind im Wesentlichen die gleichen wie beim Hinzufügen von Wörtern";
var qa8_q2$8 = "Klicken Sie auf der Artikel-Seite auf \"Persönliches Buch erstellen\"";
var qa8_q3$8 = "Nach der Erstellung klicken Sie oben auf die Schaltfläche \"Artikelverwaltung\"";
var qa9_a$8 = "Wie schaltet man die Tastentöne aus?";
var qa9_q$8 = "Einstellungen -> Allgemeine Einstellungen -> Soundeffekte -> Tastenton, ausschalten";
var qa10_a$8 = "Kann ich es auf einem Tablet verwenden?";
var qa10_q1$8 = "Tablets können verwendet werden, aber die Verwendung einer Bluetooth-Tastatur bietet ein besseres Erlebnis.";
var qa10_q2$8 = "Nach dem Anschließen einer Bluetooth-Tastatur müssen Android-Tablets den \"Desktop-Modus\" manuell aktivieren.";
var qa11_a$8 = "Kann ich es auf einem Handy verwenden?";
var qa11_q$8 = "Handys können verwendet werden, aber die Optimierung wurde noch nicht durchgeführt. Es wird empfohlen, es auf einem Computer oder Tablet zu verwenden.";
var qa12_a$8 = "Gibt es eine APP oder ein Mini-Programm?";
var qa12_q$8 = "Nein, nur die Website";
var qa13_a$8 = "Wie kann man dem Entwicklungsteam Feedback geben?";
var qa13_q1$8 = "Sie können unserer offiziellen WeChat-Gruppe beitreten und die gewünschten Funktionen detailliert beschreiben";
var qa13_q2$8 = "Wenn Sie Fehler in der Anwendung finden, geben Sie bitte eine detaillierte Beschreibung und Schritte zur Reproduktion an";
var qa13_q3$8 = "Sie können uns auch ein Support-Ticket senden";
var qa13_q4$8 = "Sie können auch auf github/issues einreichen";
const de = {
	app_desc: app_desc$8,
	app_name: app_name$8,
	start_word_practice: start_word_practice$8,
	start_article_practice: start_article_practice$8,
	home_word_practice: home_word_practice$8,
	home_word_practice_desc1: home_word_practice_desc1$8,
	home_word_practice_desc2: home_word_practice_desc2$8,
	home_word_practice_desc3: home_word_practice_desc3$8,
	home_article_practice: home_article_practice$8,
	home_article_practice_desc1: home_article_practice_desc1$8,
	home_article_practice_desc2: home_article_practice_desc2$8,
	home_article_practice_desc3: home_article_practice_desc3$8,
	home_collection: home_collection$8,
	home_collection_desc1: home_collection_desc1$8,
	home_collection_desc2: home_collection_desc2$8,
	home_collection_desc3: home_collection_desc3$8,
	home_vocabulary: home_vocabulary$8,
	home_vocabulary_desc: home_vocabulary_desc$8,
	home_free_opensource: home_free_opensource$8,
	home_free_opensource_desc1: home_free_opensource_desc1$8,
	home_free_opensource_desc2: home_free_opensource_desc2$8,
	home_free_opensource_desc3: home_free_opensource_desc3$8,
	home_customization: home_customization$8,
	home_customization_desc1: home_customization_desc1$8,
	home_customization_desc2: home_customization_desc2$8,
	home_customization_desc3: home_customization_desc3$8,
	home_design: home_design$8,
	home_design_desc1: home_design_desc1$8,
	home_design_desc2: home_design_desc2$8,
	home_design_desc3: home_design_desc3$8,
	home_personalized: home_personalized$8,
	home_personalized_desc1: home_personalized_desc1$8,
	home_personalized_desc2: home_personalized_desc2$8,
	home_personalized_desc3: home_personalized_desc3$8,
	cn_limit_no1: cn_limit_no1$8,
	cn_limit_no2: cn_limit_no2$8,
	setting: setting$8,
	edit: edit$8,
	"delete": "Löschen",
	cancel: cancel$8,
	confirm: confirm$8,
	save: save$8,
	close: close$8,
	search: search$8,
	more: more$8,
	loading: loading$8,
	introduction: introduction$8,
	learn: learn$8,
	practice: practice$8,
	test: test$8,
	feedback: feedback$8,
	document: document$8,
	help: help$8,
	about: about$8,
	login: login$8,
	register: register$8,
	register_account: register_account$8,
	register_new_account: register_new_account$8,
	code_login: code_login$8,
	password_login: password_login$8,
	phone_placeholder: phone_placeholder$8,
	code_placeholder: code_placeholder$8,
	account_placeholder: account_placeholder$8,
	password_placeholder: password_placeholder$8,
	auto_register_notice: auto_register_notice$8,
	forgot_password: forgot_password$8,
	reset_password: reset_password$8,
	set_password_placeholder: set_password_placeholder$8,
	confirm_password_placeholder: confirm_password_placeholder$8,
	new_password_placeholder: new_password_placeholder$8,
	confirm_new_password: confirm_new_password$8,
	wechat_scan_login: wechat_scan_login$8,
	scan_success: scan_success$8,
	tap_allow_in_wechat: tap_allow_in_wechat$8,
	login_cancelled: login_cancelled$8,
	login_again: login_again$8,
	sync_data: sync_data$8,
	local_data_detected: local_data_detected$8,
	sync_to_account_question: sync_to_account_question$8,
	no_sync: no_sync$8,
	sync: sync$8,
	syncing: syncing$8,
	sync_failed: sync_failed$8,
	sync_success: sync_success$8,
	enter_website: enter_website$8,
	general_settings: general_settings$8,
	word_settings: word_settings$8,
	article_settings: article_settings$8,
	data_management: data_management$8,
	shortcut_settings: shortcut_settings$8,
	update_log: update_log$8,
	"function": "Funktion",
	shortcut_key: shortcut_key$8,
	no_shortcut_set: no_shortcut_set$8,
	press_key_to_set: press_key_to_set$8,
	click_here_when_done: click_here_when_done$8,
	restore_default: restore_default$8,
	data_saved_locally: data_saved_locally$8,
	export_data_backup: export_data_backup$8,
	import_data_restore: import_data_restore$8,
	import_warning: import_warning$8,
	words: words$8,
	no_dict_selected: no_dict_selected$8,
	select_dict_to_start: select_dict_to_start$8,
	select_dict: select_dict$8,
	change_progress: change_progress$8,
	estimated_completion: estimated_completion$8,
	current_progress: current_progress$8,
	learned: learned$8,
	completed_review_stage: completed_review_stage$8,
	today_task: today_task$8,
	last_task: last_task$8,
	word_list: word_list$8,
	daily_goal: daily_goal$8,
	words_count: words_count$8,
	change: change$8,
	new_words_count: new_words_count$8,
	review_last: review_last$8,
	review_previous: review_previous$8,
	start_learning: start_learning$8,
	continue_learning: continue_learning$8,
	free_practice: free_practice$8,
	continue_free_practice: continue_free_practice$8,
	smart_learning: smart_learning$8,
	review: review$8,
	random_review: random_review$8,
	my_dictionaries: my_dictionaries$8,
	manage_dict: manage_dict$8,
	create_personal_dict: create_personal_dict$8,
	recommend: recommend$8,
	articles: articles$8,
	this_week_record: this_week_record$8,
	change_book: change_book$8,
	today_study_time: today_study_time$8,
	total_study_days: total_study_days$8,
	total_study_time: total_study_time$8,
	my_books: my_books$8,
	manage_books: manage_books$8,
	create_personal_book: create_personal_book$8,
	article_management: article_management$8,
	toggle_translation: toggle_translation$8,
	switch_display_mode: switch_display_mode$8,
	line_by_line: line_by_line$8,
	single_line: single_line$8,
	comparison: comparison$8,
	question: question$8,
	study_record: study_record$8,
	play_next_after_end: play_next_after_end$8,
	create_book: create_book$8,
	edit_book: edit_book$8,
	dict_list: dict_list$8,
	book_list: book_list$8,
	word: word$8,
	phonetic: phonetic$8,
	translation: translation$8,
	example_sentence: example_sentence$8,
	phrase: phrase$8,
	synonym: synonym$8,
	related_words: related_words$8,
	etymology: etymology$8,
	add_word: add_word$8,
	edit_word: edit_word$8,
	create_dict: create_dict$8,
	edit_dict: edit_dict$8,
	"import": "Importieren",
	"export": "Exportieren",
	faq: faq$8,
	is_free: is_free$8,
	cannot_type: cannot_type$8,
	where_is_data: where_is_data$8,
	resource_sharing: resource_sharing$8,
	all_resources: all_resources$8,
	new_concept_english: new_concept_english$8,
	tv_movie: tv_movie$8,
	grammar_learning: grammar_learning$8,
	listening_training: listening_training$8,
	warm_tips: warm_tips$8,
	resources_from_internet: resources_from_internet$8,
	toggle_theme: toggle_theme$8,
	english_document: english_document$8,
	empty_placeholder: empty_placeholder$8,
	custom: custom$8,
	back: back$8,
	total_items: total_items$8,
	batch_delete: batch_delete$8,
	confirm_delete_selected: confirm_delete_selected$8,
	change_order: change_order$8,
	list_order_setting: list_order_setting$8,
	reverse_current_page: reverse_current_page$8,
	reverse_all: reverse_all$8,
	random_current_page: random_current_page$8,
	random_all: random_all$8,
	apply: apply$8,
	add: add$8,
	collect: collect$8,
	uncollect: uncollect$8,
	mark_mastered: mark_mastered$8,
	unmark_mastered: unmark_mastered$8,
	about_thanks: about_thanks$8,
	github_address: github_address$8,
	about_wechat_feedback: about_wechat_feedback$8,
	about_ticket_feedback: about_ticket_feedback$8,
	about_other_channels: about_other_channels$8,
	wait_translation: wait_translation$8,
	migrate_data: migrate_data$8,
	migrate_new_domain: migrate_new_domain$8,
	migrate_old_domain_notice: migrate_old_domain_notice$8,
	migrate_later_notice: migrate_later_notice$8,
	author: author$8,
	features: features$8,
	suitable_for: suitable_for$8,
	open_link: open_link$8,
	qq_group: qq_group$8,
	xiaohongshu: xiaohongshu$8,
	follow_x_account: follow_x_account$8,
	twitter: twitter$8,
	send_email: send_email$8,
	email: email$8,
	xiaohongshu_desc: xiaohongshu_desc$8,
	xiaohongshu_qrcode: xiaohongshu_qrcode$8,
	community_desc: community_desc$8,
	qq_qrcode: qq_qrcode$8,
	wechat_group: wechat_group$8,
	wechat_qrcode: wechat_qrcode$8,
	github_project: github_project$8,
	ie_not_supported: ie_not_supported$8,
	ie_use_modern_browser: ie_use_modern_browser$8,
	download_chrome: download_chrome$8,
	i_understand: i_understand$8,
	ignore_case: ignore_case$8,
	ignore_case_desc: ignore_case_desc$8,
	allow_dictation_tip: allow_dictation_tip$8,
	allow_dictation_tip_desc: allow_dictation_tip_desc$8,
	simple_word_filter: simple_word_filter$8,
	simple_word_filter_desc: simple_word_filter_desc$8,
	simple_word_list: simple_word_list$8,
	words_comma_separated: words_comma_separated$8,
	sound_effect: sound_effect$8,
	pronunciation_accent: pronunciation_accent$8,
	pronunciation_accent_desc: pronunciation_accent_desc$8,
	please_select: please_select$8,
	us_accent: us_accent$8,
	uk_accent: uk_accent$8,
	keyboard_sound: keyboard_sound$8,
	keyboard_sound_effect: keyboard_sound_effect$8,
	volume: volume$8,
	show_prev_next_word: show_prev_next_word$8,
	show_prev_next_word_desc: show_prev_next_word_desc$8,
	disable_practice_setting_dialog: disable_practice_setting_dialog$8,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$8,
	clear_input_on_error: clear_input_on_error$8,
	word_repeat_setting: word_repeat_setting$8,
	repeat_count: repeat_count$8,
	review_ratio: review_ratio$8,
	review_ratio_desc: review_ratio_desc$8,
	word_auto_pronunciation: word_auto_pronunciation$8,
	speed: speed$8,
	effect_sound: effect_sound$8,
	auto_switch: auto_switch$8,
	auto_next_word: auto_next_word$8,
	auto_next_word_desc: auto_next_word_desc$8,
	auto_next_word_time: auto_next_word_time$8,
	auto_next_word_time_desc: auto_next_word_time_desc$8,
	milliseconds: milliseconds$8,
	font_setting: font_setting$8,
	foreign_font: foreign_font$8,
	chinese_font: chinese_font$8,
	auto_play_sentence: auto_play_sentence$8,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$8,
	settings: settings$8,
	please_select_dict: please_select_dict$8,
	learning_settings: learning_settings$8,
	total: total$8,
	estimated: estimated$8,
	days_to_complete: days_to_complete$8,
	from_word: from_word$8,
	start_daily: start_daily$8,
	new_words: new_words$8,
	review_ratio_tooltip: review_ratio_tooltip$8,
	review_ratio_notice_1: review_ratio_notice_1$8,
	review_ratio_notice_2: review_ratio_notice_2$8,
	daily_learning: daily_learning$8,
	learning_progress: learning_progress$8,
	select_from_dict: select_from_dict$8,
	change_in_settings: change_in_settings$8,
	keep_default_no_show: keep_default_no_show$8,
	review_complete: review_complete$8,
	today_task_complete: today_task_complete$8,
	study_duration: study_duration$8,
	accuracy_rate: accuracy_rate$8,
	weekly_study_record: weekly_study_record$8,
	studied: studied$8,
	total_words: total_words$8,
	restart_learning: restart_learning$8,
	another_round: another_round$8,
	return_home: return_home$8,
	import_tutorial: import_tutorial$8,
	import_follow_template: import_follow_template$8,
	import_word_required: import_word_required$8,
	import_translation_hint: import_translation_hint$8,
	import_example_hint: import_example_hint$8,
	import_phrase_hint: import_phrase_hint$8,
	two: two$8,
	lines: lines$8,
	import_other_hint: import_other_hint$8,
	template_download: template_download$8,
	word_import_template: word_import_template$8,
	conflict_notice_title: conflict_notice_title$8,
	keyboard_no_response: keyboard_no_response$8,
	check_plugins_installed: check_plugins_installed$8,
	conflict_plugin_names: conflict_plugin_names$8,
	plugins_intercept_keyboard: plugins_intercept_keyboard$8,
	cause_no_response: cause_no_response$8,
	follow_steps_to_resolve: follow_steps_to_resolve$8,
	try_incognito_mode: try_incognito_mode$8,
	incognito_not_working: incognito_not_working$8,
	click_here: click_here$8,
	feedback_or_wechat: feedback_or_wechat$8,
	incognito_working: incognito_working$8,
	disable_plugin_or_exclude: disable_plugin_or_exclude$8,
	install_extension_manager: install_extension_manager$8,
	chrome_extension: chrome_extension$8,
	edge_extension: edge_extension$8,
	to_manage_extensions: to_manage_extensions$8,
	delete_key_goes_back: delete_key_goes_back$8,
	browser_360_shortcut: browser_360_shortcut$8,
	change_browser_or_shortcut: change_browser_or_shortcut$8,
	please_enter_name: please_enter_name$8,
	name_max_20_chars: name_max_20_chars$8,
	name_already_exists: name_already_exists$8,
	add_success: add_success$8,
	edit_success: edit_success$8,
	edit_and_add_to_dict: edit_and_add_to_dict$8,
	please_fill_complete: please_fill_complete$8,
	name: name$8,
	description: description$8,
	source_language: source_language$8,
	target_language: target_language$8,
	english: english$8,
	german: german$8,
	japanese: japanese$8,
	code: code$8,
	chinese: chinese$8,
	multiple_choice: multiple_choice$8,
	start: start$8,
	countdown: countdown$8,
	seconds: seconds$8,
	submit_exam: submit_exam$8,
	exam_color_hint: exam_color_hint$8,
	items_per_page: items_per_page$8,
	jump_to: jump_to$8,
	page_or_index: page_or_index$8,
	please_fill_original: please_fill_original$8,
	please_fill_title: please_fill_title$8,
	please_fill_content: please_fill_content$8,
	audio_added_success: audio_added_success$8,
	lrc_parse_success: lrc_parse_success$8,
	original_text: original_text$8,
	title: title$8,
	please_fill_original_title: please_fill_original_title$8,
	content: content$8,
	one_sentence_per_line: one_sentence_per_line$8,
	name_config_tip: name_config_tip$8,
	name_config: name_config$8,
	please_paste_original: please_paste_original$8,
	usage_guide: usage_guide$8,
	copy_and_split: copy_and_split$8,
	click: click$8,
	split_sentence: split_sentence$8,
	auto_split: auto_split$8,
	or: or$8,
	manual_split: manual_split$8,
	split_rule: split_rule$8,
	after_edit_click: after_edit_click$8,
	sync_to_result: sync_to_result$8,
	please_fill_translation_title: please_fill_translation_title$8,
	please_fill_translation: please_fill_translation$8,
	translate: translate$8,
	copy_translation_or_click: copy_translation_or_click$8,
	result: result$8,
	editable_auto_sync: editable_auto_sync$8,
	audio: audio$8,
	audio_management: audio_management$8,
	paragraph: paragraph$8,
	set_start_time: set_start_time$8,
	use_prev_end_time: use_prev_end_time$8,
	minus_03s: minus_03s$8,
	end: end$8,
	set_end_time: set_end_time$8,
	edit_audio_align: edit_audio_align$8,
	play: play$8,
	status: status$8,
	sentences_not_translated: sentences_not_translated$8,
	translation_complete: translation_complete$8,
	save_and_next: save_and_next$8,
	no_translation_comparison: no_translation_comparison$8,
	adjust_audio_timeline: adjust_audio_timeline$8,
	audio_timeline_tutorial: audio_timeline_tutorial$8,
	start_time: start_time$8,
	jump_to_seconds: jump_to_seconds$8,
	use_prev_end_seconds: use_prev_end_seconds$8,
	decrease_03s: decrease_03s$8,
	increase_03s: increase_03s$8,
	record: record$8,
	end_time: end_time$8,
	audio_upload_notice: audio_upload_notice$8,
	upload_audio: upload_audio$8,
	upload_lrc: upload_lrc$8,
	name_management: name_management$8,
	name_ignore_config_desc: name_ignore_config_desc$8,
	add_name: add_name$8,
	enter_name: enter_name$8,
	collect_word: collect_word$8,
	copy: copy$8,
	copy_sentence: copy_sentence$8,
	copied: copied$8,
	copy_word: copy_word$8,
	start_from_here: start_from_here$8,
	play_sentence: play_sentence$8,
	grammar_analysis: grammar_analysis$8,
	copied_open_grammar: copied_open_grammar$8,
	youdao_translate: youdao_translate$8,
	translate_word: translate_word$8,
	translate_sentence: translate_sentence$8,
	restart_practice: restart_practice$8,
	next_article: next_article$8,
	learning_record: learning_record$8,
	total_learning_time: total_learning_time$8,
	current: current$8,
	show_questions: show_questions$8,
	explanation: explanation$8,
	encouragement_95: encouragement_95$8,
	encouragement_85: encouragement_85$8,
	encouragement_70: encouragement_70$8,
	encouragement_default: encouragement_default$8,
	daily_task_complete: daily_task_complete$8,
	weekly_record: weekly_record$8,
	study_progress: study_progress$8,
	relearn: relearn$8,
	start_from_beginning: start_from_beginning$8,
	another_group: another_group$8,
	back_to_home: back_to_home$8,
	know_word_tip: know_word_tip$8,
	press_delete_reinput: press_delete_reinput$8,
	press_space_continue: press_space_continue$8,
	shortcut: shortcut$8,
	i_know: i_know$8,
	i_dont_know: i_dont_know$8,
	phrases: phrases$8,
	synonyms: synonyms$8,
	word_root: word_root$8,
	review_wrong_words: review_wrong_words$8,
	collapse: collapse$8,
	expand: expand$8,
	minutes: minutes$8,
	time: time$8,
	errors: errors$8,
	skip_to_next_stage: skip_to_next_stage$8,
	skip_word: skip_word$8,
	toggle_dictation_mode: toggle_dictation_mode$8,
	send_failed: send_failed$8,
	send_code_failed: send_code_failed$8,
	sending: sending$8,
	send_code: send_code$8,
	agree_terms_notice: agree_terms_notice$8,
	user_agreement: user_agreement$8,
	and: and$8,
	privacy_policy: privacy_policy$8,
	important_notice: important_notice$8,
	dont_remind: dont_remind$8,
	function_desc: function_desc$8,
	qa1_a: qa1_a$8,
	qa1_q1: qa1_q1$8,
	qa1_q2: qa1_q2$8,
	qa2_a: qa2_a$8,
	qa3_a: qa3_a$8,
	qa3_q1: qa3_q1$8,
	qa3_q2: qa3_q2$8,
	qa3_q3: qa3_q3$8,
	qa4_a: qa4_a$8,
	qa4_q1: qa4_q1$8,
	qa4_q2: qa4_q2$8,
	qa5_a: qa5_a$8,
	qa5_q1: qa5_q1$8,
	qa5_q2: qa5_q2$8,
	qa5_q3: qa5_q3$8,
	qa5_q4: qa5_q4$8,
	qa6_a: qa6_a$8,
	qa7_a: qa7_a$8,
	qa7_q1: qa7_q1$8,
	qa7_q2: qa7_q2$8,
	qa7_q3: qa7_q3$8,
	qa8_a: qa8_a$8,
	qa8_q1: qa8_q1$8,
	qa8_q2: qa8_q2$8,
	qa8_q3: qa8_q3$8,
	qa9_a: qa9_a$8,
	qa9_q: qa9_q$8,
	qa10_a: qa10_a$8,
	qa10_q1: qa10_q1$8,
	qa10_q2: qa10_q2$8,
	qa11_a: qa11_a$8,
	qa11_q: qa11_q$8,
	qa12_a: qa12_a$8,
	qa12_q: qa12_q$8,
	qa13_a: qa13_a$8,
	qa13_q1: qa13_q1$8,
	qa13_q2: qa13_q2$8,
	qa13_q3: qa13_q3$8,
	qa13_q4: qa13_q4$8
};

const de$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$8,
  about_other_channels: about_other_channels$8,
  about_thanks: about_thanks$8,
  about_ticket_feedback: about_ticket_feedback$8,
  about_wechat_feedback: about_wechat_feedback$8,
  account_placeholder: account_placeholder$8,
  accuracy_rate: accuracy_rate$8,
  add: add$8,
  add_name: add_name$8,
  add_success: add_success$8,
  add_word: add_word$8,
  adjust_audio_timeline: adjust_audio_timeline$8,
  after_edit_click: after_edit_click$8,
  agree_terms_notice: agree_terms_notice$8,
  all_resources: all_resources$8,
  allow_dictation_tip: allow_dictation_tip$8,
  allow_dictation_tip_desc: allow_dictation_tip_desc$8,
  and: and$8,
  another_group: another_group$8,
  another_round: another_round$8,
  app_desc: app_desc$8,
  app_name: app_name$8,
  apply: apply$8,
  article_management: article_management$8,
  article_settings: article_settings$8,
  articles: articles$8,
  audio: audio$8,
  audio_added_success: audio_added_success$8,
  audio_management: audio_management$8,
  audio_timeline_tutorial: audio_timeline_tutorial$8,
  audio_upload_notice: audio_upload_notice$8,
  author: author$8,
  auto_next_word: auto_next_word$8,
  auto_next_word_desc: auto_next_word_desc$8,
  auto_next_word_time: auto_next_word_time$8,
  auto_next_word_time_desc: auto_next_word_time_desc$8,
  auto_play_sentence: auto_play_sentence$8,
  auto_register_notice: auto_register_notice$8,
  auto_split: auto_split$8,
  auto_switch: auto_switch$8,
  back: back$8,
  back_to_home: back_to_home$8,
  batch_delete: batch_delete$8,
  book_list: book_list$8,
  browser_360_shortcut: browser_360_shortcut$8,
  cancel: cancel$8,
  cannot_type: cannot_type$8,
  cause_no_response: cause_no_response$8,
  change: change$8,
  change_book: change_book$8,
  change_browser_or_shortcut: change_browser_or_shortcut$8,
  change_in_settings: change_in_settings$8,
  change_order: change_order$8,
  change_progress: change_progress$8,
  check_plugins_installed: check_plugins_installed$8,
  chinese: chinese$8,
  chinese_font: chinese_font$8,
  chrome_extension: chrome_extension$8,
  clear_input_on_error: clear_input_on_error$8,
  click: click$8,
  click_here: click_here$8,
  click_here_when_done: click_here_when_done$8,
  close: close$8,
  cn_limit_no1: cn_limit_no1$8,
  cn_limit_no2: cn_limit_no2$8,
  code: code$8,
  code_login: code_login$8,
  code_placeholder: code_placeholder$8,
  collapse: collapse$8,
  collect: collect$8,
  collect_word: collect_word$8,
  community_desc: community_desc$8,
  comparison: comparison$8,
  completed_review_stage: completed_review_stage$8,
  confirm: confirm$8,
  confirm_delete_selected: confirm_delete_selected$8,
  confirm_new_password: confirm_new_password$8,
  confirm_password_placeholder: confirm_password_placeholder$8,
  conflict_notice_title: conflict_notice_title$8,
  conflict_plugin_names: conflict_plugin_names$8,
  content: content$8,
  continue_free_practice: continue_free_practice$8,
  continue_learning: continue_learning$8,
  copied: copied$8,
  copied_open_grammar: copied_open_grammar$8,
  copy: copy$8,
  copy_and_split: copy_and_split$8,
  copy_sentence: copy_sentence$8,
  copy_translation_or_click: copy_translation_or_click$8,
  copy_word: copy_word$8,
  countdown: countdown$8,
  create_book: create_book$8,
  create_dict: create_dict$8,
  create_personal_book: create_personal_book$8,
  create_personal_dict: create_personal_dict$8,
  current: current$8,
  current_progress: current_progress$8,
  custom: custom$8,
  daily_goal: daily_goal$8,
  daily_learning: daily_learning$8,
  daily_task_complete: daily_task_complete$8,
  data_management: data_management$8,
  data_saved_locally: data_saved_locally$8,
  days_to_complete: days_to_complete$8,
  decrease_03s: decrease_03s$8,
  default: de,
  delete_key_goes_back: delete_key_goes_back$8,
  description: description$8,
  dict_list: dict_list$8,
  disable_plugin_or_exclude: disable_plugin_or_exclude$8,
  disable_practice_setting_dialog: disable_practice_setting_dialog$8,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$8,
  document: document$8,
  dont_remind: dont_remind$8,
  download_chrome: download_chrome$8,
  edge_extension: edge_extension$8,
  edit: edit$8,
  edit_and_add_to_dict: edit_and_add_to_dict$8,
  edit_audio_align: edit_audio_align$8,
  edit_book: edit_book$8,
  edit_dict: edit_dict$8,
  edit_success: edit_success$8,
  edit_word: edit_word$8,
  editable_auto_sync: editable_auto_sync$8,
  effect_sound: effect_sound$8,
  email: email$8,
  empty_placeholder: empty_placeholder$8,
  encouragement_70: encouragement_70$8,
  encouragement_85: encouragement_85$8,
  encouragement_95: encouragement_95$8,
  encouragement_default: encouragement_default$8,
  end: end$8,
  end_time: end_time$8,
  english: english$8,
  english_document: english_document$8,
  enter_name: enter_name$8,
  enter_website: enter_website$8,
  errors: errors$8,
  estimated: estimated$8,
  estimated_completion: estimated_completion$8,
  etymology: etymology$8,
  exam_color_hint: exam_color_hint$8,
  example_sentence: example_sentence$8,
  expand: expand$8,
  explanation: explanation$8,
  export_data_backup: export_data_backup$8,
  faq: faq$8,
  features: features$8,
  feedback: feedback$8,
  feedback_or_wechat: feedback_or_wechat$8,
  follow_steps_to_resolve: follow_steps_to_resolve$8,
  follow_x_account: follow_x_account$8,
  font_setting: font_setting$8,
  foreign_font: foreign_font$8,
  forgot_password: forgot_password$8,
  free_practice: free_practice$8,
  from_word: from_word$8,
  function_desc: function_desc$8,
  general_settings: general_settings$8,
  german: german$8,
  github_address: github_address$8,
  github_project: github_project$8,
  grammar_analysis: grammar_analysis$8,
  grammar_learning: grammar_learning$8,
  help: help$8,
  home_article_practice: home_article_practice$8,
  home_article_practice_desc1: home_article_practice_desc1$8,
  home_article_practice_desc2: home_article_practice_desc2$8,
  home_article_practice_desc3: home_article_practice_desc3$8,
  home_collection: home_collection$8,
  home_collection_desc1: home_collection_desc1$8,
  home_collection_desc2: home_collection_desc2$8,
  home_collection_desc3: home_collection_desc3$8,
  home_customization: home_customization$8,
  home_customization_desc1: home_customization_desc1$8,
  home_customization_desc2: home_customization_desc2$8,
  home_customization_desc3: home_customization_desc3$8,
  home_design: home_design$8,
  home_design_desc1: home_design_desc1$8,
  home_design_desc2: home_design_desc2$8,
  home_design_desc3: home_design_desc3$8,
  home_free_opensource: home_free_opensource$8,
  home_free_opensource_desc1: home_free_opensource_desc1$8,
  home_free_opensource_desc2: home_free_opensource_desc2$8,
  home_free_opensource_desc3: home_free_opensource_desc3$8,
  home_personalized: home_personalized$8,
  home_personalized_desc1: home_personalized_desc1$8,
  home_personalized_desc2: home_personalized_desc2$8,
  home_personalized_desc3: home_personalized_desc3$8,
  home_vocabulary: home_vocabulary$8,
  home_vocabulary_desc: home_vocabulary_desc$8,
  home_word_practice: home_word_practice$8,
  home_word_practice_desc1: home_word_practice_desc1$8,
  home_word_practice_desc2: home_word_practice_desc2$8,
  home_word_practice_desc3: home_word_practice_desc3$8,
  i_dont_know: i_dont_know$8,
  i_know: i_know$8,
  i_understand: i_understand$8,
  ie_not_supported: ie_not_supported$8,
  ie_use_modern_browser: ie_use_modern_browser$8,
  ignore_case: ignore_case$8,
  ignore_case_desc: ignore_case_desc$8,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$8,
  import_data_restore: import_data_restore$8,
  import_example_hint: import_example_hint$8,
  import_follow_template: import_follow_template$8,
  import_other_hint: import_other_hint$8,
  import_phrase_hint: import_phrase_hint$8,
  import_translation_hint: import_translation_hint$8,
  import_tutorial: import_tutorial$8,
  import_warning: import_warning$8,
  import_word_required: import_word_required$8,
  important_notice: important_notice$8,
  incognito_not_working: incognito_not_working$8,
  incognito_working: incognito_working$8,
  increase_03s: increase_03s$8,
  install_extension_manager: install_extension_manager$8,
  introduction: introduction$8,
  is_free: is_free$8,
  items_per_page: items_per_page$8,
  japanese: japanese$8,
  jump_to: jump_to$8,
  jump_to_seconds: jump_to_seconds$8,
  keep_default_no_show: keep_default_no_show$8,
  keyboard_no_response: keyboard_no_response$8,
  keyboard_sound: keyboard_sound$8,
  keyboard_sound_effect: keyboard_sound_effect$8,
  know_word_tip: know_word_tip$8,
  last_task: last_task$8,
  learn: learn$8,
  learned: learned$8,
  learning_progress: learning_progress$8,
  learning_record: learning_record$8,
  learning_settings: learning_settings$8,
  line_by_line: line_by_line$8,
  lines: lines$8,
  list_order_setting: list_order_setting$8,
  listening_training: listening_training$8,
  loading: loading$8,
  local_data_detected: local_data_detected$8,
  login: login$8,
  login_again: login_again$8,
  login_cancelled: login_cancelled$8,
  lrc_parse_success: lrc_parse_success$8,
  manage_books: manage_books$8,
  manage_dict: manage_dict$8,
  manual_split: manual_split$8,
  mark_mastered: mark_mastered$8,
  migrate_data: migrate_data$8,
  migrate_later_notice: migrate_later_notice$8,
  migrate_new_domain: migrate_new_domain$8,
  migrate_old_domain_notice: migrate_old_domain_notice$8,
  milliseconds: milliseconds$8,
  minus_03s: minus_03s$8,
  minutes: minutes$8,
  more: more$8,
  multiple_choice: multiple_choice$8,
  my_books: my_books$8,
  my_dictionaries: my_dictionaries$8,
  name: name$8,
  name_already_exists: name_already_exists$8,
  name_config: name_config$8,
  name_config_tip: name_config_tip$8,
  name_ignore_config_desc: name_ignore_config_desc$8,
  name_management: name_management$8,
  name_max_20_chars: name_max_20_chars$8,
  new_concept_english: new_concept_english$8,
  new_password_placeholder: new_password_placeholder$8,
  new_words: new_words$8,
  new_words_count: new_words_count$8,
  next_article: next_article$8,
  no_dict_selected: no_dict_selected$8,
  no_shortcut_set: no_shortcut_set$8,
  no_sync: no_sync$8,
  no_translation_comparison: no_translation_comparison$8,
  one_sentence_per_line: one_sentence_per_line$8,
  open_link: open_link$8,
  or: or$8,
  original_text: original_text$8,
  page_or_index: page_or_index$8,
  paragraph: paragraph$8,
  password_login: password_login$8,
  password_placeholder: password_placeholder$8,
  phone_placeholder: phone_placeholder$8,
  phonetic: phonetic$8,
  phrase: phrase$8,
  phrases: phrases$8,
  play: play$8,
  play_next_after_end: play_next_after_end$8,
  play_sentence: play_sentence$8,
  please_enter_name: please_enter_name$8,
  please_fill_complete: please_fill_complete$8,
  please_fill_content: please_fill_content$8,
  please_fill_original: please_fill_original$8,
  please_fill_original_title: please_fill_original_title$8,
  please_fill_title: please_fill_title$8,
  please_fill_translation: please_fill_translation$8,
  please_fill_translation_title: please_fill_translation_title$8,
  please_paste_original: please_paste_original$8,
  please_select: please_select$8,
  please_select_dict: please_select_dict$8,
  plugins_intercept_keyboard: plugins_intercept_keyboard$8,
  practice: practice$8,
  press_delete_reinput: press_delete_reinput$8,
  press_key_to_set: press_key_to_set$8,
  press_space_continue: press_space_continue$8,
  privacy_policy: privacy_policy$8,
  pronunciation_accent: pronunciation_accent$8,
  pronunciation_accent_desc: pronunciation_accent_desc$8,
  qa10_a: qa10_a$8,
  qa10_q1: qa10_q1$8,
  qa10_q2: qa10_q2$8,
  qa11_a: qa11_a$8,
  qa11_q: qa11_q$8,
  qa12_a: qa12_a$8,
  qa12_q: qa12_q$8,
  qa13_a: qa13_a$8,
  qa13_q1: qa13_q1$8,
  qa13_q2: qa13_q2$8,
  qa13_q3: qa13_q3$8,
  qa13_q4: qa13_q4$8,
  qa1_a: qa1_a$8,
  qa1_q1: qa1_q1$8,
  qa1_q2: qa1_q2$8,
  qa2_a: qa2_a$8,
  qa3_a: qa3_a$8,
  qa3_q1: qa3_q1$8,
  qa3_q2: qa3_q2$8,
  qa3_q3: qa3_q3$8,
  qa4_a: qa4_a$8,
  qa4_q1: qa4_q1$8,
  qa4_q2: qa4_q2$8,
  qa5_a: qa5_a$8,
  qa5_q1: qa5_q1$8,
  qa5_q2: qa5_q2$8,
  qa5_q3: qa5_q3$8,
  qa5_q4: qa5_q4$8,
  qa6_a: qa6_a$8,
  qa7_a: qa7_a$8,
  qa7_q1: qa7_q1$8,
  qa7_q2: qa7_q2$8,
  qa7_q3: qa7_q3$8,
  qa8_a: qa8_a$8,
  qa8_q1: qa8_q1$8,
  qa8_q2: qa8_q2$8,
  qa8_q3: qa8_q3$8,
  qa9_a: qa9_a$8,
  qa9_q: qa9_q$8,
  qq_group: qq_group$8,
  qq_qrcode: qq_qrcode$8,
  question: question$8,
  random_all: random_all$8,
  random_current_page: random_current_page$8,
  random_review: random_review$8,
  recommend: recommend$8,
  record: record$8,
  register: register$8,
  register_account: register_account$8,
  register_new_account: register_new_account$8,
  related_words: related_words$8,
  relearn: relearn$8,
  repeat_count: repeat_count$8,
  reset_password: reset_password$8,
  resource_sharing: resource_sharing$8,
  resources_from_internet: resources_from_internet$8,
  restart_learning: restart_learning$8,
  restart_practice: restart_practice$8,
  restore_default: restore_default$8,
  result: result$8,
  return_home: return_home$8,
  reverse_all: reverse_all$8,
  reverse_current_page: reverse_current_page$8,
  review: review$8,
  review_complete: review_complete$8,
  review_last: review_last$8,
  review_previous: review_previous$8,
  review_ratio: review_ratio$8,
  review_ratio_desc: review_ratio_desc$8,
  review_ratio_notice_1: review_ratio_notice_1$8,
  review_ratio_notice_2: review_ratio_notice_2$8,
  review_ratio_tooltip: review_ratio_tooltip$8,
  review_wrong_words: review_wrong_words$8,
  save: save$8,
  save_and_next: save_and_next$8,
  scan_success: scan_success$8,
  search: search$8,
  seconds: seconds$8,
  select_dict: select_dict$8,
  select_dict_to_start: select_dict_to_start$8,
  select_from_dict: select_from_dict$8,
  send_code: send_code$8,
  send_code_failed: send_code_failed$8,
  send_email: send_email$8,
  send_failed: send_failed$8,
  sending: sending$8,
  sentences_not_translated: sentences_not_translated$8,
  set_end_time: set_end_time$8,
  set_password_placeholder: set_password_placeholder$8,
  set_start_time: set_start_time$8,
  setting: setting$8,
  settings: settings$8,
  shortcut: shortcut$8,
  shortcut_key: shortcut_key$8,
  shortcut_settings: shortcut_settings$8,
  show_prev_next_word: show_prev_next_word$8,
  show_prev_next_word_desc: show_prev_next_word_desc$8,
  show_questions: show_questions$8,
  simple_word_filter: simple_word_filter$8,
  simple_word_filter_desc: simple_word_filter_desc$8,
  simple_word_list: simple_word_list$8,
  single_line: single_line$8,
  skip_to_next_stage: skip_to_next_stage$8,
  skip_word: skip_word$8,
  smart_learning: smart_learning$8,
  sound_effect: sound_effect$8,
  source_language: source_language$8,
  speed: speed$8,
  split_rule: split_rule$8,
  split_sentence: split_sentence$8,
  start: start$8,
  start_article_practice: start_article_practice$8,
  start_daily: start_daily$8,
  start_from_beginning: start_from_beginning$8,
  start_from_here: start_from_here$8,
  start_learning: start_learning$8,
  start_time: start_time$8,
  start_word_practice: start_word_practice$8,
  status: status$8,
  studied: studied$8,
  study_duration: study_duration$8,
  study_progress: study_progress$8,
  study_record: study_record$8,
  submit_exam: submit_exam$8,
  suitable_for: suitable_for$8,
  switch_display_mode: switch_display_mode$8,
  sync: sync$8,
  sync_data: sync_data$8,
  sync_failed: sync_failed$8,
  sync_success: sync_success$8,
  sync_to_account_question: sync_to_account_question$8,
  sync_to_result: sync_to_result$8,
  syncing: syncing$8,
  synonym: synonym$8,
  synonyms: synonyms$8,
  tap_allow_in_wechat: tap_allow_in_wechat$8,
  target_language: target_language$8,
  template_download: template_download$8,
  test: test$8,
  this_week_record: this_week_record$8,
  time: time$8,
  title: title$8,
  to_manage_extensions: to_manage_extensions$8,
  today_study_time: today_study_time$8,
  today_task: today_task$8,
  today_task_complete: today_task_complete$8,
  toggle_dictation_mode: toggle_dictation_mode$8,
  toggle_theme: toggle_theme$8,
  toggle_translation: toggle_translation$8,
  total: total$8,
  total_items: total_items$8,
  total_learning_time: total_learning_time$8,
  total_study_days: total_study_days$8,
  total_study_time: total_study_time$8,
  total_words: total_words$8,
  translate: translate$8,
  translate_sentence: translate_sentence$8,
  translate_word: translate_word$8,
  translation: translation$8,
  translation_complete: translation_complete$8,
  try_incognito_mode: try_incognito_mode$8,
  tv_movie: tv_movie$8,
  twitter: twitter$8,
  two: two$8,
  uk_accent: uk_accent$8,
  uncollect: uncollect$8,
  unmark_mastered: unmark_mastered$8,
  update_log: update_log$8,
  upload_audio: upload_audio$8,
  upload_lrc: upload_lrc$8,
  us_accent: us_accent$8,
  usage_guide: usage_guide$8,
  use_prev_end_seconds: use_prev_end_seconds$8,
  use_prev_end_time: use_prev_end_time$8,
  user_agreement: user_agreement$8,
  volume: volume$8,
  wait_translation: wait_translation$8,
  warm_tips: warm_tips$8,
  wechat_group: wechat_group$8,
  wechat_qrcode: wechat_qrcode$8,
  wechat_scan_login: wechat_scan_login$8,
  weekly_record: weekly_record$8,
  weekly_study_record: weekly_study_record$8,
  where_is_data: where_is_data$8,
  word: word$8,
  word_auto_pronunciation: word_auto_pronunciation$8,
  word_import_template: word_import_template$8,
  word_list: word_list$8,
  word_repeat_setting: word_repeat_setting$8,
  word_root: word_root$8,
  word_settings: word_settings$8,
  words: words$8,
  words_comma_separated: words_comma_separated$8,
  words_count: words_count$8,
  xiaohongshu: xiaohongshu$8,
  xiaohongshu_desc: xiaohongshu_desc$8,
  xiaohongshu_qrcode: xiaohongshu_qrcode$8,
  youdao_translate: youdao_translate$8
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$7 = "Изучайте английский, одно нажатие за раз, инструмент с открытым исходным кодом";
var app_name$7 = "Type Words";
var start_word_practice$7 = "Начать практику слов";
var start_article_practice$7 = "Начать практику статей";
var home_word_practice$7 = "Практика слов";
var home_word_practice_desc1$7 = "Режимы: Печать/Диктант/Самотест/Декламация";
var home_word_practice_desc2$7 = "Умное обучение: Интеллектуальное планирование";
var home_word_practice_desc3$7 = "Свободное обучение: Без ограничений";
var home_article_practice$7 = "Практика статей";
var home_article_practice_desc1$7 = "Встроенные книги, добавление статей";
var home_article_practice_desc2$7 = "Двойной режим: печать + декламация";
var home_article_practice_desc3$7 = "Слушать во время декламации";
var home_collection$7 = "Избранное, Ошибки, Освоенные";
var home_collection_desc1$7 = "Ошибки автоматически добавляются";
var home_collection_desc2$7 = "Добавить в освоенные, пропускать потом";
var home_collection_desc3$7 = "Добавить в избранное для повторения";
var home_vocabulary$7 = "Огромный словарный запас";
var home_vocabulary_desc$7 = "Встроенный словарь от начального до продвинутого";
var home_free_opensource$7 = "Бесплатно и открытый код";
var home_free_opensource_desc1$7 = "Полностью открытый исходный код";
var home_free_opensource_desc2$7 = "Бесплатное использование";
var home_free_opensource_desc3$7 = "Частное развертывание";
var home_customization$7 = "Высокая настраиваемость";
var home_customization_desc1$7 = "Богатые звуковые эффекты";
var home_customization_desc2$7 = "Настраиваемые горячие клавиши";
var home_customization_desc3$7 = "Высоко настраиваемые параметры";
var home_design$7 = "Простой и эффективный";
var home_design_desc1$7 = "Простой дизайн, современный интерфейс";
var home_design_desc2$7 = "Чистый интерфейс, простое управление";
var home_design_desc3$7 = "Нет принудительной подписки";
var home_personalized$7 = "Персонализированное обучение";
var home_personalized_desc1$7 = "Свободно добавлять словари и статьи";
var home_personalized_desc2$7 = "Настроить план обучения";
var home_personalized_desc3$7 = "Множество стратегий обучения";
var cn_limit_no1$7 = "川公网安备51015602001426号";
var cn_limit_no2$7 = "蜀ICP备2025157466号-2";
var setting$7 = "Настройки";
var edit$7 = "Редактировать";
var cancel$7 = "Отмена";
var confirm$7 = "Подтвердить";
var save$7 = "Сохранить";
var close$7 = "Закрыть";
var search$7 = "Поиск";
var more$7 = "Ещё";
var loading$7 = "Загрузка";
var introduction$7 = "Введение";
var learn$7 = "Учить";
var practice$7 = "Практика";
var test$7 = "Тест";
var feedback$7 = "Обратная связь";
var document$7 = "Ресурсы";
var help$7 = "Помощь";
var about$7 = "О нас";
var login$7 = "Войти";
var register$7 = "Регистрация";
var register_account$7 = "Зарегистрировать аккаунт";
var register_new_account$7 = "Зарегистрировать новый аккаунт";
var code_login$7 = "Вход по коду";
var password_login$7 = "Вход по паролю";
var phone_placeholder$7 = "Введите номер телефона";
var code_placeholder$7 = "Введите код подтверждения";
var account_placeholder$7 = "Введите телефон/email";
var password_placeholder$7 = "Введите пароль";
var auto_register_notice$7 = "Незарегистрированный телефон будет автоматически зарегистрирован";
var forgot_password$7 = "Забыли пароль?";
var reset_password$7 = "Сбросить пароль";
var set_password_placeholder$7 = "Установите пароль";
var confirm_password_placeholder$7 = "Подтвердите пароль";
var new_password_placeholder$7 = "Введите новый пароль";
var confirm_new_password$7 = "Подтвердите новый пароль";
var wechat_scan_login$7 = "Вход по QR WeChat";
var scan_success$7 = "Сканирование успешно";
var tap_allow_in_wechat$7 = "Нажмите разрешить в WeChat";
var login_cancelled$7 = "Вход отменен";
var login_again$7 = "Войти снова";
var sync_data$7 = "Синхронизация данных";
var local_data_detected$7 = "Обнаружены локальные данные";
var sync_to_account_question$7 = "Синхронизировать с аккаунтом?";
var no_sync$7 = "Не синхронизировать";
var sync$7 = "Синхронизация";
var syncing$7 = "Синхронизация";
var sync_failed$7 = "Ошибка синхронизации";
var sync_success$7 = "Синхронизация успешна";
var enter_website$7 = "Войти на сайт";
var general_settings$7 = "Общие настройки";
var word_settings$7 = "Настройки слов";
var article_settings$7 = "Настройки статей";
var data_management$7 = "Управление данными";
var shortcut_settings$7 = "Настройки горячих клавиш";
var update_log$7 = "Журнал обновлений";
var shortcut_key$7 = "Горячая клавиша (нажмите для изменения)";
var no_shortcut_set$7 = "Горячая клавиша не установлена";
var press_key_to_set$7 = "Нажмите клавишу для установки";
var click_here_when_done$7 = "Нажмите сюда по завершении";
var restore_default$7 = "Восстановить по умолчанию";
var data_saved_locally$7 = "Все данные сохраняются локально в браузере";
var export_data_backup$7 = "Экспорт резервной копии (ZIP)";
var import_data_restore$7 = "Импорт восстановления данных";
var import_warning$7 = "Импорт перезапишет все данные";
var words$7 = "Слова";
var no_dict_selected$7 = "Словарь не выбран";
var select_dict_to_start$7 = "Выберите словарь для начала";
var select_dict$7 = "Выбрать словарь";
var change_progress$7 = "Изменить прогресс";
var estimated_completion$7 = "Расчетное завершение";
var current_progress$7 = "Текущий прогресс";
var learned$7 = "Изучено";
var completed_review_stage$7 = "Завершено, переход к повторению";
var today_task$7 = "Задание на сегодня";
var last_task$7 = "Последнее задание";
var word_list$7 = "Список слов";
var daily_goal$7 = "Дневная цель";
var words_count$7 = "слов";
var change$7 = "Изменить";
var new_words_count$7 = "Новые слова";
var review_last$7 = "Повторить последние";
var review_previous$7 = "Повторить предыдущие";
var start_learning$7 = "Начать обучение";
var continue_learning$7 = "Продолжить обучение";
var free_practice$7 = "Свободная практика";
var continue_free_practice$7 = "Продолжить свободную практику";
var smart_learning$7 = "Умное обучение";
var review$7 = "Повторить";
var random_review$7 = "Случайное повторение";
var my_dictionaries$7 = "Мои словари";
var manage_dict$7 = "Управление словарями";
var create_personal_dict$7 = "Создать личный словарь";
var recommend$7 = "Рекомендовать";
var articles$7 = "Статьи";
var this_week_record$7 = "Запись этой недели";
var change_book$7 = "Изменить";
var today_study_time$7 = "Время обучения сегодня";
var total_study_days$7 = "Всего дней обучения";
var total_study_time$7 = "Общее время обучения";
var my_books$7 = "Мои книги";
var manage_books$7 = "Управление книгами";
var create_personal_book$7 = "Создать личную книгу";
var article_management$7 = "Управление статьями";
var toggle_translation$7 = "Переключить перевод";
var switch_display_mode$7 = "Переключить режим отображения";
var line_by_line$7 = "Построчно";
var single_line$7 = "Одна строка";
var comparison$7 = "Сравнение";
var question$7 = "Вопрос";
var study_record$7 = "Запись обучения";
var play_next_after_end$7 = "Воспроизвести следующую после окончания";
var create_book$7 = "Создать книгу";
var edit_book$7 = "Редактировать книгу";
var dict_list$7 = "Список словарей";
var book_list$7 = "Список книг";
var word$7 = "Слова";
var phonetic$7 = "Фонетика";
var translation$7 = "Перевод";
var example_sentence$7 = "Пример предложения";
var phrase$7 = "Фраза";
var synonym$7 = "Синоним";
var related_words$7 = "Связанные слова";
var etymology$7 = "Этимология";
var add_word$7 = "Добавить слово";
var edit_word$7 = "Редактировать слово";
var create_dict$7 = "Создать словарь";
var edit_dict$7 = "Редактировать словарь";
var faq$7 = "Часто задаваемые вопросы";
var is_free$7 = "Сайт бесплатный?";
var cannot_type$7 = "Не могу печатать, клавиатура не отвечает?";
var where_is_data$7 = "Где данные? Как использовать на нескольких устройствах?";
var resource_sharing$7 = "Обмен ресурсами";
var all_resources$7 = "Все ресурсы";
var new_concept_english$7 = "Новый концепт английского";
var tv_movie$7 = "ТВ/Фильм";
var grammar_learning$7 = "Изучение грамматики";
var listening_training$7 = "Тренировка аудирования";
var warm_tips$7 = "Советы";
var resources_from_internet$7 = "Все ресурсы собраны из интернета, только для обучения";
var toggle_theme$7 = "Сменить тему";
var english_document$7 = "Ресурсы на английском";
var empty_placeholder$7 = "Здесь пусто~";
var custom$7 = "Пользовательский";
var back$7 = "Назад";
var total_items$7 = "элементов";
var batch_delete$7 = "Пакетное удаление";
var confirm_delete_selected$7 = "Подтвердить удаление всех выбранных?";
var change_order$7 = "Изменить порядок";
var list_order_setting$7 = "Настройки порядка списка";
var reverse_current_page$7 = "Перевернуть текущую страницу";
var reverse_all$7 = "Перевернуть все";
var random_current_page$7 = "Перемешать текущую страницу";
var random_all$7 = "Перемешать все";
var apply$7 = "Применить";
var add$7 = "Добавить";
var collect$7 = "Избранное";
var uncollect$7 = "Убрать из избранного";
var mark_mastered$7 = "Отметить как освоенное";
var unmark_mastered$7 = "Снять отметку освоенного";
var about_thanks$7 = "Спасибо за использование проекта! Это проект с открытым кодом, бесплатный. Если нашли полезным, поставьте звезду на GitHub!";
var github_address$7 = "GitHub:";
var about_wechat_feedback$7 = "Отзыв в WeChat:";
var about_ticket_feedback$7 = "Отзыв через тикет:";
var about_other_channels$7 = "Другие каналы:";
var wait_translation$7 = "Пожалуйста, дождитесь завершения перевода";
var migrate_data$7 = "Перенос данных";
var migrate_new_domain$7 = "У этого сайта новый домен";
var migrate_old_domain_notice$7 = "Старый домен будет отключен. Из-за ограничений безопасности браузера данные не могут быть переданы между сайтами. Перенесите данные вручную.";
var migrate_later_notice$7 = "Если вы не хотите переносить сейчас, закройте это окно и перенесите позже в \"Настройки\" -> \"Управление данными\"";
var author$7 = "Автор:";
var features$7 = "Особенности:";
var suitable_for$7 = "Подходит для:";
var open_link$7 = "Открыть ссылку";
var qq_group$7 = "Группа QQ";
var xiaohongshu$7 = "Xiaohongshu";
var follow_x_account$7 = "Подписаться на X аккаунт {x_account}";
var twitter$7 = "Twitter";
var send_email$7 = "Отправить письмо на {email}";
var email$7 = "Почта";
var xiaohongshu_desc$7 = "Подпишитесь на нас в Xiaohongshu, чтобы получать последние обновления от команды разработчиков, делитесь опытом и предложениями";
var xiaohongshu_qrcode$7 = "QR-код Xiaohongshu";
var community_desc$7 = "Присоединяйтесь к нашему сообществу для общения с командой разработчиков, делитесь опытом и предложениями";
var qq_qrcode$7 = "QR-код группы QQ";
var wechat_group$7 = "Группа WeChat";
var wechat_qrcode$7 = "QR-код группы WeChat";
var github_project$7 = "Проект GitHub";
var ie_not_supported$7 = "Браузер IE не поддерживается";
var ie_use_modern_browser$7 = "Type Words создан с использованием современных технологий, используйте Chrome, Edge, Firefox или другие современные браузеры";
var download_chrome$7 = "Скачать Chrome";
var i_understand$7 = "Понятно";
var ignore_case$7 = "Игнорировать регистр";
var ignore_case_desc$7 = "При включении ввод не учитывает регистр. Например, \"hello\" и \"Hello\" считаются правильными";
var allow_dictation_tip$7 = "Разрешить подсказки в режиме диктанта";
var allow_dictation_tip_desc$7 = "При включении вы можете навести курсор на слово или нажать клавишу для показа правильного ответа";
var simple_word_filter$7 = "Фильтр простых слов";
var simple_word_filter_desc$7 = "При включении простые слова исключаются из практики; простые слова не учитываются в статистике статей";
var simple_word_list$7 = "Список простых слов";
var words_comma_separated$7 = "Несколько слов через запятую";
var sound_effect$7 = "Звуковые эффекты";
var pronunciation_accent$7 = "Акцент произношения";
var pronunciation_accent_desc$7 = "Влияет только на произношение слов; статьи используют американский акцент";
var please_select$7 = "Пожалуйста, выберите";
var us_accent$7 = "Американский";
var uk_accent$7 = "Британский";
var keyboard_sound$7 = "Звук клавиш";
var keyboard_sound_effect$7 = "Эффект звука клавиш";
var volume$7 = "Громкость";
var show_prev_next_word$7 = "Показать предыдущее/следующее слово";
var show_prev_next_word_desc$7 = "При включении предыдущее и следующее слова будут показаны сверху во время практики";
var disable_practice_setting_dialog$7 = "Не показывать диалог настроек практики по умолчанию";
var disable_practice_setting_dialog_desc$7 = "На странице деталей словаря, показывать ли диалог настроек практики после нажатия кнопки учить";
var clear_input_on_error$7 = "Очистить ввод при ошибке";
var word_repeat_setting$7 = "Настройки повторения слов";
var repeat_count$7 = "Количество повторений";
var review_ratio$7 = "Соотношение повторения";
var review_ratio_desc$7 = "Соотношение повторяемых слов к новым. Изменения вступят в силу в следующей сессии";
var word_auto_pronunciation$7 = "Автоматическое произношение";
var speed$7 = "Скорость";
var effect_sound$7 = "Звуки эффектов (звуки ошибки и завершения)";
var auto_switch$7 = "Автопереключение";
var auto_next_word$7 = "Автоматически следующее слово";
var auto_next_word_desc$7 = "Работает только в режиме следования. Диктант, самопроверка и письмо требуют нажатия пробела для продолжения";
var auto_next_word_time$7 = "Время автоперехода к следующему слову";
var auto_next_word_time_desc$7 = "Время автоматического перехода к следующему слову после правильного ввода";
var milliseconds$7 = "мс";
var font_setting$7 = "Настройки шрифта";
var foreign_font$7 = "Шрифт иностранного языка";
var chinese_font$7 = "Китайский шрифт";
var auto_play_sentence$7 = "Автовоспроизведение предложения";
var ignore_symbols_numbers_names$7 = "Игнорировать символы, числа и имена при вводе";
var settings$7 = "Настройки";
var please_select_dict$7 = "Сначала выберите словарь";
var learning_settings$7 = "Настройки обучения";
var total$7 = "Всего";
var estimated$7 = "Примерно";
var days_to_complete$7 = "дней до завершения";
var from_word$7 = "Начиная со слова";
var start_daily$7 = ", ежедневно";
var new_words$7 = "новых слов";
var review_ratio_tooltip$7 = "Соотношение повторяемых слов к новым";
var review_ratio_notice_1$7 = "Когда обучение не завершено, количество повторений генерируется согласно установленному соотношению. Если 0, без повторения";
var review_ratio_notice_2$7 = "После завершения обучения количество новых слов фиксируется на 0, количество повторений генерируется по соотношению (если < 1, считается как 1)";
var daily_learning$7 = "Ежедневное обучение";
var learning_progress$7 = "Прогресс обучения";
var select_from_dict$7 = "Выберите начальную позицию из словаря";
var change_in_settings$7 = "Можно изменить на странице настроек";
var keep_default_no_show$7 = "Оставить по умолчанию, больше не показывать";
var review_complete$7 = "Повторение завершено";
var today_task_complete$7 = "Задание на сегодня выполнено";
var study_duration$7 = "Продолжительность обучения";
var accuracy_rate$7 = "Точность";
var weekly_study_record$7 = "Еженедельная запись обучения";
var studied$7 = "Изучено";
var total_words$7 = "Всего слов";
var restart_learning$7 = "Начать обучение заново";
var another_round$7 = "Ещё раз";
var return_home$7 = "Вернуться на главную";
var import_tutorial$7 = "Руководство по импорту";
var import_follow_template$7 = "Заполните данные в соответствии с форматом шаблона";
var import_word_required$7 = "Поле слова обязательно, остальные поля необязательны";
var import_translation_hint$7 = "Перевод: один перевод на строку, сначала часть речи, затем содержание (например, n.cancel); несколько переводов на отдельных строках";
var import_example_hint$7 = "Пример: одна строка для оригинала, одна строка для перевода; несколько примеров на отдельных строках";
var import_phrase_hint$7 = "Фраза: одна строка для оригинала, одна строка для перевода; несколько фраз на отдельных строках";
var two$7 = "два";
var lines$7 = "строки";
var import_other_hint$7 = "Синонимы, однокоренные слова, этимология: перейдите в официальный словарь, затем отредактируйте слово, чтобы увидеть формат";
var template_download$7 = "Скачать шаблон";
var word_import_template$7 = "Шаблон импорта слов";
var conflict_notice_title$7 = "Если во время использования вы столкнулись со следующими проблемами:";
var keyboard_no_response$7 = "Клавиатура не реагирует";
var check_plugins_installed$7 = "Проверьте, установлены ли у вас";
var conflict_plugin_names$7 = "\"Регулятор скорости видео\" \"Vim\" \"Улучшитель аудио/видео\" \"Помощник онлайн-курсов\"";
var plugins_intercept_keyboard$7 = "и другие плагины/скрипты, перехватывающие события клавиатуры,";
var cause_no_response$7 = "что приводит к отсутствию реакции при практике на этом сайте";
var follow_steps_to_resolve$7 = ", выполните следующие шаги для решения конфликта:";
var try_incognito_mode$7 = "Откройте этот сайт в режиме инкогнито браузера и проверьте, можете ли вы нормально печатать?";
var incognito_not_working$7 = "Не удается печатать в режиме инкогнито,";
var click_here$7 = "нажмите здесь";
var feedback_or_wechat$7 = "для отправки отзыва или присоединитесь к группе WeChat:";
var incognito_working$7 = "Можно печатать в режиме инкогнито, значит это конфликт плагина/скрипта";
var disable_plugin_or_exclude$7 = "Временно отключите соответствующий плагин/скрипт или исключите этот сайт в настройках плагина/скрипта";
var install_extension_manager$7 = "Вы можете установить это";
var chrome_extension$7 = "расширение (версия Chrome, требуется VPN)";
var edge_extension$7 = "расширение (версия Edge, VPN не требуется)";
var to_manage_extensions$7 = "для быстрого включения/отключения других расширений";
var delete_key_goes_back$7 = "Нажатие клавиши Delete возвращает на предыдущую страницу";
var browser_360_shortcut$7 = "В браузере 360 сочетание клавиш \"Delete возвращает на предыдущую страницу\" установлено по умолчанию";
var change_browser_or_shortcut$7 = "Либо смените браузер, либо удалите сочетание клавиш 360 по умолчанию: найдите \"назад\" в настройках браузера";
var please_enter_name$7 = "Пожалуйста, введите имя";
var name_max_20_chars$7 = "Имя не может превышать 20 символов";
var name_already_exists$7 = "Имя уже существует!";
var add_success$7 = "Добавлено успешно";
var edit_success$7 = "Изменено успешно";
var edit_and_add_to_dict$7 = "Изменено успешно и добавлено в мой словарь";
var please_fill_complete$7 = "Пожалуйста, заполните полностью";
var name$7 = "Имя";
var description$7 = "Описание";
var source_language$7 = "Исходный язык";
var target_language$7 = "Целевой язык";
var english$7 = "Английский";
var german$7 = "Немецкий";
var japanese$7 = "Японский";
var code$7 = "Код";
var chinese$7 = "Китайский";
var multiple_choice$7 = "Множественный выбор";
var start$7 = "Начать";
var countdown$7 = "Обратный отсчёт";
var seconds$7 = "секунд";
var submit_exam$7 = "Отправить экзамен";
var exam_color_hint$7 = "Светло-красный: неверно, Тёмно-красный: не выбрано, Зелёный: верно";
var items_per_page$7 = "записей/страница";
var jump_to$7 = "Перейти к";
var page_or_index$7 = "страница/номер";
var please_fill_original$7 = "Пожалуйста, заполните оригинальный текст!";
var please_fill_title$7 = "Пожалуйста, заполните заголовок!";
var please_fill_content$7 = "Пожалуйста, заполните содержание!";
var audio_added_success$7 = "Аудио успешно добавлено";
var lrc_parse_success$7 = "LRC файл успешно разобран";
var original_text$7 = "Оригинальный текст";
var title$7 = "Заголовок";
var please_fill_original_title$7 = "Пожалуйста, заполните оригинальный заголовок";
var content$7 = "Содержание";
var one_sentence_per_line$7 = "Одно предложение на строку, оставьте пустую строку между абзацами";
var name_config_tip$7 = "После настройки имена будут автоматически игнорироваться во время практики (опционально, включено по умолчанию)";
var name_config$7 = "Настройка имён";
var please_paste_original$7 = "Пожалуйста, вставьте оригинальный текст";
var usage_guide$7 = "Руководство по использованию";
var copy_and_split$7 = "Скопируйте оригинальный текст, затем разделите на предложения";
var click$7 = "Нажмите";
var split_sentence$7 = "Разделить предложение";
var auto_split$7 = "кнопка для автоматического разделения";
var or$7 = "или";
var manual_split$7 = "вручную отредактировать для разделения";
var split_rule$7 = "Правило разделения: одно предложение на строку, пустая строка между абзацами";
var after_edit_click$7 = "После редактирования нажмите";
var sync_to_result$7 = "кнопка для синхронизации с левой панелью результатов";
var please_fill_translation_title$7 = "Пожалуйста, заполните заголовок перевода";
var please_fill_translation$7 = "Пожалуйста, заполните перевод";
var translate$7 = "Перевод";
var copy_translation_or_click$7 = "Вставьте перевод или нажмите, если нет";
var result$7 = "Результат";
var editable_auto_sync$7 = "Всё редактируемо, нажмите кнопку применить для автосинхронизации после редактирования";
var audio$7 = "Аудио";
var audio_management$7 = "Управление аудио";
var paragraph$7 = "Абзац";
var set_start_time$7 = "Установить время начала";
var use_prev_end_time$7 = "Использовать время окончания предыдущего предложения";
var minus_03s$7 = "Минус 0,3с";
var end$7 = "Конец";
var set_end_time$7 = "Установить время окончания";
var edit_audio_align$7 = "Редактировать выравнивание аудио";
var play$7 = "Воспроизвести";
var status$7 = "Статус";
var sentences_not_translated$7 = "{count} предложений не переведено!";
var translation_complete$7 = "Перевод завершён!";
var save_and_next$7 = "Сохранить и добавить следующее";
var no_translation_comparison$7 = "Сравнение переводов недоступно";
var adjust_audio_timeline$7 = "Настроить временную шкалу аудио";
var audio_timeline_tutorial$7 = "Урок: Нажмите воспроизвести, когда аудио достигнет начала предложения, нажмите записать время начала; когда достигнет конца, нажмите записать время окончания";
var start_time$7 = "Время начала";
var jump_to_seconds$7 = "Перейти к {seconds}с";
var use_prev_end_seconds$7 = "Использовать время окончания предыдущего предложения: {seconds}с";
var decrease_03s$7 = "Уменьшить на 0,3с";
var increase_03s$7 = "Увеличить на 0,3с";
var record$7 = "Записать";
var end_time$7 = "Время окончания";
var audio_upload_notice$7 = "1. Загруженные файлы сохраняются локально, данные будут потеряны при смене компьютера, пожалуйста, делайте резервные копии\n2. Поддерживает mp3, wav, m4a и другие распространённые аудиоформаты";
var upload_audio$7 = "Загрузить аудио";
var upload_lrc$7 = "Загрузить LRC файл";
var name_management$7 = "Управление именами";
var name_ignore_config_desc$7 = "Настройте имена для игнорирования, эти имена будут автоматически пропускаться во время практики (опционально, включено по умолчанию)";
var add_name$7 = "Добавить имя";
var enter_name$7 = "Введите имя";
var collect_word$7 = "Собрать слово";
var copy$7 = "Копировать";
var copy_sentence$7 = "Копировать предложение";
var copied$7 = "Скопировано";
var copy_word$7 = "Копировать слово";
var start_from_here$7 = "Начать отсюда";
var play_sentence$7 = "Воспроизвести предложение";
var grammar_analysis$7 = "Грамматический анализ";
var copied_open_grammar$7 = "Скопировано! Открывается сайт грамматического анализа!";
var youdao_translate$7 = "Словарь Youdao";
var translate_word$7 = "Перевести слово";
var translate_sentence$7 = "Перевести предложение";
var restart_practice$7 = "Перезапустить практику";
var next_article$7 = "Следующая статья";
var learning_record$7 = "Запись обучения";
var total_learning_time$7 = "Общее время обучения";
var current$7 = "Текущий";
var show_questions$7 = "Показать вопросы";
var explanation$7 = "Объяснение";
var encouragement_95$7 = "Отлично! Так держать!";
var encouragement_85$7 = "Отличная работа, продолжайте!";
var encouragement_70$7 = "Хороший результат, продолжайте!";
var encouragement_default$7 = "Каждая практика — это прогресс, продолжайте!";
var daily_task_complete$7 = "Ежедневное задание выполнено";
var weekly_record$7 = "Запись обучения за неделю";
var study_progress$7 = "Прогресс обучения";
var relearn$7 = "Переучить";
var start_from_beginning$7 = "Начать сначала";
var another_group$7 = "Ещё одна группа";
var back_to_home$7 = "Вернуться на главную";
var know_word_tip$7 = "Если вы ошибочно выбрали \"Я знаю\", нажмите клавишу Delete для повторного выбора!";
var press_delete_reinput$7 = "Нажмите клавишу Delete для повторного ввода";
var press_space_continue$7 = "Нажмите пробел для продолжения";
var shortcut$7 = "Быстрая клавиша";
var i_know$7 = "Я знаю";
var i_dont_know$7 = "Не знаю";
var phrases$7 = "Фразы";
var synonyms$7 = "Синонимы";
var word_root$7 = "Корень слова";
var review_wrong_words$7 = "Повторить неправильные слова";
var collapse$7 = "Свернуть";
var expand$7 = "Развернуть";
var minutes$7 = "минут";
var time$7 = "Время";
var errors$7 = "Ошибки";
var skip_to_next_stage$7 = "Перейти к следующему этапу";
var skip_word$7 = "Пропустить слово";
var toggle_dictation_mode$7 = "Переключить режим диктанта";
var send_failed$7 = "Отправка не удалась";
var send_code_failed$7 = "Не удалось отправить код подтверждения";
var sending$7 = "Отправка";
var send_code$7 = "Отправить код";
var agree_terms_notice$7 = "Продолжая, вы соглашаетесь с нашими";
var user_agreement$7 = "Пользовательское соглашение";
var and$7 = "и";
var privacy_policy$7 = "Политика конфиденциальности";
var important_notice$7 = "Важное уведомление";
var dont_remind$7 = "Больше не напоминать";
var function_desc$7 = "Функции";
var qa1_a$7 = "Сайт бесплатный?";
var qa1_q1$7 = "Не полностью бесплатно. Для долгосрочного развития будущие платежи неизбежны, но оплата не будет обязательной. Мы стараемся найти баланс между бесплатным и платным.";
var qa1_q2$7 = "Проект с открытым исходным кодом, вы можете развернуть его самостоятельно.";
var qa2_a$7 = "Не удается печатать, клавиатура не реагирует?";
var qa3_a$7 = "Где данные? Как использовать на нескольких компьютерах/устройствах?";
var qa3_q1$7 = "Все данные пользователя сохраняются в локальном браузере. Если вам нужно использовать Type Words на разных устройствах или браузерах, вам нужно вручную экспортировать и импортировать данные.";
var qa3_q2$7 = "Настройки -> Настройки данных -> Экспорт данных на исходном компьютере -> Отправить на новый компьютер через мессенджер -> Импорт на новом компьютере";
var qa3_q3$7 = "Система аккаунтов находится в разработке.";
var qa4_a$7 = "Сайт автоматически планирует слишком много слов, как изменить?";
var qa4_q1$7 = "Соотношение слов для повторения к новым словам по умолчанию 1:4.";
var qa4_q2$7 = "Вы можете изменить это в Настройки -> Настройки слов -> Соотношение повторения";
var qa5_a$7 = "Завершение одной учебной сессии занимает слишком много времени, процесс слишком длинный?";
var qa5_q1$7 = "Это действительно проблема. Длинный процесс может заставить людей потерять мотивацию.";
var qa5_q2$7 = "Неправильные слова будут повторяться. Если это была просто опечатка, вы можете нажать Tab, чтобы пропустить.";
var qa5_q3$7 = "Во время повторения только слова, отмеченные как \"не знаю\", требуют диктанта.";
var qa5_q4$7 = "После запуска системы аккаунтов будет добавлена функция кривой памяти Эббингауза.";
var qa6_a$7 = "Будет ли добавлена функция кривой памяти Эббингауза?";
var qa7_a$7 = "Могу ли я добавлять слова/пользовательские словари/импортировать свои слова?";
var qa7_q1$7 = "Да, на странице Слова нажмите \"Создать личный словарь\"";
var qa7_q2$7 = "После создания нажмите значок \"Добавить слово\", чтобы добавить свои слова";
var qa7_q3$7 = "Вы также можете нажать значок \"Импорт\" для пакетного импорта";
var qa8_a$7 = "Могу ли я добавлять статьи/пользовательские книги/импортировать свои статьи?";
var qa8_q1$7 = "Да, шаги в основном такие же, как при добавлении слов";
var qa8_q2$7 = "На странице Статьи нажмите \"Создать личную книгу\"";
var qa8_q3$7 = "После создания нажмите кнопку \"Управление статьями\" вверху";
var qa9_a$7 = "Как отключить звуки клавиш?";
var qa9_q$7 = "Настройки -> Общие настройки -> Звуковые эффекты -> Звук клавиш, отключите его";
var qa10_a$7 = "Могу ли я использовать его на планшете?";
var qa10_q1$7 = "Планшеты можно использовать, но использование Bluetooth-клавиатуры обеспечивает лучший опыт.";
var qa10_q2$7 = "После подключения Bluetooth-клавиатуры на Android-планшетах необходимо вручную включить \"Режим рабочего стола\".";
var qa11_a$7 = "Могу ли я использовать его на телефоне?";
var qa11_q$7 = "Телефоны можно использовать, но оптимизация еще не выполнена. Рекомендуется использовать на компьютере или планшете.";
var qa12_a$7 = "Есть ли приложение или мини-программа?";
var qa12_q$7 = "Нет, только веб-сайт";
var qa13_a$7 = "Как предоставить отзыв команде разработчиков?";
var qa13_q1$7 = "Вы можете присоединиться к нашей официальной группе WeChat, подробно описать желаемые функции";
var qa13_q2$7 = "Если вы обнаружите ошибки в приложении, пожалуйста, предоставьте подробное описание и шаги для воспроизведения";
var qa13_q3$7 = "Вы также можете отправить нам заявку в службу поддержки";
var qa13_q4$7 = "Вы также можете отправить на github/issues";
const ru = {
	app_desc: app_desc$7,
	app_name: app_name$7,
	start_word_practice: start_word_practice$7,
	start_article_practice: start_article_practice$7,
	home_word_practice: home_word_practice$7,
	home_word_practice_desc1: home_word_practice_desc1$7,
	home_word_practice_desc2: home_word_practice_desc2$7,
	home_word_practice_desc3: home_word_practice_desc3$7,
	home_article_practice: home_article_practice$7,
	home_article_practice_desc1: home_article_practice_desc1$7,
	home_article_practice_desc2: home_article_practice_desc2$7,
	home_article_practice_desc3: home_article_practice_desc3$7,
	home_collection: home_collection$7,
	home_collection_desc1: home_collection_desc1$7,
	home_collection_desc2: home_collection_desc2$7,
	home_collection_desc3: home_collection_desc3$7,
	home_vocabulary: home_vocabulary$7,
	home_vocabulary_desc: home_vocabulary_desc$7,
	home_free_opensource: home_free_opensource$7,
	home_free_opensource_desc1: home_free_opensource_desc1$7,
	home_free_opensource_desc2: home_free_opensource_desc2$7,
	home_free_opensource_desc3: home_free_opensource_desc3$7,
	home_customization: home_customization$7,
	home_customization_desc1: home_customization_desc1$7,
	home_customization_desc2: home_customization_desc2$7,
	home_customization_desc3: home_customization_desc3$7,
	home_design: home_design$7,
	home_design_desc1: home_design_desc1$7,
	home_design_desc2: home_design_desc2$7,
	home_design_desc3: home_design_desc3$7,
	home_personalized: home_personalized$7,
	home_personalized_desc1: home_personalized_desc1$7,
	home_personalized_desc2: home_personalized_desc2$7,
	home_personalized_desc3: home_personalized_desc3$7,
	cn_limit_no1: cn_limit_no1$7,
	cn_limit_no2: cn_limit_no2$7,
	setting: setting$7,
	edit: edit$7,
	"delete": "Удалить",
	cancel: cancel$7,
	confirm: confirm$7,
	save: save$7,
	close: close$7,
	search: search$7,
	more: more$7,
	loading: loading$7,
	introduction: introduction$7,
	learn: learn$7,
	practice: practice$7,
	test: test$7,
	feedback: feedback$7,
	document: document$7,
	help: help$7,
	about: about$7,
	login: login$7,
	register: register$7,
	register_account: register_account$7,
	register_new_account: register_new_account$7,
	code_login: code_login$7,
	password_login: password_login$7,
	phone_placeholder: phone_placeholder$7,
	code_placeholder: code_placeholder$7,
	account_placeholder: account_placeholder$7,
	password_placeholder: password_placeholder$7,
	auto_register_notice: auto_register_notice$7,
	forgot_password: forgot_password$7,
	reset_password: reset_password$7,
	set_password_placeholder: set_password_placeholder$7,
	confirm_password_placeholder: confirm_password_placeholder$7,
	new_password_placeholder: new_password_placeholder$7,
	confirm_new_password: confirm_new_password$7,
	wechat_scan_login: wechat_scan_login$7,
	scan_success: scan_success$7,
	tap_allow_in_wechat: tap_allow_in_wechat$7,
	login_cancelled: login_cancelled$7,
	login_again: login_again$7,
	sync_data: sync_data$7,
	local_data_detected: local_data_detected$7,
	sync_to_account_question: sync_to_account_question$7,
	no_sync: no_sync$7,
	sync: sync$7,
	syncing: syncing$7,
	sync_failed: sync_failed$7,
	sync_success: sync_success$7,
	enter_website: enter_website$7,
	general_settings: general_settings$7,
	word_settings: word_settings$7,
	article_settings: article_settings$7,
	data_management: data_management$7,
	shortcut_settings: shortcut_settings$7,
	update_log: update_log$7,
	"function": "Функция",
	shortcut_key: shortcut_key$7,
	no_shortcut_set: no_shortcut_set$7,
	press_key_to_set: press_key_to_set$7,
	click_here_when_done: click_here_when_done$7,
	restore_default: restore_default$7,
	data_saved_locally: data_saved_locally$7,
	export_data_backup: export_data_backup$7,
	import_data_restore: import_data_restore$7,
	import_warning: import_warning$7,
	words: words$7,
	no_dict_selected: no_dict_selected$7,
	select_dict_to_start: select_dict_to_start$7,
	select_dict: select_dict$7,
	change_progress: change_progress$7,
	estimated_completion: estimated_completion$7,
	current_progress: current_progress$7,
	learned: learned$7,
	completed_review_stage: completed_review_stage$7,
	today_task: today_task$7,
	last_task: last_task$7,
	word_list: word_list$7,
	daily_goal: daily_goal$7,
	words_count: words_count$7,
	change: change$7,
	new_words_count: new_words_count$7,
	review_last: review_last$7,
	review_previous: review_previous$7,
	start_learning: start_learning$7,
	continue_learning: continue_learning$7,
	free_practice: free_practice$7,
	continue_free_practice: continue_free_practice$7,
	smart_learning: smart_learning$7,
	review: review$7,
	random_review: random_review$7,
	my_dictionaries: my_dictionaries$7,
	manage_dict: manage_dict$7,
	create_personal_dict: create_personal_dict$7,
	recommend: recommend$7,
	articles: articles$7,
	this_week_record: this_week_record$7,
	change_book: change_book$7,
	today_study_time: today_study_time$7,
	total_study_days: total_study_days$7,
	total_study_time: total_study_time$7,
	my_books: my_books$7,
	manage_books: manage_books$7,
	create_personal_book: create_personal_book$7,
	article_management: article_management$7,
	toggle_translation: toggle_translation$7,
	switch_display_mode: switch_display_mode$7,
	line_by_line: line_by_line$7,
	single_line: single_line$7,
	comparison: comparison$7,
	question: question$7,
	study_record: study_record$7,
	play_next_after_end: play_next_after_end$7,
	create_book: create_book$7,
	edit_book: edit_book$7,
	dict_list: dict_list$7,
	book_list: book_list$7,
	word: word$7,
	phonetic: phonetic$7,
	translation: translation$7,
	example_sentence: example_sentence$7,
	phrase: phrase$7,
	synonym: synonym$7,
	related_words: related_words$7,
	etymology: etymology$7,
	add_word: add_word$7,
	edit_word: edit_word$7,
	create_dict: create_dict$7,
	edit_dict: edit_dict$7,
	"import": "Импорт",
	"export": "Экспорт",
	faq: faq$7,
	is_free: is_free$7,
	cannot_type: cannot_type$7,
	where_is_data: where_is_data$7,
	resource_sharing: resource_sharing$7,
	all_resources: all_resources$7,
	new_concept_english: new_concept_english$7,
	tv_movie: tv_movie$7,
	grammar_learning: grammar_learning$7,
	listening_training: listening_training$7,
	warm_tips: warm_tips$7,
	resources_from_internet: resources_from_internet$7,
	toggle_theme: toggle_theme$7,
	english_document: english_document$7,
	empty_placeholder: empty_placeholder$7,
	custom: custom$7,
	back: back$7,
	total_items: total_items$7,
	batch_delete: batch_delete$7,
	confirm_delete_selected: confirm_delete_selected$7,
	change_order: change_order$7,
	list_order_setting: list_order_setting$7,
	reverse_current_page: reverse_current_page$7,
	reverse_all: reverse_all$7,
	random_current_page: random_current_page$7,
	random_all: random_all$7,
	apply: apply$7,
	add: add$7,
	collect: collect$7,
	uncollect: uncollect$7,
	mark_mastered: mark_mastered$7,
	unmark_mastered: unmark_mastered$7,
	about_thanks: about_thanks$7,
	github_address: github_address$7,
	about_wechat_feedback: about_wechat_feedback$7,
	about_ticket_feedback: about_ticket_feedback$7,
	about_other_channels: about_other_channels$7,
	wait_translation: wait_translation$7,
	migrate_data: migrate_data$7,
	migrate_new_domain: migrate_new_domain$7,
	migrate_old_domain_notice: migrate_old_domain_notice$7,
	migrate_later_notice: migrate_later_notice$7,
	author: author$7,
	features: features$7,
	suitable_for: suitable_for$7,
	open_link: open_link$7,
	qq_group: qq_group$7,
	xiaohongshu: xiaohongshu$7,
	follow_x_account: follow_x_account$7,
	twitter: twitter$7,
	send_email: send_email$7,
	email: email$7,
	xiaohongshu_desc: xiaohongshu_desc$7,
	xiaohongshu_qrcode: xiaohongshu_qrcode$7,
	community_desc: community_desc$7,
	qq_qrcode: qq_qrcode$7,
	wechat_group: wechat_group$7,
	wechat_qrcode: wechat_qrcode$7,
	github_project: github_project$7,
	ie_not_supported: ie_not_supported$7,
	ie_use_modern_browser: ie_use_modern_browser$7,
	download_chrome: download_chrome$7,
	i_understand: i_understand$7,
	ignore_case: ignore_case$7,
	ignore_case_desc: ignore_case_desc$7,
	allow_dictation_tip: allow_dictation_tip$7,
	allow_dictation_tip_desc: allow_dictation_tip_desc$7,
	simple_word_filter: simple_word_filter$7,
	simple_word_filter_desc: simple_word_filter_desc$7,
	simple_word_list: simple_word_list$7,
	words_comma_separated: words_comma_separated$7,
	sound_effect: sound_effect$7,
	pronunciation_accent: pronunciation_accent$7,
	pronunciation_accent_desc: pronunciation_accent_desc$7,
	please_select: please_select$7,
	us_accent: us_accent$7,
	uk_accent: uk_accent$7,
	keyboard_sound: keyboard_sound$7,
	keyboard_sound_effect: keyboard_sound_effect$7,
	volume: volume$7,
	show_prev_next_word: show_prev_next_word$7,
	show_prev_next_word_desc: show_prev_next_word_desc$7,
	disable_practice_setting_dialog: disable_practice_setting_dialog$7,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$7,
	clear_input_on_error: clear_input_on_error$7,
	word_repeat_setting: word_repeat_setting$7,
	repeat_count: repeat_count$7,
	review_ratio: review_ratio$7,
	review_ratio_desc: review_ratio_desc$7,
	word_auto_pronunciation: word_auto_pronunciation$7,
	speed: speed$7,
	effect_sound: effect_sound$7,
	auto_switch: auto_switch$7,
	auto_next_word: auto_next_word$7,
	auto_next_word_desc: auto_next_word_desc$7,
	auto_next_word_time: auto_next_word_time$7,
	auto_next_word_time_desc: auto_next_word_time_desc$7,
	milliseconds: milliseconds$7,
	font_setting: font_setting$7,
	foreign_font: foreign_font$7,
	chinese_font: chinese_font$7,
	auto_play_sentence: auto_play_sentence$7,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$7,
	settings: settings$7,
	please_select_dict: please_select_dict$7,
	learning_settings: learning_settings$7,
	total: total$7,
	estimated: estimated$7,
	days_to_complete: days_to_complete$7,
	from_word: from_word$7,
	start_daily: start_daily$7,
	new_words: new_words$7,
	review_ratio_tooltip: review_ratio_tooltip$7,
	review_ratio_notice_1: review_ratio_notice_1$7,
	review_ratio_notice_2: review_ratio_notice_2$7,
	daily_learning: daily_learning$7,
	learning_progress: learning_progress$7,
	select_from_dict: select_from_dict$7,
	change_in_settings: change_in_settings$7,
	keep_default_no_show: keep_default_no_show$7,
	review_complete: review_complete$7,
	today_task_complete: today_task_complete$7,
	study_duration: study_duration$7,
	accuracy_rate: accuracy_rate$7,
	weekly_study_record: weekly_study_record$7,
	studied: studied$7,
	total_words: total_words$7,
	restart_learning: restart_learning$7,
	another_round: another_round$7,
	return_home: return_home$7,
	import_tutorial: import_tutorial$7,
	import_follow_template: import_follow_template$7,
	import_word_required: import_word_required$7,
	import_translation_hint: import_translation_hint$7,
	import_example_hint: import_example_hint$7,
	import_phrase_hint: import_phrase_hint$7,
	two: two$7,
	lines: lines$7,
	import_other_hint: import_other_hint$7,
	template_download: template_download$7,
	word_import_template: word_import_template$7,
	conflict_notice_title: conflict_notice_title$7,
	keyboard_no_response: keyboard_no_response$7,
	check_plugins_installed: check_plugins_installed$7,
	conflict_plugin_names: conflict_plugin_names$7,
	plugins_intercept_keyboard: plugins_intercept_keyboard$7,
	cause_no_response: cause_no_response$7,
	follow_steps_to_resolve: follow_steps_to_resolve$7,
	try_incognito_mode: try_incognito_mode$7,
	incognito_not_working: incognito_not_working$7,
	click_here: click_here$7,
	feedback_or_wechat: feedback_or_wechat$7,
	incognito_working: incognito_working$7,
	disable_plugin_or_exclude: disable_plugin_or_exclude$7,
	install_extension_manager: install_extension_manager$7,
	chrome_extension: chrome_extension$7,
	edge_extension: edge_extension$7,
	to_manage_extensions: to_manage_extensions$7,
	delete_key_goes_back: delete_key_goes_back$7,
	browser_360_shortcut: browser_360_shortcut$7,
	change_browser_or_shortcut: change_browser_or_shortcut$7,
	please_enter_name: please_enter_name$7,
	name_max_20_chars: name_max_20_chars$7,
	name_already_exists: name_already_exists$7,
	add_success: add_success$7,
	edit_success: edit_success$7,
	edit_and_add_to_dict: edit_and_add_to_dict$7,
	please_fill_complete: please_fill_complete$7,
	name: name$7,
	description: description$7,
	source_language: source_language$7,
	target_language: target_language$7,
	english: english$7,
	german: german$7,
	japanese: japanese$7,
	code: code$7,
	chinese: chinese$7,
	multiple_choice: multiple_choice$7,
	start: start$7,
	countdown: countdown$7,
	seconds: seconds$7,
	submit_exam: submit_exam$7,
	exam_color_hint: exam_color_hint$7,
	items_per_page: items_per_page$7,
	jump_to: jump_to$7,
	page_or_index: page_or_index$7,
	please_fill_original: please_fill_original$7,
	please_fill_title: please_fill_title$7,
	please_fill_content: please_fill_content$7,
	audio_added_success: audio_added_success$7,
	lrc_parse_success: lrc_parse_success$7,
	original_text: original_text$7,
	title: title$7,
	please_fill_original_title: please_fill_original_title$7,
	content: content$7,
	one_sentence_per_line: one_sentence_per_line$7,
	name_config_tip: name_config_tip$7,
	name_config: name_config$7,
	please_paste_original: please_paste_original$7,
	usage_guide: usage_guide$7,
	copy_and_split: copy_and_split$7,
	click: click$7,
	split_sentence: split_sentence$7,
	auto_split: auto_split$7,
	or: or$7,
	manual_split: manual_split$7,
	split_rule: split_rule$7,
	after_edit_click: after_edit_click$7,
	sync_to_result: sync_to_result$7,
	please_fill_translation_title: please_fill_translation_title$7,
	please_fill_translation: please_fill_translation$7,
	translate: translate$7,
	copy_translation_or_click: copy_translation_or_click$7,
	result: result$7,
	editable_auto_sync: editable_auto_sync$7,
	audio: audio$7,
	audio_management: audio_management$7,
	paragraph: paragraph$7,
	set_start_time: set_start_time$7,
	use_prev_end_time: use_prev_end_time$7,
	minus_03s: minus_03s$7,
	end: end$7,
	set_end_time: set_end_time$7,
	edit_audio_align: edit_audio_align$7,
	play: play$7,
	status: status$7,
	sentences_not_translated: sentences_not_translated$7,
	translation_complete: translation_complete$7,
	save_and_next: save_and_next$7,
	no_translation_comparison: no_translation_comparison$7,
	adjust_audio_timeline: adjust_audio_timeline$7,
	audio_timeline_tutorial: audio_timeline_tutorial$7,
	start_time: start_time$7,
	jump_to_seconds: jump_to_seconds$7,
	use_prev_end_seconds: use_prev_end_seconds$7,
	decrease_03s: decrease_03s$7,
	increase_03s: increase_03s$7,
	record: record$7,
	end_time: end_time$7,
	audio_upload_notice: audio_upload_notice$7,
	upload_audio: upload_audio$7,
	upload_lrc: upload_lrc$7,
	name_management: name_management$7,
	name_ignore_config_desc: name_ignore_config_desc$7,
	add_name: add_name$7,
	enter_name: enter_name$7,
	collect_word: collect_word$7,
	copy: copy$7,
	copy_sentence: copy_sentence$7,
	copied: copied$7,
	copy_word: copy_word$7,
	start_from_here: start_from_here$7,
	play_sentence: play_sentence$7,
	grammar_analysis: grammar_analysis$7,
	copied_open_grammar: copied_open_grammar$7,
	youdao_translate: youdao_translate$7,
	translate_word: translate_word$7,
	translate_sentence: translate_sentence$7,
	restart_practice: restart_practice$7,
	next_article: next_article$7,
	learning_record: learning_record$7,
	total_learning_time: total_learning_time$7,
	current: current$7,
	show_questions: show_questions$7,
	explanation: explanation$7,
	encouragement_95: encouragement_95$7,
	encouragement_85: encouragement_85$7,
	encouragement_70: encouragement_70$7,
	encouragement_default: encouragement_default$7,
	daily_task_complete: daily_task_complete$7,
	weekly_record: weekly_record$7,
	study_progress: study_progress$7,
	relearn: relearn$7,
	start_from_beginning: start_from_beginning$7,
	another_group: another_group$7,
	back_to_home: back_to_home$7,
	know_word_tip: know_word_tip$7,
	press_delete_reinput: press_delete_reinput$7,
	press_space_continue: press_space_continue$7,
	shortcut: shortcut$7,
	i_know: i_know$7,
	i_dont_know: i_dont_know$7,
	phrases: phrases$7,
	synonyms: synonyms$7,
	word_root: word_root$7,
	review_wrong_words: review_wrong_words$7,
	collapse: collapse$7,
	expand: expand$7,
	minutes: minutes$7,
	time: time$7,
	errors: errors$7,
	skip_to_next_stage: skip_to_next_stage$7,
	skip_word: skip_word$7,
	toggle_dictation_mode: toggle_dictation_mode$7,
	send_failed: send_failed$7,
	send_code_failed: send_code_failed$7,
	sending: sending$7,
	send_code: send_code$7,
	agree_terms_notice: agree_terms_notice$7,
	user_agreement: user_agreement$7,
	and: and$7,
	privacy_policy: privacy_policy$7,
	important_notice: important_notice$7,
	dont_remind: dont_remind$7,
	function_desc: function_desc$7,
	qa1_a: qa1_a$7,
	qa1_q1: qa1_q1$7,
	qa1_q2: qa1_q2$7,
	qa2_a: qa2_a$7,
	qa3_a: qa3_a$7,
	qa3_q1: qa3_q1$7,
	qa3_q2: qa3_q2$7,
	qa3_q3: qa3_q3$7,
	qa4_a: qa4_a$7,
	qa4_q1: qa4_q1$7,
	qa4_q2: qa4_q2$7,
	qa5_a: qa5_a$7,
	qa5_q1: qa5_q1$7,
	qa5_q2: qa5_q2$7,
	qa5_q3: qa5_q3$7,
	qa5_q4: qa5_q4$7,
	qa6_a: qa6_a$7,
	qa7_a: qa7_a$7,
	qa7_q1: qa7_q1$7,
	qa7_q2: qa7_q2$7,
	qa7_q3: qa7_q3$7,
	qa8_a: qa8_a$7,
	qa8_q1: qa8_q1$7,
	qa8_q2: qa8_q2$7,
	qa8_q3: qa8_q3$7,
	qa9_a: qa9_a$7,
	qa9_q: qa9_q$7,
	qa10_a: qa10_a$7,
	qa10_q1: qa10_q1$7,
	qa10_q2: qa10_q2$7,
	qa11_a: qa11_a$7,
	qa11_q: qa11_q$7,
	qa12_a: qa12_a$7,
	qa12_q: qa12_q$7,
	qa13_a: qa13_a$7,
	qa13_q1: qa13_q1$7,
	qa13_q2: qa13_q2$7,
	qa13_q3: qa13_q3$7,
	qa13_q4: qa13_q4$7
};

const ru$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$7,
  about_other_channels: about_other_channels$7,
  about_thanks: about_thanks$7,
  about_ticket_feedback: about_ticket_feedback$7,
  about_wechat_feedback: about_wechat_feedback$7,
  account_placeholder: account_placeholder$7,
  accuracy_rate: accuracy_rate$7,
  add: add$7,
  add_name: add_name$7,
  add_success: add_success$7,
  add_word: add_word$7,
  adjust_audio_timeline: adjust_audio_timeline$7,
  after_edit_click: after_edit_click$7,
  agree_terms_notice: agree_terms_notice$7,
  all_resources: all_resources$7,
  allow_dictation_tip: allow_dictation_tip$7,
  allow_dictation_tip_desc: allow_dictation_tip_desc$7,
  and: and$7,
  another_group: another_group$7,
  another_round: another_round$7,
  app_desc: app_desc$7,
  app_name: app_name$7,
  apply: apply$7,
  article_management: article_management$7,
  article_settings: article_settings$7,
  articles: articles$7,
  audio: audio$7,
  audio_added_success: audio_added_success$7,
  audio_management: audio_management$7,
  audio_timeline_tutorial: audio_timeline_tutorial$7,
  audio_upload_notice: audio_upload_notice$7,
  author: author$7,
  auto_next_word: auto_next_word$7,
  auto_next_word_desc: auto_next_word_desc$7,
  auto_next_word_time: auto_next_word_time$7,
  auto_next_word_time_desc: auto_next_word_time_desc$7,
  auto_play_sentence: auto_play_sentence$7,
  auto_register_notice: auto_register_notice$7,
  auto_split: auto_split$7,
  auto_switch: auto_switch$7,
  back: back$7,
  back_to_home: back_to_home$7,
  batch_delete: batch_delete$7,
  book_list: book_list$7,
  browser_360_shortcut: browser_360_shortcut$7,
  cancel: cancel$7,
  cannot_type: cannot_type$7,
  cause_no_response: cause_no_response$7,
  change: change$7,
  change_book: change_book$7,
  change_browser_or_shortcut: change_browser_or_shortcut$7,
  change_in_settings: change_in_settings$7,
  change_order: change_order$7,
  change_progress: change_progress$7,
  check_plugins_installed: check_plugins_installed$7,
  chinese: chinese$7,
  chinese_font: chinese_font$7,
  chrome_extension: chrome_extension$7,
  clear_input_on_error: clear_input_on_error$7,
  click: click$7,
  click_here: click_here$7,
  click_here_when_done: click_here_when_done$7,
  close: close$7,
  cn_limit_no1: cn_limit_no1$7,
  cn_limit_no2: cn_limit_no2$7,
  code: code$7,
  code_login: code_login$7,
  code_placeholder: code_placeholder$7,
  collapse: collapse$7,
  collect: collect$7,
  collect_word: collect_word$7,
  community_desc: community_desc$7,
  comparison: comparison$7,
  completed_review_stage: completed_review_stage$7,
  confirm: confirm$7,
  confirm_delete_selected: confirm_delete_selected$7,
  confirm_new_password: confirm_new_password$7,
  confirm_password_placeholder: confirm_password_placeholder$7,
  conflict_notice_title: conflict_notice_title$7,
  conflict_plugin_names: conflict_plugin_names$7,
  content: content$7,
  continue_free_practice: continue_free_practice$7,
  continue_learning: continue_learning$7,
  copied: copied$7,
  copied_open_grammar: copied_open_grammar$7,
  copy: copy$7,
  copy_and_split: copy_and_split$7,
  copy_sentence: copy_sentence$7,
  copy_translation_or_click: copy_translation_or_click$7,
  copy_word: copy_word$7,
  countdown: countdown$7,
  create_book: create_book$7,
  create_dict: create_dict$7,
  create_personal_book: create_personal_book$7,
  create_personal_dict: create_personal_dict$7,
  current: current$7,
  current_progress: current_progress$7,
  custom: custom$7,
  daily_goal: daily_goal$7,
  daily_learning: daily_learning$7,
  daily_task_complete: daily_task_complete$7,
  data_management: data_management$7,
  data_saved_locally: data_saved_locally$7,
  days_to_complete: days_to_complete$7,
  decrease_03s: decrease_03s$7,
  default: ru,
  delete_key_goes_back: delete_key_goes_back$7,
  description: description$7,
  dict_list: dict_list$7,
  disable_plugin_or_exclude: disable_plugin_or_exclude$7,
  disable_practice_setting_dialog: disable_practice_setting_dialog$7,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$7,
  document: document$7,
  dont_remind: dont_remind$7,
  download_chrome: download_chrome$7,
  edge_extension: edge_extension$7,
  edit: edit$7,
  edit_and_add_to_dict: edit_and_add_to_dict$7,
  edit_audio_align: edit_audio_align$7,
  edit_book: edit_book$7,
  edit_dict: edit_dict$7,
  edit_success: edit_success$7,
  edit_word: edit_word$7,
  editable_auto_sync: editable_auto_sync$7,
  effect_sound: effect_sound$7,
  email: email$7,
  empty_placeholder: empty_placeholder$7,
  encouragement_70: encouragement_70$7,
  encouragement_85: encouragement_85$7,
  encouragement_95: encouragement_95$7,
  encouragement_default: encouragement_default$7,
  end: end$7,
  end_time: end_time$7,
  english: english$7,
  english_document: english_document$7,
  enter_name: enter_name$7,
  enter_website: enter_website$7,
  errors: errors$7,
  estimated: estimated$7,
  estimated_completion: estimated_completion$7,
  etymology: etymology$7,
  exam_color_hint: exam_color_hint$7,
  example_sentence: example_sentence$7,
  expand: expand$7,
  explanation: explanation$7,
  export_data_backup: export_data_backup$7,
  faq: faq$7,
  features: features$7,
  feedback: feedback$7,
  feedback_or_wechat: feedback_or_wechat$7,
  follow_steps_to_resolve: follow_steps_to_resolve$7,
  follow_x_account: follow_x_account$7,
  font_setting: font_setting$7,
  foreign_font: foreign_font$7,
  forgot_password: forgot_password$7,
  free_practice: free_practice$7,
  from_word: from_word$7,
  function_desc: function_desc$7,
  general_settings: general_settings$7,
  german: german$7,
  github_address: github_address$7,
  github_project: github_project$7,
  grammar_analysis: grammar_analysis$7,
  grammar_learning: grammar_learning$7,
  help: help$7,
  home_article_practice: home_article_practice$7,
  home_article_practice_desc1: home_article_practice_desc1$7,
  home_article_practice_desc2: home_article_practice_desc2$7,
  home_article_practice_desc3: home_article_practice_desc3$7,
  home_collection: home_collection$7,
  home_collection_desc1: home_collection_desc1$7,
  home_collection_desc2: home_collection_desc2$7,
  home_collection_desc3: home_collection_desc3$7,
  home_customization: home_customization$7,
  home_customization_desc1: home_customization_desc1$7,
  home_customization_desc2: home_customization_desc2$7,
  home_customization_desc3: home_customization_desc3$7,
  home_design: home_design$7,
  home_design_desc1: home_design_desc1$7,
  home_design_desc2: home_design_desc2$7,
  home_design_desc3: home_design_desc3$7,
  home_free_opensource: home_free_opensource$7,
  home_free_opensource_desc1: home_free_opensource_desc1$7,
  home_free_opensource_desc2: home_free_opensource_desc2$7,
  home_free_opensource_desc3: home_free_opensource_desc3$7,
  home_personalized: home_personalized$7,
  home_personalized_desc1: home_personalized_desc1$7,
  home_personalized_desc2: home_personalized_desc2$7,
  home_personalized_desc3: home_personalized_desc3$7,
  home_vocabulary: home_vocabulary$7,
  home_vocabulary_desc: home_vocabulary_desc$7,
  home_word_practice: home_word_practice$7,
  home_word_practice_desc1: home_word_practice_desc1$7,
  home_word_practice_desc2: home_word_practice_desc2$7,
  home_word_practice_desc3: home_word_practice_desc3$7,
  i_dont_know: i_dont_know$7,
  i_know: i_know$7,
  i_understand: i_understand$7,
  ie_not_supported: ie_not_supported$7,
  ie_use_modern_browser: ie_use_modern_browser$7,
  ignore_case: ignore_case$7,
  ignore_case_desc: ignore_case_desc$7,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$7,
  import_data_restore: import_data_restore$7,
  import_example_hint: import_example_hint$7,
  import_follow_template: import_follow_template$7,
  import_other_hint: import_other_hint$7,
  import_phrase_hint: import_phrase_hint$7,
  import_translation_hint: import_translation_hint$7,
  import_tutorial: import_tutorial$7,
  import_warning: import_warning$7,
  import_word_required: import_word_required$7,
  important_notice: important_notice$7,
  incognito_not_working: incognito_not_working$7,
  incognito_working: incognito_working$7,
  increase_03s: increase_03s$7,
  install_extension_manager: install_extension_manager$7,
  introduction: introduction$7,
  is_free: is_free$7,
  items_per_page: items_per_page$7,
  japanese: japanese$7,
  jump_to: jump_to$7,
  jump_to_seconds: jump_to_seconds$7,
  keep_default_no_show: keep_default_no_show$7,
  keyboard_no_response: keyboard_no_response$7,
  keyboard_sound: keyboard_sound$7,
  keyboard_sound_effect: keyboard_sound_effect$7,
  know_word_tip: know_word_tip$7,
  last_task: last_task$7,
  learn: learn$7,
  learned: learned$7,
  learning_progress: learning_progress$7,
  learning_record: learning_record$7,
  learning_settings: learning_settings$7,
  line_by_line: line_by_line$7,
  lines: lines$7,
  list_order_setting: list_order_setting$7,
  listening_training: listening_training$7,
  loading: loading$7,
  local_data_detected: local_data_detected$7,
  login: login$7,
  login_again: login_again$7,
  login_cancelled: login_cancelled$7,
  lrc_parse_success: lrc_parse_success$7,
  manage_books: manage_books$7,
  manage_dict: manage_dict$7,
  manual_split: manual_split$7,
  mark_mastered: mark_mastered$7,
  migrate_data: migrate_data$7,
  migrate_later_notice: migrate_later_notice$7,
  migrate_new_domain: migrate_new_domain$7,
  migrate_old_domain_notice: migrate_old_domain_notice$7,
  milliseconds: milliseconds$7,
  minus_03s: minus_03s$7,
  minutes: minutes$7,
  more: more$7,
  multiple_choice: multiple_choice$7,
  my_books: my_books$7,
  my_dictionaries: my_dictionaries$7,
  name: name$7,
  name_already_exists: name_already_exists$7,
  name_config: name_config$7,
  name_config_tip: name_config_tip$7,
  name_ignore_config_desc: name_ignore_config_desc$7,
  name_management: name_management$7,
  name_max_20_chars: name_max_20_chars$7,
  new_concept_english: new_concept_english$7,
  new_password_placeholder: new_password_placeholder$7,
  new_words: new_words$7,
  new_words_count: new_words_count$7,
  next_article: next_article$7,
  no_dict_selected: no_dict_selected$7,
  no_shortcut_set: no_shortcut_set$7,
  no_sync: no_sync$7,
  no_translation_comparison: no_translation_comparison$7,
  one_sentence_per_line: one_sentence_per_line$7,
  open_link: open_link$7,
  or: or$7,
  original_text: original_text$7,
  page_or_index: page_or_index$7,
  paragraph: paragraph$7,
  password_login: password_login$7,
  password_placeholder: password_placeholder$7,
  phone_placeholder: phone_placeholder$7,
  phonetic: phonetic$7,
  phrase: phrase$7,
  phrases: phrases$7,
  play: play$7,
  play_next_after_end: play_next_after_end$7,
  play_sentence: play_sentence$7,
  please_enter_name: please_enter_name$7,
  please_fill_complete: please_fill_complete$7,
  please_fill_content: please_fill_content$7,
  please_fill_original: please_fill_original$7,
  please_fill_original_title: please_fill_original_title$7,
  please_fill_title: please_fill_title$7,
  please_fill_translation: please_fill_translation$7,
  please_fill_translation_title: please_fill_translation_title$7,
  please_paste_original: please_paste_original$7,
  please_select: please_select$7,
  please_select_dict: please_select_dict$7,
  plugins_intercept_keyboard: plugins_intercept_keyboard$7,
  practice: practice$7,
  press_delete_reinput: press_delete_reinput$7,
  press_key_to_set: press_key_to_set$7,
  press_space_continue: press_space_continue$7,
  privacy_policy: privacy_policy$7,
  pronunciation_accent: pronunciation_accent$7,
  pronunciation_accent_desc: pronunciation_accent_desc$7,
  qa10_a: qa10_a$7,
  qa10_q1: qa10_q1$7,
  qa10_q2: qa10_q2$7,
  qa11_a: qa11_a$7,
  qa11_q: qa11_q$7,
  qa12_a: qa12_a$7,
  qa12_q: qa12_q$7,
  qa13_a: qa13_a$7,
  qa13_q1: qa13_q1$7,
  qa13_q2: qa13_q2$7,
  qa13_q3: qa13_q3$7,
  qa13_q4: qa13_q4$7,
  qa1_a: qa1_a$7,
  qa1_q1: qa1_q1$7,
  qa1_q2: qa1_q2$7,
  qa2_a: qa2_a$7,
  qa3_a: qa3_a$7,
  qa3_q1: qa3_q1$7,
  qa3_q2: qa3_q2$7,
  qa3_q3: qa3_q3$7,
  qa4_a: qa4_a$7,
  qa4_q1: qa4_q1$7,
  qa4_q2: qa4_q2$7,
  qa5_a: qa5_a$7,
  qa5_q1: qa5_q1$7,
  qa5_q2: qa5_q2$7,
  qa5_q3: qa5_q3$7,
  qa5_q4: qa5_q4$7,
  qa6_a: qa6_a$7,
  qa7_a: qa7_a$7,
  qa7_q1: qa7_q1$7,
  qa7_q2: qa7_q2$7,
  qa7_q3: qa7_q3$7,
  qa8_a: qa8_a$7,
  qa8_q1: qa8_q1$7,
  qa8_q2: qa8_q2$7,
  qa8_q3: qa8_q3$7,
  qa9_a: qa9_a$7,
  qa9_q: qa9_q$7,
  qq_group: qq_group$7,
  qq_qrcode: qq_qrcode$7,
  question: question$7,
  random_all: random_all$7,
  random_current_page: random_current_page$7,
  random_review: random_review$7,
  recommend: recommend$7,
  record: record$7,
  register: register$7,
  register_account: register_account$7,
  register_new_account: register_new_account$7,
  related_words: related_words$7,
  relearn: relearn$7,
  repeat_count: repeat_count$7,
  reset_password: reset_password$7,
  resource_sharing: resource_sharing$7,
  resources_from_internet: resources_from_internet$7,
  restart_learning: restart_learning$7,
  restart_practice: restart_practice$7,
  restore_default: restore_default$7,
  result: result$7,
  return_home: return_home$7,
  reverse_all: reverse_all$7,
  reverse_current_page: reverse_current_page$7,
  review: review$7,
  review_complete: review_complete$7,
  review_last: review_last$7,
  review_previous: review_previous$7,
  review_ratio: review_ratio$7,
  review_ratio_desc: review_ratio_desc$7,
  review_ratio_notice_1: review_ratio_notice_1$7,
  review_ratio_notice_2: review_ratio_notice_2$7,
  review_ratio_tooltip: review_ratio_tooltip$7,
  review_wrong_words: review_wrong_words$7,
  save: save$7,
  save_and_next: save_and_next$7,
  scan_success: scan_success$7,
  search: search$7,
  seconds: seconds$7,
  select_dict: select_dict$7,
  select_dict_to_start: select_dict_to_start$7,
  select_from_dict: select_from_dict$7,
  send_code: send_code$7,
  send_code_failed: send_code_failed$7,
  send_email: send_email$7,
  send_failed: send_failed$7,
  sending: sending$7,
  sentences_not_translated: sentences_not_translated$7,
  set_end_time: set_end_time$7,
  set_password_placeholder: set_password_placeholder$7,
  set_start_time: set_start_time$7,
  setting: setting$7,
  settings: settings$7,
  shortcut: shortcut$7,
  shortcut_key: shortcut_key$7,
  shortcut_settings: shortcut_settings$7,
  show_prev_next_word: show_prev_next_word$7,
  show_prev_next_word_desc: show_prev_next_word_desc$7,
  show_questions: show_questions$7,
  simple_word_filter: simple_word_filter$7,
  simple_word_filter_desc: simple_word_filter_desc$7,
  simple_word_list: simple_word_list$7,
  single_line: single_line$7,
  skip_to_next_stage: skip_to_next_stage$7,
  skip_word: skip_word$7,
  smart_learning: smart_learning$7,
  sound_effect: sound_effect$7,
  source_language: source_language$7,
  speed: speed$7,
  split_rule: split_rule$7,
  split_sentence: split_sentence$7,
  start: start$7,
  start_article_practice: start_article_practice$7,
  start_daily: start_daily$7,
  start_from_beginning: start_from_beginning$7,
  start_from_here: start_from_here$7,
  start_learning: start_learning$7,
  start_time: start_time$7,
  start_word_practice: start_word_practice$7,
  status: status$7,
  studied: studied$7,
  study_duration: study_duration$7,
  study_progress: study_progress$7,
  study_record: study_record$7,
  submit_exam: submit_exam$7,
  suitable_for: suitable_for$7,
  switch_display_mode: switch_display_mode$7,
  sync: sync$7,
  sync_data: sync_data$7,
  sync_failed: sync_failed$7,
  sync_success: sync_success$7,
  sync_to_account_question: sync_to_account_question$7,
  sync_to_result: sync_to_result$7,
  syncing: syncing$7,
  synonym: synonym$7,
  synonyms: synonyms$7,
  tap_allow_in_wechat: tap_allow_in_wechat$7,
  target_language: target_language$7,
  template_download: template_download$7,
  test: test$7,
  this_week_record: this_week_record$7,
  time: time$7,
  title: title$7,
  to_manage_extensions: to_manage_extensions$7,
  today_study_time: today_study_time$7,
  today_task: today_task$7,
  today_task_complete: today_task_complete$7,
  toggle_dictation_mode: toggle_dictation_mode$7,
  toggle_theme: toggle_theme$7,
  toggle_translation: toggle_translation$7,
  total: total$7,
  total_items: total_items$7,
  total_learning_time: total_learning_time$7,
  total_study_days: total_study_days$7,
  total_study_time: total_study_time$7,
  total_words: total_words$7,
  translate: translate$7,
  translate_sentence: translate_sentence$7,
  translate_word: translate_word$7,
  translation: translation$7,
  translation_complete: translation_complete$7,
  try_incognito_mode: try_incognito_mode$7,
  tv_movie: tv_movie$7,
  twitter: twitter$7,
  two: two$7,
  uk_accent: uk_accent$7,
  uncollect: uncollect$7,
  unmark_mastered: unmark_mastered$7,
  update_log: update_log$7,
  upload_audio: upload_audio$7,
  upload_lrc: upload_lrc$7,
  us_accent: us_accent$7,
  usage_guide: usage_guide$7,
  use_prev_end_seconds: use_prev_end_seconds$7,
  use_prev_end_time: use_prev_end_time$7,
  user_agreement: user_agreement$7,
  volume: volume$7,
  wait_translation: wait_translation$7,
  warm_tips: warm_tips$7,
  wechat_group: wechat_group$7,
  wechat_qrcode: wechat_qrcode$7,
  wechat_scan_login: wechat_scan_login$7,
  weekly_record: weekly_record$7,
  weekly_study_record: weekly_study_record$7,
  where_is_data: where_is_data$7,
  word: word$7,
  word_auto_pronunciation: word_auto_pronunciation$7,
  word_import_template: word_import_template$7,
  word_list: word_list$7,
  word_repeat_setting: word_repeat_setting$7,
  word_root: word_root$7,
  word_settings: word_settings$7,
  words: words$7,
  words_comma_separated: words_comma_separated$7,
  words_count: words_count$7,
  xiaohongshu: xiaohongshu$7,
  xiaohongshu_desc: xiaohongshu_desc$7,
  xiaohongshu_qrcode: xiaohongshu_qrcode$7,
  youdao_translate: youdao_translate$7
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$6 = "Вивчайте англійську, один натиск за раз, інструмент з відкритим кодом";
var app_name$6 = "Type Words";
var start_word_practice$6 = "Почати практику слів";
var start_article_practice$6 = "Почати практику статей";
var home_word_practice$6 = "Практика слів";
var home_word_practice_desc1$6 = "Режими: Друк/Диктант/Самоперевірка/Декламація";
var home_word_practice_desc2$6 = "Розумне навчання: Інтелектуальне планування";
var home_word_practice_desc3$6 = "Вільне навчання: Без обмежень";
var home_article_practice$6 = "Практика статей";
var home_article_practice_desc1$6 = "Вбудовані книги, додавання статей";
var home_article_practice_desc2$6 = "Подвійний режим: друк + декламація";
var home_article_practice_desc3$6 = "Слухати під час декламації";
var home_collection$6 = "Обране, Помилки, Освоєні";
var home_collection_desc1$6 = "Помилки автоматично додаються";
var home_collection_desc2$6 = "Додати до освоєних, пропускати потім";
var home_collection_desc3$6 = "Додати до обраного для повторення";
var home_vocabulary$6 = "Величезний словник";
var home_vocabulary_desc$6 = "Вбудований словник від початкового до просунутого";
var home_free_opensource$6 = "Безкоштовно та відкритий код";
var home_free_opensource_desc1$6 = "Повністю відкритий код";
var home_free_opensource_desc2$6 = "Безкоштовне використання";
var home_free_opensource_desc3$6 = "Приватне розгортання";
var home_customization$6 = "Високе налаштування";
var home_customization_desc1$6 = "Багаті звукові ефекти";
var home_customization_desc2$6 = "Налаштовувані гарячі клавіші";
var home_customization_desc3$6 = "Високо налаштовувані параметри";
var home_design$6 = "Простий та ефективний";
var home_design_desc1$6 = "Простий дизайн, сучасний інтерфейс";
var home_design_desc2$6 = "Чистий інтерфейс, просте керування";
var home_design_desc3$6 = "Без примусової підписки";
var home_personalized$6 = "Персоналізоване навчання";
var home_personalized_desc1$6 = "Вільно додавати словники та статті";
var home_personalized_desc2$6 = "Налаштувати план навчання";
var home_personalized_desc3$6 = "Кілька стратегій навчання та повторення";
var cn_limit_no1$6 = "川公网安备51015602001426号";
var cn_limit_no2$6 = "蜀ICP备2025157466号-2";
var setting$6 = "Налаштування";
var edit$6 = "Редагувати";
var cancel$6 = "Скасувати";
var confirm$6 = "Підтвердити";
var save$6 = "Зберегти";
var close$6 = "Закрити";
var search$6 = "Пошук";
var more$6 = "Більше";
var loading$6 = "Завантаження";
var introduction$6 = "Вступ";
var learn$6 = "Вчити";
var practice$6 = "Практика";
var test$6 = "Тест";
var feedback$6 = "Зворотній зв'язок";
var document$6 = "Ресурси";
var help$6 = "Допомога";
var about$6 = "Про нас";
var login$6 = "Увійти";
var register$6 = "Реєстрація";
var register_account$6 = "Зареєструвати акаунт";
var register_new_account$6 = "Зареєструвати новий акаунт";
var code_login$6 = "Вхід за кодом";
var password_login$6 = "Вхід за паролем";
var phone_placeholder$6 = "Введіть номер телефону";
var code_placeholder$6 = "Введіть код підтвердження";
var account_placeholder$6 = "Введіть телефон/email";
var password_placeholder$6 = "Введіть пароль";
var auto_register_notice$6 = "Незареєстрований телефон буде автоматично зареєстрований";
var forgot_password$6 = "Забули пароль?";
var reset_password$6 = "Скинути пароль";
var set_password_placeholder$6 = "Встановіть пароль";
var confirm_password_placeholder$6 = "Підтвердіть пароль";
var new_password_placeholder$6 = "Введіть новий пароль";
var confirm_new_password$6 = "Підтвердіть новий пароль";
var wechat_scan_login$6 = "Вхід через WeChat";
var scan_success$6 = "Сканування успішне";
var tap_allow_in_wechat$6 = "Натисніть дозволити у WeChat";
var login_cancelled$6 = "Вхід скасовано";
var login_again$6 = "Увійти знову";
var sync_data$6 = "Синхронізація даних";
var local_data_detected$6 = "Виявлено локальні дані";
var sync_to_account_question$6 = "Синхронізувати з акаунтом?";
var no_sync$6 = "Не синхронізувати";
var sync$6 = "Синхронізація";
var syncing$6 = "Синхронізація";
var sync_failed$6 = "Помилка синхронізації";
var sync_success$6 = "Синхронізація успішна";
var enter_website$6 = "Увійти на сайт";
var general_settings$6 = "Загальні налаштування";
var word_settings$6 = "Налаштування слів";
var article_settings$6 = "Налаштування статей";
var data_management$6 = "Керування даними";
var shortcut_settings$6 = "Налаштування гарячих клавіш";
var update_log$6 = "Журнал оновлень";
var shortcut_key$6 = "Гаряча клавіша (натисніть для зміни)";
var no_shortcut_set$6 = "Гаряча клавіша не встановлена";
var press_key_to_set$6 = "Натисніть клавішу для встановлення";
var click_here_when_done$6 = "Натисніть тут після завершення";
var restore_default$6 = "Відновити за замовчуванням";
var data_saved_locally$6 = "Усі дані зберігаються локально у браузері";
var export_data_backup$6 = "Експорт резервної копії (ZIP)";
var import_data_restore$6 = "Імпорт відновлення даних";
var import_warning$6 = "Імпорт перезапише всі дані";
var words$6 = "Слова";
var no_dict_selected$6 = "Словник не вибрано";
var select_dict_to_start$6 = "Виберіть словник для початку";
var select_dict$6 = "Вибрати словник";
var change_progress$6 = "Змінити прогрес";
var estimated_completion$6 = "Очікуване завершення";
var current_progress$6 = "Поточний прогрес";
var learned$6 = "Вивчено";
var completed_review_stage$6 = "Завершено, перехід до повторення";
var today_task$6 = "Завдання на сьогодні";
var last_task$6 = "Останнє завдання";
var word_list$6 = "Список слів";
var daily_goal$6 = "Денна мета";
var words_count$6 = "слів";
var change$6 = "Змінити";
var new_words_count$6 = "Нові слова";
var review_last$6 = "Повторити останні";
var review_previous$6 = "Повторити попередні";
var start_learning$6 = "Почати навчання";
var continue_learning$6 = "Продовжити навчання";
var free_practice$6 = "Вільна практика";
var continue_free_practice$6 = "Продовжити вільну практику";
var smart_learning$6 = "Розумне навчання";
var review$6 = "Повторити";
var random_review$6 = "Випадкове повторення";
var my_dictionaries$6 = "Мої словники";
var manage_dict$6 = "Керувати словниками";
var create_personal_dict$6 = "Створити особистий словник";
var recommend$6 = "Рекомендувати";
var articles$6 = "Статті";
var this_week_record$6 = "Запис цього тижня";
var change_book$6 = "Змінити";
var today_study_time$6 = "Час навчання сьогодні";
var total_study_days$6 = "Всього днів навчання";
var total_study_time$6 = "Загальний час навчання";
var my_books$6 = "Мої книги";
var manage_books$6 = "Керувати книгами";
var create_personal_book$6 = "Створити особисту книгу";
var article_management$6 = "Керування статтями";
var toggle_translation$6 = "Перемикнути переклад";
var switch_display_mode$6 = "Перемикнути режим відображення";
var line_by_line$6 = "Рядок за рядком";
var single_line$6 = "Один рядок";
var comparison$6 = "Порівняння";
var question$6 = "Питання";
var study_record$6 = "Запис навчання";
var play_next_after_end$6 = "Відтворити наступну після закінчення";
var create_book$6 = "Створити книгу";
var edit_book$6 = "Редагувати книгу";
var dict_list$6 = "Список словників";
var book_list$6 = "Список книг";
var word$6 = "Слова";
var phonetic$6 = "Фонетика";
var translation$6 = "Переклад";
var example_sentence$6 = "Приклад речення";
var phrase$6 = "Фраза";
var synonym$6 = "Синонім";
var related_words$6 = "Пов'язані слова";
var etymology$6 = "Етимологія";
var add_word$6 = "Додати слово";
var edit_word$6 = "Редагувати слово";
var create_dict$6 = "Створити словник";
var edit_dict$6 = "Редагувати словник";
var faq$6 = "Часті запитання";
var is_free$6 = "Сайт безкоштовний?";
var cannot_type$6 = "Не можу друкувати, клавіатура не відповідає?";
var where_is_data$6 = "Де дані? Як використовувати на кількох пристроях?";
var resource_sharing$6 = "Обмін ресурсами";
var all_resources$6 = "Усі ресурси";
var new_concept_english$6 = "Новий концепт англійської";
var tv_movie$6 = "ТВ/Фільм";
var grammar_learning$6 = "Вивчення граматики";
var listening_training$6 = "Тренування аудіювання";
var warm_tips$6 = "Поради";
var resources_from_internet$6 = "Усі ресурси зібрані з інтернету, лише для навчання";
var toggle_theme$6 = "Змінити тему";
var english_document$6 = "Ресурси англійською";
var empty_placeholder$6 = "Тут порожньо~";
var custom$6 = "Користувацький";
var back$6 = "Назад";
var total_items$6 = "елементів";
var batch_delete$6 = "Пакетне видалення";
var confirm_delete_selected$6 = "Підтвердити видалення всіх вибраних?";
var change_order$6 = "Змінити порядок";
var list_order_setting$6 = "Налаштування порядку списку";
var reverse_current_page$6 = "Перевернути поточну сторінку";
var reverse_all$6 = "Перевернути все";
var random_current_page$6 = "Перемішати поточну сторінку";
var random_all$6 = "Перемішати все";
var apply$6 = "Застосувати";
var add$6 = "Додати";
var collect$6 = "Обране";
var uncollect$6 = "Видалити з обраного";
var mark_mastered$6 = "Позначити як освоєне";
var unmark_mastered$6 = "Зняти позначку освоєного";
var about_thanks$6 = "Дякуємо за використання проекту! Це проект з відкритим кодом, безкоштовний. Якщо знайшли корисним, поставте зірку на GitHub!";
var github_address$6 = "GitHub:";
var about_wechat_feedback$6 = "Відгук у WeChat:";
var about_ticket_feedback$6 = "Відгук через тікет:";
var about_other_channels$6 = "Інші канали:";
var wait_translation$6 = "Будь ласка, зачекайте завершення перекладу";
var migrate_data$6 = "Перенесення даних";
var migrate_new_domain$6 = "Цей сайт має новий домен";
var migrate_old_domain_notice$6 = "Старий домен буде відключено. Через обмеження безпеки браузера дані не можуть бути передані між сайтами. Перенесіть дані вручну.";
var migrate_later_notice$6 = "Якщо ви не хочете переносити зараз, закрийте це вікно і перенесіть пізніше в \"Налаштування\" -> \"Керування даними\"";
var author$6 = "Автор:";
var features$6 = "Особливості:";
var suitable_for$6 = "Підходить для:";
var open_link$6 = "Відкрити посилання";
var qq_group$6 = "Група QQ";
var xiaohongshu$6 = "Xiaohongshu";
var follow_x_account$6 = "Підписатися на X акаунт {x_account}";
var twitter$6 = "Twitter";
var send_email$6 = "Надіслати лист на {email}";
var email$6 = "Пошта";
var xiaohongshu_desc$6 = "Підпишіться на нас у Xiaohongshu, щоб отримувати останні оновлення від команди розробників, діліться досвідом та пропозиціями";
var xiaohongshu_qrcode$6 = "QR-код Xiaohongshu";
var community_desc$6 = "Приєднуйтесь до нашої спільноти для спілкування з командою розробників, діліться досвідом та пропозиціями";
var qq_qrcode$6 = "QR-код групи QQ";
var wechat_group$6 = "Група WeChat";
var wechat_qrcode$6 = "QR-код групи WeChat";
var github_project$6 = "Проект GitHub";
var ie_not_supported$6 = "Браузер IE не підтримується";
var ie_use_modern_browser$6 = "Type Words створено з використанням сучасних технологій, використовуйте Chrome, Edge, Firefox або інші сучасні браузери";
var download_chrome$6 = "Завантажити Chrome";
var i_understand$6 = "Зрозуміло";
var ignore_case$6 = "Ігнорувати регістр";
var ignore_case_desc$6 = "При увімкненні введення не враховує регістр";
var allow_dictation_tip$6 = "Дозволити підказки в режимі диктанту";
var allow_dictation_tip_desc$6 = "При увімкненні ви можете навести курсор на слово або натиснути клавішу для показу правильної відповіді";
var simple_word_filter$6 = "Фільтр простих слів";
var simple_word_filter_desc$6 = "При увімкненні прості слова виключаються з практики; прості слова не враховуються в статистиці статей";
var simple_word_list$6 = "Список простих слів";
var words_comma_separated$6 = "Кілька слів через кому";
var sound_effect$6 = "Звукові ефекти";
var pronunciation_accent$6 = "Акцент вимови";
var pronunciation_accent_desc$6 = "Впливає лише на вимову слів; статті використовують американський акцент";
var please_select$6 = "Будь ласка, виберіть";
var us_accent$6 = "Американський";
var uk_accent$6 = "Британський";
var keyboard_sound$6 = "Звук клавіш";
var keyboard_sound_effect$6 = "Ефект звуку клавіш";
var volume$6 = "Гучність";
var show_prev_next_word$6 = "Показати попереднє/наступне слово";
var show_prev_next_word_desc$6 = "При увімкненні попереднє та наступне слова будуть показані зверху під час практики";
var disable_practice_setting_dialog$6 = "Не показувати діалог налаштувань практики за замовчуванням";
var disable_practice_setting_dialog_desc$6 = "На сторінці деталей словника, чи показувати діалог налаштувань практики після натискання кнопки вчити";
var clear_input_on_error$6 = "Очистити введення при помилці";
var word_repeat_setting$6 = "Налаштування повторення слів";
var repeat_count$6 = "Кількість повторень";
var review_ratio$6 = "Співвідношення повторення";
var review_ratio_desc$6 = "Співвідношення повторюваних слів до нових. Зміни набудуть чинності в наступній сесії";
var word_auto_pronunciation$6 = "Автоматична вимова";
var speed$6 = "Швидкість";
var effect_sound$6 = "Звуки ефектів (звуки помилки та завершення)";
var auto_switch$6 = "Автоперемикання";
var auto_next_word$6 = "Автоматично наступне слово";
var auto_next_word_desc$6 = "Працює лише в режимі слідування. Диктант, самоперевірка та правопис вимагають натискання пробілу для продовження";
var auto_next_word_time$6 = "Час автопереходу до наступного слова";
var auto_next_word_time_desc$6 = "Час автоматичного переходу до наступного слова після правильного введення";
var milliseconds$6 = "мс";
var font_setting$6 = "Налаштування шрифту";
var foreign_font$6 = "Шрифт іноземної мови";
var chinese_font$6 = "Китайський шрифт";
var auto_play_sentence$6 = "Автовідтворення речення";
var ignore_symbols_numbers_names$6 = "Ігнорувати символи, числа та імена при введенні";
var settings$6 = "Налаштування";
var please_select_dict$6 = "Спочатку виберіть словник";
var learning_settings$6 = "Налаштування навчання";
var total$6 = "Всього";
var estimated$6 = "Орієнтовно";
var days_to_complete$6 = "днів до завершення";
var from_word$6 = "Починаючи зі слова";
var start_daily$6 = ", щоденно";
var new_words$6 = "нових слів";
var review_ratio_tooltip$6 = "Співвідношення повторюваних слів до нових";
var review_ratio_notice_1$6 = "Коли навчання не завершено, кількість повторень генерується згідно встановленого співвідношення. Якщо 0, без повторення";
var review_ratio_notice_2$6 = "Після завершення навчання кількість нових слів фіксується на 0, кількість повторень генерується за співвідношенням (якщо < 1, розраховується як 1)";
var daily_learning$6 = "Щоденне навчання";
var learning_progress$6 = "Прогрес навчання";
var select_from_dict$6 = "Виберіть початкову позицію зі словника";
var change_in_settings$6 = "Можна змінити на сторінці налаштувань";
var keep_default_no_show$6 = "Залишити за замовчуванням, більше не показувати";
var review_complete$6 = "Повторення завершено";
var today_task_complete$6 = "Завдання на сьогодні виконано";
var study_duration$6 = "Тривалість навчання";
var accuracy_rate$6 = "Точність";
var weekly_study_record$6 = "Тижневий запис навчання";
var studied$6 = "Вивчено";
var total_words$6 = "Всього слів";
var restart_learning$6 = "Почати навчання заново";
var another_round$6 = "Ще раз";
var return_home$6 = "Повернутися на головну";
var import_tutorial$6 = "Посібник з імпорту";
var import_follow_template$6 = "Заповніть дані відповідно до формату шаблону";
var import_word_required$6 = "Поле слова обов'язкове, інші поля необов'язкові";
var import_translation_hint$6 = "Переклад: один переклад на рядок, спочатку частина мови, потім зміст (наприклад, n.cancel); кілька перекладів на окремих рядках";
var import_example_hint$6 = "Приклад: один рядок для оригіналу, один рядок для перекладу; кілька прикладів на окремих рядках";
var import_phrase_hint$6 = "Фраза: один рядок для оригіналу, один рядок для перекладу; кілька фраз на окремих рядках";
var two$6 = "два";
var lines$6 = "рядки";
var import_other_hint$6 = "Синоніми, однокореневі слова, етимологія: перейдіть до офіційного словника, потім відредагуйте слово, щоб побачити формат";
var template_download$6 = "Завантажити шаблон";
var word_import_template$6 = "Шаблон імпорту слів";
var conflict_notice_title$6 = "Якщо під час використання ви зіткнулися з наступними проблемами:";
var keyboard_no_response$6 = "Клавіатура не реагує";
var check_plugins_installed$6 = "Перевірте, чи встановлено у вас";
var conflict_plugin_names$6 = "\"Регулятор швидкості відео\" \"Vim\" \"Покращувач аудіо/відео\" \"Помічник онлайн-курсів\"";
var plugins_intercept_keyboard$6 = "та інші плагіни/скрипти, що перехоплюють події клавіатури,";
var cause_no_response$6 = "що призводить до відсутності реакції при практиці на цьому сайті";
var follow_steps_to_resolve$6 = ", виконайте наступні кроки для вирішення конфлікту:";
var try_incognito_mode$6 = "Відкрийте цей сайт у режимі інкогніто браузера та перевірте, чи можете ви нормально друкувати?";
var incognito_not_working$6 = "Не вдається друкувати в режимі інкогніто,";
var click_here$6 = "натисніть тут";
var feedback_or_wechat$6 = "для надсилання відгуку або приєднайтеся до групи WeChat:";
var incognito_working$6 = "Можна друкувати в режимі інкогніто, отже це конфлікт плагіна/скрипта";
var disable_plugin_or_exclude$6 = "Тимчасово вимкніть відповідний плагін/скрипт або виключіть цей сайт у налаштуваннях плагіна/скрипта";
var install_extension_manager$6 = "Ви можете встановити це";
var chrome_extension$6 = "розширення (версія Chrome, потрібен VPN)";
var edge_extension$6 = "розширення (версія Edge, VPN не потрібен)";
var to_manage_extensions$6 = "для швидкого увімкнення/вимкнення інших розширень";
var delete_key_goes_back$6 = "Натискання клавіші Delete повертає на попередню сторінку";
var browser_360_shortcut$6 = "У браузері 360 комбінація клавіш \"Delete повертає на попередню сторінку\" встановлена за замовчуванням";
var change_browser_or_shortcut$6 = "Або змініть браузер, або видаліть комбінацію клавіш 360 за замовчуванням: шукайте \"назад\" у налаштуваннях браузера";
var please_enter_name$6 = "Будь ласка, введіть ім'я";
var name_max_20_chars$6 = "Ім'я не може перевищувати 20 символів";
var name_already_exists$6 = "Ім'я вже існує!";
var add_success$6 = "Успішно додано";
var edit_success$6 = "Успішно змінено";
var edit_and_add_to_dict$6 = "Успішно змінено та додано до мого словника";
var please_fill_complete$6 = "Будь ласка, заповніть повністю";
var name$6 = "Ім'я";
var description$6 = "Опис";
var source_language$6 = "Мова оригіналу";
var target_language$6 = "Мова перекладу";
var english$6 = "Англійська";
var german$6 = "Німецька";
var japanese$6 = "Японська";
var code$6 = "Код";
var chinese$6 = "Китайська";
var multiple_choice$6 = "Множинний вибір";
var start$6 = "Почати";
var countdown$6 = "Зворотний відлік";
var seconds$6 = "секунд";
var submit_exam$6 = "Здати іспит";
var exam_color_hint$6 = "Світло-червоний: неправильно, Темно-червоний: не вибрано, Зелений: правильно";
var items_per_page$6 = "записів/сторінка";
var jump_to$6 = "Перейти до";
var page_or_index$6 = "сторінка/номер";
var please_fill_original$6 = "Будь ласка, заповніть оригінальний текст!";
var please_fill_title$6 = "Будь ласка, заповніть заголовок!";
var please_fill_content$6 = "Будь ласка, заповніть вміст!";
var audio_added_success$6 = "Аудіо успішно додано";
var lrc_parse_success$6 = "LRC файл успішно розібрано";
var original_text$6 = "Оригінальний текст";
var title$6 = "Заголовок";
var please_fill_original_title$6 = "Будь ласка, заповніть оригінальний заголовок";
var content$6 = "Вміст";
var one_sentence_per_line$6 = "Одне речення на рядок, залиште порожній рядок між абзацами";
var name_config_tip$6 = "Після налаштування імена будуть автоматично ігноруватися під час практики (необов'язково, увімкнено за замовчуванням)";
var name_config$6 = "Налаштування імен";
var please_paste_original$6 = "Будь ласка, вставте оригінальний текст";
var usage_guide$6 = "Посібник з використання";
var copy_and_split$6 = "Скопіюйте оригінальний текст, потім розділіть на речення";
var click$6 = "Натисніть";
var split_sentence$6 = "Розділити речення";
var auto_split$6 = "кнопка для автоматичного розділення";
var or$6 = "або";
var manual_split$6 = "вручну редагувати для розділення";
var split_rule$6 = "Правило розділення: одне речення на рядок, порожній рядок між абзацами";
var after_edit_click$6 = "Після редагування натисніть";
var sync_to_result$6 = "кнопка для синхронізації з лівою панеллю результатів";
var please_fill_translation_title$6 = "Будь ласка, заповніть заголовок перекладу";
var please_fill_translation$6 = "Будь ласка, заповніть переклад";
var translate$6 = "Переклад";
var copy_translation_or_click$6 = "Вставте переклад або натисніть, якщо немає";
var result$6 = "Результат";
var editable_auto_sync$6 = "Все редаговане, натисніть кнопку застосувати для автосинхронізації після редагування";
var audio$6 = "Аудіо";
var audio_management$6 = "Керування аудіо";
var paragraph$6 = "Абзац";
var set_start_time$6 = "Встановити час початку";
var use_prev_end_time$6 = "Використовувати час закінчення попереднього речення";
var minus_03s$6 = "Мінус 0,3с";
var end$6 = "Кінець";
var set_end_time$6 = "Встановити час закінчення";
var edit_audio_align$6 = "Редагувати вирівнювання аудіо";
var play$6 = "Відтворити";
var status$6 = "Статус";
var sentences_not_translated$6 = "{count} речень не перекладено!";
var translation_complete$6 = "Переклад завершено!";
var save_and_next$6 = "Зберегти та додати наступне";
var no_translation_comparison$6 = "Порівняння перекладів недоступне";
var adjust_audio_timeline$6 = "Налаштувати часову шкалу аудіо";
var audio_timeline_tutorial$6 = "Посібник: Натисніть відтворити, коли аудіо досягне початку речення, натисніть записати час початку; коли досягне кінця, натисніть записати час закінчення";
var start_time$6 = "Час початку";
var jump_to_seconds$6 = "Перейти до {seconds}с";
var use_prev_end_seconds$6 = "Використовувати час закінчення попереднього речення: {seconds}с";
var decrease_03s$6 = "Зменшити на 0,3с";
var increase_03s$6 = "Збільшити на 0,3с";
var record$6 = "Записати";
var end_time$6 = "Час закінчення";
var audio_upload_notice$6 = "1. Завантажені файли зберігаються локально, дані будуть втрачені при зміні комп'ютера, будь ласка, робіть резервні копії\n2. Підтримує mp3, wav, m4a та інші поширені аудіоформати";
var upload_audio$6 = "Завантажити аудіо";
var upload_lrc$6 = "Завантажити LRC файл";
var name_management$6 = "Керування іменами";
var name_ignore_config_desc$6 = "Налаштуйте імена для ігнорування, ці імена будуть автоматично пропускатися під час практики (необов'язково, увімкнено за замовчуванням)";
var add_name$6 = "Додати ім'я";
var enter_name$6 = "Введіть ім'я";
var collect_word$6 = "Зібрати слово";
var copy$6 = "Копіювати";
var copy_sentence$6 = "Копіювати речення";
var copied$6 = "Скопійовано";
var copy_word$6 = "Копіювати слово";
var start_from_here$6 = "Почати звідси";
var play_sentence$6 = "Відтворити речення";
var grammar_analysis$6 = "Граматичний аналіз";
var copied_open_grammar$6 = "Скопійовано! Відкривається сайт граматичного аналізу!";
var youdao_translate$6 = "Словник Youdao";
var translate_word$6 = "Перекласти слово";
var translate_sentence$6 = "Перекласти речення";
var restart_practice$6 = "Перезапустити практику";
var next_article$6 = "Наступна стаття";
var learning_record$6 = "Запис навчання";
var total_learning_time$6 = "Загальний час навчання";
var current$6 = "Поточний";
var show_questions$6 = "Показати питання";
var explanation$6 = "Пояснення";
var encouragement_95$6 = "Чудово! Так тримати!";
var encouragement_85$6 = "Гарна робота, продовжуйте!";
var encouragement_70$6 = "Хороший результат, продовжуйте!";
var encouragement_default$6 = "Кожна практика — це прогрес, продовжуйте!";
var daily_task_complete$6 = "Щоденне завдання виконано";
var weekly_record$6 = "Запис навчання за тиждень";
var study_progress$6 = "Прогрес навчання";
var relearn$6 = "Перевчити";
var start_from_beginning$6 = "Почати спочатку";
var another_group$6 = "Ще одна група";
var back_to_home$6 = "Повернутися на головну";
var know_word_tip$6 = "Якщо ви помилково вибрали \"Я знаю\", натисніть клавішу Delete для повторного вибору!";
var press_delete_reinput$6 = "Натисніть клавішу Delete для повторного введення";
var press_space_continue$6 = "Натисніть пробіл для продовження";
var shortcut$6 = "Швидка клавіша";
var i_know$6 = "Я знаю";
var i_dont_know$6 = "Не знаю";
var phrases$6 = "Фрази";
var synonyms$6 = "Синоніми";
var word_root$6 = "Корінь слова";
var review_wrong_words$6 = "Повторити неправильні слова";
var collapse$6 = "Згорнути";
var expand$6 = "Розгорнути";
var minutes$6 = "хвилин";
var time$6 = "Час";
var errors$6 = "Помилки";
var skip_to_next_stage$6 = "Перейти до наступного етапу";
var skip_word$6 = "Пропустити слово";
var toggle_dictation_mode$6 = "Перемкнути режим диктанту";
var send_failed$6 = "Відправлення не вдалося";
var send_code_failed$6 = "Не вдалося надіслати код підтвердження";
var sending$6 = "Надсилання";
var send_code$6 = "Надіслати код";
var agree_terms_notice$6 = "Продовжуючи, ви погоджуєтесь з нашими";
var user_agreement$6 = "Угода користувача";
var and$6 = "та";
var privacy_policy$6 = "Політика конфіденційності";
var important_notice$6 = "Важливе повідомлення";
var dont_remind$6 = "Більше не нагадувати";
var function_desc$6 = "Функції";
var qa1_a$6 = "Сайт безкоштовний?";
var qa1_q1$6 = "Не повністю безкоштовно. Для довгострокового розвитку майбутні платежі неминучі, але оплата не буде обов'язковою. Ми намагаємося знайти баланс між безкоштовним і платним.";
var qa1_q2$6 = "Проект з відкритим кодом, ви можете розгорнути його самостійно.";
var qa2_a$6 = "Не вдається друкувати, клавіатура не реагує?";
var qa3_a$6 = "Де дані? Як використовувати на кількох комп'ютерах/пристроях?";
var qa3_q1$6 = "Всі дані користувача зберігаються в локальному браузері. Якщо вам потрібно використовувати Type Words на різних пристроях або браузерах, вам потрібно вручну експортувати та імпортувати дані.";
var qa3_q2$6 = "Налаштування -> Налаштування даних -> Експорт даних на оригінальному комп'ютері -> Надіслати на новий комп'ютер через соціальне ПЗ -> Імпорт на новому комп'ютері";
var qa3_q3$6 = "Система облікових записів у розробці.";
var qa4_a$6 = "Сайт автоматично планує забагато слів, як змінити?";
var qa4_q1$6 = "Співвідношення слів для повторення до нових слів за замовчуванням 1:4.";
var qa4_q2$6 = "Ви можете змінити це в Налаштування -> Налаштування слів -> Співвідношення повторення";
var qa5_a$6 = "Занадто довго завершувати одну навчальну сесію, процес занадто довгий?";
var qa5_q1$6 = "Це дійсно проблема. Довгий процес може змусити людей втратити мотивацію.";
var qa5_q2$6 = "Неправильні слова будуть повторюватися. Якщо це була друкарська помилка, ви можете натиснути Tab, щоб пропустити.";
var qa5_q3$6 = "Під час повторення лише слова, позначені як \"не знаю\", потребують диктанту.";
var qa5_q4$6 = "Після запуску системи облікових записів буде додано функцію кривої пам'яті Еббінгауза.";
var qa6_a$6 = "Чи буде додано функцію кривої пам'яті Еббінгауза?";
var qa7_a$6 = "Чи можу я додавати слова/користувацькі словники/імпортувати власні слова?";
var qa7_q1$6 = "Так, на сторінці Слова натисніть \"Створити особистий словник\"";
var qa7_q2$6 = "Після створення натисніть значок \"Додати слово\", щоб додати власні слова";
var qa7_q3$6 = "Ви також можете натиснути значок \"Імпорт\" для пакетного імпорту";
var qa8_a$6 = "Чи можу я додавати статті/користувацькі книги/імпортувати власні статті?";
var qa8_q1$6 = "Так, кроки в основному такі ж, як при додаванні слів";
var qa8_q2$6 = "На сторінці Статті натисніть \"Створити особисту книгу\"";
var qa8_q3$6 = "Після створення натисніть кнопку \"Управління статтями\" вгорі";
var qa9_a$6 = "Як вимкнути звуки клавіш?";
var qa9_q$6 = "Налаштування -> Загальні налаштування -> Звукові ефекти -> Звук клавіш, вимкніть його";
var qa10_a$6 = "Чи можу я використовувати його на планшеті?";
var qa10_q1$6 = "Планшети можна використовувати, але використання Bluetooth-клавіатури забезпечує кращий досвід.";
var qa10_q2$6 = "Після підключення Bluetooth-клавіатури планшети Android повинні вручну ввімкнути \"Режим робочого столу\".";
var qa11_a$6 = "Чи можу я використовувати його на телефоні?";
var qa11_q$6 = "Телефони можна використовувати, але оптимізація ще не виконана. Рекомендується використовувати на комп'ютері або планшеті.";
var qa12_a$6 = "Чи є додаток або міні-програма?";
var qa12_q$6 = "Ні, тільки веб-сайт";
var qa13_a$6 = "Як надати відгук команді розробників?";
var qa13_q1$6 = "Ви можете приєднатися до нашої офіційної групи WeChat, детально описати функції, які ви хочете";
var qa13_q2$6 = "Якщо ви знайдете помилки в додатку, будь ласка, надайте детальний опис та кроки для відтворення";
var qa13_q3$6 = "Ви також можете надіслати нам заявку в службу підтримки";
var qa13_q4$6 = "Ви також можете надіслати на github/issues";
const uk = {
	app_desc: app_desc$6,
	app_name: app_name$6,
	start_word_practice: start_word_practice$6,
	start_article_practice: start_article_practice$6,
	home_word_practice: home_word_practice$6,
	home_word_practice_desc1: home_word_practice_desc1$6,
	home_word_practice_desc2: home_word_practice_desc2$6,
	home_word_practice_desc3: home_word_practice_desc3$6,
	home_article_practice: home_article_practice$6,
	home_article_practice_desc1: home_article_practice_desc1$6,
	home_article_practice_desc2: home_article_practice_desc2$6,
	home_article_practice_desc3: home_article_practice_desc3$6,
	home_collection: home_collection$6,
	home_collection_desc1: home_collection_desc1$6,
	home_collection_desc2: home_collection_desc2$6,
	home_collection_desc3: home_collection_desc3$6,
	home_vocabulary: home_vocabulary$6,
	home_vocabulary_desc: home_vocabulary_desc$6,
	home_free_opensource: home_free_opensource$6,
	home_free_opensource_desc1: home_free_opensource_desc1$6,
	home_free_opensource_desc2: home_free_opensource_desc2$6,
	home_free_opensource_desc3: home_free_opensource_desc3$6,
	home_customization: home_customization$6,
	home_customization_desc1: home_customization_desc1$6,
	home_customization_desc2: home_customization_desc2$6,
	home_customization_desc3: home_customization_desc3$6,
	home_design: home_design$6,
	home_design_desc1: home_design_desc1$6,
	home_design_desc2: home_design_desc2$6,
	home_design_desc3: home_design_desc3$6,
	home_personalized: home_personalized$6,
	home_personalized_desc1: home_personalized_desc1$6,
	home_personalized_desc2: home_personalized_desc2$6,
	home_personalized_desc3: home_personalized_desc3$6,
	cn_limit_no1: cn_limit_no1$6,
	cn_limit_no2: cn_limit_no2$6,
	setting: setting$6,
	edit: edit$6,
	"delete": "Видалити",
	cancel: cancel$6,
	confirm: confirm$6,
	save: save$6,
	close: close$6,
	search: search$6,
	more: more$6,
	loading: loading$6,
	introduction: introduction$6,
	learn: learn$6,
	practice: practice$6,
	test: test$6,
	feedback: feedback$6,
	document: document$6,
	help: help$6,
	about: about$6,
	login: login$6,
	register: register$6,
	register_account: register_account$6,
	register_new_account: register_new_account$6,
	code_login: code_login$6,
	password_login: password_login$6,
	phone_placeholder: phone_placeholder$6,
	code_placeholder: code_placeholder$6,
	account_placeholder: account_placeholder$6,
	password_placeholder: password_placeholder$6,
	auto_register_notice: auto_register_notice$6,
	forgot_password: forgot_password$6,
	reset_password: reset_password$6,
	set_password_placeholder: set_password_placeholder$6,
	confirm_password_placeholder: confirm_password_placeholder$6,
	new_password_placeholder: new_password_placeholder$6,
	confirm_new_password: confirm_new_password$6,
	wechat_scan_login: wechat_scan_login$6,
	scan_success: scan_success$6,
	tap_allow_in_wechat: tap_allow_in_wechat$6,
	login_cancelled: login_cancelled$6,
	login_again: login_again$6,
	sync_data: sync_data$6,
	local_data_detected: local_data_detected$6,
	sync_to_account_question: sync_to_account_question$6,
	no_sync: no_sync$6,
	sync: sync$6,
	syncing: syncing$6,
	sync_failed: sync_failed$6,
	sync_success: sync_success$6,
	enter_website: enter_website$6,
	general_settings: general_settings$6,
	word_settings: word_settings$6,
	article_settings: article_settings$6,
	data_management: data_management$6,
	shortcut_settings: shortcut_settings$6,
	update_log: update_log$6,
	"function": "Функція",
	shortcut_key: shortcut_key$6,
	no_shortcut_set: no_shortcut_set$6,
	press_key_to_set: press_key_to_set$6,
	click_here_when_done: click_here_when_done$6,
	restore_default: restore_default$6,
	data_saved_locally: data_saved_locally$6,
	export_data_backup: export_data_backup$6,
	import_data_restore: import_data_restore$6,
	import_warning: import_warning$6,
	words: words$6,
	no_dict_selected: no_dict_selected$6,
	select_dict_to_start: select_dict_to_start$6,
	select_dict: select_dict$6,
	change_progress: change_progress$6,
	estimated_completion: estimated_completion$6,
	current_progress: current_progress$6,
	learned: learned$6,
	completed_review_stage: completed_review_stage$6,
	today_task: today_task$6,
	last_task: last_task$6,
	word_list: word_list$6,
	daily_goal: daily_goal$6,
	words_count: words_count$6,
	change: change$6,
	new_words_count: new_words_count$6,
	review_last: review_last$6,
	review_previous: review_previous$6,
	start_learning: start_learning$6,
	continue_learning: continue_learning$6,
	free_practice: free_practice$6,
	continue_free_practice: continue_free_practice$6,
	smart_learning: smart_learning$6,
	review: review$6,
	random_review: random_review$6,
	my_dictionaries: my_dictionaries$6,
	manage_dict: manage_dict$6,
	create_personal_dict: create_personal_dict$6,
	recommend: recommend$6,
	articles: articles$6,
	this_week_record: this_week_record$6,
	change_book: change_book$6,
	today_study_time: today_study_time$6,
	total_study_days: total_study_days$6,
	total_study_time: total_study_time$6,
	my_books: my_books$6,
	manage_books: manage_books$6,
	create_personal_book: create_personal_book$6,
	article_management: article_management$6,
	toggle_translation: toggle_translation$6,
	switch_display_mode: switch_display_mode$6,
	line_by_line: line_by_line$6,
	single_line: single_line$6,
	comparison: comparison$6,
	question: question$6,
	study_record: study_record$6,
	play_next_after_end: play_next_after_end$6,
	create_book: create_book$6,
	edit_book: edit_book$6,
	dict_list: dict_list$6,
	book_list: book_list$6,
	word: word$6,
	phonetic: phonetic$6,
	translation: translation$6,
	example_sentence: example_sentence$6,
	phrase: phrase$6,
	synonym: synonym$6,
	related_words: related_words$6,
	etymology: etymology$6,
	add_word: add_word$6,
	edit_word: edit_word$6,
	create_dict: create_dict$6,
	edit_dict: edit_dict$6,
	"import": "Імпорт",
	"export": "Експорт",
	faq: faq$6,
	is_free: is_free$6,
	cannot_type: cannot_type$6,
	where_is_data: where_is_data$6,
	resource_sharing: resource_sharing$6,
	all_resources: all_resources$6,
	new_concept_english: new_concept_english$6,
	tv_movie: tv_movie$6,
	grammar_learning: grammar_learning$6,
	listening_training: listening_training$6,
	warm_tips: warm_tips$6,
	resources_from_internet: resources_from_internet$6,
	toggle_theme: toggle_theme$6,
	english_document: english_document$6,
	empty_placeholder: empty_placeholder$6,
	custom: custom$6,
	back: back$6,
	total_items: total_items$6,
	batch_delete: batch_delete$6,
	confirm_delete_selected: confirm_delete_selected$6,
	change_order: change_order$6,
	list_order_setting: list_order_setting$6,
	reverse_current_page: reverse_current_page$6,
	reverse_all: reverse_all$6,
	random_current_page: random_current_page$6,
	random_all: random_all$6,
	apply: apply$6,
	add: add$6,
	collect: collect$6,
	uncollect: uncollect$6,
	mark_mastered: mark_mastered$6,
	unmark_mastered: unmark_mastered$6,
	about_thanks: about_thanks$6,
	github_address: github_address$6,
	about_wechat_feedback: about_wechat_feedback$6,
	about_ticket_feedback: about_ticket_feedback$6,
	about_other_channels: about_other_channels$6,
	wait_translation: wait_translation$6,
	migrate_data: migrate_data$6,
	migrate_new_domain: migrate_new_domain$6,
	migrate_old_domain_notice: migrate_old_domain_notice$6,
	migrate_later_notice: migrate_later_notice$6,
	author: author$6,
	features: features$6,
	suitable_for: suitable_for$6,
	open_link: open_link$6,
	qq_group: qq_group$6,
	xiaohongshu: xiaohongshu$6,
	follow_x_account: follow_x_account$6,
	twitter: twitter$6,
	send_email: send_email$6,
	email: email$6,
	xiaohongshu_desc: xiaohongshu_desc$6,
	xiaohongshu_qrcode: xiaohongshu_qrcode$6,
	community_desc: community_desc$6,
	qq_qrcode: qq_qrcode$6,
	wechat_group: wechat_group$6,
	wechat_qrcode: wechat_qrcode$6,
	github_project: github_project$6,
	ie_not_supported: ie_not_supported$6,
	ie_use_modern_browser: ie_use_modern_browser$6,
	download_chrome: download_chrome$6,
	i_understand: i_understand$6,
	ignore_case: ignore_case$6,
	ignore_case_desc: ignore_case_desc$6,
	allow_dictation_tip: allow_dictation_tip$6,
	allow_dictation_tip_desc: allow_dictation_tip_desc$6,
	simple_word_filter: simple_word_filter$6,
	simple_word_filter_desc: simple_word_filter_desc$6,
	simple_word_list: simple_word_list$6,
	words_comma_separated: words_comma_separated$6,
	sound_effect: sound_effect$6,
	pronunciation_accent: pronunciation_accent$6,
	pronunciation_accent_desc: pronunciation_accent_desc$6,
	please_select: please_select$6,
	us_accent: us_accent$6,
	uk_accent: uk_accent$6,
	keyboard_sound: keyboard_sound$6,
	keyboard_sound_effect: keyboard_sound_effect$6,
	volume: volume$6,
	show_prev_next_word: show_prev_next_word$6,
	show_prev_next_word_desc: show_prev_next_word_desc$6,
	disable_practice_setting_dialog: disable_practice_setting_dialog$6,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$6,
	clear_input_on_error: clear_input_on_error$6,
	word_repeat_setting: word_repeat_setting$6,
	repeat_count: repeat_count$6,
	review_ratio: review_ratio$6,
	review_ratio_desc: review_ratio_desc$6,
	word_auto_pronunciation: word_auto_pronunciation$6,
	speed: speed$6,
	effect_sound: effect_sound$6,
	auto_switch: auto_switch$6,
	auto_next_word: auto_next_word$6,
	auto_next_word_desc: auto_next_word_desc$6,
	auto_next_word_time: auto_next_word_time$6,
	auto_next_word_time_desc: auto_next_word_time_desc$6,
	milliseconds: milliseconds$6,
	font_setting: font_setting$6,
	foreign_font: foreign_font$6,
	chinese_font: chinese_font$6,
	auto_play_sentence: auto_play_sentence$6,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$6,
	settings: settings$6,
	please_select_dict: please_select_dict$6,
	learning_settings: learning_settings$6,
	total: total$6,
	estimated: estimated$6,
	days_to_complete: days_to_complete$6,
	from_word: from_word$6,
	start_daily: start_daily$6,
	new_words: new_words$6,
	review_ratio_tooltip: review_ratio_tooltip$6,
	review_ratio_notice_1: review_ratio_notice_1$6,
	review_ratio_notice_2: review_ratio_notice_2$6,
	daily_learning: daily_learning$6,
	learning_progress: learning_progress$6,
	select_from_dict: select_from_dict$6,
	change_in_settings: change_in_settings$6,
	keep_default_no_show: keep_default_no_show$6,
	review_complete: review_complete$6,
	today_task_complete: today_task_complete$6,
	study_duration: study_duration$6,
	accuracy_rate: accuracy_rate$6,
	weekly_study_record: weekly_study_record$6,
	studied: studied$6,
	total_words: total_words$6,
	restart_learning: restart_learning$6,
	another_round: another_round$6,
	return_home: return_home$6,
	import_tutorial: import_tutorial$6,
	import_follow_template: import_follow_template$6,
	import_word_required: import_word_required$6,
	import_translation_hint: import_translation_hint$6,
	import_example_hint: import_example_hint$6,
	import_phrase_hint: import_phrase_hint$6,
	two: two$6,
	lines: lines$6,
	import_other_hint: import_other_hint$6,
	template_download: template_download$6,
	word_import_template: word_import_template$6,
	conflict_notice_title: conflict_notice_title$6,
	keyboard_no_response: keyboard_no_response$6,
	check_plugins_installed: check_plugins_installed$6,
	conflict_plugin_names: conflict_plugin_names$6,
	plugins_intercept_keyboard: plugins_intercept_keyboard$6,
	cause_no_response: cause_no_response$6,
	follow_steps_to_resolve: follow_steps_to_resolve$6,
	try_incognito_mode: try_incognito_mode$6,
	incognito_not_working: incognito_not_working$6,
	click_here: click_here$6,
	feedback_or_wechat: feedback_or_wechat$6,
	incognito_working: incognito_working$6,
	disable_plugin_or_exclude: disable_plugin_or_exclude$6,
	install_extension_manager: install_extension_manager$6,
	chrome_extension: chrome_extension$6,
	edge_extension: edge_extension$6,
	to_manage_extensions: to_manage_extensions$6,
	delete_key_goes_back: delete_key_goes_back$6,
	browser_360_shortcut: browser_360_shortcut$6,
	change_browser_or_shortcut: change_browser_or_shortcut$6,
	please_enter_name: please_enter_name$6,
	name_max_20_chars: name_max_20_chars$6,
	name_already_exists: name_already_exists$6,
	add_success: add_success$6,
	edit_success: edit_success$6,
	edit_and_add_to_dict: edit_and_add_to_dict$6,
	please_fill_complete: please_fill_complete$6,
	name: name$6,
	description: description$6,
	source_language: source_language$6,
	target_language: target_language$6,
	english: english$6,
	german: german$6,
	japanese: japanese$6,
	code: code$6,
	chinese: chinese$6,
	multiple_choice: multiple_choice$6,
	start: start$6,
	countdown: countdown$6,
	seconds: seconds$6,
	submit_exam: submit_exam$6,
	exam_color_hint: exam_color_hint$6,
	items_per_page: items_per_page$6,
	jump_to: jump_to$6,
	page_or_index: page_or_index$6,
	please_fill_original: please_fill_original$6,
	please_fill_title: please_fill_title$6,
	please_fill_content: please_fill_content$6,
	audio_added_success: audio_added_success$6,
	lrc_parse_success: lrc_parse_success$6,
	original_text: original_text$6,
	title: title$6,
	please_fill_original_title: please_fill_original_title$6,
	content: content$6,
	one_sentence_per_line: one_sentence_per_line$6,
	name_config_tip: name_config_tip$6,
	name_config: name_config$6,
	please_paste_original: please_paste_original$6,
	usage_guide: usage_guide$6,
	copy_and_split: copy_and_split$6,
	click: click$6,
	split_sentence: split_sentence$6,
	auto_split: auto_split$6,
	or: or$6,
	manual_split: manual_split$6,
	split_rule: split_rule$6,
	after_edit_click: after_edit_click$6,
	sync_to_result: sync_to_result$6,
	please_fill_translation_title: please_fill_translation_title$6,
	please_fill_translation: please_fill_translation$6,
	translate: translate$6,
	copy_translation_or_click: copy_translation_or_click$6,
	result: result$6,
	editable_auto_sync: editable_auto_sync$6,
	audio: audio$6,
	audio_management: audio_management$6,
	paragraph: paragraph$6,
	set_start_time: set_start_time$6,
	use_prev_end_time: use_prev_end_time$6,
	minus_03s: minus_03s$6,
	end: end$6,
	set_end_time: set_end_time$6,
	edit_audio_align: edit_audio_align$6,
	play: play$6,
	status: status$6,
	sentences_not_translated: sentences_not_translated$6,
	translation_complete: translation_complete$6,
	save_and_next: save_and_next$6,
	no_translation_comparison: no_translation_comparison$6,
	adjust_audio_timeline: adjust_audio_timeline$6,
	audio_timeline_tutorial: audio_timeline_tutorial$6,
	start_time: start_time$6,
	jump_to_seconds: jump_to_seconds$6,
	use_prev_end_seconds: use_prev_end_seconds$6,
	decrease_03s: decrease_03s$6,
	increase_03s: increase_03s$6,
	record: record$6,
	end_time: end_time$6,
	audio_upload_notice: audio_upload_notice$6,
	upload_audio: upload_audio$6,
	upload_lrc: upload_lrc$6,
	name_management: name_management$6,
	name_ignore_config_desc: name_ignore_config_desc$6,
	add_name: add_name$6,
	enter_name: enter_name$6,
	collect_word: collect_word$6,
	copy: copy$6,
	copy_sentence: copy_sentence$6,
	copied: copied$6,
	copy_word: copy_word$6,
	start_from_here: start_from_here$6,
	play_sentence: play_sentence$6,
	grammar_analysis: grammar_analysis$6,
	copied_open_grammar: copied_open_grammar$6,
	youdao_translate: youdao_translate$6,
	translate_word: translate_word$6,
	translate_sentence: translate_sentence$6,
	restart_practice: restart_practice$6,
	next_article: next_article$6,
	learning_record: learning_record$6,
	total_learning_time: total_learning_time$6,
	current: current$6,
	show_questions: show_questions$6,
	explanation: explanation$6,
	encouragement_95: encouragement_95$6,
	encouragement_85: encouragement_85$6,
	encouragement_70: encouragement_70$6,
	encouragement_default: encouragement_default$6,
	daily_task_complete: daily_task_complete$6,
	weekly_record: weekly_record$6,
	study_progress: study_progress$6,
	relearn: relearn$6,
	start_from_beginning: start_from_beginning$6,
	another_group: another_group$6,
	back_to_home: back_to_home$6,
	know_word_tip: know_word_tip$6,
	press_delete_reinput: press_delete_reinput$6,
	press_space_continue: press_space_continue$6,
	shortcut: shortcut$6,
	i_know: i_know$6,
	i_dont_know: i_dont_know$6,
	phrases: phrases$6,
	synonyms: synonyms$6,
	word_root: word_root$6,
	review_wrong_words: review_wrong_words$6,
	collapse: collapse$6,
	expand: expand$6,
	minutes: minutes$6,
	time: time$6,
	errors: errors$6,
	skip_to_next_stage: skip_to_next_stage$6,
	skip_word: skip_word$6,
	toggle_dictation_mode: toggle_dictation_mode$6,
	send_failed: send_failed$6,
	send_code_failed: send_code_failed$6,
	sending: sending$6,
	send_code: send_code$6,
	agree_terms_notice: agree_terms_notice$6,
	user_agreement: user_agreement$6,
	and: and$6,
	privacy_policy: privacy_policy$6,
	important_notice: important_notice$6,
	dont_remind: dont_remind$6,
	function_desc: function_desc$6,
	qa1_a: qa1_a$6,
	qa1_q1: qa1_q1$6,
	qa1_q2: qa1_q2$6,
	qa2_a: qa2_a$6,
	qa3_a: qa3_a$6,
	qa3_q1: qa3_q1$6,
	qa3_q2: qa3_q2$6,
	qa3_q3: qa3_q3$6,
	qa4_a: qa4_a$6,
	qa4_q1: qa4_q1$6,
	qa4_q2: qa4_q2$6,
	qa5_a: qa5_a$6,
	qa5_q1: qa5_q1$6,
	qa5_q2: qa5_q2$6,
	qa5_q3: qa5_q3$6,
	qa5_q4: qa5_q4$6,
	qa6_a: qa6_a$6,
	qa7_a: qa7_a$6,
	qa7_q1: qa7_q1$6,
	qa7_q2: qa7_q2$6,
	qa7_q3: qa7_q3$6,
	qa8_a: qa8_a$6,
	qa8_q1: qa8_q1$6,
	qa8_q2: qa8_q2$6,
	qa8_q3: qa8_q3$6,
	qa9_a: qa9_a$6,
	qa9_q: qa9_q$6,
	qa10_a: qa10_a$6,
	qa10_q1: qa10_q1$6,
	qa10_q2: qa10_q2$6,
	qa11_a: qa11_a$6,
	qa11_q: qa11_q$6,
	qa12_a: qa12_a$6,
	qa12_q: qa12_q$6,
	qa13_a: qa13_a$6,
	qa13_q1: qa13_q1$6,
	qa13_q2: qa13_q2$6,
	qa13_q3: qa13_q3$6,
	qa13_q4: qa13_q4$6
};

const uk$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$6,
  about_other_channels: about_other_channels$6,
  about_thanks: about_thanks$6,
  about_ticket_feedback: about_ticket_feedback$6,
  about_wechat_feedback: about_wechat_feedback$6,
  account_placeholder: account_placeholder$6,
  accuracy_rate: accuracy_rate$6,
  add: add$6,
  add_name: add_name$6,
  add_success: add_success$6,
  add_word: add_word$6,
  adjust_audio_timeline: adjust_audio_timeline$6,
  after_edit_click: after_edit_click$6,
  agree_terms_notice: agree_terms_notice$6,
  all_resources: all_resources$6,
  allow_dictation_tip: allow_dictation_tip$6,
  allow_dictation_tip_desc: allow_dictation_tip_desc$6,
  and: and$6,
  another_group: another_group$6,
  another_round: another_round$6,
  app_desc: app_desc$6,
  app_name: app_name$6,
  apply: apply$6,
  article_management: article_management$6,
  article_settings: article_settings$6,
  articles: articles$6,
  audio: audio$6,
  audio_added_success: audio_added_success$6,
  audio_management: audio_management$6,
  audio_timeline_tutorial: audio_timeline_tutorial$6,
  audio_upload_notice: audio_upload_notice$6,
  author: author$6,
  auto_next_word: auto_next_word$6,
  auto_next_word_desc: auto_next_word_desc$6,
  auto_next_word_time: auto_next_word_time$6,
  auto_next_word_time_desc: auto_next_word_time_desc$6,
  auto_play_sentence: auto_play_sentence$6,
  auto_register_notice: auto_register_notice$6,
  auto_split: auto_split$6,
  auto_switch: auto_switch$6,
  back: back$6,
  back_to_home: back_to_home$6,
  batch_delete: batch_delete$6,
  book_list: book_list$6,
  browser_360_shortcut: browser_360_shortcut$6,
  cancel: cancel$6,
  cannot_type: cannot_type$6,
  cause_no_response: cause_no_response$6,
  change: change$6,
  change_book: change_book$6,
  change_browser_or_shortcut: change_browser_or_shortcut$6,
  change_in_settings: change_in_settings$6,
  change_order: change_order$6,
  change_progress: change_progress$6,
  check_plugins_installed: check_plugins_installed$6,
  chinese: chinese$6,
  chinese_font: chinese_font$6,
  chrome_extension: chrome_extension$6,
  clear_input_on_error: clear_input_on_error$6,
  click: click$6,
  click_here: click_here$6,
  click_here_when_done: click_here_when_done$6,
  close: close$6,
  cn_limit_no1: cn_limit_no1$6,
  cn_limit_no2: cn_limit_no2$6,
  code: code$6,
  code_login: code_login$6,
  code_placeholder: code_placeholder$6,
  collapse: collapse$6,
  collect: collect$6,
  collect_word: collect_word$6,
  community_desc: community_desc$6,
  comparison: comparison$6,
  completed_review_stage: completed_review_stage$6,
  confirm: confirm$6,
  confirm_delete_selected: confirm_delete_selected$6,
  confirm_new_password: confirm_new_password$6,
  confirm_password_placeholder: confirm_password_placeholder$6,
  conflict_notice_title: conflict_notice_title$6,
  conflict_plugin_names: conflict_plugin_names$6,
  content: content$6,
  continue_free_practice: continue_free_practice$6,
  continue_learning: continue_learning$6,
  copied: copied$6,
  copied_open_grammar: copied_open_grammar$6,
  copy: copy$6,
  copy_and_split: copy_and_split$6,
  copy_sentence: copy_sentence$6,
  copy_translation_or_click: copy_translation_or_click$6,
  copy_word: copy_word$6,
  countdown: countdown$6,
  create_book: create_book$6,
  create_dict: create_dict$6,
  create_personal_book: create_personal_book$6,
  create_personal_dict: create_personal_dict$6,
  current: current$6,
  current_progress: current_progress$6,
  custom: custom$6,
  daily_goal: daily_goal$6,
  daily_learning: daily_learning$6,
  daily_task_complete: daily_task_complete$6,
  data_management: data_management$6,
  data_saved_locally: data_saved_locally$6,
  days_to_complete: days_to_complete$6,
  decrease_03s: decrease_03s$6,
  default: uk,
  delete_key_goes_back: delete_key_goes_back$6,
  description: description$6,
  dict_list: dict_list$6,
  disable_plugin_or_exclude: disable_plugin_or_exclude$6,
  disable_practice_setting_dialog: disable_practice_setting_dialog$6,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$6,
  document: document$6,
  dont_remind: dont_remind$6,
  download_chrome: download_chrome$6,
  edge_extension: edge_extension$6,
  edit: edit$6,
  edit_and_add_to_dict: edit_and_add_to_dict$6,
  edit_audio_align: edit_audio_align$6,
  edit_book: edit_book$6,
  edit_dict: edit_dict$6,
  edit_success: edit_success$6,
  edit_word: edit_word$6,
  editable_auto_sync: editable_auto_sync$6,
  effect_sound: effect_sound$6,
  email: email$6,
  empty_placeholder: empty_placeholder$6,
  encouragement_70: encouragement_70$6,
  encouragement_85: encouragement_85$6,
  encouragement_95: encouragement_95$6,
  encouragement_default: encouragement_default$6,
  end: end$6,
  end_time: end_time$6,
  english: english$6,
  english_document: english_document$6,
  enter_name: enter_name$6,
  enter_website: enter_website$6,
  errors: errors$6,
  estimated: estimated$6,
  estimated_completion: estimated_completion$6,
  etymology: etymology$6,
  exam_color_hint: exam_color_hint$6,
  example_sentence: example_sentence$6,
  expand: expand$6,
  explanation: explanation$6,
  export_data_backup: export_data_backup$6,
  faq: faq$6,
  features: features$6,
  feedback: feedback$6,
  feedback_or_wechat: feedback_or_wechat$6,
  follow_steps_to_resolve: follow_steps_to_resolve$6,
  follow_x_account: follow_x_account$6,
  font_setting: font_setting$6,
  foreign_font: foreign_font$6,
  forgot_password: forgot_password$6,
  free_practice: free_practice$6,
  from_word: from_word$6,
  function_desc: function_desc$6,
  general_settings: general_settings$6,
  german: german$6,
  github_address: github_address$6,
  github_project: github_project$6,
  grammar_analysis: grammar_analysis$6,
  grammar_learning: grammar_learning$6,
  help: help$6,
  home_article_practice: home_article_practice$6,
  home_article_practice_desc1: home_article_practice_desc1$6,
  home_article_practice_desc2: home_article_practice_desc2$6,
  home_article_practice_desc3: home_article_practice_desc3$6,
  home_collection: home_collection$6,
  home_collection_desc1: home_collection_desc1$6,
  home_collection_desc2: home_collection_desc2$6,
  home_collection_desc3: home_collection_desc3$6,
  home_customization: home_customization$6,
  home_customization_desc1: home_customization_desc1$6,
  home_customization_desc2: home_customization_desc2$6,
  home_customization_desc3: home_customization_desc3$6,
  home_design: home_design$6,
  home_design_desc1: home_design_desc1$6,
  home_design_desc2: home_design_desc2$6,
  home_design_desc3: home_design_desc3$6,
  home_free_opensource: home_free_opensource$6,
  home_free_opensource_desc1: home_free_opensource_desc1$6,
  home_free_opensource_desc2: home_free_opensource_desc2$6,
  home_free_opensource_desc3: home_free_opensource_desc3$6,
  home_personalized: home_personalized$6,
  home_personalized_desc1: home_personalized_desc1$6,
  home_personalized_desc2: home_personalized_desc2$6,
  home_personalized_desc3: home_personalized_desc3$6,
  home_vocabulary: home_vocabulary$6,
  home_vocabulary_desc: home_vocabulary_desc$6,
  home_word_practice: home_word_practice$6,
  home_word_practice_desc1: home_word_practice_desc1$6,
  home_word_practice_desc2: home_word_practice_desc2$6,
  home_word_practice_desc3: home_word_practice_desc3$6,
  i_dont_know: i_dont_know$6,
  i_know: i_know$6,
  i_understand: i_understand$6,
  ie_not_supported: ie_not_supported$6,
  ie_use_modern_browser: ie_use_modern_browser$6,
  ignore_case: ignore_case$6,
  ignore_case_desc: ignore_case_desc$6,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$6,
  import_data_restore: import_data_restore$6,
  import_example_hint: import_example_hint$6,
  import_follow_template: import_follow_template$6,
  import_other_hint: import_other_hint$6,
  import_phrase_hint: import_phrase_hint$6,
  import_translation_hint: import_translation_hint$6,
  import_tutorial: import_tutorial$6,
  import_warning: import_warning$6,
  import_word_required: import_word_required$6,
  important_notice: important_notice$6,
  incognito_not_working: incognito_not_working$6,
  incognito_working: incognito_working$6,
  increase_03s: increase_03s$6,
  install_extension_manager: install_extension_manager$6,
  introduction: introduction$6,
  is_free: is_free$6,
  items_per_page: items_per_page$6,
  japanese: japanese$6,
  jump_to: jump_to$6,
  jump_to_seconds: jump_to_seconds$6,
  keep_default_no_show: keep_default_no_show$6,
  keyboard_no_response: keyboard_no_response$6,
  keyboard_sound: keyboard_sound$6,
  keyboard_sound_effect: keyboard_sound_effect$6,
  know_word_tip: know_word_tip$6,
  last_task: last_task$6,
  learn: learn$6,
  learned: learned$6,
  learning_progress: learning_progress$6,
  learning_record: learning_record$6,
  learning_settings: learning_settings$6,
  line_by_line: line_by_line$6,
  lines: lines$6,
  list_order_setting: list_order_setting$6,
  listening_training: listening_training$6,
  loading: loading$6,
  local_data_detected: local_data_detected$6,
  login: login$6,
  login_again: login_again$6,
  login_cancelled: login_cancelled$6,
  lrc_parse_success: lrc_parse_success$6,
  manage_books: manage_books$6,
  manage_dict: manage_dict$6,
  manual_split: manual_split$6,
  mark_mastered: mark_mastered$6,
  migrate_data: migrate_data$6,
  migrate_later_notice: migrate_later_notice$6,
  migrate_new_domain: migrate_new_domain$6,
  migrate_old_domain_notice: migrate_old_domain_notice$6,
  milliseconds: milliseconds$6,
  minus_03s: minus_03s$6,
  minutes: minutes$6,
  more: more$6,
  multiple_choice: multiple_choice$6,
  my_books: my_books$6,
  my_dictionaries: my_dictionaries$6,
  name: name$6,
  name_already_exists: name_already_exists$6,
  name_config: name_config$6,
  name_config_tip: name_config_tip$6,
  name_ignore_config_desc: name_ignore_config_desc$6,
  name_management: name_management$6,
  name_max_20_chars: name_max_20_chars$6,
  new_concept_english: new_concept_english$6,
  new_password_placeholder: new_password_placeholder$6,
  new_words: new_words$6,
  new_words_count: new_words_count$6,
  next_article: next_article$6,
  no_dict_selected: no_dict_selected$6,
  no_shortcut_set: no_shortcut_set$6,
  no_sync: no_sync$6,
  no_translation_comparison: no_translation_comparison$6,
  one_sentence_per_line: one_sentence_per_line$6,
  open_link: open_link$6,
  or: or$6,
  original_text: original_text$6,
  page_or_index: page_or_index$6,
  paragraph: paragraph$6,
  password_login: password_login$6,
  password_placeholder: password_placeholder$6,
  phone_placeholder: phone_placeholder$6,
  phonetic: phonetic$6,
  phrase: phrase$6,
  phrases: phrases$6,
  play: play$6,
  play_next_after_end: play_next_after_end$6,
  play_sentence: play_sentence$6,
  please_enter_name: please_enter_name$6,
  please_fill_complete: please_fill_complete$6,
  please_fill_content: please_fill_content$6,
  please_fill_original: please_fill_original$6,
  please_fill_original_title: please_fill_original_title$6,
  please_fill_title: please_fill_title$6,
  please_fill_translation: please_fill_translation$6,
  please_fill_translation_title: please_fill_translation_title$6,
  please_paste_original: please_paste_original$6,
  please_select: please_select$6,
  please_select_dict: please_select_dict$6,
  plugins_intercept_keyboard: plugins_intercept_keyboard$6,
  practice: practice$6,
  press_delete_reinput: press_delete_reinput$6,
  press_key_to_set: press_key_to_set$6,
  press_space_continue: press_space_continue$6,
  privacy_policy: privacy_policy$6,
  pronunciation_accent: pronunciation_accent$6,
  pronunciation_accent_desc: pronunciation_accent_desc$6,
  qa10_a: qa10_a$6,
  qa10_q1: qa10_q1$6,
  qa10_q2: qa10_q2$6,
  qa11_a: qa11_a$6,
  qa11_q: qa11_q$6,
  qa12_a: qa12_a$6,
  qa12_q: qa12_q$6,
  qa13_a: qa13_a$6,
  qa13_q1: qa13_q1$6,
  qa13_q2: qa13_q2$6,
  qa13_q3: qa13_q3$6,
  qa13_q4: qa13_q4$6,
  qa1_a: qa1_a$6,
  qa1_q1: qa1_q1$6,
  qa1_q2: qa1_q2$6,
  qa2_a: qa2_a$6,
  qa3_a: qa3_a$6,
  qa3_q1: qa3_q1$6,
  qa3_q2: qa3_q2$6,
  qa3_q3: qa3_q3$6,
  qa4_a: qa4_a$6,
  qa4_q1: qa4_q1$6,
  qa4_q2: qa4_q2$6,
  qa5_a: qa5_a$6,
  qa5_q1: qa5_q1$6,
  qa5_q2: qa5_q2$6,
  qa5_q3: qa5_q3$6,
  qa5_q4: qa5_q4$6,
  qa6_a: qa6_a$6,
  qa7_a: qa7_a$6,
  qa7_q1: qa7_q1$6,
  qa7_q2: qa7_q2$6,
  qa7_q3: qa7_q3$6,
  qa8_a: qa8_a$6,
  qa8_q1: qa8_q1$6,
  qa8_q2: qa8_q2$6,
  qa8_q3: qa8_q3$6,
  qa9_a: qa9_a$6,
  qa9_q: qa9_q$6,
  qq_group: qq_group$6,
  qq_qrcode: qq_qrcode$6,
  question: question$6,
  random_all: random_all$6,
  random_current_page: random_current_page$6,
  random_review: random_review$6,
  recommend: recommend$6,
  record: record$6,
  register: register$6,
  register_account: register_account$6,
  register_new_account: register_new_account$6,
  related_words: related_words$6,
  relearn: relearn$6,
  repeat_count: repeat_count$6,
  reset_password: reset_password$6,
  resource_sharing: resource_sharing$6,
  resources_from_internet: resources_from_internet$6,
  restart_learning: restart_learning$6,
  restart_practice: restart_practice$6,
  restore_default: restore_default$6,
  result: result$6,
  return_home: return_home$6,
  reverse_all: reverse_all$6,
  reverse_current_page: reverse_current_page$6,
  review: review$6,
  review_complete: review_complete$6,
  review_last: review_last$6,
  review_previous: review_previous$6,
  review_ratio: review_ratio$6,
  review_ratio_desc: review_ratio_desc$6,
  review_ratio_notice_1: review_ratio_notice_1$6,
  review_ratio_notice_2: review_ratio_notice_2$6,
  review_ratio_tooltip: review_ratio_tooltip$6,
  review_wrong_words: review_wrong_words$6,
  save: save$6,
  save_and_next: save_and_next$6,
  scan_success: scan_success$6,
  search: search$6,
  seconds: seconds$6,
  select_dict: select_dict$6,
  select_dict_to_start: select_dict_to_start$6,
  select_from_dict: select_from_dict$6,
  send_code: send_code$6,
  send_code_failed: send_code_failed$6,
  send_email: send_email$6,
  send_failed: send_failed$6,
  sending: sending$6,
  sentences_not_translated: sentences_not_translated$6,
  set_end_time: set_end_time$6,
  set_password_placeholder: set_password_placeholder$6,
  set_start_time: set_start_time$6,
  setting: setting$6,
  settings: settings$6,
  shortcut: shortcut$6,
  shortcut_key: shortcut_key$6,
  shortcut_settings: shortcut_settings$6,
  show_prev_next_word: show_prev_next_word$6,
  show_prev_next_word_desc: show_prev_next_word_desc$6,
  show_questions: show_questions$6,
  simple_word_filter: simple_word_filter$6,
  simple_word_filter_desc: simple_word_filter_desc$6,
  simple_word_list: simple_word_list$6,
  single_line: single_line$6,
  skip_to_next_stage: skip_to_next_stage$6,
  skip_word: skip_word$6,
  smart_learning: smart_learning$6,
  sound_effect: sound_effect$6,
  source_language: source_language$6,
  speed: speed$6,
  split_rule: split_rule$6,
  split_sentence: split_sentence$6,
  start: start$6,
  start_article_practice: start_article_practice$6,
  start_daily: start_daily$6,
  start_from_beginning: start_from_beginning$6,
  start_from_here: start_from_here$6,
  start_learning: start_learning$6,
  start_time: start_time$6,
  start_word_practice: start_word_practice$6,
  status: status$6,
  studied: studied$6,
  study_duration: study_duration$6,
  study_progress: study_progress$6,
  study_record: study_record$6,
  submit_exam: submit_exam$6,
  suitable_for: suitable_for$6,
  switch_display_mode: switch_display_mode$6,
  sync: sync$6,
  sync_data: sync_data$6,
  sync_failed: sync_failed$6,
  sync_success: sync_success$6,
  sync_to_account_question: sync_to_account_question$6,
  sync_to_result: sync_to_result$6,
  syncing: syncing$6,
  synonym: synonym$6,
  synonyms: synonyms$6,
  tap_allow_in_wechat: tap_allow_in_wechat$6,
  target_language: target_language$6,
  template_download: template_download$6,
  test: test$6,
  this_week_record: this_week_record$6,
  time: time$6,
  title: title$6,
  to_manage_extensions: to_manage_extensions$6,
  today_study_time: today_study_time$6,
  today_task: today_task$6,
  today_task_complete: today_task_complete$6,
  toggle_dictation_mode: toggle_dictation_mode$6,
  toggle_theme: toggle_theme$6,
  toggle_translation: toggle_translation$6,
  total: total$6,
  total_items: total_items$6,
  total_learning_time: total_learning_time$6,
  total_study_days: total_study_days$6,
  total_study_time: total_study_time$6,
  total_words: total_words$6,
  translate: translate$6,
  translate_sentence: translate_sentence$6,
  translate_word: translate_word$6,
  translation: translation$6,
  translation_complete: translation_complete$6,
  try_incognito_mode: try_incognito_mode$6,
  tv_movie: tv_movie$6,
  twitter: twitter$6,
  two: two$6,
  uk_accent: uk_accent$6,
  uncollect: uncollect$6,
  unmark_mastered: unmark_mastered$6,
  update_log: update_log$6,
  upload_audio: upload_audio$6,
  upload_lrc: upload_lrc$6,
  us_accent: us_accent$6,
  usage_guide: usage_guide$6,
  use_prev_end_seconds: use_prev_end_seconds$6,
  use_prev_end_time: use_prev_end_time$6,
  user_agreement: user_agreement$6,
  volume: volume$6,
  wait_translation: wait_translation$6,
  warm_tips: warm_tips$6,
  wechat_group: wechat_group$6,
  wechat_qrcode: wechat_qrcode$6,
  wechat_scan_login: wechat_scan_login$6,
  weekly_record: weekly_record$6,
  weekly_study_record: weekly_study_record$6,
  where_is_data: where_is_data$6,
  word: word$6,
  word_auto_pronunciation: word_auto_pronunciation$6,
  word_import_template: word_import_template$6,
  word_list: word_list$6,
  word_repeat_setting: word_repeat_setting$6,
  word_root: word_root$6,
  word_settings: word_settings$6,
  words: words$6,
  words_comma_separated: words_comma_separated$6,
  words_count: words_count$6,
  xiaohongshu: xiaohongshu$6,
  xiaohongshu_desc: xiaohongshu_desc$6,
  xiaohongshu_qrcode: xiaohongshu_qrcode$6,
  youdao_translate: youdao_translate$6
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$5 = "英語を学ぶ、一打一進歩、オープンソースの単語と文章練習ツール";
var app_name$5 = "Type Words";
var start_word_practice$5 = "単語練習を開始";
var start_article_practice$5 = "文章練習を開始";
var home_word_practice$5 = "単語練習";
var home_word_practice_desc1$5 = "練習モード：タイピング/ディクテーション/セルフテスト/暗唱";
var home_word_practice_desc2$5 = "スマート学習：復習のインテリジェント計画";
var home_word_practice_desc3$5 = "自由学習：制限なし、自分で計画";
var home_article_practice$5 = "文章練習";
var home_article_practice_desc1$5 = "一般書籍内蔵、記事も追加可能";
var home_article_practice_desc2$5 = "タイピング＋暗唱デュアルモード";
var home_article_practice_desc3$5 = "聴きながら暗唱をサポート";
var home_collection$5 = "お気に入り、間違い、習得済み";
var home_collection_desc1$5 = "入力ミスは自動的に間違い帳に追加";
var home_collection_desc2$5 = "習得済みに追加、後で自動スキップ";
var home_collection_desc3$5 = "お気に入りに追加して復習";
var home_vocabulary$5 = "膨大な語彙";
var home_vocabulary_desc$5 = "小学校から上級までの語彙を内蔵";
var home_free_opensource$5 = "無料＆オープンソース";
var home_free_opensource_desc1$5 = "完全オープンソース、監査可能";
var home_free_opensource_desc2$5 = "無料で使用";
var home_free_opensource_desc3$5 = "プライベートデプロイ";
var home_customization$5 = "高度にカスタマイズ可能";
var home_customization_desc1$5 = "豊富なキーボードサウンド";
var home_customization_desc2$5 = "カスタマイズ可能なショートカット";
var home_customization_desc3$5 = "高度にカスタマイズ可能な設定";
var home_design$5 = "シンプル＆効率的";
var home_design_desc1$5 = "シンプルデザイン、モダンUI";
var home_design_desc2$5 = "クリーンなインターフェース、シンプル操作";
var home_design_desc3$5 = "どのプラットフォームも強制なし";
var home_personalized$5 = "パーソナライズ学習";
var home_personalized_desc1$5 = "辞書や記事を自由に追加";
var home_personalized_desc2$5 = "パーソナライズ学習プランをカスタマイズ";
var home_personalized_desc3$5 = "複数の学習・復習戦略";
var cn_limit_no1$5 = "川公网安备51015602001426号";
var cn_limit_no2$5 = "蜀ICP备2025157466号-2";
var setting$5 = "設定";
var edit$5 = "編集";
var cancel$5 = "キャンセル";
var confirm$5 = "確認";
var save$5 = "保存";
var close$5 = "閉じる";
var search$5 = "検索";
var more$5 = "もっと見る";
var loading$5 = "読み込み中";
var introduction$5 = "紹介";
var learn$5 = "学習";
var practice$5 = "練習";
var test$5 = "テスト";
var feedback$5 = "フィードバック";
var document$5 = "資料";
var help$5 = "ヘルプ";
var about$5 = "概要";
var login$5 = "ログイン";
var register$5 = "登録";
var register_account$5 = "アカウント登録";
var register_new_account$5 = "新規アカウント登録";
var code_login$5 = "認証コードログイン";
var password_login$5 = "パスワードログイン";
var phone_placeholder$5 = "電話番号を入力してください";
var code_placeholder$5 = "認証コードを入力してください";
var account_placeholder$5 = "電話番号/メールアドレスを入力";
var password_placeholder$5 = "パスワードを入力してください";
var auto_register_notice$5 = "未登録の電話番号は自動登録されます";
var forgot_password$5 = "パスワードを忘れた？";
var reset_password$5 = "パスワードをリセット";
var set_password_placeholder$5 = "パスワードを設定してください";
var confirm_password_placeholder$5 = "パスワードを確認してください";
var new_password_placeholder$5 = "新しいパスワードを入力";
var confirm_new_password$5 = "新しいパスワードを確認";
var wechat_scan_login$5 = "WeChatスキャンログイン";
var scan_success$5 = "スキャン成功";
var tap_allow_in_wechat$5 = "WeChatで許可をタップしてログイン";
var login_cancelled$5 = "ログインキャンセル";
var login_again$5 = "再度ログイン";
var sync_data$5 = "データ同期";
var local_data_detected$5 = "ローカルデータが検出されました";
var sync_to_account_question$5 = "アカウントに同期しますか？";
var no_sync$5 = "同期しない";
var sync$5 = "同期";
var syncing$5 = "同期中";
var sync_failed$5 = "同期失敗";
var sync_success$5 = "同期成功";
var enter_website$5 = "サイトに入る";
var general_settings$5 = "一般設定";
var word_settings$5 = "単語設定";
var article_settings$5 = "記事設定";
var data_management$5 = "データ管理";
var shortcut_settings$5 = "ショートカット設定";
var update_log$5 = "更新ログ";
var shortcut_key$5 = "ショートカット（クリックで変更）";
var no_shortcut_set$5 = "ショートカット未設定";
var press_key_to_set$5 = "キーを押して設定";
var click_here_when_done$5 = "完了したらここをクリック";
var restore_default$5 = "デフォルトに戻す";
var data_saved_locally$5 = "すべてのデータはブラウザにローカル保存";
var export_data_backup$5 = "データバックアップをエクスポート (ZIP)";
var import_data_restore$5 = "データ復元をインポート";
var import_warning$5 = "インポートは現在のすべてのデータを上書きします";
var words$5 = "単語";
var no_dict_selected$5 = "現在学習中の辞書がありません";
var select_dict_to_start$5 = "辞書を選択して学習を開始してください";
var select_dict$5 = "辞書を選択";
var change_progress$5 = "進度を変更";
var estimated_completion$5 = "完了予定";
var current_progress$5 = "現在の進度";
var learned$5 = "学習済み";
var completed_review_stage$5 = "完了、復習段階に入ります";
var today_task$5 = "今日のタスク";
var last_task$5 = "前回のタスク";
var word_list$5 = "単語リスト";
var daily_goal$5 = "毎日の目標";
var words_count$5 = "単語";
var change$5 = "変更";
var new_words_count$5 = "新単語数";
var review_last$5 = "前回を復習";
var review_previous$5 = "以前を復習";
var start_learning$5 = "学習を開始";
var continue_learning$5 = "学習を続ける";
var free_practice$5 = "自由練習";
var continue_free_practice$5 = "自由練習を続ける";
var smart_learning$5 = "スマート学習";
var review$5 = "復習";
var random_review$5 = "ランダム復習";
var my_dictionaries$5 = "マイ辞書";
var manage_dict$5 = "辞書を管理";
var create_personal_dict$5 = "個人辞書を作成";
var recommend$5 = "おすすめ";
var articles$5 = "記事";
var this_week_record$5 = "今週の学習記録";
var change_book$5 = "変更";
var today_study_time$5 = "今日の学習時間";
var total_study_days$5 = "総学習日数";
var total_study_time$5 = "総学習時間";
var my_books$5 = "マイブック";
var manage_books$5 = "書籍を管理";
var create_personal_book$5 = "個人ブックを作成";
var article_management$5 = "記事管理";
var toggle_translation$5 = "翻訳を切替";
var switch_display_mode$5 = "表示モードを切替";
var line_by_line$5 = "行ごと";
var single_line$5 = "単一行";
var comparison$5 = "比較";
var question$5 = "質問";
var study_record$5 = "学習記録";
var play_next_after_end$5 = "終了後に次を再生";
var create_book$5 = "ブックを作成";
var edit_book$5 = "ブックを編集";
var dict_list$5 = "辞書リスト";
var book_list$5 = "ブックリスト";
var word$5 = "単語";
var phonetic$5 = "発音記号";
var translation$5 = "翻訳";
var example_sentence$5 = "例文";
var phrase$5 = "フレーズ";
var synonym$5 = "同義語";
var related_words$5 = "関連語";
var etymology$5 = "語源";
var add_word$5 = "単語を追加";
var edit_word$5 = "単語を編集";
var create_dict$5 = "辞書を作成";
var edit_dict$5 = "辞書を編集";
var faq$5 = "よくある質問";
var is_free$5 = "ウェブサイトは無料ですか？";
var cannot_type$5 = "入力できない、キーボードが反応しない？";
var where_is_data$5 = "データはどこ？複数デバイスで使うには？";
var resource_sharing$5 = "英語学習リソース共有";
var all_resources$5 = "すべてのリソース";
var new_concept_english$5 = "新概念英語";
var tv_movie$5 = "テレビ/映画";
var grammar_learning$5 = "文法学習";
var listening_training$5 = "リスニング練習";
var warm_tips$5 = "ヒント";
var resources_from_internet$5 = "すべてのリソースはインターネットから収集、学習目的のみ";
var toggle_theme$5 = "テーマ切替";
var english_document$5 = "英語資料";
var empty_placeholder$5 = "何もない~";
var custom$5 = "カスタム";
var back$5 = "戻る";
var total_items$5 = "件";
var batch_delete$5 = "一括削除";
var confirm_delete_selected$5 = "選択したデータをすべて削除しますか？";
var change_order$5 = "順序を変更";
var list_order_setting$5 = "リスト順序設定";
var reverse_current_page$5 = "現在のページを反転";
var reverse_all$5 = "すべて反転";
var random_current_page$5 = "現在のページをシャッフル";
var random_all$5 = "すべてシャッフル";
var apply$5 = "適用";
var add$5 = "追加";
var collect$5 = "お気に入り";
var uncollect$5 = "お気に入り解除";
var mark_mastered$5 = "習得済みとしてマーク";
var unmark_mastered$5 = "習得済みマーク解除";
var about_thanks$5 = "ご利用ありがとうございます！これはオープンソースプロジェクトで、無料でご利用いただけます。役に立った場合は、GitHubでスターをお願いします！";
var github_address$5 = "GitHub:";
var about_wechat_feedback$5 = "WeChatフィードバック:";
var about_ticket_feedback$5 = "チケットフィードバック:";
var about_other_channels$5 = "その他のチャンネル:";
var wait_translation$5 = "翻訳完了までお待ちください";
var migrate_data$5 = "データ移行";
var migrate_new_domain$5 = "このウェブサイトは新しいドメインに移行しました";
var migrate_old_domain_notice$5 = "古いドメインは間もなく停止します。ブラウザのセキュリティ制限により、新旧サイト間でデータを共有できません。手動でデータを移行してください。";
var migrate_later_notice$5 = "今すぐ移行しない場合は、このダイアログを閉じて、後で「設定」->「データ管理」で移行できます";
var author$5 = "作者:";
var features$5 = "特徴:";
var suitable_for$5 = "対象:";
var open_link$5 = "リンクを開く";
var qq_group$5 = "QQグループ";
var xiaohongshu$5 = "Xiaohongshu";
var follow_x_account$5 = "Xアカウント{x_account}をフォロー";
var twitter$5 = "Twitter";
var send_email$5 = "{email}にメールを送信";
var email$5 = "メール";
var xiaohongshu_desc$5 = "Xiaohongshuで私たちをフォローして、開発チームの最新情報を入手し、体験や提案を共有してください";
var xiaohongshu_qrcode$5 = "Xiaohongshu QRコード";
var community_desc$5 = "コミュニティに参加して、開発チームとコミュニケーションを取り、体験や提案を共有してください";
var qq_qrcode$5 = "QQグループQRコード";
var wechat_group$5 = "WeChatグループ";
var wechat_qrcode$5 = "WeChatグループQRコード";
var github_project$5 = "GitHubプロジェクト";
var ie_not_supported$5 = "IEブラウザはサポートされていません";
var ie_use_modern_browser$5 = "Type Wordsは最新技術で構築されています。Chrome、Edge、Firefoxなどのモダンブラウザをご利用ください";
var download_chrome$5 = "Chromeをダウンロード";
var i_understand$5 = "理解しました";
var ignore_case$5 = "大文字小文字を無視";
var ignore_case_desc$5 = "有効にすると、入力で大文字小文字が区別されません。例えば、「hello」と「Hello」は両方とも正解とみなされます";
var allow_dictation_tip$5 = "ディクテーションモードでヒントを許可";
var allow_dictation_tip_desc$5 = "有効にすると、単語にマウスを乗せるかショートカットキーを押して正解を表示できます";
var simple_word_filter$5 = "簡単な単語フィルター";
var simple_word_filter_desc$5 = "有効にすると、簡単な単語が練習から除外されます。記事統計では簡単な単語はカウントされません";
var simple_word_list$5 = "簡単な単語リスト";
var words_comma_separated$5 = "複数の単語はカンマで区切ります";
var sound_effect$5 = "効果音";
var pronunciation_accent$5 = "発音アクセント";
var pronunciation_accent_desc$5 = "単語の発音のみ有効。記事は米国アクセント固定";
var please_select$5 = "選択してください";
var us_accent$5 = "アメリカ英語";
var uk_accent$5 = "イギリス英語";
var keyboard_sound$5 = "キー音";
var keyboard_sound_effect$5 = "キー効果音";
var volume$5 = "音量";
var show_prev_next_word$5 = "前/次の単語を表示";
var show_prev_next_word_desc$5 = "有効にすると、練習中に上部に前後の単語が表示されます";
var disable_practice_setting_dialog$5 = "デフォルトで練習設定ダイアログを表示しない";
var disable_practice_setting_dialog_desc$5 = "辞書詳細ページで、学習ボタンをクリックした後に練習設定ダイアログを表示するかどうか";
var clear_input_on_error$5 = "エラー時に入力をクリア";
var word_repeat_setting$5 = "単語繰り返し設定";
var repeat_count$5 = "繰り返し回数";
var review_ratio$5 = "復習比率";
var review_ratio_desc$5 = "復習単語と新単語の比率。変更は次回の学習時に有効";
var word_auto_pronunciation$5 = "自動発音";
var speed$5 = "速度";
var effect_sound$5 = "効果音（エラー時と完了時の音）";
var auto_switch$5 = "自動切り替え";
var auto_next_word$5 = "自動で次の単語へ";
var auto_next_word_desc$5 = "フォローモードでのみ有効。ディクテーション、自己テスト、書き取りモードではスペースキーで続行";
var auto_next_word_time$5 = "自動切り替え時間";
var auto_next_word_time_desc$5 = "正しく入力した後、自動的に次の単語に切り替わる時間";
var milliseconds$5 = "ミリ秒";
var font_setting$5 = "フォント設定";
var foreign_font$5 = "外国語フォント";
var chinese_font$5 = "中国語フォント";
var auto_play_sentence$5 = "文の自動再生";
var ignore_symbols_numbers_names$5 = "入力時に記号、数字、人名を無視";
var settings$5 = "設定";
var please_select_dict$5 = "最初に辞書を選択してください";
var learning_settings$5 = "学習設定";
var total$5 = "合計";
var estimated$5 = "予想";
var days_to_complete$5 = "日で完了";
var from_word$5 = "単語から開始";
var start_daily$5 = "、毎日";
var new_words$5 = "新しい単語";
var review_ratio_tooltip$5 = "復習単語と新単語の比率";
var review_ratio_notice_1$5 = "学習未完了時、復習数は設定した復習比率に従って生成されます。0の場合は復習なし";
var review_ratio_notice_2$5 = "学習完了後、新単語数は0に固定され、復習数は比率に従って生成されます（比率が1未満の場合は1として計算）";
var daily_learning$5 = "毎日の学習";
var learning_progress$5 = "学習進捗";
var select_from_dict$5 = "辞書から開始位置を選択";
var change_in_settings$5 = "設定ページで変更可能";
var keep_default_no_show$5 = "デフォルトを維持、今後表示しない";
var review_complete$5 = "復習完了";
var today_task_complete$5 = "今日のタスク完了";
var study_duration$5 = "学習時間";
var accuracy_rate$5 = "正答率";
var weekly_study_record$5 = "週間学習記録";
var studied$5 = "学習済み";
var total_words$5 = "総単語数";
var restart_learning$5 = "学習を再開";
var another_round$5 = "もう一回";
var return_home$5 = "ホームに戻る";
var import_tutorial$5 = "インポートチュートリアル";
var import_follow_template$5 = "テンプレートの形式に従ってデータを入力してください";
var import_word_required$5 = "単語項目は必須です。その他の項目は任意です";
var import_translation_hint$5 = "翻訳：1行に1つの翻訳、最初に品詞、次に内容（例：n.cancel）; 複数の翻訳は別々の行に";
var import_example_hint$5 = "例文：原文1行、翻訳1行; 複数の例文は別々の行に";
var import_phrase_hint$5 = "フレーズ：原文1行、翻訳1行; 複数のフレーズは別々の行に";
var two$5 = "2";
var lines$5 = "行";
var import_other_hint$5 = "同義語、同根語、語源：公式辞書に行き、単語を編集してフォーマットを確認してください";
var template_download$5 = "テンプレートダウンロード";
var word_import_template$5 = "単語インポートテンプレート";
var conflict_notice_title$5 = "ご利用中に以下の問題が発生した場合:";
var keyboard_no_response$5 = "キーボードが反応しない";
var check_plugins_installed$5 = "以下のプラグインがインストールされていないか確認してください";
var conflict_plugin_names$5 = "「ビデオ速度コントローラー」「Vim」「オーディオ/ビデオエンハンサー」「オンラインコースヘルパー」";
var plugins_intercept_keyboard$5 = "などのプラグイン/スクリプトがキーボードイベントをインターセプトし、";
var cause_no_response$5 = "このウェブサイトで練習中にキーが反応しなくなります";
var follow_steps_to_resolve$5 = "、以下の手順で競合を解決してください：";
var try_incognito_mode$5 = "ブラウザのシークレットモードでこのウェブサイトを開き、正常に入力できるか確認してください？";
var incognito_not_working$5 = "シークレットモードでも入力できない場合、";
var click_here$5 = "ここをクリック";
var feedback_or_wechat$5 = "フィードバックを送信するか、WeChatグループに参加してください：";
var incognito_working$5 = "シークレットモードで入力できる場合、プラグイン/スクリプトの競合です";
var disable_plugin_or_exclude$5 = "対応するプラグイン/スクリプトを一時的に無効にするか、プラグイン/スクリプトの設定でこのウェブサイトを除外してください";
var install_extension_manager$5 = "このプラグインをインストールできます";
var chrome_extension$5 = "プラグイン（Chrome版、VPN必要）";
var edge_extension$5 = "プラグイン（Edge版、VPN不要）";
var to_manage_extensions$5 = "他のプラグインを素早く有効/無効にできます";
var delete_key_goes_back$5 = "削除キーを押すと前のページに戻る";
var browser_360_shortcut$5 = "360ブラウザでは、「削除キーで前のページに戻る」ショートカットがデフォルトで設定されています";
var change_browser_or_shortcut$5 = "ブラウザを変更するか、360のデフォルトショートカットを削除してください：ブラウザ設定で「戻る」を検索";
var please_enter_name$5 = "名前を入力してください";
var name_max_20_chars$5 = "名前は20文字以内にしてください";
var name_already_exists$5 = "同じ名前が既に存在します！";
var add_success$5 = "追加しました";
var edit_success$5 = "修正しました";
var edit_and_add_to_dict$5 = "修正してマイ辞書に追加しました";
var please_fill_complete$5 = "完全に入力してください";
var name$5 = "名前";
var description$5 = "説明";
var source_language$5 = "原文言語";
var target_language$5 = "翻訳言語";
var english$5 = "英語";
var german$5 = "ドイツ語";
var japanese$5 = "日本語";
var code$5 = "コード";
var chinese$5 = "中国語";
var multiple_choice$5 = "選択問題";
var start$5 = "開始";
var countdown$5 = "カウントダウン";
var seconds$5 = "秒";
var submit_exam$5 = "試験を提出";
var exam_color_hint$5 = "薄赤：不正解、濃赤：未選択、緑：正解";
var items_per_page$5 = "件/ページ";
var jump_to$5 = "ジャンプ先";
var page_or_index$5 = "ページ/番号";
var please_fill_original$5 = "原文を入力してください！";
var please_fill_title$5 = "タイトルを入力してください！";
var please_fill_content$5 = "内容を入力してください！";
var audio_added_success$5 = "音声を追加しました";
var lrc_parse_success$5 = "LRCファイルの解析に成功しました";
var original_text$5 = "原文";
var title$5 = "タイトル";
var please_fill_original_title$5 = "原文タイトルを入力してください";
var content$5 = "内容";
var one_sentence_per_line$5 = "1行に1文、段落間は空行を入れてください";
var name_config_tip$5 = "人名を設定すると、練習中に自動的に無視されます（オプション、デフォルトで有効）";
var name_config$5 = "人名設定";
var please_paste_original$5 = "原文を貼り付けてください";
var usage_guide$5 = "使い方";
var copy_and_split$5 = "原文をコピーして、文に分割します";
var click$5 = "クリック";
var split_sentence$5 = "文を分割";
var auto_split$5 = "ボタンで自動分割";
var or$5 = "または";
var manual_split$5 = "手動で編集して分割";
var split_rule$5 = "分割ルール：1行に1文、段落間は空行";
var after_edit_click$5 = "編集後、クリック";
var sync_to_result$5 = "ボタンで左の結果パネルに同期";
var please_fill_translation_title$5 = "翻訳タイトルを入力してください";
var please_fill_translation$5 = "翻訳を入力してください";
var translate$5 = "翻訳";
var copy_translation_or_click$5 = "翻訳を貼り付けるか、なければクリック";
var result$5 = "結果";
var editable_auto_sync$5 = "すべて編集可能、編集後に適用ボタンをクリックして自動同期";
var audio$5 = "音声";
var audio_management$5 = "音声管理";
var paragraph$5 = "第";
var set_start_time$5 = "開始時間を設定";
var use_prev_end_time$5 = "前の文の終了時間を使用";
var minus_03s$5 = "-0.3秒";
var end$5 = "終了";
var set_end_time$5 = "終了時間を設定";
var edit_audio_align$5 = "音声アラインメントを編集";
var play$5 = "再生";
var status$5 = "ステータス";
var sentences_not_translated$5 = "{count}文が未翻訳です！";
var translation_complete$5 = "翻訳完了！";
var save_and_next$5 = "保存して次を追加";
var no_translation_comparison$5 = "翻訳対照がありません";
var adjust_audio_timeline$5 = "音声タイムラインを調整";
var audio_timeline_tutorial$5 = "チュートリアル：再生をクリック、音声が文の開始に達したら開始時間を記録、終了に達したら終了時間を記録";
var start_time$5 = "開始時間";
var jump_to_seconds$5 = "{seconds}秒にジャンプ";
var use_prev_end_seconds$5 = "前の文の終了時間を使用: {seconds}秒";
var decrease_03s$5 = "-0.3秒";
var increase_03s$5 = "+0.3秒";
var record$5 = "記録";
var end_time$5 = "終了時間";
var audio_upload_notice$5 = "1. アップロードしたファイルはローカルに保存され、PCを変えるとデータが失われます。適時バックアップしてください\n2. mp3、wav、m4aなどの一般的な音声形式をサポート";
var upload_audio$5 = "音声をアップロード";
var upload_lrc$5 = "LRCファイルをアップロード";
var name_management$5 = "人名管理";
var name_ignore_config_desc$5 = "無視する人名を設定します。練習中にこれらの名前は自動的にスキップされます（オプション、デフォルトで有効）";
var add_name$5 = "名前を追加";
var enter_name$5 = "名前を入力";
var collect_word$5 = "単語を収集";
var copy$5 = "コピー";
var copy_sentence$5 = "文をコピー";
var copied$5 = "コピーしました";
var copy_word$5 = "単語をコピー";
var start_from_here$5 = "ここから開始";
var play_sentence$5 = "文を再生";
var grammar_analysis$5 = "文法分析";
var copied_open_grammar$5 = "コピーしました！文法分析サイトを開きます！";
var youdao_translate$5 = "有道辞書";
var translate_word$5 = "単語を翻訳";
var translate_sentence$5 = "文を翻訳";
var restart_practice$5 = "練習を再開";
var next_article$5 = "次の記事";
var learning_record$5 = "学習記録";
var total_learning_time$5 = "総学習時間";
var current$5 = "現在";
var show_questions$5 = "問題を表示";
var explanation$5 = "解説";
var encouragement_95$5 = "素晴らしい！この調子で頑張って！";
var encouragement_85$5 = "素晴らしい成績です、引き続き頑張ってください！";
var encouragement_70$5 = "良いスコアです、続けてください！";
var encouragement_default$5 = "練習ごとに上達します、頑張り続けてください！";
var daily_task_complete$5 = "本日のタスク完了";
var weekly_record$5 = "今週の学習記録";
var study_progress$5 = "学習進捗";
var relearn$5 = "再学習";
var start_from_beginning$5 = "最初から練習";
var another_group$5 = "もう一組";
var back_to_home$5 = "ホームに戻る";
var know_word_tip$5 = "「知っている」を誤って選択した場合は、削除キーを押して再選択してください！";
var press_delete_reinput$5 = "削除キーを押して再入力してください";
var press_space_continue$5 = "スペースキーを押して続行してください";
var shortcut$5 = "ショートカット";
var i_know$5 = "知っている";
var i_dont_know$5 = "知らない";
var phrases$5 = "フレーズ";
var synonyms$5 = "同義語";
var word_root$5 = "語根";
var review_wrong_words$5 = "間違った単語を復習";
var collapse$5 = "折りたたむ";
var expand$5 = "展開";
var minutes$5 = "分";
var time$5 = "時間";
var errors$5 = "エラー数";
var skip_to_next_stage$5 = "次のステージへスキップ";
var skip_word$5 = "単語をスキップ";
var toggle_dictation_mode$5 = "ディクテーションモードの切り替え";
var send_failed$5 = "送信に失敗しました";
var send_code_failed$5 = "確認コードの送信に失敗しました";
var sending$5 = "送信中";
var send_code$5 = "コードを送信";
var agree_terms_notice$5 = "続行することで、以下に同意したことになります：";
var user_agreement$5 = "利用規約";
var and$5 = "および";
var privacy_policy$5 = "プライバシーポリシー";
var important_notice$5 = "重要なお知らせ";
var dont_remind$5 = "再度通知しない";
var function_desc$5 = "機能紹介";
var qa1_a$5 = "ウェブサイトは無料ですか？";
var qa1_q1$5 = "完全無料ではありません。長期的な発展のため、将来的な課金は避けられませんが、使用に支払いを必須としません。無料と有料のバランスを見つけるよう努めています。";
var qa1_q2$5 = "プロジェクトはオープンソースで、自分でデプロイできます。";
var qa2_a$5 = "入力できない、キーボードが反応しない？";
var qa3_a$5 = "データはどこに保存されますか？複数のデバイス間で使用するには？";
var qa3_q1$5 = "すべてのユーザーデータはローカルブラウザに保存されます。異なるデバイスやブラウザでType Wordsを使用する場合は、手動でデータのエクスポートとインポートが必要です。";
var qa3_q2$5 = "設定 -> データ設定 -> 元のコンピューターでデータをエクスポート -> SNSで新しいコンピューターに送信 -> 新しいコンピューターでインポート";
var qa3_q3$5 = "アカウントシステムは開発中です。";
var qa4_a$5 = "ウェブサイトが自動計画する単語数が多すぎます。どう変更しますか？";
var qa4_q1$5 = "デフォルトの復習単語と新単語の比率は1:4です。新単語が40個の場合、前回学習した40個と、それ以前に学習した120個を復習します。";
var qa4_q2$5 = "設定 -> 単語設定 -> 復習比率 で変更できます";
var qa5_a$5 = "一回の学習に時間がかかりすぎます。プロセスが長すぎますか？";
var qa5_q1$5 = "これは確かに問題です。長いプロセスは単語を覚える意欲を失わせやすいです。学習プロセスの最適化方法を検討しています。";
var qa5_q2$5 = "間違った単語は繰り返されます。タイプミスの場合、後の練習でTabキーを押してスキップできます。";
var qa5_q3$5 = "復習時、「知らない」とマークした単語のみディクテーションと書き取りが必要です。";
var qa5_q4$5 = "アカウントシステムの開始後、エビングハウスの記憶曲線機能が追加されます。";
var qa6_a$5 = "エビングハウスの記憶曲線機能は追加されますか？";
var qa7_a$5 = "単語の追加/カスタム辞書/自分の単語のインポート/単語内容の変更はできますか？";
var qa7_q1$5 = "はい、単語ページで「個人辞書を作成」をクリックします";
var qa7_q2$5 = "作成後、辞書詳細ページで「単語を追加」アイコンをクリックして自分の単語を追加します";
var qa7_q3$5 = "「インポート」アイコンをクリックして一括インポートもできます（テンプレートxlsx形式に厳密に従う必要があります）";
var qa8_a$5 = "記事の追加/カスタムブック/自分の記事のインポート/記事内容の変更はできますか？";
var qa8_q1$5 = "はい、操作手順は基本的に単語の追加と同じです";
var qa8_q2$5 = "記事ページで「個人ブックを作成」をクリックします";
var qa8_q3$5 = "作成後、上部の「記事管理」ボタンをクリックして自分の記事を追加します";
var qa9_a$5 = "キー音をオフにする方法は？";
var qa9_q$5 = "設定 -> 一般設定 -> 効果音 -> キー音 をオフにします";
var qa10_a$5 = "タブレットで使えますか？";
var qa10_q1$5 = "タブレットは使用できますが、内蔵の仮想キーボードは画面の1/3を占めるため、Bluetoothキーボードを使用するとより良い体験が得られます。";
var qa10_q2$5 = "Bluetoothキーボード接続後、Androidタブレットはブラウザで「デスクトップモード」を手動で有効にする必要があります。iPadはこの操作は不要です。";
var qa11_a$5 = "スマートフォンで使えますか？";
var qa11_q$5 = "スマートフォンは使用できますが、まだ最適化されていません。パソコンやタブレットでの使用をお勧めします。";
var qa12_a$5 = "アプリやミニプログラムはありますか？";
var qa12_q$5 = "いいえ、ウェブサイトのみです";
var qa13_a$5 = "開発チームにフィードバックを提供する方法は？";
var qa13_q1$5 = "公式WeChatグループに参加して、欲しい機能を詳しく説明できます";
var qa13_q2$5 = "アプリケーションでバグを見つけた場合は、詳細な説明と問題を再現する手順を提供してください。できれば短いビデオも添えてください";
var qa13_q3$5 = "サポートチケットを提出することもできます";
var qa13_q4$5 = "github/issuesでも提出できます";
const ja = {
	app_desc: app_desc$5,
	app_name: app_name$5,
	start_word_practice: start_word_practice$5,
	start_article_practice: start_article_practice$5,
	home_word_practice: home_word_practice$5,
	home_word_practice_desc1: home_word_practice_desc1$5,
	home_word_practice_desc2: home_word_practice_desc2$5,
	home_word_practice_desc3: home_word_practice_desc3$5,
	home_article_practice: home_article_practice$5,
	home_article_practice_desc1: home_article_practice_desc1$5,
	home_article_practice_desc2: home_article_practice_desc2$5,
	home_article_practice_desc3: home_article_practice_desc3$5,
	home_collection: home_collection$5,
	home_collection_desc1: home_collection_desc1$5,
	home_collection_desc2: home_collection_desc2$5,
	home_collection_desc3: home_collection_desc3$5,
	home_vocabulary: home_vocabulary$5,
	home_vocabulary_desc: home_vocabulary_desc$5,
	home_free_opensource: home_free_opensource$5,
	home_free_opensource_desc1: home_free_opensource_desc1$5,
	home_free_opensource_desc2: home_free_opensource_desc2$5,
	home_free_opensource_desc3: home_free_opensource_desc3$5,
	home_customization: home_customization$5,
	home_customization_desc1: home_customization_desc1$5,
	home_customization_desc2: home_customization_desc2$5,
	home_customization_desc3: home_customization_desc3$5,
	home_design: home_design$5,
	home_design_desc1: home_design_desc1$5,
	home_design_desc2: home_design_desc2$5,
	home_design_desc3: home_design_desc3$5,
	home_personalized: home_personalized$5,
	home_personalized_desc1: home_personalized_desc1$5,
	home_personalized_desc2: home_personalized_desc2$5,
	home_personalized_desc3: home_personalized_desc3$5,
	cn_limit_no1: cn_limit_no1$5,
	cn_limit_no2: cn_limit_no2$5,
	setting: setting$5,
	edit: edit$5,
	"delete": "削除",
	cancel: cancel$5,
	confirm: confirm$5,
	save: save$5,
	close: close$5,
	search: search$5,
	more: more$5,
	loading: loading$5,
	introduction: introduction$5,
	learn: learn$5,
	practice: practice$5,
	test: test$5,
	feedback: feedback$5,
	document: document$5,
	help: help$5,
	about: about$5,
	login: login$5,
	register: register$5,
	register_account: register_account$5,
	register_new_account: register_new_account$5,
	code_login: code_login$5,
	password_login: password_login$5,
	phone_placeholder: phone_placeholder$5,
	code_placeholder: code_placeholder$5,
	account_placeholder: account_placeholder$5,
	password_placeholder: password_placeholder$5,
	auto_register_notice: auto_register_notice$5,
	forgot_password: forgot_password$5,
	reset_password: reset_password$5,
	set_password_placeholder: set_password_placeholder$5,
	confirm_password_placeholder: confirm_password_placeholder$5,
	new_password_placeholder: new_password_placeholder$5,
	confirm_new_password: confirm_new_password$5,
	wechat_scan_login: wechat_scan_login$5,
	scan_success: scan_success$5,
	tap_allow_in_wechat: tap_allow_in_wechat$5,
	login_cancelled: login_cancelled$5,
	login_again: login_again$5,
	sync_data: sync_data$5,
	local_data_detected: local_data_detected$5,
	sync_to_account_question: sync_to_account_question$5,
	no_sync: no_sync$5,
	sync: sync$5,
	syncing: syncing$5,
	sync_failed: sync_failed$5,
	sync_success: sync_success$5,
	enter_website: enter_website$5,
	general_settings: general_settings$5,
	word_settings: word_settings$5,
	article_settings: article_settings$5,
	data_management: data_management$5,
	shortcut_settings: shortcut_settings$5,
	update_log: update_log$5,
	"function": "機能",
	shortcut_key: shortcut_key$5,
	no_shortcut_set: no_shortcut_set$5,
	press_key_to_set: press_key_to_set$5,
	click_here_when_done: click_here_when_done$5,
	restore_default: restore_default$5,
	data_saved_locally: data_saved_locally$5,
	export_data_backup: export_data_backup$5,
	import_data_restore: import_data_restore$5,
	import_warning: import_warning$5,
	words: words$5,
	no_dict_selected: no_dict_selected$5,
	select_dict_to_start: select_dict_to_start$5,
	select_dict: select_dict$5,
	change_progress: change_progress$5,
	estimated_completion: estimated_completion$5,
	current_progress: current_progress$5,
	learned: learned$5,
	completed_review_stage: completed_review_stage$5,
	today_task: today_task$5,
	last_task: last_task$5,
	word_list: word_list$5,
	daily_goal: daily_goal$5,
	words_count: words_count$5,
	change: change$5,
	new_words_count: new_words_count$5,
	review_last: review_last$5,
	review_previous: review_previous$5,
	start_learning: start_learning$5,
	continue_learning: continue_learning$5,
	free_practice: free_practice$5,
	continue_free_practice: continue_free_practice$5,
	smart_learning: smart_learning$5,
	review: review$5,
	random_review: random_review$5,
	my_dictionaries: my_dictionaries$5,
	manage_dict: manage_dict$5,
	create_personal_dict: create_personal_dict$5,
	recommend: recommend$5,
	articles: articles$5,
	this_week_record: this_week_record$5,
	change_book: change_book$5,
	today_study_time: today_study_time$5,
	total_study_days: total_study_days$5,
	total_study_time: total_study_time$5,
	my_books: my_books$5,
	manage_books: manage_books$5,
	create_personal_book: create_personal_book$5,
	article_management: article_management$5,
	toggle_translation: toggle_translation$5,
	switch_display_mode: switch_display_mode$5,
	line_by_line: line_by_line$5,
	single_line: single_line$5,
	comparison: comparison$5,
	question: question$5,
	study_record: study_record$5,
	play_next_after_end: play_next_after_end$5,
	create_book: create_book$5,
	edit_book: edit_book$5,
	dict_list: dict_list$5,
	book_list: book_list$5,
	word: word$5,
	phonetic: phonetic$5,
	translation: translation$5,
	example_sentence: example_sentence$5,
	phrase: phrase$5,
	synonym: synonym$5,
	related_words: related_words$5,
	etymology: etymology$5,
	add_word: add_word$5,
	edit_word: edit_word$5,
	create_dict: create_dict$5,
	edit_dict: edit_dict$5,
	"import": "インポート",
	"export": "エクスポート",
	faq: faq$5,
	is_free: is_free$5,
	cannot_type: cannot_type$5,
	where_is_data: where_is_data$5,
	resource_sharing: resource_sharing$5,
	all_resources: all_resources$5,
	new_concept_english: new_concept_english$5,
	tv_movie: tv_movie$5,
	grammar_learning: grammar_learning$5,
	listening_training: listening_training$5,
	warm_tips: warm_tips$5,
	resources_from_internet: resources_from_internet$5,
	toggle_theme: toggle_theme$5,
	english_document: english_document$5,
	empty_placeholder: empty_placeholder$5,
	custom: custom$5,
	back: back$5,
	total_items: total_items$5,
	batch_delete: batch_delete$5,
	confirm_delete_selected: confirm_delete_selected$5,
	change_order: change_order$5,
	list_order_setting: list_order_setting$5,
	reverse_current_page: reverse_current_page$5,
	reverse_all: reverse_all$5,
	random_current_page: random_current_page$5,
	random_all: random_all$5,
	apply: apply$5,
	add: add$5,
	collect: collect$5,
	uncollect: uncollect$5,
	mark_mastered: mark_mastered$5,
	unmark_mastered: unmark_mastered$5,
	about_thanks: about_thanks$5,
	github_address: github_address$5,
	about_wechat_feedback: about_wechat_feedback$5,
	about_ticket_feedback: about_ticket_feedback$5,
	about_other_channels: about_other_channels$5,
	wait_translation: wait_translation$5,
	migrate_data: migrate_data$5,
	migrate_new_domain: migrate_new_domain$5,
	migrate_old_domain_notice: migrate_old_domain_notice$5,
	migrate_later_notice: migrate_later_notice$5,
	author: author$5,
	features: features$5,
	suitable_for: suitable_for$5,
	open_link: open_link$5,
	qq_group: qq_group$5,
	xiaohongshu: xiaohongshu$5,
	follow_x_account: follow_x_account$5,
	twitter: twitter$5,
	send_email: send_email$5,
	email: email$5,
	xiaohongshu_desc: xiaohongshu_desc$5,
	xiaohongshu_qrcode: xiaohongshu_qrcode$5,
	community_desc: community_desc$5,
	qq_qrcode: qq_qrcode$5,
	wechat_group: wechat_group$5,
	wechat_qrcode: wechat_qrcode$5,
	github_project: github_project$5,
	ie_not_supported: ie_not_supported$5,
	ie_use_modern_browser: ie_use_modern_browser$5,
	download_chrome: download_chrome$5,
	i_understand: i_understand$5,
	ignore_case: ignore_case$5,
	ignore_case_desc: ignore_case_desc$5,
	allow_dictation_tip: allow_dictation_tip$5,
	allow_dictation_tip_desc: allow_dictation_tip_desc$5,
	simple_word_filter: simple_word_filter$5,
	simple_word_filter_desc: simple_word_filter_desc$5,
	simple_word_list: simple_word_list$5,
	words_comma_separated: words_comma_separated$5,
	sound_effect: sound_effect$5,
	pronunciation_accent: pronunciation_accent$5,
	pronunciation_accent_desc: pronunciation_accent_desc$5,
	please_select: please_select$5,
	us_accent: us_accent$5,
	uk_accent: uk_accent$5,
	keyboard_sound: keyboard_sound$5,
	keyboard_sound_effect: keyboard_sound_effect$5,
	volume: volume$5,
	show_prev_next_word: show_prev_next_word$5,
	show_prev_next_word_desc: show_prev_next_word_desc$5,
	disable_practice_setting_dialog: disable_practice_setting_dialog$5,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$5,
	clear_input_on_error: clear_input_on_error$5,
	word_repeat_setting: word_repeat_setting$5,
	repeat_count: repeat_count$5,
	review_ratio: review_ratio$5,
	review_ratio_desc: review_ratio_desc$5,
	word_auto_pronunciation: word_auto_pronunciation$5,
	speed: speed$5,
	effect_sound: effect_sound$5,
	auto_switch: auto_switch$5,
	auto_next_word: auto_next_word$5,
	auto_next_word_desc: auto_next_word_desc$5,
	auto_next_word_time: auto_next_word_time$5,
	auto_next_word_time_desc: auto_next_word_time_desc$5,
	milliseconds: milliseconds$5,
	font_setting: font_setting$5,
	foreign_font: foreign_font$5,
	chinese_font: chinese_font$5,
	auto_play_sentence: auto_play_sentence$5,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$5,
	settings: settings$5,
	please_select_dict: please_select_dict$5,
	learning_settings: learning_settings$5,
	total: total$5,
	estimated: estimated$5,
	days_to_complete: days_to_complete$5,
	from_word: from_word$5,
	start_daily: start_daily$5,
	new_words: new_words$5,
	review_ratio_tooltip: review_ratio_tooltip$5,
	review_ratio_notice_1: review_ratio_notice_1$5,
	review_ratio_notice_2: review_ratio_notice_2$5,
	daily_learning: daily_learning$5,
	learning_progress: learning_progress$5,
	select_from_dict: select_from_dict$5,
	change_in_settings: change_in_settings$5,
	keep_default_no_show: keep_default_no_show$5,
	review_complete: review_complete$5,
	today_task_complete: today_task_complete$5,
	study_duration: study_duration$5,
	accuracy_rate: accuracy_rate$5,
	weekly_study_record: weekly_study_record$5,
	studied: studied$5,
	total_words: total_words$5,
	restart_learning: restart_learning$5,
	another_round: another_round$5,
	return_home: return_home$5,
	import_tutorial: import_tutorial$5,
	import_follow_template: import_follow_template$5,
	import_word_required: import_word_required$5,
	import_translation_hint: import_translation_hint$5,
	import_example_hint: import_example_hint$5,
	import_phrase_hint: import_phrase_hint$5,
	two: two$5,
	lines: lines$5,
	import_other_hint: import_other_hint$5,
	template_download: template_download$5,
	word_import_template: word_import_template$5,
	conflict_notice_title: conflict_notice_title$5,
	keyboard_no_response: keyboard_no_response$5,
	check_plugins_installed: check_plugins_installed$5,
	conflict_plugin_names: conflict_plugin_names$5,
	plugins_intercept_keyboard: plugins_intercept_keyboard$5,
	cause_no_response: cause_no_response$5,
	follow_steps_to_resolve: follow_steps_to_resolve$5,
	try_incognito_mode: try_incognito_mode$5,
	incognito_not_working: incognito_not_working$5,
	click_here: click_here$5,
	feedback_or_wechat: feedback_or_wechat$5,
	incognito_working: incognito_working$5,
	disable_plugin_or_exclude: disable_plugin_or_exclude$5,
	install_extension_manager: install_extension_manager$5,
	chrome_extension: chrome_extension$5,
	edge_extension: edge_extension$5,
	to_manage_extensions: to_manage_extensions$5,
	delete_key_goes_back: delete_key_goes_back$5,
	browser_360_shortcut: browser_360_shortcut$5,
	change_browser_or_shortcut: change_browser_or_shortcut$5,
	please_enter_name: please_enter_name$5,
	name_max_20_chars: name_max_20_chars$5,
	name_already_exists: name_already_exists$5,
	add_success: add_success$5,
	edit_success: edit_success$5,
	edit_and_add_to_dict: edit_and_add_to_dict$5,
	please_fill_complete: please_fill_complete$5,
	name: name$5,
	description: description$5,
	source_language: source_language$5,
	target_language: target_language$5,
	english: english$5,
	german: german$5,
	japanese: japanese$5,
	code: code$5,
	chinese: chinese$5,
	multiple_choice: multiple_choice$5,
	start: start$5,
	countdown: countdown$5,
	seconds: seconds$5,
	submit_exam: submit_exam$5,
	exam_color_hint: exam_color_hint$5,
	items_per_page: items_per_page$5,
	jump_to: jump_to$5,
	page_or_index: page_or_index$5,
	please_fill_original: please_fill_original$5,
	please_fill_title: please_fill_title$5,
	please_fill_content: please_fill_content$5,
	audio_added_success: audio_added_success$5,
	lrc_parse_success: lrc_parse_success$5,
	original_text: original_text$5,
	title: title$5,
	please_fill_original_title: please_fill_original_title$5,
	content: content$5,
	one_sentence_per_line: one_sentence_per_line$5,
	name_config_tip: name_config_tip$5,
	name_config: name_config$5,
	please_paste_original: please_paste_original$5,
	usage_guide: usage_guide$5,
	copy_and_split: copy_and_split$5,
	click: click$5,
	split_sentence: split_sentence$5,
	auto_split: auto_split$5,
	or: or$5,
	manual_split: manual_split$5,
	split_rule: split_rule$5,
	after_edit_click: after_edit_click$5,
	sync_to_result: sync_to_result$5,
	please_fill_translation_title: please_fill_translation_title$5,
	please_fill_translation: please_fill_translation$5,
	translate: translate$5,
	copy_translation_or_click: copy_translation_or_click$5,
	result: result$5,
	editable_auto_sync: editable_auto_sync$5,
	audio: audio$5,
	audio_management: audio_management$5,
	paragraph: paragraph$5,
	set_start_time: set_start_time$5,
	use_prev_end_time: use_prev_end_time$5,
	minus_03s: minus_03s$5,
	end: end$5,
	set_end_time: set_end_time$5,
	edit_audio_align: edit_audio_align$5,
	play: play$5,
	status: status$5,
	sentences_not_translated: sentences_not_translated$5,
	translation_complete: translation_complete$5,
	save_and_next: save_and_next$5,
	no_translation_comparison: no_translation_comparison$5,
	adjust_audio_timeline: adjust_audio_timeline$5,
	audio_timeline_tutorial: audio_timeline_tutorial$5,
	start_time: start_time$5,
	jump_to_seconds: jump_to_seconds$5,
	use_prev_end_seconds: use_prev_end_seconds$5,
	decrease_03s: decrease_03s$5,
	increase_03s: increase_03s$5,
	record: record$5,
	end_time: end_time$5,
	audio_upload_notice: audio_upload_notice$5,
	upload_audio: upload_audio$5,
	upload_lrc: upload_lrc$5,
	name_management: name_management$5,
	name_ignore_config_desc: name_ignore_config_desc$5,
	add_name: add_name$5,
	enter_name: enter_name$5,
	collect_word: collect_word$5,
	copy: copy$5,
	copy_sentence: copy_sentence$5,
	copied: copied$5,
	copy_word: copy_word$5,
	start_from_here: start_from_here$5,
	play_sentence: play_sentence$5,
	grammar_analysis: grammar_analysis$5,
	copied_open_grammar: copied_open_grammar$5,
	youdao_translate: youdao_translate$5,
	translate_word: translate_word$5,
	translate_sentence: translate_sentence$5,
	restart_practice: restart_practice$5,
	next_article: next_article$5,
	learning_record: learning_record$5,
	total_learning_time: total_learning_time$5,
	current: current$5,
	show_questions: show_questions$5,
	explanation: explanation$5,
	encouragement_95: encouragement_95$5,
	encouragement_85: encouragement_85$5,
	encouragement_70: encouragement_70$5,
	encouragement_default: encouragement_default$5,
	daily_task_complete: daily_task_complete$5,
	weekly_record: weekly_record$5,
	study_progress: study_progress$5,
	relearn: relearn$5,
	start_from_beginning: start_from_beginning$5,
	another_group: another_group$5,
	back_to_home: back_to_home$5,
	know_word_tip: know_word_tip$5,
	press_delete_reinput: press_delete_reinput$5,
	press_space_continue: press_space_continue$5,
	shortcut: shortcut$5,
	i_know: i_know$5,
	i_dont_know: i_dont_know$5,
	phrases: phrases$5,
	synonyms: synonyms$5,
	word_root: word_root$5,
	review_wrong_words: review_wrong_words$5,
	collapse: collapse$5,
	expand: expand$5,
	minutes: minutes$5,
	time: time$5,
	errors: errors$5,
	skip_to_next_stage: skip_to_next_stage$5,
	skip_word: skip_word$5,
	toggle_dictation_mode: toggle_dictation_mode$5,
	send_failed: send_failed$5,
	send_code_failed: send_code_failed$5,
	sending: sending$5,
	send_code: send_code$5,
	agree_terms_notice: agree_terms_notice$5,
	user_agreement: user_agreement$5,
	and: and$5,
	privacy_policy: privacy_policy$5,
	important_notice: important_notice$5,
	dont_remind: dont_remind$5,
	function_desc: function_desc$5,
	qa1_a: qa1_a$5,
	qa1_q1: qa1_q1$5,
	qa1_q2: qa1_q2$5,
	qa2_a: qa2_a$5,
	qa3_a: qa3_a$5,
	qa3_q1: qa3_q1$5,
	qa3_q2: qa3_q2$5,
	qa3_q3: qa3_q3$5,
	qa4_a: qa4_a$5,
	qa4_q1: qa4_q1$5,
	qa4_q2: qa4_q2$5,
	qa5_a: qa5_a$5,
	qa5_q1: qa5_q1$5,
	qa5_q2: qa5_q2$5,
	qa5_q3: qa5_q3$5,
	qa5_q4: qa5_q4$5,
	qa6_a: qa6_a$5,
	qa7_a: qa7_a$5,
	qa7_q1: qa7_q1$5,
	qa7_q2: qa7_q2$5,
	qa7_q3: qa7_q3$5,
	qa8_a: qa8_a$5,
	qa8_q1: qa8_q1$5,
	qa8_q2: qa8_q2$5,
	qa8_q3: qa8_q3$5,
	qa9_a: qa9_a$5,
	qa9_q: qa9_q$5,
	qa10_a: qa10_a$5,
	qa10_q1: qa10_q1$5,
	qa10_q2: qa10_q2$5,
	qa11_a: qa11_a$5,
	qa11_q: qa11_q$5,
	qa12_a: qa12_a$5,
	qa12_q: qa12_q$5,
	qa13_a: qa13_a$5,
	qa13_q1: qa13_q1$5,
	qa13_q2: qa13_q2$5,
	qa13_q3: qa13_q3$5,
	qa13_q4: qa13_q4$5
};

const ja$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$5,
  about_other_channels: about_other_channels$5,
  about_thanks: about_thanks$5,
  about_ticket_feedback: about_ticket_feedback$5,
  about_wechat_feedback: about_wechat_feedback$5,
  account_placeholder: account_placeholder$5,
  accuracy_rate: accuracy_rate$5,
  add: add$5,
  add_name: add_name$5,
  add_success: add_success$5,
  add_word: add_word$5,
  adjust_audio_timeline: adjust_audio_timeline$5,
  after_edit_click: after_edit_click$5,
  agree_terms_notice: agree_terms_notice$5,
  all_resources: all_resources$5,
  allow_dictation_tip: allow_dictation_tip$5,
  allow_dictation_tip_desc: allow_dictation_tip_desc$5,
  and: and$5,
  another_group: another_group$5,
  another_round: another_round$5,
  app_desc: app_desc$5,
  app_name: app_name$5,
  apply: apply$5,
  article_management: article_management$5,
  article_settings: article_settings$5,
  articles: articles$5,
  audio: audio$5,
  audio_added_success: audio_added_success$5,
  audio_management: audio_management$5,
  audio_timeline_tutorial: audio_timeline_tutorial$5,
  audio_upload_notice: audio_upload_notice$5,
  author: author$5,
  auto_next_word: auto_next_word$5,
  auto_next_word_desc: auto_next_word_desc$5,
  auto_next_word_time: auto_next_word_time$5,
  auto_next_word_time_desc: auto_next_word_time_desc$5,
  auto_play_sentence: auto_play_sentence$5,
  auto_register_notice: auto_register_notice$5,
  auto_split: auto_split$5,
  auto_switch: auto_switch$5,
  back: back$5,
  back_to_home: back_to_home$5,
  batch_delete: batch_delete$5,
  book_list: book_list$5,
  browser_360_shortcut: browser_360_shortcut$5,
  cancel: cancel$5,
  cannot_type: cannot_type$5,
  cause_no_response: cause_no_response$5,
  change: change$5,
  change_book: change_book$5,
  change_browser_or_shortcut: change_browser_or_shortcut$5,
  change_in_settings: change_in_settings$5,
  change_order: change_order$5,
  change_progress: change_progress$5,
  check_plugins_installed: check_plugins_installed$5,
  chinese: chinese$5,
  chinese_font: chinese_font$5,
  chrome_extension: chrome_extension$5,
  clear_input_on_error: clear_input_on_error$5,
  click: click$5,
  click_here: click_here$5,
  click_here_when_done: click_here_when_done$5,
  close: close$5,
  cn_limit_no1: cn_limit_no1$5,
  cn_limit_no2: cn_limit_no2$5,
  code: code$5,
  code_login: code_login$5,
  code_placeholder: code_placeholder$5,
  collapse: collapse$5,
  collect: collect$5,
  collect_word: collect_word$5,
  community_desc: community_desc$5,
  comparison: comparison$5,
  completed_review_stage: completed_review_stage$5,
  confirm: confirm$5,
  confirm_delete_selected: confirm_delete_selected$5,
  confirm_new_password: confirm_new_password$5,
  confirm_password_placeholder: confirm_password_placeholder$5,
  conflict_notice_title: conflict_notice_title$5,
  conflict_plugin_names: conflict_plugin_names$5,
  content: content$5,
  continue_free_practice: continue_free_practice$5,
  continue_learning: continue_learning$5,
  copied: copied$5,
  copied_open_grammar: copied_open_grammar$5,
  copy: copy$5,
  copy_and_split: copy_and_split$5,
  copy_sentence: copy_sentence$5,
  copy_translation_or_click: copy_translation_or_click$5,
  copy_word: copy_word$5,
  countdown: countdown$5,
  create_book: create_book$5,
  create_dict: create_dict$5,
  create_personal_book: create_personal_book$5,
  create_personal_dict: create_personal_dict$5,
  current: current$5,
  current_progress: current_progress$5,
  custom: custom$5,
  daily_goal: daily_goal$5,
  daily_learning: daily_learning$5,
  daily_task_complete: daily_task_complete$5,
  data_management: data_management$5,
  data_saved_locally: data_saved_locally$5,
  days_to_complete: days_to_complete$5,
  decrease_03s: decrease_03s$5,
  default: ja,
  delete_key_goes_back: delete_key_goes_back$5,
  description: description$5,
  dict_list: dict_list$5,
  disable_plugin_or_exclude: disable_plugin_or_exclude$5,
  disable_practice_setting_dialog: disable_practice_setting_dialog$5,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$5,
  document: document$5,
  dont_remind: dont_remind$5,
  download_chrome: download_chrome$5,
  edge_extension: edge_extension$5,
  edit: edit$5,
  edit_and_add_to_dict: edit_and_add_to_dict$5,
  edit_audio_align: edit_audio_align$5,
  edit_book: edit_book$5,
  edit_dict: edit_dict$5,
  edit_success: edit_success$5,
  edit_word: edit_word$5,
  editable_auto_sync: editable_auto_sync$5,
  effect_sound: effect_sound$5,
  email: email$5,
  empty_placeholder: empty_placeholder$5,
  encouragement_70: encouragement_70$5,
  encouragement_85: encouragement_85$5,
  encouragement_95: encouragement_95$5,
  encouragement_default: encouragement_default$5,
  end: end$5,
  end_time: end_time$5,
  english: english$5,
  english_document: english_document$5,
  enter_name: enter_name$5,
  enter_website: enter_website$5,
  errors: errors$5,
  estimated: estimated$5,
  estimated_completion: estimated_completion$5,
  etymology: etymology$5,
  exam_color_hint: exam_color_hint$5,
  example_sentence: example_sentence$5,
  expand: expand$5,
  explanation: explanation$5,
  export_data_backup: export_data_backup$5,
  faq: faq$5,
  features: features$5,
  feedback: feedback$5,
  feedback_or_wechat: feedback_or_wechat$5,
  follow_steps_to_resolve: follow_steps_to_resolve$5,
  follow_x_account: follow_x_account$5,
  font_setting: font_setting$5,
  foreign_font: foreign_font$5,
  forgot_password: forgot_password$5,
  free_practice: free_practice$5,
  from_word: from_word$5,
  function_desc: function_desc$5,
  general_settings: general_settings$5,
  german: german$5,
  github_address: github_address$5,
  github_project: github_project$5,
  grammar_analysis: grammar_analysis$5,
  grammar_learning: grammar_learning$5,
  help: help$5,
  home_article_practice: home_article_practice$5,
  home_article_practice_desc1: home_article_practice_desc1$5,
  home_article_practice_desc2: home_article_practice_desc2$5,
  home_article_practice_desc3: home_article_practice_desc3$5,
  home_collection: home_collection$5,
  home_collection_desc1: home_collection_desc1$5,
  home_collection_desc2: home_collection_desc2$5,
  home_collection_desc3: home_collection_desc3$5,
  home_customization: home_customization$5,
  home_customization_desc1: home_customization_desc1$5,
  home_customization_desc2: home_customization_desc2$5,
  home_customization_desc3: home_customization_desc3$5,
  home_design: home_design$5,
  home_design_desc1: home_design_desc1$5,
  home_design_desc2: home_design_desc2$5,
  home_design_desc3: home_design_desc3$5,
  home_free_opensource: home_free_opensource$5,
  home_free_opensource_desc1: home_free_opensource_desc1$5,
  home_free_opensource_desc2: home_free_opensource_desc2$5,
  home_free_opensource_desc3: home_free_opensource_desc3$5,
  home_personalized: home_personalized$5,
  home_personalized_desc1: home_personalized_desc1$5,
  home_personalized_desc2: home_personalized_desc2$5,
  home_personalized_desc3: home_personalized_desc3$5,
  home_vocabulary: home_vocabulary$5,
  home_vocabulary_desc: home_vocabulary_desc$5,
  home_word_practice: home_word_practice$5,
  home_word_practice_desc1: home_word_practice_desc1$5,
  home_word_practice_desc2: home_word_practice_desc2$5,
  home_word_practice_desc3: home_word_practice_desc3$5,
  i_dont_know: i_dont_know$5,
  i_know: i_know$5,
  i_understand: i_understand$5,
  ie_not_supported: ie_not_supported$5,
  ie_use_modern_browser: ie_use_modern_browser$5,
  ignore_case: ignore_case$5,
  ignore_case_desc: ignore_case_desc$5,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$5,
  import_data_restore: import_data_restore$5,
  import_example_hint: import_example_hint$5,
  import_follow_template: import_follow_template$5,
  import_other_hint: import_other_hint$5,
  import_phrase_hint: import_phrase_hint$5,
  import_translation_hint: import_translation_hint$5,
  import_tutorial: import_tutorial$5,
  import_warning: import_warning$5,
  import_word_required: import_word_required$5,
  important_notice: important_notice$5,
  incognito_not_working: incognito_not_working$5,
  incognito_working: incognito_working$5,
  increase_03s: increase_03s$5,
  install_extension_manager: install_extension_manager$5,
  introduction: introduction$5,
  is_free: is_free$5,
  items_per_page: items_per_page$5,
  japanese: japanese$5,
  jump_to: jump_to$5,
  jump_to_seconds: jump_to_seconds$5,
  keep_default_no_show: keep_default_no_show$5,
  keyboard_no_response: keyboard_no_response$5,
  keyboard_sound: keyboard_sound$5,
  keyboard_sound_effect: keyboard_sound_effect$5,
  know_word_tip: know_word_tip$5,
  last_task: last_task$5,
  learn: learn$5,
  learned: learned$5,
  learning_progress: learning_progress$5,
  learning_record: learning_record$5,
  learning_settings: learning_settings$5,
  line_by_line: line_by_line$5,
  lines: lines$5,
  list_order_setting: list_order_setting$5,
  listening_training: listening_training$5,
  loading: loading$5,
  local_data_detected: local_data_detected$5,
  login: login$5,
  login_again: login_again$5,
  login_cancelled: login_cancelled$5,
  lrc_parse_success: lrc_parse_success$5,
  manage_books: manage_books$5,
  manage_dict: manage_dict$5,
  manual_split: manual_split$5,
  mark_mastered: mark_mastered$5,
  migrate_data: migrate_data$5,
  migrate_later_notice: migrate_later_notice$5,
  migrate_new_domain: migrate_new_domain$5,
  migrate_old_domain_notice: migrate_old_domain_notice$5,
  milliseconds: milliseconds$5,
  minus_03s: minus_03s$5,
  minutes: minutes$5,
  more: more$5,
  multiple_choice: multiple_choice$5,
  my_books: my_books$5,
  my_dictionaries: my_dictionaries$5,
  name: name$5,
  name_already_exists: name_already_exists$5,
  name_config: name_config$5,
  name_config_tip: name_config_tip$5,
  name_ignore_config_desc: name_ignore_config_desc$5,
  name_management: name_management$5,
  name_max_20_chars: name_max_20_chars$5,
  new_concept_english: new_concept_english$5,
  new_password_placeholder: new_password_placeholder$5,
  new_words: new_words$5,
  new_words_count: new_words_count$5,
  next_article: next_article$5,
  no_dict_selected: no_dict_selected$5,
  no_shortcut_set: no_shortcut_set$5,
  no_sync: no_sync$5,
  no_translation_comparison: no_translation_comparison$5,
  one_sentence_per_line: one_sentence_per_line$5,
  open_link: open_link$5,
  or: or$5,
  original_text: original_text$5,
  page_or_index: page_or_index$5,
  paragraph: paragraph$5,
  password_login: password_login$5,
  password_placeholder: password_placeholder$5,
  phone_placeholder: phone_placeholder$5,
  phonetic: phonetic$5,
  phrase: phrase$5,
  phrases: phrases$5,
  play: play$5,
  play_next_after_end: play_next_after_end$5,
  play_sentence: play_sentence$5,
  please_enter_name: please_enter_name$5,
  please_fill_complete: please_fill_complete$5,
  please_fill_content: please_fill_content$5,
  please_fill_original: please_fill_original$5,
  please_fill_original_title: please_fill_original_title$5,
  please_fill_title: please_fill_title$5,
  please_fill_translation: please_fill_translation$5,
  please_fill_translation_title: please_fill_translation_title$5,
  please_paste_original: please_paste_original$5,
  please_select: please_select$5,
  please_select_dict: please_select_dict$5,
  plugins_intercept_keyboard: plugins_intercept_keyboard$5,
  practice: practice$5,
  press_delete_reinput: press_delete_reinput$5,
  press_key_to_set: press_key_to_set$5,
  press_space_continue: press_space_continue$5,
  privacy_policy: privacy_policy$5,
  pronunciation_accent: pronunciation_accent$5,
  pronunciation_accent_desc: pronunciation_accent_desc$5,
  qa10_a: qa10_a$5,
  qa10_q1: qa10_q1$5,
  qa10_q2: qa10_q2$5,
  qa11_a: qa11_a$5,
  qa11_q: qa11_q$5,
  qa12_a: qa12_a$5,
  qa12_q: qa12_q$5,
  qa13_a: qa13_a$5,
  qa13_q1: qa13_q1$5,
  qa13_q2: qa13_q2$5,
  qa13_q3: qa13_q3$5,
  qa13_q4: qa13_q4$5,
  qa1_a: qa1_a$5,
  qa1_q1: qa1_q1$5,
  qa1_q2: qa1_q2$5,
  qa2_a: qa2_a$5,
  qa3_a: qa3_a$5,
  qa3_q1: qa3_q1$5,
  qa3_q2: qa3_q2$5,
  qa3_q3: qa3_q3$5,
  qa4_a: qa4_a$5,
  qa4_q1: qa4_q1$5,
  qa4_q2: qa4_q2$5,
  qa5_a: qa5_a$5,
  qa5_q1: qa5_q1$5,
  qa5_q2: qa5_q2$5,
  qa5_q3: qa5_q3$5,
  qa5_q4: qa5_q4$5,
  qa6_a: qa6_a$5,
  qa7_a: qa7_a$5,
  qa7_q1: qa7_q1$5,
  qa7_q2: qa7_q2$5,
  qa7_q3: qa7_q3$5,
  qa8_a: qa8_a$5,
  qa8_q1: qa8_q1$5,
  qa8_q2: qa8_q2$5,
  qa8_q3: qa8_q3$5,
  qa9_a: qa9_a$5,
  qa9_q: qa9_q$5,
  qq_group: qq_group$5,
  qq_qrcode: qq_qrcode$5,
  question: question$5,
  random_all: random_all$5,
  random_current_page: random_current_page$5,
  random_review: random_review$5,
  recommend: recommend$5,
  record: record$5,
  register: register$5,
  register_account: register_account$5,
  register_new_account: register_new_account$5,
  related_words: related_words$5,
  relearn: relearn$5,
  repeat_count: repeat_count$5,
  reset_password: reset_password$5,
  resource_sharing: resource_sharing$5,
  resources_from_internet: resources_from_internet$5,
  restart_learning: restart_learning$5,
  restart_practice: restart_practice$5,
  restore_default: restore_default$5,
  result: result$5,
  return_home: return_home$5,
  reverse_all: reverse_all$5,
  reverse_current_page: reverse_current_page$5,
  review: review$5,
  review_complete: review_complete$5,
  review_last: review_last$5,
  review_previous: review_previous$5,
  review_ratio: review_ratio$5,
  review_ratio_desc: review_ratio_desc$5,
  review_ratio_notice_1: review_ratio_notice_1$5,
  review_ratio_notice_2: review_ratio_notice_2$5,
  review_ratio_tooltip: review_ratio_tooltip$5,
  review_wrong_words: review_wrong_words$5,
  save: save$5,
  save_and_next: save_and_next$5,
  scan_success: scan_success$5,
  search: search$5,
  seconds: seconds$5,
  select_dict: select_dict$5,
  select_dict_to_start: select_dict_to_start$5,
  select_from_dict: select_from_dict$5,
  send_code: send_code$5,
  send_code_failed: send_code_failed$5,
  send_email: send_email$5,
  send_failed: send_failed$5,
  sending: sending$5,
  sentences_not_translated: sentences_not_translated$5,
  set_end_time: set_end_time$5,
  set_password_placeholder: set_password_placeholder$5,
  set_start_time: set_start_time$5,
  setting: setting$5,
  settings: settings$5,
  shortcut: shortcut$5,
  shortcut_key: shortcut_key$5,
  shortcut_settings: shortcut_settings$5,
  show_prev_next_word: show_prev_next_word$5,
  show_prev_next_word_desc: show_prev_next_word_desc$5,
  show_questions: show_questions$5,
  simple_word_filter: simple_word_filter$5,
  simple_word_filter_desc: simple_word_filter_desc$5,
  simple_word_list: simple_word_list$5,
  single_line: single_line$5,
  skip_to_next_stage: skip_to_next_stage$5,
  skip_word: skip_word$5,
  smart_learning: smart_learning$5,
  sound_effect: sound_effect$5,
  source_language: source_language$5,
  speed: speed$5,
  split_rule: split_rule$5,
  split_sentence: split_sentence$5,
  start: start$5,
  start_article_practice: start_article_practice$5,
  start_daily: start_daily$5,
  start_from_beginning: start_from_beginning$5,
  start_from_here: start_from_here$5,
  start_learning: start_learning$5,
  start_time: start_time$5,
  start_word_practice: start_word_practice$5,
  status: status$5,
  studied: studied$5,
  study_duration: study_duration$5,
  study_progress: study_progress$5,
  study_record: study_record$5,
  submit_exam: submit_exam$5,
  suitable_for: suitable_for$5,
  switch_display_mode: switch_display_mode$5,
  sync: sync$5,
  sync_data: sync_data$5,
  sync_failed: sync_failed$5,
  sync_success: sync_success$5,
  sync_to_account_question: sync_to_account_question$5,
  sync_to_result: sync_to_result$5,
  syncing: syncing$5,
  synonym: synonym$5,
  synonyms: synonyms$5,
  tap_allow_in_wechat: tap_allow_in_wechat$5,
  target_language: target_language$5,
  template_download: template_download$5,
  test: test$5,
  this_week_record: this_week_record$5,
  time: time$5,
  title: title$5,
  to_manage_extensions: to_manage_extensions$5,
  today_study_time: today_study_time$5,
  today_task: today_task$5,
  today_task_complete: today_task_complete$5,
  toggle_dictation_mode: toggle_dictation_mode$5,
  toggle_theme: toggle_theme$5,
  toggle_translation: toggle_translation$5,
  total: total$5,
  total_items: total_items$5,
  total_learning_time: total_learning_time$5,
  total_study_days: total_study_days$5,
  total_study_time: total_study_time$5,
  total_words: total_words$5,
  translate: translate$5,
  translate_sentence: translate_sentence$5,
  translate_word: translate_word$5,
  translation: translation$5,
  translation_complete: translation_complete$5,
  try_incognito_mode: try_incognito_mode$5,
  tv_movie: tv_movie$5,
  twitter: twitter$5,
  two: two$5,
  uk_accent: uk_accent$5,
  uncollect: uncollect$5,
  unmark_mastered: unmark_mastered$5,
  update_log: update_log$5,
  upload_audio: upload_audio$5,
  upload_lrc: upload_lrc$5,
  us_accent: us_accent$5,
  usage_guide: usage_guide$5,
  use_prev_end_seconds: use_prev_end_seconds$5,
  use_prev_end_time: use_prev_end_time$5,
  user_agreement: user_agreement$5,
  volume: volume$5,
  wait_translation: wait_translation$5,
  warm_tips: warm_tips$5,
  wechat_group: wechat_group$5,
  wechat_qrcode: wechat_qrcode$5,
  wechat_scan_login: wechat_scan_login$5,
  weekly_record: weekly_record$5,
  weekly_study_record: weekly_study_record$5,
  where_is_data: where_is_data$5,
  word: word$5,
  word_auto_pronunciation: word_auto_pronunciation$5,
  word_import_template: word_import_template$5,
  word_list: word_list$5,
  word_repeat_setting: word_repeat_setting$5,
  word_root: word_root$5,
  word_settings: word_settings$5,
  words: words$5,
  words_comma_separated: words_comma_separated$5,
  words_count: words_count$5,
  xiaohongshu: xiaohongshu$5,
  xiaohongshu_desc: xiaohongshu_desc$5,
  xiaohongshu_qrcode: xiaohongshu_qrcode$5,
  youdao_translate: youdao_translate$5
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$4 = "영어 학습, 한 번의 타이핑으로 한 걸음씩, 오픈소스 단어 및 문장 연습 도구";
var app_name$4 = "Type Words";
var start_word_practice$4 = "단어 연습 시작";
var start_article_practice$4 = "문장 연습 시작";
var home_word_practice$4 = "단어 연습";
var home_word_practice_desc1$4 = "연습 모드: 따라치기/받아쓰기/자가테스트/암기";
var home_word_practice_desc2$4 = "스마트 학습: 복습을 위한 지능형 계획";
var home_word_practice_desc3$4 = "자유 학습: 제한 없음, 직접 계획";
var home_article_practice$4 = "문장 연습";
var home_article_practice_desc1$4 = "일반 도서 내장, 직접 글 추가 가능";
var home_article_practice_desc2$4 = "따라치기 + 암기 이중 모드";
var home_article_practice_desc3$4 = "들으면서 암기 지원";
var home_collection$4 = "즐겨찾기, 틀린 단어, 마스터";
var home_collection_desc1$4 = "잘못 입력하면 자동으로 틀린 단어장에 추가";
var home_collection_desc2$4 = "마스터에 추가, 이후 자동 건너뛰기";
var home_collection_desc3$4 = "즐겨찾기에 추가하여 복습";
var home_vocabulary$4 = "방대한 어휘";
var home_vocabulary_desc$4 = "초등부터 고급까지 어휘 내장";
var home_free_opensource$4 = "무료 및 오픈소스";
var home_free_opensource_desc1$4 = "완전 오픈소스, 감사 가능";
var home_free_opensource_desc2$4 = "무료 사용";
var home_free_opensource_desc3$4 = "프라이빗 배포";
var home_customization$4 = "높은 커스터마이즈";
var home_customization_desc1$4 = "풍부한 키보드 효과음";
var home_customization_desc2$4 = "사용자 정의 단축키";
var home_customization_desc3$4 = "높은 맞춤 설정 옵션";
var home_design$4 = "간결하고 효율적";
var home_design_desc1$4 = "심플한 디자인, 현대적 UI";
var home_design_desc2$4 = "깔끔한 인터페이스, 간단한 조작";
var home_design_desc3$4 = "어떤 플랫폼도 강제 팔로우 없음";
var home_personalized$4 = "개인화 학습";
var home_personalized_desc1$4 = "사전 및 글 자유롭게 추가";
var home_personalized_desc2$4 = "맞춤형 학습 계획 커스터마이즈";
var home_personalized_desc3$4 = "다양한 학습 및 복습 전략";
var cn_limit_no1$4 = "川公网安备51015602001426号";
var cn_limit_no2$4 = "蜀ICP备2025157466号-2";
var setting$4 = "설정";
var edit$4 = "편집";
var cancel$4 = "취소";
var confirm$4 = "확인";
var save$4 = "저장";
var close$4 = "닫기";
var search$4 = "검색";
var more$4 = "더 보기";
var loading$4 = "로딩 중";
var introduction$4 = "소개";
var learn$4 = "학습";
var practice$4 = "연습";
var test$4 = "테스트";
var feedback$4 = "피드백";
var document$4 = "자료";
var help$4 = "도움말";
var about$4 = "소개";
var login$4 = "로그인";
var register$4 = "회원가입";
var register_account$4 = "계정 등록";
var register_new_account$4 = "새 계정 등록";
var code_login$4 = "인증코드 로그인";
var password_login$4 = "비밀번호 로그인";
var phone_placeholder$4 = "휴대폰 번호를 입력하세요";
var code_placeholder$4 = "인증코드를 입력하세요";
var account_placeholder$4 = "휴대폰 번호/이메일을 입력하세요";
var password_placeholder$4 = "비밀번호를 입력하세요";
var auto_register_notice$4 = "미등록 번호는 자동 등록됩니다";
var forgot_password$4 = "비밀번호를 잊으셨나요?";
var reset_password$4 = "비밀번호 재설정";
var set_password_placeholder$4 = "비밀번호를 설정하세요";
var confirm_password_placeholder$4 = "비밀번호를 확인하세요";
var new_password_placeholder$4 = "새 비밀번호를 입력하세요";
var confirm_new_password$4 = "새 비밀번호 확인";
var wechat_scan_login$4 = "위챗 스캔 로그인";
var scan_success$4 = "스캔 성공";
var tap_allow_in_wechat$4 = "위챗에서 허용을 탭하여 로그인";
var login_cancelled$4 = "로그인 취소됨";
var login_again$4 = "다시 로그인";
var sync_data$4 = "데이터 동기화";
var local_data_detected$4 = "로컬 데이터가 감지되었습니다";
var sync_to_account_question$4 = "계정에 동기화하시겠습니까?";
var no_sync$4 = "동기화 안함";
var sync$4 = "동기화";
var syncing$4 = "동기화 중";
var sync_failed$4 = "동기화 실패";
var sync_success$4 = "동기화 성공";
var enter_website$4 = "웹사이트 입장";
var general_settings$4 = "일반 설정";
var word_settings$4 = "단어 설정";
var article_settings$4 = "기사 설정";
var data_management$4 = "데이터 관리";
var shortcut_settings$4 = "단축키 설정";
var update_log$4 = "업데이트 로그";
var shortcut_key$4 = "단축키(클릭하여 수정)";
var no_shortcut_set$4 = "단축키 미설정";
var press_key_to_set$4 = "키를 눌러 설정";
var click_here_when_done$4 = "완료되면 여기를 클릭";
var restore_default$4 = "기본값 복원";
var data_saved_locally$4 = "모든 데이터는 브라우저에 로컬 저장";
var export_data_backup$4 = "데이터 백업 내보내기 (ZIP)";
var import_data_restore$4 = "데이터 복원 가져오기";
var import_warning$4 = "가져오기는 현재 모든 데이터를 덮어씁니다";
var words$4 = "단어";
var no_dict_selected$4 = "현재 학습 중인 사전이 없습니다";
var select_dict_to_start$4 = "학습을 시작하려면 사전을 선택하세요";
var select_dict$4 = "사전 선택";
var change_progress$4 = "진행률 변경";
var estimated_completion$4 = "예상 완료일";
var current_progress$4 = "현재 진행률";
var learned$4 = "학습 완료";
var completed_review_stage$4 = "완료, 복습 단계 진입";
var today_task$4 = "오늘의 과제";
var last_task$4 = "지난 과제";
var word_list$4 = "단어 목록";
var daily_goal$4 = "일일 목표";
var words_count$4 = "단어";
var change$4 = "변경";
var new_words_count$4 = "새 단어 수";
var review_last$4 = "이전 복습";
var review_previous$4 = "이전 복습";
var start_learning$4 = "학습 시작";
var continue_learning$4 = "계속 학습";
var free_practice$4 = "자유 연습";
var continue_free_practice$4 = "자유 연습 계속";
var smart_learning$4 = "스마트 학습";
var review$4 = "복습";
var random_review$4 = "랜덤 복습";
var my_dictionaries$4 = "내 사전";
var manage_dict$4 = "사전 관리";
var create_personal_dict$4 = "개인 사전 만들기";
var recommend$4 = "추천";
var articles$4 = "기사";
var this_week_record$4 = "이번 주 학습 기록";
var change_book$4 = "변경";
var today_study_time$4 = "오늘 학습 시간";
var total_study_days$4 = "총 학습 일수";
var total_study_time$4 = "총 학습 시간";
var my_books$4 = "내 도서";
var manage_books$4 = "책 관리";
var create_personal_book$4 = "개인 책 만들기";
var article_management$4 = "문서 관리";
var toggle_translation$4 = "번역 토글";
var switch_display_mode$4 = "표시 모드 전환";
var line_by_line$4 = "줄별";
var single_line$4 = "단일 줄";
var comparison$4 = "비교";
var question$4 = "질문";
var study_record$4 = "학습 기록";
var play_next_after_end$4 = "종료 후 다음 재생";
var create_book$4 = "책 만들기";
var edit_book$4 = "책 편집";
var dict_list$4 = "사전 목록";
var book_list$4 = "도서 목록";
var word$4 = "단어";
var phonetic$4 = "발음 기호";
var translation$4 = "번역";
var example_sentence$4 = "예문";
var phrase$4 = "구문";
var synonym$4 = "동의어";
var related_words$4 = "관련 단어";
var etymology$4 = "어원";
var add_word$4 = "단어 추가";
var edit_word$4 = "단어 편집";
var create_dict$4 = "사전 만들기";
var edit_dict$4 = "사전 편집";
var faq$4 = "자주 묻는 질문";
var is_free$4 = "웹사이트는 무료인가요?";
var cannot_type$4 = "입력 안 됨, 키보드 응답 없음?";
var where_is_data$4 = "데이터는 어디에? 여러 기기에서 사용하는 방법?";
var resource_sharing$4 = "영어 학습 자료 공유";
var all_resources$4 = "모든 자료";
var new_concept_english$4 = "뉴 컨셉 영어";
var tv_movie$4 = "TV/영화";
var grammar_learning$4 = "문법 학습";
var listening_training$4 = "듣기 훈련";
var warm_tips$4 = "따뜻한 팁";
var resources_from_internet$4 = "모든 자료는 인터넷에서 수집, 학습 목적으로만 사용";
var toggle_theme$4 = "테마 전환";
var english_document$4 = "영어 자료";
var empty_placeholder$4 = "텅 비어있어요~";
var custom$4 = "사용자 정의";
var back$4 = "뒤로";
var total_items$4 = "개";
var batch_delete$4 = "일괄 삭제";
var confirm_delete_selected$4 = "선택한 모든 데이터를 삭제하시겠습니까?";
var change_order$4 = "순서 변경";
var list_order_setting$4 = "목록 순서 설정";
var reverse_current_page$4 = "현재 페이지 반전";
var reverse_all$4 = "모두 반전";
var random_current_page$4 = "현재 페이지 섞기";
var random_all$4 = "모두 섞기";
var apply$4 = "적용";
var add$4 = "추가";
var collect$4 = "즐겨찾기";
var uncollect$4 = "즐겨찾기 해제";
var mark_mastered$4 = "마스터로 표시";
var unmark_mastered$4 = "마스터 표시 해제";
var about_thanks$4 = "이 프로젝트를 사용해 주셔서 감사합니다! 이것은 무료로 사용할 수 있는 오픈소스 프로젝트입니다. 도움이 되셨다면 GitHub에서 스타를 눌러주세요!";
var github_address$4 = "GitHub:";
var about_wechat_feedback$4 = "WeChat 피드백:";
var about_ticket_feedback$4 = "티켓 피드백:";
var about_other_channels$4 = "기타 채널:";
var wait_translation$4 = "번역 완료를 기다려 주세요";
var migrate_data$4 = "데이터 마이그레이션";
var migrate_new_domain$4 = "이 웹사이트는 새로운 도메인을 사용합니다";
var migrate_old_domain_notice$4 = "이전 도메인은 곧 중단됩니다. 브라우저 보안 제한으로 인해 새 사이트와 이전 사이트 간에 데이터를 공유할 수 없습니다. 수동으로 데이터를 전송해 주세요.";
var migrate_later_notice$4 = "지금 마이그레이션하지 않으려면 이 대화 상자를 닫고 나중에 \"설정\" -> \"데이터 관리\"에서 마이그레이션할 수 있습니다";
var author$4 = "작성자:";
var features$4 = "특징:";
var suitable_for$4 = "적합 대상:";
var open_link$4 = "링크 열기";
var qq_group$4 = "QQ 그룹";
var xiaohongshu$4 = "Xiaohongshu";
var follow_x_account$4 = "X 계정 {x_account} 팔로우";
var twitter$4 = "트위터";
var send_email$4 = "{email}로 이메일 보내기";
var email$4 = "이메일";
var xiaohongshu_desc$4 = "Xiaohongshu에서 저희를 팔로우하여 개발팀의 최신 업데이트를 받고 경험과 제안을 공유하세요";
var xiaohongshu_qrcode$4 = "Xiaohongshu QR 코드";
var community_desc$4 = "커뮤니티에 가입하여 개발팀과 소통하고 경험과 제안을 공유하세요";
var qq_qrcode$4 = "QQ 그룹 QR 코드";
var wechat_group$4 = "WeChat 그룹";
var wechat_qrcode$4 = "WeChat 그룹 QR 코드";
var github_project$4 = "GitHub 프로젝트";
var ie_not_supported$4 = "IE 브라우저는 지원되지 않습니다";
var ie_use_modern_browser$4 = "Type Words는 현대 기술로 구축되었습니다. Chrome, Edge, Firefox 또는 기타 최신 브라우저를 사용하세요";
var download_chrome$4 = "Chrome 다운로드";
var i_understand$4 = "이해했습니다";
var ignore_case$4 = "대소문자 무시";
var ignore_case_desc$4 = "활성화하면 입력 시 대소문자를 구분하지 않습니다. 예를 들어 \"hello\"와 \"Hello\" 모두 정답으로 인정됩니다";
var allow_dictation_tip$4 = "받아쓰기 모드에서 힌트 허용";
var allow_dictation_tip_desc$4 = "활성화하면 단어 위에 마우스를 올리거나 단축키를 눌러 정답을 표시할 수 있습니다";
var simple_word_filter$4 = "간단한 단어 필터";
var simple_word_filter_desc$4 = "활성화하면 간단한 단어가 연습에서 제외됩니다. 문서 통계에서 간단한 단어는 계산되지 않습니다";
var simple_word_list$4 = "간단한 단어 목록";
var words_comma_separated$4 = "여러 단어는 쉼표로 구분";
var sound_effect$4 = "효과음";
var pronunciation_accent$4 = "발음 억양";
var pronunciation_accent_desc$4 = "단어 발음에만 적용됩니다. 문서는 미국식 발음 고정";
var please_select$4 = "선택하세요";
var us_accent$4 = "미국식";
var uk_accent$4 = "영국식";
var keyboard_sound$4 = "키 소리";
var keyboard_sound_effect$4 = "키 효과음";
var volume$4 = "볼륨";
var show_prev_next_word$4 = "이전/다음 단어 표시";
var show_prev_next_word_desc$4 = "활성화하면 연습 중 위쪽에 이전/다음 단어가 표시됩니다";
var disable_practice_setting_dialog$4 = "기본적으로 연습 설정 대화 상자 표시 안 함";
var disable_practice_setting_dialog_desc$4 = "사전 상세 페이지에서 학습 버튼을 클릭한 후 연습 설정 대화 상자를 표시할지 여부";
var clear_input_on_error$4 = "오류 시 입력 지우기";
var word_repeat_setting$4 = "단어 반복 설정";
var repeat_count$4 = "반복 횟수";
var review_ratio$4 = "복습 비율";
var review_ratio_desc$4 = "복습 단어와 새 단어의 비율. 변경 사항은 다음 학습 세션에 적용됩니다";
var word_auto_pronunciation$4 = "자동 발음";
var speed$4 = "속도";
var effect_sound$4 = "효과음(오류 및 완료 시 소리)";
var auto_switch$4 = "자동 전환";
var auto_next_word$4 = "자동 다음 단어";
var auto_next_word_desc$4 = "따라쓰기 모드에서만 작동합니다. 받아쓰기, 자가 테스트, 철자 모드는 스페이스를 눌러 계속해야 합니다";
var auto_next_word_time$4 = "자동 전환 시간";
var auto_next_word_time_desc$4 = "올바르게 입력한 후 자동으로 다음 단어로 전환되는 시간";
var milliseconds$4 = "밀리초";
var font_setting$4 = "글꼴 설정";
var foreign_font$4 = "외국어 글꼴";
var chinese_font$4 = "중국어 글꼴";
var auto_play_sentence$4 = "문장 자동 재생";
var ignore_symbols_numbers_names$4 = "입력 시 기호, 숫자, 이름 무시";
var settings$4 = "설정";
var please_select_dict$4 = "먼저 사전을 선택하세요";
var learning_settings$4 = "학습 설정";
var total$4 = "총";
var estimated$4 = "예상";
var days_to_complete$4 = "일 완료 예정";
var from_word$4 = "단어부터 시작";
var start_daily$4 = ", 매일";
var new_words$4 = "새 단어";
var review_ratio_tooltip$4 = "복습 단어와 새 단어의 비율";
var review_ratio_notice_1$4 = "학습이 완료되지 않았을 때, 복습 수는 설정된 복습 비율에 따라 생성됩니다. 0이면 복습 없음";
var review_ratio_notice_2$4 = "학습 완료 후, 새 단어 수는 0으로 고정되고, 복습 수는 비율에 따라 생성됩니다(비율이 1 미만이면 1로 계산)";
var daily_learning$4 = "일일 학습";
var learning_progress$4 = "학습 진행률";
var select_from_dict$4 = "사전에서 시작 위치 선택";
var change_in_settings$4 = "설정 페이지에서 변경 가능";
var keep_default_no_show$4 = "기본값 유지, 다시 표시 안 함";
var review_complete$4 = "복습 완료";
var today_task_complete$4 = "오늘 과제 완료";
var study_duration$4 = "학습 시간";
var accuracy_rate$4 = "정답률";
var weekly_study_record$4 = "주간 학습 기록";
var studied$4 = "학습 완료";
var total_words$4 = "총 단어 수";
var restart_learning$4 = "학습 다시 시작";
var another_round$4 = "한 번 더";
var return_home$4 = "홈으로 돌아가기";
var import_tutorial$4 = "가져오기 튜토리얼";
var import_follow_template$4 = "템플릿 형식에 따라 데이터를 입력하세요";
var import_word_required$4 = "단어 필드는 필수이며 다른 필드는 선택 사항입니다";
var import_translation_hint$4 = "번역: 한 줄에 하나의 번역, 품사 먼저, 그 다음 내용(예: n.cancel); 여러 번역은 별도의 줄에";
var import_example_hint$4 = "예문: 원문 한 줄, 번역 한 줄; 여러 예문은 별도의 줄에";
var import_phrase_hint$4 = "구문: 원문 한 줄, 번역 한 줄; 여러 구문은 별도의 줄에";
var two$4 = "두";
var lines$4 = "줄";
var import_other_hint$4 = "동의어, 어근, 어원: 공식 사전으로 이동하여 단어를 편집해 형식을 확인하세요";
var template_download$4 = "템플릿 다운로드";
var word_import_template$4 = "단어 가져오기 템플릿";
var conflict_notice_title$4 = "사용 중 다음과 같은 상황이 발생하면:";
var keyboard_no_response$4 = "키보드가 반응하지 않음";
var check_plugins_installed$4 = "다음 항목이 설치되어 있는지 확인하세요";
var conflict_plugin_names$4 = "\"비디오 속도 컨트롤러\" \"Vim\" \"오디오/비디오 향상기\" \"온라인 코스 도우미\"";
var plugins_intercept_keyboard$4 = "등 키보드 이벤트를 가로채는 플러그인/스크립트가";
var cause_no_response$4 = "이 웹사이트에서 연습할 때 키 입력이 반응하지 않게 됩니다";
var follow_steps_to_resolve$4 = ", 다음 단계에 따라 충돌을 해결하세요:";
var try_incognito_mode$4 = "브라우저 시크릿 모드에서 이 웹사이트를 열고 정상적으로 입력할 수 있는지 확인하세요?";
var incognito_not_working$4 = "시크릿 모드에서도 입력할 수 없으면,";
var click_here$4 = "여기를 클릭하세요";
var feedback_or_wechat$4 = "피드백을 제공하거나 WeChat 그룹에 가입하세요:";
var incognito_working$4 = "시크릿 모드에서 입력할 수 있으면 플러그인/스크립트 충돌입니다";
var disable_plugin_or_exclude$4 = "해당 플러그인/스크립트를 임시로 비활성화하거나 플러그인/스크립트 설정에서 이 웹사이트를 제외하세요";
var install_extension_manager$4 = "이것을 설치할 수 있습니다";
var chrome_extension$4 = "확장 프로그램(Chrome 버전, VPN 필요)";
var edge_extension$4 = "확장 프로그램(Edge 버전, VPN 불필요)";
var to_manage_extensions$4 = "다른 확장 프로그램을 빠르게 활성화/비활성화할 수 있습니다";
var delete_key_goes_back$4 = "삭제 키를 누르면 이전 페이지로 돌아감";
var browser_360_shortcut$4 = "360 브라우저에서는 \"삭제 키로 이전 페이지로 돌아가기\" 단축키가 기본으로 설정되어 있습니다";
var change_browser_or_shortcut$4 = "브라우저를 변경하거나 360 기본 단축키를 삭제하세요: 브라우저 설정에서 \"뒤로\"를 검색";
var please_enter_name$4 = "이름을 입력하세요";
var name_max_20_chars$4 = "이름은 20자를 초과할 수 없습니다";
var name_already_exists$4 = "이름이 이미 존재합니다!";
var add_success$4 = "추가 성공";
var edit_success$4 = "수정 성공";
var edit_and_add_to_dict$4 = "수정 성공 및 내 사전에 추가됨";
var please_fill_complete$4 = "완전히 작성해 주세요";
var name$4 = "이름";
var description$4 = "설명";
var source_language$4 = "원본 언어";
var target_language$4 = "대상 언어";
var english$4 = "영어";
var german$4 = "독일어";
var japanese$4 = "일본어";
var code$4 = "코드";
var chinese$4 = "중국어";
var multiple_choice$4 = "객관식";
var start$4 = "시작";
var countdown$4 = "카운트다운";
var seconds$4 = "초";
var submit_exam$4 = "시험 제출";
var exam_color_hint$4 = "연한 빨강: 오답, 진한 빨강: 미선택, 녹색: 정답";
var items_per_page$4 = "개/페이지";
var jump_to$4 = "이동";
var page_or_index$4 = "페이지/번호";
var please_fill_original$4 = "원문을 입력하세요!";
var please_fill_title$4 = "제목을 입력하세요!";
var please_fill_content$4 = "내용을 입력하세요!";
var audio_added_success$4 = "오디오 추가 성공";
var lrc_parse_success$4 = "LRC 파일 분석 성공";
var original_text$4 = "원문";
var title$4 = "제목";
var please_fill_original_title$4 = "원문 제목을 입력하세요";
var content$4 = "내용";
var one_sentence_per_line$4 = "한 줄에 한 문장, 단락 사이에 빈 줄을 넣으세요";
var name_config_tip$4 = "이름을 구성한 후 연습 중 자동으로 무시됩니다(선택 사항, 기본적으로 활성화)";
var name_config$4 = "이름 구성";
var please_paste_original$4 = "원문을 붙여넣으세요";
var usage_guide$4 = "사용 방법";
var copy_and_split$4 = "원문을 복사한 다음 문장으로 분할하세요";
var click$4 = "클릭";
var split_sentence$4 = "문장 분할";
var auto_split$4 = "버튼으로 자동 분할";
var or$4 = "또는";
var manual_split$4 = "수동으로 편집하여 분할";
var split_rule$4 = "분할 규칙: 한 줄에 한 문장, 단락 사이에 빈 줄";
var after_edit_click$4 = "편집 후 클릭";
var sync_to_result$4 = "버튼을 눌러 왼쪽 결과 패널에 동기화";
var please_fill_translation_title$4 = "번역 제목을 입력하세요";
var please_fill_translation$4 = "번역을 입력하세요";
var translate$4 = "번역";
var copy_translation_or_click$4 = "번역을 붙여넣거나 없으면 클릭";
var result$4 = "결과";
var editable_auto_sync$4 = "모두 편집 가능, 편집 후 적용 버튼을 클릭하면 자동 동기화";
var audio$4 = "오디오";
var audio_management$4 = "오디오 관리";
var paragraph$4 = "단락";
var set_start_time$4 = "시작 시간 설정";
var use_prev_end_time$4 = "이전 문장 종료 시간 사용";
var minus_03s$4 = "-0.3초";
var end$4 = "끝";
var set_end_time$4 = "종료 시간 설정";
var edit_audio_align$4 = "오디오 정렬 편집";
var play$4 = "재생";
var status$4 = "상태";
var sentences_not_translated$4 = "{count}개의 문장이 번역되지 않았습니다!";
var translation_complete$4 = "번역 완료!";
var save_and_next$4 = "저장하고 다음 추가";
var no_translation_comparison$4 = "번역 비교 없음";
var adjust_audio_timeline$4 = "오디오 타임라인 조정";
var audio_timeline_tutorial$4 = "튜토리얼: 재생을 클릭하고, 오디오가 문장 시작에 도달하면 시작 시간 기록을 클릭; 문장 끝에 도달하면 종료 시간 기록을 클릭";
var start_time$4 = "시작 시간";
var jump_to_seconds$4 = "{seconds}초로 이동";
var use_prev_end_seconds$4 = "이전 문장 종료 시간 사용: {seconds}초";
var decrease_03s$4 = "-0.3초 감소";
var increase_03s$4 = "+0.3초 증가";
var record$4 = "기록";
var end_time$4 = "종료 시간";
var audio_upload_notice$4 = "1. 업로드된 파일은 로컬에 저장되며, 컴퓨터를 변경하면 데이터가 손실됩니다. 적시에 백업하세요\n2. mp3, wav, m4a 등 일반적인 오디오 형식 지원";
var upload_audio$4 = "오디오 업로드";
var upload_lrc$4 = "LRC 파일 업로드";
var name_management$4 = "이름 관리";
var name_ignore_config_desc$4 = "무시할 이름을 구성하세요. 이 이름들은 연습 중 자동으로 건너뜁니다(선택 사항, 기본적으로 활성화)";
var add_name$4 = "이름 추가";
var enter_name$4 = "이름 입력";
var collect_word$4 = "단어 수집";
var copy$4 = "복사";
var copy_sentence$4 = "문장 복사";
var copied$4 = "복사됨";
var copy_word$4 = "단어 복사";
var start_from_here$4 = "여기서 시작";
var play_sentence$4 = "문장 재생";
var grammar_analysis$4 = "문법 분석";
var copied_open_grammar$4 = "복사됨! 문법 분석 웹사이트를 엽니다!";
var youdao_translate$4 = "Youdao 사전";
var translate_word$4 = "단어 번역";
var translate_sentence$4 = "문장 번역";
var restart_practice$4 = "연습 다시 시작";
var next_article$4 = "다음 기사";
var learning_record$4 = "학습 기록";
var total_learning_time$4 = "총 학습 시간";
var current$4 = "현재";
var show_questions$4 = "문제 표시";
var explanation$4 = "해설";
var encouragement_95$4 = "훌륭해요! 계속 유지하세요!";
var encouragement_85$4 = "잘했어요, 계속 노력하세요!";
var encouragement_70$4 = "좋은 점수에요, 계속하세요!";
var encouragement_default$4 = "연습할 때마다 발전합니다, 계속하세요!";
var daily_task_complete$4 = "일일 과제 완료";
var weekly_record$4 = "주간 학습 기록";
var study_progress$4 = "학습 진도";
var relearn$4 = "다시 학습";
var start_from_beginning$4 = "처음부터 시작";
var another_group$4 = "다른 그룹";
var back_to_home$4 = "홈으로 돌아가기";
var know_word_tip$4 = "\"나는 안다\"를 잘못 선택했다면 삭제 키를 눌러 다시 선택하세요!";
var press_delete_reinput$4 = "삭제 키를 눌러 다시 입력하세요";
var press_space_continue$4 = "스페이스를 눌러 계속하세요";
var shortcut$4 = "단축키";
var i_know$4 = "나는 안다";
var i_dont_know$4 = "모른다";
var phrases$4 = "구문";
var synonyms$4 = "동의어";
var word_root$4 = "어근";
var review_wrong_words$4 = "틀린 단어 복습";
var collapse$4 = "접기";
var expand$4 = "펼치기";
var minutes$4 = "분";
var time$4 = "시간";
var errors$4 = "오류 수";
var skip_to_next_stage$4 = "다음 단계로 건너뛰기";
var skip_word$4 = "단어 건너뛰기";
var toggle_dictation_mode$4 = "받아쓰기 모드 전환";
var send_failed$4 = "전송 실패";
var send_code_failed$4 = "인증 코드 전송 실패";
var sending$4 = "전송 중";
var send_code$4 = "코드 전송";
var agree_terms_notice$4 = "계속하면 다음에 동의하는 것입니다:";
var user_agreement$4 = "이용약관";
var and$4 = "및";
var privacy_policy$4 = "개인정보 처리방침";
var important_notice$4 = "중요 공지";
var dont_remind$4 = "다시 알리지 않음";
var function_desc$4 = "기능 소개";
var qa1_a$4 = "웹사이트는 무료인가요?";
var qa1_q1$4 = "완전히 무료는 아닙니다. 장기적인 발전을 위해 향후 요금 부과는 불가피하지만 사용을 위해 필수 결제는 아닙니다. 무료와 유료 사이의 균형을 찾으려 합니다.";
var qa1_q2$4 = "프로젝트는 오픈소스이며 직접 배포할 수 있습니다.";
var qa2_a$4 = "입력할 수 없고 키보드가 반응하지 않나요?";
var qa3_a$4 = "데이터는 어디에 있나요? 여러 컴퓨터/기기에서 어떻게 사용하나요?";
var qa3_q1$4 = "모든 사용자 데이터는 로컬 브라우저에 저장됩니다. 다른 기기나 브라우저에서 Type Words를 사용하려면 수동으로 데이터를 내보내고 가져와야 합니다.";
var qa3_q2$4 = "설정 -> 데이터 설정 -> 원래 컴퓨터에서 데이터 내보내기 -> 소셜 소프트웨어로 새 컴퓨터에 전송 -> 새 컴퓨터에서 가져오기";
var qa3_q3$4 = "계정 시스템 개발 중입니다.";
var qa4_a$4 = "웹사이트가 자동으로 계획하는 단어 수가 너무 많습니다. 어떻게 수정하나요?";
var qa4_q1$4 = "기본 복습 단어와 새 단어의 비율은 1:4입니다. 새 단어가 40개면 지난 세션에서 40개, 이전 세션에서 120개를 복습합니다.";
var qa4_q2$4 = "설정 -> 단어 설정 -> 복습 비율에서 수정할 수 있습니다";
var qa5_a$4 = "학습 한 번을 완료하는 데 너무 오래 걸립니다. 과정이 너무 길지 않나요?";
var qa5_q1$4 = "이것은 실제로 문제입니다. 긴 과정은 동기를 잃게 만들 수 있습니다. 학습 과정을 최적화하는 방법을 생각하고 있습니다.";
var qa5_q2$4 = "틀린 단어는 반복됩니다. 단순한 오타라면 Tab 키를 눌러 건너뛸 수 있습니다.";
var qa5_q3$4 = "복습 시 \"모름\"으로 표시된 단어만 받아쓰기와 철자 쓰기가 필요합니다.";
var qa5_q4$4 = "계정 시스템이 출시된 후 에빙하우스 기억 곡선 기능이 추가됩니다.";
var qa6_a$4 = "에빙하우스 기억 곡선 기능이 추가되나요?";
var qa7_a$4 = "단어 추가/사용자 정의 사전/내 단어 가져오기/단어 내용 수정이 가능한가요?";
var qa7_q1$4 = "예, 단어 페이지에서 \"개인 사전 만들기\"를 클릭하세요";
var qa7_q2$4 = "생성 후 사전 상세 페이지에서 \"단어 추가\" 아이콘을 클릭하여 자신의 단어를 추가하세요";
var qa7_q3$4 = "\"가져오기\" 아이콘을 클릭하여 일괄 가져오기할 수도 있습니다(템플릿 xlsx 형식을 엄격히 따라야 함)";
var qa8_a$4 = "문장 추가/사용자 정의 책/내 문장 가져오기/문장 내용 수정이 가능한가요?";
var qa8_q1$4 = "예, 단계는 기본적으로 단어 추가와 동일합니다";
var qa8_q2$4 = "문장 페이지에서 \"개인 책 만들기\"를 클릭하세요";
var qa8_q3$4 = "생성 후 상단의 \"문장 관리\" 버튼을 클릭하여 자신의 문장을 추가하세요";
var qa9_a$4 = "키 소리를 끄는 방법은?";
var qa9_q$4 = "설정 -> 일반 설정 -> 효과음 -> 키 소리를 끄세요";
var qa10_a$4 = "태블릿에서 사용할 수 있나요?";
var qa10_q1$4 = "태블릿을 사용할 수 있지만, 내장 가상 키보드가 화면 공간의 1/3을 차지하므로 블루투스 키보드를 사용하면 더 나은 경험을 제공합니다.";
var qa10_q2$4 = "블루투스 키보드를 연결한 후 안드로이드 태블릿은 브라우저에서 \"데스크톱 모드\"를 수동으로 활성화해야 합니다. iPad는 이 작업이 필요하지 않습니다.";
var qa11_a$4 = "휴대폰에서 사용할 수 있나요?";
var qa11_q$4 = "휴대폰을 사용할 수 있지만, 휴대폰 최적화가 아직 이루어지지 않았습니다. 컴퓨터나 태블릿에서 사용하는 것이 좋습니다.";
var qa12_a$4 = "앱이나 미니 프로그램이 있나요?";
var qa12_q$4 = "아니요, 웹사이트만 있습니다";
var qa13_a$4 = "개발팀에 피드백을 어떻게 제공하나요?";
var qa13_q1$4 = "공식 WeChat 그룹에 가입하여 원하는 기능을 자세히 설명할 수 있습니다";
var qa13_q2$4 = "애플리케이션에서 버그를 발견하면 문제를 재현하는 단계와 함께 자세한 설명을 제공해 주세요";
var qa13_q3$4 = "지원 티켓을 제출할 수도 있습니다";
var qa13_q4$4 = "github/issues에서도 제출할 수 있습니다";
const ko = {
	app_desc: app_desc$4,
	app_name: app_name$4,
	start_word_practice: start_word_practice$4,
	start_article_practice: start_article_practice$4,
	home_word_practice: home_word_practice$4,
	home_word_practice_desc1: home_word_practice_desc1$4,
	home_word_practice_desc2: home_word_practice_desc2$4,
	home_word_practice_desc3: home_word_practice_desc3$4,
	home_article_practice: home_article_practice$4,
	home_article_practice_desc1: home_article_practice_desc1$4,
	home_article_practice_desc2: home_article_practice_desc2$4,
	home_article_practice_desc3: home_article_practice_desc3$4,
	home_collection: home_collection$4,
	home_collection_desc1: home_collection_desc1$4,
	home_collection_desc2: home_collection_desc2$4,
	home_collection_desc3: home_collection_desc3$4,
	home_vocabulary: home_vocabulary$4,
	home_vocabulary_desc: home_vocabulary_desc$4,
	home_free_opensource: home_free_opensource$4,
	home_free_opensource_desc1: home_free_opensource_desc1$4,
	home_free_opensource_desc2: home_free_opensource_desc2$4,
	home_free_opensource_desc3: home_free_opensource_desc3$4,
	home_customization: home_customization$4,
	home_customization_desc1: home_customization_desc1$4,
	home_customization_desc2: home_customization_desc2$4,
	home_customization_desc3: home_customization_desc3$4,
	home_design: home_design$4,
	home_design_desc1: home_design_desc1$4,
	home_design_desc2: home_design_desc2$4,
	home_design_desc3: home_design_desc3$4,
	home_personalized: home_personalized$4,
	home_personalized_desc1: home_personalized_desc1$4,
	home_personalized_desc2: home_personalized_desc2$4,
	home_personalized_desc3: home_personalized_desc3$4,
	cn_limit_no1: cn_limit_no1$4,
	cn_limit_no2: cn_limit_no2$4,
	setting: setting$4,
	edit: edit$4,
	"delete": "삭제",
	cancel: cancel$4,
	confirm: confirm$4,
	save: save$4,
	close: close$4,
	search: search$4,
	more: more$4,
	loading: loading$4,
	introduction: introduction$4,
	learn: learn$4,
	practice: practice$4,
	test: test$4,
	feedback: feedback$4,
	document: document$4,
	help: help$4,
	about: about$4,
	login: login$4,
	register: register$4,
	register_account: register_account$4,
	register_new_account: register_new_account$4,
	code_login: code_login$4,
	password_login: password_login$4,
	phone_placeholder: phone_placeholder$4,
	code_placeholder: code_placeholder$4,
	account_placeholder: account_placeholder$4,
	password_placeholder: password_placeholder$4,
	auto_register_notice: auto_register_notice$4,
	forgot_password: forgot_password$4,
	reset_password: reset_password$4,
	set_password_placeholder: set_password_placeholder$4,
	confirm_password_placeholder: confirm_password_placeholder$4,
	new_password_placeholder: new_password_placeholder$4,
	confirm_new_password: confirm_new_password$4,
	wechat_scan_login: wechat_scan_login$4,
	scan_success: scan_success$4,
	tap_allow_in_wechat: tap_allow_in_wechat$4,
	login_cancelled: login_cancelled$4,
	login_again: login_again$4,
	sync_data: sync_data$4,
	local_data_detected: local_data_detected$4,
	sync_to_account_question: sync_to_account_question$4,
	no_sync: no_sync$4,
	sync: sync$4,
	syncing: syncing$4,
	sync_failed: sync_failed$4,
	sync_success: sync_success$4,
	enter_website: enter_website$4,
	general_settings: general_settings$4,
	word_settings: word_settings$4,
	article_settings: article_settings$4,
	data_management: data_management$4,
	shortcut_settings: shortcut_settings$4,
	update_log: update_log$4,
	"function": "기능",
	shortcut_key: shortcut_key$4,
	no_shortcut_set: no_shortcut_set$4,
	press_key_to_set: press_key_to_set$4,
	click_here_when_done: click_here_when_done$4,
	restore_default: restore_default$4,
	data_saved_locally: data_saved_locally$4,
	export_data_backup: export_data_backup$4,
	import_data_restore: import_data_restore$4,
	import_warning: import_warning$4,
	words: words$4,
	no_dict_selected: no_dict_selected$4,
	select_dict_to_start: select_dict_to_start$4,
	select_dict: select_dict$4,
	change_progress: change_progress$4,
	estimated_completion: estimated_completion$4,
	current_progress: current_progress$4,
	learned: learned$4,
	completed_review_stage: completed_review_stage$4,
	today_task: today_task$4,
	last_task: last_task$4,
	word_list: word_list$4,
	daily_goal: daily_goal$4,
	words_count: words_count$4,
	change: change$4,
	new_words_count: new_words_count$4,
	review_last: review_last$4,
	review_previous: review_previous$4,
	start_learning: start_learning$4,
	continue_learning: continue_learning$4,
	free_practice: free_practice$4,
	continue_free_practice: continue_free_practice$4,
	smart_learning: smart_learning$4,
	review: review$4,
	random_review: random_review$4,
	my_dictionaries: my_dictionaries$4,
	manage_dict: manage_dict$4,
	create_personal_dict: create_personal_dict$4,
	recommend: recommend$4,
	articles: articles$4,
	this_week_record: this_week_record$4,
	change_book: change_book$4,
	today_study_time: today_study_time$4,
	total_study_days: total_study_days$4,
	total_study_time: total_study_time$4,
	my_books: my_books$4,
	manage_books: manage_books$4,
	create_personal_book: create_personal_book$4,
	article_management: article_management$4,
	toggle_translation: toggle_translation$4,
	switch_display_mode: switch_display_mode$4,
	line_by_line: line_by_line$4,
	single_line: single_line$4,
	comparison: comparison$4,
	question: question$4,
	study_record: study_record$4,
	play_next_after_end: play_next_after_end$4,
	create_book: create_book$4,
	edit_book: edit_book$4,
	dict_list: dict_list$4,
	book_list: book_list$4,
	word: word$4,
	phonetic: phonetic$4,
	translation: translation$4,
	example_sentence: example_sentence$4,
	phrase: phrase$4,
	synonym: synonym$4,
	related_words: related_words$4,
	etymology: etymology$4,
	add_word: add_word$4,
	edit_word: edit_word$4,
	create_dict: create_dict$4,
	edit_dict: edit_dict$4,
	"import": "가져오기",
	"export": "내보내기",
	faq: faq$4,
	is_free: is_free$4,
	cannot_type: cannot_type$4,
	where_is_data: where_is_data$4,
	resource_sharing: resource_sharing$4,
	all_resources: all_resources$4,
	new_concept_english: new_concept_english$4,
	tv_movie: tv_movie$4,
	grammar_learning: grammar_learning$4,
	listening_training: listening_training$4,
	warm_tips: warm_tips$4,
	resources_from_internet: resources_from_internet$4,
	toggle_theme: toggle_theme$4,
	english_document: english_document$4,
	empty_placeholder: empty_placeholder$4,
	custom: custom$4,
	back: back$4,
	total_items: total_items$4,
	batch_delete: batch_delete$4,
	confirm_delete_selected: confirm_delete_selected$4,
	change_order: change_order$4,
	list_order_setting: list_order_setting$4,
	reverse_current_page: reverse_current_page$4,
	reverse_all: reverse_all$4,
	random_current_page: random_current_page$4,
	random_all: random_all$4,
	apply: apply$4,
	add: add$4,
	collect: collect$4,
	uncollect: uncollect$4,
	mark_mastered: mark_mastered$4,
	unmark_mastered: unmark_mastered$4,
	about_thanks: about_thanks$4,
	github_address: github_address$4,
	about_wechat_feedback: about_wechat_feedback$4,
	about_ticket_feedback: about_ticket_feedback$4,
	about_other_channels: about_other_channels$4,
	wait_translation: wait_translation$4,
	migrate_data: migrate_data$4,
	migrate_new_domain: migrate_new_domain$4,
	migrate_old_domain_notice: migrate_old_domain_notice$4,
	migrate_later_notice: migrate_later_notice$4,
	author: author$4,
	features: features$4,
	suitable_for: suitable_for$4,
	open_link: open_link$4,
	qq_group: qq_group$4,
	xiaohongshu: xiaohongshu$4,
	follow_x_account: follow_x_account$4,
	twitter: twitter$4,
	send_email: send_email$4,
	email: email$4,
	xiaohongshu_desc: xiaohongshu_desc$4,
	xiaohongshu_qrcode: xiaohongshu_qrcode$4,
	community_desc: community_desc$4,
	qq_qrcode: qq_qrcode$4,
	wechat_group: wechat_group$4,
	wechat_qrcode: wechat_qrcode$4,
	github_project: github_project$4,
	ie_not_supported: ie_not_supported$4,
	ie_use_modern_browser: ie_use_modern_browser$4,
	download_chrome: download_chrome$4,
	i_understand: i_understand$4,
	ignore_case: ignore_case$4,
	ignore_case_desc: ignore_case_desc$4,
	allow_dictation_tip: allow_dictation_tip$4,
	allow_dictation_tip_desc: allow_dictation_tip_desc$4,
	simple_word_filter: simple_word_filter$4,
	simple_word_filter_desc: simple_word_filter_desc$4,
	simple_word_list: simple_word_list$4,
	words_comma_separated: words_comma_separated$4,
	sound_effect: sound_effect$4,
	pronunciation_accent: pronunciation_accent$4,
	pronunciation_accent_desc: pronunciation_accent_desc$4,
	please_select: please_select$4,
	us_accent: us_accent$4,
	uk_accent: uk_accent$4,
	keyboard_sound: keyboard_sound$4,
	keyboard_sound_effect: keyboard_sound_effect$4,
	volume: volume$4,
	show_prev_next_word: show_prev_next_word$4,
	show_prev_next_word_desc: show_prev_next_word_desc$4,
	disable_practice_setting_dialog: disable_practice_setting_dialog$4,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$4,
	clear_input_on_error: clear_input_on_error$4,
	word_repeat_setting: word_repeat_setting$4,
	repeat_count: repeat_count$4,
	review_ratio: review_ratio$4,
	review_ratio_desc: review_ratio_desc$4,
	word_auto_pronunciation: word_auto_pronunciation$4,
	speed: speed$4,
	effect_sound: effect_sound$4,
	auto_switch: auto_switch$4,
	auto_next_word: auto_next_word$4,
	auto_next_word_desc: auto_next_word_desc$4,
	auto_next_word_time: auto_next_word_time$4,
	auto_next_word_time_desc: auto_next_word_time_desc$4,
	milliseconds: milliseconds$4,
	font_setting: font_setting$4,
	foreign_font: foreign_font$4,
	chinese_font: chinese_font$4,
	auto_play_sentence: auto_play_sentence$4,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$4,
	settings: settings$4,
	please_select_dict: please_select_dict$4,
	learning_settings: learning_settings$4,
	total: total$4,
	estimated: estimated$4,
	days_to_complete: days_to_complete$4,
	from_word: from_word$4,
	start_daily: start_daily$4,
	new_words: new_words$4,
	review_ratio_tooltip: review_ratio_tooltip$4,
	review_ratio_notice_1: review_ratio_notice_1$4,
	review_ratio_notice_2: review_ratio_notice_2$4,
	daily_learning: daily_learning$4,
	learning_progress: learning_progress$4,
	select_from_dict: select_from_dict$4,
	change_in_settings: change_in_settings$4,
	keep_default_no_show: keep_default_no_show$4,
	review_complete: review_complete$4,
	today_task_complete: today_task_complete$4,
	study_duration: study_duration$4,
	accuracy_rate: accuracy_rate$4,
	weekly_study_record: weekly_study_record$4,
	studied: studied$4,
	total_words: total_words$4,
	restart_learning: restart_learning$4,
	another_round: another_round$4,
	return_home: return_home$4,
	import_tutorial: import_tutorial$4,
	import_follow_template: import_follow_template$4,
	import_word_required: import_word_required$4,
	import_translation_hint: import_translation_hint$4,
	import_example_hint: import_example_hint$4,
	import_phrase_hint: import_phrase_hint$4,
	two: two$4,
	lines: lines$4,
	import_other_hint: import_other_hint$4,
	template_download: template_download$4,
	word_import_template: word_import_template$4,
	conflict_notice_title: conflict_notice_title$4,
	keyboard_no_response: keyboard_no_response$4,
	check_plugins_installed: check_plugins_installed$4,
	conflict_plugin_names: conflict_plugin_names$4,
	plugins_intercept_keyboard: plugins_intercept_keyboard$4,
	cause_no_response: cause_no_response$4,
	follow_steps_to_resolve: follow_steps_to_resolve$4,
	try_incognito_mode: try_incognito_mode$4,
	incognito_not_working: incognito_not_working$4,
	click_here: click_here$4,
	feedback_or_wechat: feedback_or_wechat$4,
	incognito_working: incognito_working$4,
	disable_plugin_or_exclude: disable_plugin_or_exclude$4,
	install_extension_manager: install_extension_manager$4,
	chrome_extension: chrome_extension$4,
	edge_extension: edge_extension$4,
	to_manage_extensions: to_manage_extensions$4,
	delete_key_goes_back: delete_key_goes_back$4,
	browser_360_shortcut: browser_360_shortcut$4,
	change_browser_or_shortcut: change_browser_or_shortcut$4,
	please_enter_name: please_enter_name$4,
	name_max_20_chars: name_max_20_chars$4,
	name_already_exists: name_already_exists$4,
	add_success: add_success$4,
	edit_success: edit_success$4,
	edit_and_add_to_dict: edit_and_add_to_dict$4,
	please_fill_complete: please_fill_complete$4,
	name: name$4,
	description: description$4,
	source_language: source_language$4,
	target_language: target_language$4,
	english: english$4,
	german: german$4,
	japanese: japanese$4,
	code: code$4,
	chinese: chinese$4,
	multiple_choice: multiple_choice$4,
	start: start$4,
	countdown: countdown$4,
	seconds: seconds$4,
	submit_exam: submit_exam$4,
	exam_color_hint: exam_color_hint$4,
	items_per_page: items_per_page$4,
	jump_to: jump_to$4,
	page_or_index: page_or_index$4,
	please_fill_original: please_fill_original$4,
	please_fill_title: please_fill_title$4,
	please_fill_content: please_fill_content$4,
	audio_added_success: audio_added_success$4,
	lrc_parse_success: lrc_parse_success$4,
	original_text: original_text$4,
	title: title$4,
	please_fill_original_title: please_fill_original_title$4,
	content: content$4,
	one_sentence_per_line: one_sentence_per_line$4,
	name_config_tip: name_config_tip$4,
	name_config: name_config$4,
	please_paste_original: please_paste_original$4,
	usage_guide: usage_guide$4,
	copy_and_split: copy_and_split$4,
	click: click$4,
	split_sentence: split_sentence$4,
	auto_split: auto_split$4,
	or: or$4,
	manual_split: manual_split$4,
	split_rule: split_rule$4,
	after_edit_click: after_edit_click$4,
	sync_to_result: sync_to_result$4,
	please_fill_translation_title: please_fill_translation_title$4,
	please_fill_translation: please_fill_translation$4,
	translate: translate$4,
	copy_translation_or_click: copy_translation_or_click$4,
	result: result$4,
	editable_auto_sync: editable_auto_sync$4,
	audio: audio$4,
	audio_management: audio_management$4,
	paragraph: paragraph$4,
	set_start_time: set_start_time$4,
	use_prev_end_time: use_prev_end_time$4,
	minus_03s: minus_03s$4,
	end: end$4,
	set_end_time: set_end_time$4,
	edit_audio_align: edit_audio_align$4,
	play: play$4,
	status: status$4,
	sentences_not_translated: sentences_not_translated$4,
	translation_complete: translation_complete$4,
	save_and_next: save_and_next$4,
	no_translation_comparison: no_translation_comparison$4,
	adjust_audio_timeline: adjust_audio_timeline$4,
	audio_timeline_tutorial: audio_timeline_tutorial$4,
	start_time: start_time$4,
	jump_to_seconds: jump_to_seconds$4,
	use_prev_end_seconds: use_prev_end_seconds$4,
	decrease_03s: decrease_03s$4,
	increase_03s: increase_03s$4,
	record: record$4,
	end_time: end_time$4,
	audio_upload_notice: audio_upload_notice$4,
	upload_audio: upload_audio$4,
	upload_lrc: upload_lrc$4,
	name_management: name_management$4,
	name_ignore_config_desc: name_ignore_config_desc$4,
	add_name: add_name$4,
	enter_name: enter_name$4,
	collect_word: collect_word$4,
	copy: copy$4,
	copy_sentence: copy_sentence$4,
	copied: copied$4,
	copy_word: copy_word$4,
	start_from_here: start_from_here$4,
	play_sentence: play_sentence$4,
	grammar_analysis: grammar_analysis$4,
	copied_open_grammar: copied_open_grammar$4,
	youdao_translate: youdao_translate$4,
	translate_word: translate_word$4,
	translate_sentence: translate_sentence$4,
	restart_practice: restart_practice$4,
	next_article: next_article$4,
	learning_record: learning_record$4,
	total_learning_time: total_learning_time$4,
	current: current$4,
	show_questions: show_questions$4,
	explanation: explanation$4,
	encouragement_95: encouragement_95$4,
	encouragement_85: encouragement_85$4,
	encouragement_70: encouragement_70$4,
	encouragement_default: encouragement_default$4,
	daily_task_complete: daily_task_complete$4,
	weekly_record: weekly_record$4,
	study_progress: study_progress$4,
	relearn: relearn$4,
	start_from_beginning: start_from_beginning$4,
	another_group: another_group$4,
	back_to_home: back_to_home$4,
	know_word_tip: know_word_tip$4,
	press_delete_reinput: press_delete_reinput$4,
	press_space_continue: press_space_continue$4,
	shortcut: shortcut$4,
	i_know: i_know$4,
	i_dont_know: i_dont_know$4,
	phrases: phrases$4,
	synonyms: synonyms$4,
	word_root: word_root$4,
	review_wrong_words: review_wrong_words$4,
	collapse: collapse$4,
	expand: expand$4,
	minutes: minutes$4,
	time: time$4,
	errors: errors$4,
	skip_to_next_stage: skip_to_next_stage$4,
	skip_word: skip_word$4,
	toggle_dictation_mode: toggle_dictation_mode$4,
	send_failed: send_failed$4,
	send_code_failed: send_code_failed$4,
	sending: sending$4,
	send_code: send_code$4,
	agree_terms_notice: agree_terms_notice$4,
	user_agreement: user_agreement$4,
	and: and$4,
	privacy_policy: privacy_policy$4,
	important_notice: important_notice$4,
	dont_remind: dont_remind$4,
	function_desc: function_desc$4,
	qa1_a: qa1_a$4,
	qa1_q1: qa1_q1$4,
	qa1_q2: qa1_q2$4,
	qa2_a: qa2_a$4,
	qa3_a: qa3_a$4,
	qa3_q1: qa3_q1$4,
	qa3_q2: qa3_q2$4,
	qa3_q3: qa3_q3$4,
	qa4_a: qa4_a$4,
	qa4_q1: qa4_q1$4,
	qa4_q2: qa4_q2$4,
	qa5_a: qa5_a$4,
	qa5_q1: qa5_q1$4,
	qa5_q2: qa5_q2$4,
	qa5_q3: qa5_q3$4,
	qa5_q4: qa5_q4$4,
	qa6_a: qa6_a$4,
	qa7_a: qa7_a$4,
	qa7_q1: qa7_q1$4,
	qa7_q2: qa7_q2$4,
	qa7_q3: qa7_q3$4,
	qa8_a: qa8_a$4,
	qa8_q1: qa8_q1$4,
	qa8_q2: qa8_q2$4,
	qa8_q3: qa8_q3$4,
	qa9_a: qa9_a$4,
	qa9_q: qa9_q$4,
	qa10_a: qa10_a$4,
	qa10_q1: qa10_q1$4,
	qa10_q2: qa10_q2$4,
	qa11_a: qa11_a$4,
	qa11_q: qa11_q$4,
	qa12_a: qa12_a$4,
	qa12_q: qa12_q$4,
	qa13_a: qa13_a$4,
	qa13_q1: qa13_q1$4,
	qa13_q2: qa13_q2$4,
	qa13_q3: qa13_q3$4,
	qa13_q4: qa13_q4$4
};

const ko$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$4,
  about_other_channels: about_other_channels$4,
  about_thanks: about_thanks$4,
  about_ticket_feedback: about_ticket_feedback$4,
  about_wechat_feedback: about_wechat_feedback$4,
  account_placeholder: account_placeholder$4,
  accuracy_rate: accuracy_rate$4,
  add: add$4,
  add_name: add_name$4,
  add_success: add_success$4,
  add_word: add_word$4,
  adjust_audio_timeline: adjust_audio_timeline$4,
  after_edit_click: after_edit_click$4,
  agree_terms_notice: agree_terms_notice$4,
  all_resources: all_resources$4,
  allow_dictation_tip: allow_dictation_tip$4,
  allow_dictation_tip_desc: allow_dictation_tip_desc$4,
  and: and$4,
  another_group: another_group$4,
  another_round: another_round$4,
  app_desc: app_desc$4,
  app_name: app_name$4,
  apply: apply$4,
  article_management: article_management$4,
  article_settings: article_settings$4,
  articles: articles$4,
  audio: audio$4,
  audio_added_success: audio_added_success$4,
  audio_management: audio_management$4,
  audio_timeline_tutorial: audio_timeline_tutorial$4,
  audio_upload_notice: audio_upload_notice$4,
  author: author$4,
  auto_next_word: auto_next_word$4,
  auto_next_word_desc: auto_next_word_desc$4,
  auto_next_word_time: auto_next_word_time$4,
  auto_next_word_time_desc: auto_next_word_time_desc$4,
  auto_play_sentence: auto_play_sentence$4,
  auto_register_notice: auto_register_notice$4,
  auto_split: auto_split$4,
  auto_switch: auto_switch$4,
  back: back$4,
  back_to_home: back_to_home$4,
  batch_delete: batch_delete$4,
  book_list: book_list$4,
  browser_360_shortcut: browser_360_shortcut$4,
  cancel: cancel$4,
  cannot_type: cannot_type$4,
  cause_no_response: cause_no_response$4,
  change: change$4,
  change_book: change_book$4,
  change_browser_or_shortcut: change_browser_or_shortcut$4,
  change_in_settings: change_in_settings$4,
  change_order: change_order$4,
  change_progress: change_progress$4,
  check_plugins_installed: check_plugins_installed$4,
  chinese: chinese$4,
  chinese_font: chinese_font$4,
  chrome_extension: chrome_extension$4,
  clear_input_on_error: clear_input_on_error$4,
  click: click$4,
  click_here: click_here$4,
  click_here_when_done: click_here_when_done$4,
  close: close$4,
  cn_limit_no1: cn_limit_no1$4,
  cn_limit_no2: cn_limit_no2$4,
  code: code$4,
  code_login: code_login$4,
  code_placeholder: code_placeholder$4,
  collapse: collapse$4,
  collect: collect$4,
  collect_word: collect_word$4,
  community_desc: community_desc$4,
  comparison: comparison$4,
  completed_review_stage: completed_review_stage$4,
  confirm: confirm$4,
  confirm_delete_selected: confirm_delete_selected$4,
  confirm_new_password: confirm_new_password$4,
  confirm_password_placeholder: confirm_password_placeholder$4,
  conflict_notice_title: conflict_notice_title$4,
  conflict_plugin_names: conflict_plugin_names$4,
  content: content$4,
  continue_free_practice: continue_free_practice$4,
  continue_learning: continue_learning$4,
  copied: copied$4,
  copied_open_grammar: copied_open_grammar$4,
  copy: copy$4,
  copy_and_split: copy_and_split$4,
  copy_sentence: copy_sentence$4,
  copy_translation_or_click: copy_translation_or_click$4,
  copy_word: copy_word$4,
  countdown: countdown$4,
  create_book: create_book$4,
  create_dict: create_dict$4,
  create_personal_book: create_personal_book$4,
  create_personal_dict: create_personal_dict$4,
  current: current$4,
  current_progress: current_progress$4,
  custom: custom$4,
  daily_goal: daily_goal$4,
  daily_learning: daily_learning$4,
  daily_task_complete: daily_task_complete$4,
  data_management: data_management$4,
  data_saved_locally: data_saved_locally$4,
  days_to_complete: days_to_complete$4,
  decrease_03s: decrease_03s$4,
  default: ko,
  delete_key_goes_back: delete_key_goes_back$4,
  description: description$4,
  dict_list: dict_list$4,
  disable_plugin_or_exclude: disable_plugin_or_exclude$4,
  disable_practice_setting_dialog: disable_practice_setting_dialog$4,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$4,
  document: document$4,
  dont_remind: dont_remind$4,
  download_chrome: download_chrome$4,
  edge_extension: edge_extension$4,
  edit: edit$4,
  edit_and_add_to_dict: edit_and_add_to_dict$4,
  edit_audio_align: edit_audio_align$4,
  edit_book: edit_book$4,
  edit_dict: edit_dict$4,
  edit_success: edit_success$4,
  edit_word: edit_word$4,
  editable_auto_sync: editable_auto_sync$4,
  effect_sound: effect_sound$4,
  email: email$4,
  empty_placeholder: empty_placeholder$4,
  encouragement_70: encouragement_70$4,
  encouragement_85: encouragement_85$4,
  encouragement_95: encouragement_95$4,
  encouragement_default: encouragement_default$4,
  end: end$4,
  end_time: end_time$4,
  english: english$4,
  english_document: english_document$4,
  enter_name: enter_name$4,
  enter_website: enter_website$4,
  errors: errors$4,
  estimated: estimated$4,
  estimated_completion: estimated_completion$4,
  etymology: etymology$4,
  exam_color_hint: exam_color_hint$4,
  example_sentence: example_sentence$4,
  expand: expand$4,
  explanation: explanation$4,
  export_data_backup: export_data_backup$4,
  faq: faq$4,
  features: features$4,
  feedback: feedback$4,
  feedback_or_wechat: feedback_or_wechat$4,
  follow_steps_to_resolve: follow_steps_to_resolve$4,
  follow_x_account: follow_x_account$4,
  font_setting: font_setting$4,
  foreign_font: foreign_font$4,
  forgot_password: forgot_password$4,
  free_practice: free_practice$4,
  from_word: from_word$4,
  function_desc: function_desc$4,
  general_settings: general_settings$4,
  german: german$4,
  github_address: github_address$4,
  github_project: github_project$4,
  grammar_analysis: grammar_analysis$4,
  grammar_learning: grammar_learning$4,
  help: help$4,
  home_article_practice: home_article_practice$4,
  home_article_practice_desc1: home_article_practice_desc1$4,
  home_article_practice_desc2: home_article_practice_desc2$4,
  home_article_practice_desc3: home_article_practice_desc3$4,
  home_collection: home_collection$4,
  home_collection_desc1: home_collection_desc1$4,
  home_collection_desc2: home_collection_desc2$4,
  home_collection_desc3: home_collection_desc3$4,
  home_customization: home_customization$4,
  home_customization_desc1: home_customization_desc1$4,
  home_customization_desc2: home_customization_desc2$4,
  home_customization_desc3: home_customization_desc3$4,
  home_design: home_design$4,
  home_design_desc1: home_design_desc1$4,
  home_design_desc2: home_design_desc2$4,
  home_design_desc3: home_design_desc3$4,
  home_free_opensource: home_free_opensource$4,
  home_free_opensource_desc1: home_free_opensource_desc1$4,
  home_free_opensource_desc2: home_free_opensource_desc2$4,
  home_free_opensource_desc3: home_free_opensource_desc3$4,
  home_personalized: home_personalized$4,
  home_personalized_desc1: home_personalized_desc1$4,
  home_personalized_desc2: home_personalized_desc2$4,
  home_personalized_desc3: home_personalized_desc3$4,
  home_vocabulary: home_vocabulary$4,
  home_vocabulary_desc: home_vocabulary_desc$4,
  home_word_practice: home_word_practice$4,
  home_word_practice_desc1: home_word_practice_desc1$4,
  home_word_practice_desc2: home_word_practice_desc2$4,
  home_word_practice_desc3: home_word_practice_desc3$4,
  i_dont_know: i_dont_know$4,
  i_know: i_know$4,
  i_understand: i_understand$4,
  ie_not_supported: ie_not_supported$4,
  ie_use_modern_browser: ie_use_modern_browser$4,
  ignore_case: ignore_case$4,
  ignore_case_desc: ignore_case_desc$4,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$4,
  import_data_restore: import_data_restore$4,
  import_example_hint: import_example_hint$4,
  import_follow_template: import_follow_template$4,
  import_other_hint: import_other_hint$4,
  import_phrase_hint: import_phrase_hint$4,
  import_translation_hint: import_translation_hint$4,
  import_tutorial: import_tutorial$4,
  import_warning: import_warning$4,
  import_word_required: import_word_required$4,
  important_notice: important_notice$4,
  incognito_not_working: incognito_not_working$4,
  incognito_working: incognito_working$4,
  increase_03s: increase_03s$4,
  install_extension_manager: install_extension_manager$4,
  introduction: introduction$4,
  is_free: is_free$4,
  items_per_page: items_per_page$4,
  japanese: japanese$4,
  jump_to: jump_to$4,
  jump_to_seconds: jump_to_seconds$4,
  keep_default_no_show: keep_default_no_show$4,
  keyboard_no_response: keyboard_no_response$4,
  keyboard_sound: keyboard_sound$4,
  keyboard_sound_effect: keyboard_sound_effect$4,
  know_word_tip: know_word_tip$4,
  last_task: last_task$4,
  learn: learn$4,
  learned: learned$4,
  learning_progress: learning_progress$4,
  learning_record: learning_record$4,
  learning_settings: learning_settings$4,
  line_by_line: line_by_line$4,
  lines: lines$4,
  list_order_setting: list_order_setting$4,
  listening_training: listening_training$4,
  loading: loading$4,
  local_data_detected: local_data_detected$4,
  login: login$4,
  login_again: login_again$4,
  login_cancelled: login_cancelled$4,
  lrc_parse_success: lrc_parse_success$4,
  manage_books: manage_books$4,
  manage_dict: manage_dict$4,
  manual_split: manual_split$4,
  mark_mastered: mark_mastered$4,
  migrate_data: migrate_data$4,
  migrate_later_notice: migrate_later_notice$4,
  migrate_new_domain: migrate_new_domain$4,
  migrate_old_domain_notice: migrate_old_domain_notice$4,
  milliseconds: milliseconds$4,
  minus_03s: minus_03s$4,
  minutes: minutes$4,
  more: more$4,
  multiple_choice: multiple_choice$4,
  my_books: my_books$4,
  my_dictionaries: my_dictionaries$4,
  name: name$4,
  name_already_exists: name_already_exists$4,
  name_config: name_config$4,
  name_config_tip: name_config_tip$4,
  name_ignore_config_desc: name_ignore_config_desc$4,
  name_management: name_management$4,
  name_max_20_chars: name_max_20_chars$4,
  new_concept_english: new_concept_english$4,
  new_password_placeholder: new_password_placeholder$4,
  new_words: new_words$4,
  new_words_count: new_words_count$4,
  next_article: next_article$4,
  no_dict_selected: no_dict_selected$4,
  no_shortcut_set: no_shortcut_set$4,
  no_sync: no_sync$4,
  no_translation_comparison: no_translation_comparison$4,
  one_sentence_per_line: one_sentence_per_line$4,
  open_link: open_link$4,
  or: or$4,
  original_text: original_text$4,
  page_or_index: page_or_index$4,
  paragraph: paragraph$4,
  password_login: password_login$4,
  password_placeholder: password_placeholder$4,
  phone_placeholder: phone_placeholder$4,
  phonetic: phonetic$4,
  phrase: phrase$4,
  phrases: phrases$4,
  play: play$4,
  play_next_after_end: play_next_after_end$4,
  play_sentence: play_sentence$4,
  please_enter_name: please_enter_name$4,
  please_fill_complete: please_fill_complete$4,
  please_fill_content: please_fill_content$4,
  please_fill_original: please_fill_original$4,
  please_fill_original_title: please_fill_original_title$4,
  please_fill_title: please_fill_title$4,
  please_fill_translation: please_fill_translation$4,
  please_fill_translation_title: please_fill_translation_title$4,
  please_paste_original: please_paste_original$4,
  please_select: please_select$4,
  please_select_dict: please_select_dict$4,
  plugins_intercept_keyboard: plugins_intercept_keyboard$4,
  practice: practice$4,
  press_delete_reinput: press_delete_reinput$4,
  press_key_to_set: press_key_to_set$4,
  press_space_continue: press_space_continue$4,
  privacy_policy: privacy_policy$4,
  pronunciation_accent: pronunciation_accent$4,
  pronunciation_accent_desc: pronunciation_accent_desc$4,
  qa10_a: qa10_a$4,
  qa10_q1: qa10_q1$4,
  qa10_q2: qa10_q2$4,
  qa11_a: qa11_a$4,
  qa11_q: qa11_q$4,
  qa12_a: qa12_a$4,
  qa12_q: qa12_q$4,
  qa13_a: qa13_a$4,
  qa13_q1: qa13_q1$4,
  qa13_q2: qa13_q2$4,
  qa13_q3: qa13_q3$4,
  qa13_q4: qa13_q4$4,
  qa1_a: qa1_a$4,
  qa1_q1: qa1_q1$4,
  qa1_q2: qa1_q2$4,
  qa2_a: qa2_a$4,
  qa3_a: qa3_a$4,
  qa3_q1: qa3_q1$4,
  qa3_q2: qa3_q2$4,
  qa3_q3: qa3_q3$4,
  qa4_a: qa4_a$4,
  qa4_q1: qa4_q1$4,
  qa4_q2: qa4_q2$4,
  qa5_a: qa5_a$4,
  qa5_q1: qa5_q1$4,
  qa5_q2: qa5_q2$4,
  qa5_q3: qa5_q3$4,
  qa5_q4: qa5_q4$4,
  qa6_a: qa6_a$4,
  qa7_a: qa7_a$4,
  qa7_q1: qa7_q1$4,
  qa7_q2: qa7_q2$4,
  qa7_q3: qa7_q3$4,
  qa8_a: qa8_a$4,
  qa8_q1: qa8_q1$4,
  qa8_q2: qa8_q2$4,
  qa8_q3: qa8_q3$4,
  qa9_a: qa9_a$4,
  qa9_q: qa9_q$4,
  qq_group: qq_group$4,
  qq_qrcode: qq_qrcode$4,
  question: question$4,
  random_all: random_all$4,
  random_current_page: random_current_page$4,
  random_review: random_review$4,
  recommend: recommend$4,
  record: record$4,
  register: register$4,
  register_account: register_account$4,
  register_new_account: register_new_account$4,
  related_words: related_words$4,
  relearn: relearn$4,
  repeat_count: repeat_count$4,
  reset_password: reset_password$4,
  resource_sharing: resource_sharing$4,
  resources_from_internet: resources_from_internet$4,
  restart_learning: restart_learning$4,
  restart_practice: restart_practice$4,
  restore_default: restore_default$4,
  result: result$4,
  return_home: return_home$4,
  reverse_all: reverse_all$4,
  reverse_current_page: reverse_current_page$4,
  review: review$4,
  review_complete: review_complete$4,
  review_last: review_last$4,
  review_previous: review_previous$4,
  review_ratio: review_ratio$4,
  review_ratio_desc: review_ratio_desc$4,
  review_ratio_notice_1: review_ratio_notice_1$4,
  review_ratio_notice_2: review_ratio_notice_2$4,
  review_ratio_tooltip: review_ratio_tooltip$4,
  review_wrong_words: review_wrong_words$4,
  save: save$4,
  save_and_next: save_and_next$4,
  scan_success: scan_success$4,
  search: search$4,
  seconds: seconds$4,
  select_dict: select_dict$4,
  select_dict_to_start: select_dict_to_start$4,
  select_from_dict: select_from_dict$4,
  send_code: send_code$4,
  send_code_failed: send_code_failed$4,
  send_email: send_email$4,
  send_failed: send_failed$4,
  sending: sending$4,
  sentences_not_translated: sentences_not_translated$4,
  set_end_time: set_end_time$4,
  set_password_placeholder: set_password_placeholder$4,
  set_start_time: set_start_time$4,
  setting: setting$4,
  settings: settings$4,
  shortcut: shortcut$4,
  shortcut_key: shortcut_key$4,
  shortcut_settings: shortcut_settings$4,
  show_prev_next_word: show_prev_next_word$4,
  show_prev_next_word_desc: show_prev_next_word_desc$4,
  show_questions: show_questions$4,
  simple_word_filter: simple_word_filter$4,
  simple_word_filter_desc: simple_word_filter_desc$4,
  simple_word_list: simple_word_list$4,
  single_line: single_line$4,
  skip_to_next_stage: skip_to_next_stage$4,
  skip_word: skip_word$4,
  smart_learning: smart_learning$4,
  sound_effect: sound_effect$4,
  source_language: source_language$4,
  speed: speed$4,
  split_rule: split_rule$4,
  split_sentence: split_sentence$4,
  start: start$4,
  start_article_practice: start_article_practice$4,
  start_daily: start_daily$4,
  start_from_beginning: start_from_beginning$4,
  start_from_here: start_from_here$4,
  start_learning: start_learning$4,
  start_time: start_time$4,
  start_word_practice: start_word_practice$4,
  status: status$4,
  studied: studied$4,
  study_duration: study_duration$4,
  study_progress: study_progress$4,
  study_record: study_record$4,
  submit_exam: submit_exam$4,
  suitable_for: suitable_for$4,
  switch_display_mode: switch_display_mode$4,
  sync: sync$4,
  sync_data: sync_data$4,
  sync_failed: sync_failed$4,
  sync_success: sync_success$4,
  sync_to_account_question: sync_to_account_question$4,
  sync_to_result: sync_to_result$4,
  syncing: syncing$4,
  synonym: synonym$4,
  synonyms: synonyms$4,
  tap_allow_in_wechat: tap_allow_in_wechat$4,
  target_language: target_language$4,
  template_download: template_download$4,
  test: test$4,
  this_week_record: this_week_record$4,
  time: time$4,
  title: title$4,
  to_manage_extensions: to_manage_extensions$4,
  today_study_time: today_study_time$4,
  today_task: today_task$4,
  today_task_complete: today_task_complete$4,
  toggle_dictation_mode: toggle_dictation_mode$4,
  toggle_theme: toggle_theme$4,
  toggle_translation: toggle_translation$4,
  total: total$4,
  total_items: total_items$4,
  total_learning_time: total_learning_time$4,
  total_study_days: total_study_days$4,
  total_study_time: total_study_time$4,
  total_words: total_words$4,
  translate: translate$4,
  translate_sentence: translate_sentence$4,
  translate_word: translate_word$4,
  translation: translation$4,
  translation_complete: translation_complete$4,
  try_incognito_mode: try_incognito_mode$4,
  tv_movie: tv_movie$4,
  twitter: twitter$4,
  two: two$4,
  uk_accent: uk_accent$4,
  uncollect: uncollect$4,
  unmark_mastered: unmark_mastered$4,
  update_log: update_log$4,
  upload_audio: upload_audio$4,
  upload_lrc: upload_lrc$4,
  us_accent: us_accent$4,
  usage_guide: usage_guide$4,
  use_prev_end_seconds: use_prev_end_seconds$4,
  use_prev_end_time: use_prev_end_time$4,
  user_agreement: user_agreement$4,
  volume: volume$4,
  wait_translation: wait_translation$4,
  warm_tips: warm_tips$4,
  wechat_group: wechat_group$4,
  wechat_qrcode: wechat_qrcode$4,
  wechat_scan_login: wechat_scan_login$4,
  weekly_record: weekly_record$4,
  weekly_study_record: weekly_study_record$4,
  where_is_data: where_is_data$4,
  word: word$4,
  word_auto_pronunciation: word_auto_pronunciation$4,
  word_import_template: word_import_template$4,
  word_list: word_list$4,
  word_repeat_setting: word_repeat_setting$4,
  word_root: word_root$4,
  word_settings: word_settings$4,
  words: words$4,
  words_comma_separated: words_comma_separated$4,
  words_count: words_count$4,
  xiaohongshu: xiaohongshu$4,
  xiaohongshu_desc: xiaohongshu_desc$4,
  xiaohongshu_qrcode: xiaohongshu_qrcode$4,
  youdao_translate: youdao_translate$4
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$3 = "เรียนภาษาอังกฤษ ทีละคำ เครื่องมือฝึกโอเพนซอร์ส";
var app_name$3 = "Type Words";
var start_word_practice$3 = "เริ่มฝึกคำศัพท์";
var start_article_practice$3 = "เริ่มฝึกบทความ";
var home_word_practice$3 = "ฝึกคำศัพท์";
var home_word_practice_desc1$3 = "โหมดฝึก: พิมพ์ตาม/เขียนตามคำบอก/ทดสอบตัวเอง/ท่องจำ";
var home_word_practice_desc2$3 = "เรียนรู้อัจฉริยะ: วางแผนอัจฉริยะ";
var home_word_practice_desc3$3 = "เรียนรู้อิสระ: ไม่มีข้อจำกัด";
var home_article_practice$3 = "ฝึกบทความ";
var home_article_practice_desc1$3 = "หนังสือในตัว สามารถเพิ่มบทความเอง";
var home_article_practice_desc2$3 = "โหมดคู่: พิมพ์ตาม + ท่องจำ";
var home_article_practice_desc3$3 = "รองรับการฟังขณะท่องจำ";
var home_collection$3 = "รายการโปรด คำผิด คำที่เชี่ยวชาญ";
var home_collection_desc1$3 = "ป้อนผิดจะถูกเพิ่มอัตโนมัติ";
var home_collection_desc2$3 = "เพิ่มลงในที่เชี่ยวชาญ ข้ามอัตโนมัติ";
var home_collection_desc3$3 = "เพิ่มลงในรายการโปรดเพื่อทบทวน";
var home_vocabulary$3 = "คลังคำศัพท์มหาศาล";
var home_vocabulary_desc$3 = "คลังคำศัพท์ตั้งแต่เบื้องต้นถึงขั้นสูง";
var home_free_opensource$3 = "ฟรีและโอเพนซอร์ส";
var home_free_opensource_desc1$3 = "โอเพนซอร์สเต็มรูปแบบ";
var home_free_opensource_desc2$3 = "ใช้งานฟรี";
var home_free_opensource_desc3$3 = "การติดตั้งส่วนตัว";
var home_customization$3 = "ปรับแต่งได้สูง";
var home_customization_desc1$3 = "เอฟเฟกต์เสียงคีย์บอร์ดหลากหลาย";
var home_customization_desc2$3 = "ปุ่มลัดที่กำหนดเองได้";
var home_customization_desc3$3 = "ตัวเลือกการตั้งค่าที่ปรับแต่งได้สูง";
var home_design$3 = "เรียบง่ายและมีประสิทธิภาพ";
var home_design_desc1$3 = "ดีไซน์เรียบง่าย UI ทันสมัย";
var home_design_desc2$3 = "อินเทอร์เฟซสะอาด ใช้งานง่าย";
var home_design_desc3$3 = "ไม่บังคับติดตามแพลตฟอร์มใดๆ";
var home_personalized$3 = "การเรียนรู้เฉพาะบุคคล";
var home_personalized_desc1$3 = "เพิ่มพจนานุกรมและบทความได้อย่างอิสระ";
var home_personalized_desc2$3 = "ปรับแต่งแผนการเรียนรู้";
var home_personalized_desc3$3 = "กลยุทธ์การเรียนรู้และทบทวนหลากหลาย";
var cn_limit_no1$3 = "川公网安备51015602001426号";
var cn_limit_no2$3 = "蜀ICP备2025157466号-2";
var setting$3 = "การตั้งค่า";
var edit$3 = "แก้ไข";
var cancel$3 = "ยกเลิก";
var confirm$3 = "ยืนยัน";
var save$3 = "บันทึก";
var close$3 = "ปิด";
var search$3 = "ค้นหา";
var more$3 = "เพิ่มเติม";
var loading$3 = "กำลังโหลด";
var introduction$3 = "แนะนำ";
var learn$3 = "เรียน";
var practice$3 = "ฝึก";
var test$3 = "ทดสอบ";
var feedback$3 = "ข้อเสนอแนะ";
var document$3 = "เอกสาร";
var help$3 = "ช่วยเหลือ";
var about$3 = "เกี่ยวกับ";
var login$3 = "เข้าสู่ระบบ";
var register$3 = "ลงทะเบียน";
var register_account$3 = "ลงทะเบียนบัญชี";
var register_new_account$3 = "ลงทะเบียนบัญชีใหม่";
var code_login$3 = "เข้าสู่ระบบด้วยรหัส";
var password_login$3 = "เข้าสู่ระบบด้วยรหัสผ่าน";
var phone_placeholder$3 = "กรุณาใส่หมายเลขโทรศัพท์";
var code_placeholder$3 = "กรุณาใส่รหัสยืนยัน";
var account_placeholder$3 = "กรุณาใส่โทรศัพท์/อีเมล";
var password_placeholder$3 = "กรุณาใส่รหัสผ่าน";
var auto_register_notice$3 = "หมายเลขที่ยังไม่ลงทะเบียนจะถูกลงทะเบียนอัตโนมัติ";
var forgot_password$3 = "ลืมรหัสผ่าน?";
var reset_password$3 = "รีเซ็ตรหัสผ่าน";
var set_password_placeholder$3 = "กรุณาตั้งรหัสผ่าน";
var confirm_password_placeholder$3 = "กรุณายืนยันรหัสผ่าน";
var new_password_placeholder$3 = "กรุณาใส่รหัสผ่านใหม่";
var confirm_new_password$3 = "ยืนยันรหัสผ่านใหม่";
var wechat_scan_login$3 = "เข้าสู่ระบบด้วย WeChat";
var scan_success$3 = "สแกนสำเร็จ";
var tap_allow_in_wechat$3 = "แตะอนุญาตใน WeChat เพื่อเข้าสู่ระบบ";
var login_cancelled$3 = "ยกเลิกการเข้าสู่ระบบ";
var login_again$3 = "เข้าสู่ระบบอีกครั้ง";
var sync_data$3 = "ซิงค์ข้อมูล";
var local_data_detected$3 = "ตรวจพบข้อมูลในเครื่อง";
var sync_to_account_question$3 = "ซิงค์กับบัญชีหรือไม่?";
var no_sync$3 = "ไม่ซิงค์";
var sync$3 = "ซิงค์";
var syncing$3 = "กำลังซิงค์";
var sync_failed$3 = "ซิงค์ล้มเหลว";
var sync_success$3 = "ซิงค์สำเร็จ";
var enter_website$3 = "เข้าสู่เว็บไซต์";
var general_settings$3 = "การตั้งค่าทั่วไป";
var word_settings$3 = "การตั้งค่าคำศัพท์";
var article_settings$3 = "การตั้งค่าบทความ";
var data_management$3 = "การจัดการข้อมูล";
var shortcut_settings$3 = "การตั้งค่าปุ่มลัด";
var update_log$3 = "บันทึกการอัปเดต";
var shortcut_key$3 = "ปุ่มลัด(คลิกเพื่อแก้ไข)";
var no_shortcut_set$3 = "ยังไม่ได้ตั้งปุ่มลัด";
var press_key_to_set$3 = "กดปุ่มเพื่อตั้งค่า";
var click_here_when_done$3 = "คลิกที่นี่เมื่อเสร็จ";
var restore_default$3 = "คืนค่าเริ่มต้น";
var data_saved_locally$3 = "ข้อมูลทั้งหมดถูกบันทึกในเครื่อง";
var export_data_backup$3 = "ส่งออกข้อมูลสำรอง (ZIP)";
var import_data_restore$3 = "นำเข้าการกู้คืนข้อมูล";
var import_warning$3 = "การนำเข้าจะเขียนทับข้อมูลทั้งหมด";
var words$3 = "คำศัพท์";
var no_dict_selected$3 = "ไม่ได้เลือกพจนานุกรม";
var select_dict_to_start$3 = "กรุณาเลือกพจนานุกรมเพื่อเริ่ม";
var select_dict$3 = "เลือกพจนานุกรม";
var change_progress$3 = "เปลี่ยนความคืบหน้า";
var estimated_completion$3 = "คาดว่าจะเสร็จ";
var current_progress$3 = "ความคืบหน้าปัจจุบัน";
var learned$3 = "เรียนแล้ว";
var completed_review_stage$3 = "เสร็จสมบูรณ์ เข้าสู่ขั้นตอนทบทวน";
var today_task$3 = "งานวันนี้";
var last_task$3 = "งานครั้งก่อน";
var word_list$3 = "รายการคำศัพท์";
var daily_goal$3 = "เป้าหมายประจำวัน";
var words_count$3 = "คำ";
var change$3 = "เปลี่ยน";
var new_words_count$3 = "คำใหม่";
var review_last$3 = "ทบทวนล่าสุด";
var review_previous$3 = "ทบทวนก่อนหน้า";
var start_learning$3 = "เริ่มเรียน";
var continue_learning$3 = "เรียนต่อ";
var free_practice$3 = "ฝึกอิสระ";
var continue_free_practice$3 = "ฝึกอิสระต่อ";
var smart_learning$3 = "เรียนรู้อัจฉริยะ";
var review$3 = "ทบทวน";
var random_review$3 = "ทบทวนแบบสุ่ม";
var my_dictionaries$3 = "พจนานุกรมของฉัน";
var manage_dict$3 = "จัดการพจนานุกรม";
var create_personal_dict$3 = "สร้างพจนานุกรมส่วนตัว";
var recommend$3 = "แนะนำ";
var articles$3 = "บทความ";
var this_week_record$3 = "บันทึกสัปดาห์นี้";
var change_book$3 = "เปลี่ยน";
var today_study_time$3 = "เวลาเรียนวันนี้";
var total_study_days$3 = "จำนวนวันเรียนทั้งหมด";
var total_study_time$3 = "เวลาเรียนทั้งหมด";
var my_books$3 = "หนังสือของฉัน";
var manage_books$3 = "จัดการหนังสือ";
var create_personal_book$3 = "สร้างหนังสือส่วนตัว";
var article_management$3 = "จัดการบทความ";
var toggle_translation$3 = "สลับการแปล";
var switch_display_mode$3 = "สลับโหมดแสดงผล";
var line_by_line$3 = "ทีละบรรทัด";
var single_line$3 = "บรรทัดเดียว";
var comparison$3 = "เปรียบเทียบ";
var question$3 = "คำถาม";
var study_record$3 = "บันทึกการเรียน";
var play_next_after_end$3 = "เล่นถัดไปหลังจบ";
var create_book$3 = "สร้างหนังสือ";
var edit_book$3 = "แก้ไขหนังสือ";
var dict_list$3 = "รายการพจนานุกรม";
var book_list$3 = "รายการหนังสือ";
var word$3 = "คำศัพท์";
var phonetic$3 = "การออกเสียง";
var translation$3 = "การแปล";
var example_sentence$3 = "ประโยคตัวอย่าง";
var phrase$3 = "วลี";
var synonym$3 = "คำพ้องความหมาย";
var related_words$3 = "คำที่เกี่ยวข้อง";
var etymology$3 = "ที่มาของคำ";
var add_word$3 = "เพิ่มคำศัพท์";
var edit_word$3 = "แก้ไขคำศัพท์";
var create_dict$3 = "สร้างพจนานุกรม";
var edit_dict$3 = "แก้ไขพจนานุกรม";
var faq$3 = "คำถามที่พบบ่อย";
var is_free$3 = "เว็บไซต์ฟรีหรือไม่?";
var cannot_type$3 = "พิมพ์ไม่ได้ คีย์บอร์ดไม่ตอบสนอง?";
var where_is_data$3 = "ข้อมูลอยู่ที่ไหน? ใช้งานข้ามอุปกรณ์อย่างไร?";
var resource_sharing$3 = "แบ่งปันทรัพยากร";
var all_resources$3 = "ทรัพยากรทั้งหมด";
var new_concept_english$3 = "ภาษาอังกฤษแนวคิดใหม่";
var tv_movie$3 = "ทีวี/ภาพยนตร์";
var grammar_learning$3 = "เรียนไวยากรณ์";
var listening_training$3 = "ฝึกการฟัง";
var warm_tips$3 = "เคล็ดลับ";
var resources_from_internet$3 = "ทรัพยากรทั้งหมดรวบรวมจากอินเทอร์เน็ต เพื่อการเรียนรู้เท่านั้น";
var toggle_theme$3 = "สลับธีม";
var english_document$3 = "เอกสารภาษาอังกฤษ";
var empty_placeholder$3 = "ว่างเปล่า~";
var custom$3 = "กำหนดเอง";
var back$3 = "กลับ";
var total_items$3 = "รายการ";
var batch_delete$3 = "ลบเป็นกลุ่ม";
var confirm_delete_selected$3 = "ยืนยันลบข้อมูลที่เลือกทั้งหมด?";
var change_order$3 = "เปลี่ยนลำดับ";
var list_order_setting$3 = "การตั้งค่าลำดับรายการ";
var reverse_current_page$3 = "กลับหน้าปัจจุบัน";
var reverse_all$3 = "กลับทั้งหมด";
var random_current_page$3 = "สุ่มหน้าปัจจุบัน";
var random_all$3 = "สุ่มทั้งหมด";
var apply$3 = "นำไปใช้";
var add$3 = "เพิ่ม";
var collect$3 = "รายการโปรด";
var uncollect$3 = "ยกเลิกรายการโปรด";
var mark_mastered$3 = "ทำเครื่องหมายว่าเชี่ยวชาญ";
var unmark_mastered$3 = "ยกเลิกเครื่องหมายเชี่ยวชาญ";
var about_thanks$3 = "ขอบคุณที่ใช้โปรเจกต์นี้! นี่คือโปรเจกต์โอเพนซอร์ส ใช้งานฟรี หากเป็นประโยชน์ กรุณาให้ดาวบน GitHub!";
var github_address$3 = "GitHub:";
var about_wechat_feedback$3 = "ติดต่อ WeChat:";
var about_ticket_feedback$3 = "ตั๋วติดต่อ:";
var about_other_channels$3 = "ช่องทางอื่น:";
var wait_translation$3 = "กรุณารอการแปลเสร็จสิ้น";
var migrate_data$3 = "ย้ายข้อมูล";
var migrate_new_domain$3 = "เว็บไซต์นี้มีโดเมนใหม่";
var migrate_old_domain_notice$3 = "โดเมนเก่าจะถูกยกเลิก เนื่องจากข้อจำกัดด้านความปลอดภัยของเบราว์เซอร์ ข้อมูลไม่สามารถแชร์ระหว่างเว็บไซต์ได้ กรุณาย้ายข้อมูลด้วยตนเอง";
var migrate_later_notice$3 = "หากคุณไม่ต้องการย้ายตอนนี้ คุณสามารถปิดหน้าต่างนี้และย้ายภายหลังใน \"การตั้งค่า\" -> \"การจัดการข้อมูล\"";
var author$3 = "ผู้เขียน:";
var features$3 = "คุณสมบัติ:";
var suitable_for$3 = "เหมาะสำหรับ:";
var open_link$3 = "เปิดลิงก์";
var qq_group$3 = "กลุ่ม QQ";
var xiaohongshu$3 = "Xiaohongshu";
var follow_x_account$3 = "ติดตามบัญชี X {x_account}";
var twitter$3 = "Twitter";
var send_email$3 = "ส่งอีเมลไปที่ {email}";
var email$3 = "อีเมล";
var xiaohongshu_desc$3 = "ติดตามเราบน Xiaohongshu เพื่อรับข่าวสารล่าสุดจากทีมพัฒนา แบ่งปันประสบการณ์และข้อเสนอแนะของคุณ";
var xiaohongshu_qrcode$3 = "รหัส QR Xiaohongshu";
var community_desc$3 = "เข้าร่วมชุมชนของเราเพื่อสื่อสารกับทีมพัฒนา แบ่งปันประสบการณ์และข้อเสนอแนะของคุณ";
var qq_qrcode$3 = "รหัส QR กลุ่ม QQ";
var wechat_group$3 = "กลุ่ม WeChat";
var wechat_qrcode$3 = "รหัส QR กลุ่ม WeChat";
var github_project$3 = "โปรเจกต์ GitHub";
var ie_not_supported$3 = "ไม่รองรับเบราว์เซอร์ IE";
var ie_use_modern_browser$3 = "Type Words สร้างด้วยเทคโนโลยีสมัยใหม่ กรุณาใช้ Chrome, Edge, Firefox หรือเบราว์เซอร์สมัยใหม่อื่นๆ";
var download_chrome$3 = "ดาวน์โหลด Chrome";
var i_understand$3 = "ฉันเข้าใจแล้ว";
var ignore_case$3 = "ไม่สนใจตัวพิมพ์";
var ignore_case_desc$3 = "เมื่อเปิดใช้งาน การป้อนข้อมูลจะไม่สนใจตัวพิมพ์ใหญ่/เล็ก";
var allow_dictation_tip$3 = "อนุญาตคำใบ้ในโหมดเขียนตามคำบอก";
var allow_dictation_tip_desc$3 = "เมื่อเปิดใช้งาน คุณสามารถวางเมาส์เหนือคำหรือกดปุ่มลัดเพื่อแสดงคำตอบที่ถูกต้อง";
var simple_word_filter$3 = "ตัวกรองคำง่าย";
var simple_word_filter_desc$3 = "เมื่อเปิดใช้งาน คำง่ายจะถูกยกเว้นจากการฝึก คำง่ายจะไม่ถูกนับในสถิติบทความ";
var simple_word_list$3 = "รายการคำง่าย";
var words_comma_separated$3 = "หลายคำคั่นด้วยเครื่องหมายจุลภาค";
var sound_effect$3 = "เอฟเฟกต์เสียง";
var pronunciation_accent$3 = "สำเนียงการออกเสียง";
var pronunciation_accent_desc$3 = "มีผลเฉพาะการออกเสียงคำ บทความใช้สำเนียงอเมริกัน";
var please_select$3 = "กรุณาเลือก";
var us_accent$3 = "อเมริกัน";
var uk_accent$3 = "อังกฤษ";
var keyboard_sound$3 = "เสียงแป้นพิมพ์";
var keyboard_sound_effect$3 = "เอฟเฟกต์เสียงแป้นพิมพ์";
var volume$3 = "ระดับเสียง";
var show_prev_next_word$3 = "แสดงคำก่อนหน้า/ถัดไป";
var show_prev_next_word_desc$3 = "เมื่อเปิดใช้งาน คำก่อนหน้าและถัดไปจะแสดงด้านบนระหว่างการฝึก";
var disable_practice_setting_dialog$3 = "ไม่แสดงกล่องโต้ตอบการตั้งค่าการฝึกโดยค่าเริ่มต้น";
var disable_practice_setting_dialog_desc$3 = "ในหน้ารายละเอียดพจนานุกรม จะแสดงกล่องโต้ตอบการตั้งค่าการฝึกหลังจากคลิกปุ่มเรียนหรือไม่";
var clear_input_on_error$3 = "ล้างอินพุตเมื่อมีข้อผิดพลาด";
var word_repeat_setting$3 = "การตั้งค่าการทำซ้ำคำ";
var repeat_count$3 = "จำนวนการทำซ้ำ";
var review_ratio$3 = "อัตราส่วนทบทวน";
var review_ratio_desc$3 = "อัตราส่วนคำทบทวนต่อคำใหม่ การเปลี่ยนแปลงจะมีผลในการเรียนครั้งถัดไป";
var word_auto_pronunciation$3 = "ออกเสียงอัตโนมัติ";
var speed$3 = "ความเร็ว";
var effect_sound$3 = "เสียงเอฟเฟกต์ (เสียงผิดพลาดและเสร็จสิ้น)";
var auto_switch$3 = "สลับอัตโนมัติ";
var auto_next_word$3 = "คำถัดไปอัตโนมัติ";
var auto_next_word_desc$3 = "ใช้งานได้เฉพาะในโหมดตาม โหมดเขียนตามคำบอก ทดสอบตัวเอง และสะกดคำต้องกดเว้นวรรคเพื่อดำเนินการต่อ";
var auto_next_word_time$3 = "เวลาคำถัดไปอัตโนมัติ";
var auto_next_word_time_desc$3 = "เวลาสำหรับสลับไปยังคำถัดไปโดยอัตโนมัติหลังจากพิมพ์ถูกต้อง";
var milliseconds$3 = "มิลลิวินาที";
var font_setting$3 = "การตั้งค่าฟอนต์";
var foreign_font$3 = "ฟอนต์ภาษาต่างประเทศ";
var chinese_font$3 = "ฟอนต์ภาษาจีน";
var auto_play_sentence$3 = "เล่นประโยคอัตโนมัติ";
var ignore_symbols_numbers_names$3 = "ไม่สนใจสัญลักษณ์ ตัวเลข และชื่อเมื่อพิมพ์";
var settings$3 = "การตั้งค่า";
var please_select_dict$3 = "กรุณาเลือกพจนานุกรมก่อน";
var learning_settings$3 = "การตั้งค่าการเรียนรู้";
var total$3 = "ทั้งหมด";
var estimated$3 = "ประมาณการ";
var days_to_complete$3 = "วันเพื่อเสร็จสิ้น";
var from_word$3 = "เริ่มจากคำ";
var start_daily$3 = ", รายวัน";
var new_words$3 = "คำใหม่";
var review_ratio_tooltip$3 = "อัตราส่วนคำทบทวนต่อคำใหม่";
var review_ratio_notice_1$3 = "เมื่อการเรียนยังไม่เสร็จ จำนวนทบทวนจะสร้างตามอัตราส่วนที่ตั้งไว้ ถ้า 0 ไม่ทบทวน";
var review_ratio_notice_2$3 = "หลังจากเรียนเสร็จ จำนวนคำใหม่จะตั้งค่าเป็น 0 จำนวนทบทวนจะสร้างตามอัตราส่วน (ถ้า < 1 จะคำนวณเป็น 1)";
var daily_learning$3 = "การเรียนรู้รายวัน";
var learning_progress$3 = "ความคืบหน้าการเรียนรู้";
var select_from_dict$3 = "เลือกตำแหน่งเริ่มต้นจากพจนานุกรม";
var change_in_settings$3 = "สามารถเปลี่ยนได้ในหน้าการตั้งค่า";
var keep_default_no_show$3 = "รักษาค่าเริ่มต้น ไม่แสดงอีก";
var review_complete$3 = "ทบทวนเสร็จสิ้น";
var today_task_complete$3 = "งานวันนี้เสร็จสิ้น";
var study_duration$3 = "ระยะเวลาเรียน";
var accuracy_rate$3 = "ความถูกต้อง";
var weekly_study_record$3 = "บันทึกการเรียนรายสัปดาห์";
var studied$3 = "เรียนแล้ว";
var total_words$3 = "คำทั้งหมด";
var restart_learning$3 = "เริ่มเรียนใหม่";
var another_round$3 = "อีกรอบ";
var return_home$3 = "กลับหน้าหลัก";
var import_tutorial$3 = "บทช่วยสอนการนำเข้า";
var import_follow_template$3 = "กรุณากรอกข้อมูลตามรูปแบบเทมเพลต";
var import_word_required$3 = "ช่องคำเป็นสิ่งจำเป็น ช่องอื่นเป็นทางเลือก";
var import_translation_hint$3 = "การแปล: หนึ่งการแปลต่อบรรทัด ชนิดของคำก่อน แล้วตามด้วยเนื้อหา (เช่น n.cancel); หลายการแปลในบรรทัดแยก";
var import_example_hint$3 = "ตัวอย่าง: หนึ่งบรรทัดสำหรับต้นฉบับ หนึ่งบรรทัดสำหรับการแปล; หลายตัวอย่างในบรรทัดแยก";
var import_phrase_hint$3 = "วลี: หนึ่งบรรทัดสำหรับต้นฉบับ หนึ่งบรรทัดสำหรับการแปล; หลายวลีในบรรทัดแยก";
var two$3 = "สอง";
var lines$3 = "บรรทัด";
var import_other_hint$3 = "คำพ้องความหมาย คำราก ที่มาของคำ: กรุณาไปที่พจนานุกรมทางการ แล้วแก้ไขคำเพื่อดูรูปแบบ";
var template_download$3 = "ดาวน์โหลดเทมเพลต";
var word_import_template$3 = "เทมเพลตนำเข้าคำศัพท์";
var conflict_notice_title$3 = "หากคุณพบปัญหาต่อไปนี้ขณะใช้งาน:";
var keyboard_no_response$3 = "แป้นพิมพ์ไม่ตอบสนอง";
var check_plugins_installed$3 = "กรุณาตรวจสอบว่าคุณได้ติดตั้ง";
var conflict_plugin_names$3 = "\"ตัวควบคุมความเร็ววิดีโอ\" \"Vim\" \"ตัวเพิ่มประสิทธิภาพเสียง/วิดีโอ\" \"ตัวช่วยคอร์สออนไลน์\"";
var plugins_intercept_keyboard$3 = "และปลั๊กอิน/สคริปต์อื่นๆ ที่ดักจับเหตุการณ์แป้นพิมพ์";
var cause_no_response$3 = "ซึ่งทำให้ไม่มีการตอบสนองเมื่อฝึกบนเว็บไซต์นี้";
var follow_steps_to_resolve$3 = ", กรุณาทำตามขั้นตอนเหล่านี้เพื่อแก้ไขข้อขัดแย้ง:";
var try_incognito_mode$3 = "เปิดเว็บไซต์นี้ในโหมดไม่ระบุตัวตนของเบราว์เซอร์และตรวจสอบว่าคุณสามารถพิมพ์ได้ปกติหรือไม่?";
var incognito_not_working$3 = "ไม่สามารถพิมพ์ในโหมดไม่ระบุตัวตน,";
var click_here$3 = "คลิกที่นี่";
var feedback_or_wechat$3 = "เพื่อให้ข้อเสนอแนะหรือเข้าร่วมกลุ่ม WeChat:";
var incognito_working$3 = "พิมพ์ได้ในโหมดไม่ระบุตัวตน ดังนั้นเป็นข้อขัดแย้งของปลั๊กอิน/สคริปต์";
var disable_plugin_or_exclude$3 = "ปิดใช้งานปลั๊กอิน/สคริปต์ที่เกี่ยวข้องชั่วคราว หรือยกเว้นเว็บไซต์นี้ในการตั้งค่าปลั๊กอิน/สคริปต์";
var install_extension_manager$3 = "คุณสามารถติดตั้งสิ่งนี้";
var chrome_extension$3 = "ส่วนขยาย (เวอร์ชัน Chrome ต้องใช้ VPN)";
var edge_extension$3 = "ส่วนขยาย (เวอร์ชัน Edge ไม่ต้องใช้ VPN)";
var to_manage_extensions$3 = "เพื่อเปิด/ปิดส่วนขยายอื่นๆ อย่างรวดเร็ว";
var delete_key_goes_back$3 = "กดปุ่มลบจะกลับไปยังหน้าก่อนหน้า";
var browser_360_shortcut$3 = "ในเบราว์เซอร์ 360 ทางลัด \"กดปุ่มลบกลับไปยังหน้าก่อนหน้า\" ถูกตั้งค่าไว้เป็นค่าเริ่มต้น";
var change_browser_or_shortcut$3 = "เปลี่ยนเบราว์เซอร์หรือลบทางลัดเริ่มต้นของ 360: ค้นหา \"กลับ\" ในการตั้งค่าเบราว์เซอร์";
var please_enter_name$3 = "กรุณาใส่ชื่อ";
var name_max_20_chars$3 = "ชื่อต้องไม่เกิน 20 ตัวอักษร";
var name_already_exists$3 = "ชื่อนี้มีอยู่แล้ว!";
var add_success$3 = "เพิ่มสำเร็จ";
var edit_success$3 = "แก้ไขสำเร็จ";
var edit_and_add_to_dict$3 = "แก้ไขสำเร็จและเพิ่มลงในพจนานุกรมของฉัน";
var please_fill_complete$3 = "กรุณากรอกให้ครบถ้วน";
var name$3 = "ชื่อ";
var description$3 = "คำอธิบาย";
var source_language$3 = "ภาษาต้นฉบับ";
var target_language$3 = "ภาษาเป้าหมาย";
var english$3 = "อังกฤษ";
var german$3 = "เยอรมัน";
var japanese$3 = "ญี่ปุ่น";
var code$3 = "โค้ด";
var chinese$3 = "จีน";
var multiple_choice$3 = "ตัวเลือกหลายตัว";
var start$3 = "เริ่ม";
var countdown$3 = "นับถอยหลัง";
var seconds$3 = "วินาที";
var submit_exam$3 = "ส่งข้อสอบ";
var exam_color_hint$3 = "แดงอ่อน: ผิด, แดงเข้ม: ไม่ได้เลือก, เขียว: ถูกต้อง";
var items_per_page$3 = "รายการ/หน้า";
var jump_to$3 = "ข้ามไปที่";
var page_or_index$3 = "หน้า/ลำดับ";
var please_fill_original$3 = "กรุณากรอกข้อความต้นฉบับ!";
var please_fill_title$3 = "กรุณากรอกชื่อเรื่อง!";
var please_fill_content$3 = "กรุณากรอกเนื้อหา!";
var audio_added_success$3 = "เพิ่มเสียงสำเร็จ";
var lrc_parse_success$3 = "แยกวิเคราะห์ไฟล์ LRC สำเร็จ";
var original_text$3 = "ข้อความต้นฉบับ";
var title$3 = "ชื่อเรื่อง";
var please_fill_original_title$3 = "กรุณากรอกชื่อเรื่องต้นฉบับ";
var content$3 = "เนื้อหา";
var one_sentence_per_line$3 = "หนึ่งประโยคต่อบรรทัด เว้นบรรทัดว่างระหว่างย่อหน้า";
var name_config_tip$3 = "หลังจากกำหนดค่าชื่อ ชื่อเหล่านั้นจะถูกละเว้นโดยอัตโนมัติระหว่างการฝึก (เลือกได้ เปิดใช้งานตามค่าเริ่มต้น)";
var name_config$3 = "การตั้งค่าชื่อ";
var please_paste_original$3 = "กรุณาวางข้อความต้นฉบับ";
var usage_guide$3 = "คู่มือการใช้งาน";
var copy_and_split$3 = "คัดลอกข้อความต้นฉบับ แล้วแยกเป็นประโยค";
var click$3 = "คลิก";
var split_sentence$3 = "แยกประโยค";
var auto_split$3 = "ปุ่มเพื่อแยกอัตโนมัติ";
var or$3 = "หรือ";
var manual_split$3 = "แก้ไขด้วยตนเองเพื่อแยก";
var split_rule$3 = "กฎการแยก: หนึ่งประโยคต่อบรรทัด บรรทัดว่างระหว่างย่อหน้า";
var after_edit_click$3 = "หลังจากแก้ไข คลิก";
var sync_to_result$3 = "ปุ่มเพื่อซิงค์กับแผงผลลัพธ์ด้านซ้าย";
var please_fill_translation_title$3 = "กรุณากรอกชื่อเรื่องการแปล";
var please_fill_translation$3 = "กรุณากรอกการแปล";
var translate$3 = "การแปล";
var copy_translation_or_click$3 = "วางการแปล หรือคลิกหากไม่มี";
var result$3 = "ผลลัพธ์";
var editable_auto_sync$3 = "แก้ไขได้ทั้งหมด คลิกปุ่มใช้เพื่อซิงค์อัตโนมัติหลังจากแก้ไข";
var audio$3 = "เสียง";
var audio_management$3 = "การจัดการเสียง";
var paragraph$3 = "ย่อหน้า";
var set_start_time$3 = "ตั้งเวลาเริ่มต้น";
var use_prev_end_time$3 = "ใช้เวลาสิ้นสุดของประโยคก่อนหน้า";
var minus_03s$3 = "ลบ 0.3 วินาที";
var end$3 = "สิ้นสุด";
var set_end_time$3 = "ตั้งเวลาสิ้นสุด";
var edit_audio_align$3 = "แก้ไขการจัดตำแหน่งเสียง";
var play$3 = "เล่น";
var status$3 = "สถานะ";
var sentences_not_translated$3 = "{count} ประโยคไม่ได้แปล!";
var translation_complete$3 = "การแปลเสร็จสมบูรณ์!";
var save_and_next$3 = "บันทึกและเพิ่มถัดไป";
var no_translation_comparison$3 = "ไม่มีการเปรียบเทียบการแปล";
var adjust_audio_timeline$3 = "ปรับไทม์ไลน์เสียง";
var audio_timeline_tutorial$3 = "บทช่วยสอน: คลิกเล่น เมื่อเสียงถึงจุดเริ่มต้นประโยค คลิกบันทึกเวลาเริ่มต้น เมื่อถึงจุดสิ้นสุด คลิกบันทึกเวลาสิ้นสุด";
var start_time$3 = "เวลาเริ่มต้น";
var jump_to_seconds$3 = "ข้ามไปที่ {seconds} วินาที";
var use_prev_end_seconds$3 = "ใช้เวลาสิ้นสุดของประโยคก่อนหน้า: {seconds} วินาที";
var decrease_03s$3 = "ลด 0.3 วินาที";
var increase_03s$3 = "เพิ่ม 0.3 วินาที";
var record$3 = "บันทึก";
var end_time$3 = "เวลาสิ้นสุด";
var audio_upload_notice$3 = "1. ไฟล์ที่อัปโหลดจะถูกบันทึกไว้ในเครื่อง ข้อมูลจะสูญหายเมื่อเปลี่ยนคอมพิวเตอร์ กรุณาสำรองข้อมูลทันเวลา\n2. รองรับ mp3, wav, m4a และรูปแบบเสียงทั่วไปอื่นๆ";
var upload_audio$3 = "อัปโหลดเสียง";
var upload_lrc$3 = "อัปโหลดไฟล์ LRC";
var name_management$3 = "การจัดการชื่อ";
var name_ignore_config_desc$3 = "กำหนดค่าชื่อที่จะละเว้น ชื่อเหล่านี้จะถูกข้ามโดยอัตโนมัติระหว่างการฝึก (เลือกได้ เปิดใช้งานตามค่าเริ่มต้น)";
var add_name$3 = "เพิ่มชื่อ";
var enter_name$3 = "ใส่ชื่อ";
var collect_word$3 = "เก็บคำศัพท์";
var copy$3 = "คัดลอก";
var copy_sentence$3 = "คัดลอกประโยค";
var copied$3 = "คัดลอกแล้ว";
var copy_word$3 = "คัดลอกคำ";
var start_from_here$3 = "เริ่มจากที่นี่";
var play_sentence$3 = "เล่นประโยค";
var grammar_analysis$3 = "การวิเคราะห์ไวยากรณ์";
var copied_open_grammar$3 = "คัดลอกแล้ว! กำลังเปิดเว็บไซต์วิเคราะห์ไวยากรณ์!";
var youdao_translate$3 = "พจนานุกรม Youdao";
var translate_word$3 = "แปลคำ";
var translate_sentence$3 = "แปลประโยค";
var restart_practice$3 = "เริ่มฝึกใหม่";
var next_article$3 = "บทความถัดไป";
var learning_record$3 = "บันทึกการเรียนรู้";
var total_learning_time$3 = "เวลาเรียนรวม";
var current$3 = "ปัจจุบัน";
var show_questions$3 = "แสดงคำถาม";
var explanation$3 = "คำอธิบาย";
var encouragement_95$3 = "ยอดเยี่ยม! ทำต่อไป!";
var encouragement_85$3 = "ทำได้ดีมาก เดินหน้าต่อไป!";
var encouragement_70$3 = "คะแนนดี ทำต่อไป!";
var encouragement_default$3 = "ทุกการฝึกคือความก้าวหน้า ทำต่อไป!";
var daily_task_complete$3 = "งานประจำวันเสร็จสิ้น";
var weekly_record$3 = "บันทึกการเรียนรายสัปดาห์";
var study_progress$3 = "ความคืบหน้าการเรียน";
var relearn$3 = "เรียนใหม่";
var start_from_beginning$3 = "เริ่มจากต้น";
var another_group$3 = "กลุ่มอื่น";
var back_to_home$3 = "กลับหน้าหลัก";
var know_word_tip$3 = "หากเลือก \"ฉันรู้\" ผิด กดปุ่มลบเพื่อเลือกใหม่!";
var press_delete_reinput$3 = "กดปุ่มลบเพื่อป้อนใหม่";
var press_space_continue$3 = "กดเว้นวรรคเพื่อดำเนินการต่อ";
var shortcut$3 = "ทางลัด";
var i_know$3 = "ฉันรู้";
var i_dont_know$3 = "ฉันไม่รู้";
var phrases$3 = "วลี";
var synonyms$3 = "คำพ้องความหมาย";
var word_root$3 = "รากศัพท์";
var review_wrong_words$3 = "ทบทวนคำผิด";
var collapse$3 = "ยุบ";
var expand$3 = "ขยาย";
var minutes$3 = "นาที";
var time$3 = "เวลา";
var errors$3 = "ข้อผิดพลาด";
var skip_to_next_stage$3 = "ข้ามไปขั้นตอนถัดไป";
var skip_word$3 = "ข้ามคำ";
var toggle_dictation_mode$3 = "สลับโหมดเขียนตามคำบอก";
var send_failed$3 = "ส่งล้มเหลว";
var send_code_failed$3 = "ส่งรหัสยืนยันล้มเหลว";
var sending$3 = "กำลังส่ง";
var send_code$3 = "ส่งรหัส";
var agree_terms_notice$3 = "การดำเนินการต่อหมายความว่าคุณยอมรับ";
var user_agreement$3 = "ข้อตกลงผู้ใช้";
var and$3 = "และ";
var privacy_policy$3 = "นโยบายความเป็นส่วนตัว";
var important_notice$3 = "ประกาศสำคัญ";
var dont_remind$3 = "ไม่ต้องเตือนอีก";
var function_desc$3 = "คุณสมบัติ";
var qa1_a$3 = "เว็บไซต์ใช้ฟรีไหม?";
var qa1_q1$3 = "ไม่ฟรีทั้งหมด สำหรับการพัฒนาระยะยาว ค่าใช้จ่ายในอนาคตเป็นสิ่งที่หลีกเลี่ยงไม่ได้ แต่จะไม่ต้องชำระเงินเพื่อใช้งาน เราพยายามหาสมดุลระหว่างฟรีและเสียเงิน";
var qa1_q2$3 = "โปรเจกต์เป็นโอเพนซอร์ส คุณสามารถ deploy ได้เอง";
var qa2_a$3 = "พิมพ์ไม่ได้ แป้นพิมพ์ไม่ตอบสนอง?";
var qa3_a$3 = "ข้อมูลอยู่ที่ไหน? จะใช้ข้ามคอมพิวเตอร์/อุปกรณ์หลายเครื่องได้อย่างไร?";
var qa3_q1$3 = "ข้อมูลผู้ใช้ทั้งหมดถูกบันทึกไว้ในเบราว์เซอร์ท้องถิ่น หากคุณต้องการใช้ Type Words บนอุปกรณ์หรือเบราว์เซอร์ต่างๆ คุณต้องส่งออกและนำเข้าข้อมูลด้วยตนเอง";
var qa3_q2$3 = "การตั้งค่า -> การตั้งค่าข้อมูล -> ส่งออกข้อมูลบนคอมพิวเตอร์เดิม -> ส่งไปยังคอมพิวเตอร์ใหม่ผ่านซอฟต์แวร์โซเชียล -> นำเข้าบนคอมพิวเตอร์ใหม่";
var qa3_q3$3 = "ระบบบัญชีอยู่ระหว่างการพัฒนา";
var qa4_a$3 = "เว็บไซต์วางแผนคำศัพท์มากเกินไป จะแก้ไขอย่างไร?";
var qa4_q1$3 = "อัตราส่วนเริ่มต้นของคำทบทวนต่อคำใหม่คือ 1:4";
var qa4_q2$3 = "คุณสามารถแก้ไขได้ที่ การตั้งค่า -> การตั้งค่าคำศัพท์ -> อัตราส่วนทบทวน";
var qa5_a$3 = "ใช้เวลานานเกินไปในการเรียนรู้หนึ่งครั้ง กระบวนการยาวเกินไปหรือไม่?";
var qa5_q1$3 = "นี่เป็นปัญหาจริงๆ กระบวนการที่ยาวนานสามารถทำให้คนสูญเสียแรงจูงใจ";
var qa5_q2$3 = "คำที่ผิดจะถูกทำซ้ำ หากเป็นแค่พิมพ์ผิด คุณสามารถกด Tab เพื่อข้าม";
var qa5_q3$3 = "ระหว่างทบทวน เฉพาะคำที่ทำเครื่องหมายว่า \"ไม่รู้\" เท่านั้นที่ต้องเขียนตามคำบอก";
var qa5_q4$3 = "หลังจากเปิดตัวระบบบัญชี จะเพิ่มฟีเจอร์เส้นโค้งความจำของ Ebbinghaus";
var qa6_a$3 = "จะเพิ่มฟีเจอร์เส้นโค้งความจำของ Ebbinghaus หรือไม่?";
var qa7_a$3 = "ฉันสามารถเพิ่มคำศัพท์/พจนานุกรมที่กำหนดเอง/นำเข้าคำศัพท์ของตัวเองได้หรือไม่?";
var qa7_q1$3 = "ได้ ในหน้าคำศัพท์ คลิก \"สร้างพจนานุกรมส่วนตัว\"";
var qa7_q2$3 = "หลังจากสร้าง คลิกไอคอน \"เพิ่มคำศัพท์\" เพื่อเพิ่มคำศัพท์ของคุณเอง";
var qa7_q3$3 = "คุณยังสามารถคลิกไอคอน \"นำเข้า\" เพื่อนำเข้าเป็นชุด";
var qa8_a$3 = "ฉันสามารถเพิ่มบทความ/หนังสือที่กำหนดเอง/นำเข้าบทความของตัวเองได้หรือไม่?";
var qa8_q1$3 = "ได้ ขั้นตอนโดยพื้นฐานเหมือนกับการเพิ่มคำศัพท์";
var qa8_q2$3 = "ในหน้าบทความ คลิก \"สร้างหนังสือส่วนตัว\"";
var qa8_q3$3 = "หลังจากสร้าง คลิกปุ่ม \"จัดการบทความ\" ที่ด้านบน";
var qa9_a$3 = "วิธีปิดเสียงแป้นพิมพ์?";
var qa9_q$3 = "การตั้งค่า -> การตั้งค่าทั่วไป -> เอฟเฟกต์เสียง -> เสียงแป้นพิมพ์ ปิดมัน";
var qa10_a$3 = "ใช้บนแท็บเล็ตได้ไหม?";
var qa10_q1$3 = "แท็บเล็ตสามารถใช้ได้ แต่การใช้คีย์บอร์ดบลูทูธจะให้ประสบการณ์ที่ดีกว่า";
var qa10_q2$3 = "หลังจากเชื่อมต่อคีย์บอร์ดบลูทูธ แท็บเล็ต Android ต้องเปิดใช้งาน \"โหมดเดสก์ท็อป\" ด้วยตนเอง";
var qa11_a$3 = "ใช้บนโทรศัพท์ได้ไหม?";
var qa11_q$3 = "โทรศัพท์สามารถใช้ได้ แต่ยังไม่มีการปรับให้เหมาะสม ยังคงแนะนำให้ใช้บนคอมพิวเตอร์หรือแท็บเล็ต";
var qa12_a$3 = "มีแอปหรือมินิโปรแกรมไหม?";
var qa12_q$3 = "ไม่ มีแค่เว็บไซต์";
var qa13_a$3 = "วิธีการส่งความคิดเห็นให้ทีมพัฒนา?";
var qa13_q1$3 = "คุณสามารถเข้าร่วมกลุ่ม WeChat อย่างเป็นทางการของเรา อธิบายรายละเอียดฟีเจอร์ที่คุณต้องการ";
var qa13_q2$3 = "หากคุณพบบั๊กในแอปพลิเคชัน กรุณาให้คำอธิบายโดยละเอียดและขั้นตอนในการทำซ้ำปัญหา";
var qa13_q3$3 = "คุณยังสามารถส่งตั๋วสนับสนุนให้เราได้";
var qa13_q4$3 = "คุณยังสามารถส่งได้ที่ github/issues";
const th = {
	app_desc: app_desc$3,
	app_name: app_name$3,
	start_word_practice: start_word_practice$3,
	start_article_practice: start_article_practice$3,
	home_word_practice: home_word_practice$3,
	home_word_practice_desc1: home_word_practice_desc1$3,
	home_word_practice_desc2: home_word_practice_desc2$3,
	home_word_practice_desc3: home_word_practice_desc3$3,
	home_article_practice: home_article_practice$3,
	home_article_practice_desc1: home_article_practice_desc1$3,
	home_article_practice_desc2: home_article_practice_desc2$3,
	home_article_practice_desc3: home_article_practice_desc3$3,
	home_collection: home_collection$3,
	home_collection_desc1: home_collection_desc1$3,
	home_collection_desc2: home_collection_desc2$3,
	home_collection_desc3: home_collection_desc3$3,
	home_vocabulary: home_vocabulary$3,
	home_vocabulary_desc: home_vocabulary_desc$3,
	home_free_opensource: home_free_opensource$3,
	home_free_opensource_desc1: home_free_opensource_desc1$3,
	home_free_opensource_desc2: home_free_opensource_desc2$3,
	home_free_opensource_desc3: home_free_opensource_desc3$3,
	home_customization: home_customization$3,
	home_customization_desc1: home_customization_desc1$3,
	home_customization_desc2: home_customization_desc2$3,
	home_customization_desc3: home_customization_desc3$3,
	home_design: home_design$3,
	home_design_desc1: home_design_desc1$3,
	home_design_desc2: home_design_desc2$3,
	home_design_desc3: home_design_desc3$3,
	home_personalized: home_personalized$3,
	home_personalized_desc1: home_personalized_desc1$3,
	home_personalized_desc2: home_personalized_desc2$3,
	home_personalized_desc3: home_personalized_desc3$3,
	cn_limit_no1: cn_limit_no1$3,
	cn_limit_no2: cn_limit_no2$3,
	setting: setting$3,
	edit: edit$3,
	"delete": "ลบ",
	cancel: cancel$3,
	confirm: confirm$3,
	save: save$3,
	close: close$3,
	search: search$3,
	more: more$3,
	loading: loading$3,
	introduction: introduction$3,
	learn: learn$3,
	practice: practice$3,
	test: test$3,
	feedback: feedback$3,
	document: document$3,
	help: help$3,
	about: about$3,
	login: login$3,
	register: register$3,
	register_account: register_account$3,
	register_new_account: register_new_account$3,
	code_login: code_login$3,
	password_login: password_login$3,
	phone_placeholder: phone_placeholder$3,
	code_placeholder: code_placeholder$3,
	account_placeholder: account_placeholder$3,
	password_placeholder: password_placeholder$3,
	auto_register_notice: auto_register_notice$3,
	forgot_password: forgot_password$3,
	reset_password: reset_password$3,
	set_password_placeholder: set_password_placeholder$3,
	confirm_password_placeholder: confirm_password_placeholder$3,
	new_password_placeholder: new_password_placeholder$3,
	confirm_new_password: confirm_new_password$3,
	wechat_scan_login: wechat_scan_login$3,
	scan_success: scan_success$3,
	tap_allow_in_wechat: tap_allow_in_wechat$3,
	login_cancelled: login_cancelled$3,
	login_again: login_again$3,
	sync_data: sync_data$3,
	local_data_detected: local_data_detected$3,
	sync_to_account_question: sync_to_account_question$3,
	no_sync: no_sync$3,
	sync: sync$3,
	syncing: syncing$3,
	sync_failed: sync_failed$3,
	sync_success: sync_success$3,
	enter_website: enter_website$3,
	general_settings: general_settings$3,
	word_settings: word_settings$3,
	article_settings: article_settings$3,
	data_management: data_management$3,
	shortcut_settings: shortcut_settings$3,
	update_log: update_log$3,
	"function": "ฟังก์ชัน",
	shortcut_key: shortcut_key$3,
	no_shortcut_set: no_shortcut_set$3,
	press_key_to_set: press_key_to_set$3,
	click_here_when_done: click_here_when_done$3,
	restore_default: restore_default$3,
	data_saved_locally: data_saved_locally$3,
	export_data_backup: export_data_backup$3,
	import_data_restore: import_data_restore$3,
	import_warning: import_warning$3,
	words: words$3,
	no_dict_selected: no_dict_selected$3,
	select_dict_to_start: select_dict_to_start$3,
	select_dict: select_dict$3,
	change_progress: change_progress$3,
	estimated_completion: estimated_completion$3,
	current_progress: current_progress$3,
	learned: learned$3,
	completed_review_stage: completed_review_stage$3,
	today_task: today_task$3,
	last_task: last_task$3,
	word_list: word_list$3,
	daily_goal: daily_goal$3,
	words_count: words_count$3,
	change: change$3,
	new_words_count: new_words_count$3,
	review_last: review_last$3,
	review_previous: review_previous$3,
	start_learning: start_learning$3,
	continue_learning: continue_learning$3,
	free_practice: free_practice$3,
	continue_free_practice: continue_free_practice$3,
	smart_learning: smart_learning$3,
	review: review$3,
	random_review: random_review$3,
	my_dictionaries: my_dictionaries$3,
	manage_dict: manage_dict$3,
	create_personal_dict: create_personal_dict$3,
	recommend: recommend$3,
	articles: articles$3,
	this_week_record: this_week_record$3,
	change_book: change_book$3,
	today_study_time: today_study_time$3,
	total_study_days: total_study_days$3,
	total_study_time: total_study_time$3,
	my_books: my_books$3,
	manage_books: manage_books$3,
	create_personal_book: create_personal_book$3,
	article_management: article_management$3,
	toggle_translation: toggle_translation$3,
	switch_display_mode: switch_display_mode$3,
	line_by_line: line_by_line$3,
	single_line: single_line$3,
	comparison: comparison$3,
	question: question$3,
	study_record: study_record$3,
	play_next_after_end: play_next_after_end$3,
	create_book: create_book$3,
	edit_book: edit_book$3,
	dict_list: dict_list$3,
	book_list: book_list$3,
	word: word$3,
	phonetic: phonetic$3,
	translation: translation$3,
	example_sentence: example_sentence$3,
	phrase: phrase$3,
	synonym: synonym$3,
	related_words: related_words$3,
	etymology: etymology$3,
	add_word: add_word$3,
	edit_word: edit_word$3,
	create_dict: create_dict$3,
	edit_dict: edit_dict$3,
	"import": "นำเข้า",
	"export": "ส่งออก",
	faq: faq$3,
	is_free: is_free$3,
	cannot_type: cannot_type$3,
	where_is_data: where_is_data$3,
	resource_sharing: resource_sharing$3,
	all_resources: all_resources$3,
	new_concept_english: new_concept_english$3,
	tv_movie: tv_movie$3,
	grammar_learning: grammar_learning$3,
	listening_training: listening_training$3,
	warm_tips: warm_tips$3,
	resources_from_internet: resources_from_internet$3,
	toggle_theme: toggle_theme$3,
	english_document: english_document$3,
	empty_placeholder: empty_placeholder$3,
	custom: custom$3,
	back: back$3,
	total_items: total_items$3,
	batch_delete: batch_delete$3,
	confirm_delete_selected: confirm_delete_selected$3,
	change_order: change_order$3,
	list_order_setting: list_order_setting$3,
	reverse_current_page: reverse_current_page$3,
	reverse_all: reverse_all$3,
	random_current_page: random_current_page$3,
	random_all: random_all$3,
	apply: apply$3,
	add: add$3,
	collect: collect$3,
	uncollect: uncollect$3,
	mark_mastered: mark_mastered$3,
	unmark_mastered: unmark_mastered$3,
	about_thanks: about_thanks$3,
	github_address: github_address$3,
	about_wechat_feedback: about_wechat_feedback$3,
	about_ticket_feedback: about_ticket_feedback$3,
	about_other_channels: about_other_channels$3,
	wait_translation: wait_translation$3,
	migrate_data: migrate_data$3,
	migrate_new_domain: migrate_new_domain$3,
	migrate_old_domain_notice: migrate_old_domain_notice$3,
	migrate_later_notice: migrate_later_notice$3,
	author: author$3,
	features: features$3,
	suitable_for: suitable_for$3,
	open_link: open_link$3,
	qq_group: qq_group$3,
	xiaohongshu: xiaohongshu$3,
	follow_x_account: follow_x_account$3,
	twitter: twitter$3,
	send_email: send_email$3,
	email: email$3,
	xiaohongshu_desc: xiaohongshu_desc$3,
	xiaohongshu_qrcode: xiaohongshu_qrcode$3,
	community_desc: community_desc$3,
	qq_qrcode: qq_qrcode$3,
	wechat_group: wechat_group$3,
	wechat_qrcode: wechat_qrcode$3,
	github_project: github_project$3,
	ie_not_supported: ie_not_supported$3,
	ie_use_modern_browser: ie_use_modern_browser$3,
	download_chrome: download_chrome$3,
	i_understand: i_understand$3,
	ignore_case: ignore_case$3,
	ignore_case_desc: ignore_case_desc$3,
	allow_dictation_tip: allow_dictation_tip$3,
	allow_dictation_tip_desc: allow_dictation_tip_desc$3,
	simple_word_filter: simple_word_filter$3,
	simple_word_filter_desc: simple_word_filter_desc$3,
	simple_word_list: simple_word_list$3,
	words_comma_separated: words_comma_separated$3,
	sound_effect: sound_effect$3,
	pronunciation_accent: pronunciation_accent$3,
	pronunciation_accent_desc: pronunciation_accent_desc$3,
	please_select: please_select$3,
	us_accent: us_accent$3,
	uk_accent: uk_accent$3,
	keyboard_sound: keyboard_sound$3,
	keyboard_sound_effect: keyboard_sound_effect$3,
	volume: volume$3,
	show_prev_next_word: show_prev_next_word$3,
	show_prev_next_word_desc: show_prev_next_word_desc$3,
	disable_practice_setting_dialog: disable_practice_setting_dialog$3,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$3,
	clear_input_on_error: clear_input_on_error$3,
	word_repeat_setting: word_repeat_setting$3,
	repeat_count: repeat_count$3,
	review_ratio: review_ratio$3,
	review_ratio_desc: review_ratio_desc$3,
	word_auto_pronunciation: word_auto_pronunciation$3,
	speed: speed$3,
	effect_sound: effect_sound$3,
	auto_switch: auto_switch$3,
	auto_next_word: auto_next_word$3,
	auto_next_word_desc: auto_next_word_desc$3,
	auto_next_word_time: auto_next_word_time$3,
	auto_next_word_time_desc: auto_next_word_time_desc$3,
	milliseconds: milliseconds$3,
	font_setting: font_setting$3,
	foreign_font: foreign_font$3,
	chinese_font: chinese_font$3,
	auto_play_sentence: auto_play_sentence$3,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$3,
	settings: settings$3,
	please_select_dict: please_select_dict$3,
	learning_settings: learning_settings$3,
	total: total$3,
	estimated: estimated$3,
	days_to_complete: days_to_complete$3,
	from_word: from_word$3,
	start_daily: start_daily$3,
	new_words: new_words$3,
	review_ratio_tooltip: review_ratio_tooltip$3,
	review_ratio_notice_1: review_ratio_notice_1$3,
	review_ratio_notice_2: review_ratio_notice_2$3,
	daily_learning: daily_learning$3,
	learning_progress: learning_progress$3,
	select_from_dict: select_from_dict$3,
	change_in_settings: change_in_settings$3,
	keep_default_no_show: keep_default_no_show$3,
	review_complete: review_complete$3,
	today_task_complete: today_task_complete$3,
	study_duration: study_duration$3,
	accuracy_rate: accuracy_rate$3,
	weekly_study_record: weekly_study_record$3,
	studied: studied$3,
	total_words: total_words$3,
	restart_learning: restart_learning$3,
	another_round: another_round$3,
	return_home: return_home$3,
	import_tutorial: import_tutorial$3,
	import_follow_template: import_follow_template$3,
	import_word_required: import_word_required$3,
	import_translation_hint: import_translation_hint$3,
	import_example_hint: import_example_hint$3,
	import_phrase_hint: import_phrase_hint$3,
	two: two$3,
	lines: lines$3,
	import_other_hint: import_other_hint$3,
	template_download: template_download$3,
	word_import_template: word_import_template$3,
	conflict_notice_title: conflict_notice_title$3,
	keyboard_no_response: keyboard_no_response$3,
	check_plugins_installed: check_plugins_installed$3,
	conflict_plugin_names: conflict_plugin_names$3,
	plugins_intercept_keyboard: plugins_intercept_keyboard$3,
	cause_no_response: cause_no_response$3,
	follow_steps_to_resolve: follow_steps_to_resolve$3,
	try_incognito_mode: try_incognito_mode$3,
	incognito_not_working: incognito_not_working$3,
	click_here: click_here$3,
	feedback_or_wechat: feedback_or_wechat$3,
	incognito_working: incognito_working$3,
	disable_plugin_or_exclude: disable_plugin_or_exclude$3,
	install_extension_manager: install_extension_manager$3,
	chrome_extension: chrome_extension$3,
	edge_extension: edge_extension$3,
	to_manage_extensions: to_manage_extensions$3,
	delete_key_goes_back: delete_key_goes_back$3,
	browser_360_shortcut: browser_360_shortcut$3,
	change_browser_or_shortcut: change_browser_or_shortcut$3,
	please_enter_name: please_enter_name$3,
	name_max_20_chars: name_max_20_chars$3,
	name_already_exists: name_already_exists$3,
	add_success: add_success$3,
	edit_success: edit_success$3,
	edit_and_add_to_dict: edit_and_add_to_dict$3,
	please_fill_complete: please_fill_complete$3,
	name: name$3,
	description: description$3,
	source_language: source_language$3,
	target_language: target_language$3,
	english: english$3,
	german: german$3,
	japanese: japanese$3,
	code: code$3,
	chinese: chinese$3,
	multiple_choice: multiple_choice$3,
	start: start$3,
	countdown: countdown$3,
	seconds: seconds$3,
	submit_exam: submit_exam$3,
	exam_color_hint: exam_color_hint$3,
	items_per_page: items_per_page$3,
	jump_to: jump_to$3,
	page_or_index: page_or_index$3,
	please_fill_original: please_fill_original$3,
	please_fill_title: please_fill_title$3,
	please_fill_content: please_fill_content$3,
	audio_added_success: audio_added_success$3,
	lrc_parse_success: lrc_parse_success$3,
	original_text: original_text$3,
	title: title$3,
	please_fill_original_title: please_fill_original_title$3,
	content: content$3,
	one_sentence_per_line: one_sentence_per_line$3,
	name_config_tip: name_config_tip$3,
	name_config: name_config$3,
	please_paste_original: please_paste_original$3,
	usage_guide: usage_guide$3,
	copy_and_split: copy_and_split$3,
	click: click$3,
	split_sentence: split_sentence$3,
	auto_split: auto_split$3,
	or: or$3,
	manual_split: manual_split$3,
	split_rule: split_rule$3,
	after_edit_click: after_edit_click$3,
	sync_to_result: sync_to_result$3,
	please_fill_translation_title: please_fill_translation_title$3,
	please_fill_translation: please_fill_translation$3,
	translate: translate$3,
	copy_translation_or_click: copy_translation_or_click$3,
	result: result$3,
	editable_auto_sync: editable_auto_sync$3,
	audio: audio$3,
	audio_management: audio_management$3,
	paragraph: paragraph$3,
	set_start_time: set_start_time$3,
	use_prev_end_time: use_prev_end_time$3,
	minus_03s: minus_03s$3,
	end: end$3,
	set_end_time: set_end_time$3,
	edit_audio_align: edit_audio_align$3,
	play: play$3,
	status: status$3,
	sentences_not_translated: sentences_not_translated$3,
	translation_complete: translation_complete$3,
	save_and_next: save_and_next$3,
	no_translation_comparison: no_translation_comparison$3,
	adjust_audio_timeline: adjust_audio_timeline$3,
	audio_timeline_tutorial: audio_timeline_tutorial$3,
	start_time: start_time$3,
	jump_to_seconds: jump_to_seconds$3,
	use_prev_end_seconds: use_prev_end_seconds$3,
	decrease_03s: decrease_03s$3,
	increase_03s: increase_03s$3,
	record: record$3,
	end_time: end_time$3,
	audio_upload_notice: audio_upload_notice$3,
	upload_audio: upload_audio$3,
	upload_lrc: upload_lrc$3,
	name_management: name_management$3,
	name_ignore_config_desc: name_ignore_config_desc$3,
	add_name: add_name$3,
	enter_name: enter_name$3,
	collect_word: collect_word$3,
	copy: copy$3,
	copy_sentence: copy_sentence$3,
	copied: copied$3,
	copy_word: copy_word$3,
	start_from_here: start_from_here$3,
	play_sentence: play_sentence$3,
	grammar_analysis: grammar_analysis$3,
	copied_open_grammar: copied_open_grammar$3,
	youdao_translate: youdao_translate$3,
	translate_word: translate_word$3,
	translate_sentence: translate_sentence$3,
	restart_practice: restart_practice$3,
	next_article: next_article$3,
	learning_record: learning_record$3,
	total_learning_time: total_learning_time$3,
	current: current$3,
	show_questions: show_questions$3,
	explanation: explanation$3,
	encouragement_95: encouragement_95$3,
	encouragement_85: encouragement_85$3,
	encouragement_70: encouragement_70$3,
	encouragement_default: encouragement_default$3,
	daily_task_complete: daily_task_complete$3,
	weekly_record: weekly_record$3,
	study_progress: study_progress$3,
	relearn: relearn$3,
	start_from_beginning: start_from_beginning$3,
	another_group: another_group$3,
	back_to_home: back_to_home$3,
	know_word_tip: know_word_tip$3,
	press_delete_reinput: press_delete_reinput$3,
	press_space_continue: press_space_continue$3,
	shortcut: shortcut$3,
	i_know: i_know$3,
	i_dont_know: i_dont_know$3,
	phrases: phrases$3,
	synonyms: synonyms$3,
	word_root: word_root$3,
	review_wrong_words: review_wrong_words$3,
	collapse: collapse$3,
	expand: expand$3,
	minutes: minutes$3,
	time: time$3,
	errors: errors$3,
	skip_to_next_stage: skip_to_next_stage$3,
	skip_word: skip_word$3,
	toggle_dictation_mode: toggle_dictation_mode$3,
	send_failed: send_failed$3,
	send_code_failed: send_code_failed$3,
	sending: sending$3,
	send_code: send_code$3,
	agree_terms_notice: agree_terms_notice$3,
	user_agreement: user_agreement$3,
	and: and$3,
	privacy_policy: privacy_policy$3,
	important_notice: important_notice$3,
	dont_remind: dont_remind$3,
	function_desc: function_desc$3,
	qa1_a: qa1_a$3,
	qa1_q1: qa1_q1$3,
	qa1_q2: qa1_q2$3,
	qa2_a: qa2_a$3,
	qa3_a: qa3_a$3,
	qa3_q1: qa3_q1$3,
	qa3_q2: qa3_q2$3,
	qa3_q3: qa3_q3$3,
	qa4_a: qa4_a$3,
	qa4_q1: qa4_q1$3,
	qa4_q2: qa4_q2$3,
	qa5_a: qa5_a$3,
	qa5_q1: qa5_q1$3,
	qa5_q2: qa5_q2$3,
	qa5_q3: qa5_q3$3,
	qa5_q4: qa5_q4$3,
	qa6_a: qa6_a$3,
	qa7_a: qa7_a$3,
	qa7_q1: qa7_q1$3,
	qa7_q2: qa7_q2$3,
	qa7_q3: qa7_q3$3,
	qa8_a: qa8_a$3,
	qa8_q1: qa8_q1$3,
	qa8_q2: qa8_q2$3,
	qa8_q3: qa8_q3$3,
	qa9_a: qa9_a$3,
	qa9_q: qa9_q$3,
	qa10_a: qa10_a$3,
	qa10_q1: qa10_q1$3,
	qa10_q2: qa10_q2$3,
	qa11_a: qa11_a$3,
	qa11_q: qa11_q$3,
	qa12_a: qa12_a$3,
	qa12_q: qa12_q$3,
	qa13_a: qa13_a$3,
	qa13_q1: qa13_q1$3,
	qa13_q2: qa13_q2$3,
	qa13_q3: qa13_q3$3,
	qa13_q4: qa13_q4$3
};

const th$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$3,
  about_other_channels: about_other_channels$3,
  about_thanks: about_thanks$3,
  about_ticket_feedback: about_ticket_feedback$3,
  about_wechat_feedback: about_wechat_feedback$3,
  account_placeholder: account_placeholder$3,
  accuracy_rate: accuracy_rate$3,
  add: add$3,
  add_name: add_name$3,
  add_success: add_success$3,
  add_word: add_word$3,
  adjust_audio_timeline: adjust_audio_timeline$3,
  after_edit_click: after_edit_click$3,
  agree_terms_notice: agree_terms_notice$3,
  all_resources: all_resources$3,
  allow_dictation_tip: allow_dictation_tip$3,
  allow_dictation_tip_desc: allow_dictation_tip_desc$3,
  and: and$3,
  another_group: another_group$3,
  another_round: another_round$3,
  app_desc: app_desc$3,
  app_name: app_name$3,
  apply: apply$3,
  article_management: article_management$3,
  article_settings: article_settings$3,
  articles: articles$3,
  audio: audio$3,
  audio_added_success: audio_added_success$3,
  audio_management: audio_management$3,
  audio_timeline_tutorial: audio_timeline_tutorial$3,
  audio_upload_notice: audio_upload_notice$3,
  author: author$3,
  auto_next_word: auto_next_word$3,
  auto_next_word_desc: auto_next_word_desc$3,
  auto_next_word_time: auto_next_word_time$3,
  auto_next_word_time_desc: auto_next_word_time_desc$3,
  auto_play_sentence: auto_play_sentence$3,
  auto_register_notice: auto_register_notice$3,
  auto_split: auto_split$3,
  auto_switch: auto_switch$3,
  back: back$3,
  back_to_home: back_to_home$3,
  batch_delete: batch_delete$3,
  book_list: book_list$3,
  browser_360_shortcut: browser_360_shortcut$3,
  cancel: cancel$3,
  cannot_type: cannot_type$3,
  cause_no_response: cause_no_response$3,
  change: change$3,
  change_book: change_book$3,
  change_browser_or_shortcut: change_browser_or_shortcut$3,
  change_in_settings: change_in_settings$3,
  change_order: change_order$3,
  change_progress: change_progress$3,
  check_plugins_installed: check_plugins_installed$3,
  chinese: chinese$3,
  chinese_font: chinese_font$3,
  chrome_extension: chrome_extension$3,
  clear_input_on_error: clear_input_on_error$3,
  click: click$3,
  click_here: click_here$3,
  click_here_when_done: click_here_when_done$3,
  close: close$3,
  cn_limit_no1: cn_limit_no1$3,
  cn_limit_no2: cn_limit_no2$3,
  code: code$3,
  code_login: code_login$3,
  code_placeholder: code_placeholder$3,
  collapse: collapse$3,
  collect: collect$3,
  collect_word: collect_word$3,
  community_desc: community_desc$3,
  comparison: comparison$3,
  completed_review_stage: completed_review_stage$3,
  confirm: confirm$3,
  confirm_delete_selected: confirm_delete_selected$3,
  confirm_new_password: confirm_new_password$3,
  confirm_password_placeholder: confirm_password_placeholder$3,
  conflict_notice_title: conflict_notice_title$3,
  conflict_plugin_names: conflict_plugin_names$3,
  content: content$3,
  continue_free_practice: continue_free_practice$3,
  continue_learning: continue_learning$3,
  copied: copied$3,
  copied_open_grammar: copied_open_grammar$3,
  copy: copy$3,
  copy_and_split: copy_and_split$3,
  copy_sentence: copy_sentence$3,
  copy_translation_or_click: copy_translation_or_click$3,
  copy_word: copy_word$3,
  countdown: countdown$3,
  create_book: create_book$3,
  create_dict: create_dict$3,
  create_personal_book: create_personal_book$3,
  create_personal_dict: create_personal_dict$3,
  current: current$3,
  current_progress: current_progress$3,
  custom: custom$3,
  daily_goal: daily_goal$3,
  daily_learning: daily_learning$3,
  daily_task_complete: daily_task_complete$3,
  data_management: data_management$3,
  data_saved_locally: data_saved_locally$3,
  days_to_complete: days_to_complete$3,
  decrease_03s: decrease_03s$3,
  default: th,
  delete_key_goes_back: delete_key_goes_back$3,
  description: description$3,
  dict_list: dict_list$3,
  disable_plugin_or_exclude: disable_plugin_or_exclude$3,
  disable_practice_setting_dialog: disable_practice_setting_dialog$3,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$3,
  document: document$3,
  dont_remind: dont_remind$3,
  download_chrome: download_chrome$3,
  edge_extension: edge_extension$3,
  edit: edit$3,
  edit_and_add_to_dict: edit_and_add_to_dict$3,
  edit_audio_align: edit_audio_align$3,
  edit_book: edit_book$3,
  edit_dict: edit_dict$3,
  edit_success: edit_success$3,
  edit_word: edit_word$3,
  editable_auto_sync: editable_auto_sync$3,
  effect_sound: effect_sound$3,
  email: email$3,
  empty_placeholder: empty_placeholder$3,
  encouragement_70: encouragement_70$3,
  encouragement_85: encouragement_85$3,
  encouragement_95: encouragement_95$3,
  encouragement_default: encouragement_default$3,
  end: end$3,
  end_time: end_time$3,
  english: english$3,
  english_document: english_document$3,
  enter_name: enter_name$3,
  enter_website: enter_website$3,
  errors: errors$3,
  estimated: estimated$3,
  estimated_completion: estimated_completion$3,
  etymology: etymology$3,
  exam_color_hint: exam_color_hint$3,
  example_sentence: example_sentence$3,
  expand: expand$3,
  explanation: explanation$3,
  export_data_backup: export_data_backup$3,
  faq: faq$3,
  features: features$3,
  feedback: feedback$3,
  feedback_or_wechat: feedback_or_wechat$3,
  follow_steps_to_resolve: follow_steps_to_resolve$3,
  follow_x_account: follow_x_account$3,
  font_setting: font_setting$3,
  foreign_font: foreign_font$3,
  forgot_password: forgot_password$3,
  free_practice: free_practice$3,
  from_word: from_word$3,
  function_desc: function_desc$3,
  general_settings: general_settings$3,
  german: german$3,
  github_address: github_address$3,
  github_project: github_project$3,
  grammar_analysis: grammar_analysis$3,
  grammar_learning: grammar_learning$3,
  help: help$3,
  home_article_practice: home_article_practice$3,
  home_article_practice_desc1: home_article_practice_desc1$3,
  home_article_practice_desc2: home_article_practice_desc2$3,
  home_article_practice_desc3: home_article_practice_desc3$3,
  home_collection: home_collection$3,
  home_collection_desc1: home_collection_desc1$3,
  home_collection_desc2: home_collection_desc2$3,
  home_collection_desc3: home_collection_desc3$3,
  home_customization: home_customization$3,
  home_customization_desc1: home_customization_desc1$3,
  home_customization_desc2: home_customization_desc2$3,
  home_customization_desc3: home_customization_desc3$3,
  home_design: home_design$3,
  home_design_desc1: home_design_desc1$3,
  home_design_desc2: home_design_desc2$3,
  home_design_desc3: home_design_desc3$3,
  home_free_opensource: home_free_opensource$3,
  home_free_opensource_desc1: home_free_opensource_desc1$3,
  home_free_opensource_desc2: home_free_opensource_desc2$3,
  home_free_opensource_desc3: home_free_opensource_desc3$3,
  home_personalized: home_personalized$3,
  home_personalized_desc1: home_personalized_desc1$3,
  home_personalized_desc2: home_personalized_desc2$3,
  home_personalized_desc3: home_personalized_desc3$3,
  home_vocabulary: home_vocabulary$3,
  home_vocabulary_desc: home_vocabulary_desc$3,
  home_word_practice: home_word_practice$3,
  home_word_practice_desc1: home_word_practice_desc1$3,
  home_word_practice_desc2: home_word_practice_desc2$3,
  home_word_practice_desc3: home_word_practice_desc3$3,
  i_dont_know: i_dont_know$3,
  i_know: i_know$3,
  i_understand: i_understand$3,
  ie_not_supported: ie_not_supported$3,
  ie_use_modern_browser: ie_use_modern_browser$3,
  ignore_case: ignore_case$3,
  ignore_case_desc: ignore_case_desc$3,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$3,
  import_data_restore: import_data_restore$3,
  import_example_hint: import_example_hint$3,
  import_follow_template: import_follow_template$3,
  import_other_hint: import_other_hint$3,
  import_phrase_hint: import_phrase_hint$3,
  import_translation_hint: import_translation_hint$3,
  import_tutorial: import_tutorial$3,
  import_warning: import_warning$3,
  import_word_required: import_word_required$3,
  important_notice: important_notice$3,
  incognito_not_working: incognito_not_working$3,
  incognito_working: incognito_working$3,
  increase_03s: increase_03s$3,
  install_extension_manager: install_extension_manager$3,
  introduction: introduction$3,
  is_free: is_free$3,
  items_per_page: items_per_page$3,
  japanese: japanese$3,
  jump_to: jump_to$3,
  jump_to_seconds: jump_to_seconds$3,
  keep_default_no_show: keep_default_no_show$3,
  keyboard_no_response: keyboard_no_response$3,
  keyboard_sound: keyboard_sound$3,
  keyboard_sound_effect: keyboard_sound_effect$3,
  know_word_tip: know_word_tip$3,
  last_task: last_task$3,
  learn: learn$3,
  learned: learned$3,
  learning_progress: learning_progress$3,
  learning_record: learning_record$3,
  learning_settings: learning_settings$3,
  line_by_line: line_by_line$3,
  lines: lines$3,
  list_order_setting: list_order_setting$3,
  listening_training: listening_training$3,
  loading: loading$3,
  local_data_detected: local_data_detected$3,
  login: login$3,
  login_again: login_again$3,
  login_cancelled: login_cancelled$3,
  lrc_parse_success: lrc_parse_success$3,
  manage_books: manage_books$3,
  manage_dict: manage_dict$3,
  manual_split: manual_split$3,
  mark_mastered: mark_mastered$3,
  migrate_data: migrate_data$3,
  migrate_later_notice: migrate_later_notice$3,
  migrate_new_domain: migrate_new_domain$3,
  migrate_old_domain_notice: migrate_old_domain_notice$3,
  milliseconds: milliseconds$3,
  minus_03s: minus_03s$3,
  minutes: minutes$3,
  more: more$3,
  multiple_choice: multiple_choice$3,
  my_books: my_books$3,
  my_dictionaries: my_dictionaries$3,
  name: name$3,
  name_already_exists: name_already_exists$3,
  name_config: name_config$3,
  name_config_tip: name_config_tip$3,
  name_ignore_config_desc: name_ignore_config_desc$3,
  name_management: name_management$3,
  name_max_20_chars: name_max_20_chars$3,
  new_concept_english: new_concept_english$3,
  new_password_placeholder: new_password_placeholder$3,
  new_words: new_words$3,
  new_words_count: new_words_count$3,
  next_article: next_article$3,
  no_dict_selected: no_dict_selected$3,
  no_shortcut_set: no_shortcut_set$3,
  no_sync: no_sync$3,
  no_translation_comparison: no_translation_comparison$3,
  one_sentence_per_line: one_sentence_per_line$3,
  open_link: open_link$3,
  or: or$3,
  original_text: original_text$3,
  page_or_index: page_or_index$3,
  paragraph: paragraph$3,
  password_login: password_login$3,
  password_placeholder: password_placeholder$3,
  phone_placeholder: phone_placeholder$3,
  phonetic: phonetic$3,
  phrase: phrase$3,
  phrases: phrases$3,
  play: play$3,
  play_next_after_end: play_next_after_end$3,
  play_sentence: play_sentence$3,
  please_enter_name: please_enter_name$3,
  please_fill_complete: please_fill_complete$3,
  please_fill_content: please_fill_content$3,
  please_fill_original: please_fill_original$3,
  please_fill_original_title: please_fill_original_title$3,
  please_fill_title: please_fill_title$3,
  please_fill_translation: please_fill_translation$3,
  please_fill_translation_title: please_fill_translation_title$3,
  please_paste_original: please_paste_original$3,
  please_select: please_select$3,
  please_select_dict: please_select_dict$3,
  plugins_intercept_keyboard: plugins_intercept_keyboard$3,
  practice: practice$3,
  press_delete_reinput: press_delete_reinput$3,
  press_key_to_set: press_key_to_set$3,
  press_space_continue: press_space_continue$3,
  privacy_policy: privacy_policy$3,
  pronunciation_accent: pronunciation_accent$3,
  pronunciation_accent_desc: pronunciation_accent_desc$3,
  qa10_a: qa10_a$3,
  qa10_q1: qa10_q1$3,
  qa10_q2: qa10_q2$3,
  qa11_a: qa11_a$3,
  qa11_q: qa11_q$3,
  qa12_a: qa12_a$3,
  qa12_q: qa12_q$3,
  qa13_a: qa13_a$3,
  qa13_q1: qa13_q1$3,
  qa13_q2: qa13_q2$3,
  qa13_q3: qa13_q3$3,
  qa13_q4: qa13_q4$3,
  qa1_a: qa1_a$3,
  qa1_q1: qa1_q1$3,
  qa1_q2: qa1_q2$3,
  qa2_a: qa2_a$3,
  qa3_a: qa3_a$3,
  qa3_q1: qa3_q1$3,
  qa3_q2: qa3_q2$3,
  qa3_q3: qa3_q3$3,
  qa4_a: qa4_a$3,
  qa4_q1: qa4_q1$3,
  qa4_q2: qa4_q2$3,
  qa5_a: qa5_a$3,
  qa5_q1: qa5_q1$3,
  qa5_q2: qa5_q2$3,
  qa5_q3: qa5_q3$3,
  qa5_q4: qa5_q4$3,
  qa6_a: qa6_a$3,
  qa7_a: qa7_a$3,
  qa7_q1: qa7_q1$3,
  qa7_q2: qa7_q2$3,
  qa7_q3: qa7_q3$3,
  qa8_a: qa8_a$3,
  qa8_q1: qa8_q1$3,
  qa8_q2: qa8_q2$3,
  qa8_q3: qa8_q3$3,
  qa9_a: qa9_a$3,
  qa9_q: qa9_q$3,
  qq_group: qq_group$3,
  qq_qrcode: qq_qrcode$3,
  question: question$3,
  random_all: random_all$3,
  random_current_page: random_current_page$3,
  random_review: random_review$3,
  recommend: recommend$3,
  record: record$3,
  register: register$3,
  register_account: register_account$3,
  register_new_account: register_new_account$3,
  related_words: related_words$3,
  relearn: relearn$3,
  repeat_count: repeat_count$3,
  reset_password: reset_password$3,
  resource_sharing: resource_sharing$3,
  resources_from_internet: resources_from_internet$3,
  restart_learning: restart_learning$3,
  restart_practice: restart_practice$3,
  restore_default: restore_default$3,
  result: result$3,
  return_home: return_home$3,
  reverse_all: reverse_all$3,
  reverse_current_page: reverse_current_page$3,
  review: review$3,
  review_complete: review_complete$3,
  review_last: review_last$3,
  review_previous: review_previous$3,
  review_ratio: review_ratio$3,
  review_ratio_desc: review_ratio_desc$3,
  review_ratio_notice_1: review_ratio_notice_1$3,
  review_ratio_notice_2: review_ratio_notice_2$3,
  review_ratio_tooltip: review_ratio_tooltip$3,
  review_wrong_words: review_wrong_words$3,
  save: save$3,
  save_and_next: save_and_next$3,
  scan_success: scan_success$3,
  search: search$3,
  seconds: seconds$3,
  select_dict: select_dict$3,
  select_dict_to_start: select_dict_to_start$3,
  select_from_dict: select_from_dict$3,
  send_code: send_code$3,
  send_code_failed: send_code_failed$3,
  send_email: send_email$3,
  send_failed: send_failed$3,
  sending: sending$3,
  sentences_not_translated: sentences_not_translated$3,
  set_end_time: set_end_time$3,
  set_password_placeholder: set_password_placeholder$3,
  set_start_time: set_start_time$3,
  setting: setting$3,
  settings: settings$3,
  shortcut: shortcut$3,
  shortcut_key: shortcut_key$3,
  shortcut_settings: shortcut_settings$3,
  show_prev_next_word: show_prev_next_word$3,
  show_prev_next_word_desc: show_prev_next_word_desc$3,
  show_questions: show_questions$3,
  simple_word_filter: simple_word_filter$3,
  simple_word_filter_desc: simple_word_filter_desc$3,
  simple_word_list: simple_word_list$3,
  single_line: single_line$3,
  skip_to_next_stage: skip_to_next_stage$3,
  skip_word: skip_word$3,
  smart_learning: smart_learning$3,
  sound_effect: sound_effect$3,
  source_language: source_language$3,
  speed: speed$3,
  split_rule: split_rule$3,
  split_sentence: split_sentence$3,
  start: start$3,
  start_article_practice: start_article_practice$3,
  start_daily: start_daily$3,
  start_from_beginning: start_from_beginning$3,
  start_from_here: start_from_here$3,
  start_learning: start_learning$3,
  start_time: start_time$3,
  start_word_practice: start_word_practice$3,
  status: status$3,
  studied: studied$3,
  study_duration: study_duration$3,
  study_progress: study_progress$3,
  study_record: study_record$3,
  submit_exam: submit_exam$3,
  suitable_for: suitable_for$3,
  switch_display_mode: switch_display_mode$3,
  sync: sync$3,
  sync_data: sync_data$3,
  sync_failed: sync_failed$3,
  sync_success: sync_success$3,
  sync_to_account_question: sync_to_account_question$3,
  sync_to_result: sync_to_result$3,
  syncing: syncing$3,
  synonym: synonym$3,
  synonyms: synonyms$3,
  tap_allow_in_wechat: tap_allow_in_wechat$3,
  target_language: target_language$3,
  template_download: template_download$3,
  test: test$3,
  this_week_record: this_week_record$3,
  time: time$3,
  title: title$3,
  to_manage_extensions: to_manage_extensions$3,
  today_study_time: today_study_time$3,
  today_task: today_task$3,
  today_task_complete: today_task_complete$3,
  toggle_dictation_mode: toggle_dictation_mode$3,
  toggle_theme: toggle_theme$3,
  toggle_translation: toggle_translation$3,
  total: total$3,
  total_items: total_items$3,
  total_learning_time: total_learning_time$3,
  total_study_days: total_study_days$3,
  total_study_time: total_study_time$3,
  total_words: total_words$3,
  translate: translate$3,
  translate_sentence: translate_sentence$3,
  translate_word: translate_word$3,
  translation: translation$3,
  translation_complete: translation_complete$3,
  try_incognito_mode: try_incognito_mode$3,
  tv_movie: tv_movie$3,
  twitter: twitter$3,
  two: two$3,
  uk_accent: uk_accent$3,
  uncollect: uncollect$3,
  unmark_mastered: unmark_mastered$3,
  update_log: update_log$3,
  upload_audio: upload_audio$3,
  upload_lrc: upload_lrc$3,
  us_accent: us_accent$3,
  usage_guide: usage_guide$3,
  use_prev_end_seconds: use_prev_end_seconds$3,
  use_prev_end_time: use_prev_end_time$3,
  user_agreement: user_agreement$3,
  volume: volume$3,
  wait_translation: wait_translation$3,
  warm_tips: warm_tips$3,
  wechat_group: wechat_group$3,
  wechat_qrcode: wechat_qrcode$3,
  wechat_scan_login: wechat_scan_login$3,
  weekly_record: weekly_record$3,
  weekly_study_record: weekly_study_record$3,
  where_is_data: where_is_data$3,
  word: word$3,
  word_auto_pronunciation: word_auto_pronunciation$3,
  word_import_template: word_import_template$3,
  word_list: word_list$3,
  word_repeat_setting: word_repeat_setting$3,
  word_root: word_root$3,
  word_settings: word_settings$3,
  words: words$3,
  words_comma_separated: words_comma_separated$3,
  words_count: words_count$3,
  xiaohongshu: xiaohongshu$3,
  xiaohongshu_desc: xiaohongshu_desc$3,
  xiaohongshu_qrcode: xiaohongshu_qrcode$3,
  youdao_translate: youdao_translate$3
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$2 = "Học tiếng Anh, từng phím một, công cụ luyện mã nguồn mở";
var app_name$2 = "Type Words";
var start_word_practice$2 = "Bắt đầu luyện từ vựng";
var start_article_practice$2 = "Bắt đầu luyện bài viết";
var home_word_practice$2 = "Luyện từ vựng";
var home_word_practice_desc1$2 = "Chế độ: Gõ theo/Chính tả/Tự kiểm tra/Đọc thuộc";
var home_word_practice_desc2$2 = "Học thông minh: Lập kế hoạch thông minh";
var home_word_practice_desc3$2 = "Học tự do: Không giới hạn";
var home_article_practice$2 = "Luyện bài viết";
var home_article_practice_desc1$2 = "Sách tích hợp, có thể thêm bài viết";
var home_article_practice_desc2$2 = "Chế độ kép: gõ theo + đọc thuộc";
var home_article_practice_desc3$2 = "Hỗ trợ nghe khi đọc thuộc";
var home_collection$2 = "Yêu thích, Từ sai, Đã thành thạo";
var home_collection_desc1$2 = "Nhập sai tự động thêm vào sổ từ sai";
var home_collection_desc2$2 = "Thêm vào đã thành thạo, tự động bỏ qua";
var home_collection_desc3$2 = "Thêm vào yêu thích để ôn tập";
var home_vocabulary$2 = "Kho từ vựng khổng lồ";
var home_vocabulary_desc$2 = "Từ vựng từ cơ bản đến nâng cao";
var home_free_opensource$2 = "Miễn phí và mã nguồn mở";
var home_free_opensource_desc1$2 = "Hoàn toàn mã nguồn mở";
var home_free_opensource_desc2$2 = "Sử dụng miễn phí";
var home_free_opensource_desc3$2 = "Triển khai riêng tư";
var home_customization$2 = "Tùy chỉnh cao";
var home_customization_desc1$2 = "Hiệu ứng âm thanh bàn phím";
var home_customization_desc2$2 = "Phím tắt có thể tùy chỉnh";
var home_customization_desc3$2 = "Tùy chọn cài đặt có thể tùy chỉnh cao";
var home_design$2 = "Đơn giản và hiệu quả";
var home_design_desc1$2 = "Thiết kế đơn giản, giao diện hiện đại";
var home_design_desc2$2 = "Giao diện gọn gàng, thao tác đơn giản";
var home_design_desc3$2 = "Không bắt buộc theo dõi nền tảng nào";
var home_personalized$2 = "Học cá nhân hóa";
var home_personalized_desc1$2 = "Tự do thêm từ điển và bài viết";
var home_personalized_desc2$2 = "Tùy chỉnh kế hoạch học tập";
var home_personalized_desc3$2 = "Nhiều chiến lược học tập và ôn tập";
var cn_limit_no1$2 = "川公网安备51015602001426号";
var cn_limit_no2$2 = "蜀ICP备2025157466号-2";
var setting$2 = "Cài đặt";
var edit$2 = "Chỉnh sửa";
var cancel$2 = "Hủy";
var confirm$2 = "Xác nhận";
var save$2 = "Lưu";
var close$2 = "Đóng";
var search$2 = "Tìm kiếm";
var more$2 = "Thêm";
var loading$2 = "Đang tải";
var introduction$2 = "Giới thiệu";
var learn$2 = "Học";
var practice$2 = "Luyện tập";
var test$2 = "Kiểm tra";
var feedback$2 = "Phản hồi";
var document$2 = "Tài liệu";
var help$2 = "Trợ giúp";
var about$2 = "Giới thiệu";
var login$2 = "Đăng nhập";
var register$2 = "Đăng ký";
var register_account$2 = "Đăng ký tài khoản";
var register_new_account$2 = "Đăng ký tài khoản mới";
var code_login$2 = "Đăng nhập bằng mã";
var password_login$2 = "Đăng nhập bằng mật khẩu";
var phone_placeholder$2 = "Vui lòng nhập số điện thoại";
var code_placeholder$2 = "Vui lòng nhập mã xác nhận";
var account_placeholder$2 = "Nhập số điện thoại/email";
var password_placeholder$2 = "Vui lòng nhập mật khẩu";
var auto_register_notice$2 = "Số điện thoại chưa đăng ký sẽ được đăng ký tự động";
var forgot_password$2 = "Quên mật khẩu?";
var reset_password$2 = "Đặt lại mật khẩu";
var set_password_placeholder$2 = "Vui lòng đặt mật khẩu";
var confirm_password_placeholder$2 = "Vui lòng xác nhận mật khẩu";
var new_password_placeholder$2 = "Nhập mật khẩu mới";
var confirm_new_password$2 = "Xác nhận mật khẩu mới";
var wechat_scan_login$2 = "Đăng nhập quét WeChat";
var scan_success$2 = "Quét thành công";
var tap_allow_in_wechat$2 = "Nhấn cho phép trong WeChat để đăng nhập";
var login_cancelled$2 = "Đăng nhập đã hủy";
var login_again$2 = "Đăng nhập lại";
var sync_data$2 = "Đồng bộ dữ liệu";
var local_data_detected$2 = "Phát hiện dữ liệu cục bộ";
var sync_to_account_question$2 = "Đồng bộ với tài khoản?";
var no_sync$2 = "Không đồng bộ";
var sync$2 = "Đồng bộ";
var syncing$2 = "Đang đồng bộ";
var sync_failed$2 = "Đồng bộ thất bại";
var sync_success$2 = "Đồng bộ thành công";
var enter_website$2 = "Vào trang web";
var general_settings$2 = "Cài đặt chung";
var word_settings$2 = "Cài đặt từ vựng";
var article_settings$2 = "Cài đặt bài viết";
var data_management$2 = "Quản lý dữ liệu";
var shortcut_settings$2 = "Cài đặt phím tắt";
var update_log$2 = "Nhật ký cập nhật";
var shortcut_key$2 = "Phím tắt (nhấp để sửa)";
var no_shortcut_set$2 = "Chưa đặt phím tắt";
var press_key_to_set$2 = "Nhấn phím để đặt";
var click_here_when_done$2 = "Nhấp vào đây khi xong";
var restore_default$2 = "Khôi phục mặc định";
var data_saved_locally$2 = "Tất cả dữ liệu được lưu cục bộ trong trình duyệt";
var export_data_backup$2 = "Xuất sao lưu dữ liệu (ZIP)";
var import_data_restore$2 = "Nhập khôi phục dữ liệu";
var import_warning$2 = "Nhập sẽ ghi đè tất cả dữ liệu";
var words$2 = "Từ vựng";
var no_dict_selected$2 = "Chưa chọn từ điển";
var select_dict_to_start$2 = "Vui lòng chọn từ điển để bắt đầu";
var select_dict$2 = "Chọn từ điển";
var change_progress$2 = "Thay đổi tiến độ";
var estimated_completion$2 = "Dự kiến hoàn thành";
var current_progress$2 = "Tiến độ hiện tại";
var learned$2 = "Đã học";
var completed_review_stage$2 = "Hoàn thành, vào giai đoạn ôn tập";
var today_task$2 = "Nhiệm vụ hôm nay";
var last_task$2 = "Nhiệm vụ trước";
var word_list$2 = "Danh sách từ";
var daily_goal$2 = "Mục tiêu hàng ngày";
var words_count$2 = "từ";
var change$2 = "Thay đổi";
var new_words_count$2 = "Từ mới";
var review_last$2 = "Ôn tập gần đây";
var review_previous$2 = "Ôn tập trước";
var start_learning$2 = "Bắt đầu học";
var continue_learning$2 = "Tiếp tục học";
var free_practice$2 = "Luyện tập tự do";
var continue_free_practice$2 = "Tiếp tục luyện tập tự do";
var smart_learning$2 = "Học thông minh";
var review$2 = "Ôn tập";
var random_review$2 = "Ôn tập ngẫu nhiên";
var my_dictionaries$2 = "Từ điển của tôi";
var manage_dict$2 = "Quản lý từ điển";
var create_personal_dict$2 = "Tạo từ điển cá nhân";
var recommend$2 = "Đề xuất";
var articles$2 = "Bài viết";
var this_week_record$2 = "Ghi chép tuần này";
var change_book$2 = "Thay đổi";
var today_study_time$2 = "Thời gian học hôm nay";
var total_study_days$2 = "Tổng số ngày học";
var total_study_time$2 = "Tổng thời gian học";
var my_books$2 = "Sách của tôi";
var manage_books$2 = "Quản lý sách";
var create_personal_book$2 = "Tạo sách cá nhân";
var article_management$2 = "Quản lý bài viết";
var toggle_translation$2 = "Chuyển đổi dịch";
var switch_display_mode$2 = "Chuyển chế độ hiển thị";
var line_by_line$2 = "Từng dòng";
var single_line$2 = "Dòng đơn";
var comparison$2 = "So sánh";
var question$2 = "Câu hỏi";
var study_record$2 = "Hồ sơ học tập";
var play_next_after_end$2 = "Phát tiếp theo sau khi kết thúc";
var create_book$2 = "Tạo sách";
var edit_book$2 = "Chỉnh sửa sách";
var dict_list$2 = "Danh sách từ điển";
var book_list$2 = "Danh sách sách";
var word$2 = "Từ vựng";
var phonetic$2 = "Phiên âm";
var translation$2 = "Dịch";
var example_sentence$2 = "Câu ví dụ";
var phrase$2 = "Cụm từ";
var synonym$2 = "Từ đồng nghĩa";
var related_words$2 = "Từ liên quan";
var etymology$2 = "Từ nguyên";
var add_word$2 = "Thêm từ";
var edit_word$2 = "Chỉnh sửa từ";
var create_dict$2 = "Tạo từ điển";
var edit_dict$2 = "Chỉnh sửa từ điển";
var faq$2 = "Câu hỏi thường gặp";
var is_free$2 = "Trang web có miễn phí không?";
var cannot_type$2 = "Không thể gõ, bàn phím không phản hồi?";
var where_is_data$2 = "Dữ liệu ở đâu? Sử dụng trên nhiều thiết bị như thế nào?";
var resource_sharing$2 = "Chia sẻ tài nguyên";
var all_resources$2 = "Tất cả tài nguyên";
var new_concept_english$2 = "Tiếng Anh khái niệm mới";
var tv_movie$2 = "TV/Phim";
var grammar_learning$2 = "Học ngữ pháp";
var listening_training$2 = "Luyện nghe";
var warm_tips$2 = "Mẹo hay";
var resources_from_internet$2 = "Tất cả tài nguyên được thu thập từ internet, chỉ để học tập";
var toggle_theme$2 = "Chuyển đổi giao diện";
var english_document$2 = "Tài liệu tiếng Anh";
var empty_placeholder$2 = "Trống trơn~";
var custom$2 = "Tùy chỉnh";
var back$2 = "Quay lại";
var total_items$2 = "mục";
var batch_delete$2 = "Xóa hàng loạt";
var confirm_delete_selected$2 = "Xác nhận xóa tất cả đã chọn?";
var change_order$2 = "Thay đổi thứ tự";
var list_order_setting$2 = "Cài đặt thứ tự danh sách";
var reverse_current_page$2 = "Đảo ngược trang hiện tại";
var reverse_all$2 = "Đảo ngược tất cả";
var random_current_page$2 = "Xáo trộn trang hiện tại";
var random_all$2 = "Xáo trộn tất cả";
var apply$2 = "Áp dụng";
var add$2 = "Thêm";
var collect$2 = "Yêu thích";
var uncollect$2 = "Bỏ yêu thích";
var mark_mastered$2 = "Đánh dấu đã thành thạo";
var unmark_mastered$2 = "Bỏ đánh dấu thành thạo";
var about_thanks$2 = "Cảm ơn bạn đã sử dụng dự án này! Đây là dự án mã nguồn mở, miễn phí. Nếu thấy hữu ích, hãy cho chúng tôi một sao trên GitHub!";
var github_address$2 = "GitHub:";
var about_wechat_feedback$2 = "Phản hồi WeChat:";
var about_ticket_feedback$2 = "Phản hồi qua ticket:";
var about_other_channels$2 = "Kênh khác:";
var wait_translation$2 = "Vui lòng đợi dịch hoàn tất";
var migrate_data$2 = "Di chuyển dữ liệu";
var migrate_new_domain$2 = "Trang web này có tên miền mới";
var migrate_old_domain_notice$2 = "Tên miền cũ sẽ ngừng hoạt động. Do hạn chế bảo mật của trình duyệt, dữ liệu không thể chia sẻ giữa các trang. Vui lòng chuyển dữ liệu thủ công.";
var migrate_later_notice$2 = "Nếu bạn không muốn di chuyển ngay bây giờ, bạn có thể đóng hộp thoại này và di chuyển sau trong \"Cài đặt\" -> \"Quản lý dữ liệu\"";
var author$2 = "Tác giả:";
var features$2 = "Tính năng:";
var suitable_for$2 = "Phù hợp cho:";
var open_link$2 = "Mở liên kết";
var qq_group$2 = "Nhóm QQ";
var xiaohongshu$2 = "Xiaohongshu";
var follow_x_account$2 = "Theo dõi tài khoản X {x_account}";
var twitter$2 = "Twitter";
var send_email$2 = "Gửi email đến {email}";
var email$2 = "Email";
var xiaohongshu_desc$2 = "Theo dõi chúng tôi trên Xiaohongshu để nhận cập nhật mới nhất từ đội phát triển, chia sẻ trải nghiệm và đề xuất của bạn";
var xiaohongshu_qrcode$2 = "Mã QR Xiaohongshu";
var community_desc$2 = "Tham gia cộng đồng của chúng tôi để giao tiếp với đội phát triển, chia sẻ trải nghiệm và đề xuất của bạn";
var qq_qrcode$2 = "Mã QR nhóm QQ";
var wechat_group$2 = "Nhóm WeChat";
var wechat_qrcode$2 = "Mã QR nhóm WeChat";
var github_project$2 = "Dự án GitHub";
var ie_not_supported$2 = "Trình duyệt IE không được hỗ trợ";
var ie_use_modern_browser$2 = "Type Words được xây dựng bằng công nghệ hiện đại, vui lòng sử dụng Chrome, Edge, Firefox hoặc các trình duyệt hiện đại khác";
var download_chrome$2 = "Tải Chrome";
var i_understand$2 = "Tôi hiểu";
var ignore_case$2 = "Bỏ qua chữ hoa/thường";
var ignore_case_desc$2 = "Khi bật, đầu vào không phân biệt chữ hoa/thường";
var allow_dictation_tip$2 = "Cho phép gợi ý trong chế độ chính tả";
var allow_dictation_tip_desc$2 = "Khi bật, bạn có thể di chuột qua từ hoặc nhấn phím tắt để hiển thị đáp án đúng";
var simple_word_filter$2 = "Bộ lọc từ đơn giản";
var simple_word_filter_desc$2 = "Khi bật, các từ đơn giản sẽ bị loại khỏi luyện tập; các từ đơn giản sẽ không được tính trong thống kê bài viết";
var simple_word_list$2 = "Danh sách từ đơn giản";
var words_comma_separated$2 = "Nhiều từ phân cách bằng dấu phẩy";
var sound_effect$2 = "Hiệu ứng âm thanh";
var pronunciation_accent$2 = "Giọng phát âm";
var pronunciation_accent_desc$2 = "Chỉ ảnh hưởng đến phát âm từ; bài viết sử dụng giọng Mỹ";
var please_select$2 = "Vui lòng chọn";
var us_accent$2 = "Mỹ";
var uk_accent$2 = "Anh";
var keyboard_sound$2 = "Âm thanh phím";
var keyboard_sound_effect$2 = "Hiệu ứng âm thanh phím";
var volume$2 = "Âm lượng";
var show_prev_next_word$2 = "Hiển thị từ trước/sau";
var show_prev_next_word_desc$2 = "Khi bật, từ trước và sau sẽ hiển thị ở trên trong khi luyện tập";
var disable_practice_setting_dialog$2 = "Không hiển thị hộp thoại cài đặt luyện tập theo mặc định";
var disable_practice_setting_dialog_desc$2 = "Trên trang chi tiết từ điển, có hiển thị hộp thoại cài đặt luyện tập sau khi nhấp nút học hay không";
var clear_input_on_error$2 = "Xóa đầu vào khi có lỗi";
var word_repeat_setting$2 = "Cài đặt lặp từ";
var repeat_count$2 = "Số lần lặp";
var review_ratio$2 = "Tỷ lệ ôn tập";
var review_ratio_desc$2 = "Tỷ lệ từ ôn tập với từ mới. Thay đổi có hiệu lực trong phiên học tiếp theo";
var word_auto_pronunciation$2 = "Phát âm tự động";
var speed$2 = "Tốc độ";
var effect_sound$2 = "Âm thanh hiệu ứng (âm thanh lỗi và hoàn thành)";
var auto_switch$2 = "Tự động chuyển";
var auto_next_word$2 = "Từ tiếp theo tự động";
var auto_next_word_desc$2 = "Chỉ hoạt động ở chế độ theo dõi. Chế độ chính tả, tự kiểm tra và đánh vần yêu cầu nhấn dấu cách để tiếp tục";
var auto_next_word_time$2 = "Thời gian từ tiếp theo tự động";
var auto_next_word_time_desc$2 = "Thời gian tự động chuyển sang từ tiếp theo sau khi nhập đúng";
var milliseconds$2 = "mili giây";
var font_setting$2 = "Cài đặt phông chữ";
var foreign_font$2 = "Phông chữ ngoại ngữ";
var chinese_font$2 = "Phông chữ Trung Quốc";
var auto_play_sentence$2 = "Tự động phát câu";
var ignore_symbols_numbers_names$2 = "Bỏ qua ký hiệu, số và tên khi nhập";
var settings$2 = "Cài đặt";
var please_select_dict$2 = "Vui lòng chọn từ điển trước";
var learning_settings$2 = "Cài đặt học tập";
var total$2 = "Tổng";
var estimated$2 = "Ước tính";
var days_to_complete$2 = "ngày để hoàn thành";
var from_word$2 = "Bắt đầu từ từ";
var start_daily$2 = ", hàng ngày";
var new_words$2 = "từ mới";
var review_ratio_tooltip$2 = "Tỷ lệ từ ôn tập với từ mới";
var review_ratio_notice_1$2 = "Khi học chưa hoàn thành, số lượng ôn tập được tạo theo tỷ lệ đã đặt. Nếu 0, không ôn tập";
var review_ratio_notice_2$2 = "Sau khi hoàn thành học, số từ mới cố định là 0, số ôn tập được tạo theo tỷ lệ (nếu < 1, tính là 1)";
var daily_learning$2 = "Học hàng ngày";
var learning_progress$2 = "Tiến độ học tập";
var select_from_dict$2 = "Chọn vị trí bắt đầu từ từ điển";
var change_in_settings$2 = "Có thể thay đổi trong trang cài đặt";
var keep_default_no_show$2 = "Giữ mặc định, không hiển thị nữa";
var review_complete$2 = "Ôn tập hoàn thành";
var today_task_complete$2 = "Hoàn thành nhiệm vụ hôm nay";
var study_duration$2 = "Thời gian học";
var accuracy_rate$2 = "Độ chính xác";
var weekly_study_record$2 = "Ghi chép học hàng tuần";
var studied$2 = "Đã học";
var total_words$2 = "Tổng số từ";
var restart_learning$2 = "Bắt đầu lại học";
var another_round$2 = "Một vòng nữa";
var return_home$2 = "Về trang chủ";
var import_tutorial$2 = "Hướng dẫn nhập";
var import_follow_template$2 = "Vui lòng điền dữ liệu theo định dạng mẫu";
var import_word_required$2 = "Trường từ là bắt buộc, các trường khác là tùy chọn";
var import_translation_hint$2 = "Dịch: một bản dịch mỗi dòng, từ loại trước, sau đó nội dung (ví dụ: n.cancel); nhiều bản dịch trên các dòng riêng";
var import_example_hint$2 = "Ví dụ: một dòng cho bản gốc, một dòng cho bản dịch; nhiều ví dụ trên các dòng riêng";
var import_phrase_hint$2 = "Cụm từ: một dòng cho bản gốc, một dòng cho bản dịch; nhiều cụm từ trên các dòng riêng";
var two$2 = "hai";
var lines$2 = "dòng";
var import_other_hint$2 = "Từ đồng nghĩa, từ gốc, nguồn gốc: vui lòng đi đến từ điển chính thức, sau đó chỉnh sửa một từ để xem định dạng";
var template_download$2 = "Tải mẫu";
var word_import_template$2 = "Mẫu nhập từ";
var conflict_notice_title$2 = "Nếu bạn gặp các vấn đề sau khi sử dụng:";
var keyboard_no_response$2 = "Bàn phím không phản hồi";
var check_plugins_installed$2 = "Vui lòng kiểm tra xem bạn đã cài đặt";
var conflict_plugin_names$2 = "\"Trình điều khiển tốc độ video\" \"Vim\" \"Trình nâng cao âm thanh/video\" \"Trợ lý khóa học trực tuyến\"";
var plugins_intercept_keyboard$2 = "và các plugin/script khác chặn sự kiện bàn phím,";
var cause_no_response$2 = "dẫn đến không có phản hồi khi luyện tập trên trang web này";
var follow_steps_to_resolve$2 = ", vui lòng làm theo các bước sau để giải quyết xung đột:";
var try_incognito_mode$2 = "Mở trang web này trong chế độ ẩn danh của trình duyệt và kiểm tra xem bạn có thể nhập bình thường không?";
var incognito_not_working$2 = "Không thể nhập trong chế độ ẩn danh,";
var click_here$2 = "nhấp vào đây";
var feedback_or_wechat$2 = "để phản hồi, hoặc tham gia nhóm WeChat:";
var incognito_working$2 = "Có thể nhập trong chế độ ẩn danh, vậy đó là xung đột plugin/script";
var disable_plugin_or_exclude$2 = "Tạm thời vô hiệu hóa plugin/script tương ứng, hoặc loại trừ trang web này trong cài đặt plugin/script";
var install_extension_manager$2 = "Bạn có thể cài đặt";
var chrome_extension$2 = "tiện ích mở rộng (phiên bản Chrome, cần VPN)";
var edge_extension$2 = "tiện ích mở rộng (phiên bản Edge, không cần VPN)";
var to_manage_extensions$2 = "để nhanh chóng bật/tắt các tiện ích mở rộng khác";
var delete_key_goes_back$2 = "Nhấn phím xóa quay lại trang trước";
var browser_360_shortcut$2 = "Trong trình duyệt 360, phím tắt \"phím xóa quay lại trang trước\" được đặt mặc định";
var change_browser_or_shortcut$2 = "Chuyển trình duyệt hoặc xóa phím tắt mặc định của 360: tìm \"quay lại\" trong cài đặt trình duyệt";
var please_enter_name$2 = "Vui lòng nhập tên";
var name_max_20_chars$2 = "Tên không được vượt quá 20 ký tự";
var name_already_exists$2 = "Tên đã tồn tại!";
var add_success$2 = "Thêm thành công";
var edit_success$2 = "Sửa đổi thành công";
var edit_and_add_to_dict$2 = "Sửa đổi thành công và thêm vào từ điển của tôi";
var please_fill_complete$2 = "Vui lòng điền đầy đủ";
var name$2 = "Tên";
var description$2 = "Mô tả";
var source_language$2 = "Ngôn ngữ nguồn";
var target_language$2 = "Ngôn ngữ đích";
var english$2 = "Tiếng Anh";
var german$2 = "Tiếng Đức";
var japanese$2 = "Tiếng Nhật";
var code$2 = "Mã";
var chinese$2 = "Tiếng Trung";
var multiple_choice$2 = "Trắc nghiệm";
var start$2 = "Bắt đầu";
var countdown$2 = "Đếm ngược";
var seconds$2 = "giây";
var submit_exam$2 = "Nộp bài";
var exam_color_hint$2 = "Đỏ nhạt: sai, Đỏ đậm: chưa chọn, Xanh: đúng";
var items_per_page$2 = "mục/trang";
var jump_to$2 = "Chuyển đến";
var page_or_index$2 = "trang/số thứ tự";
var please_fill_original$2 = "Vui lòng điền văn bản gốc!";
var please_fill_title$2 = "Vui lòng điền tiêu đề!";
var please_fill_content$2 = "Vui lòng điền nội dung!";
var audio_added_success$2 = "Thêm âm thanh thành công";
var lrc_parse_success$2 = "Phân tích file LRC thành công";
var original_text$2 = "Văn bản gốc";
var title$2 = "Tiêu đề";
var please_fill_original_title$2 = "Vui lòng điền tiêu đề gốc";
var content$2 = "Nội dung";
var one_sentence_per_line$2 = "Một câu mỗi dòng, để trống một dòng giữa các đoạn";
var name_config_tip$2 = "Sau khi cấu hình tên, chúng sẽ tự động bị bỏ qua trong quá trình luyện tập (tùy chọn, bật theo mặc định)";
var name_config$2 = "Cấu hình tên";
var please_paste_original$2 = "Vui lòng dán văn bản gốc";
var usage_guide$2 = "Hướng dẫn sử dụng";
var copy_and_split$2 = "Sao chép văn bản gốc, sau đó chia thành câu";
var click$2 = "Nhấp";
var split_sentence$2 = "Chia câu";
var auto_split$2 = "nút để tự động chia";
var or$2 = "hoặc";
var manual_split$2 = "chỉnh sửa thủ công để chia";
var split_rule$2 = "Quy tắc chia: một câu mỗi dòng, dòng trống giữa các đoạn";
var after_edit_click$2 = "Sau khi chỉnh sửa, nhấp";
var sync_to_result$2 = "nút để đồng bộ với bảng kết quả bên trái";
var please_fill_translation_title$2 = "Vui lòng điền tiêu đề bản dịch";
var please_fill_translation$2 = "Vui lòng điền bản dịch";
var translate$2 = "Dịch";
var copy_translation_or_click$2 = "Dán bản dịch, hoặc nhấp nếu không có";
var result$2 = "Kết quả";
var editable_auto_sync$2 = "Tất cả có thể chỉnh sửa, nhấp nút áp dụng để tự động đồng bộ sau khi chỉnh sửa";
var audio$2 = "Âm thanh";
var audio_management$2 = "Quản lý âm thanh";
var paragraph$2 = "Đoạn";
var set_start_time$2 = "Đặt thời gian bắt đầu";
var use_prev_end_time$2 = "Sử dụng thời gian kết thúc câu trước";
var minus_03s$2 = "Trừ 0.3s";
var end$2 = "Kết thúc";
var set_end_time$2 = "Đặt thời gian kết thúc";
var edit_audio_align$2 = "Chỉnh sửa căn chỉnh âm thanh";
var play$2 = "Phát";
var status$2 = "Trạng thái";
var sentences_not_translated$2 = "{count} câu chưa được dịch!";
var translation_complete$2 = "Dịch hoàn thành!";
var save_and_next$2 = "Lưu và thêm tiếp theo";
var no_translation_comparison$2 = "Không có bản dịch đối chiếu";
var adjust_audio_timeline$2 = "Điều chỉnh dòng thời gian âm thanh";
var audio_timeline_tutorial$2 = "Hướng dẫn: Nhấp phát, khi âm thanh đến đầu câu, nhấp ghi thời gian bắt đầu; khi đến cuối, nhấp ghi thời gian kết thúc";
var start_time$2 = "Thời gian bắt đầu";
var jump_to_seconds$2 = "Chuyển đến {seconds}s";
var use_prev_end_seconds$2 = "Sử dụng thời gian kết thúc câu trước: {seconds}s";
var decrease_03s$2 = "Giảm 0.3s";
var increase_03s$2 = "Tăng 0.3s";
var record$2 = "Ghi";
var end_time$2 = "Thời gian kết thúc";
var audio_upload_notice$2 = "1. Các file tải lên được lưu cục bộ, dữ liệu sẽ mất khi đổi máy tính, vui lòng sao lưu kịp thời\n2. Hỗ trợ mp3, wav, m4a và các định dạng âm thanh phổ biến khác";
var upload_audio$2 = "Tải lên âm thanh";
var upload_lrc$2 = "Tải lên file LRC";
var name_management$2 = "Quản lý tên";
var name_ignore_config_desc$2 = "Cấu hình các tên cần bỏ qua, các tên này sẽ tự động được bỏ qua trong khi luyện tập (tùy chọn, bật theo mặc định)";
var add_name$2 = "Thêm tên";
var enter_name$2 = "Nhập tên";
var collect_word$2 = "Thu thập từ";
var copy$2 = "Sao chép";
var copy_sentence$2 = "Sao chép câu";
var copied$2 = "Đã sao chép";
var copy_word$2 = "Sao chép từ";
var start_from_here$2 = "Bắt đầu từ đây";
var play_sentence$2 = "Phát câu";
var grammar_analysis$2 = "Phân tích ngữ pháp";
var copied_open_grammar$2 = "Đã sao chép! Đang mở trang web phân tích ngữ pháp!";
var youdao_translate$2 = "Từ điển Youdao";
var translate_word$2 = "Dịch từ";
var translate_sentence$2 = "Dịch câu";
var restart_practice$2 = "Bắt đầu lại luyện tập";
var next_article$2 = "Bài viết tiếp theo";
var learning_record$2 = "Ghi chép học tập";
var total_learning_time$2 = "Tổng thời gian học";
var current$2 = "Hiện tại";
var show_questions$2 = "Hiển thị câu hỏi";
var explanation$2 = "Giải thích";
var encouragement_95$2 = "Xuất sắc! Tiếp tục phát huy!";
var encouragement_85$2 = "Làm tốt lắm, tiếp tục cố gắng!";
var encouragement_70$2 = "Điểm tốt, tiếp tục nhé!";
var encouragement_default$2 = "Mỗi lần luyện tập là một tiến bộ, cố lên!";
var daily_task_complete$2 = "Hoàn thành nhiệm vụ hàng ngày";
var weekly_record$2 = "Ghi chép học tuần này";
var study_progress$2 = "Tiến độ học tập";
var relearn$2 = "Học lại";
var start_from_beginning$2 = "Bắt đầu từ đầu";
var another_group$2 = "Nhóm khác";
var back_to_home$2 = "Quay về trang chủ";
var know_word_tip$2 = "Nếu bạn chọn nhầm \"Tôi biết\", nhấn phím xóa để chọn lại!";
var press_delete_reinput$2 = "Vui lòng nhấn phím xóa để nhập lại";
var press_space_continue$2 = "Vui lòng nhấn dấu cách để tiếp tục";
var shortcut$2 = "Phím tắt";
var i_know$2 = "Tôi biết";
var i_dont_know$2 = "Tôi không biết";
var phrases$2 = "Cụm từ";
var synonyms$2 = "Từ đồng nghĩa";
var word_root$2 = "Gốc từ";
var review_wrong_words$2 = "Ôn lại từ sai";
var collapse$2 = "Thu gọn";
var expand$2 = "Mở rộng";
var minutes$2 = "phút";
var time$2 = "Thời gian";
var errors$2 = "Lỗi";
var skip_to_next_stage$2 = "Chuyển đến giai đoạn tiếp theo";
var skip_word$2 = "Bỏ qua từ";
var toggle_dictation_mode$2 = "Bật/tắt chế độ chính tả";
var send_failed$2 = "Gửi thất bại";
var send_code_failed$2 = "Gửi mã xác minh thất bại";
var sending$2 = "Đang gửi";
var send_code$2 = "Gửi mã";
var agree_terms_notice$2 = "Tiếp tục đồng nghĩa với việc bạn đồng ý với";
var user_agreement$2 = "Thỏa thuận người dùng";
var and$2 = "và";
var privacy_policy$2 = "Chính sách bảo mật";
var important_notice$2 = "Thông báo quan trọng";
var dont_remind$2 = "Không nhắc lại";
var function_desc$2 = "Tính năng";
var qa1_a$2 = "Trang web có miễn phí không?";
var qa1_q1$2 = "Không hoàn toàn miễn phí. Để phát triển lâu dài, phí trong tương lai là không thể tránh khỏi, nhưng sẽ không yêu cầu thanh toán để sử dụng. Chúng tôi cố gắng tìm sự cân bằng giữa miễn phí và trả phí.";
var qa1_q2$2 = "Dự án là mã nguồn mở, bạn có thể tự triển khai.";
var qa2_a$2 = "Không thể nhập, bàn phím không phản hồi?";
var qa3_a$2 = "Dữ liệu ở đâu? Làm thế nào để sử dụng trên nhiều máy tính/thiết bị?";
var qa3_q1$2 = "Tất cả dữ liệu người dùng được lưu trong trình duyệt cục bộ. Nếu bạn cần sử dụng Type Words trên các thiết bị hoặc trình duyệt khác nhau, bạn cần xuất và nhập dữ liệu theo cách thủ công.";
var qa3_q2$2 = "Cài đặt -> Cài đặt dữ liệu -> Xuất dữ liệu trên máy tính gốc -> Gửi đến máy tính mới qua phần mềm mạng xã hội -> Nhập trên máy tính mới";
var qa3_q3$2 = "Hệ thống tài khoản đang được phát triển.";
var qa4_a$2 = "Trang web tự động lên kế hoạch quá nhiều từ, làm thế nào để sửa đổi?";
var qa4_q1$2 = "Tỷ lệ mặc định giữa từ ôn tập và từ mới là 1:4.";
var qa4_q2$2 = "Bạn có thể sửa đổi qua Cài đặt -> Cài đặt từ vựng -> Tỷ lệ ôn tập";
var qa5_a$2 = "Mất quá nhiều thời gian để hoàn thành một phiên học, quy trình có quá dài không?";
var qa5_q1$2 = "Đây thực sự là một vấn đề. Quy trình dài có thể khiến người ta mất động lực.";
var qa5_q2$2 = "Các từ sai sẽ được lặp lại. Nếu chỉ là lỗi đánh máy, bạn có thể nhấn Tab để bỏ qua.";
var qa5_q3$2 = "Trong quá trình ôn tập, chỉ những từ được đánh dấu là \"không biết\" mới yêu cầu chính tả.";
var qa5_q4$2 = "Sau khi hệ thống tài khoản ra mắt, tính năng đường cong trí nhớ Ebbinghaus sẽ được thêm vào.";
var qa6_a$2 = "Tính năng đường cong trí nhớ Ebbinghaus sẽ được thêm vào không?";
var qa7_a$2 = "Tôi có thể thêm từ/từ điển tùy chỉnh/nhập từ của riêng tôi không?";
var qa7_q1$2 = "Có, trên trang Từ vựng, nhấp vào \"Tạo từ điển cá nhân\"";
var qa7_q2$2 = "Sau khi tạo, nhấp vào biểu tượng \"Thêm từ\" để thêm từ của riêng bạn";
var qa7_q3$2 = "Bạn cũng có thể nhấp vào biểu tượng \"Nhập\" để nhập hàng loạt";
var qa8_a$2 = "Tôi có thể thêm bài viết/sách tùy chỉnh/nhập bài viết của riêng tôi không?";
var qa8_q1$2 = "Có, các bước về cơ bản giống như thêm từ";
var qa8_q2$2 = "Trên trang Bài viết, nhấp vào \"Tạo sách cá nhân\"";
var qa8_q3$2 = "Sau khi tạo, nhấp vào nút \"Quản lý bài viết\" ở trên cùng";
var qa9_a$2 = "Làm thế nào để tắt âm thanh phím?";
var qa9_q$2 = "Cài đặt -> Cài đặt chung -> Hiệu ứng âm thanh -> Âm thanh phím, tắt nó";
var qa10_a$2 = "Tôi có thể sử dụng trên máy tính bảng không?";
var qa10_q1$2 = "Máy tính bảng có thể sử dụng, nhưng sử dụng bàn phím Bluetooth mang lại trải nghiệm tốt hơn.";
var qa10_q2$2 = "Sau khi kết nối bàn phím Bluetooth, máy tính bảng Android cần bật thủ công \"Chế độ máy tính\".";
var qa11_a$2 = "Tôi có thể sử dụng trên điện thoại không?";
var qa11_q$2 = "Điện thoại có thể sử dụng, nhưng tối ưu hóa chưa được thực hiện. Vẫn khuyến nghị sử dụng trên máy tính hoặc máy tính bảng.";
var qa12_a$2 = "Có APP hoặc chương trình nhỏ không?";
var qa12_q$2 = "Không, chỉ có trang web";
var qa13_a$2 = "Làm thế nào để cung cấp phản hồi cho đội phát triển?";
var qa13_q1$2 = "Bạn có thể tham gia nhóm WeChat chính thức của chúng tôi, mô tả chi tiết các tính năng bạn muốn";
var qa13_q2$2 = "Nếu bạn tìm thấy lỗi trong ứng dụng, vui lòng cung cấp mô tả chi tiết và các bước để tái tạo";
var qa13_q3$2 = "Bạn cũng có thể gửi yêu cầu hỗ trợ cho chúng tôi";
var qa13_q4$2 = "Bạn cũng có thể gửi trên github/issues";
const vi = {
	app_desc: app_desc$2,
	app_name: app_name$2,
	start_word_practice: start_word_practice$2,
	start_article_practice: start_article_practice$2,
	home_word_practice: home_word_practice$2,
	home_word_practice_desc1: home_word_practice_desc1$2,
	home_word_practice_desc2: home_word_practice_desc2$2,
	home_word_practice_desc3: home_word_practice_desc3$2,
	home_article_practice: home_article_practice$2,
	home_article_practice_desc1: home_article_practice_desc1$2,
	home_article_practice_desc2: home_article_practice_desc2$2,
	home_article_practice_desc3: home_article_practice_desc3$2,
	home_collection: home_collection$2,
	home_collection_desc1: home_collection_desc1$2,
	home_collection_desc2: home_collection_desc2$2,
	home_collection_desc3: home_collection_desc3$2,
	home_vocabulary: home_vocabulary$2,
	home_vocabulary_desc: home_vocabulary_desc$2,
	home_free_opensource: home_free_opensource$2,
	home_free_opensource_desc1: home_free_opensource_desc1$2,
	home_free_opensource_desc2: home_free_opensource_desc2$2,
	home_free_opensource_desc3: home_free_opensource_desc3$2,
	home_customization: home_customization$2,
	home_customization_desc1: home_customization_desc1$2,
	home_customization_desc2: home_customization_desc2$2,
	home_customization_desc3: home_customization_desc3$2,
	home_design: home_design$2,
	home_design_desc1: home_design_desc1$2,
	home_design_desc2: home_design_desc2$2,
	home_design_desc3: home_design_desc3$2,
	home_personalized: home_personalized$2,
	home_personalized_desc1: home_personalized_desc1$2,
	home_personalized_desc2: home_personalized_desc2$2,
	home_personalized_desc3: home_personalized_desc3$2,
	cn_limit_no1: cn_limit_no1$2,
	cn_limit_no2: cn_limit_no2$2,
	setting: setting$2,
	edit: edit$2,
	"delete": "Xóa",
	cancel: cancel$2,
	confirm: confirm$2,
	save: save$2,
	close: close$2,
	search: search$2,
	more: more$2,
	loading: loading$2,
	introduction: introduction$2,
	learn: learn$2,
	practice: practice$2,
	test: test$2,
	feedback: feedback$2,
	document: document$2,
	help: help$2,
	about: about$2,
	login: login$2,
	register: register$2,
	register_account: register_account$2,
	register_new_account: register_new_account$2,
	code_login: code_login$2,
	password_login: password_login$2,
	phone_placeholder: phone_placeholder$2,
	code_placeholder: code_placeholder$2,
	account_placeholder: account_placeholder$2,
	password_placeholder: password_placeholder$2,
	auto_register_notice: auto_register_notice$2,
	forgot_password: forgot_password$2,
	reset_password: reset_password$2,
	set_password_placeholder: set_password_placeholder$2,
	confirm_password_placeholder: confirm_password_placeholder$2,
	new_password_placeholder: new_password_placeholder$2,
	confirm_new_password: confirm_new_password$2,
	wechat_scan_login: wechat_scan_login$2,
	scan_success: scan_success$2,
	tap_allow_in_wechat: tap_allow_in_wechat$2,
	login_cancelled: login_cancelled$2,
	login_again: login_again$2,
	sync_data: sync_data$2,
	local_data_detected: local_data_detected$2,
	sync_to_account_question: sync_to_account_question$2,
	no_sync: no_sync$2,
	sync: sync$2,
	syncing: syncing$2,
	sync_failed: sync_failed$2,
	sync_success: sync_success$2,
	enter_website: enter_website$2,
	general_settings: general_settings$2,
	word_settings: word_settings$2,
	article_settings: article_settings$2,
	data_management: data_management$2,
	shortcut_settings: shortcut_settings$2,
	update_log: update_log$2,
	"function": "Chức năng",
	shortcut_key: shortcut_key$2,
	no_shortcut_set: no_shortcut_set$2,
	press_key_to_set: press_key_to_set$2,
	click_here_when_done: click_here_when_done$2,
	restore_default: restore_default$2,
	data_saved_locally: data_saved_locally$2,
	export_data_backup: export_data_backup$2,
	import_data_restore: import_data_restore$2,
	import_warning: import_warning$2,
	words: words$2,
	no_dict_selected: no_dict_selected$2,
	select_dict_to_start: select_dict_to_start$2,
	select_dict: select_dict$2,
	change_progress: change_progress$2,
	estimated_completion: estimated_completion$2,
	current_progress: current_progress$2,
	learned: learned$2,
	completed_review_stage: completed_review_stage$2,
	today_task: today_task$2,
	last_task: last_task$2,
	word_list: word_list$2,
	daily_goal: daily_goal$2,
	words_count: words_count$2,
	change: change$2,
	new_words_count: new_words_count$2,
	review_last: review_last$2,
	review_previous: review_previous$2,
	start_learning: start_learning$2,
	continue_learning: continue_learning$2,
	free_practice: free_practice$2,
	continue_free_practice: continue_free_practice$2,
	smart_learning: smart_learning$2,
	review: review$2,
	random_review: random_review$2,
	my_dictionaries: my_dictionaries$2,
	manage_dict: manage_dict$2,
	create_personal_dict: create_personal_dict$2,
	recommend: recommend$2,
	articles: articles$2,
	this_week_record: this_week_record$2,
	change_book: change_book$2,
	today_study_time: today_study_time$2,
	total_study_days: total_study_days$2,
	total_study_time: total_study_time$2,
	my_books: my_books$2,
	manage_books: manage_books$2,
	create_personal_book: create_personal_book$2,
	article_management: article_management$2,
	toggle_translation: toggle_translation$2,
	switch_display_mode: switch_display_mode$2,
	line_by_line: line_by_line$2,
	single_line: single_line$2,
	comparison: comparison$2,
	question: question$2,
	study_record: study_record$2,
	play_next_after_end: play_next_after_end$2,
	create_book: create_book$2,
	edit_book: edit_book$2,
	dict_list: dict_list$2,
	book_list: book_list$2,
	word: word$2,
	phonetic: phonetic$2,
	translation: translation$2,
	example_sentence: example_sentence$2,
	phrase: phrase$2,
	synonym: synonym$2,
	related_words: related_words$2,
	etymology: etymology$2,
	add_word: add_word$2,
	edit_word: edit_word$2,
	create_dict: create_dict$2,
	edit_dict: edit_dict$2,
	"import": "Nhập",
	"export": "Xuất",
	faq: faq$2,
	is_free: is_free$2,
	cannot_type: cannot_type$2,
	where_is_data: where_is_data$2,
	resource_sharing: resource_sharing$2,
	all_resources: all_resources$2,
	new_concept_english: new_concept_english$2,
	tv_movie: tv_movie$2,
	grammar_learning: grammar_learning$2,
	listening_training: listening_training$2,
	warm_tips: warm_tips$2,
	resources_from_internet: resources_from_internet$2,
	toggle_theme: toggle_theme$2,
	english_document: english_document$2,
	empty_placeholder: empty_placeholder$2,
	custom: custom$2,
	back: back$2,
	total_items: total_items$2,
	batch_delete: batch_delete$2,
	confirm_delete_selected: confirm_delete_selected$2,
	change_order: change_order$2,
	list_order_setting: list_order_setting$2,
	reverse_current_page: reverse_current_page$2,
	reverse_all: reverse_all$2,
	random_current_page: random_current_page$2,
	random_all: random_all$2,
	apply: apply$2,
	add: add$2,
	collect: collect$2,
	uncollect: uncollect$2,
	mark_mastered: mark_mastered$2,
	unmark_mastered: unmark_mastered$2,
	about_thanks: about_thanks$2,
	github_address: github_address$2,
	about_wechat_feedback: about_wechat_feedback$2,
	about_ticket_feedback: about_ticket_feedback$2,
	about_other_channels: about_other_channels$2,
	wait_translation: wait_translation$2,
	migrate_data: migrate_data$2,
	migrate_new_domain: migrate_new_domain$2,
	migrate_old_domain_notice: migrate_old_domain_notice$2,
	migrate_later_notice: migrate_later_notice$2,
	author: author$2,
	features: features$2,
	suitable_for: suitable_for$2,
	open_link: open_link$2,
	qq_group: qq_group$2,
	xiaohongshu: xiaohongshu$2,
	follow_x_account: follow_x_account$2,
	twitter: twitter$2,
	send_email: send_email$2,
	email: email$2,
	xiaohongshu_desc: xiaohongshu_desc$2,
	xiaohongshu_qrcode: xiaohongshu_qrcode$2,
	community_desc: community_desc$2,
	qq_qrcode: qq_qrcode$2,
	wechat_group: wechat_group$2,
	wechat_qrcode: wechat_qrcode$2,
	github_project: github_project$2,
	ie_not_supported: ie_not_supported$2,
	ie_use_modern_browser: ie_use_modern_browser$2,
	download_chrome: download_chrome$2,
	i_understand: i_understand$2,
	ignore_case: ignore_case$2,
	ignore_case_desc: ignore_case_desc$2,
	allow_dictation_tip: allow_dictation_tip$2,
	allow_dictation_tip_desc: allow_dictation_tip_desc$2,
	simple_word_filter: simple_word_filter$2,
	simple_word_filter_desc: simple_word_filter_desc$2,
	simple_word_list: simple_word_list$2,
	words_comma_separated: words_comma_separated$2,
	sound_effect: sound_effect$2,
	pronunciation_accent: pronunciation_accent$2,
	pronunciation_accent_desc: pronunciation_accent_desc$2,
	please_select: please_select$2,
	us_accent: us_accent$2,
	uk_accent: uk_accent$2,
	keyboard_sound: keyboard_sound$2,
	keyboard_sound_effect: keyboard_sound_effect$2,
	volume: volume$2,
	show_prev_next_word: show_prev_next_word$2,
	show_prev_next_word_desc: show_prev_next_word_desc$2,
	disable_practice_setting_dialog: disable_practice_setting_dialog$2,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$2,
	clear_input_on_error: clear_input_on_error$2,
	word_repeat_setting: word_repeat_setting$2,
	repeat_count: repeat_count$2,
	review_ratio: review_ratio$2,
	review_ratio_desc: review_ratio_desc$2,
	word_auto_pronunciation: word_auto_pronunciation$2,
	speed: speed$2,
	effect_sound: effect_sound$2,
	auto_switch: auto_switch$2,
	auto_next_word: auto_next_word$2,
	auto_next_word_desc: auto_next_word_desc$2,
	auto_next_word_time: auto_next_word_time$2,
	auto_next_word_time_desc: auto_next_word_time_desc$2,
	milliseconds: milliseconds$2,
	font_setting: font_setting$2,
	foreign_font: foreign_font$2,
	chinese_font: chinese_font$2,
	auto_play_sentence: auto_play_sentence$2,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$2,
	settings: settings$2,
	please_select_dict: please_select_dict$2,
	learning_settings: learning_settings$2,
	total: total$2,
	estimated: estimated$2,
	days_to_complete: days_to_complete$2,
	from_word: from_word$2,
	start_daily: start_daily$2,
	new_words: new_words$2,
	review_ratio_tooltip: review_ratio_tooltip$2,
	review_ratio_notice_1: review_ratio_notice_1$2,
	review_ratio_notice_2: review_ratio_notice_2$2,
	daily_learning: daily_learning$2,
	learning_progress: learning_progress$2,
	select_from_dict: select_from_dict$2,
	change_in_settings: change_in_settings$2,
	keep_default_no_show: keep_default_no_show$2,
	review_complete: review_complete$2,
	today_task_complete: today_task_complete$2,
	study_duration: study_duration$2,
	accuracy_rate: accuracy_rate$2,
	weekly_study_record: weekly_study_record$2,
	studied: studied$2,
	total_words: total_words$2,
	restart_learning: restart_learning$2,
	another_round: another_round$2,
	return_home: return_home$2,
	import_tutorial: import_tutorial$2,
	import_follow_template: import_follow_template$2,
	import_word_required: import_word_required$2,
	import_translation_hint: import_translation_hint$2,
	import_example_hint: import_example_hint$2,
	import_phrase_hint: import_phrase_hint$2,
	two: two$2,
	lines: lines$2,
	import_other_hint: import_other_hint$2,
	template_download: template_download$2,
	word_import_template: word_import_template$2,
	conflict_notice_title: conflict_notice_title$2,
	keyboard_no_response: keyboard_no_response$2,
	check_plugins_installed: check_plugins_installed$2,
	conflict_plugin_names: conflict_plugin_names$2,
	plugins_intercept_keyboard: plugins_intercept_keyboard$2,
	cause_no_response: cause_no_response$2,
	follow_steps_to_resolve: follow_steps_to_resolve$2,
	try_incognito_mode: try_incognito_mode$2,
	incognito_not_working: incognito_not_working$2,
	click_here: click_here$2,
	feedback_or_wechat: feedback_or_wechat$2,
	incognito_working: incognito_working$2,
	disable_plugin_or_exclude: disable_plugin_or_exclude$2,
	install_extension_manager: install_extension_manager$2,
	chrome_extension: chrome_extension$2,
	edge_extension: edge_extension$2,
	to_manage_extensions: to_manage_extensions$2,
	delete_key_goes_back: delete_key_goes_back$2,
	browser_360_shortcut: browser_360_shortcut$2,
	change_browser_or_shortcut: change_browser_or_shortcut$2,
	please_enter_name: please_enter_name$2,
	name_max_20_chars: name_max_20_chars$2,
	name_already_exists: name_already_exists$2,
	add_success: add_success$2,
	edit_success: edit_success$2,
	edit_and_add_to_dict: edit_and_add_to_dict$2,
	please_fill_complete: please_fill_complete$2,
	name: name$2,
	description: description$2,
	source_language: source_language$2,
	target_language: target_language$2,
	english: english$2,
	german: german$2,
	japanese: japanese$2,
	code: code$2,
	chinese: chinese$2,
	multiple_choice: multiple_choice$2,
	start: start$2,
	countdown: countdown$2,
	seconds: seconds$2,
	submit_exam: submit_exam$2,
	exam_color_hint: exam_color_hint$2,
	items_per_page: items_per_page$2,
	jump_to: jump_to$2,
	page_or_index: page_or_index$2,
	please_fill_original: please_fill_original$2,
	please_fill_title: please_fill_title$2,
	please_fill_content: please_fill_content$2,
	audio_added_success: audio_added_success$2,
	lrc_parse_success: lrc_parse_success$2,
	original_text: original_text$2,
	title: title$2,
	please_fill_original_title: please_fill_original_title$2,
	content: content$2,
	one_sentence_per_line: one_sentence_per_line$2,
	name_config_tip: name_config_tip$2,
	name_config: name_config$2,
	please_paste_original: please_paste_original$2,
	usage_guide: usage_guide$2,
	copy_and_split: copy_and_split$2,
	click: click$2,
	split_sentence: split_sentence$2,
	auto_split: auto_split$2,
	or: or$2,
	manual_split: manual_split$2,
	split_rule: split_rule$2,
	after_edit_click: after_edit_click$2,
	sync_to_result: sync_to_result$2,
	please_fill_translation_title: please_fill_translation_title$2,
	please_fill_translation: please_fill_translation$2,
	translate: translate$2,
	copy_translation_or_click: copy_translation_or_click$2,
	result: result$2,
	editable_auto_sync: editable_auto_sync$2,
	audio: audio$2,
	audio_management: audio_management$2,
	paragraph: paragraph$2,
	set_start_time: set_start_time$2,
	use_prev_end_time: use_prev_end_time$2,
	minus_03s: minus_03s$2,
	end: end$2,
	set_end_time: set_end_time$2,
	edit_audio_align: edit_audio_align$2,
	play: play$2,
	status: status$2,
	sentences_not_translated: sentences_not_translated$2,
	translation_complete: translation_complete$2,
	save_and_next: save_and_next$2,
	no_translation_comparison: no_translation_comparison$2,
	adjust_audio_timeline: adjust_audio_timeline$2,
	audio_timeline_tutorial: audio_timeline_tutorial$2,
	start_time: start_time$2,
	jump_to_seconds: jump_to_seconds$2,
	use_prev_end_seconds: use_prev_end_seconds$2,
	decrease_03s: decrease_03s$2,
	increase_03s: increase_03s$2,
	record: record$2,
	end_time: end_time$2,
	audio_upload_notice: audio_upload_notice$2,
	upload_audio: upload_audio$2,
	upload_lrc: upload_lrc$2,
	name_management: name_management$2,
	name_ignore_config_desc: name_ignore_config_desc$2,
	add_name: add_name$2,
	enter_name: enter_name$2,
	collect_word: collect_word$2,
	copy: copy$2,
	copy_sentence: copy_sentence$2,
	copied: copied$2,
	copy_word: copy_word$2,
	start_from_here: start_from_here$2,
	play_sentence: play_sentence$2,
	grammar_analysis: grammar_analysis$2,
	copied_open_grammar: copied_open_grammar$2,
	youdao_translate: youdao_translate$2,
	translate_word: translate_word$2,
	translate_sentence: translate_sentence$2,
	restart_practice: restart_practice$2,
	next_article: next_article$2,
	learning_record: learning_record$2,
	total_learning_time: total_learning_time$2,
	current: current$2,
	show_questions: show_questions$2,
	explanation: explanation$2,
	encouragement_95: encouragement_95$2,
	encouragement_85: encouragement_85$2,
	encouragement_70: encouragement_70$2,
	encouragement_default: encouragement_default$2,
	daily_task_complete: daily_task_complete$2,
	weekly_record: weekly_record$2,
	study_progress: study_progress$2,
	relearn: relearn$2,
	start_from_beginning: start_from_beginning$2,
	another_group: another_group$2,
	back_to_home: back_to_home$2,
	know_word_tip: know_word_tip$2,
	press_delete_reinput: press_delete_reinput$2,
	press_space_continue: press_space_continue$2,
	shortcut: shortcut$2,
	i_know: i_know$2,
	i_dont_know: i_dont_know$2,
	phrases: phrases$2,
	synonyms: synonyms$2,
	word_root: word_root$2,
	review_wrong_words: review_wrong_words$2,
	collapse: collapse$2,
	expand: expand$2,
	minutes: minutes$2,
	time: time$2,
	errors: errors$2,
	skip_to_next_stage: skip_to_next_stage$2,
	skip_word: skip_word$2,
	toggle_dictation_mode: toggle_dictation_mode$2,
	send_failed: send_failed$2,
	send_code_failed: send_code_failed$2,
	sending: sending$2,
	send_code: send_code$2,
	agree_terms_notice: agree_terms_notice$2,
	user_agreement: user_agreement$2,
	and: and$2,
	privacy_policy: privacy_policy$2,
	important_notice: important_notice$2,
	dont_remind: dont_remind$2,
	function_desc: function_desc$2,
	qa1_a: qa1_a$2,
	qa1_q1: qa1_q1$2,
	qa1_q2: qa1_q2$2,
	qa2_a: qa2_a$2,
	qa3_a: qa3_a$2,
	qa3_q1: qa3_q1$2,
	qa3_q2: qa3_q2$2,
	qa3_q3: qa3_q3$2,
	qa4_a: qa4_a$2,
	qa4_q1: qa4_q1$2,
	qa4_q2: qa4_q2$2,
	qa5_a: qa5_a$2,
	qa5_q1: qa5_q1$2,
	qa5_q2: qa5_q2$2,
	qa5_q3: qa5_q3$2,
	qa5_q4: qa5_q4$2,
	qa6_a: qa6_a$2,
	qa7_a: qa7_a$2,
	qa7_q1: qa7_q1$2,
	qa7_q2: qa7_q2$2,
	qa7_q3: qa7_q3$2,
	qa8_a: qa8_a$2,
	qa8_q1: qa8_q1$2,
	qa8_q2: qa8_q2$2,
	qa8_q3: qa8_q3$2,
	qa9_a: qa9_a$2,
	qa9_q: qa9_q$2,
	qa10_a: qa10_a$2,
	qa10_q1: qa10_q1$2,
	qa10_q2: qa10_q2$2,
	qa11_a: qa11_a$2,
	qa11_q: qa11_q$2,
	qa12_a: qa12_a$2,
	qa12_q: qa12_q$2,
	qa13_a: qa13_a$2,
	qa13_q1: qa13_q1$2,
	qa13_q2: qa13_q2$2,
	qa13_q3: qa13_q3$2,
	qa13_q4: qa13_q4$2
};

const vi$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$2,
  about_other_channels: about_other_channels$2,
  about_thanks: about_thanks$2,
  about_ticket_feedback: about_ticket_feedback$2,
  about_wechat_feedback: about_wechat_feedback$2,
  account_placeholder: account_placeholder$2,
  accuracy_rate: accuracy_rate$2,
  add: add$2,
  add_name: add_name$2,
  add_success: add_success$2,
  add_word: add_word$2,
  adjust_audio_timeline: adjust_audio_timeline$2,
  after_edit_click: after_edit_click$2,
  agree_terms_notice: agree_terms_notice$2,
  all_resources: all_resources$2,
  allow_dictation_tip: allow_dictation_tip$2,
  allow_dictation_tip_desc: allow_dictation_tip_desc$2,
  and: and$2,
  another_group: another_group$2,
  another_round: another_round$2,
  app_desc: app_desc$2,
  app_name: app_name$2,
  apply: apply$2,
  article_management: article_management$2,
  article_settings: article_settings$2,
  articles: articles$2,
  audio: audio$2,
  audio_added_success: audio_added_success$2,
  audio_management: audio_management$2,
  audio_timeline_tutorial: audio_timeline_tutorial$2,
  audio_upload_notice: audio_upload_notice$2,
  author: author$2,
  auto_next_word: auto_next_word$2,
  auto_next_word_desc: auto_next_word_desc$2,
  auto_next_word_time: auto_next_word_time$2,
  auto_next_word_time_desc: auto_next_word_time_desc$2,
  auto_play_sentence: auto_play_sentence$2,
  auto_register_notice: auto_register_notice$2,
  auto_split: auto_split$2,
  auto_switch: auto_switch$2,
  back: back$2,
  back_to_home: back_to_home$2,
  batch_delete: batch_delete$2,
  book_list: book_list$2,
  browser_360_shortcut: browser_360_shortcut$2,
  cancel: cancel$2,
  cannot_type: cannot_type$2,
  cause_no_response: cause_no_response$2,
  change: change$2,
  change_book: change_book$2,
  change_browser_or_shortcut: change_browser_or_shortcut$2,
  change_in_settings: change_in_settings$2,
  change_order: change_order$2,
  change_progress: change_progress$2,
  check_plugins_installed: check_plugins_installed$2,
  chinese: chinese$2,
  chinese_font: chinese_font$2,
  chrome_extension: chrome_extension$2,
  clear_input_on_error: clear_input_on_error$2,
  click: click$2,
  click_here: click_here$2,
  click_here_when_done: click_here_when_done$2,
  close: close$2,
  cn_limit_no1: cn_limit_no1$2,
  cn_limit_no2: cn_limit_no2$2,
  code: code$2,
  code_login: code_login$2,
  code_placeholder: code_placeholder$2,
  collapse: collapse$2,
  collect: collect$2,
  collect_word: collect_word$2,
  community_desc: community_desc$2,
  comparison: comparison$2,
  completed_review_stage: completed_review_stage$2,
  confirm: confirm$2,
  confirm_delete_selected: confirm_delete_selected$2,
  confirm_new_password: confirm_new_password$2,
  confirm_password_placeholder: confirm_password_placeholder$2,
  conflict_notice_title: conflict_notice_title$2,
  conflict_plugin_names: conflict_plugin_names$2,
  content: content$2,
  continue_free_practice: continue_free_practice$2,
  continue_learning: continue_learning$2,
  copied: copied$2,
  copied_open_grammar: copied_open_grammar$2,
  copy: copy$2,
  copy_and_split: copy_and_split$2,
  copy_sentence: copy_sentence$2,
  copy_translation_or_click: copy_translation_or_click$2,
  copy_word: copy_word$2,
  countdown: countdown$2,
  create_book: create_book$2,
  create_dict: create_dict$2,
  create_personal_book: create_personal_book$2,
  create_personal_dict: create_personal_dict$2,
  current: current$2,
  current_progress: current_progress$2,
  custom: custom$2,
  daily_goal: daily_goal$2,
  daily_learning: daily_learning$2,
  daily_task_complete: daily_task_complete$2,
  data_management: data_management$2,
  data_saved_locally: data_saved_locally$2,
  days_to_complete: days_to_complete$2,
  decrease_03s: decrease_03s$2,
  default: vi,
  delete_key_goes_back: delete_key_goes_back$2,
  description: description$2,
  dict_list: dict_list$2,
  disable_plugin_or_exclude: disable_plugin_or_exclude$2,
  disable_practice_setting_dialog: disable_practice_setting_dialog$2,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$2,
  document: document$2,
  dont_remind: dont_remind$2,
  download_chrome: download_chrome$2,
  edge_extension: edge_extension$2,
  edit: edit$2,
  edit_and_add_to_dict: edit_and_add_to_dict$2,
  edit_audio_align: edit_audio_align$2,
  edit_book: edit_book$2,
  edit_dict: edit_dict$2,
  edit_success: edit_success$2,
  edit_word: edit_word$2,
  editable_auto_sync: editable_auto_sync$2,
  effect_sound: effect_sound$2,
  email: email$2,
  empty_placeholder: empty_placeholder$2,
  encouragement_70: encouragement_70$2,
  encouragement_85: encouragement_85$2,
  encouragement_95: encouragement_95$2,
  encouragement_default: encouragement_default$2,
  end: end$2,
  end_time: end_time$2,
  english: english$2,
  english_document: english_document$2,
  enter_name: enter_name$2,
  enter_website: enter_website$2,
  errors: errors$2,
  estimated: estimated$2,
  estimated_completion: estimated_completion$2,
  etymology: etymology$2,
  exam_color_hint: exam_color_hint$2,
  example_sentence: example_sentence$2,
  expand: expand$2,
  explanation: explanation$2,
  export_data_backup: export_data_backup$2,
  faq: faq$2,
  features: features$2,
  feedback: feedback$2,
  feedback_or_wechat: feedback_or_wechat$2,
  follow_steps_to_resolve: follow_steps_to_resolve$2,
  follow_x_account: follow_x_account$2,
  font_setting: font_setting$2,
  foreign_font: foreign_font$2,
  forgot_password: forgot_password$2,
  free_practice: free_practice$2,
  from_word: from_word$2,
  function_desc: function_desc$2,
  general_settings: general_settings$2,
  german: german$2,
  github_address: github_address$2,
  github_project: github_project$2,
  grammar_analysis: grammar_analysis$2,
  grammar_learning: grammar_learning$2,
  help: help$2,
  home_article_practice: home_article_practice$2,
  home_article_practice_desc1: home_article_practice_desc1$2,
  home_article_practice_desc2: home_article_practice_desc2$2,
  home_article_practice_desc3: home_article_practice_desc3$2,
  home_collection: home_collection$2,
  home_collection_desc1: home_collection_desc1$2,
  home_collection_desc2: home_collection_desc2$2,
  home_collection_desc3: home_collection_desc3$2,
  home_customization: home_customization$2,
  home_customization_desc1: home_customization_desc1$2,
  home_customization_desc2: home_customization_desc2$2,
  home_customization_desc3: home_customization_desc3$2,
  home_design: home_design$2,
  home_design_desc1: home_design_desc1$2,
  home_design_desc2: home_design_desc2$2,
  home_design_desc3: home_design_desc3$2,
  home_free_opensource: home_free_opensource$2,
  home_free_opensource_desc1: home_free_opensource_desc1$2,
  home_free_opensource_desc2: home_free_opensource_desc2$2,
  home_free_opensource_desc3: home_free_opensource_desc3$2,
  home_personalized: home_personalized$2,
  home_personalized_desc1: home_personalized_desc1$2,
  home_personalized_desc2: home_personalized_desc2$2,
  home_personalized_desc3: home_personalized_desc3$2,
  home_vocabulary: home_vocabulary$2,
  home_vocabulary_desc: home_vocabulary_desc$2,
  home_word_practice: home_word_practice$2,
  home_word_practice_desc1: home_word_practice_desc1$2,
  home_word_practice_desc2: home_word_practice_desc2$2,
  home_word_practice_desc3: home_word_practice_desc3$2,
  i_dont_know: i_dont_know$2,
  i_know: i_know$2,
  i_understand: i_understand$2,
  ie_not_supported: ie_not_supported$2,
  ie_use_modern_browser: ie_use_modern_browser$2,
  ignore_case: ignore_case$2,
  ignore_case_desc: ignore_case_desc$2,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$2,
  import_data_restore: import_data_restore$2,
  import_example_hint: import_example_hint$2,
  import_follow_template: import_follow_template$2,
  import_other_hint: import_other_hint$2,
  import_phrase_hint: import_phrase_hint$2,
  import_translation_hint: import_translation_hint$2,
  import_tutorial: import_tutorial$2,
  import_warning: import_warning$2,
  import_word_required: import_word_required$2,
  important_notice: important_notice$2,
  incognito_not_working: incognito_not_working$2,
  incognito_working: incognito_working$2,
  increase_03s: increase_03s$2,
  install_extension_manager: install_extension_manager$2,
  introduction: introduction$2,
  is_free: is_free$2,
  items_per_page: items_per_page$2,
  japanese: japanese$2,
  jump_to: jump_to$2,
  jump_to_seconds: jump_to_seconds$2,
  keep_default_no_show: keep_default_no_show$2,
  keyboard_no_response: keyboard_no_response$2,
  keyboard_sound: keyboard_sound$2,
  keyboard_sound_effect: keyboard_sound_effect$2,
  know_word_tip: know_word_tip$2,
  last_task: last_task$2,
  learn: learn$2,
  learned: learned$2,
  learning_progress: learning_progress$2,
  learning_record: learning_record$2,
  learning_settings: learning_settings$2,
  line_by_line: line_by_line$2,
  lines: lines$2,
  list_order_setting: list_order_setting$2,
  listening_training: listening_training$2,
  loading: loading$2,
  local_data_detected: local_data_detected$2,
  login: login$2,
  login_again: login_again$2,
  login_cancelled: login_cancelled$2,
  lrc_parse_success: lrc_parse_success$2,
  manage_books: manage_books$2,
  manage_dict: manage_dict$2,
  manual_split: manual_split$2,
  mark_mastered: mark_mastered$2,
  migrate_data: migrate_data$2,
  migrate_later_notice: migrate_later_notice$2,
  migrate_new_domain: migrate_new_domain$2,
  migrate_old_domain_notice: migrate_old_domain_notice$2,
  milliseconds: milliseconds$2,
  minus_03s: minus_03s$2,
  minutes: minutes$2,
  more: more$2,
  multiple_choice: multiple_choice$2,
  my_books: my_books$2,
  my_dictionaries: my_dictionaries$2,
  name: name$2,
  name_already_exists: name_already_exists$2,
  name_config: name_config$2,
  name_config_tip: name_config_tip$2,
  name_ignore_config_desc: name_ignore_config_desc$2,
  name_management: name_management$2,
  name_max_20_chars: name_max_20_chars$2,
  new_concept_english: new_concept_english$2,
  new_password_placeholder: new_password_placeholder$2,
  new_words: new_words$2,
  new_words_count: new_words_count$2,
  next_article: next_article$2,
  no_dict_selected: no_dict_selected$2,
  no_shortcut_set: no_shortcut_set$2,
  no_sync: no_sync$2,
  no_translation_comparison: no_translation_comparison$2,
  one_sentence_per_line: one_sentence_per_line$2,
  open_link: open_link$2,
  or: or$2,
  original_text: original_text$2,
  page_or_index: page_or_index$2,
  paragraph: paragraph$2,
  password_login: password_login$2,
  password_placeholder: password_placeholder$2,
  phone_placeholder: phone_placeholder$2,
  phonetic: phonetic$2,
  phrase: phrase$2,
  phrases: phrases$2,
  play: play$2,
  play_next_after_end: play_next_after_end$2,
  play_sentence: play_sentence$2,
  please_enter_name: please_enter_name$2,
  please_fill_complete: please_fill_complete$2,
  please_fill_content: please_fill_content$2,
  please_fill_original: please_fill_original$2,
  please_fill_original_title: please_fill_original_title$2,
  please_fill_title: please_fill_title$2,
  please_fill_translation: please_fill_translation$2,
  please_fill_translation_title: please_fill_translation_title$2,
  please_paste_original: please_paste_original$2,
  please_select: please_select$2,
  please_select_dict: please_select_dict$2,
  plugins_intercept_keyboard: plugins_intercept_keyboard$2,
  practice: practice$2,
  press_delete_reinput: press_delete_reinput$2,
  press_key_to_set: press_key_to_set$2,
  press_space_continue: press_space_continue$2,
  privacy_policy: privacy_policy$2,
  pronunciation_accent: pronunciation_accent$2,
  pronunciation_accent_desc: pronunciation_accent_desc$2,
  qa10_a: qa10_a$2,
  qa10_q1: qa10_q1$2,
  qa10_q2: qa10_q2$2,
  qa11_a: qa11_a$2,
  qa11_q: qa11_q$2,
  qa12_a: qa12_a$2,
  qa12_q: qa12_q$2,
  qa13_a: qa13_a$2,
  qa13_q1: qa13_q1$2,
  qa13_q2: qa13_q2$2,
  qa13_q3: qa13_q3$2,
  qa13_q4: qa13_q4$2,
  qa1_a: qa1_a$2,
  qa1_q1: qa1_q1$2,
  qa1_q2: qa1_q2$2,
  qa2_a: qa2_a$2,
  qa3_a: qa3_a$2,
  qa3_q1: qa3_q1$2,
  qa3_q2: qa3_q2$2,
  qa3_q3: qa3_q3$2,
  qa4_a: qa4_a$2,
  qa4_q1: qa4_q1$2,
  qa4_q2: qa4_q2$2,
  qa5_a: qa5_a$2,
  qa5_q1: qa5_q1$2,
  qa5_q2: qa5_q2$2,
  qa5_q3: qa5_q3$2,
  qa5_q4: qa5_q4$2,
  qa6_a: qa6_a$2,
  qa7_a: qa7_a$2,
  qa7_q1: qa7_q1$2,
  qa7_q2: qa7_q2$2,
  qa7_q3: qa7_q3$2,
  qa8_a: qa8_a$2,
  qa8_q1: qa8_q1$2,
  qa8_q2: qa8_q2$2,
  qa8_q3: qa8_q3$2,
  qa9_a: qa9_a$2,
  qa9_q: qa9_q$2,
  qq_group: qq_group$2,
  qq_qrcode: qq_qrcode$2,
  question: question$2,
  random_all: random_all$2,
  random_current_page: random_current_page$2,
  random_review: random_review$2,
  recommend: recommend$2,
  record: record$2,
  register: register$2,
  register_account: register_account$2,
  register_new_account: register_new_account$2,
  related_words: related_words$2,
  relearn: relearn$2,
  repeat_count: repeat_count$2,
  reset_password: reset_password$2,
  resource_sharing: resource_sharing$2,
  resources_from_internet: resources_from_internet$2,
  restart_learning: restart_learning$2,
  restart_practice: restart_practice$2,
  restore_default: restore_default$2,
  result: result$2,
  return_home: return_home$2,
  reverse_all: reverse_all$2,
  reverse_current_page: reverse_current_page$2,
  review: review$2,
  review_complete: review_complete$2,
  review_last: review_last$2,
  review_previous: review_previous$2,
  review_ratio: review_ratio$2,
  review_ratio_desc: review_ratio_desc$2,
  review_ratio_notice_1: review_ratio_notice_1$2,
  review_ratio_notice_2: review_ratio_notice_2$2,
  review_ratio_tooltip: review_ratio_tooltip$2,
  review_wrong_words: review_wrong_words$2,
  save: save$2,
  save_and_next: save_and_next$2,
  scan_success: scan_success$2,
  search: search$2,
  seconds: seconds$2,
  select_dict: select_dict$2,
  select_dict_to_start: select_dict_to_start$2,
  select_from_dict: select_from_dict$2,
  send_code: send_code$2,
  send_code_failed: send_code_failed$2,
  send_email: send_email$2,
  send_failed: send_failed$2,
  sending: sending$2,
  sentences_not_translated: sentences_not_translated$2,
  set_end_time: set_end_time$2,
  set_password_placeholder: set_password_placeholder$2,
  set_start_time: set_start_time$2,
  setting: setting$2,
  settings: settings$2,
  shortcut: shortcut$2,
  shortcut_key: shortcut_key$2,
  shortcut_settings: shortcut_settings$2,
  show_prev_next_word: show_prev_next_word$2,
  show_prev_next_word_desc: show_prev_next_word_desc$2,
  show_questions: show_questions$2,
  simple_word_filter: simple_word_filter$2,
  simple_word_filter_desc: simple_word_filter_desc$2,
  simple_word_list: simple_word_list$2,
  single_line: single_line$2,
  skip_to_next_stage: skip_to_next_stage$2,
  skip_word: skip_word$2,
  smart_learning: smart_learning$2,
  sound_effect: sound_effect$2,
  source_language: source_language$2,
  speed: speed$2,
  split_rule: split_rule$2,
  split_sentence: split_sentence$2,
  start: start$2,
  start_article_practice: start_article_practice$2,
  start_daily: start_daily$2,
  start_from_beginning: start_from_beginning$2,
  start_from_here: start_from_here$2,
  start_learning: start_learning$2,
  start_time: start_time$2,
  start_word_practice: start_word_practice$2,
  status: status$2,
  studied: studied$2,
  study_duration: study_duration$2,
  study_progress: study_progress$2,
  study_record: study_record$2,
  submit_exam: submit_exam$2,
  suitable_for: suitable_for$2,
  switch_display_mode: switch_display_mode$2,
  sync: sync$2,
  sync_data: sync_data$2,
  sync_failed: sync_failed$2,
  sync_success: sync_success$2,
  sync_to_account_question: sync_to_account_question$2,
  sync_to_result: sync_to_result$2,
  syncing: syncing$2,
  synonym: synonym$2,
  synonyms: synonyms$2,
  tap_allow_in_wechat: tap_allow_in_wechat$2,
  target_language: target_language$2,
  template_download: template_download$2,
  test: test$2,
  this_week_record: this_week_record$2,
  time: time$2,
  title: title$2,
  to_manage_extensions: to_manage_extensions$2,
  today_study_time: today_study_time$2,
  today_task: today_task$2,
  today_task_complete: today_task_complete$2,
  toggle_dictation_mode: toggle_dictation_mode$2,
  toggle_theme: toggle_theme$2,
  toggle_translation: toggle_translation$2,
  total: total$2,
  total_items: total_items$2,
  total_learning_time: total_learning_time$2,
  total_study_days: total_study_days$2,
  total_study_time: total_study_time$2,
  total_words: total_words$2,
  translate: translate$2,
  translate_sentence: translate_sentence$2,
  translate_word: translate_word$2,
  translation: translation$2,
  translation_complete: translation_complete$2,
  try_incognito_mode: try_incognito_mode$2,
  tv_movie: tv_movie$2,
  twitter: twitter$2,
  two: two$2,
  uk_accent: uk_accent$2,
  uncollect: uncollect$2,
  unmark_mastered: unmark_mastered$2,
  update_log: update_log$2,
  upload_audio: upload_audio$2,
  upload_lrc: upload_lrc$2,
  us_accent: us_accent$2,
  usage_guide: usage_guide$2,
  use_prev_end_seconds: use_prev_end_seconds$2,
  use_prev_end_time: use_prev_end_time$2,
  user_agreement: user_agreement$2,
  volume: volume$2,
  wait_translation: wait_translation$2,
  warm_tips: warm_tips$2,
  wechat_group: wechat_group$2,
  wechat_qrcode: wechat_qrcode$2,
  wechat_scan_login: wechat_scan_login$2,
  weekly_record: weekly_record$2,
  weekly_study_record: weekly_study_record$2,
  where_is_data: where_is_data$2,
  word: word$2,
  word_auto_pronunciation: word_auto_pronunciation$2,
  word_import_template: word_import_template$2,
  word_list: word_list$2,
  word_repeat_setting: word_repeat_setting$2,
  word_root: word_root$2,
  word_settings: word_settings$2,
  words: words$2,
  words_comma_separated: words_comma_separated$2,
  words_count: words_count$2,
  xiaohongshu: xiaohongshu$2,
  xiaohongshu_desc: xiaohongshu_desc$2,
  xiaohongshu_qrcode: xiaohongshu_qrcode$2,
  youdao_translate: youdao_translate$2
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc$1 = "Belajar bahasa Inggris, satu ketukan setiap waktu, alat latihan sumber terbuka";
var app_name$1 = "Type Words";
var start_word_practice$1 = "Mulai latihan kata";
var start_article_practice$1 = "Mulai latihan artikel";
var home_word_practice$1 = "Latihan kata";
var home_word_practice_desc1$1 = "Mode: Ketik-ikut/Dikte/Tes mandiri/Hafalan";
var home_word_practice_desc2$1 = "Pembelajaran cerdas: Perencanaan cerdas";
var home_word_practice_desc3$1 = "Belajar bebas: Tanpa batasan";
var home_article_practice$1 = "Latihan artikel";
var home_article_practice_desc1$1 = "Buku bawaan, tambahkan artikel";
var home_article_practice_desc2$1 = "Mode ganda: ketik-ikut + hafalan";
var home_article_practice_desc3$1 = "Mendukung mendengarkan sambil menghafal";
var home_collection$1 = "Favorit, Kata salah, Dikuasai";
var home_collection_desc1$1 = "Input salah otomatis ditambahkan";
var home_collection_desc2$1 = "Tambahkan ke dikuasai, lewati nanti";
var home_collection_desc3$1 = "Tambahkan ke favorit untuk ulasan";
var home_vocabulary$1 = "Kosakata besar";
var home_vocabulary_desc$1 = "Kosakata dari dasar hingga lanjutan";
var home_free_opensource$1 = "Gratis dan sumber terbuka";
var home_free_opensource_desc1$1 = "Sepenuhnya sumber terbuka";
var home_free_opensource_desc2$1 = "Gratis untuk digunakan";
var home_free_opensource_desc3$1 = "Penerapan pribadi";
var home_customization$1 = "Sangat dapat disesuaikan";
var home_customization_desc1$1 = "Efek suara keyboard yang kaya";
var home_customization_desc2$1 = "Tombol pintas yang dapat disesuaikan";
var home_customization_desc3$1 = "Opsi pengaturan yang sangat dapat disesuaikan";
var home_design$1 = "Sederhana dan efisien";
var home_design_desc1$1 = "Desain sederhana, UI modern";
var home_design_desc2$1 = "Antarmuka bersih, operasi sederhana";
var home_design_desc3$1 = "Tidak ada paksaan mengikuti platform";
var home_personalized$1 = "Pembelajaran yang dipersonalisasi";
var home_personalized_desc1$1 = "Tambahkan kamus dan artikel dengan bebas";
var home_personalized_desc2$1 = "Sesuaikan rencana belajar";
var home_personalized_desc3$1 = "Beberapa strategi belajar dan ulasan";
var cn_limit_no1$1 = "川公网安备51015602001426号";
var cn_limit_no2$1 = "蜀ICP备2025157466号-2";
var setting$1 = "Pengaturan";
var edit$1 = "Edit";
var cancel$1 = "Batal";
var confirm$1 = "Konfirmasi";
var save$1 = "Simpan";
var close$1 = "Tutup";
var search$1 = "Cari";
var more$1 = "Lebih";
var loading$1 = "Memuat";
var introduction$1 = "Pengantar";
var learn$1 = "Belajar";
var practice$1 = "Latihan";
var test$1 = "Tes";
var feedback$1 = "Umpan balik";
var document$1 = "Sumber daya";
var help$1 = "Bantuan";
var about$1 = "Tentang";
var login$1 = "Masuk";
var register$1 = "Daftar";
var register_account$1 = "Daftar akun";
var register_new_account$1 = "Daftar akun baru";
var code_login$1 = "Login dengan kode";
var password_login$1 = "Login dengan kata sandi";
var phone_placeholder$1 = "Silakan masukkan nomor telepon";
var code_placeholder$1 = "Silakan masukkan kode verifikasi";
var account_placeholder$1 = "Masukkan telepon/email";
var password_placeholder$1 = "Silakan masukkan kata sandi";
var auto_register_notice$1 = "Telepon yang belum terdaftar akan didaftarkan secara otomatis";
var forgot_password$1 = "Lupa kata sandi?";
var reset_password$1 = "Reset kata sandi";
var set_password_placeholder$1 = "Silakan atur kata sandi";
var confirm_password_placeholder$1 = "Silakan konfirmasi kata sandi";
var new_password_placeholder$1 = "Masukkan kata sandi baru";
var confirm_new_password$1 = "Konfirmasi kata sandi baru";
var wechat_scan_login$1 = "Login scan WeChat";
var scan_success$1 = "Scan berhasil";
var tap_allow_in_wechat$1 = "Ketuk izinkan di WeChat untuk login";
var login_cancelled$1 = "Login dibatalkan";
var login_again$1 = "Login lagi";
var sync_data$1 = "Sinkronisasi data";
var local_data_detected$1 = "Data lokal terdeteksi";
var sync_to_account_question$1 = "Sinkronkan ke akun?";
var no_sync$1 = "Jangan sinkronkan";
var sync$1 = "Sinkronisasi";
var syncing$1 = "Menyinkronkan";
var sync_failed$1 = "Sinkronisasi gagal";
var sync_success$1 = "Sinkronisasi berhasil";
var enter_website$1 = "Masuk ke situs";
var general_settings$1 = "Pengaturan umum";
var word_settings$1 = "Pengaturan kata";
var article_settings$1 = "Pengaturan artikel";
var data_management$1 = "Manajemen data";
var shortcut_settings$1 = "Pengaturan pintasan";
var update_log$1 = "Log pembaruan";
var shortcut_key$1 = "Pintasan (klik untuk mengubah)";
var no_shortcut_set$1 = "Pintasan belum diatur";
var press_key_to_set$1 = "Tekan tombol untuk mengatur";
var click_here_when_done$1 = "Klik di sini setelah selesai";
var restore_default$1 = "Kembalikan default";
var data_saved_locally$1 = "Semua data disimpan secara lokal di browser";
var export_data_backup$1 = "Ekspor cadangan data (ZIP)";
var import_data_restore$1 = "Impor pemulihan data";
var import_warning$1 = "Impor akan menimpa semua data";
var words$1 = "Kata";
var no_dict_selected$1 = "Tidak ada kamus yang dipilih";
var select_dict_to_start$1 = "Silakan pilih kamus untuk memulai";
var select_dict$1 = "Pilih kamus";
var change_progress$1 = "Ubah kemajuan";
var estimated_completion$1 = "Perkiraan selesai";
var current_progress$1 = "Kemajuan saat ini";
var learned$1 = "Sudah dipelajari";
var completed_review_stage$1 = "Selesai, memasuki tahap ulasan";
var today_task$1 = "Tugas hari ini";
var last_task$1 = "Tugas terakhir";
var word_list$1 = "Daftar kata";
var daily_goal$1 = "Target harian";
var words_count$1 = "kata";
var change$1 = "Ubah";
var new_words_count$1 = "Kata baru";
var review_last$1 = "Ulasan terakhir";
var review_previous$1 = "Ulasan sebelumnya";
var start_learning$1 = "Mulai belajar";
var continue_learning$1 = "Lanjutkan belajar";
var free_practice$1 = "Latihan bebas";
var continue_free_practice$1 = "Lanjutkan latihan bebas";
var smart_learning$1 = "Pembelajaran cerdas";
var review$1 = "Ulasan";
var random_review$1 = "Ulasan acak";
var my_dictionaries$1 = "Kamus saya";
var manage_dict$1 = "Kelola kamus";
var create_personal_dict$1 = "Buat kamus pribadi";
var recommend$1 = "Rekomendasi";
var articles$1 = "Artikel";
var this_week_record$1 = "Catatan minggu ini";
var change_book$1 = "Ganti";
var today_study_time$1 = "Waktu belajar hari ini";
var total_study_days$1 = "Total hari belajar";
var total_study_time$1 = "Total waktu belajar";
var my_books$1 = "Buku saya";
var manage_books$1 = "Kelola buku";
var create_personal_book$1 = "Buat buku pribadi";
var article_management$1 = "Manajemen artikel";
var toggle_translation$1 = "Toggle terjemahan";
var switch_display_mode$1 = "Ganti mode tampilan";
var line_by_line$1 = "Baris per baris";
var single_line$1 = "Baris tunggal";
var comparison$1 = "Perbandingan";
var question$1 = "Pertanyaan";
var study_record$1 = "Catatan belajar";
var play_next_after_end$1 = "Putar selanjutnya setelah selesai";
var create_book$1 = "Buat buku";
var edit_book$1 = "Edit buku";
var dict_list$1 = "Daftar kamus";
var book_list$1 = "Daftar buku";
var word$1 = "Kata";
var phonetic$1 = "Fonetik";
var translation$1 = "Terjemahan";
var example_sentence$1 = "Kalimat contoh";
var phrase$1 = "Frasa";
var synonym$1 = "Sinonim";
var related_words$1 = "Kata terkait";
var etymology$1 = "Etimologi";
var add_word$1 = "Tambah kata";
var edit_word$1 = "Edit kata";
var create_dict$1 = "Buat kamus";
var edit_dict$1 = "Edit kamus";
var faq$1 = "FAQ";
var is_free$1 = "Apakah situs ini gratis?";
var cannot_type$1 = "Tidak bisa mengetik, keyboard tidak merespon?";
var where_is_data$1 = "Di mana datanya? Bagaimana menggunakan di beberapa perangkat?";
var resource_sharing$1 = "Berbagi sumber daya";
var all_resources$1 = "Semua sumber daya";
var new_concept_english$1 = "Konsep Baru Bahasa Inggris";
var tv_movie$1 = "TV/Film";
var grammar_learning$1 = "Belajar tata bahasa";
var listening_training$1 = "Latihan mendengarkan";
var warm_tips$1 = "Tips hangat";
var resources_from_internet$1 = "Semua sumber daya dikumpulkan dari internet, hanya untuk pembelajaran";
var toggle_theme$1 = "Ganti tema";
var english_document$1 = "Sumber daya bahasa Inggris";
var empty_placeholder$1 = "Kosong~";
var custom$1 = "Kustom";
var back$1 = "Kembali";
var total_items$1 = "item";
var batch_delete$1 = "Hapus massal";
var confirm_delete_selected$1 = "Konfirmasi hapus semua yang dipilih?";
var change_order$1 = "Ubah urutan";
var list_order_setting$1 = "Pengaturan urutan daftar";
var reverse_current_page$1 = "Balik halaman saat ini";
var reverse_all$1 = "Balik semua";
var random_current_page$1 = "Acak halaman saat ini";
var random_all$1 = "Acak semua";
var apply$1 = "Terapkan";
var add$1 = "Tambah";
var collect$1 = "Favorit";
var uncollect$1 = "Batal favorit";
var mark_mastered$1 = "Tandai sebagai dikuasai";
var unmark_mastered$1 = "Hapus tanda dikuasai";
var about_thanks$1 = "Terima kasih telah menggunakan proyek ini! Ini adalah proyek open source, gratis digunakan. Jika bermanfaat, beri kami bintang di GitHub!";
var github_address$1 = "GitHub:";
var about_wechat_feedback$1 = "Umpan Balik WeChat:";
var about_ticket_feedback$1 = "Umpan Balik Tiket:";
var about_other_channels$1 = "Saluran Lain:";
var wait_translation$1 = "Harap tunggu terjemahan selesai";
var migrate_data$1 = "Migrasi Data";
var migrate_new_domain$1 = "Situs web ini memiliki domain baru";
var migrate_old_domain_notice$1 = "Domain lama akan dihentikan. Karena batasan keamanan browser, data tidak dapat dibagikan antar situs. Silakan transfer data Anda secara manual.";
var migrate_later_notice$1 = "Jika Anda tidak ingin migrasi sekarang, tutup dialog ini dan migrasi nanti di \"Pengaturan\" -> \"Manajemen Data\"";
var author$1 = "Penulis:";
var features$1 = "Fitur:";
var suitable_for$1 = "Cocok untuk:";
var open_link$1 = "Buka Tautan";
var qq_group$1 = "Grup QQ";
var xiaohongshu$1 = "Xiaohongshu";
var follow_x_account$1 = "Ikuti akun X saya {x_account}";
var twitter$1 = "Twitter";
var send_email$1 = "Kirim email ke {email}";
var email$1 = "Email";
var xiaohongshu_desc$1 = "Ikuti kami di Xiaohongshu untuk mendapatkan pembaruan terbaru dari tim pengembangan, bagikan pengalaman dan saran Anda";
var xiaohongshu_qrcode$1 = "Kode QR Xiaohongshu";
var community_desc$1 = "Bergabunglah dengan komunitas kami untuk berkomunikasi dengan tim pengembangan, bagikan pengalaman dan saran Anda";
var qq_qrcode$1 = "Kode QR Grup QQ";
var wechat_group$1 = "Grup WeChat";
var wechat_qrcode$1 = "Kode QR Grup WeChat";
var github_project$1 = "Proyek GitHub";
var ie_not_supported$1 = "Browser IE tidak didukung";
var ie_use_modern_browser$1 = "Type Words dibangun dengan teknologi modern, silakan gunakan Chrome, Edge, Firefox atau browser modern lainnya";
var download_chrome$1 = "Unduh Chrome";
var i_understand$1 = "Saya mengerti";
var ignore_case$1 = "Abaikan huruf besar/kecil";
var ignore_case_desc$1 = "Saat diaktifkan, input tidak peka huruf besar/kecil";
var allow_dictation_tip$1 = "Izinkan petunjuk dalam mode dikte";
var allow_dictation_tip_desc$1 = "Saat diaktifkan, Anda dapat mengarahkan kursor ke kata atau menekan tombol pintasan untuk menampilkan jawaban yang benar";
var simple_word_filter$1 = "Filter Kata Sederhana";
var simple_word_filter_desc$1 = "Saat diaktifkan, kata sederhana akan dikecualikan dari latihan; kata sederhana tidak akan dihitung dalam statistik artikel";
var simple_word_list$1 = "Daftar Kata Sederhana";
var words_comma_separated$1 = "Beberapa kata dipisahkan dengan koma";
var sound_effect$1 = "Efek Suara";
var pronunciation_accent$1 = "Aksen Pengucapan";
var pronunciation_accent_desc$1 = "Hanya memengaruhi pengucapan kata; artikel menggunakan aksen Amerika";
var please_select$1 = "Silakan pilih";
var us_accent$1 = "Amerika";
var uk_accent$1 = "Inggris";
var keyboard_sound$1 = "Suara Tombol";
var keyboard_sound_effect$1 = "Efek Suara Tombol";
var volume$1 = "Volume";
var show_prev_next_word$1 = "Tampilkan Kata Sebelumnya/Berikutnya";
var show_prev_next_word_desc$1 = "Saat diaktifkan, kata sebelumnya dan berikutnya akan ditampilkan di atas selama latihan";
var disable_practice_setting_dialog$1 = "Jangan tampilkan dialog pengaturan latihan secara default";
var disable_practice_setting_dialog_desc$1 = "Di halaman detail kamus, apakah akan menampilkan dialog pengaturan latihan setelah mengklik tombol belajar";
var clear_input_on_error$1 = "Hapus input saat error";
var word_repeat_setting$1 = "Pengaturan Pengulangan Kata";
var repeat_count$1 = "Jumlah Pengulangan";
var review_ratio$1 = "Rasio Ulasan";
var review_ratio_desc$1 = "Rasio kata ulasan ke kata baru. Perubahan berlaku di sesi belajar berikutnya";
var word_auto_pronunciation$1 = "Pengucapan Otomatis";
var speed$1 = "Kecepatan";
var effect_sound$1 = "Suara Efek (suara error dan selesai)";
var auto_switch$1 = "Beralih Otomatis";
var auto_next_word$1 = "Kata Berikutnya Otomatis";
var auto_next_word_desc$1 = "Hanya berfungsi dalam mode ikuti. Mode dikte, tes mandiri, dan ejaan memerlukan menekan spasi untuk melanjutkan";
var auto_next_word_time$1 = "Waktu Kata Berikutnya Otomatis";
var auto_next_word_time_desc$1 = "Waktu untuk beralih otomatis ke kata berikutnya setelah mengetik dengan benar";
var milliseconds$1 = "md";
var font_setting$1 = "Pengaturan Font";
var foreign_font$1 = "Font Bahasa Asing";
var chinese_font$1 = "Font Cina";
var auto_play_sentence$1 = "Putar Kalimat Otomatis";
var ignore_symbols_numbers_names$1 = "Abaikan simbol, angka, dan nama saat mengetik";
var settings$1 = "Pengaturan";
var please_select_dict$1 = "Silakan pilih kamus terlebih dahulu";
var learning_settings$1 = "Pengaturan Pembelajaran";
var total$1 = "Total";
var estimated$1 = "Perkiraan";
var days_to_complete$1 = "hari untuk menyelesaikan";
var from_word$1 = "Mulai dari kata";
var start_daily$1 = ", harian";
var new_words$1 = "kata baru";
var review_ratio_tooltip$1 = "Rasio kata ulasan ke kata baru";
var review_ratio_notice_1$1 = "Ketika pembelajaran belum selesai, jumlah ulasan dibuat sesuai rasio yang ditetapkan. Jika 0, tidak ada ulasan";
var review_ratio_notice_2$1 = "Setelah menyelesaikan pembelajaran, jumlah kata baru ditetapkan 0, jumlah ulasan dibuat sesuai rasio (jika < 1, dihitung sebagai 1)";
var daily_learning$1 = "Pembelajaran Harian";
var learning_progress$1 = "Kemajuan Pembelajaran";
var select_from_dict$1 = "Pilih posisi awal dari kamus";
var change_in_settings$1 = "Dapat diubah di halaman pengaturan";
var keep_default_no_show$1 = "Pertahankan default, jangan tampilkan lagi";
var review_complete$1 = "Ulasan Selesai";
var today_task_complete$1 = "Tugas hari ini selesai";
var study_duration$1 = "Durasi Belajar";
var accuracy_rate$1 = "Akurasi";
var weekly_study_record$1 = "Catatan Belajar Mingguan";
var studied$1 = "Dipelajari";
var total_words$1 = "Total Kata";
var restart_learning$1 = "Mulai Ulang Pembelajaran";
var another_round$1 = "Ronde Lagi";
var return_home$1 = "Kembali ke Beranda";
var import_tutorial$1 = "Tutorial Impor";
var import_follow_template$1 = "Silakan isi data sesuai format template";
var import_word_required$1 = "Field kata wajib diisi, field lainnya opsional";
var import_translation_hint$1 = "Terjemahan: satu terjemahan per baris, kelas kata terlebih dahulu, lalu konten (mis. n.cancel); beberapa terjemahan di baris terpisah";
var import_example_hint$1 = "Contoh: satu baris untuk asli, satu baris untuk terjemahan; beberapa contoh di baris terpisah";
var import_phrase_hint$1 = "Frasa: satu baris untuk asli, satu baris untuk terjemahan; beberapa frasa di baris terpisah";
var two$1 = "dua";
var lines$1 = "baris";
var import_other_hint$1 = "Sinonim, kata akar, etimologi: silakan pergi ke kamus resmi, lalu edit kata untuk melihat formatnya";
var template_download$1 = "Unduh Template";
var word_import_template$1 = "Template Impor Kata";
var conflict_notice_title$1 = "Jika Anda menemukan masalah berikut saat menggunakan:";
var keyboard_no_response$1 = "Keyboard tidak merespons";
var check_plugins_installed$1 = "Silakan periksa apakah Anda telah menginstal";
var conflict_plugin_names$1 = "\"Pengontrol Kecepatan Video\" \"Vim\" \"Penambah Audio/Video\" \"Pembantu Kursus Online\"";
var plugins_intercept_keyboard$1 = "dan plugin/skrip lain yang mengintersep event keyboard,";
var cause_no_response$1 = "yang menyebabkan tidak ada respons saat berlatih di situs web ini";
var follow_steps_to_resolve$1 = ", ikuti langkah-langkah ini untuk mengatasi konflik:";
var try_incognito_mode$1 = "Buka situs web ini dalam mode penyamaran browser dan periksa apakah Anda dapat mengetik dengan normal?";
var incognito_not_working$1 = "Tidak bisa mengetik dalam mode penyamaran,";
var click_here$1 = "klik di sini";
var feedback_or_wechat$1 = "untuk memberikan umpan balik, atau bergabung dengan grup WeChat:";
var incognito_working$1 = "Bisa mengetik dalam mode penyamaran, jadi ini adalah konflik plugin/skrip";
var disable_plugin_or_exclude$1 = "Nonaktifkan sementara plugin/skrip yang terkait, atau kecualikan situs web ini di pengaturan plugin/skrip";
var install_extension_manager$1 = "Anda dapat menginstal ini";
var chrome_extension$1 = "ekstensi (versi Chrome, memerlukan VPN)";
var edge_extension$1 = "ekstensi (versi Edge, tidak perlu VPN)";
var to_manage_extensions$1 = "untuk mengaktifkan/menonaktifkan ekstensi lain dengan cepat";
var delete_key_goes_back$1 = "Menekan tombol hapus kembali ke halaman sebelumnya";
var browser_360_shortcut$1 = "Di Browser 360, pintasan \"tombol hapus kembali ke halaman sebelumnya\" diatur secara default";
var change_browser_or_shortcut$1 = "Ganti browser, atau hapus pintasan default 360: cari \"kembali\" di pengaturan browser";
var please_enter_name$1 = "Silakan masukkan nama";
var name_max_20_chars$1 = "Nama tidak boleh melebihi 20 karakter";
var name_already_exists$1 = "Nama sudah ada!";
var add_success$1 = "Berhasil ditambahkan";
var edit_success$1 = "Berhasil diubah";
var edit_and_add_to_dict$1 = "Berhasil diubah dan ditambahkan ke kamus saya";
var please_fill_complete$1 = "Silakan isi dengan lengkap";
var name$1 = "Nama";
var description$1 = "Deskripsi";
var source_language$1 = "Bahasa Sumber";
var target_language$1 = "Bahasa Target";
var english$1 = "Inggris";
var german$1 = "Jerman";
var japanese$1 = "Jepang";
var code$1 = "Kode";
var chinese$1 = "Cina";
var multiple_choice$1 = "Pilihan Ganda";
var start$1 = "Mulai";
var countdown$1 = "Hitung Mundur";
var seconds$1 = "detik";
var submit_exam$1 = "Kirim Ujian";
var exam_color_hint$1 = "Merah muda: salah, Merah tua: tidak dipilih, Hijau: benar";
var items_per_page$1 = "item/halaman";
var jump_to$1 = "Lompat ke";
var page_or_index$1 = "halaman/indeks";
var please_fill_original$1 = "Silakan isi teks asli!";
var please_fill_title$1 = "Silakan isi judul!";
var please_fill_content$1 = "Silakan isi konten!";
var audio_added_success$1 = "Audio berhasil ditambahkan";
var lrc_parse_success$1 = "File LRC berhasil diurai";
var original_text$1 = "Teks Asli";
var title$1 = "Judul";
var please_fill_original_title$1 = "Silakan isi judul asli";
var content$1 = "Konten";
var one_sentence_per_line$1 = "Satu kalimat per baris, sisakan baris kosong antar paragraf";
var name_config_tip$1 = "Setelah mengkonfigurasi nama, nama akan diabaikan secara otomatis selama latihan (opsional, diaktifkan secara default)";
var name_config$1 = "Konfigurasi Nama";
var please_paste_original$1 = "Silakan tempel teks asli";
var usage_guide$1 = "Panduan Penggunaan";
var copy_and_split$1 = "Salin teks asli, lalu pisahkan menjadi kalimat";
var click$1 = "Klik";
var split_sentence$1 = "Pisahkan Kalimat";
var auto_split$1 = "tombol untuk membagi otomatis";
var or$1 = "atau";
var manual_split$1 = "edit manual untuk membagi";
var split_rule$1 = "Aturan pemisahan: satu kalimat per baris, baris kosong antar paragraf";
var after_edit_click$1 = "Setelah mengedit, klik";
var sync_to_result$1 = "tombol untuk menyinkronkan ke panel hasil kiri";
var please_fill_translation_title$1 = "Silakan isi judul terjemahan";
var please_fill_translation$1 = "Silakan isi terjemahan";
var translate$1 = "Terjemahan";
var copy_translation_or_click$1 = "Tempel terjemahan, atau klik jika tidak ada";
var result$1 = "Hasil";
var editable_auto_sync$1 = "Semua dapat diedit, klik tombol terapkan untuk sinkronisasi otomatis setelah mengedit";
var audio$1 = "Audio";
var audio_management$1 = "Manajemen Audio";
var paragraph$1 = "Paragraf";
var set_start_time$1 = "Atur Waktu Mulai";
var use_prev_end_time$1 = "Gunakan waktu akhir kalimat sebelumnya";
var minus_03s$1 = "Kurangi 0,3d";
var end$1 = "Akhir";
var set_end_time$1 = "Atur Waktu Akhir";
var edit_audio_align$1 = "Edit Penyelarasan Audio";
var play$1 = "Putar";
var status$1 = "Status";
var sentences_not_translated$1 = "{count} kalimat tidak diterjemahkan!";
var translation_complete$1 = "Terjemahan selesai!";
var save_and_next$1 = "Simpan dan Tambah Berikutnya";
var no_translation_comparison$1 = "Tidak ada perbandingan terjemahan";
var adjust_audio_timeline$1 = "Sesuaikan Timeline Audio";
var audio_timeline_tutorial$1 = "Tutorial: Klik putar, ketika audio mencapai awal kalimat, klik rekam waktu mulai; ketika mencapai akhir, klik rekam waktu akhir";
var start_time$1 = "Waktu Mulai";
var jump_to_seconds$1 = "Lompat ke {seconds}d";
var use_prev_end_seconds$1 = "Gunakan waktu akhir kalimat sebelumnya: {seconds}d";
var decrease_03s$1 = "Kurangi 0,3d";
var increase_03s$1 = "Tambah 0,3d";
var record$1 = "Rekam";
var end_time$1 = "Waktu Akhir";
var audio_upload_notice$1 = "1. File yang diunggah disimpan secara lokal, data akan hilang saat berganti komputer, harap backup tepat waktu\n2. Mendukung mp3, wav, m4a dan format audio umum lainnya";
var upload_audio$1 = "Unggah Audio";
var upload_lrc$1 = "Unggah File LRC";
var name_management$1 = "Manajemen Nama";
var name_ignore_config_desc$1 = "Konfigurasi nama yang akan diabaikan, nama-nama ini akan dilewati secara otomatis selama latihan (opsional, diaktifkan secara default)";
var add_name$1 = "Tambah Nama";
var enter_name$1 = "Masukkan nama";
var collect_word$1 = "Kumpulkan Kata";
var copy$1 = "Salin";
var copy_sentence$1 = "Salin Kalimat";
var copied$1 = "Disalin";
var copy_word$1 = "Salin Kata";
var start_from_here$1 = "Mulai Dari Sini";
var play_sentence$1 = "Putar Kalimat";
var grammar_analysis$1 = "Analisis Tata Bahasa";
var copied_open_grammar$1 = "Disalin! Membuka situs analisis tata bahasa!";
var youdao_translate$1 = "Kamus Youdao";
var translate_word$1 = "Terjemahkan Kata";
var translate_sentence$1 = "Terjemahkan Kalimat";
var restart_practice$1 = "Mulai Ulang Latihan";
var next_article$1 = "Artikel Berikutnya";
var learning_record$1 = "Catatan Pembelajaran";
var total_learning_time$1 = "Total Waktu Belajar";
var current$1 = "Saat Ini";
var show_questions$1 = "Tampilkan Pertanyaan";
var explanation$1 = "Penjelasan";
var encouragement_95$1 = "Luar biasa! Pertahankan!";
var encouragement_85$1 = "Kerja bagus, terus semangat!";
var encouragement_70$1 = "Skor bagus, terus maju!";
var encouragement_default$1 = "Setiap latihan adalah kemajuan, terus maju!";
var daily_task_complete$1 = "Tugas Harian Selesai";
var weekly_record$1 = "Catatan Belajar Mingguan";
var study_progress$1 = "Kemajuan Belajar";
var relearn$1 = "Pelajari Ulang";
var start_from_beginning$1 = "Mulai Dari Awal";
var another_group$1 = "Grup Lain";
var back_to_home$1 = "Kembali ke Beranda";
var know_word_tip$1 = "Jika Anda salah memilih \"Saya tahu\", tekan tombol hapus untuk memilih ulang!";
var press_delete_reinput$1 = "Silakan tekan tombol hapus untuk memasukkan ulang";
var press_space_continue$1 = "Silakan tekan spasi untuk melanjutkan";
var shortcut$1 = "Pintasan";
var i_know$1 = "Saya Tahu";
var i_dont_know$1 = "Saya Tidak Tahu";
var phrases$1 = "Frasa";
var synonyms$1 = "Sinonim";
var word_root$1 = "Akar Kata";
var review_wrong_words$1 = "Tinjau Kata Salah";
var collapse$1 = "Ciutkan";
var expand$1 = "Perluas";
var minutes$1 = "menit";
var time$1 = "Waktu";
var errors$1 = "Kesalahan";
var skip_to_next_stage$1 = "Lewati ke Tahap Berikutnya";
var skip_word$1 = "Lewati Kata";
var toggle_dictation_mode$1 = "Beralih Mode Dikte";
var send_failed$1 = "Gagal Mengirim";
var send_code_failed$1 = "Gagal mengirim kode verifikasi";
var sending$1 = "Mengirim";
var send_code$1 = "Kirim Kode";
var agree_terms_notice$1 = "Dengan melanjutkan, Anda menyetujui";
var user_agreement$1 = "Perjanjian Pengguna";
var and$1 = "dan";
var privacy_policy$1 = "Kebijakan Privasi";
var important_notice$1 = "Pemberitahuan Penting";
var dont_remind$1 = "Jangan Ingatkan Lagi";
var function_desc$1 = "Fitur";
var qa1_a$1 = "Apakah situs web ini gratis?";
var qa1_q1$1 = "Tidak sepenuhnya gratis. Untuk pengembangan jangka panjang, biaya di masa depan tidak dapat dihindari, tetapi tidak akan memerlukan pembayaran untuk menggunakan. Kami mencoba menemukan keseimbangan antara gratis dan berbayar.";
var qa1_q2$1 = "Proyek ini adalah open source, Anda dapat men-deploy sendiri.";
var qa2_a$1 = "Tidak dapat mengetik, keyboard tidak merespons?";
var qa3_a$1 = "Di mana datanya? Bagaimana cara menggunakan di beberapa komputer/perangkat?";
var qa3_q1$1 = "Semua data pengguna disimpan di browser lokal. Jika Anda perlu menggunakan Type Words di perangkat atau browser yang berbeda, Anda perlu mengekspor dan mengimpor data secara manual.";
var qa3_q2$1 = "Pengaturan -> Pengaturan Data -> Ekspor data di komputer asli -> Kirim ke komputer baru melalui software sosial -> Impor di komputer baru";
var qa3_q3$1 = "Sistem akun sedang dalam pengembangan.";
var qa4_a$1 = "Situs web merencanakan terlalu banyak kata secara otomatis, bagaimana cara mengubahnya?";
var qa4_q1$1 = "Rasio default kata ulasan ke kata baru adalah 1:4.";
var qa4_q2$1 = "Anda dapat mengubahnya melalui Pengaturan -> Pengaturan Kata -> Rasio Ulasan";
var qa5_a$1 = "Terlalu lama untuk menyelesaikan satu sesi belajar, apakah prosesnya terlalu panjang?";
var qa5_q1$1 = "Ini memang masalah. Proses yang panjang dapat membuat orang kehilangan motivasi.";
var qa5_q2$1 = "Kata yang salah akan diulang. Jika hanya salah ketik, Anda dapat menekan Tab untuk melewati.";
var qa5_q3$1 = "Selama ulasan, hanya kata yang ditandai sebagai \"tidak tahu\" yang memerlukan dikte.";
var qa5_q4$1 = "Setelah sistem akun diluncurkan, fitur kurva memori Ebbinghaus akan ditambahkan.";
var qa6_a$1 = "Apakah fitur kurva memori Ebbinghaus akan ditambahkan?";
var qa7_a$1 = "Bisakah saya menambahkan kata/kamus kustom/mengimpor kata saya sendiri?";
var qa7_q1$1 = "Ya, di halaman Kata, klik \"Buat Kamus Pribadi\"";
var qa7_q2$1 = "Setelah pembuatan, klik ikon \"Tambah Kata\" untuk menambahkan kata Anda sendiri";
var qa7_q3$1 = "Anda juga dapat mengklik ikon \"Impor\" untuk mengimpor secara batch";
var qa8_a$1 = "Bisakah saya menambahkan artikel/buku kustom/mengimpor artikel saya sendiri?";
var qa8_q1$1 = "Ya, langkah-langkahnya pada dasarnya sama dengan menambahkan kata";
var qa8_q2$1 = "Di halaman Artikel, klik \"Buat Buku Pribadi\"";
var qa8_q3$1 = "Setelah pembuatan, klik tombol \"Manajemen Artikel\" di bagian atas";
var qa9_a$1 = "Bagaimana cara mematikan suara tombol?";
var qa9_q$1 = "Pengaturan -> Pengaturan Umum -> Efek Suara -> Suara Tombol, matikan";
var qa10_a$1 = "Bisakah saya menggunakannya di tablet?";
var qa10_q1$1 = "Tablet dapat digunakan, tetapi menggunakan keyboard Bluetooth memberikan pengalaman yang lebih baik.";
var qa10_q2$1 = "Setelah menghubungkan keyboard Bluetooth, tablet Android perlu mengaktifkan \"Mode Desktop\" secara manual.";
var qa11_a$1 = "Bisakah saya menggunakannya di ponsel?";
var qa11_q$1 = "Ponsel dapat digunakan, tetapi optimisasi belum dilakukan. Masih disarankan untuk menggunakan di komputer atau tablet.";
var qa12_a$1 = "Apakah ada APP atau mini-program?";
var qa12_q$1 = "Tidak, hanya situs web";
var qa13_a$1 = "Bagaimana cara memberikan umpan balik kepada tim pengembangan?";
var qa13_q1$1 = "Anda dapat bergabung dengan grup WeChat resmi kami, jelaskan secara detail fitur yang Anda inginkan";
var qa13_q2$1 = "Jika Anda menemukan bug dalam aplikasi, harap berikan deskripsi terperinci dan langkah-langkah untuk mereproduksi";
var qa13_q3$1 = "Anda juga dapat mengirimkan tiket dukungan kepada kami";
var qa13_q4$1 = "Anda juga dapat mengirimkan di github/issues";
const id = {
	app_desc: app_desc$1,
	app_name: app_name$1,
	start_word_practice: start_word_practice$1,
	start_article_practice: start_article_practice$1,
	home_word_practice: home_word_practice$1,
	home_word_practice_desc1: home_word_practice_desc1$1,
	home_word_practice_desc2: home_word_practice_desc2$1,
	home_word_practice_desc3: home_word_practice_desc3$1,
	home_article_practice: home_article_practice$1,
	home_article_practice_desc1: home_article_practice_desc1$1,
	home_article_practice_desc2: home_article_practice_desc2$1,
	home_article_practice_desc3: home_article_practice_desc3$1,
	home_collection: home_collection$1,
	home_collection_desc1: home_collection_desc1$1,
	home_collection_desc2: home_collection_desc2$1,
	home_collection_desc3: home_collection_desc3$1,
	home_vocabulary: home_vocabulary$1,
	home_vocabulary_desc: home_vocabulary_desc$1,
	home_free_opensource: home_free_opensource$1,
	home_free_opensource_desc1: home_free_opensource_desc1$1,
	home_free_opensource_desc2: home_free_opensource_desc2$1,
	home_free_opensource_desc3: home_free_opensource_desc3$1,
	home_customization: home_customization$1,
	home_customization_desc1: home_customization_desc1$1,
	home_customization_desc2: home_customization_desc2$1,
	home_customization_desc3: home_customization_desc3$1,
	home_design: home_design$1,
	home_design_desc1: home_design_desc1$1,
	home_design_desc2: home_design_desc2$1,
	home_design_desc3: home_design_desc3$1,
	home_personalized: home_personalized$1,
	home_personalized_desc1: home_personalized_desc1$1,
	home_personalized_desc2: home_personalized_desc2$1,
	home_personalized_desc3: home_personalized_desc3$1,
	cn_limit_no1: cn_limit_no1$1,
	cn_limit_no2: cn_limit_no2$1,
	setting: setting$1,
	edit: edit$1,
	"delete": "Hapus",
	cancel: cancel$1,
	confirm: confirm$1,
	save: save$1,
	close: close$1,
	search: search$1,
	more: more$1,
	loading: loading$1,
	introduction: introduction$1,
	learn: learn$1,
	practice: practice$1,
	test: test$1,
	feedback: feedback$1,
	document: document$1,
	help: help$1,
	about: about$1,
	login: login$1,
	register: register$1,
	register_account: register_account$1,
	register_new_account: register_new_account$1,
	code_login: code_login$1,
	password_login: password_login$1,
	phone_placeholder: phone_placeholder$1,
	code_placeholder: code_placeholder$1,
	account_placeholder: account_placeholder$1,
	password_placeholder: password_placeholder$1,
	auto_register_notice: auto_register_notice$1,
	forgot_password: forgot_password$1,
	reset_password: reset_password$1,
	set_password_placeholder: set_password_placeholder$1,
	confirm_password_placeholder: confirm_password_placeholder$1,
	new_password_placeholder: new_password_placeholder$1,
	confirm_new_password: confirm_new_password$1,
	wechat_scan_login: wechat_scan_login$1,
	scan_success: scan_success$1,
	tap_allow_in_wechat: tap_allow_in_wechat$1,
	login_cancelled: login_cancelled$1,
	login_again: login_again$1,
	sync_data: sync_data$1,
	local_data_detected: local_data_detected$1,
	sync_to_account_question: sync_to_account_question$1,
	no_sync: no_sync$1,
	sync: sync$1,
	syncing: syncing$1,
	sync_failed: sync_failed$1,
	sync_success: sync_success$1,
	enter_website: enter_website$1,
	general_settings: general_settings$1,
	word_settings: word_settings$1,
	article_settings: article_settings$1,
	data_management: data_management$1,
	shortcut_settings: shortcut_settings$1,
	update_log: update_log$1,
	"function": "Fungsi",
	shortcut_key: shortcut_key$1,
	no_shortcut_set: no_shortcut_set$1,
	press_key_to_set: press_key_to_set$1,
	click_here_when_done: click_here_when_done$1,
	restore_default: restore_default$1,
	data_saved_locally: data_saved_locally$1,
	export_data_backup: export_data_backup$1,
	import_data_restore: import_data_restore$1,
	import_warning: import_warning$1,
	words: words$1,
	no_dict_selected: no_dict_selected$1,
	select_dict_to_start: select_dict_to_start$1,
	select_dict: select_dict$1,
	change_progress: change_progress$1,
	estimated_completion: estimated_completion$1,
	current_progress: current_progress$1,
	learned: learned$1,
	completed_review_stage: completed_review_stage$1,
	today_task: today_task$1,
	last_task: last_task$1,
	word_list: word_list$1,
	daily_goal: daily_goal$1,
	words_count: words_count$1,
	change: change$1,
	new_words_count: new_words_count$1,
	review_last: review_last$1,
	review_previous: review_previous$1,
	start_learning: start_learning$1,
	continue_learning: continue_learning$1,
	free_practice: free_practice$1,
	continue_free_practice: continue_free_practice$1,
	smart_learning: smart_learning$1,
	review: review$1,
	random_review: random_review$1,
	my_dictionaries: my_dictionaries$1,
	manage_dict: manage_dict$1,
	create_personal_dict: create_personal_dict$1,
	recommend: recommend$1,
	articles: articles$1,
	this_week_record: this_week_record$1,
	change_book: change_book$1,
	today_study_time: today_study_time$1,
	total_study_days: total_study_days$1,
	total_study_time: total_study_time$1,
	my_books: my_books$1,
	manage_books: manage_books$1,
	create_personal_book: create_personal_book$1,
	article_management: article_management$1,
	toggle_translation: toggle_translation$1,
	switch_display_mode: switch_display_mode$1,
	line_by_line: line_by_line$1,
	single_line: single_line$1,
	comparison: comparison$1,
	question: question$1,
	study_record: study_record$1,
	play_next_after_end: play_next_after_end$1,
	create_book: create_book$1,
	edit_book: edit_book$1,
	dict_list: dict_list$1,
	book_list: book_list$1,
	word: word$1,
	phonetic: phonetic$1,
	translation: translation$1,
	example_sentence: example_sentence$1,
	phrase: phrase$1,
	synonym: synonym$1,
	related_words: related_words$1,
	etymology: etymology$1,
	add_word: add_word$1,
	edit_word: edit_word$1,
	create_dict: create_dict$1,
	edit_dict: edit_dict$1,
	"import": "Impor",
	"export": "Ekspor",
	faq: faq$1,
	is_free: is_free$1,
	cannot_type: cannot_type$1,
	where_is_data: where_is_data$1,
	resource_sharing: resource_sharing$1,
	all_resources: all_resources$1,
	new_concept_english: new_concept_english$1,
	tv_movie: tv_movie$1,
	grammar_learning: grammar_learning$1,
	listening_training: listening_training$1,
	warm_tips: warm_tips$1,
	resources_from_internet: resources_from_internet$1,
	toggle_theme: toggle_theme$1,
	english_document: english_document$1,
	empty_placeholder: empty_placeholder$1,
	custom: custom$1,
	back: back$1,
	total_items: total_items$1,
	batch_delete: batch_delete$1,
	confirm_delete_selected: confirm_delete_selected$1,
	change_order: change_order$1,
	list_order_setting: list_order_setting$1,
	reverse_current_page: reverse_current_page$1,
	reverse_all: reverse_all$1,
	random_current_page: random_current_page$1,
	random_all: random_all$1,
	apply: apply$1,
	add: add$1,
	collect: collect$1,
	uncollect: uncollect$1,
	mark_mastered: mark_mastered$1,
	unmark_mastered: unmark_mastered$1,
	about_thanks: about_thanks$1,
	github_address: github_address$1,
	about_wechat_feedback: about_wechat_feedback$1,
	about_ticket_feedback: about_ticket_feedback$1,
	about_other_channels: about_other_channels$1,
	wait_translation: wait_translation$1,
	migrate_data: migrate_data$1,
	migrate_new_domain: migrate_new_domain$1,
	migrate_old_domain_notice: migrate_old_domain_notice$1,
	migrate_later_notice: migrate_later_notice$1,
	author: author$1,
	features: features$1,
	suitable_for: suitable_for$1,
	open_link: open_link$1,
	qq_group: qq_group$1,
	xiaohongshu: xiaohongshu$1,
	follow_x_account: follow_x_account$1,
	twitter: twitter$1,
	send_email: send_email$1,
	email: email$1,
	xiaohongshu_desc: xiaohongshu_desc$1,
	xiaohongshu_qrcode: xiaohongshu_qrcode$1,
	community_desc: community_desc$1,
	qq_qrcode: qq_qrcode$1,
	wechat_group: wechat_group$1,
	wechat_qrcode: wechat_qrcode$1,
	github_project: github_project$1,
	ie_not_supported: ie_not_supported$1,
	ie_use_modern_browser: ie_use_modern_browser$1,
	download_chrome: download_chrome$1,
	i_understand: i_understand$1,
	ignore_case: ignore_case$1,
	ignore_case_desc: ignore_case_desc$1,
	allow_dictation_tip: allow_dictation_tip$1,
	allow_dictation_tip_desc: allow_dictation_tip_desc$1,
	simple_word_filter: simple_word_filter$1,
	simple_word_filter_desc: simple_word_filter_desc$1,
	simple_word_list: simple_word_list$1,
	words_comma_separated: words_comma_separated$1,
	sound_effect: sound_effect$1,
	pronunciation_accent: pronunciation_accent$1,
	pronunciation_accent_desc: pronunciation_accent_desc$1,
	please_select: please_select$1,
	us_accent: us_accent$1,
	uk_accent: uk_accent$1,
	keyboard_sound: keyboard_sound$1,
	keyboard_sound_effect: keyboard_sound_effect$1,
	volume: volume$1,
	show_prev_next_word: show_prev_next_word$1,
	show_prev_next_word_desc: show_prev_next_word_desc$1,
	disable_practice_setting_dialog: disable_practice_setting_dialog$1,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$1,
	clear_input_on_error: clear_input_on_error$1,
	word_repeat_setting: word_repeat_setting$1,
	repeat_count: repeat_count$1,
	review_ratio: review_ratio$1,
	review_ratio_desc: review_ratio_desc$1,
	word_auto_pronunciation: word_auto_pronunciation$1,
	speed: speed$1,
	effect_sound: effect_sound$1,
	auto_switch: auto_switch$1,
	auto_next_word: auto_next_word$1,
	auto_next_word_desc: auto_next_word_desc$1,
	auto_next_word_time: auto_next_word_time$1,
	auto_next_word_time_desc: auto_next_word_time_desc$1,
	milliseconds: milliseconds$1,
	font_setting: font_setting$1,
	foreign_font: foreign_font$1,
	chinese_font: chinese_font$1,
	auto_play_sentence: auto_play_sentence$1,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names$1,
	settings: settings$1,
	please_select_dict: please_select_dict$1,
	learning_settings: learning_settings$1,
	total: total$1,
	estimated: estimated$1,
	days_to_complete: days_to_complete$1,
	from_word: from_word$1,
	start_daily: start_daily$1,
	new_words: new_words$1,
	review_ratio_tooltip: review_ratio_tooltip$1,
	review_ratio_notice_1: review_ratio_notice_1$1,
	review_ratio_notice_2: review_ratio_notice_2$1,
	daily_learning: daily_learning$1,
	learning_progress: learning_progress$1,
	select_from_dict: select_from_dict$1,
	change_in_settings: change_in_settings$1,
	keep_default_no_show: keep_default_no_show$1,
	review_complete: review_complete$1,
	today_task_complete: today_task_complete$1,
	study_duration: study_duration$1,
	accuracy_rate: accuracy_rate$1,
	weekly_study_record: weekly_study_record$1,
	studied: studied$1,
	total_words: total_words$1,
	restart_learning: restart_learning$1,
	another_round: another_round$1,
	return_home: return_home$1,
	import_tutorial: import_tutorial$1,
	import_follow_template: import_follow_template$1,
	import_word_required: import_word_required$1,
	import_translation_hint: import_translation_hint$1,
	import_example_hint: import_example_hint$1,
	import_phrase_hint: import_phrase_hint$1,
	two: two$1,
	lines: lines$1,
	import_other_hint: import_other_hint$1,
	template_download: template_download$1,
	word_import_template: word_import_template$1,
	conflict_notice_title: conflict_notice_title$1,
	keyboard_no_response: keyboard_no_response$1,
	check_plugins_installed: check_plugins_installed$1,
	conflict_plugin_names: conflict_plugin_names$1,
	plugins_intercept_keyboard: plugins_intercept_keyboard$1,
	cause_no_response: cause_no_response$1,
	follow_steps_to_resolve: follow_steps_to_resolve$1,
	try_incognito_mode: try_incognito_mode$1,
	incognito_not_working: incognito_not_working$1,
	click_here: click_here$1,
	feedback_or_wechat: feedback_or_wechat$1,
	incognito_working: incognito_working$1,
	disable_plugin_or_exclude: disable_plugin_or_exclude$1,
	install_extension_manager: install_extension_manager$1,
	chrome_extension: chrome_extension$1,
	edge_extension: edge_extension$1,
	to_manage_extensions: to_manage_extensions$1,
	delete_key_goes_back: delete_key_goes_back$1,
	browser_360_shortcut: browser_360_shortcut$1,
	change_browser_or_shortcut: change_browser_or_shortcut$1,
	please_enter_name: please_enter_name$1,
	name_max_20_chars: name_max_20_chars$1,
	name_already_exists: name_already_exists$1,
	add_success: add_success$1,
	edit_success: edit_success$1,
	edit_and_add_to_dict: edit_and_add_to_dict$1,
	please_fill_complete: please_fill_complete$1,
	name: name$1,
	description: description$1,
	source_language: source_language$1,
	target_language: target_language$1,
	english: english$1,
	german: german$1,
	japanese: japanese$1,
	code: code$1,
	chinese: chinese$1,
	multiple_choice: multiple_choice$1,
	start: start$1,
	countdown: countdown$1,
	seconds: seconds$1,
	submit_exam: submit_exam$1,
	exam_color_hint: exam_color_hint$1,
	items_per_page: items_per_page$1,
	jump_to: jump_to$1,
	page_or_index: page_or_index$1,
	please_fill_original: please_fill_original$1,
	please_fill_title: please_fill_title$1,
	please_fill_content: please_fill_content$1,
	audio_added_success: audio_added_success$1,
	lrc_parse_success: lrc_parse_success$1,
	original_text: original_text$1,
	title: title$1,
	please_fill_original_title: please_fill_original_title$1,
	content: content$1,
	one_sentence_per_line: one_sentence_per_line$1,
	name_config_tip: name_config_tip$1,
	name_config: name_config$1,
	please_paste_original: please_paste_original$1,
	usage_guide: usage_guide$1,
	copy_and_split: copy_and_split$1,
	click: click$1,
	split_sentence: split_sentence$1,
	auto_split: auto_split$1,
	or: or$1,
	manual_split: manual_split$1,
	split_rule: split_rule$1,
	after_edit_click: after_edit_click$1,
	sync_to_result: sync_to_result$1,
	please_fill_translation_title: please_fill_translation_title$1,
	please_fill_translation: please_fill_translation$1,
	translate: translate$1,
	copy_translation_or_click: copy_translation_or_click$1,
	result: result$1,
	editable_auto_sync: editable_auto_sync$1,
	audio: audio$1,
	audio_management: audio_management$1,
	paragraph: paragraph$1,
	set_start_time: set_start_time$1,
	use_prev_end_time: use_prev_end_time$1,
	minus_03s: minus_03s$1,
	end: end$1,
	set_end_time: set_end_time$1,
	edit_audio_align: edit_audio_align$1,
	play: play$1,
	status: status$1,
	sentences_not_translated: sentences_not_translated$1,
	translation_complete: translation_complete$1,
	save_and_next: save_and_next$1,
	no_translation_comparison: no_translation_comparison$1,
	adjust_audio_timeline: adjust_audio_timeline$1,
	audio_timeline_tutorial: audio_timeline_tutorial$1,
	start_time: start_time$1,
	jump_to_seconds: jump_to_seconds$1,
	use_prev_end_seconds: use_prev_end_seconds$1,
	decrease_03s: decrease_03s$1,
	increase_03s: increase_03s$1,
	record: record$1,
	end_time: end_time$1,
	audio_upload_notice: audio_upload_notice$1,
	upload_audio: upload_audio$1,
	upload_lrc: upload_lrc$1,
	name_management: name_management$1,
	name_ignore_config_desc: name_ignore_config_desc$1,
	add_name: add_name$1,
	enter_name: enter_name$1,
	collect_word: collect_word$1,
	copy: copy$1,
	copy_sentence: copy_sentence$1,
	copied: copied$1,
	copy_word: copy_word$1,
	start_from_here: start_from_here$1,
	play_sentence: play_sentence$1,
	grammar_analysis: grammar_analysis$1,
	copied_open_grammar: copied_open_grammar$1,
	youdao_translate: youdao_translate$1,
	translate_word: translate_word$1,
	translate_sentence: translate_sentence$1,
	restart_practice: restart_practice$1,
	next_article: next_article$1,
	learning_record: learning_record$1,
	total_learning_time: total_learning_time$1,
	current: current$1,
	show_questions: show_questions$1,
	explanation: explanation$1,
	encouragement_95: encouragement_95$1,
	encouragement_85: encouragement_85$1,
	encouragement_70: encouragement_70$1,
	encouragement_default: encouragement_default$1,
	daily_task_complete: daily_task_complete$1,
	weekly_record: weekly_record$1,
	study_progress: study_progress$1,
	relearn: relearn$1,
	start_from_beginning: start_from_beginning$1,
	another_group: another_group$1,
	back_to_home: back_to_home$1,
	know_word_tip: know_word_tip$1,
	press_delete_reinput: press_delete_reinput$1,
	press_space_continue: press_space_continue$1,
	shortcut: shortcut$1,
	i_know: i_know$1,
	i_dont_know: i_dont_know$1,
	phrases: phrases$1,
	synonyms: synonyms$1,
	word_root: word_root$1,
	review_wrong_words: review_wrong_words$1,
	collapse: collapse$1,
	expand: expand$1,
	minutes: minutes$1,
	time: time$1,
	errors: errors$1,
	skip_to_next_stage: skip_to_next_stage$1,
	skip_word: skip_word$1,
	toggle_dictation_mode: toggle_dictation_mode$1,
	send_failed: send_failed$1,
	send_code_failed: send_code_failed$1,
	sending: sending$1,
	send_code: send_code$1,
	agree_terms_notice: agree_terms_notice$1,
	user_agreement: user_agreement$1,
	and: and$1,
	privacy_policy: privacy_policy$1,
	important_notice: important_notice$1,
	dont_remind: dont_remind$1,
	function_desc: function_desc$1,
	qa1_a: qa1_a$1,
	qa1_q1: qa1_q1$1,
	qa1_q2: qa1_q2$1,
	qa2_a: qa2_a$1,
	qa3_a: qa3_a$1,
	qa3_q1: qa3_q1$1,
	qa3_q2: qa3_q2$1,
	qa3_q3: qa3_q3$1,
	qa4_a: qa4_a$1,
	qa4_q1: qa4_q1$1,
	qa4_q2: qa4_q2$1,
	qa5_a: qa5_a$1,
	qa5_q1: qa5_q1$1,
	qa5_q2: qa5_q2$1,
	qa5_q3: qa5_q3$1,
	qa5_q4: qa5_q4$1,
	qa6_a: qa6_a$1,
	qa7_a: qa7_a$1,
	qa7_q1: qa7_q1$1,
	qa7_q2: qa7_q2$1,
	qa7_q3: qa7_q3$1,
	qa8_a: qa8_a$1,
	qa8_q1: qa8_q1$1,
	qa8_q2: qa8_q2$1,
	qa8_q3: qa8_q3$1,
	qa9_a: qa9_a$1,
	qa9_q: qa9_q$1,
	qa10_a: qa10_a$1,
	qa10_q1: qa10_q1$1,
	qa10_q2: qa10_q2$1,
	qa11_a: qa11_a$1,
	qa11_q: qa11_q$1,
	qa12_a: qa12_a$1,
	qa12_q: qa12_q$1,
	qa13_a: qa13_a$1,
	qa13_q1: qa13_q1$1,
	qa13_q2: qa13_q2$1,
	qa13_q3: qa13_q3$1,
	qa13_q4: qa13_q4$1
};

const id$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$1,
  about_other_channels: about_other_channels$1,
  about_thanks: about_thanks$1,
  about_ticket_feedback: about_ticket_feedback$1,
  about_wechat_feedback: about_wechat_feedback$1,
  account_placeholder: account_placeholder$1,
  accuracy_rate: accuracy_rate$1,
  add: add$1,
  add_name: add_name$1,
  add_success: add_success$1,
  add_word: add_word$1,
  adjust_audio_timeline: adjust_audio_timeline$1,
  after_edit_click: after_edit_click$1,
  agree_terms_notice: agree_terms_notice$1,
  all_resources: all_resources$1,
  allow_dictation_tip: allow_dictation_tip$1,
  allow_dictation_tip_desc: allow_dictation_tip_desc$1,
  and: and$1,
  another_group: another_group$1,
  another_round: another_round$1,
  app_desc: app_desc$1,
  app_name: app_name$1,
  apply: apply$1,
  article_management: article_management$1,
  article_settings: article_settings$1,
  articles: articles$1,
  audio: audio$1,
  audio_added_success: audio_added_success$1,
  audio_management: audio_management$1,
  audio_timeline_tutorial: audio_timeline_tutorial$1,
  audio_upload_notice: audio_upload_notice$1,
  author: author$1,
  auto_next_word: auto_next_word$1,
  auto_next_word_desc: auto_next_word_desc$1,
  auto_next_word_time: auto_next_word_time$1,
  auto_next_word_time_desc: auto_next_word_time_desc$1,
  auto_play_sentence: auto_play_sentence$1,
  auto_register_notice: auto_register_notice$1,
  auto_split: auto_split$1,
  auto_switch: auto_switch$1,
  back: back$1,
  back_to_home: back_to_home$1,
  batch_delete: batch_delete$1,
  book_list: book_list$1,
  browser_360_shortcut: browser_360_shortcut$1,
  cancel: cancel$1,
  cannot_type: cannot_type$1,
  cause_no_response: cause_no_response$1,
  change: change$1,
  change_book: change_book$1,
  change_browser_or_shortcut: change_browser_or_shortcut$1,
  change_in_settings: change_in_settings$1,
  change_order: change_order$1,
  change_progress: change_progress$1,
  check_plugins_installed: check_plugins_installed$1,
  chinese: chinese$1,
  chinese_font: chinese_font$1,
  chrome_extension: chrome_extension$1,
  clear_input_on_error: clear_input_on_error$1,
  click: click$1,
  click_here: click_here$1,
  click_here_when_done: click_here_when_done$1,
  close: close$1,
  cn_limit_no1: cn_limit_no1$1,
  cn_limit_no2: cn_limit_no2$1,
  code: code$1,
  code_login: code_login$1,
  code_placeholder: code_placeholder$1,
  collapse: collapse$1,
  collect: collect$1,
  collect_word: collect_word$1,
  community_desc: community_desc$1,
  comparison: comparison$1,
  completed_review_stage: completed_review_stage$1,
  confirm: confirm$1,
  confirm_delete_selected: confirm_delete_selected$1,
  confirm_new_password: confirm_new_password$1,
  confirm_password_placeholder: confirm_password_placeholder$1,
  conflict_notice_title: conflict_notice_title$1,
  conflict_plugin_names: conflict_plugin_names$1,
  content: content$1,
  continue_free_practice: continue_free_practice$1,
  continue_learning: continue_learning$1,
  copied: copied$1,
  copied_open_grammar: copied_open_grammar$1,
  copy: copy$1,
  copy_and_split: copy_and_split$1,
  copy_sentence: copy_sentence$1,
  copy_translation_or_click: copy_translation_or_click$1,
  copy_word: copy_word$1,
  countdown: countdown$1,
  create_book: create_book$1,
  create_dict: create_dict$1,
  create_personal_book: create_personal_book$1,
  create_personal_dict: create_personal_dict$1,
  current: current$1,
  current_progress: current_progress$1,
  custom: custom$1,
  daily_goal: daily_goal$1,
  daily_learning: daily_learning$1,
  daily_task_complete: daily_task_complete$1,
  data_management: data_management$1,
  data_saved_locally: data_saved_locally$1,
  days_to_complete: days_to_complete$1,
  decrease_03s: decrease_03s$1,
  default: id,
  delete_key_goes_back: delete_key_goes_back$1,
  description: description$1,
  dict_list: dict_list$1,
  disable_plugin_or_exclude: disable_plugin_or_exclude$1,
  disable_practice_setting_dialog: disable_practice_setting_dialog$1,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc$1,
  document: document$1,
  dont_remind: dont_remind$1,
  download_chrome: download_chrome$1,
  edge_extension: edge_extension$1,
  edit: edit$1,
  edit_and_add_to_dict: edit_and_add_to_dict$1,
  edit_audio_align: edit_audio_align$1,
  edit_book: edit_book$1,
  edit_dict: edit_dict$1,
  edit_success: edit_success$1,
  edit_word: edit_word$1,
  editable_auto_sync: editable_auto_sync$1,
  effect_sound: effect_sound$1,
  email: email$1,
  empty_placeholder: empty_placeholder$1,
  encouragement_70: encouragement_70$1,
  encouragement_85: encouragement_85$1,
  encouragement_95: encouragement_95$1,
  encouragement_default: encouragement_default$1,
  end: end$1,
  end_time: end_time$1,
  english: english$1,
  english_document: english_document$1,
  enter_name: enter_name$1,
  enter_website: enter_website$1,
  errors: errors$1,
  estimated: estimated$1,
  estimated_completion: estimated_completion$1,
  etymology: etymology$1,
  exam_color_hint: exam_color_hint$1,
  example_sentence: example_sentence$1,
  expand: expand$1,
  explanation: explanation$1,
  export_data_backup: export_data_backup$1,
  faq: faq$1,
  features: features$1,
  feedback: feedback$1,
  feedback_or_wechat: feedback_or_wechat$1,
  follow_steps_to_resolve: follow_steps_to_resolve$1,
  follow_x_account: follow_x_account$1,
  font_setting: font_setting$1,
  foreign_font: foreign_font$1,
  forgot_password: forgot_password$1,
  free_practice: free_practice$1,
  from_word: from_word$1,
  function_desc: function_desc$1,
  general_settings: general_settings$1,
  german: german$1,
  github_address: github_address$1,
  github_project: github_project$1,
  grammar_analysis: grammar_analysis$1,
  grammar_learning: grammar_learning$1,
  help: help$1,
  home_article_practice: home_article_practice$1,
  home_article_practice_desc1: home_article_practice_desc1$1,
  home_article_practice_desc2: home_article_practice_desc2$1,
  home_article_practice_desc3: home_article_practice_desc3$1,
  home_collection: home_collection$1,
  home_collection_desc1: home_collection_desc1$1,
  home_collection_desc2: home_collection_desc2$1,
  home_collection_desc3: home_collection_desc3$1,
  home_customization: home_customization$1,
  home_customization_desc1: home_customization_desc1$1,
  home_customization_desc2: home_customization_desc2$1,
  home_customization_desc3: home_customization_desc3$1,
  home_design: home_design$1,
  home_design_desc1: home_design_desc1$1,
  home_design_desc2: home_design_desc2$1,
  home_design_desc3: home_design_desc3$1,
  home_free_opensource: home_free_opensource$1,
  home_free_opensource_desc1: home_free_opensource_desc1$1,
  home_free_opensource_desc2: home_free_opensource_desc2$1,
  home_free_opensource_desc3: home_free_opensource_desc3$1,
  home_personalized: home_personalized$1,
  home_personalized_desc1: home_personalized_desc1$1,
  home_personalized_desc2: home_personalized_desc2$1,
  home_personalized_desc3: home_personalized_desc3$1,
  home_vocabulary: home_vocabulary$1,
  home_vocabulary_desc: home_vocabulary_desc$1,
  home_word_practice: home_word_practice$1,
  home_word_practice_desc1: home_word_practice_desc1$1,
  home_word_practice_desc2: home_word_practice_desc2$1,
  home_word_practice_desc3: home_word_practice_desc3$1,
  i_dont_know: i_dont_know$1,
  i_know: i_know$1,
  i_understand: i_understand$1,
  ie_not_supported: ie_not_supported$1,
  ie_use_modern_browser: ie_use_modern_browser$1,
  ignore_case: ignore_case$1,
  ignore_case_desc: ignore_case_desc$1,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names$1,
  import_data_restore: import_data_restore$1,
  import_example_hint: import_example_hint$1,
  import_follow_template: import_follow_template$1,
  import_other_hint: import_other_hint$1,
  import_phrase_hint: import_phrase_hint$1,
  import_translation_hint: import_translation_hint$1,
  import_tutorial: import_tutorial$1,
  import_warning: import_warning$1,
  import_word_required: import_word_required$1,
  important_notice: important_notice$1,
  incognito_not_working: incognito_not_working$1,
  incognito_working: incognito_working$1,
  increase_03s: increase_03s$1,
  install_extension_manager: install_extension_manager$1,
  introduction: introduction$1,
  is_free: is_free$1,
  items_per_page: items_per_page$1,
  japanese: japanese$1,
  jump_to: jump_to$1,
  jump_to_seconds: jump_to_seconds$1,
  keep_default_no_show: keep_default_no_show$1,
  keyboard_no_response: keyboard_no_response$1,
  keyboard_sound: keyboard_sound$1,
  keyboard_sound_effect: keyboard_sound_effect$1,
  know_word_tip: know_word_tip$1,
  last_task: last_task$1,
  learn: learn$1,
  learned: learned$1,
  learning_progress: learning_progress$1,
  learning_record: learning_record$1,
  learning_settings: learning_settings$1,
  line_by_line: line_by_line$1,
  lines: lines$1,
  list_order_setting: list_order_setting$1,
  listening_training: listening_training$1,
  loading: loading$1,
  local_data_detected: local_data_detected$1,
  login: login$1,
  login_again: login_again$1,
  login_cancelled: login_cancelled$1,
  lrc_parse_success: lrc_parse_success$1,
  manage_books: manage_books$1,
  manage_dict: manage_dict$1,
  manual_split: manual_split$1,
  mark_mastered: mark_mastered$1,
  migrate_data: migrate_data$1,
  migrate_later_notice: migrate_later_notice$1,
  migrate_new_domain: migrate_new_domain$1,
  migrate_old_domain_notice: migrate_old_domain_notice$1,
  milliseconds: milliseconds$1,
  minus_03s: minus_03s$1,
  minutes: minutes$1,
  more: more$1,
  multiple_choice: multiple_choice$1,
  my_books: my_books$1,
  my_dictionaries: my_dictionaries$1,
  name: name$1,
  name_already_exists: name_already_exists$1,
  name_config: name_config$1,
  name_config_tip: name_config_tip$1,
  name_ignore_config_desc: name_ignore_config_desc$1,
  name_management: name_management$1,
  name_max_20_chars: name_max_20_chars$1,
  new_concept_english: new_concept_english$1,
  new_password_placeholder: new_password_placeholder$1,
  new_words: new_words$1,
  new_words_count: new_words_count$1,
  next_article: next_article$1,
  no_dict_selected: no_dict_selected$1,
  no_shortcut_set: no_shortcut_set$1,
  no_sync: no_sync$1,
  no_translation_comparison: no_translation_comparison$1,
  one_sentence_per_line: one_sentence_per_line$1,
  open_link: open_link$1,
  or: or$1,
  original_text: original_text$1,
  page_or_index: page_or_index$1,
  paragraph: paragraph$1,
  password_login: password_login$1,
  password_placeholder: password_placeholder$1,
  phone_placeholder: phone_placeholder$1,
  phonetic: phonetic$1,
  phrase: phrase$1,
  phrases: phrases$1,
  play: play$1,
  play_next_after_end: play_next_after_end$1,
  play_sentence: play_sentence$1,
  please_enter_name: please_enter_name$1,
  please_fill_complete: please_fill_complete$1,
  please_fill_content: please_fill_content$1,
  please_fill_original: please_fill_original$1,
  please_fill_original_title: please_fill_original_title$1,
  please_fill_title: please_fill_title$1,
  please_fill_translation: please_fill_translation$1,
  please_fill_translation_title: please_fill_translation_title$1,
  please_paste_original: please_paste_original$1,
  please_select: please_select$1,
  please_select_dict: please_select_dict$1,
  plugins_intercept_keyboard: plugins_intercept_keyboard$1,
  practice: practice$1,
  press_delete_reinput: press_delete_reinput$1,
  press_key_to_set: press_key_to_set$1,
  press_space_continue: press_space_continue$1,
  privacy_policy: privacy_policy$1,
  pronunciation_accent: pronunciation_accent$1,
  pronunciation_accent_desc: pronunciation_accent_desc$1,
  qa10_a: qa10_a$1,
  qa10_q1: qa10_q1$1,
  qa10_q2: qa10_q2$1,
  qa11_a: qa11_a$1,
  qa11_q: qa11_q$1,
  qa12_a: qa12_a$1,
  qa12_q: qa12_q$1,
  qa13_a: qa13_a$1,
  qa13_q1: qa13_q1$1,
  qa13_q2: qa13_q2$1,
  qa13_q3: qa13_q3$1,
  qa13_q4: qa13_q4$1,
  qa1_a: qa1_a$1,
  qa1_q1: qa1_q1$1,
  qa1_q2: qa1_q2$1,
  qa2_a: qa2_a$1,
  qa3_a: qa3_a$1,
  qa3_q1: qa3_q1$1,
  qa3_q2: qa3_q2$1,
  qa3_q3: qa3_q3$1,
  qa4_a: qa4_a$1,
  qa4_q1: qa4_q1$1,
  qa4_q2: qa4_q2$1,
  qa5_a: qa5_a$1,
  qa5_q1: qa5_q1$1,
  qa5_q2: qa5_q2$1,
  qa5_q3: qa5_q3$1,
  qa5_q4: qa5_q4$1,
  qa6_a: qa6_a$1,
  qa7_a: qa7_a$1,
  qa7_q1: qa7_q1$1,
  qa7_q2: qa7_q2$1,
  qa7_q3: qa7_q3$1,
  qa8_a: qa8_a$1,
  qa8_q1: qa8_q1$1,
  qa8_q2: qa8_q2$1,
  qa8_q3: qa8_q3$1,
  qa9_a: qa9_a$1,
  qa9_q: qa9_q$1,
  qq_group: qq_group$1,
  qq_qrcode: qq_qrcode$1,
  question: question$1,
  random_all: random_all$1,
  random_current_page: random_current_page$1,
  random_review: random_review$1,
  recommend: recommend$1,
  record: record$1,
  register: register$1,
  register_account: register_account$1,
  register_new_account: register_new_account$1,
  related_words: related_words$1,
  relearn: relearn$1,
  repeat_count: repeat_count$1,
  reset_password: reset_password$1,
  resource_sharing: resource_sharing$1,
  resources_from_internet: resources_from_internet$1,
  restart_learning: restart_learning$1,
  restart_practice: restart_practice$1,
  restore_default: restore_default$1,
  result: result$1,
  return_home: return_home$1,
  reverse_all: reverse_all$1,
  reverse_current_page: reverse_current_page$1,
  review: review$1,
  review_complete: review_complete$1,
  review_last: review_last$1,
  review_previous: review_previous$1,
  review_ratio: review_ratio$1,
  review_ratio_desc: review_ratio_desc$1,
  review_ratio_notice_1: review_ratio_notice_1$1,
  review_ratio_notice_2: review_ratio_notice_2$1,
  review_ratio_tooltip: review_ratio_tooltip$1,
  review_wrong_words: review_wrong_words$1,
  save: save$1,
  save_and_next: save_and_next$1,
  scan_success: scan_success$1,
  search: search$1,
  seconds: seconds$1,
  select_dict: select_dict$1,
  select_dict_to_start: select_dict_to_start$1,
  select_from_dict: select_from_dict$1,
  send_code: send_code$1,
  send_code_failed: send_code_failed$1,
  send_email: send_email$1,
  send_failed: send_failed$1,
  sending: sending$1,
  sentences_not_translated: sentences_not_translated$1,
  set_end_time: set_end_time$1,
  set_password_placeholder: set_password_placeholder$1,
  set_start_time: set_start_time$1,
  setting: setting$1,
  settings: settings$1,
  shortcut: shortcut$1,
  shortcut_key: shortcut_key$1,
  shortcut_settings: shortcut_settings$1,
  show_prev_next_word: show_prev_next_word$1,
  show_prev_next_word_desc: show_prev_next_word_desc$1,
  show_questions: show_questions$1,
  simple_word_filter: simple_word_filter$1,
  simple_word_filter_desc: simple_word_filter_desc$1,
  simple_word_list: simple_word_list$1,
  single_line: single_line$1,
  skip_to_next_stage: skip_to_next_stage$1,
  skip_word: skip_word$1,
  smart_learning: smart_learning$1,
  sound_effect: sound_effect$1,
  source_language: source_language$1,
  speed: speed$1,
  split_rule: split_rule$1,
  split_sentence: split_sentence$1,
  start: start$1,
  start_article_practice: start_article_practice$1,
  start_daily: start_daily$1,
  start_from_beginning: start_from_beginning$1,
  start_from_here: start_from_here$1,
  start_learning: start_learning$1,
  start_time: start_time$1,
  start_word_practice: start_word_practice$1,
  status: status$1,
  studied: studied$1,
  study_duration: study_duration$1,
  study_progress: study_progress$1,
  study_record: study_record$1,
  submit_exam: submit_exam$1,
  suitable_for: suitable_for$1,
  switch_display_mode: switch_display_mode$1,
  sync: sync$1,
  sync_data: sync_data$1,
  sync_failed: sync_failed$1,
  sync_success: sync_success$1,
  sync_to_account_question: sync_to_account_question$1,
  sync_to_result: sync_to_result$1,
  syncing: syncing$1,
  synonym: synonym$1,
  synonyms: synonyms$1,
  tap_allow_in_wechat: tap_allow_in_wechat$1,
  target_language: target_language$1,
  template_download: template_download$1,
  test: test$1,
  this_week_record: this_week_record$1,
  time: time$1,
  title: title$1,
  to_manage_extensions: to_manage_extensions$1,
  today_study_time: today_study_time$1,
  today_task: today_task$1,
  today_task_complete: today_task_complete$1,
  toggle_dictation_mode: toggle_dictation_mode$1,
  toggle_theme: toggle_theme$1,
  toggle_translation: toggle_translation$1,
  total: total$1,
  total_items: total_items$1,
  total_learning_time: total_learning_time$1,
  total_study_days: total_study_days$1,
  total_study_time: total_study_time$1,
  total_words: total_words$1,
  translate: translate$1,
  translate_sentence: translate_sentence$1,
  translate_word: translate_word$1,
  translation: translation$1,
  translation_complete: translation_complete$1,
  try_incognito_mode: try_incognito_mode$1,
  tv_movie: tv_movie$1,
  twitter: twitter$1,
  two: two$1,
  uk_accent: uk_accent$1,
  uncollect: uncollect$1,
  unmark_mastered: unmark_mastered$1,
  update_log: update_log$1,
  upload_audio: upload_audio$1,
  upload_lrc: upload_lrc$1,
  us_accent: us_accent$1,
  usage_guide: usage_guide$1,
  use_prev_end_seconds: use_prev_end_seconds$1,
  use_prev_end_time: use_prev_end_time$1,
  user_agreement: user_agreement$1,
  volume: volume$1,
  wait_translation: wait_translation$1,
  warm_tips: warm_tips$1,
  wechat_group: wechat_group$1,
  wechat_qrcode: wechat_qrcode$1,
  wechat_scan_login: wechat_scan_login$1,
  weekly_record: weekly_record$1,
  weekly_study_record: weekly_study_record$1,
  where_is_data: where_is_data$1,
  word: word$1,
  word_auto_pronunciation: word_auto_pronunciation$1,
  word_import_template: word_import_template$1,
  word_list: word_list$1,
  word_repeat_setting: word_repeat_setting$1,
  word_root: word_root$1,
  word_settings: word_settings$1,
  words: words$1,
  words_comma_separated: words_comma_separated$1,
  words_count: words_count$1,
  xiaohongshu: xiaohongshu$1,
  xiaohongshu_desc: xiaohongshu_desc$1,
  xiaohongshu_qrcode: xiaohongshu_qrcode$1,
  youdao_translate: youdao_translate$1
}, Symbol.toStringTag, { value: 'Module' }));

var app_desc = "學習英語，一次敲擊，一點進步，開源單詞與文章練習工具";
var app_name = "Type Words";
var start_word_practice = "開始單詞練習";
var start_article_practice = "開始文章練習";
var home_word_practice = "單詞練習";
var home_word_practice_desc1 = "練習模式：跟打/聽寫/自測/默寫";
var home_word_practice_desc2 = "智能學習：智能規劃複習與默寫";
var home_word_practice_desc3 = "自由學習：不受限制，自行規劃";
var home_article_practice = "文章練習";
var home_article_practice_desc1 = "內置常見書籍，也可自行添加文章";
var home_article_practice_desc2 = "跟打 + 默寫雙模式，讓背誦更高效";
var home_article_practice_desc3 = "支持邊聽邊默寫，強化記憶";
var home_collection = "收藏、錯詞本、已掌握";
var home_collection_desc1 = "輸入錯誤自動添加到錯詞本";
var home_collection_desc2 = "主動添加到已掌握，後續自動跳過";
var home_collection_desc3 = "主動添加到收藏中，以便鞏固複習";
var home_vocabulary = "海量詞庫";
var home_vocabulary_desc = "內置小學、初中、高中、四六級、考研、雅思、托福、GRE、GMAT、SAT、BEC、專四、專八等詞庫";
var home_free_opensource = "免費開源";
var home_free_opensource_desc1 = "完全開源，可審查、可修改";
var home_free_opensource_desc2 = "免費使用";
var home_free_opensource_desc3 = "私有部署";
var home_customization = "高度自由";
var home_customization_desc1 = "豐富的鍵盤音效";
var home_customization_desc2 = "可自定義快捷鍵";
var home_customization_desc3 = "高度定制化的設置選項";
var home_design = "簡潔高效";
var home_design_desc1 = "簡潔設計，現代化UI";
var home_design_desc2 = "界面清爽，操作簡單";
var home_design_desc3 = "不強制關注任何平台";
var home_personalized = "個性學習";
var home_personalized_desc1 = "自由添加詞典與文章";
var home_personalized_desc2 = "定制個性學習計劃";
var home_personalized_desc3 = "多種學習複習策略";
var cn_limit_no1 = "川公網安備51015602001426號";
var cn_limit_no2 = "蜀ICP備2025157466號-2";
var setting = "設置";
var edit = "編輯";
var cancel = "取消";
var confirm = "確認";
var save = "保存";
var close = "關閉";
var search = "搜索";
var more = "更多";
var loading = "加載中";
var introduction = "介紹";
var learn = "學習";
var practice = "練習";
var test = "測試";
var feedback = "反饋";
var document = "資料";
var help = "幫助";
var about = "關於";
var login = "登錄";
var register = "註冊";
var register_account = "註冊賬號";
var register_new_account = "註冊新賬號";
var code_login = "驗證碼登錄";
var password_login = "密碼登錄";
var phone_placeholder = "請輸入手機號";
var code_placeholder = "請輸入驗證碼";
var account_placeholder = "請輸入手機號/郵箱地址";
var password_placeholder = "請輸入密碼";
var auto_register_notice = "未註冊的手機號將自動註冊";
var forgot_password = "忘記密碼?";
var reset_password = "重置密碼";
var set_password_placeholder = "請設置密碼";
var confirm_password_placeholder = "請再次輸入密碼";
var new_password_placeholder = "請輸入新密碼";
var confirm_new_password = "請再次輸入新密碼";
var wechat_scan_login = "微信掃碼登錄";
var scan_success = "掃描成功";
var tap_allow_in_wechat = "微信中輕觸允許即可登錄";
var login_cancelled = "你已取消此次登錄";
var login_again = "再次登錄";
var sync_data = "同步數據";
var local_data_detected = "檢測到您本地存在使用記錄";
var sync_to_account_question = "是否需要同步到賬戶中？";
var no_sync = "不同步";
var sync = "同步";
var syncing = "正在導入中";
var sync_failed = "同步失敗";
var sync_success = "同步成功";
var enter_website = "進入網站";
var general_settings = "通用設置";
var word_settings = "單詞設置";
var article_settings = "文章設置";
var data_management = "數據管理";
var shortcut_settings = "快捷鍵設置";
var update_log = "更新日誌";
var shortcut_key = "快捷鍵(點擊可修改)";
var no_shortcut_set = "未設置快捷鍵";
var press_key_to_set = "按鍵盤進行設置";
var click_here_when_done = "設置完成點擊這裡";
var restore_default = "恢復默認";
var data_saved_locally = "所有用戶數據保存在本地瀏覽器中";
var export_data_backup = "導出數據備份(ZIP)";
var import_data_restore = "導入數據恢復";
var import_warning = "導入數據將完全覆蓋當前所有數據，請謹慎操作";
var words = "單詞";
var no_dict_selected = "當前無正在學習的詞典";
var select_dict_to_start = "請選擇一本詞典開始學習";
var select_dict = "選擇詞典";
var change_progress = "更改進度";
var estimated_completion = "預計完成日期";
var current_progress = "當前進度";
var learned = "已學";
var completed_review_stage = "已學完，進入總複習階段";
var today_task = "今日任務";
var last_task = "上次任務";
var word_list = "詞表";
var daily_goal = "每日目標";
var words_count = "個單詞";
var change = "更改";
var new_words_count = "新詞數";
var review_last = "複習上次";
var review_previous = "複習之前";
var start_learning = "開始學習";
var continue_learning = "繼續學習";
var free_practice = "自由練習";
var continue_free_practice = "繼續自由練習";
var smart_learning = "智能學習";
var review = "複習";
var random_review = "隨機複習";
var my_dictionaries = "我的詞典";
var manage_dict = "管理詞典";
var create_personal_dict = "創建個人詞典";
var recommend = "推薦";
var articles = "文章";
var this_week_record = "本週學習記錄";
var change_book = "更換";
var today_study_time = "今日學習時長";
var total_study_days = "總學習天數";
var total_study_time = "總學習時長";
var my_books = "我的書籍";
var manage_books = "管理書籍";
var create_personal_book = "創建個人書籍";
var article_management = "文章管理";
var toggle_translation = "開關釋義顯示";
var switch_display_mode = "切換顯示模式";
var line_by_line = "逐行顯示";
var single_line = "單行顯示";
var comparison = "對照顯示";
var question = "問題";
var study_record = "學習記錄";
var play_next_after_end = "結束後播放下一篇";
var create_book = "創建書籍";
var edit_book = "修改書籍";
var dict_list = "詞典列表";
var book_list = "書籍列表";
var word = "單詞";
var phonetic = "音標";
var translation = "翻譯";
var example_sentence = "例句";
var phrase = "短語";
var synonym = "近義詞";
var related_words = "同根詞";
var etymology = "詞源";
var add_word = "添加單詞";
var edit_word = "修改單詞";
var create_dict = "創建詞典";
var edit_dict = "修改詞典";
var faq = "常見問題解答";
var is_free = "網站是免費的嗎？";
var cannot_type = "無法輸入，按下鍵盤沒有反應？";
var where_is_data = "數據在哪？怎麼在多台電腦/設備之間使用？";
var resource_sharing = "英語學習資源分享";
var all_resources = "全部資源";
var new_concept_english = "新概念英語";
var tv_movie = "電視/電影";
var grammar_learning = "語法學習";
var listening_training = "聽力訓練";
var warm_tips = "溫馨提示";
var resources_from_internet = "所有資源均來自互聯網收集，僅供學習交流使用";
var toggle_theme = "切換主題";
var english_document = "英語資料";
var empty_placeholder = "空蕩蕩的~";
var custom = "自定義";
var back = "返回";
var total_items = "條";
var batch_delete = "批量刪除";
var confirm_delete_selected = "確認刪除所有選中數據？";
var change_order = "改變順序";
var list_order_setting = "列表順序設置";
var reverse_current_page = "翻轉當前頁";
var reverse_all = "翻轉所有";
var random_current_page = "隨機當前頁";
var random_all = "隨機所有";
var apply = "應用";
var add = "添加";
var collect = "收藏";
var uncollect = "取消收藏";
var mark_mastered = "標記為已掌握";
var unmark_mastered = "取消標記已掌握";
var about_thanks = "感謝使用本项目！本项目是開源项目，免費使用，如果觉得有帮助，請在 GitHub 点個 Star，您的支持是我持續改進的動力！";
var github_address = "GitHub地址：";
var about_wechat_feedback = "微信反馈：";
var about_ticket_feedback = "工單反馈：";
var about_other_channels = "其他渠道：";
var wait_translation = "請等候翻译完成";
var migrate_data = "迁移數據";
var migrate_new_domain = "本網站已启用新域名";
var migrate_old_domain_notice = "老域名即将停用，由于瀏覽器安全限制，新老網站數據無法互通，需要您手動点击转移數據";
var migrate_later_notice = "如果您不想此時迁移，關闭弹窗后，您可隨時在\"設置\" -> \"數據管理\" 里面再次進行";
var author = "作者：";
var features = "特点：";
var suitable_for = "适合：";
var open_link = "打開链接";
var qq_group = "QQ群";
var xiaohongshu = "小红書";
var follow_x_account = "關注我的 X 账戶 {x_account}";
var twitter = "推特";
var send_email = "發送邮件到 {email}";
var email = "邮箱";
var xiaohongshu_desc = "關注小红書后，您可以获得開發团队的最新動態和更新內容，反馈您的使用体驗和建议，帮助我们改進产品，同時也能够及時了解我们的最新動態和更新內容。";
var xiaohongshu_qrcode = "小红書二维碼";
var community_desc = "加入我们的用戶社群后，您可以與我们的開發团队進行沟通，分享您的使用体驗和建议，帮助我们改進产品，同時也能够及時了解我们的最新動態和更新內容。";
var qq_qrcode = "QQ群二维碼";
var wechat_group = "微信群";
var wechat_qrcode = "微信群二维碼";
var github_project = "GITHUB 项目地址";
var ie_not_supported = "不支持 IE 瀏覽器";
var ie_use_modern_browser = "Type Words 使用現代技术構建，請使用 Chrome、Edge、Firefox 或 Safari 等現代瀏覽器访問。";
var download_chrome = "下載 Chrome";
var i_understand = "我知道了";
var ignore_case = "忽略大小寫";
var ignore_case_desc = "開启后，輸入時不区分大小寫，如輸入\"hello\"和\"Hello\"都会被認為是正確的";
var allow_dictation_tip = "允许默寫模式下顯示提示";
var allow_dictation_tip_desc = "開启后，可以通過将鼠標移動到單詞上或者按快捷鍵顯示正確答案";
var simple_word_filter = "簡單詞過滤";
var simple_word_filter_desc = "開启后，練习的單詞中不会包含簡單詞；文章統計的總詞數中不会包含簡單詞";
var simple_word_list = "簡單詞列表";
var words_comma_separated = "多個單詞用英文逗號隔號";
var sound_effect = "音效";
var pronunciation_accent = "單詞/句子發音口音";
var pronunciation_accent_desc = "仅單詞生效，文章固定美音";
var please_select = "請選擇";
var us_accent = "美音";
var uk_accent = "英音";
var keyboard_sound = "按鍵音";
var keyboard_sound_effect = "按鍵音效";
var volume = "音量";
var show_prev_next_word = "顯示上一個/下一個單詞";
var show_prev_next_word_desc = "開启后，練习中会在上方顯示上一個/下一個單詞";
var disable_practice_setting_dialog = "不默认顯示練习設置弹框";
var disable_practice_setting_dialog_desc = "在詞典详情页面，点击學习按钮后，是否顯示練习設置弹框";
var clear_input_on_error = "輸入错误時，清空已輸入内容";
var word_repeat_setting = "單詞循环設置";
var repeat_count = "循环次數";
var review_ratio = "複习比";
var review_ratio_desc = "複习詞与新詞的比例，修改后下次學习生效";
var word_auto_pronunciation = "單詞自動发音";
var speed = "倍速";
var effect_sound = "效果音（輸入错误、完成時的音效）";
var auto_switch = "自動切換";
var auto_next_word = "自動切換下一個單詞";
var auto_next_word_desc = "仅在跟寫時生效，聽寫、自测、默寫均不会自動切換，需要手動按空格键切換";
var auto_next_word_time = "自動切換下一個單詞時間";
var auto_next_word_time_desc = "正确輸入單詞后，自動跳转下一個單詞的時間";
var milliseconds = "毫秒";
var font_setting = "字体設置";
var foreign_font = "外语字体";
var chinese_font = "中文字体";
var auto_play_sentence = "自動播放句子";
var ignore_symbols_numbers_names = "輸入時忽略符號/數字/人名";
var settings = "設置";
var please_select_dict = "请先選擇一本詞典";
var learning_settings = "學習設置";
var total = "共";
var estimated = "预计";
var days_to_complete = "天完成";
var from_word = "从第";
var start_daily = "個开始，每日";
var new_words = "個新詞";
var review_ratio_tooltip = "複習詞与新詞的比例";
var review_ratio_notice_1 = "未完成學習時，複習數量按照設置的複習比生成，为0则不複習";
var review_ratio_notice_2 = "完成學習后，新詞數量固定为0，複習數量按照比例生成（若複習比小于1，以 1 计算）";
var daily_learning = "每日學習";
var learning_progress = "學習进度";
var select_from_dict = "从詞典選起始位置";
var change_in_settings = "可在設置頁面更改";
var keep_default_no_show = "保持默认，不再顯示";
var review_complete = "複習完成";
var today_task_complete = "今日任务完成";
var study_duration = "學習時長";
var accuracy_rate = "正确率";
var weekly_study_record = "本周學習記錄";
var studied = "已學習";
var total_words = "總詞數";
var restart_learning = "重學一遍";
var another_round = "再来一组";
var return_home = "返回主頁";
var import_tutorial = "導入教程";
var import_follow_template = "請按照模板的格式来填写數据";
var import_word_required = "單詞项为必填，其他项可不填";
var import_translation_hint = "翻譯：一行一個翻譯，前面詞性，后面内容（如n.取消）；多個翻譯請换行";
var import_example_hint = "例句：一行原文，一行譯文；多個請换";
var import_phrase_hint = "短语：一行原文，一行譯文；多個請换";
var two = "兩";
var lines = "行";
var import_other_hint = "同義詞、同根詞、詞源：請前往官方詞典，然后编辑其中某個單詞，参考其格式";
var template_download = "模板下载地址";
var word_import_template = "單詞導入模板";
var conflict_notice_title = "如果您在使用过程中发現以下情况:";
var keyboard_no_response = "按下鍵盘无反应";
var check_plugins_installed = "請检查是否安装";
var conflict_plugin_names = "\"视频调速\" \"Vim\" \"音视频增强\" \"網课助手\"";
var plugins_intercept_keyboard = "等插件/脚本，它们会拦截鍵盘按下事件，";
var cause_no_response = "導致在本網站練習時按鍵无反应";
var follow_steps_to_resolve = "，請根据以下步骤解决冲突：";
var try_incognito_mode = "用瀏覽器无痕模式打开本網站，確认能否正常輸入？";
var incognito_not_working = "无痕模式下无法輸入，";
var click_here = "点此";
var feedback_or_wechat = "反馈，或者加微信群反馈：";
var incognito_working = "无痕模式下可以輸入，则是插件/脚本導致的冲突";
var disable_plugin_or_exclude = "临時禁用对应插件/脚本，或在对应插件/脚本的設置里面排除本網站";
var install_extension_manager = "可安装此";
var chrome_extension = "插件(Chrome版本，需翻墙)";
var edge_extension = "插件(Edge版本，无需翻墙)";
var to_manage_extensions = "来快速激活、禁用其他插件";
var delete_key_goes_back = "按删除鍵却返回了上一頁";
var browser_360_shortcut = "在 360 瀏覽器中，默认設置了 \"删除鍵返回上一頁\" 的快捷鍵";
var change_browser_or_shortcut = "要么换瀏覽器，要么把 360 默认的快捷鍵删除：可在瀏覽器設置里面搜索 \"后退\" 或者 \"返回\"，将对应的快捷鍵删除";
var please_enter_name = "請輸入名稱";
var name_max_20_chars = "名稱不能超过20個字符";
var name_already_exists = "已有相同名稱！";
var add_success = "添加成功";
var edit_success = "修改成功";
var edit_and_add_to_dict = "修改成功并加入我的詞典";
var please_fill_complete = "請填写完整";
var name = "名稱";
var description = "描述";
var source_language = "原文語言";
var target_language = "譯文語言";
var english = "英語";
var german = "德語";
var japanese = "日語";
var code = "代码";
var chinese = "中文";
var multiple_choice = "選擇題";
var start = "开始";
var countdown = "倒计時";
var seconds = "秒";
var submit_exam = "提交試卷";
var exam_color_hint = "浅紅：錯误 深紅：未選 綠：正确";
var items_per_page = "条/頁";
var jump_to = "跳至";
var page_or_index = "頁/序号";
var please_fill_original = "請填写原文！";
var please_fill_title = "請填写標題！";
var please_fill_content = "請填写正文！";
var audio_added_success = "音頻添加成功";
var lrc_parse_success = "LRC文件解析成功";
var original_text = "原文";
var title = "標題";
var please_fill_original_title = "請填写原文標題";
var content = "正文";
var one_sentence_per_line = "一行一句，段落間空一行";
var name_config_tip = "配置人名之后，在練習時自动忽略(可選，默认开启)";
var name_config = "人名配置";
var please_paste_original = "請複制原文";
var usage_guide = "使用方法";
var copy_and_split = "複制原文，然后分句";
var click = "点击";
var split_sentence = "分句";
var auto_split = "按钮进行自动分句";
var or = "或";
var manual_split = "手动編輯分句";
var split_rule = "分句规則：一行一句，段落間空一行";
var after_edit_click = "修改完成后点击";
var sync_to_result = "按钮同步到左侧結果栏";
var please_fill_translation_title = "請填写翻譯標題";
var please_fill_translation = "請填写翻譯";
var translate = "翻譯";
var copy_translation_or_click = "複制譯文，如果没有請点击";
var result = "結果";
var editable_auto_sync = "均可編輯，編輯后点击應用按钮会自动同步";
var audio = "音頻";
var audio_management = "音頻管理";
var paragraph = "第";
var set_start_time = "設置开始時間";
var use_prev_end_time = "使用前一句的結束時間";
var minus_03s = "减 0.3 秒";
var end = "結束";
var set_end_time = "設置結束時間";
var edit_audio_align = "編輯音頻對齐";
var play = "播放";
var status = "状态";
var sentences_not_translated = "共有{count}句没有翻譯！";
var translation_complete = "翻譯完成！";
var save_and_next = "保存并添加下一篇";
var no_translation_comparison = "没有譯文對照~";
var adjust_audio_timeline = "调整音頻時間轴";
var audio_timeline_tutorial = "教程：点击音頻播放按钮，当播放到句子开始時，点击开始時間的記錄按钮；当播放到句子結束時，点击結束時間的記錄按钮，最后再試听是否正确";
var start_time = "开始時間";
var jump_to_seconds = "跳转至{seconds}秒";
var use_prev_end_seconds = "使用前一句的結束時間：{seconds}秒";
var decrease_03s = "减少 0.3 秒";
var increase_03s = "增加 0.3 秒";
var record = "記錄";
var end_time = "結束時間";
var audio_upload_notice = "1、上传的文件保存在本地电腦上，更換电腦數据將丟失，請及時備份數据\n2、LRC 文件用于解析句子對應音頻的位置，不一定准确，后续可自行修改";
var upload_audio = "上传音頻";
var upload_lrc = "上传 LRC 文件";
var name_management = "人名管理";
var name_ignore_config_desc = "配置需要忽略的人名，練習時自动忽略这些名稱(可選，默认开启)";
var add_name = "添加名稱";
var enter_name = "輸入名稱";
var collect_word = "收藏單詞";
var copy = "複制";
var copy_sentence = "複制句子";
var copied = "已複制";
var copy_word = "複制單詞";
var start_from_here = "从这开始";
var play_sentence = "播放句子";
var grammar_analysis = "語法分析";
var copied_open_grammar = "已複制！随后將打开語法分析网站！";
var youdao_translate = "有道詞典翻譯";
var translate_word = "翻譯單詞";
var translate_sentence = "翻譯句子";
var restart_practice = "重新練習";
var next_article = "下一篇";
var learning_record = "學習記錄";
var total_learning_time = "總學習時長";
var current = "当前";
var show_questions = "顯示題目";
var explanation = "解析";
var encouragement_95 = "太棒了！继續保持！";
var encouragement_85 = "表現很好，再接再厉！";
var encouragement_70 = "不錯的成绩，继續加油！";
var encouragement_default = "每次練習都是进步，坚持下去！";
var daily_task_complete = "今日任务完成";
var weekly_record = "本周學習記錄";
var study_progress = "學習进度";
var relearn = "重學一遍";
var start_from_beginning = "从头開始練習";
var another_group = "再来一组";
var back_to_home = "返回主頁";
var know_word_tip = "若誤選\"我認識\"，可按刪除鍵重新選擇！";
var press_delete_reinput = "請按刪除鍵重新輸入";
var press_space_continue = "請按空格鍵继續";
var shortcut = "快捷鍵";
var i_know = "我認識";
var i_dont_know = "不認識";
var phrases = "短語";
var synonyms = "同近義詞";
var word_root = "詞根";
var review_wrong_words = "複習錯詞";
var collapse = "收起";
var expand = "展開";
var minutes = "分钟";
var time = "時間";
var errors = "錯誤數";
var skip_to_next_stage = "跳到下一階段";
var skip_word = "跳過單詞";
var toggle_dictation_mode = "開關默写模式";
var send_failed = "發送失败";
var send_code_failed = "發送驗證碼失败";
var sending = "發送中";
var send_code = "發送驗證碼";
var agree_terms_notice = "繼續操作即表示你阅讀并同意我们的";
var user_agreement = "用户協議";
var and = "與";
var privacy_policy = "隱私政策";
var important_notice = "重要提示";
var dont_remind = "不再提醒";
var function_desc = "功能介绍";
var qa1_a = "網站是免費的吗？";
var qa1_q1 = "不完全免費，因为想要長久發展後續收費是必然的，但不会必须付費才能使用，我们尽量在免費與收費之間找一個平衡點";
var qa1_q2 = "項目是開源的，可自行部署";
var qa2_a = "无法輸入，按下鍵盤没有反應？";
var qa3_a = "數據在哪？怎么在多台電腦/設備之間使用？";
var qa3_q1 = "所有用戶數據 保存在本地瀏覽器中。如果您需要在不同的設備、瀏覽器上使用 Type Words， 您需要手动進行數據導出和導入";
var qa3_q2 = "設置 -> 數據設置 -> 在原電腦上導出數據 -> 通過社交软件發送给新電腦 -> 在新電腦上導入";
var qa3_q3 = "正在開發帳戶体繫";
var qa4_a = "網站自动規划的單詞數量太多了，怎么修改？";
var qa4_q1 = "默認復習詞數量與新詞數量是1：4，如果新詞40個，那么会復習40個上次學習的，復習120個之前學習的（由近到远）";
var qa4_q2 = "您可在通過 設置 -> 單詞設置 -> 復習比 修改";
var qa5_a = "完成一次學習要很久，流程是不是太冗長了？";
var qa5_q1 = "这的確是個問題，冗長的流程容易让人失去背單詞的积极性，我正在思考如何优化學習流程，如果您有好的建議欢迎反饋";
var qa5_q2 = "錯誤單詞会重新再来，如果只是手誤按錯了，後續重新練習時，可以按Tab鍵跳過。无法判斷用戶是手誤還是真的不会，所以只能錯詞統統重来，直到正確为止";
var qa5_q3 = "復習時，只有選擇了不認识的單詞才会要求聽寫與默寫，这是合理的，不過目前会出现同一個單詞復習了N遍的問題";
var qa5_q4 = "上線了帳戶体繫之後，会添加艾宾浩斯的記憶曲線功能，到時候規划的復習單詞会比现在更智能";
var qa6_a = "会添加艾宾浩斯的記憶曲線功能吗？";
var qa7_a = "能否  自行添加單詞/自定義詞典/導入自己的單詞/修改單詞內容？";
var qa7_q1 = "可以，在單詞界面，點擊“創建個人詞典”";
var qa7_q2 = "創建完成之後，在詞典詳情頁面，點擊 “添加單詞” 圖標，即可添加自己的單詞";
var qa7_q3 = "也可以點擊 “導入” 圖標，批量導入（需要严格按照模板xlsx格式来）";
var qa8_a = "能否  自行添加文章/自定義书籍/導入自己的文章/修改文章內容？";
var qa8_q1 = "可以，操作步骤基本和添加單詞的一样";
var qa8_q2 = "在文章界面，點擊“創建個人书籍”";
var qa8_q3 = "創建完成之後，在书籍詳情頁面，點擊顶部的 “文章管理” 按鈕，即可添加自己的文章";
var qa9_a = "怎么關闭按鍵音？";
var qa9_q = "設置 -> 通用設置 -> 音效 -> 按鍵音，關闭即可";
var qa10_a = "平板能用吗？";
var qa10_q1 = "平板可以使用，但使用蓝牙鍵盤体驗会更好，毕竟繫統自带的虚拟鍵盤占了1/3的屏幕空間，比较影響观感";
var qa10_q2 = "連接蓝牙鍵盤後，安卓平板，需要在瀏覽器里主动開啟 “電腦模式”；iPad无需此操作（因为 Safari 默認電腦模式）";
var qa11_a = "手機能用吗？";
var qa11_q = "手機可以使用，但暫時未進行其针對优化，使用起来可能会有不方便的地方，還是建議在電腦或平板上用";
var qa12_a = "有APP、小程序吗？";
var qa12_q = "无，只有網站";
var qa13_a = "如何向開發团队反饋問題和功能需求？";
var qa13_q1 = "可以加入我们官方 微信 群, 詳細的描述您想要的功能以及告知这個功能想要解决的問題是什么";
var qa13_q2 = "如果您在應用中發现了錯誤或漏洞，請提供詳細的描述和重现問題的步骤，當然最好提供一個小視頻";
var qa13_q3 = "也可以给我们提工單";
var qa13_q4 = "也可以去 github/issues 提交";
const tw = {
	app_desc: app_desc,
	app_name: app_name,
	start_word_practice: start_word_practice,
	start_article_practice: start_article_practice,
	home_word_practice: home_word_practice,
	home_word_practice_desc1: home_word_practice_desc1,
	home_word_practice_desc2: home_word_practice_desc2,
	home_word_practice_desc3: home_word_practice_desc3,
	home_article_practice: home_article_practice,
	home_article_practice_desc1: home_article_practice_desc1,
	home_article_practice_desc2: home_article_practice_desc2,
	home_article_practice_desc3: home_article_practice_desc3,
	home_collection: home_collection,
	home_collection_desc1: home_collection_desc1,
	home_collection_desc2: home_collection_desc2,
	home_collection_desc3: home_collection_desc3,
	home_vocabulary: home_vocabulary,
	home_vocabulary_desc: home_vocabulary_desc,
	home_free_opensource: home_free_opensource,
	home_free_opensource_desc1: home_free_opensource_desc1,
	home_free_opensource_desc2: home_free_opensource_desc2,
	home_free_opensource_desc3: home_free_opensource_desc3,
	home_customization: home_customization,
	home_customization_desc1: home_customization_desc1,
	home_customization_desc2: home_customization_desc2,
	home_customization_desc3: home_customization_desc3,
	home_design: home_design,
	home_design_desc1: home_design_desc1,
	home_design_desc2: home_design_desc2,
	home_design_desc3: home_design_desc3,
	home_personalized: home_personalized,
	home_personalized_desc1: home_personalized_desc1,
	home_personalized_desc2: home_personalized_desc2,
	home_personalized_desc3: home_personalized_desc3,
	cn_limit_no1: cn_limit_no1,
	cn_limit_no2: cn_limit_no2,
	setting: setting,
	edit: edit,
	"delete": "刪除",
	cancel: cancel,
	confirm: confirm,
	save: save,
	close: close,
	search: search,
	more: more,
	loading: loading,
	introduction: introduction,
	learn: learn,
	practice: practice,
	test: test,
	feedback: feedback,
	document: document,
	help: help,
	about: about,
	login: login,
	register: register,
	register_account: register_account,
	register_new_account: register_new_account,
	code_login: code_login,
	password_login: password_login,
	phone_placeholder: phone_placeholder,
	code_placeholder: code_placeholder,
	account_placeholder: account_placeholder,
	password_placeholder: password_placeholder,
	auto_register_notice: auto_register_notice,
	forgot_password: forgot_password,
	reset_password: reset_password,
	set_password_placeholder: set_password_placeholder,
	confirm_password_placeholder: confirm_password_placeholder,
	new_password_placeholder: new_password_placeholder,
	confirm_new_password: confirm_new_password,
	wechat_scan_login: wechat_scan_login,
	scan_success: scan_success,
	tap_allow_in_wechat: tap_allow_in_wechat,
	login_cancelled: login_cancelled,
	login_again: login_again,
	sync_data: sync_data,
	local_data_detected: local_data_detected,
	sync_to_account_question: sync_to_account_question,
	no_sync: no_sync,
	sync: sync,
	syncing: syncing,
	sync_failed: sync_failed,
	sync_success: sync_success,
	enter_website: enter_website,
	general_settings: general_settings,
	word_settings: word_settings,
	article_settings: article_settings,
	data_management: data_management,
	shortcut_settings: shortcut_settings,
	update_log: update_log,
	"function": "功能",
	shortcut_key: shortcut_key,
	no_shortcut_set: no_shortcut_set,
	press_key_to_set: press_key_to_set,
	click_here_when_done: click_here_when_done,
	restore_default: restore_default,
	data_saved_locally: data_saved_locally,
	export_data_backup: export_data_backup,
	import_data_restore: import_data_restore,
	import_warning: import_warning,
	words: words,
	no_dict_selected: no_dict_selected,
	select_dict_to_start: select_dict_to_start,
	select_dict: select_dict,
	change_progress: change_progress,
	estimated_completion: estimated_completion,
	current_progress: current_progress,
	learned: learned,
	completed_review_stage: completed_review_stage,
	today_task: today_task,
	last_task: last_task,
	word_list: word_list,
	daily_goal: daily_goal,
	words_count: words_count,
	change: change,
	new_words_count: new_words_count,
	review_last: review_last,
	review_previous: review_previous,
	start_learning: start_learning,
	continue_learning: continue_learning,
	free_practice: free_practice,
	continue_free_practice: continue_free_practice,
	smart_learning: smart_learning,
	review: review,
	random_review: random_review,
	my_dictionaries: my_dictionaries,
	manage_dict: manage_dict,
	create_personal_dict: create_personal_dict,
	recommend: recommend,
	articles: articles,
	this_week_record: this_week_record,
	change_book: change_book,
	today_study_time: today_study_time,
	total_study_days: total_study_days,
	total_study_time: total_study_time,
	my_books: my_books,
	manage_books: manage_books,
	create_personal_book: create_personal_book,
	article_management: article_management,
	toggle_translation: toggle_translation,
	switch_display_mode: switch_display_mode,
	line_by_line: line_by_line,
	single_line: single_line,
	comparison: comparison,
	question: question,
	study_record: study_record,
	play_next_after_end: play_next_after_end,
	create_book: create_book,
	edit_book: edit_book,
	dict_list: dict_list,
	book_list: book_list,
	word: word,
	phonetic: phonetic,
	translation: translation,
	example_sentence: example_sentence,
	phrase: phrase,
	synonym: synonym,
	related_words: related_words,
	etymology: etymology,
	add_word: add_word,
	edit_word: edit_word,
	create_dict: create_dict,
	edit_dict: edit_dict,
	"import": "導入",
	"export": "導出",
	faq: faq,
	is_free: is_free,
	cannot_type: cannot_type,
	where_is_data: where_is_data,
	resource_sharing: resource_sharing,
	all_resources: all_resources,
	new_concept_english: new_concept_english,
	tv_movie: tv_movie,
	grammar_learning: grammar_learning,
	listening_training: listening_training,
	warm_tips: warm_tips,
	resources_from_internet: resources_from_internet,
	toggle_theme: toggle_theme,
	english_document: english_document,
	empty_placeholder: empty_placeholder,
	custom: custom,
	back: back,
	total_items: total_items,
	batch_delete: batch_delete,
	confirm_delete_selected: confirm_delete_selected,
	change_order: change_order,
	list_order_setting: list_order_setting,
	reverse_current_page: reverse_current_page,
	reverse_all: reverse_all,
	random_current_page: random_current_page,
	random_all: random_all,
	apply: apply,
	add: add,
	collect: collect,
	uncollect: uncollect,
	mark_mastered: mark_mastered,
	unmark_mastered: unmark_mastered,
	about_thanks: about_thanks,
	github_address: github_address,
	about_wechat_feedback: about_wechat_feedback,
	about_ticket_feedback: about_ticket_feedback,
	about_other_channels: about_other_channels,
	wait_translation: wait_translation,
	migrate_data: migrate_data,
	migrate_new_domain: migrate_new_domain,
	migrate_old_domain_notice: migrate_old_domain_notice,
	migrate_later_notice: migrate_later_notice,
	author: author,
	features: features,
	suitable_for: suitable_for,
	open_link: open_link,
	qq_group: qq_group,
	xiaohongshu: xiaohongshu,
	follow_x_account: follow_x_account,
	twitter: twitter,
	send_email: send_email,
	email: email,
	xiaohongshu_desc: xiaohongshu_desc,
	xiaohongshu_qrcode: xiaohongshu_qrcode,
	community_desc: community_desc,
	qq_qrcode: qq_qrcode,
	wechat_group: wechat_group,
	wechat_qrcode: wechat_qrcode,
	github_project: github_project,
	ie_not_supported: ie_not_supported,
	ie_use_modern_browser: ie_use_modern_browser,
	download_chrome: download_chrome,
	i_understand: i_understand,
	ignore_case: ignore_case,
	ignore_case_desc: ignore_case_desc,
	allow_dictation_tip: allow_dictation_tip,
	allow_dictation_tip_desc: allow_dictation_tip_desc,
	simple_word_filter: simple_word_filter,
	simple_word_filter_desc: simple_word_filter_desc,
	simple_word_list: simple_word_list,
	words_comma_separated: words_comma_separated,
	sound_effect: sound_effect,
	pronunciation_accent: pronunciation_accent,
	pronunciation_accent_desc: pronunciation_accent_desc,
	please_select: please_select,
	us_accent: us_accent,
	uk_accent: uk_accent,
	keyboard_sound: keyboard_sound,
	keyboard_sound_effect: keyboard_sound_effect,
	volume: volume,
	show_prev_next_word: show_prev_next_word,
	show_prev_next_word_desc: show_prev_next_word_desc,
	disable_practice_setting_dialog: disable_practice_setting_dialog,
	disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc,
	clear_input_on_error: clear_input_on_error,
	word_repeat_setting: word_repeat_setting,
	repeat_count: repeat_count,
	review_ratio: review_ratio,
	review_ratio_desc: review_ratio_desc,
	word_auto_pronunciation: word_auto_pronunciation,
	speed: speed,
	effect_sound: effect_sound,
	auto_switch: auto_switch,
	auto_next_word: auto_next_word,
	auto_next_word_desc: auto_next_word_desc,
	auto_next_word_time: auto_next_word_time,
	auto_next_word_time_desc: auto_next_word_time_desc,
	milliseconds: milliseconds,
	font_setting: font_setting,
	foreign_font: foreign_font,
	chinese_font: chinese_font,
	auto_play_sentence: auto_play_sentence,
	ignore_symbols_numbers_names: ignore_symbols_numbers_names,
	settings: settings,
	please_select_dict: please_select_dict,
	learning_settings: learning_settings,
	total: total,
	estimated: estimated,
	days_to_complete: days_to_complete,
	from_word: from_word,
	start_daily: start_daily,
	new_words: new_words,
	review_ratio_tooltip: review_ratio_tooltip,
	review_ratio_notice_1: review_ratio_notice_1,
	review_ratio_notice_2: review_ratio_notice_2,
	daily_learning: daily_learning,
	learning_progress: learning_progress,
	select_from_dict: select_from_dict,
	change_in_settings: change_in_settings,
	keep_default_no_show: keep_default_no_show,
	review_complete: review_complete,
	today_task_complete: today_task_complete,
	study_duration: study_duration,
	accuracy_rate: accuracy_rate,
	weekly_study_record: weekly_study_record,
	studied: studied,
	total_words: total_words,
	restart_learning: restart_learning,
	another_round: another_round,
	return_home: return_home,
	import_tutorial: import_tutorial,
	import_follow_template: import_follow_template,
	import_word_required: import_word_required,
	import_translation_hint: import_translation_hint,
	import_example_hint: import_example_hint,
	import_phrase_hint: import_phrase_hint,
	two: two,
	lines: lines,
	import_other_hint: import_other_hint,
	template_download: template_download,
	word_import_template: word_import_template,
	conflict_notice_title: conflict_notice_title,
	keyboard_no_response: keyboard_no_response,
	check_plugins_installed: check_plugins_installed,
	conflict_plugin_names: conflict_plugin_names,
	plugins_intercept_keyboard: plugins_intercept_keyboard,
	cause_no_response: cause_no_response,
	follow_steps_to_resolve: follow_steps_to_resolve,
	try_incognito_mode: try_incognito_mode,
	incognito_not_working: incognito_not_working,
	click_here: click_here,
	feedback_or_wechat: feedback_or_wechat,
	incognito_working: incognito_working,
	disable_plugin_or_exclude: disable_plugin_or_exclude,
	install_extension_manager: install_extension_manager,
	chrome_extension: chrome_extension,
	edge_extension: edge_extension,
	to_manage_extensions: to_manage_extensions,
	delete_key_goes_back: delete_key_goes_back,
	browser_360_shortcut: browser_360_shortcut,
	change_browser_or_shortcut: change_browser_or_shortcut,
	please_enter_name: please_enter_name,
	name_max_20_chars: name_max_20_chars,
	name_already_exists: name_already_exists,
	add_success: add_success,
	edit_success: edit_success,
	edit_and_add_to_dict: edit_and_add_to_dict,
	please_fill_complete: please_fill_complete,
	name: name,
	description: description,
	source_language: source_language,
	target_language: target_language,
	english: english,
	german: german,
	japanese: japanese,
	code: code,
	chinese: chinese,
	multiple_choice: multiple_choice,
	start: start,
	countdown: countdown,
	seconds: seconds,
	submit_exam: submit_exam,
	exam_color_hint: exam_color_hint,
	items_per_page: items_per_page,
	jump_to: jump_to,
	page_or_index: page_or_index,
	please_fill_original: please_fill_original,
	please_fill_title: please_fill_title,
	please_fill_content: please_fill_content,
	audio_added_success: audio_added_success,
	lrc_parse_success: lrc_parse_success,
	original_text: original_text,
	title: title,
	please_fill_original_title: please_fill_original_title,
	content: content,
	one_sentence_per_line: one_sentence_per_line,
	name_config_tip: name_config_tip,
	name_config: name_config,
	please_paste_original: please_paste_original,
	usage_guide: usage_guide,
	copy_and_split: copy_and_split,
	click: click,
	split_sentence: split_sentence,
	auto_split: auto_split,
	or: or,
	manual_split: manual_split,
	split_rule: split_rule,
	after_edit_click: after_edit_click,
	sync_to_result: sync_to_result,
	please_fill_translation_title: please_fill_translation_title,
	please_fill_translation: please_fill_translation,
	translate: translate,
	copy_translation_or_click: copy_translation_or_click,
	result: result,
	editable_auto_sync: editable_auto_sync,
	audio: audio,
	audio_management: audio_management,
	paragraph: paragraph,
	set_start_time: set_start_time,
	use_prev_end_time: use_prev_end_time,
	minus_03s: minus_03s,
	end: end,
	set_end_time: set_end_time,
	edit_audio_align: edit_audio_align,
	play: play,
	status: status,
	sentences_not_translated: sentences_not_translated,
	translation_complete: translation_complete,
	save_and_next: save_and_next,
	no_translation_comparison: no_translation_comparison,
	adjust_audio_timeline: adjust_audio_timeline,
	audio_timeline_tutorial: audio_timeline_tutorial,
	start_time: start_time,
	jump_to_seconds: jump_to_seconds,
	use_prev_end_seconds: use_prev_end_seconds,
	decrease_03s: decrease_03s,
	increase_03s: increase_03s,
	record: record,
	end_time: end_time,
	audio_upload_notice: audio_upload_notice,
	upload_audio: upload_audio,
	upload_lrc: upload_lrc,
	name_management: name_management,
	name_ignore_config_desc: name_ignore_config_desc,
	add_name: add_name,
	enter_name: enter_name,
	collect_word: collect_word,
	copy: copy,
	copy_sentence: copy_sentence,
	copied: copied,
	copy_word: copy_word,
	start_from_here: start_from_here,
	play_sentence: play_sentence,
	grammar_analysis: grammar_analysis,
	copied_open_grammar: copied_open_grammar,
	youdao_translate: youdao_translate,
	translate_word: translate_word,
	translate_sentence: translate_sentence,
	restart_practice: restart_practice,
	next_article: next_article,
	learning_record: learning_record,
	total_learning_time: total_learning_time,
	current: current,
	show_questions: show_questions,
	explanation: explanation,
	encouragement_95: encouragement_95,
	encouragement_85: encouragement_85,
	encouragement_70: encouragement_70,
	encouragement_default: encouragement_default,
	daily_task_complete: daily_task_complete,
	weekly_record: weekly_record,
	study_progress: study_progress,
	relearn: relearn,
	start_from_beginning: start_from_beginning,
	another_group: another_group,
	back_to_home: back_to_home,
	know_word_tip: know_word_tip,
	press_delete_reinput: press_delete_reinput,
	press_space_continue: press_space_continue,
	shortcut: shortcut,
	i_know: i_know,
	i_dont_know: i_dont_know,
	phrases: phrases,
	synonyms: synonyms,
	word_root: word_root,
	review_wrong_words: review_wrong_words,
	collapse: collapse,
	expand: expand,
	minutes: minutes,
	time: time,
	errors: errors,
	skip_to_next_stage: skip_to_next_stage,
	skip_word: skip_word,
	toggle_dictation_mode: toggle_dictation_mode,
	send_failed: send_failed,
	send_code_failed: send_code_failed,
	sending: sending,
	send_code: send_code,
	agree_terms_notice: agree_terms_notice,
	user_agreement: user_agreement,
	and: and,
	privacy_policy: privacy_policy,
	important_notice: important_notice,
	dont_remind: dont_remind,
	function_desc: function_desc,
	qa1_a: qa1_a,
	qa1_q1: qa1_q1,
	qa1_q2: qa1_q2,
	qa2_a: qa2_a,
	qa3_a: qa3_a,
	qa3_q1: qa3_q1,
	qa3_q2: qa3_q2,
	qa3_q3: qa3_q3,
	qa4_a: qa4_a,
	qa4_q1: qa4_q1,
	qa4_q2: qa4_q2,
	qa5_a: qa5_a,
	qa5_q1: qa5_q1,
	qa5_q2: qa5_q2,
	qa5_q3: qa5_q3,
	qa5_q4: qa5_q4,
	qa6_a: qa6_a,
	qa7_a: qa7_a,
	qa7_q1: qa7_q1,
	qa7_q2: qa7_q2,
	qa7_q3: qa7_q3,
	qa8_a: qa8_a,
	qa8_q1: qa8_q1,
	qa8_q2: qa8_q2,
	qa8_q3: qa8_q3,
	qa9_a: qa9_a,
	qa9_q: qa9_q,
	qa10_a: qa10_a,
	qa10_q1: qa10_q1,
	qa10_q2: qa10_q2,
	qa11_a: qa11_a,
	qa11_q: qa11_q,
	qa12_a: qa12_a,
	qa12_q: qa12_q,
	qa13_a: qa13_a,
	qa13_q1: qa13_q1,
	qa13_q2: qa13_q2,
	qa13_q3: qa13_q3,
	qa13_q4: qa13_q4
};

const tw$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about,
  about_other_channels: about_other_channels,
  about_thanks: about_thanks,
  about_ticket_feedback: about_ticket_feedback,
  about_wechat_feedback: about_wechat_feedback,
  account_placeholder: account_placeholder,
  accuracy_rate: accuracy_rate,
  add: add,
  add_name: add_name,
  add_success: add_success,
  add_word: add_word,
  adjust_audio_timeline: adjust_audio_timeline,
  after_edit_click: after_edit_click,
  agree_terms_notice: agree_terms_notice,
  all_resources: all_resources,
  allow_dictation_tip: allow_dictation_tip,
  allow_dictation_tip_desc: allow_dictation_tip_desc,
  and: and,
  another_group: another_group,
  another_round: another_round,
  app_desc: app_desc,
  app_name: app_name,
  apply: apply,
  article_management: article_management,
  article_settings: article_settings,
  articles: articles,
  audio: audio,
  audio_added_success: audio_added_success,
  audio_management: audio_management,
  audio_timeline_tutorial: audio_timeline_tutorial,
  audio_upload_notice: audio_upload_notice,
  author: author,
  auto_next_word: auto_next_word,
  auto_next_word_desc: auto_next_word_desc,
  auto_next_word_time: auto_next_word_time,
  auto_next_word_time_desc: auto_next_word_time_desc,
  auto_play_sentence: auto_play_sentence,
  auto_register_notice: auto_register_notice,
  auto_split: auto_split,
  auto_switch: auto_switch,
  back: back,
  back_to_home: back_to_home,
  batch_delete: batch_delete,
  book_list: book_list,
  browser_360_shortcut: browser_360_shortcut,
  cancel: cancel,
  cannot_type: cannot_type,
  cause_no_response: cause_no_response,
  change: change,
  change_book: change_book,
  change_browser_or_shortcut: change_browser_or_shortcut,
  change_in_settings: change_in_settings,
  change_order: change_order,
  change_progress: change_progress,
  check_plugins_installed: check_plugins_installed,
  chinese: chinese,
  chinese_font: chinese_font,
  chrome_extension: chrome_extension,
  clear_input_on_error: clear_input_on_error,
  click: click,
  click_here: click_here,
  click_here_when_done: click_here_when_done,
  close: close,
  cn_limit_no1: cn_limit_no1,
  cn_limit_no2: cn_limit_no2,
  code: code,
  code_login: code_login,
  code_placeholder: code_placeholder,
  collapse: collapse,
  collect: collect,
  collect_word: collect_word,
  community_desc: community_desc,
  comparison: comparison,
  completed_review_stage: completed_review_stage,
  confirm: confirm,
  confirm_delete_selected: confirm_delete_selected,
  confirm_new_password: confirm_new_password,
  confirm_password_placeholder: confirm_password_placeholder,
  conflict_notice_title: conflict_notice_title,
  conflict_plugin_names: conflict_plugin_names,
  content: content,
  continue_free_practice: continue_free_practice,
  continue_learning: continue_learning,
  copied: copied,
  copied_open_grammar: copied_open_grammar,
  copy: copy,
  copy_and_split: copy_and_split,
  copy_sentence: copy_sentence,
  copy_translation_or_click: copy_translation_or_click,
  copy_word: copy_word,
  countdown: countdown,
  create_book: create_book,
  create_dict: create_dict,
  create_personal_book: create_personal_book,
  create_personal_dict: create_personal_dict,
  current: current,
  current_progress: current_progress,
  custom: custom,
  daily_goal: daily_goal,
  daily_learning: daily_learning,
  daily_task_complete: daily_task_complete,
  data_management: data_management,
  data_saved_locally: data_saved_locally,
  days_to_complete: days_to_complete,
  decrease_03s: decrease_03s,
  default: tw,
  delete_key_goes_back: delete_key_goes_back,
  description: description,
  dict_list: dict_list,
  disable_plugin_or_exclude: disable_plugin_or_exclude,
  disable_practice_setting_dialog: disable_practice_setting_dialog,
  disable_practice_setting_dialog_desc: disable_practice_setting_dialog_desc,
  document: document,
  dont_remind: dont_remind,
  download_chrome: download_chrome,
  edge_extension: edge_extension,
  edit: edit,
  edit_and_add_to_dict: edit_and_add_to_dict,
  edit_audio_align: edit_audio_align,
  edit_book: edit_book,
  edit_dict: edit_dict,
  edit_success: edit_success,
  edit_word: edit_word,
  editable_auto_sync: editable_auto_sync,
  effect_sound: effect_sound,
  email: email,
  empty_placeholder: empty_placeholder,
  encouragement_70: encouragement_70,
  encouragement_85: encouragement_85,
  encouragement_95: encouragement_95,
  encouragement_default: encouragement_default,
  end: end,
  end_time: end_time,
  english: english,
  english_document: english_document,
  enter_name: enter_name,
  enter_website: enter_website,
  errors: errors,
  estimated: estimated,
  estimated_completion: estimated_completion,
  etymology: etymology,
  exam_color_hint: exam_color_hint,
  example_sentence: example_sentence,
  expand: expand,
  explanation: explanation,
  export_data_backup: export_data_backup,
  faq: faq,
  features: features,
  feedback: feedback,
  feedback_or_wechat: feedback_or_wechat,
  follow_steps_to_resolve: follow_steps_to_resolve,
  follow_x_account: follow_x_account,
  font_setting: font_setting,
  foreign_font: foreign_font,
  forgot_password: forgot_password,
  free_practice: free_practice,
  from_word: from_word,
  function_desc: function_desc,
  general_settings: general_settings,
  german: german,
  github_address: github_address,
  github_project: github_project,
  grammar_analysis: grammar_analysis,
  grammar_learning: grammar_learning,
  help: help,
  home_article_practice: home_article_practice,
  home_article_practice_desc1: home_article_practice_desc1,
  home_article_practice_desc2: home_article_practice_desc2,
  home_article_practice_desc3: home_article_practice_desc3,
  home_collection: home_collection,
  home_collection_desc1: home_collection_desc1,
  home_collection_desc2: home_collection_desc2,
  home_collection_desc3: home_collection_desc3,
  home_customization: home_customization,
  home_customization_desc1: home_customization_desc1,
  home_customization_desc2: home_customization_desc2,
  home_customization_desc3: home_customization_desc3,
  home_design: home_design,
  home_design_desc1: home_design_desc1,
  home_design_desc2: home_design_desc2,
  home_design_desc3: home_design_desc3,
  home_free_opensource: home_free_opensource,
  home_free_opensource_desc1: home_free_opensource_desc1,
  home_free_opensource_desc2: home_free_opensource_desc2,
  home_free_opensource_desc3: home_free_opensource_desc3,
  home_personalized: home_personalized,
  home_personalized_desc1: home_personalized_desc1,
  home_personalized_desc2: home_personalized_desc2,
  home_personalized_desc3: home_personalized_desc3,
  home_vocabulary: home_vocabulary,
  home_vocabulary_desc: home_vocabulary_desc,
  home_word_practice: home_word_practice,
  home_word_practice_desc1: home_word_practice_desc1,
  home_word_practice_desc2: home_word_practice_desc2,
  home_word_practice_desc3: home_word_practice_desc3,
  i_dont_know: i_dont_know,
  i_know: i_know,
  i_understand: i_understand,
  ie_not_supported: ie_not_supported,
  ie_use_modern_browser: ie_use_modern_browser,
  ignore_case: ignore_case,
  ignore_case_desc: ignore_case_desc,
  ignore_symbols_numbers_names: ignore_symbols_numbers_names,
  import_data_restore: import_data_restore,
  import_example_hint: import_example_hint,
  import_follow_template: import_follow_template,
  import_other_hint: import_other_hint,
  import_phrase_hint: import_phrase_hint,
  import_translation_hint: import_translation_hint,
  import_tutorial: import_tutorial,
  import_warning: import_warning,
  import_word_required: import_word_required,
  important_notice: important_notice,
  incognito_not_working: incognito_not_working,
  incognito_working: incognito_working,
  increase_03s: increase_03s,
  install_extension_manager: install_extension_manager,
  introduction: introduction,
  is_free: is_free,
  items_per_page: items_per_page,
  japanese: japanese,
  jump_to: jump_to,
  jump_to_seconds: jump_to_seconds,
  keep_default_no_show: keep_default_no_show,
  keyboard_no_response: keyboard_no_response,
  keyboard_sound: keyboard_sound,
  keyboard_sound_effect: keyboard_sound_effect,
  know_word_tip: know_word_tip,
  last_task: last_task,
  learn: learn,
  learned: learned,
  learning_progress: learning_progress,
  learning_record: learning_record,
  learning_settings: learning_settings,
  line_by_line: line_by_line,
  lines: lines,
  list_order_setting: list_order_setting,
  listening_training: listening_training,
  loading: loading,
  local_data_detected: local_data_detected,
  login: login,
  login_again: login_again,
  login_cancelled: login_cancelled,
  lrc_parse_success: lrc_parse_success,
  manage_books: manage_books,
  manage_dict: manage_dict,
  manual_split: manual_split,
  mark_mastered: mark_mastered,
  migrate_data: migrate_data,
  migrate_later_notice: migrate_later_notice,
  migrate_new_domain: migrate_new_domain,
  migrate_old_domain_notice: migrate_old_domain_notice,
  milliseconds: milliseconds,
  minus_03s: minus_03s,
  minutes: minutes,
  more: more,
  multiple_choice: multiple_choice,
  my_books: my_books,
  my_dictionaries: my_dictionaries,
  name: name,
  name_already_exists: name_already_exists,
  name_config: name_config,
  name_config_tip: name_config_tip,
  name_ignore_config_desc: name_ignore_config_desc,
  name_management: name_management,
  name_max_20_chars: name_max_20_chars,
  new_concept_english: new_concept_english,
  new_password_placeholder: new_password_placeholder,
  new_words: new_words,
  new_words_count: new_words_count,
  next_article: next_article,
  no_dict_selected: no_dict_selected,
  no_shortcut_set: no_shortcut_set,
  no_sync: no_sync,
  no_translation_comparison: no_translation_comparison,
  one_sentence_per_line: one_sentence_per_line,
  open_link: open_link,
  or: or,
  original_text: original_text,
  page_or_index: page_or_index,
  paragraph: paragraph,
  password_login: password_login,
  password_placeholder: password_placeholder,
  phone_placeholder: phone_placeholder,
  phonetic: phonetic,
  phrase: phrase,
  phrases: phrases,
  play: play,
  play_next_after_end: play_next_after_end,
  play_sentence: play_sentence,
  please_enter_name: please_enter_name,
  please_fill_complete: please_fill_complete,
  please_fill_content: please_fill_content,
  please_fill_original: please_fill_original,
  please_fill_original_title: please_fill_original_title,
  please_fill_title: please_fill_title,
  please_fill_translation: please_fill_translation,
  please_fill_translation_title: please_fill_translation_title,
  please_paste_original: please_paste_original,
  please_select: please_select,
  please_select_dict: please_select_dict,
  plugins_intercept_keyboard: plugins_intercept_keyboard,
  practice: practice,
  press_delete_reinput: press_delete_reinput,
  press_key_to_set: press_key_to_set,
  press_space_continue: press_space_continue,
  privacy_policy: privacy_policy,
  pronunciation_accent: pronunciation_accent,
  pronunciation_accent_desc: pronunciation_accent_desc,
  qa10_a: qa10_a,
  qa10_q1: qa10_q1,
  qa10_q2: qa10_q2,
  qa11_a: qa11_a,
  qa11_q: qa11_q,
  qa12_a: qa12_a,
  qa12_q: qa12_q,
  qa13_a: qa13_a,
  qa13_q1: qa13_q1,
  qa13_q2: qa13_q2,
  qa13_q3: qa13_q3,
  qa13_q4: qa13_q4,
  qa1_a: qa1_a,
  qa1_q1: qa1_q1,
  qa1_q2: qa1_q2,
  qa2_a: qa2_a,
  qa3_a: qa3_a,
  qa3_q1: qa3_q1,
  qa3_q2: qa3_q2,
  qa3_q3: qa3_q3,
  qa4_a: qa4_a,
  qa4_q1: qa4_q1,
  qa4_q2: qa4_q2,
  qa5_a: qa5_a,
  qa5_q1: qa5_q1,
  qa5_q2: qa5_q2,
  qa5_q3: qa5_q3,
  qa5_q4: qa5_q4,
  qa6_a: qa6_a,
  qa7_a: qa7_a,
  qa7_q1: qa7_q1,
  qa7_q2: qa7_q2,
  qa7_q3: qa7_q3,
  qa8_a: qa8_a,
  qa8_q1: qa8_q1,
  qa8_q2: qa8_q2,
  qa8_q3: qa8_q3,
  qa9_a: qa9_a,
  qa9_q: qa9_q,
  qq_group: qq_group,
  qq_qrcode: qq_qrcode,
  question: question,
  random_all: random_all,
  random_current_page: random_current_page,
  random_review: random_review,
  recommend: recommend,
  record: record,
  register: register,
  register_account: register_account,
  register_new_account: register_new_account,
  related_words: related_words,
  relearn: relearn,
  repeat_count: repeat_count,
  reset_password: reset_password,
  resource_sharing: resource_sharing,
  resources_from_internet: resources_from_internet,
  restart_learning: restart_learning,
  restart_practice: restart_practice,
  restore_default: restore_default,
  result: result,
  return_home: return_home,
  reverse_all: reverse_all,
  reverse_current_page: reverse_current_page,
  review: review,
  review_complete: review_complete,
  review_last: review_last,
  review_previous: review_previous,
  review_ratio: review_ratio,
  review_ratio_desc: review_ratio_desc,
  review_ratio_notice_1: review_ratio_notice_1,
  review_ratio_notice_2: review_ratio_notice_2,
  review_ratio_tooltip: review_ratio_tooltip,
  review_wrong_words: review_wrong_words,
  save: save,
  save_and_next: save_and_next,
  scan_success: scan_success,
  search: search,
  seconds: seconds,
  select_dict: select_dict,
  select_dict_to_start: select_dict_to_start,
  select_from_dict: select_from_dict,
  send_code: send_code,
  send_code_failed: send_code_failed,
  send_email: send_email,
  send_failed: send_failed,
  sending: sending,
  sentences_not_translated: sentences_not_translated,
  set_end_time: set_end_time,
  set_password_placeholder: set_password_placeholder,
  set_start_time: set_start_time,
  setting: setting,
  settings: settings,
  shortcut: shortcut,
  shortcut_key: shortcut_key,
  shortcut_settings: shortcut_settings,
  show_prev_next_word: show_prev_next_word,
  show_prev_next_word_desc: show_prev_next_word_desc,
  show_questions: show_questions,
  simple_word_filter: simple_word_filter,
  simple_word_filter_desc: simple_word_filter_desc,
  simple_word_list: simple_word_list,
  single_line: single_line,
  skip_to_next_stage: skip_to_next_stage,
  skip_word: skip_word,
  smart_learning: smart_learning,
  sound_effect: sound_effect,
  source_language: source_language,
  speed: speed,
  split_rule: split_rule,
  split_sentence: split_sentence,
  start: start,
  start_article_practice: start_article_practice,
  start_daily: start_daily,
  start_from_beginning: start_from_beginning,
  start_from_here: start_from_here,
  start_learning: start_learning,
  start_time: start_time,
  start_word_practice: start_word_practice,
  status: status,
  studied: studied,
  study_duration: study_duration,
  study_progress: study_progress,
  study_record: study_record,
  submit_exam: submit_exam,
  suitable_for: suitable_for,
  switch_display_mode: switch_display_mode,
  sync: sync,
  sync_data: sync_data,
  sync_failed: sync_failed,
  sync_success: sync_success,
  sync_to_account_question: sync_to_account_question,
  sync_to_result: sync_to_result,
  syncing: syncing,
  synonym: synonym,
  synonyms: synonyms,
  tap_allow_in_wechat: tap_allow_in_wechat,
  target_language: target_language,
  template_download: template_download,
  test: test,
  this_week_record: this_week_record,
  time: time,
  title: title,
  to_manage_extensions: to_manage_extensions,
  today_study_time: today_study_time,
  today_task: today_task,
  today_task_complete: today_task_complete,
  toggle_dictation_mode: toggle_dictation_mode,
  toggle_theme: toggle_theme,
  toggle_translation: toggle_translation,
  total: total,
  total_items: total_items,
  total_learning_time: total_learning_time,
  total_study_days: total_study_days,
  total_study_time: total_study_time,
  total_words: total_words,
  translate: translate,
  translate_sentence: translate_sentence,
  translate_word: translate_word,
  translation: translation,
  translation_complete: translation_complete,
  try_incognito_mode: try_incognito_mode,
  tv_movie: tv_movie,
  twitter: twitter,
  two: two,
  uk_accent: uk_accent,
  uncollect: uncollect,
  unmark_mastered: unmark_mastered,
  update_log: update_log,
  upload_audio: upload_audio,
  upload_lrc: upload_lrc,
  us_accent: us_accent,
  usage_guide: usage_guide,
  use_prev_end_seconds: use_prev_end_seconds,
  use_prev_end_time: use_prev_end_time,
  user_agreement: user_agreement,
  volume: volume,
  wait_translation: wait_translation,
  warm_tips: warm_tips,
  wechat_group: wechat_group,
  wechat_qrcode: wechat_qrcode,
  wechat_scan_login: wechat_scan_login,
  weekly_record: weekly_record,
  weekly_study_record: weekly_study_record,
  where_is_data: where_is_data,
  word: word,
  word_auto_pronunciation: word_auto_pronunciation,
  word_import_template: word_import_template,
  word_list: word_list,
  word_repeat_setting: word_repeat_setting,
  word_root: word_root,
  word_settings: word_settings,
  words: words,
  words_comma_separated: words_comma_separated,
  words_count: words_count,
  xiaohongshu: xiaohongshu,
  xiaohongshu_desc: xiaohongshu_desc,
  xiaohongshu_qrcode: xiaohongshu_qrcode,
  youdao_translate: youdao_translate
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

const articles_get = defineEventHandler(() => {
  return $fetch("https://typewords.cc/list/article.json");
});

const articles_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: articles_get
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"]) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? stringify(opts.data, opts.ssrContext["~payloadReducers"]) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const renderer = defineRenderHandler(async (event) => {
	const nitroApp = useNitroApp();
	// Whether we're rendering an error page
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	// Initialize ssr context
	const ssrContext = createSSRContext(event);
	// needed for hash hydration plugin to work
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		if (typeof ssrError.data === "string") {
			try {
				ssrError.data = destr(ssrError.data);
			} catch {}
		}
		setSSRError(ssrContext, ssrError);
	}
	// Get route options (for `ssr: false`, `isr`, `cache` and `noScripts`)
	const routeOptions = getRouteRules(event);
	// Whether we are prerendering route or using ISR/SWR caching
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	// Render app
	const renderer = await getRenderer(ssrContext);
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		// We use error to bypass full render if we have an early response we can make
		// TODO: remove _renderResponse in nuxt v5
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		// Use explicitly thrown error in preference to subsequent rendering errors
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	// Render inline styles
	// TODO: remove _renderResponse in nuxt v5
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		// TODO: remove _renderResponse in nuxt v5
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	// Handle errors
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	// Directly render payload routes
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	// Setup head
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	// 1. Preload payloads and app manifest
	if (_PAYLOAD_EXTRACTION && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	if (ssrContext["~preloadManifest"] && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			fetchpriority: "low",
			crossorigin: "anonymous",
			href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`)
		}] }, {
			...headEntryOptions,
			tagPriority: "low"
		});
	}
	// 2. Styles
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		// Do not add links to resources that are inlined (vite v5+)
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		// Add CSS links in <head> for CSS files
		// - in production
		// - in dev mode when not rendering an island
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		// 4. Resource Hints
		// Remove lazy hydrated modules from ssrContext.modules so they don't get preloaded
		// (CSS links are already added above, this only affects JS preloads)
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		// 5. Payloads
		ssrContext.head.push({ script: _PAYLOAD_EXTRACTION ? renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  : renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  }, {
			...headEntryOptions,
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	// 6. Scripts
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	// Create render context
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	// Allow hooking into the rendered result
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	// Construct HTML response
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
});
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
