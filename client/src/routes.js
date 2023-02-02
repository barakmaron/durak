import React from "react";
const HomePage = React.lazy(() => import("./pages/home/home"));

const routes = [{
    location: '/',
    title: "Durak Card Game",
    element: HomePage
}];

export default routes;