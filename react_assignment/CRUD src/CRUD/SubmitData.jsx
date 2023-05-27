import React, { useState } from "react";
import { PostAPIAction } from "../Action/index";
import { useDispatch } from "react-redux";

function SubmitData(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");

  const dispatch = useDispatch();

  const Namedata = (e) => {
    setname(e.target.value);
  };

  const Emaildata = (e) => {
    setemail(e.target.value);
  };

  const Phonedata = (e) => {
    setphone(e.target.value);
  };

  const Countrydata = (e) => {
    setcountry(e.target.value);
  };

  const clickData = (e) => {
    const FinalData = {
      name,
      email,
      phone,
      country,
    };
    dispatch(PostAPIAction(FinalData));
  };

  return (
    <>
      <div className="container m-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            onChange={(e) => Namedata(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => Emaildata(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="Enter Phone"
            onChange={(e) => Phonedata(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Enter Country"
            onChange={(e) => Countrydata(e)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => clickData(e)}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default SubmitData;
