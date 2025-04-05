import React from 'react'
import "../Style.css"
import "../Animation.css"
import h from "../../assets/images/bgv.mp4"


const Hslide = () => {
  return (
    <div className='slide' >

      <video autoPlay loop muted playsInline className='background-clip'>
        <source  src={h} type='video/mp4'/>
      </video>

      <div className='slidecon tracking-in-contract-bck'>
        <h1><i>Welcome to BusBuddy</i></h1>
        <h4><i>Wish you a Happy and Safe Journey! </i></h4>
      </div>

      {/* <div className='slidecon focus-in-expand-fwd'>
        <h4><i>Wish you a Happy and Safe Journey! </i></h4>
      </div> */}
      
     
    </div>
  )
}




export default Hslide
