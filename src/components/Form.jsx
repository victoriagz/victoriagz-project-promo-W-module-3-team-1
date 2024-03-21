import InputButton from "./InputButton";
import Button from "./Button";
//import GetAvatar from "./GetAvatar";

function Form({ handleChangeForm, infoProject, setInfoProject }) {
  const onChangeProject = (ev) => {
    setInfoProject({ ...infoProject, projectName: ev.target.value });
  };
  const onChangeSlogan = (ev) => {
    setInfoProject({ ...infoProject, slogan: ev.target.value });
  };
  const onChangeRepo = (ev) => {
    setInfoProject({ ...infoProject, repo: ev.target.value });
  };
  const onChangeDemo = (ev) => {
    setInfoProject({ ...infoProject, demo: ev.target.value });
  };
  const onChangeTech = (ev) => {
    setInfoProject({ ...infoProject, tech: ev.target.value });
  };
  const onChangeTitleDesc = (ev) => {
    setInfoProject({ ...infoProject, descriptionTitle: ev.target.value });
  };
  const onChangeDesc = (ev) => {
    setInfoProject({ ...infoProject, desc: ev.target.value });
  };

  const onChangeName = (ev) => {
    setInfoProject({ ...infoProject, name: ev.target.value });
  };

  const onChangeJob = (ev) => {
    setInfoProject({ ...infoProject, job: ev.target.value });
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="projectName"
          id="projectName"
          placeholder="Nombre del proyecto"
          onChange={onChangeProject}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={onChangeSlogan}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onChange={onChangeRepo}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            onChange={onChangeDemo}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onChange={onChangeTech}
        />
        <input
          className="addForm__input"
          type="text"
          name="descriptionTitle"
          id="descriptionTitle"
          placeholder="Título Descripción"
          onChange={onChangeTitleDesc}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onChange={onChangeDesc}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          onChange={onChangeName}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={onChangeJob}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <InputButton
          textContent="Subir foto del proyecto"
          name="image"
          id="image"
        />
        <InputButton
          textContent="Subir foto de la autora"
          name="photo"
          id="photo"
        />

        <Button textContent="Guardar proyectos" />
      </fieldset>
    </form>
  );
}

export default Form;
