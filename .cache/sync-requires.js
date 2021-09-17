const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/cleo/libre-logos/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/cleo/libre-logos/src/pages/404.js"))),
  "component---src-pages-all-js": hot(preferDefault(require("/home/cleo/libre-logos/src/pages/all.js"))),
  "component---src-pages-available-js": hot(preferDefault(require("/home/cleo/libre-logos/src/pages/available.js"))),
  "component---src-pages-claimed-js": hot(preferDefault(require("/home/cleo/libre-logos/src/pages/claimed.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/cleo/libre-logos/src/pages/index.js"))),
  "component---src-pages-logo-js": hot(preferDefault(require("/home/cleo/libre-logos/src/pages/logo.js")))
}

