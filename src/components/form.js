import { useState } from "react";
import "../styles/Form.css";

const Form = () => {
  const [values, setValues] = useState({
    emp_name: "",
    empId: "",
    join_date: "",
    role: "",
    status: "",
    exp: "",
    address: "",
    id_proof: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="container">
      <div className="form">
        <div className="input-box">
          <label htmlFor="name">Employee Name</label> <br />
          <input
            onChange={handleChange}
            type="text"
            name="emp_name"
            id="name"
            placeholder="Name"
            value={values.emp_name}
          />
        </div>

        <div className="input-box">
          <label htmlFor="emp_id">Employee ID</label> <br />
          <input
            onChange={handleChange}
            type="text"
            name="empId"
            id="emp_id"
            placeholder="Employee ID"
            value={values.empId}
          />
        </div>

        <div className="input-box">
          <label htmlFor="join_date">Joining Date</label> <br />
          <input
            onChange={handleChange}
            type="date"
            name="join_date"
            id="join_date"
            value={values.join_date}
          />
        </div>

        <div className="input-box">
          <label htmlFor="role">Role</label> <br />
          <select
            onChange={handleChange}
            name="role"
            id="role"
            value={values.role}
          >
            <option value="" disabled selected>
              Choose Role
            </option>
            <option value="dev">Developer</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        <div className="input-box">
          <label htmlFor="status">Status</label>
          <br />
          <select
            onChange={handleChange}
            name="status"
            id="status"
            value={values.status}
          >
            <option value="" disabled selected>
              Status
            </option>
            <option value="married">Married</option>
            <option value="single">Single</option>
          </select>
        </div>

        <div className="input-box">
          <label htmlFor="exp">Experience</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="exp"
            id="exp"
            placeholder="Experience"
            value={values.exp}
          />
        </div>

        <div className="input-box">
          <label htmlFor="address">Address</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={values.address}
          />
        </div>

        <div className="input-box">
          <label htmlFor="id_proof">Upload ID proof</label>
          <br />
          <input
            onChange={handleChange}
            type="file"
            name="id_proof"
            id="id_proof"
            value={values.id_proof}
          />
        </div>
      </div>
      <button onclick="validateForm()" className="btn_create">
        Create
      </button>
      <button className="btn_cancel">Cancel</button>
    </div>
  );
};

export default Form;
