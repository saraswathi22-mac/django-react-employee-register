import { Link } from "react-router-dom";
import React from "react";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  fetchData() {
    fetch("http://127.0.0.1:8000/employee/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  deleteData(id) {
    fetch("http://127.0.0.1:8000/employee/" + id + "/", {
      method: "DELETE",
      body: JSON.stringify(this.state),
    })
      .then((response) => response)
      .then((data) => {
        if (data) {
          this.fetchData();
        }
      });
  }

  render() {
    const empData = this.state.data;
    const rows = empData.map((emp) => (
      <tr key={emp.id}>
        <td>{emp.full_name}</td>
        <td>{emp.email}</td>
        <td>{emp.contact}</td>
        <td>{emp.address}</td>
        <td>
          <Link to={"update/" + emp.id} className="btn btn-info">
            Update
          </Link>
          <button
            onClick={() => this.deleteData(emp.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default List;
