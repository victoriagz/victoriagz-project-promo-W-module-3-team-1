import defaultAvatar from "../images/avatar.webp";
import defaultProject from "../images/ebook-example.jpg";
import "../scss/components/Preview.scss";

function Preview({ infoProject, projectImage, avatar }) {
  const projectAvatar = avatar || defaultAvatar;
  const projectPreviewImage = projectImage || defaultProject;

  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{
          backgroundImage: `url(${projectPreviewImage})`,
        }}
      ></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal project card
          </span>
        </h2>

        <div className="card__author">
          <div
            className="card__authorPhoto"
            style={{
              backgroundImage: `url(${projectAvatar})`,
            }}
          ></div>
          <p className="card__job">{infoProject.job}</p>
          <h3 className="card__name">{infoProject.name}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{infoProject.projectName}</h3>
          <p className="card__slogan">{infoProject.slogan}</p>
          <h3 className="card__descriptionTitle">
            {infoProject.descriptionTitle}
          </h3>
          <p className="card__description">{infoProject.desc}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{infoProject.tech}</p>

            <a
              className="icon icon__www"
              href={infoProject.demo}
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={infoProject.repo}
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Preview;
