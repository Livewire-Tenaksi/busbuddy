import React, { useState } from 'react';
import "../Style.css";
import "../Animation.css"
import { Link, useNavigate } from 'react-router-dom';
import { Authstore } from '../../statemanager/auth.store';
import f from "../../assets/icons/eyec.svg";
import g from "../../assets/icons/eyeo.svg";
import e from "../../assets/icons/mail.svg";
import b3 from "../../assets/images/bus5.png"

const Logslide = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setShowpassword] = useState(false);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  
  const { loginhandler, message } = Authstore();
  
  const logform = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {

      await loginhandler(email, password);      //data sent to server
      navigate('/bookticket');

    }
    
    setValidated(true);
  };

  return (
    <div className='lbg'>
      <div className="container pt-5 "  style={{ height: "650px" }}>
        <div className="row justify-content-evenly">
          <div className="col-6 sbus">
                    <div className="row">
                      <div className="col-8 sigpag  ">
                        
                      <h1 style={{color:'white',fontSize:"60px",textAlign:'center'}} className='text-shadow-drop-left'><i>Unlock the smarter way to travel</i></h1>
          
                      <img src={b3} alt="" className='mt-5 img-fluid slide-right'/>
                      </div>
                      
                      
                     
                    </div>
                    
                  </div>
          <div className="col-sm-5 col-md-8 col-lg-4 p-4 mt-4 align-self-center  card2">
            <p className='text-center'>
              <i className='text-black' style={{fontWeight:'500',fontSize:'large', backgroundColor:"#BF2EF0"}}>{message.msg}</i>
            </p>
            <h4 style={{ fontSize: "30px",color:'white' }}>Login</h4>
            <hr />
            <div id='L'>
              <form noValidate className={validated ? "was-validated" : "needs-validation"} onSubmit={logform}>
                <div className="input-group mt-1 mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="input-group-text" style={{borderRadius: "0px 5px 5px 0px"}}><img src={e} alt="" /></span>
                  <div className="invalid-feedback">Please enter a valid email.</div>
                </div>
                
                <div className="input-group mt-1 mb-1">
                  <input 
                    type={showpassword ? "text" : "password"} 
                    className="form-control" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className="input-group-text" style={{borderRadius: "0px 5px 5px 0px"}}>
                    <img src={showpassword ? g : f} alt="" onClick={() => setShowpassword(!showpassword)} />
                  </span>
                  <div className="invalid-feedback">Please enter your password.</div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-4 col-sm-5">
                    <button className='testbutton1' type="submit">Login</button>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <p style={{ textAlign: "center", fontSize: "20px", marginTop: "10px", fontWeight:"bold" }}>
                Don't have an account? <Link to={'/signup'} style={{ textDecoration: "none", color: 'white', fontWeight: "bolder",fontSize: '23px' }}>Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logslide;

// import React, { useState } from 'react'
// import "../Style.css"
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { Authstore } from '../../statemanager/auth.store'
// import f from "../../assets/icons/eyec.svg"
// import g from "../../assets/icons/eyeo.svg"
// import e from "../../assets/icons/mail.svg"

// const Logslide = () => {

//   let [email,setEmail] = useState();
//   let [password,setPassword] = useState();
//   let [showpassword,setShowpassword] = useState(false);

//   let [msg,setMsg] = useState([]);

//   let {loginhandler,message} = Authstore()
//   console.log(message);
  




//   let logform = (e)=>{



//     e.preventDefault()

//     loginhandler(email,password)

    
     
//   }

//   return (
//     <div>
//         <div className="container pt-5" style={{height:"700px"}}>
//         <di className="row justify-content-center ">
//             <div className="col-sm-5 col-md-6 col-lg-4 p-4 card1 " >


//               <p className='text-center' ><i className={message.status ? "bg-success" : "bg-danger"}>{message.msg}</i></p>
  

//                 <h4 style={{fontSize:"30px"}}>Login</h4>
//                 <hr />
//                 <div id='L'>

//                   <form action="">

//                     <div className="input-group mt-1 mb-3">
//                           <input type="email" className="form-control" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
//                           <span className="input-group-text" ><img src={e} alt="" /></span>
//                     </div>
                    
//                     <div className="input-group mt-1 mb-1">
//                           <input type={showpassword ? "text" : "password"} className="form-control" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
//                           <span className="input-group-text" ><img src={showpassword ? g : f} alt="" onClick={()=>{setShowpassword(!showpassword)}}/></span>
//                     </div>

//                     <div className="row justify-content-center ">
//                       <div className="col-5 ">
//                         <button className='testbutton1' onClick={logform} >Login</button>
//                       </div>
//                     </div>


//                   </form>

                    
                    
                    
                    
//                 </div>


//                 <div>
//                     <p style={{textAlign:"center", fontSize:"20px",marginTop:"10px"}}>Don't have any account? <Link to={'/signup'} style={{textDecoration:"none",color:'purple',fontWeight:"bolder"}}>Signup</Link></p>
//                 </div>

//             </div>
//         </di>
//       </div>
      
//     </div>
//   )
// }

// export default Logslide
