import React, { useEffect, useState } from "react";
import { UpdateAPIAction } from "../Action/index";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GetDetailsid from "../Action/index";
import { useNavigate } from "react-router-dom";

function Update(props) {
  const navigate = useNavigate(); //Back to Home page

  const { id } = useParams();
  console.log("Edit data id", id);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");

  const [getdata] = GetDetailsid(id);

  useEffect(() => {
    const MyData = () => {
      if (getdata.data) {
        setname(getdata.data.name);
        setemail(getdata.data.email);
        setphone(getdata.data.phone);
        setcountry(getdata.data.country);
      }
    };
    MyData();
  }, [getdata.data]);

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
    dispatch(UpdateAPIAction(FinalData, id));
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
            defaultValue={name}
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
            defaultValue={email}
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
            defaultValue={phone}
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
            defaultValue={country}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            clickData(e);
            navigate("/");
          }}
        >
          Update
        </button>
      </div>
    </>
  );
}

export default Update;
