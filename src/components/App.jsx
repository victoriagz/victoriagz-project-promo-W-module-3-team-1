import { useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import defaultAvatar from "../images/avatar.webp";
import defaultProject from "../images/ebook-example.jpg";

import "../scss/App.scss";

function App() {
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [projectImage, setProjectImage] = useState(defaultProject);

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

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Main />

        <Form
          setInfoProject={setInfoProject}
          infoProject={infoProject}
          setUpdateAvatar={updateAvatar}
          setUpdateProject={setProjectImage}
        />
        <Preview
          infoProject={infoProject}
          avatar={avatar}
          projectImage={projectImage}
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
