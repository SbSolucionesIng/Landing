import { Home } from "@/pages";
import { Offerings } from "@/pages"; // Importa Offerings

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "offerings",
    path: "/offerings",
    element: <Offerings />,
  },
];

export default routes;

