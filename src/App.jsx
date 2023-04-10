import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// Defualt Import
import Header from "./components/Header";

// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

// Named Import
import { Footer } from "./components/Footer";

// import * as Obj from "./components/Title";
import "./index.css";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";


const InstaMart = lazy(()=> import("./components/InstaMart"));
// upon on demand loading --> upon render --> react suspend loading


const About = lazy(()=>import("./components/About"));


// Never create a new component inside a component because every time AppLayout renders then a component will be created
// every time
// Never write usestate & useeffect inside if else block or inside for loop

const AppLayout = () => {
  const [user, setUser] = useState({
    name:"Shubham",
    email:"s@gmail.com"
  });


  // Now, we can control the user in provider by useEffect
  // And Provider is used when we want to change the default value of context value

  return (
    <UserContext.Provider value={{
      user: user
    }}>
      <Header />
      {/* { Outlet: place where we can render conditionally any component similar to switch case } */}
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer />}>
          <About />
        </Suspense>,
        children: [
          {
            path: "profile",    // parentPath/{path} => localhost:1234/about/profile
            element: <Profile name="Shubham" />
          }
        ]
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}>
          <InstaMart />
        </Suspense>,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);

{
  /* Header
            - Logo
            - Nav Items(Right side)
            - Cart
          Body
            - Search Bar
            - RestaurantList
              - RestaurantCard
                - Image
                - Name
                - Rating
                - Cuisines

          Footer
            - links
            - copyright
      */
}

// React.createElement => Object => HTML(DOM)

// const parent = React.createElement("div", {}, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement(
//       "h1",
//       {
//         key: "h1",
//       },
//       "I'm an h1 tag"
//     ),
//     React.createElement(
//       "h2",
//       {
//         key: "h2",
//       },
//       "I'm an h2 tag"
//     ),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement(
//       "h1",
//       {
//         key: "h1",
//       },
//       "I'm an h1 tag"
//     ),
//     React.createElement(
//       "h2",
//       {
//         key: "h2",
//       },
//       "I'm an h2 tag"
//     ),
//   ]),
// ]);

// JSX =>  React.createElement => Object => HTML(DOM): under the hood babel is working converting this to html(dom)
// JSX always sanitizes the code so that no malicious code is being rendered.

// React Component
// - Functional Component
// - Class Based Component

// Composition components means passing components into other components.

// config driven UI
// optional chaining operator
// props: way of passing a data in any component

// virtualDOM: A representation of an actual dom. We need this for reconciliation process in react.
// reconciliation: The algorithm React uses to diff one tree with another to determine which parts need to be changed
