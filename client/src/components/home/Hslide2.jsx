import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Style.css"

const Hslide2 = () => {

  
  
  return (
    <div id='hb1' >

      <div style={{backgroundColor:"rgba(0,0,0,0.3)"}}>

        <h1 style={{fontSize:"60px"}} className='text-center pt-4'>About Us</h1><br />

        <div className="row justify-content-evenly p-3 p-sm-4 pt-sm-2 ">
          <div className="col-lg-5 col-md-0">

          </div>
          <div className="col-lg-5 col-md-10 p-2 p-sm-4 card1">

          <p style={{lineHeight:"180%",textAlign:"justify",color:"black",padding:"10px 20px",fontSize:"17px",fontWeight:"500"}}>Welcome to <b style={{color:"#BF2EF0"}}><i>BusBuddy</i> </b> Your Ultimate Bus Travel Partner! ultimate solution for seamless and hassle-free bus travel reservations. We are dedicated to revolutionizing the way you book bus tickets, making it easier, faster, and more convenient than ever before.<br />At <i >BusBuddy</i>, we are a team of passionate travel enthusiasts and technology experts committed to enhancing your travel experience. Our goal is to connect travelers with a vast network of bus operators, ensuring safe, reliable, and affordable travel options across cities and regions. Whether you are planning a short trip or a long journey, we provide you with the best choices tailored to your needs.</p>

          <h5 style={{paddingLeft:"20px",color:"black"}}>Book your tickets and enjoy your journey!</h5>
          

          </div>
        </div>
        


      </div>

      
    </div>
  )
}

export default Hslide2
