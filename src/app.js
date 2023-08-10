import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Main from "./components/Main"

const AppContent = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppContent />);
