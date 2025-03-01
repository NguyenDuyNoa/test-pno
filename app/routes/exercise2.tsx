import { Exercise2 } from "~/pages/exercise2";
import type { Route } from "./+types/exercise2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exercise 2" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Exercise2Route() {
  return <Exercise2 />;
}
