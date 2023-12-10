import { RouteObject } from "react-router-dom";
import App from "@src/App.tsx";
import HomeFeed from "@src/pages/HomeFeed";
import WildCard from "@src/pages/WildCard";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home-feed",
        element: <HomeFeed />,
      },
      {
        path: "*",
        element: <WildCard />,
      },
    ],
  },
];

export default routes;
