import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import LogIn from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./context/userContext";
import appStore from "./Redux/appStore";
import { Provider } from "react-redux";

const Groceries = lazy(() => import("./components/Groceries"));

const AppContent = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const data = {
      name: "Fazil",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App font-sans">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContent />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
