import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import ReactWebComponent from "react-web-component";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

class MyAppWrapper extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    // const name = this.getAttribute('name');
    // const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      mountPoint
    );
  }
}

customElements.define("my-component-wrapper", MyAppWrapper);

// ReactWebComponent.create(<App />, "my-component");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
