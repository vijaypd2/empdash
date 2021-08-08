import "../src/App.css";
import logo from "./images/keyvalue.png";
import Form from "./components/form";

const App = () => {
  return (
    <div className="flex_wrapper">
      <div id="left" className="column">
        <div className="top-left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="bottom">
          <div className="emp_tab">
            <p>Employee List</p>
          </div>
        </div>
      </div>
      <div id="right" className="column">
        <div className="top-right">
          <div className="space"></div>
        </div>
        <div className="bottom">
          <div className="headline">
            <p>Employee Registration</p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
