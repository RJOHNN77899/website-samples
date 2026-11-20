# Sample websites

Three sample websites for fictional Tuscaloosa businesses, as a web design
portfolio:

- `barbershop/`: Ledger & Lather Barber Co.
- `restaurant/`: Kettle & Cane, a Southern kitchen
- `contractor/`: Fenwright Home Builders

`index.html` is a portfolio page linking to all three.

## The businesses are made up

The names were checked with web searches, and no business using them was
found. The addresses use street names that don't exist in Tuscaloosa.
Phone numbers are in the 555-0100 to 555-0199 range, which is reserved for
fiction, and emails use the reserved `.example` domain, so nothing reaches a
real person. Every footer says it's a sample site. Every page tells search
engines not to list it (`noindex`), so the made-up businesses never show up
as real ones.

The forms check what's typed, then show a message saying the site is a
sample. Nothing is sent anywhere. On a client's site, the form would go to
their email through a form service.

## Images

Every illustration was drawn for these sites as SVG code. No photos, stock
images or icon sets from anywhere else are used, so there is nothing to
license. Fonts are the visitor's own system fonts.

## Your business name

Open `studio.js` and fill in `name` (and `url`, if you have a site). Every
footer then shows "Website by ...", and the portfolio page shows the name.
While it's empty, that line stays hidden.

## Built for speed

Each site is a single HTML file with its styles and script inside it, plus the
tiny `studio.js`. No frameworks, web fonts, trackers or outside requests.
