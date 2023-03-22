import React from "react";
import ReactDOM from "react-dom/client";

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

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// React Component
// - Functional Component
// - Class Based Component

// Composition components means passing components into other components.

function App() {
  return (
    <div>
      {Title()}
      <h1 id="title" key="h2">
        Namaste React functional component
      </h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
