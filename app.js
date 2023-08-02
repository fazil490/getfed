import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = React.createElement('h1', {id: 'heading'}, 'Hi There, Fazil here from NReact🚀')

//React Element using JSX
const heading = (
  <h1 className="heading">Hi There, FAZIL here from NReact🚀</h1>
);

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {heading}
    <h1>React Component is here for you👋🔥</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
