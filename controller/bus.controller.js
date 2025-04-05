const Ticket = require("../lib/Ticket");
const bookingDetail = require("../model/bookingmodel");
const busdetails = require("../model/bus.model")

module.exports = {

    addbus : async(req,res)=>{

        let {from,to,date,travelsname,ownername,ownernumber,drivername,drivernumber,starttime,endtime,startingdate,reachingdate,snacks,water,tv,blanket,chargeport,ac,bustype,seats,price,rating} = req.body

        let totalseat = [];
        

        for (let i = 1; i <= Number(seats); i++) {
          
            let obj = {
                seatNo : i,
                status: true
            }

            totalseat.push(obj)
           
        } 

        busdetails.create({from:from,to:to,date:date,travelsname:travelsname,ownername:ownername,ownernumber:ownernumber,drivername:drivername,drivernumber:drivernumber,starttime:starttime,endtime:endtime,startingdate:startingdate,reachingdate:reachingdate,snacks:snacks,water:water,tv:tv,blanket:blanket,chargeport:chargeport,ac:ac,bustype:bustype,price:price,rating:rating, seats:totalseat, })

        .then((d)=>{
            res.json({
                status:true,
                "msg":"Bus data added",
                data:d
            })
        })
        .catch((e)=>{ 
            console.log(e);
                 
            res.json({
                status:false,
                "msg":e,
                "info":"Error occured in adding bus data"
            })
        })
    },

    findbus : async (req,res)=>{

        let {from,to, date} = req.body

        
        

       await busdetails.find({from:from,to:to,date:date})
        .then((d)=>{

            res.json({
                status:true,
                busdata:d
                        })
        })
        .catch((e)=>{


            res.json({
                status:false,
                msg:"error occured in findbus"
            })
        })

    },

    findsinglebus : async (req,res)=>{

        let {id} = req.params

        await busdetails.findOne({_id:id})
        .then((d)=>{
            res.send(d)
        })
        .catch((e)=>{
            console.log(e);
            
        })
    },

    // bookbus : async (req,res)=>{

    //     let {id} = req.params;
        

    //     let {passengerName,email,mobileNumber,alternatemobile,selectedseats} = req.body;
    //     console.log(req.body);
        

    //     let data = await busdetails.find({_id:id});


    //     for (let i = 0; i < data.length; i++) {
            

    //         for(let j=0; j < selectedseats.length-1; j++){
            
    //             if(selectedseats[j] == data[i].seats.seatNo){

    //                 // busdetails.findOneAndUpdate({seats:data})

    //                 data.seats.status = false;



    //             }
    //              console.log(data[i].seats);
                
    //         }
    

          
                        
            
    //     }


       
        

        
    //     // bookingDetail.create({passengerName:passengerName,email:email,mobileNumber:mobileNumber,alternatemobile:alternatemobile,selectedseats:selectedseats})
    //     // .then(()=>{
            
    //     //     res.send("bokking confirmed");
            
    //     // })
    //     // .catch(()=>{
           
    //     //     res.send("OOPS! Error")
    //     // })
    // }



    bookbus: async (req, res) => {
        try {
            let { id } = req.params; // Bus ID
            let { passengerName, email, mobileNumber, alternatemobile, selectedseats } = req.body;
    
            let bus = await busdetails.findOne({ _id: id });
    
            if (!bus) {
                return res.status(404).json({ status: false, msg: "Bus not found" });
            }
    
            // Update seat statuses directly in the database
            await busdetails.updateOne(
                { _id: id, "seats.seatNo": { $in: selectedseats } }, // Match bus ID and selected seats
                { $set: { "seats.$[elem].status": false } }, // Update seat status to false
                { arrayFilters: [{ "elem.seatNo": { $in: selectedseats } }] } // Filter only selected seats
            );
    
            // Store booking details
           let newTicket =  await bookingDetail.create({
                passengerName,
                email,
                mobileNumber,
                alternatemobile,
                selectedseats,
                date : new Date()
            })
            
            await Ticket(newTicket,bus)
    
           return res.status(201).json({ status: true, msg: "Booking Confirmed", ticket:newTicket });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: false, msg: "Error occurred while booking seats" });
        }
    }
    
    

}