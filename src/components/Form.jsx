import Button from "./Button";
import GetAvatar from "./GetAvatar";
import CardUrl from "./CardUrl";

function Form({
  infoProject,
  onChangeValue,
  setProjectImage,
  setAvatar,
  onClickSave,
  cardUrl,
}) {
  const handleInfoProject = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    onChangeValue(value, id);
  };
  // const onChangeProject = (ev) => {
  //   setInfoProject({ ...infoProject, projectName: ev.target.value });
  // };

  // const onChangeSlogan = (ev) => {
  //   setInfoProject({ ...infoProject, slogan: ev.target.value });
  // };
  // const onChangeRepo = (ev) => {
  //   setInfoProject({ ...infoProject, repo: ev.target.value });
  // };
  // const onChangeDemo = (ev) => {
  //   setInfoProject({ ...infoProject, demo: ev.target.value });
  // };
  // const onChangeTech = (ev) => {
  //   setInfoProject({ ...infoProject, tech: ev.target.value });
  // };
  // const onChangeTitleDesc = (ev) => {
  //   setInfoProject({ ...infoProject, descriptionTitle: ev.target.value });
  // };
  // const onChangeDesc = (ev) => {
  //   setInfoProject({ ...infoProject, desc: ev.target.value });
  // };

  // const onChangeName = (ev) => {
  //   setInfoProject({ ...infoProject, name: ev.target.value });
  // };

  // const onChangeJob = (ev) => {
  //   setInfoProject({ ...infoProject, job: ev.target.value });
  // };

  // const updateAuthorPhoto = (photo) => {
  //   setAvatar(photo);
  // };
  // const updateProjectPhoto = (photo) => {
  //   setProjectImage(photo);
  // };

  const handleSaveProject = (ev) => {
    ev.preventDefault();
    onClickSave();
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
          onChange={handleInfoProject}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={handleInfoProject}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onChange={handleInfoProject}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            onChange={handleInfoProject}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="tech"
          id="tech"
          placeholder="Tecnologías"
          onChange={handleInfoProject}
        />
        <input
          className="addForm__input"
          type="text"
          name="descriptionTitle"
          id="descriptionTitle"
          placeholder="Título Descripción"
          onChange={handleInfoProject}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onChange={handleInfoProject}
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
          onChange={handleInfoProject}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={handleInfoProject}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <GetAvatar
          setAvatar={handleInfoProject}
          text="Subir foto del proyecto"
        />
        <GetAvatar
          setAvatar={handleInfoProject}
          text="Subir foto de la autora"
        />

        <Button textContent="Guardar proyectos" onClick={handleSaveProject} />
      </fieldset>
      {cardUrl && <CardUrl cardUrl={cardUrl} />}
      {console.log("card", cardUrl)}
    </form>
  );
}

export default Form;
