import { useEffect, useState } from "react";
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
      name: "Elegant Workspace",
      slogan: "Diseños Exclusivos",
      repo: "",
      demo: "",
      technologies: "React JS - HTML - CSS",
      // descriptionTitle: "Product description",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione`,
      autor: "Emmelie Bjôrklund",
      job: "Full stack Developer",
      image:
      "https://www.google.com/search?sca_esv=6494f03cb68baf5a&rlz=1C5CHFA_enES840ES844&sxsrf=ACQVn09rHKvLlAIeVYnezRIFDFfwQ1uLaA:1711824521084&q=perros&tbm=isch&source=lnms&prmd=ivnbz&sa=X&ved=2ahUKEwiGz_yj05yFAxV8U6QEHV5lCWsQ0pQJegQIDRAB&biw=1434&bih=716&dpr=2#imgrc=UmrqAOU7A1ZfBM" ,
      photo:
      "https://www.google.com/search?sca_esv=6494f03cb68baf5a&rlz=1C5CHFA_enES840ES844&sxsrf=ACQVn09rHKvLlAIeVYnezRIFDFfwQ1uLaA:1711824521084&q=perros&tbm=isch&source=lnms&prmd=ivnbz&sa=X&ved=2ahUKEwiGz_yj05yFAxV8U6QEHV5lCWsQ0pQJegQIDRAB&biw=1434&bih=716&dpr=2#imgrc=UmrqAOU7A1ZfBM",
    }
  );
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [projectImage, setProjectImage] = useState(defaultProject);
  const [url, setUrl] = useState("");

 
  useEffect(() => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(infoProject),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => { 
         setUrl(result.cardURL);
         console.log('result', result);
        
      })
      .catch((error) => console.log(error));
  }, []);
 
 

  const handleProjectInfo = (value, id) => {
    setInfoProject({ ...infoProject, [id]: value });
    localStorage.set("infoProject", infoProject);
  };
  const handleAvatar = (value, id) => {
    setAvatar({...infoProject, [id]: value });
    localStorage.set("avatar", avatar);
  };

  const handlePhoto = (value, id) => {
    setProjectImage({...infoProject, [id]: value });
    localStorage.set("photo", projectImage);
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
          setAvatar={handleAvatar}
          setProjectImage={handlePhoto}
          onChangeValue={handleProjectInfo}
         
          cardUrl={url}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
