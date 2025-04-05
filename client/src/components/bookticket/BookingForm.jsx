import React from 'react'

const BookingForm = () => {
  return (
    <div className="col-sm-4 p-sm-4 ">
    <div
      className="container p-3 mt-5 mt-sm-0"
      style={{ borderRadius: "5px", border: "1px solid #BF2EF0" }}
    >
      <form action="" className="bookform">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Passengers Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Mobile No."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Alternative Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Alt. Mobile No."
          />
        </div>

        <div className="row justify-content-center">
          <div className="col">
            <button
              className="testbutton"
              style={{ marginLeft: "0", width: "100%" }}
            >
              Book Ticket
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default BookingForm
