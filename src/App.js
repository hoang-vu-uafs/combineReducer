import React from "react";
import { connect } from "react-redux";
import { addItem, addName } from "./actionCreator/action";
import "./App.css";

class App extends React.Component {
  state = { name: "" };

  inputHandle = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.addItem({ car: "Ford", year: 2010 })}>
          Item
        </button>
        {this.props.items.map((item) => {
          return <div>{item.car}</div>;
        })}

        <input onChange={(e) => this.inputHandle(e)} />
        <button onClick={() => this.props.addName(this.state.name)}>
          Name
        </button>
        {this.props.name.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.item,
  name: state.name,
});

const mapDispatchToProps = { addItem, addName };

export default connect(mapStateToProps, mapDispatchToProps)(App);
