import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { busStore } from "../../statemanager/bus.store";
import "../Style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";
import { Authstore } from "../../statemanager/auth.store";
import { apiendpoint } from "../../Data";

const Singlebusinfo = () => {
  const { singlebus, bus } = busStore();
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatStatus, setSeatStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { message } = Authstore(); // Get authentication status

  const [passengername, setPassengername] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [alternatemobile, setAlternatemobile] = useState("");
  const [validated, setValidated] = useState(false);

  const handlebooking = (e) => {
    e.preventDefault();
    setLoading(true);

    // Check form validity
    const form = e.currentTarget;
    if (form.checkValidity() === false || selectedSeats.length === 0) {
      e.stopPropagation();
      setValidated(true);
      setLoading(false); // Stop loading since form is invalid
      return;
    }

    let bookdata = {
      passengerName: passengername,
      email: email,
      mobileNumber: mobilenumber,
      alternatemobile: alternatemobile,
      selectedseats: selectedSeats,
    };

    axios
      .post(`${apiendpoint}/bus/singlebus/${id}/bookbus`, bookdata)
      .then((res) => {
        console.log(res.data);
        setPassengername("");
        setEmail("");
        setMobilenumber("");
        setAlternatemobile("");
        setSelectedSeats([]); // Reset seat selection

        singlebus(id);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!message.status) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      singlebus(id);
    }
  }, [id, message.status, navigate]);

  useEffect(() => {
    if (bus && bus.seats) {
      const seatMap = bus.seats.reduce((acc, seat) => {
        acc[seat.seatNo] = seat.status; // true (available) or false (booked)
        return acc;
      }, {});
      setSeatStatus(seatMap);
    }
  }, [bus]);

  const handleSeatSelection = (seatNo) => {
    if (!seatStatus[seatNo]) return;

    setSelectedSeats((prev) =>
      prev.includes(seatNo)
        ? prev.filter((s) => s !== seatNo)
        : [...prev, seatNo]
    );
  };

  return (
    <div className="container pt-5 pb-5">
      <h1 style={{ color: "#BF2EF0" }}>
        <i>Book the seats which are convenient for you!</i>
      </h1>

      <div className="row justify-content-evenly mt-5">
        <div className="col-lg-8">
          {bus && bus.bustype === "sleeper" && (
            <div className="row justify-content-evenly">
              <div className="col-sm-6 col-lg-5">
                <div className="row border p-1 p-sm-3 ">
                  <h1>Upper</h1>
                  {bus.seats
                    .filter((seat) => seat.seatNo <= bus.seats.length / 2)
                    .map((seat) => (
                      <div className="col-4" key={seat.seatNo}>
                        <button
                          style={{
                            height: "150px",
                            width: "100%",
                            margin: "2px",
                            border: "1px solid purple",
                            backgroundColor: !seatStatus[seat.seatNo]
                              ? "rgb(174, 174, 174)"
                              : selectedSeats.includes(seat.seatNo)
                              ? "#BF2EF0"
                              : "transparent",
                            color: "black",
                            cursor: seatStatus[seat.seatNo]
                              ? "pointer"
                              : "not-allowed",
                          }}
                          disabled={!seatStatus[seat.seatNo]}
                          onClick={() => handleSeatSelection(seat.seatNo)}
                        >
                          {seat.seatNo}
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              <div className="col-sm-6 col-lg-5">
                <div className="row border p-1 p-sm-3 mt-4 mt-sm-0">
                  <h1>Lower</h1>
                  {bus.seats
                    .filter((seat) => seat.seatNo > bus.seats.length / 2)
                    .map((seat) => (
                      <div className="col-4" key={seat.seatNo}>
                        <button
                          style={{
                            height: "150px",
                            width: "100%",
                            margin: "2px",
                            border: "1px solid purple",
                            backgroundColor: !seatStatus[seat.seatNo]
                              ? "rgb(174, 174, 174)"
                              : selectedSeats.includes(seat.seatNo)
                              ? "#BF2EF0"
                              : "transparent",
                            color: "black",
                            cursor: seatStatus[seat.seatNo]
                              ? "pointer"
                              : "not-allowed",
                          }}
                          disabled={!seatStatus[seat.seatNo]}
                          onClick={() => handleSeatSelection(seat.seatNo)}
                        >
                          {seat.seatNo}
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

{bus && bus.bustype === "deluxe" && (
            <div className="row justify-content-evenly">
              <div className="col-lg-8 col-md-9">
                <div className="row border p-1 p-sm-3 ">
                  <h1>Seats</h1>
                  {bus.seats
                    .filter((seat) => seat.seatNo <= bus.seats.length )
                    .map((seat) => (
                      <div className="col-3" key={seat.seatNo}>
                        <button
                        className="seaters"
                          style={{
                            margin: "2px",
                            border: "1px solid purple",
                            backgroundColor: !seatStatus[seat.seatNo]
                              ? "rgb(174, 174, 174)"
                              : selectedSeats.includes(seat.seatNo)
                              ? "#BF2EF0"
                              : "transparent",
                            color: "black",
                            cursor: seatStatus[seat.seatNo]
                              ? "pointer"
                              : "not-allowed",
                          }}
                          disabled={!seatStatus[seat.seatNo]}
                          onClick={() => handleSeatSelection(seat.seatNo)}
                        >
                          {seat.seatNo}
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              
            </div>
          )}
        </div>

        <div className="col-md-8 col-lg-4">
          <div
            className="container p-3 mt-5 mt-sm-4 mt-lg-0"
            style={{ borderRadius: "5px", border: "1px solid #BF2EF0" }}
          >
            <form
              className={`bookform needs-validation ${
                validated ? "was-validated" : ""
              }`}
              noValidate
              onSubmit={handlebooking}
            >
              <div className="mb-3">
                <label className="form-label">Passengers Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={(e) => setPassengername(e.target.value)}
                  value={passengername}
                />
                <div className="invalid-feedback">
                  Please enter passenger's name.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div className="invalid-feedback">
                  Please enter a valid email.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Mobile No."
                  required
                  onChange={(e) => setMobilenumber(e.target.value)}
                  value={mobilenumber}
                />
                <div className="invalid-feedback">
                  Please enter a mobile number.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Alternate Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Alt. Mobile No."
                  required
                  onChange={(e) => setAlternatemobile(e.target.value)}
                  value={alternatemobile}
                />
                <div className="invalid-feedback">
                  Please enter a alternate mobile number.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Selected Seats</label>
                <input
                  type="text"
                  className={`form-control ${
                    validated && selectedSeats.length === 0 ? "is-invalid" : ""
                  }`}
                  value={selectedSeats.join(", ")}
                  readOnly
                  required
                />
                <div className="invalid-feedback">
                  Please select at least one seat.
                </div>
              </div>

              <div className="row justify-content-center">
              <div className="col">
                  <Payment />
                </div>
              </div>

              <div className="row justify-content-center">

                <div className="col">
                  <button
                    className="testbutton"
                    style={{ marginLeft: "0", width: "100%" }}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Book Ticket"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlebusinfo;
