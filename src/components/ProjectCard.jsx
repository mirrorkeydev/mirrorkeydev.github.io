import './ProjectCard.css'

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="left-half">
        <a href={(props.site ? props.site : props.github)}>
          <img 
            src={props.img}
            alt={props.title}
            className="card-img"
          />
        </a>
      </div>
      <div className="right-half">
        <p className="card-title">{props.title}</p>
        <p className="card-subtitle">{props.subtitle}</p>
        <p className="card-body">
          {props.children}
        </p>
        {
          props.site &&
          <span> (<a href={props.site} className="card-link">Site</a>) </span>
        }
        {
          props.github &&
          <span> (<a href={props.github} className="card-link">GitHub</a>) </span>
        }
      </div>
    </div>
  )
}
