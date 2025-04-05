import React, { useState } from "react";
import "../Style.css";
import axios from "axios";
import { busStore } from "../../statemanager/bus.store";

const Addbus = () => {
  let [tname, setTname] = useState();
  let [ownername, setOwnername] = useState();
  let [Ownnum, setOwnnum] = useState();
  let [dname, setDname] = useState();
  let [dnum, setDnum] = useState();
  let [from, setFrom] = useState();
  let [to, setTo] = useState();
  let [date, setDate] = useState();
  let [rdate, setRdate] = useState();
  let [stime, setStime] = useState();
  let [etime, setEtime] = useState();
  let [btype, setBtype] = useState();
  let [tprice, setTprice] = useState();
  let [seats, setSeats] = useState();
  let [rate, setRate] = useState();
  let [snacks, setSnacks] = useState(false);
  let [water, setWater] = useState(false);
  let [tv, setTv] = useState(false);
  let [blanket, setBlanket] = useState(false);
  let [chargeport, setChargeport] = useState(false);
  let [ac, setAc] = useState(false);

  let { addbus } = busStore();

  let detail = (e) => {
    e.preventDefault();

    if (!tname || !ownername || !Ownnum || !dname || !dnum || !from || !to || !date || !rdate || !stime || !etime || !btype || !tprice || !seats || !rate) {
      alert("Please fill all required fields.");
      return;
    }

    let busdata = {
      travelsname: tname,
      ownername: ownername,
      ownernumber: Ownnum,
      drivername: dname,
      drivernumber: dnum,
      from: from,
      to: to,
      date: date,
      starttime: stime,
      endtime: etime,
      startingdate: date,
      reachingdate: rdate,
      bustype: btype,
      price: tprice,
      seats: seats,
      rating: rate,
      snacks: snacks,
      water: water,
      tv: tv,
      blanket: blanket,
      chargeport: chargeport,
      ac: ac,
    };

    addbus(busdata);              // data sent to server

 
    setTname("");
    setOwnername("");
    setOwnnum("");
    setDname("");
    setDnum("");
    setFrom("");
    setTo("");
    setDate("");
    setStime("");
    setEtime("");
    setSeats("");
    setRate("");
    setBtype("");
    setTprice("");
    setRate("");
    setSnacks(false);
    setWater(false);
    setTv(false);
    setBlanket(false);
    setChargeport(false);
    setAc(false);

  };
 
  return (
    <div className="Ainp pb-5">
      <form action="">
        <div className="container pt-3  p-sm-4 p-lg-5">
          <h1 style={{ textAlign: "center" }}>
            <i>Adding Bus Form</i>{" "}
          </h1>

          <div className="row justify-content-evenly  ">
            <div className="col-md-6 col-lg-4 ">
              <label htmlFor="">Travels Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Travels name"
                required
                onChange={(e) => {
                  setTname(e.target.value);
                }}
                value={tname}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Owner Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Owner name"
                onChange={(e) => {
                  setOwnername(e.target.value);
                }}
                value={ownername}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Owner Mobile Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Owner No."
                onChange={(e) => {
                  setOwnnum(e.target.value);
                }}
                value={Ownnum}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Driver Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Driver Name"
                onChange={(e) => {
                  setDname(e.target.value);
                }}
                value={dname}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Driver Mobile Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Driver No."
                onChange={(e) => {
                  setDnum(e.target.value);
                }}
                value={dnum}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">From</label>
              <input
                type="text"
                className="form-control"
                placeholder="From"
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
                value={from}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">To</label>
              <input
                type="text"
                className="form-control"
                placeholder="To"
                onChange={(e) => {
                  setTo(e.target.value);
                }}
                value={to}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Start Time</label>
              <input
                type="time"
                className="form-control"
                placeholder=""
                onChange={(e) => {
                  setStime(e.target.value);
                }}
                value={stime}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">End Time</label>
              <input
                type="time"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => {
                  setEtime(e.target.value);
                }}
                value={etime}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Starting Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Journey starting Date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Reaching Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Reaching Date"
                onChange={(e) => {
                  setRdate(e.target.value);
                }}
                value={rdate}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="busType">Bus Type</label>
              <select
                className="form-control"
                onChange={(e) => setBtype(e.target.value)}
                value={btype}
              >
                <option value="">Select Bus Type</option>
                <option value="sleeper">Sleeper</option>
                <option value="deluxe">Deluxe</option>
              </select>
            </div>

            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Ticket Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ticket Price"
                onChange={(e) => {
                  setTprice(e.target.value);
                }}
                value={tprice}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Number of Seats</label>
              <input
                type="number"
                className="form-control"
                placeholder="No. of seats"
                onChange={(e) => {
                  setSeats(e.target.value);
                }}
                value={seats}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <label htmlFor="">Ratings</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Bus Rating"
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                value={rate}
              />
            </div>

            <div className="row justify-content-center">
              <div
                className="card mb-3 p-lg-4 p-2 "
                style={{
                  backgroundColor: "transparent",
                  border: "0.5px solid purple",
                }}
              >
                <div className="row g-0 justify-content-evenly">
                  <div className="col-md-4 align-self-center">
                    <p style={{ fontSize: "larger" }}>
                      What all are the utilities you provide?
                    </p>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body ">
                      <div className="row ">
                        <div className="col-md-4 col-lg-3">
                          <div className="form-check">
                            <input
                              style={{ border: "1px solid purple" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                              onChange={(e) => {
                                setSnacks(e.target.checked);
                              }}
                              checked={snacks}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Snacks
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                          <div className="form-check">
                            <input
                              style={{ border: "1px solid purple" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                              onChange={(e) => {
                                setWater(e.target.checked);
                              }}
                              checked={water}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Water
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                          <div className="form-check">
                            <input
                              style={{ border: "1px solid purple" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                              onChange={(e) => {
                                setTv(e.target.checked);
                              }}
                              checked={tv}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              TV
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                          <div className="form-check">
                            <input
                              style={{ border: "1px solid purple" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                              onChange={(e) => {
                                setBlanket(e.target.checked);
                              }}
                              checked={blanket}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Blanket
                            </label>
                          </div>
                        </div>

                        <div className="col-md-4 col-lg-3">
                          <div className="form-check">
                            <input
                              style={{ border: "1px solid purple" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                              onChange={(e) => {
                                setChargeport(e.target.checked);
                              }}
                              checked={chargeport}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Charging Port
                            </label>
                          </div>
                        </div>

                        <div className="col-md-4 col-lg-3">
                          <div className="form-check">
                            <input
                              style={{ border: "1px solid purple" }}
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                              onChange={(e) => {
                                setAc(e.target.checked);
                              }}
                              checked={ac}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              AC
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-4 mt-4">
              <label htmlFor="">What all are the utilities you provide ?</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                  onChange={(e) => {
                    setSnacks(e.target.checked);
                  }}
                  checked={snacks}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Snacks
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                  onChange={(e) => {
                    setWater(e.target.checked);
                  }}
                  checked={water}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Waterbottle
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                  onChange={(e) => {
                    setTv(e.target.checked);
                  }}
                  checked={tv}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  TV
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                  onChange={(e) => {
                    setBlanket(e.target.checked);
                  }}
                  checked={blanket}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Blanket
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                  onChange={(e) => {
                    setChargeport(e.target.checked);
                  }}
                  checked={chargeport}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Charging Port
                </label>
              </div>
            </div> */}

            <div className="row justify-content-center">
              <div className="col-md-3 col-lg-2">
                <button
                  style={{ marginLeft: "0" }}
                  type="submit"
                  className="  w-100 testbutton"
                  onClick={detail}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addbus;
