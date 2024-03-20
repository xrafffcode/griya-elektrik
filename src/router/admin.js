import adminBannerRoutes from "./admin-banner"
import adminBranchRoutes from "./admin-branch"
import adminProductRoutes from "./admin-product"
import adminProductBrandRoutes from "./admin-product-brand"
import adminProductCategoryRoutes from "./admin-product-category"
import adminClientRoutes from "./admin-client"

const adminRoutes = [
  ...adminProductCategoryRoutes,
  ...adminProductBrandRoutes,
  ...adminProductRoutes,
  ...adminBranchRoutes,
  ...adminBannerRoutes,
  ...adminClientRoutes,
]

export default adminRoutes
