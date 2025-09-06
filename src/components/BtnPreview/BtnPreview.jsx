import "./BtnPreview.css";
import previewIcon from "./preview-icon.svg";

function BtnPreview({ link }) {
  return (
    <a href={link} target="_blank" className="btn-outline btn-preview">
      <img src={previewIcon} alt="" />
      Preview Link *
    </a>
  );
}

export default BtnPreview;
