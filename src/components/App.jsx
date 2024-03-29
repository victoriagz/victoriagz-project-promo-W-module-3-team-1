import { useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import LinkButton from "./LinkButton";
import Form from "./Form";
import Footer from "./Footer";
import localStorage from "../services/localStorage";
import "../scss/App.scss";
import "../scss/components/Main.scss";
import defaultAvatar from "../images/avatar.webp";
import defaultProject from "../images/ebook-example.jpg";

function App() {
  const [infoProject, setInfoProject] = useState(
    localStorage.get("infoProject") || {
      projectName: "Elegant Workspace",
      slogan: "Diseños Exclusivos",
      repo: "",
      demo: "",
      tech: "React JS - HTML - CSS",
      descriptionTitle: "Product description",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione`,
      name: "Emmelie Bjôrklund",
      job: "Full stack Developer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Beautiful_landscape.JPG",
      photo:
        "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg",
    }
  );
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [projectImage, setProjectImage] = useState(defaultProject);
  const [url, setUrl] = useState("");

  const handleCreateProject = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(infoProject),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setUrl(result.cardURL);
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   localStorage.set("infoProject", infoProject);
  // }, [infoProject]);

  const handleProjectInfo = (value, id) => {
    setInfoProject({ ...infoProject, [id]: value });
    localStorage.set("infoProject", infoProject);
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

        <Preview
          avatar={avatar}
          projectImage={projectImage}
          infoProject={infoProject}
          cardUrl={url}
        />
        <Form
          setAvatar={setAvatar}
          setProjectImage={setProjectImage}
          onChangeValue={handleProjectInfo}
          onClickSave={handleCreateProject}
          cardUrl={url}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
