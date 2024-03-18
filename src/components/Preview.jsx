
function Preview( {job, name, projectName, slogan, descriptionTitle, description, tech, demo, repo}) {
  return (
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
  )
}

export default Preview