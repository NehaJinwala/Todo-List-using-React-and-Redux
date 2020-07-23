import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { addTodo } from "../actions/actionCreators";
import { connect } from "react-redux";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todotext: "",
    };
    this.onChangeTodoText = this.onChangeTodoText.bind(this);
  }

  onChangeTodoText(event) {
    this.setState({
      todotext: event.target.value,
    });
  }
  render() {
    return (
      <div className="form-group row">
        <div className="col-sm-10">
          <input
            onChange={this.onChangeTodoText}
            value={this.state.todotext}
            type="text"
            className="form-control"
            id="inputEmail3"
            placeholder="add todo here"
          />
          <button
            type="button"
            onClick={() => this.setState({ todotext: "" })}
            style={{ marginTop: "25px", marginRight: "15px" }}
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              this.props.addTodo(this.state.todotext);
              this.setState({ todotext: "" });
            }}
            className="btn btn-success"
            style={{ marginTop: "25px" }}
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTodo,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(CreateTodo);
