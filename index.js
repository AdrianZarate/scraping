"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var playwright_1 = require("playwright");
var userAgentStrings = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.2227.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.3497.92 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
];
var extraerDatos = function (url, context) { return __awaiter(void 0, void 0, void 0, function () {
    var page, algoSalioMal, precio, detalles, contadorDetalles, detallesElementos, i, nombre, _a, _b, extras, contadorExtras, extrasElementos, i, item, ref, descripcion, descripcionSinSaltoDeLinea, imagenes, i, imagen, respuesta;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.newPage()];
            case 1:
                page = _c.sent();
                return [4 /*yield*/, page.goto(url)];
            case 2:
                _c.sent();
                return [4 /*yield*/, page.locator("h1").textContent()];
            case 3:
                algoSalioMal = _c.sent();
                console.log({ algoSalioMal: algoSalioMal });
                // aceptar cookies
                return [4 /*yield*/, page.locator("#didomi-notice-agree-button").click()];
            case 4:
                // aceptar cookies
                _c.sent();
                return [4 /*yield*/, page
                        .locator(".ma-AdPrice-value")
                        .nth(0)
                        .textContent()];
            case 5:
                precio = _c.sent();
                detalles = page.locator(".ma-AdAttributes-list li");
                return [4 /*yield*/, detalles.count()];
            case 6:
                contadorDetalles = _c.sent();
                detallesElementos = {};
                i = 0;
                _c.label = 7;
            case 7:
                if (!(i < 3)) return [3 /*break*/, 11];
                return [4 /*yield*/, detalles.nth(i).locator("p").nth(0).innerText()];
            case 8:
                nombre = _c.sent();
                _a = detallesElementos;
                _b = nombre;
                return [4 /*yield*/, detalles
                        .nth(i)
                        .locator("p")
                        .nth(1)
                        .innerText()];
            case 9:
                _a[_b] = _c.sent();
                _c.label = 10;
            case 10:
                i++;
                return [3 /*break*/, 7];
            case 11:
                extras = page.locator(".ma-AdExtraAttributes-wrapper li");
                return [4 /*yield*/, extras.count()];
            case 12:
                contadorExtras = _c.sent();
                extrasElementos = [];
                i = 0;
                _c.label = 13;
            case 13:
                if (!(i < contadorExtras)) return [3 /*break*/, 16];
                return [4 /*yield*/, extras.nth(i).textContent()];
            case 14:
                item = _c.sent();
                if (item !== null)
                    extrasElementos.push(item);
                _c.label = 15;
            case 15:
                i++;
                return [3 /*break*/, 13];
            case 16: return [4 /*yield*/, page
                    .locator(".ma-AdDetail-description-titleWrapper p")
                    .textContent()];
            case 17:
                ref = _c.sent();
                return [4 /*yield*/, page
                        .locator(".ma-AdDetail-description")
                        .textContent()];
            case 18:
                descripcion = _c.sent();
                descripcionSinSaltoDeLinea = descripcion === null || descripcion === void 0 ? void 0 : descripcion.replace(/\n/g, " ");
                imagenes = [];
                i = 0;
                _c.label = 19;
            case 19:
                if (!(i < 3)) return [3 /*break*/, 23];
                return [4 /*yield*/, page
                        .locator(".ma-SharedSlider-slide picture img")
                        .nth(i)
                        .getAttribute("src")];
            case 20:
                imagen = _c.sent();
                if (imagen !== null)
                    imagenes.push(imagen);
                return [4 /*yield*/, page.locator('[aria-label="Ver siguiente foto"]').click()];
            case 21:
                _c.sent();
                _c.label = 22;
            case 22:
                i++;
                return [3 /*break*/, 19];
            case 23:
                respuesta = {
                    precio: precio,
                    detalles: detallesElementos,
                    extras: extrasElementos,
                    ref: ref,
                    descripcion: descripcionSinSaltoDeLinea,
                    imagenes: imagenes,
                };
                return [4 /*yield*/, page.close()];
            case 24:
                _c.sent();
                return [2 /*return*/, respuesta];
        }
    });
}); };
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, context_1, urls, resultados, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                console.time("browser");
                console.time('loop');
                return [4 /*yield*/, playwright_1.chromium.launch({
                    // headless: false,
                    })];
            case 1:
                browser = _a.sent();
                console.timeEnd("browser");
                return [4 /*yield*/, browser.newContext({
                        userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
                    })];
            case 2:
                context_1 = _a.sent();
                urls = [
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-522268199.htm",
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-529012507.htm",
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-522268199.htm",
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/centro-pl-prta-de-alarcos-528974621.htm",
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-529007237.htm",
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-522268199.htm",
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-529012507.htm",
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-522268199.htm",
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/centro-pl-prta-de-alarcos-528974621.htm",
                    "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-529007237.htm",
                ];
                return [4 /*yield*/, Promise.all(urls.map(function (url) { return extraerDatos(url, context_1); }))];
            case 3:
                resultados = _a.sent();
                console.log(resultados);
                return [4 /*yield*/, browser.close()];
            case 4:
                _a.sent();
                console.timeEnd("loop");
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.log({ error: error_1 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); })();
