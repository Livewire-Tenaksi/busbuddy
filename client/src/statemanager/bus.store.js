import { create } from "zustand";
import axios from "axios";
import { apiendpoint } from "../Data";




 export let busStore = create((set)=>({

    busInfo : [],
    bus: {},


    findbus: (data)=>{

        axios.post(`${apiendpoint}/bus/findbus`,data,{withCredentials:true})
        .then((res)=>{
            
            set(({busInfo:res.data}));

            // console.log({busInfo:res.data});
            
            
            
        })
        .catch((e)=>{
            console.log(e);
            
        })

    },


    addbus : (datas)=>{

        axios.post(`${apiendpoint}/bus/addbus`,datas)
        .then((res)=>{
            alert("bus data added")
            console.log(res.data);
            
        })
        .catch((e)=>{
            alert("Error",e)
              
        })

    },

    singlebus : (id)=>{

        axios.get(`${apiendpoint}/bus/singlebus/${id}`)
        .then((res)=>{
            set({bus:res.data})
        })
        .catch((e)=>{
            console.log(e);
            
        })

    },

    






}))