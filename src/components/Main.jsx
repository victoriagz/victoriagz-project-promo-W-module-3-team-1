import LinkButton from './LinkButton';
import Button from './Button';
import InputButton from './InputButton';
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

  const handleChangeProject = (event) => {
    const projectValue = event.target.value;
    setProjectName(projectValue);
  };
  const handleChangeSlogan = (event) => {
    const sloganValue = event.target.value;
    setSlogan(sloganValue);
  };

  const handleChangeDemo = (event) => {
    const demoValue = event.target.value;
    setDemo(demoValue);
  };

  const handleChangeRepo = (event) => {
    const repoValue = event.target.value;
    setRepo(repoValue);
  };

  const handleChangeTech = (event) => {
    const TechValue = event.target.value;
    setTech(TechValue);
  };
  const handleChangeTitleDesc = (event) => {
    const descriptionTitleValue = event.target.value;
    setDescriptionTitle(descriptionTitleValue);
  };

  const handleChangeDescription = (event) => {
    const descriptionValue = event.target.value;
    setDescription(descriptionValue);
  };

  const handleChangeName = (event) => {
    const NameValue = event.target.value;
    setName(NameValue);
  };

  const handleChangeJob = (event) => {
    const jobValue = event.target.value;
    setJob(jobValue);
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

      <section className='preview'>
        <div className='projectImage'></div>
        <article className='card'>
          <h2 className='card__projectTitle'>
            <span className='card__projectTitle--text'>
              Personal project card
            </span>
          </h2>

          <div className='card__author'>
            <div className='card__authorPhoto'></div>
            <p className='card__job'>{job}</p>
            <h3 className='card__name'>{name}</h3>
          </div>

          <div className='card__project'>
            <h3 className='card__name'>{projectName}</h3>
            <p className='card__slogan'>{slogan}</p>
            <h3 className='card__descriptionTitle'>{descriptionTitle}</h3>
            <p className='card__description'>{description}</p>

            <div className='card__technicalInfo'>
              <p className='card__technologies'>{tech}</p>

              <a
                className='icon icon__www'
                href={demo}
                title='Haz click para ver el proyecto online'
              >
                Web link
              </a>
              <a
                className='icon icon__github'
                href={repo}
                title='Haz click para ver el código del proyecto'
              >
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
      <form className='addForm'>
        <h2 className='title'>Información</h2>
        <fieldset className='addForm__group'>
          <legend className='addForm__title'>
            Cuéntanos sobre el proyecto
          </legend>
          <input
            className='addForm__input'
            type='text'
            name='name'
            id='name'
            placeholder='Nombre del proyecto'
            onChange={handleChangeProject}
          />
          <input
            className='addForm__input'
            type='text'
            name='slogan'
            id='slogan'
            placeholder='Slogan'
            onChange={handleChangeSlogan}
          />
          <div className='addForm__2col'>
            <input
              className='addForm__input'
              type='url'
              name='repo'
              id='repo'
              placeholder='Repositorio'
              onChange={handleChangeRepo}
            />
            <input
              className='addForm__input'
              type='url'
              name='demo'
              id='demo'
              placeholder='Demo'
              onChange={handleChangeDemo}
            />
          </div>
          <input
            className='addForm__input'
            type='text'
            name='technologies'
            id='technologies'
            placeholder='Tecnologías'
            onChange={handleChangeTech}
          />
          <input
            className='addForm__input'
            type='text'
            name='descriptionTitle'
            id='descriptionTitle'
            placeholder='Título Descripción'
            onChange={handleChangeTitleDesc}
          />
          <textarea
            className='addForm__input'
            type='text'
            name='desc'
            id='desc'
            placeholder='Descripción'
            rows='5'
            onChange={handleChangeDescription}
          ></textarea>
        </fieldset>

        <fieldset className='addForm__group'>
          <legend className='addForm__title'>Cuéntanos sobre la autora</legend>
          <input
            className='addForm__input'
            type='text'
            name='autor'
            id='autor'
            placeholder='Nombre'
            onChange={handleChangeName}
          />
          <input
            className='addForm__input'
            type='text'
            name='job'
            id='job'
            placeholder='Trabajo'
            onChange={handleChangeJob}
          />
        </fieldset>

        <fieldset className='addForm__group--upload'>
          <InputButton
            textContent='Subir foto del proyecto'
            name='image'
            id='image'
          />
          <InputButton
            textContent='Subir foto de la autora'
            name='photo'
            id='photo'
          />

          <Button textContent='Guardar proyectos' />
        </fieldset>
      </form>
    </main>
  );
};

export default Main;
