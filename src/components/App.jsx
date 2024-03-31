import { useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import LinkButton from "./LinkButton";
import Form from "./Form";
import Footer from "./Footer";
import localStorage from "../services/localStorage";
import "../scss/App.scss";
import "../scss/components/Main.scss";

function App() {
  const [infoProject, setInfoProject] = useState(
    localStorage.get("infoProject") || {
      name: "Elegant Workspace",
      slogan: "Diseños Exclusivos",
      repo: "",
      demo: "",
      technologies: "React JS - HTML - CSS",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione`,
      autor: "Emmelie Bjôrklund",
      job: "Full stack Developer",
      image:
        "https://www.blogdelfotografo.com/wp-content/uploads/2022/01/girasol-foto-perfil.webp",
      photo:
        "https://www.blogdelfotografo.com/wp-content/uploads/2022/01/girasol-foto-perfil.webp",
    }
  );

  const [url, setUrl] = useState("");

  const handleProjectInfo = (value, id) => {
    setInfoProject({ ...infoProject, [id]: value });
    console.log(infoProject);
  };

  const onClickSave = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(infoProject),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setUrl(result.cardURL);
        console.log(result);
        if (result.success) {
          localStorage.set("infoProject", infoProject);
        }
      });
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <LinkButton textContent="Ver proyectos" />
        </section>

        <Preview infoProject={infoProject} cardUrl={url} />
        <Form
          onClickSave={onClickSave}
          onChangeValue={handleProjectInfo}
          cardUrl={url}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
