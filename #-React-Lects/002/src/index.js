// // var title = "React";
// var title = "";

// var func = (arg) => {
//   if (arg) {
//     return "Hello React.js";
//   }
// };

// let ele = (
//   <div>
//     <h1> Hello {title ? title : 'Title'}.js </h1>
//     <p>This is p {5 * 6}</p>
//     <strong> {func(title)} </strong>
//     <br />
//     <strong> {func("")} </strong>
//     <br />
//     <strong> {func()} </strong>

//     <h1>  </h1>
//     <button onClick={increase}>Plus Number</button>
//   </div>
// );
// ReactDOM.render(ele, document.getElementById("app"));

// var title = "React";
var number = 0;

var increase = (arg) => {
  number++;
  render();
};

function render() {
  let ele = (
    <div>
      <h1>The Number{number}</h1>
      <button onClick={increase}>Plus Number</button>
    </div>
  );
  ReactDOM.render(ele, document.getElementById("app"));
}
render()