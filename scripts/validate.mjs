// Checks this theme the way Fireball Store checks it on install. Needs the theme SDK (`@fireball/store-theme-sdk`).
// Usage: node scripts/validate.mjs [--pack]
import { SECTION_CATALOG, schemaBook, validateThemePackage } from "@fireball/store-theme-sdk";
import { readThemeDir } from "@fireball/store-theme-sdk/theme_dir";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const result = validateThemePackage(readThemeDir(root), schemaBook(SECTION_CATALOG));
if (!result.ok) {
  console.error(`Theme check failed (${result.errors.length}):`);
  for (const error of result.errors) console.error(` - ${error}`);
  process.exit(1);
}
const sections = Object.values(result.theme.templates).reduce((n, t) => n + t.sections.length, 0);
console.log(`Theme "${result.theme.name}" ${result.theme.version} is valid: ${sections} sections, ${result.theme.css.length} bytes of CSS.`);
if (process.argv.includes("--pack")) console.log(JSON.stringify(result.theme));
