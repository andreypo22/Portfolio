import "./BtnGitHub.css";
import gitHubIcon from "./gitHub-black.svg";

function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
}

export default BtnGitHub;
