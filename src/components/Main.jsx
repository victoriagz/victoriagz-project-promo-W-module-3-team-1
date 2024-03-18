import LinkButton from './LinkButton';
import Preview from './Preview';
import Form from './Form';
import '../scss/components/Main.scss';
import { useState } from 'react';

const Main = () => {
  const [projectName, setProjectName] = useState('Elegant Workspace');
  const [slogan, setSlogan] = useState('Diseños Exclusivos');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [tech, setTech] = useState('React JS - HTML - CSS');
  const [descriptionTitle, setDescriptionTitle] = useState(
    'Product description'
  );
  const [description, setDescription] =
    useState(`Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Nulla, quos? Itaque, molestias eveniet laudantium adipisci
    vitae ratione`);
  const [name, setName] = useState('Emmelie Bjôrklund');
  const [job, setJob] = useState('Full stack Developer');

  const handleChangeProject = (value) => {
    setProjectName(value);
  };
  
  const handleChangeSlogan = (value) => {
    setSlogan(value);
  };

  const handleChangeDemo = (value) => {
    setDemo(value);
  };

  const handleChangeRepo = (value) => {
    setRepo(value);
  };

  const handleChangeTech = (value) => {
    setTech(value);
  };

  const handleChangeTitleDesc = (value) => {
    setDescriptionTitle(value);
  };

  const handleChangeDescription = (value) => {
    setDescription(value);
  };

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleChangeJob = (value) => {
    setJob(value);
  };

  return (
    <main className='main'>
      <section className='hero'>
        <h2 className='title'>Proyectos molones</h2>
        <p className='hero__text'>
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <LinkButton textContent='Ver proyectos' />
      </section>

      <Preview job = {job} 
      name = {name}
      projectName = {projectName}
      slogan = {slogan}
      descriptionTitle = {descriptionTitle}
      description = {description}
      tech = {tech}
      demo = {demo}
      repo = {repo}
      />


      <Form 
      handleChangeProject = {handleChangeProject} handleChangeSlogan = {handleChangeSlogan}
      handleChangeDemo = {handleChangeDemo}
      handleChangeRepo = {handleChangeRepo}
      handleChangeTech = {handleChangeTech}
      handleChangeTitleDesc = {handleChangeTitleDesc}
      handleChangeDescription = {handleChangeDescription}
      handleChangeName = {handleChangeName}
      handleChangeJob = {handleChangeJob}
      

      />

    </main>
  );
};

export default Main;
