const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/cleo/ecomm/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/cleo/ecomm/src/pages/404.js"))),
  "component---src-pages-abstract-js": hot(preferDefault(require("/home/cleo/ecomm/src/pages/abstract.js"))),
  "component---src-pages-all-js": hot(preferDefault(require("/home/cleo/ecomm/src/pages/all.js"))),
  "component---src-pages-gaming-js": hot(preferDefault(require("/home/cleo/ecomm/src/pages/gaming.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/cleo/ecomm/src/pages/index.js"))),
  "component---src-pages-logo-js": hot(preferDefault(require("/home/cleo/ecomm/src/pages/logo.js"))),
  "component---src-pages-tech-js": hot(preferDefault(require("/home/cleo/ecomm/src/pages/tech.js")))
}

