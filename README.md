# Fireball Store Theme: Fireball

The default theme for [Fireball Store](https://fireballenterprise.com): dark by default, red accent, pill buttons and rounded cards. It is a **starter you can fork**.

A theme is **data and styling**. It never runs code. You arrange and configure Store's own sections with JSON, set design tokens, and add CSS. Anything that needs behavior ships as an add-on, not a theme.

## Where things are

```
theme.json                   Name, id, version, author, license
config/settings_data.json    Design defaults: colors, fonts, page width, button and card shape, spacing
templates/                   One JSON file per page: index, product, collection, list-collections, search,
                             cart, page, blog, article, 404, plus the groups header, footer, announcement
styles/tokens.css            Your own CSS variables
styles/base.css              Small touches on top of Store's section styles
styles/custom.css            Your own CSS
assets/                      Images (png, jpg, webp, gif, avif) and fonts (woff2), 1 MB each
locales/en.json              Text for each language
docs/                        Guides (start with docs/where-is-x.md)
```

More in [docs/where-is-x.md](docs/where-is-x.md).

## Make your own

1. Fork this repo.
2. In `theme.json`, change `id`, `name` and `version`.
3. Edit `config/settings_data.json` for your colors, fonts and shapes.
4. Edit the files in `templates/`: add, remove and reorder sections, change their settings.
5. Add CSS in `styles/`. Use `url(assets/your-file.png)` for images and fonts.
6. Run `npm run validate`. It runs the same check Store runs when a theme is installed.

## What a theme can and cannot do

| Can | Cannot |
|---|---|
| Arrange and configure Store's sections and blocks | Add a new section or run any script |
| Set colors, fonts, spacing and shapes | Read store data, secrets or settings beyond what its sections show |
| Add CSS that restyles the storefront | Use `@import`, remote `url()`, escapes or script hooks in CSS |
| Ship images and woff2 fonts (type and size checked) | Ship `.js`, `.ts`, `.html`, `.svg` or other file types |
| Add locales | Put markup in locales |

Packages that break these rules are refused when installed, with a plain-words list of what to fix.

## Validate

`npm run validate` needs the theme SDK (`@fireball/store-theme-sdk`) installed next to this folder.

## Contributing

Pull requests and automated checks are **coming** once the theme is built. Until then, fork it and make it yours.

## License

Proprietary, not open source. See [LICENSE](LICENSE). The structure follows Shopify's Dawn theme (MIT); see [NOTICE.md](NOTICE.md).
