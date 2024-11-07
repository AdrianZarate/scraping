import { Browser, chromium, Locator, Page } from "playwright";

interface Detalles {
  // dormitorios: number;
  // baños: number;
  // metrosCuadrados: string;
  // precioMetroCuadrado: string;
  // calefacción: string;
  // aguaCaliente: string;
  [key: string]: string;
}

interface Respuesta {
  precio: string | null;
  detalles: Detalles;
  extras: string[];
  ref: string | null;
  descripcion: string | null;
  imagenes: string[];
}

const userAgentStrings = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.2227.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.3497.92 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
];

const extraerDatos = async (url: string, context: any): Promise<Respuesta> => {
  const page: Page = await context.newPage();

  await page.goto(url);

  const algoSalioMal: string | null = await page.locator("h1").textContent();
  console.log({ algoSalioMal });

  // aceptar cookies
  await page.locator("#didomi-notice-agree-button").click();

  // precio
  const precio: string | null = await page
    .locator(".ma-AdPrice-value")
    .nth(0)
    .textContent();

  // Detalles
  const detalles: Locator = page.locator(".ma-AdAttributes-list li");
  const contadorDetalles: number = await detalles.count();
  const detallesItems: Detalles = {};

  for (let i = 0; i < contadorDetalles; i++) {
    let nombre: string = await detalles.nth(i).locator("p").nth(0).innerText();
    detallesItems[nombre] = await detalles
      .nth(i)
      .locator("p")
      .nth(1)
      .innerText();
  }

  // Extras
  const extras: Locator = page.locator(".ma-AdExtraAttributes-wrapper li");
  const contadorExtras: number = await extras.count();
  const extrasItems: string[] = [];

  for (let i = 0; i < contadorExtras; i++) {
    const item: string | null = await extras.nth(i).textContent();
    if (item !== null) extrasItems.push(item);
  }

  // Ref
  let ref: string | null = await page
    .locator(".ma-AdDetail-description-titleWrapper p")
    .textContent();

  // Descripción
  const descripcion: string | null = await page
    .locator(".ma-AdDetail-description")
    .textContent();

  const descripcionSinSaltoDeLinea: string = descripcion?.replace(/\n/g, " ")!;

  // Imagenes
  const imagenes: string[] | null = [];

  for (let i = 0; i < 16; i++) {
    const imagen: string | null = await page
      .locator(".ma-SharedSlider-slide picture img")
      .nth(i)
      .getAttribute("src");

    if (imagen !== null) imagenes.push(imagen);

    await page.locator('[aria-label="Ver siguiente foto"]').click();
  }

  // Respuesta
  const respuesta: Respuesta = {
    precio,
    detalles: detallesItems,
    extras: extrasItems,
    ref,
    descripcion: descripcionSinSaltoDeLinea,
    imagenes,
  };

  await page.close();

  return respuesta;
};

(async () => {
  try {
    console.time("loop");

    // iniciar el navegador
    const browser: Browser = await chromium.launch({
      // headless: false,
    });

    const context = await browser.newContext({
      userAgent:
        userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
    });

    const urls = [
      "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-522268199.htm",
      "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-522268199.htm",
      "https://www.milanuncios.com/venta-de-pisos-en-ciudad-real-ciudad_real/ciudad-real-522268199.htm",
    ];

    const resultados = await Promise.all(
      urls.map((url) => extraerDatos(url, context))
    );

    console.log(resultados);

    await browser.close();
    console.timeEnd("loop");
  } catch (error) {
    console.log({ error });
  }
})();
