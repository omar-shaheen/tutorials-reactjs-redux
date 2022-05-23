let myInputVal;
let allItems = [];

let handleInputChange = (e) => {
  // console.log(e.target.value);
  myInputVal = e.target.value;
};

let handleSubmit = (e) => {
  e.preventDefault();
  // console.log(myInputVal);
  allItems.push(myInputVal);
  // console.log(allItems);

  e.target.elements[0].value = "";
  
  render();

};

function render() {
  let content = (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <input type="submit" />
      </form>

      <ul>{allItems.length ? allItems.map((item) => <li>{item}</li>) : ""}</ul>
    </div>
  );
  ReactDOM.render(content, document.getElementById("app"));
}
render();
