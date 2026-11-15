# ShopSmart

ShopSmart is a responsive, browser-based shopping demo with a 42-product catalog, product search, category filters, a persistent shopping cart, and a voice-shopping assistant.

## Features

- Browse products across electronics, fashion, and home categories.
- Explore branded sample listings, including Apple, Samsung, Sony, JBL, Nike, Adidas, and Casio products.
- Search the catalog in English or any of the supported Indian-language scripts, open product details, and see related products.
- Add and remove items from the cart. Cart contents are saved in browser `localStorage`.
- Ask for any catalog product by typing or speaking its name or a supported product keyword in English, Hindi, Telugu, Tamil, Kannada, Bengali, Marathi, Gujarati, or Malayalam.
- Choose English (India), Hindi, Telugu, Tamil, Kannada, Bengali, Marathi, Gujarati, or Malayalam for voice requests. The selected speech-recognition locale is passed to the browser.
- Use the responsive interface on desktop and mobile.

## Project files

| File | Purpose |
| --- | --- |
| `shopsmart_fixed_styled.html` | Page structure and links to the stylesheet and script |
| `shopsmart_fixed_styled.css` | Storefront, product, cart, and voice-assistant styles |
| `shopsmart_fixed_styled.js` | Product catalog and shopping, search, cart, and recommendation interactions |
| `assets/products/` | Product photos and `credits.json` with source and license information |

## Run locally

The project has no package installation or build step. From the project directory, start a local static web server:

### Python

```powershell
python -m http.server 8000
```

### Node.js

```powershell
npx --yes http-server . -p 8000
```

Then open [http://localhost:8000/shopsmart_fixed_styled.html](http://localhost:8000/shopsmart_fixed_styled.html).

Stop the server with `Ctrl+C`.

## Voice assistant

Open **Shop by voice**, choose a language, enter a request or select **Speak your request**, and allow microphone access when prompted. Text recommendations support product keywords in the listed Indian-language scripts. Actual speech recognition depends on the selected language being supported by the browser's speech service, as well as microphone permission and an internet connection. If access is blocked, allow Microphone in the site controls beside the address bar and in Windows **Settings > Privacy & security > Microphone**, then reload. If the browser does not support a selected language, the assistant displays an error and you can type the request in that language instead. Using `localhost` (or HTTPS) provides a secure context for browser microphone features.

The voice assistant is a client-side demonstration, **not a trained AI model**. It uses keyword and intent matching against the sample catalog. Speech recognition is supplied by the browser and can have different language support depending on the browser and device.

## Notes

- Products, prices, and ratings are sample data for demonstration. Brand names and photos identify the pictured products; ShopSmart is not affiliated with or an authorized retailer for those brands, and listings do not represent verified stock.
- Product photos are from Wikimedia Commons. Their creators, source pages, and licenses are listed in [`assets/products/credits.json`](assets/products/credits.json).
- Checkout is simulated. No order or payment is processed.
- The project uses plain HTML, CSS, and JavaScript; no backend or external API is required.
