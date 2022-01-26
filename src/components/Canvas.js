import "../App.css";
import Layer1Image from "../images/Layer2Image.png";
import { Image } from "reactstrap";
const Canvas = (props) => {
  return (
    <div className="headerImage container-fluid" id="canvasId">
      <div
        className="headerContent"
        style={{
          backgroundColor: props.bgColor,
          width: "100%",
          height: "100%",
        }}
      >
        <h1
          className="apply-font px-10 m-10"
          style={{ color: props.fontColor }}
        >
          {props.MainText}
        </h1>
        <h2
          className="apply-font px-10 m-10"
          style={{ color: props.fontColor }}
        >
          {props.SecText}
        </h2>
        <img src={Layer1Image} alt="Layer1Image" className="layer1-img" />
      </div>
    </div>
  );
};

export default Canvas;
