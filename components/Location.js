import React,{Component, useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import './card.css';
const Location=()=>{
    const [bootcampData, setbootcampData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [bl, setBootcamplocation] = useState("");
    const getProjectDetails=async()=>{
      await axios.post("http://localhost:5000/studentpreneur/gf",{}).then(res=>{
        console.log(res.data);
        setbootcampData(res.data);
        }).catch((error)=>{ });
    }
    const getFilteredProjectDetails=async()=>{
      await axios.post("http://localhost:5000/studentpreneur/g_f",{BOOTCAMP_LOCATION:bl}).then(res=>{
        console.log(res.data);
        setbootcampData(res.data);
        }).catch((error)=>{ });
    }
    useEffect(()=>{
      window.addEventListener("load",getProjectDetails);
      console.log(bootcampData);
      return ()=>{
        window.addEventListener("load",getProjectDetails);
      };
    },[bootcampData]);
    const handle_submit=(e)=>{
      e.preventDefault();
      var bootcamplocation=document.getElementById("bl").value;
      setBootcamplocation(bootcamplocation);
      console.log(bootcamplocation);
      getFilteredProjectDetails();
    }

return(
  <div className="home">
  <select id="bl" value={bootcampData.BOOTCAMP_LOCATION} onChange={(e) => setBootcamplocation(e.target.value)}>
    {bootcampData.map((option, index) => (
      <option key={index.BOOTCAMP_LOCATION}>{option.BOOTCAMP_LOCATION}</option>
    ))}
  </select>
  <button onClick={handle_submit}>Submit</button>
  
    <button onClick={() => window.location.reload()}>Refresh</button>

    <div className="home">
    { 
     bootcampData.map((item)=>{
        return(
          <div className="home" align="center">
          <div class="card">
          <h3 class="title">{item.BOOTCAMP_NAME}</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="hide">{item.BOOTCAMP_LOCATION}<br></br>
          {item.BOOTCAMP_ID}<br></br>
          {item.BOOTCAMP_TOKEN_CODE}</div>
        </div>
        </div>
        )

      })
      
    }
    </div>
  </div>
);
}

export default Location