import React from "react";

class ToDoFilter extends React.Component {
  state = {
    valueFilter: "",
  };

  onSubmitHandler = () => {};

  onChangeHanlder = (e) => {
      e.preventDefault();
      this.setState(
          {
          valueFilter: e.target.value,
          },
          ()=>{
          this.props.onFilterChange(this.state.valueFilter)
          }
      )
  };

  render() {
    return (
      <div className="mb-5">
        <h5>ToDo Filter</h5>
        <form onSubmit={this.onSubmitHandler}>
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                name="content"
                value={this.state.valueFilter}
                aria-describedby="helpId"
                placeholder="Filter you task"
                onChange={this.onChangeHanlder}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                CLEAR
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ToDoFilter;
