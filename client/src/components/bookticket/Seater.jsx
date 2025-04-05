import React from "react";
import "../Style.css";

import { busStore } from "../../statemanager/bus.store";
import { useParams } from "react-router-dom";

const Seater = () => {
  let { singlebus, bus } = busStore();

  return (
    <div>
      <div className="p-5">
        <h1 style={{ color: "#BF2EF0" }}>
          <i>Book the seats which convinient for you !</i>
        </h1>
        <div className="row justify-content-evenly mt-4">
          <div className="col-sm-8 p-sm-4">
            <div className="row justify-content-center">
              <div className="col-sm-7 ">
                <div className="row border p-1 p-sm-3 ">
                  <h1>Seats</h1>
                  {bus.seats.map((seat) => {
                    return (
                      <div className="col-3 booktic">
                        <button
                          key={seat.seatNo}
                          
                        >
                          {seat.seatNo}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="container m-4">
        
                    <div className="container p-3 ps-4 m-2 border">
                       
                    <div className="row justify-content-evenly mt-3 booktic">
                                       {bus.seats.map((seat)=>{ 
                                         return(
                                            <div className="col-2 ">
                    
                                               <img style={{margin:"2px"}} src={e} key={seat.seatNo} />
                    
                                            </div>
                                            
                                         )
                                      })}             
                    
                                   </div>
        
                </div>
        
                    
        
        
                    </div> */}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Seater;
