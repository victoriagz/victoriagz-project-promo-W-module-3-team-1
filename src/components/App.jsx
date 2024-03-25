import Header from "./Header";
import Main from "./Main";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";
import "../scss/App.scss";
import defaultAvatar from "../images/avatar.webp";
import defaultProject from "../images/ebook-example.jpg";

function App() {
  const [infoProject, setInfoProject] = useState({
    projectName: "Elegant Workspace",
    slogan: "Diseños Exclusivos",
    repo: "",
    demo: "",
    tech: "React JS - HTML - CSS",
    descriptionTitle: "Product description",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Nulla, quos? Itaque, molestias eveniet laudantium adipisci
    vitae ratione`,
    name: "Emmelie Bjôrklund",
    job: "Full stack Developer",
    image: "",
  });
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [projectImage, setProjectImage] = useState(defaultProject);



  return (
    <>
      <div className="container">
        <Header />

        <Main/>
        <Preview avatar={avatar} 
        projectImage={projectImage}
        infoProject={infoProject}/>
        <Form  infoProject={infoProject}
        setAvatar={setAvatar} setProjectImage={setProjectImage}
        setInfoProject={setInfoProject}/>
        

        <Footer />
      </div>
    </>
  );
}

export default App;
