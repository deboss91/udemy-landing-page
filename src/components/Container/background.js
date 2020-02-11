import React from "react";
import "../Container/background.css";
import newsearch from "./newsearch.png";
// import bgudemy from "./bgudemy.jpeg";

const Body = () => {
  return (
    <div className="sec">
      <div className="sec2">
        <div className="sec3">
          <div className="divh1">
            <h1 className="h1">Learning is a lifestyle</h1>
          </div>
          <div className="divh5">
            <h5 className="h5">
              Sale ends tonight. Celebrate lifelong <br />
              learning with courses for as low as $11.99.
            </h5>
          </div>
        </div>

        <img
          className="search2"
          src={newsearch}
          height="20px"
          width="20px"
          alt="/"
        />
        <input
          className="secInput"
          type="text"
          placeholder="what do you want to learn"
          height="30px"
          width="30px"
        />
      </div>
    </div>
  );
};
export default Body;
