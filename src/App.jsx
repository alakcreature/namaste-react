import React from "react";
import ReactDOM from "react-dom/client";

// Defualt Import
import Header from "./components/Header";

// Named Import
import {Footer} from "./components/Footer";

// import * as Obj from "./components/Title"; 
import "./index.css";
import Body from "./components/Body";

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




const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);

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
