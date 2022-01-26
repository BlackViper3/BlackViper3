import React, { useState } from "react";
import { Row, Container, Form, Button } from "reactstrap";
import Canvas from "./Canvas";
import "../App.css";
import SampleBg from "../images/background.png";

import * as htmlToImage from "html-to-image";
import Designform from "./Designform";

const saveAs = (blob, fileName) => {
  var elem = window.document.createElement("a");
  elem.href = blob;
  elem.download = fileName;
  elem.style = "display:none;";
  (document.body || document.documentElement).appendChild(elem);
  if (typeof elem.click === "function") {
    elem.click();
  } else {
    elem.target = "_blank";
    elem.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
  }
  URL.revokeObjectURL(elem.href);
  elem.remove();
};

const saveToPng = () => {
  var node = document.getElementById("canvasId");

  htmlToImage
    .toPng(node, { canvasWidth: 1500, canvasHeight: 500 })
    .then(function (dataUrl) {
      saveAs(dataUrl, "twitterHeader.png");
    })
    .catch((e) => {
      console.log();
    });
};

const BannerDesigner = (props) => {
  const [bgColor, setBgColor] = useState("red");
  const [fontColor, setFontColor] = useState("blue");
  const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");
  const [mainText, setMainText] = useState("This is Primary text");
  const [secText, setSecText] = useState("This is Secondary text");

  return (
    <Container>
      <Row>
        <Canvas
          bgColor={bgColor}
          fontColor={fontColor}
          bgImage={SampleBg}
          MainText={mainText}
          SecText={secText}
        />
      </Row>
      <Designform
        mainText={mainText}
        secText={secText}
        setMainText={setMainText}
        setSecText={setSecText}
        fontColor={fontColor}
        setFontColor={setFontColor}
        bgColor={bgColor}
        setBgColor={setBgColor}
        activeFontFamily={activeFontFamily}
        setActiveFontFamily={setActiveFontFamily}
      />
      <Form className="form d-flex col-md-3 mx-2 px-2 ">
        <Button
          onClick={() => {
            saveToPng();
          }}
        >
          Download
        </Button>
      </Form>
    </Container>
  );
};

export default BannerDesigner;
