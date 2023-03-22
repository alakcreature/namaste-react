// Here React.createElement() is just a object which will be turned to html tag by the render method by creating a tree in the dom.
// ReactElement(Object) => HTML(Browser Understands)
// Whenever we pass root.render, the contents in div.#root will be replaced by that.
// We can use react in uor existing project because it wil only affect only the root html tag. That's why its a library not a framework.

const parent = React.createElement("div", {}, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);
