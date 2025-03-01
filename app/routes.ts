import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("exercise1", "routes/exercise1.tsx"),
  route("exercise2", "routes/exercise2.tsx")
] satisfies RouteConfig;