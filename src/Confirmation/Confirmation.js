import React from 'react'
import { useState } from "react";
import CheckCircle from "@mui/icons-material/CheckCircle";
import CircularProgress from '@mui/material/CircularProgress';
import './Confrimation.css'

const Confirmation = () => {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return (
    <>
      {load ? (
        <div className="mainLoad">
          <CircularProgress className="loadIcon" pulse style={{ fontSize: "2em" }} />
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="Confirmation">
          <CheckCircle className="checkIcon" />
          <h5>
            Payment done successfully
          </h5>
        </div>
      )}
    </>
  );
};

export default Confirmation;
