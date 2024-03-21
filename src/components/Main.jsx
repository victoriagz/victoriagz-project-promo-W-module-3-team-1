import LinkButton from "./LinkButton";
import Preview from "./Preview";
import Form from "./Form";
import "../scss/components/Main.scss";
import { useState } from "react";

const Main = () => {
  const [infoProject, setInfoProject] = useState({
    projectName: "Elegant Workspace",
    slogan: "Diseños Exclusivos",
    repo: "",
    demo: "",
    tech: "React JS - HTML - CSS",
    descriptionTitle: "Product description",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Nulla, quos? Itaque, molestias eveniet laudantium adipisci
    vitae ratione`,
    name: "Emmelie Bjôrklund",
    job: "Full stack Developer",
  });

  const handleChangeForm = (id, value) => {
    setInfoProject({ ...infoProject, [id]: value });
  };

  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <LinkButton textContent="Ver proyectos" />
      </section>

      <Preview infoProject={infoProject} />

      <Form
        handleChangeForm={handleChangeForm}
        setInfoProject={setInfoProject}
        infoProject={infoProject}
      />
    </main>
  );
};

export default Main;
