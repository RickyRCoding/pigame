"use client";

import React, { useState } from "react";
import Link from "next/link";

const RadioButtons = () => {
  const [type, setType] = useState("typing");

  return (
    <>
      <div className="selection">
        <div>
          <input
            type="radio"
            id="typing"
            name="type"
            className="radio"
            value="typing"
            defaultChecked
            onChange={(etv) => setType(event.target.value)}
          />
          <label htmlFor="type"> Type in digits</label>
        </div>
        <div>
          <input
            type="radio"
            id="ask"
            name="type"
            value="ask"
            className="radio"
            onChange={(etv) => setType(event.target.value)}
          />
          <label htmlFor="ask"> Ask me a digit</label>
        </div>
      </div>
      <Link href={`/settings/${type}`} className="button">
        Let's start for god's sake!
      </Link>
    </>
  );
};

export default RadioButtons;
