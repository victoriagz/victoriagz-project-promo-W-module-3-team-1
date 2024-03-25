import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
<<<<<<< Updated upstream
=======
import GetAvatar from "./GetAvatar";
import { useState } from "react";
>>>>>>> Stashed changes

import "../scss/App.scss";

function App() {
<<<<<<< Updated upstream
=======
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
  const [avatar, setAvatar] = useState("");

  const changeAvatar = (avatar) => {
    setAvatar(avatar);
  };

  // const handleChangeForm = (id, value) => {
  //   setInfoProject({ ...infoProject, [id]: value });
  // };
>>>>>>> Stashed changes

  return (
    <>
      <div className="container">
        <Header />

<<<<<<< Updated upstream
        <Main />
=======
        <Main
          /*handleChangeForm= {handleChangeForm}*/ setInfoProject={
            setInfoProject
          }
          infoProject={infoProject}
          updateAvatar={changeAvatar}
          avatar={avatar}
        />
>>>>>>> Stashed changes

        <Footer />
      </div>
    </>
  );
}

export default App;
