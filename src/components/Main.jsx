import LinkButton from "./LinkButton";
import Preview from "./Preview";
import Form from "./Form";
import "../scss/components/Main.scss";

const Main = ({ infoProject, updateAvatar, setInfoProject, avatar }) => {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <LinkButton textContent="Ver proyectos" />
      </section>

      <Preview
        infoProject={infoProject}
        avatar={avatar}
        image={infoProject.image}
      />

      <Form
        setInfoProject={setInfoProject}
        infoProject={infoProject}
        updateAvatar={updateAvatar}
        avatar={avatar}
      />
    </main>
  );
};

export default Main;
