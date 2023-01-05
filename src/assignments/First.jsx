import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      showCanvas();
    }, 1000);
  }, []);

  function showCanvas() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    function drawTriangle(x, y, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 10, y - 30);
      ctx.lineTo(x + 20, y);
      ctx.fill();
    }

    function drawMountain(x, y, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 30, y - 50);
      ctx.lineTo(x + 60, y);
      ctx.fill();
    }

    function drawTree(x) {
      drawTriangle(30 + x, 80, "green"); //red triangle
      drawTriangle(30 + x, 100, "green"); //blue triangle
      drawTriangle(30 + x, 120, "green"); //green triangle
      ctx.fillStyle = "brown";
      ctx.fillRect(36 + x, 120, 8, 60);
    }

    // add background
    var backgroundLinear = ctx.createLinearGradient(0, 0, 0, 350);
    backgroundLinear.addColorStop(0, "#151c2e");
    backgroundLinear.addColorStop(0.9, "white");
    backgroundLinear.addColorStop(0.6, "green");
    ctx.fillStyle = backgroundLinear;
    ctx.fillRect(0, 0, 500, 450);

    // draw mountains
    for (let i = 0; i < 270; i += 30) {
      drawMountain(i, 120, "brown");
    }

    // Draw a triangle for the roof
    ctx.fillStyle = "magenta";
    ctx.beginPath();
    ctx.moveTo(215, 120);
    ctx.lineTo(215 + 30, 120 - 50);
    ctx.lineTo(215 + 60, 120);
    ctx.fill();

    // chimney
    ctx.fillStyle = "pink";
    ctx.fillRect(225, 120, 40, 120);
    ctx.fillRect(378, 198, 55, 5);

    // windows
    ctx.fillStyle = "blue";
    ctx.fillRect(233, 125, 10, 10);
    ctx.fillRect(245, 125, 10, 10);
    ctx.fillRect(233, 137, 10, 10);
    ctx.fillRect(245, 137, 10, 10);

    // door lines
    ctx.beginPath();
    ctx.restore();
    ctx.moveTo(200, 423);
    ctx.lineTo(200, 560);
    ctx.moveTo(140, 433);
    ctx.lineTo(140, 560);
    ctx.moveTo(260, 434);
    ctx.lineTo(260, 560);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(199, 562, 140, 1.355 * Math.PI, 1.65 * Math.PI); // door arc
    ctx.stroke();

    // adding trees using for loop
    for (let i = 0; i < 60; i += 20) {
      drawTree(i);
    }


   // draw pond
   ctx.beginPath();
   ctx.fillStyle = "#2B65EC";
   ctx.arc(150, 135, 10, 0, 2 * Math.PI);
   ctx.fill();

    // add text
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.textAlign = "right";
    ctx.fillText("Landscape", canvas.width / 4, canvas.height / 4);

    // draw sun
    var y = 20;
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(280, y, 10, 0, 2 * Math.PI);
    ctx.fill();

    // draw moon
    ctx.lineWidth = 2;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(30, 15, 10, Math.PI * 0.5, Math.PI * 1.5);
    ctx.fill();
    ctx.globalCompositeOperation = "destination-out";

 
  }

  return (
    <div>
      <div id="header" className="w-screen h-[80vh] p-2">
        <canvas id="myCanvas" className="w-full h-full"></canvas>
      </div>
      <button
        className="bg-gradient-to-r mt-4 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        onClick={() => navigate("/assignment/")}
      >
        Back
      </button>
    </div>
  );
};

export default First;
