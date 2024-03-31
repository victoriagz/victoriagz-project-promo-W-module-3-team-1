import Button from "./Button";
import GetAvatar from "./GetAvatar";
import CardUrl from "./CardUrl";

function Form({ onChangeValue, onClickSave, cardUrl }) {
  const handleInfoProject = (event, id) => {
    if (event.target?.result) {
      onChangeValue(event.target.result, id);
    } else {
      const { value, id } = event.target;
      onChangeValue(value, id);
    }
  };

  return (
    <form
      className="addForm"
      onSubmit={(e) => {
        e.preventDefault();
        onClickSave();
      }}
    >
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
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
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
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
          name="autor"
          id="autor"
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
          updateImage={(ev) => {
            handleInfoProject(ev, "image");
          }}
          text="Subir foto del proyecto"
        />
        <GetAvatar
          updateImage={(ev) => {
            handleInfoProject(ev, "photo");
          }}
          text="Subir foto de la autora"
        />

        <Button type="submit" textContent="Guardar proyectos" />
      </fieldset>
      {cardUrl && <CardUrl cardUrl={cardUrl} />}
    </form>
  );
}

export default Form;
