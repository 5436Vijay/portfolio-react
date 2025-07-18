const Skills = () => {
  return (
    <div>
      <div>
        <h1 className="heading">Here is my all Skills details</h1>
      </div>
      <div>
        <h2 className="skill-head">Languages</h2>
        <div>
          <img
            style={{ height: "100px", marginRight: "100px" }}
            src="https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg"
          />

          <img
            style={{ height: "70px", marginRight: "100px" }}
            src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
          />
          <img
            style={{ height: "120px" }}
            src="https://media.licdn.com/dms/image/v2/D4D12AQHYf8u60bN13w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704213633923?e=2147483647&v=beta&t=yzMJ6b30Ll_ZOpXT8BWMhbIRoupvIlDV0q1rY7wdkUs"
          />
          <div style={{ display: "flex" }}>
            <h4 style={{ marginLeft: "30px", fontSize: "20px" }}>HTML</h4>
            <h4 style={{ marginLeft: "160px", fontSize: "20px" }}>CSS</h4>
            <h4 style={{ marginLeft: "140px", fontSize: "20px" }}>
              JAVASCRIPT
            </h4>
          </div>
        </div>
        <h2 className="skill-head">Frameworks/Libraries</h2>
        <div>
          <img
            style={{ height: "100px", marginRight: "100px" }}
            src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
          />

          <img
            style={{ height: "70px", marginRight: "100px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s"
          />

          <div style={{ display: "flex" }}>
            <h4 style={{ marginLeft: "30px", fontSize: "20px" }}>REACT JS</h4>
            <h4 style={{ marginLeft: "118px", fontSize: "20px" }}>BOOTSTRAP</h4>
          </div>
        </div>
        <h2 className="skill-head">Tools</h2>
        <div>
          <img
            style={{ height: "80px", marginRight: "100px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuER1tOoBap4qZ8V7OUsbf-quqFfEjj3Jnzg&s"
          />

          <img
            style={{ height: "70px", marginRight: "100px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          />

          <div style={{ display: "flex" }}>
            <h4 style={{ marginLeft: "18px", fontSize: "20px" }}>VS CODE</h4>
            <h4 style={{ marginLeft: "110px", fontSize: "20px" }}>GITHUB</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
