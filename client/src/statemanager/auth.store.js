import { create } from "zustand";
import axios from "axios";
import { apiendpoint } from "../Data";


export let Authstore = create((set)=>({

  user: null,

  message:{status:false},


    loginhandler : (email,password)=>{
      

        let logdata = {
      
            email:email,
            password:password
      
          }
      
      
          axios.post(`${apiendpoint}/auth/login`,logdata, {withCredentials: true})
          .then((res)=>{

            set(({message:res.data}))
          
          })
          .catch((e)=>{

            console.log(e);
            
          })
          
           
    },

    signhandler: (email, username, password) => {
      let sdata = {
        username: username,
        email: email,
        password: password,
      };
    
      axios
        .post(`${apiendpoint}/auth/signup`, sdata,{
          withCredentials: true
        })
        .then((res) => {
          // Set only the message, NOT status
          set(({ message: { status: false, msg: "Signup successful! Please log in." } }));
    
          console.log("User signed up successfully. Redirecting to login...");
        })
        .catch((e) => {
          console.log("Signup failed:", e);
          set(({ message: { status: false, msg: "Signup failed. Try again." } }));
        });
    },
    

    checkAuth: () => {
  return axios
    .get(`${apiendpoint}/auth/check`, { withCredentials: true })
    .then((res) => {
      if (res.data.status) {
        set({ message: { status: true }, user: res.data.user });
      } else {
        set({ message: { status: false }, user: null });
      }
    })
    .catch((e) => {
      console.log("Auth check failed", e);
      set({ message: { status: false }, user: null });
    });
},

    logoutHandler : ()=>{
      axios.post(`${apiendpoint}/auth/logout`,{},{withCredentials:true})
      .then(()=>{
        set({ user: null, message: { status:false } });
      });
    }




}));