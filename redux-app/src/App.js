import { useState } from "react";
import Form from "./component/From/Form";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [isChanged, setIsChanged] = useState(false);

  const addUser = (e) => {
    e.preventDefault();
    setIsChanged(true);
  }

  return (
    <div className="App">
      <Header name={name} isChanged={isChanged} />
      <div className="main">
        <Sidebar name={name} isChanged={isChanged} />
        <Form setName={setName} setEmail={setEmail} addUser={addUser} />
      </div>
    </div>
  );
}

export default App;
