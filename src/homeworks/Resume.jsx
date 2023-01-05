import React from "react";

import Bean from "../assets/mrbean.webp";
import DataVis from "../assets/data-vis.png";
import Speech from "../assets/speech.png";

const Resume = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="navbar navbar-light bg-light w-[70%]">
        <a className="navbar-brand" href="#">
          <p className="px-2">Resume</p>
        </a>
      </nav>

      <img src={Bean} alt="mr-bean" height="100" className="mt-2" />

      <div className="flex mt-10 w-[70%]">
        <div className="p-2 bg-pink-300 w-[40%]">
          <h1 className="text-xl md:text-2xl font-bold ">Mr. Bean</h1>
          <div className="mt-3">
            <p>Email: iamMrBean@gmail.com</p>
            <p>Phone: (555) 432-1000</p>
            <p>Location: 12 Arbour Road, Highbury, London</p>
            <p>Occupation: National Gallery security guard</p>
          </div>
        </div>

        <div className="p-4 w-1/2">
          <h1 className="text-xl font-bold my-1">Professional Summary</h1>
          <p>
            Mr. Bean is immature, self-absorbed, extremely competitive and
            brings various abnormal schemes and contrivances to everyday tasks.
            He rarely speaks, and when he does, it is normally only a few
            mumbled words which are in a comically low-pitched voice. He also
            does not like people taking his things. Mr. Bean often seems
            unmindful of basic aspects of the way the world works, and the
            programme typically features his attempts at what would generally be
            considered simple activities, such as going for a swim, using a
            television set, redecorating, or attending church. The humour
            largely comes from his original (and often absurd) solutions to
            problems – usually self-inflicted – and his total disregard for
            others when solving them, his pettiness and occasional malevolence.
          </p>
        </div>
      </div>

      <nav className="navbar navbar-light bg-light mt-6 w-[70%]">
        <a className="navbar-brand" href="#">
          <p className="px-2">About</p>
        </a>
      </nav>

      <div className="flex mt-10 w-[70%]">
        <div className="p-2 bg-pink-100 w-[40%]">
          <h1 className="text-xl md:text-2xl font-bold ">Skills</h1>
          <div className="mt-4">
            <ul className="flex flex-col space-y-4">
              <li>Cunning</li>
              <p>Manipulation</p>
              <li>Surprising intelligence</li>
              <li>Driving Skill</li>
              <li>Cycling Skill</li>
              <li>Dancing Skill</li>
              <li>DIY Skill</li>
            </ul>
          </div>
        </div>

        <div className="px-4 py-1 w-1/2">
          <h1 className="text-xl font-bold my-1">Hobbies</h1>
          <ul>
            <li>Playing with Teddy</li>
            <li>Being with Irma</li>
            <li>Trying various new things</li>
          </ul>

          <h1 className="text-xl font-bold my-1">Friends / Allies</h1>
          <ul>
            <li>Teddy</li>
            <li>Irma Gobb</li>
            <li>Rupert & Hubert</li>
            <li>David Langley</li>
            <li>Stepan Dachevsky</li>
            <li>Evil Dachevsky</li>
            <li>Sabine</li>
            <li>Carson Clay</li>
          </ul>

          <h1 className="text-xl font-bold my-1">Enemies</h1>
          <ul>
            <li>Reliant Regal</li>
            <li>Julia Wicket</li>
            <li>Scrapper</li>
            <li>The Thieves</li>
            <li>The Bruisers</li>
          </ul>

          <h1 className="text-xl font-bold my-1">Goals</h1>
          <p>
            Bring various unusual schemes and connivances to everyday tasks.
          </p>
        </div>
      </div>

      <nav className="navbar navbar-light bg-light mt-6 w-[70%]">
        <a className="navbar-brand" href="#">
          <p className="px-2">Projects</p>
        </a>
      </nav>

      <div className="w-[70%] grid grid-cols-2 gap-4 py-2">
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={DataVis} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Data Visualization</h5>
            <p className="card-text">
              Here you can see the data represented in the form of a bar graph.
            </p>
            <a href="/homework/lab1" className="btn btn-primary">
              Visit
            </a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={Speech} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Speech Recognition </h5>
            <p className="card-text">
              A speech recognition project.
            </p>
            <a href="/assignment/speech-recognition" className="btn btn-primary">
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
