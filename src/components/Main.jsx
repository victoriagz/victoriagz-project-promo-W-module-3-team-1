import LinkButton from "./LinkButton";
import Preview from "./Preview";
import Form from "./Form";
import "../scss/components/Main.scss";

const Main = ({
  infoProject,
  updateAvatar,
  setInfoProject,
  avatar,
  updateProjectImage,
  projectImage,
}) => {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <LinkButton textContent="Ver proyectos" />
      </section>

      <Preview infoProject={infoProject} avatar={avatar} />

      <Form
        setInfoProject={setInfoProject}
        infoProject={infoProject}
        updateAvatar={updateAvatar}
        updateProjectImage={updateProjectImage}
        avatar={avatar}
        projectImage={projectImage}
      />
    </main>
  );
};

export default Main;
