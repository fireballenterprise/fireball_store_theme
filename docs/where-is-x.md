# Where is X?

| I want to... | Go to |
|---|---|
| Rename the theme or bump its version | `theme.json` |
| Change the brand color, background or text color | `config/settings_data.json` (`accentColor`, `backgroundColor`, `textColor`) |
| Change fonts | `config/settings_data.json` (`headingFont`, `bodyFont`: system, serif, mono, rounded) |
| Change page width, button shape, card corners or spacing | `config/settings_data.json` (`pageWidth`, `buttonShape`, `cardStyle`, `sectionSpacing`) |
| Change what the home page shows | `templates/index.json` |
| Change a product page | `templates/product.json` (keep the `main-product` section) |
| Change the collection, search, cart, page, blog, article or 404 pages | `templates/<page>.json` (keep that page's `main-*` section) |
| Change the header, footer or announcement bar | `templates/header.json`, `templates/footer.json`, `templates/announcement.json` |
| Add my own CSS | `styles/custom.css` |
| Add CSS variables | `styles/custom.css` |
| Add a background image or a font | `assets/` and `url(assets/<file>)` in CSS |
| Translate text | `locales/<language>.json` |
| See every section, its settings and blocks | `docs/sections.md` |

## Sections

Sections and blocks are Store's own, so a theme only configures them. One template is an ordered list:

```json
{ "sections": [
  { "id": "hero", "type": "image-banner", "settings": { "height": "large" } },
  { "id": "featured", "type": "featured-collection",
    "settings": { "heading": "New And Featured", "collection": "", "count": 8 },
    "blocks": [] }
] }
```

`id` is yours (letters, numbers, dashes). `type` must be a section from `docs/sections.md`. Pages keep their `main-*` section so product, cart and other core pages always work; checkout and account are built in and cannot be changed by a theme.
