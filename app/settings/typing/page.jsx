"use client";

import { useState } from "react";
import React from "react";
import pi from "@/app/pi";
import AfterGame from "../../components/AfterGame";

const Typing = () => {
  const [content, setContent] = useState(0);
  const [after, setAfter] = useState(false);

  const checkup = (event) => {
    if (event != pi.substring(0, event.length)) {
      setAfter(pi.charAt(event.length - 1));
      return;
    }
    setContent(event.length);
  };

  return (
    <>
      <h1 className="title">Ok, Geez...</h1>
      <h2>Start typing as much digits as possible.</h2>
      <div className="threepoint">
        <p>3.</p>
        <input type="text" onChange={(e) => checkup(e.target.value)} />
      </div>
      <h2>You know {content} digits.</h2>
      {after && (
        <>
          <h2>The correct digit was {after}.</h2>
          <AfterGame />
        </>
      )}
    </>
  );
};

export default Typing;
