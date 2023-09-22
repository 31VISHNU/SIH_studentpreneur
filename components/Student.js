import React,{Component, useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import './card.css';
const Student=()=>{
    const [StudentData, setStudentData] = useState([]);
    const [sc, setstudentclg] = useState("");
    const getStudentDetails=async()=>{
      await axios.post("http://localhost:5000/studentpreneur/gf1",{}).then(res=>{
        console.log(res.data);
        setStudentData(res.data);
        }).catch((error)=>{ });
    }
    const getFilteredStudentDetails=async()=>{
      await axios.post("http://localhost:5000/studentpreneur/g_f1",{clgName:sc}).then(res=>{
        console.log(res.data);
        setStudentData(res.data);
        }).catch((error)=>{ });
    }
    useEffect(()=>{
      window.addEventListener("load",getStudentDetails);
      console.log(setStudentData);
      return ()=>{
        window.addEventListener("load",getStudentDetails);
      };
    },[StudentData]);
    const handle_submit=(e)=>{
      e.preventDefault();
      var clg=document.getElementById("sc").value;
      setstudentclg(clg);
      console.log(clg);
      getFilteredStudentDetails();
    }

return(
  <div className="home">
  <select id="sc" value={StudentData.clgName} onChange={(e) => setstudentclg(e.target.value)}>
    {StudentData.map((option, index) => (
      <option key={index.clgName}>{option.clgName}</option>
    ))}
  </select>
  <button onClick={handle_submit}>Submit</button>
  
    <button onClick={() => window.location.reload()}>Refresh</button>

    <div className="home">
    { 
     StudentData.map((item)=>{
        return(
          <div className="home" align="center">
          <div class="card">
          <h3 class="title">{item.sid}</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="hide">{item.name}<br></br>
          {item.creditPoints}<br></br></div>
        </div>
        </div>
        )

      })
      
    }
    </div>
  </div>
);
}

export default Student