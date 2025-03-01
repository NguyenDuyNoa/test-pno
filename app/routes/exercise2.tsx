import { Exercise2 } from "~/pages/exercise2";
import type { Route } from "./+types/exercise2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exercise 2" },
    { name: "description", content: "Kết hợp với trang web xây dựng phía trên, xây dựng giao diện chức năng Dashboard thể hiện được dữ liệu của công ty A." },
  ];
}

export default function Exercise2Route() {
  return <Exercise2 />;
}
