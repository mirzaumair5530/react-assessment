import type { RouteObject } from "react-router-dom";
import App from "@src/App.tsx";
import HomeFeed from "@src/pages/HomeFeed";

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
        element: <div>In progress</div>,
      },
    ],
  },
];

export default routes;
