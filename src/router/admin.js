import adminProductRoutes from "./admin-product"
import adminProductBrandRoutes from "./admin-product-brand"
import adminProductCategoryRoutes from "./admin-product-category"

const adminRoutes = [
  ...adminProductCategoryRoutes,
  ...adminProductBrandRoutes,
  ...adminProductRoutes,
]

export default adminRoutes
