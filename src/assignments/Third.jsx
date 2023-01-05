import React from 'react';
import { useNavigate } from "react-router-dom";
import Animation from '../assets/animation.gif';

const Third = () => {


  const navigate = useNavigate();


  return (
    <div>
      <img src={Animation} className="w-70 h-50" alt='animation' />

      <button
        className="bg-gradient-to-r mt-4 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        onClick={() => navigate("/assignment/")}
      >
        Back
      </button>

    </div>
  )
}

export default Third;