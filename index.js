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
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var userAgentStrings, browser, context, page, algoSalioMal, precio, detalles, contadorDetalles, detallesItems, i, nombre, _a, _b, extras, contadorExtras, extrasItems, i, item, ref, descripcion, imagenes, i, imagen, respuesta, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 27, , 28]);
                console.time("loop");
                userAgentStrings = [
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.2227.0 Safari/537.36",
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.3497.92 Safari/537.36",
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                ];
                return [4 /*yield*/, playwright_1.chromium.launch({
                    // headless: false,
                    })];
            case 1:
                browser = _c.sent();
                return [4 /*yield*/, browser.newContext({
                        userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
                    })];
            case 2:
                context = _c.sent();
                return [4 /*yield*/, context.newPage()];
            case 3:
                page = _c.sent();
                return [4 /*yield*/, page.goto("https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-522268199.htm")];
            case 4:
                _c.sent();
                return [4 /*yield*/, page.locator("h1").textContent()];
            case 5:
                algoSalioMal = _c.sent();
                console.log({ algoSalioMal: algoSalioMal });
                return [4 /*yield*/, page
                        .locator(".ma-AdPrice-value")
                        .nth(0)
                        .textContent()];
            case 6:
                precio = _c.sent();
                detalles = page.locator(".ma-AdAttributes-list li");
                return [4 /*yield*/, detalles.count()];
            case 7:
                contadorDetalles = _c.sent();
                detallesItems = {};
                i = 0;
                _c.label = 8;
            case 8:
                if (!(i < contadorDetalles)) return [3 /*break*/, 12];
                return [4 /*yield*/, detalles
                        .nth(i)
                        .locator("p")
                        .nth(0)
                        .innerText()];
            case 9:
                nombre = _c.sent();
                _a = detallesItems;
                _b = nombre;
                return [4 /*yield*/, detalles
                        .nth(i)
                        .locator("p")
                        .nth(1)
                        .innerText()];
            case 10:
                _a[_b] = _c.sent();
                _c.label = 11;
            case 11:
                i++;
                return [3 /*break*/, 8];
            case 12:
                extras = page.locator(".ma-AdExtraAttributes-wrapper li");
                return [4 /*yield*/, extras.count()];
            case 13:
                contadorExtras = _c.sent();
                extrasItems = [];
                i = 0;
                _c.label = 14;
            case 14:
                if (!(i < contadorExtras)) return [3 /*break*/, 17];
                return [4 /*yield*/, extras.nth(i).textContent()];
            case 15:
                item = _c.sent();
                if (item !== null)
                    extrasItems.push(item);
                _c.label = 16;
            case 16:
                i++;
                return [3 /*break*/, 14];
            case 17: return [4 /*yield*/, page
                    .locator(".ma-AdDetail-description-titleWrapper p")
                    .textContent()];
            case 18:
                ref = _c.sent();
                return [4 /*yield*/, page
                        .locator(".ma-AdDetail-description")
                        .textContent()];
            case 19:
                descripcion = _c.sent();
                imagenes = [];
                i = 0;
                _c.label = 20;
            case 20:
                if (!(i < 16)) return [3 /*break*/, 24];
                return [4 /*yield*/, page
                        .locator(".ma-SharedSlider-slide picture img")
                        .nth(i)
                        .getAttribute("src")];
            case 21:
                imagen = _c.sent();
                if (imagen !== null)
                    imagenes.push(imagen);
                return [4 /*yield*/, page.locator('[aria-label="Ver siguiente foto"]').click()];
            case 22:
                _c.sent();
                _c.label = 23;
            case 23:
                i++;
                return [3 /*break*/, 20];
            case 24:
                respuesta = {
                    precio: precio,
                    detalles: detallesItems,
                    extras: extrasItems,
                    ref: ref,
                    descripcion: descripcion,
                    imagenes: imagenes,
                };
                console.log({ respuesta: respuesta });
                return [4 /*yield*/, page.close()];
            case 25:
                _c.sent();
                return [4 /*yield*/, browser.close()];
            case 26:
                _c.sent();
                console.timeEnd("loop");
                return [3 /*break*/, 28];
            case 27:
                error_1 = _c.sent();
                console.log({ error: error_1 });
                return [3 /*break*/, 28];
            case 28: return [2 /*return*/];
        }
    });
}); })();
