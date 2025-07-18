import "../styles/contact.css"


const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="heading">Here you can Find Me</h1>
      </div>
      <div>
        <div style={{marginLeft:"20px"}}>
          <img
            className="zoom"
            style={{ height: "100px", marginRight: "80px", cursor: "pointer" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbySPOVJMWqKXXDjw9zQLk4k7k7T2xDXjzsw&s"
            alt="Phone Icon"
            title="Call: +91-9837378035"
          />
          <a
            href="https://www.linkedin.com/in/vijay-chaudhary-2b30b8256/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="zoom"
              style={{ height: "90px", marginRight: "80px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
            />
          </a>
          <a
            
          >
            <img
              className="zoom"
              style={{ height: "100px", marginRight: "80px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcRLTfOp9vfUdIK3nDuxqTIOAXWZT63M4nw&s"
              alt="Mail Icon" title="Vijaychaudharyy13@gmail.com"
            />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="zoom"
              style={{ height: "90px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
