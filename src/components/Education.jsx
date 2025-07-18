

import "../styles/education.css"

const Education = () => {
  return (
    <div>
      <div>
        <h1
          
          className="heading"
        >
          Here is my all Academic details
        </h1>
      </div>

      <div
        style={{
          marginLeft: "20px",
        }}
      >
        <h2 className="head">Bachelor of Technology</h2>
        <h4>IMS Engineering College, Ghaziabad</h4>
        <h5>(65.10 %)</h5>
        <h5> December 2020 - July 2024</h5>
        <br />

        <h2 className="head">Intermediate</h2>
        <h4> Silver Bells Public School, Shamli</h4>
        <h5>(74.8 %)</h5>
        <h5> April 2018 - March 2020</h5>
        <br />

        <h2 className="head">High School</h2>
        <h4> ST.R.C Scientific Convent School, Kairana</h4>
        <h5>(70 %)</h5>
        <h5> April 2017 - March 2018</h5>
      </div>
    </div>
  );
};

export default Education;
