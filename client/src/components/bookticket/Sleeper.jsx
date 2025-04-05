import React from "react";
import { useState, useEffect } from "react";
import e from "../../assets/svg/bed.svg";
import "../Style.css";
import { busStore } from "../../statemanager/bus.store";
import { useParams } from "react-router-dom";

const Sleeper = () => {
  let { singlebus, bus } = busStore();

  return (
    <div>
      <div className="p-5">
        <h1 style={{ color: "#BF2EF0" }}>
          <i>Book the seats which convinient for you !</i>
        </h1>
        <div className="row justify-content-evenly mt-4">
          <div className="col-sm-8 p-sm-4">
            <div className="row justify-content-evenly">
              <div className="col-sm-5 " >
                <div className="row border p-1 p-sm-3 ">
                  <h1>Upper</h1>
                  {bus.seats.map((seat) => {
                    return (
                      <div className="col-4 ">
                        <button
                          key={seat.seatNo}
                          style={{
                            height: "150px",
                            width: "100%",
                            margin: "2px",
                            border: "1px solid purple",
                            backgroundColor: "transparent",
                          }}
                        >
                          {seat.seatNo}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-sm-5">
                <div className="row border p-1 p-sm-3 mt-4 mt-sm-0">
                  <h1>Lower</h1>
                  {bus.seats.map((seat) => {
                    return (
                      <div className="col-4 ">
                        <button
                          key={seat.seatNo}
                          style={{
                            height: "150px",
                            width: "100%",
                            margin: "2px",
                            border: "1px solid purple",
                            backgroundColor: "transparent",
                          }}
                        >
                          {seat.seatNo}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <br />
      </div>
    </div>
  );
};

export default Sleeper;
