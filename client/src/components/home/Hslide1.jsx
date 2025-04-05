import React from 'react'
import { Link } from 'react-router-dom'
import a from '../../assets/svg/map.svg';
import b from '../../assets/svg/phone.svg';;
import c from '../../assets/svg/payment.svg';
import d from '../../assets/svg/customer.svg';
import e from '../../assets/svg/offer.svg';
import "../Style.css"


const Hslide1 = () => {
  return (
    <div className='hb pb-5' >
      <div className='row justify-content-center'>
        <div className="col mt-5">
          <h3 style={{fontSize:"60px",textAlign:"center "}}>Why choose BusBuddy ?</h3><br />
            
        </div>
      </div>

      <div className="row justify-content-evenly mt-5">

     <div className="card mb-3" style={{maxWidth: 540,backgroundColor:"transparent",border:"none"}}>
      <div className="row sg">
        <div className="col-md-4 ">
          <div className="svg-container">
            <img src={b} alt="" />
        </div>

          
        </div>
        <div className="col-md-8 align-self-center">
          <div className="card-body" style={{color:'white',textAlign:'center'}}>
          <h5 className="card-title"><i>Easy Online Booking</i></h5>
          <p  className="card-text" >Book your tickets from the comfort of your home</p>
          
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3" style={{maxWidth: 540,backgroundColor:"transparent",border:"none"}}>
      <div className="row sg1">
        <div className="col-md-5 ">
        <div className="svg-container">
            <img src={e} alt="" style={{marginLeft:"-13px"}}/>
        </div>
        </div>
        <div className="col-md-7 align-self-center ">
          <div className="card-body" style={{color:'white',textAlign:'center'}}>
          <h5 className="card-title"><i>Exclusive Discounts & Offers</i></h5>
          <p className="card-text" >Save more with our best deals</p>
          
          </div>
        </div>
      </div>
    </div>

        
      </div>

      <div className="row justify-content-evenly  mt-1 mt-sm-3">

      <div className="card mb-3" style={{maxWidth: 540,backgroundColor:"transparent",border:"none"}}>
      <div className="row sg">
        <div className="col-md-4 ">
        <div className="svg-container">
            <img src={c} alt="" />
        </div>
        </div>
        <div className="col-md-8 align-self-center">
          <div className="card-body" style={{color:'white',textAlign:'center'}}>
          <h5 className="card-title"><i>Secure Payments</i></h5>
          <p className="card-text" >Pay safely with multiple payment options</p>
          
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3" style={{maxWidth: 540,backgroundColor:"transparent",border:"none"}}>
      <div className="row sg">
        <div className="col-md-4 ">
        <div className="svg-container">
            <img src={d} alt="" />
        </div>
        </div>
        <div className="col-md-8 align-self-center">
          <div className="card-body" style={{color:'white',textAlign:'center'}}>
          <h5 className="card-title"><i>24/7 Customer Support</i></h5>
          <p className="card-text" >We're here to help whenever you need us</p>
          
          </div>
        </div>
      </div>
    </div>

      </div>

     


      
    </div>
  )
}

export default Hslide1
