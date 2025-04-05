import React from "react";
import step1 from "../../assets/images/busbook1.png";
import step2 from "../../assets/images/busbook2.png";
import step3 from "../../assets/images/busbook3.png";
import step4 from "../../assets/images/busbook4.png";
import step5 from "../../assets/images/busbook5.png";
import "../Style.css";

const Hslide3 = () => {
  return (
    <div className="hb pb-5">
      <h1 className="text-center pt-5">
        <i>How it works!</i>
      </h1>

      <div className="container mt-5" id="mobslide">
        <div className="row">
          <div className="col-12">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd text-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <img src={step1} alt="sample image" className="img-fluid" />
                </div>
                <div className="col-md-8 align-self-center">
                  <div
                    className="card-body"
                    style={{ color: "white", textAlign: "center" }}
                  >
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 1</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Enter your source and destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd text-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <img src={step2} alt="sample image" className="img-fluid" />
                </div>
                <div className="col-md-8 align-self-center">
                  <div
                    className="card-body"
                    style={{ color: "white", textAlign: "center" }}
                  >
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 2</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Choose from a variety of bus options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd text-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <img src={step3} alt="sample image" className="img-fluid" />
                </div>
                <div className="col-md-8 align-self-center">
                  <div
                    className="card-body"
                    style={{ color: "white", textAlign: "center" }}
                  >
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 3</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Select your seat & make a secure payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd text-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <img src={step4} alt="sample image" className="img-fluid" />
                </div>
                <div className="col-md-8 align-self-center">
                  <div
                    className="card-body"
                    style={{ color: "white", textAlign: "center" }}
                  >
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 4</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Get instant e-ticket confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd text-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <img src={step5} alt="sample image" className="img-fluid" />
                </div>
                <div className="col-md-8 align-self-center">
                  <div
                    className="card-body"
                    style={{ color: "white", textAlign: "center" }}
                  >
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 5</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Board the bus and enjoy your journey!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container  mt-5" id="deskslide">
        <div className="row justify-content-between ">
          <div className="col-md-9 col-lg-8">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd ">
                <div className="col-md-5 " style={{ borderRadius: "50px" }}>
                  <img
                    src={step1}
                    alt="sample image"
                    className="img-fluid"
                    style={{ float: "right" }}
                  />
                </div>
                <div className="col-md-6  align-self-center">
                  <div className="card-body" style={{ color: "white" }}>
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 1</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Enter your source and destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-1"></div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-2 col-lg-1"></div>

          <div className="col-md-9 col-lg-8">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd ">
                <div
                  className="col-md-6   align-self-center"
                  style={{ textAlign: "right" }}
                >
                  <div className="card-body" style={{ color: "white" }}>
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 2</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Choose from a variety of bus options.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 " style={{ borderRadius: "50px" }}>
                  <img src={step2} alt="sample image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-9 col-lg-8">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd">
                <div className="col-md-5 " style={{ borderRadius: "50px" }}>
                  <img
                    src={step3}
                    alt="sample image"
                    className="img-fluid"
                    style={{ float: "right" }}
                  />
                </div>
                <div className="col-md-6  align-self-center">
                  <div className="card-body" style={{ color: "white" }}>
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 3</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Select your seat & make a secure payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-1"></div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-2 col-lg-1"></div>

          <div className="col-md-9 col-lg-8">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd">
                <div
                  className="col-md-6  align-self-center"
                  style={{ textAlign: "right" }}
                >
                  <div className="card-body" style={{ color: "white" }}>
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 4</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Get instant e-ticket confirmation.
                    </p>
                  </div>
                </div>
                <div className="col-md-5" style={{ borderRadius: "50px" }}>
                  <img src={step4} alt="sample image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-9 col-lg-8">
            <div
              className="card mb-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              <div className="row justify-content-center crd">
                <div className="col-md-5 " style={{ borderRadius: "50px" }}>
                  <img
                    src={step5}
                    alt="sample image"
                    className="img-fluid"
                    style={{ float: "right" }}
                  />
                </div>
                <div className="col-md-6  align-self-center">
                  <div className="card-body" style={{ color: "white" }}>
                    <h5 className="card-title" style={{ fontSize: "35px" }}>
                      <i>Step 5</i>
                    </h5>
                    <p className="card-text" style={{ fontSize: "20px" }}>
                      Board the bus and enjoy your journey!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hslide3;
