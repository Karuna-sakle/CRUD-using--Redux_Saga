import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  
import { useState } from 'react';
import React from 'react'
export const ShowDate = () => {
    const [startdate ,setNewDate] = useState ()
  

   
    
  return (
        <div className="App">
         < DatePicker
             selected={ startdate }  
             dateFormat="yyyy/MM/dd"  
             onChange={ date=>setNewDate(date)
              
               }  
          />  
    </div>
  )
}
