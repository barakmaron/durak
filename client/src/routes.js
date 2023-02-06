import React from "react";
const HomePage = React.lazy(() => import("./pages/Home/HomeConnector"));
const RoomsPage = React.lazy(() => import("./pages/Rooms/Rooms"));

const routes = [{
    location: '/',
    title: "Durak Card Game",
    element: HomePage
}, {
    location: '/rooms',
    title: "Durak | Rooms",
    element: RoomsPage,
    protected: true
}];

export default routes;