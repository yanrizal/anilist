import React from "react";

const Home = React.lazy(() =>
  import("./pages/Pages")
);
const PageDetail = React.lazy(() =>
  import("./pages/Pages/PageDetail")
);
const PageError = React.lazy(() => import("./pages/Pages/PageError"));

const routes = [

  //Index root
  { path: "/anime/:id", component: PageDetail},
  { path: "/", component: Home, isWithoutLayout: true, exact: true },
  { component: PageError, isWithoutLayout: true, exact: false },
];

export default routes;
