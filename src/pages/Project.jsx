import { useParams } from "react-router-dom";
import BtnGitHub from "../components/BtnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import BtnPreview from "../components/BtnPreview/BtnPreview";

function Project() {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.img}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <div className="project-details__links">
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            {project.previewLink && <BtnPreview link={project.previewLink} />}
          </div>

          {project.previewLink && (
            <span>
              * ссылка на бесплатном сервисе, возможна задержка при загрузке
              стилей, скриптов или данных с сервера
            </span>
          )}
        </div>
      </div>
    </main>
  );
}

export default Project;
