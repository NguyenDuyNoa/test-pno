import { Exercise1 } from "~/pages/exercise1";
import type { Route } from "./+types/exercise2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exercise 1" },
    { name: "description", content: "Xây dựng một trang web đơn giản bằng ReactJS cho chức năng Quản lý danh sách công việc (Task). Trang web có khả năng quản lý, theo dõi và cập nhật trạng thái của các sự kiện (Hoàn thành, chưa hoàn thành)." },
  ];
}

export default function Exercise1Route() {
  return <Exercise1 />;
}
