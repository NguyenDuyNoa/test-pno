import { Exercise1 } from "~/pages/exercise1";
import type { Route } from "./+types/exercise2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exercise 1" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Exercise1Route() {
  return <Exercise1 />;
}
