// Create dynamic routing for products
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === `/logo/`) {
    page.matchPath = `/logo/*`
    createPage(page)
  }
}
