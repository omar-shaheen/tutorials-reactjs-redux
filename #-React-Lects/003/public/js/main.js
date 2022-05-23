"use strict";

var myInputVal = void 0;
var allItems = [];

var handleInputChange = function handleInputChange(e) {
  // console.log(e.target.value);
  myInputVal = e.target.value;
};

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  // console.log(myInputVal);
  allItems.push(myInputVal);
  // console.log(allItems);

  e.target.elements[0].value = "";

  render();
};

function render() {
  var content = React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      { action: "", onSubmit: handleSubmit },
      React.createElement("input", { type: "text", onChange: handleInputChange }),
      React.createElement("input", { type: "submit" })
    ),
    React.createElement(
      "ul",
      null,
      allItems.length ? allItems.map(function (item) {
        return React.createElement(
          "li",
          null,
          item
        );
      }) : ""
    )
  );
  ReactDOM.render(content, document.getElementById("app"));
}
render();
