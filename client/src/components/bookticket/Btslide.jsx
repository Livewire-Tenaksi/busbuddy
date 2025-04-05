import React, { useState } from "react";
import e from "../../assets/images/h2.png";
import "../Style.css";
import l from "../../assets/icons/bus.svg";
import c from "../../assets/icons/calender.svg";
import w from "../../assets/icons/walk.svg";
import r from "../../assets/icons/run.svg";
import { busStore } from "../../statemanager/bus.store";

const Btslide = () => {
  let { findbus, busInfo } = busStore();

  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");
  let [date, setDate] = useState("");
  let [validated, setValidated] = useState(false);

  let jdata = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      let traveldata = { from, to, date };
      findbus(traveldata);        //data sent to server
    }

    setValidated(true);
  };

  return (
    <div id="BT">
      <div id="BTB">
        <form noValidate className={validated ? "was-validated" : ""} onSubmit={jdata}>
          <div className="row justify-content-center p-2 p-sm-5" id="fom">
            <h2 className="mt-3 text-center text-light">
              <i>Book your Tickets Easily through online</i>
            </h2>

            <div className="col-sm-6 col-lg-3 mt-1 mt-sm-4">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <img src={r} alt="" style={{ height: "18px" }} />
                  <img src={l} alt="" />
                </span>
                <input
                  style={{borderRadius:"0px 5px 5px 0px"}}
                  type="text"
                  className="form-control"
                  placeholder="From"
                  required
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
                <div className="invalid-feedback">Please enter a departure location.</div>
              </div>
            </div>
            
            <div className="col-sm-6 col-lg-3 mt-1 mt-sm-4">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <img src={l} alt="" />
                  <img src={w} alt="" style={{ height: "18px" }} />
                </span>
                <input
                style={{borderRadius:"0px 5px 5px 0px"}}
                  type="text"
                  className="form-control"
                  placeholder="To"
                  required
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
                <div className="invalid-feedback">Please enter a destination.</div>
              </div>
            </div>
            
            <div className="col-sm-6 col-lg-3 mt-1 mt-sm-4">
              <div className="input-group">
                <span className="input-group-text">
                  <img src={c} alt="" />
                </span>
                <input
                style={{borderRadius:"0px 5px 5px 0px"}}
                  type="date"
                  className="form-control"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <div className="invalid-feedback">Please select a valid date.</div>
              </div>
            </div>

            <div className="row justify-content-center mt-2 mt-sm-4 mt-lg-0">
              <div className="col-lg-2  col-sm-4">
                <button className="testbuttonbt" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Btslide;
