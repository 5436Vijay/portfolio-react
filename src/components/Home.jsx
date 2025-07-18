import Image from "./Image";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <h1 className="heading">
        Transforming ideas into interactive web experiences
      </h1>
      <div>
        <h2 className="name">
          Hey, I am Vijay Chaudhary <span className="emoji">👋</span>
        </h2>
        <h4 className="intro">
          I'm a Computer Science graduate with hands-on experience in building
          modern web applications using React.js, JavaScript, and Node.js. I
          enjoy solving real-world problems with elegant and scalable code.
          Currently exploring full-stack development (MERN stack) and improving
          my skills through personal projects and internships.
        </h4>
      </div>

      <Image />
    </div>
  );
};

export default Home;
